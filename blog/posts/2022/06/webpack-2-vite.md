---
layout: Post
title: 供应商页面拆分与升级
subtitle: 踩坑记
date: 2022-06-24
useHeaderImage: true
headerImage: /img/_post/presenter-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - 讲演
---

## 坑

```bash
下午4:59:53 [vite] warning:
/Users/h/w/supplier-op/src/router/filter.js
1  |  export default function (view) {
2  |      return (resovle) => import(
3  |          `@/views/${view}.vue`
   |          ^
4  |        ).then(resovle)
5  |  }
The above dynamic import cannot be analyzed by vite.
See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations for supported dynamic import formats. If this is intended to be left as-is, you can use the /* @vite-ignore */ comment inside the import() call to suppress this warning.

  Plugin: vite:import-analysis
  File: /Users/h/w/supplier-op/src/router/filter.jsg
下午5:02:39 [vite]
下午5:02:48 [vite] page reload src/plugins/index.js
```

---

```
[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "placement"
```

---

升级 Vue3

`Object.defineProperty` to `Proxy`

`Vue` to `createApp`

---

Element-plus

---

新的 icons 解决方案

---

新的 CSS 组织方式

```html
<div w-screen h-screen flex justify-center items-center></div>
<div class="container panel-center item-center"></div>
```

---

```bash
server {
    listen 80;
    server_name supply.op.baoxiaohe.fun;
    index index.html;
    location / {
        root /home/baoxiaohe/sites/bxh-supplier;
    }


    location ~* /rabbitmq/api/(.*?)/(.*) {
        proxy_pass http://127.0.0.1:15672/api/$1/%2F/$2?$query_string;
        proxy_buffering                    off;
        proxy_set_header Host              $http_host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location ~* /rabbitmq/(.*) {
        rewrite ^/rabbitmq/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:15672;
        proxy_buffering                    off;
        proxy_set_header Host              $http_host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

	  location ^~ /api/v2/ {
	      include snippets/proxy.conf;
		    proxy_pass http://bxh-apiv2-dev2/;
	  }

	  location /admin/ {
		    include snippets/proxy.conf;
		    # proxy_pass http://bxh-admin-release/;
		    proxy_pass http://127.0.0.1:7003/;
	  }
    access_log /var/log/nginx/supply.baoxiaohe-access.log;
    error_log /var/log/nginx/supply.baoxiaohe-error.log;
}
```

```bash
2022/06/30 14:58:18 [error] 3690692#3690692: *475376 connect() failed (111: Connection refused) while connecting to upstream, client: 122.233.188.207, server: supply.baoxiaohe.fun, request: "GET /admin/captcha_code HTTP/1.1", upstream: "http://127.0.0.1:7003/captcha_code", host: "supply.baoxiaohe.fun", referrer: "http://supply.baoxiaohe.fun/"
```

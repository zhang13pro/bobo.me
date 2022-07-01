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

---

完整的 Nginx 配置

```bash
server {
    listen 80;
    server_name supply.baoxiaohe.com;
    location / {
        return 302 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    server_name supply.baoxiaohe.com;
    index index.html;
    ssl_certificate_key /etc/nginx/ssl/supply.baoxiaohe.com.key;
    ssl_certificate /etc/nginx/ssl/supply.baoxiaohe.com.pem;
    include snippets/ssl.conf;
    include snippets/prerender.conf;

    location / {
        root /home/baoxiaohe/sites/bxh-supplier;
    }

	location /admin/ {
		include snippets/proxy.conf;
        proxy_pass http://bxh-admin-release/;
	}

    access_log /var/log/nginx/supply.baoxiaohe-access.log;
    error_log /var/log/nginx/supply.baoxiaohe-error.log;
}
```

ssl.conf

```bash
ssl_session_cache shared:le_nginx_SSL:1m;
ssl_session_timeout 1440m;
ssl_protocols TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;
ssl_ciphers "ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS";
ssl_stapling on;
ssl_stapling_verify on;
```

prerender.conf

```bash
location @prerender {
    set $prerender 0;
    if ($http_user_agent ~* "bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp") {
        set $prerender 1;
    }
    if ($args ~ "_escaped_fragment_") {
        set $prerender 1;
    }
    if ($http_user_agent ~ "Prerender") {
        set $prerender 0;
    }
    if ($uri ~* "\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)") {
        set $prerender 0;
    }

    if ($prerender = 1) {
        set $prerender "127.0.0.1:3000";
        rewrite .* /$scheme://$host$request_uri? break;
        proxy_pass http://$prerender;
    }

    if ($prerender = 0) {
        rewrite .* /index.html break;
    }
}

location @seo {
    if ($http_user_agent ~* "bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp") {
        proxy_pass http://127.0.0.1:9527;
    }
    rewrite .* /index.html break;
}
```

proxy.conf

```bash
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_read_timeout 120;
```

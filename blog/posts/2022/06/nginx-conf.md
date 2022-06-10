---
layout: Post
title: Nginx 配置
subtitle: 代理、映射
date: 2022-06-10
useHeaderImage: false
headerImage: /img/_post/moyu-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - 摸鱼
---

`/etc/nginx/sites-enabled`

```bash
server {
	listen 80;
	server_name op.tools.baoxiaohe.com;
	location / {
		return 302 https://$host$request_uri;
	}
}

server {
	listen 443 ssl http2;
	server_name op.tools.baoxiaohe.com;
	index index.html;
	#ssl_certificate_key /etc/nginx/certs/op01.baoxiaohe.com.key;
	#ssl_certificate /etc/nginx/certs/op01.baoxiaohe.com.crt;

        ssl_certificate_key /etc/nginx/ssl/op.tools.baoxiaohe.com.key;
        ssl_certificate /etc/nginx/ssl/op.tools.baoxiaohe.com.full.pem;

        include snippets/ssl.conf;
	include snippets/prerender.conf;

	location / {
		root /home/baoxiaohe/sites/bxh-management;
		try_files $uri index.html /index.html @rewrites;
	}
	location ^~ /admin/ {
		include snippets/proxy.conf;
		proxy_pass http://bxh-admin-service/;
	}
	location ^~ /api/v2/ {
		include snippets/proxy.conf;
		proxy_pass http://bxh-servers/;
	}
        # location = /api/v2/project/render/bgimage {
          #      include snippets/proxy.conf;
          #      proxy_pass http://bxh-servers-canary/;
        #}
	location ^~ /api/enterprise/ {
		include snippets/proxy.conf;
		proxy_pass http://enterprise-servers/;
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
	location = /wecom/ping {
		include snippets/proxy.conf;
		proxy_pass http://tools02.ali.baoxiaohe.com:3001;
	}
	location ~ ^/(api|contrab) {
		include snippets/proxy.conf;
		proxy_pass http://bxh-servers-v1;
	}
	location @rewrites {
		rewrite ^(.+)$ /index.html last;
	}

	access_log /var/log/nginx/op-tools-baoxiaohe-access.log main;
	error_log /var/log/nginx/op-tools-baoxiaohe-error.log;
}
```

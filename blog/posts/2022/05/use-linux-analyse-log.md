---
layout: Post
title: 利用 Linux 指令分析日志
subtitle: 编程不是科学，编程是手艺
date: 2022-05-30
headerImage: /img/_post/linux-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - Linux
---

## Can?

[日志](https://raw.githubusercontent.com/ramroll/lagou-os/main/access.log)分析。利用

- `top` 查看机器负载
- `ls -l index.html --block-size=M` 查看文件大小

## How?

- use `less` instead of `cat`

## PV

Page View，页面访问次数

- `wc -l` 统计整体的 PV

按照天数统计 `awk '{print substr($4,2,11)}' access.log | sort | uniq -c`

awk 是处理文本的 Domain Specific Language，$4 指文本第四列，也就是日期。

## UV

Uniq Visitor，访问人数

`awk '{print $1}' access.log | sort | uniq wc -l`

`wc -l` 查看条数

分析每天的 UV ：

```bash
#!/usr/bin/bash
awk '{print substr($4, 2, 11) " " $1}' access.log |\
	sort | uniq |\
	awk '{uv[$1]++;next}END{for (ip in uv) print ip, uv[ip]}'
```

- awk DSL
- 拼接第四列日期和第一列 `ip`
- 排序去重
- next 跳转下一行
- END 触发器，后面的语句最后执行

## More

1. 访问量 Top 前三的网页

```bash
awk '{print $7}' access.log | sort | uniq -c | sort -fr | head -3
```

2. 分组统计哪些终端访问了网站

```bash
awk -F\" '{print $6}' access.log | sort | uniq -c | sort -fr
```

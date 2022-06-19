---
layout: Post
title: Linux 常用命令
subtitle: 好记性不如烂笔头
date: 2022-06-19
headerImage: /img/_post/2022/06/commands.png
headerMask: rgb(14, 21, 5, .5)
tags:
  - Linux
---

## 端口

查询端口占用 and kill it

```bash
lsof -i:portId
kill -9 PID
```

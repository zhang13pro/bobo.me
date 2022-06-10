---
layout: Post
title: fish 安装与配置
subtitle: a smart and user-friendly command line shell for Linux, macOS
date: 2022-06-02
useHeaderImage: false
headerImage: /img/_post/moyu-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - 摸鱼
---

Mac 系统先 install Homebrew with

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

then run

```bash
brew install fish
```

install Oh My Fish with

```fish
curl -L https://get.oh-my.fish | fish
```

install theme for fish

```omf
omf theme
omf install beloglazov
```

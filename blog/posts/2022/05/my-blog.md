---
layout: Post
title: Create a new Blog Again
subtitle: 创建、配置与自动部署
date: 2022-05-29
useHeaderImage: true
headerImage: /img/_post/moyu-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - 摸鱼
---

虽然已经有两个博客了，

- [Blog style powered by Docusaurus2](https://13pro.vercel.app/)
- [Docs style powered by Vuepress2](https://13press.vercel.app/)

但是当我看到 [vuepress-theme-gungnir](https://v2-vuepress-theme-gungnir.vercel.app/) 时。我又有挖新坑的冲动了，一直就想尝试[黄玄](http://huangxuan.me/)博客的风格，想着用 Vuepress2 重构下大佬的博客，顺便学习下 Vue3 & TypeScript。看来不止我一个人有这样的想法，不同的是人家已经实现了。~~是的，我承认我又菜又懒~~，虽然不符合 100% 的预期，但技术选型和风格都很 Nice。

所以有空就去提提 [PR](https://github.com/Renovamen/vuepress-theme-gungnir/issues) 啊喂！

## Github Actions

利用 Github 提供的 Actions 服务，懒人一下子就不用管构建&部署了哈哈：

```yaml
name: build-and-deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  # job.id
  cache-and-install:
    runs-on: ubuntu-latest

    env:
      NODE_VERSION: "16"

    # more information https://github.com/marketplace?type=actions
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 7

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build site
        run: pnpm build

      - name: Vercel Deploy
        uses: amondnet/vercel-action@v20
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }} # Optional
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID}}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID}}
          working-directory: blog/.vuepress/dist
          vercel-args: "--prod" # Optional
```

所以部署成功了 🎉[Blog style powered by Vuepress2](https://13blog.vercel.app/)

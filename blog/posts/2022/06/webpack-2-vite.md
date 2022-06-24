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
  File: /Users/h/w/supplier-op/src/router/filter.js
下午5:02:39 [vite]
下午5:02:48 [vite] page reload src/plugins/index.js
```

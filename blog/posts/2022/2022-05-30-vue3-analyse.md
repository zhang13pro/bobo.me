---
layout: Post
title: Vue3 原理解析
subtitle: Coding is easy,coding is what i do
date: 2022-05-30
useHeaderImage: true
headerImage: /img/_post/evanyou.jpeg
headerMask: rgb(14, 21, 5, .5)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Vue.js
---

```vue
<script setup lang="ts">
import { reactive, computed } from "vue";

const state = reactive({
  count: 0,
  double: computed((_) => state.count * 2),
});

function increment() {
  state.count++;
}
</script>

<template>
  <button @click="increment">
    Count is {{ state.count }}, double is {{ state.double }}
  </button>
</template>
```

所以，setup 返回的值为什么能被 template 读取？让我们回顾下 Vue@2 是怎么做的吧。

我们也许会这样写：

```js
export default{
  props: {}
  data(){
    return {}
  }
  methods: {}
  computed(){}
}
```

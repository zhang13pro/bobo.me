---
layout: Post
title: Vue3 原理解析
subtitle: Coding is easy,coding is what i do
date: 2022-06-02
useHeaderImage: true
headerImage: /img/_post/evanyou.jpeg
headerMask: rgb(14, 21, 5, .5)
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
  data() {
    return {
      count: 0,
    }
  }
  methods: {
    increment() {
      return this.count * 2
    }
  }
  computed: {}
}
```

Vue2 会在 init 阶段处理这些 options，将定义的变量添加到组件实例上，template 编译成 render 函数时，内部通过 `with(this) {}` 语法访问组件实例中的变量。

Vue3 渲染 vnode 过程：

```js
const mountComponent = (
  initialVNode,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  isSVG,
  optimized
) => {
  // 创建组件实例
  const instance = (initialVNode.component = createComponentInstance(
    initialVNode,
    parentComponent,
    parentSuspense
  ));

  // 设置组件实例
  setupComponent(instance);

  // 设置并运行带副作用的渲染函数
  setupRenderEffect(
    instance,
    initialVNode,
    container,
    anchor,
    parentSuspense,
    isSVG,
    optimized
  );
};
```

createComponentInstance 流程：

```js
function createComponentInstance(vnode, parent, suspense) {
  // 继承父组件实例上的 appContext，如果是根组件，则直接从根 vnode 中取。
  const appContext =
    (parent ? parent.appContext : vnode.appContext) || emptyAppContext;

  const instance = {
    // 组件唯一 id
    uid: uid++,
    // 组件 vnode
    vnode,
    // 父组件实例
    parent,
    // app 上下文
    appContext,
    // vnode 节点类型
    type: vnode.type,
    // 根组件实例
    root: null,
    // 新的组件 vnode
    next: null,
    // 子节点 vnode
    subTree: null,
    // 带副作用更新函数
    update: null,
    // 渲染函数
    render: null,
    // 渲染上下文代理
    proxy: null,
    // 带有 with 区块的渲染上下文代理
    withProxy: null,
    // 响应式相关对象
    effects: null,
    // 依赖注入相关
    provides: parent ? parent.provides : Object.create(appContext.provides),
    // 渲染代理的属性访问缓存
    accessCache: null,
    // 渲染缓存
    renderCache: [],
    // 渲染上下文
    ctx: EMPTY_OBJ,
    // data 数据
    data: EMPTY_OBJ,
    // props 数据
    props: EMPTY_OBJ,
    // 普通属性
    attrs: EMPTY_OBJ,
    // 插槽相关
    slots: EMPTY_OBJ,
    // 组件或者 DOM 的 ref 引用
    refs: EMPTY_OBJ,
    // setup 函数返回的响应式结果
    setupState: EMPTY_OBJ,
    // setup 函数上下文数据
    setupContext: null,
    // 注册的组件
    components: Object.create(appContext.components),
    // 注册的指令
    directives: Object.create(appContext.directives),
    // suspense 相关
    suspense,
    // suspense 异步依赖
    asyncDep: null,
    // suspense 异步依赖是否都已处理
    asyncResolved: false,
    // 是否挂载
    isMounted: false,
    // 是否卸载
    isUnmounted: false,
    // 是否激活
    isDeactivated: false,
    // 生命周期，before create
    bc: null,
    // 生命周期，created
    c: null,
    // 生命周期，before mount
    bm: null,
    // 生命周期，mounted
    m: null,
    // 生命周期，before update
    bu: null,
    // 生命周期，updated
    u: null,
    // 生命周期，unmounted
    um: null,
    // 生命周期，before unmount
    bum: null,
    // 生命周期, deactivated
    da: null,
    // 生命周期 activated
    a: null,
    // 生命周期 render triggered
    rtg: null,
    // 生命周期 render tracked
    rtc: null,
    // 生命周期 error captured
    ec: null,
    // 派发事件方法
    emit: null,
  };

  // 初始化渲染上下文
  instance.ctx = { _: instance };

  // 初始化根组件指针
  instance.root = parent ? parent.root : instance;

  // 初始化派发事件方法
  instance.emit = emit.bind(null, instance);

  return instance;
}
```

setupComponent 流程：

```js
function setupComponent(instance, isSSR = false) {
  const { props, children, shapeFlag } = instance.vnode;
  // 判断是否是一个有状态的组件
  const isStateful = shapeFlag & 4;

  // 初始化 props
  initProps(instance, props, isStateful, isSSR);
  // 初始化 插槽
  initSlots(instance, children);

  // 设置有状态的组件实例
  const setupResult = isStateful
    ? setupStatefulComponent(instance, isSSR)
    : undefined;

  return setupResult;
}
```

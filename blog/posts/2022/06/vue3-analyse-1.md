---
layout: Post
title: Vue3 原理解析Ⅰ
subtitle: 组件挂载与渲染
date: 2022-06-02
useHeaderImage: true
catalog: true
headerImage: /img/_post/evanyou.jpeg
headerMask: rgb(14, 21, 5, .5)
tags:
  - Vue.js
---

Vue 的核心思想之一是万物皆组件，事实上，我们开发绝大多数情况下也是写组件。通过模板渲染和数据抽象进行组件化开发，数据变化后组件会自动重新渲染，业务开发从 DOM 中抽离，只需要关注数据。这就是**数据驱动视图**的魔力。

<!-- more -->

那么问题来了：

==Q1:== 数据变了组件为什么会重新渲染？

首先明确一点，VirturlDOM 并没有取代 DOM，vnode 仍然要转换成 DOM 显示在浏览器端。第二个问题：

==Q2:== 组件怎么转化成 DOM？

1.  create vnode
2.  render vnode
3.  generate DOM

在 Vue.js 3.0 中，初始化一个应用的方式如下

```js
import { createApp } from "vue";
import App from "./app";

createApp(App).mount("#app");
```

❓ 就这么简单就挂载好了，==Q3:== mount 为什么只需要传一个字符串选择器就可以？

## createApp func

createApp 做了两件事

- 创建 app 对象
- 重写 mount 方法

```js {3,7}
const createApp = (...args) => {
  // 创建 app 对象
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;

  // 重写 mount 方法
  app.mount = (containerOrSelector) => {};

  return app;
};
```

==Q4:== 为什么要重写 mount 方法？

## ensureRenderer func

ensureRenderer 函数创建渲染对象

```js {30}
// 渲染相关的一些配置，比如更新属性的方法，操作 DOM 的方法
const rendererOptions = {
  patchProp,
  ...nodeOps,
};
let renderer;

// 延时创建渲染器，当用户只依赖响应式包的时候，可以通过 tree-shaking 移除核心渲染逻辑相关的代码
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}

function createRenderer(options) {
  return baseCreateRenderer(options);
}

function baseCreateRenderer(options) {
  function render(vnode, container) {
    // 组件渲染的核心逻辑
  }

  return {
    render,
    createApp: createAppAPI(render),
  };
}

function createAppAPI(render) {
  // createApp createApp 方法接受的两个参数：根组件的对象和 prop
  return function createApp(rootComponent, rootProps = null) {
    const app = {
      _component: rootComponent,
      _props: rootProps,
      mount(rootContainer) {
        // 创建根组件的 vnode
        const vnode = createVNode(rootComponent, rootProps);
        // 利用渲染器渲染 vnode
        render(vnode, rootContainer);
        app._container = rootContainer;

        return vnode.component.proxy;
      },
    };

    return app;
  };
}
```

createAppAPI 返回 createApp func，返回包含 mount func 的 app 对象。用来挂载根组件。

可以看到，Vue 大量使用了闭包，call mount func 时不需要传入 render，是因为 createApp 已经绑定了 createAppAPI context 的 render。

## 重写 mount

标准的组件渲染流程：

```js
mount(rootContainer) {
  // 创建根组件的 vnode
  const vnode = createVNode(rootComponent, rootProps)
  // 利用渲染器渲染 vnode
  render(vnode, rootContainer)

  app._container = rootContainer

  return vnode.component.proxy
}
```

为了跨平台渲染组件，rootContainer 应该与平台无关。需要在外部重写 mount：

```js
app.mount = (containerOrSelector) => {
  // 标准化容器
  const container = normalizeContainer(containerOrSelector);
  if (!container) return;

  const component = app._component;
  // 如组件对象没有定义 render 函数和 template 模板，则取容器的 innerHTML 作为组件模板内容
  if (!isFunction(component) && !component.render && !component.template) {
    component.template = container.innerHTML;
  }

  // 挂载前清空容器内容
  container.innerHTML = "";

  // 再调用 app.mount 的方法走标准的组件渲染流程
  return mount(container);
};
```

可以看出重写的逻辑与 Web 平台相关，单独拆分出来更加灵活，app.mount 的第一个参数就同时支持选择器字符串和 DOM 对象两种类型。

## Render: 创建 vnode 和渲染 vnode

vnode 本质是描述信息的 JavaScript 对象：==Q5:== 为什么要使用 vnode？

```js
const vnode = {
  type: "button",
  props: {
    class: "btn",
    style: {
      width: "100px",
      height: "50px",
    },
  },
  children: "click me",
};
```

`<button class='btn' style='width: 100px;height: 50px'>click me</button>`

Vue3 的 vnode 类型：

```js
const shapeFlag = isString(type)
  ? 1 /* ELEMENT */
  : isSuspense(type)
  ? 128 /* SUSPENSE */
  : isTeleport(type)
  ? 64 /* TELEPORT */
  : isObject(type)
  ? 4 /* STATEFUL_COMPONENT */
  : isFunction(type)
  ? 2 /* FUNCTIONAL_COMPONENT */
  : 0;
```

编程的本质是*数据结构 + 算法*，将数据抽象成什么数据结构本身就是重难点。

- 引入 vnode，将渲染过程抽象化
- 跨平台

还是那句话，性能不是 vnode 的原因，render to vnode 本身就存在 JavaScript 耗时。

### createVNode

```js
app.mount(){
  // ...
  const vnode = createVNode(rootComponent, rootProps);
}
```

具体实现：

```js
function createVNode(type, props = null, children = null) {
  if (props) {
    // 处理 props 相关逻辑，标准化 class 和 style
  }

  // 对 vnode 类型信息编码
  const shapeFlag = isString(type)
    ? 1 /* ELEMENT */
    : isSuspense(type)
    ? 128 /* SUSPENSE */
    : isTeleport(type)
    ? 64 /* TELEPORT */
    : isObject(type)
    ? 4 /* STATEFUL_COMPONENT */
    : isFunction(type)
    ? 2 /* FUNCTIONAL_COMPONENT */
    : 0;

  const vnode = {
    type,
    props,
    shapeFlag,
    // 一些其他属性
  };

  // 标准化子节点，把不同数据类型的 children 转成数组或者文本类型
  normalizeChildren(vnode, children);

  return vnode;
}
```

就是做了一些加工，标准化处理。

### 渲染 vnode

```js
app.mount(){
  render(vnode, rootContainer);
}

const render = (vnode, container) => {
  if (vnode == null) {
    // 销毁组件
    if (container._vnode) {
      unmount(container._vnode, null, null, true);
    }
  } else {
    // 创建或者更新组件
    patch(container._vnode || null, vnode, container);
  }

  // 缓存 vnode 节点，表示已经渲染
  container._vnode = vnode;
};
```

#### patch

```js
const patch = (
  n1,
  n2,
  container,
  anchor = null,
  parentComponent = null,
  parentSuspense = null,
  isSVG = false,
  optimized = false
) => {
  // 如果存在新旧节点, 且新旧节点类型不同，则销毁旧节点
  if (n1 && !isSameVNodeType(n1, n2)) {
    anchor = getNextHostNode(n1);

    unmount(n1, parentComponent, parentSuspense, true);

    n1 = null;
  }

  const { type, shapeFlag } = n2;

  switch (type) {
    case Text:
      // 处理文本节点

      break;

    case Comment:
      // 处理注释节点

      break;

    case Static:
      // 处理静态节点

      break;

    case Fragment:
      // 处理 Fragment 元素

      break;

    default:
      if (shapeFlag & 1 /* ELEMENT */) {
        // 处理普通 DOM 元素

        processElement(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
      } else if (shapeFlag & 6 /* COMPONENT */) {
        // 处理组件

        processComponent(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
      } else if (shapeFlag & 64 /* TELEPORT */) {
        // 处理 TELEPORT
      } else if (shapeFlag & 128 /* SUSPENSE */) {
        // 处理 SUSPENSE
      }
  }
};
```

## 参考

1. packages/runtime-dom/src/index.ts
1. packages/runtime-core/src/apiCreateApp.ts
1. packages/runtime-core/src/vnode.ts
1. packages/runtime-core/src/renderer.ts
1. packages/runtime-dom/src/nodeOps.ts

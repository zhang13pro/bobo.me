---
layout: Post
title: Linux 系统架构
subtitle: Unix 哲学
date: 2022-05-31
catalog: true
headerImage: /img/_post/linux-cover.png
headerMask: rgb(14, 21, 5, .5)
tags:
  - Linux
---

道可道，非常道；名可名，非常名。——《玄之又玄，众妙之门》

<!-- more -->

- 面向对象编程
- 函数式编程
- 子系统的拆分和组织
- 分层架构设计

## Composability

让我们看下 Vue 代码组织方式的变化：

Vue3 monorepo

```Vue3
├── packages
│   ├── compiler-core    // 编译器（平台无关），例如基础的 baseCompile 编译模版文件, baseParse生成AST
│   ├── compiler-dom     // 基于compiler-core，专为浏览器的编译模块，可以看到它基于baseCompile，baseParse，重写了compile、parse
│   ├── compiler-sfc     // 编译vue单文件组件
│   ├── compiler-ssr     // 服务端渲染编译
│   ├── reactivity-transformer
│   ├── reactivity       // vue独立的响应式模块，可以与任何框架配合,使用proxy
│   ├── runtime-core     // 与平台无关的运行时。有虚拟DOM渲染器，vue组件和各种API。可针对某个具体平台实现高阶runtime，比如自定义渲染器
│   ├── runtime-dom      // 针对浏览器的runtime。包含处理原生DOM API
│   ├── runtime-test     // 一个专门为了测试而写的轻量级 runtime。由于这个 runtime 「渲染」出的 DOM 树其实是一个 JS 对象，所以这个 runtime 可以用在所有 JS 环境里。你可以用它来测试渲染是否正确。
│   ├── server-renderer  // 服务端渲染
│   ├── sfc-playground
│   ├── shared             // 内部工具库,不暴露API
│   ├── size-check         // 简单应用，用来测试代码体积
│   ├── template-explorer  // 用于调试编译器输出的开发工具
│   └── vue-compat
│   └── vue                // 面向公众的完整版本, 包含运行时和编译器
│   ├── global.d.ts        // 类型声明文件
```

组合式设计走在去中心化的反方向。在面向对象中，我们会尽量使用组合去替代继承。因为继承是一种 Mono 的设计，一旦发生继承关系，就意味着父类和子类之间的强耦合。而组合是一种更轻量级的复用。函数式编程有 Monad 设计（单子），本质上是让事物（对象）和处理事物（计算）的函数之间可以进行组合，这样就可以最小粒度的复用函数。

## Pipeline

管道设计体现了计算的本质：一个应用的输出，对应的是另一个应用的输入。

## Refactor

当一个应用变得过于复杂的时候，就去重构这个应用，或者重新写一个应用。而不是在原有的应用上增加功能。一个应用只做一件事。控制复杂度也是软件工程的一个核心问题。

## Easy

写一个程序的时候，先用几周时间去构造一个简单的版本，如果发现复杂了，就重写它。

写程序的时候，如果一开始没有用对工具、没有分对层、没有选对算法和数据结构、没有用对设计模式，那么写程序的时候，就很容易陷入大量的调试，还会出现很多 Bug。6（Think）3（Code）1（Debug）

## Tools

有些人使用“熟练”而不是使用工具来减轻工作，即便是临时需要去构造一个工具，你也应该尽可能去尝试实现。Docker、CI/CD...

作为程序员，不仅仅需要完成工作，还要重视中间过程的==工具缔造==。造工具永远有价值！

## More

有时候，简单的算法，往往性能更高。时间复杂度只是一种增长关系，一个算法在某个场景中到底可不可行，是要以实际执行时收集数据为准的。

**数据主导规则**。自证明代码：数据结构设计得足够好，计算方法就会深刻地反映出系统的逻辑。==编程的核心是构造好的数据结构，而不是算法。==

数据结构的抽象可以深刻反映系统的本质。

- 抽象出文件描述符反应文件
- 抽象出页表反应内存
- 抽象出 Socket 反应连接——这些数据结构才是设计系统最核心的东西。

架构有自己领域的语言，比如设计模式、编程范式、数据结构。

最后，开发的过程当中，首先要把事情搞定！之后才去谈那些哲学[^1]问题。迫不得已的情况，记住——“大力出奇迹”。

[^1]: [Unix 哲学](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html)

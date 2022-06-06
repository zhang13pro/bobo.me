---
layout: Post
title: why remove time slicing from vue3
subtitle: 高复杂度、低收益、Vue3 太快
date: 2022-06-03
useHeaderImage: true
headerImage: /img/_post/evanyou.jpeg
headerMask: rgb(14, 21, 5, .5)
tags:
  - Vue.js
  - 英语
---

In web apps, "janky" updates are typically caused by a combination^结合体^ of synchronous heavy CPU time + raw DOM updates. Time slicing is an attempt at keeping the app responsive during the CPU work, but it affects only CPU work - the flush of the DOM updates must still be synchronous to ensure consistency^连贯性^ of the final DOM state.

So, imagine two types of janky updates:

The CPU work is within 16ms but the amount of raw DOM updates are huge (e.g. mounting a large amount of new DOM content). The app will still feel "janky"^卡顿^ regardless of time slicing or not.

The CPU work is so heavy that it takes longer than 16ms. This is where time slicing theoretically^理论上^ starts to become beneficial - however, HCI^人机交互^ research shows that unless it's doing animation, for normal user interactions most human won't feel the difference unless the update takes longer than 100ms.

That is to say - time slicing only becomes practically^实际地^ beneficial when there will be frequent^频繁的^ updates that would require longer than 100ms spent in pure CPU time. This is where the interesting part comes in: such a scenario^场景^ would happen much more often in React because -

React's Virtual DOM reconciliation^协调^ is inherently^天生地^ slower because of the heavy fiber architecture;

React using JSX makes its render functions inherently difficult to optimize compared to templates, which are more statically analyzable;

React hooks leaves most of the component-tree level optimization (i.e. prevent unnecessary re-renders of child components) to the developers, requiring explicit^明确的^ usage of `useMemo` in most cases. Also, whenever a React component receives the children prop, it almost always has to re-render because the children prop will always be a fresh vdom tree on each render. This means a React app using hooks will be over-re-rendering by default. What's worse, optimizations like useMemo cannot easily be auto-applied because

(1) it requires the correct deps Array and
(2) blindly adding it everywhere may block updates that should happen, similar to PureComponent. Unfortunately, most developers will be lazy and will not aggressively optimize their apps everywhere, so most React apps using hooks will be doing a lot of unnecessary CPU work.

In comparison, Vue addresses the above problem with:

Inherently simpler and therefore faster Virtual DOM reconciliation (no time-slicing -> no fiber -> less overhead)

Heavy AOT optimization by analyzing templates, solving the fundamental overhead of Virtual DOM reconciliation. Benchmark shows that for a typical piece of DOM content with approximately 1 : 4 dynamic to static content ratio, Vue 3 raw reconciliation is even faster than Svelte and spends less than 1/10 of the time in CPU than the React equivalent.

Smart component-tree level optimization via Reactivity tracking, compiling slot to functions (avoids children causing re-render), and auto-caching inline handlers (avoids inline function props causing re-render). A child component never re-renders unless it has to, without any manual optimization needed from the developer. This means for the same update, in a React app it may cause multiple components to re-render, but in Vue it most likely causes only 1 component to re-render.

So by default, a Vue 3 app will be spending so much less time CPU-bound compared to a React app, and the chance of 100+ms spent in CPU land is drastically reduced and would only be encountered in extreme cases, where the DOM will likely become the more important bottleneck anyway.

Now, time slicing, or concurrent mode brings along another problem: because the framework now schedules and coordinates all the updates, it creates a ton of extra complexity regarding priority, invalidation, re-entry etc. All the logic handling these can never be tree-shaken and this causes the runtime baseline size to bloat up. Even with Suspense and all tree-shakable features included, Vue 3's runtime is still only 1/4 the size of current React + React DOM.

Note this isn't saying concurrent mode as a whole is a bad idea. It does provide interesting new ways of dealing with a certain category of problems (in particular related to coordinating async state transitions), but time-slicing (as a sub feature of concurrent) specifically addresses a problem that is much more prominent in React than in other frameworks, at the same time creating its own costs. The trade-offs simply don't seem worthwhile for Vue 3.

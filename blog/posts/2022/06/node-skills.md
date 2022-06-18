---
layout: Post
title: Node.js 常见问题漫谈
subtitle: 代码规范、工具介绍
date: 2022-06-12
useHeaderImage: false
headerImage: /img/_post/presenter-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - 讲演
---

[@zhang13pro](https://github.com/zhang13pro)

- 案例分析
- 工具介绍

---

## 案例分析

```ts {monaco}
const Koa = require("koa");
const app = new Koa();

const requestMap = new Map();

// middleware
app.use((ctx) => {
  requestMap.set(ctx.req, ctx.uid);
});

// middleware
app.use((ctx) => {
  ctx.redis = new Redis();
});

// middleware
app.use((ctx) => {
  ctx.logger = fs.createWriteStream(`/tmp/foo-${Date.now()}.log`);
});
```

<!-- 1. WeakMap
3. inode 浪费 -->

---

```ts {monaco}
const dxfText = await this.dxfService.getDXFContent(
  projectId,
  projectOwnerId,
  modeCateName,
  scienceName,
  knifeData,
  remark,
  removeLogo
);
const yunFile = await this.qiniu.putFileFromBuffer(
  `export/dxf/temp/${uuidv4()}.dxf`,
  Buffer.from(dxfText, "utf8")
);
```

```ts {monaco}
const r = fs.createReadStream("file.txt");
const z = zlib.createGunzip();
const w = fs.createWriteStream("file.txt.gz");

r.pipe(z)
  .pipe(w)
  .on((err) => {
    console.error("Pipeline failed", err);
  });
```

source.pipe(a).pipe(b).pipe(c).pipe(dest)

一旦其中 source、a、b、c、dest 中，有任何一个 stream 出错或者关闭，会导致整个管道停止，此时我们需要手工销毁所有的 stream，在代码层面这是非常麻烦的

```ts {monaco}
pipeline(
  fs.createReadStream("archive.tar"),
  zlib.createGzip(),
  fs.createWriteStream("archive.tar.gz"),
  (err) => {
    if (err) {
      console.error("Pipeline failed", err);
    } else {
      console.log("Pipeline succeeded");
    }
  }
);
```

---

```ts {monaco}
setInterval(async () => {
  try {
    await fetch("https://127.0.0.1:8080/health_check");
  } catch (e) {
    console.error(e);
  }
}, 3000);
```

```ts {monaco}
const timer = setTimeout(async () => {
  try {
    await fetch("https://127.0.0.1:8080/health_check");
  } catch (e) {
    console.error(e);
  } finally {
    timer.refresh();
  }
}, 3000);
```

---

```ts {monaco}
// bad
await fetch("https://127.0.0.1:8080/third_party");

// good
await fetch("https://127.0.0.1:8080/third_party", { timeout: 5000 });
```

---

```ts {monaco}
function loadFile(name) {
  const jsonFile = `/tmp/${name}.json`;
  return require(jsonFile);
}

loadFile("foo");
```

<!-- require 加载机制，占用内存 -->

---

:::warning
Warning: Possible EventEmitter memory leak detected. 11 timeout listeners added.
:::

```ts {monaco}
const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter {
  retry() {
    this.on("event", () => {
      console.log("an event occurred");
    });
    return this;
  }
}

const e = new MyEventEmitter();
e.retry();
```

By default EventEmitters will print a warning if more than 10 listeners are
added for a particular event. This is a useful default that helps finding memory
leaks.The emitter.setMaxListeners() method allows the limit to be modified for
this specific EventEmitter instance. The value can be set to Infinity (or 0) to
indicate an unlimited number of listeners.

---

## 工具介绍

```bash {monaco}
autocannon -c 100 -d 5 -p 10 -l http://localhost:3000
```

```bash {monaco}
node --cpu-prof index.js
ls *.cpuprofile
```

Chrome JavaScript Profiler

日志！日志！日志！

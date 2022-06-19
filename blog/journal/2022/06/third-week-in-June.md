---
layout: Post
title: 寻找啊哈时刻
subtitle: 产品思维：找到编程的啊哈时刻
date: 2022-06-18
catalog: true
useHeaderImage: true
headerImage: /img/_post/journal-header.jpg
headerMask: rgb(14, 21, 5, .5)
tags:
  - 周记
---

## 跨页面通信

### postMessage

## 模块化

## 编程的啊哈时刻

你真的理解 ES6 和 Vue.js 吗？找到数组中指定元素。

```js
  itemList: [
    {
      label: "案例名称",
      prop: "descriptionTitle",
      type: "input",
    },
    { label: "案例类型", prop: "caseType", type: "input" },
    { label: "工期", prop: "caseDays", type: "input" },
    { label: "价格", prop: "casePrice", type: "input" },
    { label: "终稿作品图", prop: "imagePath", type: "image" },
    {
      label: "设计师",
      type: "select",
      prop: "caseDesigner",
      option: [],
    },
    {
      label: "设计需求描述",
      prop: "detail",
      type: "custom-textarea",
      minRows: 5,
      maxRows: 40,
    },
    { label: "权重", prop: "sort", type: "input" },
  ],
```

```js
  async mounted() {
    const { data } = await http.$get("/admin/designer/list");
    if (data.length) {
      const designer = data.map((item) => ({
        label: item.designerName,
        value: item.designerName,
      }));
      // findIndex cool
      const designerIndex = this.itemList.findIndex(
        (il) => il.prop === "caseDesigner"
      );
      // safe assert! better man
      if (designerIndex >= 0) {
        this.itemList[designerIndex].option = designer;
      }
    }
  },
```

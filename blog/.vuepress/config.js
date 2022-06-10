const { viteBundler } = require("@vuepress/bundler-vite");
const { gungnirTheme } = require("vuepress-theme-gungnir");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  title: "与永恒拔河",
  description: "Tomorrow is another day.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.svg`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.svg`,
      },
    ],
    ["meta", { name: "application-name", content: "zhang13pro" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Atlas" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.svg` },
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "zhang13pro/bobo.me",
    docsDir: "blog",
    docsBranch: "main",
    navbarTitle: "$ cd ~",
    searchText: "",
    searchIcon: "ri-search-2-line",
    catalog: false,
    blogNumPerPage: 7,

    hitokoto: true, // "https://v1.hitokoto.cn?c=i" 只返回诗句

    // personal information
    personalInfo: {
      name: "Atlas",
      avatar: "/img/avatar.jpg",
      description: "sleeping ? money++ : coding && (writing || eating)",
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)",
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)",
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)",
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/5.jpg",
      },
    ],

    // router pages
    pages: {
      tags: {
        subtitle: "没有榜样，也走了整整五千年",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      links: {
        subtitle: "从童年起，我便独自一人，照顾着历代的星辰",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)",
        },
      },
    },

    // TODO update
    themePlugins: {
      search: {
        hotKeys: ["/"], // 聚焦 Search
        getExtraFields: (page) => page.frontmatter.tags ?? [], // 支持 Search Tags
      },
      // git: isProd, // only enable git plugin in production mode
      katex: true, // plugin-katex 公式插件
      chartjs: true, // plugin-chart JS图表库
      mermaid: { token: "mermaid" }, // plugin-mermaid 流程图
      mdPlus: { all: true }, // plugin-md-plus
      giscus: {
        repo: "zhang13pro/bobo.discussions",
        repoId: "R_kgDOHeqBOw",
        category: "Announcements",
        categoryId: "DIC_kwDOHeqBO84CPkvi",
        mapping: "pathname", // title
        lazyLoad: true,
        crossorigin: "anonymous",
        theme: "light_high_contrast", // light
        darkTheme: "dark_tritanopia", // dark dark_dimmed
      },
      // ga: "G-HCQSX53XFG",
      // ba: "75381d210789d3eaf855fa16246860cc",
    },

    navbar: [
      // TODO cool
      // {
      //   icon: "md-computer",
      //   link: "https://portfolio.zxh.io/",
      // },
      {
        icon: "gi-price-tag",
        link: "/tags/",
      },
      {
        icon: "gi-linked-rings",
        link: "/links/",
      },
      {
        icon: "ri-bilibili-fill",
        link: "https://space.bilibili.com/291279617/dynamic",
      },
      {
        icon: "ri-github-line",
        link: "https://github.com/zhang13pro/bobo.me",
      },
    ],

    footer: `
      &copy; <a href="https://github.com/zhang13pro" target="_blank">Atlas</a> 2016-${new Date().getFullYear()}
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  }),

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
};

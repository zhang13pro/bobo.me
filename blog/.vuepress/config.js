const { viteBundler } = require("@vuepress/bundler-vite");
const { gungnirTheme } = require("vuepress-theme-gungnir");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  title: "Atlas",
  description: "Tomorrow is another day.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`,
      },
    ],
    ["meta", { name: "application-name", content: "zhang13pro" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "LEX" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` },
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "zhang13pro/bobo.me",
    docsDir: "blog",
    docsBranch: "main",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Dreamer",
      avatar: "/img/avatar.jpg",
      description: "sleeping ? money++ : coding && (writing || eating)",
      // sns: {
      // github: "Renovamen",
      // linkedin: "xiaohan-zou",
      // facebook: "renovamen.zou",
      // twitter: "renovamen_zxh",
      // zhihu: "chao-neng-gui-su",
      // email: "renovamenzxh@gmail.com",
      // rss: "/rss.xml",
      // },
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

    // other pages
    pages: {
      tags: {
        subtitle: "人生代代无穷已，江月年年望相似",
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
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
      },
      mdPlus: {
        all: true,
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://blog.zxh.io",
        copyright: "Renovamen 2018-2022",
      },
    },

    navbar: [
      {
        text: "🛋️",
        link: "/",
        // icon: "fa-fort-awesome",
      },
      {
        text: "🏷️",
        link: "/tags/",
      },
      {
        text: "🔗",
        link: "/links/",
      },
      // TODO cool
      // {
      //   text: "🖥️",
      //   link: "https://portfolio.zxh.io/",
      // },
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

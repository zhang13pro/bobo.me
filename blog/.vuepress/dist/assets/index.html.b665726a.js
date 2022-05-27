const l={key:"v-5e4a66aa",path:"/post/2019/04/03/racf-experiment/",title:"RACF \u5B9E\u9A8C",lang:"en-US",frontmatter:{layout:"Post",title:"RACF \u5B9E\u9A8C",subtitle:"RACF Experiments",author:"Renovamen",date:"2019-04-03T00:00:00.000Z",headerImage:"/img/in-post/2019-04-03/header.png",permalinkPattern:"/post/:year/:month/:day/:slug/",tags:["\u4E3B\u673A"]},excerpt:`<p>\u5BF9\u6211\u8BA4\u4E3A\u7684\u672C\u79D1\u6700\u96BE\u7684\u8BFE\uFF082333\uFF09\u7B2C\u4E00\u6B21\u5B9E\u9A8C\u7684\u6D41\u6C34\u8D26\u5F0F\u8BB0\u5F55\u3002</p>
<p>\u5E0C\u671B\u65E9\u65E5\u8131\u79BB\u5927\u578B\u673A\u7684\u82E6\u6D77\uFF0C\u963F\u95E8\u3002</p>
`,headers:[{level:2,title:"1. \u521B\u5EFA\u7EC4",slug:"_1-\u521B\u5EFA\u7EC4",children:[{level:3,title:"1.1 \u7EC4\u7684\u7ED3\u6784",slug:"_1-1-\u7EC4\u7684\u7ED3\u6784",children:[]},{level:3,title:"1.2 \u767B\u9646 TSO",slug:"_1-2-\u767B\u9646-tso",children:[]},{level:3,title:"1.3 \u5728 RACFLAB \u4E0B\u5B9A\u4E49\u5B50\u7EC4",slug:"_1-3-\u5728-racflab-\u4E0B\u5B9A\u4E49\u5B50\u7EC4",children:[]},{level:3,title:"1.4 \u5728 DIV16FUN \u4E0B\u5B9A\u4E49\u5B50\u7EC4\uFF08\u529F\u80FD\u7EC4\uFF09",slug:"_1-4-\u5728-div16fun-\u4E0B\u5B9A\u4E49\u5B50\u7EC4-\u529F\u80FD\u7EC4",children:[]},{level:3,title:"1.5 \u5728 DIV16RES \u4E0B\u5B9A\u4E49\u5B50\u7EC4\uFF08\u8D44\u6E90\u7EC4\uFF09",slug:"_1-5-\u5728-div16res-\u4E0B\u5B9A\u4E49\u5B50\u7EC4-\u8D44\u6E90\u7EC4",children:[]},{level:3,title:"1.6 \u67E5\u627E\u7EC4 Profile",slug:"_1-6-\u67E5\u627E\u7EC4-profile",children:[]}]},{level:2,title:"2. \u7528\u6237\u7BA1\u7406",slug:"_2-\u7528\u6237\u7BA1\u7406",children:[{level:3,title:"2.1 \u65B0\u5EFA\u7528\u6237",slug:"_2-1-\u65B0\u5EFA\u7528\u6237",children:[]},{level:3,title:"2.2 \u91CD\u7F6E\u7528\u6237\u5BC6\u7801",slug:"_2-2-\u91CD\u7F6E\u7528\u6237\u5BC6\u7801",children:[]},{level:3,title:"2.3 Revoke \u7528\u6237",slug:"_2-3-revoke-\u7528\u6237",children:[]},{level:3,title:"2.4 Resume \u7528\u6237",slug:"_2-4-resume-\u7528\u6237",children:[]},{level:3,title:"2.5 Search \u67E5\u627E",slug:"_2-5-search-\u67E5\u627E",children:[]},{level:3,title:"2.6 \u5C06\u7528\u6237\u5173\u8054\u5230\u7EC4",slug:"_2-6-\u5C06\u7528\u6237\u5173\u8054\u5230\u7EC4",children:[]},{level:3,title:"2.7 \u9A8C\u8BC1\u7528\u6237\u662F\u5426\u5173\u8054\u5230\u7EC4",slug:"_2-7-\u9A8C\u8BC1\u7528\u6237\u662F\u5426\u5173\u8054\u5230\u7EC4",children:[]}]},{level:2,title:"3. \u5206\u6563\u5F0F RACF \u5B89\u5168\u7BA1\u7406",slug:"_3-\u5206\u6563\u5F0F-racf-\u5B89\u5168\u7BA1\u7406",children:[{level:3,title:"3.1 \u7528\u6237\u8EAB\u4EFD\u5B9A\u4F4D",slug:"_3-1-\u7528\u6237\u8EAB\u4EFD\u5B9A\u4F4D",children:[]},{level:3,title:"3.2 \u6D4B\u8BD5",slug:"_3-2-\u6D4B\u8BD5",children:[]}]},{level:2,title:"4. \u6570\u636E\u96C6\u4FDD\u62A4 I",slug:"_4-\u6570\u636E\u96C6\u4FDD\u62A4-i",children:[{level:3,title:"4.1 \u4FDD\u62A4\u6570\u636E\u96C6",slug:"_4-1-\u4FDD\u62A4\u6570\u636E\u96C6",children:[]},{level:3,title:"4.2 \u67E5\u770B PROFILE",slug:"_4-2-\u67E5\u770B-profile",children:[]},{level:3,title:"4.3  \u5B9A\u4E49 RPOFILE + \u8D4B ALTER \u6743",slug:"_4-3-\u5B9A\u4E49-rpofile-\u8D4B-alter-\u6743",children:[]},{level:3,title:"4.4 \u9A8C\u8BC1",slug:"_4-4-\u9A8C\u8BC1",children:[]},{level:3,title:"4.5 \u521B\u5EFA\u7EC4\u6570\u636E\u96C6",slug:"_4-5-\u521B\u5EFA\u7EC4\u6570\u636E\u96C6",children:[]},{level:3,title:"4.6 \u9A8C\u8BC1",slug:"_4-6-\u9A8C\u8BC1",children:[]}]},{level:2,title:"5. \u6570\u636E\u96C6\u4FDD\u62A4 II",slug:"_5-\u6570\u636E\u96C6\u4FDD\u62A4-ii",children:[{level:3,title:"5.1 \u521B\u5EFA\u5168\u5339\u914D PROFILE",slug:"_5-1-\u521B\u5EFA\u5168\u5339\u914D-profile",children:[]},{level:3,title:"5.2 \u6253\u5F00 Warning \u72B6\u6001",slug:"_5-2-\u6253\u5F00-warning-\u72B6\u6001",children:[]},{level:3,title:"5.3 \u5173\u95ED Warning \u72B6\u6001",slug:"_5-3-\u5173\u95ED-warning-\u72B6\u6001",children:[]},{level:3,title:"5.4 UPDATE \u6743\u9650",slug:"_5-4-update-\u6743\u9650",children:[]}]},{level:2,title:"6. \u4FDD\u62A4 TSO \u8D44\u6E90",slug:"_6-\u4FDD\u62A4-tso-\u8D44\u6E90",children:[{level:3,title:"6.1 \u521B\u5EFA\u7EC4\u7ED3\u6784",slug:"_6-1-\u521B\u5EFA\u7EC4\u7ED3\u6784",children:[]},{level:3,title:"6.2 \u65B0\u589E\u7528\u6237",slug:"_6-2-\u65B0\u589E\u7528\u6237",children:[]},{level:3,title:"6.3 \u521B\u5EFA\u767B\u9646\u8FC7\u7A0B",slug:"_6-3-\u521B\u5EFA\u767B\u9646\u8FC7\u7A0B",children:[]},{level:3,title:"6.4 \u4FDD\u62A4\u767B\u5F55\u8FC7\u7A0B",slug:"_6-4-\u4FDD\u62A4\u767B\u5F55\u8FC7\u7A0B",children:[]},{level:3,title:"6.5 \u4FDD\u62A4 ACCTNUM",slug:"_6-5-\u4FDD\u62A4-acctnum",children:[]},{level:3,title:"6.6 \u4FDD\u62A4 TSOAUTH",slug:"_6-6-\u4FDD\u62A4-tsoauth",children:[]},{level:3,title:"6.7 \u4FDD\u62A4\u7528\u6237\u6570\u636E\u96C6",slug:"_6-7-\u4FDD\u62A4\u7528\u6237\u6570\u636E\u96C6",children:[]},{level:3,title:"6.8 \u521B\u5EFA ALIAS",slug:"_6-8-\u521B\u5EFA-alias",children:[]}]},{level:2,title:"7. \u4F7F\u7528 JCL \u6267\u884C RACF \u547D\u4EE4",slug:"_7-\u4F7F\u7528-jcl-\u6267\u884C-racf-\u547D\u4EE4",children:[]}],git:{updatedTime:1653619077e3},readingTime:{minutes:18,words:3965},filePathRelative:"posts/2019-04-03-racf-experiment.md"};export{l as data};
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{521:function(a,e,t){"use strict";t.r(e);var s=t(20),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"三、koa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、koa"}},[a._v("#")]),a._v(" 三、koa")]),a._v(" "),t("h2",{attrs:{id:"_1-koa-和-express-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-koa-和-express-的区别"}},[a._v("#")]),a._v(" 1. koa 和 express 的区别")]),a._v(" "),t("ul",[t("li",[a._v("异步流程的控制：express 采用 callback 来处理异步，koa2 采用的是 async/await")]),a._v(" "),t("li",[a._v("错误处理：express 采用 callback 捕获异常，对深层次的异常捕获不了，koa 采用 try/catch")])]),a._v(" "),t("h2",{attrs:{id:"_2-koa-中间件执行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-koa-中间件执行机制"}},[a._v("#")]),a._v(" 2. koa 中间件执行机制")]),a._v(" "),t("ul",[t("li",[a._v("添加中间件的方式是使用 koa 实列的 use 方法，并传入一个 generator 函数，这个 generator 函数接受一个 next 参数")]),a._v(" "),t("li",[a._v("use 的原理：function Application(){\nthis.middleware =[]\n}")]),a._v(" "),t("li",[a._v("每次执行 use 方法，就把外面传进来的 generator 函数 push 到 middleware 数组中")]),a._v(" "),t("li",[a._v("koa 中是预先通过 use 方法，将请求可能会经过的中间件装在一个数组中")]),a._v(" "),t("li",[a._v("callback 函数就是请求到来的事件执行的回调。把装着中间件 middleware 的数组作为参数传递为 compose 这个方法")]),a._v(" "),t("li",[a._v("componse 把毫无关系的一个一个中间件给收尾串起来了，就好比我们平常的烤面筋")]),a._v(" "),t("li",[a._v("作为参数传递给前一个中间件，当最后一个中间件的参数 next 是空的 generator 函数生成对象")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
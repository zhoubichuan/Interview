(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{431:function(t,s,a){"use strict";a.r(s);var n=a(432),e=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(s,t,(function(){return n[t]}))}(r);s.default=e.a},432:function(t,s){},484:function(t,s,a){"use strict";a.d(s,"a",(function(){return n})),a.d(s,"b",(function(){return e}));var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一-node-相关知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-node-相关知识点"}},[t._v("#")]),t._v(" 一.node 相关知识点")]),t._v(" "),a("h2",{attrs:{id:"_1-相关状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-相关状态码"}},[t._v("#")]),t._v(" 1. 相关状态码")]),t._v(" "),a("ul",[a("li",[t._v("1xx:临时响应并需要请求者继续执行操作\n"),a("ul",[a("li",[t._v("100：请求者应当继续提出请求。")])])]),t._v(" "),a("li",[t._v("2xx 成功处理了请求状态\n"),a("ul",[a("li",[t._v("200 服务器已经成功处理请求，并提供了请求的网页")]),t._v(" "),a("li",[t._v("201 用户新建或修改数据成功")]),t._v(" "),a("li",[t._v("202 一个请求已经进入后台")]),t._v(" "),a("li",[t._v("204 用户删除成功")])])]),t._v(" "),a("li",[t._v("3xx 每次请求使用的重定向不要超过 5 次\n"),a("ul",[a("li",[t._v("301:永久性转移")]),t._v(" "),a("li",[t._v("302：暂时性转移")]),t._v(" "),a("li",[t._v("304 网页上请求没有更新，节省宽带和开销")])])]),t._v(" "),a("li",[t._v("4xx 表示请求可能出错，妨碍了服务器的处理\n"),a("ul",[a("li",[t._v("400 服务器不理解请求的语法")]),t._v(" "),a("li",[t._v("401 用户没有权限（用户名，密码输入错误）")]),t._v(" "),a("li",[t._v("403 用户得到授权（401 相反），但是访问被禁止")]),t._v(" "),a("li",[t._v("404 服务器找不到请求的网页")])])]),t._v(" "),a("li",[t._v("5xx 表示服务器在处理请求的时候发生内部错误\n"),a("ul",[a("li",[t._v("500 服务器遇到错误，无法完成请求")]),t._v(" "),a("li",[t._v("503 服务器目前无法使用（超载或停机维护）")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-304-的缓存原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-304-的缓存原理"}},[t._v("#")]),t._v(" 2. 304 的缓存原理")]),t._v(" "),a("p",[t._v("添加 Etag 标签。last-modified 304 网页上次请求没有更新，节省宽带和开销")]),t._v(" "),a("ul",[a("li",[t._v("1.服务器首先产生 Etag，服务器可在稍后使用它来判断页面是否被修改。本质上，客户端通过该几号传回服务器要求服务器验证（客户端）缓存")]),t._v(" "),a("li",[t._v("2.304 是 http 的状态吗，服务器用来标识这个文件有没有修改，不返回内容，浏览器接到这个状态码会去找浏览器缓存的文件")]),t._v(" "),a("li",[t._v("3.流程：客户端请求一个页面 A，服务器返回页面 A，并在 A 上加一个 Etag 客户端渲染该页面，并把 Etag 也存储在缓存中。客户端再次请求页面 A 并将上次请求的资源和 ETage 一起传递给服务器。服务器检查 Tage，并判断出该页面自上次客户端请求之后未被修改，直接返回 304\n"),a("ul",[a("li",[t._v("last-modified：客户端请求资源，同时有一个 last-modified 的属性标记此文件在服务器最后修改的时间，根据 http 协议。浏览器会向服务器发送一个 if-modified-since 报头，询问该事件之后文件是否被修改，没有修改返回 304")])]),t._v(" "),a("ul",[a("li",[t._v("有了 last-modified，为什么还要用 Etag?\n"),a("ul",[a("li",[t._v("1.因为如果在一秒钟之内对一个文件进行两次更改，last-modified 就会不正确（last-modified 不能识别秒单位的修改）")]),t._v(" "),a("li",[t._v("2.某些服务器不能精确的得到文件的最后修改时间")]),t._v(" "),a("li",[t._v("3.一些文件也会周期性的更改，但是他的内容并不改变（仅仅改变修改的事件），这个时候我们并不希望客户端认为文件被修改，而重新 get")])])]),t._v(" "),a("li",[t._v("有 Etag，为什么还要用 last-modified\n"),a("ul",[a("li",[t._v("1.两者互不，Etag 的判断的缺陷，比如一些图片等静态文件的修改")]),t._v(" "),a("li",[t._v("2.如果每次扫描内容都生成 Etag 比较，显然要比直接比较修改时间慢的多")])])]),t._v(" "),a("li",[t._v("Etag 是被请求变量的实体值（文件的索引节大小和最后修改的时间的 hash 值）")]),t._v(" "),a("li",[t._v("Etag 的值服务器端对文件的索引节，大小和最后的修改的事件进行 hash 后得到")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-get-post-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-get-post-的区别"}},[t._v("#")]),t._v(" 3.get/post 的区别")]),t._v(" "),a("blockquote",[a("p",[t._v("tcl")])]),t._v(" "),a("ul",[a("li",[t._v("数据方面:\n"),a("ul",[a("li",[t._v("get 数据是存放在 url 之后，以？分割 url 和传输数据，参数之间以&相连；post 方法是把提交的数据放在 http 包的 body 中")])])]),t._v(" "),a("li",[t._v("大小方面：\n"),a("ul",[a("li",[t._v("get 提交的数据大小有限制，（因为浏览器对 url 的长度有限制），post 的方法提交的数据没有限制")])])]),t._v(" "),a("li",[t._v("获取值方式：\n"),a("ul",[a("li",[t._v("get 需要 request.queryString 来获取变量的值，而 post 方式通过 request.form 来获取变量的值")])])]),t._v(" "),a("li",[t._v("安全方面：\n"),a("ul",[a("li",[t._v("get 的方法提交数据，会带来安全问题，比如登录一个页面，通过 get 方式提交数据，用户名和密码就会出现在 url 上")])])])]),t._v(" "),a("p",[t._v("GET：一般用于信息获取，使用 URL 传递参数，对所发送信息的数量也有限制，一般在 2000 个字符\nPOST：一般用于修改服务器上的资源，对所发送的信息没有限制。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，\n也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。\n")])])]),a("p",[t._v("然而，在以下情况中，请使用 POST 请求：\n无法使用缓存文件（更新服务器上的文件或数据库）\n向服务器发送大量数据（POST 没有数据量限制）")]),t._v(" "),a("h2",{attrs:{id:"_4-http-协议的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-协议的理解"}},[t._v("#")]),t._v(" 4.http 协议的理解")]),t._v(" "),a("ul",[a("li",[t._v("1.超文本的传输协议，是用于从万维网服务器超文本传输到本地资源的传输协议")]),t._v(" "),a("li",[t._v("2.基于 TCP/IP 通信协议传递数据（HTML,图片资源）")]),t._v(" "),a("li",[t._v("3.基于运用层的面向对象的协议，由于其简洁、快速的方法、适用于分布式超媒体信息系统")]),t._v(" "),a("li",[t._v("4.http 请求信息 request:\n"),a("ul",[a("li",[t._v("请求行（request line）、请求头部（header）、空行和请求数据四个部分构成")]),t._v(" "),a("li",[t._v("请求行，用来说明请求类型，要访问的资源以及所使用的 http 版本")]),t._v(" "),a("li",[t._v("请求头部，用来说明服务器要使用的附加信息")]),t._v(" "),a("li",[t._v("空行，请求头部后面的空行是必须的")]),t._v(" "),a("li",[t._v("请求数据也叫主体，可以添加任意的其他数据")])])]),t._v(" "),a("li",[t._v("5.http 相应信息 response\n"),a("ul",[a("li",[t._v("状态行、消息报头、空行和响应正文")]),t._v(" "),a("li",[t._v("状态行、有 http 协议版本号，状态吗，状态消息 三部分组成")]),t._v(" "),a("li",[t._v("消息报头，用来说明客户端要使用的一些附加信息")]),t._v(" "),a("li",[t._v("空行，消息报头后面的空行是必须的")]),t._v(" "),a("li",[t._v("响应正文，服务器返回给客户端的文本信息")])])])]),t._v(" "),a("h2",{attrs:{id:"_5-http-和-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-和-https"}},[t._v("#")]),t._v(" 5.http 和 https")]),t._v(" "),a("ul",[a("li",[t._v("https：是以安全为目标的 http 通道，简单讲是 http 的安全版本，通过 ssl 加密")]),t._v(" "),a("li",[t._v("http：超文本传输协议。是一个客户端和服务器请求和应答的标准（tcp）,使浏览器更加高效，使网络传输减少")])]),t._v(" "),a("h2",{attrs:{id:"_6-http1-0-和-http2-0-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-http1-0-和-http2-0-的区别"}},[t._v("#")]),t._v(" 6.http1.0 和 http2.0 的区别")]),t._v(" "),a("blockquote",[a("p",[t._v("腾讯")])]),t._v(" "),a("ul",[a("li",[t._v("长连接：\n"),a("ul",[a("li",[t._v("http1.0 需要使用 keep-alive 参数来告知服务器建立一个长连接，而 http1.1 默认支持长连接")])])]),t._v(" "),a("li",[t._v("节约宽带：\n"),a("ul",[a("li",[t._v("http1.1 支持只发送一个 header 信息（不带任何 body 信息）")])])]),t._v(" "),a("li",[t._v("host 域（设置虚拟站点，也就是说，web server 上的多个虚拟站点可以共享同一个 ip 端口）：\n"),a("ul",[a("li",[t._v("http1.0 没有 host 域")])])]),t._v(" "),a("li",[t._v("传输：\n"),a("ul",[a("li",[t._v("1.http2 采用的二进制文本传输数据，而非 http1 文本格式，二进制在协议的解析和扩展更好")])])]),t._v(" "),a("li",[t._v("2.数据压缩：\n"),a("ul",[a("li",[t._v("对信息头采用了 hpack 进行压缩传输，节省了信息头带来的网络流量")])])]),t._v(" "),a("li",[t._v("3.多路复用：\n"),a("ul",[a("li",[t._v("一个连接可以并发处理多个请求")])])]),t._v(" "),a("li",[t._v("4.服务器推送：\n"),a("ul",[a("li",[t._v("我们对支持 http2.0 的 web server 请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取，这种方式非常适合加载静态资源")])])])]),t._v(" "),a("h2",{attrs:{id:"_7-web-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-web-缓存"}},[t._v("#")]),t._v(" 7.web 缓存")]),t._v(" "),a("ul",[a("li",[t._v("1.web 缓存就是存在于客户端与服务器之间的一个副本，当你发出第一个请求后，缓存根据请求保存输出内容副本")]),t._v(" "),a("li",[t._v("2.缓存的好处\n"),a("ul",[a("li",[t._v("1.减少不必要的请求")]),t._v(" "),a("li",[t._v("2.降低服务器的压力，减少服务器的消耗")]),t._v(" "),a("li",[t._v("3.降低网络延迟，加快页面打开速度（直接读取浏览器的数据）")])])])]),t._v(" "),a("h2",{attrs:{id:"_8-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-模块化"}},[t._v("#")]),t._v(" 8.模块化")]),t._v(" "),a("p",[t._v("CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被”循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。")]),t._v(" "),a("p",[t._v("ES6 模块是动态引用，如果使用 import 从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。")]),t._v(" "),a("p",[t._v("import/export 最终都是编译为 require/exports 来执行的。")]),t._v(" "),a("p",[t._v("CommonJS 规范规定，每个模块内部， module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports ）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。")]),t._v(" "),a("p",[t._v("export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。")]),t._v(" "),a("h2",{attrs:{id:"_9-cdn-内容分发网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-cdn-内容分发网络"}},[t._v("#")]),t._v(" 9.CDN（内容分发网络）")]),t._v(" "),a("blockquote",[a("p",[t._v("腾讯")])]),t._v(" "),a("p",[t._v("CDN 是一种部署策略，根据不同的地区部署类似 nginx 这种服务服务，会缓存静态资源。前端在项目优化的时候，习惯在讲台资源上加上一个 hash 值，每次更新的时候去改变这个 hash，hash 值变化的时候，服务会去重新取资源")]),t._v(" "),a("ul",[a("li",[t._v("(CDN)是一个经策略性部署的整体系统，包括分布式存储、负载均衡、网络请求的重定向和内容管理 4 个要件\n"),a("ul",[a("li",[t._v("1.尽可能的避开互联网有可能影响数据传输速度和稳定性的瓶颈和环节。使内容传输的更快更稳定")]),t._v(" "),a("li",[t._v("2.关键技术：内容存储和分发技术中")]),t._v(" "),a("li",[t._v("3.基本原理：广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对的地区或者网络中。当用户访问网络时利用全局负载技术奖用户的访问指向距离最近的缓存服务器，有缓存服务器直接响应用户的请求（全局负载技术）")])])])]),t._v(" "),a("h2",{attrs:{id:"_10-tcp-三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-tcp-三次握手"}},[t._v("#")]),t._v(" 10.tcp 三次握手")]),t._v(" "),a("p",[t._v("客户端和服务端都需要确认各自可收发")]),t._v(" "),a("ul",[a("li",[t._v("客户端 c 发起请求连接服务器端 s 确认，服务器端也发起连接确认客户端的确认")]),t._v(" "),a("li",[t._v("第一次握手：客户端发送一个请求连接，服务端只能确认自己可以接受客户端发送的报文段")]),t._v(" "),a("li",[t._v("第二次握手：服务端向客户端发送一个连接，确认客户端收到自己发送的报文段")]),t._v(" "),a("li",[t._v("第三次握手：服务器端确认客户端收到了自己发送的报文段")])]),t._v(" "),a("h2",{attrs:{id:"_11-输入-url-到获取页面的完整过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-输入-url-到获取页面的完整过程"}},[t._v("#")]),t._v(" 11.输入 url 到获取页面的完整过程")]),t._v(" "),a("ul",[a("li",[t._v("1.查询 dns（域名解析）查询浏览器缓存，获取域名对应的 ip 地址")]),t._v(" "),a("li",[t._v("2.浏览器与服务器建立 tcp 连接（三次握手）")]),t._v(" "),a("li",[t._v("3.浏览器向服务器发送 http 请求（请求和传输数据）")]),t._v(" "),a("li",[t._v("4.服务器接受这个请求后，根据路径参数，经过后端的一些处理生成 html 代码返回给了浏览器")]),t._v(" "),a("li",[t._v("5.浏览器与服务器断开 tcp 连接（四次挥手）")]),t._v(" "),a("li",[t._v("6.浏览器拿到完整的 html 页面代码开始解析和渲染，如果遇到外部的 css 或者 js,图片和上面一样的步骤")]),t._v(" "),a("li",[t._v("7.浏览器根据拿到的资源对页面进行渲染，把一个完整的页面呈现出来")])]),t._v(" "),a("h2",{attrs:{id:"_12-浏览器渲染原理及流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-浏览器渲染原理及流程"}},[t._v("#")]),t._v(" 12.浏览器渲染原理及流程")]),t._v(" "),a("ul",[a("li",[t._v("dom --\x3e cssom --\x3erender--\x3elayout --\x3eprint")]),t._v(" "),a("li",[t._v("流程：解析 html 以及构建 dom 树 --\x3e构建 render 树 --\x3e布局 render 树 --\x3e绘制 render 树")]),t._v(" "),a("li",[t._v("概念：\n"),a("ul",[a("li",[t._v("1.构建 dom 树：渲染引擎解析 html 文档，首先将标签转换为 dom 树中的 dom node（包括 js 生成的标签）生成内容树")]),t._v(" "),a("li",[t._v("2.构建渲染树：解析对应的 css 样式文件信息（包括 js 生成的样式和外部的 css）")]),t._v(" "),a("li",[t._v("3.布局渲染树：从根节点递归调用，计算每一个元素的大小，位置等。给出每个节点所在的屏幕的精准位置")]),t._v(" "),a("li",[t._v("4.绘制渲染树：遍历渲染树，使用 ui 后端层来绘制每一个节点")]),t._v(" "),a("li",[t._v("重绘：当盒子的位置，大小以及其他属性，例如颜色，字体大小等的确定下来之后，浏览器便把这些颜色都按照各自的特性绘制一遍，将内容呈现在页面上，触发重绘的条件：改变元素的外观属性，如：color，background-color；重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现出新的外观注意：table 及其内部元素需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花时间，要尽量避免使用 table 布局")]),t._v(" "),a("li",[t._v("重排：（重构/回流/reflow）：当渲染树中的一部分（或者全部）因为元素的规模尺寸，布局，影藏等改变而需要重新构建，这就是回流；每个页面都需要一次回流，就是页面第一次渲染的时候重排一定会影响重绘，但是重绘不一定会影响重排")])])])]),t._v(" "),a("h2",{attrs:{id:"_13-为什么-css-顶部而js-写在后面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-为什么-css-顶部而js-写在后面"}},[t._v("#")]),t._v(" 13.为什么 css 顶部而js 写在后面")]),t._v(" "),a("ul",[a("li",[t._v("1.浏览器预先加载 css 后，可以不必等待 html 加载完毕就可以渲染到页面了")]),t._v(" "),a("li",[t._v("2.其实 html 渲染并不会等到完全加载完再渲染页面，而是一遍解析 dom 一遍渲染")]),t._v(" "),a("li",[t._v("3.js 写在尾部，主要是因为 js 主要扮演事件处理的功能，一方面很多操作是在页面渲染后才执行的。另一方面可以节省加载时间，使页面能够更快加载，提高用户的良好体验")]),t._v(" "),a("li",[t._v("4.但是随着 js 技术的发展，js 也开始承担页面渲染的工作，比如我们的 ui 其实可以分别对待，把渲染页面的 js 放到前面，时间处理的 js 放到后面")])]),t._v(" "),a("h2",{attrs:{id:"_14-线程与进程的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-线程与进程的区别"}},[t._v("#")]),t._v(" 14.线程与进程的区别")]),t._v(" "),a("ul",[a("li",[t._v("一个程序至少有一个进程,一个进程至少有一个线程.")]),t._v(" "),a("li",[t._v("线程的划分尺度小于进程，使得多线程程序的并发性高。")]),t._v(" "),a("li",[t._v("进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。")]),t._v(" "),a("li",[t._v("线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。")]),t._v(" "),a("li",[t._v("从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别")])]),t._v(" "),a("h2",{attrs:{id:"_15-nodejs有哪些优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-nodejs有哪些优缺点"}},[t._v("#")]),t._v(" 15.Nodejs有哪些优缺点？")]),t._v(" "),a("ul",[a("li",[t._v("优点：\n"),a("ul",[a("li",[t._v("事件驱动，通过闭包很容易实现客户端的生命活期。")]),t._v(" "),a("li",[t._v("不用担心多线程，锁，并行计算的问题")]),t._v(" "),a("li",[t._v("V8 引擎速度非常快")]),t._v(" "),a("li",[t._v("对于游戏来说，写一遍游戏逻辑代码，前端后端通用")])])]),t._v(" "),a("li",[t._v("缺点：\n"),a("ul",[a("li",[t._v("nodejs 更新很快，可能会出现版本兼容")]),t._v(" "),a("li",[t._v("nodejs 还不算成熟，还没有大制作")]),t._v(" "),a("li",[t._v("nodejs 不像其他的服务器，对于不同的链接，不支持进程和线程操作")])])])]),t._v(" "),a("h2",{attrs:{id:"_16-网站重构的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-网站重构的理解"}},[t._v("#")]),t._v(" 16.网站重构的理解？")]),t._v(" "),a("ul",[a("li",[t._v("网站重构：\n"),a("ul",[a("li",[t._v("在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变 UI 的情况下，对网站进行优化，在扩展的同时保持一致的 UI。")])])]),t._v(" "),a("li",[t._v("对于传统的网站来说重构通常是：\n"),a("ul",[a("li",[t._v("表格(table)布局改为 DIV+CSS")]),t._v(" "),a("li",[t._v("使网站前端兼容于现代浏览器(针对于不合规范的 CSS、如对 IE6 有效的)")]),t._v(" "),a("li",[t._v("对于移动平台的优化")]),t._v(" "),a("li",[t._v("针对于 SEO 进行优化")]),t._v(" "),a("li",[t._v("深层次的网站重构应该考虑的方面")]),t._v(" "),a("li",[t._v("减少代码间的耦合")]),t._v(" "),a("li",[t._v("让代码保持弹性")]),t._v(" "),a("li",[t._v("严格按规范编写代码")]),t._v(" "),a("li",[t._v("设计可扩展的 API")]),t._v(" "),a("li",[t._v("代替旧有的框架、语言(如 VB)")]),t._v(" "),a("li",[t._v("增强用户体验")]),t._v(" "),a("li",[t._v("通常来说对于速度的优化也包含在重构中")]),t._v(" "),a("li",[t._v("压缩 JS、CSS、image 等前端资源(通常是由服务器来解决)")]),t._v(" "),a("li",[t._v("程序的性能优化(如数据读写)")]),t._v(" "),a("li",[t._v("采用 CDN 来加速资源加载")]),t._v(" "),a("li",[t._v("对于 JS DOM 的优化")]),t._v(" "),a("li",[t._v("HTTP 服务器的文件缓存")])])])]),t._v(" "),a("h2",{attrs:{id:"_17-如何获取-ua"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-如何获取-ua"}},[t._v("#")]),t._v(" 17.如何获取 UA？")]),t._v(" "),a("p",[t._v("cache-control\n网页的缓存是由 HTTP 消息头中的 private、no-cache、max-age、must-revalidate 等，默认为  max-age 的效果。但是如果同时存在，则被 max-age 覆盖。")]),t._v(" "),a("p",[t._v('Expires = "Expires" ":" HTTP-date\n例如')]),t._v(" "),a("p",[t._v("Expires: Thu, 01 Dec 1994 16:00:00 GMT （必须是 GMT 格式）\n如果把它设置为  max-age 都可以用来指定文档的过期时间，但是二者有一些细微差别")]),t._v(" "),a("p",[t._v("1.Expires 在 HTTP/1.0 中已经定义，Cache-Control:max-age 在 HTTP/1.1 中才有定义，为了向下兼容，仅使用 max-age 不够；")]),t._v(" "),a("p",[t._v("2.Expires 指定一个绝对的过期时间(GMT 格式),这么做会导致至少 2 个问题：1)客户端和服务器时间不同步导致 Expires 的配置出现问题。 2）很容易在配置后忘记具体的过期时间，导致过期来临出现浪涌现象；")]),t._v(" "),a("p",[t._v("3.max-age 指定的是从文档被访问后的存活时间，这个时间是个相对值(比如:3600s),相对的是文档第一次被请求时服务器记录的 Request_time(请求时间)")]),t._v(" "),a("p",[t._v("4.Expires 指定的时间可以是相对文件的最后访问时间(Atime)或者修改时间(MTime),而 max-age 相对对的是文档的请求时间(Atime)")]),t._v(" "),a("p",[t._v("如果值为 no-cache,那么每次都会访问服务器。如果值为 max-age,则在过期之前不会重复访问服务器")]),t._v(" "),a("h2",{attrs:{id:"_18-使用-npm-有哪些好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-使用-npm-有哪些好处"}},[t._v("#")]),t._v(" 18.使用 NPM 有哪些好处？")]),t._v(" "),a("p",[t._v("通过 NPM，你可以安装和管理项目的依赖，并且能够指明依赖项的具体版本号。对于 Node 应用开发而言，你可以通过 package.json 文件来管理项目信息，配置脚本，以及指明依赖的具体版本")]),t._v(" "),a("h2",{attrs:{id:"_19-node-js-事件循环差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-node-js-事件循环差异"}},[t._v("#")]),t._v(" 19.Node，js 事件循环差异")]),t._v(" "),a("p",[t._v("Node.js 的事件循环分为 6 个阶段")]),t._v(" "),a("h2",{attrs:{id:"_4-手动写一个-node-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-手动写一个-node-服务器"}},[t._v("#")]),t._v(" 4.手动写一个 node 服务器")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" indexFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"content-Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/html;charset=utf-8"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    indexFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Con "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Con")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Con")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myInstanceof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n  left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])},e=[]},485:function(t,s,a){"use strict";a.r(s);var n=a(484),e=a(431);for(var r in e)["default"].indexOf(r)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(r);var _=a(20),v=Object(_.a)(e.default,n.a,n.b,!1,null,null,null);s.default=v.exports}}]);
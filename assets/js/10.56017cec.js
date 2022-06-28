(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{493:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一-html-常见面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-html-常见面试题"}},[s._v("#")]),s._v(" 一.html 常见面试题")]),s._v(" "),a("h2",{attrs:{id:"_1-存储方式与传输方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-存储方式与传输方式"}},[s._v("#")]),s._v(" 1.存储方式与传输方式")]),s._v(" "),a("ul",[a("li",[s._v("1.indexDB:h5 的本地存储库，存储空间可以在 250m 以上，把一些数据存储到浏览器中，没有网络，浏览器可以从这里读取数据，离线缓存用")]),s._v(" "),a("li",[s._v("2.cookie:通过浏览器记录信息确认用户的身份，最大 4kb，这也限制了传输的数据，请求的性能会受到影响\n"),a("ul",[a("li",[s._v("属性\n"),a("ul",[a("li",[s._v("value:如果用于保存用户登录状态，应该将该值加密，不能使用明文的用户标识")]),s._v(" "),a("li",[s._v("http-only:不能通过 js 访问 cookie，减少 xss 攻击")]),s._v(" "),a("li",[s._v("secure:只能在协议为 https 的请求中携带")]),s._v(" "),a("li",[s._v("sname-site:规定浏览器不能在跨域请求中携带 cookie,减少 csrf 攻击")])])]),s._v(" "),a("li",[s._v("优点：极高的扩展性和可用性\n"),a("ul",[a("li",[s._v("1.通过良好的编程，控制保存在 cookie 中的 session 对象的大小")]),s._v(" "),a("li",[s._v("2.通过加密和安全传输技术（ssl）,减少 cookie 被破解的可能性")]),s._v(" "),a("li",[s._v("3.只在 cookie 中存放不敏感数据，即使被盗也不会有重大损失")]),s._v(" "),a("li",[s._v("4.控制 cookie 的生命周期，使之不会永远有效，偷盗者很可能拿到一个过期的 cookie")])])]),s._v(" "),a("li",[s._v("缺点\n"),a("ul",[a("li",[s._v("1.cookie 数量和长度的限制。每个 domain 最多只能有 20 条 cookie,每个 cookie 长度不能超过 4kb，否则会被截掉")]),s._v(" "),a("li",[s._v("2.安全性问题。如果 cookie 被人拦截了，那人就可以取得所有的 session 信息。即使加密也于事无补，因为拦截者并不需要知道 cookie 的意义，他只要原样转发 cookie 就可以达到目的了")]),s._v(" "),a("li",[s._v("3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器，如果我们把这个计数器保存在客户端，那么它起不到任何作用。")])])])])]),s._v(" "),a("li",[s._v("3.Session:服务器端使用的一种记录客户状态的机制（session_id 存在 set_cookie 发送到客户端，保存为 cookie）")]),s._v(" "),a("li",[s._v("4.localStorage:h5 的本地存储，在谷歌浏览器中为 5mb，数据永久保存在客户端")]),s._v(" "),a("li",[s._v("5.sessionStorage：h5 的本地存储，在谷歌浏览器中为 5mb，数据在绘画时保存在客户端")]),s._v(" "),a("li",[s._v("数据有效期不同\n"),a("ul",[a("li",[s._v("cookie 在设置（服务器设置）有效期内有效，不管窗口和浏览器关闭")]),s._v(" "),a("li",[s._v("sessionStorage 只在当前浏览器窗口有效，关闭即销毁（临时存储）")]),s._v(" "),a("li",[s._v("localStorage 始终有效，除非手动删除")])])]),s._v(" "),a("li",[s._v("sessionStorage 和 localStorage 区别\n"),a("ul",[a("li",[s._v("1.sessionStorage 用本地存储一个会话中的数据，这些数据只有在用一个会话的页面中才能被访问（也就是说在第一次通信过程中）")]),s._v(" "),a("li",[s._v("2.localStorage 用于持久化的本地存储，除非主动删除数据，否则不会过期")])])]),s._v(" "),a("li",[s._v("indexDB:除非被清理否则一直存在")])]),s._v(" "),a("h2",{attrs:{id:"_2-token-cookie-session-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-token-cookie-session-特点"}},[s._v("#")]),s._v(" 2.token cookie session 特点")]),s._v(" "),a("ul",[a("li",[s._v("1.token 就是令牌，比如你授权（登录）一个程序时，他就是个依据，判断你是否已经授权该软件（最好的身份认证，安全性好，而且时唯一的）用户身份的验证方式\n"),a("ul",[a("li",[s._v("基于 token 的身份验证：（token:uid 用户唯一的身份识别+time 当前时间戳+sign 签名）\n"),a("ul",[a("li",[s._v("1.用户通过用户名和密码发送请求")]),s._v(" "),a("li",[s._v("2.服务端验证")]),s._v(" "),a("li",[s._v("3.服务端返回一个带签名的 token 给客户端")]),s._v(" "),a("li",[s._v("4.客户端存储 token,并且每次用于发送请求")]),s._v(" "),a("li",[s._v("5.服务器验证 token 并且返回数据 每一次请求都需要 token")])])])])]),s._v(" "),a("li",[s._v("2.cookie 是卸载客户端的一个 txt 文件，里面包括登录信息之类的，这样你下次登录某个网站，就会调用 cookie 自动登录用户名服务器生成，发送到浏览器 浏览器保存 下次请求再次发送给服务器（存放登录信息）")]),s._v(" "),a("li",[s._v("3.session 是一类用来客户端和服务器之间保存状态的解决方案，会话完成被销毁（代表就是服务器和客户端的一次会话过程）cookie 中存放着 sessionID，请求会发送这个 id，session 因为 request 对象而产生")]),s._v(" "),a("li",[s._v("cookie 和 session 的区别\n"),a("ul",[a("li",[s._v("1.cookie 数据存放在客户的浏览器上，session 数据存放在服务器上")]),s._v(" "),a("li",[s._v("2.cookie 不是很安全，别人可以分析存放本地的 cookie 并进行 cookie 欺骗，考虑安全应当使用 session")]),s._v(" "),a("li",[s._v("3.session 会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用 cookie")]),s._v(" "),a("li",[s._v("4.单个 cookie 保存的数据不能超过 4k,很多浏览器都限制一个站点最多保存 20 个 cookie")])])]),s._v(" "),a("li",[s._v("session 和 token 的区别\n"),a("ul",[a("li",[s._v("1.session 认证只是简单的 user 信息存储 session 里面，sessionID 不可预测，一种认证手段，不能共享到其他的网站和第三方 app")]),s._v(" "),a("li",[s._v("2.token 是 oAuth Token，目的就是让某 app 有权访问某用户的信息，token 是唯一的；token 不能转移到其他的 app，也不能转到其他用户上（使用 app）")]),s._v(" "),a("li",[s._v("3.session 的状态是存在服务端的，客户端只存在 session id，token 状态是存在客户端的")])])]),s._v(" "),a("li",[s._v("cookie 的弊端有哪些\n"),a("ul",[a("li",[s._v("优点：保存客户端数据，分担了服务器存储的负担")]),s._v(" "),a("li",[s._v("1.数量和长度的限制，每个特定的域名下最多生成 20 个 cookie(chorme 和 safari 没有限制)")]),s._v(" "),a("li",[s._v("2.安全性问题")])])])]),s._v(" "),a("h2",{attrs:{id:"_3-href-和-src-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-href-和-src-有什么区别"}},[s._v("#")]),s._v(" 3.href 和 src 有什么区别")]),s._v(" "),a("ul",[a("li",[s._v("href：当浏览器遇到 href 时，会并行的下载资源，不会阻塞页面解析，例如我们使用"),a("code",[s._v("link")]),s._v("引入 css，浏览器会并行下载 css 而不会阻塞页面解析，因此我们在引入 css 时建议使用"),a("code",[s._v("link")]),s._v("而不是"),a("code",[s._v("@import")])]),s._v(" "),a("li",[s._v("src：当浏览器遇到 src 时，会暂停页面解析，直到该资源下载或执行完毕，这也是 scrip 标签之所以放底部的原因")])]),s._v(" "),a("h2",{attrs:{id:"_4-meta-有哪些属性-作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-meta-有哪些属性-作用是什么"}},[s._v("#")]),s._v(" 4.meta 有哪些属性，作用是什么")]),s._v(" "),a("p",[s._v("meta 标签用于描述网页的元信息，如网站的作者、描述、关键词，meta 通过 name=xxxxxx 和 content=xxx 的形式来定义信息，常用的设置如下：")]),s._v(" "),a("ul",[a("li",[s._v("charset：定义 html 文档的字符集")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("http_equiv:可用于模拟 http 请求头，可设置过期时间、缓存、刷新\n"),a("ul",[a("li",[s._v("expires，指定过期时间")]),s._v(" "),a("li",[s._v("progma，设置 no-cache 可以禁止缓存")]),s._v(" "),a("li",[s._v("refresh，定时刷新")]),s._v(" "),a("li",[s._v("set-cookie，可以设置 cookie")]),s._v(" "),a("li",[s._v("X-UA-Compatible，使用浏览器版本")]),s._v(" "),a("li",[s._v("apple-mobile-web-app-status-bar-style，针对 WebApp 全屏模式，隐藏状态栏/设置状态栏颜色")])])])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("expires"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("Web, 20 Jun 2019 22:33:00 GMT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("viewport:视口，用于控制页面宽高及缩放比例\n"),a("ul",[a("li",[s._v("width/height,宽高，默认宽度 980px")]),s._v(" "),a("li",[s._v("initial-scale,初始缩放比例，1 ～ 10")]),s._v(" "),a("li",[s._v("maximum-scale/minimum-scale，允许用户缩放的最大/小比例")]),s._v(" "),a("li",[s._v("user-scalable，用户是否可以缩放（yes/no）")])])])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("width=device-width, initial-scale=1;maximum-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v('meta name="keyword" 告诉搜索引擎网页的关键词')]),s._v(" "),a("li",[s._v('meta name="description"告诉搜索引擎站点的内容')]),s._v(" "),a("li",[s._v('meta name="author" content="meta" 站点制作者')])]),s._v(" "),a("h2",{attrs:{id:"_5-块元素和行内元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-块元素和行内元素"}},[s._v("#")]),s._v(" 5.块元素和行内元素")]),s._v(" "),a("ul",[a("li",[s._v("块元素（div、dl、ul、form、h1）\n"),a("ul",[a("li",[s._v("总是在新行上开始")]),s._v(" "),a("li",[s._v("高度，行高以及外边距都可控制")]),s._v(" "),a("li",[s._v("宽度缺省是他的容器的 100%，除非设定一个宽度")]),s._v(" "),a("li",[s._v("它可以容纳内联元素和其他块元素")])])]),s._v(" "),a("li",[s._v("行内元素(a、span、img、b、br)\n"),a("ul",[a("li",[s._v("和其他元素都在一行上")]),s._v(" "),a("li",[s._v("高、行高及外边距和内边距不可改变")]),s._v(" "),a("li",[s._v("宽度就是它的文字或图片的宽度，不可改变")]),s._v(" "),a("li",[s._v("内联元素只能容纳文本或者其他内联元素")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
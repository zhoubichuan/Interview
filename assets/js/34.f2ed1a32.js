(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{517:function(t,s,a){"use strict";a.r(s);var e=a(20),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基础知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识点"}},[t._v("#")]),t._v(" 基础知识点")]),t._v(" "),a("h2",{attrs:{id:"_1-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期"}},[t._v("#")]),t._v(" 1.生命周期")]),t._v(" "),a("p",[t._v("对于异步渲染，现在渲染有两个阶段："),a("code",[t._v("reconciliation")]),t._v("和"),a("code",[t._v("commit")]),t._v("。前者过程是可以打断的，后者不能暂停，会一直更新界面直到完成")]),t._v(" "),a("p",[a("strong",[t._v("Reconciliation 阶段")])]),t._v(" "),a("ul",[a("li",[t._v("componentWillMount")]),t._v(" "),a("li",[t._v("componentWillReceiveProps")]),t._v(" "),a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("componentWillUpdate")])]),t._v(" "),a("p",[a("strong",[t._v("Commit 阶段")])]),t._v(" "),a("ul",[a("li",[t._v("componentDidMount")]),t._v(" "),a("li",[t._v("componentDidUpdate")]),t._v(" "),a("li",[t._v("componentWillUnmount")])]),t._v(" "),a("p",[t._v("因为 Reconciliation 阶段是可以被打断的，所以 Reconciliation 阶段执行的生命周期函数就可能会出现调用多次的情况，从而引起 Bug。因此对于 Reconciliation 阶段调用的几个函数，除了"),a("code",[t._v("shouldComponentUpdate")]),t._v("以外，其他都应该避免去使用，并且 V16 中也引入了新的 API 来解决这个问题。")]),t._v(" "),a("p",[a("code",[t._v("getDerivedSteateFromProps")]),t._v("用于替换"),a("code",[t._v("componentWillReceiveProps")]),t._v(",该函数会在初始化和"),a("code",[t._v("update")]),t._v("时被调用。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("prevState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someMirroredValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("derivedData")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeDervedState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("someMirroredValue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someValue\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("code",[t._v("getSnapshotBeforeUpdate")]),t._v("用于替换"),a("code",[t._v("componentWillUpdate")]),t._v("，该函数会在"),a("code",[t._v("update")]),t._v("后 DOM 更新前被调用，用于读取最新的 DOM 数据。")]),t._v(" "),a("h2",{attrs:{id:"_2-setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-setstate"}},[t._v("#")]),t._v(" 2.setState")]),t._v(" "),a("p",[a("code",[t._v("setState")]),t._v("在 React 中是经常使用的一个 API，但是它存在一些的问题经常会导致初学者出错，核心原因就是因为这个 API 是异步的。")]),t._v(" "),a("p",[t._v("首先"),a("code",[t._v("setState")]),t._v("的调用并不会马上引起"),a("code",[t._v("state")]),t._v("的改变，并且如果你一次调用了多个"),a("code",[t._v("setState")]),t._v("，那么结果可能并不如你期待的一样。因为"),a("code",[t._v("setState")]),t._v("是个异步 API，只有同步代码运行完毕才会执行。如果你想在每次调用"),a("code",[t._v("setState")]),t._v("后获得正确的"),a("code",[t._v("state")]),t._v("，可以将对象形式写成函数形式。")]),t._v(" "),a("h2",{attrs:{id:"_3-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-性能优化"}},[t._v("#")]),t._v(" 3.性能优化")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("shouldComponentUpdate")]),t._v("函数中我们可以通过返回布尔值来决定当前组件是否需要更新。这层代码逻辑可以是简单地比较一下当前"),a("code",[t._v("state")]),t._v("和之前的"),a("code",[t._v("state")]),t._v("是否相同，也可以是判断某个值更新了才触发组件更新。一般来说不推荐完整对比当前"),a("code",[t._v("state")]),t._v("和之前的"),a("code",[t._v("state")]),t._v("是否相同，因为组件更新触发可能会很频繁，这样的完整对比性能开销会有点大，可能会造成得不偿失的情况。")]),t._v(" "),a("p",[t._v("当然如果只是单纯的浅比较一下，可以直接使用"),a("code",[t._v("PureComponent")]),t._v(",底层就是实现了浅比较"),a("code",[t._v("state")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PureComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("PureComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这时候你可能考虑到函数组件就不能使用这种方式了，如果你使用 16.6.0 之后的版本的话，可以使用"),a("code",[t._v("React.memo")]),t._v("来实现相同的功能")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("PureComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("通过这种方式我们就可以即实现了"),a("code",[t._v("shouldComponentUpdate")]),t._v("的浅比较，又能使用函数组件。")]),t._v(" "),a("h2",{attrs:{id:"_4-通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-通信"}},[t._v("#")]),t._v(" 4.通信")]),t._v(" "),a("p",[t._v("其实 React 中的组件同行基本和 Vue 中的一致。同样也分为以下三种情况")]),t._v(" "),a("ul",[a("li",[t._v("父子组件通信")]),t._v(" "),a("li",[t._v("兄弟组件通信")]),t._v(" "),a("li",[t._v("跨多层组件通信")]),t._v(" "),a("li",[t._v("任意组件\n"),a("strong",[t._v("父子通信")])])]),t._v(" "),a("p",[t._v("父组件通过"),a("code",[t._v("props")]),t._v("传递数据给子组件，子组件通过调用父组件传来的函数传递数据给父组件，这两种方式是最常用的父子通信实现办法。")]),t._v(" "),a("p",[t._v("这种父子通信方式也就是典型的单向数据流，父组件通过"),a("code",[t._v("props")]),t._v("传递数据，子组件间不能直接修改"),a("code",[t._v("props")]),t._v(",而是必须通过调用父组件函数的方式告知父组件修改数据。")]),t._v(" "),a("p",[a("strong",[t._v("兄弟组件通信")]),t._v("\n对于这种情况可以通过共同的父组件来管理状态和事件函数。比如说其中一个兄弟组件调用父组件传递过来的事件函数修改父组件中的状态，然后父组件将状态传递给另一个兄弟组件。")]),t._v(" "),a("p",[a("strong",[t._v("跨多层次组件通信")]),t._v("\n可以使用 Context API")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建Context ,可以在开始就传入值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StateContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("StateContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yck"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("StateContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ThemeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consume"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          name is "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThemeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consume"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[a("strong",[t._v("任意组件")]),t._v("\n这种方式可以通过 Redux 或者 Event Bus 解决，另外如果你不怕麻烦的 haul，可以使用这种凡是解决上述所有的通信。")]),t._v(" "),a("h2",{attrs:{id:"_5-react-和-vue-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-react-和-vue-的区别"}},[t._v("#")]),t._v(" 5.react 和 vue 的区别")]),t._v(" "),a("ul",[a("li",[t._v("双向数据绑定")]),t._v(" "),a("li",[t._v("修改数据，react 中 setState")])]),t._v(" "),a("ul",[a("li",[t._v("相同点：\n"),a("ul",[a("li",[t._v("1.数据驱动页面，提供响应式的视图组件")]),t._v(" "),a("li",[t._v("2.都有 virtual DOM 组件化的开发，通过 props 参数进行父子之间的组件传递数据，都实现了 webComponents 规范")]),t._v(" "),a("li",[t._v("3.数据流动单项，都支持服务器的渲染")]),t._v(" "),a("li",[t._v("4.都有支持 native 的方法，react 有 react native，vue 有 wexx")])])]),t._v(" "),a("li",[t._v("不同点：\n"),a("ul",[a("li",[t._v("1.数据绑定：Vue 实现了双向的数据绑定，react 数据流动是单项的")]),t._v(" "),a("li",[t._v("2.数据渲染：大规模的数据渲染，react 更快")]),t._v(" "),a("li",[t._v("3.使用场景：react 配合 redux 架构适合大规模多人协作复杂项目，vue 适合小快的项目")]),t._v(" "),a("li",[t._v("4.开发风格：react 推荐做法 jsx + inline style 把 html 和 css 都写在 js 了；vue 是采用 webpack + vue-loader 单文件组件格式，html,js,css 同一个文件")])])])]),t._v(" "),a("h2",{attrs:{id:"_6-redux-中的-reducer-纯函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-redux-中的-reducer-纯函数"}},[t._v("#")]),t._v(" 6.redux 中的 reducer(纯函数)")]),t._v(" "),a("ul",[a("li",[t._v("redux 数据流里，reduces 其实是根据之前的状态（previous state）和现有的 action（current action）更新 state（这个 state 可以理解为上下累加器的结果）")]),t._v(" "),a("li",[t._v("每次 redux reducer 被执行时，state 和 action 被传入，这个 state 根据 action 进行累加或者是自身消减，进而返回最新的 state，这也就是典型 reduce 函数的用法：state -> action -> state")])]),t._v(" "),a("h2",{attrs:{id:"_7-react-的-refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-react-的-refs"}},[t._v("#")]),t._v(" 7.react 的 refs")]),t._v(" "),a("ul",[a("li",[t._v("refs 就像一个逃生窗，允许我们之间访问 dom 元素或者组件实例，可以向组件添加一个 ref 属性的值是一个回调函数,它将接受的 dom 元素或组件的已挂载实列，作为第一个参数")])]),t._v(" "),a("h2",{attrs:{id:"_8-react-中的-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-react-中的-keys"}},[t._v("#")]),t._v(" 8.react 中的 keys")]),t._v(" "),a("ul",[a("li",[t._v("帮助我们跟踪那些项目已更改、添加、从列表中删除，key 是独一无二的，可以让我们高效的去定位元素，并且操作它")])]),t._v(" "),a("h2",{attrs:{id:"_9-react-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-react-的生命周期"}},[t._v("#")]),t._v(" 9.React 的生命周期")]),t._v(" "),a("ul",[a("li",[t._v("三个状态：\n"),a("ul",[a("li",[t._v("Mounting(已插入真实的 DOM)")]),t._v(" "),a("li",[t._v("Updating(正在被重新渲染)")]),t._v(" "),a("li",[t._v("Unmounting(已移除真实的 DOM)")])])]),t._v(" "),a("li",[t._v("comonentDidMount 在第一次渲染后调用，只在客户端。之后组件已经生成对应的 DOM 结构")]),t._v(" "),a("li",[t._v("componentDidUpdate 在组件完成更新后立即调用，再初始化是不会调用的")])]),t._v(" "),a("h3",{attrs:{id:"在-v16-版本中引入了-fiber-机制。这个机制一定程度上的影响了部分生命周期的调用-并且也引入了新的-2-个-api-来解决问题-关于-fiber-的内容将会在下一章节中讲到。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-v16-版本中引入了-fiber-机制。这个机制一定程度上的影响了部分生命周期的调用-并且也引入了新的-2-个-api-来解决问题-关于-fiber-的内容将会在下一章节中讲到。"}},[t._v("#")]),t._v(" 在 V16 版本中引入了 Fiber 机制。这个机制一定程度上的影响了部分生命周期的调用，并且也引入了新的 2 个 API 来解决问题，关于 Fiber 的内容将会在下一章节中讲到。")]),t._v(" "),a("p",[t._v("在之前的版本中，如果你拥有一个很复杂的复合组件，然后改动了最上层组件的 state，那么调用栈可能很长")]),t._v(" "),a("p",[t._v("调用栈过长，再加上中间进行了复杂的操作，就可能导致长时间阻塞主线程，带来不好的用户体验。Fiber 就是为了解决该问题而生。")]),t._v(" "),a("p",[t._v("Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新。")]),t._v(" "),a("p",[t._v("对于如何区别优先级，React 有自己的一套逻辑。对于动画这种实时性很高的东西，也就是 16ms 必须渲染一次保证不卡顿的情况下，React 会每 16ms（以内）暂停一下更新，返回来继续渲染动画。")]),t._v(" "),a("p",[t._v("对于异步渲染，现在渲染有两个阶段：reconciliation 和 commit。前者过程是可以打断的，后者不能暂停，会一直更新界面直到完成。")]),t._v(" "),a("h2",{attrs:{id:"_10-react-子组件向父组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-react-子组件向父组件传值"}},[t._v("#")]),t._v(" 10.React 子组件向父组件传值")]),t._v(" "),a("ul",[a("li",[t._v("父组件通过 props 给子组件传递数据，子组件则是通过调用父组件给它的函数给父组件传递数据")])]),t._v(" "),a("h2",{attrs:{id:"_11-为什么虚拟-dom-会提高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-为什么虚拟-dom-会提高性能"}},[t._v("#")]),t._v(" 11.为什么虚拟 DOM 会提高性能")]),t._v(" "),a("ul",[a("li",[t._v("虚拟 DOM 相当于在 js 和真实 DOM 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能")]),t._v(" "),a("li",[t._v("具体实现步骤：\n"),a("ul",[a("li",[t._v("用 JavaScript 对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档中")]),t._v(" "),a("li",[t._v("当状态变更的时候，重新构建一颗树的对象树，然后用新的和旧的树进行对比，记录两颗树的差异")]),t._v(" "),a("li",[t._v("把所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了")])])])]),t._v(" "),a("h2",{attrs:{id:"_12-diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-diff-算法"}},[t._v("#")]),t._v(" 12.diff 算法")]),t._v(" "),a("ul",[a("li",[t._v("1.把树形结构按照层级分解，只比较同级元素")]),t._v(" "),a("li",[t._v("2.给列表结构的每个单元添加 key 属性，方便比较，在实际代码中，会对新旧两棵树进行一个深度优先遍历，这样每个节点都会有一个标记")]),t._v(" "),a("li",[t._v("3.在深度优先遍历的时候，每遍历到一个节点就把该节点和新的树进行对比，如果有差异的话就记录到一个对象里面。Virtual DOM 算法主要实现上面步骤的三个函数：element,diff,path.然后就可以实际的进行使用。react 只会匹配相同的 class 的 component（这里的 class 指的是组件的名字）。合并操作，调用 component 的 setState 方法的时候，React 将其标记为 dirty 到每一个时间循环，React 检查所有标记 dirty 的 component 重新绘制")]),t._v(" "),a("li",[t._v("4.选择性子树渲染。可以重写 shouldComponentUpdate 提高 diff 性能")])]),t._v(" "),a("h2",{attrs:{id:"_13-react-性能优化是在哪个周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-react-性能优化是在哪个周期"}},[t._v("#")]),t._v(" 13.react 性能优化是在哪个周期")]),t._v(" "),a("ul",[a("li",[t._v("shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom，因为 dom 的描绘非常消耗性能")]),t._v(" "),a("li",[t._v("如果我们在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大提高性能")])]),t._v(" "),a("h2",{attrs:{id:"_10-react-怎么划分业务组件和技术组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-react-怎么划分业务组件和技术组件"}},[t._v("#")]),t._v(" 10.react 怎么划分业务组件和技术组件")]),t._v(" "),a("ul",[a("li",[t._v("根据组件的职责通常把组件分为 UI 组件和容器组件")]),t._v(" "),a("li",[t._v("UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑")]),t._v(" "),a("li",[t._v("两者通过 React-redux 提供 connect 方法联系起来")])]),t._v(" "),a("h2",{attrs:{id:"_11-setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-setstate"}},[t._v("#")]),t._v(" 11. setState")]),t._v(" "),a("ul",[a("li",[t._v("setState 通过一队列机制实现 state 更新，当执行 setState 时，会将需要更新的 state 往后放入状态队列")]),t._v(" "),a("li",[t._v("那么该 state 将不会被放入状态队列中。当下次调用 setState 并对状态队列进行合并时，就会忽略之前修改的 state，造成不可预知的错误")]),t._v(" "),a("li",[t._v("同时，也利用了队列机制实现了 setState 的异步更新，避免了频繁的重复更新 state")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("同步更新 state:")]),t._v(" "),a("ul",[a("li",[t._v("setState 函数并不会阻塞等待状态更新完毕，因此 setNetworkActivityIndicatoryViseible 有可能先于数据渲染完毕就执行。第二个参数是一个回调函数，在 setState 的异步操作结束并且组件已经重新渲染的时候执行，也就是说，我们可以通过这个回调来拿到更新的 state 的值，实现代码的同步")]),t._v(" "),a("li",[t._v("例子")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nStatusBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNetworkActivityIndicatorVisible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
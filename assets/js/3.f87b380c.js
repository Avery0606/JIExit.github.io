(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(t,v,_){t.exports=_.p+"assets/img/JS11.fcf0312a.png"},139:function(t,v,_){t.exports=_.p+"assets/img/JS12.7e5bbde4.png"},140:function(t,v,_){t.exports=_.p+"assets/img/JS13.e4e220bf.png"},146:function(t,v,_){"use strict";_.r(v);var a=_(0),i=Object(a.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"第一章-javascript简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章-javascript简介"}},[t._v("#")]),t._v(" 第一章:JavaScript简介")]),t._v(" "),a("p",[t._v("Tips:  内容为知识梳理")]),t._v(" "),a("h3",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ol",[a("li",[a("strong",[a("a",{attrs:{href:"#1"}},[t._v("JavaScript的由来")])]),t._v(" "),a("p")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"#2"}},[t._v("JavaScript的组成")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21"}},[t._v("ECMAScript")]),t._v(" "),a("p")]),t._v(" "),a("li",[a("a",{attrs:{href:"#22"}},[t._v("文档对象模型(DOM)")]),t._v(" "),a("p")]),t._v(" "),a("li",[a("a",{attrs:{href:"#23"}},[t._v("浏览器对象模型(BOM)")])])])])]),t._v(" "),a("h3",{attrs:{id:"_1-javascript的由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-javascript的由来"}},[t._v("#")]),t._v(" "),a("div",{attrs:{id:"1"}},[t._v("1.JavaScript的由来")])]),t._v(" "),a("p",[t._v("由于以前的上网速度较慢，但网页的大小和复杂性不断增加，为了完成简单的表单验证而频繁地与服务器交换数据只会加重用户的负担，于是，当时的Netscape公司就决定开发一种客户端语言——LiveScript的脚本语言，而Netscape公司为了搭上媒体热炒的Java的顺风车，就把LiveScript改名为JavaScript。不久后，JavaScript便取得了巨大的成功，与此同时，微软也推出了名为JScript的JavaScript的实现。这样就有了两个不同的JavaScript版本，为了规定标准，欧洲计算机制造商协会(ECMA)定义了一种名为ECMAScript的新脚本语言的标准，而ECMAScript也逐渐成为了JavaScript实现的基础")]),t._v(" "),a("h3",{attrs:{id:"_2-javascript的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-javascript的组成"}},[t._v("#")]),t._v(" "),a("div",{attrs:{id:"2"}},[t._v("2.JavaScript的组成")])]),t._v(" "),a("p",[t._v("一个完整的JavaScript由以下三个部分组成:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21"}},[t._v("核心(ECMAScript)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#22"}},[t._v("文档对象模型(DOM)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#23"}},[t._v("浏览器对象模型(BOM)")])])]),t._v(" "),a("h4",{attrs:{id:"_2-1ecmascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1ecmascript"}},[t._v("#")]),t._v(" "),a("div",{attrs:{id:"21"}},[t._v("2.1ECMAScript")])]),t._v(" "),a("p",[t._v("由ECMA-262定义的ECMAScript与Web浏览器没有依赖关系，它定义了这门语言的基础，而通过Web浏览器这个宿主环境，不仅可以实现ECMAScript，还可以扩展ECMAScript，比如接下来要说的DOM。\n以下是ECMAScript的基本组成部分：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("语法")]),t._v(" "),a("li",[t._v("类型")]),t._v(" "),a("li",[t._v("语句")]),t._v(" "),a("li",[t._v("关键字")]),t._v(" "),a("li",[t._v("保留字")]),t._v(" "),a("li",[t._v("操作符")]),t._v(" "),a("li",[t._v("对象")])])]),t._v(" "),a("p",[a("strong",[t._v("1. ECMAScript的版本")])]),t._v(" "),a("ul",[a("li",[t._v("第一版")])]),t._v(" "),a("blockquote",[a("p",[t._v("本质与Netscape的JavaScript1.1相同，删除了所有针对浏览器的代码")])]),t._v(" "),a("ul",[a("li",[t._v("第二版")])]),t._v(" "),a("blockquote",[a("p",[t._v("主要是编辑加工的结果，没有做任何新增、修改或删节处理。一般不用第二版来衡量ECMAScript实现的兼容性。")])]),t._v(" "),a("ul",[a("li",[t._v("第三版")])]),t._v(" "),a("blockquote",[a("p",[t._v("是对该标准第一次真正的修改，内容涉及字符串处理、错误定义和数值输出，还新增了对正则表达式、新控制语句、try-catch异常处理的支持。该版本标志着ECMAScript成为了一门真正的编程语言。")])]),t._v(" "),a("ul",[a("li",[t._v("第四版")])]),t._v(" "),a("blockquote",[a("p",[t._v("是对该门语言的一次全面的检核修订。第 4版不仅包含了强类型变量、新语句和新数据结构、真正的类和经典继承，还定义了与数据 交互的新方式。 但由于其跨度太大，在发布前就被放弃。")])]),t._v(" "),a("ul",[a("li",[t._v("第五版")])]),t._v(" "),a("blockquote",[a("p",[t._v("ECMAScript3.1成为了第五版。其澄清了第三版本中的歧义并新添了新功能。新功能包括原生JSON对象(用于解析和序列化JSON数据)、继承的方法和高级属性定义，还包含一种严格模式，对ECMAScript引擎解释和执行代码进行了补充说明。")])]),t._v(" "),a("p",[a("strong",[t._v("2. ECMAScript兼容")]),t._v("\n要想成为ECMAScript的实现，必须做到：")]),t._v(" "),a("ul",[a("li",[t._v("支持 ECMA-262描述的所有“类型、值、对象、属性、函数以及程序句法和语义”")]),t._v(" "),a("li",[t._v("支持 Unicode字符标准")]),t._v(" "),a("li",[t._v("添加 ECMA-262没有描述的“更多类型、值、对象、属性和函数”")]),t._v(" "),a("li",[t._v("支持 ECMA-262 没有定义的“程序和正则表达式语法”。(也就是说，可以修改和扩展内置的正 则表达式语法。)")])]),t._v(" "),a("p",[a("strong",[t._v("3.Web浏览器对ECMAScript的支持")]),t._v("\n下表列出了主流Web浏览器对ECMAScript支持的情况:\n"),a("img",{attrs:{src:_(138),alt:"Alt text"}})]),t._v(" "),a("h4",{attrs:{id:"_2-2文档对象模型-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2文档对象模型-dom"}},[t._v("#")]),t._v(" "),a("div",{attrs:{id:"22"}},[t._v("2.2文档对象模型(DOM)")])]),t._v(" "),a("p",[t._v("DOM是针对XML但经过扩展用于HTML的应用程序编程接口(API)。DOM把整个页面映射为一个多层节点结构。如下图所示：\n"),a("code",[t._v("<html> \t <head> \t <title>Sample Page</title> </head> <body> \t <p>Hello World!</p> </body> </html>")])]),t._v(" "),a("p",[t._v("以上html代码在DOM可显示为:\n"),a("img",{attrs:{src:_(139),alt:"Alt text"}}),t._v("\n通过 DOM 创建的这个表示文档的树形图，开发人员获得了控制页面内容和结构的主动权。借助 DOM提供的 API，开发人员可以轻松自如地删除、添加、替换或修改任何节点。\n"),a("strong",[t._v("1.DOM级别")])]),t._v(" "),a("ul",[a("li",[t._v("一级：")])]),t._v(" "),a("blockquote",[a("p",[t._v("由DOM核心和DOM HTML两个模块组成，DOM核心规定是如何映射基于 XML的文档结构，以便简化对文档中任意部分的访问和操作。DOM HTML 模块则在 DOM 核心的基础上加以扩展，添加了针 对 HTML的对象和方法。")])]),t._v(" "),a("ul",[a("li",[t._v("二级：")])]),t._v(" "),a("blockquote",[a("p",[t._v("DOM2级在原来DOM的基础上又扩充了鼠标和用户界面事件、范围、遍历(迭代 DOM 文档的方法)等细分模块，而且通过对象接口增加了对 CSS的支持。DOM1级中的DOM核心模块也经过扩展开始支持 XML命名空间。 有下列新模块：\n+ DOM视图：定义了跟踪不同文档视图的接口\n+ DOM事件：定义了事件和事件处理的接口\n+ DOM样式：定义了基于 CSS为元素应用样式的接口\n+ DOM遍历和范围：定义了遍历和操作文档树的接口")])]),t._v(" "),a("ul",[a("li",[t._v("三级：")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("引入了以统一方式加载和保存文档的方法——在 DOM 加载和保存模块中定义")]),t._v(" "),a("li",[t._v("新增了验证文档的方法——在DOM验证模块中定义")]),t._v(" "),a("li",[t._v("扩展了DOM核心，开始支持 XML 1.0 规范，涉及 XML Infoset、XPath 和 XML Base。\n"),a("strong",[t._v("2.Web浏览器对DOM的支持")]),t._v("\n下表列出了主流浏览器对DOM标准的支持情况：\n"),a("img",{attrs:{src:_(140),alt:"Alt text"}})])])]),t._v(" "),a("h4",{attrs:{id:"_2-3浏览器对象模型-bom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3浏览器对象模型-bom"}},[t._v("#")]),t._v(" "),a("div",{attrs:{id:"23"}},[t._v("2.3浏览器对象模型(BOM)")])]),t._v(" "),a("p",[t._v("开发人员使用 BOM可以控制浏览器显示的页面 以外的部分。从根本上讲，BOM只处理浏览器窗口和框架，但人们习惯上也把所有针对浏览器的 JavaScript扩展 算作 BOM的一部分。下面就是一些这样的扩展：")]),t._v(" "),a("ul",[a("li",[t._v("弹出新浏览器窗口的功能")]),t._v(" "),a("li",[t._v("移动、缩放和关闭浏览器窗口的功能")]),t._v(" "),a("li",[t._v("提供浏览器详细信息的 navigator 对象")]),t._v(" "),a("li",[t._v("提供浏览器所加载页面的详细信息的 location 对象")]),t._v(" "),a("li",[t._v("提供用户显示器分辨率详细信息的 screen 对象")]),t._v(" "),a("li",[t._v("对 cookies的支持")]),t._v(" "),a("li",[t._v("像 XMLHttpRequest 和 IE的 ActiveXObject 这样的自定义对象")])])])}),[],!1,null,null,null);v.default=i.exports}}]);
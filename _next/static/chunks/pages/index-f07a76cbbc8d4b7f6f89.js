_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],m=r[l]||new Set;"name"===l&&i||!m.has(f)?(m.add(f),r[l]=m):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("q1tI"),c=function(){var e=Object(i.useMemo)((function(){for(var e=0,t=0,n=[];e<200;){var r=Math.floor(98*Math.random()+1);e+=Math.floor(4*Math.random()+2),t++,n.push({key:t,left:e,animationDelay:r,animationDuration:r})}return n}),[]),t=Object(i.useMemo)((function(){return e.map((function(e){return Object(r.jsx)("div",{className:"absolute bottom-full w-5 h-20 pointer-events-none animate-drop",style:{left:"".concat(e.left,"%"),top:"-10%",animationDelay:"0.".concat(e.animationDelay,"s"),animationDuration:"0.8".concat(e.animationDuration,"s")},children:Object(r.jsx)("div",{className:"w-0.5 h-3/5 bg-gradient-to-t from-indigo-500 dark:from-indigo-100 animate-stem",style:{animationDelay:"0.".concat(e.animationDelay,"s"),animationDuration:"0.8".concat(e.animationDuration,"s")}})},e.key)}))}),[]);return Object(r.jsx)("div",{className:"hidden md:block absolute left-0 top-0 z-10 h-screen w-screen pointer-events-none",children:t})},s=function(){return Object(r.jsx)("p",{className:"absolute text-3xl",children:"\ud83e\udd2b"})},u=[{key:"1",lineNumber:"10"},{key:"2",lineNumber:"11"},{key:"3",lineNumber:"12",tagName:"LukasAlius"},{key:"4",lineNumber:"13",text:"I\u2019m React, React-Native developer."},{key:"5",lineNumber:"14",text:"Current goal: transition to full stack development."},{key:"6",lineNumber:"15"},{key:"7",lineNumber:"16",text:"find me at:"},{key:"8",lineNumber:"17",links:[{key:"12",href:"https://github.com/LukasAlius/",text:"github"},{key:"13",href:"https://www.instagram.com/lukasalius/",text:"instagram"},{key:"14",href:"https://uk.linkedin.com/in/lukas-aliuskevicius-42926886",text:"linkedIn"}]},{key:"9",lineNumber:"18",text:" ",highlight:!0},{key:"10",lineNumber:"19",tagName:"LukasAlius",closeTag:!0},{key:"11",lineNumber:"20"}],l=function(e){var t=e.data,n=e.isLast;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("a",{className:"no-underline hover:underline focus:underline",href:t.href,children:t.text}),n?", ":""]})},f=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"flex flex-row justify-start items-center px-1 md:px-8 ".concat(t.highlight?"bg-terminal-800 rounded":""),children:[Object(r.jsx)("p",{className:"text-lg md:text-xl font-mono mr-5 select-none ".concat(t.highlight?"text-terminal-400":"text-terminal-600"),children:t.lineNumber}),t.tagName&&Object(r.jsxs)("p",{className:"text-lg md:text-xl text-terminal-200 font-mono",children:[t.closeTag?"</":"<",Object(r.jsx)("span",{className:"text-indigo-400",children:t.tagName}),">"]}),t.text&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"font-mono text-lg md:text-xl text-terminal-50 ml-2 md:ml-5",children:t.text}),t.highlight&&Object(r.jsx)("div",{className:"flex h-5 w-2 rounded-sm bg-terminal-50 animate-blink"})]}),t.links&&Object(r.jsx)("p",{className:"font-mono text-lg md:text-xl text-green-200 ml-2 md:ml-5 flex space-x-2",children:t.links.map((function(e,n){return Object(r.jsx)(l,{data:e,isLast:n<t.links.length-1},e.key)}))})]})},d=function(e){var t=e.showGameViewport,n=void 0!==t&&t,o=Object(i.useMemo)((function(){return u.map((function(e){return Object(r.jsx)(f,{data:e},e.key)}))}),[]);return Object(r.jsxs)("div",{className:"bg-terminal-900 rounded-3xl min-h-screen md:min-h-full mt-20 md:mt-0 p-5 max-w-4xl shadow-lg",children:[Object(r.jsxs)("div",{className:"flex pb-6 items-center",children:[Object(r.jsxs)("div",{className:"flex space-x-2",children:[Object(r.jsx)("div",{className:"rounded-full h-5 w-5 bg-red-500 hover:bg-red-400 cursor-pointer"}),Object(r.jsx)("div",{className:"rounded-full h-5 w-5 bg-yellow-500 hover:bg-yellow-400 cursor-pointer"}),Object(r.jsx)("div",{className:"rounded-full h-5 w-5 bg-green-500 hover:bg-green-400 cursor-pointer"})]}),Object(r.jsx)("p",{className:"font-sans text-lg text-terminal-400 ml-8 select-none",children:"index.js"})]}),Object(r.jsx)("div",{className:"flex-1 mt-10 mb-20",children:!n&&o})]})};function m(){var e=Object(i.useState)(!1),t=e[0],n=(e[1],Object(i.useState)(!0)),o=n[0],u=n[1];return Object(i.useEffect)((function(){setTimeout((function(){return u(!1)}),1e3)}),[]),Object(r.jsxs)("div",{className:"min-h-screen flex flex-row justify-center items-center bg-green-100 dark:bg-terminal-700",children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Lukas Alius. Developer"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("link",{rel:"preload",href:"/fonts/fira-code/FiraCode-Regular.ttf",as:"font",crossOrigin:""})]}),Object(r.jsx)(c,{}),!o&&Object(r.jsx)(s,{}),Object(r.jsx)("main",{className:"z-20 flex",children:Object(r.jsx)(d,{showGameViewport:t})})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);
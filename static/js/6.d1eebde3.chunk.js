(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(5),i=n(21),o=function(e){var t=e.data;return Object(a.jsx)("article",{className:"degree-container",children:Object(a.jsxs)("header",{children:[t.degree.map((function(e){return Object(a.jsx)("h4",{className:"degree",children:e})})),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(a.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(a.jsxs)("article",{className:"jobs-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(a.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]})},p=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"experience",children:[Object(a.jsx)("div",{className:"link-to",id:"experience"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(a.jsx)(u,{data:e},e.company)}))]})};p.defaultProps={data:[]};var b=p;function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var c=m(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return h(this,n)}}var f=n(56),v=n(55),O=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(a.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},x=function(e){var t=e.data,n=e.categories,c=t.category,r=t.competency,i=t.title,o={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(a.jsxs)("div",{className:"skillbar clearfix",children:[Object(a.jsx)("div",{className:"skillbar-title",style:o,children:Object(a.jsx)("span",{children:i})}),Object(a.jsx)("div",{className:"skillbar-bar",style:s}),Object(a.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};x.defaultProps={categories:[]};var S=x,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,c,r=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(v.a)(Object(v.a)({},n),{},Object(f.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(a.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(a.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("div",{className:"link-to",id:"skills"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h3",{children:"Skills"}),Object(a.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&y(t.prototype,n),c&&y(t,c),i}(c.Component);k.defaultProps={skills:[],categories:[]};var D=k,P=function(e){var t=e.data,n=e.last;return Object(a.jsxs)("li",{className:"course-container",children:[Object(a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(a.jsx)("p",{className:"course-name",children:t.title}),!n&&Object(a.jsx)("div",{className:"course-dot",children:Object(a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};P.defaultProps={last:!1};var w=P,N=function(e){var t,n=e.data;return Object(a.jsxs)("div",{className:"courses",children:[Object(a.jsx)("div",{className:"link-to",id:"courses"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Courses"})}),Object(a.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(a.jsx)(w,{data:e,last:n===t.length-1},e.title)})))})]})};N.defaultProps={data:[]};var E=N,C=[{title:"Object Oriented Programming",number:"CSE 11",link:"",university:"UCSD"}],J=[{school:"University of California, San Diego",degree:["B.S. Cognitive Science Specialzing in Machine Learning and Neural Computation","B.A. International Business - International Studies"],link:"https://ucsd.edu/",year:2023}],L=[{company:"Rantai",position:"Front End Developer Intern ",link:"https://rantai.tech/",daterange:"July 2020 - October 2020",points:["Reduced server load of the chat feature by 3% by creating a more efficient Multimedia Messaging System which compresses sent image until downloaded without sacrificing image quality from scratch using Java and Picasso","Improved user experience on tablets by maximizing the larger screen to implement a more aesthetically pleasing UI and optimized layout to change based on orientation preventing a stretched UI look","Enabled multi language support for the app by providing human translations for English and Indonesian and switch to machine translation for other language to allow the app to reach a global market"]},{company:"Cyberindo Sinergy Sistem",position:"Junior Java Programmer Intern",link:"http://www.cyberindo-sinergi.com",daterange:"July 2019 - September 2019",points:["Developed financial module for supply chain application using Selenium and MySQL Consists of automated payment checking through e-banking and updating database which reduces human error","Created the customer service instant messaging software for the client to report issues immediately using Jetty","Implemented a basic UI made with JavaFX to make it look more appealing for clients which displays order details, pending or completed, in table format and user-friendly as it only requires a single button to run"]}],W=n(17);var R=n(24);var I,M=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Dagster",competency:2,category:["Data Engineering","Python"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),T=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],A=(I=new Set(M.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(W.a)(e)}(I)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(I)||Object(R.a)(I)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:T[t]}})),B=["Education","Experience","Skills","Courses"];t.default=function(){return Object(a.jsx)(i.a,{title:"Resume",description:"Samantha J Susanto's Resume",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(a.jsx)("div",{className:"link-container",children:B.map((function(e){return Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(a.jsx)(l,{data:J}),Object(a.jsx)(E,{data:C}),Object(a.jsx)(b,{data:L}),Object(a.jsx)(D,{skills:M,categories:A})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(56);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},56:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=6.d1eebde3.chunk.js.map
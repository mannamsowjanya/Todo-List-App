(this["webpackJsonptodo-app-v2"]=this["webpackJsonptodo-app-v2"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),s=c(7),a=c.n(s),i=(c(13),c(3)),l=(c(14),c(8)),d=c(0),r=function(t){var e=t.setInputText,c=t.todos,o=t.setTodos,n=t.inputText,s=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:n,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),o([].concat(Object(l.a)(c),[{text:n,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.text,c=t.todo,o=t.todos,n=t.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsxs)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:[" ",e," "]}),Object(d.jsx)("button",{onClick:function(){n(o.map((function(t){return t.id===c.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{onClick:function(){n(o.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(d.jsx)(j,{setTodos:c,todos:e,todo:t,text:t.text},t.id)}))})})};var f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)([]),a=Object(i.a)(s,2),l=a[0],u=a[1],j=Object(o.useState)("all"),f=Object(i.a)(j,2),p=f[0],m=f[1],O=Object(o.useState)([]),x=Object(i.a)(O,2),h=x[0],v=x[1];Object(o.useEffect)((function(){N()}),[]),Object(o.useEffect)((function(){g()}),[l,p]);var g=function(){switch(p){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}},N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Your Todo List"})}),Object(d.jsx)(r,{inputText:c,todos:l,setTodos:u,setInputText:n,setStatus:m}),Object(d.jsx)(b,{filteredTodos:h,setTodos:u,todos:l})]})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.d1f004eb.chunk.js.map
(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),r=n.n(l),i=n(3),o=n(4),s=n(7),u=n(6),d=(n(13),n(5)),b=n.n(d),m=c.a.memo((function(e){var t=e.tabs,n=e.selectedTabId,a=e.onTabSelected,l=t.find((function(e){return e.id===n}));return c.a.createElement("div",null,c.a.createElement("ul",null,t.map((function(e){var t=e.id,l=e.title,r=b()({active:n===e.id});return c.a.createElement("li",{key:t,className:r},c.a.createElement("button",{type:"button",onClick:function(){a(e)}},l))}))),c.a.createElement("p",null,l.content))})),p=[{id:"tab-1",title:"Frontend",content:"Some text 1"},{id:"tab-2",title:"Java",content:"Some text 2"},{id:"tab-3",title:"QA",content:"Some text 3"}],f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:p[0]},e.onTabSelected=function(t){e.setState({selectedTab:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedTab,t=this.onTabSelected;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"Selected tab is\xa0",e.title),c.a.createElement(m,{tabs:p,selectedTabId:e.id,onTabSelected:t}))}}]),n}(c.a.Component);r.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e783b1b0.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistics_list__TdDX7",item:"Statistics_item__1XPxf",wrapper:"Statistics_wrapper__xrah1"}},,,,function(e,t,a){e.exports={block:"FeedbackOptions_block__3WtRf",button:"FeedbackOptions_button__289iG"}},function(e,t,a){e.exports={container:"Section_container__2qSZY",title:"Section_title__3FIwc"}},,,,,function(e,t,a){e.exports={title:"Notification_title__1kB7U"}},function(e,t,a){e.exports={container:"feedback_container__2bX5F"}},,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(7),r=a.n(s),i=(a(19),a(20),a(8)),o=a(9),l=a(10),b=a(14),d=a(13),u=a(5),j=a.n(u),p=a(0);var h=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(p.jsx)("div",{className:j.a.block,children:t.map((function(e){return Object(p.jsx)("button",{className:j.a.button,type:"button",onClick:function(){a(e)},children:e},e)}))})},m=a(6),O=a.n(m);var x=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("section",{className:O.a.container,children:[Object(p.jsx)("h2",{className:O.a.title,children:t}),a]})},f=a(3),k=a.n(f),v=a(1),_=a.n(v);function N(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.procent;return Object(p.jsxs)("ul",{className:_.a.list,children:[Object(p.jsxs)("li",{className:_.a.item,children:["Good: ",Object(p.jsx)("span",{className:_.a.wrapper,children:t})]}),Object(p.jsxs)("li",{className:_.a.item,children:["Neutral: ",Object(p.jsx)("span",{className:_.a.wrapper,children:a})]}),Object(p.jsxs)("li",{className:_.a.item,children:["Bad: ",Object(p.jsx)("span",{className:_.a.wrapper,children:n})]}),Object(p.jsxs)("li",{className:_.a.item,children:["Total: ",Object(p.jsx)("span",{className:_.a.wrapper,children:c})]}),Object(p.jsxs)("li",{className:_.a.item,children:["Positive feedback: ",Object(p.jsxs)("span",{className:_.a.wrapper,children:[s," %"]})," "]})]})}N.prototype={good:k.a.number,neutral:k.a.number,bad:k.a.number,total:k.a.number,procent:k.a.number};var g=N,w=a(11),F=a.n(w);var y=function(e){var t=e.message;return Object(p.jsx)("h2",{className:F.a.title,children:t})},S=a(12),P=a.n(S),T=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(100*this.state.good/this.countTotalFeedback())||0}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage(),r=Object.keys(this.state);return Object(p.jsxs)("div",{className:P.a.container,children:[Object(p.jsx)(x,{title:"\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u0430\u0448 \u043e\u0442\u0437\u044b\u0432 ",children:Object(p.jsx)(h,{options:r,onLeaveFeedback:this.addFeedback})}),Object(p.jsx)(x,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",children:0===c?Object(p.jsx)(y,{message:"No feedback given"}):Object(p.jsx)(g,{good:t,neutral:a,bad:n,total:c,procent:s})})]})}}]),a}(n.Component);var B=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(T,{})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.612d090b.chunk.js.map
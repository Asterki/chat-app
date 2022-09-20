(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{416:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounts/login",function(){return c(9425)}])},9425:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return z}});var d=c(7568),e=c(828),f=c(4051),g=c.n(f),h=c(5893),i=c(7294),j=c(9669),k=c.n(j),l=c(8966),m=c.n(l),n=c(1608),o=c(1555),p=c(6968),q=c(6336),r=c(5084),s=c(1163),t=c(9008),u=c.n(t),v=c(6565),w=c(2633),x=c.n(w),y=function(a){var b,c=(0,e.Z)(i.useState(!1),2),f=c[0],j=c[1],l=(0,e.Z)(i.useState(null),2),t=l[0],w=l[1],y=(0,e.Z)(i.useState(null),2),z=y[0],A=y[1],B=(0,e.Z)(i.useState(null),2),C=B[0],D=B[1],E=(0,e.Z)(i.useState("login-form"),2),F=E[0],G=E[1],H=(b=(0,d.Z)(g().mark(function b(c){var e,f,h;return g().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(c.preventDefault(),j(!0),w(null),A(null),e=document.querySelector("#email").value,f=document.querySelector("#password").value,h=document.querySelector("#tfa").value,e){b.next=10;break}return w(a.lang.emailRequired),b.abrupt("return",j(!1));case 10:if(f){b.next=13;break}return A(a.lang.passwordRequired),b.abrupt("return",j(!1));case 13:if(m().isEmail(e)){b.next=16;break}return w(a.lang.emailInvalid),b.abrupt("return",j(!1));case 16:(0,d.Z)(g().mark(function b(){var c;return g().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,k()({method:"POST",url:"".concat(a.host,"/api/accounts/login"),data:{password:f,email:e,tfaCode:h}});case 3:if("success"!=(c=b.sent).data.message){b.next=6;break}return b.abrupt("return",window.location.href="/home");case 6:if("requires-tfa"!=c.data.message){b.next=9;break}return j(!1),b.abrupt("return",G("tfa-form"));case 9:if("invalid-credentials"!=c.data.message){b.next=13;break}return document.querySelector("#password").value="",j(!1),b.abrupt("return",w(a.lang.emailOrPasswordIncorrect));case 13:if("invalid-tfa-code"!=c.data.message){b.next=17;break}return document.querySelector("#tfa").value="",j(!1),b.abrupt("return",D(a.lang.invalidTfa));case 17:if("rate-limit-exceeded"!=c.data.message){b.next=21;break}return document.querySelector("#password").value="",j(!1),b.abrupt("return",w(a.lang.rateLimitExceeded));case 21:return b.abrupt("return",window.location.href="/error?code=".concat(c.data.status,"&message=").concat(c.data.message));case 24:return b.prev=24,b.t0=b.catch(0),b.abrupt("return",window.location.href="/error?code=".concat(b.t0.response.status));case 27:case"end":return b.stop()}},b,null,[[0,24]])}))();case 17:case"end":return b.stop()}},b)})),function(a){return b.apply(this,arguments)});return(0,h.jsxs)("div",{className:x().page,children:[(0,h.jsx)(v.Z,{lang:a.lang.navbar,user:null}),(0,h.jsx)(u(),{children:(0,h.jsx)("title",{children:a.lang.pageTitle})}),(0,h.jsxs)(q.Z,{hidden:"login-form"!==F,className:x()["login-form"],children:[(0,h.jsx)("h3",{children:a.lang.title}),(0,h.jsx)("br",{}),(0,h.jsx)("label",{htmlFor:"email",children:a.lang.email}),(0,h.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"john@example.com"}),(0,h.jsx)("p",{className:x()["error-label"],children:t}),(0,h.jsx)("br",{}),(0,h.jsx)("label",{htmlFor:"password",children:a.lang.password}),(0,h.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"••••••••"}),(0,h.jsx)("p",{className:x()["error-label"],children:z}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)(n.Z,{xs:"1",sm:"1",md:"2",children:(0,h.jsx)(o.Z,{children:(0,h.jsxs)(r.Z,{onClick:H,disabled:f,type:"submit",children:[(0,h.jsx)("p",{hidden:f,children:a.lang.login}),(0,h.jsx)(p.Z,{size:"sm",hidden:!f,animation:"border"})]})})}),(0,h.jsx)("br",{}),(0,h.jsxs)("p",{children:[a.lang.doNotHaveAnAccount.split("&")[0]," ",(0,h.jsx)(s.Z,{href:"/register",children:a.lang.doNotHaveAnAccount.split("&")[1]})]})]}),(0,h.jsxs)(q.Z,{hidden:"tfa-form"!==F,className:x()["tfa-form"],children:[(0,h.jsx)("h3",{children:a.lang.title}),(0,h.jsx)("br",{}),(0,h.jsxs)("label",{htmlFor:"tfa",children:[a.lang.tfa,": ",a.lang.tfaHelp]}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"text",name:"tfa",id:"tfa",placeholder:"••••••"}),(0,h.jsx)("sub",{className:x()["error-label"],children:C}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsxs)(r.Z,{onClick:H,disabled:f,type:"submit",children:[(0,h.jsx)("p",{hidden:f,children:a.lang.submit}),(0,h.jsx)(p.Z,{size:"sm",hidden:!f,animation:"border"})]})]})]})},z=!0;b.default=y},2633:function(a){a.exports={page:"login_page__GFe0Z","login-form":"login_login-form__kyG3o","tfa-form":"login_tfa-form__KmDlR","reset-password":"login_reset-password___9qu6","error-label":"login_error-label__vdMLt"}}},function(a){a.O(0,[277,406,612,161,488,966,751,774,888,179],function(){var b;return a(a.s=416)}),_N_E=a.O()}])
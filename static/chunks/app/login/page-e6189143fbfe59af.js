(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{1182:function(e,t,r){Promise.resolve().then(r.bind(r,6833))},6833:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7437),o=r(2265),s=r(4033);let l="false";var a=e=>{if("true"==e)l="true";else if("false"==e)l="false";else if("check"==e)return console.log("ddrrrrrd",l),l};r(5355);var u=(0,r(1162).$)("9b52bd080b6b36074aec9a6b8f911cc8a5f1fcd8"),c=function(){let[e,t]=(0,o.useState)(""),[r,l]=(0,o.useState)(!1),c=(0,s.useRouter)();async function i(e){e.preventDefault();let r=await u();r.name===e.target.userName.value&&r.password===e.target.password.value?(a("true"),localStorage.setItem("loggedIn","true"),l(!0),t("false"),c.refresh()):t("true")}return(0,o.useEffect)(()=>{localStorage.getItem("loggedIn")&&l(!0)},[]),(0,n.jsx)("div",{className:"bg-blue-100",children:r?(0,n.jsx)("div",{className:"w-full max-w-xs mx-auto flex justify-center align-center",children:(0,n.jsxs)("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ",children:[(0,n.jsx)("p",{children:"You are logged in."}),(0,n.jsx)("p",{children:"Would you like to log out?"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:function(){var e;a("false"),null===(e=localStorage)||void 0===e||e.setItem("loggedIn","false"),l(!1),c.refresh()},children:"Yes"})]})}):(0,n.jsxs)("div",{className:"w-full max-w-xs mx-auto",children:[(0,n.jsx)("br",{}),(0,n.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:i,action:"",children:[(0,n.jsx)("input",{className:"mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"userName",type:"text",placeholder:"username"}),(0,n.jsx)("input",{className:"mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"password",type:"text",placeholder:"password"}),(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",type:"submit",children:"Submit"})]}),"true"===e?(0,n.jsx)("p",{children:"Login failed. Please try again."}):(0,n.jsx)("p",{})]})})}},1162:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return o}});let n=r(5355);function o(e){let{createServerReference:t}=r(6671);return t(e,n.callServer)}},622:function(e,t,r){"use strict";var n=r(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,i=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)l.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:i,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(5313)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=1182)}),_N_E=e.O()}]);
/*! For license information please see main.ed35d52f.chunk.js.LICENSE.txt */
(this["webpackJsonpsimple-rule-example"]=this["webpackJsonpsimple-rule-example"]||[]).push([[0],{12:function(e,r,t){"use strict";t.r(r);t(5);var n=t(0),o=t.n(n),c=t(3),a=t.n(c),i=t(2),u=t(1);function s(e,r){return e(r={exports:{}},r.exports),r.exports}var l="function"===typeof Symbol&&Symbol.for,f=l?Symbol.for("react.element"):60103,p=l?Symbol.for("react.portal"):60106,m=l?Symbol.for("react.fragment"):60107,y=l?Symbol.for("react.strict_mode"):60108,b=l?Symbol.for("react.profiler"):60114,d=l?Symbol.for("react.provider"):60109,v=l?Symbol.for("react.context"):60110,h=l?Symbol.for("react.async_mode"):60111,j=l?Symbol.for("react.concurrent_mode"):60111,O=l?Symbol.for("react.forward_ref"):60112,S=l?Symbol.for("react.suspense"):60113,E=l?Symbol.for("react.suspense_list"):60120,w=l?Symbol.for("react.memo"):60115,g=l?Symbol.for("react.lazy"):60116,C=l?Symbol.for("react.block"):60121,$=l?Symbol.for("react.fundamental"):60117,P=l?Symbol.for("react.responder"):60118,_=l?Symbol.for("react.scope"):60119;function T(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case f:switch(e=e.type){case h:case j:case m:case b:case y:case S:return e;default:switch(e=e&&e.$$typeof){case v:case O:case g:case w:case d:return e;default:return r}}case p:return r}}}function k(e){return T(e)===j}var x={AsyncMode:h,ConcurrentMode:j,ContextConsumer:v,ContextProvider:d,Element:f,ForwardRef:O,Fragment:m,Lazy:g,Memo:w,Portal:p,Profiler:b,StrictMode:y,Suspense:S,isAsyncMode:function(e){return k(e)||T(e)===h},isConcurrentMode:k,isContextConsumer:function(e){return T(e)===v},isContextProvider:function(e){return T(e)===d},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return T(e)===O},isFragment:function(e){return T(e)===m},isLazy:function(e){return T(e)===g},isMemo:function(e){return T(e)===w},isPortal:function(e){return T(e)===p},isProfiler:function(e){return T(e)===b},isStrictMode:function(e){return T(e)===y},isSuspense:function(e){return T(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===m||e===j||e===b||e===y||e===S||e===E||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===w||e.$$typeof===d||e.$$typeof===v||e.$$typeof===O||e.$$typeof===$||e.$$typeof===P||e.$$typeof===_||e.$$typeof===C)},typeOf:T},R=(s((function(e,r){0})),s((function(e){e.exports=x})),Object.getOwnPropertySymbols),U=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;function I(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Function.call.bind(Object.prototype.hasOwnProperty);function A(e,r,t,n,o){}A.resetWarningCache=function(){0};function L(){}function W(){}W.resetWarningCache=L;var q=s((function(e){e.exports=function(){function e(e,r,t,n,o,c){if(c!==F){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:W,resetWarningCache:L};return t.PropTypes=t,t}()})),z=Object(n.createContext)(),N=function(e,r){return Object(n.useCallback)((function(e){var r={};return Object.entries(e).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],o=t[1];r[n]=function(e){return o(e)}})),r}),[r])(e)};N.propTypes={userRolesSchema:q.object,currentUser:q.object};var B=function(e,r,t){var o=Object(n.useCallback)((function(e){return function(n){return e({record:n,currentUser:t,roles:r})}}),[t,r]);return Object(n.useCallback)((function(e){var r={};return Object.entries(e).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],c=t[1],a={};Object.entries(c).forEach((function(e){var r=Object(u.a)(e,2),t=r[0],n=r[1];if(!(n instanceof Function))throw new Error("Invalid rule format");a[t]=o(n)})),r[n]=a})),r}),[t])(e)};B.propTypes={rulesSchema:q.object,rolesMap:q.object,currentUser:q.object};var D=function(e,r,t){var n=N(r,t);return B(e,n,t)};D.propTypes={rulesSchema:q.object,userRolesSchema:q.object,currentUser:q.object};var J=function(e){var r=e.rulesSchema,t=e.userRolesSchema,n=e.currentUser,c=e.children,a=D(r,t,n);return o.a.createElement(z.Provider,{value:{schema:a}},c)};J.propTypes={rulesSchema:q.object,userRolesSchema:q.object,currentUser:q.object,children:q.any};var V=function(e){var r=Object(n.useContext)(z).schema;if(!e)throw new Error("Empty entity in simple-rules useRules hook");return r[e]};V.propTypes={entity:q.string};var H=function(e){var r=e.rule,t=e.record,n=e.entity,o=e.children;return V(n)[r](t)?o:null};H.propTypes={rule:q.string,entity:q.string,record:q.object,children:q.any};var Y=function(e){if(!e)throw new Error("Empty entity in simple-rules usePermissions hook");return Object(n.useCallback)((function(r){var t=r.rule,n=r.record,c=r.children;return o.a.createElement(H,{rule:t,record:n,children:c,entity:e})}),[e])};Y.propTypes={entity:q.string};var G=[{id:1,content:"Post visible for user with id = 1",owner_id:1},{id:2,content:"Post visible for user with id = 2",owner_id:2},{id:3,content:"Post visible for all users, unavailable for destroy",owner_id:null}],K=function(){var e=V("post"),r=Y("post");return G.map((function(t){return o.a.createElement("div",{key:t.id},e.show(t)&&"".concat(t.id,". ").concat(t.content),o.a.createElement(r,{rule:"destroy",record:t},"(Available for destroy)"))}))},Q={post:{show:function(e){var r=e.currentUser,t=e.record;e.roles;return!t.owner_id||t.owner_id===r.id},destroy:function(e){var r=e.currentUser,t=e.record;return e.roles.admin(r)&&t.owner_id===r.id}}},X={admin:function(e){return"admin"===e.role}},Z=function(){var e=Object(n.useState)({id:1,role:"admin"}),r=Object(u.a)(e,2),t=r[0],c=r[1];return o.a.createElement(J,{rulesSchema:Q,userRolesSchema:X,currentUser:t},o.a.createElement("p",null,"User id:",o.a.createElement("select",{value:t.id,onChange:function(e){var r=e.target.value;c((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:parseInt(r)})}))}},o.a.createElement("option",{value:1},"1"),o.a.createElement("option",{value:2},"2"),o.a.createElement("option",{value:3},"3"))),o.a.createElement("p",null,"User role:",o.a.createElement("select",{value:t.role,onChange:function(e){var r=e.target.value;c((function(e){return Object(i.a)(Object(i.a)({},e),{},{role:r})}))}},o.a.createElement("option",{value:"admin"},"Admin"),o.a.createElement("option",{value:"client"},"Client"))),o.a.createElement(K,null))};a.a.render(o.a.createElement(Z,null),document.getElementById("root"))},4:function(e,r,t){e.exports=t(12)},5:function(e,r,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.ed35d52f.chunk.js.map
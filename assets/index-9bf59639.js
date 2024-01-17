function wy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ki(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pm={exports:{}},Ss={},hm={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),by=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),Cy=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),ky=Symbol.for("react.context"),$y=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Oy=Symbol.for("react.memo"),_y=Symbol.for("react.lazy"),vf=Symbol.iterator;function Ry(e){return e===null||typeof e!="object"?null:(e=vf&&e[vf]||e["@@iterator"],typeof e=="function"?e:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,vm={};function fo(e,t,n){this.props=e,this.context=t,this.refs=vm,this.updater=n||mm}fo.prototype.isReactComponent={};fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ym(){}ym.prototype=fo.prototype;function Vc(e,t,n){this.props=e,this.context=t,this.refs=vm,this.updater=n||mm}var Wc=Vc.prototype=new ym;Wc.constructor=Vc;gm(Wc,fo.prototype);Wc.isPureReactComponent=!0;var yf=Array.isArray,xm=Object.prototype.hasOwnProperty,Qc={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function Sm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)xm.call(t,r)&&!wm.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:$i,type:e,key:i,ref:a,props:o,_owner:Qc.current}}function Ay(e,t){return{$$typeof:$i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qc(e){return typeof e=="object"&&e!==null&&e.$$typeof===$i}function Ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xf=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ny(""+e.key):t.toString(36)}function ga(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $i:case Ey:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Sl(a,0):r,yf(o)?(n="",e!=null&&(n=e.replace(xf,"$&/")+"/"),ga(o,t,n,"",function(u){return u})):o!=null&&(qc(o)&&(o=Ay(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(xf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",yf(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Sl(i,s);a+=ga(i,t,n,l,o)}else if(l=Ry(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Sl(i,s++),a+=ga(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Di(e,t,n){if(e==null)return e;var r=[],o=0;return ga(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Iy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},va={transition:null},Ly={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:va,ReactCurrentOwner:Qc};J.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!qc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=fo;J.Fragment=by;J.Profiler=Cy;J.PureComponent=Vc;J.StrictMode=jy;J.Suspense=Py;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ly;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Qc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)xm.call(t,l)&&!wm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:$i,type:e.type,key:o,ref:i,props:r,_owner:a}};J.createContext=function(e){return e={$$typeof:ky,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ty,_context:e},e.Consumer=e};J.createElement=Sm;J.createFactory=function(e){var t=Sm.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:$y,render:e}};J.isValidElement=qc;J.lazy=function(e){return{$$typeof:_y,_payload:{_status:-1,_result:e},_init:Iy}};J.memo=function(e,t){return{$$typeof:Oy,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=va.transition;va.transition={};try{e()}finally{va.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return Ze.current.useCallback(e,t)};J.useContext=function(e){return Ze.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ze.current.useEffect(e,t)};J.useId=function(){return Ze.current.useId()};J.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ze.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};J.useRef=function(e){return Ze.current.useRef(e)};J.useState=function(e){return Ze.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ze.current.useTransition()};J.version="18.2.0";hm.exports=J;var T=hm.exports;const W=ki(T),zy=wy({__proto__:null,default:W},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=T,Dy=Symbol.for("react.element"),Fy=Symbol.for("react.fragment"),Uy=Object.prototype.hasOwnProperty,By=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hy={key:!0,ref:!0,__self:!0,__source:!0};function Em(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Uy.call(t,r)&&!Hy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Dy,type:e,key:i,ref:a,props:o,_owner:By.current}}Ss.Fragment=Fy;Ss.jsx=Em;Ss.jsxs=Em;pm.exports=Ss;var d=pm.exports,wu={},bm={exports:{}},ht={},jm={exports:{}},Cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var V=N.length;N.push(B);e:for(;0<V;){var le=V-1>>>1,he=N[le];if(0<o(he,B))N[le]=B,N[V]=he,V=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],V=N.pop();if(V!==B){N[0]=V;e:for(var le=0,he=N.length,lt=he>>>1;le<lt;){var Oe=2*(le+1)-1,yt=N[Oe],we=Oe+1,$e=N[we];if(0>o(yt,V))we<he&&0>o($e,yt)?(N[le]=$e,N[we]=V,le=we):(N[le]=yt,N[Oe]=V,le=Oe);else if(we<he&&0>o($e,V))N[le]=$e,N[we]=V,le=we;else break e}}return B}function o(N,B){var V=N.sortIndex-B.sortIndex;return V!==0?V:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,m=3,g=!1,h=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function S(N){if(y=!1,w(N),!h)if(n(l)!==null)h=!0,ae(j);else{var B=n(u);B!==null&&pe(S,B.startTime-N)}}function j(N,B){h=!1,y&&(y=!1,v(P),P=-1),g=!0;var V=m;try{for(w(B),f=n(l);f!==null&&(!(f.expirationTime>B)||N&&!D());){var le=f.callback;if(typeof le=="function"){f.callback=null,m=f.priorityLevel;var he=le(f.expirationTime<=B);B=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),w(B)}else r(l);f=n(l)}if(f!==null)var lt=!0;else{var Oe=n(u);Oe!==null&&pe(S,Oe.startTime-B),lt=!1}return lt}finally{f=null,m=V,g=!1}}var k=!1,C=null,P=-1,O=5,R=-1;function D(){return!(e.unstable_now()-R<O)}function U(){if(C!==null){var N=e.unstable_now();R=N;var B=!0;try{B=C(!0,N)}finally{B?F():(k=!1,C=null)}}else k=!1}var F;if(typeof p=="function")F=function(){p(U)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,xe=Z.port2;Z.port1.onmessage=U,F=function(){xe.postMessage(null)}}else F=function(){E(U,0)};function ae(N){C=N,k||(k=!0,F())}function pe(N,B){P=E(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,ae(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var V=m;m=B;try{return N()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=m;m=N;try{return B()}finally{m=V}},e.unstable_scheduleCallback=function(N,B,V){var le=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?le+V:le):V=le,N){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=V+he,N={id:c++,callback:B,priorityLevel:N,startTime:V,expirationTime:he,sortIndex:-1},V>le?(N.sortIndex=V,t(u,N),n(l)===null&&N===n(u)&&(y?(v(P),P=-1):y=!0,pe(S,V-le))):(N.sortIndex=he,t(l,N),h||g||(h=!0,ae(j))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var B=m;return function(){var V=m;m=B;try{return N.apply(this,arguments)}finally{m=V}}}})(Cm);jm.exports=Cm;var Vy=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=T,ft=Vy;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,Zo={};function yr(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Zo[e]=t,e=0;e<t.length;e++)km.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,Wy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf={},Sf={};function Qy(e){return Su.call(Sf,e)?!0:Su.call(wf,e)?!1:Wy.test(e)?Sf[e]=!0:(wf[e]=!0,!1)}function qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yy(e,t,n,r){if(t===null||typeof t>"u"||qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function Kc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yc,Kc);Ve[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yc,Kc);Ve[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yc,Kc);Ve[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gc(e,t,n,r){var o=Ve.hasOwnProperty(t)?Ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yy(t,n,o,r)&&(n=null),r||o===null?Qy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mn=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),kr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),Jc=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),Zc=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),Ef=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=Ef&&e[Ef]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,El;function Ao(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var bl=!1;function jl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ao(e):""}function Ky(e){switch(e.tag){case 5:return Ao(e.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function Cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case kr:return"Portal";case Eu:return"Profiler";case Xc:return"StrictMode";case bu:return"Suspense";case ju:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pm:return(e.displayName||"Context")+".Consumer";case $m:return(e._context.displayName||"Context")+".Provider";case Jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zc:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}function Gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(t);case 8:return t===Xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _m(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xy(e){var t=_m(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=Xy(e))}function Rm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_m(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tu(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Am(e,t){t=t.checked,t!=null&&Gc(e,"checked",t,!1)}function ku(e,t){Am(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$u(e,t.type,n):t.hasOwnProperty("defaultValue")&&$u(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $u(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Ur(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(No(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function Nm(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Im(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Im(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(e){Jy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uo[t]=Uo[e]})});function zm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uo.hasOwnProperty(e)&&Uo[e]?(""+t).trim():t+"px"}function Mm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=zm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Zy=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(e,t){if(t){if(Zy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nu=null,Br=null,Hr=null;function kf(e){if(e=_i(e)){if(typeof Nu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ts(t),Nu(e.stateNode,e.type,t))}}function Dm(e){Br?Hr?Hr.push(e):Hr=[e]:Br=e}function Fm(){if(Br){var e=Br,t=Hr;if(Hr=Br=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function Um(e,t){return e(t)}function Bm(){}var Cl=!1;function Hm(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Um(e,t,n)}finally{Cl=!1,(Br!==null||Hr!==null)&&(Bm(),Fm())}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Iu=!1;if(cn)try{var So={};Object.defineProperty(So,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Iu=!1}function e1(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Bo=!1,Ma=null,Da=!1,Lu=null,t1={onError:function(e){Bo=!0,Ma=e}};function n1(e,t,n,r,o,i,a,s,l){Bo=!1,Ma=null,e1.apply(t1,arguments)}function r1(e,t,n,r,o,i,a,s,l){if(n1.apply(this,arguments),Bo){if(Bo){var u=Ma;Bo=!1,Ma=null}else throw Error(A(198));Da||(Da=!0,Lu=u)}}function xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $f(e){if(xr(e)!==e)throw Error(A(188))}function o1(e){var t=e.alternate;if(!t){if(t=xr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $f(o),e;if(i===r)return $f(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Wm(e){return e=o1(e),e!==null?Qm(e):null}function Qm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qm(e);if(t!==null)return t;e=e.sibling}return null}var qm=ft.unstable_scheduleCallback,Pf=ft.unstable_cancelCallback,i1=ft.unstable_shouldYield,a1=ft.unstable_requestPaint,Pe=ft.unstable_now,s1=ft.unstable_getCurrentPriorityLevel,td=ft.unstable_ImmediatePriority,Ym=ft.unstable_UserBlockingPriority,Fa=ft.unstable_NormalPriority,l1=ft.unstable_LowPriority,Km=ft.unstable_IdlePriority,Es=null,Gt=null;function u1(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:f1,c1=Math.log,d1=Math.LN2;function f1(e){return e>>>=0,e===0?32:31-(c1(e)/d1|0)|0}var Hi=64,Vi=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Io(s):(i&=a,i!==0&&(r=Io(i)))}else a=n&~o,a!==0?r=Io(a):i!==0&&(r=Io(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),o=1<<n,r|=e[n],t&=~o;return r}function p1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ft(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=p1(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function zu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gm(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function m1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function Xm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jm,rd,Zm,eg,tg,Mu=!1,Wi=[],_n=null,Rn=null,An=null,ni=new Map,ri=new Map,jn=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function Eo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=_i(t),t!==null&&rd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function v1(e,t,n,r,o){switch(t){case"focusin":return _n=Eo(_n,e,t,n,r,o),!0;case"dragenter":return Rn=Eo(Rn,e,t,n,r,o),!0;case"mouseover":return An=Eo(An,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ni.set(i,Eo(ni.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ri.set(i,Eo(ri.get(i)||null,e,t,n,r,o)),!0}return!1}function ng(e){var t=nr(e.target);if(t!==null){var n=xr(t);if(n!==null){if(t=n.tag,t===13){if(t=Vm(n),t!==null){e.blockedOn=t,tg(e.priority,function(){Zm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Au=r,n.target.dispatchEvent(r),Au=null}else return t=_i(n),t!==null&&rd(t),e.blockedOn=n,!1;t.shift()}return!0}function _f(e,t,n){ya(e)&&n.delete(t)}function y1(){Mu=!1,_n!==null&&ya(_n)&&(_n=null),Rn!==null&&ya(Rn)&&(Rn=null),An!==null&&ya(An)&&(An=null),ni.forEach(_f),ri.forEach(_f)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,y1)))}function oi(e){function t(o){return bo(o,e)}if(0<Wi.length){bo(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&bo(_n,e),Rn!==null&&bo(Rn,e),An!==null&&bo(An,e),ni.forEach(t),ri.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&jn.shift()}var Vr=mn.ReactCurrentBatchConfig,Ba=!0;function x1(e,t,n,r){var o=ce,i=Vr.transition;Vr.transition=null;try{ce=1,od(e,t,n,r)}finally{ce=o,Vr.transition=i}}function w1(e,t,n,r){var o=ce,i=Vr.transition;Vr.transition=null;try{ce=4,od(e,t,n,r)}finally{ce=o,Vr.transition=i}}function od(e,t,n,r){if(Ba){var o=Du(e,t,n,r);if(o===null)Ll(e,t,r,Ha,n),Of(e,r);else if(v1(o,e,t,n,r))r.stopPropagation();else if(Of(e,r),t&4&&-1<g1.indexOf(e)){for(;o!==null;){var i=_i(o);if(i!==null&&Jm(i),i=Du(e,t,n,r),i===null&&Ll(e,t,r,Ha,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var Ha=null;function Du(e,t,n,r){if(Ha=null,e=ed(r),e=nr(e),e!==null)if(t=xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ha=e,null}function rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s1()){case td:return 1;case Ym:return 4;case Fa:case l1:return 16;case Km:return 536870912;default:return 16}default:return 16}}var kn=null,id=null,xa=null;function og(){if(xa)return xa;var e,t=id,n=t.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return xa=o.slice(e,1<r?1-r:void 0)}function wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function Rf(){return!1}function mt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qi:Rf,this.isPropagationStopped=Rf,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=mt(po),Oi=Te({},po,{view:0,detail:0}),S1=mt(Oi),kl,$l,jo,bs=Te({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(kl=e.screenX-jo.screenX,$l=e.screenY-jo.screenY):$l=kl=0,jo=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Af=mt(bs),E1=Te({},bs,{dataTransfer:0}),b1=mt(E1),j1=Te({},Oi,{relatedTarget:0}),Pl=mt(j1),C1=Te({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=mt(C1),k1=Te({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$1=mt(k1),P1=Te({},po,{data:0}),Nf=mt(P1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R1[e])?!!t[e]:!1}function sd(){return A1}var N1=Te({},Oi,{key:function(e){if(e.key){var t=O1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=mt(N1),L1=Te({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=mt(L1),z1=Te({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),M1=mt(z1),D1=Te({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),F1=mt(D1),U1=Te({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B1=mt(U1),H1=[9,13,27,32],ld=cn&&"CompositionEvent"in window,Ho=null;cn&&"documentMode"in document&&(Ho=document.documentMode);var V1=cn&&"TextEvent"in window&&!Ho,ig=cn&&(!ld||Ho&&8<Ho&&11>=Ho),Lf=String.fromCharCode(32),zf=!1;function ag(e,t){switch(e){case"keyup":return H1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function W1(e,t){switch(e){case"compositionend":return sg(t);case"keypress":return t.which!==32?null:(zf=!0,Lf);case"textInput":return e=t.data,e===Lf&&zf?null:e;default:return null}}function Q1(e,t){if(Pr)return e==="compositionend"||!ld&&ag(e,t)?(e=og(),xa=id=kn=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ig&&t.locale!=="ko"?null:t.data;default:return null}}var q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!q1[e.type]:t==="textarea"}function lg(e,t,n,r){Dm(r),t=Va(t,"onChange"),0<t.length&&(n=new ad("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vo=null,ii=null;function Y1(e){xg(e,0)}function js(e){var t=Rr(e);if(Rm(t))return e}function K1(e,t){if(e==="change")return t}var ug=!1;if(cn){var Ol;if(cn){var _l="oninput"in document;if(!_l){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),_l=typeof Df.oninput=="function"}Ol=_l}else Ol=!1;ug=Ol&&(!document.documentMode||9<document.documentMode)}function Ff(){Vo&&(Vo.detachEvent("onpropertychange",cg),ii=Vo=null)}function cg(e){if(e.propertyName==="value"&&js(ii)){var t=[];lg(t,ii,e,ed(e)),Hm(Y1,t)}}function G1(e,t,n){e==="focusin"?(Ff(),Vo=t,ii=n,Vo.attachEvent("onpropertychange",cg)):e==="focusout"&&Ff()}function X1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(ii)}function J1(e,t){if(e==="click")return js(t)}function Z1(e,t){if(e==="input"||e==="change")return js(t)}function ex(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:ex;function ai(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Su.call(t,o)||!Ht(e[o],t[o]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bf(e,t){var n=Uf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function dg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fg(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tx(e){var t=fg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dg(n.ownerDocument.documentElement,n)){if(r!==null&&ud(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bf(n,i);var a=Bf(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nx=cn&&"documentMode"in document&&11>=document.documentMode,Or=null,Fu=null,Wo=null,Uu=!1;function Hf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||Or==null||Or!==za(r)||(r=Or,"selectionStart"in r&&ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wo&&ai(Wo,r)||(Wo=r,r=Va(Fu,"onSelect"),0<r.length&&(t=new ad("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},Rl={},pg={};cn&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Cs(e){if(Rl[e])return Rl[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pg)return Rl[e]=t[n];return e}var hg=Cs("animationend"),mg=Cs("animationiteration"),gg=Cs("animationstart"),vg=Cs("transitionend"),yg=new Map,Vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){yg.set(e,t),yr(t,[e])}for(var Al=0;Al<Vf.length;Al++){var Nl=Vf[Al],rx=Nl.toLowerCase(),ox=Nl[0].toUpperCase()+Nl.slice(1);Yn(rx,"on"+ox)}Yn(hg,"onAnimationEnd");Yn(mg,"onAnimationIteration");Yn(gg,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(vg,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function Wf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,r1(r,t,void 0,e),e.currentTarget=null}function xg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Wf(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Wf(o,s,u),i=l}}}if(Da)throw e=Lu,Da=!1,Lu=null,e}function ge(e,t){var n=t[Qu];n===void 0&&(n=t[Qu]=new Set);var r=e+"__bubble";n.has(r)||(wg(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),wg(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Yi]){e[Yi]=!0,km.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Il("selectionchange",!1,t))}}function wg(e,t,n,r){switch(rg(t)){case 1:var o=x1;break;case 4:o=w1;break;default:o=od}n=o.bind(null,t,n,e),o=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=nr(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Hm(function(){var u=i,c=ed(n),f=[];e:{var m=yg.get(e);if(m!==void 0){var g=ad,h=e;switch(e){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":g=I1;break;case"focusin":h="focus",g=Pl;break;case"focusout":h="blur",g=Pl;break;case"beforeblur":case"afterblur":g=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=M1;break;case hg:case mg:case gg:g=T1;break;case vg:g=F1;break;case"scroll":g=S1;break;case"wheel":g=B1;break;case"copy":case"cut":case"paste":g=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=If}var y=(t&4)!==0,E=!y&&e==="scroll",v=y?m!==null?m+"Capture":null:m;y=[];for(var p=u,w;p!==null;){w=p;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,v!==null&&(S=ti(p,v),S!=null&&y.push(li(p,S,w)))),E)break;p=p.return}0<y.length&&(m=new g(m,h,null,n,c),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Au&&(h=n.relatedTarget||n.fromElement)&&(nr(h)||h[dn]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=u,h=h?nr(h):null,h!==null&&(E=xr(h),h!==E||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=u),g!==h)){if(y=Af,S="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=If,S="onPointerLeave",v="onPointerEnter",p="pointer"),E=g==null?m:Rr(g),w=h==null?m:Rr(h),m=new y(S,p+"leave",g,n,c),m.target=E,m.relatedTarget=w,S=null,nr(c)===u&&(y=new y(v,p+"enter",h,n,c),y.target=w,y.relatedTarget=E,S=y),E=S,g&&h)t:{for(y=g,v=h,p=0,w=y;w;w=br(w))p++;for(w=0,S=v;S;S=br(S))w++;for(;0<p-w;)y=br(y),p--;for(;0<w-p;)v=br(v),w--;for(;p--;){if(y===v||v!==null&&y===v.alternate)break t;y=br(y),v=br(v)}y=null}else y=null;g!==null&&Qf(f,m,g,y,!1),h!==null&&E!==null&&Qf(f,E,h,y,!0)}}e:{if(m=u?Rr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var j=K1;else if(Mf(m))if(ug)j=Z1;else{j=X1;var k=G1}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=J1);if(j&&(j=j(e,u))){lg(f,j,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&$u(m,"number",m.value)}switch(k=u?Rr(u):window,e){case"focusin":(Mf(k)||k.contentEditable==="true")&&(Or=k,Fu=u,Wo=null);break;case"focusout":Wo=Fu=Or=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Hf(f,n,c);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":Hf(f,n,c)}var C;if(ld)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Pr?ag(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ig&&n.locale!=="ko"&&(Pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Pr&&(C=og()):(kn=c,id="value"in kn?kn.value:kn.textContent,Pr=!0)),k=Va(u,P),0<k.length&&(P=new Nf(P,e,null,n,c),f.push({event:P,listeners:k}),C?P.data=C:(C=sg(n),C!==null&&(P.data=C)))),(C=V1?W1(e,n):Q1(e,n))&&(u=Va(u,"onBeforeInput"),0<u.length&&(c=new Nf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}xg(f,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ti(e,n),i!=null&&r.unshift(li(e,i,o)),i=ti(e,t),i!=null&&r.push(li(e,i,o))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qf(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=ti(n,i),l!=null&&a.unshift(li(n,l,s))):o||(l=ti(n,i),l!=null&&a.push(li(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ax=/\r\n?/g,sx=/\u0000|\uFFFD/g;function qf(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(sx,"")}function Ki(e,t,n){if(t=qf(t),qf(e)!==t&&n)throw Error(A(425))}function Wa(){}var Bu=null,Hu=null;function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(cx)}:Wu;function cx(e){setTimeout(function(){throw e})}function zl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);oi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ho,ui="__reactProps$"+ho,dn="__reactContainer$"+ho,Qu="__reactEvents$"+ho,dx="__reactListeners$"+ho,fx="__reactHandles$"+ho;function nr(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kf(e);e!==null;){if(n=e[Yt])return n;e=Kf(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[Yt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ts(e){return e[ui]||null}var qu=[],Ar=-1;function Kn(e){return{current:e}}function ye(e){0>Ar||(e.current=qu[Ar],qu[Ar]=null,Ar--)}function me(e,t){Ar++,qu[Ar]=e.current,e.current=t}var Wn={},Ge=Kn(Wn),it=Kn(!1),dr=Wn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function Qa(){ye(it),ye(Ge)}function Gf(e,t,n){if(Ge.current!==Wn)throw Error(A(168));me(Ge,t),me(it,n)}function Sg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,Gy(e)||"Unknown",o));return Te({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,dr=Ge.current,me(Ge,e),me(it,it.current),!0}function Xf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Sg(e,t,dr),r.__reactInternalMemoizedMergedChildContext=e,ye(it),ye(Ge),me(Ge,e)):ye(it),me(it,n)}var on=null,ks=!1,Ml=!1;function Eg(e){on===null?on=[e]:on.push(e)}function px(e){ks=!0,Eg(e)}function Gn(){if(!Ml&&on!==null){Ml=!0;var e=0,t=ce;try{var n=on;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,ks=!1}catch(o){throw on!==null&&(on=on.slice(e+1)),qm(td,Gn),o}finally{ce=t,Ml=!1}}return null}var Nr=[],Ir=0,Ya=null,Ka=0,jt=[],Ct=0,fr=null,an=1,sn="";function Jn(e,t){Nr[Ir++]=Ka,Nr[Ir++]=Ya,Ya=e,Ka=t}function bg(e,t,n){jt[Ct++]=an,jt[Ct++]=sn,jt[Ct++]=fr,fr=e;var r=an;e=sn;var o=32-Ft(r)-1;r&=~(1<<o),n+=1;var i=32-Ft(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,an=1<<32-Ft(t)+o|n<<o|r,sn=i+e}else an=1<<i|n<<o|r,sn=e}function cd(e){e.return!==null&&(Jn(e,1),bg(e,1,0))}function dd(e){for(;e===Ya;)Ya=Nr[--Ir],Nr[Ir]=null,Ka=Nr[--Ir],Nr[Ir]=null;for(;e===fr;)fr=jt[--Ct],jt[Ct]=null,sn=jt[--Ct],jt[Ct]=null,an=jt[--Ct],jt[Ct]=null}var dt=null,ct=null,be=!1,zt=null;function jg(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fr!==null?{id:an,overflow:sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function Yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ku(e){if(be){var t=ct;if(t){var n=t;if(!Jf(e,t)){if(Yu(e))throw Error(A(418));t=Nn(n.nextSibling);var r=dt;t&&Jf(e,t)?jg(r,n):(e.flags=e.flags&-4097|2,be=!1,dt=e)}}else{if(Yu(e))throw Error(A(418));e.flags=e.flags&-4097|2,be=!1,dt=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Gi(e){if(e!==dt)return!1;if(!be)return Zf(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vu(e.type,e.memoizedProps)),t&&(t=ct)){if(Yu(e))throw Cg(),Error(A(418));for(;t;)jg(e,t),t=Nn(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?Nn(e.stateNode.nextSibling):null;return!0}function Cg(){for(var e=ct;e;)e=Nn(e.nextSibling)}function Jr(){ct=dt=null,be=!1}function fd(e){zt===null?zt=[e]:zt.push(e)}var hx=mn.ReactCurrentBatchConfig;function It(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ga=Kn(null),Xa=null,Lr=null,pd=null;function hd(){pd=Lr=Xa=null}function md(e){var t=Ga.current;ye(Ga),e._currentValue=t}function Gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wr(e,t){Xa=e,pd=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(pd!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(Xa===null)throw Error(A(308));Lr=e,Xa.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var rr=null;function gd(e){rr===null?rr=[e]:rr.push(e)}function Tg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,gd(t)):(n.next=o.next,o.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fn(e,n)}return o=r.interleaved,o===null?(t.next=t,gd(r)):(t.next=o.next,o.next=t),r.interleaved=t,fn(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nd(e,n)}}function ep(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ja(e,t,n,r){var o=e.updateQueue;bn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,c=u=l=null,s=i;do{var m=s.lane,g=s.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,y=s;switch(m=t,g=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){f=h.call(g,f,m);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(g,f,m):h,m==null)break e;f=Te({},f,m);break e;case 2:bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);hr|=a,e.lanes=a,e.memoizedState=f}}function tp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var $g=new Tm.Component().refs;function Xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $s={isMounted:function(e){return(e=e._reactInternals)?xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),o=zn(e),i=ln(r,o);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ut(t,e,o,r),Sa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),o=zn(e),i=ln(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ut(t,e,o,r),Sa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=zn(e),o=ln(n,r);o.tag=2,t!=null&&(o.callback=t),t=In(e,o,r),t!==null&&(Ut(t,e,r,n),Sa(t,e,r))}};function np(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ai(n,r)||!ai(o,i):!0}function Pg(e,t,n){var r=!1,o=Wn,i=t.contextType;return typeof i=="object"&&i!==null?i=Pt(i):(o=at(t)?dr:Ge.current,r=t.contextTypes,i=(r=r!=null)?Xr(e,o):Wn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function rp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$s.enqueueReplaceState(t,t.state,null)}function Ju(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=$g,vd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Pt(i):(i=at(t)?dr:Ge.current,o.context=Xr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$s.enqueueReplaceState(o,o.state,null),Ja(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===$g&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function op(e){var t=e._init;return t(e._payload)}function Og(e){function t(v,p){if(e){var w=v.deletions;w===null?(v.deletions=[p],v.flags|=16):w.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function o(v,p){return v=Mn(v,p),v.index=0,v.sibling=null,v}function i(v,p,w){return v.index=w,e?(w=v.alternate,w!==null?(w=w.index,w<p?(v.flags|=2,p):w):(v.flags|=2,p)):(v.flags|=1048576,p)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,p,w,S){return p===null||p.tag!==6?(p=Wl(w,v.mode,S),p.return=v,p):(p=o(p,w),p.return=v,p)}function l(v,p,w,S){var j=w.type;return j===$r?c(v,p,w.props.children,S,w.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===En&&op(j)===p.type)?(S=o(p,w.props),S.ref=Co(v,p,w),S.return=v,S):(S=ka(w.type,w.key,w.props,null,v.mode,S),S.ref=Co(v,p,w),S.return=v,S)}function u(v,p,w,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=Ql(w,v.mode,S),p.return=v,p):(p=o(p,w.children||[]),p.return=v,p)}function c(v,p,w,S,j){return p===null||p.tag!==7?(p=lr(w,v.mode,S,j),p.return=v,p):(p=o(p,w),p.return=v,p)}function f(v,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wl(""+p,v.mode,w),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fi:return w=ka(p.type,p.key,p.props,null,v.mode,w),w.ref=Co(v,null,p),w.return=v,w;case kr:return p=Ql(p,v.mode,w),p.return=v,p;case En:var S=p._init;return f(v,S(p._payload),w)}if(No(p)||wo(p))return p=lr(p,v.mode,w,null),p.return=v,p;Xi(v,p)}return null}function m(v,p,w,S){var j=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return j!==null?null:s(v,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fi:return w.key===j?l(v,p,w,S):null;case kr:return w.key===j?u(v,p,w,S):null;case En:return j=w._init,m(v,p,j(w._payload),S)}if(No(w)||wo(w))return j!==null?null:c(v,p,w,S,null);Xi(v,w)}return null}function g(v,p,w,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(w)||null,s(p,v,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fi:return v=v.get(S.key===null?w:S.key)||null,l(p,v,S,j);case kr:return v=v.get(S.key===null?w:S.key)||null,u(p,v,S,j);case En:var k=S._init;return g(v,p,w,k(S._payload),j)}if(No(S)||wo(S))return v=v.get(w)||null,c(p,v,S,j,null);Xi(p,S)}return null}function h(v,p,w,S){for(var j=null,k=null,C=p,P=p=0,O=null;C!==null&&P<w.length;P++){C.index>P?(O=C,C=null):O=C.sibling;var R=m(v,C,w[P],S);if(R===null){C===null&&(C=O);break}e&&C&&R.alternate===null&&t(v,C),p=i(R,p,P),k===null?j=R:k.sibling=R,k=R,C=O}if(P===w.length)return n(v,C),be&&Jn(v,P),j;if(C===null){for(;P<w.length;P++)C=f(v,w[P],S),C!==null&&(p=i(C,p,P),k===null?j=C:k.sibling=C,k=C);return be&&Jn(v,P),j}for(C=r(v,C);P<w.length;P++)O=g(C,v,P,w[P],S),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),p=i(O,p,P),k===null?j=O:k.sibling=O,k=O);return e&&C.forEach(function(D){return t(v,D)}),be&&Jn(v,P),j}function y(v,p,w,S){var j=wo(w);if(typeof j!="function")throw Error(A(150));if(w=j.call(w),w==null)throw Error(A(151));for(var k=j=null,C=p,P=p=0,O=null,R=w.next();C!==null&&!R.done;P++,R=w.next()){C.index>P?(O=C,C=null):O=C.sibling;var D=m(v,C,R.value,S);if(D===null){C===null&&(C=O);break}e&&C&&D.alternate===null&&t(v,C),p=i(D,p,P),k===null?j=D:k.sibling=D,k=D,C=O}if(R.done)return n(v,C),be&&Jn(v,P),j;if(C===null){for(;!R.done;P++,R=w.next())R=f(v,R.value,S),R!==null&&(p=i(R,p,P),k===null?j=R:k.sibling=R,k=R);return be&&Jn(v,P),j}for(C=r(v,C);!R.done;P++,R=w.next())R=g(C,v,P,R.value,S),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?P:R.key),p=i(R,p,P),k===null?j=R:k.sibling=R,k=R);return e&&C.forEach(function(U){return t(v,U)}),be&&Jn(v,P),j}function E(v,p,w,S){if(typeof w=="object"&&w!==null&&w.type===$r&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Fi:e:{for(var j=w.key,k=p;k!==null;){if(k.key===j){if(j=w.type,j===$r){if(k.tag===7){n(v,k.sibling),p=o(k,w.props.children),p.return=v,v=p;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===En&&op(j)===k.type){n(v,k.sibling),p=o(k,w.props),p.ref=Co(v,k,w),p.return=v,v=p;break e}n(v,k);break}else t(v,k);k=k.sibling}w.type===$r?(p=lr(w.props.children,v.mode,S,w.key),p.return=v,v=p):(S=ka(w.type,w.key,w.props,null,v.mode,S),S.ref=Co(v,p,w),S.return=v,v=S)}return a(v);case kr:e:{for(k=w.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(v,p.sibling),p=o(p,w.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=Ql(w,v.mode,S),p.return=v,v=p}return a(v);case En:return k=w._init,E(v,p,k(w._payload),S)}if(No(w))return h(v,p,w,S);if(wo(w))return y(v,p,w,S);Xi(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(v,p.sibling),p=o(p,w),p.return=v,v=p):(n(v,p),p=Wl(w,v.mode,S),p.return=v,v=p),a(v)):n(v,p)}return E}var Zr=Og(!0),_g=Og(!1),Ri={},Xt=Kn(Ri),ci=Kn(Ri),di=Kn(Ri);function or(e){if(e===Ri)throw Error(A(174));return e}function yd(e,t){switch(me(di,t),me(ci,e),me(Xt,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ou(t,e)}ye(Xt),me(Xt,t)}function eo(){ye(Xt),ye(ci),ye(di)}function Rg(e){or(di.current);var t=or(Xt.current),n=Ou(t,e.type);t!==n&&(me(ci,e),me(Xt,n))}function xd(e){ci.current===e&&(ye(Xt),ye(ci))}var je=Kn(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function wd(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Ea=mn.ReactCurrentDispatcher,Fl=mn.ReactCurrentBatchConfig,pr=0,Ce=null,Ie=null,Me=null,es=!1,Qo=!1,fi=0,mx=0;function We(){throw Error(A(321))}function Sd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Ed(e,t,n,r,o,i){if(pr=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?xx:wx,e=n(r,o),Qo){i=0;do{if(Qo=!1,fi=0,25<=i)throw Error(A(301));i+=1,Me=Ie=null,t.updateQueue=null,Ea.current=Sx,e=n(r,o)}while(Qo)}if(Ea.current=ts,t=Ie!==null&&Ie.next!==null,pr=0,Me=Ie=Ce=null,es=!1,t)throw Error(A(300));return e}function bd(){var e=fi!==0;return fi=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ce.memoizedState=Me=e:Me=Me.next=e,Me}function Ot(){if(Ie===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Me===null?Ce.memoizedState:Me.next;if(t!==null)Me=t,Ie=e;else{if(e===null)throw Error(A(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Me===null?Ce.memoizedState=Me=e:Me=Me.next=e}return Me}function pi(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Ot(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,Ce.lanes|=c,hr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Ht(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ce.lanes|=i,hr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ot(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ht(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ag(){}function Ng(e,t){var n=Ce,r=Ot(),o=t(),i=!Ht(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,jd(zg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,hi(9,Lg.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(A(349));pr&30||Ig(n,t,o)}return o}function Ig(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lg(e,t,n,r){t.value=n,t.getSnapshot=r,Mg(t)&&Dg(e)}function zg(e,t,n){return n(function(){Mg(t)&&Dg(e)})}function Mg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Dg(e){var t=fn(e,1);t!==null&&Ut(t,e,1,-1)}function ip(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t.queue=e,e=e.dispatch=yx.bind(null,Ce,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fg(){return Ot().memoizedState}function ba(e,t,n,r){var o=Qt();Ce.flags|=e,o.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function Ps(e,t,n,r){var o=Ot();r=r===void 0?null:r;var i=void 0;if(Ie!==null){var a=Ie.memoizedState;if(i=a.destroy,r!==null&&Sd(r,a.deps)){o.memoizedState=hi(t,n,i,r);return}}Ce.flags|=e,o.memoizedState=hi(1|t,n,i,r)}function ap(e,t){return ba(8390656,8,e,t)}function jd(e,t){return Ps(2048,8,e,t)}function Ug(e,t){return Ps(4,2,e,t)}function Bg(e,t){return Ps(4,4,e,t)}function Hg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vg(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4,4,Hg.bind(null,t,e),n)}function Cd(){}function Wg(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qg(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qg(e,t,n){return pr&21?(Ht(n,t)||(n=Gm(),Ce.lanes|=n,hr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function gx(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{ce=n,Fl.transition=r}}function Yg(){return Ot().memoizedState}function vx(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(e))Gg(t,n);else if(n=Tg(e,t,n,r),n!==null){var o=Je();Ut(n,e,r,o),Xg(n,t,r)}}function yx(e,t,n){var r=zn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(e))Gg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ht(s,a)){var l=t.interleaved;l===null?(o.next=o,gd(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Tg(e,t,o,r),n!==null&&(o=Je(),Ut(n,e,r,o),Xg(n,t,r))}}function Kg(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Gg(e,t){Qo=es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nd(e,n)}}var ts={readContext:Pt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},xx={readContext:Pt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:ap,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ba(4194308,4,Hg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vx.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:ip,useDebugValue:Cd,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=ip(!1),t=e[0];return e=gx.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,o=Qt();if(be){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Fe===null)throw Error(A(349));pr&30||Ig(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ap(zg.bind(null,r,i,e),[e]),r.flags|=2048,hi(9,Lg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qt(),t=Fe.identifierPrefix;if(be){var n=sn,r=an;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wx={readContext:Pt,useCallback:Wg,useContext:Pt,useEffect:jd,useImperativeHandle:Vg,useInsertionEffect:Ug,useLayoutEffect:Bg,useMemo:Qg,useReducer:Ul,useRef:Fg,useState:function(){return Ul(pi)},useDebugValue:Cd,useDeferredValue:function(e){var t=Ot();return qg(t,Ie.memoizedState,e)},useTransition:function(){var e=Ul(pi)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Ag,useSyncExternalStore:Ng,useId:Yg,unstable_isNewReconciler:!1},Sx={readContext:Pt,useCallback:Wg,useContext:Pt,useEffect:jd,useImperativeHandle:Vg,useInsertionEffect:Ug,useLayoutEffect:Bg,useMemo:Qg,useReducer:Bl,useRef:Fg,useState:function(){return Bl(pi)},useDebugValue:Cd,useDeferredValue:function(e){var t=Ot();return Ie===null?t.memoizedState=e:qg(t,Ie.memoizedState,e)},useTransition:function(){var e=Bl(pi)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Ag,useSyncExternalStore:Ng,useId:Yg,unstable_isNewReconciler:!1};function to(e,t){try{var n="",r=t;do n+=Ky(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function Jg(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rs||(rs=!0,uc=r),Zu(e,t)},n}function Zg(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zu(e,t),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ex;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Lx.bind(null,e,t,n),t.then(e,e))}function lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function up(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var bx=mn.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?_g(t,null,n,r):Zr(t,e.child,n,r)}function cp(e,t,n,r,o){n=n.render;var i=t.ref;return Wr(t,o),r=Ed(e,t,n,r,i,o),n=bd(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(be&&n&&cd(t),t.flags|=1,Xe(e,t,r,o),t.child)}function dp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ad(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,e0(e,t,i,r,o)):(e=ka(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(a,r)&&e.ref===t.ref)return pn(e,t,o)}return t.flags|=1,e=Mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function e0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ai(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,pn(e,t,o)}return ec(e,t,n,r,o)}function t0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Mr,ut),ut|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Mr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Mr,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,me(Mr,ut),ut|=r;return Xe(e,t,o,n),t.child}function n0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ec(e,t,n,r,o){var i=at(n)?dr:Ge.current;return i=Xr(t,i),Wr(t,o),n=Ed(e,t,n,r,i,o),r=bd(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(be&&r&&cd(t),t.flags|=1,Xe(e,t,n,o),t.child)}function fp(e,t,n,r,o){if(at(n)){var i=!0;qa(t)}else i=!1;if(Wr(t,o),t.stateNode===null)ja(e,t),Pg(t,n,r),Ju(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=at(n)?dr:Ge.current,u=Xr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&rp(t,a,r,u),bn=!1;var m=t.memoizedState;a.state=m,Ja(t,r,a,o),l=t.memoizedState,s!==r||m!==l||it.current||bn?(typeof c=="function"&&(Xu(t,n,c,r),l=t.memoizedState),(s=bn||np(t,n,s,r,m,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,kg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:It(t.type,s),a.props=u,f=t.pendingProps,m=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=at(n)?dr:Ge.current,l=Xr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==l)&&rp(t,a,r,l),bn=!1,m=t.memoizedState,a.state=m,Ja(t,r,a,o);var h=t.memoizedState;s!==f||m!==h||it.current||bn?(typeof g=="function"&&(Xu(t,n,g,r),h=t.memoizedState),(u=bn||np(t,n,u,r,m,h,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return tc(e,t,n,r,i,o)}function tc(e,t,n,r,o,i){n0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Xf(t,n,!1),pn(e,t,i);r=t.stateNode,bx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zr(t,e.child,null,i),t.child=Zr(t,null,s,i)):Xe(e,t,s,i),t.memoizedState=r.state,o&&Xf(t,n,!0),t.child}function r0(e){var t=e.stateNode;t.pendingContext?Gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gf(e,t.context,!1),yd(e,t.containerInfo)}function pp(e,t,n,r,o){return Jr(),fd(o),t.flags|=256,Xe(e,t,n,r),t.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function rc(e){return{baseLanes:e,cachePool:null,transitions:null}}function o0(e,t,n){var r=t.pendingProps,o=je.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(je,o&1),e===null)return Ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Rs(a,r,0,null),e=lr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=rc(n),t.memoizedState=nc,e):Td(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return jx(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Mn(s,i):(i=lr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?rc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=nc,r}return i=e.child,e=i.sibling,r=Mn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Td(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,r){return r!==null&&fd(r),Zr(t,e.child,null,n),e=Td(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(A(422))),Ji(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Rs({mode:"visible",children:r.children},o,0,null),i=lr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Zr(t,e.child,null,a),t.child.memoizedState=rc(a),t.memoizedState=nc,i);if(!(t.mode&1))return Ji(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(A(419)),r=Hl(i,r,void 0),Ji(e,t,a,r)}if(s=(a&e.childLanes)!==0,rt||s){if(r=Fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fn(e,o),Ut(r,e,o,-1))}return Rd(),r=Hl(Error(A(421))),Ji(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=zx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=Nn(o.nextSibling),dt=t,be=!0,zt=null,e!==null&&(jt[Ct++]=an,jt[Ct++]=sn,jt[Ct++]=fr,an=e.id,sn=e.overflow,fr=t),t=Td(t,r.children),t.flags|=4096,t)}function hp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gu(e.return,t,n)}function Vl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function i0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(je,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Za(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Za(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cx(e,t,n){switch(t.tag){case 3:r0(t),Jr();break;case 5:Rg(t);break;case 1:at(t.type)&&qa(t);break;case 4:yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(Ga,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?o0(e,t,n):(me(je,je.current&1),e=pn(e,t,n),e!==null?e.sibling:null);me(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return i0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,t0(e,t,n)}return pn(e,t,n)}var a0,oc,s0,l0;a0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oc=function(){};s0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,or(Xt.current);var i=null;switch(n){case"input":o=Tu(e,o),r=Tu(e,r),i=[];break;case"select":o=Te({},o,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":o=Pu(e,o),r=Pu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wa)}_u(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};l0=function(e,t,n,r){n!==r&&(t.flags|=4)};function To(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tx(e,t,n){var r=t.pendingProps;switch(dd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return at(t.type)&&Qa(),Qe(t),null;case 3:return r=t.stateNode,eo(),ye(it),ye(Ge),wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zt!==null&&(fc(zt),zt=null))),oc(e,t),Qe(t),null;case 5:xd(t);var o=or(di.current);if(n=t.type,e!==null&&t.stateNode!=null)s0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Qe(t),null}if(e=or(Xt.current),Gi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Yt]=t,r[ui]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(o=0;o<Lo.length;o++)ge(Lo[o],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":bf(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":Cf(r,i),ge("invalid",r)}_u(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ki(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ki(r.textContent,s,e),o=["children",""+s]):Zo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ui(r),jf(r,i,!0);break;case"textarea":Ui(r),Tf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Im(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[ui]=r,a0(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ru(n,r),n){case"dialog":ge("cancel",e),ge("close",e),o=r;break;case"iframe":case"object":case"embed":ge("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lo.length;o++)ge(Lo[o],e);o=r;break;case"source":ge("error",e),o=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=r;break;case"details":ge("toggle",e),o=r;break;case"input":bf(e,r),o=Tu(e,r),ge("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Te({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Cf(e,r),o=Pu(e,r),ge("invalid",e);break;default:o=r}_u(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Mm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ei(e,l):typeof l=="number"&&ei(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ge("scroll",e):l!=null&&Gc(e,i,l,a))}switch(n){case"input":Ui(e),jf(e,r,!1);break;case"textarea":Ui(e),Tf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ur(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)l0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=or(di.current),or(Xt.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return Qe(t),null;case 13:if(ye(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&ct!==null&&t.mode&1&&!(t.flags&128))Cg(),Jr(),t.flags|=98560,i=!1;else if(i=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[Yt]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else zt!==null&&(fc(zt),zt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Le===0&&(Le=3):Rd())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return eo(),oc(e,t),e===null&&si(t.stateNode.containerInfo),Qe(t),null;case 10:return md(t.type._context),Qe(t),null;case 17:return at(t.type)&&Qa(),Qe(t),null;case 19:if(ye(je),i=t.memoizedState,i===null)return Qe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)To(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Za(e),a!==null){for(t.flags|=128,To(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(je,je.current&1|2),t.child}e=e.sibling}i.tail!==null&&Pe()>no&&(t.flags|=128,r=!0,To(i,!1),t.lanes=4194304)}else{if(!r)if(e=Za(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),To(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Qe(t),null}else 2*Pe()-i.renderingStartTime>no&&n!==1073741824&&(t.flags|=128,r=!0,To(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Pe(),t.sibling=null,n=je.current,me(je,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return _d(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function kx(e,t){switch(dd(t),t.tag){case 1:return at(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return eo(),ye(it),ye(Ge),wd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xd(t),null;case 13:if(ye(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(je),null;case 4:return eo(),null;case 10:return md(t.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Zi=!1,Ye=!1,$x=typeof WeakSet=="function"?WeakSet:Set,L=null;function zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function ic(e,t,n){try{n()}catch(r){ke(e,t,r)}}var mp=!1;function Px(e,t){if(Bu=Ba,e=fg(),ud(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var g;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===o&&(s=a),m===i&&++c===r&&(l=a),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:e,selectionRange:n},Ba=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,E=h.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:It(t.type,y),E);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return h=mp,mp=!1,h}function qo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ic(t,n,i)}o=o.next}while(o!==r)}}function Os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ac(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function u0(e){var t=e.alternate;t!==null&&(e.alternate=null,u0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[ui],delete t[Qu],delete t[dx],delete t[fx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c0(e){return e.tag===5||e.tag===3||e.tag===4}function gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wa));else if(r!==4&&(e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}function lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lc(e,t,n),e=e.sibling;e!==null;)lc(e,t,n),e=e.sibling}var Be=null,Lt=!1;function gn(e,t,n){for(n=n.child;n!==null;)d0(e,t,n),n=n.sibling}function d0(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:Ye||zr(n,t);case 6:var r=Be,o=Lt;Be=null,gn(e,t,n),Be=r,Lt=o,Be!==null&&(Lt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Lt?(e=Be,n=n.stateNode,e.nodeType===8?zl(e.parentNode,n):e.nodeType===1&&zl(e,n),oi(e)):zl(Be,n.stateNode));break;case 4:r=Be,o=Lt,Be=n.stateNode.containerInfo,Lt=!0,gn(e,t,n),Be=r,Lt=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ic(n,t,a),o=o.next}while(o!==r)}gn(e,t,n);break;case 1:if(!Ye&&(zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ke(n,t,s)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,gn(e,t,n),Ye=r):gn(e,t,n);break;default:gn(e,t,n)}}function vp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $x),t.forEach(function(r){var o=Mx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,Lt=!1;break e;case 3:Be=s.stateNode.containerInfo,Lt=!0;break e;case 4:Be=s.stateNode.containerInfo,Lt=!0;break e}s=s.return}if(Be===null)throw Error(A(160));d0(i,a,o),Be=null,Lt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ke(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)f0(t,e),t=t.sibling}function f0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Vt(e),r&4){try{qo(3,e,e.return),Os(3,e)}catch(y){ke(e,e.return,y)}try{qo(5,e,e.return)}catch(y){ke(e,e.return,y)}}break;case 1:Nt(t,e),Vt(e),r&512&&n!==null&&zr(n,n.return);break;case 5:if(Nt(t,e),Vt(e),r&512&&n!==null&&zr(n,n.return),e.flags&32){var o=e.stateNode;try{ei(o,"")}catch(y){ke(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Am(o,i),Ru(s,a);var u=Ru(s,i);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Mm(o,f):c==="dangerouslySetInnerHTML"?Lm(o,f):c==="children"?ei(o,f):Gc(o,c,f,u)}switch(s){case"input":ku(o,i);break;case"textarea":Nm(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Ur(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ur(o,!!i.multiple,i.defaultValue,!0):Ur(o,!!i.multiple,i.multiple?[]:"",!1))}o[ui]=i}catch(y){ke(e,e.return,y)}}break;case 6:if(Nt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ke(e,e.return,y)}}break;case 3:if(Nt(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(y){ke(e,e.return,y)}break;case 4:Nt(t,e),Vt(e);break;case 13:Nt(t,e),Vt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Pd=Pe())),r&4&&vp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||c,Nt(t,e),Ye=u):Nt(t,e),Vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(f=L=c;L!==null;){switch(m=L,g=m.child,m.tag){case 0:case 11:case 14:case 15:qo(4,m,m.return);break;case 1:zr(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){ke(r,n,y)}}break;case 5:zr(m,m.return);break;case 22:if(m.memoizedState!==null){xp(f);continue}}g!==null?(g.return=m,L=g):xp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=zm("display",a))}catch(y){ke(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ke(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),Vt(e),r&4&&vp(e);break;case 21:break;default:Nt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(c0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ei(o,""),r.flags&=-33);var i=gp(e);lc(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=gp(e);sc(e,s,a);break;default:throw Error(A(161))}}catch(l){ke(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ox(e,t,n){L=e,p0(e)}function p0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Zi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ye;s=Zi;var u=Ye;if(Zi=a,(Ye=l)&&!u)for(L=o;L!==null;)a=L,l=a.child,a.tag===22&&a.memoizedState!==null?wp(o):l!==null?(l.return=a,L=l):wp(o);for(;i!==null;)L=i,p0(i),i=i.sibling;L=o,Zi=s,Ye=u}yp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):yp(e)}}function yp(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Os(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:It(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&tp(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tp(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&oi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ye||t.flags&512&&ac(t)}catch(m){ke(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function xp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function wp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Os(4,t)}catch(l){ke(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ke(t,o,l)}}var i=t.return;try{ac(t)}catch(l){ke(t,i,l)}break;case 5:var a=t.return;try{ac(t)}catch(l){ke(t,a,l)}}}catch(l){ke(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var _x=Math.ceil,ns=mn.ReactCurrentDispatcher,kd=mn.ReactCurrentOwner,kt=mn.ReactCurrentBatchConfig,ne=0,Fe=null,Re=null,He=0,ut=0,Mr=Kn(0),Le=0,mi=null,hr=0,_s=0,$d=0,Yo=null,nt=null,Pd=0,no=1/0,nn=null,rs=!1,uc=null,Ln=null,ea=!1,$n=null,os=0,Ko=0,cc=null,Ca=-1,Ta=0;function Je(){return ne&6?Pe():Ca!==-1?Ca:Ca=Pe()}function zn(e){return e.mode&1?ne&2&&He!==0?He&-He:hx.transition!==null?(Ta===0&&(Ta=Gm()),Ta):(e=ce,e!==0||(e=window.event,e=e===void 0?16:rg(e.type)),e):1}function Ut(e,t,n,r){if(50<Ko)throw Ko=0,cc=null,Error(A(185));Pi(e,n,r),(!(ne&2)||e!==Fe)&&(e===Fe&&(!(ne&2)&&(_s|=n),Le===4&&Cn(e,He)),st(e,r),n===1&&ne===0&&!(t.mode&1)&&(no=Pe()+500,ks&&Gn()))}function st(e,t){var n=e.callbackNode;h1(e,t);var r=Ua(e,e===Fe?He:0);if(r===0)n!==null&&Pf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pf(n),t===1)e.tag===0?px(Sp.bind(null,e)):Eg(Sp.bind(null,e)),ux(function(){!(ne&6)&&Gn()}),n=null;else{switch(Xm(r)){case 1:n=td;break;case 4:n=Ym;break;case 16:n=Fa;break;case 536870912:n=Km;break;default:n=Fa}n=S0(n,h0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function h0(e,t){if(Ca=-1,Ta=0,ne&6)throw Error(A(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=Ua(e,e===Fe?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=is(e,r);else{t=r;var o=ne;ne|=2;var i=g0();(Fe!==e||He!==t)&&(nn=null,no=Pe()+500,sr(e,t));do try{Nx();break}catch(s){m0(e,s)}while(1);hd(),ns.current=i,ne=o,Re!==null?t=0:(Fe=null,He=0,t=Le)}if(t!==0){if(t===2&&(o=zu(e),o!==0&&(r=o,t=dc(e,o))),t===1)throw n=mi,sr(e,0),Cn(e,r),st(e,Pe()),n;if(t===6)Cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Rx(o)&&(t=is(e,r),t===2&&(i=zu(e),i!==0&&(r=i,t=dc(e,i))),t===1))throw n=mi,sr(e,0),Cn(e,r),st(e,Pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Zn(e,nt,nn);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=Pd+500-Pe(),10<t)){if(Ua(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wu(Zn.bind(null,e,nt,nn),t);break}Zn(e,nt,nn);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ft(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_x(r/1960))-r,10<r){e.timeoutHandle=Wu(Zn.bind(null,e,nt,nn),r);break}Zn(e,nt,nn);break;case 5:Zn(e,nt,nn);break;default:throw Error(A(329))}}}return st(e,Pe()),e.callbackNode===n?h0.bind(null,e):null}function dc(e,t){var n=Yo;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=is(e,t),e!==2&&(t=nt,nt=n,t!==null&&fc(t)),e}function fc(e){nt===null?nt=e:nt.push.apply(nt,e)}function Rx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~$d,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Sp(e){if(ne&6)throw Error(A(327));Qr();var t=Ua(e,0);if(!(t&1))return st(e,Pe()),null;var n=is(e,t);if(e.tag!==0&&n===2){var r=zu(e);r!==0&&(t=r,n=dc(e,r))}if(n===1)throw n=mi,sr(e,0),Cn(e,t),st(e,Pe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,nt,nn),st(e,Pe()),null}function Od(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(no=Pe()+500,ks&&Gn())}}function mr(e){$n!==null&&$n.tag===0&&!(ne&6)&&Qr();var t=ne;ne|=1;var n=kt.transition,r=ce;try{if(kt.transition=null,ce=1,e)return e()}finally{ce=r,kt.transition=n,ne=t,!(ne&6)&&Gn()}}function _d(){ut=Mr.current,ye(Mr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lx(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(dd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:eo(),ye(it),ye(Ge),wd();break;case 5:xd(r);break;case 4:eo();break;case 13:ye(je);break;case 19:ye(je);break;case 10:md(r.type._context);break;case 22:case 23:_d()}n=n.return}if(Fe=e,Re=e=Mn(e.current,null),He=ut=t,Le=0,mi=null,$d=_s=hr=0,nt=Yo=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}rr=null}return e}function m0(e,t){do{var n=Re;try{if(hd(),Ea.current=ts,es){for(var r=Ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}es=!1}if(pr=0,Me=Ie=Ce=null,Qo=!1,fi=0,kd.current=null,n===null||n.return===null){Le=1,mi=t,Re=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=He,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=lp(a);if(g!==null){g.flags&=-257,up(g,a,s,i,t),g.mode&1&&sp(i,u,t),t=g,l=u;var h=t.updateQueue;if(h===null){var y=new Set;y.add(l),t.updateQueue=y}else h.add(l);break e}else{if(!(t&1)){sp(i,u,t),Rd();break e}l=Error(A(426))}}else if(be&&s.mode&1){var E=lp(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),up(E,a,s,i,t),fd(to(l,s));break e}}i=l=to(l,s),Le!==4&&(Le=2),Yo===null?Yo=[i]:Yo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Jg(i,l,t);ep(i,v);break e;case 1:s=l;var p=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ln===null||!Ln.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Zg(i,s,t);ep(i,S);break e}}i=i.return}while(i!==null)}y0(n)}catch(j){t=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function g0(){var e=ns.current;return ns.current=ts,e===null?ts:e}function Rd(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!(hr&268435455)&&!(_s&268435455)||Cn(Fe,He)}function is(e,t){var n=ne;ne|=2;var r=g0();(Fe!==e||He!==t)&&(nn=null,sr(e,t));do try{Ax();break}catch(o){m0(e,o)}while(1);if(hd(),ne=n,ns.current=r,Re!==null)throw Error(A(261));return Fe=null,He=0,Le}function Ax(){for(;Re!==null;)v0(Re)}function Nx(){for(;Re!==null&&!i1();)v0(Re)}function v0(e){var t=w0(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?y0(e):Re=t,kd.current=null}function y0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kx(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Re=null;return}}else if(n=Tx(n,t,ut),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Le===0&&(Le=5)}function Zn(e,t,n){var r=ce,o=kt.transition;try{kt.transition=null,ce=1,Ix(e,t,n,r)}finally{kt.transition=o,ce=r}return null}function Ix(e,t,n,r){do Qr();while($n!==null);if(ne&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(m1(e,i),e===Fe&&(Re=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,S0(Fa,function(){return Qr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var a=ce;ce=1;var s=ne;ne|=4,kd.current=null,Px(e,n),f0(n,e),tx(Hu),Ba=!!Bu,Hu=Bu=null,e.current=n,Ox(n),a1(),ne=s,ce=a,kt.transition=i}else e.current=n;if(ea&&(ea=!1,$n=e,os=o),i=e.pendingLanes,i===0&&(Ln=null),u1(n.stateNode),st(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(rs)throw rs=!1,e=uc,uc=null,e;return os&1&&e.tag!==0&&Qr(),i=e.pendingLanes,i&1?e===cc?Ko++:(Ko=0,cc=e):Ko=0,Gn(),null}function Qr(){if($n!==null){var e=Xm(os),t=kt.transition,n=ce;try{if(kt.transition=null,ce=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,os=0,ne&6)throw Error(A(331));var o=ne;for(ne|=4,L=e.current;L!==null;){var i=L,a=i.child;if(L.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:qo(8,c,i)}var f=c.child;if(f!==null)f.return=c,L=f;else for(;L!==null;){c=L;var m=c.sibling,g=c.return;if(u0(c),c===u){L=null;break}if(m!==null){m.return=g,L=m;break}L=g}}}var h=i.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}L=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,L=a;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qo(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,L=v;break e}L=i.return}}var p=e.current;for(L=p;L!==null;){a=L;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,L=w;else e:for(a=p;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Os(9,s)}}catch(j){ke(s,s.return,j)}if(s===a){L=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,L=S;break e}L=s.return}}if(ne=o,Gn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{ce=n,kt.transition=t}}return!1}function Ep(e,t,n){t=to(n,t),t=Jg(e,t,1),e=In(e,t,1),t=Je(),e!==null&&(Pi(e,1,t),st(e,t))}function ke(e,t,n){if(e.tag===3)Ep(e,e,n);else for(;t!==null;){if(t.tag===3){Ep(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=to(n,e),e=Zg(t,e,1),t=In(t,e,1),e=Je(),t!==null&&(Pi(t,1,e),st(t,e));break}}t=t.return}}function Lx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(Le===4||Le===3&&(He&130023424)===He&&500>Pe()-Pd?sr(e,0):$d|=n),st(e,t)}function x0(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=Je();e=fn(e,t),e!==null&&(Pi(e,t,n),st(e,n))}function zx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),x0(e,n)}function Mx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),x0(e,n)}var w0;w0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,Cx(e,t,n);rt=!!(e.flags&131072)}else rt=!1,be&&t.flags&1048576&&bg(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ja(e,t),e=t.pendingProps;var o=Xr(t,Ge.current);Wr(t,n),o=Ed(null,t,r,e,o,n);var i=bd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(i=!0,qa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vd(t),o.updater=$s,t.stateNode=o,o._reactInternals=t,Ju(t,r,e,n),t=tc(null,t,r,!0,i,n)):(t.tag=0,be&&i&&cd(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ja(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fx(r),e=It(r,e),o){case 0:t=ec(null,t,r,e,n);break e;case 1:t=fp(null,t,r,e,n);break e;case 11:t=cp(null,t,r,e,n);break e;case 14:t=dp(null,t,r,It(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:It(r,o),ec(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:It(r,o),fp(e,t,r,o,n);case 3:e:{if(r0(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,kg(e,t),Ja(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=to(Error(A(423)),t),t=pp(e,t,r,n,o);break e}else if(r!==o){o=to(Error(A(424)),t),t=pp(e,t,r,n,o);break e}else for(ct=Nn(t.stateNode.containerInfo.firstChild),dt=t,be=!0,zt=null,n=_g(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===o){t=pn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Rg(t),e===null&&Ku(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Vu(r,o)?a=null:i!==null&&Vu(r,i)&&(t.flags|=32),n0(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&Ku(t),null;case 13:return o0(e,t,n);case 4:return yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:It(r,o),cp(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,me(Ga,r._currentValue),r._currentValue=a,i!==null)if(Ht(i.value,a)){if(i.children===o.children&&!it.current){t=pn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=ln(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Gu(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(A(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Gu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Wr(t,n),o=Pt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=It(r,t.pendingProps),o=It(r.type,o),dp(e,t,r,o,n);case 15:return e0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:It(r,o),ja(e,t),t.tag=1,at(r)?(e=!0,qa(t)):e=!1,Wr(t,n),Pg(t,r,o),Ju(t,r,o,n),tc(null,t,r,!0,e,n);case 19:return i0(e,t,n);case 22:return t0(e,t,n)}throw Error(A(156,t.tag))};function S0(e,t){return qm(e,t)}function Dx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Dx(e,t,n,r)}function Ad(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fx(e){if(typeof e=="function")return Ad(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jc)return 11;if(e===Zc)return 14}return 2}function Mn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ka(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ad(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $r:return lr(n.children,o,i,t);case Xc:a=8,o|=8;break;case Eu:return e=Tt(12,n,t,o|2),e.elementType=Eu,e.lanes=i,e;case bu:return e=Tt(13,n,t,o),e.elementType=bu,e.lanes=i,e;case ju:return e=Tt(19,n,t,o),e.elementType=ju,e.lanes=i,e;case Om:return Rs(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $m:a=10;break e;case Pm:a=9;break e;case Jc:a=11;break e;case Zc:a=14;break e;case En:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function lr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=Om,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ux(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nd(e,t,n,r,o,i,a,s,l){return e=new Ux(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(i),e}function Bx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function E0(e){if(!e)return Wn;e=e._reactInternals;e:{if(xr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(at(n))return Sg(e,n,t)}return t}function b0(e,t,n,r,o,i,a,s,l){return e=Nd(n,r,!0,e,o,i,a,s,l),e.context=E0(null),n=e.current,r=Je(),o=zn(n),i=ln(r,o),i.callback=t??null,In(n,i,o),e.current.lanes=o,Pi(e,o,r),st(e,r),e}function As(e,t,n,r){var o=t.current,i=Je(),a=zn(o);return n=E0(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(o,t,a),e!==null&&(Ut(e,o,a,i),Sa(e,o,a)),a}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Id(e,t){bp(e,t),(e=e.alternate)&&bp(e,t)}function Hx(){return null}var j0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ld(e){this._internalRoot=e}Ns.prototype.render=Ld.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));As(e,t,null,null)};Ns.prototype.unmount=Ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){As(null,e,null,null)}),t[dn]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=eg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&ng(e)}};function zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Vx(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=as(a);i.call(u)}}var a=b0(t,r,e,0,null,!1,!1,"",jp);return e._reactRootContainer=a,e[dn]=a.current,si(e.nodeType===8?e.parentNode:e),mr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=as(l);s.call(u)}}var l=Nd(e,0,!1,null,null,!1,!1,"",jp);return e._reactRootContainer=l,e[dn]=l.current,si(e.nodeType===8?e.parentNode:e),mr(function(){As(t,l,n,r)}),l}function Ls(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=as(a);s.call(l)}}As(t,a,e,o)}else a=Vx(n,t,e,o,r);return as(a)}Jm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Io(t.pendingLanes);n!==0&&(nd(t,n|1),st(t,Pe()),!(ne&6)&&(no=Pe()+500,Gn()))}break;case 13:mr(function(){var r=fn(e,1);if(r!==null){var o=Je();Ut(r,e,1,o)}}),Id(e,1)}};rd=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=Je();Ut(t,e,134217728,n)}Id(e,134217728)}};Zm=function(e){if(e.tag===13){var t=zn(e),n=fn(e,t);if(n!==null){var r=Je();Ut(n,e,t,r)}Id(e,t)}};eg=function(){return ce};tg=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Nu=function(e,t,n){switch(t){case"input":if(ku(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ts(r);if(!o)throw Error(A(90));Rm(r),ku(r,o)}}}break;case"textarea":Nm(e,n);break;case"select":t=n.value,t!=null&&Ur(e,!!n.multiple,t,!1)}};Um=Od;Bm=mr;var Wx={usingClientEntryPoint:!1,Events:[_i,Rr,Ts,Dm,Fm,Od]},ko={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qx={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wm(e),e===null?null:e.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{Es=ta.inject(Qx),Gt=ta}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(t))throw Error(A(200));return Bx(e,t,null,n)};ht.createRoot=function(e,t){if(!zd(e))throw Error(A(299));var n=!1,r="",o=j0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nd(e,1,!1,null,null,n,!1,r,o),e[dn]=t.current,si(e.nodeType===8?e.parentNode:e),new Ld(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Wm(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return mr(e)};ht.hydrate=function(e,t,n){if(!Is(t))throw Error(A(200));return Ls(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!zd(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=j0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=b0(t,null,e,1,n??null,o,!1,i,a),e[dn]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ns(t)};ht.render=function(e,t,n){if(!Is(t))throw Error(A(200));return Ls(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Is(e))throw Error(A(40));return e._reactRootContainer?(mr(function(){Ls(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};ht.unstable_batchedUpdates=Od;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Is(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ls(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(e){console.error(e)}}C0(),bm.exports=ht;var T0=bm.exports,Cp=T0;wu.createRoot=Cp.createRoot,wu.hydrateRoot=Cp.hydrateRoot;var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ke.apply(this,arguments)};function gi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ve="-ms-",Go="-moz-",se="-webkit-",k0="comm",zs="rule",Md="decl",qx="@import",$0="@keyframes",Yx="@layer",Kx=Math.abs,Dd=String.fromCharCode,pc=Object.assign;function Gx(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function P0(e){return e.trim()}function rn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function $a(e,t){return e.indexOf(t)}function De(e,t){return e.charCodeAt(t)|0}function ro(e,t,n){return e.slice(t,n)}function qt(e){return e.length}function O0(e){return e.length}function zo(e,t){return t.push(e),e}function Xx(e,t){return e.map(t).join("")}function Tp(e,t){return e.filter(function(n){return!rn(n,t)})}var Ms=1,oo=1,_0=0,_t=0,_e=0,mo="";function Ds(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ms,column:oo,length:a,return:"",siblings:s}}function Sn(e,t){return pc(Ds("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jr(e){for(;e.root;)e=Sn(e.root,{children:[e]});zo(e,e.siblings)}function Jx(){return _e}function Zx(){return _e=_t>0?De(mo,--_t):0,oo--,_e===10&&(oo=1,Ms--),_e}function Bt(){return _e=_t<_0?De(mo,_t++):0,oo++,_e===10&&(oo=1,Ms++),_e}function ur(){return De(mo,_t)}function Pa(){return _t}function Fs(e,t){return ro(mo,e,t)}function hc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ew(e){return Ms=oo=1,_0=qt(mo=e),_t=0,[]}function tw(e){return mo="",e}function ql(e){return P0(Fs(_t-1,mc(e===91?e+2:e===40?e+1:e)))}function nw(e){for(;(_e=ur())&&_e<33;)Bt();return hc(e)>2||hc(_e)>3?"":" "}function rw(e,t){for(;--t&&Bt()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Fs(e,Pa()+(t<6&&ur()==32&&Bt()==32))}function mc(e){for(;Bt();)switch(_e){case e:return _t;case 34:case 39:e!==34&&e!==39&&mc(_e);break;case 40:e===41&&mc(e);break;case 92:Bt();break}return _t}function ow(e,t){for(;Bt()&&e+_e!==47+10;)if(e+_e===42+42&&ur()===47)break;return"/*"+Fs(t,_t-1)+"*"+Dd(e===47?e:Bt())}function iw(e){for(;!hc(ur());)Bt();return Fs(e,_t)}function aw(e){return tw(Oa("",null,null,null,[""],e=ew(e),0,[0],e))}function Oa(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,f=a,m=0,g=0,h=0,y=1,E=1,v=1,p=0,w="",S=o,j=i,k=r,C=w;E;)switch(h=p,p=Bt()){case 40:if(h!=108&&De(C,f-1)==58){$a(C+=Y(ql(p),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:C+=ql(p);break;case 9:case 10:case 13:case 32:C+=nw(h);break;case 92:C+=rw(Pa()-1,7);continue;case 47:switch(ur()){case 42:case 47:zo(sw(ow(Bt(),Pa()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[u++]=qt(C)*v;case 125*y:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+c:v==-1&&(C=Y(C,/\f/g,"")),g>0&&qt(C)-f&&zo(g>32?$p(C+";",r,n,f-1,l):$p(Y(C," ","")+";",r,n,f-2,l),l);break;case 59:C+=";";default:if(zo(k=kp(C,t,n,u,c,o,s,w,S=[],j=[],f,i),i),p===123)if(c===0)Oa(C,t,k,k,S,i,f,s,j);else switch(m===99&&De(C,3)===110?100:m){case 100:case 108:case 109:case 115:Oa(e,k,k,r&&zo(kp(e,k,k,0,0,o,s,w,o,S=[],f,j),j),o,j,f,s,r?S:j);break;default:Oa(C,k,k,k,[""],j,0,s,j)}}u=c=g=0,y=v=1,w=C="",f=a;break;case 58:f=1+qt(C),g=h;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&Zx()==125)continue}switch(C+=Dd(p),p*y){case 38:v=c>0?1:(C+="\f",-1);break;case 44:s[u++]=(qt(C)-1)*v,v=1;break;case 64:ur()===45&&(C+=ql(Bt())),m=ur(),c=f=qt(w=C+=iw(Pa())),p++;break;case 45:h===45&&qt(C)==2&&(y=0)}}return i}function kp(e,t,n,r,o,i,a,s,l,u,c,f){for(var m=o-1,g=o===0?i:[""],h=O0(g),y=0,E=0,v=0;y<r;++y)for(var p=0,w=ro(e,m+1,m=Kx(E=a[y])),S=e;p<h;++p)(S=P0(E>0?g[p]+" "+w:Y(w,/&\f/g,g[p])))&&(l[v++]=S);return Ds(e,t,n,o===0?zs:s,l,u,c,f)}function sw(e,t,n,r){return Ds(e,t,n,k0,Dd(Jx()),ro(e,2,-2),0,r)}function $p(e,t,n,r,o){return Ds(e,t,n,Md,ro(e,0,r),ro(e,r+1,-1),r,o)}function R0(e,t,n){switch(Gx(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return Go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Go+e+ve+e+e;case 5936:switch(De(e,t+11)){case 114:return se+e+ve+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+ve+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+ve+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+ve+e+e;case 6165:return se+e+ve+"flex-"+e+e;case 5187:return se+e+Y(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return se+e+ve+"flex-item-"+Y(e,/flex-|-self/g,"")+(rn(e,/flex-|baseline/)?"":ve+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return se+e+ve+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+ve+Y(e,"shrink","negative")+e;case 5292:return se+e+ve+Y(e,"basis","preferred-size")+e;case 6060:return se+"box-"+Y(e,"-grow","")+se+e+ve+Y(e,"grow","positive")+e;case 4554:return se+Y(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!rn(e,/flex-|baseline/))return ve+"grid-column-align"+ro(e,t)+e;break;case 2592:case 3360:return ve+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,rn(r.props,/grid-\w+-end/)})?~$a(e+(n=n[t].value),"span")?e:ve+Y(e,"-start","")+e+ve+"grid-row-span:"+(~$a(n,"span")?rn(n,/\d+/):+rn(n,/\d+/)-+rn(e,/\d+/))+";":ve+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rn(r.props,/grid-\w+-start/)})?e:ve+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qt(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Go+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$a(e,"stretch")?R0(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,l,u){return ve+o+":"+i+u+(a?ve+o+"-span:"+(s?l:+l-+i)+u:"")+e});case 4949:if(De(e,t+6)===121)return Y(e,":",":"+se)+e;break;case 6444:switch(De(e,De(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(De(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+ve+"$2box$3")+e;case 100:return Y(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function ss(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function lw(e,t,n,r){switch(e.type){case Yx:if(e.children.length)break;case qx:case Md:return e.return=e.return||e.value;case k0:return"";case $0:return e.return=e.value+"{"+ss(e.children,r)+"}";case zs:if(!qt(e.value=e.props.join(",")))return""}return qt(n=ss(e.children,r))?e.return=e.value+"{"+n+"}":""}function uw(e){var t=O0(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function cw(e){return function(t){t.root||(t=t.return)&&e(t)}}function dw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Md:e.return=R0(e.value,e.length,n);return;case $0:return ss([Sn(e,{value:Y(e.value,"@","@"+se)})],r);case zs:if(e.length)return Xx(n=e.props,function(o){switch(rn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(Sn(e,{props:[Y(o,/:(read-\w+)/,":"+Go+"$1")]})),jr(Sn(e,{props:[o]})),pc(e,{props:Tp(n,r)});break;case"::placeholder":jr(Sn(e,{props:[Y(o,/:(plac\w+)/,":"+se+"input-$1")]})),jr(Sn(e,{props:[Y(o,/:(plac\w+)/,":"+Go+"$1")]})),jr(Sn(e,{props:[Y(o,/:(plac\w+)/,ve+"input-$1")]})),jr(Sn(e,{props:[o]})),pc(e,{props:Tp(n,r)});break}return""})}}var fw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},io=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fd=typeof window<"u"&&"HTMLElement"in window,pw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),hw={},Us=Object.freeze([]),ao=Object.freeze({});function A0(e,t,n){return n===void 0&&(n=ao),e.theme!==n.theme&&e.theme||t||n.theme}var N0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gw=/(^-|-$)/g;function Pp(e){return e.replace(mw,"-").replace(gw,"")}var vw=/(a)(d)/gi,Op=function(e){return String.fromCharCode(e+(e>25?39:97))};function gc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Op(t%52)+n;return(Op(t%52)+n).replace(vw,"$1-$2")}var Yl,Dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},I0=function(e){return Dr(5381,e)};function L0(e){return gc(I0(e)>>>0)}function yw(e){return e.displayName||e.name||"Component"}function Kl(e){return typeof e=="string"&&!0}var z0=typeof Symbol=="function"&&Symbol.for,M0=z0?Symbol.for("react.memo"):60115,xw=z0?Symbol.for("react.forward_ref"):60112,ww={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ew=((Yl={})[xw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yl[M0]=D0,Yl);function _p(e){return("type"in(t=e)&&t.type.$$typeof)===M0?D0:"$$typeof"in e?Ew[e.$$typeof]:ww;var t}var bw=Object.defineProperty,jw=Object.getOwnPropertyNames,Rp=Object.getOwnPropertySymbols,Cw=Object.getOwnPropertyDescriptor,Tw=Object.getPrototypeOf,Ap=Object.prototype;function F0(e,t,n){if(typeof t!="string"){if(Ap){var r=Tw(t);r&&r!==Ap&&F0(e,r,n)}var o=jw(t);Rp&&(o=o.concat(Rp(t)));for(var i=_p(e),a=_p(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Sw||n&&n[l]||a&&l in a||i&&l in i)){var u=Cw(t,l);try{bw(e,l,u)}catch{}}}}return e}function so(e){return typeof e=="function"}function Ud(e){return typeof e=="object"&&"styledComponentId"in e}function ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yc(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=yc(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=yc(e[r],t[r]);return e}function Bd(e,t){Object.defineProperty(e,"toString",{value:t})}function Ai(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ai(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),_a=new Map,ls=new Map,Gl=1,na=function(e){if(_a.has(e))return _a.get(e);for(;ls.has(Gl);)Gl++;var t=Gl++;return _a.set(e,t),ls.set(t,e),t},$w=function(e,t){_a.set(e,t),ls.set(t,e)},Pw="style[".concat(io,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Ow=new RegExp("^".concat(io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_w=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Rw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(Ow);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&($w(c,u),_w(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Aw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var U0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var l=Array.from(s.querySelectorAll("style[".concat(io,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(io,"active"),r.setAttribute("data-styled-version","6.0.7");var a=Aw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Nw=function(){function e(t){this.element=U0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Ai(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Iw=function(){function e(t){this.element=U0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Lw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Np=Fd,zw={isServer:!Fd,useCSSOMInjection:!pw},us=function(){function e(t,n,r){t===void 0&&(t=ao),n===void 0&&(n={});var o=this;this.options=Ke(Ke({},zw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fd&&Np&&(Np=!1,function(i){for(var a=document.querySelectorAll(Pw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(io)!=="active"&&(Rw(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Bd(this,function(){return function(i){for(var a=i.getTag(),s=a.length,l="",u=function(f){var m=function(v){return ls.get(v)}(f);if(m===void 0)return"continue";var g=i.names.get(m),h=a.getGroup(f);if(g===void 0||h.length===0)return"continue";var y="".concat(io,".g").concat(f,'[id="').concat(m,'"]'),E="";g!==void 0&&g.forEach(function(v){v.length>0&&(E+="".concat(v,","))}),l+="".concat(h).concat(y,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(o)})}return e.registerId=function(t){return na(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ke(Ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Lw(o):r?new Nw(o):new Iw(o)}(this.options),new kw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(na(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(na(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(na(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Mw=/&/g,Dw=/^\s*\/\/.*$/gm;function B0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=B0(n.children,t)),n})}function Fw(e){var t,n,r,o=e===void 0?ao:e,i=o.options,a=i===void 0?ao:i,s=o.plugins,l=s===void 0?Us:s,u=function(m,g,h){return h===n||h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===zs&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Mw,n).replace(r,u))}),a.prefix&&c.push(dw),c.push(lw);var f=function(m,g,h,y){g===void 0&&(g=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var E=m.replace(Dw,""),v=aw(h||g?"".concat(h," ").concat(g," { ").concat(E," }"):E);a.namespace&&(v=B0(v,a.namespace));var p=[];return ss(v,uw(c.concat(cw(function(w){return p.push(w)})))),p};return f.hash=l.length?l.reduce(function(m,g){return g.name||Ai(15),Dr(m,g.name)},5381).toString():"",f}var Uw=new us,xc=Fw(),H0=W.createContext({shouldForwardProp:void 0,styleSheet:Uw,stylis:xc});H0.Consumer;W.createContext(void 0);function wc(){return T.useContext(H0)}var Bw=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=xc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Bd(this,function(){throw Ai(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xc),this.name+t.hash},e}(),Hw=function(e){return e>="A"&&e<="Z"};function Ip(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Hw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var V0=function(e){return e==null||e===!1||e===""},W0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!V0(i)&&(Array.isArray(i)&&i.isCss||so(i)?r.push("".concat(Ip(o),":"),i,";"):vi(i)?r.push.apply(r,gi(gi(["".concat(o," {")],W0(i),!1),["}"],!1)):r.push("".concat(Ip(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(V0(e))return[];if(Ud(e))return[".".concat(e.styledComponentId)];if(so(e)){if(!so(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Dn(o,t,n,r)}var i;return e instanceof Bw?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?W0(e):Array.isArray(e)?Array.prototype.concat.apply(Us,e.map(function(a){return Dn(a,t,n,r)})):[e.toString()]}function Q0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(so(n)&&!Ud(n))return!1}return!0}var Vw=I0("6.0.7"),Ww=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q0(t),this.componentId=n,this.baseHash=Dr(Vw,n),this.baseStyle=r,us.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ir(o,this.staticRulesId);else{var i=vc(Dn(this.rules,t,n,r)),a=gc(Dr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=ir(o,a),this.staticRulesId=a}else{for(var l=Dr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=vc(Dn(f,t,n,r));l=Dr(l,m),u+=m}}if(u){var g=gc(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),o=ir(o,g)}}return o},e}(),Hd=W.createContext(void 0);Hd.Consumer;var Xl={};function Qw(e,t,n){var r=Ud(e),o=e,i=!Kl(e),a=t.attrs,s=a===void 0?Us:a,l=t.componentId,u=l===void 0?function(w,S){var j=typeof w!="string"?"sc":Pp(w);Xl[j]=(Xl[j]||0)+1;var k="".concat(j,"-").concat(L0("6.0.7"+j+Xl[j]));return S?"".concat(S,"-").concat(k):k}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(w){return Kl(w)?"styled.".concat(w):"Styled(".concat(yw(w),")")}(e);var f=t.displayName&&t.componentId?"".concat(Pp(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(w,S){return h(w,S)&&y(w,S)}}else g=h}var E=new Ww(n,f,r?o.componentStyle:void 0);function v(w,S){return function(j,k,C){var P=j.attrs,O=j.componentStyle,R=j.defaultProps,D=j.foldedComponentIds,U=j.styledComponentId,F=j.target,Z=W.useContext(Hd),xe=wc(),ae=j.shouldForwardProp||xe.shouldForwardProp,pe=function(lt,Oe,yt){for(var we,$e=Ke(Ke({},Oe),{className:void 0,theme:yt}),Xn=0;Xn<lt.length;Xn+=1){var en=so(we=lt[Xn])?we($e):we;for(var _ in en)$e[_]=_==="className"?ir($e[_],en[_]):_==="style"?Ke(Ke({},$e[_]),en[_]):en[_]}return Oe.className&&($e.className=ir($e.className,Oe.className)),$e}(P,k,A0(k,Z,R)||ao),N=pe.as||F,B={};for(var V in pe)pe[V]===void 0||V[0]==="$"||V==="as"||V==="theme"||(V==="forwardedAs"?B.as=pe.forwardedAs:ae&&!ae(V,N)||(B[V]=pe[V]));var le=function(lt,Oe){var yt=wc(),we=lt.generateAndInjectStyles(Oe,yt.styleSheet,yt.stylis);return we}(O,pe),he=ir(D,U);return le&&(he+=" "+le),pe.className&&(he+=" "+pe.className),B[Kl(N)&&!N0.has(N)?"class":"className"]=he,B.ref=C,T.createElement(N,B)}(p,w,S)}var p=W.forwardRef(v);return p.attrs=m,p.componentStyle=E,p.shouldForwardProp=g,p.foldedComponentIds=r?ir(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=f,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];for(var C=0,P=j;C<P.length;C++)yc(S,P[C],!0);return S}({},o.defaultProps,w):w}}),Bd(p,function(){return".".concat(p.styledComponentId)}),i&&F0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Lp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var zp=function(e){return Object.assign(e,{isCss:!0})};function q0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(so(e)||vi(e)){var r=e;return zp(Dn(Lp(Us,gi([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Dn(o):zp(Dn(Lp(o,t)))}function Sc(e,t,n){if(n===void 0&&(n=ao),!t)throw Ai(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,q0.apply(void 0,gi([o],i,!1)))};return r.attrs=function(o){return Sc(e,t,Ke(Ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Sc(e,t,Ke(Ke({},n),o))},r}var Y0=function(e){return Sc(Qw,e)},b=Y0;N0.forEach(function(e){b[e]=Y0(e)});var qw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Q0(t),us.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(vc(Dn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&us.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Yw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=q0.apply(void 0,gi([e],t,!1)),o="sc-global-".concat(L0(JSON.stringify(r))),i=new qw(r,o),a=function(l){var u=wc(),c=W.useContext(Hd),f=W.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(f,l,u.styleSheet,c,u.stylis),W.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,f,m){if(i.isStatic)i.renderStyles(l,hw,c,m);else{var g=Ke(Ke({},u),{theme:A0(u,f,a.defaultProps)});i.renderStyles(l,g,c,m)}}return W.memo(a)}/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(this,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));const Mp="popstate";function Kw(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:l=""}=wr(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Ec("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof i=="string"?i:cs(i))}function r(o,i){Bs(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Xw(t,n,r,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gw(){return Math.random().toString(36).substr(2,8)}function Dp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ec(e,t,n,r){return n===void 0&&(n=null),yi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||Gw()})}function cs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xw(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Pn.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(yi({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=Pn.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:s,location:y.location,delta:v})}function m(E,v){s=Pn.Push;let p=Ec(y.location,E,v);n&&n(p,E),u=c()+1;let w=Dp(p,u),S=y.createHref(p);try{a.pushState(w,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(S)}i&&l&&l({action:s,location:y.location,delta:1})}function g(E,v){s=Pn.Replace;let p=Ec(y.location,E,v);n&&n(p,E),u=c();let w=Dp(p,u),S=y.createHref(p);a.replaceState(w,"",S),i&&l&&l({action:s,location:y.location,delta:0})}function h(E){let v=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof E=="string"?E:cs(E);return Ae(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let y={get action(){return s},get location(){return e(o,a)},listen(E){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Mp,f),l=E,()=>{o.removeEventListener(Mp,f),l=null}},createHref(E){return t(o,E)},createURL:h,encodeLocation(E){let v=h(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:g,go(E){return a.go(E)}};return y}var Fp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fp||(Fp={}));function Jw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?wr(t):t,o=Vd(r.pathname||"/",n);if(o==null)return null;let i=K0(e);Zw(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=l2(i[s],d2(o));return a}function K0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Fn([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(Ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K0(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:a2(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of G0(i.path))o(i,a,l)}),t}function G0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=G0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Zw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:s2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e2=/^:\w+$/,t2=3,n2=2,r2=1,o2=10,i2=-2,Up=e=>e==="*";function a2(e,t){let n=e.split("/"),r=n.length;return n.some(Up)&&(r+=i2),t&&(r+=n2),n.filter(o=>!Up(o)).reduce((o,i)=>o+(e2.test(i)?t2:i===""?r2:o2),r)}function s2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function l2(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=u2({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;i.push({params:r,pathname:Fn([o,c.pathname]),pathnameBase:m2(Fn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=Fn([o,c.pathnameBase]))}return i}function u2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=c2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let m=s[f]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=f2(s[f]||"",c),u},{}),pathname:i,pathnameBase:a,pattern:e}}function c2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function d2(e){try{return decodeURI(e)}catch(t){return Bs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function f2(e,t){try{return decodeURIComponent(e)}catch(n){return Bs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function p2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:h2(n,t):t,search:g2(r),hash:v2(o)}}function h2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Jl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function J0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=wr(e):(o=yi({},e),Ae(!o.pathname||!o.pathname.includes("?"),Jl("?","pathname","search",o)),Ae(!o.pathname||!o.pathname.includes("#"),Jl("#","pathname","hash",o)),Ae(!o.search||!o.search.includes("#"),Jl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}s=f>=0?t[f]:"/"}let l=p2(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),m2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,v2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Z0=["post","put","patch","delete"];new Set(Z0);const x2=["get",...Z0];new Set(x2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}const Wd=T.createContext(null),w2=T.createContext(null),go=T.createContext(null),Hs=T.createContext(null),Sr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),ev=T.createContext(null);function S2(e,t){let{relative:n}=t===void 0?{}:t;Ni()||Ae(!1);let{basename:r,navigator:o}=T.useContext(go),{hash:i,pathname:a,search:s}=nv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Fn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function Ni(){return T.useContext(Hs)!=null}function Vs(){return Ni()||Ae(!1),T.useContext(Hs).location}function tv(e){T.useContext(go).static||T.useLayoutEffect(e)}function E2(){let{isDataRoute:e}=T.useContext(Sr);return e?I2():b2()}function b2(){Ni()||Ae(!1);let e=T.useContext(Wd),{basename:t,navigator:n}=T.useContext(go),{matches:r}=T.useContext(Sr),{pathname:o}=Vs(),i=JSON.stringify(X0(r).map(l=>l.pathnameBase)),a=T.useRef(!1);return tv(()=>{a.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=J0(l,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Fn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,i,o,e])}function nv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Sr),{pathname:o}=Vs(),i=JSON.stringify(X0(r).map(a=>a.pathnameBase));return T.useMemo(()=>J0(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function j2(e,t){return C2(e,t)}function C2(e,t,n){Ni()||Ae(!1);let{navigator:r}=T.useContext(go),{matches:o}=T.useContext(Sr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let l=Vs(),u;if(t){var c;let y=typeof t=="string"?wr(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||Ae(!1),u=y}else u=l;let f=u.pathname||"/",m=s==="/"?f:f.slice(s.length)||"/",g=Jw(e,{pathname:m}),h=O2(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Fn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Fn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n);return t&&h?T.createElement(Hs.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pn.Pop}},h):h}function T2(){let e=N2(),t=y2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:o},n):null,i)}const k2=T.createElement(T2,null);class $2 extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Sr.Provider,{value:this.props.routeContext},T.createElement(ev.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P2(e){let{routeContext:t,match:n,children:r}=e,o=T.useContext(Wd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Sr.Provider,{value:t},r)}function O2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=i.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||Ae(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,f=null;n&&(f=l.route.errorElement||k2);let m=t.concat(i.slice(0,u+1)),g=()=>{let h;return c?h=f:l.route.Component?h=T.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=s,T.createElement(P2,{match:l,routeContext:{outlet:s,matches:m,isDataRoute:n!=null},children:h})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement($2,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var rv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rv||{}),fs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fs||{});function _2(e){let t=T.useContext(Wd);return t||Ae(!1),t}function R2(e){let t=T.useContext(w2);return t||Ae(!1),t}function A2(e){let t=T.useContext(Sr);return t||Ae(!1),t}function ov(e){let t=A2(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function N2(){var e;let t=T.useContext(ev),n=R2(fs.UseRouteError),r=ov(fs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function I2(){let{router:e}=_2(rv.UseNavigateStable),t=ov(fs.UseNavigateStable),n=T.useRef(!1);return tv(()=>{n.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ds({fromRouteId:t},i)))},[e,t])}function Tr(e){Ae(!1)}function L2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Pn.Pop,navigator:i,static:a=!1}=e;Ni()&&Ae(!1);let s=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=wr(r));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:g="default"}=r,h=T.useMemo(()=>{let y=Vd(u,s);return y==null?null:{location:{pathname:y,search:c,hash:f,state:m,key:g},navigationType:o}},[s,u,c,f,m,g,o]);return h==null?null:T.createElement(go.Provider,{value:l},T.createElement(Hs.Provider,{children:n,value:h}))}function z2(e){let{children:t,location:n}=e;return j2(bc(t),n)}new Promise(()=>{});function bc(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,o)=>{if(!T.isValidElement(r))return;let i=[...t,o];if(r.type===T.Fragment){n.push.apply(n,bc(r.props.children,i));return}r.type!==Tr&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=bc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jc(){return jc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jc.apply(this,arguments)}function M2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function D2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F2(e,t){return e.button===0&&(!t||t==="_self")&&!D2(e)}const U2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],B2="startTransition",Bp=zy[B2];function H2(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=Kw({window:o,v5Compat:!0}));let a=i.current,[s,l]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=T.useCallback(f=>{u&&Bp?Bp(()=>l(f)):l(f)},[l,u]);return T.useLayoutEffect(()=>a.listen(c),[a,c]),T.createElement(L2,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const V2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Er=T.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=M2(t,U2),{basename:m}=T.useContext(go),g,h=!1;if(typeof u=="string"&&W2.test(u)&&(g=u,V2))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Vd(w.pathname,m);w.origin===p.origin&&S!=null?u=S+w.search+w.hash:h=!0}catch{}let y=S2(u,{relative:o}),E=Q2(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o});function v(p){r&&r(p),p.defaultPrevented||E(p)}return T.createElement("a",jc({},f,{href:g||y,onClick:h||i?r:v,ref:n,target:l}))});var Hp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Hp||(Hp={}));var Vp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vp||(Vp={}));function Q2(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=E2(),l=Vs(),u=nv(e,{relative:a});return T.useCallback(c=>{if(F2(c,n)){c.preventDefault();let f=r!==void 0?r:cs(l)===cs(u);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[l,s,u,r,o,n,e,i,a])}var iv={exports:{}};(function(e,t){(function(r,o){e.exports=o(T)})(Sy,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,l)=>{l.match=h,l.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,g=/(dpi|dpcm|dppx)?$/;function h(w,S){return y(w).some(function(j){var k=j.inverse,C=j.type==="all"||S.type===j.type;if(C&&k||!(C||k))return!1;var P=j.expressions.every(function(O){var R=O.feature,D=O.modifier,U=O.value,F=S[R];if(!F)return!1;switch(R){case"orientation":case"scan":return F.toLowerCase()===U.toLowerCase();case"width":case"height":case"device-width":case"device-height":U=p(U),F=p(F);break;case"resolution":U=v(U),F=v(F);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":U=E(U),F=E(F);break;case"grid":case"color":case"color-index":case"monochrome":U=parseInt(U,10)||1,F=parseInt(F,10)||0;break}switch(D){case"min":return F>=U;case"max":return F<=U;default:return F===U}});return P&&!k||!P&&k})}function y(w){return w.split(",").map(function(S){S=S.trim();var j=S.match(u),k=j[1],C=j[2],P=j[3]||"",O={};return O.inverse=!!k&&k.toLowerCase()==="not",O.type=C?C.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],O.expressions=P.map(function(R){var D=R.match(c),U=D[1].toLowerCase().match(f);return{modifier:U[1],feature:U[2],value:D[2]}}),O})}function E(w){var S=Number(w),j;return S||(j=w.match(/^(\d+)\s*\/\s*(\d+)$/),S=j[1]/j[2]),S}function v(w){var S=parseFloat(w),j=String(w).match(g)[1];switch(j){case"dpcm":return S/2.54;case"dppx":return S*96;default:return S}}function p(w){var S=parseFloat(w),j=String(w).match(m)[1];switch(j){case"em":return S*16;case"rem":return S*16;case"cm":return S*96/2.54;case"mm":return S*96/2.54/10;case"in":return S*96;case"pt":return S*72;case"pc":return S*72/12;default:return S}}},"./node_modules/hyphenate-style-name/index.js":(s,l,u)=>{u.r(l),u.d(l,{default:()=>y});var c=/[A-Z]/g,f=/^ms-/,m={};function g(E){return"-"+E.toLowerCase()}function h(E){if(m.hasOwnProperty(E))return m[E];var v=E.replace(c,g);return m[E]=f.test(v)?"-"+v:v}const y=h},"./node_modules/matchmediaquery/index.js":(s,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function m(h,y,E){var v=this;if(f&&!E){var p=f.call(window,h);this.matches=p.matches,this.media=p.media,p.addListener(j)}else this.matches=c(h,y),this.media=h;this.addListener=w,this.removeListener=S,this.dispose=k;function w(C){p&&p.addListener(C)}function S(C){p&&p.removeListener(C)}function j(C){v.matches=C.matches,v.media=C.media}function k(){p&&p.removeListener(j)}}function g(h,y,E){return new m(h,y,E)}s.exports=g},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function f(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function m(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var h={},y=0;y<10;y++)h["_"+String.fromCharCode(y)]=y;var E=Object.getOwnPropertyNames(h).map(function(p){return h[p]});if(E.join("")!=="0123456789")return!1;var v={};return"abcdefghijklmnopqrst".split("").forEach(function(p){v[p]=p}),Object.keys(Object.assign({},v)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=m()?Object.assign:function(g,h){for(var y,E=f(g),v,p=1;p<arguments.length;p++){y=Object(arguments[p]);for(var w in y)u.call(y,w)&&(E[w]=y[w]);if(l){v=l(y);for(var S=0;S<v.length;S++)c.call(y,v[S])&&(E[v[S]]=y[v[S]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(s,l,u)=>{var c=function(){};{var f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},g=u("./node_modules/prop-types/lib/has.js");c=function(y){var E="Warning: "+y;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function h(y,E,v,p,w){for(var S in y)if(g(y,S)){var j;try{if(typeof y[S]!="function"){var k=Error((p||"React class")+": "+v+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw k.name="Invariant Violation",k}j=y[S](E,S,p,v,null,f)}catch(P){j=P}if(j&&!(j instanceof Error)&&c((p||"React class")+": type specification of "+v+" `"+S+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof j+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),j instanceof Error&&!(j.message in m)){m[j.message]=!0;var C=w?w():"";c("Failed "+v+" type: "+j.message+(C??""))}}}h.resetWarningCache=function(){m={}},s.exports=h},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,l,u)=>{var c=u("./node_modules/react-is/index.js"),f=u("./node_modules/object-assign/index.js"),m=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g=u("./node_modules/prop-types/lib/has.js"),h=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(v){var p="Warning: "+v;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}};function E(){return null}s.exports=function(v,p){var w=typeof Symbol=="function"&&Symbol.iterator,S="@@iterator";function j(_){var M=_&&(w&&_[w]||_[S]);if(typeof M=="function")return M}var k="<<anonymous>>",C={array:D("array"),bigint:D("bigint"),bool:D("boolean"),func:D("function"),number:D("number"),object:D("object"),string:D("string"),symbol:D("symbol"),any:U(),arrayOf:F,element:Z(),elementType:xe(),instanceOf:ae,node:V(),objectOf:N,oneOf:pe,oneOfType:B,shape:he,exact:lt};function P(_,M){return _===M?_!==0||1/_===1/M:_!==_&&M!==M}function O(_,M){this.message=_,this.data=M&&typeof M=="object"?M:{},this.stack=""}O.prototype=Error.prototype;function R(_){var M={},ee=0;function G(re,K,X,oe,ue,ie,I){if(oe=oe||k,ie=ie||X,I!==m){if(p){var ze=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ze.name="Invariant Violation",ze}else if(typeof console<"u"){var At=oe+":"+X;!M[At]&&ee<3&&(y("You are manually calling a React.PropTypes validation function for the `"+ie+"` prop on `"+oe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),M[At]=!0,ee++)}}return K[X]==null?re?K[X]===null?new O("The "+ue+" `"+ie+"` is marked as required "+("in `"+oe+"`, but its value is `null`.")):new O("The "+ue+" `"+ie+"` is marked as required in "+("`"+oe+"`, but its value is `undefined`.")):null:_(K,X,oe,ue,ie)}var q=G.bind(null,!1);return q.isRequired=G.bind(null,!0),q}function D(_){function M(ee,G,q,re,K,X){var oe=ee[G],ue=we(oe);if(ue!==_){var ie=$e(oe);return new O("Invalid "+re+" `"+K+"` of type "+("`"+ie+"` supplied to `"+q+"`, expected ")+("`"+_+"`."),{expectedType:_})}return null}return R(M)}function U(){return R(E)}function F(_){function M(ee,G,q,re,K){if(typeof _!="function")return new O("Property `"+K+"` of component `"+q+"` has invalid PropType notation inside arrayOf.");var X=ee[G];if(!Array.isArray(X)){var oe=we(X);return new O("Invalid "+re+" `"+K+"` of type "+("`"+oe+"` supplied to `"+q+"`, expected an array."))}for(var ue=0;ue<X.length;ue++){var ie=_(X,ue,q,re,K+"["+ue+"]",m);if(ie instanceof Error)return ie}return null}return R(M)}function Z(){function _(M,ee,G,q,re){var K=M[ee];if(!v(K)){var X=we(K);return new O("Invalid "+q+" `"+re+"` of type "+("`"+X+"` supplied to `"+G+"`, expected a single ReactElement."))}return null}return R(_)}function xe(){function _(M,ee,G,q,re){var K=M[ee];if(!c.isValidElementType(K)){var X=we(K);return new O("Invalid "+q+" `"+re+"` of type "+("`"+X+"` supplied to `"+G+"`, expected a single ReactElement type."))}return null}return R(_)}function ae(_){function M(ee,G,q,re,K){if(!(ee[G]instanceof _)){var X=_.name||k,oe=en(ee[G]);return new O("Invalid "+re+" `"+K+"` of type "+("`"+oe+"` supplied to `"+q+"`, expected ")+("instance of `"+X+"`."))}return null}return R(M)}function pe(_){if(!Array.isArray(_))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),E;function M(ee,G,q,re,K){for(var X=ee[G],oe=0;oe<_.length;oe++)if(P(X,_[oe]))return null;var ue=JSON.stringify(_,function(I,ze){var At=$e(ze);return At==="symbol"?String(ze):ze});return new O("Invalid "+re+" `"+K+"` of value `"+String(X)+"` "+("supplied to `"+q+"`, expected one of "+ue+"."))}return R(M)}function N(_){function M(ee,G,q,re,K){if(typeof _!="function")return new O("Property `"+K+"` of component `"+q+"` has invalid PropType notation inside objectOf.");var X=ee[G],oe=we(X);if(oe!=="object")return new O("Invalid "+re+" `"+K+"` of type "+("`"+oe+"` supplied to `"+q+"`, expected an object."));for(var ue in X)if(g(X,ue)){var ie=_(X,ue,q,re,K+"."+ue,m);if(ie instanceof Error)return ie}return null}return R(M)}function B(_){if(!Array.isArray(_))return y("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var M=0;M<_.length;M++){var ee=_[M];if(typeof ee!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Xn(ee)+" at index "+M+"."),E}function G(q,re,K,X,oe){for(var ue=[],ie=0;ie<_.length;ie++){var I=_[ie],ze=I(q,re,K,X,oe,m);if(ze==null)return null;ze.data&&g(ze.data,"expectedType")&&ue.push(ze.data.expectedType)}var At=ue.length>0?", expected one of type ["+ue.join(", ")+"]":"";return new O("Invalid "+X+" `"+oe+"` supplied to "+("`"+K+"`"+At+"."))}return R(G)}function V(){function _(M,ee,G,q,re){return Oe(M[ee])?null:new O("Invalid "+q+" `"+re+"` supplied to "+("`"+G+"`, expected a ReactNode."))}return R(_)}function le(_,M,ee,G,q){return new O((_||"React class")+": "+M+" type `"+ee+"."+G+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+q+"`.")}function he(_){function M(ee,G,q,re,K){var X=ee[G],oe=we(X);if(oe!=="object")return new O("Invalid "+re+" `"+K+"` of type `"+oe+"` "+("supplied to `"+q+"`, expected `object`."));for(var ue in _){var ie=_[ue];if(typeof ie!="function")return le(q,re,K,ue,$e(ie));var I=ie(X,ue,q,re,K+"."+ue,m);if(I)return I}return null}return R(M)}function lt(_){function M(ee,G,q,re,K){var X=ee[G],oe=we(X);if(oe!=="object")return new O("Invalid "+re+" `"+K+"` of type `"+oe+"` "+("supplied to `"+q+"`, expected `object`."));var ue=f({},ee[G],_);for(var ie in ue){var I=_[ie];if(g(_,ie)&&typeof I!="function")return le(q,re,K,ie,$e(I));if(!I)return new O("Invalid "+re+" `"+K+"` key `"+ie+"` supplied to `"+q+"`.\nBad object: "+JSON.stringify(ee[G],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(_),null,"  "));var ze=I(X,ie,q,re,K+"."+ie,m);if(ze)return ze}return null}return R(M)}function Oe(_){switch(typeof _){case"number":case"string":case"undefined":return!0;case"boolean":return!_;case"object":if(Array.isArray(_))return _.every(Oe);if(_===null||v(_))return!0;var M=j(_);if(M){var ee=M.call(_),G;if(M!==_.entries){for(;!(G=ee.next()).done;)if(!Oe(G.value))return!1}else for(;!(G=ee.next()).done;){var q=G.value;if(q&&!Oe(q[1]))return!1}}else return!1;return!0;default:return!1}}function yt(_,M){return _==="symbol"?!0:M?M["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&M instanceof Symbol:!1}function we(_){var M=typeof _;return Array.isArray(_)?"array":_ instanceof RegExp?"object":yt(M,_)?"symbol":M}function $e(_){if(typeof _>"u"||_===null)return""+_;var M=we(_);if(M==="object"){if(_ instanceof Date)return"date";if(_ instanceof RegExp)return"regexp"}return M}function Xn(_){var M=$e(_);switch(M){case"array":case"object":return"an "+M;case"boolean":case"date":case"regexp":return"a "+M;default:return M}}function en(_){return!_.constructor||!_.constructor.name?k:_.constructor.name}return C.checkPropTypes=h,C.resetWarningCache=h.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(s,l,u)=>{{var c=u("./node_modules/react-is/index.js"),f=!0;s.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=l},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,f=u?Symbol.for("react.portal"):60106,m=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,h=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,E=u?Symbol.for("react.context"):60110,v=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.concurrent_mode"):60111,w=u?Symbol.for("react.forward_ref"):60112,S=u?Symbol.for("react.suspense"):60113,j=u?Symbol.for("react.suspense_list"):60120,k=u?Symbol.for("react.memo"):60115,C=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,O=u?Symbol.for("react.fundamental"):60117,R=u?Symbol.for("react.responder"):60118,D=u?Symbol.for("react.scope"):60119;function U(I){return typeof I=="string"||typeof I=="function"||I===m||I===p||I===h||I===g||I===S||I===j||typeof I=="object"&&I!==null&&(I.$$typeof===C||I.$$typeof===k||I.$$typeof===y||I.$$typeof===E||I.$$typeof===w||I.$$typeof===O||I.$$typeof===R||I.$$typeof===D||I.$$typeof===P)}function F(I){if(typeof I=="object"&&I!==null){var ze=I.$$typeof;switch(ze){case c:var At=I.type;switch(At){case v:case p:case m:case h:case g:case S:return At;default:var gf=At&&At.$$typeof;switch(gf){case E:case w:case C:case k:case y:return gf;default:return ze}}case f:return ze}}}var Z=v,xe=p,ae=E,pe=y,N=c,B=w,V=m,le=C,he=k,lt=f,Oe=h,yt=g,we=S,$e=!1;function Xn(I){return $e||($e=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),en(I)||F(I)===v}function en(I){return F(I)===p}function _(I){return F(I)===E}function M(I){return F(I)===y}function ee(I){return typeof I=="object"&&I!==null&&I.$$typeof===c}function G(I){return F(I)===w}function q(I){return F(I)===m}function re(I){return F(I)===C}function K(I){return F(I)===k}function X(I){return F(I)===f}function oe(I){return F(I)===h}function ue(I){return F(I)===g}function ie(I){return F(I)===S}l.AsyncMode=Z,l.ConcurrentMode=xe,l.ContextConsumer=ae,l.ContextProvider=pe,l.Element=N,l.ForwardRef=B,l.Fragment=V,l.Lazy=le,l.Memo=he,l.Portal=lt,l.Profiler=Oe,l.StrictMode=yt,l.Suspense=we,l.isAsyncMode=Xn,l.isConcurrentMode=en,l.isContextConsumer=_,l.isContextProvider=M,l.isElement=ee,l.isForwardRef=G,l.isFragment=q,l.isLazy=re,l.isMemo=K,l.isPortal=X,l.isProfiler=oe,l.isStrictMode=ue,l.isSuspense=ie,l.isValidElementType=U,l.typeOf=F})()},"./node_modules/react-is/index.js":(s,l,u)=>{s.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>c});function c(m,g){if(m===g)return!0;if(!m||!g)return!1;var h=Object.keys(m),y=Object.keys(g),E=h.length;if(y.length!==E)return!1;for(var v=0;v<E;v++){var p=h[v];if(m[p]!==g[p]||!Object.prototype.hasOwnProperty.call(g,p))return!1}return!0}function f(m,g){if(m===g)return!0;if(!m||!g)return!1;var h=m.length;if(g.length!==h)return!1;for(var y=0;y<h;y++)if(m[y]!==g[y])return!1;return!0}},"./src/Component.ts":function(s,l,u){var c=this&&this.__rest||function(h,y){var E={};for(var v in h)Object.prototype.hasOwnProperty.call(h,v)&&y.indexOf(v)<0&&(E[v]=h[v]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,v=Object.getOwnPropertySymbols(h);p<v.length;p++)y.indexOf(v[p])<0&&Object.prototype.propertyIsEnumerable.call(h,v[p])&&(E[v[p]]=h[v[p]]);return E},f=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(l,"__esModule",{value:!0});var m=f(u("./src/useMediaQuery.ts")),g=function(h){var y=h.children,E=h.device,v=h.onChange,p=c(h,["children","device","onChange"]),w=(0,m.default)(p,E,v);return typeof y=="function"?y(w):w?y:null};l.default=g},"./src/Context.ts":(s,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),f=(0,c.createContext)(void 0);l.default=f},"./src/index.ts":function(s,l,u){var c=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var f=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=f.default;var m=c(u("./src/Component.ts"));l.default=m.default;var g=c(u("./src/toQuery.ts"));l.toQuery=g.default;var h=c(u("./src/Context.ts"));l.Context=h.default},"./src/mediaQuery.ts":function(s,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(S){for(var j,k=1,C=arguments.length;k<C;k++){j=arguments[k];for(var P in j)Object.prototype.hasOwnProperty.call(j,P)&&(S[P]=j[P])}return S},c.apply(this,arguments)},f=this&&this.__rest||function(S,j){var k={};for(var C in S)Object.prototype.hasOwnProperty.call(S,C)&&j.indexOf(C)<0&&(k[C]=S[C]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,C=Object.getOwnPropertySymbols(S);P<C.length;P++)j.indexOf(C[P])<0&&Object.prototype.propertyIsEnumerable.call(S,C[P])&&(k[C[P]]=S[C[P]]);return k},m=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(l,"__esModule",{value:!0});var g=m(u("./node_modules/prop-types/index.js")),h=g.default.oneOfType([g.default.string,g.default.number]),y={all:g.default.bool,grid:g.default.bool,aural:g.default.bool,braille:g.default.bool,handheld:g.default.bool,print:g.default.bool,projection:g.default.bool,screen:g.default.bool,tty:g.default.bool,tv:g.default.bool,embossed:g.default.bool},E={orientation:g.default.oneOf(["portrait","landscape"]),scan:g.default.oneOf(["progressive","interlace"]),aspectRatio:g.default.string,deviceAspectRatio:g.default.string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:g.default.bool,colorIndex:g.default.bool,monochrome:g.default.bool,resolution:h,type:Object.keys(y)};E.type;var v=f(E,["type"]),p=c({minAspectRatio:g.default.string,maxAspectRatio:g.default.string,minDeviceAspectRatio:g.default.string,maxDeviceAspectRatio:g.default.string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:g.default.number,maxColor:g.default.number,minColorIndex:g.default.number,maxColorIndex:g.default.number,minMonochrome:g.default.number,maxMonochrome:g.default.number,minResolution:h,maxResolution:h},v),w=c(c({},y),p);l.default={all:w,types:y,matchers:E,features:p}},"./src/toQuery.ts":function(s,l,u){var c=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(l,"__esModule",{value:!0});var f=c(u("./node_modules/hyphenate-style-name/index.js")),m=c(u("./src/mediaQuery.ts")),g=function(v){return"not ".concat(v)},h=function(v,p){var w=(0,f.default)(v);return typeof p=="number"&&(p="".concat(p,"px")),p===!0?w:p===!1?g(w):"(".concat(w,": ").concat(p,")")},y=function(v){return v.join(" and ")},E=function(v){var p=[];return Object.keys(m.default.all).forEach(function(w){var S=v[w];S!=null&&p.push(h(w,S))}),y(p)};l.default=E},"./src/useMediaQuery.ts":function(s,l,u){var c=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(l,"__esModule",{value:!0});var f=u("react"),m=c(u("./node_modules/matchmediaquery/index.js")),g=c(u("./node_modules/hyphenate-style-name/index.js")),h=u("./node_modules/shallow-equal/dist/index.esm.js"),y=c(u("./src/toQuery.ts")),E=c(u("./src/Context.ts")),v=function(O){return O.query||(0,y.default)(O)},p=function(O){if(O){var R=Object.keys(O);return R.reduce(function(D,U){return D[(0,g.default)(U)]=O[U],D},{})}},w=function(){var O=(0,f.useRef)(!1);return(0,f.useEffect)(function(){O.current=!0},[]),O.current},S=function(O){var R=(0,f.useContext)(E.default),D=function(){return p(O)||p(R)},U=(0,f.useState)(D),F=U[0],Z=U[1];return(0,f.useEffect)(function(){var xe=D();(0,h.shallowEqualObjects)(F,xe)||Z(xe)},[O,R]),F},j=function(O){var R=function(){return v(O)},D=(0,f.useState)(R),U=D[0],F=D[1];return(0,f.useEffect)(function(){var Z=R();U!==Z&&F(Z)},[O]),U},k=function(O,R){var D=function(){return(0,m.default)(O,R||{},!!R)},U=(0,f.useState)(D),F=U[0],Z=U[1],xe=w();return(0,f.useEffect)(function(){if(xe){var ae=D();return Z(ae),function(){ae&&ae.dispose()}}},[O,R]),F},C=function(O){var R=(0,f.useState)(O.matches),D=R[0],U=R[1];return(0,f.useEffect)(function(){var F=function(Z){U(Z.matches)};return O.addListener(F),U(O.matches),function(){O.removeListener(F)}},[O]),D},P=function(O,R,D){var U=S(R),F=j(O);if(!F)throw new Error("Invalid or missing MediaQuery!");var Z=k(F,U),xe=C(Z),ae=w();return(0,f.useEffect)(function(){ae&&D&&D(xe)},[xe]),(0,f.useEffect)(function(){return function(){Z&&Z.dispose()}},[]),xe};l.default=P},react:s=>{s.exports=n}},o={};function i(s){var l=o[s];if(l!==void 0)return l.exports;var u=o[s]={exports:{}};return r[s].call(u.exports,u,u.exports,i),u.exports}i.d=(s,l)=>{for(var u in l)i.o(l,u)&&!i.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:l[u]})},i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a=i("./src/index.ts");return a})())})(iv);var q2=iv.exports,av={exports:{}},Y2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K2=Y2,G2=K2;function sv(){}function lv(){}lv.resetWarningCache=sv;var X2=function(){function e(r,o,i,a,s,l){if(l!==G2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:lv,resetWarningCache:sv};return n.PropTypes=n,n};av.exports=X2();var J2=av.exports;const H=ki(J2),x={colors:{white:"#FEFEFF",seasalt:"#F9F9F9",lavender:"#EFECFF",platinum:"#E2DFDF",gray:"#797979",raisinblack:"#242331",onyx:"#413F50",lavenderfloral:"#B06EFE",electricindigo:"#5236FF"},bp:{"x-small":"576px",small:"767px",medium:"992px",large:"1200px"}},Z2=b.div`
  button {
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    vertical-align: middle;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 0px;
    padding: 0 32px;
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
    color: ${x.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: ${x.colors.onyx};
    text-decoration: none;
    position: relative;

    &::before {
      border-radius: 20px;
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 0px;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 1s ease;
    }
    &:hover:before {
      width: 100%;
    }
  }
`;function ar({buttonText:e,handleClick:t}){return d.jsx(Z2,{children:d.jsx("button",{onClick:t,children:e})})}ar.propTypes={buttonText:H.string,handleClick:H.func};const eS=b.div`
  button {
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    vertical-align: middle;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 0px;
    padding: 0 32px;
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
    color: ${x.colors.white};
    border-radius: ${e=>e.square?"8px":"20px"};
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: linear-gradient(
      to right,
      ${x.colors.electricindigo} 0%,
      ${x.colors.lavenderfloral} 100%
    );
    text-decoration: none;
    position: relative;

    &::before {
      border-radius: 20px;
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 0px;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 1s ease;
    }
    &:hover:before {
      width: 100%;
    }
  }
`;function xi({buttonText:e,handleClick:t,square:n}){return d.jsx(eS,{square:n,children:d.jsx("button",{onClick:t,children:e})})}xi.propTypes={buttonText:H.string,handleClick:H.func,square:H.bool};var uv={exports:{}},cv={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=T;function tS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nS=typeof Object.is=="function"?Object.is:tS,rS=lo.useState,oS=lo.useEffect,iS=lo.useLayoutEffect,aS=lo.useDebugValue;function sS(e,t){var n=t(),r=rS({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return iS(function(){o.value=n,o.getSnapshot=t,Zl(o)&&i({inst:o})},[e,n,t]),oS(function(){return Zl(o)&&i({inst:o}),e(function(){Zl(o)&&i({inst:o})})},[e]),aS(n),n}function Zl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nS(e,n)}catch{return!0}}function lS(e,t){return t()}var uS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?lS:sS;cv.useSyncExternalStore=lo.useSyncExternalStore!==void 0?lo.useSyncExternalStore:uS;uv.exports=cv;var cS=uv.exports,dv={exports:{}},fv={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=T,dS=cS;function fS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pS=typeof Object.is=="function"?Object.is:fS,hS=dS.useSyncExternalStore,mS=Ws.useRef,gS=Ws.useEffect,vS=Ws.useMemo,yS=Ws.useDebugValue;fv.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=mS(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=vS(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),o!==void 0&&a.hasValue){var h=a.value;if(o(h,g))return f=h}return f=g}if(h=f,pS(c,g))return h;var y=r(g);return o!==void 0&&o(h,y)?h:(c=g,f=y)}var u=!1,c,f,m=n===void 0?null:n;return[function(){return l(t())},m===null?void 0:function(){return l(m())}]},[t,n,r,o]);var s=hS(e,i[0],i[1]);return gS(function(){a.hasValue=!0,a.value=s},[s]),yS(s),s};dv.exports=fv;var xS=dv.exports;function wS(e){e()}let pv=wS;const SS=e=>pv=e,ES=()=>pv,Wp=Symbol.for("react-redux-context"),Qp=typeof globalThis<"u"?globalThis:{};function bS(){var e;if(!T.createContext)return{};const t=(e=Qp[Wp])!=null?e:Qp[Wp]=new Map;let n=t.get(T.createContext);return n||(n=T.createContext(null),t.set(T.createContext,n)),n}const Qn=bS();function Qd(e=Qn){return function(){return T.useContext(e)}}const hv=Qd(),jS=()=>{throw new Error("uSES not initialized!")};let mv=jS;const CS=e=>{mv=e},TS=(e,t)=>e===t;function kS(e=Qn){const t=e===Qn?hv:Qd(e);return function(r,o={}){const{equalityFn:i=TS,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:l,subscription:u,getServerState:c,stabilityCheck:f,noopCheck:m}=t();T.useRef(!0);const g=T.useCallback({[r.name](y){return r(y)}}[r.name],[r,f,a]),h=mv(u.addNestedSub,l.getState,c||l.getState,g,i);return T.useDebugValue(h),h}}const Qs=kS();var gv={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,qd=Ue?Symbol.for("react.element"):60103,Yd=Ue?Symbol.for("react.portal"):60106,qs=Ue?Symbol.for("react.fragment"):60107,Ys=Ue?Symbol.for("react.strict_mode"):60108,Ks=Ue?Symbol.for("react.profiler"):60114,Gs=Ue?Symbol.for("react.provider"):60109,Xs=Ue?Symbol.for("react.context"):60110,Kd=Ue?Symbol.for("react.async_mode"):60111,Js=Ue?Symbol.for("react.concurrent_mode"):60111,Zs=Ue?Symbol.for("react.forward_ref"):60112,el=Ue?Symbol.for("react.suspense"):60113,$S=Ue?Symbol.for("react.suspense_list"):60120,tl=Ue?Symbol.for("react.memo"):60115,nl=Ue?Symbol.for("react.lazy"):60116,PS=Ue?Symbol.for("react.block"):60121,OS=Ue?Symbol.for("react.fundamental"):60117,_S=Ue?Symbol.for("react.responder"):60118,RS=Ue?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qd:switch(e=e.type,e){case Kd:case Js:case qs:case Ks:case Ys:case el:return e;default:switch(e=e&&e.$$typeof,e){case Xs:case Zs:case nl:case tl:case Gs:return e;default:return t}}case Yd:return t}}}function vv(e){return gt(e)===Js}de.AsyncMode=Kd;de.ConcurrentMode=Js;de.ContextConsumer=Xs;de.ContextProvider=Gs;de.Element=qd;de.ForwardRef=Zs;de.Fragment=qs;de.Lazy=nl;de.Memo=tl;de.Portal=Yd;de.Profiler=Ks;de.StrictMode=Ys;de.Suspense=el;de.isAsyncMode=function(e){return vv(e)||gt(e)===Kd};de.isConcurrentMode=vv;de.isContextConsumer=function(e){return gt(e)===Xs};de.isContextProvider=function(e){return gt(e)===Gs};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qd};de.isForwardRef=function(e){return gt(e)===Zs};de.isFragment=function(e){return gt(e)===qs};de.isLazy=function(e){return gt(e)===nl};de.isMemo=function(e){return gt(e)===tl};de.isPortal=function(e){return gt(e)===Yd};de.isProfiler=function(e){return gt(e)===Ks};de.isStrictMode=function(e){return gt(e)===Ys};de.isSuspense=function(e){return gt(e)===el};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qs||e===Js||e===Ks||e===Ys||e===el||e===$S||typeof e=="object"&&e!==null&&(e.$$typeof===nl||e.$$typeof===tl||e.$$typeof===Gs||e.$$typeof===Xs||e.$$typeof===Zs||e.$$typeof===OS||e.$$typeof===_S||e.$$typeof===RS||e.$$typeof===PS)};de.typeOf=gt;gv.exports=de;var AS=gv.exports,yv=AS,NS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},IS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xv={};xv[yv.ForwardRef]=NS;xv[yv.Memo]=IS;var fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=Symbol.for("react.element"),Xd=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),al=Symbol.for("react.provider"),sl=Symbol.for("react.context"),LS=Symbol.for("react.server_context"),ll=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),fl=Symbol.for("react.lazy"),zS=Symbol.for("react.offscreen"),wv;wv=Symbol.for("react.module.reference");function Rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gd:switch(e=e.type,e){case rl:case il:case ol:case ul:case cl:return e;default:switch(e=e&&e.$$typeof,e){case LS:case sl:case ll:case fl:case dl:case al:return e;default:return t}}case Xd:return t}}}fe.ContextConsumer=sl;fe.ContextProvider=al;fe.Element=Gd;fe.ForwardRef=ll;fe.Fragment=rl;fe.Lazy=fl;fe.Memo=dl;fe.Portal=Xd;fe.Profiler=il;fe.StrictMode=ol;fe.Suspense=ul;fe.SuspenseList=cl;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return Rt(e)===sl};fe.isContextProvider=function(e){return Rt(e)===al};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gd};fe.isForwardRef=function(e){return Rt(e)===ll};fe.isFragment=function(e){return Rt(e)===rl};fe.isLazy=function(e){return Rt(e)===fl};fe.isMemo=function(e){return Rt(e)===dl};fe.isPortal=function(e){return Rt(e)===Xd};fe.isProfiler=function(e){return Rt(e)===il};fe.isStrictMode=function(e){return Rt(e)===ol};fe.isSuspense=function(e){return Rt(e)===ul};fe.isSuspenseList=function(e){return Rt(e)===cl};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rl||e===il||e===ol||e===ul||e===cl||e===zS||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===al||e.$$typeof===sl||e.$$typeof===ll||e.$$typeof===wv||e.getModuleId!==void 0)};fe.typeOf=Rt;function MS(){const e=ES();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const qp={notify(){},get:()=>[]};function DS(e,t){let n,r=qp,o=0,i=!1;function a(y){c();const E=r.subscribe(y);let v=!1;return()=>{v||(v=!0,E(),f())}}function s(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function u(){return i}function c(){o++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=MS())}function f(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=qp)}function m(){i||(i=!0,c())}function g(){i&&(i=!1,f())}const h={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:m,tryUnsubscribe:g,getListeners:()=>r};return h}const FS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",US=FS?T.useLayoutEffect:T.useEffect;function BS({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=T.useMemo(()=>{const u=DS(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=T.useMemo(()=>e.getState(),[e]);US(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||Qn;return T.createElement(l.Provider,{value:a},n)}function Sv(e=Qn){const t=e===Qn?hv:Qd(e);return function(){const{store:r}=t();return r}}const HS=Sv();function VS(e=Qn){const t=e===Qn?HS:Sv(e);return function(){return t().dispatch}}const vo=VS();CS(xS.useSyncExternalStoreWithSelector);SS(T0.unstable_batchedUpdates);function Mt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function qn(e){return!!e&&!!e[Ee]}function hn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===ZS}(e)||Array.isArray(e)||!!e[eh]||!!(!((t=e.constructor)===null||t===void 0)&&t[eh])||Jd(e)||Zd(e))}function gr(e,t,n){n===void 0&&(n=!1),yo(e)===0?(n?Object.keys:Yr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function yo(e){var t=e[Ee];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Jd(e)?2:Zd(e)?3:0}function qr(e,t){return yo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function WS(e,t){return yo(e)===2?e.get(t):e[t]}function Ev(e,t,n){var r=yo(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function bv(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Jd(e){return XS&&e instanceof Map}function Zd(e){return JS&&e instanceof Set}function er(e){return e.o||e.t}function ef(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Cv(e);delete t[Ee];for(var n=Yr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function tf(e,t){return t===void 0&&(t=!1),nf(e)||qn(e)||!hn(e)||(yo(e)>1&&(e.set=e.add=e.clear=e.delete=QS),Object.freeze(e),t&&gr(e,function(n,r){return tf(r,!0)},!0)),e}function QS(){Mt(2)}function nf(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Jt(e){var t=$c[e];return t||Mt(18,e),t}function qS(e,t){$c[e]||($c[e]=t)}function Cc(){return wi}function eu(e,t){t&&(Jt("Patches"),e.u=[],e.s=[],e.v=t)}function ps(e){Tc(e),e.p.forEach(YS),e.p=null}function Tc(e){e===wi&&(wi=e.l)}function Yp(e){return wi={p:[],l:wi,h:e,m:!0,_:0}}function YS(e){var t=e[Ee];t.i===0||t.i===1?t.j():t.g=!0}function tu(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Jt("ES5").S(t,e,r),r?(n[Ee].P&&(ps(t),Mt(4)),hn(e)&&(e=hs(t,e),t.l||ms(t,e)),t.u&&Jt("Patches").M(n[Ee].t,e,t.u,t.s)):e=hs(t,n,[]),ps(t),t.u&&t.v(t.u,t.s),e!==jv?e:void 0}function hs(e,t,n){if(nf(t))return t;var r=t[Ee];if(!r)return gr(t,function(s,l){return Kp(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ms(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=ef(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),gr(i,function(s,l){return Kp(e,r,o,s,l,n,a)}),ms(e,o,!1),n&&e.u&&Jt("Patches").N(r,n,e.u,e.s)}return r.o}function Kp(e,t,n,r,o,i,a){if(qn(o)){var s=hs(e,o,i&&t&&t.i!==3&&!qr(t.R,r)?i.concat(r):void 0);if(Ev(n,r,s),!qn(s))return;e.m=!1}else a&&n.add(o);if(hn(o)&&!nf(o)){if(!e.h.D&&e._<1)return;hs(e,o),t&&t.A.l||ms(e,o)}}function ms(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&tf(t,n)}function nu(e,t){var n=e[Ee];return(n?er(n):e)[t]}function Gp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Tn(e){e.P||(e.P=!0,e.l&&Tn(e.l))}function ru(e){e.o||(e.o=ef(e.t))}function kc(e,t,n){var r=Jd(t)?Jt("MapSet").F(t,n):Zd(t)?Jt("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Cc(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},l=s,u=Si;a&&(l=[s],u=Mo);var c=Proxy.revocable(l,u),f=c.revoke,m=c.proxy;return s.k=m,s.j=f,m}(t,n):Jt("ES5").J(t,n);return(n?n.A:Cc()).p.push(r),r}function KS(e){return qn(e)||Mt(22,e),function t(n){if(!hn(n))return n;var r,o=n[Ee],i=yo(n);if(o){if(!o.P&&(o.i<4||!Jt("ES5").K(o)))return o.t;o.I=!0,r=Xp(n,i),o.I=!1}else r=Xp(n,i);return gr(r,function(a,s){o&&WS(o.t,a)===s||Ev(r,a,t(s))}),i===3?new Set(r):r}(e)}function Xp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ef(e)}function GS(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var l=this[Ee];return Si.get(l,i)},set:function(l){var u=this[Ee];Si.set(u,i,l)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][Ee];if(!s.P)switch(s.i){case 5:r(s)&&Tn(s);break;case 4:n(s)&&Tn(s)}}}function n(i){for(var a=i.t,s=i.k,l=Yr(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ee){var f=a[c];if(f===void 0&&!qr(a,c))return!0;var m=s[c],g=m&&m[Ee];if(g?g.t!==f:!bv(m,f))return!0}}var h=!!a[Ee];return l.length!==Yr(a).length+(h?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var o={};qS("ES5",{J:function(i,a){var s=Array.isArray(i),l=function(c,f){if(c){for(var m=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(m,""+g,e(g,!0));return m}var h=Cv(f);delete h[Ee];for(var y=Yr(h),E=0;E<y.length;E++){var v=y[E];h[v]=e(v,c||!!h[v].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),u={i:s?5:4,A:a?a.A:Cc(),P:!1,I:!1,R:{},l:a,t:i,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ee,{value:u,writable:!0}),l},S:function(i,a,s){s?qn(a)&&a[Ee].A===i&&t(i.p):(i.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ee];if(c){var f=c.t,m=c.k,g=c.R,h=c.i;if(h===4)gr(m,function(w){w!==Ee&&(f[w]!==void 0||qr(f,w)?g[w]||l(m[w]):(g[w]=!0,Tn(c)))}),gr(f,function(w){m[w]!==void 0||qr(m,w)||(g[w]=!1,Tn(c))});else if(h===5){if(r(c)&&(Tn(c),g.length=!0),m.length<f.length)for(var y=m.length;y<f.length;y++)g[y]=!1;else for(var E=f.length;E<m.length;E++)g[E]=!0;for(var v=Math.min(m.length,f.length),p=0;p<v;p++)m.hasOwnProperty(p)||(g[p]=!0),g[p]===void 0&&l(m[p])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Jp,wi,rf=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",XS=typeof Map<"u",JS=typeof Set<"u",Zp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",jv=rf?Symbol.for("immer-nothing"):((Jp={})["immer-nothing"]=!0,Jp),eh=rf?Symbol.for("immer-draftable"):"__$immer_draftable",Ee=rf?Symbol.for("immer-state"):"__$immer_state",ZS=""+Object.prototype.constructor,Yr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Cv=Object.getOwnPropertyDescriptors||function(e){var t={};return Yr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},$c={},Si={get:function(e,t){if(t===Ee)return e;var n=er(e);if(!qr(n,t))return function(o,i,a){var s,l=Gp(i,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!hn(r)?r:r===nu(e.t,t)?(ru(e),e.o[t]=kc(e.A.h,r,e)):r},has:function(e,t){return t in er(e)},ownKeys:function(e){return Reflect.ownKeys(er(e))},set:function(e,t,n){var r=Gp(er(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=nu(er(e),t),i=o==null?void 0:o[Ee];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(bv(n,o)&&(n!==void 0||qr(e.t,t)))return!0;ru(e),Tn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return nu(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ru(e),Tn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=er(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Mt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Mt(12)}},Mo={};gr(Si,function(e,t){Mo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Mo.deleteProperty=function(e,t){return Mo.set.call(this,e,t,void 0)},Mo.set=function(e,t,n){return Si.set.call(this,e[0],t,n,e[0])};var eE=function(){function e(n){var r=this;this.O=Zp,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var l=r;return function(y){var E=this;y===void 0&&(y=s);for(var v=arguments.length,p=Array(v>1?v-1:0),w=1;w<v;w++)p[w-1]=arguments[w];return l.produce(y,function(S){var j;return(j=i).call.apply(j,[E,S].concat(p))})}}var u;if(typeof i!="function"&&Mt(6),a!==void 0&&typeof a!="function"&&Mt(7),hn(o)){var c=Yp(r),f=kc(r,o,void 0),m=!0;try{u=i(f),m=!1}finally{m?ps(c):Tc(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return eu(c,a),tu(y,c)},function(y){throw ps(c),y}):(eu(c,a),tu(u,c))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===jv&&(u=void 0),r.D&&tf(u,!0),a){var g=[],h=[];Jt("Patches").M(o,u,g,h),a(g,h)}return u}Mt(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),m=1;m<c;m++)f[m-1]=arguments[m];return r.produceWithPatches(u,function(g){return o.apply(void 0,[g].concat(f))})};var a,s,l=r.produce(o,i,function(u,c){a=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){hn(n)||Mt(8),qn(n)&&(n=KS(n));var r=Yp(this),o=kc(this,n,void 0);return o[Ee].C=!0,Tc(r),o},t.finishDraft=function(n,r){var o=n&&n[Ee],i=o.A;return eu(i,r),tu(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Zp&&Mt(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Jt("Patches").$;return qn(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),pt=new eE,Tv=pt.produce;pt.produceWithPatches.bind(pt);pt.setAutoFreeze.bind(pt);pt.setUseProxies.bind(pt);pt.applyPatches.bind(pt);pt.createDraft.bind(pt);pt.finishDraft.bind(pt);function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function tE(e,t){if(Ei(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ei(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nE(e){var t=tE(e,"string");return Ei(t)==="symbol"?t:String(t)}function rE(e,t,n){return t=nE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function th(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function nh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?th(Object(n),!0).forEach(function(r){rE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):th(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var rh=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ou=function(){return Math.random().toString(36).substring(7).split("").join(".")},gs={INIT:"@@redux/INIT"+ou(),REPLACE:"@@redux/REPLACE"+ou(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ou()}};function oE(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function kv(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(kv)(e,t)}if(typeof e!="function")throw new Error(qe(2));var o=e,i=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(qe(3));return i}function f(y){if(typeof y!="function")throw new Error(qe(4));if(l)throw new Error(qe(5));var E=!0;return u(),s.push(y),function(){if(E){if(l)throw new Error(qe(6));E=!1,u();var p=s.indexOf(y);s.splice(p,1),a=null}}}function m(y){if(!oE(y))throw new Error(qe(7));if(typeof y.type>"u")throw new Error(qe(8));if(l)throw new Error(qe(9));try{l=!0,i=o(i,y)}finally{l=!1}for(var E=a=s,v=0;v<E.length;v++){var p=E[v];p()}return y}function g(y){if(typeof y!="function")throw new Error(qe(10));o=y,m({type:gs.REPLACE})}function h(){var y,E=f;return y={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(qe(11));function w(){p.next&&p.next(c())}w();var S=E(w);return{unsubscribe:S}}},y[rh]=function(){return this},y}return m({type:gs.INIT}),r={dispatch:m,subscribe:f,getState:c,replaceReducer:g},r[rh]=h,r}function iE(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:gs.INIT});if(typeof r>"u")throw new Error(qe(12));if(typeof n(void 0,{type:gs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function aE(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{iE(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var c=!1,f={},m=0;m<i.length;m++){var g=i[m],h=n[g],y=l[g],E=h(y,u);if(typeof E>"u")throw u&&u.type,new Error(qe(14));f[g]=E,c=c||E!==y}return c=c||i.length!==Object.keys(l).length,c?f:l}}function vs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function sE(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(qe(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return i=vs.apply(void 0,s)(o.dispatch),nh(nh({},o),{},{dispatch:i})}}}function $v(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var Pv=$v();Pv.withExtraArgument=$v;const oh=Pv;var Ov=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),lE=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},uo=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},uE=Object.defineProperty,cE=Object.defineProperties,dE=Object.getOwnPropertyDescriptors,ih=Object.getOwnPropertySymbols,fE=Object.prototype.hasOwnProperty,pE=Object.prototype.propertyIsEnumerable,ah=function(e,t,n){return t in e?uE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Un=function(e,t){for(var n in t||(t={}))fE.call(t,n)&&ah(e,n,t[n]);if(ih)for(var r=0,o=ih(t);r<o.length;r++){var n=o[r];pE.call(t,n)&&ah(e,n,t[n])}return e},iu=function(e,t){return cE(e,dE(t))},hE=function(e,t,n){return new Promise(function(r,o){var i=function(l){try{s(n.next(l))}catch(u){o(u)}},a=function(l){try{s(n.throw(l))}catch(u){o(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(i,a)};s((n=n.apply(e,t)).next())})},mE=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?vs:vs.apply(null,arguments)};function gE(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Bn(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return Un(Un({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var vE=function(e){Ov(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,uo([void 0],n[0].concat(this)))):new(t.bind.apply(t,uo([void 0],n.concat(this))))},t}(Array),yE=function(e){Ov(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,uo([void 0],n[0].concat(this)))):new(t.bind.apply(t,uo([void 0],n.concat(this))))},t}(Array);function Pc(e){return hn(e)?Tv(e,function(){}):e}function xE(e){return typeof e=="boolean"}function wE(){return function(t){return SE(t)}}function SE(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new vE;return n&&(xE(n)?r.push(oh):r.push(oh.withExtraArgument(n.extraArgument))),r}var EE=!0;function bE(e){var t=wE(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,m=f===void 0?void 0:f,g;if(typeof o=="function")g=o;else if(gE(o))g=aE(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var y=sE.apply(void 0,h),E=vs;l&&(E=mE(Un({trace:!EE},typeof l=="object"&&l)));var v=new yE(y),p=v;Array.isArray(m)?p=uo([y],m):typeof m=="function"&&(p=m(v));var w=E.apply(void 0,p);return kv(g,c,w)}function _v(e){var t={},n=[],r,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function jE(e){return typeof e=="function"}function CE(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?_v(t):[t,n,r],i=o[0],a=o[1],s=o[2],l;if(jE(e))l=function(){return Pc(e())};else{var u=Pc(e);l=function(){return u}}function c(f,m){f===void 0&&(f=l());var g=uo([i[m.type]],a.filter(function(h){var y=h.matcher;return y(m)}).map(function(h){var y=h.reducer;return y}));return g.filter(function(h){return!!h}).length===0&&(g=[s]),g.reduce(function(h,y){if(y)if(qn(h)){var E=h,v=y(E,m);return v===void 0?h:v}else{if(hn(h))return Tv(h,function(p){return y(p,m)});var v=y(h,m);if(v===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}return h},f)}return c.getInitialState=l,c}function TE(e,t){return e+"/"+t}function Rv(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Pc(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},s={};o.forEach(function(c){var f=r[c],m=TE(t,c),g,h;"reducer"in f?(g=f.reducer,h=f.prepare):g=f,i[c]=g,a[m]=g,s[c]=h?Bn(m,h):Bn(m)});function l(){var c=typeof e.extraReducers=="function"?_v(e.extraReducers):[e.extraReducers],f=c[0],m=f===void 0?{}:f,g=c[1],h=g===void 0?[]:g,y=c[2],E=y===void 0?void 0:y,v=Un(Un({},m),a);return CE(n,function(p){for(var w in v)p.addCase(w,v[w]);for(var S=0,j=h;S<j.length;S++){var k=j[S];p.addMatcher(k.matcher,k.reducer)}E&&p.addDefaultCase(E)})}var u;return{name:t,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var kE="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",$E=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=kE[Math.random()*64|0];return t},PE=["name","message","stack","code"],au=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),sh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),OE=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=PE;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Bn(t+"/fulfilled",function(u,c,f,m){return{payload:u,meta:iu(Un({},m||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),i=Bn(t+"/pending",function(u,c,f){return{payload:void 0,meta:iu(Un({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),a=Bn(t+"/rejected",function(u,c,f,m,g){return{payload:m,error:(r&&r.serializeError||OE)(u||"Rejected"),meta:iu(Un({},g||{}),{arg:f,requestId:c,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,f,m){var g=r!=null&&r.idGenerator?r.idGenerator(u):$E(),h=new s,y;function E(p){y=p,h.abort()}var v=function(){return hE(this,null,function(){var p,w,S,j,k,C,P;return lE(this,function(O){switch(O.label){case 0:return O.trys.push([0,4,,5]),j=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:f,extra:m}),RE(j)?[4,j]:[3,2];case 1:j=O.sent(),O.label=2;case 2:if(j===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return k=new Promise(function(R,D){return h.signal.addEventListener("abort",function(){return D({name:"AbortError",message:y||"Aborted"})})}),c(i(g,u,(w=r==null?void 0:r.getPendingMeta)==null?void 0:w.call(r,{requestId:g,arg:u},{getState:f,extra:m}))),[4,Promise.race([k,Promise.resolve(n(u,{dispatch:c,getState:f,extra:m,requestId:g,signal:h.signal,abort:E,rejectWithValue:function(R,D){return new au(R,D)},fulfillWithValue:function(R,D){return new sh(R,D)}})).then(function(R){if(R instanceof au)throw R;return R instanceof sh?o(R.payload,g,u,R.meta):o(R,g,u)})])];case 3:return S=O.sent(),[3,5];case 4:return C=O.sent(),S=C instanceof au?a(null,g,u,C.payload,C.meta):a(C,g,u),[3,5];case 5:return P=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,P||c(S),[2,S]}})})}();return Object.assign(v,{abort:E,requestId:g,arg:u,unwrap:function(){return v.then(_E)}})}}return Object.assign(l,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function _E(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function RE(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var of="listenerMiddleware";Bn(of+"/add");Bn(of+"/removeAll");Bn(of+"/remove");var lh;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);GS();const Av=Rv({name:"modal",initialState:{modalType:"closed"},reducers:{contactModal:e=>{e.modalType="contact"},loginModal:e=>{e.modalType="login"},signupModal:e=>{e.modalType="signup"},closeModal:e=>{e.modalType="closed"}}}),{contactModal:Nv,loginModal:Iv,signupModal:AE,closeModal:Oc}=Av.actions,NE=Av.reducer,IE=b.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100vw;
  padding: 1rem 0;
  margin: 0;
  z-index: 100;

  background-color: ${x.colors.seasalt};

  @media (max-width: ${x.bp["x-small"]}) {
    height: 20px;
  }
`,LE=b(Er)`
  padding-left: 1rem;
  img {
    height: 40px;

    @media (max-width: ${x.bp["x-small"]}) {
      height: 30px;
    }
  }
`,zE=b.button`
  background: none;
  border: none;
  color: ${x.colors.raisinblack};
  font-size: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: ${x.bp.medium}) {
    display: block;
  }

  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 30px;
  }
`,uh=b.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${x.bp.medium}) {
    display: ${({showMenu:e})=>e?"none":"flex"};
    flex-direction: column;
    position: absolute;
    top: 370px;
    left: 0;
    background-color: ${x.colors.white};
    width: 100%;
    padding: 10px;
    transform: ${({showMenu:e})=>e?"translateY(0)":"translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    top: 360px;
  }
`,Wt=b(Er)`
  display: flex;
  align-items: center;
  color: ${x.colors.raisinblack};
  text-decoration: none;
  height: 30px;
  margin: 10px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    border-bottom: 2px solid ${x.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${x.bp.large}) {
    font-size: 12px;
  }
`,$o=b.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${x.bp.large}) {
    padding: 0px 0px;
  }
`,ch=b.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;function Lv(e,t){return function(){return e.apply(t,arguments)}}const{toString:ME}=Object.prototype,{getPrototypeOf:af}=Object,pl=(e=>t=>{const n=ME.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zt=e=>(e=e.toLowerCase(),t=>pl(t)===e),hl=e=>t=>typeof t===e,{isArray:xo}=Array,bi=hl("undefined");function DE(e){return e!==null&&!bi(e)&&e.constructor!==null&&!bi(e.constructor)&&$t(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const zv=Zt("ArrayBuffer");function FE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&zv(e.buffer),t}const UE=hl("string"),$t=hl("function"),Mv=hl("number"),ml=e=>e!==null&&typeof e=="object",BE=e=>e===!0||e===!1,Ra=e=>{if(pl(e)!=="object")return!1;const t=af(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},HE=Zt("Date"),VE=Zt("File"),WE=Zt("Blob"),QE=Zt("FileList"),qE=e=>ml(e)&&$t(e.pipe),YE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||$t(e.append)&&((t=pl(e))==="formdata"||t==="object"&&$t(e.toString)&&e.toString()==="[object FormData]"))},KE=Zt("URLSearchParams"),GE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ii(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),xo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function Dv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Fv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Uv=e=>!bi(e)&&e!==Fv;function _c(){const{caseless:e}=Uv(this)&&this||{},t={},n=(r,o)=>{const i=e&&Dv(t,o)||o;Ra(t[i])&&Ra(r)?t[i]=_c(t[i],r):Ra(r)?t[i]=_c({},r):xo(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Ii(arguments[r],n);return t}const XE=(e,t,n,{allOwnKeys:r}={})=>(Ii(t,(o,i)=>{n&&$t(o)?e[i]=Lv(o,n):e[i]=o},{allOwnKeys:r}),e),JE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ZE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},eb=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&af(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},tb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},nb=e=>{if(!e)return null;if(xo(e))return e;let t=e.length;if(!Mv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},rb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&af(Uint8Array)),ob=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},ib=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ab=Zt("HTMLFormElement"),sb=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),dh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),lb=Zt("RegExp"),Bv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ii(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},ub=e=>{Bv(e,(t,n)=>{if($t(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($t(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},cb=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return xo(e)?r(e):r(String(e).split(t)),n},db=()=>{},fb=(e,t)=>(e=+e,Number.isFinite(e)?e:t),su="abcdefghijklmnopqrstuvwxyz",fh="0123456789",Hv={DIGIT:fh,ALPHA:su,ALPHA_DIGIT:su+su.toUpperCase()+fh},pb=(e=16,t=Hv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function hb(e){return!!(e&&$t(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const mb=e=>{const t=new Array(10),n=(r,o)=>{if(ml(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=xo(r)?[]:{};return Ii(r,(a,s)=>{const l=n(a,o+1);!bi(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},gb=Zt("AsyncFunction"),vb=e=>e&&(ml(e)||$t(e))&&$t(e.then)&&$t(e.catch),$={isArray:xo,isArrayBuffer:zv,isBuffer:DE,isFormData:YE,isArrayBufferView:FE,isString:UE,isNumber:Mv,isBoolean:BE,isObject:ml,isPlainObject:Ra,isUndefined:bi,isDate:HE,isFile:VE,isBlob:WE,isRegExp:lb,isFunction:$t,isStream:qE,isURLSearchParams:KE,isTypedArray:rb,isFileList:QE,forEach:Ii,merge:_c,extend:XE,trim:GE,stripBOM:JE,inherits:ZE,toFlatObject:eb,kindOf:pl,kindOfTest:Zt,endsWith:tb,toArray:nb,forEachEntry:ob,matchAll:ib,isHTMLForm:ab,hasOwnProperty:dh,hasOwnProp:dh,reduceDescriptors:Bv,freezeMethods:ub,toObjectSet:cb,toCamelCase:sb,noop:db,toFiniteNumber:fb,findKey:Dv,global:Fv,isContextDefined:Uv,ALPHABET:Hv,generateString:pb,isSpecCompliantForm:hb,toJSONObject:mb,isAsyncFn:gb,isThenable:vb};function te(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}$.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Vv=te.prototype,Wv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Wv[e]={value:e}});Object.defineProperties(te,Wv);Object.defineProperty(Vv,"isAxiosError",{value:!0});te.from=(e,t,n,r,o,i)=>{const a=Object.create(Vv);return $.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),te.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const yb=null;function Rc(e){return $.isPlainObject(e)||$.isArray(e)}function Qv(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function ph(e,t,n){return e?e.concat(t).map(function(o,i){return o=Qv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function xb(e){return $.isArray(e)&&!e.some(Rc)}const wb=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function gl(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!$.isUndefined(E[y])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if($.isDate(h))return h.toISOString();if(!l&&$.isBlob(h))throw new te("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(h)||$.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,y,E){let v=h;if(h&&!E&&typeof h=="object"){if($.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if($.isArray(h)&&xb(h)||($.isFileList(h)||$.endsWith(y,"[]"))&&(v=$.toArray(h)))return y=Qv(y),v.forEach(function(w,S){!($.isUndefined(w)||w===null)&&t.append(a===!0?ph([y],S,i):a===null?y:y+"[]",u(w))}),!1}return Rc(h)?!0:(t.append(ph(E,y,i),u(h)),!1)}const f=[],m=Object.assign(wb,{defaultVisitor:c,convertValue:u,isVisitable:Rc});function g(h,y){if(!$.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(h),$.forEach(h,function(v,p){(!($.isUndefined(v)||v===null)&&o.call(t,v,$.isString(p)?p.trim():p,y,m))===!0&&g(v,y?y.concat(p):[p])}),f.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return g(e),t}function hh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function sf(e,t){this._pairs=[],e&&gl(e,this,t)}const qv=sf.prototype;qv.append=function(t,n){this._pairs.push([t,n])};qv.toString=function(t){const n=t?function(r){return t.call(this,r,hh)}:hh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Sb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yv(e,t,n){if(!t)return e;const r=n&&n.encode||Sb,o=n&&n.serialize;let i;if(o?i=o(t,n):i=$.isURLSearchParams(t)?t.toString():new sf(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Eb{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const mh=Eb,Kv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bb=typeof URLSearchParams<"u"?URLSearchParams:sf,jb=typeof FormData<"u"?FormData:null,Cb=typeof Blob<"u"?Blob:null,Tb={isBrowser:!0,classes:{URLSearchParams:bb,FormData:jb,Blob:Cb},protocols:["http","https","file","blob","url","data"]},Gv=typeof window<"u"&&typeof document<"u",kb=(e=>Gv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),$b=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Pb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gv,hasStandardBrowserEnv:kb,hasStandardBrowserWebWorkerEnv:$b},Symbol.toStringTag,{value:"Module"})),Kt={...Pb,...Tb};function Ob(e,t){return gl(e,new Kt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Kt.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function _b(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rb(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Xv(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&$.isArray(o)?o.length:a,l?($.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!$.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&$.isArray(o[a])&&(o[a]=Rb(o[a])),!s)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,o)=>{t(_b(r),o,n,0)}),n}return null}function Ab(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const lf={transitional:Kv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=$.isObject(t);if(i&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o&&o?JSON.stringify(Xv(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ob(t,this.formSerializer).toString();if((s=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return gl(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Ab(t)):t}],transformResponse:[function(t){const n=this.transitional||lf.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&$.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?te.from(s,te.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{lf.headers[e]={}});const uf=lf,Nb=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ib=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&Nb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},gh=Symbol("internals");function Po(e){return e&&String(e).trim().toLowerCase()}function Aa(e){return e===!1||e==null?e:$.isArray(e)?e.map(Aa):String(e)}function Lb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const zb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function lu(e,t,n,r,o){if($.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function Mb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Db(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class vl{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const c=Po(l);if(!c)throw new Error("header name must be a non-empty string");const f=$.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||l]=Aa(s))}const a=(s,l)=>$.forEach(s,(u,c)=>i(u,c,l));return $.isPlainObject(t)||t instanceof this.constructor?a(t,n):$.isString(t)&&(t=t.trim())&&!zb(t)?a(Ib(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Po(t),t){const r=$.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Lb(o);if($.isFunction(n))return n.call(this,o,r);if($.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Po(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||lu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Po(a),a){const s=$.findKey(r,a);s&&(!n||lu(r,r[s],s,n))&&(delete r[s],o=!0)}}return $.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||lu(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return $.forEach(this,(o,i)=>{const a=$.findKey(r,i);if(a){n[a]=Aa(o),delete n[i];return}const s=t?Mb(i):String(i).trim();s!==i&&delete n[i],n[s]=Aa(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[gh]=this[gh]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Po(a);r[s]||(Db(o,a),r[s]=!0)}return $.isArray(t)?t.forEach(i):i(t),this}}vl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(vl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(vl);const un=vl;function uu(e,t){const n=this||uf,r=t||n,o=un.from(r.headers);let i=r.data;return $.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Jv(e){return!!(e&&e.__CANCEL__)}function Li(e,t,n){te.call(this,e??"canceled",te.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Li,te,{__CANCEL__:!0});function Fb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ub=Kt.hasStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),$.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),$.isString(i)&&l.push("path="+i),$.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Bb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Hb(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Zv(e,t){return e&&!Bb(t)?Hb(e,t):t}const Vb=Kt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=$.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Wb(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let f=i,m=0;for(;f!==o;)m+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const g=c&&u-c;return g?Math.round(m*1e3/g):void 0}}function vh(e,t){let n=0;const r=Qb(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const qb=typeof XMLHttpRequest<"u",Yb=qb&&function(e){return new Promise(function(n,r){let o=e.data;const i=un.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let u;if($.isFormData(o)){if(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[h,...y]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];i.setContentType([h||"multipart/form-data",...y].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+y))}const f=Zv(e.baseURL,e.url);c.open(e.method.toUpperCase(),Yv(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function m(){if(!c)return;const h=un.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};Fb(function(p){n(p),l()},function(p){r(p),l()},E),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){c&&(r(new te("Request aborted",te.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Kv;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new te(y,E.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,e,c)),c=null},Kt.hasStandardBrowserEnv){const h=Vb(f)&&e.xsrfCookieName&&Ub.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&$.forEach(i.toJSON(),function(y,E){c.setRequestHeader(E,y)}),$.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",vh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",vh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{c&&(r(!h||h.type?new Li(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=Wb(f);if(g&&Kt.protocols.indexOf(g)===-1){r(new te("Unsupported protocol "+g+":",te.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Ac={http:yb,xhr:Yb};$.forEach(Ac,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const yh=e=>`- ${e}`,Kb=e=>$.isFunction(e)||e===null||e===!1,ey={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!Kb(n)&&(r=Ac[(a=String(n)).toLowerCase()],r===void 0))throw new te(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(yh).join(`
`):" "+yh(i[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Ac};function cu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Li(null,e)}function xh(e){return cu(e),e.headers=un.from(e.headers),e.data=uu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ey.getAdapter(e.adapter||uf.adapter)(e).then(function(r){return cu(e),r.data=uu.call(e,e.transformResponse,r),r.headers=un.from(r.headers),r},function(r){return Jv(r)||(cu(e),r&&r.response&&(r.response.data=uu.call(e,e.transformResponse,r.response),r.response.headers=un.from(r.response.headers))),Promise.reject(r)})}const wh=e=>e instanceof un?e.toJSON():e;function co(e,t){t=t||{};const n={};function r(u,c,f){return $.isPlainObject(u)&&$.isPlainObject(c)?$.merge.call({caseless:f},u,c):$.isPlainObject(c)?$.merge({},c):$.isArray(c)?c.slice():c}function o(u,c,f){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function i(u,c){if(!$.isUndefined(c))return r(void 0,c)}function a(u,c){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>o(wh(u),wh(c),!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||o,m=f(e[c],t[c],c);$.isUndefined(m)&&f!==s||(n[c]=m)}),n}const ty="1.6.1",cf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{cf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Sh={};cf.transitional=function(t,n,r){function o(i,a){return"[Axios v"+ty+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new te(o(a," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!Sh[a]&&(Sh[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function Gb(e,t,n){if(typeof e!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new te("option "+i+" must be "+l,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+i,te.ERR_BAD_OPTION)}}const Nc={assertOptions:Gb,validators:cf},vn=Nc.validators;class ys{constructor(t){this.defaults=t,this.interceptors={request:new mh,response:new mh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=co(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Nc.assertOptions(r,{silentJSONParsing:vn.transitional(vn.boolean),forcedJSONParsing:vn.transitional(vn.boolean),clarifyTimeoutError:vn.transitional(vn.boolean)},!1),o!=null&&($.isFunction(o)?n.paramsSerializer={serialize:o}:Nc.assertOptions(o,{encode:vn.function,serialize:vn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=un.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,m;if(!l){const h=[xh.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,u),m=h.length,c=Promise.resolve(n);f<m;)c=c.then(h[f++],h[f++]);return c}m=s.length;let g=n;for(f=0;f<m;){const h=s[f++],y=s[f++];try{g=h(g)}catch(E){y.call(this,E);break}}try{c=xh.call(this,g)}catch(h){return Promise.reject(h)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=co(this.defaults,t);const n=Zv(t.baseURL,t.url);return Yv(n,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){ys.prototype[t]=function(n,r){return this.request(co(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(co(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}ys.prototype[t]=n(),ys.prototype[t+"Form"]=n(!0)});const Na=ys;class df{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Li(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new df(function(o){t=o}),cancel:t}}}const Xb=df;function Jb(e){return function(n){return e.apply(null,n)}}function Zb(e){return $.isObject(e)&&e.isAxiosError===!0}const Ic={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ic).forEach(([e,t])=>{Ic[t]=e});const ej=Ic;function ny(e){const t=new Na(e),n=Lv(Na.prototype.request,t);return $.extend(n,Na.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ny(co(e,o))},n}const Ne=ny(uf);Ne.Axios=Na;Ne.CanceledError=Li;Ne.CancelToken=Xb;Ne.isCancel=Jv;Ne.VERSION=ty;Ne.toFormData=gl;Ne.AxiosError=te;Ne.Cancel=Ne.CanceledError;Ne.all=function(t){return Promise.all(t)};Ne.spread=Jb;Ne.isAxiosError=Zb;Ne.mergeConfig=co;Ne.AxiosHeaders=un;Ne.formToJSON=e=>Xv($.isHTMLForm(e)?new FormData(e):e);Ne.getAdapter=ey.getAdapter;Ne.HttpStatusCode=ej;Ne.default=Ne;const tj=Ne,ff=tj.create({baseURL:"https://sintetica-userapi.onrender.com",withCredentials:!0});ff.interceptors.response.use(e=>e,e=>{const{response:t}=e;return t?(console.error("Server error:",t.data),Promise.reject(t.data)):e.request?(console.error("No response was received from the server"),Promise.reject("No response was received from the server")):(console.error("Failed request:",e.message),Promise.reject("Failed request"))});const ry=Rv({name:"user",initialState:{token:"",userName:"",name:"",surname:"",email:"",phone:"",freeCredits:0,premiumCredits:0,service:""},reducers:{setUser:(e,t)=>{Object.assign(e,t.payload)},removeUser:e=>{e.token="",e.userName="",e.name="",e.surname="",e.email="",e.phone="",e.freeCredits=0,e.premiumCredits=0,e.service=""}}}),{setUser:Eh,removeUser:nj}=ry.actions,rj=async e=>{try{const{data:t}=await ff.post("/auth/login",e);return t.data}catch(t){return{error:t}}},oj=async e=>{try{const{data:t}=await ff.post("/auth/register",e);return t.data}catch(t){return{error:t}}},ij=ry.reducer,zi=()=>{const e=Qs(u=>u.user.token),[t,n]=T.useState(!1),r=vo(),o=q2.useMediaQuery({maxWidth:x.bp.medium}),i=()=>{n(!t)},a=()=>{r(Iv())},s=()=>{r(AE())},l=()=>{r(nj())};return T.useEffect(()=>{},[e]),d.jsxs(IE,{children:[d.jsx(LE,{to:"/",children:d.jsx("img",{src:"assets/logotipo.svg",alt:"Logo Sintética"})}),o?d.jsxs(d.Fragment,{children:[d.jsx(zE,{onClick:i,children:t?"✕":"☰"}),t&&d.jsxs(uh,{children:[d.jsx(Wt,{to:"/VoiceCloning",children:"Voice Cloning"}),d.jsx(Wt,{to:"/TTS",children:"Experiencia TTS"}),d.jsx(Wt,{to:"/Maintenance",children:"AI & Salud"}),d.jsx(Wt,{to:"/Maintenance",children:"Investigación"}),d.jsx(Wt,{to:"/Maintenance",children:"Nosotros"}),d.jsx(ch,{children:e?d.jsx(ar,{buttonText:"Logout",handleClick:l}):d.jsxs(d.Fragment,{children:[d.jsx(ar,{buttonText:"Login",handleClick:a}),d.jsx(xi,{buttonText:"Signup",handleClick:s})]})})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(uh,{children:[d.jsx(Wt,{to:"/VoiceCloning",children:"Voice Cloning"}),d.jsx($o,{children:" "}),d.jsx(Wt,{to:"/TTS",children:"Experiencia TTS"}),d.jsx($o,{children:" "}),d.jsx(Wt,{to:"/Maintenance",children:"AI & Salud"}),d.jsx($o,{children:" "}),d.jsx(Wt,{to:"/Maintenance",children:"Investigación"}),d.jsx($o,{children:" "}),d.jsx(Wt,{to:"/Maintenance",children:"Nosotros"}),d.jsx($o,{children:" "})]}),d.jsx(ch,{children:e?d.jsx(ar,{buttonText:"Logout",handleClick:l}):d.jsxs(d.Fragment,{children:[d.jsx(ar,{buttonText:"Login",handleClick:a}),d.jsx(xi,{buttonText:"Signup",handleClick:s})]})})]})]})},aj=b.section`
  background-color: ${x.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  width: 100vw;

  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,sj=b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;

  @media (max-width: ${x.bp.medium}) {
    width: 100vw;
  }
`,lj=b.img`
  width: 300px;
  @media (max-width: ${x.bp.small}) {
    width: 240px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 200px;
  }
`,uj=b.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 95px;
    color: ${x.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: ${x.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${x.bp.small}) {
    h1 {
      font-size: 80px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: ${x.bp["x-small"]}) {
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 18px;
    }
  }
`,cj=b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 30px 30px 30px;
  width: 50vw;
  height: 60vh;

  background-image: url("assets/backgrounds/Background1.svg");
  background-size: 103%;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${x.bp.medium}) {
    width: 100vw;
    background-size: 98%;
    height: 40vh;
  }

  @media (max-width: ${x.bp["x-small"]}) {
    background-size: 130%;
  }
`,dj=b.h4`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: ${x.colors.raisinblack};

  @media (max-width: ${x.bp.large}) {
    font-size: 28px;
  }
  @media (max-width: ${x.bp.medium}) {
    font-size: 32px;
  }
  @media (max-width: ${x.bp.small}) {
    font-size: 28px;
  }

  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 20px;
  }
`,fj=b.p`
  text-align: left;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${x.colors.platinum};
  padding: 30px 0px 30px 130px;
  justify-content: flex-end;

  @media (max-width: ${x.bp.large}) {
    padding: 10px 20px 10px 130px;
    font-size: 20px;
  }

  @media (max-width: ${x.bp.medium}) {
    font-size: 22px;
    padding: 30px 20px 30px 190px;
  }
  @media (max-width: ${x.bp.small}) {
    font-size: 22px;
  }

  @media (max-width: ${x.bp["x-small"]}) {
    padding: 20px 20px 20px 20px;
    font-size: 20px;
  }
`,pj=b.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${x.bp.medium}) {
    margin-right: 50px;
  }
`;function hj(){const e=vo(),t=()=>{e(Nv())};return d.jsxs(aj,{children:[d.jsxs(sj,{children:[d.jsx(lj,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),d.jsxs(uj,{children:[d.jsx("h1",{children:"Sintética"}),d.jsx("p",{children:"Laboratorio de voces"})]})]}),d.jsxs(cj,{children:[d.jsx(dj,{children:"Síntesis de voces potenciadas por AI"}),d.jsx(fj,{children:"Desde Argentina al mundo: líderes en el desarrollo de voces artificiales en nuestro idioma."}),d.jsx(pj,{children:d.jsx(ar,{buttonText:"Contactanos",handleClick:t})})]})]})}const mj=b.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${x.bp.small}) {
    margin-top: 80px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    margin-top: 100px;
  }
`,gj=b.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${x.colors.lavenderfloral};
  background-color: ${x.colors.lavender};
`,vj=b.h4`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: ${x.colors.raisinblack};
  margin: 0;
  max-width: 90vw;
  padding: 15px 0px 70px 0px;
  @media (max-width: ${x.bp.small}) {
    font-size: 28px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 24px;
  }
`,yj=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,du=b(Er)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 450px;
  width: 300px;
  background-color: ${x.colors.white};
  border-radius: 10px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);

  &.selected {
    background-color: ${x.colors.white};
  }

  img {
    width: 250px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${x.colors.gray};
    margin: 0;
    text-transform: uppercase;
  }
  &:hover {
    img {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @media (max-width: ${x.bp.medium}) {
    margin: 30px 0px;
    width: 400px;
  }

  @media (max-width: ${x.bp["x-small"]}) {
    margin: 30px 0px;
    width: 300px;
    height: 400px;
    h3 {
      font-size: 16px;
    }
  }
`;function xj(){return d.jsxs(mj,{children:[d.jsx(gj,{children:"Nuestros objetivos"}),d.jsx(vj,{children:"Queremos reducir la brecha tecnológica de las voces sintéticas en nuestro idioma"}),d.jsxs(yj,{children:[d.jsxs(du,{to:"/VoiceCloning",children:[d.jsx("img",{src:"assets/home/card1.svg",alt:"icon"}),d.jsx("h3",{children:"Sistemas entrenados en"}),d.jsx("h3",{children:"Español Latinoamericano"})]}),d.jsxs(du,{to:"/Maintenance",className:"selected",children:[d.jsx("img",{src:"assets/home/card2.svg",alt:"icon"}),d.jsx("h3",{children:"Inteligencia Artificial"}),d.jsx("h3",{children:"desarrollada desde la ética"})]}),d.jsxs(du,{to:"/Maintenance",children:[d.jsx("img",{src:"assets/home/card3.svg",alt:"icon"}),d.jsx("h3",{children:"Herramientas de impacto social"}),d.jsx("h3",{children:"Salud e Inclusión"})]})]})]})}var oy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bh=W.createContext&&W.createContext(oy),Hn=globalThis&&globalThis.__assign||function(){return Hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Hn.apply(this,arguments)},wj=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function iy(e){return e&&e.map(function(t,n){return W.createElement(t.tag,Hn({key:n},t.attr),iy(t.child))})}function vt(e){return function(t){return W.createElement(Sj,Hn({attr:Hn({},e.attr)},t),iy(e.child))}}function Sj(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=wj(e,["attr","size","title"]),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),W.createElement("svg",Hn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Hn(Hn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&W.createElement("title",null,i),e.children)};return bh!==void 0?W.createElement(bh.Consumer,null,function(n){return t(n)}):t(oy)}function Ej(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const bj=b(Er)`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${x.colors.electricindigo} 0%,
    ${x.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

&::before {
  border-radius: 20px;
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 100%;
background: rgba(255, 255, 255, 0.3);    transition: all 1s ease;
}
&:hover:before {
  width: 100%;
}
`,jj=b(Er)`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 20px;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${x.colors.electricindigo} 0%,
    ${x.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

&::before {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);    
  transition: all 1s ease;
}
border-radius: 20px; /* Agregamos el border radius aquí */
&:hover:before {
  width: 100%;
}
`;function Fr({to:e,buttonText:t,rightArrow:n}){return n?d.jsxs(jj,{to:e,children:[t,d.jsx(Ej,{size:20})]}):d.jsx(bj,{to:e,children:t})}Fr.propTypes={to:H.string.isRequired,buttonText:H.string,rightArrow:H.bool};const Cj=b.section`
  color: ${x.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${x.bp.large}) {
    padding-top: 100px;
  }
  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${x.bp.small}) {
    margin-top: 100px;
  }
`,Tj=b.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,kj=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 400px;
  @media (max-width: ${x.bp.medium}) {
    width: 90%;
    height: 400px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 90%;
    height: 250px;
  }
`,$j=b.img`
  position: relative;
  width: 400px;
  @media (max-width: ${x.bp.large}) {
    width: 350px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 90vw;
  }
`,Pj=b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  padding-left: 10%;

  @media (max-width: ${x.bp.large}) {
    width: 90%;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 90%;
    padding: 0;
  }
`,Oj=b.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${x.colors.lavenderfloral};
  background-color: ${x.colors.lavender};
`,_j=b.h3`
  font-size: 46px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${x.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: ${x.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`,Rj=b.div`
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 20px 0px;
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${x.colors.gray};
    margin: 0;
  }
`,Aj=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,ra=b.div`
  display: flex;
  flex-direction: row;
  width: 60vw;

  padding-bottom: 20px;
  margin: 20px 0px;
  border: 2px solid ${x.colors.platinum};
  background-color: ${x.colors.seasalt};
  border-radius: 20px;
  padding: 15px;
  padding-top: 40px;

  @media (max-width: ${x.bp.large}) {
    width: 80vw;
  }

  @media (max-width: ${x.bp.small}) {
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
`,oa=b.img`
  width: 150px;
  height: 150px;
  padding-right: 15px;
  @media (max-width: ${x.bp.small}) {
    padding: 0;
  }
`,ia=b.div`
  display: flex;
  flex-direction: column;
`,aa=b.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${x.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`,sa=b.p`
  font-size: 16px;
  line-height: 30px;
  color: ${x.colors.gray};
  padding-top: 3px;
  margin: 0;
`,la=b.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;function Nj(){return d.jsxs(Cj,{children:[d.jsx(Oj,{children:"¿Qué es Sintética?"}),d.jsxs(Tj,{children:[d.jsx(kj,{children:d.jsx($j,{src:"assets/home/card5.svg",alt:"globos"})}),d.jsxs(Pj,{children:[d.jsx(_j,{children:"Voces en Español Rioplatense"}),d.jsxs(Rj,{children:[d.jsx("p",{children:"Sintética es un laboratorio de síntesis de voces. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),d.jsx("p",{children:"Transformamos voces en posibilidades."})]})]})]}),d.jsxs(Aj,{children:[d.jsxs(ra,{children:[d.jsx(oa,{src:"assets/home/card4.svg",alt:"text-icon"}),d.jsxs(ia,{children:[d.jsx(aa,{children:"Text To Speech - Español Latinoamericano"}),d.jsx(sa,{children:"Nuestra tecnología te ofrece una experiencia de conversión de texto a discurso única. Con acentos auténticos y entonaciones naturales tus proyectos, presentaciones y aplicaciones serán sobresalientes. Sumérgete en la nueva era del habla sintética y dale voz a tus ideas en tu propio idioma."}),d.jsx(la,{children:d.jsx(Fr,{rightArrow:!0,to:"/Maintenance"})})]})]}),d.jsxs(ra,{children:[d.jsx(oa,{src:"assets/voiceCloning/bannerVoice.svg",alt:"text-icon"}),d.jsxs(ia,{children:[d.jsx(aa,{children:"Voice Cloning - Español Latinoamericano"}),d.jsx(sa,{children:"¿Te imaginas poder replicar cualquier voz? Con nuestro sistema podés hacerlo realidad. Experimenta la libertad de dar vida a tus proyectos con voces familiares o icónicas en español rioplatense."}),d.jsx(la,{children:d.jsx(Fr,{rightArrow:!0,to:"/VoiceCloning"})})]})]}),d.jsxs(ra,{children:[d.jsx(oa,{src:"assets/home/card6.svg",alt:"text-icon"}),d.jsxs(ia,{children:[d.jsx(aa,{children:"AI al servicio de la salud y la inclusión"}),d.jsx(sa,{children:"Nuestra clonación de voz es la herramienta que cambiará vidas, brindando independencia a través del habla sintética personalizada. Explora cómo estamos redefiniendo la comunicación inclusiva."}),d.jsx(la,{children:d.jsx(Fr,{rightArrow:!0,to:"/Maintenance"})})]})]}),d.jsxs(ra,{children:[d.jsx(oa,{src:"assets/home/card7.svg",alt:"text-icon"}),d.jsxs(ia,{children:[d.jsx(aa,{children:"Toolkit para voces"}),d.jsx(sa,{children:"Nuestro toolkit te brinda el control completo sobre tus archivos de audio, desde el inicio hasta el final. ¿Necesitas dividir automáticamente pistas largas? Hecho. ¿No cuentas con transcripciones? No hay problema. ¿Buscas validar transcripciones con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes idiomas? Lo hacemos posible."}),d.jsx(la,{children:d.jsx(Fr,{rightArrow:!0,to:"/Maintenance"})})]})]})]})]})}const ji={_origin:"https://api.emailjs.com"},Ij=(e,t="https://api.emailjs.com")=>{ji._userID=e,ji._origin=t},ay=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class jh{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const sy=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const s=new jh(a);s.status===200||s.text==="OK"?r(s):o(s)}),i.addEventListener("error",({target:a})=>{o(new jh(a))}),i.open("POST",ji._origin+e,!0),Object.keys(n).forEach(a=>{i.setRequestHeader(a,n[a])}),i.send(t)}),Lj=(e,t,n,r)=>{const o=r||ji._userID;return ay(o,e,t),sy("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},zj=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Mj=(e,t,n,r)=>{const o=r||ji._userID,i=zj(n);ay(o,e,t);const a=new FormData(i);return a.append("lib_version","3.11.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",o),sy("/api/v1.0/email/send-form",a)},yl={init:Ij,send:Lj,sendForm:Mj};function ly(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ly(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function On(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=ly(e))&&(r&&(r+=" "),r+=t);return r}const Xo=e=>typeof e=="number"&&!isNaN(e),vr=e=>typeof e=="string",ot=e=>typeof e=="function",Ia=e=>vr(e)||ot(e)?e:null,fu=e=>T.isValidElement(e)||vr(e)||ot(e)||Xo(e);function Dj(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function xl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(a){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:f,isIn:m}=a;const g=r?`${t}--${l}`:t,h=r?`${n}--${l}`:n,y=T.useRef(0);return T.useLayoutEffect(()=>{const E=f.current,v=g.split(" "),p=w=>{w.target===f.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",p),E.removeEventListener("animationcancel",p),y.current===0&&w.type!=="animationcancel"&&E.classList.remove(...v))};E.classList.add(...v),E.addEventListener("animationend",p),E.addEventListener("animationcancel",p)},[]),T.useEffect(()=>{const E=f.current,v=()=>{E.removeEventListener("animationend",v),o?Dj(E,c,i):c()};m||(u?v():(y.current=1,E.className+=` ${h}`,E.addEventListener("animationend",v)))},[m]),W.createElement(W.Fragment,null,s)}}function Ch(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const bt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},ua=e=>{let{theme:t,type:n,...r}=e;return W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},pu={info:function(e){return W.createElement(ua,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return W.createElement(ua,{...e},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return W.createElement(ua,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return W.createElement(ua,{...e},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return W.createElement("div",{className:"Toastify__spinner"})}};function Fj(e){const[,t]=T.useReducer(g=>g+1,0),[n,r]=T.useState([]),o=T.useRef(null),i=T.useRef(new Map).current,a=g=>n.indexOf(g)!==-1,s=T.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:g=>i.get(g)}).current;function l(g){let{containerId:h}=g;const{limit:y}=s.props;!y||h&&s.containerId!==h||(s.count-=s.queue.length,s.queue=[])}function u(g){r(h=>g==null?[]:h.filter(y=>y!==g))}function c(){const{toastContent:g,toastProps:h,staleId:y}=s.queue.shift();m(g,h,y)}function f(g,h){let{delay:y,staleId:E,...v}=h;if(!fu(g)||function(U){return!o.current||s.props.enableMultiContainer&&U.containerId!==s.props.containerId||i.has(U.toastId)&&U.updateId==null}(v))return;const{toastId:p,updateId:w,data:S}=v,{props:j}=s,k=()=>u(p),C=w==null;C&&s.count++;const P={...j,style:j.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(v).filter(U=>{let[F,Z]=U;return Z!=null})),toastId:p,updateId:w,data:S,closeToast:k,isIn:!1,className:Ia(v.className||j.toastClassName),bodyClassName:Ia(v.bodyClassName||j.bodyClassName),progressClassName:Ia(v.progressClassName||j.progressClassName),autoClose:!v.isLoading&&(O=v.autoClose,R=j.autoClose,O===!1||Xo(O)&&O>0?O:R),deleteToast(){const U=Ch(i.get(p),"removed");i.delete(p),bt.emit(4,U);const F=s.queue.length;if(s.count=p==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),F>0){const Z=p==null?s.props.limit:1;if(F===1||Z===1)s.displayedToast++,c();else{const xe=Z>F?F:Z;s.displayedToast=xe;for(let ae=0;ae<xe;ae++)c()}}else t()}};var O,R;P.iconOut=function(U){let{theme:F,type:Z,isLoading:xe,icon:ae}=U,pe=null;const N={theme:F,type:Z};return ae===!1||(ot(ae)?pe=ae(N):T.isValidElement(ae)?pe=T.cloneElement(ae,N):vr(ae)||Xo(ae)?pe=ae:xe?pe=pu.spinner():(B=>B in pu)(Z)&&(pe=pu[Z](N))),pe}(P),ot(v.onOpen)&&(P.onOpen=v.onOpen),ot(v.onClose)&&(P.onClose=v.onClose),P.closeButton=j.closeButton,v.closeButton===!1||fu(v.closeButton)?P.closeButton=v.closeButton:v.closeButton===!0&&(P.closeButton=!fu(j.closeButton)||j.closeButton);let D=g;T.isValidElement(g)&&!vr(g.type)?D=T.cloneElement(g,{closeToast:k,toastProps:P,data:S}):ot(g)&&(D=g({closeToast:k,toastProps:P,data:S})),j.limit&&j.limit>0&&s.count>j.limit&&C?s.queue.push({toastContent:D,toastProps:P,staleId:E}):Xo(y)?setTimeout(()=>{m(D,P,E)},y):m(D,P,E)}function m(g,h,y){const{toastId:E}=h;y&&i.delete(y);const v={content:g,props:h};i.set(E,v),r(p=>[...p,E].filter(w=>w!==y)),bt.emit(4,Ch(v,v.props.updateId==null?"added":"updated"))}return T.useEffect(()=>(s.containerId=e.containerId,bt.cancelEmit(3).on(0,f).on(1,g=>o.current&&u(g)).on(5,l).emit(2,s),()=>{i.clear(),bt.emit(3,s)}),[]),T.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(g){const h=new Map,y=Array.from(i.values());return e.newestOnTop&&y.reverse(),y.forEach(E=>{const{position:v}=E.props;h.has(v)||h.set(v,[]),h.get(v).push(E)}),Array.from(h,E=>g(E[0],E[1]))},containerRef:o,isToastActive:a}}function Th(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function kh(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Uj(e){const[t,n]=T.useState(!1),[r,o]=T.useState(!1),i=T.useRef(null),a=T.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=T.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:f,closeOnClick:m}=e;function g(S){if(e.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",p),document.addEventListener("touchmove",v),document.addEventListener("touchend",p);const j=i.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=j.getBoundingClientRect(),j.style.transition="",a.x=Th(S.nativeEvent),a.y=kh(S.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=j.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=j.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(S){if(a.boundingRect){const{top:j,bottom:k,left:C,right:P}=a.boundingRect;S.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=C&&a.x<=P&&a.y>=j&&a.y<=k?E():y()}}function y(){n(!0)}function E(){n(!1)}function v(S){const j=i.current;a.canDrag&&j&&(a.didMove=!0,t&&E(),a.x=Th(S),a.y=kh(S),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),j.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,j.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function p(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",p);const S=i.current;if(a.canDrag&&a.didMove&&S){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),void e.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${e.draggableDirection}(0)`,S.style.opacity="1"}}T.useEffect(()=>{s.current=e}),T.useEffect(()=>(i.current&&i.current.addEventListener("d",y,{once:!0}),ot(e.onOpen)&&e.onOpen(T.isValidElement(e.children)&&e.children.props),()=>{const S=s.current;ot(S.onClose)&&S.onClose(T.isValidElement(S.children)&&S.children.props)}),[]),T.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",y),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);const w={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return l&&u&&(w.onMouseEnter=E,w.onMouseLeave=y),m&&(w.onClick=S=>{f&&f(S),a.canCloseOnClick&&c()}),{playToast:y,pauseToast:E,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:w}}function uy(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Bj(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:a,style:s,controlledProgress:l,progress:u,rtl:c,isIn:f,theme:m}=e;const g=i||l&&u===0,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(h.transform=`scaleX(${u})`);const y=On("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":c}),E=ot(a)?a({rtl:c,type:o,defaultClassName:y}):On(y,a);return W.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:h,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{f&&r()}})}const Hj=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=Uj(e),{closeButton:i,children:a,autoClose:s,onClick:l,type:u,hideProgressBar:c,closeToast:f,transition:m,position:g,className:h,style:y,bodyClassName:E,bodyStyle:v,progressClassName:p,progressStyle:w,updateId:S,role:j,progress:k,rtl:C,toastId:P,deleteToast:O,isIn:R,isLoading:D,iconOut:U,closeOnClick:F,theme:Z}=e,xe=On("Toastify__toast",`Toastify__toast-theme--${Z}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":F}),ae=ot(h)?h({rtl:C,position:g,type:u,defaultClassName:xe}):On(xe,h),pe=!!k||!s,N={closeToast:f,type:u,theme:Z};let B=null;return i===!1||(B=ot(i)?i(N):T.isValidElement(i)?T.cloneElement(i,N):uy(N)),W.createElement(m,{isIn:R,done:O,position:g,preventExitTransition:n,nodeRef:r},W.createElement("div",{id:P,onClick:l,className:ae,...o,style:y,ref:r},W.createElement("div",{...R&&{role:j},className:ot(E)?E({type:u}):On("Toastify__toast-body",E),style:v},U!=null&&W.createElement("div",{className:On("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},U),W.createElement("div",null,a)),B,W.createElement(Bj,{...S&&!pe?{key:`pb-${S}`}:{},rtl:C,theme:Z,delay:s,isRunning:t,isIn:R,closeToast:f,hide:c,type:u,style:w,className:p,controlledProgress:pe,progress:k||0})))},wl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Vj=xl(wl("bounce",!0));xl(wl("slide",!0));xl(wl("zoom"));xl(wl("flip"));const Ci=T.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=Fj(e),{className:i,style:a,rtl:s,containerId:l}=e;function u(c){const f=On("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":s});return ot(i)?i({position:c,rtl:s,defaultClassName:f}):On(f,Ia(i))}return T.useEffect(()=>{t&&(t.current=r.current)},[]),W.createElement("div",{ref:r,className:"Toastify",id:l},n((c,f)=>{const m=f.length?{...a}:{...a,pointerEvents:"none"};return W.createElement("div",{className:u(c),style:m,key:`container-${c}`},f.map((g,h)=>{let{content:y,props:E}=g;return W.createElement(Hj,{...E,isIn:o(E.toastId),style:{...E.style,"--nth":h+1,"--len":f.length},key:`toast-${E.key}`},y)}))}))});Ci.displayName="ToastContainer",Ci.defaultProps={position:"top-right",transition:Vj,autoClose:5e3,closeButton:uy,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let hu,tr=new Map,Do=[],Wj=1;function cy(){return""+Wj++}function Qj(e){return e&&(vr(e.toastId)||Xo(e.toastId))?e.toastId:cy()}function Jo(e,t){return tr.size>0?bt.emit(0,e,t):Do.push({content:e,options:t}),t.toastId}function xs(e,t){return{...t,type:t&&t.type||e,toastId:Qj(t)}}function ca(e){return(t,n)=>Jo(t,xs(e,n))}function z(e,t){return Jo(e,xs("default",t))}z.loading=(e,t)=>Jo(e,xs("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),z.promise=function(e,t,n){let r,{pending:o,error:i,success:a}=t;o&&(r=vr(o)?z.loading(o,n):z.loading(o.render,{...n,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,f,m)=>{if(f==null)return void z.dismiss(r);const g={type:c,...s,...n,data:m},h=vr(f)?{render:f}:f;return r?z.update(r,{...g,...h}):z(h.render,{...g,...h}),m},u=ot(e)?e():e;return u.then(c=>l("success",a,c)).catch(c=>l("error",i,c)),u},z.success=ca("success"),z.info=ca("info"),z.error=ca("error"),z.warning=ca("warning"),z.warn=z.warning,z.dark=(e,t)=>Jo(e,xs("default",{theme:"dark",...t})),z.dismiss=e=>{tr.size>0?bt.emit(1,e):Do=Do.filter(t=>e!=null&&t.options.toastId!==e)},z.clearWaitingQueue=function(e){return e===void 0&&(e={}),bt.emit(5,e)},z.isActive=e=>{let t=!1;return tr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},z.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const a=tr.get(i||hu);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:cy()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,Jo(a,i)}},0)},z.done=e=>{z.update(e,{progress:1})},z.onChange=e=>(bt.on(4,e),()=>{bt.off(4,e)}),z.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},z.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},bt.on(2,e=>{hu=e.containerId||e,tr.set(hu,e),Do.forEach(t=>{bt.emit(0,t.content,t.options)}),Do=[]}).on(3,e=>{tr.delete(e.containerId||e),tr.size===0&&bt.off(0).off(1).off(5)});const qj=b.section`
  background: none;
  color: ${x.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100vw;

  background-image: url("assets/backgrounds/Background2.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${x.bp.large}) {
    background-size: 30%;
  }
`,Yj=b.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${x.colors.lavenderfloral};
  background-color: ${x.colors.lavender};
`,Kj=b.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${x.colors.raisinblack};
  font-size: 45px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 30px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${x.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`,Gj=b.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  gap: 10px;
  margin-bottom: 20px;
  background-color: ${x.colors.white};
  border-radius: 25px;

  @media (max-width: ${x.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,$h=b.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${x.colors.platinum};
  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${x.bp.medium}) {
    width: 85vw;
  }
`,Ph=b.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`,Oh=b.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${x.colors.raisinblack};

  @media (max-width: ${x.bp["x-small"]}) {
    display: none;
  }
`,_h=b.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${x.colors.gray};
`,Rh=b.img`
  align-items: flex-start;
  width: 50px;
`,Xj=b.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${x.colors.platinum};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 50px;
  column-gap: 20px;
  background-color: ${x.colors.white};

  @media (max-width: ${x.bp.large}) {
    width: 90vw;
  }
`,Jj=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,da=b.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${x.colors.platinum};
  color: ${x.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${x.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${x.colors.platinum};
  }
`,Zj=b.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${x.colors.platinum};
  color: ${x.colors.onyx};
  padding: 10px 15px;
  @media (max-width: ${x.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${x.colors.platinum};
  }
`,eC=b.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${x.colors.electricindigo} 0%,
    ${x.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;yl.init("F9yJc6wjTrkVV7_ha");function pf(){const e=T.useRef(),[t,n]=T.useState({}),[r,o]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},a=(u,c)=>{u.preventDefault();const f={},m=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;c.name||(f.name="Por favor, completa tu nombre",z.error(f.name)),c.email?m.test(c.email)||(f.email="El formato del email no es valido",z.error(f.email)):(f.email="Por favor, completa tu email",z.error(f.email)),c.message||(f.message="Por favor, contanos cómo podemos ayudarte",z.error(f.message)),c.phone||(f.phone="Por favor, completa tu teléfono",z.error(f.phone)),c.subject||(f.subject="Por favor, escribe un asunto",z.error(f.subject)),c.message.length<8&&(f.message="Por favor, completa el mensaje con al menos 8 caracteres",z.error(f.message)),c.message.length>200&&(f.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",z.error(f.message)),n(f),Object.keys(f).length===0&&s()},s=()=>{const{name:u,email:c,phone:f,subject:m,message:g}=r;z.info("Enviando mensaje"),yl.send("service_mkzy70s","template_zpb7t5a",{name:u,email:c,message:g,phone:f,subject:m},"F9yJc6wjTrkVV7_ha").then(h=>{console.log(h.text),z.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},h=>{console.log(h.text),z.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),l()},l=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return d.jsxs(qj,{children:[d.jsx(Yj,{children:"Contacto"}),d.jsx(Kj,{children:"Dejanos tu consulta"}),d.jsxs(Gj,{children:[d.jsxs($h,{href:"tel:+61383766284",children:[d.jsx(Rh,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),d.jsxs(Ph,{children:[d.jsx(Oh,{children:"Llamanos"}),d.jsx(_h,{children:"+54 9 11 5 739 7834"})]})]}),d.jsxs($h,{href:"info@mecantronic.com.ar",children:[d.jsx(Rh,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),d.jsxs(Ph,{children:[d.jsx(Oh,{children:"Escribinos"}),d.jsx(_h,{children:"info@mecantronic.com.ar"})]})]})]}),d.jsxs(Xj,{ref:e,onSubmit:u=>a(u,r),children:[d.jsx(da,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),d.jsx(da,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),d.jsx(da,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),d.jsx(da,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),d.jsx(Zj,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),d.jsx(Jj,{children:d.jsx(eC,{type:"submit",children:"Enviar mensaje"})})]}),d.jsx(Ci,{position:"bottom-right"})]})}const tC=b.section`
  background: none;
  color: ${x.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  background-image: url("assets/backgrounds/Background2.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${x.bp.large}) {
    background-size: 30%;
  }
`,nC=b.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${x.colors.raisinblack};
  font-size: 30px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 0 0 10px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${x.bp.small}) {
    line-height: 44px;
    font-size: 24px;
    padding: 10px 0;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    line-height: 30px;
    font-size: 20px;
    padding: 5px 0;
  }
`,rC=b.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;

  gap: 10px;
  margin-bottom: 20px;
  border-radius: 25px;

  @media (max-width: ${x.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,Ah=b.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${x.colors.platinum};
  background-color: ${x.colors.white};

  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${x.bp.medium}) {
    width: 85vw;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    height: 50px;
    width: 80vw;
  }
`,Nh=b.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`,Ih=b.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${x.colors.raisinblack};

  @media (max-width: ${x.bp["x-small"]}) {
    display: none;
  }
`,Lh=b.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${x.colors.gray};
`,zh=b.img`
  align-items: flex-start;
  width: 50px;
  @media (max-width: ${x.bp["x-small"]}) {
    width: 30px;
  }
`,oC=b.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${x.colors.platinum};
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  row-gap: 20px;
  column-gap: 20px;
  background-color: ${x.colors.white};

  @media (max-width: ${x.bp.large}) {
    width: 90vw;
    row-gap: 30px;
  }
  @media (max-width: ${x.bp.medium}) {
    row-gap: 20px;
  }
  @media (max-width: ${x.bp.small}) {
    row-gap: 20px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    row-gap: 10px;
  }
`,iC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,fa=b.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${x.colors.platinum};
  color: ${x.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${x.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 80%;
    height: 30px;
  }

  &::placeholder {
    opacity: 1;
    color: ${x.colors.platinum};
  }
`,aC=b.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${x.colors.platinum};
  color: ${x.colors.onyx};
  padding: 10px 15px;

  @media (max-width: ${x.bp["x-small"]}) {
    width: 80%;
  }

  &::placeholder {
    opacity: 1;
    color: ${x.colors.platinum};
  }
`,sC=b.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${x.colors.electricindigo} 0%,
    ${x.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;yl.init("F9yJc6wjTrkVV7_ha");function hf(){const e=T.useRef(),[t,n]=T.useState({}),[r,o]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},a=(u,c)=>{u.preventDefault();const f={},m=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;c.name||(f.name="Por favor, completa tu nombre",z.error(f.name)),c.email?m.test(c.email)||(f.email="El formato del email no es valido",z.error(f.email)):(f.email="Por favor, completa tu email",z.error(f.email)),c.message||(f.message="Por favor, contanos cómo podemos ayudarte",z.error(f.message)),c.phone||(f.phone="Por favor, completa tu teléfono",z.error(f.phone)),c.subject||(f.subject="Por favor, escribe un asunto",z.error(f.subject)),c.message.length<8&&(f.message="Por favor, completa el mensaje con al menos 8 caracteres",z.error(f.message)),c.message.length>200&&(f.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",z.error(f.message)),n(f),Object.keys(f).length===0&&s()},s=()=>{const{name:u,email:c,phone:f,subject:m,message:g}=r;z.info("Enviando mensaje"),yl.send("service_mkzy70s","template_zpb7t5a",{name:u,email:c,message:g,phone:f,subject:m},"F9yJc6wjTrkVV7_ha").then(h=>{console.log(h.text),z.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},h=>{console.log(h.text),z.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),l()},l=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return d.jsxs(tC,{children:[d.jsx(nC,{children:"Dejanos tu consulta"}),d.jsxs(rC,{children:[d.jsxs(Ah,{href:"tel:+61383766284",children:[d.jsx(zh,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),d.jsxs(Nh,{children:[d.jsx(Ih,{children:"Llamanos"}),d.jsx(Lh,{children:"+54 9 11 5 739 7834"})]})]}),d.jsxs(Ah,{href:"info@mecantronic.com.ar",children:[d.jsx(zh,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),d.jsxs(Nh,{children:[d.jsx(Ih,{children:"Escribinos"}),d.jsx(Lh,{children:"info@mecantronic.com.ar"})]})]})]}),d.jsxs(oC,{ref:e,onSubmit:u=>a(u,r),children:[d.jsx(fa,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),d.jsx(fa,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),d.jsx(fa,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),d.jsx(fa,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),d.jsx(aC,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),d.jsx(iC,{children:d.jsx(sC,{type:"submit",children:"Enviar mensaje"})})]}),d.jsx(Ci,{position:"bottom-right"})]})}function Lc(e){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Mh(e){return vt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}}]})(e)}function lC(e){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function zc(e){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function Dh(e){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function Fh(e){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function uC(e){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function pa(e){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function cC(e){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"}}]})(e)}const dC=b.div`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: ${x.colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${x.colors.electricindigo},
      ${x.colors.lavenderfloral}
    );
    z-index: 6;
    transform: translateX(
      ${e=>e.formtype==="login"?"100%":"0"}
    );
    transition: 1s ease-in-out;
  }

  @media (max-width: ${x.bp.small}) {
    width: 95vw;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    height: 95vh;
    &::before {
      display: none;
    }
  }
`,fC=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`,pC=b.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: 1;
  opacity: ${e=>e.formtype==="login"?"1":"0"};
  @media (max-width: ${x.bp["x-small"]}) {
    display: ${e=>e.formtype==="login"?"flex":"none"};
    width: 80%;
  }
`,hC=b.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: ${e=>e.formtype==="login"?"0":"1"};
  @media (max-width: ${x.bp["x-small"]}) {
    display: ${e=>e.formtype==="login"?"none":"flex"};
    width: 80%;
  }
`,Uh=b.h2`
  font-size: 35px;
  color: ${x.colors.electricindigo};
  margin-bottom: 10px;
`,Bh=b.p`
  display: none;
  @media (max-width: ${x.bp["x-small"]}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    a {
      text-decoration: none;
      color: ${x.colors.electricindigo};
    }
  }
`,yn=b.i`
  flex: 1;
  text-align: center;
  color: ${x.colors.gray};
  font-size: 16px;
`,xn=b.div`
  width: 100%;
  height: 40px;
  background: ${x.colors.white};
  margin: 10px 0;
  border: 2px solid ${x.colors.platinum};
  border-radius: 15px;
  padding: 0 15px;
  display: flex;
  align-items: center;

  input {
    flex: 5;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: ${x.colors.onyx};
  }
  @media (max-width: ${x.bp["x-small"]}) {
    height: 30px;
  }
`,Hh=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,ha=b.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${x.colors.electricindigo} 0%,
    ${x.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`,Vh=b.p`
  margin: 10px 0;
  font-size: 16px;
`,Wh=b.div`
  display: flex;
  justify-content: center;
`,wn=b.a`
  text-decoration: none;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${x.colors.raisinblack};
  border: 1px solid ${x.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${x.colors.electricindigo};
    border-color: ${x.colors.electricindigo};
  }
`,mC=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${x.bp["x-small"]}) {
    display: none;
  }
`,gC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  min-width: 238px;
  padding: 0 10px;
  text-align: center;
  z-index: 6;
  pointer-events: none;
  transform: translateX(
    ${e=>e.formtype==="login"?"-200%":"0"}
  );
  pointer-events: ${e=>e.formtype==="login"?"none":"all"};
`,vC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  min-width: 238px;
  padding: 0 10px;
  text-align: center;
  z-index: 6;
  pointer-events: ${e=>e.formtype==="login"?"all":"none"};
  transform: translateX(
    ${e=>e.formtype==="login"?"0":"200%"}
  );
`,Qh=b.div`
  color: ${x.colors.white};
  transition: 1.1s ease-in-out;
  transition-delay: 0.5s;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 15px;
    padding: 10px 0;
  }
  img {
    width: 100%;
    transition: 1.1s ease-in-out;
    transition-delay: 0.4s;
  }
`,qh=b.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: ${x.colors.onyx};
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`,yC=b.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  height: 14px;
  width: 14px;
  margin: 5px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function Yh(){return d.jsx(yC,{})}function Mc({initialType:e}){const t=vo(),[n,r]=T.useState(!1),[o,i]=T.useState(e),[a,s]=T.useState({email:"",password:""}),[l,u]=T.useState({userName:"",firstName:"",lastName:"",email:"",phone:"",password:""}),[c,f]=T.useState({}),m=()=>{if(o==="login"){i("signup");return}if(o==="signup"){i("login");return}},g=w=>{s({...a,[w.target.name]:w.target.value})},h=w=>{w.preventDefault();const S={};a.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.email)||(S.email="Por favor, ingresa una dirección de correo electrónico válida.",z.error(S.email)):(S.email="Por favor, completa tu dirección de correo electrónico.",z.error(S.email)),a.password?(a.password.length<8||a.password.length>50)&&(S.password="La contraseña debe tener entre 8 y 50 caracteres.",z.error(S.password)):(S.password="Por favor, completa tu contraseña.",z.error(S.password)),f(S),Object.keys(S).length===0&&(y(),f({}))},y=async()=>{r(!0);const w=await rj(a);w.error?(z.error(w.error.message),r(!1)):(t(Eh({token:w.token,userName:w.userName,service:w.service,freeCredits:w.credits.freeCredits,premiumCredits:w.credits.premiumCredits})),t(Oc()),r(!1))},E=w=>{u({...l,[w.target.name]:w.target.value})},v=w=>{w.preventDefault();const S={};l.userName?/^[a-zA-Z0-9_]+$/.test(l.userName)?(l.userName.length<2||l.userName.length>18)&&(S.userName="El nombre de usuario debe tener entre 2 y 18 caracteres.",z.error(S.userName)):(S.userName="El nombre de usuario solo puede contener letras, números y guiones bajos.",z.error(S.userName)):(S.userName="Por favor, completa tu nombre de usuario.",z.error(S.userName)),l.firstName||(S.firstName="Por favor, completa tu nombre.",z.error(S.firstName)),l.lastName||(S.lastName="Por favor, completa tu apellido.",z.error(S.lastName)),/^[a-zA-Z ]+$/.test(l.name)||(S.firstName="El nombre solo puede contener letras y espacios.",z.error(S.firstName)),/^[a-zA-Z ]+$/.test(l.lastName)||(S.lastName="El apellido solo puede contener letras y espacios.",z.error(S.lastName)),(l.firstName.length<2||l.firstName.length>18)&&(S.firstName="El nombre debe tener entre 2 y 18 caracteres.",z.error(S.firstName)),(l.lastName.length<2||l.lastName.length>8)&&(S.lastName="El apellido debe tener entre 2 y 8 caracteres.",z.error(S.lastName)),l.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(l.email)||(S.email="Por favor, ingresa una dirección de correo electrónico válida.",z.error(S.email)):(S.email="Por favor, completa tu dirección de correo electrónico.",z.error(S.email)),l.phone?/^[0-9()-]+$/.test(l.phone)||(S.phone="El número de teléfono solo puede contener números, guiones y paréntesis.",z.error(S.phone)):(S.phone="Por favor, completa tu número de teléfono.",z.error(S.phone)),l.password?(l.password.length<8||l.password.length>50)&&(S.password="La contraseña debe tener entre 8 y 50 caracteres.",z.error(S.password)):(S.password="Por favor, completa tu contraseña.",z.error(S.password)),f(S),Object.keys(S).length===0&&(p(),f({}))},p=async()=>{r(!0);const w=await oj(l);w.error?(z.error(w.error.message),r(!1)):(t(Eh({token:w.token,userName:w.userName,service:"free",freeCredits:1e4,premiumCredits:0})),t(Oc()),r(!1))};return d.jsxs(dC,{formtype:o,children:[d.jsxs(fC,{children:[d.jsxs(pC,{action:"",formtype:o,children:[d.jsx(Uh,{children:"Log In"}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(pa,{})}),d.jsx("input",{type:"text",placeholder:"Email",name:"email",value:a.email,onChange:g})]}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(Fh,{})}),d.jsx("input",{type:"password",placeholder:"Contraseña",name:"password",value:a.password,onChange:g})]}),d.jsx(Hh,{children:n?d.jsx(ha,{type:"submit",value:"Login",children:d.jsx(Yh,{})}):d.jsx(ha,{type:"submit",value:"Login",onClick:h,children:"Ingresar"})}),d.jsx(Vh,{children:"O iniciá sesión con"}),d.jsxs(Wh,{children:[d.jsx(wn,{href:"#",children:d.jsx(Lc,{})}),d.jsx(wn,{href:"",children:d.jsx(Dh,{})}),d.jsx(wn,{href:"",children:d.jsx(Mh,{})}),d.jsx(wn,{href:"",children:d.jsx(zc,{})})]}),d.jsxs(Bh,{children:["¿No tienes una cuenta? ","",d.jsx("a",{href:"#",onClick:m,id:"sign-up-btn2",children:"Registrarse"})]})]}),d.jsxs(hC,{action:"",formtype:o,children:[d.jsx(Uh,{children:"Registro"}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(pa,{})}),d.jsx("input",{type:"text",placeholder:"Nombre",name:"firstName",value:l.firstName,onChange:E})]}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(pa,{})}),d.jsx("input",{type:"text",placeholder:"Apellido",name:"lastName",value:l.lastName,onChange:E})]}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(uC,{})}),d.jsx("input",{type:"text",placeholder:"Teléfono",name:"phone",value:l.phone,onChange:E})]}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(pa,{})}),d.jsx("input",{type:"text",placeholder:"Usuario",name:"userName",value:l.userName,onChange:E})]}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(cC,{})}),d.jsx("input",{type:"text",placeholder:"Email",name:"email",value:l.email,onChange:E})]}),d.jsxs(xn,{children:[d.jsx(yn,{children:d.jsx(Fh,{})}),d.jsx("input",{type:"password",placeholder:"Contraseña",name:"password",value:l.password,onChange:E})]}),d.jsx(Hh,{children:n?d.jsx(ha,{type:"submit",value:"Sign up",children:d.jsx(Yh,{})}):d.jsx(ha,{type:"submit",value:"Sign up",onClick:v,children:"Registrarse"})}),d.jsx(Vh,{children:"O registrate con"}),d.jsxs(Wh,{children:[d.jsx(wn,{href:"#",children:d.jsx(Lc,{})}),d.jsx(wn,{href:"",children:d.jsx(Dh,{})}),d.jsx(wn,{href:"",children:d.jsx(Mh,{})}),d.jsx(wn,{href:"",children:d.jsx(zc,{})})]}),d.jsxs(Bh,{children:["¿ Ya tienes una cuenta? ","",d.jsx("a",{href:"#",onClick:m,id:"sign-in-btn2",children:"Ingresar"})]})]})]}),d.jsxs(mC,{children:[d.jsx(gC,{formtype:o,children:d.jsxs(Qh,{children:[d.jsx("h3",{children:"¿Ya tenés una cuenta?"}),d.jsx("p",{children:"Iniciá sesión para disfrutar de nuestros servicios"}),d.jsx(qh,{onClick:m,children:"Ingresar"})]})}),d.jsx(vC,{formtype:o,children:d.jsxs(Qh,{children:[d.jsx("h3",{children:"¿No tenés una cuenta?"}),d.jsx("p",{children:"Sería un placer que formes parte de Sintética. Registrate acá para disfrutar nuestros servicios"}),d.jsx(qh,{onClick:m,children:"Registrarse"})]})})]}),d.jsx(Ci,{style:{position:"absolute",bottom:"2vh",right:"2vw"}})]})}Mc.propTypes={initialType:H.oneOf(["login","signup"])};const xC=b.div`
  position: sticky;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`,wC=b.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`,SC=b.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${x.colors.onyx};
  z-index: 12;
`,mf=()=>{const e=vo(),t=Qs(o=>o.modal.modalType),n=()=>{e(Oc())};let r;switch(t){case"contact":r=d.jsx(hf,{});break;case"login":r=d.jsx(Mc,{initialType:"login"});break;case"signup":r=d.jsx(Mc,{initialType:"signup"});break;default:r=d.jsx(d.Fragment,{})}return t==="closed"?d.jsx(d.Fragment,{}):d.jsx(xC,{children:d.jsxs(wC,{children:[d.jsx(SC,{onClick:n,children:"x"}),r]})})},EC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`,bC=b.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`,jC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: ${x.colors.seasalt};
`,CC=b.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,TC=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;

  @media (max-width: ${x.bp.large}) {
    width: 992px;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 767px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 576px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`,kC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 138px;
  margin-right: 0px;

  @media (max-width: ${x.bp.large}) {
    width: 113px;
  }
  @media (max-width: ${x.bp.small}) {
    display: none;
  }
`,$C=b.img`
  width: 110px;

  @media (max-width: ${x.bp.large}) {
    width: 90px;
  }
`,PC=b.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 32px;
    color: ${x.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 9px;
    font-weight: 700;
    color: ${x.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${x.bp.large}) {
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 8px;
    }
  }
`,OC=b.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    height: 100%;
  }
`,_C=b.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`,RC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${x.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
  }
`,mu=b.h5`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px 0;
  margin: 0;

  @media (max-width: ${x.bp.small}) {
    font-size: 16px;
    line-height: 16px;
  }
`,Oo=b(Er)`
  display: flex;
  color: ${x.colors.raisinblack};
  text-decoration: none;
  text-align: center;
  width: fit-content;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  position: relative;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 10px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    border-bottom: 2px solid ${x.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${x.bp.small}) {
    font-size: 12px;
    line-height: 12px;
  }
`,gu=b.a`
  display: flex;
  color: ${x.colors.raisinblack};
  text-decoration: none;
  text-align: center;
  width: fit-content;
  font-size: 16px !important;
  line-height: 16px !important;
  font-weight: 400 !important;
  position: relative;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 10px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    border-bottom: 2px solid ${x.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${x.bp.large}) {
    font-size: 12px;
  }
  @media (max-width: ${x.bp.small}) {
    font-size: 12px !important;
    line-height: 12px !important;
  }
`,AC=b.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${x.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
  }
`,NC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;

  p {
    margin: 0;
  }

  @media (max-width: ${x.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${x.bp.small}) {
    p {
      font-size: 12px;
      line-height: 12px;
    }
  }
  @media (max-width: ${x.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
  }
`,IC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,vu=b.a`
  text-decoration: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${x.colors.raisinblack};
  border: 1px solid ${x.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${x.colors.electricindigo};
    border-color: ${x.colors.electricindigo};
  }
`,LC=b.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${x.colors.gray};
  @media (max-width: ${x.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`;function Mi(){return d.jsx(jC,{children:d.jsxs(CC,{children:[d.jsxs(TC,{children:[d.jsxs(kC,{children:[d.jsx($C,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),d.jsxs(PC,{children:[d.jsx("h1",{children:"Sintética"}),d.jsx("p",{children:"Laboratorio de voces"})]})]}),d.jsxs(OC,{children:[d.jsxs(_C,{children:[d.jsxs(RC,{children:[d.jsx(mu,{children:"Navegación"}),d.jsx(Oo,{to:"/VoiceCloning",children:"Voice Cloning"}),d.jsx(Oo,{to:"/Maintenance",children:"Experiencia TTS"}),d.jsx(Oo,{to:"/Maintenance",children:"AI & Salud"}),d.jsx(Oo,{to:"/Maintenance",children:"Investigación"}),d.jsx(Oo,{to:"/Maintenance",children:"Nosotros"})]}),d.jsxs(AC,{children:[d.jsx(mu,{children:"Contacto"}),d.jsx(gu,{href:"",rel:"noreferrer",children:"Belgrano, CABA."}),d.jsx(gu,{href:"https://wa.me/5491157397834",target:"_blank",rel:"noreferrer",children:"+54 9 11 5 739 7834"}),d.jsx(gu,{href:"mailto:info@mecantronic.com.ar",children:"info@mecantronic.com.ar"})]})]}),d.jsxs(NC,{children:[d.jsx(mu,{children:"Conectemos"}),d.jsx("p",{children:"Seguinos en nuestras"}),d.jsx("p",{children:"redes sociales."}),d.jsxs(IC,{children:[d.jsx(vu,{href:"https://www.facebook.com/mecantronic",target:"_blank",rel:"noreferrer",children:d.jsx(Lc,{})}),d.jsx(vu,{href:"https://www.linkedin.com/company/mecantronic-sa/",target:"_blank",rel:"noreferrer",children:d.jsx(zc,{})}),d.jsx(vu,{href:"https://www.instagram.com/mecantronic/?hl=es",target:"_blank",rel:"noreferrer",children:d.jsx(lC,{})})]})]})]})]}),d.jsxs(LC,{children:[d.jsx("p",{children:"Copyright 2023 Todos los derechos reservados"}),d.jsx("p",{children:"©Mecantronic 2023"})]})]})})}function zC(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var dy=T,MC=zC(dy);function Kh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DC(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var FC=!!(typeof window<"u"&&window.document&&window.document.createElement);function UC(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(c){return c.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(c){DC(f,c);function f(){return c.apply(this,arguments)||this}f.peek=function(){return s},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var h=s;return s=void 0,a=[],h};var m=f.prototype;return m.UNSAFE_componentWillMount=function(){a.push(this),l()},m.componentDidUpdate=function(){l()},m.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),l()},m.render=function(){return MC.createElement(i,this.props)},f}(dy.PureComponent);return Kh(u,"displayName","SideEffect("+r(i)+")"),Kh(u,"canUseDOM",FC),u}}var BC=UC;const HC=ki(BC);var VC=typeof Element<"u",WC=typeof Map=="function",QC=typeof Set=="function",qC=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function La(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!La(e[r],t[r]))return!1;return!0}var i;if(WC&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!La(r.value[1],t.get(r.value[0])))return!1;return!0}if(QC&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(qC&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(VC&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!La(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var YC=function(t,n){try{return La(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const KC=ki(YC);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Gh=Object.getOwnPropertySymbols,GC=Object.prototype.hasOwnProperty,XC=Object.prototype.propertyIsEnumerable;function JC(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function ZC(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var eT=ZC()?Object.assign:function(e,t){for(var n,r=JC(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)GC.call(n,a)&&(r[a]=n[a]);if(Gh){o=Gh(n);for(var s=0;s<o.length;s++)XC.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const tT=ki(eT);var cr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Q).map(function(e){return Q[e]});var Se={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},ws={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ti={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},nT=Object.keys(ws).reduce(function(e,t){return e[ws[t]]=t,e},{}),rT=[Q.NOSCRIPT,Q.SCRIPT,Q.STYLE],Dt="data-react-helmet",oT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},iT=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},aT=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sT=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Xh=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},lT=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Dc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},uT=function(t){var n=Kr(t,Q.TITLE),r=Kr(t,Ti.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=Kr(t,Ti.DEFAULT_TITLE);return n||o||void 0},cT=function(t){return Kr(t,Ti.ON_CHANGE_CLIENT_STATE)||function(){}},yu=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,o){return tt({},r,o)},{})},dT=function(t,n){return n.filter(function(r){return typeof r[Q.BASE]<"u"}).map(function(r){return r[Q.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&o[l])return r.concat(o)}return r},[])},_o=function(t,n,r){var o={};return r.filter(function(i){return Array.isArray(i[t])?!0:(typeof i[t]<"u"&&mT("Helmet: "+t+' should be of type "Array". Instead found type "'+oT(i[t])+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,a){var s={};a.filter(function(m){for(var g=void 0,h=Object.keys(m),y=0;y<h.length;y++){var E=h[y],v=E.toLowerCase();n.indexOf(v)!==-1&&!(g===Se.REL&&m[g].toLowerCase()==="canonical")&&!(v===Se.REL&&m[v].toLowerCase()==="stylesheet")&&(g=v),n.indexOf(E)!==-1&&(E===Se.INNER_HTML||E===Se.CSS_TEXT||E===Se.ITEM_PROP)&&(g=E)}if(!g||!m[g])return!1;var p=m[g].toLowerCase();return o[g]||(o[g]={}),s[g]||(s[g]={}),o[g][p]?!1:(s[g][p]=!0,!0)}).reverse().forEach(function(m){return i.push(m)});for(var l=Object.keys(s),u=0;u<l.length;u++){var c=l[u],f=tT({},o[c],s[c]);o[c]=f}return i},[]).reverse()},Kr=function(t,n){for(var r=t.length-1;r>=0;r--){var o=t[r];if(o.hasOwnProperty(n))return o[n]}return null},fT=function(t){return{baseTag:dT([Se.HREF,Se.TARGET],t),bodyAttributes:yu(cr.BODY,t),defer:Kr(t,Ti.DEFER),encode:Kr(t,Ti.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:yu(cr.HTML,t),linkTags:_o(Q.LINK,[Se.REL,Se.HREF],t),metaTags:_o(Q.META,[Se.NAME,Se.CHARSET,Se.HTTPEQUIV,Se.PROPERTY,Se.ITEM_PROP],t),noscriptTags:_o(Q.NOSCRIPT,[Se.INNER_HTML],t),onChangeClientState:cT(t),scriptTags:_o(Q.SCRIPT,[Se.SRC,Se.INNER_HTML],t),styleTags:_o(Q.STYLE,[Se.CSS_TEXT],t),title:uT(t),titleAttributes:yu(cr.TITLE,t)}},Fc=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){Fc(t)},0)}}(),Jh=function(t){return clearTimeout(t)},pT=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Fc:global.requestAnimationFrame||Fc,hT=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Jh:global.cancelAnimationFrame||Jh,mT=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Ro=null,gT=function(t){Ro&&hT(Ro),t.defer?Ro=pT(function(){Zh(t,function(){Ro=null})}):(Zh(t),Ro=null)},Zh=function(t,n){var r=t.baseTag,o=t.bodyAttributes,i=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,f=t.styleTags,m=t.title,g=t.titleAttributes;Uc(Q.BODY,o),Uc(Q.HTML,i),vT(m,g);var h={baseTag:Cr(Q.BASE,r),linkTags:Cr(Q.LINK,a),metaTags:Cr(Q.META,s),noscriptTags:Cr(Q.NOSCRIPT,l),scriptTags:Cr(Q.SCRIPT,c),styleTags:Cr(Q.STYLE,f)},y={},E={};Object.keys(h).forEach(function(v){var p=h[v],w=p.newTags,S=p.oldTags;w.length&&(y[v]=w),S.length&&(E[v]=h[v].oldTags)}),n&&n(),u(t,y,E)},fy=function(t){return Array.isArray(t)?t.join(""):t},vT=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=fy(t)),Uc(Q.TITLE,n)},Uc=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var o=r.getAttribute(Dt),i=o?o.split(","):[],a=[].concat(i),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],c=n[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),i.indexOf(u)===-1&&i.push(u);var f=a.indexOf(u);f!==-1&&a.splice(f,1)}for(var m=a.length-1;m>=0;m--)r.removeAttribute(a[m]);i.length===a.length?r.removeAttribute(Dt):r.getAttribute(Dt)!==s.join(",")&&r.setAttribute(Dt,s.join(","))}},Cr=function(t,n){var r=document.head||document.querySelector(Q.HEAD),o=r.querySelectorAll(t+"["+Dt+"]"),i=Array.prototype.slice.call(o),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var c in l)if(l.hasOwnProperty(c))if(c===Se.INNER_HTML)u.innerHTML=l.innerHTML;else if(c===Se.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[c]>"u"?"":l[c];u.setAttribute(c,f)}u.setAttribute(Dt,"true"),i.some(function(m,g){return s=g,u.isEqualNode(m)})?i.splice(s,1):a.push(u)}),i.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:i,newTags:a}},py=function(t){return Object.keys(t).reduce(function(n,r){var o=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+o:o},"")},yT=function(t,n,r,o){var i=py(r),a=fy(n);return i?"<"+t+" "+Dt+'="true" '+i+">"+Dc(a,o)+"</"+t+">":"<"+t+" "+Dt+'="true">'+Dc(a,o)+"</"+t+">"},xT=function(t,n,r){return n.reduce(function(o,i){var a=Object.keys(i).filter(function(u){return!(u===Se.INNER_HTML||u===Se.CSS_TEXT)}).reduce(function(u,c){var f=typeof i[c]>"u"?c:c+'="'+Dc(i[c],r)+'"';return u?u+" "+f:f},""),s=i.innerHTML||i.cssText||"",l=rT.indexOf(t)===-1;return o+"<"+t+" "+Dt+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},hy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[ws[o]||o]=t[o],r},n)},wT=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[nT[o]||o]=t[o],r},n)},ST=function(t,n,r){var o,i=(o={key:n},o[Dt]=!0,o),a=hy(r,i);return[W.createElement(Q.TITLE,a,n)]},ET=function(t,n){return n.map(function(r,o){var i,a=(i={key:o},i[Dt]=!0,i);return Object.keys(r).forEach(function(s){var l=ws[s]||s;if(l===Se.INNER_HTML||l===Se.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),W.createElement(t,a)})},tn=function(t,n,r){switch(t){case Q.TITLE:return{toComponent:function(){return ST(t,n.title,n.titleAttributes)},toString:function(){return yT(t,n.title,n.titleAttributes,r)}};case cr.BODY:case cr.HTML:return{toComponent:function(){return hy(n)},toString:function(){return py(n)}};default:return{toComponent:function(){return ET(t,n)},toString:function(){return xT(t,n,r)}}}},my=function(t){var n=t.baseTag,r=t.bodyAttributes,o=t.encode,i=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,c=t.styleTags,f=t.title,m=f===void 0?"":f,g=t.titleAttributes;return{base:tn(Q.BASE,n,o),bodyAttributes:tn(cr.BODY,r,o),htmlAttributes:tn(cr.HTML,i,o),link:tn(Q.LINK,a,o),meta:tn(Q.META,s,o),noscript:tn(Q.NOSCRIPT,l,o),script:tn(Q.SCRIPT,u,o),style:tn(Q.STYLE,c,o),title:tn(Q.TITLE,{title:m,titleAttributes:g},o)}},bT=function(t){var n,r;return r=n=function(o){sT(i,o);function i(){return iT(this,i),lT(this,o.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(s){return!KC(this.props,s)},i.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case Q.SCRIPT:case Q.NOSCRIPT:return{innerHTML:l};case Q.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,c=s.arrayTypeChildren,f=s.newChildProps,m=s.nestedChildren;return tt({},c,(l={},l[u.type]=[].concat(c[u.type]||[],[tt({},f,this.mapNestedChildrenToProps(u,m))]),l))},i.prototype.mapObjectTypeChildren=function(s){var l,u,c=s.child,f=s.newProps,m=s.newChildProps,g=s.nestedChildren;switch(c.type){case Q.TITLE:return tt({},f,(l={},l[c.type]=g,l.titleAttributes=tt({},m),l));case Q.BODY:return tt({},f,{bodyAttributes:tt({},m)});case Q.HTML:return tt({},f,{htmlAttributes:tt({},m)})}return tt({},f,(u={},u[c.type]=tt({},m),u))},i.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=tt({},l);return Object.keys(s).forEach(function(c){var f;u=tt({},u,(f={},f[c]=s[c],f))}),u},i.prototype.warnOnInvalidChildren=function(s,l){return!0},i.prototype.mapChildrenToProps=function(s,l){var u=this,c={};return W.Children.forEach(s,function(f){if(!(!f||!f.props)){var m=f.props,g=m.children,h=Xh(m,["children"]),y=wT(h);switch(u.warnOnInvalidChildren(f,g),f.type){case Q.LINK:case Q.META:case Q.NOSCRIPT:case Q.SCRIPT:case Q.STYLE:c=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:c,newChildProps:y,nestedChildren:g});break;default:l=u.mapObjectTypeChildren({child:f,newProps:l,newChildProps:y,nestedChildren:g});break}}}),l=this.mapArrayTypeChildrenToProps(c,l),l},i.prototype.render=function(){var s=this.props,l=s.children,u=Xh(s,["children"]),c=tt({},u);return l&&(c=this.mapChildrenToProps(l,c)),W.createElement(t,c)},aT(i,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),i}(W.Component),n.propTypes={base:H.object,bodyAttributes:H.object,children:H.oneOfType([H.arrayOf(H.node),H.node]),defaultTitle:H.string,defer:H.bool,encodeSpecialCharacters:H.bool,htmlAttributes:H.object,link:H.arrayOf(H.object),meta:H.arrayOf(H.object),noscript:H.arrayOf(H.object),onChangeClientState:H.func,script:H.arrayOf(H.object),style:H.arrayOf(H.object),title:H.string,titleAttributes:H.object,titleTemplate:H.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var o=t.rewind();return o||(o=my({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},jT=function(){return null},CT=HC(fT,gT,my)(jT),Bc=bT(CT);Bc.renderStatic=Bc.rewind;function TT(){const[e,t]=T.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return d.jsxs(EC,{children:[d.jsxs(Bc,{children:[d.jsx("title",{children:"Sintética"}),d.jsx("meta",{name:"description",content:"Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),d.jsx("meta",{name:"keywords",content:"Clonación de voz, español rioplatense, voice cloning, síntesis de voces, text to speech, voice bots"}),d.jsx("meta",{name:"canonical",href:"https://www.ejemplo.com/mi-pagina"}),d.jsx("meta",{name:"og:title",content:"Sintética"}),d.jsx("meta",{name:"og:description",content:"Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),d.jsx("meta",{name:"robots",content:"index, follow"})]}),d.jsx(zi,{}),d.jsx(hj,{openModal:n}),d.jsxs(bC,{children:[d.jsx(xj,{}),d.jsx(Nj,{}),d.jsx(pf,{})]}),e&&d.jsx(mf,{closeModal:r,children:d.jsx(hf,{})}),d.jsx(Mi,{})]})}const kT=b.section`
  background-color: ${x.colors.white};
  color: ${x.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${x.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${x.bp.small}) {
    padding-top: 50px;
  }
`,$T=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${x.bp.large}) {
    width: auto;
  }
`,PT=b.img`
  width: 500px;
  @media (max-width: ${x.bp.large}) {
    width: 500px;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 300px;
  }
`,OT=b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${x.bp.large}) {
    width: 80%;
  }
`,_T=b.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${x.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 40px;
  }
`,RT=b.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${x.colors.gray};
`,AT=b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,NT=b.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${x.bp.medium}) {
    margin-right: 50px;
  }
`;function gy({openModal:e}){const t=vo(),n=()=>{t(Nv())};return d.jsxs(kT,{children:[d.jsx($T,{children:d.jsx(PT,{src:"assets/voiceCloning/bannerVoice.svg"})}),d.jsxs(OT,{children:[d.jsx(_T,{children:"Inteligencia Artificial para alzar tu voz"}),d.jsx(RT,{children:"Crea una copia digital de tu voz con nuestros sistemas de inteligencia artificial para clonar voces. Desarrollamos modelos de IA personalizados para capturar tu voz y darte la experiencia más realista en tu propio idioma."}),d.jsx(AT,{children:d.jsx(NT,{onClick:e,children:d.jsx(xi,{buttonText:"Cloná tu voz ",rightArrow:!0,handleClick:n})})})]})]})}gy.propTypes={openModal:H.func.isRequired};const IT=b.section`
  background-color: ${x.colors.white};
  color: ${x.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${x.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${x.bp.small}) {
    padding-top: 80px;
  }
`,LT=b.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${x.colors.lavenderfloral};
  background-color: ${x.colors.lavender};
`,zT=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`,xt=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${x.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
`,wt=b.audio`
  width: 330px;
`,St=b.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${x.colors.raisinblack};
`,Et=b.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${x.colors.electricindigo};
`;function MT(){return d.jsxs(IT,{children:[d.jsx(LT,{children:"Nuestras voces"}),d.jsxs(zT,{children:[d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/fem1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Ana"}),d.jsx(Et,{children:"Voz Real"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/fem1_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Ana"}),d.jsx(Et,{children:"Voz AI"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/mas1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Franco"}),d.jsx(Et,{children:"Voz Real"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/mas1_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Franco"}),d.jsx(Et,{children:"Voz AI"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/fem2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Paula"}),d.jsx(Et,{children:"Voz Real"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/fem2_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Paula"}),d.jsx(Et,{children:"Voz AI"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/mas2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Darío"}),d.jsx(Et,{children:"Voz Real"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/mas2_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Darío"}),d.jsx(Et,{children:"Voz AI"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/fem3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Luciana"}),d.jsx(Et,{children:"Voz Real"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/fem3_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Luciana"}),d.jsx(Et,{children:"Voz AI"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/mas3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Hernán"}),d.jsx(Et,{children:"Voz Real"})]}),d.jsxs(xt,{children:[d.jsxs(wt,{controls:!0,children:[d.jsx("source",{src:"audios-voice/mas3_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),d.jsx(St,{children:"Hernán"}),d.jsx(Et,{children:"Voz AI"})]})]})]})}const DT=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;function FT(){const[e,t]=T.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return d.jsxs(DT,{children:[d.jsx(zi,{}),d.jsx(gy,{openModal:n}),d.jsx(MT,{}),d.jsx(pf,{}),e&&d.jsx(mf,{closeModal:r,children:d.jsx(hf,{})}),d.jsx(Mi,{})]})}const UT=b.section`
  background-color: ${x.colors.onyx};
  color: ${x.colors.electricindigo};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${x.bp.large}) {
    margin-top: 100px;
  }
`,BT=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media (max-width: ${x.bp.large}) {
    width: 80%;
  }
`,HT=b.img`
  position: relative;
  width: 430px;
  @media (max-width: ${x.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 80vw;
  }
`,VT=b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${x.bp.large}) {
    width: 90%;
  }
`,WT=b.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${x.colors.onyx};
  letter-spacing: 1px;
`,QT=b.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 40px;
    line-height: 50px;
  }
`,xu=b.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;function qT(){return d.jsxs(UT,{children:[d.jsxs(VT,{children:[d.jsx(WT,{children:"*** ¿Porqué lo hacemos?"}),d.jsx(QT,{children:"Tecnología al servicio de la salud y la inclusión"}),d.jsx(xu,{children:"En Sintética, estamos convencidos de que la tecnología debe ser una fuerza impulsora para mejorar la vida de las personas en todo el mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos hacia una visión transformadora: empoderar a individuos de todas las capacidades y orígenes a través de soluciones innovadoras."}),d.jsx(xu,{children:"En la intersección de la vanguardia tecnológica y el bienestar humano, la inteligencia artificial ha emergido como un faro de posibilidades. Creemos en la importancia de la inclusión, en la eliminación de barreras y en la promoción de la igualdad en todos los niveles."}),d.jsx(xu,{children:"La clonación de voz no solo es un avance técnico, es un testimonio de nuestro compromiso de construir un mundo donde cada voz sea escuchada y respetada. Te invitamos a explorar nuestros proyectos y descubrir cómo la inteligencia artificial está transformando la salud de maneras que antes solo podíamos imaginar."})]}),d.jsx(BT,{children:d.jsx(HT,{src:"assets/ia-salud/logo_1.png",alt:"Logo IA-salud"})})]})}const YT=b.section`
  background-color: ${x.colors.onyx};
  color: ${x.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-top: 100px;
`,KT=b.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 40px;
  }
`,ma=b.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`,GT=b.iframe`
  width: 80vw;
  height: 50vw;
  padding-top: 50px;
`;function XT(){return d.jsxs(YT,{children:[d.jsx(KT,{children:"Proyecto Mi Identidad Vocal: programa ImpaCT.ar Ciencia y Tecnología - Ministerio de Salud de la Nación."}),d.jsx(ma,{children:"En las actividades cotidianas se hace evidente que la voz desempeña un papel indispensable. Desde la comunicación con el entorno familiar, hasta el desempeño académico y laboral. Prescindir de este instrumento significa una desventaja importante para el desarrollo de cualquier persona."}),d.jsx(ma,{children:"La clonación de voz emerge como una herramienta de gran potencial en la asistencia a personas afectadas por patologías de alta complejidad. Entre las condiciones que mayores limitaciones generan se encuentran la esclerosis lateral amiotrófica (ELA), la enfermedad de Huntington (EH), la apraxia, el accidente cerebrovascular (ACV) y el trastorno del espectro autista (TEA). Sin embargo, existen otro tipo de afecciones leves que pueden ser mitigadas con la tecnología propuesta, como por ejemplo, las intervenciones quirúrgicas en las cuerdas vocales y traqueotomías."}),d.jsx(ma,{children:"Mediante la aplicación de la clonación de voz, los usuarios podrán introducir mensajes en formato de texto, lo que conlleva a la producción de una representación auditiva por medio de una voz sintética. Esta tendrá como característica principal una gran similitud con su voz natural gracias al registro de audios de referencia y las tecnologías que se describen en este documento."}),d.jsx(ma,{children:"El software que desarrollamos permite reproducir cualquier texto que se ingrese, en forma de discurso y en español rioplatense. Esto representa un gran aporte en términos de inclusión para un porcentaje de la población que se ve imposibilitado en su desarrollo cotidiano."}),d.jsx(GT,{src:"https://www.youtube.com/embed/-KylP16dxj0?si=CDhRIkNFvzT6ZUnR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}const JT=b.section`
  background-color: ${x.colors.onyx};
  color: ${x.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`,ZT=b.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${x.colors.onyx};
  letter-spacing: 1px;
`,e4=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`,em=b.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${x.colors.seasalt};
  border-radius: 15px;
`,tm=b.img`
  width: 320px;
  height: 380px;
`;function t4(){return d.jsxs(JT,{children:[d.jsx(ZT,{children:"*** Prensa ***"}),d.jsxs(e4,{children:[d.jsx(em,{href:"https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/",children:d.jsx(tm,{src:"assets/ia-salud/nota1.png",alt:"Nota"})}),d.jsx(em,{href:"https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/",children:d.jsx(tm,{src:"assets/ia-salud/nota2.png",alt:"Nota"})})]})]})}const n4=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${x.colors.white};
`;function r4(){return d.jsxs(n4,{children:[d.jsx(zi,{}),d.jsx(qT,{}),d.jsx(XT,{}),d.jsx(t4,{}),d.jsx(pf,{}),d.jsx(Mi,{})]})}const o4=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${x.colors.white};
`,i4=b.div`
  display: flex;
  align-items: center;

  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,a4=b.img`
  width: 40vw;
  @media (max-width: ${x.bp.medium}) {
    width: 60vw;
  }
`,s4=b.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  h2 {
    font-size: 80px;
    font-weight: 400;
    line-height: 90px;
    padding-bottom: 4px;
    color: ${x.colors.electricindigo};
  }
  span {
    font-size: 40px;
    color: ${x.colors.raisinblack};
    padding-bottom: 19px;
  }

  @media (max-width: ${x.bp.medium}) {
    width: 90vw;
  }
  @media (max-width: ${x.bp["x-small"]}) {
    h2 {
      font-size: 50px;
      font-weight: 400;
      line-height: 30px;
      padding-bottom: 4px;
      color: ${x.colors.electricindigo};
    }
    span {
      font-size: 20px;
      color: ${x.colors.raisinblack};
      padding-bottom: 19px;
    }
  }
`,l4=b.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function u4(){return d.jsxs(o4,{children:[d.jsx(zi,{}),d.jsxs(i4,{children:[d.jsx(a4,{src:"assets/backgrounds/maintenance.svg"}),d.jsxs(s4,{children:[d.jsx("h2",{children:"¡Lo sentimos!"}),d.jsx("span",{children:"Sección en mantenimiento."}),d.jsx(l4,{children:d.jsx(Fr,{to:"/",buttonText:"Volver a Inicio"})})]})]}),d.jsx(Mi,{})]})}const c4=Yw`
  body {
    font-family: 'Montserrat', sans-serif;
    max-width: 100vw;
    scale: 1;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4 ,h5 {
    font-family: 'Quicksand', sans-serif;
  }
`,d4=b.section`
  background-color: ${x.colors.white};
  color: ${x.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  @media (max-width: ${x.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${x.bp.small}) {
    padding-top: 50px;
  }
`,f4=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${x.bp.large}) {
    width: auto;
  }
`,p4=b.img`
  width: 500px;
  @media (max-width: ${x.bp.large}) {
    width: 500px;
  }
  @media (max-width: ${x.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${x.bp.small}) {
    width: 300px;
  }
`,h4=b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${x.bp.large}) {
    width: 80%;
  }
`,m4=b.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${x.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${x.bp["x-small"]}) {
    font-size: 40px;
  }
`,g4=b.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${x.colors.gray};
`;function v4(){return d.jsxs(d4,{children:[d.jsx(f4,{children:d.jsx(p4,{src:"assets/home/card4.svg"})}),d.jsxs(h4,{children:[d.jsx(m4,{children:"¡Escuchá tu texto con acento rioplatense!"}),d.jsx(g4,{children:"Con nuestro text to speech, podrás escuchar tus textos con el acento más auténtico del Río de la Plata. Voces sintéticas que generan identidad."})]})]})}const y4=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  padding: 0px 0px 100px 0px;
`,nm=b.div`
  display: flex;
  flex-direction: row;

  background-color: ${x.colors.lavender};

  min-width: 80vw;
  border-radius: 8px;
  padding: 20px;

  @media (max-width: ${x.bp.medium}) {
    flex-direction: column;
  }
`,rm=b.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: ${x.bp.medium}) {
    width: 100%;
  }
`,om=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid ${x.colors.lavenderfloral};
  border-left: 1px solid ${x.colors.lavenderfloral};
  border-radius: 8px 0px 0px 0px;
  padding: 10px;

  @media (max-width: ${x.bp.medium}) {
    border-top: 1px solid ${x.colors.lavenderfloral};
    border-left: 1px solid ${x.colors.lavenderfloral};
    border-right: 1px solid ${x.colors.lavenderfloral};
    border-radius: 8px 8px 0px 0px;
  }
`,im=b.div`
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  border-radius: 0px 0px 0px 8px;
  border-top: 1px solid ${x.colors.lavenderfloral};
  border-bottom: 1px solid ${x.colors.lavenderfloral};
  border-left: 1px solid ${x.colors.lavenderfloral};

  @media (max-width: ${x.bp.medium}) {
    border-left: 1px solid ${x.colors.lavenderfloral};
    border-right: 1px solid ${x.colors.lavenderfloral};
    border-bottom: none;
    border-radius: 0px 0px 0px 0px;
    min-height: 0;
    padding: 20px 0px;
  }
`,am=b.textarea`
  height: 95%;
  width: 95%;
  line-height: 24px;
  border-radius: 8px;
  border: 2px solid ${x.colors.platinum};
  color: ${x.colors.onyx};
  box-sizing: border-box;
  padding: 20px;
  resize: none;
  &::placeholder {
    opacity: 1;
    color: ${x.colors.platinum};
  }

  @media (max-width: ${x.bp.medium}) {
    height: 400px;
  }
`,sm=b.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  border: 1px solid ${x.colors.lavenderfloral};
  border-radius: 0px 8px 8px 0px;
  position: relative;
  @media (max-width: ${x.bp.medium}) {
    width: auto;
    border-left: 1px solid ${x.colors.lavenderfloral};
    border-right: 1px solid ${x.colors.lavenderfloral};
    border-bottom: 1px solid ${x.colors.lavenderfloral};
    border-radius: 0px 0px 0px 0px;
    height: 120px;
  }
`,lm=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  gap: 20px;

  @media (max-width: ${x.bp.medium}) {
    flex-direction: row;
  }
`,um=b.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 2%;
  @media (max-width: ${x.bp.medium}) {
    bottom: 10%;
  }
`;b.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 20%;
`;b.span`
  font-size: 30px;
  color: ${x.colors.lavenderfloral};
`;const x4=b.div`
color: ${x.colors.onyx};
  display: flex;
  width: 100%;
  flex-direction: column;

  font-size: 12px;
  gap: 4px;
`,w4=b.select`
  background-color: ${x.colors.white};
  color: ${x.colors.gray};
  width: 100%;
  padding: 4px;
  border: 2px solid ${x.colors.platinum};
  border-radius: 4px;

`,Fo=({label:e,options:t,value:n,onChange:r})=>d.jsxs(x4,{children:[e&&d.jsx("label",{children:e}),d.jsxs(w4,{value:n,onChange:r,children:[d.jsx("option",{value:"Seleccionar...",disabled:!0,children:"Seleccionar"},"1000"),t.map((o,i)=>d.jsx("option",{value:o.value,children:o.label},i))]})]});Fo.propTypes={label:H.string,options:H.arrayOf(H.shape({value:H.string.isRequired,label:H.string.isRequired})).isRequired,value:H.string,onChange:H.func};const S4=b.div`
  --progress-bar-height: 4px;
  --thumb-width: 10px;
  --thumb-height: 10px;

  position: relative;
  width: 100%;

  &::before {
    content: "";
    background-color: ${e=>e.light?x.colors.gray:x.colors.white};
    width: 99%;
    height: calc(var(--progress-bar-height) - 1px);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`,E4=b.div`
  background-color: ${e=>e.light?x.colors.electricindigo:x.colors.lavenderfloral};
  width: 0%;
  height: var(--progress-bar-height);
  display: block;
  position: absolute;
  border-radius: 4px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`,b4=b.div`
  width: var(--thumb-width);
  height: var(--thumb-height);
  box-shadow: ${e=>e.light?x.colors.lavenderfloral:"0px 0px 5px rgba(0, 0, 0, 0.753)"};
  z-index: 3;
  background: ${e=>e.light?x.colors.gray:x.colors.white};
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translate(0%, -50%);
  pointer-events: none; /* Remove pointer events on thumb so user can click on the actual thumb beaneath it!  */
  user-select: none;
`,j4=b.input`
  height: 10px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
`;function vy({percentage:e=0,onChange:t,light:n}){const[r,o]=T.useState(0),[i,a]=T.useState(0),[s,l]=T.useState(0),u=T.useRef(),c=T.useRef();return T.useEffect(()=>{const f=u.current.getBoundingClientRect().width,m=c.current.getBoundingClientRect().width,g=m/100*e*-1,h=m+f/100*e-m/100*e;o(e),a(g),l(h)},[e]),d.jsxs(S4,{className:"slider-container",light:n,children:[d.jsx(E4,{className:"progress-bar-cover",style:{width:`${s}px`},light:n}),d.jsx(b4,{className:"thumb",ref:c,style:{left:`${r}%`,marginLeft:`${i}px`},light:n}),d.jsx(j4,{type:"range",value:r,ref:u,step:"0.01",className:"range",onChange:t})]})}vy.propTypes={percentage:H.number,onChange:H.func,light:H.bool};function C4(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"}}]})(e)}function T4(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 8.48216V15.518L15.0307 12.0001L9 8.48216ZM7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"}}]})(e)}function k4(e){return vt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"}}]})(e)}const $4=b.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,cm=b.div`
  font-size: 70%;
  font-weight: 200;
  color: ${e=>e.light?x.colors.gray:x.colors.lavender};
`,P4=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: ${e=>e.light?x.colors.gray:x.colors.white};
  font-size: 180%;
`;function yy({play:e,isPlaying:t,duration:n,currentTime:r,light:o}){function i(a){if(!a)return"00m 00s";let s=a,l=s/3600;s=s%3600;let u=parseInt(s/60);s=s%60;let c=parseInt(s);return c<10&&(c=`0${c}`),u<10&&(u=`0${u}`),parseInt(l,10)>0?`${parseInt(l,10)}h ${u}m ${c}s`:u==0?`00m ${c}s`:`${u}m ${c}s`}return d.jsxs($4,{className:"control-panel",children:[d.jsx(cm,{className:"timer",light:o,children:i(r)}),d.jsx(P4,{className:"btn-container",light:o,children:t?d.jsx(C4,{onClick:e,style:{cursor:"pointer"}}):d.jsx(T4,{onClick:e,style:{cursor:"pointer"}})}),d.jsx(cm,{className:"timer",light:o,children:i(n)})]})}yy.propTypes={isPlaying:H.bool,duration:H.number,currentTime:H.number,play:H.func,light:H.bool};const O4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 8px 0;
`,_4=b.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.light?x.colors.lavender:x.colors.onyx};
  border-radius: 4px;
  padding: 6px 8px 4px 8px;
`,R4=b(Er)`
  display: ${e=>e.link?"inline":"none"};
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${x.colors.white};
  border-radius: ${e=>e.square?"8px":"20px"};
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: ${x.colors.onyx};
  text-decoration: none;
  position: relative;

  &::before {
    border-radius: ${e=>e.square?"8px":"20px"};
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`,xy=({square:e=!1,link:t})=>{const n=()=>{};return d.jsx(R4,{to:"#",onClick:n,square:e,link:t,children:d.jsx(k4,{})})};xy.propTypes={square:H.bool,link:H.string};function Hc({light:e,audioSrc:t}){const[n,r]=T.useState(0),[o,i]=T.useState(!1),[a,s]=T.useState(0),[l,u]=T.useState(0),c=T.useRef(),f=y=>{const E=c.current;E.currentTime=E.duration/100*y.target.value,r(y.target.value)},m=()=>{const y=c.current;y.volume=.1,o?(i(!1),y.pause()):(i(!0),y.play())},g=y=>{const E=(y.currentTarget.currentTime/y.currentTarget.duration*100).toFixed(2),v=y.currentTarget.currentTime;r(+E),u(v.toFixed(2))},h=()=>{i(!1)};return d.jsxs(O4,{className:"app-container",light:e,children:[d.jsxs(_4,{className:"app-container",light:e,children:[d.jsx(vy,{percentage:n,onChange:f,light:e}),d.jsx("audio",{ref:c,onTimeUpdate:g,onLoadedData:y=>{s(y.currentTarget.duration.toFixed(2))},src:t,onEnded:h}),d.jsx(yy,{play:m,isPlaying:o,duration:a,currentTime:l,light:e})]}),d.jsx(xy,{square:!0,link:t!=""?t:""})]})}Hc.propTypes={light:H.bool,audioSrc:H.string};const dm=[{value:"option1",label:"Opción 1"},{value:"option2",label:"Opción 2"},{value:"option3",label:"Opción 3"}],fm=[{value:"españolAR",label:"Español AR"}];function A4(){const e=Qs(u=>u.user.token),t=vo(),[n,r]=T.useState(""),[o,i]=T.useState(""),a=u=>{r(u.target.value)},s=u=>{i(u.target.value)},l=()=>{t(Iv())};return d.jsx(y4,{children:e?d.jsxs(nm,{children:[d.jsxs(rm,{children:[d.jsx(om,{children:d.jsx(Hc,{light:!0,audioSrc:"/"})}),d.jsx(im,{children:d.jsx(am,{name:"message",placeholder:"Escribí acá el texto..."})})]}),d.jsxs(sm,{children:[d.jsxs(lm,{children:[d.jsx(Fo,{label:"Voz",options:dm,value:n,onChange:a}),d.jsx(Fo,{label:"Lenguaje",options:fm,value:o,onChange:s})]}),d.jsx(um,{children:d.jsx(xi,{buttonText:"Generar voz",square:!0})})]})]}):d.jsxs(nm,{children:[d.jsxs(rm,{children:[d.jsx(om,{children:d.jsx(Hc,{light:!0,audioSrc:""})}),d.jsx(im,{children:d.jsx(am,{name:"message",placeholder:"Escribí acá el texto..."})})]}),d.jsxs(sm,{children:[d.jsxs(lm,{children:[d.jsx(Fo,{label:"Voz",options:dm,value:n,onChange:a}),d.jsx(Fo,{label:"Lenguaje",options:fm,value:o,onChange:s})]}),d.jsx(um,{children:d.jsx(ar,{buttonText:"Iniciá sesión",square:!0,handleClick:l})})]})]})})}const N4=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;function I4(){return d.jsxs(N4,{children:[d.jsx(zi,{}),d.jsx(v4,{}),d.jsx(A4,{}),d.jsx(Mi,{})]})}const L4=b.div`
`;function z4(){const e=Qs(t=>t.modal.modalType);return T.useEffect(()=>{},[e]),d.jsxs(H2,{children:[d.jsx(mf,{}),d.jsx(c4,{}),d.jsx(L4,{children:d.jsxs(z2,{children:[d.jsx(Tr,{exact:!0,path:"/",element:d.jsx(TT,{})}),d.jsx(Tr,{exact:!0,path:"/VoiceCloning",element:d.jsx(FT,{})}),d.jsx(Tr,{exact:!0,path:"/IA",element:d.jsx(r4,{})}),d.jsx(Tr,{exact:!0,path:"/TTS",element:d.jsx(I4,{})}),d.jsx(Tr,{exact:!0,path:"/Maintenance",element:d.jsx(u4,{})})]})})]})}const M4=bE({reducer:{modal:NE,user:ij}});wu.createRoot(document.getElementById("root")).render(d.jsx(W.StrictMode,{children:d.jsx(BS,{store:M4,children:d.jsx(z4,{})})}));

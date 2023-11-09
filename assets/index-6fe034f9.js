function ry(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ji(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var em={exports:{}},ys={},tm={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),iy=Symbol.for("react.portal"),ay=Symbol.for("react.fragment"),sy=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),py=Symbol.for("react.memo"),hy=Symbol.for("react.lazy"),mf=Symbol.iterator;function my(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rm=Object.assign,om={};function uo(e,t,n){this.props=e,this.context=t,this.refs=om,this.updater=n||nm}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function im(){}im.prototype=uo.prototype;function Uc(e,t,n){this.props=e,this.context=t,this.refs=om,this.updater=n||nm}var Bc=Uc.prototype=new im;Bc.constructor=Uc;rm(Bc,uo.prototype);Bc.isPureReactComponent=!0;var gf=Array.isArray,am=Object.prototype.hasOwnProperty,Hc={current:null},sm={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)am.call(t,r)&&!sm.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ti,type:e,key:i,ref:a,props:o,_owner:Hc.current}}function gy(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function vy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vf=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vy(""+e.key):t.toString(36)}function fa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ti:case iy:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+xl(a,0):r,gf(o)?(n="",e!=null&&(n=e.replace(vf,"$&/")+"/"),fa(o,t,n,"",function(u){return u})):o!=null&&(Vc(o)&&(o=gy(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(vf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",gf(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+xl(i,s);a+=fa(i,t,n,l,o)}else if(l=my(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+xl(i,s++),a+=fa(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ii(e,t,n){if(e==null)return e;var r=[],o=0;return fa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},pa={transition:null},xy={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Hc};X.Children={map:Ii,forEach:function(e,t,n){Ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ii(e,function(){t++}),t},toArray:function(e){return Ii(e,function(t){return t})||[]},only:function(e){if(!Vc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=uo;X.Fragment=ay;X.Profiler=ly;X.PureComponent=Uc;X.StrictMode=sy;X.Suspense=fy;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Hc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)am.call(t,l)&&!sm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ti,type:e.type,key:o,ref:i,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:cy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uy,_context:e},e.Consumer=e};X.createElement=lm;X.createFactory=function(e){var t=lm.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:dy,render:e}};X.isValidElement=Vc;X.lazy=function(e){return{$$typeof:hy,_payload:{_status:-1,_result:e},_init:yy}};X.memo=function(e,t){return{$$typeof:py,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=pa.transition;pa.transition={};try{e()}finally{pa.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Ze.current.useCallback(e,t)};X.useContext=function(e){return Ze.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ze.current.useEffect(e,t)};X.useId=function(){return Ze.current.useId()};X.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ze.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};X.useRef=function(e){return Ze.current.useRef(e)};X.useState=function(e){return Ze.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ze.current.useTransition()};X.version="18.2.0";tm.exports=X;var k=tm.exports;const V=ji(k),wy=ry({__proto__:null,default:V},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=k,Ey=Symbol.for("react.element"),by=Symbol.for("react.fragment"),jy=Object.prototype.hasOwnProperty,Ty=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cy={key:!0,ref:!0,__self:!0,__source:!0};function um(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)jy.call(t,r)&&!Cy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ey,type:e,key:i,ref:a,props:o,_owner:Ty.current}}ys.Fragment=by;ys.jsx=um;ys.jsxs=um;em.exports=ys;var f=em.exports,yu={},cm={exports:{}},ht={},dm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var H=N.length;N.push(B);e:for(;0<H;){var le=H-1>>>1,he=N[le];if(0<o(he,B))N[le]=B,N[H]=he,H=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],H=N.pop();if(H!==B){N[0]=H;e:for(var le=0,he=N.length,lt=he>>>1;le<lt;){var Oe=2*(le+1)-1,vt=N[Oe],we=Oe+1,Pe=N[we];if(0>o(vt,H))we<he&&0>o(Pe,vt)?(N[le]=Pe,N[we]=H,le=we):(N[le]=vt,N[Oe]=H,le=Oe);else if(we<he&&0>o(Pe,H))N[le]=Pe,N[we]=H,le=we;else break e}}return B}function o(N,B){var H=N.sortIndex-B.sortIndex;return H!==0?H:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,g=3,v=!1,h=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function w(N){if(y=!1,x(N),!h)if(n(l)!==null)h=!0,ae(b);else{var B=n(u);B!==null&&pe(w,B.startTime-N)}}function b(N,B){h=!1,y&&(y=!1,m($),$=-1),v=!0;var H=g;try{for(x(B),d=n(l);d!==null&&(!(d.expirationTime>B)||N&&!D());){var le=d.callback;if(typeof le=="function"){d.callback=null,g=d.priorityLevel;var he=le(d.expirationTime<=B);B=e.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&r(l),x(B)}else r(l);d=n(l)}if(d!==null)var lt=!0;else{var Oe=n(u);Oe!==null&&pe(w,Oe.startTime-B),lt=!1}return lt}finally{d=null,g=H,v=!1}}var C=!1,T=null,$=-1,O=5,R=-1;function D(){return!(e.unstable_now()-R<O)}function U(){if(T!==null){var N=e.unstable_now();R=N;var B=!0;try{B=T(!0,N)}finally{B?F():(C=!1,T=null)}}else C=!1}var F;if(typeof p=="function")F=function(){p(U)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,xe=J.port2;J.port1.onmessage=U,F=function(){xe.postMessage(null)}}else F=function(){E(U,0)};function ae(N){T=N,C||(C=!0,F())}function pe(N,B){$=E(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,ae(b))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var H=g;g=B;try{return N()}finally{g=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=g;g=N;try{return B()}finally{g=H}},e.unstable_scheduleCallback=function(N,B,H){var le=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?le+H:le):H=le,N){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=H+he,N={id:c++,callback:B,priorityLevel:N,startTime:H,expirationTime:he,sortIndex:-1},H>le?(N.sortIndex=H,t(u,N),n(l)===null&&N===n(u)&&(y?(m($),$=-1):y=!0,pe(w,H-le))):(N.sortIndex=he,t(l,N),h||v||(h=!0,ae(b))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var B=g;return function(){var H=g;g=B;try{return N.apply(this,arguments)}finally{g=H}}}})(fm);dm.exports=fm;var ky=dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=k,ft=ky;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hm=new Set,Xo={};function vr(e,t){qr(e,t),qr(e+"Capture",t)}function qr(e,t){for(Xo[e]=t,e=0;e<t.length;e++)hm.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,Py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},xf={};function $y(e){return xu.call(xf,e)?!0:xu.call(yf,e)?!1:Py.test(e)?xf[e]=!0:(yf[e]=!0,!1)}function Oy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _y(e,t,n,r){if(t===null||typeof t>"u"||Oy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function Qc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wc,Qc);Ve[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wc,Qc);Ve[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wc,Qc);Ve[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yc(e,t,n,r){var o=Ve.hasOwnProperty(t)?Ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_y(t,n,o,r)&&(n=null),r||o===null?$y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mn=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Li=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Gc=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),vm=Symbol.for("react.offscreen"),wf=Symbol.iterator;function yo(e){return e===null||typeof e!="object"?null:(e=wf&&e[wf]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,wl;function _o(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var Sl=!1;function El(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_o(e):""}function Ry(e){switch(e.tag){case 5:return _o(e.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function bu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case jr:return"Portal";case wu:return"Profiler";case qc:return"StrictMode";case Su:return"Suspense";case Eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gm:return(e.displayName||"Context")+".Consumer";case mm:return(e._context.displayName||"Context")+".Provider";case Kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gc:return t=e.displayName||null,t!==null?t:bu(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return bu(e(t))}catch{}}return null}function Ay(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bu(t);case 8:return t===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ny(e){var t=ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=Ny(e))}function xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ju(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wm(e,t){t=t.checked,t!=null&&Yc(e,"checked",t,!1)}function Tu(e,t){wm(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ef(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cu(e,t,n){(t!=="number"||Aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ro=Array.isArray;function Dr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ku(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Ro(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function Sm(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zi,bm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zi=zi||document.createElement("div"),zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iy=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(e){Iy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Do[t]=Do[e]})});function jm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Do.hasOwnProperty(e)&&Do[e]?(""+t).trim():t+"px"}function Tm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ly=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(e,t){if(t){if(Ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function Xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ru=null,Fr=null,Ur=null;function Tf(e){if(e=Pi(e)){if(typeof Ru!="function")throw Error(A(280));var t=e.stateNode;t&&(t=bs(t),Ru(e.stateNode,e.type,t))}}function Cm(e){Fr?Ur?Ur.push(e):Ur=[e]:Fr=e}function km(){if(Fr){var e=Fr,t=Ur;if(Ur=Fr=null,Tf(e),t)for(e=0;e<t.length;e++)Tf(t[e])}}function Pm(e,t){return e(t)}function $m(){}var bl=!1;function Om(e,t,n){if(bl)return e(t,n);bl=!0;try{return Pm(e,t,n)}finally{bl=!1,(Fr!==null||Ur!==null)&&($m(),km())}}function Zo(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Au=!1;if(cn)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Au=!1}function My(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,Na=null,Ia=!1,Nu=null,zy={onError:function(e){Fo=!0,Na=e}};function Dy(e,t,n,r,o,i,a,s,l){Fo=!1,Na=null,My.apply(zy,arguments)}function Fy(e,t,n,r,o,i,a,s,l){if(Dy.apply(this,arguments),Fo){if(Fo){var u=Na;Fo=!1,Na=null}else throw Error(A(198));Ia||(Ia=!0,Nu=u)}}function yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cf(e){if(yr(e)!==e)throw Error(A(188))}function Uy(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Cf(o),e;if(i===r)return Cf(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Rm(e){return e=Uy(e),e!==null?Am(e):null}function Am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Am(e);if(t!==null)return t;e=e.sibling}return null}var Nm=ft.unstable_scheduleCallback,kf=ft.unstable_cancelCallback,By=ft.unstable_shouldYield,Hy=ft.unstable_requestPaint,$e=ft.unstable_now,Vy=ft.unstable_getCurrentPriorityLevel,Jc=ft.unstable_ImmediatePriority,Im=ft.unstable_UserBlockingPriority,La=ft.unstable_NormalPriority,Wy=ft.unstable_LowPriority,Lm=ft.unstable_IdlePriority,xs=null,Kt=null;function Qy(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Ky,Yy=Math.log,qy=Math.LN2;function Ky(e){return e>>>=0,e===0?32:31-(Yy(e)/qy|0)|0}var Di=64,Fi=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Ao(s):(i&=a,i!==0&&(r=Ao(i)))}else a=n&~o,a!==0?r=Ao(a):i!==0&&(r=Ao(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),o=1<<n,r|=e[n],t&=~o;return r}function Gy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Dt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=Gy(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mm(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function Jy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Dt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function zm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dm,ed,Fm,Um,Bm,Lu=!1,Ui=[],_n=null,Rn=null,An=null,ei=new Map,ti=new Map,jn=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(t.pointerId)}}function wo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Pi(t),t!==null&&ed(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function e1(e,t,n,r,o){switch(t){case"focusin":return _n=wo(_n,e,t,n,r,o),!0;case"dragenter":return Rn=wo(Rn,e,t,n,r,o),!0;case"mouseover":return An=wo(An,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ei.set(i,wo(ei.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ti.set(i,wo(ti.get(i)||null,e,t,n,r,o)),!0}return!1}function Hm(e){var t=nr(e.target);if(t!==null){var n=yr(t);if(n!==null){if(t=n.tag,t===13){if(t=_m(n),t!==null){e.blockedOn=t,Bm(e.priority,function(){Fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_u=r,n.target.dispatchEvent(r),_u=null}else return t=Pi(n),t!==null&&ed(t),e.blockedOn=n,!1;t.shift()}return!0}function $f(e,t,n){ha(e)&&n.delete(t)}function t1(){Lu=!1,_n!==null&&ha(_n)&&(_n=null),Rn!==null&&ha(Rn)&&(Rn=null),An!==null&&ha(An)&&(An=null),ei.forEach($f),ti.forEach($f)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Lu||(Lu=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,t1)))}function ni(e){function t(o){return So(o,e)}if(0<Ui.length){So(Ui[0],e);for(var n=1;n<Ui.length;n++){var r=Ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&So(_n,e),Rn!==null&&So(Rn,e),An!==null&&So(An,e),ei.forEach(t),ti.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&jn.shift()}var Br=mn.ReactCurrentBatchConfig,za=!0;function n1(e,t,n,r){var o=ce,i=Br.transition;Br.transition=null;try{ce=1,td(e,t,n,r)}finally{ce=o,Br.transition=i}}function r1(e,t,n,r){var o=ce,i=Br.transition;Br.transition=null;try{ce=4,td(e,t,n,r)}finally{ce=o,Br.transition=i}}function td(e,t,n,r){if(za){var o=Mu(e,t,n,r);if(o===null)Nl(e,t,r,Da,n),Pf(e,r);else if(e1(o,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<Zy.indexOf(e)){for(;o!==null;){var i=Pi(o);if(i!==null&&Dm(i),i=Mu(e,t,n,r),i===null&&Nl(e,t,r,Da,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var Da=null;function Mu(e,t,n,r){if(Da=null,e=Xc(r),e=nr(e),e!==null)if(t=yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Da=e,null}function Vm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case Jc:return 1;case Im:return 4;case La:case Wy:return 16;case Lm:return 536870912;default:return 16}default:return 16}}var kn=null,nd=null,ma=null;function Wm(){if(ma)return ma;var e,t=nd,n=t.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ma=o.slice(e,1<r?1-r:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Of(){return!1}function mt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bi:Of,this.isPropagationStopped=Of,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=mt(co),ki=Ce({},co,{view:0,detail:0}),o1=mt(ki),Tl,Cl,Eo,ws=Ce({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Eo&&(Eo&&e.type==="mousemove"?(Tl=e.screenX-Eo.screenX,Cl=e.screenY-Eo.screenY):Cl=Tl=0,Eo=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),_f=mt(ws),i1=Ce({},ws,{dataTransfer:0}),a1=mt(i1),s1=Ce({},ki,{relatedTarget:0}),kl=mt(s1),l1=Ce({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=mt(l1),c1=Ce({},co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d1=mt(c1),f1=Ce({},co,{data:0}),Rf=mt(f1),p1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m1[e])?!!t[e]:!1}function od(){return g1}var v1=Ce({},ki,{key:function(e){if(e.key){var t=p1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y1=mt(v1),x1=Ce({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=mt(x1),w1=Ce({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),S1=mt(w1),E1=Ce({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),b1=mt(E1),j1=Ce({},ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T1=mt(j1),C1=[9,13,27,32],id=cn&&"CompositionEvent"in window,Uo=null;cn&&"documentMode"in document&&(Uo=document.documentMode);var k1=cn&&"TextEvent"in window&&!Uo,Qm=cn&&(!id||Uo&&8<Uo&&11>=Uo),Nf=String.fromCharCode(32),If=!1;function Ym(e,t){switch(e){case"keyup":return C1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function P1(e,t){switch(e){case"compositionend":return qm(t);case"keypress":return t.which!==32?null:(If=!0,Nf);case"textInput":return e=t.data,e===Nf&&If?null:e;default:return null}}function $1(e,t){if(Cr)return e==="compositionend"||!id&&Ym(e,t)?(e=Wm(),ma=nd=kn=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qm&&t.locale!=="ko"?null:t.data;default:return null}}var O1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!O1[e.type]:t==="textarea"}function Km(e,t,n,r){Cm(r),t=Fa(t,"onChange"),0<t.length&&(n=new rd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bo=null,ri=null;function _1(e){ag(e,0)}function Ss(e){var t=$r(e);if(xm(t))return e}function R1(e,t){if(e==="change")return t}var Gm=!1;if(cn){var Pl;if(cn){var $l="oninput"in document;if(!$l){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),$l=typeof Mf.oninput=="function"}Pl=$l}else Pl=!1;Gm=Pl&&(!document.documentMode||9<document.documentMode)}function zf(){Bo&&(Bo.detachEvent("onpropertychange",Xm),ri=Bo=null)}function Xm(e){if(e.propertyName==="value"&&Ss(ri)){var t=[];Km(t,ri,e,Xc(e)),Om(_1,t)}}function A1(e,t,n){e==="focusin"?(zf(),Bo=t,ri=n,Bo.attachEvent("onpropertychange",Xm)):e==="focusout"&&zf()}function N1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(ri)}function I1(e,t){if(e==="click")return Ss(t)}function L1(e,t){if(e==="input"||e==="change")return Ss(t)}function M1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:M1;function oi(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xu.call(t,o)||!Bt(e[o],t[o]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ff(e,t){var n=Df(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Df(n)}}function Jm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zm(){for(var e=window,t=Aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Aa(e.document)}return t}function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function z1(e){var t=Zm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jm(n.ownerDocument.documentElement,n)){if(r!==null&&ad(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ff(n,i);var a=Ff(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D1=cn&&"documentMode"in document&&11>=document.documentMode,kr=null,zu=null,Ho=null,Du=!1;function Uf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||kr==null||kr!==Aa(r)||(r=kr,"selectionStart"in r&&ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&oi(Ho,r)||(Ho=r,r=Fa(zu,"onSelect"),0<r.length&&(t=new rd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Ol={},eg={};cn&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Es(e){if(Ol[e])return Ol[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eg)return Ol[e]=t[n];return e}var tg=Es("animationend"),ng=Es("animationiteration"),rg=Es("animationstart"),og=Es("transitionend"),ig=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,t){ig.set(e,t),vr(t,[e])}for(var _l=0;_l<Bf.length;_l++){var Rl=Bf[_l],F1=Rl.toLowerCase(),U1=Rl[0].toUpperCase()+Rl.slice(1);qn(F1,"on"+U1)}qn(tg,"onAnimationEnd");qn(ng,"onAnimationIteration");qn(rg,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(og,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Hf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fy(r,t,void 0,e),e.currentTarget=null}function ag(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Hf(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Hf(o,s,u),i=l}}}if(Ia)throw e=Nu,Ia=!1,Nu=null,e}function ge(e,t){var n=t[Vu];n===void 0&&(n=t[Vu]=new Set);var r=e+"__bubble";n.has(r)||(sg(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),sg(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Vi]){e[Vi]=!0,hm.forEach(function(n){n!=="selectionchange"&&(B1.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Al("selectionchange",!1,t))}}function sg(e,t,n,r){switch(Vm(t)){case 1:var o=n1;break;case 4:o=r1;break;default:o=td}n=o.bind(null,t,n,e),o=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=nr(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Om(function(){var u=i,c=Xc(n),d=[];e:{var g=ig.get(e);if(g!==void 0){var v=rd,h=e;switch(e){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":v=y1;break;case"focusin":h="focus",v=kl;break;case"focusout":h="blur",v=kl;break;case"beforeblur":case"afterblur":v=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=S1;break;case tg:case ng:case rg:v=u1;break;case og:v=b1;break;case"scroll":v=o1;break;case"wheel":v=T1;break;case"copy":case"cut":case"paste":v=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Af}var y=(t&4)!==0,E=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var p=u,x;p!==null;){x=p;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Zo(p,m),w!=null&&y.push(ai(p,w,x)))),E)break;p=p.return}0<y.length&&(g=new v(g,h,null,n,c),d.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==_u&&(h=n.relatedTarget||n.fromElement)&&(nr(h)||h[dn]))break e;if((v||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,v?(h=n.relatedTarget||n.toElement,v=u,h=h?nr(h):null,h!==null&&(E=yr(h),h!==E||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=u),v!==h)){if(y=_f,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Af,w="onPointerLeave",m="onPointerEnter",p="pointer"),E=v==null?g:$r(v),x=h==null?g:$r(h),g=new y(w,p+"leave",v,n,c),g.target=E,g.relatedTarget=x,w=null,nr(c)===u&&(y=new y(m,p+"enter",h,n,c),y.target=x,y.relatedTarget=E,w=y),E=w,v&&h)t:{for(y=v,m=h,p=0,x=y;x;x=Sr(x))p++;for(x=0,w=m;w;w=Sr(w))x++;for(;0<p-x;)y=Sr(y),p--;for(;0<x-p;)m=Sr(m),x--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Sr(y),m=Sr(m)}y=null}else y=null;v!==null&&Vf(d,g,v,y,!1),h!==null&&E!==null&&Vf(d,E,h,y,!0)}}e:{if(g=u?$r(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var b=R1;else if(Lf(g))if(Gm)b=L1;else{b=N1;var C=A1}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=I1);if(b&&(b=b(e,u))){Km(d,b,n,c);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Cu(g,"number",g.value)}switch(C=u?$r(u):window,e){case"focusin":(Lf(C)||C.contentEditable==="true")&&(kr=C,zu=u,Ho=null);break;case"focusout":Ho=zu=kr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Uf(d,n,c);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Uf(d,n,c)}var T;if(id)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Cr?Ym(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Qm&&n.locale!=="ko"&&(Cr||$!=="onCompositionStart"?$==="onCompositionEnd"&&Cr&&(T=Wm()):(kn=c,nd="value"in kn?kn.value:kn.textContent,Cr=!0)),C=Fa(u,$),0<C.length&&($=new Rf($,e,null,n,c),d.push({event:$,listeners:C}),T?$.data=T:(T=qm(n),T!==null&&($.data=T)))),(T=k1?P1(e,n):$1(e,n))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(c=new Rf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}ag(d,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zo(e,n),i!=null&&r.unshift(ai(e,i,o)),i=Zo(e,t),i!=null&&r.push(ai(e,i,o))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vf(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Zo(n,i),l!=null&&a.unshift(ai(n,l,s))):o||(l=Zo(n,i),l!=null&&a.push(ai(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var H1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(H1,`
`).replace(V1,"")}function Wi(e,t,n){if(t=Wf(t),Wf(e)!==t&&n)throw Error(A(425))}function Ua(){}var Fu=null,Uu=null;function Bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Q1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Y1)}:Hu;function Y1(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ni(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Yt="__reactFiber$"+fo,si="__reactProps$"+fo,dn="__reactContainer$"+fo,Vu="__reactEvents$"+fo,q1="__reactListeners$"+fo,K1="__reactHandles$"+fo;function nr(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yf(e);e!==null;){if(n=e[Yt])return n;e=Yf(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[Yt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function bs(e){return e[si]||null}var Wu=[],Or=-1;function Kn(e){return{current:e}}function ye(e){0>Or||(e.current=Wu[Or],Wu[Or]=null,Or--)}function me(e,t){Or++,Wu[Or]=e.current,e.current=t}var Wn={},Ge=Kn(Wn),it=Kn(!1),cr=Wn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function Ba(){ye(it),ye(Ge)}function qf(e,t,n){if(Ge.current!==Wn)throw Error(A(168));me(Ge,t),me(it,n)}function lg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,Ay(e)||"Unknown",o));return Ce({},n,r)}function Ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,cr=Ge.current,me(Ge,e),me(it,it.current),!0}function Kf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=lg(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,ye(it),ye(Ge),me(Ge,e)):ye(it),me(it,n)}var on=null,js=!1,Ll=!1;function ug(e){on===null?on=[e]:on.push(e)}function G1(e){js=!0,ug(e)}function Gn(){if(!Ll&&on!==null){Ll=!0;var e=0,t=ce;try{var n=on;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,js=!1}catch(o){throw on!==null&&(on=on.slice(e+1)),Nm(Jc,Gn),o}finally{ce=t,Ll=!1}}return null}var _r=[],Rr=0,Va=null,Wa=0,bt=[],jt=0,dr=null,an=1,sn="";function Jn(e,t){_r[Rr++]=Wa,_r[Rr++]=Va,Va=e,Wa=t}function cg(e,t,n){bt[jt++]=an,bt[jt++]=sn,bt[jt++]=dr,dr=e;var r=an;e=sn;var o=32-Dt(r)-1;r&=~(1<<o),n+=1;var i=32-Dt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,an=1<<32-Dt(t)+o|n<<o|r,sn=i+e}else an=1<<i|n<<o|r,sn=e}function sd(e){e.return!==null&&(Jn(e,1),cg(e,1,0))}function ld(e){for(;e===Va;)Va=_r[--Rr],_r[Rr]=null,Wa=_r[--Rr],_r[Rr]=null;for(;e===dr;)dr=bt[--jt],bt[jt]=null,sn=bt[--jt],bt[jt]=null,an=bt[--jt],bt[jt]=null}var dt=null,ct=null,be=!1,Lt=null;function dg(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:an,overflow:sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function Qu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yu(e){if(be){var t=ct;if(t){var n=t;if(!Gf(e,t)){if(Qu(e))throw Error(A(418));t=Nn(n.nextSibling);var r=dt;t&&Gf(e,t)?dg(r,n):(e.flags=e.flags&-4097|2,be=!1,dt=e)}}else{if(Qu(e))throw Error(A(418));e.flags=e.flags&-4097|2,be=!1,dt=e}}}function Xf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Qi(e){if(e!==dt)return!1;if(!be)return Xf(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bu(e.type,e.memoizedProps)),t&&(t=ct)){if(Qu(e))throw fg(),Error(A(418));for(;t;)dg(e,t),t=Nn(t.nextSibling)}if(Xf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?Nn(e.stateNode.nextSibling):null;return!0}function fg(){for(var e=ct;e;)e=Nn(e.nextSibling)}function Gr(){ct=dt=null,be=!1}function ud(e){Lt===null?Lt=[e]:Lt.push(e)}var X1=mn.ReactCurrentBatchConfig;function Nt(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qa=Kn(null),Ya=null,Ar=null,cd=null;function dd(){cd=Ar=Ya=null}function fd(e){var t=Qa.current;ye(Qa),e._currentValue=t}function qu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hr(e,t){Ya=e,cd=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(cd!==e)if(e={context:e,memoizedValue:t,next:null},Ar===null){if(Ya===null)throw Error(A(308));Ar=e,Ya.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return t}var rr=null;function pd(e){rr===null?rr=[e]:rr.push(e)}function pg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,pd(t)):(n.next=o.next,o.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function hd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fn(e,n)}return o=r.interleaved,o===null?(t.next=t,pd(r)):(t.next=o.next,o.next=t),r.interleaved=t,fn(e,n)}function va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zc(e,n)}}function Jf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qa(e,t,n,r){var o=e.updateQueue;bn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,c=u=l=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,y=s;switch(g=t,v=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){d=h.call(v,d,g);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,g=typeof h=="function"?h.call(v,d,g):h,g==null)break e;d=Ce({},d,g);break e;case 2:bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,a|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=d}}function Zf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var mg=new pm.Component().refs;function Ku(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),o=Mn(e),i=ln(r,o);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ft(t,e,o,r),va(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),o=Mn(e),i=ln(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ft(t,e,o,r),va(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Mn(e),o=ln(n,r);o.tag=2,t!=null&&(o.callback=t),t=In(e,o,r),t!==null&&(Ft(t,e,r,n),va(t,e,r))}};function ep(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!oi(n,r)||!oi(o,i):!0}function gg(e,t,n){var r=!1,o=Wn,i=t.contextType;return typeof i=="object"&&i!==null?i=Pt(i):(o=at(t)?cr:Ge.current,r=t.contextTypes,i=(r=r!=null)?Kr(e,o):Wn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function tp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function Gu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=mg,hd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Pt(i):(i=at(t)?cr:Ge.current,o.context=Kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ku(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ts.enqueueReplaceState(o,o.state,null),qa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function bo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===mg&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function np(e){var t=e._init;return t(e._payload)}function vg(e){function t(m,p){if(e){var x=m.deletions;x===null?(m.deletions=[p],m.flags|=16):x.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=zn(m,p),m.index=0,m.sibling=null,m}function i(m,p,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<p?(m.flags|=2,p):x):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,x,w){return p===null||p.tag!==6?(p=Hl(x,m.mode,w),p.return=m,p):(p=o(p,x),p.return=m,p)}function l(m,p,x,w){var b=x.type;return b===Tr?c(m,p,x.props.children,w,x.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===En&&np(b)===p.type)?(w=o(p,x.props),w.ref=bo(m,p,x),w.return=m,w):(w=ba(x.type,x.key,x.props,null,m.mode,w),w.ref=bo(m,p,x),w.return=m,w)}function u(m,p,x,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Vl(x,m.mode,w),p.return=m,p):(p=o(p,x.children||[]),p.return=m,p)}function c(m,p,x,w,b){return p===null||p.tag!==7?(p=sr(x,m.mode,w,b),p.return=m,p):(p=o(p,x),p.return=m,p)}function d(m,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Hl(""+p,m.mode,x),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Li:return x=ba(p.type,p.key,p.props,null,m.mode,x),x.ref=bo(m,null,p),x.return=m,x;case jr:return p=Vl(p,m.mode,x),p.return=m,p;case En:var w=p._init;return d(m,w(p._payload),x)}if(Ro(p)||yo(p))return p=sr(p,m.mode,x,null),p.return=m,p;Yi(m,p)}return null}function g(m,p,x,w){var b=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:s(m,p,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Li:return x.key===b?l(m,p,x,w):null;case jr:return x.key===b?u(m,p,x,w):null;case En:return b=x._init,g(m,p,b(x._payload),w)}if(Ro(x)||yo(x))return b!==null?null:c(m,p,x,w,null);Yi(m,x)}return null}function v(m,p,x,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,s(p,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Li:return m=m.get(w.key===null?x:w.key)||null,l(p,m,w,b);case jr:return m=m.get(w.key===null?x:w.key)||null,u(p,m,w,b);case En:var C=w._init;return v(m,p,x,C(w._payload),b)}if(Ro(w)||yo(w))return m=m.get(x)||null,c(p,m,w,b,null);Yi(p,w)}return null}function h(m,p,x,w){for(var b=null,C=null,T=p,$=p=0,O=null;T!==null&&$<x.length;$++){T.index>$?(O=T,T=null):O=T.sibling;var R=g(m,T,x[$],w);if(R===null){T===null&&(T=O);break}e&&T&&R.alternate===null&&t(m,T),p=i(R,p,$),C===null?b=R:C.sibling=R,C=R,T=O}if($===x.length)return n(m,T),be&&Jn(m,$),b;if(T===null){for(;$<x.length;$++)T=d(m,x[$],w),T!==null&&(p=i(T,p,$),C===null?b=T:C.sibling=T,C=T);return be&&Jn(m,$),b}for(T=r(m,T);$<x.length;$++)O=v(T,m,$,x[$],w),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?$:O.key),p=i(O,p,$),C===null?b=O:C.sibling=O,C=O);return e&&T.forEach(function(D){return t(m,D)}),be&&Jn(m,$),b}function y(m,p,x,w){var b=yo(x);if(typeof b!="function")throw Error(A(150));if(x=b.call(x),x==null)throw Error(A(151));for(var C=b=null,T=p,$=p=0,O=null,R=x.next();T!==null&&!R.done;$++,R=x.next()){T.index>$?(O=T,T=null):O=T.sibling;var D=g(m,T,R.value,w);if(D===null){T===null&&(T=O);break}e&&T&&D.alternate===null&&t(m,T),p=i(D,p,$),C===null?b=D:C.sibling=D,C=D,T=O}if(R.done)return n(m,T),be&&Jn(m,$),b;if(T===null){for(;!R.done;$++,R=x.next())R=d(m,R.value,w),R!==null&&(p=i(R,p,$),C===null?b=R:C.sibling=R,C=R);return be&&Jn(m,$),b}for(T=r(m,T);!R.done;$++,R=x.next())R=v(T,m,$,R.value,w),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?$:R.key),p=i(R,p,$),C===null?b=R:C.sibling=R,C=R);return e&&T.forEach(function(U){return t(m,U)}),be&&Jn(m,$),b}function E(m,p,x,w){if(typeof x=="object"&&x!==null&&x.type===Tr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Li:e:{for(var b=x.key,C=p;C!==null;){if(C.key===b){if(b=x.type,b===Tr){if(C.tag===7){n(m,C.sibling),p=o(C,x.props.children),p.return=m,m=p;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===En&&np(b)===C.type){n(m,C.sibling),p=o(C,x.props),p.ref=bo(m,C,x),p.return=m,m=p;break e}n(m,C);break}else t(m,C);C=C.sibling}x.type===Tr?(p=sr(x.props.children,m.mode,w,x.key),p.return=m,m=p):(w=ba(x.type,x.key,x.props,null,m.mode,w),w.ref=bo(m,p,x),w.return=m,m=w)}return a(m);case jr:e:{for(C=x.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(m,p.sibling),p=o(p,x.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Vl(x,m.mode,w),p.return=m,m=p}return a(m);case En:return C=x._init,E(m,p,C(x._payload),w)}if(Ro(x))return h(m,p,x,w);if(yo(x))return y(m,p,x,w);Yi(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,x),p.return=m,m=p):(n(m,p),p=Hl(x,m.mode,w),p.return=m,m=p),a(m)):n(m,p)}return E}var Xr=vg(!0),yg=vg(!1),$i={},Gt=Kn($i),li=Kn($i),ui=Kn($i);function or(e){if(e===$i)throw Error(A(174));return e}function md(e,t){switch(me(ui,t),me(li,e),me(Gt,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pu(t,e)}ye(Gt),me(Gt,t)}function Jr(){ye(Gt),ye(li),ye(ui)}function xg(e){or(ui.current);var t=or(Gt.current),n=Pu(t,e.type);t!==n&&(me(li,e),me(Gt,n))}function gd(e){li.current===e&&(ye(Gt),ye(li))}var je=Kn(0);function Ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function vd(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var ya=mn.ReactCurrentDispatcher,zl=mn.ReactCurrentBatchConfig,fr=0,Te=null,Ie=null,ze=null,Ga=!1,Vo=!1,ci=0,J1=0;function We(){throw Error(A(321))}function yd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function xd(e,t,n,r,o,i){if(fr=i,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ya.current=e===null||e.memoizedState===null?nx:rx,e=n(r,o),Vo){i=0;do{if(Vo=!1,ci=0,25<=i)throw Error(A(301));i+=1,ze=Ie=null,t.updateQueue=null,ya.current=ox,e=n(r,o)}while(Vo)}if(ya.current=Xa,t=Ie!==null&&Ie.next!==null,fr=0,ze=Ie=Te=null,Ga=!1,t)throw Error(A(300));return e}function wd(){var e=ci!==0;return ci=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=e:ze=ze.next=e,ze}function $t(){if(Ie===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=ze===null?Te.memoizedState:ze.next;if(t!==null)ze=t,Ie=e;else{if(e===null)throw Error(A(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ze===null?Te.memoizedState=ze=e:ze=ze.next=e}return ze}function di(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=$t(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,Te.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Bt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Te.lanes|=i,pr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=$t(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Bt(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wg(){}function Sg(e,t){var n=Te,r=$t(),o=t(),i=!Bt(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,Sd(jg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,fi(9,bg.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(A(349));fr&30||Eg(n,t,o)}return o}function Eg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bg(e,t,n,r){t.value=n,t.getSnapshot=r,Tg(t)&&Cg(e)}function jg(e,t,n){return n(function(){Tg(t)&&Cg(e)})}function Tg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Cg(e){var t=fn(e,1);t!==null&&Ft(t,e,1,-1)}function rp(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=tx.bind(null,Te,e),[t.memoizedState,e]}function fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kg(){return $t().memoizedState}function xa(e,t,n,r){var o=Wt();Te.flags|=e,o.memoizedState=fi(1|t,n,void 0,r===void 0?null:r)}function Cs(e,t,n,r){var o=$t();r=r===void 0?null:r;var i=void 0;if(Ie!==null){var a=Ie.memoizedState;if(i=a.destroy,r!==null&&yd(r,a.deps)){o.memoizedState=fi(t,n,i,r);return}}Te.flags|=e,o.memoizedState=fi(1|t,n,i,r)}function op(e,t){return xa(8390656,8,e,t)}function Sd(e,t){return Cs(2048,8,e,t)}function Pg(e,t){return Cs(4,2,e,t)}function $g(e,t){return Cs(4,4,e,t)}function Og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _g(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4,4,Og.bind(null,t,e),n)}function Ed(){}function Rg(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ag(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ng(e,t,n){return fr&21?(Bt(n,t)||(n=Mm(),Te.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function Z1(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{ce=n,zl.transition=r}}function Ig(){return $t().memoizedState}function ex(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lg(e))Mg(t,n);else if(n=pg(e,t,n,r),n!==null){var o=Je();Ft(n,e,r,o),zg(n,t,r)}}function tx(e,t,n){var r=Mn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lg(e))Mg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Bt(s,a)){var l=t.interleaved;l===null?(o.next=o,pd(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=pg(e,t,o,r),n!==null&&(o=Je(),Ft(n,e,r,o),zg(n,t,r))}}function Lg(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Mg(e,t){Vo=Ga=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zc(e,n)}}var Xa={readContext:Pt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},nx={readContext:Pt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:op,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xa(4194308,4,Og.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xa(4194308,4,e,t)},useInsertionEffect:function(e,t){return xa(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ex.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:rp,useDebugValue:Ed,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=rp(!1),t=e[0];return e=Z1.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Te,o=Wt();if(be){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Fe===null)throw Error(A(349));fr&30||Eg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,op(jg.bind(null,r,i,e),[e]),r.flags|=2048,fi(9,bg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Fe.identifierPrefix;if(be){var n=sn,r=an;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=J1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rx={readContext:Pt,useCallback:Rg,useContext:Pt,useEffect:Sd,useImperativeHandle:_g,useInsertionEffect:Pg,useLayoutEffect:$g,useMemo:Ag,useReducer:Dl,useRef:kg,useState:function(){return Dl(di)},useDebugValue:Ed,useDeferredValue:function(e){var t=$t();return Ng(t,Ie.memoizedState,e)},useTransition:function(){var e=Dl(di)[0],t=$t().memoizedState;return[e,t]},useMutableSource:wg,useSyncExternalStore:Sg,useId:Ig,unstable_isNewReconciler:!1},ox={readContext:Pt,useCallback:Rg,useContext:Pt,useEffect:Sd,useImperativeHandle:_g,useInsertionEffect:Pg,useLayoutEffect:$g,useMemo:Ag,useReducer:Fl,useRef:kg,useState:function(){return Fl(di)},useDebugValue:Ed,useDeferredValue:function(e){var t=$t();return Ie===null?t.memoizedState=e:Ng(t,Ie.memoizedState,e)},useTransition:function(){var e=Fl(di)[0],t=$t().memoizedState;return[e,t]},useMutableSource:wg,useSyncExternalStore:Sg,useId:Ig,unstable_isNewReconciler:!1};function Zr(e,t){try{var n="",r=t;do n+=Ry(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function Dg(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Za||(Za=!0,sc=r),Xu(e,t)},n}function Fg(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Xu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xu(e,t),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ip(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ix;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xx.bind(null,e,t,n),t.then(e,e))}function ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var ax=mn.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?yg(t,null,n,r):Xr(t,e.child,n,r)}function lp(e,t,n,r,o){n=n.render;var i=t.ref;return Hr(t,o),r=xd(e,t,n,r,i,o),n=wd(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(be&&n&&sd(t),t.flags|=1,Xe(e,t,r,o),t.child)}function up(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Od(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ug(e,t,i,r,o)):(e=ba(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(a,r)&&e.ref===t.ref)return pn(e,t,o)}return t.flags|=1,e=zn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ug(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oi(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,pn(e,t,o)}return Ju(e,t,n,r,o)}function Bg(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ir,ut),ut|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Ir,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Ir,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,me(Ir,ut),ut|=r;return Xe(e,t,o,n),t.child}function Hg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ju(e,t,n,r,o){var i=at(n)?cr:Ge.current;return i=Kr(t,i),Hr(t,o),n=xd(e,t,n,r,i,o),r=wd(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(be&&r&&sd(t),t.flags|=1,Xe(e,t,n,o),t.child)}function cp(e,t,n,r,o){if(at(n)){var i=!0;Ha(t)}else i=!1;if(Hr(t,o),t.stateNode===null)wa(e,t),gg(t,n,r),Gu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=at(n)?cr:Ge.current,u=Kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&tp(t,a,r,u),bn=!1;var g=t.memoizedState;a.state=g,qa(t,r,a,o),l=t.memoizedState,s!==r||g!==l||it.current||bn?(typeof c=="function"&&(Ku(t,n,c,r),l=t.memoizedState),(s=bn||ep(t,n,s,r,g,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Nt(t.type,s),a.props=u,d=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=at(n)?cr:Ge.current,l=Kr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||g!==l)&&tp(t,a,r,l),bn=!1,g=t.memoizedState,a.state=g,qa(t,r,a,o);var h=t.memoizedState;s!==d||g!==h||it.current||bn?(typeof v=="function"&&(Ku(t,n,v,r),h=t.memoizedState),(u=bn||ep(t,n,u,r,g,h,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zu(e,t,n,r,i,o)}function Zu(e,t,n,r,o,i){Hg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Kf(t,n,!1),pn(e,t,i);r=t.stateNode,ax.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Xr(t,e.child,null,i),t.child=Xr(t,null,s,i)):Xe(e,t,s,i),t.memoizedState=r.state,o&&Kf(t,n,!0),t.child}function Vg(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),md(e,t.containerInfo)}function dp(e,t,n,r,o){return Gr(),ud(o),t.flags|=256,Xe(e,t,n,r),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wg(e,t,n){var r=t.pendingProps,o=je.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(je,o&1),e===null)return Yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=$s(a,r,0,null),e=sr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tc(n),t.memoizedState=ec,e):bd(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return sx(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=zn(s,i):(i=sr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?tc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ec,r}return i=e.child,e=i.sibling,r=zn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bd(e,t){return t=$s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qi(e,t,n,r){return r!==null&&ud(r),Xr(t,e.child,null,n),e=bd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(A(422))),qi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$s({mode:"visible",children:r.children},o,0,null),i=sr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Xr(t,e.child,null,a),t.child.memoizedState=tc(a),t.memoizedState=ec,i);if(!(t.mode&1))return qi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(A(419)),r=Ul(i,r,void 0),qi(e,t,a,r)}if(s=(a&e.childLanes)!==0,rt||s){if(r=Fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fn(e,o),Ft(r,e,o,-1))}return $d(),r=Ul(Error(A(421))),qi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=wx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=Nn(o.nextSibling),dt=t,be=!0,Lt=null,e!==null&&(bt[jt++]=an,bt[jt++]=sn,bt[jt++]=dr,an=e.id,sn=e.overflow,dr=t),t=bd(t,r.children),t.flags|=4096,t)}function fp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qu(e.return,t,n)}function Bl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,n,t);else if(e.tag===19)fp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(je,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ka(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ka(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lx(e,t,n){switch(t.tag){case 3:Vg(t),Gr();break;case 5:xg(t);break;case 1:at(t.type)&&Ha(t);break;case 4:md(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(Qa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?Wg(e,t,n):(me(je,je.current&1),e=pn(e,t,n),e!==null?e.sibling:null);me(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,Bg(e,t,n)}return pn(e,t,n)}var Yg,nc,qg,Kg;Yg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};qg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,or(Gt.current);var i=null;switch(n){case"input":o=ju(e,o),r=ju(e,r),i=[];break;case"select":o=Ce({},o,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":o=ku(e,o),r=ku(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ua)}$u(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Kg=function(e,t,n,r){n!==r&&(t.flags|=4)};function jo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ux(e,t,n){var r=t.pendingProps;switch(ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return at(t.type)&&Ba(),Qe(t),null;case 3:return r=t.stateNode,Jr(),ye(it),ye(Ge),vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(cc(Lt),Lt=null))),nc(e,t),Qe(t),null;case 5:gd(t);var o=or(ui.current);if(n=t.type,e!==null&&t.stateNode!=null)qg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Qe(t),null}if(e=or(Gt.current),Qi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Yt]=t,r[si]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(o=0;o<No.length;o++)ge(No[o],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Sf(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":bf(r,i),ge("invalid",r)}$u(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Wi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Wi(r.textContent,s,e),o=["children",""+s]):Xo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":Mi(r),Ef(r,i,!0);break;case"textarea":Mi(r),jf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ua)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Em(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[si]=r,Yg(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ou(n,r),n){case"dialog":ge("cancel",e),ge("close",e),o=r;break;case"iframe":case"object":case"embed":ge("load",e),o=r;break;case"video":case"audio":for(o=0;o<No.length;o++)ge(No[o],e);o=r;break;case"source":ge("error",e),o=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=r;break;case"details":ge("toggle",e),o=r;break;case"input":Sf(e,r),o=ju(e,r),ge("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ce({},r,{value:void 0}),ge("invalid",e);break;case"textarea":bf(e,r),o=ku(e,r),ge("invalid",e);break;default:o=r}$u(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Tm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jo(e,l):typeof l=="number"&&Jo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ge("scroll",e):l!=null&&Yc(e,i,l,a))}switch(n){case"input":Mi(e),Ef(e,r,!1);break;case"textarea":Mi(e),jf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)Kg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=or(ui.current),or(Gt.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return Qe(t),null;case 13:if(ye(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&ct!==null&&t.mode&1&&!(t.flags&128))fg(),Gr(),t.flags|=98560,i=!1;else if(i=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[Yt]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else Lt!==null&&(cc(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Le===0&&(Le=3):$d())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Jr(),nc(e,t),e===null&&ii(t.stateNode.containerInfo),Qe(t),null;case 10:return fd(t.type._context),Qe(t),null;case 17:return at(t.type)&&Ba(),Qe(t),null;case 19:if(ye(je),i=t.memoizedState,i===null)return Qe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)jo(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ka(e),a!==null){for(t.flags|=128,jo(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(je,je.current&1|2),t.child}e=e.sibling}i.tail!==null&&$e()>eo&&(t.flags|=128,r=!0,jo(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ka(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Qe(t),null}else 2*$e()-i.renderingStartTime>eo&&n!==1073741824&&(t.flags|=128,r=!0,jo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=$e(),t.sibling=null,n=je.current,me(je,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return Pd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function cx(e,t){switch(ld(t),t.tag){case 1:return at(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),ye(it),ye(Ge),vd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gd(t),null;case 13:if(ye(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(je),null;case 4:return Jr(),null;case 10:return fd(t.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Ki=!1,qe=!1,dx=typeof WeakSet=="function"?WeakSet:Set,L=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function rc(e,t,n){try{n()}catch(r){ke(e,t,r)}}var pp=!1;function fx(e,t){if(Fu=za,e=Zm(),ad(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,g=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===o&&(s=a),g===i&&++c===r&&(l=a),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:e,selectionRange:n},za=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,E=h.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Nt(t.type,y),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){ke(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return h=pp,pp=!1,h}function Wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rc(t,n,i)}o=o.next}while(o!==r)}}function ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gg(e){var t=e.alternate;t!==null&&(e.alternate=null,Gg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[si],delete t[Vu],delete t[q1],delete t[K1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xg(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ua));else if(r!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}function ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}var Be=null,It=!1;function gn(e,t,n){for(n=n.child;n!==null;)Jg(e,t,n),n=n.sibling}function Jg(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(xs,n)}catch{}switch(n.tag){case 5:qe||Nr(n,t);case 6:var r=Be,o=It;Be=null,gn(e,t,n),Be=r,It=o,Be!==null&&(It?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(It?(e=Be,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),ni(e)):Il(Be,n.stateNode));break;case 4:r=Be,o=It,Be=n.stateNode.containerInfo,It=!0,gn(e,t,n),Be=r,It=o;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&rc(n,t,a),o=o.next}while(o!==r)}gn(e,t,n);break;case 1:if(!qe&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ke(n,t,s)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,gn(e,t,n),qe=r):gn(e,t,n);break;default:gn(e,t,n)}}function mp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dx),t.forEach(function(r){var o=Sx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,It=!1;break e;case 3:Be=s.stateNode.containerInfo,It=!0;break e;case 4:Be=s.stateNode.containerInfo,It=!0;break e}s=s.return}if(Be===null)throw Error(A(160));Jg(i,a,o),Be=null,It=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ke(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zg(t,e),t=t.sibling}function Zg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ht(e),r&4){try{Wo(3,e,e.return),ks(3,e)}catch(y){ke(e,e.return,y)}try{Wo(5,e,e.return)}catch(y){ke(e,e.return,y)}}break;case 1:At(t,e),Ht(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(At(t,e),Ht(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var o=e.stateNode;try{Jo(o,"")}catch(y){ke(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&wm(o,i),Ou(s,a);var u=Ou(s,i);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Tm(o,d):c==="dangerouslySetInnerHTML"?bm(o,d):c==="children"?Jo(o,d):Yc(o,c,d,u)}switch(s){case"input":Tu(o,i);break;case"textarea":Sm(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Dr(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?Dr(o,!!i.multiple,i.defaultValue,!0):Dr(o,!!i.multiple,i.multiple?[]:"",!1))}o[si]=i}catch(y){ke(e,e.return,y)}}break;case 6:if(At(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ke(e,e.return,y)}}break;case 3:if(At(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(y){ke(e,e.return,y)}break;case 4:At(t,e),Ht(e);break;case 13:At(t,e),Ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cd=$e())),r&4&&mp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||c,At(t,e),qe=u):At(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(d=L=c;L!==null;){switch(g=L,v=g.child,g.tag){case 0:case 11:case 14:case 15:Wo(4,g,g.return);break;case 1:Nr(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){ke(r,n,y)}}break;case 5:Nr(g,g.return);break;case 22:if(g.memoizedState!==null){vp(d);continue}}v!==null?(v.return=g,L=v):vp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=jm("display",a))}catch(y){ke(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ke(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:At(t,e),Ht(e),r&4&&mp(e);break;case 21:break;default:At(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xg(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jo(o,""),r.flags&=-33);var i=hp(e);ac(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=hp(e);ic(e,s,a);break;default:throw Error(A(161))}}catch(l){ke(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function px(e,t,n){L=e,e0(e)}function e0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ki;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||qe;s=Ki;var u=qe;if(Ki=a,(qe=l)&&!u)for(L=o;L!==null;)a=L,l=a.child,a.tag===22&&a.memoizedState!==null?yp(o):l!==null?(l.return=a,L=l):yp(o);for(;i!==null;)L=i,e0(i),i=i.sibling;L=o,Ki=s,qe=u}gp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):gp(e)}}function gp(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ni(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}qe||t.flags&512&&oc(t)}catch(g){ke(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function vp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function yp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ks(4,t)}catch(l){ke(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ke(t,o,l)}}var i=t.return;try{oc(t)}catch(l){ke(t,i,l)}break;case 5:var a=t.return;try{oc(t)}catch(l){ke(t,a,l)}}}catch(l){ke(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var hx=Math.ceil,Ja=mn.ReactCurrentDispatcher,jd=mn.ReactCurrentOwner,Ct=mn.ReactCurrentBatchConfig,ne=0,Fe=null,Re=null,He=0,ut=0,Ir=Kn(0),Le=0,pi=null,pr=0,Ps=0,Td=0,Qo=null,nt=null,Cd=0,eo=1/0,nn=null,Za=!1,sc=null,Ln=null,Gi=!1,Pn=null,es=0,Yo=0,lc=null,Sa=-1,Ea=0;function Je(){return ne&6?$e():Sa!==-1?Sa:Sa=$e()}function Mn(e){return e.mode&1?ne&2&&He!==0?He&-He:X1.transition!==null?(Ea===0&&(Ea=Mm()),Ea):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Vm(e.type)),e):1}function Ft(e,t,n,r){if(50<Yo)throw Yo=0,lc=null,Error(A(185));Ci(e,n,r),(!(ne&2)||e!==Fe)&&(e===Fe&&(!(ne&2)&&(Ps|=n),Le===4&&Tn(e,He)),st(e,r),n===1&&ne===0&&!(t.mode&1)&&(eo=$e()+500,js&&Gn()))}function st(e,t){var n=e.callbackNode;Xy(e,t);var r=Ma(e,e===Fe?He:0);if(r===0)n!==null&&kf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kf(n),t===1)e.tag===0?G1(xp.bind(null,e)):ug(xp.bind(null,e)),Q1(function(){!(ne&6)&&Gn()}),n=null;else{switch(zm(r)){case 1:n=Jc;break;case 4:n=Im;break;case 16:n=La;break;case 536870912:n=Lm;break;default:n=La}n=l0(n,t0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function t0(e,t){if(Sa=-1,Ea=0,ne&6)throw Error(A(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=Ma(e,e===Fe?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ts(e,r);else{t=r;var o=ne;ne|=2;var i=r0();(Fe!==e||He!==t)&&(nn=null,eo=$e()+500,ar(e,t));do try{vx();break}catch(s){n0(e,s)}while(1);dd(),Ja.current=i,ne=o,Re!==null?t=0:(Fe=null,He=0,t=Le)}if(t!==0){if(t===2&&(o=Iu(e),o!==0&&(r=o,t=uc(e,o))),t===1)throw n=pi,ar(e,0),Tn(e,r),st(e,$e()),n;if(t===6)Tn(e,r);else{if(o=e.current.alternate,!(r&30)&&!mx(o)&&(t=ts(e,r),t===2&&(i=Iu(e),i!==0&&(r=i,t=uc(e,i))),t===1))throw n=pi,ar(e,0),Tn(e,r),st(e,$e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Zn(e,nt,nn);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=Cd+500-$e(),10<t)){if(Ma(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hu(Zn.bind(null,e,nt,nn),t);break}Zn(e,nt,nn);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Dt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hx(r/1960))-r,10<r){e.timeoutHandle=Hu(Zn.bind(null,e,nt,nn),r);break}Zn(e,nt,nn);break;case 5:Zn(e,nt,nn);break;default:throw Error(A(329))}}}return st(e,$e()),e.callbackNode===n?t0.bind(null,e):null}function uc(e,t){var n=Qo;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=ts(e,t),e!==2&&(t=nt,nt=n,t!==null&&cc(t)),e}function cc(e){nt===null?nt=e:nt.push.apply(nt,e)}function mx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Bt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~Td,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function xp(e){if(ne&6)throw Error(A(327));Vr();var t=Ma(e,0);if(!(t&1))return st(e,$e()),null;var n=ts(e,t);if(e.tag!==0&&n===2){var r=Iu(e);r!==0&&(t=r,n=uc(e,r))}if(n===1)throw n=pi,ar(e,0),Tn(e,t),st(e,$e()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,nt,nn),st(e,$e()),null}function kd(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(eo=$e()+500,js&&Gn())}}function hr(e){Pn!==null&&Pn.tag===0&&!(ne&6)&&Vr();var t=ne;ne|=1;var n=Ct.transition,r=ce;try{if(Ct.transition=null,ce=1,e)return e()}finally{ce=r,Ct.transition=n,ne=t,!(ne&6)&&Gn()}}function Pd(){ut=Ir.current,ye(Ir)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,W1(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:Jr(),ye(it),ye(Ge),vd();break;case 5:gd(r);break;case 4:Jr();break;case 13:ye(je);break;case 19:ye(je);break;case 10:fd(r.type._context);break;case 22:case 23:Pd()}n=n.return}if(Fe=e,Re=e=zn(e.current,null),He=ut=t,Le=0,pi=null,Td=Ps=pr=0,nt=Qo=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}rr=null}return e}function n0(e,t){do{var n=Re;try{if(dd(),ya.current=Xa,Ga){for(var r=Te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ga=!1}if(fr=0,ze=Ie=Te=null,Vo=!1,ci=0,jd.current=null,n===null||n.return===null){Le=1,pi=t,Re=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=He,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=ap(a);if(v!==null){v.flags&=-257,sp(v,a,s,i,t),v.mode&1&&ip(i,u,t),t=v,l=u;var h=t.updateQueue;if(h===null){var y=new Set;y.add(l),t.updateQueue=y}else h.add(l);break e}else{if(!(t&1)){ip(i,u,t),$d();break e}l=Error(A(426))}}else if(be&&s.mode&1){var E=ap(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),sp(E,a,s,i,t),ud(Zr(l,s));break e}}i=l=Zr(l,s),Le!==4&&(Le=2),Qo===null?Qo=[i]:Qo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Dg(i,l,t);Jf(i,m);break e;case 1:s=l;var p=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ln===null||!Ln.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Fg(i,s,t);Jf(i,w);break e}}i=i.return}while(i!==null)}i0(n)}catch(b){t=b,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function r0(){var e=Ja.current;return Ja.current=Xa,e===null?Xa:e}function $d(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!(pr&268435455)&&!(Ps&268435455)||Tn(Fe,He)}function ts(e,t){var n=ne;ne|=2;var r=r0();(Fe!==e||He!==t)&&(nn=null,ar(e,t));do try{gx();break}catch(o){n0(e,o)}while(1);if(dd(),ne=n,Ja.current=r,Re!==null)throw Error(A(261));return Fe=null,He=0,Le}function gx(){for(;Re!==null;)o0(Re)}function vx(){for(;Re!==null&&!By();)o0(Re)}function o0(e){var t=s0(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?i0(e):Re=t,jd.current=null}function i0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cx(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Re=null;return}}else if(n=ux(n,t,ut),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Le===0&&(Le=5)}function Zn(e,t,n){var r=ce,o=Ct.transition;try{Ct.transition=null,ce=1,yx(e,t,n,r)}finally{Ct.transition=o,ce=r}return null}function yx(e,t,n,r){do Vr();while(Pn!==null);if(ne&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jy(e,i),e===Fe&&(Re=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gi||(Gi=!0,l0(La,function(){return Vr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var a=ce;ce=1;var s=ne;ne|=4,jd.current=null,fx(e,n),Zg(n,e),z1(Uu),za=!!Fu,Uu=Fu=null,e.current=n,px(n),Hy(),ne=s,ce=a,Ct.transition=i}else e.current=n;if(Gi&&(Gi=!1,Pn=e,es=o),i=e.pendingLanes,i===0&&(Ln=null),Qy(n.stateNode),st(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Za)throw Za=!1,e=sc,sc=null,e;return es&1&&e.tag!==0&&Vr(),i=e.pendingLanes,i&1?e===lc?Yo++:(Yo=0,lc=e):Yo=0,Gn(),null}function Vr(){if(Pn!==null){var e=zm(es),t=Ct.transition,n=ce;try{if(Ct.transition=null,ce=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,es=0,ne&6)throw Error(A(331));var o=ne;for(ne|=4,L=e.current;L!==null;){var i=L,a=i.child;if(L.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Wo(8,c,i)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var g=c.sibling,v=c.return;if(Gg(c),c===u){L=null;break}if(g!==null){g.return=v,L=g;break}L=v}}}var h=i.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}L=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,L=a;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var p=e.current;for(L=p;L!==null;){a=L;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,L=x;else e:for(a=p;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ks(9,s)}}catch(b){ke(s,s.return,b)}if(s===a){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(ne=o,Gn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(xs,e)}catch{}r=!0}return r}finally{ce=n,Ct.transition=t}}return!1}function wp(e,t,n){t=Zr(n,t),t=Dg(e,t,1),e=In(e,t,1),t=Je(),e!==null&&(Ci(e,1,t),st(e,t))}function ke(e,t,n){if(e.tag===3)wp(e,e,n);else for(;t!==null;){if(t.tag===3){wp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=Zr(n,e),e=Fg(t,e,1),t=In(t,e,1),e=Je(),t!==null&&(Ci(t,1,e),st(t,e));break}}t=t.return}}function xx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(Le===4||Le===3&&(He&130023424)===He&&500>$e()-Cd?ar(e,0):Td|=n),st(e,t)}function a0(e,t){t===0&&(e.mode&1?(t=Fi,Fi<<=1,!(Fi&130023424)&&(Fi=4194304)):t=1);var n=Je();e=fn(e,t),e!==null&&(Ci(e,t,n),st(e,n))}function wx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),a0(e,n)}function Sx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),a0(e,n)}var s0;s0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,lx(e,t,n);rt=!!(e.flags&131072)}else rt=!1,be&&t.flags&1048576&&cg(t,Wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wa(e,t),e=t.pendingProps;var o=Kr(t,Ge.current);Hr(t,n),o=xd(null,t,r,e,o,n);var i=wd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(i=!0,Ha(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hd(t),o.updater=Ts,t.stateNode=o,o._reactInternals=t,Gu(t,r,e,n),t=Zu(null,t,r,!0,i,n)):(t.tag=0,be&&i&&sd(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bx(r),e=Nt(r,e),o){case 0:t=Ju(null,t,r,e,n);break e;case 1:t=cp(null,t,r,e,n);break e;case 11:t=lp(null,t,r,e,n);break e;case 14:t=up(null,t,r,Nt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),Ju(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),cp(e,t,r,o,n);case 3:e:{if(Vg(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hg(e,t),qa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Zr(Error(A(423)),t),t=dp(e,t,r,n,o);break e}else if(r!==o){o=Zr(Error(A(424)),t),t=dp(e,t,r,n,o);break e}else for(ct=Nn(t.stateNode.containerInfo.firstChild),dt=t,be=!0,Lt=null,n=yg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===o){t=pn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return xg(t),e===null&&Yu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Bu(r,o)?a=null:i!==null&&Bu(r,i)&&(t.flags|=32),Hg(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&Yu(t),null;case 13:return Wg(e,t,n);case 4:return md(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),lp(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,me(Qa,r._currentValue),r._currentValue=a,i!==null)if(Bt(i.value,a)){if(i.children===o.children&&!it.current){t=pn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=ln(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),qu(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(A(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),qu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hr(t,n),o=Pt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=Nt(r,t.pendingProps),o=Nt(r.type,o),up(e,t,r,o,n);case 15:return Ug(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Nt(r,o),wa(e,t),t.tag=1,at(r)?(e=!0,Ha(t)):e=!1,Hr(t,n),gg(t,r,o),Gu(t,r,o,n),Zu(null,t,r,!0,e,n);case 19:return Qg(e,t,n);case 22:return Bg(e,t,n)}throw Error(A(156,t.tag))};function l0(e,t){return Nm(e,t)}function Ex(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Ex(e,t,n,r)}function Od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bx(e){if(typeof e=="function")return Od(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kc)return 11;if(e===Gc)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ba(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Od(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tr:return sr(n.children,o,i,t);case qc:a=8,o|=8;break;case wu:return e=Tt(12,n,t,o|2),e.elementType=wu,e.lanes=i,e;case Su:return e=Tt(13,n,t,o),e.elementType=Su,e.lanes=i,e;case Eu:return e=Tt(19,n,t,o),e.elementType=Eu,e.lanes=i,e;case vm:return $s(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mm:a=10;break e;case gm:a=9;break e;case Kc:a=11;break e;case Gc:a=14;break e;case En:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function $s(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=vm,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _d(e,t,n,r,o,i,a,s,l){return e=new jx(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(i),e}function Tx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function u0(e){if(!e)return Wn;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(at(n))return lg(e,n,t)}return t}function c0(e,t,n,r,o,i,a,s,l){return e=_d(n,r,!0,e,o,i,a,s,l),e.context=u0(null),n=e.current,r=Je(),o=Mn(n),i=ln(r,o),i.callback=t??null,In(n,i,o),e.current.lanes=o,Ci(e,o,r),st(e,r),e}function Os(e,t,n,r){var o=t.current,i=Je(),a=Mn(o);return n=u0(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(o,t,a),e!==null&&(Ft(e,o,a,i),va(e,o,a)),a}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rd(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function Cx(){return null}var d0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ad(e){this._internalRoot=e}_s.prototype.render=Ad.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Os(e,t,null,null)};_s.prototype.unmount=Ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){Os(null,e,null,null)}),t[dn]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Um();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&Hm(e)}};function Nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function kx(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ns(a);i.call(u)}}var a=c0(t,r,e,0,null,!1,!1,"",Ep);return e._reactRootContainer=a,e[dn]=a.current,ii(e.nodeType===8?e.parentNode:e),hr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ns(l);s.call(u)}}var l=_d(e,0,!1,null,null,!1,!1,"",Ep);return e._reactRootContainer=l,e[dn]=l.current,ii(e.nodeType===8?e.parentNode:e),hr(function(){Os(t,l,n,r)}),l}function As(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=ns(a);s.call(l)}}Os(t,a,e,o)}else a=kx(n,t,e,o,r);return ns(a)}Dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ao(t.pendingLanes);n!==0&&(Zc(t,n|1),st(t,$e()),!(ne&6)&&(eo=$e()+500,Gn()))}break;case 13:hr(function(){var r=fn(e,1);if(r!==null){var o=Je();Ft(r,e,1,o)}}),Rd(e,1)}};ed=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=Je();Ft(t,e,134217728,n)}Rd(e,134217728)}};Fm=function(e){if(e.tag===13){var t=Mn(e),n=fn(e,t);if(n!==null){var r=Je();Ft(n,e,t,r)}Rd(e,t)}};Um=function(){return ce};Bm=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Ru=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bs(r);if(!o)throw Error(A(90));xm(r),Tu(r,o)}}}break;case"textarea":Sm(e,n);break;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}};Pm=kd;$m=hr;var Px={usingClientEntryPoint:!1,Events:[Pi,$r,bs,Cm,km,kd]},To={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$x={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rm(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{xs=Xi.inject($x),Kt=Xi}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(t))throw Error(A(200));return Tx(e,t,null,n)};ht.createRoot=function(e,t){if(!Nd(e))throw Error(A(299));var n=!1,r="",o=d0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_d(e,1,!1,null,null,n,!1,r,o),e[dn]=t.current,ii(e.nodeType===8?e.parentNode:e),new Ad(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Rm(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return hr(e)};ht.hydrate=function(e,t,n){if(!Rs(t))throw Error(A(200));return As(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Nd(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=d0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=c0(t,null,e,1,n??null,o,!1,i,a),e[dn]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _s(t)};ht.render=function(e,t,n){if(!Rs(t))throw Error(A(200));return As(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Rs(e))throw Error(A(40));return e._reactRootContainer?(hr(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};ht.unstable_batchedUpdates=kd;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rs(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return As(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(e){console.error(e)}}f0(),cm.exports=ht;var p0=cm.exports,bp=p0;yu.createRoot=bp.createRoot,yu.hydrateRoot=bp.hydrateRoot;var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ke.apply(this,arguments)};function hi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ve="-ms-",qo="-moz-",se="-webkit-",h0="comm",Ns="rule",Id="decl",Ox="@import",m0="@keyframes",_x="@layer",Rx=Math.abs,Ld=String.fromCharCode,dc=Object.assign;function Ax(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function g0(e){return e.trim()}function rn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function ja(e,t){return e.indexOf(t)}function De(e,t){return e.charCodeAt(t)|0}function to(e,t,n){return e.slice(t,n)}function Qt(e){return e.length}function v0(e){return e.length}function Io(e,t){return t.push(e),e}function Nx(e,t){return e.map(t).join("")}function jp(e,t){return e.filter(function(n){return!rn(n,t)})}var Is=1,no=1,y0=0,Ot=0,_e=0,po="";function Ls(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Is,column:no,length:a,return:"",siblings:s}}function Sn(e,t){return dc(Ls("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Er(e){for(;e.root;)e=Sn(e.root,{children:[e]});Io(e,e.siblings)}function Ix(){return _e}function Lx(){return _e=Ot>0?De(po,--Ot):0,no--,_e===10&&(no=1,Is--),_e}function Ut(){return _e=Ot<y0?De(po,Ot++):0,no++,_e===10&&(no=1,Is++),_e}function lr(){return De(po,Ot)}function Ta(){return Ot}function Ms(e,t){return to(po,e,t)}function fc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mx(e){return Is=no=1,y0=Qt(po=e),Ot=0,[]}function zx(e){return po="",e}function Wl(e){return g0(Ms(Ot-1,pc(e===91?e+2:e===40?e+1:e)))}function Dx(e){for(;(_e=lr())&&_e<33;)Ut();return fc(e)>2||fc(_e)>3?"":" "}function Fx(e,t){for(;--t&&Ut()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Ms(e,Ta()+(t<6&&lr()==32&&Ut()==32))}function pc(e){for(;Ut();)switch(_e){case e:return Ot;case 34:case 39:e!==34&&e!==39&&pc(_e);break;case 40:e===41&&pc(e);break;case 92:Ut();break}return Ot}function Ux(e,t){for(;Ut()&&e+_e!==47+10;)if(e+_e===42+42&&lr()===47)break;return"/*"+Ms(t,Ot-1)+"*"+Ld(e===47?e:Ut())}function Bx(e){for(;!fc(lr());)Ut();return Ms(e,Ot)}function Hx(e){return zx(Ca("",null,null,null,[""],e=Mx(e),0,[0],e))}function Ca(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,d=a,g=0,v=0,h=0,y=1,E=1,m=1,p=0,x="",w=o,b=i,C=r,T=x;E;)switch(h=p,p=Ut()){case 40:if(h!=108&&De(T,d-1)==58){ja(T+=Y(Wl(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:T+=Wl(p);break;case 9:case 10:case 13:case 32:T+=Dx(h);break;case 92:T+=Fx(Ta()-1,7);continue;case 47:switch(lr()){case 42:case 47:Io(Vx(Ux(Ut(),Ta()),t,n,l),l);break;default:T+="/"}break;case 123*y:s[u++]=Qt(T)*m;case 125*y:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+c:m==-1&&(T=Y(T,/\f/g,"")),v>0&&Qt(T)-d&&Io(v>32?Cp(T+";",r,n,d-1,l):Cp(Y(T," ","")+";",r,n,d-2,l),l);break;case 59:T+=";";default:if(Io(C=Tp(T,t,n,u,c,o,s,x,w=[],b=[],d,i),i),p===123)if(c===0)Ca(T,t,C,C,w,i,d,s,b);else switch(g===99&&De(T,3)===110?100:g){case 100:case 108:case 109:case 115:Ca(e,C,C,r&&Io(Tp(e,C,C,0,0,o,s,x,o,w=[],d,b),b),o,b,d,s,r?w:b);break;default:Ca(T,C,C,C,[""],b,0,s,b)}}u=c=v=0,y=m=1,x=T="",d=a;break;case 58:d=1+Qt(T),v=h;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&Lx()==125)continue}switch(T+=Ld(p),p*y){case 38:m=c>0?1:(T+="\f",-1);break;case 44:s[u++]=(Qt(T)-1)*m,m=1;break;case 64:lr()===45&&(T+=Wl(Ut())),g=lr(),c=d=Qt(x=T+=Bx(Ta())),p++;break;case 45:h===45&&Qt(T)==2&&(y=0)}}return i}function Tp(e,t,n,r,o,i,a,s,l,u,c,d){for(var g=o-1,v=o===0?i:[""],h=v0(v),y=0,E=0,m=0;y<r;++y)for(var p=0,x=to(e,g+1,g=Rx(E=a[y])),w=e;p<h;++p)(w=g0(E>0?v[p]+" "+x:Y(x,/&\f/g,v[p])))&&(l[m++]=w);return Ls(e,t,n,o===0?Ns:s,l,u,c,d)}function Vx(e,t,n,r){return Ls(e,t,n,h0,Ld(Ix()),to(e,2,-2),0,r)}function Cp(e,t,n,r,o){return Ls(e,t,n,Id,to(e,0,r),to(e,r+1,-1),r,o)}function x0(e,t,n){switch(Ax(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return qo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+qo+e+ve+e+e;case 5936:switch(De(e,t+11)){case 114:return se+e+ve+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+ve+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+ve+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+ve+e+e;case 6165:return se+e+ve+"flex-"+e+e;case 5187:return se+e+Y(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return se+e+ve+"flex-item-"+Y(e,/flex-|-self/g,"")+(rn(e,/flex-|baseline/)?"":ve+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return se+e+ve+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+ve+Y(e,"shrink","negative")+e;case 5292:return se+e+ve+Y(e,"basis","preferred-size")+e;case 6060:return se+"box-"+Y(e,"-grow","")+se+e+ve+Y(e,"grow","positive")+e;case 4554:return se+Y(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!rn(e,/flex-|baseline/))return ve+"grid-column-align"+to(e,t)+e;break;case 2592:case 3360:return ve+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,rn(r.props,/grid-\w+-end/)})?~ja(e+(n=n[t].value),"span")?e:ve+Y(e,"-start","")+e+ve+"grid-row-span:"+(~ja(n,"span")?rn(n,/\d+/):+rn(n,/\d+/)-+rn(e,/\d+/))+";":ve+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rn(r.props,/grid-\w+-start/)})?e:ve+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+qo+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ja(e,"stretch")?x0(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,l,u){return ve+o+":"+i+u+(a?ve+o+"-span:"+(s?l:+l-+i)+u:"")+e});case 4949:if(De(e,t+6)===121)return Y(e,":",":"+se)+e;break;case 6444:switch(De(e,De(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(De(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+ve+"$2box$3")+e;case 100:return Y(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function rs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Wx(e,t,n,r){switch(e.type){case _x:if(e.children.length)break;case Ox:case Id:return e.return=e.return||e.value;case h0:return"";case m0:return e.return=e.value+"{"+rs(e.children,r)+"}";case Ns:if(!Qt(e.value=e.props.join(",")))return""}return Qt(n=rs(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qx(e){var t=v0(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Yx(e){return function(t){t.root||(t=t.return)&&e(t)}}function qx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Id:e.return=x0(e.value,e.length,n);return;case m0:return rs([Sn(e,{value:Y(e.value,"@","@"+se)})],r);case Ns:if(e.length)return Nx(n=e.props,function(o){switch(rn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Er(Sn(e,{props:[Y(o,/:(read-\w+)/,":"+qo+"$1")]})),Er(Sn(e,{props:[o]})),dc(e,{props:jp(n,r)});break;case"::placeholder":Er(Sn(e,{props:[Y(o,/:(plac\w+)/,":"+se+"input-$1")]})),Er(Sn(e,{props:[Y(o,/:(plac\w+)/,":"+qo+"$1")]})),Er(Sn(e,{props:[Y(o,/:(plac\w+)/,ve+"input-$1")]})),Er(Sn(e,{props:[o]})),dc(e,{props:jp(n,r)});break}return""})}}var Kx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ro=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Md=typeof window<"u"&&"HTMLElement"in window,Gx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Xx={},zs=Object.freeze([]),oo=Object.freeze({});function w0(e,t,n){return n===void 0&&(n=oo),e.theme!==n.theme&&e.theme||t||n.theme}var S0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zx=/(^-|-$)/g;function kp(e){return e.replace(Jx,"-").replace(Zx,"")}var ew=/(a)(d)/gi,Pp=function(e){return String.fromCharCode(e+(e>25?39:97))};function hc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pp(t%52)+n;return(Pp(t%52)+n).replace(ew,"$1-$2")}var Ql,Lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},E0=function(e){return Lr(5381,e)};function b0(e){return hc(E0(e)>>>0)}function tw(e){return e.displayName||e.name||"Component"}function Yl(e){return typeof e=="string"&&!0}var j0=typeof Symbol=="function"&&Symbol.for,T0=j0?Symbol.for("react.memo"):60115,nw=j0?Symbol.for("react.forward_ref"):60112,rw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ow={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iw=((Ql={})[nw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ql[T0]=C0,Ql);function $p(e){return("type"in(t=e)&&t.type.$$typeof)===T0?C0:"$$typeof"in e?iw[e.$$typeof]:rw;var t}var aw=Object.defineProperty,sw=Object.getOwnPropertyNames,Op=Object.getOwnPropertySymbols,lw=Object.getOwnPropertyDescriptor,uw=Object.getPrototypeOf,_p=Object.prototype;function k0(e,t,n){if(typeof t!="string"){if(_p){var r=uw(t);r&&r!==_p&&k0(e,r,n)}var o=sw(t);Op&&(o=o.concat(Op(t)));for(var i=$p(e),a=$p(t),s=0;s<o.length;++s){var l=o[s];if(!(l in ow||n&&n[l]||a&&l in a||i&&l in i)){var u=lw(t,l);try{aw(e,l,u)}catch{}}}}return e}function io(e){return typeof e=="function"}function zd(e){return typeof e=="object"&&"styledComponentId"in e}function ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gc(e,t,n){if(n===void 0&&(n=!1),!n&&!mi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gc(e[r],t[r]);else if(mi(t))for(var r in t)e[r]=gc(e[r],t[r]);return e}function Dd(e,t){Object.defineProperty(e,"toString",{value:t})}function Oi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var cw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Oi(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),ka=new Map,os=new Map,ql=1,Ji=function(e){if(ka.has(e))return ka.get(e);for(;os.has(ql);)ql++;var t=ql++;return ka.set(e,t),os.set(t,e),t},dw=function(e,t){ka.set(e,t),os.set(t,e)},fw="style[".concat(ro,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),pw=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hw=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},mw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(pw);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(dw(c,u),hw(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function gw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var l=Array.from(s.querySelectorAll("style[".concat(ro,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ro,"active"),r.setAttribute("data-styled-version","6.0.7");var a=gw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},vw=function(){function e(t){this.element=P0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Oi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),yw=function(){function e(t){this.element=P0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Rp=Md,ww={isServer:!Md,useCSSOMInjection:!Gx},is=function(){function e(t,n,r){t===void 0&&(t=oo),n===void 0&&(n={});var o=this;this.options=Ke(Ke({},ww),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Md&&Rp&&(Rp=!1,function(i){for(var a=document.querySelectorAll(fw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(ro)!=="active"&&(mw(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Dd(this,function(){return function(i){for(var a=i.getTag(),s=a.length,l="",u=function(d){var g=function(m){return os.get(m)}(d);if(g===void 0)return"continue";var v=i.names.get(g),h=a.getGroup(d);if(v===void 0||h.length===0)return"continue";var y="".concat(ro,".g").concat(d,'[id="').concat(g,'"]'),E="";v!==void 0&&v.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),l+="".concat(h).concat(y,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(o)})}return e.registerId=function(t){return Ji(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ke(Ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new xw(o):r?new vw(o):new yw(o)}(this.options),new cw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ji(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Sw=/&/g,Ew=/^\s*\/\/.*$/gm;function $0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=$0(n.children,t)),n})}function bw(e){var t,n,r,o=e===void 0?oo:e,i=o.options,a=i===void 0?oo:i,s=o.plugins,l=s===void 0?zs:s,u=function(g,v,h){return h===n||h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(t):g},c=l.slice();c.push(function(g){g.type===Ns&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Sw,n).replace(r,u))}),a.prefix&&c.push(qx),c.push(Wx);var d=function(g,v,h,y){v===void 0&&(v=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var E=g.replace(Ew,""),m=Hx(h||v?"".concat(h," ").concat(v," { ").concat(E," }"):E);a.namespace&&(m=$0(m,a.namespace));var p=[];return rs(m,Qx(c.concat(Yx(function(x){return p.push(x)})))),p};return d.hash=l.length?l.reduce(function(g,v){return v.name||Oi(15),Lr(g,v.name)},5381).toString():"",d}var jw=new is,vc=bw(),O0=V.createContext({shouldForwardProp:void 0,styleSheet:jw,stylis:vc});O0.Consumer;V.createContext(void 0);function yc(){return k.useContext(O0)}var Tw=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=vc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dd(this,function(){throw Oi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=vc),this.name+t.hash},e}(),Cw=function(e){return e>="A"&&e<="Z"};function Ap(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Cw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _0=function(e){return e==null||e===!1||e===""},R0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!_0(i)&&(Array.isArray(i)&&i.isCss||io(i)?r.push("".concat(Ap(o),":"),i,";"):mi(i)?r.push.apply(r,hi(hi(["".concat(o," {")],R0(i),!1),["}"],!1)):r.push("".concat(Ap(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Kx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(_0(e))return[];if(zd(e))return[".".concat(e.styledComponentId)];if(io(e)){if(!io(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Dn(o,t,n,r)}var i;return e instanceof Tw?n?(e.inject(n,r),[e.getName(r)]):[e]:mi(e)?R0(e):Array.isArray(e)?Array.prototype.concat.apply(zs,e.map(function(a){return Dn(a,t,n,r)})):[e.toString()]}function A0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(io(n)&&!zd(n))return!1}return!0}var kw=E0("6.0.7"),Pw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&A0(t),this.componentId=n,this.baseHash=Lr(kw,n),this.baseStyle=r,is.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ir(o,this.staticRulesId);else{var i=mc(Dn(this.rules,t,n,r)),a=hc(Lr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=ir(o,a),this.staticRulesId=a}else{for(var l=Lr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var g=mc(Dn(d,t,n,r));l=Lr(l,g),u+=g}}if(u){var v=hc(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=ir(o,v)}}return o},e}(),Fd=V.createContext(void 0);Fd.Consumer;var Kl={};function $w(e,t,n){var r=zd(e),o=e,i=!Yl(e),a=t.attrs,s=a===void 0?zs:a,l=t.componentId,u=l===void 0?function(x,w){var b=typeof x!="string"?"sc":kp(x);Kl[b]=(Kl[b]||0)+1;var C="".concat(b,"-").concat(b0("6.0.7"+b+Kl[b]));return w?"".concat(w,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(x){return Yl(x)?"styled.".concat(x):"Styled(".concat(tw(x),")")}(e);var d=t.displayName&&t.componentId?"".concat(kp(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;v=function(x,w){return h(x,w)&&y(x,w)}}else v=h}var E=new Pw(n,d,r?o.componentStyle:void 0);function m(x,w){return function(b,C,T){var $=b.attrs,O=b.componentStyle,R=b.defaultProps,D=b.foldedComponentIds,U=b.styledComponentId,F=b.target,J=V.useContext(Fd),xe=yc(),ae=b.shouldForwardProp||xe.shouldForwardProp,pe=function(lt,Oe,vt){for(var we,Pe=Ke(Ke({},Oe),{className:void 0,theme:vt}),Xn=0;Xn<lt.length;Xn+=1){var en=io(we=lt[Xn])?we(Pe):we;for(var _ in en)Pe[_]=_==="className"?ir(Pe[_],en[_]):_==="style"?Ke(Ke({},Pe[_]),en[_]):en[_]}return Oe.className&&(Pe.className=ir(Pe.className,Oe.className)),Pe}($,C,w0(C,J,R)||oo),N=pe.as||F,B={};for(var H in pe)pe[H]===void 0||H[0]==="$"||H==="as"||H==="theme"||(H==="forwardedAs"?B.as=pe.forwardedAs:ae&&!ae(H,N)||(B[H]=pe[H]));var le=function(lt,Oe){var vt=yc(),we=lt.generateAndInjectStyles(Oe,vt.styleSheet,vt.stylis);return we}(O,pe),he=ir(D,U);return le&&(he+=" "+le),pe.className&&(he+=" "+pe.className),B[Yl(N)&&!S0.has(N)?"class":"className"]=he,B.ref=T,k.createElement(N,B)}(p,x,w)}var p=V.forwardRef(m);return p.attrs=g,p.componentStyle=E,p.shouldForwardProp=v,p.foldedComponentIds=r?ir(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=d,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(w){for(var b=[],C=1;C<arguments.length;C++)b[C-1]=arguments[C];for(var T=0,$=b;T<$.length;T++)gc(w,$[T],!0);return w}({},o.defaultProps,x):x}}),Dd(p,function(){return".".concat(p.styledComponentId)}),i&&k0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Np(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ip=function(e){return Object.assign(e,{isCss:!0})};function N0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(io(e)||mi(e)){var r=e;return Ip(Dn(Np(zs,hi([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Dn(o):Ip(Dn(Np(o,t)))}function xc(e,t,n){if(n===void 0&&(n=oo),!t)throw Oi(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,N0.apply(void 0,hi([o],i,!1)))};return r.attrs=function(o){return xc(e,t,Ke(Ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return xc(e,t,Ke(Ke({},n),o))},r}var I0=function(e){return xc($w,e)},j=I0;S0.forEach(function(e){j[e]=I0(e)});var Ow=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=A0(t),is.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(mc(Dn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&is.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function _w(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=N0.apply(void 0,hi([e],t,!1)),o="sc-global-".concat(b0(JSON.stringify(r))),i=new Ow(r,o),a=function(l){var u=yc(),c=V.useContext(Fd),d=V.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(d,l,u.styleSheet,c,u.stylis),V.useLayoutEffect(function(){if(!u.styleSheet.server)return s(d,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,d,g){if(i.isStatic)i.renderStyles(l,Xx,c,g);else{var v=Ke(Ke({},u),{theme:w0(u,d,a.defaultProps)});i.renderStyles(l,v,c,g)}}return V.memo(a)}/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}var $n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($n||($n={}));const Lp="popstate";function Rw(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:l=""}=xr(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),wc("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof i=="string"?i:as(i))}function r(o,i){Ds(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Nw(t,n,r,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ds(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Aw(){return Math.random().toString(36).substr(2,8)}function Mp(e,t){return{usr:e.state,key:e.key,idx:t}}function wc(e,t,n,r){return n===void 0&&(n=null),gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xr(t):t,{state:n,key:t&&t.key||r||Aw()})}function as(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Nw(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=$n.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(gi({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=$n.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:s,location:y.location,delta:m})}function g(E,m){s=$n.Push;let p=wc(y.location,E,m);n&&n(p,E),u=c()+1;let x=Mp(p,u),w=y.createHref(p);try{a.pushState(x,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(w)}i&&l&&l({action:s,location:y.location,delta:1})}function v(E,m){s=$n.Replace;let p=wc(y.location,E,m);n&&n(p,E),u=c();let x=Mp(p,u),w=y.createHref(p);a.replaceState(x,"",w),i&&l&&l({action:s,location:y.location,delta:0})}function h(E){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof E=="string"?E:as(E);return Ae(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return s},get location(){return e(o,a)},listen(E){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Lp,d),l=E,()=>{o.removeEventListener(Lp,d),l=null}},createHref(E){return t(o,E)},createURL:h,encodeLocation(E){let m=h(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(E){return a.go(E)}};return y}var zp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zp||(zp={}));function Iw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?xr(t):t,o=Ud(r.pathname||"/",n);if(o==null)return null;let i=L0(e);Lw(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Ww(i[s],qw(o));return a}function L0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Fn([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(Ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),L0(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Hw(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of M0(i.path))o(i,a,l)}),t}function M0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=M0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Lw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mw=/^:\w+$/,zw=3,Dw=2,Fw=1,Uw=10,Bw=-2,Dp=e=>e==="*";function Hw(e,t){let n=e.split("/"),r=n.length;return n.some(Dp)&&(r+=Bw),t&&(r+=Dw),n.filter(o=>!Dp(o)).reduce((o,i)=>o+(Mw.test(i)?zw:i===""?Fw:Uw),r)}function Vw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ww(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=Qw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;i.push({params:r,pathname:Fn([o,c.pathname]),pathnameBase:Jw(Fn([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=Fn([o,c.pathnameBase]))}return i}function Qw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yw(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let g=s[d]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=Kw(s[d]||"",c),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Yw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ds(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function qw(e){try{return decodeURI(e)}catch(t){return Ds(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kw(e,t){try{return decodeURIComponent(e)}catch(n){return Ds(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ud(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Gw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?xr(e):e;return{pathname:n?n.startsWith("/")?n:Xw(n,t):t,search:Zw(r),hash:e2(o)}}function Xw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function D0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xr(e):(o=gi({},e),Ae(!o.pathname||!o.pathname.includes("?"),Gl("?","pathname","search",o)),Ae(!o.pathname||!o.pathname.includes("#"),Gl("#","pathname","hash",o)),Ae(!o.search||!o.search.includes("#"),Gl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),d-=1;o.pathname=g.join("/")}s=d>=0?t[d]:"/"}let l=Gw(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),Jw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,e2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function t2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const F0=["post","put","patch","delete"];new Set(F0);const n2=["get",...F0];new Set(n2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}const Bd=k.createContext(null),r2=k.createContext(null),ho=k.createContext(null),Fs=k.createContext(null),wr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),U0=k.createContext(null);function o2(e,t){let{relative:n}=t===void 0?{}:t;_i()||Ae(!1);let{basename:r,navigator:o}=k.useContext(ho),{hash:i,pathname:a,search:s}=H0(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Fn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function _i(){return k.useContext(Fs)!=null}function Us(){return _i()||Ae(!1),k.useContext(Fs).location}function B0(e){k.useContext(ho).static||k.useLayoutEffect(e)}function i2(){let{isDataRoute:e}=k.useContext(wr);return e?y2():a2()}function a2(){_i()||Ae(!1);let e=k.useContext(Bd),{basename:t,navigator:n}=k.useContext(ho),{matches:r}=k.useContext(wr),{pathname:o}=Us(),i=JSON.stringify(z0(r).map(l=>l.pathnameBase)),a=k.useRef(!1);return B0(()=>{a.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=D0(l,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Fn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,i,o,e])}function H0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(wr),{pathname:o}=Us(),i=JSON.stringify(z0(r).map(a=>a.pathnameBase));return k.useMemo(()=>D0(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function s2(e,t){return l2(e,t)}function l2(e,t,n){_i()||Ae(!1);let{navigator:r}=k.useContext(ho),{matches:o}=k.useContext(wr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let l=Us(),u;if(t){var c;let y=typeof t=="string"?xr(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||Ae(!1),u=y}else u=l;let d=u.pathname||"/",g=s==="/"?d:d.slice(s.length)||"/",v=Iw(e,{pathname:g}),h=p2(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Fn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Fn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n);return t&&h?k.createElement(Fs.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$n.Pop}},h):h}function u2(){let e=v2(),t=t2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,i)}const c2=k.createElement(u2,null);class d2 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(wr.Provider,{value:this.props.routeContext},k.createElement(U0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function f2(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Bd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(wr.Provider,{value:t},r)}function p2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=i.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||Ae(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||c2);let g=t.concat(i.slice(0,u+1)),v=()=>{let h;return c?h=d:l.route.Component?h=k.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=s,k.createElement(f2,{match:l,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:h})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(d2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var V0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(V0||{}),ls=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ls||{});function h2(e){let t=k.useContext(Bd);return t||Ae(!1),t}function m2(e){let t=k.useContext(r2);return t||Ae(!1),t}function g2(e){let t=k.useContext(wr);return t||Ae(!1),t}function W0(e){let t=g2(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function v2(){var e;let t=k.useContext(U0),n=m2(ls.UseRouteError),r=W0(ls.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function y2(){let{router:e}=h2(V0.UseNavigateStable),t=W0(ls.UseNavigateStable),n=k.useRef(!1);return B0(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ss({fromRouteId:t},i)))},[e,t])}function Lo(e){Ae(!1)}function x2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=$n.Pop,navigator:i,static:a=!1}=e;_i()&&Ae(!1);let s=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=xr(r));let{pathname:u="/",search:c="",hash:d="",state:g=null,key:v="default"}=r,h=k.useMemo(()=>{let y=Ud(u,s);return y==null?null:{location:{pathname:y,search:c,hash:d,state:g,key:v},navigationType:o}},[s,u,c,d,g,v,o]);return h==null?null:k.createElement(ho.Provider,{value:l},k.createElement(Fs.Provider,{children:n,value:h}))}function w2(e){let{children:t,location:n}=e;return s2(Sc(t),n)}new Promise(()=>{});function Sc(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Sc(r.props.children,i));return}r.type!==Lo&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Sc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ec(){return Ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ec.apply(this,arguments)}function S2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function E2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function b2(e,t){return e.button===0&&(!t||t==="_self")&&!E2(e)}const j2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],T2="startTransition",Fp=wy[T2];function C2(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Rw({window:o,v5Compat:!0}));let a=i.current,[s,l]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&Fp?Fp(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>a.listen(c),[a,c]),k.createElement(x2,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const k2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,d=S2(t,j2),{basename:g}=k.useContext(ho),v,h=!1;if(typeof u=="string"&&P2.test(u)&&(v=u,k2))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=Ud(x.pathname,g);x.origin===p.origin&&w!=null?u=w+x.search+x.hash:h=!0}catch{}let y=o2(u,{relative:o}),E=$2(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o});function m(p){r&&r(p),p.defaultPrevented||E(p)}return k.createElement("a",Ec({},d,{href:v||y,onClick:h||i?r:m,ref:n,target:l}))});var Up;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Up||(Up={}));var Bp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bp||(Bp={}));function $2(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=i2(),l=Us(),u=H0(e,{relative:a});return k.useCallback(c=>{if(b2(c,n)){c.preventDefault();let d=r!==void 0?r:as(l)===as(u);s(e,{replace:d,state:o,preventScrollReset:i,relative:a})}},[l,s,u,r,o,n,e,i,a])}var Q0={exports:{}};(function(e,t){(function(r,o){e.exports=o(k)})(oy,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,l)=>{l.match=h,l.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,v=/(dpi|dpcm|dppx)?$/;function h(x,w){return y(x).some(function(b){var C=b.inverse,T=b.type==="all"||w.type===b.type;if(T&&C||!(T||C))return!1;var $=b.expressions.every(function(O){var R=O.feature,D=O.modifier,U=O.value,F=w[R];if(!F)return!1;switch(R){case"orientation":case"scan":return F.toLowerCase()===U.toLowerCase();case"width":case"height":case"device-width":case"device-height":U=p(U),F=p(F);break;case"resolution":U=m(U),F=m(F);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":U=E(U),F=E(F);break;case"grid":case"color":case"color-index":case"monochrome":U=parseInt(U,10)||1,F=parseInt(F,10)||0;break}switch(D){case"min":return F>=U;case"max":return F<=U;default:return F===U}});return $&&!C||!$&&C})}function y(x){return x.split(",").map(function(w){w=w.trim();var b=w.match(u),C=b[1],T=b[2],$=b[3]||"",O={};return O.inverse=!!C&&C.toLowerCase()==="not",O.type=T?T.toLowerCase():"all",$=$.match(/\([^\)]+\)/g)||[],O.expressions=$.map(function(R){var D=R.match(c),U=D[1].toLowerCase().match(d);return{modifier:U[1],feature:U[2],value:D[2]}}),O})}function E(x){var w=Number(x),b;return w||(b=x.match(/^(\d+)\s*\/\s*(\d+)$/),w=b[1]/b[2]),w}function m(x){var w=parseFloat(x),b=String(x).match(v)[1];switch(b){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function p(x){var w=parseFloat(x),b=String(x).match(g)[1];switch(b){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(s,l,u)=>{u.r(l),u.d(l,{default:()=>y});var c=/[A-Z]/g,d=/^ms-/,g={};function v(E){return"-"+E.toLowerCase()}function h(E){if(g.hasOwnProperty(E))return g[E];var m=E.replace(c,v);return g[E]=d.test(m)?"-"+m:m}const y=h},"./node_modules/matchmediaquery/index.js":(s,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function g(h,y,E){var m=this;if(d&&!E){var p=d.call(window,h);this.matches=p.matches,this.media=p.media,p.addListener(b)}else this.matches=c(h,y),this.media=h;this.addListener=x,this.removeListener=w,this.dispose=C;function x(T){p&&p.addListener(T)}function w(T){p&&p.removeListener(T)}function b(T){m.matches=T.matches,m.media=T.media}function C(){p&&p.removeListener(b)}}function v(h,y,E){return new g(h,y,E)}s.exports=v},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function g(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var h={},y=0;y<10;y++)h["_"+String.fromCharCode(y)]=y;var E=Object.getOwnPropertyNames(h).map(function(p){return h[p]});if(E.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(p){m[p]=p}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=g()?Object.assign:function(v,h){for(var y,E=d(v),m,p=1;p<arguments.length;p++){y=Object(arguments[p]);for(var x in y)u.call(y,x)&&(E[x]=y[x]);if(l){m=l(y);for(var w=0;w<m.length;w++)c.call(y,m[w])&&(E[m[w]]=y[m[w]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(s,l,u)=>{var c=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},v=u("./node_modules/prop-types/lib/has.js");c=function(y){var E="Warning: "+y;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function h(y,E,m,p,x){for(var w in y)if(v(y,w)){var b;try{if(typeof y[w]!="function"){var C=Error((p||"React class")+": "+m+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}b=y[w](E,w,p,m,null,d)}catch($){b=$}if(b&&!(b instanceof Error)&&c((p||"React class")+": type specification of "+m+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof b+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),b instanceof Error&&!(b.message in g)){g[b.message]=!0;var T=x?x():"";c("Failed "+m+" type: "+b.message+(T??""))}}}h.resetWarningCache=function(){g={}},s.exports=h},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,l,u)=>{var c=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),g=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v=u("./node_modules/prop-types/lib/has.js"),h=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(m){var p="Warning: "+m;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}};function E(){return null}s.exports=function(m,p){var x=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function b(_){var z=_&&(x&&_[x]||_[w]);if(typeof z=="function")return z}var C="<<anonymous>>",T={array:D("array"),bigint:D("bigint"),bool:D("boolean"),func:D("function"),number:D("number"),object:D("object"),string:D("string"),symbol:D("symbol"),any:U(),arrayOf:F,element:J(),elementType:xe(),instanceOf:ae,node:H(),objectOf:N,oneOf:pe,oneOfType:B,shape:he,exact:lt};function $(_,z){return _===z?_!==0||1/_===1/z:_!==_&&z!==z}function O(_,z){this.message=_,this.data=z&&typeof z=="object"?z:{},this.stack=""}O.prototype=Error.prototype;function R(_){var z={},Z=0;function K(re,q,G,oe,ue,ie,I){if(oe=oe||C,ie=ie||G,I!==g){if(p){var Me=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Me.name="Invariant Violation",Me}else if(typeof console<"u"){var Rt=oe+":"+G;!z[Rt]&&Z<3&&(y("You are manually calling a React.PropTypes validation function for the `"+ie+"` prop on `"+oe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),z[Rt]=!0,Z++)}}return q[G]==null?re?q[G]===null?new O("The "+ue+" `"+ie+"` is marked as required "+("in `"+oe+"`, but its value is `null`.")):new O("The "+ue+" `"+ie+"` is marked as required in "+("`"+oe+"`, but its value is `undefined`.")):null:_(q,G,oe,ue,ie)}var Q=K.bind(null,!1);return Q.isRequired=K.bind(null,!0),Q}function D(_){function z(Z,K,Q,re,q,G){var oe=Z[K],ue=we(oe);if(ue!==_){var ie=Pe(oe);return new O("Invalid "+re+" `"+q+"` of type "+("`"+ie+"` supplied to `"+Q+"`, expected ")+("`"+_+"`."),{expectedType:_})}return null}return R(z)}function U(){return R(E)}function F(_){function z(Z,K,Q,re,q){if(typeof _!="function")return new O("Property `"+q+"` of component `"+Q+"` has invalid PropType notation inside arrayOf.");var G=Z[K];if(!Array.isArray(G)){var oe=we(G);return new O("Invalid "+re+" `"+q+"` of type "+("`"+oe+"` supplied to `"+Q+"`, expected an array."))}for(var ue=0;ue<G.length;ue++){var ie=_(G,ue,Q,re,q+"["+ue+"]",g);if(ie instanceof Error)return ie}return null}return R(z)}function J(){function _(z,Z,K,Q,re){var q=z[Z];if(!m(q)){var G=we(q);return new O("Invalid "+Q+" `"+re+"` of type "+("`"+G+"` supplied to `"+K+"`, expected a single ReactElement."))}return null}return R(_)}function xe(){function _(z,Z,K,Q,re){var q=z[Z];if(!c.isValidElementType(q)){var G=we(q);return new O("Invalid "+Q+" `"+re+"` of type "+("`"+G+"` supplied to `"+K+"`, expected a single ReactElement type."))}return null}return R(_)}function ae(_){function z(Z,K,Q,re,q){if(!(Z[K]instanceof _)){var G=_.name||C,oe=en(Z[K]);return new O("Invalid "+re+" `"+q+"` of type "+("`"+oe+"` supplied to `"+Q+"`, expected ")+("instance of `"+G+"`."))}return null}return R(z)}function pe(_){if(!Array.isArray(_))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),E;function z(Z,K,Q,re,q){for(var G=Z[K],oe=0;oe<_.length;oe++)if($(G,_[oe]))return null;var ue=JSON.stringify(_,function(I,Me){var Rt=Pe(Me);return Rt==="symbol"?String(Me):Me});return new O("Invalid "+re+" `"+q+"` of value `"+String(G)+"` "+("supplied to `"+Q+"`, expected one of "+ue+"."))}return R(z)}function N(_){function z(Z,K,Q,re,q){if(typeof _!="function")return new O("Property `"+q+"` of component `"+Q+"` has invalid PropType notation inside objectOf.");var G=Z[K],oe=we(G);if(oe!=="object")return new O("Invalid "+re+" `"+q+"` of type "+("`"+oe+"` supplied to `"+Q+"`, expected an object."));for(var ue in G)if(v(G,ue)){var ie=_(G,ue,Q,re,q+"."+ue,g);if(ie instanceof Error)return ie}return null}return R(z)}function B(_){if(!Array.isArray(_))return y("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var z=0;z<_.length;z++){var Z=_[z];if(typeof Z!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Xn(Z)+" at index "+z+"."),E}function K(Q,re,q,G,oe){for(var ue=[],ie=0;ie<_.length;ie++){var I=_[ie],Me=I(Q,re,q,G,oe,g);if(Me==null)return null;Me.data&&v(Me.data,"expectedType")&&ue.push(Me.data.expectedType)}var Rt=ue.length>0?", expected one of type ["+ue.join(", ")+"]":"";return new O("Invalid "+G+" `"+oe+"` supplied to "+("`"+q+"`"+Rt+"."))}return R(K)}function H(){function _(z,Z,K,Q,re){return Oe(z[Z])?null:new O("Invalid "+Q+" `"+re+"` supplied to "+("`"+K+"`, expected a ReactNode."))}return R(_)}function le(_,z,Z,K,Q){return new O((_||"React class")+": "+z+" type `"+Z+"."+K+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+Q+"`.")}function he(_){function z(Z,K,Q,re,q){var G=Z[K],oe=we(G);if(oe!=="object")return new O("Invalid "+re+" `"+q+"` of type `"+oe+"` "+("supplied to `"+Q+"`, expected `object`."));for(var ue in _){var ie=_[ue];if(typeof ie!="function")return le(Q,re,q,ue,Pe(ie));var I=ie(G,ue,Q,re,q+"."+ue,g);if(I)return I}return null}return R(z)}function lt(_){function z(Z,K,Q,re,q){var G=Z[K],oe=we(G);if(oe!=="object")return new O("Invalid "+re+" `"+q+"` of type `"+oe+"` "+("supplied to `"+Q+"`, expected `object`."));var ue=d({},Z[K],_);for(var ie in ue){var I=_[ie];if(v(_,ie)&&typeof I!="function")return le(Q,re,q,ie,Pe(I));if(!I)return new O("Invalid "+re+" `"+q+"` key `"+ie+"` supplied to `"+Q+"`.\nBad object: "+JSON.stringify(Z[K],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(_),null,"  "));var Me=I(G,ie,Q,re,q+"."+ie,g);if(Me)return Me}return null}return R(z)}function Oe(_){switch(typeof _){case"number":case"string":case"undefined":return!0;case"boolean":return!_;case"object":if(Array.isArray(_))return _.every(Oe);if(_===null||m(_))return!0;var z=b(_);if(z){var Z=z.call(_),K;if(z!==_.entries){for(;!(K=Z.next()).done;)if(!Oe(K.value))return!1}else for(;!(K=Z.next()).done;){var Q=K.value;if(Q&&!Oe(Q[1]))return!1}}else return!1;return!0;default:return!1}}function vt(_,z){return _==="symbol"?!0:z?z["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&z instanceof Symbol:!1}function we(_){var z=typeof _;return Array.isArray(_)?"array":_ instanceof RegExp?"object":vt(z,_)?"symbol":z}function Pe(_){if(typeof _>"u"||_===null)return""+_;var z=we(_);if(z==="object"){if(_ instanceof Date)return"date";if(_ instanceof RegExp)return"regexp"}return z}function Xn(_){var z=Pe(_);switch(z){case"array":case"object":return"an "+z;case"boolean":case"date":case"regexp":return"a "+z;default:return z}}function en(_){return!_.constructor||!_.constructor.name?C:_.constructor.name}return T.checkPropTypes=h,T.resetWarningCache=h.resetWarningCache,T.PropTypes=T,T}},"./node_modules/prop-types/index.js":(s,l,u)=>{{var c=u("./node_modules/react-is/index.js"),d=!0;s.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=l},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,g=u?Symbol.for("react.fragment"):60107,v=u?Symbol.for("react.strict_mode"):60108,h=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,E=u?Symbol.for("react.context"):60110,m=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.concurrent_mode"):60111,x=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,b=u?Symbol.for("react.suspense_list"):60120,C=u?Symbol.for("react.memo"):60115,T=u?Symbol.for("react.lazy"):60116,$=u?Symbol.for("react.block"):60121,O=u?Symbol.for("react.fundamental"):60117,R=u?Symbol.for("react.responder"):60118,D=u?Symbol.for("react.scope"):60119;function U(I){return typeof I=="string"||typeof I=="function"||I===g||I===p||I===h||I===v||I===w||I===b||typeof I=="object"&&I!==null&&(I.$$typeof===T||I.$$typeof===C||I.$$typeof===y||I.$$typeof===E||I.$$typeof===x||I.$$typeof===O||I.$$typeof===R||I.$$typeof===D||I.$$typeof===$)}function F(I){if(typeof I=="object"&&I!==null){var Me=I.$$typeof;switch(Me){case c:var Rt=I.type;switch(Rt){case m:case p:case g:case h:case v:case w:return Rt;default:var hf=Rt&&Rt.$$typeof;switch(hf){case E:case x:case T:case C:case y:return hf;default:return Me}}case d:return Me}}}var J=m,xe=p,ae=E,pe=y,N=c,B=x,H=g,le=T,he=C,lt=d,Oe=h,vt=v,we=w,Pe=!1;function Xn(I){return Pe||(Pe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),en(I)||F(I)===m}function en(I){return F(I)===p}function _(I){return F(I)===E}function z(I){return F(I)===y}function Z(I){return typeof I=="object"&&I!==null&&I.$$typeof===c}function K(I){return F(I)===x}function Q(I){return F(I)===g}function re(I){return F(I)===T}function q(I){return F(I)===C}function G(I){return F(I)===d}function oe(I){return F(I)===h}function ue(I){return F(I)===v}function ie(I){return F(I)===w}l.AsyncMode=J,l.ConcurrentMode=xe,l.ContextConsumer=ae,l.ContextProvider=pe,l.Element=N,l.ForwardRef=B,l.Fragment=H,l.Lazy=le,l.Memo=he,l.Portal=lt,l.Profiler=Oe,l.StrictMode=vt,l.Suspense=we,l.isAsyncMode=Xn,l.isConcurrentMode=en,l.isContextConsumer=_,l.isContextProvider=z,l.isElement=Z,l.isForwardRef=K,l.isFragment=Q,l.isLazy=re,l.isMemo=q,l.isPortal=G,l.isProfiler=oe,l.isStrictMode=ue,l.isSuspense=ie,l.isValidElementType=U,l.typeOf=F})()},"./node_modules/react-is/index.js":(s,l,u)=>{s.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>c});function c(g,v){if(g===v)return!0;if(!g||!v)return!1;var h=Object.keys(g),y=Object.keys(v),E=h.length;if(y.length!==E)return!1;for(var m=0;m<E;m++){var p=h[m];if(g[p]!==v[p]||!Object.prototype.hasOwnProperty.call(v,p))return!1}return!0}function d(g,v){if(g===v)return!0;if(!g||!v)return!1;var h=g.length;if(v.length!==h)return!1;for(var y=0;y<h;y++)if(g[y]!==v[y])return!1;return!0}},"./src/Component.ts":function(s,l,u){var c=this&&this.__rest||function(h,y){var E={};for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&y.indexOf(m)<0&&(E[m]=h[m]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,m=Object.getOwnPropertySymbols(h);p<m.length;p++)y.indexOf(m[p])<0&&Object.prototype.propertyIsEnumerable.call(h,m[p])&&(E[m[p]]=h[m[p]]);return E},d=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(l,"__esModule",{value:!0});var g=d(u("./src/useMediaQuery.ts")),v=function(h){var y=h.children,E=h.device,m=h.onChange,p=c(h,["children","device","onChange"]),x=(0,g.default)(p,E,m);return typeof y=="function"?y(x):x?y:null};l.default=v},"./src/Context.ts":(s,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),d=(0,c.createContext)(void 0);l.default=d},"./src/index.ts":function(s,l,u){var c=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var d=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=d.default;var g=c(u("./src/Component.ts"));l.default=g.default;var v=c(u("./src/toQuery.ts"));l.toQuery=v.default;var h=c(u("./src/Context.ts"));l.Context=h.default},"./src/mediaQuery.ts":function(s,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(w){for(var b,C=1,T=arguments.length;C<T;C++){b=arguments[C];for(var $ in b)Object.prototype.hasOwnProperty.call(b,$)&&(w[$]=b[$])}return w},c.apply(this,arguments)},d=this&&this.__rest||function(w,b){var C={};for(var T in w)Object.prototype.hasOwnProperty.call(w,T)&&b.indexOf(T)<0&&(C[T]=w[T]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,T=Object.getOwnPropertySymbols(w);$<T.length;$++)b.indexOf(T[$])<0&&Object.prototype.propertyIsEnumerable.call(w,T[$])&&(C[T[$]]=w[T[$]]);return C},g=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(l,"__esModule",{value:!0});var v=g(u("./node_modules/prop-types/index.js")),h=v.default.oneOfType([v.default.string,v.default.number]),y={all:v.default.bool,grid:v.default.bool,aural:v.default.bool,braille:v.default.bool,handheld:v.default.bool,print:v.default.bool,projection:v.default.bool,screen:v.default.bool,tty:v.default.bool,tv:v.default.bool,embossed:v.default.bool},E={orientation:v.default.oneOf(["portrait","landscape"]),scan:v.default.oneOf(["progressive","interlace"]),aspectRatio:v.default.string,deviceAspectRatio:v.default.string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:v.default.bool,colorIndex:v.default.bool,monochrome:v.default.bool,resolution:h,type:Object.keys(y)};E.type;var m=d(E,["type"]),p=c({minAspectRatio:v.default.string,maxAspectRatio:v.default.string,minDeviceAspectRatio:v.default.string,maxDeviceAspectRatio:v.default.string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:v.default.number,maxColor:v.default.number,minColorIndex:v.default.number,maxColorIndex:v.default.number,minMonochrome:v.default.number,maxMonochrome:v.default.number,minResolution:h,maxResolution:h},m),x=c(c({},y),p);l.default={all:x,types:y,matchers:E,features:p}},"./src/toQuery.ts":function(s,l,u){var c=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(l,"__esModule",{value:!0});var d=c(u("./node_modules/hyphenate-style-name/index.js")),g=c(u("./src/mediaQuery.ts")),v=function(m){return"not ".concat(m)},h=function(m,p){var x=(0,d.default)(m);return typeof p=="number"&&(p="".concat(p,"px")),p===!0?x:p===!1?v(x):"(".concat(x,": ").concat(p,")")},y=function(m){return m.join(" and ")},E=function(m){var p=[];return Object.keys(g.default.all).forEach(function(x){var w=m[x];w!=null&&p.push(h(x,w))}),y(p)};l.default=E},"./src/useMediaQuery.ts":function(s,l,u){var c=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(l,"__esModule",{value:!0});var d=u("react"),g=c(u("./node_modules/matchmediaquery/index.js")),v=c(u("./node_modules/hyphenate-style-name/index.js")),h=u("./node_modules/shallow-equal/dist/index.esm.js"),y=c(u("./src/toQuery.ts")),E=c(u("./src/Context.ts")),m=function(O){return O.query||(0,y.default)(O)},p=function(O){if(O){var R=Object.keys(O);return R.reduce(function(D,U){return D[(0,v.default)(U)]=O[U],D},{})}},x=function(){var O=(0,d.useRef)(!1);return(0,d.useEffect)(function(){O.current=!0},[]),O.current},w=function(O){var R=(0,d.useContext)(E.default),D=function(){return p(O)||p(R)},U=(0,d.useState)(D),F=U[0],J=U[1];return(0,d.useEffect)(function(){var xe=D();(0,h.shallowEqualObjects)(F,xe)||J(xe)},[O,R]),F},b=function(O){var R=function(){return m(O)},D=(0,d.useState)(R),U=D[0],F=D[1];return(0,d.useEffect)(function(){var J=R();U!==J&&F(J)},[O]),U},C=function(O,R){var D=function(){return(0,g.default)(O,R||{},!!R)},U=(0,d.useState)(D),F=U[0],J=U[1],xe=x();return(0,d.useEffect)(function(){if(xe){var ae=D();return J(ae),function(){ae&&ae.dispose()}}},[O,R]),F},T=function(O){var R=(0,d.useState)(O.matches),D=R[0],U=R[1];return(0,d.useEffect)(function(){var F=function(J){U(J.matches)};return O.addListener(F),U(O.matches),function(){O.removeListener(F)}},[O]),D},$=function(O,R,D){var U=w(R),F=b(O);if(!F)throw new Error("Invalid or missing MediaQuery!");var J=C(F,U),xe=T(J),ae=x();return(0,d.useEffect)(function(){ae&&D&&D(xe)},[xe]),(0,d.useEffect)(function(){return function(){J&&J.dispose()}},[]),xe};l.default=$},react:s=>{s.exports=n}},o={};function i(s){var l=o[s];if(l!==void 0)return l.exports;var u=o[s]={exports:{}};return r[s].call(u.exports,u,u.exports,i),u.exports}i.d=(s,l)=>{for(var u in l)i.o(l,u)&&!i.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:l[u]})},i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a=i("./src/index.ts");return a})())})(Q0);var O2=Q0.exports,Y0={exports:{}},_2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R2=_2,A2=R2;function q0(){}function K0(){}K0.resetWarningCache=q0;var N2=function(){function e(r,o,i,a,s,l){if(l!==A2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:K0,resetWarningCache:q0};return n.PropTypes=n,n};Y0.exports=N2();var I2=Y0.exports;const te=ji(I2),S={colors:{white:"#FEFEFF",seasalt:"#F9F9F9",lavender:"#EFECFF",platinum:"#E2DFDF",gray:"#797979",raisinblack:"#242331",onyx:"#413F50",lavenderfloral:"#B06EFE",electricindigo:"#5236FF"},bp:{"x-small":"576px",small:"767px",medium:"992px",large:"1200px"}},L2=j.div`
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
    color: ${S.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: ${S.colors.onyx};
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
  }
`;function Mr({buttonText:e,handleClick:t}){return f.jsx(L2,{children:f.jsx("button",{onClick:t,children:e})})}Mr.propTypes={buttonText:te.string,handleClick:te.func};const M2=j.div`
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
    color: ${S.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: linear-gradient(
      to right,
      ${S.colors.electricindigo} 0%,
      ${S.colors.lavenderfloral} 100%
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
  }
`;function us({buttonText:e,handleClick:t}){return f.jsx(M2,{children:f.jsx("button",{onClick:t,children:e})})}us.propTypes={buttonText:te.string,handleClick:te.func};var G0={exports:{}},X0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=k;function z2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var D2=typeof Object.is=="function"?Object.is:z2,F2=ao.useState,U2=ao.useEffect,B2=ao.useLayoutEffect,H2=ao.useDebugValue;function V2(e,t){var n=t(),r=F2({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return B2(function(){o.value=n,o.getSnapshot=t,Xl(o)&&i({inst:o})},[e,n,t]),U2(function(){return Xl(o)&&i({inst:o}),e(function(){Xl(o)&&i({inst:o})})},[e]),H2(n),n}function Xl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!D2(e,n)}catch{return!0}}function W2(e,t){return t()}var Q2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?W2:V2;X0.useSyncExternalStore=ao.useSyncExternalStore!==void 0?ao.useSyncExternalStore:Q2;G0.exports=X0;var Y2=G0.exports,J0={exports:{}},Z0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=k,q2=Y2;function K2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var G2=typeof Object.is=="function"?Object.is:K2,X2=q2.useSyncExternalStore,J2=Bs.useRef,Z2=Bs.useEffect,eS=Bs.useMemo,tS=Bs.useDebugValue;Z0.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=J2(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=eS(function(){function l(v){if(!u){if(u=!0,c=v,v=r(v),o!==void 0&&a.hasValue){var h=a.value;if(o(h,v))return d=h}return d=v}if(h=d,G2(c,v))return h;var y=r(v);return o!==void 0&&o(h,y)?h:(c=v,d=y)}var u=!1,c,d,g=n===void 0?null:n;return[function(){return l(t())},g===null?void 0:function(){return l(g())}]},[t,n,r,o]);var s=X2(e,i[0],i[1]);return Z2(function(){a.hasValue=!0,a.value=s},[s]),tS(s),s};J0.exports=Z0;var nS=J0.exports;function rS(e){e()}let ev=rS;const oS=e=>ev=e,iS=()=>ev,Hp=Symbol.for("react-redux-context"),Vp=typeof globalThis<"u"?globalThis:{};function aS(){var e;if(!k.createContext)return{};const t=(e=Vp[Hp])!=null?e:Vp[Hp]=new Map;let n=t.get(k.createContext);return n||(n=k.createContext(null),t.set(k.createContext,n)),n}const Qn=aS();function Hd(e=Qn){return function(){return k.useContext(e)}}const tv=Hd(),sS=()=>{throw new Error("uSES not initialized!")};let nv=sS;const lS=e=>{nv=e},uS=(e,t)=>e===t;function cS(e=Qn){const t=e===Qn?tv:Hd(e);return function(r,o={}){const{equalityFn:i=uS,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:l,subscription:u,getServerState:c,stabilityCheck:d,noopCheck:g}=t();k.useRef(!0);const v=k.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,a]),h=nv(u.addNestedSub,l.getState,c||l.getState,v,i);return k.useDebugValue(h),h}}const Vd=cS();var rv={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,Wd=Ue?Symbol.for("react.element"):60103,Qd=Ue?Symbol.for("react.portal"):60106,Hs=Ue?Symbol.for("react.fragment"):60107,Vs=Ue?Symbol.for("react.strict_mode"):60108,Ws=Ue?Symbol.for("react.profiler"):60114,Qs=Ue?Symbol.for("react.provider"):60109,Ys=Ue?Symbol.for("react.context"):60110,Yd=Ue?Symbol.for("react.async_mode"):60111,qs=Ue?Symbol.for("react.concurrent_mode"):60111,Ks=Ue?Symbol.for("react.forward_ref"):60112,Gs=Ue?Symbol.for("react.suspense"):60113,dS=Ue?Symbol.for("react.suspense_list"):60120,Xs=Ue?Symbol.for("react.memo"):60115,Js=Ue?Symbol.for("react.lazy"):60116,fS=Ue?Symbol.for("react.block"):60121,pS=Ue?Symbol.for("react.fundamental"):60117,hS=Ue?Symbol.for("react.responder"):60118,mS=Ue?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wd:switch(e=e.type,e){case Yd:case qs:case Hs:case Ws:case Vs:case Gs:return e;default:switch(e=e&&e.$$typeof,e){case Ys:case Ks:case Js:case Xs:case Qs:return e;default:return t}}case Qd:return t}}}function ov(e){return gt(e)===qs}de.AsyncMode=Yd;de.ConcurrentMode=qs;de.ContextConsumer=Ys;de.ContextProvider=Qs;de.Element=Wd;de.ForwardRef=Ks;de.Fragment=Hs;de.Lazy=Js;de.Memo=Xs;de.Portal=Qd;de.Profiler=Ws;de.StrictMode=Vs;de.Suspense=Gs;de.isAsyncMode=function(e){return ov(e)||gt(e)===Yd};de.isConcurrentMode=ov;de.isContextConsumer=function(e){return gt(e)===Ys};de.isContextProvider=function(e){return gt(e)===Qs};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wd};de.isForwardRef=function(e){return gt(e)===Ks};de.isFragment=function(e){return gt(e)===Hs};de.isLazy=function(e){return gt(e)===Js};de.isMemo=function(e){return gt(e)===Xs};de.isPortal=function(e){return gt(e)===Qd};de.isProfiler=function(e){return gt(e)===Ws};de.isStrictMode=function(e){return gt(e)===Vs};de.isSuspense=function(e){return gt(e)===Gs};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hs||e===qs||e===Ws||e===Vs||e===Gs||e===dS||typeof e=="object"&&e!==null&&(e.$$typeof===Js||e.$$typeof===Xs||e.$$typeof===Qs||e.$$typeof===Ys||e.$$typeof===Ks||e.$$typeof===pS||e.$$typeof===hS||e.$$typeof===mS||e.$$typeof===fS)};de.typeOf=gt;rv.exports=de;var gS=rv.exports,iv=gS,vS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},av={};av[iv.ForwardRef]=vS;av[iv.Memo]=yS;var fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),tl=Symbol.for("react.profiler"),nl=Symbol.for("react.provider"),rl=Symbol.for("react.context"),xS=Symbol.for("react.server_context"),ol=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),sl=Symbol.for("react.memo"),ll=Symbol.for("react.lazy"),wS=Symbol.for("react.offscreen"),sv;sv=Symbol.for("react.module.reference");function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qd:switch(e=e.type,e){case Zs:case tl:case el:case il:case al:return e;default:switch(e=e&&e.$$typeof,e){case xS:case rl:case ol:case ll:case sl:case nl:return e;default:return t}}case Kd:return t}}}fe.ContextConsumer=rl;fe.ContextProvider=nl;fe.Element=qd;fe.ForwardRef=ol;fe.Fragment=Zs;fe.Lazy=ll;fe.Memo=sl;fe.Portal=Kd;fe.Profiler=tl;fe.StrictMode=el;fe.Suspense=il;fe.SuspenseList=al;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return _t(e)===rl};fe.isContextProvider=function(e){return _t(e)===nl};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qd};fe.isForwardRef=function(e){return _t(e)===ol};fe.isFragment=function(e){return _t(e)===Zs};fe.isLazy=function(e){return _t(e)===ll};fe.isMemo=function(e){return _t(e)===sl};fe.isPortal=function(e){return _t(e)===Kd};fe.isProfiler=function(e){return _t(e)===tl};fe.isStrictMode=function(e){return _t(e)===el};fe.isSuspense=function(e){return _t(e)===il};fe.isSuspenseList=function(e){return _t(e)===al};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Zs||e===tl||e===el||e===il||e===al||e===wS||typeof e=="object"&&e!==null&&(e.$$typeof===ll||e.$$typeof===sl||e.$$typeof===nl||e.$$typeof===rl||e.$$typeof===ol||e.$$typeof===sv||e.getModuleId!==void 0)};fe.typeOf=_t;function SS(){const e=iS();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Wp={notify(){},get:()=>[]};function ES(e,t){let n,r=Wp,o=0,i=!1;function a(y){c();const E=r.subscribe(y);let m=!1;return()=>{m||(m=!0,E(),d())}}function s(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function u(){return i}function c(){o++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=SS())}function d(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Wp)}function g(){i||(i=!0,c())}function v(){i&&(i=!1,d())}const h={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:g,tryUnsubscribe:v,getListeners:()=>r};return h}const bS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jS=bS?k.useLayoutEffect:k.useEffect;function TS({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=k.useMemo(()=>{const u=ES(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=k.useMemo(()=>e.getState(),[e]);jS(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||Qn;return k.createElement(l.Provider,{value:a},n)}function lv(e=Qn){const t=e===Qn?tv:Hd(e);return function(){const{store:r}=t();return r}}const CS=lv();function kS(e=Qn){const t=e===Qn?CS:lv(e);return function(){return t().dispatch}}const Ri=kS();lS(nS.useSyncExternalStoreWithSelector);oS(p0.unstable_batchedUpdates);function Mt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Yn(e){return!!e&&!!e[Ee]}function hn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===LS}(e)||Array.isArray(e)||!!e[Jp]||!!(!((t=e.constructor)===null||t===void 0)&&t[Jp])||Gd(e)||Xd(e))}function mr(e,t,n){n===void 0&&(n=!1),go(e)===0?(n?Object.keys:Qr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function go(e){var t=e[Ee];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Gd(e)?2:Xd(e)?3:0}function Wr(e,t){return go(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function PS(e,t){return go(e)===2?e.get(t):e[t]}function uv(e,t,n){var r=go(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function cv(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Gd(e){return NS&&e instanceof Map}function Xd(e){return IS&&e instanceof Set}function er(e){return e.o||e.t}function Jd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=fv(e);delete t[Ee];for(var n=Qr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Zd(e,t){return t===void 0&&(t=!1),ef(e)||Yn(e)||!hn(e)||(go(e)>1&&(e.set=e.add=e.clear=e.delete=$S),Object.freeze(e),t&&mr(e,function(n,r){return Zd(r,!0)},!0)),e}function $S(){Mt(2)}function ef(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Xt(e){var t=Cc[e];return t||Mt(18,e),t}function OS(e,t){Cc[e]||(Cc[e]=t)}function bc(){return vi}function Jl(e,t){t&&(Xt("Patches"),e.u=[],e.s=[],e.v=t)}function cs(e){jc(e),e.p.forEach(_S),e.p=null}function jc(e){e===vi&&(vi=e.l)}function Qp(e){return vi={p:[],l:vi,h:e,m:!0,_:0}}function _S(e){var t=e[Ee];t.i===0||t.i===1?t.j():t.g=!0}function Zl(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Xt("ES5").S(t,e,r),r?(n[Ee].P&&(cs(t),Mt(4)),hn(e)&&(e=ds(t,e),t.l||fs(t,e)),t.u&&Xt("Patches").M(n[Ee].t,e,t.u,t.s)):e=ds(t,n,[]),cs(t),t.u&&t.v(t.u,t.s),e!==dv?e:void 0}function ds(e,t,n){if(ef(t))return t;var r=t[Ee];if(!r)return mr(t,function(s,l){return Yp(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return fs(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Jd(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),mr(i,function(s,l){return Yp(e,r,o,s,l,n,a)}),fs(e,o,!1),n&&e.u&&Xt("Patches").N(r,n,e.u,e.s)}return r.o}function Yp(e,t,n,r,o,i,a){if(Yn(o)){var s=ds(e,o,i&&t&&t.i!==3&&!Wr(t.R,r)?i.concat(r):void 0);if(uv(n,r,s),!Yn(s))return;e.m=!1}else a&&n.add(o);if(hn(o)&&!ef(o)){if(!e.h.D&&e._<1)return;ds(e,o),t&&t.A.l||fs(e,o)}}function fs(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Zd(t,n)}function eu(e,t){var n=e[Ee];return(n?er(n):e)[t]}function qp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Cn(e){e.P||(e.P=!0,e.l&&Cn(e.l))}function tu(e){e.o||(e.o=Jd(e.t))}function Tc(e,t,n){var r=Gd(t)?Xt("MapSet").F(t,n):Xd(t)?Xt("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:bc(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},l=s,u=yi;a&&(l=[s],u=Mo);var c=Proxy.revocable(l,u),d=c.revoke,g=c.proxy;return s.k=g,s.j=d,g}(t,n):Xt("ES5").J(t,n);return(n?n.A:bc()).p.push(r),r}function RS(e){return Yn(e)||Mt(22,e),function t(n){if(!hn(n))return n;var r,o=n[Ee],i=go(n);if(o){if(!o.P&&(o.i<4||!Xt("ES5").K(o)))return o.t;o.I=!0,r=Kp(n,i),o.I=!1}else r=Kp(n,i);return mr(r,function(a,s){o&&PS(o.t,a)===s||uv(r,a,t(s))}),i===3?new Set(r):r}(e)}function Kp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Jd(e)}function AS(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var l=this[Ee];return yi.get(l,i)},set:function(l){var u=this[Ee];yi.set(u,i,l)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][Ee];if(!s.P)switch(s.i){case 5:r(s)&&Cn(s);break;case 4:n(s)&&Cn(s)}}}function n(i){for(var a=i.t,s=i.k,l=Qr(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ee){var d=a[c];if(d===void 0&&!Wr(a,c))return!0;var g=s[c],v=g&&g[Ee];if(v?v.t!==d:!cv(g,d))return!0}}var h=!!a[Ee];return l.length!==Qr(a).length+(h?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var o={};OS("ES5",{J:function(i,a){var s=Array.isArray(i),l=function(c,d){if(c){for(var g=Array(d.length),v=0;v<d.length;v++)Object.defineProperty(g,""+v,e(v,!0));return g}var h=fv(d);delete h[Ee];for(var y=Qr(h),E=0;E<y.length;E++){var m=y[E];h[m]=e(m,c||!!h[m].enumerable)}return Object.create(Object.getPrototypeOf(d),h)}(s,i),u={i:s?5:4,A:a?a.A:bc(),P:!1,I:!1,R:{},l:a,t:i,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ee,{value:u,writable:!0}),l},S:function(i,a,s){s?Yn(a)&&a[Ee].A===i&&t(i.p):(i.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ee];if(c){var d=c.t,g=c.k,v=c.R,h=c.i;if(h===4)mr(g,function(x){x!==Ee&&(d[x]!==void 0||Wr(d,x)?v[x]||l(g[x]):(v[x]=!0,Cn(c)))}),mr(d,function(x){g[x]!==void 0||Wr(g,x)||(v[x]=!1,Cn(c))});else if(h===5){if(r(c)&&(Cn(c),v.length=!0),g.length<d.length)for(var y=g.length;y<d.length;y++)v[y]=!1;else for(var E=d.length;E<g.length;E++)v[E]=!0;for(var m=Math.min(g.length,d.length),p=0;p<m;p++)g.hasOwnProperty(p)||(v[p]=!0),v[p]===void 0&&l(g[p])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Gp,vi,tf=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",NS=typeof Map<"u",IS=typeof Set<"u",Xp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",dv=tf?Symbol.for("immer-nothing"):((Gp={})["immer-nothing"]=!0,Gp),Jp=tf?Symbol.for("immer-draftable"):"__$immer_draftable",Ee=tf?Symbol.for("immer-state"):"__$immer_state",LS=""+Object.prototype.constructor,Qr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,fv=Object.getOwnPropertyDescriptors||function(e){var t={};return Qr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Cc={},yi={get:function(e,t){if(t===Ee)return e;var n=er(e);if(!Wr(n,t))return function(o,i,a){var s,l=qp(i,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!hn(r)?r:r===eu(e.t,t)?(tu(e),e.o[t]=Tc(e.A.h,r,e)):r},has:function(e,t){return t in er(e)},ownKeys:function(e){return Reflect.ownKeys(er(e))},set:function(e,t,n){var r=qp(er(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=eu(er(e),t),i=o==null?void 0:o[Ee];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(cv(n,o)&&(n!==void 0||Wr(e.t,t)))return!0;tu(e),Cn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return eu(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,tu(e),Cn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=er(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Mt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Mt(12)}},Mo={};mr(yi,function(e,t){Mo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Mo.deleteProperty=function(e,t){return Mo.set.call(this,e,t,void 0)},Mo.set=function(e,t,n){return yi.set.call(this,e[0],t,n,e[0])};var MS=function(){function e(n){var r=this;this.O=Xp,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var l=r;return function(y){var E=this;y===void 0&&(y=s);for(var m=arguments.length,p=Array(m>1?m-1:0),x=1;x<m;x++)p[x-1]=arguments[x];return l.produce(y,function(w){var b;return(b=i).call.apply(b,[E,w].concat(p))})}}var u;if(typeof i!="function"&&Mt(6),a!==void 0&&typeof a!="function"&&Mt(7),hn(o)){var c=Qp(r),d=Tc(r,o,void 0),g=!0;try{u=i(d),g=!1}finally{g?cs(c):jc(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return Jl(c,a),Zl(y,c)},function(y){throw cs(c),y}):(Jl(c,a),Zl(u,c))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===dv&&(u=void 0),r.D&&Zd(u,!0),a){var v=[],h=[];Xt("Patches").M(o,u,v,h),a(v,h)}return u}Mt(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),g=1;g<c;g++)d[g-1]=arguments[g];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(d))})};var a,s,l=r.produce(o,i,function(u,c){a=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){hn(n)||Mt(8),Yn(n)&&(n=RS(n));var r=Qp(this),o=Tc(this,n,void 0);return o[Ee].C=!0,jc(r),o},t.finishDraft=function(n,r){var o=n&&n[Ee],i=o.A;return Jl(i,r),Zl(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Xp&&Mt(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Xt("Patches").$;return Yn(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),pt=new MS,pv=pt.produce;pt.produceWithPatches.bind(pt);pt.setAutoFreeze.bind(pt);pt.setUseProxies.bind(pt);pt.applyPatches.bind(pt);pt.createDraft.bind(pt);pt.finishDraft.bind(pt);function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function zS(e,t){if(xi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function DS(e){var t=zS(e,"string");return xi(t)==="symbol"?t:String(t)}function FS(e,t,n){return t=DS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function eh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zp(Object(n),!0).forEach(function(r){FS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ye(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var th=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),nu=function(){return Math.random().toString(36).substring(7).split("").join(".")},ps={INIT:"@@redux/INIT"+nu(),REPLACE:"@@redux/REPLACE"+nu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nu()}};function US(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function hv(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ye(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ye(1));return n(hv)(e,t)}if(typeof e!="function")throw new Error(Ye(2));var o=e,i=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(Ye(3));return i}function d(y){if(typeof y!="function")throw new Error(Ye(4));if(l)throw new Error(Ye(5));var E=!0;return u(),s.push(y),function(){if(E){if(l)throw new Error(Ye(6));E=!1,u();var p=s.indexOf(y);s.splice(p,1),a=null}}}function g(y){if(!US(y))throw new Error(Ye(7));if(typeof y.type>"u")throw new Error(Ye(8));if(l)throw new Error(Ye(9));try{l=!0,i=o(i,y)}finally{l=!1}for(var E=a=s,m=0;m<E.length;m++){var p=E[m];p()}return y}function v(y){if(typeof y!="function")throw new Error(Ye(10));o=y,g({type:ps.REPLACE})}function h(){var y,E=d;return y={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ye(11));function x(){p.next&&p.next(c())}x();var w=E(x);return{unsubscribe:w}}},y[th]=function(){return this},y}return g({type:ps.INIT}),r={dispatch:g,subscribe:d,getState:c,replaceReducer:v},r[th]=h,r}function BS(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:ps.INIT});if(typeof r>"u")throw new Error(Ye(12));if(typeof n(void 0,{type:ps.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ye(13))})}function HS(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{BS(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var c=!1,d={},g=0;g<i.length;g++){var v=i[g],h=n[v],y=l[v],E=h(y,u);if(typeof E>"u")throw u&&u.type,new Error(Ye(14));d[v]=E,c=c||E!==y}return c=c||i.length!==Object.keys(l).length,c?d:l}}function hs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function VS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ye(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return i=hs.apply(void 0,s)(o.dispatch),eh(eh({},o),{},{dispatch:i})}}}function mv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var gv=mv();gv.withExtraArgument=mv;const nh=gv;var vv=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),WS=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},so=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},QS=Object.defineProperty,YS=Object.defineProperties,qS=Object.getOwnPropertyDescriptors,rh=Object.getOwnPropertySymbols,KS=Object.prototype.hasOwnProperty,GS=Object.prototype.propertyIsEnumerable,oh=function(e,t,n){return t in e?QS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Un=function(e,t){for(var n in t||(t={}))KS.call(t,n)&&oh(e,n,t[n]);if(rh)for(var r=0,o=rh(t);r<o.length;r++){var n=o[r];GS.call(t,n)&&oh(e,n,t[n])}return e},ru=function(e,t){return YS(e,qS(t))},XS=function(e,t,n){return new Promise(function(r,o){var i=function(l){try{s(n.next(l))}catch(u){o(u)}},a=function(l){try{s(n.throw(l))}catch(u){o(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(i,a)};s((n=n.apply(e,t)).next())})},JS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?hs:hs.apply(null,arguments)};function ZS(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Bn(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return Un(Un({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var eE=function(e){vv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,so([void 0],n[0].concat(this)))):new(t.bind.apply(t,so([void 0],n.concat(this))))},t}(Array),tE=function(e){vv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,so([void 0],n[0].concat(this)))):new(t.bind.apply(t,so([void 0],n.concat(this))))},t}(Array);function kc(e){return hn(e)?pv(e,function(){}):e}function nE(e){return typeof e=="boolean"}function rE(){return function(t){return oE(t)}}function oE(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new eE;return n&&(nE(n)?r.push(nh):r.push(nh.withExtraArgument(n.extraArgument))),r}var iE=!0;function aE(e){var t=rE(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,g=d===void 0?void 0:d,v;if(typeof o=="function")v=o;else if(ZS(o))v=HS(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var y=VS.apply(void 0,h),E=hs;l&&(E=JS(Un({trace:!iE},typeof l=="object"&&l)));var m=new tE(y),p=m;Array.isArray(g)?p=so([y],g):typeof g=="function"&&(p=g(m));var x=E.apply(void 0,p);return hv(v,c,x)}function yv(e){var t={},n=[],r,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function sE(e){return typeof e=="function"}function lE(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?yv(t):[t,n,r],i=o[0],a=o[1],s=o[2],l;if(sE(e))l=function(){return kc(e())};else{var u=kc(e);l=function(){return u}}function c(d,g){d===void 0&&(d=l());var v=so([i[g.type]],a.filter(function(h){var y=h.matcher;return y(g)}).map(function(h){var y=h.reducer;return y}));return v.filter(function(h){return!!h}).length===0&&(v=[s]),v.reduce(function(h,y){if(y)if(Yn(h)){var E=h,m=y(E,g);return m===void 0?h:m}else{if(hn(h))return pv(h,function(p){return y(p,g)});var m=y(h,g);if(m===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return h},d)}return c.getInitialState=l,c}function uE(e,t){return e+"/"+t}function xv(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:kc(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},s={};o.forEach(function(c){var d=r[c],g=uE(t,c),v,h;"reducer"in d?(v=d.reducer,h=d.prepare):v=d,i[c]=v,a[g]=v,s[c]=h?Bn(g,h):Bn(g)});function l(){var c=typeof e.extraReducers=="function"?yv(e.extraReducers):[e.extraReducers],d=c[0],g=d===void 0?{}:d,v=c[1],h=v===void 0?[]:v,y=c[2],E=y===void 0?void 0:y,m=Un(Un({},g),a);return lE(n,function(p){for(var x in m)p.addCase(x,m[x]);for(var w=0,b=h;w<b.length;w++){var C=b[w];p.addMatcher(C.matcher,C.reducer)}E&&p.addDefaultCase(E)})}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var cE="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",dE=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=cE[Math.random()*64|0];return t},fE=["name","message","stack","code"],ou=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),ih=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),pE=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=fE;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Bn(t+"/fulfilled",function(u,c,d,g){return{payload:u,meta:ru(Un({},g||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),i=Bn(t+"/pending",function(u,c,d){return{payload:void 0,meta:ru(Un({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),a=Bn(t+"/rejected",function(u,c,d,g,v){return{payload:g,error:(r&&r.serializeError||pE)(u||"Rejected"),meta:ru(Un({},v||{}),{arg:d,requestId:c,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,g){var v=r!=null&&r.idGenerator?r.idGenerator(u):dE(),h=new s,y;function E(p){y=p,h.abort()}var m=function(){return XS(this,null,function(){var p,x,w,b,C,T,$;return WS(this,function(O){switch(O.label){case 0:return O.trys.push([0,4,,5]),b=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:d,extra:g}),mE(b)?[4,b]:[3,2];case 1:b=O.sent(),O.label=2;case 2:if(b===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(R,D){return h.signal.addEventListener("abort",function(){return D({name:"AbortError",message:y||"Aborted"})})}),c(i(v,u,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:v,arg:u},{getState:d,extra:g}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:c,getState:d,extra:g,requestId:v,signal:h.signal,abort:E,rejectWithValue:function(R,D){return new ou(R,D)},fulfillWithValue:function(R,D){return new ih(R,D)}})).then(function(R){if(R instanceof ou)throw R;return R instanceof ih?o(R.payload,v,u,R.meta):o(R,v,u)})])];case 3:return w=O.sent(),[3,5];case 4:return T=O.sent(),w=T instanceof ou?a(null,v,u,T.payload,T.meta):a(T,v,u),[3,5];case 5:return $=r&&!r.dispatchConditionRejection&&a.match(w)&&w.meta.condition,$||c(w),[2,w]}})})}();return Object.assign(m,{abort:E,requestId:v,arg:u,unwrap:function(){return m.then(hE)}})}}return Object.assign(l,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function hE(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function mE(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var nf="listenerMiddleware";Bn(nf+"/add");Bn(nf+"/removeAll");Bn(nf+"/remove");var ah;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);AS();const wv=xv({name:"modal",initialState:{modalType:"closed"},reducers:{contactModal:e=>{e.modalType="contact"},loginModal:e=>{e.modalType="login"},signupModal:e=>{e.modalType="signup"},closeModal:e=>{e.modalType="closed"}}}),{contactModal:Sv,loginModal:gE,signupModal:vE,closeModal:Pc}=wv.actions,yE=wv.reducer,xE=j.div`
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

  background-color: ${S.colors.seasalt};

  @media (max-width: ${S.bp["x-small"]}) {
    height: 20px;
  }
`,wE=j(mo)`
  padding-left: 1rem;
  img {
    height: 40px;

    @media (max-width: ${S.bp["x-small"]}) {
      height: 30px;
    }
  }
`,SE=j.button`
  background: none;
  border: none;
  color: ${S.colors.raisinblack};
  font-size: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: ${S.bp.medium}) {
    display: block;
  }

  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 30px;
  }
`,sh=j.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${S.bp.medium}) {
    display: ${({showMenu:e})=>e?"none":"flex"};
    flex-direction: column;
    position: absolute;
    top: 370px;
    left: 0;
    background-color: ${S.colors.white};
    width: 100%;
    padding: 10px;
    transform: ${({showMenu:e})=>e?"translateY(0)":"translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    top: 360px;
  }
`,Vt=j(mo)`
  display: flex;
  align-items: center;
  color: ${S.colors.raisinblack};
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
    border-bottom: 2px solid ${S.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${S.bp.large}) {
    font-size: 12px;
  }
`,Co=j.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${S.bp.large}) {
    padding: 0px 0px;
  }
`,lh=j.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;function Ev(e,t){return function(){return e.apply(t,arguments)}}const{toString:EE}=Object.prototype,{getPrototypeOf:rf}=Object,ul=(e=>t=>{const n=EE.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=e=>(e=e.toLowerCase(),t=>ul(t)===e),cl=e=>t=>typeof t===e,{isArray:vo}=Array,wi=cl("undefined");function bE(e){return e!==null&&!wi(e)&&e.constructor!==null&&!wi(e.constructor)&&kt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bv=Jt("ArrayBuffer");function jE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bv(e.buffer),t}const TE=cl("string"),kt=cl("function"),jv=cl("number"),dl=e=>e!==null&&typeof e=="object",CE=e=>e===!0||e===!1,Pa=e=>{if(ul(e)!=="object")return!1;const t=rf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},kE=Jt("Date"),PE=Jt("File"),$E=Jt("Blob"),OE=Jt("FileList"),_E=e=>dl(e)&&kt(e.pipe),RE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||kt(e.append)&&((t=ul(e))==="formdata"||t==="object"&&kt(e.toString)&&e.toString()==="[object FormData]"))},AE=Jt("URLSearchParams"),NE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ai(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),vo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function Tv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Cv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),kv=e=>!wi(e)&&e!==Cv;function $c(){const{caseless:e}=kv(this)&&this||{},t={},n=(r,o)=>{const i=e&&Tv(t,o)||o;Pa(t[i])&&Pa(r)?t[i]=$c(t[i],r):Pa(r)?t[i]=$c({},r):vo(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Ai(arguments[r],n);return t}const IE=(e,t,n,{allOwnKeys:r}={})=>(Ai(t,(o,i)=>{n&&kt(o)?e[i]=Ev(o,n):e[i]=o},{allOwnKeys:r}),e),LE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ME=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},zE=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&rf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},DE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},FE=e=>{if(!e)return null;if(vo(e))return e;let t=e.length;if(!jv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},UE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rf(Uint8Array)),BE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},HE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},VE=Jt("HTMLFormElement"),WE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),uh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),QE=Jt("RegExp"),Pv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ai(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},YE=e=>{Pv(e,(t,n)=>{if(kt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(kt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qE=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return vo(e)?r(e):r(String(e).split(t)),n},KE=()=>{},GE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),iu="abcdefghijklmnopqrstuvwxyz",ch="0123456789",$v={DIGIT:ch,ALPHA:iu,ALPHA_DIGIT:iu+iu.toUpperCase()+ch},XE=(e=16,t=$v.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function JE(e){return!!(e&&kt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ZE=e=>{const t=new Array(10),n=(r,o)=>{if(dl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=vo(r)?[]:{};return Ai(r,(a,s)=>{const l=n(a,o+1);!wi(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},eb=Jt("AsyncFunction"),tb=e=>e&&(dl(e)||kt(e))&&kt(e.then)&&kt(e.catch),P={isArray:vo,isArrayBuffer:bv,isBuffer:bE,isFormData:RE,isArrayBufferView:jE,isString:TE,isNumber:jv,isBoolean:CE,isObject:dl,isPlainObject:Pa,isUndefined:wi,isDate:kE,isFile:PE,isBlob:$E,isRegExp:QE,isFunction:kt,isStream:_E,isURLSearchParams:AE,isTypedArray:UE,isFileList:OE,forEach:Ai,merge:$c,extend:IE,trim:NE,stripBOM:LE,inherits:ME,toFlatObject:zE,kindOf:ul,kindOfTest:Jt,endsWith:DE,toArray:FE,forEachEntry:BE,matchAll:HE,isHTMLForm:VE,hasOwnProperty:uh,hasOwnProp:uh,reduceDescriptors:Pv,freezeMethods:YE,toObjectSet:qE,toCamelCase:WE,noop:KE,toFiniteNumber:GE,findKey:Tv,global:Cv,isContextDefined:kv,ALPHABET:$v,generateString:XE,isSpecCompliantForm:JE,toJSONObject:ZE,isAsyncFn:eb,isThenable:tb};function ee(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ov=ee.prototype,_v={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_v[e]={value:e}});Object.defineProperties(ee,_v);Object.defineProperty(Ov,"isAxiosError",{value:!0});ee.from=(e,t,n,r,o,i)=>{const a=Object.create(Ov);return P.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ee.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const nb=null;function Oc(e){return P.isPlainObject(e)||P.isArray(e)}function Rv(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function dh(e,t,n){return e?e.concat(t).map(function(o,i){return o=Rv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function rb(e){return P.isArray(e)&&!e.some(Oc)}const ob=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function fl(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!P.isUndefined(E[y])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(P.isDate(h))return h.toISOString();if(!l&&P.isBlob(h))throw new ee("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(h)||P.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,y,E){let m=h;if(h&&!E&&typeof h=="object"){if(P.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(P.isArray(h)&&rb(h)||(P.isFileList(h)||P.endsWith(y,"[]"))&&(m=P.toArray(h)))return y=Rv(y),m.forEach(function(x,w){!(P.isUndefined(x)||x===null)&&t.append(a===!0?dh([y],w,i):a===null?y:y+"[]",u(x))}),!1}return Oc(h)?!0:(t.append(dh(E,y,i),u(h)),!1)}const d=[],g=Object.assign(ob,{defaultVisitor:c,convertValue:u,isVisitable:Oc});function v(h,y){if(!P.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(h),P.forEach(h,function(m,p){(!(P.isUndefined(m)||m===null)&&o.call(t,m,P.isString(p)?p.trim():p,y,g))===!0&&v(m,y?y.concat(p):[p])}),d.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return v(e),t}function fh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function of(e,t){this._pairs=[],e&&fl(e,this,t)}const Av=of.prototype;Av.append=function(t,n){this._pairs.push([t,n])};Av.toString=function(t){const n=t?function(r){return t.call(this,r,fh)}:fh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ib(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Nv(e,t,n){if(!t)return e;const r=n&&n.encode||ib,o=n&&n.serialize;let i;if(o?i=o(t,n):i=P.isURLSearchParams(t)?t.toString():new of(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ab{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ph=ab,Iv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sb=typeof URLSearchParams<"u"?URLSearchParams:of,lb=typeof FormData<"u"?FormData:null,ub=typeof Blob<"u"?Blob:null,cb={isBrowser:!0,classes:{URLSearchParams:sb,FormData:lb,Blob:ub},protocols:["http","https","file","blob","url","data"]},Lv=typeof window<"u"&&typeof document<"u",db=(e=>Lv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),fb=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),pb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lv,hasStandardBrowserEnv:db,hasStandardBrowserWebWorkerEnv:fb},Symbol.toStringTag,{value:"Module"})),qt={...pb,...cb};function hb(e,t){return fl(e,new qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return qt.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function mb(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gb(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Mv(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&P.isArray(o)?o.length:a,l?(P.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!P.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&P.isArray(o[a])&&(o[a]=gb(o[a])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(mb(r),o,n,0)}),n}return null}function vb(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const af={transitional:Iv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o&&o?JSON.stringify(Mv(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hb(t,this.formSerializer).toString();if((s=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return fl(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),vb(t)):t}],transformResponse:[function(t){const n=this.transitional||af.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?ee.from(s,ee.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{af.headers[e]={}});const sf=af,yb=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xb=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&yb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},hh=Symbol("internals");function ko(e){return e&&String(e).trim().toLowerCase()}function $a(e){return e===!1||e==null?e:P.isArray(e)?e.map($a):String(e)}function wb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Sb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function au(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function Eb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function bb(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class pl{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const c=ko(l);if(!c)throw new Error("header name must be a non-empty string");const d=P.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||l]=$a(s))}const a=(s,l)=>P.forEach(s,(u,c)=>i(u,c,l));return P.isPlainObject(t)||t instanceof this.constructor?a(t,n):P.isString(t)&&(t=t.trim())&&!Sb(t)?a(xb(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=ko(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return wb(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ko(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||au(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=ko(a),a){const s=P.findKey(r,a);s&&(!n||au(r,r[s],s,n))&&(delete r[s],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||au(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,i)=>{const a=P.findKey(r,i);if(a){n[a]=$a(o),delete n[i];return}const s=t?Eb(i):String(i).trim();s!==i&&delete n[i],n[s]=$a(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[hh]=this[hh]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=ko(a);r[s]||(bb(o,a),r[s]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}}pl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(pl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(pl);const un=pl;function su(e,t){const n=this||sf,r=t||n,o=un.from(r.headers);let i=r.data;return P.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function zv(e){return!!(e&&e.__CANCEL__)}function Ni(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Ni,ee,{__CANCEL__:!0});function jb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Tb=qt.hasStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),P.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),P.isString(i)&&l.push("path="+i),P.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Cb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kb(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Dv(e,t){return e&&!Cb(t)?kb(e,t):t}const Pb=qt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=P.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function $b(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ob(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let d=i,g=0;for(;d!==o;)g+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=c&&u-c;return v?Math.round(g*1e3/v):void 0}}function mh(e,t){let n=0;const r=Ob(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const _b=typeof XMLHttpRequest<"u",Rb=_b&&function(e){return new Promise(function(n,r){let o=e.data;const i=un.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let u;if(P.isFormData(o)){if(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[h,...y]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];i.setContentType([h||"multipart/form-data",...y].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+y))}const d=Dv(e.baseURL,e.url);c.open(e.method.toUpperCase(),Nv(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function g(){if(!c)return;const h=un.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};jb(function(p){n(p),l()},function(p){r(p),l()},E),c=null}if("onloadend"in c?c.onloadend=g:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(g)},c.onabort=function(){c&&(r(new ee("Request aborted",ee.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Iv;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new ee(y,E.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,c)),c=null},qt.hasStandardBrowserEnv){const h=Pb(d)&&e.xsrfCookieName&&Tb.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&P.forEach(i.toJSON(),function(y,E){c.setRequestHeader(E,y)}),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",mh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",mh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{c&&(r(!h||h.type?new Ni(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const v=$b(d);if(v&&qt.protocols.indexOf(v)===-1){r(new ee("Unsupported protocol "+v+":",ee.ERR_BAD_REQUEST,e));return}c.send(o||null)})},_c={http:nb,xhr:Rb};P.forEach(_c,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const gh=e=>`- ${e}`,Ab=e=>P.isFunction(e)||e===null||e===!1,Fv={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!Ab(n)&&(r=_c[(a=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(gh).join(`
`):" "+gh(i[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:_c};function lu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ni(null,e)}function vh(e){return lu(e),e.headers=un.from(e.headers),e.data=su.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Fv.getAdapter(e.adapter||sf.adapter)(e).then(function(r){return lu(e),r.data=su.call(e,e.transformResponse,r),r.headers=un.from(r.headers),r},function(r){return zv(r)||(lu(e),r&&r.response&&(r.response.data=su.call(e,e.transformResponse,r.response),r.response.headers=un.from(r.response.headers))),Promise.reject(r)})}const yh=e=>e instanceof un?e.toJSON():e;function lo(e,t){t=t||{};const n={};function r(u,c,d){return P.isPlainObject(u)&&P.isPlainObject(c)?P.merge.call({caseless:d},u,c):P.isPlainObject(c)?P.merge({},c):P.isArray(c)?c.slice():c}function o(u,c,d){if(P.isUndefined(c)){if(!P.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function i(u,c){if(!P.isUndefined(c))return r(void 0,c)}function a(u,c){if(P.isUndefined(c)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>o(yh(u),yh(c),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=l[c]||o,g=d(e[c],t[c],c);P.isUndefined(g)&&d!==s||(n[c]=g)}),n}const Uv="1.6.1",lf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{lf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xh={};lf.transitional=function(t,n,r){function o(i,a){return"[Axios v"+Uv+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new ee(o(a," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!xh[a]&&(xh[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function Nb(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new ee("option "+i+" must be "+l,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const Rc={assertOptions:Nb,validators:lf},vn=Rc.validators;class ms{constructor(t){this.defaults=t,this.interceptors={request:new ph,response:new ph}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=lo(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Rc.assertOptions(r,{silentJSONParsing:vn.transitional(vn.boolean),forcedJSONParsing:vn.transitional(vn.boolean),clarifyTimeoutError:vn.transitional(vn.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:Rc.assertOptions(o,{encode:vn.function,serialize:vn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&P.merge(i.common,i[n.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=un.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,d=0,g;if(!l){const h=[vh.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,u),g=h.length,c=Promise.resolve(n);d<g;)c=c.then(h[d++],h[d++]);return c}g=s.length;let v=n;for(d=0;d<g;){const h=s[d++],y=s[d++];try{v=h(v)}catch(E){y.call(this,E);break}}try{c=vh.call(this,v)}catch(h){return Promise.reject(h)}for(d=0,g=u.length;d<g;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=lo(this.defaults,t);const n=Dv(t.baseURL,t.url);return Nv(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){ms.prototype[t]=function(n,r){return this.request(lo(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(lo(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}ms.prototype[t]=n(),ms.prototype[t+"Form"]=n(!0)});const Oa=ms;class uf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Ni(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new uf(function(o){t=o}),cancel:t}}}const Ib=uf;function Lb(e){return function(n){return e.apply(null,n)}}function Mb(e){return P.isObject(e)&&e.isAxiosError===!0}const Ac={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ac).forEach(([e,t])=>{Ac[t]=e});const zb=Ac;function Bv(e){const t=new Oa(e),n=Ev(Oa.prototype.request,t);return P.extend(n,Oa.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Bv(lo(e,o))},n}const Ne=Bv(sf);Ne.Axios=Oa;Ne.CanceledError=Ni;Ne.CancelToken=Ib;Ne.isCancel=zv;Ne.VERSION=Uv;Ne.toFormData=fl;Ne.AxiosError=ee;Ne.Cancel=Ne.CanceledError;Ne.all=function(t){return Promise.all(t)};Ne.spread=Lb;Ne.isAxiosError=Mb;Ne.mergeConfig=lo;Ne.AxiosHeaders=un;Ne.formToJSON=e=>Mv(P.isHTMLForm(e)?new FormData(e):e);Ne.getAdapter=Fv.getAdapter;Ne.HttpStatusCode=zb;Ne.default=Ne;const Db=Ne,cf=Db.create({baseURL:"",withCredentials:!0});cf.interceptors.response.use(e=>e,e=>{const{response:t}=e;return t?(console.error("Server error:",t.data),Promise.reject(t.data)):e.request?(console.error("No response was received from the server"),Promise.reject("No response was received from the server")):(console.error("Failed request:",e.message),Promise.reject("Failed request"))});const Hv=xv({name:"user",initialState:{token:"",userName:"",name:"",surname:"",email:"",phone:"",freeCredits:0,premiumCredits:0,service:""},reducers:{setUser:(e,t)=>{Object.assign(e,t.payload)},removeUser:e=>{e.token="",e.userName="",e.name="",e.surname="",e.email="",e.phone="",e.freeCredits=0,e.premiumCredits=0,e.service=""}}}),{setUser:wh,removeUser:Fb}=Hv.actions,Ub=async e=>{try{const{data:t}=await cf.post("/auth/login",e);return t.data}catch(t){return{error:t}}},Bb=async e=>{try{const{data:t}=await cf.post("/auth/register",e);return t.data}catch(t){return{error:t}}},Hb=Hv.reducer,hl=()=>{const e=Vd(u=>u.user.token),[t,n]=k.useState(!1),r=Ri(),o=O2.useMediaQuery({maxWidth:S.bp.medium}),i=()=>{n(!t)},a=()=>{r(gE())},s=()=>{r(vE())},l=()=>{r(Fb())};return k.useEffect(()=>{},[e]),f.jsxs(xE,{children:[f.jsx(wE,{to:"/",children:f.jsx("img",{src:"assets/logotipo.svg",alt:"Logo Sintética"})}),o?f.jsxs(f.Fragment,{children:[f.jsx(SE,{onClick:i,children:t?"✕":"☰"}),t&&f.jsxs(sh,{children:[f.jsx(Vt,{to:"/VoiceCloning",children:"Voice Cloning"}),f.jsx(Vt,{to:"/Maintenance",children:"Experiencia TTS"}),f.jsx(Vt,{to:"/Maintenance",children:"AI & Salud"}),f.jsx(Vt,{to:"/Maintenance",children:"Investigación"}),f.jsx(Vt,{to:"/Maintenance",children:"Nosotros"}),f.jsx(lh,{children:e?f.jsx(Mr,{buttonText:"Logout",handleClick:l}):f.jsxs(f.Fragment,{children:[f.jsx(Mr,{buttonText:"Login",handleClick:a}),f.jsx(us,{buttonText:"Signup",handleClick:s})]})})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(sh,{children:[f.jsx(Vt,{to:"/VoiceCloning",children:"Voice Cloning"}),f.jsx(Co,{children:" "}),f.jsx(Vt,{to:"/Maintenance",children:"Experiencia TTS"}),f.jsx(Co,{children:" "}),f.jsx(Vt,{to:"/Maintenance",children:"AI & Salud"}),f.jsx(Co,{children:" "}),f.jsx(Vt,{to:"/Maintenance",children:"Investigación"}),f.jsx(Co,{children:" "}),f.jsx(Vt,{to:"/Maintenance",children:"Nosotros"}),f.jsx(Co,{children:" "})]}),f.jsx(lh,{children:e?f.jsx(Mr,{buttonText:"Logout",handleClick:l}):f.jsxs(f.Fragment,{children:[f.jsx(Mr,{buttonText:"Login",handleClick:a}),f.jsx(us,{buttonText:"Signup",handleClick:s})]})})]})]})},Vb=j.section`
  background-color: ${S.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  width: 100vw;

  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,Wb=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;

  @media (max-width: ${S.bp.medium}) {
    width: 100vw;
  }
`,Qb=j.img`
  width: 300px;
  @media (max-width: ${S.bp.small}) {
    width: 240px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 200px;
  }
`,Yb=j.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 95px;
    color: ${S.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: ${S.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${S.bp.small}) {
    h1 {
      font-size: 80px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: ${S.bp["x-small"]}) {
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 18px;
    }
  }
`,qb=j.div`
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

  @media (max-width: ${S.bp.medium}) {
    width: 100vw;
    background-size: 98%;
    height: 40vh;
  }

  @media (max-width: ${S.bp["x-small"]}) {
    background-size: 130%;
  }
`,Kb=j.h4`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp.large}) {
    font-size: 28px;
  }
  @media (max-width: ${S.bp.medium}) {
    font-size: 32px;
  }
  @media (max-width: ${S.bp.small}) {
    font-size: 28px;
  }

  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 20px;
  }
`,Gb=j.p`
  text-align: left;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${S.colors.platinum};
  padding: 30px 0px 30px 130px;
  justify-content: flex-end;

  @media (max-width: ${S.bp.large}) {
    padding: 10px 20px 10px 130px;
    font-size: 20px;
  }

  @media (max-width: ${S.bp.medium}) {
    font-size: 22px;
    padding: 30px 20px 30px 190px;
  }
  @media (max-width: ${S.bp.small}) {
    font-size: 22px;
  }

  @media (max-width: ${S.bp["x-small"]}) {
    padding: 20px 20px 20px 20px;
    font-size: 20px;
  }
`,Xb=j.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${S.bp.medium}) {
    margin-right: 50px;
  }
`;function Jb(){const e=Ri(),t=()=>{e(Sv())};return f.jsxs(Vb,{children:[f.jsxs(Wb,{children:[f.jsx(Qb,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),f.jsxs(Yb,{children:[f.jsx("h1",{children:"Sintética"}),f.jsx("p",{children:"Laboratorio de voces"})]})]}),f.jsxs(qb,{children:[f.jsx(Kb,{children:"Síntesis de voces potenciadas por AI"}),f.jsx(Gb,{children:"Desde Argentina al mundo: líderes en el desarrollo de voces artificiales en nuestro idioma."}),f.jsx(Xb,{children:f.jsx(Mr,{buttonText:"Contactanos",handleClick:t})})]})]})}const Zb=j.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${S.bp.small}) {
    margin-top: 80px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    margin-top: 100px;
  }
`,ej=j.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${S.colors.lavenderfloral};
  background-color: ${S.colors.lavender};
`,tj=j.h4`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: ${S.colors.raisinblack};
  margin: 0;
  max-width: 90vw;
  padding: 15px 0px 70px 0px;
  @media (max-width: ${S.bp.small}) {
    font-size: 28px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 24px;
  }
`,nj=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,uu=j(mo)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 450px;
  width: 300px;
  background-color: ${S.colors.white};
  border-radius: 10px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);

  &.selected {
    background-color: ${S.colors.white};
  }

  img {
    width: 250px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${S.colors.gray};
    margin: 0;
    text-transform: uppercase;
  }
  &:hover {
    img {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @media (max-width: ${S.bp.medium}) {
    margin: 30px 0px;
    width: 400px;
  }

  @media (max-width: ${S.bp["x-small"]}) {
    margin: 30px 0px;
    width: 300px;
    height: 400px;
    h3 {
      font-size: 16px;
    }
  }
`;function rj(){return f.jsxs(Zb,{children:[f.jsx(ej,{children:"Nuestros objetivos"}),f.jsx(tj,{children:"Queremos reducir la brecha tecnológica de las voces sintéticas en nuestro idioma"}),f.jsxs(nj,{children:[f.jsxs(uu,{to:"/VoiceCloning",children:[f.jsx("img",{src:"assets/home/card1.svg",alt:"icon"}),f.jsx("h3",{children:"Sistemas entrenados en"}),f.jsx("h3",{children:"Español Latinoamericano"})]}),f.jsxs(uu,{to:"/Maintenance",className:"selected",children:[f.jsx("img",{src:"assets/home/card2.svg",alt:"icon"}),f.jsx("h3",{children:"Inteligencia Artificial"}),f.jsx("h3",{children:"desarrollada desde la ética"})]}),f.jsxs(uu,{to:"/Maintenance",children:[f.jsx("img",{src:"assets/home/card3.svg",alt:"icon"}),f.jsx("h3",{children:"Herramientas de impacto social"}),f.jsx("h3",{children:"Salud e Inclusión"})]})]})]})}var Vv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sh=V.createContext&&V.createContext(Vv),Hn=globalThis&&globalThis.__assign||function(){return Hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Hn.apply(this,arguments)},oj=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Wv(e){return e&&e.map(function(t,n){return V.createElement(t.tag,Hn({key:n},t.attr),Wv(t.child))})}function Zt(e){return function(t){return V.createElement(ij,Hn({attr:Hn({},e.attr)},t),Wv(e.child))}}function ij(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=oj(e,["attr","size","title"]),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),V.createElement("svg",Hn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Hn(Hn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&V.createElement("title",null,i),e.children)};return Sh!==void 0?V.createElement(Sh.Consumer,null,function(n){return t(n)}):t(Vv)}function aj(e){return Zt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const sj=j(mo)`
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
  color: ${S.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${S.colors.electricindigo} 0%,
    ${S.colors.lavenderfloral} 100%
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
background: rgba(255, 255, 255, 0.3);    transition: all 1s ease;
}
&:hover:before {
  width: 100%;
}
`,lj=j(mo)`
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
  color: ${S.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${S.colors.electricindigo} 0%,
    ${S.colors.lavenderfloral} 100%
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
`;function zr({to:e,buttonText:t,rightArrow:n}){return n?f.jsxs(lj,{to:e,children:[t,f.jsx(aj,{size:20})]}):f.jsx(sj,{to:e,children:t})}zr.propTypes={to:te.string.isRequired,buttonText:te.string,rightArrow:te.bool};const uj=j.section`
  color: ${S.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${S.bp.large}) {
    padding-top: 100px;
  }
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${S.bp.small}) {
    margin-top: 100px;
  }
`,cj=j.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,dj=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 400px;
  @media (max-width: ${S.bp.medium}) {
    width: 90%;
    height: 400px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 90%;
    height: 250px;
  }
`,fj=j.img`
  position: relative;
  width: 400px;
  @media (max-width: ${S.bp.large}) {
    width: 350px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 90vw;
  }
`,pj=j.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  padding-left: 10%;

  @media (max-width: ${S.bp.large}) {
    width: 90%;
  }
  @media (max-width: ${S.bp.medium}) {
    width: 90%;
    padding: 0;
  }
`,hj=j.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${S.colors.lavenderfloral};
  background-color: ${S.colors.lavender};
`,mj=j.h3`
  font-size: 46px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${S.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: ${S.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`,gj=j.div`
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 20px 0px;
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${S.colors.gray};
    margin: 0;
  }
`,vj=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,Zi=j.div`
  display: flex;
  flex-direction: row;
  width: 60vw;

  padding-bottom: 20px;
  margin: 20px 0px;
  border: 2px solid ${S.colors.platinum};
  background-color: ${S.colors.seasalt};
  border-radius: 20px;
  padding: 15px;
  padding-top: 40px;

  @media (max-width: ${S.bp.large}) {
    width: 80vw;
  }

  @media (max-width: ${S.bp.small}) {
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
`,ea=j.img`
  width: 150px;
  height: 150px;
  padding-right: 15px;
  @media (max-width: ${S.bp.small}) {
    padding: 0;
  }
`,ta=j.div`
  display: flex;
  flex-direction: column;
`,na=j.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${S.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`,ra=j.p`
  font-size: 16px;
  line-height: 30px;
  color: ${S.colors.gray};
  padding-top: 3px;
  margin: 0;
`,oa=j.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;function yj(){return f.jsxs(uj,{children:[f.jsx(hj,{children:"¿Qué es Sintética?"}),f.jsxs(cj,{children:[f.jsx(dj,{children:f.jsx(fj,{src:"assets/home/card5.svg",alt:"globos"})}),f.jsxs(pj,{children:[f.jsx(mj,{children:"Voces en Español Rioplatense"}),f.jsxs(gj,{children:[f.jsx("p",{children:"Sintética es un laboratorio de síntesis de voces. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),f.jsx("p",{children:"Transformamos voces en posibilidades."})]})]})]}),f.jsxs(vj,{children:[f.jsxs(Zi,{children:[f.jsx(ea,{src:"assets/home/card4.svg",alt:"text-icon"}),f.jsxs(ta,{children:[f.jsx(na,{children:"Text To Speech - Español Latinoamericano"}),f.jsx(ra,{children:"Nuestra tecnología te ofrece una experiencia de conversión de texto a discurso única. Con acentos auténticos y entonaciones naturales tus proyectos, presentaciones y aplicaciones serán sobresalientes. Sumérgete en la nueva era del habla sintética y dale voz a tus ideas en tu propio idioma."}),f.jsx(oa,{children:f.jsx(zr,{rightArrow:!0,to:"/Maintenance"})})]})]}),f.jsxs(Zi,{children:[f.jsx(ea,{src:"assets/voiceCloning/bannerVoice.svg",alt:"text-icon"}),f.jsxs(ta,{children:[f.jsx(na,{children:"Voice Cloning - Español Latinoamericano"}),f.jsx(ra,{children:"¿Te imaginas poder replicar cualquier voz? Con nuestro sistema podés hacerlo realidad. Experimenta la libertad de dar vida a tus proyectos con voces familiares o icónicas en español rioplatense."}),f.jsx(oa,{children:f.jsx(zr,{rightArrow:!0,to:"/VoiceCloning"})})]})]}),f.jsxs(Zi,{children:[f.jsx(ea,{src:"assets/home/card6.svg",alt:"text-icon"}),f.jsxs(ta,{children:[f.jsx(na,{children:"AI al servicio de la salud y la inclusión"}),f.jsx(ra,{children:"Nuestra clonación de voz es la herramienta que cambiará vidas, brindando independencia a través del habla sintética personalizada. Explora cómo estamos redefiniendo la comunicación inclusiva."}),f.jsx(oa,{children:f.jsx(zr,{rightArrow:!0,to:"/Maintenance"})})]})]}),f.jsxs(Zi,{children:[f.jsx(ea,{src:"assets/home/card7.svg",alt:"text-icon"}),f.jsxs(ta,{children:[f.jsx(na,{children:"Toolkit para voces"}),f.jsx(ra,{children:"Nuestro toolkit te brinda el control completo sobre tus archivos de audio, desde el inicio hasta el final. ¿Necesitas dividir automáticamente pistas largas? Hecho. ¿No cuentas con transcripciones? No hay problema. ¿Buscas validar transcripciones con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes idiomas? Lo hacemos posible."}),f.jsx(oa,{children:f.jsx(zr,{rightArrow:!0,to:"/Maintenance"})})]})]})]})]})}const Si={_origin:"https://api.emailjs.com"},xj=(e,t="https://api.emailjs.com")=>{Si._userID=e,Si._origin=t},Qv=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Eh{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const Yv=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const s=new Eh(a);s.status===200||s.text==="OK"?r(s):o(s)}),i.addEventListener("error",({target:a})=>{o(new Eh(a))}),i.open("POST",Si._origin+e,!0),Object.keys(n).forEach(a=>{i.setRequestHeader(a,n[a])}),i.send(t)}),wj=(e,t,n,r)=>{const o=r||Si._userID;return Qv(o,e,t),Yv("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},Sj=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Ej=(e,t,n,r)=>{const o=r||Si._userID,i=Sj(n);Qv(o,e,t);const a=new FormData(i);return a.append("lib_version","3.11.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",o),Yv("/api/v1.0/email/send-form",a)},ml={init:xj,send:wj,sendForm:Ej};function qv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=qv(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function On(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=qv(e))&&(r&&(r+=" "),r+=t);return r}const Ko=e=>typeof e=="number"&&!isNaN(e),gr=e=>typeof e=="string",ot=e=>typeof e=="function",_a=e=>gr(e)||ot(e)?e:null,cu=e=>k.isValidElement(e)||gr(e)||ot(e)||Ko(e);function bj(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function gl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(a){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:g}=a;const v=r?`${t}--${l}`:t,h=r?`${n}--${l}`:n,y=k.useRef(0);return k.useLayoutEffect(()=>{const E=d.current,m=v.split(" "),p=x=>{x.target===d.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",p),E.removeEventListener("animationcancel",p),y.current===0&&x.type!=="animationcancel"&&E.classList.remove(...m))};E.classList.add(...m),E.addEventListener("animationend",p),E.addEventListener("animationcancel",p)},[]),k.useEffect(()=>{const E=d.current,m=()=>{E.removeEventListener("animationend",m),o?bj(E,c,i):c()};g||(u?m():(y.current=1,E.className+=` ${h}`,E.addEventListener("animationend",m)))},[g]),V.createElement(V.Fragment,null,s)}}function bh(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Et={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},ia=e=>{let{theme:t,type:n,...r}=e;return V.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},du={info:function(e){return V.createElement(ia,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return V.createElement(ia,{...e},V.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return V.createElement(ia,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return V.createElement(ia,{...e},V.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return V.createElement("div",{className:"Toastify__spinner"})}};function jj(e){const[,t]=k.useReducer(v=>v+1,0),[n,r]=k.useState([]),o=k.useRef(null),i=k.useRef(new Map).current,a=v=>n.indexOf(v)!==-1,s=k.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:v=>i.get(v)}).current;function l(v){let{containerId:h}=v;const{limit:y}=s.props;!y||h&&s.containerId!==h||(s.count-=s.queue.length,s.queue=[])}function u(v){r(h=>v==null?[]:h.filter(y=>y!==v))}function c(){const{toastContent:v,toastProps:h,staleId:y}=s.queue.shift();g(v,h,y)}function d(v,h){let{delay:y,staleId:E,...m}=h;if(!cu(v)||function(U){return!o.current||s.props.enableMultiContainer&&U.containerId!==s.props.containerId||i.has(U.toastId)&&U.updateId==null}(m))return;const{toastId:p,updateId:x,data:w}=m,{props:b}=s,C=()=>u(p),T=x==null;T&&s.count++;const $={...b,style:b.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(m).filter(U=>{let[F,J]=U;return J!=null})),toastId:p,updateId:x,data:w,closeToast:C,isIn:!1,className:_a(m.className||b.toastClassName),bodyClassName:_a(m.bodyClassName||b.bodyClassName),progressClassName:_a(m.progressClassName||b.progressClassName),autoClose:!m.isLoading&&(O=m.autoClose,R=b.autoClose,O===!1||Ko(O)&&O>0?O:R),deleteToast(){const U=bh(i.get(p),"removed");i.delete(p),Et.emit(4,U);const F=s.queue.length;if(s.count=p==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),F>0){const J=p==null?s.props.limit:1;if(F===1||J===1)s.displayedToast++,c();else{const xe=J>F?F:J;s.displayedToast=xe;for(let ae=0;ae<xe;ae++)c()}}else t()}};var O,R;$.iconOut=function(U){let{theme:F,type:J,isLoading:xe,icon:ae}=U,pe=null;const N={theme:F,type:J};return ae===!1||(ot(ae)?pe=ae(N):k.isValidElement(ae)?pe=k.cloneElement(ae,N):gr(ae)||Ko(ae)?pe=ae:xe?pe=du.spinner():(B=>B in du)(J)&&(pe=du[J](N))),pe}($),ot(m.onOpen)&&($.onOpen=m.onOpen),ot(m.onClose)&&($.onClose=m.onClose),$.closeButton=b.closeButton,m.closeButton===!1||cu(m.closeButton)?$.closeButton=m.closeButton:m.closeButton===!0&&($.closeButton=!cu(b.closeButton)||b.closeButton);let D=v;k.isValidElement(v)&&!gr(v.type)?D=k.cloneElement(v,{closeToast:C,toastProps:$,data:w}):ot(v)&&(D=v({closeToast:C,toastProps:$,data:w})),b.limit&&b.limit>0&&s.count>b.limit&&T?s.queue.push({toastContent:D,toastProps:$,staleId:E}):Ko(y)?setTimeout(()=>{g(D,$,E)},y):g(D,$,E)}function g(v,h,y){const{toastId:E}=h;y&&i.delete(y);const m={content:v,props:h};i.set(E,m),r(p=>[...p,E].filter(x=>x!==y)),Et.emit(4,bh(m,m.props.updateId==null?"added":"updated"))}return k.useEffect(()=>(s.containerId=e.containerId,Et.cancelEmit(3).on(0,d).on(1,v=>o.current&&u(v)).on(5,l).emit(2,s),()=>{i.clear(),Et.emit(3,s)}),[]),k.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(v){const h=new Map,y=Array.from(i.values());return e.newestOnTop&&y.reverse(),y.forEach(E=>{const{position:m}=E.props;h.has(m)||h.set(m,[]),h.get(m).push(E)}),Array.from(h,E=>v(E[0],E[1]))},containerRef:o,isToastActive:a}}function jh(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Th(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Tj(e){const[t,n]=k.useState(!1),[r,o]=k.useState(!1),i=k.useRef(null),a=k.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=k.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:g}=e;function v(w){if(e.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p),document.addEventListener("touchmove",m),document.addEventListener("touchend",p);const b=i.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=jh(w.nativeEvent),a.y=Th(w.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(w){if(a.boundingRect){const{top:b,bottom:C,left:T,right:$}=a.boundingRect;w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=T&&a.x<=$&&a.y>=b&&a.y<=C?E():y()}}function y(){n(!0)}function E(){n(!1)}function m(w){const b=i.current;a.canDrag&&b&&(a.didMove=!0,t&&E(),a.x=jh(w),a.y=Th(w),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function p(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",p);const w=i.current;if(a.canDrag&&a.didMove&&w){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),void e.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${e.draggableDirection}(0)`,w.style.opacity="1"}}k.useEffect(()=>{s.current=e}),k.useEffect(()=>(i.current&&i.current.addEventListener("d",y,{once:!0}),ot(e.onOpen)&&e.onOpen(k.isValidElement(e.children)&&e.children.props),()=>{const w=s.current;ot(w.onClose)&&w.onClose(k.isValidElement(w.children)&&w.children.props)}),[]),k.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",y),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);const x={onMouseDown:v,onTouchStart:v,onMouseUp:h,onTouchEnd:h};return l&&u&&(x.onMouseEnter=E,x.onMouseLeave=y),g&&(x.onClick=w=>{d&&d(w),a.canCloseOnClick&&c()}),{playToast:y,pauseToast:E,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:x}}function Kv(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return V.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},V.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},V.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Cj(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:a,style:s,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:g}=e;const v=i||l&&u===0,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(h.transform=`scaleX(${u})`);const y=On("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":c}),E=ot(a)?a({rtl:c,type:o,defaultClassName:y}):On(y,a);return V.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:h,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const kj=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=Tj(e),{closeButton:i,children:a,autoClose:s,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:g,position:v,className:h,style:y,bodyClassName:E,bodyStyle:m,progressClassName:p,progressStyle:x,updateId:w,role:b,progress:C,rtl:T,toastId:$,deleteToast:O,isIn:R,isLoading:D,iconOut:U,closeOnClick:F,theme:J}=e,xe=On("Toastify__toast",`Toastify__toast-theme--${J}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":F}),ae=ot(h)?h({rtl:T,position:v,type:u,defaultClassName:xe}):On(xe,h),pe=!!C||!s,N={closeToast:d,type:u,theme:J};let B=null;return i===!1||(B=ot(i)?i(N):k.isValidElement(i)?k.cloneElement(i,N):Kv(N)),V.createElement(g,{isIn:R,done:O,position:v,preventExitTransition:n,nodeRef:r},V.createElement("div",{id:$,onClick:l,className:ae,...o,style:y,ref:r},V.createElement("div",{...R&&{role:b},className:ot(E)?E({type:u}):On("Toastify__toast-body",E),style:m},U!=null&&V.createElement("div",{className:On("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},U),V.createElement("div",null,a)),B,V.createElement(Cj,{...w&&!pe?{key:`pb-${w}`}:{},rtl:T,theme:J,delay:s,isRunning:t,isIn:R,closeToast:d,hide:c,type:u,style:x,className:p,controlledProgress:pe,progress:C||0})))},vl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Pj=gl(vl("bounce",!0));gl(vl("slide",!0));gl(vl("zoom"));gl(vl("flip"));const Ei=k.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=jj(e),{className:i,style:a,rtl:s,containerId:l}=e;function u(c){const d=On("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":s});return ot(i)?i({position:c,rtl:s,defaultClassName:d}):On(d,_a(i))}return k.useEffect(()=>{t&&(t.current=r.current)},[]),V.createElement("div",{ref:r,className:"Toastify",id:l},n((c,d)=>{const g=d.length?{...a}:{...a,pointerEvents:"none"};return V.createElement("div",{className:u(c),style:g,key:`container-${c}`},d.map((v,h)=>{let{content:y,props:E}=v;return V.createElement(kj,{...E,isIn:o(E.toastId),style:{...E.style,"--nth":h+1,"--len":d.length},key:`toast-${E.key}`},y)}))}))});Ei.displayName="ToastContainer",Ei.defaultProps={position:"top-right",transition:Pj,autoClose:5e3,closeButton:Kv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let fu,tr=new Map,zo=[],$j=1;function Gv(){return""+$j++}function Oj(e){return e&&(gr(e.toastId)||Ko(e.toastId))?e.toastId:Gv()}function Go(e,t){return tr.size>0?Et.emit(0,e,t):zo.push({content:e,options:t}),t.toastId}function gs(e,t){return{...t,type:t&&t.type||e,toastId:Oj(t)}}function aa(e){return(t,n)=>Go(t,gs(e,n))}function M(e,t){return Go(e,gs("default",t))}M.loading=(e,t)=>Go(e,gs("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),M.promise=function(e,t,n){let r,{pending:o,error:i,success:a}=t;o&&(r=gr(o)?M.loading(o,n):M.loading(o.render,{...n,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,g)=>{if(d==null)return void M.dismiss(r);const v={type:c,...s,...n,data:g},h=gr(d)?{render:d}:d;return r?M.update(r,{...v,...h}):M(h.render,{...v,...h}),g},u=ot(e)?e():e;return u.then(c=>l("success",a,c)).catch(c=>l("error",i,c)),u},M.success=aa("success"),M.info=aa("info"),M.error=aa("error"),M.warning=aa("warning"),M.warn=M.warning,M.dark=(e,t)=>Go(e,gs("default",{theme:"dark",...t})),M.dismiss=e=>{tr.size>0?Et.emit(1,e):zo=zo.filter(t=>e!=null&&t.options.toastId!==e)},M.clearWaitingQueue=function(e){return e===void 0&&(e={}),Et.emit(5,e)},M.isActive=e=>{let t=!1;return tr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},M.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const a=tr.get(i||fu);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:Gv()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,Go(a,i)}},0)},M.done=e=>{M.update(e,{progress:1})},M.onChange=e=>(Et.on(4,e),()=>{Et.off(4,e)}),M.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},M.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Et.on(2,e=>{fu=e.containerId||e,tr.set(fu,e),zo.forEach(t=>{Et.emit(0,t.content,t.options)}),zo=[]}).on(3,e=>{tr.delete(e.containerId||e),tr.size===0&&Et.off(0).off(1).off(5)});const _j=j.section`
  background: none;
  color: ${S.colors.gray};
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

  @media (max-width: ${S.bp.large}) {
    background-size: 30%;
  }
`,Rj=j.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${S.colors.lavenderfloral};
  background-color: ${S.colors.lavender};
`,Aj=j.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${S.colors.raisinblack};
  font-size: 45px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 30px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${S.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`,Nj=j.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  gap: 10px;
  margin-bottom: 20px;
  background-color: ${S.colors.white};
  border-radius: 25px;

  @media (max-width: ${S.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,Ch=j.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${S.colors.platinum};
  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${S.bp.medium}) {
    width: 85vw;
  }
`,kh=j.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`,Ph=j.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,$h=j.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${S.colors.gray};
`,Oh=j.img`
  align-items: flex-start;
  width: 50px;
`,Ij=j.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${S.colors.platinum};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 50px;
  column-gap: 20px;
  background-color: ${S.colors.white};

  @media (max-width: ${S.bp.large}) {
    width: 90vw;
  }
`,Lj=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,sa=j.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${S.colors.platinum};
  color: ${S.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${S.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${S.colors.platinum};
  }
`,Mj=j.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${S.colors.platinum};
  color: ${S.colors.onyx};
  padding: 10px 15px;
  @media (max-width: ${S.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${S.colors.platinum};
  }
`,zj=j.button`
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
  color: ${S.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${S.colors.electricindigo} 0%,
    ${S.colors.lavenderfloral} 100%
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
`;ml.init("F9yJc6wjTrkVV7_ha");function df(){const e=k.useRef(),[t,n]=k.useState({}),[r,o]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},a=(u,c)=>{u.preventDefault();const d={},g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;c.name||(d.name="Por favor, completa tu nombre",M.error(d.name)),c.email?g.test(c.email)||(d.email="El formato del email no es valido",M.error(d.email)):(d.email="Por favor, completa tu email",M.error(d.email)),c.message||(d.message="Por favor, contanos cómo podemos ayudarte",M.error(d.message)),c.phone||(d.phone="Por favor, completa tu teléfono",M.error(d.phone)),c.subject||(d.subject="Por favor, escribe un asunto",M.error(d.subject)),c.message.length<8&&(d.message="Por favor, completa el mensaje con al menos 8 caracteres",M.error(d.message)),c.message.length>200&&(d.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",M.error(d.message)),n(d),Object.keys(d).length===0&&s()},s=()=>{const{name:u,email:c,phone:d,subject:g,message:v}=r;M.info("Enviando mensaje"),ml.send("service_mkzy70s","template_zpb7t5a",{name:u,email:c,message:v,phone:d,subject:g},"F9yJc6wjTrkVV7_ha").then(h=>{console.log(h.text),M.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},h=>{console.log(h.text),M.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),l()},l=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return f.jsxs(_j,{children:[f.jsx(Rj,{children:"Contacto"}),f.jsx(Aj,{children:"Dejanos tu consulta"}),f.jsxs(Nj,{children:[f.jsxs(Ch,{href:"tel:+61383766284",children:[f.jsx(Oh,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),f.jsxs(kh,{children:[f.jsx(Ph,{children:"Llamanos"}),f.jsx($h,{children:"+54 9 11 5 739 7834"})]})]}),f.jsxs(Ch,{href:"info@mecantronic.com.ar",children:[f.jsx(Oh,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),f.jsxs(kh,{children:[f.jsx(Ph,{children:"Escribinos"}),f.jsx($h,{children:"info@mecantronic.com.ar"})]})]})]}),f.jsxs(Ij,{ref:e,onSubmit:u=>a(u,r),children:[f.jsx(sa,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),f.jsx(sa,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),f.jsx(sa,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),f.jsx(sa,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),f.jsx(Mj,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),f.jsx(Lj,{children:f.jsx(zj,{type:"submit",children:"Enviar mensaje"})})]}),f.jsx(Ei,{position:"bottom-right"})]})}const Dj=j.section`
  background: none;
  color: ${S.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  background-image: url("assets/backgrounds/Background2.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${S.bp.large}) {
    background-size: 30%;
  }
`,Fj=j.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${S.colors.raisinblack};
  font-size: 30px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 0 0 10px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${S.bp.small}) {
    line-height: 44px;
    font-size: 24px;
    padding: 10px 0;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    line-height: 30px;
    font-size: 20px;
    padding: 5px 0;
  }
`,Uj=j.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;

  gap: 10px;
  margin-bottom: 20px;
  border-radius: 25px;

  @media (max-width: ${S.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,_h=j.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${S.colors.platinum};
  background-color: ${S.colors.white};

  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${S.bp.medium}) {
    width: 85vw;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    height: 50px;
    width: 80vw;
  }
`,Rh=j.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`,Ah=j.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,Nh=j.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${S.colors.gray};
`,Ih=j.img`
  align-items: flex-start;
  width: 50px;
  @media (max-width: ${S.bp["x-small"]}) {
    width: 30px;
  }
`,Bj=j.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${S.colors.platinum};
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  row-gap: 20px;
  column-gap: 20px;
  background-color: ${S.colors.white};

  @media (max-width: ${S.bp.large}) {
    width: 90vw;
    row-gap: 30px;
  }
  @media (max-width: ${S.bp.medium}) {
    row-gap: 20px;
  }
  @media (max-width: ${S.bp.small}) {
    row-gap: 20px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    row-gap: 10px;
  }
`,Hj=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,la=j.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${S.colors.platinum};
  color: ${S.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${S.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 80%;
    height: 30px;
  }

  &::placeholder {
    opacity: 1;
    color: ${S.colors.platinum};
  }
`,Vj=j.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${S.colors.platinum};
  color: ${S.colors.onyx};
  padding: 10px 15px;

  @media (max-width: ${S.bp["x-small"]}) {
    width: 80%;
  }

  &::placeholder {
    opacity: 1;
    color: ${S.colors.platinum};
  }
`,Wj=j.button`
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
  color: ${S.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${S.colors.electricindigo} 0%,
    ${S.colors.lavenderfloral} 100%
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
`;ml.init("F9yJc6wjTrkVV7_ha");function ff(){const e=k.useRef(),[t,n]=k.useState({}),[r,o]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},a=(u,c)=>{u.preventDefault();const d={},g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;c.name||(d.name="Por favor, completa tu nombre",M.error(d.name)),c.email?g.test(c.email)||(d.email="El formato del email no es valido",M.error(d.email)):(d.email="Por favor, completa tu email",M.error(d.email)),c.message||(d.message="Por favor, contanos cómo podemos ayudarte",M.error(d.message)),c.phone||(d.phone="Por favor, completa tu teléfono",M.error(d.phone)),c.subject||(d.subject="Por favor, escribe un asunto",M.error(d.subject)),c.message.length<8&&(d.message="Por favor, completa el mensaje con al menos 8 caracteres",M.error(d.message)),c.message.length>200&&(d.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",M.error(d.message)),n(d),Object.keys(d).length===0&&s()},s=()=>{const{name:u,email:c,phone:d,subject:g,message:v}=r;M.info("Enviando mensaje"),ml.send("service_mkzy70s","template_zpb7t5a",{name:u,email:c,message:v,phone:d,subject:g},"F9yJc6wjTrkVV7_ha").then(h=>{console.log(h.text),M.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},h=>{console.log(h.text),M.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),l()},l=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return f.jsxs(Dj,{children:[f.jsx(Fj,{children:"Dejanos tu consulta"}),f.jsxs(Uj,{children:[f.jsxs(_h,{href:"tel:+61383766284",children:[f.jsx(Ih,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),f.jsxs(Rh,{children:[f.jsx(Ah,{children:"Llamanos"}),f.jsx(Nh,{children:"+54 9 11 5 739 7834"})]})]}),f.jsxs(_h,{href:"info@mecantronic.com.ar",children:[f.jsx(Ih,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),f.jsxs(Rh,{children:[f.jsx(Ah,{children:"Escribinos"}),f.jsx(Nh,{children:"info@mecantronic.com.ar"})]})]})]}),f.jsxs(Bj,{ref:e,onSubmit:u=>a(u,r),children:[f.jsx(la,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),f.jsx(la,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),f.jsx(la,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),f.jsx(la,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),f.jsx(Vj,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),f.jsx(Hj,{children:f.jsx(Wj,{type:"submit",children:"Enviar mensaje"})})]}),f.jsx(Ei,{position:"bottom-right"})]})}function Nc(e){return Zt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Lh(e){return Zt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}}]})(e)}function Qj(e){return Zt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Ic(e){return Zt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function Mh(e){return Zt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function zh(e){return Zt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Yj(e){return Zt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function ua(e){return Zt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function qj(e){return Zt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"}}]})(e)}const Kj=j.div`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: ${S.colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${S.colors.electricindigo},
      ${S.colors.lavenderfloral}
    );
    z-index: 6;
    transform: translateX(
      ${e=>e.formtype==="login"?"100%":"0"}
    );
    transition: 1s ease-in-out;
  }

  @media (max-width: ${S.bp.small}) {
    width: 95vw;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    height: 95vh;
    &::before {
      display: none;
    }
  }
`,Gj=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`,Xj=j.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: 1;
  opacity: ${e=>e.formtype==="login"?"1":"0"};
  @media (max-width: ${S.bp["x-small"]}) {
    display: ${e=>e.formtype==="login"?"flex":"none"};
    width: 80%;
  }
`,Jj=j.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: ${e=>e.formtype==="login"?"0":"1"};
  @media (max-width: ${S.bp["x-small"]}) {
    display: ${e=>e.formtype==="login"?"none":"flex"};
    width: 80%;
  }
`,Dh=j.h2`
  font-size: 35px;
  color: ${S.colors.electricindigo};
  margin-bottom: 10px;
`,Fh=j.p`
  display: none;
  @media (max-width: ${S.bp["x-small"]}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    a {
      text-decoration: none;
      color: ${S.colors.electricindigo};
    }
  }
`,yn=j.i`
  flex: 1;
  text-align: center;
  color: ${S.colors.gray};
  font-size: 16px;
`,xn=j.div`
  width: 100%;
  height: 40px;
  background: ${S.colors.white};
  margin: 10px 0;
  border: 2px solid ${S.colors.platinum};
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
    color: ${S.colors.onyx};
  }
  @media (max-width: ${S.bp["x-small"]}) {
    height: 30px;
  }
`,Uh=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,ca=j.button`
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
  color: ${S.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${S.colors.electricindigo} 0%,
    ${S.colors.lavenderfloral} 100%
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
`,Bh=j.p`
  margin: 10px 0;
  font-size: 16px;
`,Hh=j.div`
  display: flex;
  justify-content: center;
`,wn=j.a`
  text-decoration: none;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${S.colors.raisinblack};
  border: 1px solid ${S.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${S.colors.electricindigo};
    border-color: ${S.colors.electricindigo};
  }
`,Zj=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,eT=j.div`
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
`,tT=j.div`
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
`,Vh=j.div`
  color: ${S.colors.white};
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
`,Wh=j.button`
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
  color: ${S.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: ${S.colors.onyx};
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
`,nT=j.div`
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
`;function Qh(){return f.jsx(nT,{})}function Lc({initialType:e}){const t=Ri(),[n,r]=k.useState(!1),[o,i]=k.useState(e),[a,s]=k.useState({email:"",password:""}),[l,u]=k.useState({userName:"",firstName:"",lastName:"",email:"",phone:"",password:""}),[c,d]=k.useState({}),g=()=>{if(o==="login"){i("signup");return}if(o==="signup"){i("login");return}},v=x=>{s({...a,[x.target.name]:x.target.value})},h=x=>{x.preventDefault();const w={};a.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.email)||(w.email="Por favor, ingresa una dirección de correo electrónico válida.",M.error(w.email)):(w.email="Por favor, completa tu dirección de correo electrónico.",M.error(w.email)),a.password?(a.password.length<8||a.password.length>50)&&(w.password="La contraseña debe tener entre 8 y 50 caracteres.",M.error(w.password)):(w.password="Por favor, completa tu contraseña.",M.error(w.password)),d(w),Object.keys(w).length===0&&(y(),d({}))},y=async()=>{r(!0);const x=await Ub(a);x.error?(M.error(x.error.message),r(!1)):(t(wh({token:x.token,userName:x.userName,service:x.service,freeCredits:x.credits.freeCredits,premiumCredits:x.credits.premiumCredits})),t(Pc()),r(!1))},E=x=>{u({...l,[x.target.name]:x.target.value})},m=x=>{x.preventDefault();const w={};l.userName?/^[a-zA-Z0-9_]+$/.test(l.userName)?(l.userName.length<2||l.userName.length>18)&&(w.userName="El nombre de usuario debe tener entre 2 y 18 caracteres.",M.error(w.userName)):(w.userName="El nombre de usuario solo puede contener letras, números y guiones bajos.",M.error(w.userName)):(w.userName="Por favor, completa tu nombre de usuario.",M.error(w.userName)),l.firstName||(w.firstName="Por favor, completa tu nombre.",M.error(w.firstName)),l.lastName||(w.lastName="Por favor, completa tu apellido.",M.error(w.lastName)),/^[a-zA-Z ]+$/.test(l.name)||(w.firstName="El nombre solo puede contener letras y espacios.",M.error(w.firstName)),/^[a-zA-Z ]+$/.test(l.lastName)||(w.lastName="El apellido solo puede contener letras y espacios.",M.error(w.lastName)),(l.firstName.length<2||l.firstName.length>18)&&(w.firstName="El nombre debe tener entre 2 y 18 caracteres.",M.error(w.firstName)),(l.lastName.length<2||l.lastName.length>8)&&(w.lastName="El apellido debe tener entre 2 y 8 caracteres.",M.error(w.lastName)),l.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(l.email)||(w.email="Por favor, ingresa una dirección de correo electrónico válida.",M.error(w.email)):(w.email="Por favor, completa tu dirección de correo electrónico.",M.error(w.email)),l.phone?/^[0-9()-]+$/.test(l.phone)||(w.phone="El número de teléfono solo puede contener números, guiones y paréntesis.",M.error(w.phone)):(w.phone="Por favor, completa tu número de teléfono.",M.error(w.phone)),l.password?(l.password.length<8||l.password.length>50)&&(w.password="La contraseña debe tener entre 8 y 50 caracteres.",M.error(w.password)):(w.password="Por favor, completa tu contraseña.",M.error(w.password)),d(w),Object.keys(w).length===0&&(p(),d({}))},p=async()=>{r(!0);const x=await Bb(l);x.error?(M.error(x.error.message),r(!1)):(t(wh({token:x.token,userName:x.userName,service:"free",freeCredits:1e4,premiumCredits:0})),t(Pc()),r(!1))};return f.jsxs(Kj,{formtype:o,children:[f.jsxs(Gj,{children:[f.jsxs(Xj,{action:"",formtype:o,children:[f.jsx(Dh,{children:"Log In"}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(ua,{})}),f.jsx("input",{type:"text",placeholder:"Email",name:"email",value:a.email,onChange:v})]}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(zh,{})}),f.jsx("input",{type:"password",placeholder:"Contraseña",name:"password",value:a.password,onChange:v})]}),f.jsx(Uh,{children:n?f.jsx(ca,{type:"submit",value:"Login",children:f.jsx(Qh,{})}):f.jsx(ca,{type:"submit",value:"Login",onClick:h,children:"Ingresar"})}),f.jsx(Bh,{children:"O iniciá sesión con"}),f.jsxs(Hh,{children:[f.jsx(wn,{href:"#",children:f.jsx(Nc,{})}),f.jsx(wn,{href:"",children:f.jsx(Mh,{})}),f.jsx(wn,{href:"",children:f.jsx(Lh,{})}),f.jsx(wn,{href:"",children:f.jsx(Ic,{})})]}),f.jsxs(Fh,{children:["¿No tienes una cuenta? ","",f.jsx("a",{href:"#",onClick:g,id:"sign-up-btn2",children:"Registrarse"})]})]}),f.jsxs(Jj,{action:"",formtype:o,children:[f.jsx(Dh,{children:"Registro"}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(ua,{})}),f.jsx("input",{type:"text",placeholder:"Nombre",name:"firstName",value:l.firstName,onChange:E})]}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(ua,{})}),f.jsx("input",{type:"text",placeholder:"Apellido",name:"lastName",value:l.lastName,onChange:E})]}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(Yj,{})}),f.jsx("input",{type:"text",placeholder:"Teléfono",name:"phone",value:l.phone,onChange:E})]}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(ua,{})}),f.jsx("input",{type:"text",placeholder:"Usuario",name:"userName",value:l.userName,onChange:E})]}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(qj,{})}),f.jsx("input",{type:"text",placeholder:"Email",name:"email",value:l.email,onChange:E})]}),f.jsxs(xn,{children:[f.jsx(yn,{children:f.jsx(zh,{})}),f.jsx("input",{type:"password",placeholder:"Contraseña",name:"password",value:l.password,onChange:E})]}),f.jsx(Uh,{children:n?f.jsx(ca,{type:"submit",value:"Sign up",children:f.jsx(Qh,{})}):f.jsx(ca,{type:"submit",value:"Sign up",onClick:m,children:"Registrarse"})}),f.jsx(Bh,{children:"O registrate con"}),f.jsxs(Hh,{children:[f.jsx(wn,{href:"#",children:f.jsx(Nc,{})}),f.jsx(wn,{href:"",children:f.jsx(Mh,{})}),f.jsx(wn,{href:"",children:f.jsx(Lh,{})}),f.jsx(wn,{href:"",children:f.jsx(Ic,{})})]}),f.jsxs(Fh,{children:["¿ Ya tienes una cuenta? ","",f.jsx("a",{href:"#",onClick:g,id:"sign-in-btn2",children:"Ingresar"})]})]})]}),f.jsxs(Zj,{children:[f.jsx(eT,{formtype:o,children:f.jsxs(Vh,{children:[f.jsx("h3",{children:"¿Ya tenés una cuenta?"}),f.jsx("p",{children:"Iniciá sesión para disfrutar de nuestros servicios"}),f.jsx(Wh,{onClick:g,children:"Ingresar"})]})}),f.jsx(tT,{formtype:o,children:f.jsxs(Vh,{children:[f.jsx("h3",{children:"¿No tenés una cuenta?"}),f.jsx("p",{children:"Sería un placer que formes parte de Sintética. Registrate acá para disfrutar nuestros servicios"}),f.jsx(Wh,{onClick:g,children:"Registrarse"})]})})]}),f.jsx(Ei,{style:{position:"absolute",bottom:"2vh",right:"2vw"}})]})}Lc.propTypes={initialType:te.oneOf(["login","signup"])};const rT=j.div`
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
`,oT=j.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`,iT=j.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${S.colors.onyx};
  z-index: 12;
`,pf=()=>{const e=Ri(),t=Vd(o=>o.modal.modalType),n=()=>{e(Pc())};let r;switch(t){case"contact":r=f.jsx(ff,{});break;case"login":r=f.jsx(Lc,{initialType:"login"});break;case"signup":r=f.jsx(Lc,{initialType:"signup"});break;default:r=f.jsx(f.Fragment,{})}return t==="closed"?f.jsx(f.Fragment,{}):f.jsx(rT,{children:f.jsxs(oT,{children:[f.jsx(iT,{onClick:n,children:"x"}),r]})})},aT=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`,sT=j.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`,lT=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: ${S.colors.seasalt};
`,uT=j.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,cT=j.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;

  @media (max-width: ${S.bp.large}) {
    width: 992px;
  }
  @media (max-width: ${S.bp.medium}) {
    width: 767px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 576px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`,dT=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 138px;
  margin-right: 0px;

  @media (max-width: ${S.bp.large}) {
    width: 113px;
  }
  @media (max-width: ${S.bp.small}) {
    display: none;
  }
`,fT=j.img`
  width: 110px;

  @media (max-width: ${S.bp.large}) {
    width: 90px;
  }
`,pT=j.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 32px;
    color: ${S.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 9px;
    font-weight: 700;
    color: ${S.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${S.bp.large}) {
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 8px;
    }
  }
`,hT=j.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    height: 100%;
  }
`,mT=j.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`,gT=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${S.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${S.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
  }
`,pu=j.h5`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px 0;
  margin: 0;

  @media (max-width: ${S.bp.small}) {
    font-size: 16px;
    line-height: 16px;
  }
`,Po=j(mo)`
  display: flex;
  color: ${S.colors.raisinblack};
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
    border-bottom: 2px solid ${S.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${S.bp.small}) {
    font-size: 12px;
    line-height: 12px;
  }
`,hu=j.a`
  display: flex;
  color: ${S.colors.raisinblack};
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
    border-bottom: 2px solid ${S.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${S.bp.large}) {
    font-size: 12px;
  }
  @media (max-width: ${S.bp.small}) {
    font-size: 12px !important;
    line-height: 12px !important;
  }
`,vT=j.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${S.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${S.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
  }
`,yT=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;

  p {
    margin: 0;
  }

  @media (max-width: ${S.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${S.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${S.bp.small}) {
    p {
      font-size: 12px;
      line-height: 12px;
    }
  }
  @media (max-width: ${S.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
  }
`,xT=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,mu=j.a`
  text-decoration: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${S.colors.raisinblack};
  border: 1px solid ${S.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${S.colors.electricindigo};
    border-color: ${S.colors.electricindigo};
  }
`,wT=j.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${S.colors.gray};
  @media (max-width: ${S.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`;function yl(){return f.jsx(lT,{children:f.jsxs(uT,{children:[f.jsxs(cT,{children:[f.jsxs(dT,{children:[f.jsx(fT,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),f.jsxs(pT,{children:[f.jsx("h1",{children:"Sintética"}),f.jsx("p",{children:"Laboratorio de voces"})]})]}),f.jsxs(hT,{children:[f.jsxs(mT,{children:[f.jsxs(gT,{children:[f.jsx(pu,{children:"Navegación"}),f.jsx(Po,{to:"/VoiceCloning",children:"Voice Cloning"}),f.jsx(Po,{to:"/Maintenance",children:"Experiencia TTS"}),f.jsx(Po,{to:"/Maintenance",children:"AI & Salud"}),f.jsx(Po,{to:"/Maintenance",children:"Investigación"}),f.jsx(Po,{to:"/Maintenance",children:"Nosotros"})]}),f.jsxs(vT,{children:[f.jsx(pu,{children:"Contacto"}),f.jsx(hu,{href:"",rel:"noreferrer",children:"Belgrano, CABA."}),f.jsx(hu,{href:"https://wa.me/5491157397834",target:"_blank",rel:"noreferrer",children:"+54 9 11 5 739 7834"}),f.jsx(hu,{href:"mailto:info@mecantronic.com.ar",children:"info@mecantronic.com.ar"})]})]}),f.jsxs(yT,{children:[f.jsx(pu,{children:"Conectemos"}),f.jsx("p",{children:"Seguinos en nuestras"}),f.jsx("p",{children:"redes sociales."}),f.jsxs(xT,{children:[f.jsx(mu,{href:"https://www.facebook.com/mecantronic",target:"_blank",rel:"noreferrer",children:f.jsx(Nc,{})}),f.jsx(mu,{href:"https://www.linkedin.com/company/mecantronic-sa/",target:"_blank",rel:"noreferrer",children:f.jsx(Ic,{})}),f.jsx(mu,{href:"https://www.instagram.com/mecantronic/?hl=es",target:"_blank",rel:"noreferrer",children:f.jsx(Qj,{})})]})]})]})]}),f.jsxs(wT,{children:[f.jsx("p",{children:"Copyright 2023 Todos los derechos reservados"}),f.jsx("p",{children:"©Mecantronic 2023"})]})]})})}function ST(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Xv=k,ET=ST(Xv);function Yh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bT(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var jT=!!(typeof window<"u"&&window.document&&window.document.createElement);function TT(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(c){return c.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(c){bT(d,c);function d(){return c.apply(this,arguments)||this}d.peek=function(){return s},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var h=s;return s=void 0,a=[],h};var g=d.prototype;return g.UNSAFE_componentWillMount=function(){a.push(this),l()},g.componentDidUpdate=function(){l()},g.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),l()},g.render=function(){return ET.createElement(i,this.props)},d}(Xv.PureComponent);return Yh(u,"displayName","SideEffect("+r(i)+")"),Yh(u,"canUseDOM",jT),u}}var CT=TT;const kT=ji(CT);var PT=typeof Element<"u",$T=typeof Map=="function",OT=typeof Set=="function",_T=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ra(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ra(e[r],t[r]))return!1;return!0}var i;if($T&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Ra(r.value[1],t.get(r.value[0])))return!1;return!0}if(OT&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(_T&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(PT&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Ra(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var RT=function(t,n){try{return Ra(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const AT=ji(RT);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var qh=Object.getOwnPropertySymbols,NT=Object.prototype.hasOwnProperty,IT=Object.prototype.propertyIsEnumerable;function LT(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function MT(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var zT=MT()?Object.assign:function(e,t){for(var n,r=LT(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)NT.call(n,a)&&(r[a]=n[a]);if(qh){o=qh(n);for(var s=0;s<o.length;s++)IT.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const DT=ji(zT);var ur={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},W={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(W).map(function(e){return W[e]});var Se={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},vs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},bi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},FT=Object.keys(vs).reduce(function(e,t){return e[vs[t]]=t,e},{}),UT=[W.NOSCRIPT,W.SCRIPT,W.STYLE],zt="data-react-helmet",BT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},HT=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},VT=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},WT=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Kh=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},QT=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Mc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},YT=function(t){var n=Yr(t,W.TITLE),r=Yr(t,bi.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=Yr(t,bi.DEFAULT_TITLE);return n||o||void 0},qT=function(t){return Yr(t,bi.ON_CHANGE_CLIENT_STATE)||function(){}},gu=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,o){return tt({},r,o)},{})},KT=function(t,n){return n.filter(function(r){return typeof r[W.BASE]<"u"}).map(function(r){return r[W.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&o[l])return r.concat(o)}return r},[])},$o=function(t,n,r){var o={};return r.filter(function(i){return Array.isArray(i[t])?!0:(typeof i[t]<"u"&&ZT("Helmet: "+t+' should be of type "Array". Instead found type "'+BT(i[t])+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,a){var s={};a.filter(function(g){for(var v=void 0,h=Object.keys(g),y=0;y<h.length;y++){var E=h[y],m=E.toLowerCase();n.indexOf(m)!==-1&&!(v===Se.REL&&g[v].toLowerCase()==="canonical")&&!(m===Se.REL&&g[m].toLowerCase()==="stylesheet")&&(v=m),n.indexOf(E)!==-1&&(E===Se.INNER_HTML||E===Se.CSS_TEXT||E===Se.ITEM_PROP)&&(v=E)}if(!v||!g[v])return!1;var p=g[v].toLowerCase();return o[v]||(o[v]={}),s[v]||(s[v]={}),o[v][p]?!1:(s[v][p]=!0,!0)}).reverse().forEach(function(g){return i.push(g)});for(var l=Object.keys(s),u=0;u<l.length;u++){var c=l[u],d=DT({},o[c],s[c]);o[c]=d}return i},[]).reverse()},Yr=function(t,n){for(var r=t.length-1;r>=0;r--){var o=t[r];if(o.hasOwnProperty(n))return o[n]}return null},GT=function(t){return{baseTag:KT([Se.HREF,Se.TARGET],t),bodyAttributes:gu(ur.BODY,t),defer:Yr(t,bi.DEFER),encode:Yr(t,bi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:gu(ur.HTML,t),linkTags:$o(W.LINK,[Se.REL,Se.HREF],t),metaTags:$o(W.META,[Se.NAME,Se.CHARSET,Se.HTTPEQUIV,Se.PROPERTY,Se.ITEM_PROP],t),noscriptTags:$o(W.NOSCRIPT,[Se.INNER_HTML],t),onChangeClientState:qT(t),scriptTags:$o(W.SCRIPT,[Se.SRC,Se.INNER_HTML],t),styleTags:$o(W.STYLE,[Se.CSS_TEXT],t),title:YT(t),titleAttributes:gu(ur.TITLE,t)}},zc=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){zc(t)},0)}}(),Gh=function(t){return clearTimeout(t)},XT=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||zc:global.requestAnimationFrame||zc,JT=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Gh:global.cancelAnimationFrame||Gh,ZT=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Oo=null,eC=function(t){Oo&&JT(Oo),t.defer?Oo=XT(function(){Xh(t,function(){Oo=null})}):(Xh(t),Oo=null)},Xh=function(t,n){var r=t.baseTag,o=t.bodyAttributes,i=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,d=t.styleTags,g=t.title,v=t.titleAttributes;Dc(W.BODY,o),Dc(W.HTML,i),tC(g,v);var h={baseTag:br(W.BASE,r),linkTags:br(W.LINK,a),metaTags:br(W.META,s),noscriptTags:br(W.NOSCRIPT,l),scriptTags:br(W.SCRIPT,c),styleTags:br(W.STYLE,d)},y={},E={};Object.keys(h).forEach(function(m){var p=h[m],x=p.newTags,w=p.oldTags;x.length&&(y[m]=x),w.length&&(E[m]=h[m].oldTags)}),n&&n(),u(t,y,E)},Jv=function(t){return Array.isArray(t)?t.join(""):t},tC=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Jv(t)),Dc(W.TITLE,n)},Dc=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var o=r.getAttribute(zt),i=o?o.split(","):[],a=[].concat(i),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],c=n[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),i.indexOf(u)===-1&&i.push(u);var d=a.indexOf(u);d!==-1&&a.splice(d,1)}for(var g=a.length-1;g>=0;g--)r.removeAttribute(a[g]);i.length===a.length?r.removeAttribute(zt):r.getAttribute(zt)!==s.join(",")&&r.setAttribute(zt,s.join(","))}},br=function(t,n){var r=document.head||document.querySelector(W.HEAD),o=r.querySelectorAll(t+"["+zt+"]"),i=Array.prototype.slice.call(o),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var c in l)if(l.hasOwnProperty(c))if(c===Se.INNER_HTML)u.innerHTML=l.innerHTML;else if(c===Se.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var d=typeof l[c]>"u"?"":l[c];u.setAttribute(c,d)}u.setAttribute(zt,"true"),i.some(function(g,v){return s=v,u.isEqualNode(g)})?i.splice(s,1):a.push(u)}),i.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:i,newTags:a}},Zv=function(t){return Object.keys(t).reduce(function(n,r){var o=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+o:o},"")},nC=function(t,n,r,o){var i=Zv(r),a=Jv(n);return i?"<"+t+" "+zt+'="true" '+i+">"+Mc(a,o)+"</"+t+">":"<"+t+" "+zt+'="true">'+Mc(a,o)+"</"+t+">"},rC=function(t,n,r){return n.reduce(function(o,i){var a=Object.keys(i).filter(function(u){return!(u===Se.INNER_HTML||u===Se.CSS_TEXT)}).reduce(function(u,c){var d=typeof i[c]>"u"?c:c+'="'+Mc(i[c],r)+'"';return u?u+" "+d:d},""),s=i.innerHTML||i.cssText||"",l=UT.indexOf(t)===-1;return o+"<"+t+" "+zt+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},ey=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[vs[o]||o]=t[o],r},n)},oC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[FT[o]||o]=t[o],r},n)},iC=function(t,n,r){var o,i=(o={key:n},o[zt]=!0,o),a=ey(r,i);return[V.createElement(W.TITLE,a,n)]},aC=function(t,n){return n.map(function(r,o){var i,a=(i={key:o},i[zt]=!0,i);return Object.keys(r).forEach(function(s){var l=vs[s]||s;if(l===Se.INNER_HTML||l===Se.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),V.createElement(t,a)})},tn=function(t,n,r){switch(t){case W.TITLE:return{toComponent:function(){return iC(t,n.title,n.titleAttributes)},toString:function(){return nC(t,n.title,n.titleAttributes,r)}};case ur.BODY:case ur.HTML:return{toComponent:function(){return ey(n)},toString:function(){return Zv(n)}};default:return{toComponent:function(){return aC(t,n)},toString:function(){return rC(t,n,r)}}}},ty=function(t){var n=t.baseTag,r=t.bodyAttributes,o=t.encode,i=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,c=t.styleTags,d=t.title,g=d===void 0?"":d,v=t.titleAttributes;return{base:tn(W.BASE,n,o),bodyAttributes:tn(ur.BODY,r,o),htmlAttributes:tn(ur.HTML,i,o),link:tn(W.LINK,a,o),meta:tn(W.META,s,o),noscript:tn(W.NOSCRIPT,l,o),script:tn(W.SCRIPT,u,o),style:tn(W.STYLE,c,o),title:tn(W.TITLE,{title:g,titleAttributes:v},o)}},sC=function(t){var n,r;return r=n=function(o){WT(i,o);function i(){return HT(this,i),QT(this,o.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(s){return!AT(this.props,s)},i.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case W.SCRIPT:case W.NOSCRIPT:return{innerHTML:l};case W.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,c=s.arrayTypeChildren,d=s.newChildProps,g=s.nestedChildren;return tt({},c,(l={},l[u.type]=[].concat(c[u.type]||[],[tt({},d,this.mapNestedChildrenToProps(u,g))]),l))},i.prototype.mapObjectTypeChildren=function(s){var l,u,c=s.child,d=s.newProps,g=s.newChildProps,v=s.nestedChildren;switch(c.type){case W.TITLE:return tt({},d,(l={},l[c.type]=v,l.titleAttributes=tt({},g),l));case W.BODY:return tt({},d,{bodyAttributes:tt({},g)});case W.HTML:return tt({},d,{htmlAttributes:tt({},g)})}return tt({},d,(u={},u[c.type]=tt({},g),u))},i.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=tt({},l);return Object.keys(s).forEach(function(c){var d;u=tt({},u,(d={},d[c]=s[c],d))}),u},i.prototype.warnOnInvalidChildren=function(s,l){return!0},i.prototype.mapChildrenToProps=function(s,l){var u=this,c={};return V.Children.forEach(s,function(d){if(!(!d||!d.props)){var g=d.props,v=g.children,h=Kh(g,["children"]),y=oC(h);switch(u.warnOnInvalidChildren(d,v),d.type){case W.LINK:case W.META:case W.NOSCRIPT:case W.SCRIPT:case W.STYLE:c=u.flattenArrayTypeChildren({child:d,arrayTypeChildren:c,newChildProps:y,nestedChildren:v});break;default:l=u.mapObjectTypeChildren({child:d,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(c,l),l},i.prototype.render=function(){var s=this.props,l=s.children,u=Kh(s,["children"]),c=tt({},u);return l&&(c=this.mapChildrenToProps(l,c)),V.createElement(t,c)},VT(i,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),i}(V.Component),n.propTypes={base:te.object,bodyAttributes:te.object,children:te.oneOfType([te.arrayOf(te.node),te.node]),defaultTitle:te.string,defer:te.bool,encodeSpecialCharacters:te.bool,htmlAttributes:te.object,link:te.arrayOf(te.object),meta:te.arrayOf(te.object),noscript:te.arrayOf(te.object),onChangeClientState:te.func,script:te.arrayOf(te.object),style:te.arrayOf(te.object),title:te.string,titleAttributes:te.object,titleTemplate:te.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var o=t.rewind();return o||(o=ty({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},lC=function(){return null},uC=kT(GT,eC,ty)(lC),Fc=sC(uC);Fc.renderStatic=Fc.rewind;function cC(){const[e,t]=k.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return f.jsxs(aT,{children:[f.jsxs(Fc,{children:[f.jsx("title",{children:"Sintética"}),f.jsx("meta",{name:"description",content:"Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),f.jsx("meta",{name:"keywords",content:"Clonación de voz, español rioplatense, voice cloning, síntesis de voces, text to speech, voice bots"}),f.jsx("meta",{name:"canonical",href:"https://www.ejemplo.com/mi-pagina"}),f.jsx("meta",{name:"og:title",content:"Sintética"}),f.jsx("meta",{name:"og:description",content:"Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),f.jsx("meta",{name:"robots",content:"index, follow"})]}),f.jsx(hl,{}),f.jsx(Jb,{openModal:n}),f.jsxs(sT,{children:[f.jsx(rj,{}),f.jsx(yj,{}),f.jsx(df,{})]}),e&&f.jsx(pf,{closeModal:r,children:f.jsx(ff,{})}),f.jsx(yl,{})]})}const dC=j.section`
  background-color: ${S.colors.white};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${S.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${S.bp.small}) {
    padding-top: 50px;
  }
`,fC=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${S.bp.large}) {
    width: auto;
  }
`,pC=j.img`
  width: 500px;
  @media (max-width: ${S.bp.large}) {
    width: 500px;
  }
  @media (max-width: ${S.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 300px;
  }
`,hC=j.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${S.bp.large}) {
    width: 80%;
  }
`,mC=j.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${S.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 40px;
  }
`,gC=j.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${S.colors.gray};
`,vC=j.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,yC=j.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${S.bp.medium}) {
    margin-right: 50px;
  }
`;function ny({openModal:e}){const t=Ri(),n=()=>{t(Sv())};return f.jsxs(dC,{children:[f.jsx(fC,{children:f.jsx(pC,{src:"assets/voiceCloning/bannerVoice.svg"})}),f.jsxs(hC,{children:[f.jsx(mC,{children:"Inteligencia Artificial para alzar tu voz"}),f.jsx(gC,{children:"Crea una copia digital de tu voz con nuestros sistemas de inteligencia artificial para clonar voces. Desarrollamos modelos de IA personalizados para capturar tu voz y darte la experiencia más realista en tu propio idioma."}),f.jsx(vC,{children:f.jsx(yC,{onClick:e,children:f.jsx(us,{buttonText:"Cloná tu voz ",rightArrow:!0,handleClick:n})})})]})]})}ny.propTypes={openModal:te.func.isRequired};const xC=j.section`
  background-color: ${S.colors.white};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${S.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${S.bp.small}) {
    padding-top: 80px;
  }
`,wC=j.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${S.colors.lavenderfloral};
  background-color: ${S.colors.lavender};
`,SC=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`,yt=j.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${S.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
`,xt=j.audio`
  width: 330px;
`,wt=j.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${S.colors.raisinblack};
`,St=j.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${S.colors.electricindigo};
`;function EC(){return f.jsxs(xC,{children:[f.jsx(wC,{children:"Nuestras voces"}),f.jsxs(SC,{children:[f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/fem1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Ana"}),f.jsx(St,{children:"Voz Real"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/fem1_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Ana"}),f.jsx(St,{children:"Voz AI"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/mas1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Franco"}),f.jsx(St,{children:"Voz Real"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/mas1_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Franco"}),f.jsx(St,{children:"Voz AI"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/fem2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Paula"}),f.jsx(St,{children:"Voz Real"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/fem2_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Paula"}),f.jsx(St,{children:"Voz AI"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/mas2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Darío"}),f.jsx(St,{children:"Voz Real"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/mas2_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Darío"}),f.jsx(St,{children:"Voz AI"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/fem3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Luciana"}),f.jsx(St,{children:"Voz Real"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/fem3_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Luciana"}),f.jsx(St,{children:"Voz AI"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/mas3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Hernán"}),f.jsx(St,{children:"Voz Real"})]}),f.jsxs(yt,{children:[f.jsxs(xt,{controls:!0,children:[f.jsx("source",{src:"audios-voice/mas3_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(wt,{children:"Hernán"}),f.jsx(St,{children:"Voz AI"})]})]})]})}const bC=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;function jC(){const[e,t]=k.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return f.jsxs(bC,{children:[f.jsx(hl,{}),f.jsx(ny,{openModal:n}),f.jsx(EC,{}),f.jsx(df,{}),e&&f.jsx(pf,{closeModal:r,children:f.jsx(ff,{})}),f.jsx(yl,{})]})}const TC=j.section`
  background-color: ${S.colors.onyx};
  color: ${S.colors.electricindigo};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${S.bp.large}) {
    margin-top: 100px;
  }
`,CC=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media (max-width: ${S.bp.large}) {
    width: 80%;
  }
`,kC=j.img`
  position: relative;
  width: 430px;
  @media (max-width: ${S.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 80vw;
  }
`,PC=j.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${S.bp.large}) {
    width: 90%;
  }
`,$C=j.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${S.colors.onyx};
  letter-spacing: 1px;
`,OC=j.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 40px;
    line-height: 50px;
  }
`,vu=j.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;function _C(){return f.jsxs(TC,{children:[f.jsxs(PC,{children:[f.jsx($C,{children:"*** ¿Porqué lo hacemos?"}),f.jsx(OC,{children:"Tecnología al servicio de la salud y la inclusión"}),f.jsx(vu,{children:"En Sintética, estamos convencidos de que la tecnología debe ser una fuerza impulsora para mejorar la vida de las personas en todo el mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos hacia una visión transformadora: empoderar a individuos de todas las capacidades y orígenes a través de soluciones innovadoras."}),f.jsx(vu,{children:"En la intersección de la vanguardia tecnológica y el bienestar humano, la inteligencia artificial ha emergido como un faro de posibilidades. Creemos en la importancia de la inclusión, en la eliminación de barreras y en la promoción de la igualdad en todos los niveles."}),f.jsx(vu,{children:"La clonación de voz no solo es un avance técnico, es un testimonio de nuestro compromiso de construir un mundo donde cada voz sea escuchada y respetada. Te invitamos a explorar nuestros proyectos y descubrir cómo la inteligencia artificial está transformando la salud de maneras que antes solo podíamos imaginar."})]}),f.jsx(CC,{children:f.jsx(kC,{src:"assets/ia-salud/logo_1.png",alt:"Logo IA-salud"})})]})}const RC=j.section`
  background-color: ${S.colors.onyx};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-top: 100px;
`,AC=j.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 40px;
  }
`,da=j.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`,NC=j.iframe`
  width: 80vw;
  height: 50vw;
  padding-top: 50px;
`;function IC(){return f.jsxs(RC,{children:[f.jsx(AC,{children:"Proyecto Mi Identidad Vocal: programa ImpaCT.ar Ciencia y Tecnología - Ministerio de Salud de la Nación."}),f.jsx(da,{children:"En las actividades cotidianas se hace evidente que la voz desempeña un papel indispensable. Desde la comunicación con el entorno familiar, hasta el desempeño académico y laboral. Prescindir de este instrumento significa una desventaja importante para el desarrollo de cualquier persona."}),f.jsx(da,{children:"La clonación de voz emerge como una herramienta de gran potencial en la asistencia a personas afectadas por patologías de alta complejidad. Entre las condiciones que mayores limitaciones generan se encuentran la esclerosis lateral amiotrófica (ELA), la enfermedad de Huntington (EH), la apraxia, el accidente cerebrovascular (ACV) y el trastorno del espectro autista (TEA). Sin embargo, existen otro tipo de afecciones leves que pueden ser mitigadas con la tecnología propuesta, como por ejemplo, las intervenciones quirúrgicas en las cuerdas vocales y traqueotomías."}),f.jsx(da,{children:"Mediante la aplicación de la clonación de voz, los usuarios podrán introducir mensajes en formato de texto, lo que conlleva a la producción de una representación auditiva por medio de una voz sintética. Esta tendrá como característica principal una gran similitud con su voz natural gracias al registro de audios de referencia y las tecnologías que se describen en este documento."}),f.jsx(da,{children:"El software que desarrollamos permite reproducir cualquier texto que se ingrese, en forma de discurso y en español rioplatense. Esto representa un gran aporte en términos de inclusión para un porcentaje de la población que se ve imposibilitado en su desarrollo cotidiano."}),f.jsx(NC,{src:"https://www.youtube.com/embed/-KylP16dxj0?si=CDhRIkNFvzT6ZUnR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}const LC=j.section`
  background-color: ${S.colors.onyx};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`,MC=j.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${S.colors.onyx};
  letter-spacing: 1px;
`,zC=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`,Jh=j.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${S.colors.seasalt};
  border-radius: 15px;
`,Zh=j.img`
  width: 320px;
  height: 380px;
`;function DC(){return f.jsxs(LC,{children:[f.jsx(MC,{children:"*** Prensa ***"}),f.jsxs(zC,{children:[f.jsx(Jh,{href:"https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/",children:f.jsx(Zh,{src:"assets/ia-salud/nota1.png",alt:"Nota"})}),f.jsx(Jh,{href:"https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/",children:f.jsx(Zh,{src:"assets/ia-salud/nota2.png",alt:"Nota"})})]})]})}const FC=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${S.colors.white};
`;function UC(){return f.jsxs(FC,{children:[f.jsx(hl,{}),f.jsx(_C,{}),f.jsx(IC,{}),f.jsx(DC,{}),f.jsx(df,{}),f.jsx(yl,{})]})}const BC=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${S.colors.white};
`,HC=j.div`
  display: flex;
  align-items: center;

  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,VC=j.img`
  width: 40vw;
  @media (max-width: ${S.bp.medium}) {
    width: 60vw;
  }
`,WC=j.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  h2 {
    font-size: 80px;
    font-weight: 400;
    line-height: 90px;
    padding-bottom: 4px;
    color: ${S.colors.electricindigo};
  }
  span {
    font-size: 40px;
    color: ${S.colors.raisinblack};
    padding-bottom: 19px;
  }

  @media (max-width: ${S.bp.medium}) {
    width: 90vw;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    h2 {
      font-size: 50px;
      font-weight: 400;
      line-height: 30px;
      padding-bottom: 4px;
      color: ${S.colors.electricindigo};
    }
    span {
      font-size: 20px;
      color: ${S.colors.raisinblack};
      padding-bottom: 19px;
    }
  }
`,QC=j.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function YC(){return f.jsxs(BC,{children:[f.jsx(hl,{}),f.jsxs(HC,{children:[f.jsx(VC,{src:"assets/backgrounds/maintenance.svg"}),f.jsxs(WC,{children:[f.jsx("h2",{children:"¡Lo sentimos!"}),f.jsx("span",{children:"Sección en mantenimiento."}),f.jsx(QC,{children:f.jsx(zr,{to:"/",buttonText:"Volver a Inicio"})})]})]}),f.jsx(yl,{})]})}const qC=_w`
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
`,KC=j.div`
`;function GC(){const e=Vd(t=>t.modal.modalType);return k.useEffect(()=>{},[e]),f.jsxs(C2,{children:[f.jsx(pf,{}),f.jsx(qC,{}),f.jsx(KC,{children:f.jsxs(w2,{children:[f.jsx(Lo,{exact:!0,path:"/",element:f.jsx(cC,{})}),f.jsx(Lo,{exact:!0,path:"/VoiceCloning",element:f.jsx(jC,{})}),f.jsx(Lo,{exact:!0,path:"/IA",element:f.jsx(UC,{})}),f.jsx(Lo,{exact:!0,path:"/Maintenance",element:f.jsx(YC,{})})]})})]})}const XC=aE({reducer:{modal:yE,user:Hb}});yu.createRoot(document.getElementById("root")).render(f.jsx(V.StrictMode,{children:f.jsx(TS,{store:XC,children:f.jsx(GC,{})})}));

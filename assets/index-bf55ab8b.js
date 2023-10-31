function N0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var L0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ci(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eh={exports:{}},Ja={},th={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),z0=Symbol.for("react.portal"),D0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),U0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),V0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),Q0=Symbol.for("react.memo"),Y0=Symbol.for("react.lazy"),bd=Symbol.iterator;function G0(e){return e===null||typeof e!="object"?null:(e=bd&&e[bd]||e["@@iterator"],typeof e=="function"?e:null)}var nh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rh=Object.assign,oh={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||nh}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ih(){}ih.prototype=Zr.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||nh}var sc=lc.prototype=new ih;sc.constructor=lc;rh(sc,Zr.prototype);sc.isPureReactComponent=!0;var kd=Array.isArray,ah=Object.prototype.hasOwnProperty,uc={current:null},lh={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ah.call(t,r)&&!lh.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:di,type:e,key:i,ref:a,props:o,_owner:uc.current}}function K0(e,t){return{$$typeof:di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function q0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $d=/\/+/g;function Kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q0(""+e.key):t.toString(36)}function Gi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case di:case z0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Kl(a,0):r,kd(o)?(n="",e!=null&&(n=e.replace($d,"$&/")+"/"),Gi(o,t,n,"",function(u){return u})):o!=null&&(cc(o)&&(o=K0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace($d,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",kd(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Kl(i,l);a+=Gi(i,t,n,s,o)}else if(s=G0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Kl(i,l++),a+=Gi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yi(e,t,n){if(e==null)return e;var r=[],o=0;return Gi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function X0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Ki={transition:null},J0={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:uc};q.Children={map:yi,forEach:function(e,t,n){yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Zr;q.Fragment=D0;q.Profiler=U0;q.PureComponent=lc;q.StrictMode=F0;q.Suspense=W0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rh({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=uc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ah.call(t,s)&&!lh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:di,type:e.type,key:o,ref:i,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:H0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B0,_context:e},e.Consumer=e};q.createElement=sh;q.createFactory=function(e){var t=sh.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:V0,render:e}};q.isValidElement=cc;q.lazy=function(e){return{$$typeof:Y0,_payload:{_status:-1,_result:e},_init:X0}};q.memo=function(e,t){return{$$typeof:Q0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return qe.current.useCallback(e,t)};q.useContext=function(e){return qe.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};q.useEffect=function(e,t){return qe.current.useEffect(e,t)};q.useId=function(){return qe.current.useId()};q.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return qe.current.useMemo(e,t)};q.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};q.useRef=function(e){return qe.current.useRef(e)};q.useState=function(e){return qe.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return qe.current.useTransition()};q.version="18.2.0";th.exports=q;var k=th.exports;const B=ci(k),Z0=N0({__proto__:null,default:B},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev=k,tv=Symbol.for("react.element"),nv=Symbol.for("react.fragment"),rv=Object.prototype.hasOwnProperty,ov=ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iv={key:!0,ref:!0,__self:!0,__source:!0};function uh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)rv.call(t,r)&&!iv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:tv,type:e,key:i,ref:a,props:o,_owner:ov.current}}Ja.Fragment=nv;Ja.jsx=uh;Ja.jsxs=uh;eh.exports=Ja;var c=eh.exports,Vs={},ch={exports:{}},dt={},dh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var U=I.length;I.push(F);e:for(;0<U;){var ae=U-1>>>1,fe=I[ae];if(0<o(fe,F))I[ae]=F,I[U]=fe,U=ae;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],U=I.pop();if(U!==F){I[0]=U;e:for(var ae=0,fe=I.length,it=fe>>>1;ae<it;){var $e=2*(ae+1)-1,ht=I[$e],ye=$e+1,be=I[ye];if(0>o(ht,U))ye<fe&&0>o(be,ht)?(I[ae]=be,I[ye]=U,ae=ye):(I[ae]=ht,I[$e]=U,ae=$e);else if(ye<fe&&0>o(be,U))I[ae]=be,I[ye]=U,ae=ye;else break e}}return F}function o(I,F){var U=I.sortIndex-F.sortIndex;return U!==0?U:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,f=null,g=3,m=!1,v=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=I)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function S(I){if(x=!1,y(I),!v)if(n(s)!==null)v=!0,oe(j);else{var F=n(u);F!==null&&de(S,F.startTime-I)}}function j(I,F){v=!1,x&&(x=!1,h($),$=-1),m=!0;var U=g;try{for(y(F),f=n(s);f!==null&&(!(f.expirationTime>F)||I&&!L());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,g=f.priorityLevel;var fe=ae(f.expirationTime<=F);F=e.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(s)&&r(s),y(F)}else r(s);f=n(s)}if(f!==null)var it=!0;else{var $e=n(u);$e!==null&&de(S,$e.startTime-F),it=!1}return it}finally{f=null,g=U,m=!1}}var b=!1,T=null,$=-1,_=5,O=-1;function L(){return!(e.unstable_now()-O<_)}function D(){if(T!==null){var I=e.unstable_now();O=I;var F=!0;try{F=T(!0,I)}finally{F?z():(b=!1,T=null)}}else b=!1}var z;if(typeof p=="function")z=function(){p(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ve=X.port2;X.port1.onmessage=D,z=function(){ve.postMessage(null)}}else z=function(){E(D,0)};function oe(I){T=I,b||(b=!0,z())}function de(I,F){$=E(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,oe(j))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var U=g;g=F;try{return I()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=g;g=I;try{return F()}finally{g=U}},e.unstable_scheduleCallback=function(I,F,U){var ae=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ae+U:ae):U=ae,I){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=U+fe,I={id:d++,callback:F,priorityLevel:I,startTime:U,expirationTime:fe,sortIndex:-1},U>ae?(I.sortIndex=U,t(u,I),n(s)===null&&I===n(u)&&(x?(h($),$=-1):x=!0,de(S,U-ae))):(I.sortIndex=fe,t(s,I),v||m||(v=!0,oe(j))),I},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(I){var F=g;return function(){var U=g;g=F;try{return I.apply(this,arguments)}finally{g=U}}}})(fh);dh.exports=fh;var av=dh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=k,ut=av;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hh=new Set,Do={};function ur(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Do[e]=t,e=0;e<t.length;e++)hh.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=Object.prototype.hasOwnProperty,lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_d={},Pd={};function sv(e){return Ws.call(Pd,e)?!0:Ws.call(_d,e)?!1:lv.test(e)?Pd[e]=!0:(_d[e]=!0,!1)}function uv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cv(e,t,n,r){if(t===null||typeof t>"u"||uv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dc,fc);Ue[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dc,fc);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dc,fc);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var o=Ue.hasOwnProperty(t)?Ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cv(t,n,o,r)&&(n=null),r||o===null?sv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),Qs=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),Ys=Symbol.for("react.suspense"),Gs=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),vh=Symbol.for("react.offscreen"),Od=Symbol.iterator;function ao(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,ql;function xo(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var Xl=!1;function Jl(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function dv(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function Ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case Qs:return"Profiler";case hc:return"StrictMode";case Ys:return"Suspense";case Gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gh:return(e.displayName||"Context")+".Consumer";case mh:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gc:return t=e.displayName||null,t!==null?t:Ks(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Ks(e(t))}catch{}}return null}function fv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ks(t);case 8:return t===hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pv(e){var t=yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=pv(e))}function xh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wh(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function Xs(e,t){wh(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Js(e,t.type,n):t.hasOwnProperty("defaultValue")&&Js(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Id(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Js(e,t,n){(t!=="number"||fa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wo=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(wo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function Sh(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hv=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){hv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function Th(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function Ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Th(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mv=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(mv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ou=null,Or=null,Rr=null;function Nd(e){if(e=hi(e)){if(typeof ou!="function")throw Error(R(280));var t=e.stateNode;t&&(t=rl(t),ou(e.stateNode,e.type,t))}}function bh(e){Or?Rr?Rr.push(e):Rr=[e]:Or=e}function kh(){if(Or){var e=Or,t=Rr;if(Rr=Or=null,Nd(e),t)for(e=0;e<t.length;e++)Nd(t[e])}}function $h(e,t){return e(t)}function _h(){}var Zl=!1;function Ph(e,t,n){if(Zl)return e(t,n);Zl=!0;try{return $h(e,t,n)}finally{Zl=!1,(Or!==null||Rr!==null)&&(_h(),kh())}}function Uo(e,t){var n=e.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var iu=!1;if(nn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){iu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{iu=!1}function gv(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var $o=!1,pa=null,ha=!1,au=null,vv={onError:function(e){$o=!0,pa=e}};function yv(e,t,n,r,o,i,a,l,s){$o=!1,pa=null,gv.apply(vv,arguments)}function xv(e,t,n,r,o,i,a,l,s){if(yv.apply(this,arguments),$o){if($o){var u=pa;$o=!1,pa=null}else throw Error(R(198));ha||(ha=!0,au=u)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ld(e){if(cr(e)!==e)throw Error(R(188))}function wv(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ld(o),e;if(i===r)return Ld(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Rh(e){return e=wv(e),e!==null?Ih(e):null}function Ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ih(e);if(t!==null)return t;e=e.sibling}return null}var Ah=ut.unstable_scheduleCallback,zd=ut.unstable_cancelCallback,Sv=ut.unstable_shouldYield,Ev=ut.unstable_requestPaint,ke=ut.unstable_now,jv=ut.unstable_getCurrentPriorityLevel,yc=ut.unstable_ImmediatePriority,Mh=ut.unstable_UserBlockingPriority,ma=ut.unstable_NormalPriority,Tv=ut.unstable_LowPriority,Nh=ut.unstable_IdlePriority,Za=null,Vt=null;function Cv(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:$v,bv=Math.log,kv=Math.LN2;function $v(e){return e>>>=0,e===0?32:31-(bv(e)/kv|0)|0}var Ei=64,ji=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=So(l):(i&=a,i!==0&&(r=So(i)))}else a=n&~o,a!==0?r=So(a):i!==0&&(r=So(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),o=1<<n,r|=e[n],t&=~o;return r}function _v(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Mt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=_v(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lh(){var e=Ei;return Ei<<=1,!(Ei&4194240)&&(Ei=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Mt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var se=0;function zh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dh,wc,Fh,Uh,Bh,su=!1,Ti=[],jn=null,Tn=null,Cn=null,Bo=new Map,Ho=new Map,gn=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function so(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=hi(t),t!==null&&wc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Iv(e,t,n,r,o){switch(t){case"focusin":return jn=so(jn,e,t,n,r,o),!0;case"dragenter":return Tn=so(Tn,e,t,n,r,o),!0;case"mouseover":return Cn=so(Cn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Bo.set(i,so(Bo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ho.set(i,so(Ho.get(i)||null,e,t,n,r,o)),!0}return!1}function Hh(e){var t=Gn(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=Oh(n),t!==null){e.blockedOn=t,Bh(e.priority,function(){Fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=hi(n),t!==null&&wc(t),e.blockedOn=n,!1;t.shift()}return!0}function Fd(e,t,n){qi(e)&&n.delete(t)}function Av(){su=!1,jn!==null&&qi(jn)&&(jn=null),Tn!==null&&qi(Tn)&&(Tn=null),Cn!==null&&qi(Cn)&&(Cn=null),Bo.forEach(Fd),Ho.forEach(Fd)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,su||(su=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,Av)))}function Vo(e){function t(o){return uo(o,e)}if(0<Ti.length){uo(Ti[0],e);for(var n=1;n<Ti.length;n++){var r=Ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&uo(jn,e),Tn!==null&&uo(Tn,e),Cn!==null&&uo(Cn,e),Bo.forEach(t),Ho.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Hh(n),n.blockedOn===null&&gn.shift()}var Ir=sn.ReactCurrentBatchConfig,va=!0;function Mv(e,t,n,r){var o=se,i=Ir.transition;Ir.transition=null;try{se=1,Sc(e,t,n,r)}finally{se=o,Ir.transition=i}}function Nv(e,t,n,r){var o=se,i=Ir.transition;Ir.transition=null;try{se=4,Sc(e,t,n,r)}finally{se=o,Ir.transition=i}}function Sc(e,t,n,r){if(va){var o=uu(e,t,n,r);if(o===null)cs(e,t,r,ya,n),Dd(e,r);else if(Iv(o,e,t,n,r))r.stopPropagation();else if(Dd(e,r),t&4&&-1<Rv.indexOf(e)){for(;o!==null;){var i=hi(o);if(i!==null&&Dh(i),i=uu(e,t,n,r),i===null&&cs(e,t,r,ya,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else cs(e,t,r,null,n)}}var ya=null;function uu(e,t,n,r){if(ya=null,e=vc(r),e=Gn(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ya=e,null}function Vh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jv()){case yc:return 1;case Mh:return 4;case ma:case Tv:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var xn=null,Ec=null,Xi=null;function Wh(){if(Xi)return Xi;var e,t=Ec,n=t.length,r,o="value"in xn?xn.value:xn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Xi=o.slice(e,1<r?1-r:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Ud(){return!1}function ft(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:Ud,this.isPropagationStopped=Ud,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=ft(eo),pi=Te({},eo,{view:0,detail:0}),Lv=ft(pi),ts,ns,co,el=Te({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(ts=e.screenX-co.screenX,ns=e.screenY-co.screenY):ns=ts=0,co=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),Bd=ft(el),zv=Te({},el,{dataTransfer:0}),Dv=ft(zv),Fv=Te({},pi,{relatedTarget:0}),rs=ft(Fv),Uv=Te({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=ft(Uv),Hv=Te({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=ft(Hv),Wv=Te({},eo,{data:0}),Hd=ft(Wv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gv[e])?!!t[e]:!1}function Tc(){return Kv}var qv=Te({},pi,{key:function(e){if(e.key){var t=Qv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=ft(qv),Jv=Te({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=ft(Jv),Zv=Te({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),ey=ft(Zv),ty=Te({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=ft(ty),ry=Te({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=ft(ry),iy=[9,13,27,32],Cc=nn&&"CompositionEvent"in window,_o=null;nn&&"documentMode"in document&&(_o=document.documentMode);var ay=nn&&"TextEvent"in window&&!_o,Qh=nn&&(!Cc||_o&&8<_o&&11>=_o),Wd=String.fromCharCode(32),Qd=!1;function Yh(e,t){switch(e){case"keyup":return iy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function ly(e,t){switch(e){case"compositionend":return Gh(t);case"keypress":return t.which!==32?null:(Qd=!0,Wd);case"textInput":return e=t.data,e===Wd&&Qd?null:e;default:return null}}function sy(e,t){if(yr)return e==="compositionend"||!Cc&&Yh(e,t)?(e=Wh(),Xi=Ec=xn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qh&&t.locale!=="ko"?null:t.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uy[e.type]:t==="textarea"}function Kh(e,t,n,r){bh(r),t=xa(t,"onChange"),0<t.length&&(n=new jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,Wo=null;function cy(e){am(e,0)}function tl(e){var t=Sr(e);if(xh(t))return e}function dy(e,t){if(e==="change")return t}var qh=!1;if(nn){var os;if(nn){var is="oninput"in document;if(!is){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),is=typeof Gd.oninput=="function"}os=is}else os=!1;qh=os&&(!document.documentMode||9<document.documentMode)}function Kd(){Po&&(Po.detachEvent("onpropertychange",Xh),Wo=Po=null)}function Xh(e){if(e.propertyName==="value"&&tl(Wo)){var t=[];Kh(t,Wo,e,vc(e)),Ph(cy,t)}}function fy(e,t,n){e==="focusin"?(Kd(),Po=t,Wo=n,Po.attachEvent("onpropertychange",Xh)):e==="focusout"&&Kd()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Wo)}function hy(e,t){if(e==="click")return tl(t)}function my(e,t){if(e==="input"||e==="change")return tl(t)}function gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:gy;function Qo(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ws.call(t,o)||!zt(e[o],t[o]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var n=qd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qd(n)}}function Jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zh(){for(var e=window,t=fa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fa(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vy(e){var t=Zh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jh(n.ownerDocument.documentElement,n)){if(r!==null&&bc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xd(n,i);var a=Xd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yy=nn&&"documentMode"in document&&11>=document.documentMode,xr=null,cu=null,Oo=null,du=!1;function Jd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||xr==null||xr!==fa(r)||(r=xr,"selectionStart"in r&&bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Qo(Oo,r)||(Oo=r,r=xa(cu,"onSelect"),0<r.length&&(t=new jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},as={},em={};nn&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function nl(e){if(as[e])return as[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in em)return as[e]=t[n];return e}var tm=nl("animationend"),nm=nl("animationiteration"),rm=nl("animationstart"),om=nl("transitionend"),im=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){im.set(e,t),ur(t,[e])}for(var ls=0;ls<Zd.length;ls++){var ss=Zd[ls],xy=ss.toLowerCase(),wy=ss[0].toUpperCase()+ss.slice(1);Fn(xy,"on"+wy)}Fn(tm,"onAnimationEnd");Fn(nm,"onAnimationIteration");Fn(rm,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(om,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function ef(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xv(r,t,void 0,e),e.currentTarget=null}function am(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;ef(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;ef(o,l,u),i=s}}}if(ha)throw e=au,ha=!1,au=null,e}function he(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(lm(t,e,2,!1),n.add(r))}function us(e,t,n){var r=0;t&&(r|=4),lm(n,e,r,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[ki]){e[ki]=!0,hh.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,us("selectionchange",!1,t))}}function lm(e,t,n,r){switch(Vh(t)){case 1:var o=Mv;break;case 4:o=Nv;break;default:o=Sc}n=o.bind(null,t,n,e),o=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Gn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Ph(function(){var u=i,d=vc(n),f=[];e:{var g=im.get(e);if(g!==void 0){var m=jc,v=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":m=Xv;break;case"focusin":v="focus",m=rs;break;case"focusout":v="blur",m=rs;break;case"beforeblur":case"afterblur":m=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ey;break;case tm:case nm:case rm:m=Bv;break;case om:m=ny;break;case"scroll":m=Lv;break;case"wheel":m=oy;break;case"copy":case"cut":case"paste":m=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vd}var x=(t&4)!==0,E=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=Uo(p,h),S!=null&&x.push(Go(p,S,y)))),E)break;p=p.return}0<x.length&&(g=new m(g,v,null,n,d),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==ru&&(v=n.relatedTarget||n.fromElement)&&(Gn(v)||v[rn]))break e;if((m||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Gn(v):null,v!==null&&(E=cr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Bd,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Vd,S="onPointerLeave",h="onPointerEnter",p="pointer"),E=m==null?g:Sr(m),y=v==null?g:Sr(v),g=new x(S,p+"leave",m,n,d),g.target=E,g.relatedTarget=y,S=null,Gn(d)===u&&(x=new x(h,p+"enter",v,n,d),x.target=y,x.relatedTarget=E,S=x),E=S,m&&v)t:{for(x=m,h=v,p=0,y=x;y;y=pr(y))p++;for(y=0,S=h;S;S=pr(S))y++;for(;0<p-y;)x=pr(x),p--;for(;0<y-p;)h=pr(h),y--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=pr(x),h=pr(h)}x=null}else x=null;m!==null&&tf(f,g,m,x,!1),v!==null&&E!==null&&tf(f,E,v,x,!0)}}e:{if(g=u?Sr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var j=dy;else if(Yd(g))if(qh)j=my;else{j=py;var b=fy}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=hy);if(j&&(j=j(e,u))){Kh(f,j,n,d);break e}b&&b(e,g,u),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Js(g,"number",g.value)}switch(b=u?Sr(u):window,e){case"focusin":(Yd(b)||b.contentEditable==="true")&&(xr=b,cu=u,Oo=null);break;case"focusout":Oo=cu=xr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Jd(f,n,d);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":Jd(f,n,d)}var T;if(Cc)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else yr?Yh(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Qh&&n.locale!=="ko"&&(yr||$!=="onCompositionStart"?$==="onCompositionEnd"&&yr&&(T=Wh()):(xn=d,Ec="value"in xn?xn.value:xn.textContent,yr=!0)),b=xa(u,$),0<b.length&&($=new Hd($,e,null,n,d),f.push({event:$,listeners:b}),T?$.data=T:(T=Gh(n),T!==null&&($.data=T)))),(T=ay?ly(e,n):sy(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(d=new Hd("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}am(f,t)})}function Go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Uo(e,n),i!=null&&r.unshift(Go(e,i,o)),i=Uo(e,t),i!=null&&r.push(Go(e,i,o))),e=e.return}return r}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tf(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Uo(n,i),s!=null&&a.unshift(Go(n,s,l))):o||(s=Uo(n,i),s!=null&&a.push(Go(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ey=/\r\n?/g,jy=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(jy,"")}function $i(e,t,n){if(t=nf(t),nf(e)!==t&&n)throw Error(R(425))}function wa(){}var fu=null,pu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(by)}:mu;function by(e){setTimeout(function(){throw e})}function ds(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vo(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),Ht="__reactFiber$"+to,Ko="__reactProps$"+to,rn="__reactContainer$"+to,gu="__reactEvents$"+to,ky="__reactListeners$"+to,$y="__reactHandles$"+to;function Gn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=of(e);e!==null;){if(n=e[Ht])return n;e=of(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[Ht]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function rl(e){return e[Ko]||null}var vu=[],Er=-1;function Un(e){return{current:e}}function ge(e){0>Er||(e.current=vu[Er],vu[Er]=null,Er--)}function pe(e,t){Er++,vu[Er]=e.current,e.current=t}var Ln={},Ye=Un(Ln),nt=Un(!1),nr=Ln;function Fr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function Sa(){ge(nt),ge(Ye)}function af(e,t,n){if(Ye.current!==Ln)throw Error(R(168));pe(Ye,t),pe(nt,n)}function sm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,fv(e)||"Unknown",o));return Te({},n,r)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,nr=Ye.current,pe(Ye,e),pe(nt,nt.current),!0}function lf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=sm(e,t,nr),r.__reactInternalMemoizedMergedChildContext=e,ge(nt),ge(Ye),pe(Ye,e)):ge(nt),pe(nt,n)}var Jt=null,ol=!1,fs=!1;function um(e){Jt===null?Jt=[e]:Jt.push(e)}function _y(e){ol=!0,um(e)}function Bn(){if(!fs&&Jt!==null){fs=!0;var e=0,t=se;try{var n=Jt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,ol=!1}catch(o){throw Jt!==null&&(Jt=Jt.slice(e+1)),Ah(yc,Bn),o}finally{se=t,fs=!1}}return null}var jr=[],Tr=0,ja=null,Ta=0,wt=[],St=0,rr=null,Zt=1,en="";function Vn(e,t){jr[Tr++]=Ta,jr[Tr++]=ja,ja=e,Ta=t}function cm(e,t,n){wt[St++]=Zt,wt[St++]=en,wt[St++]=rr,rr=e;var r=Zt;e=en;var o=32-Mt(r)-1;r&=~(1<<o),n+=1;var i=32-Mt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Zt=1<<32-Mt(t)+o|n<<o|r,en=i+e}else Zt=1<<i|n<<o|r,en=e}function kc(e){e.return!==null&&(Vn(e,1),cm(e,1,0))}function $c(e){for(;e===ja;)ja=jr[--Tr],jr[Tr]=null,Ta=jr[--Tr],jr[Tr]=null;for(;e===rr;)rr=wt[--St],wt[St]=null,en=wt[--St],wt[St]=null,Zt=wt[--St],wt[St]=null}var st=null,lt=null,Se=!1,Rt=null;function dm(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rr!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Se){var t=lt;if(t){var n=t;if(!sf(e,t)){if(yu(e))throw Error(R(418));t=bn(n.nextSibling);var r=st;t&&sf(e,t)?dm(r,n):(e.flags=e.flags&-4097|2,Se=!1,st=e)}}else{if(yu(e))throw Error(R(418));e.flags=e.flags&-4097|2,Se=!1,st=e}}}function uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function _i(e){if(e!==st)return!1;if(!Se)return uf(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=lt)){if(yu(e))throw fm(),Error(R(418));for(;t;)dm(e,t),t=bn(t.nextSibling)}if(uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?bn(e.stateNode.nextSibling):null;return!0}function fm(){for(var e=lt;e;)e=bn(e.nextSibling)}function Ur(){lt=st=null,Se=!1}function _c(e){Rt===null?Rt=[e]:Rt.push(e)}var Py=sn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ca=Un(null),ba=null,Cr=null,Pc=null;function Oc(){Pc=Cr=ba=null}function Rc(e){var t=Ca.current;ge(Ca),e._currentValue=t}function wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){ba=e,Pc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Pc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(ba===null)throw Error(R(308));Cr=e,ba.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Kn=null;function Ic(e){Kn===null?Kn=[e]:Kn.push(e)}function pm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ic(t)):(n.next=o.next,o.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,on(e,n)}return o=r.interleaved,o===null?(t.next=t,Ic(r)):(t.next=o.next,o.next=t),r.interleaved=t,on(e,n)}function Zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function cf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,r){var o=e.updateQueue;mn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,d=u=s=null,l=i;do{var g=l.lane,m=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(m,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(m,f,g):v,g==null)break e;f=Te({},f,g);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,s=f):d=d.next=m,a|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ir|=a,e.lanes=a,e.memoizedState=f}}function df(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var mm=new ph.Component().refs;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=_n(e),i=tn(r,o);i.payload=t,n!=null&&(i.callback=n),t=kn(e,i,o),t!==null&&(Nt(t,e,o,r),Zi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=_n(e),i=tn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=kn(e,i,o),t!==null&&(Nt(t,e,o,r),Zi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=_n(e),o=tn(n,r);o.tag=2,t!=null&&(o.callback=t),t=kn(e,o,r),t!==null&&(Nt(t,e,r,n),Zi(t,e,r))}};function ff(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Qo(n,r)||!Qo(o,i):!0}function gm(e,t,n){var r=!1,o=Ln,i=t.contextType;return typeof i=="object"&&i!==null?i=Tt(i):(o=rt(t)?nr:Ye.current,r=t.contextTypes,i=(r=r!=null)?Fr(e,o):Ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function pf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Eu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=mm,Ac(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Tt(i):(i=rt(t)?nr:Ye.current,o.context=Fr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Su(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&il.enqueueReplaceState(o,o.state,null),ka(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===mm&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hf(e){var t=e._init;return t(e._payload)}function vm(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Pn(h,p),h.index=0,h.sibling=null,h}function i(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,y,S){return p===null||p.tag!==6?(p=xs(y,h.mode,S),p.return=h,p):(p=o(p,y),p.return=h,p)}function s(h,p,y,S){var j=y.type;return j===vr?d(h,p,y.props.children,S,y.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===hn&&hf(j)===p.type)?(S=o(p,y.props),S.ref=fo(h,p,y),S.return=h,S):(S=ia(y.type,y.key,y.props,null,h.mode,S),S.ref=fo(h,p,y),S.return=h,S)}function u(h,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ws(y,h.mode,S),p.return=h,p):(p=o(p,y.children||[]),p.return=h,p)}function d(h,p,y,S,j){return p===null||p.tag!==7?(p=Zn(y,h.mode,S,j),p.return=h,p):(p=o(p,y),p.return=h,p)}function f(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xs(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xi:return y=ia(p.type,p.key,p.props,null,h.mode,y),y.ref=fo(h,null,p),y.return=h,y;case gr:return p=ws(p,h.mode,y),p.return=h,p;case hn:var S=p._init;return f(h,S(p._payload),y)}if(wo(p)||ao(p))return p=Zn(p,h.mode,y,null),p.return=h,p;Pi(h,p)}return null}function g(h,p,y,S){var j=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xi:return y.key===j?s(h,p,y,S):null;case gr:return y.key===j?u(h,p,y,S):null;case hn:return j=y._init,g(h,p,j(y._payload),S)}if(wo(y)||ao(y))return j!==null?null:d(h,p,y,S,null);Pi(h,y)}return null}function m(h,p,y,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,l(p,h,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xi:return h=h.get(S.key===null?y:S.key)||null,s(p,h,S,j);case gr:return h=h.get(S.key===null?y:S.key)||null,u(p,h,S,j);case hn:var b=S._init;return m(h,p,y,b(S._payload),j)}if(wo(S)||ao(S))return h=h.get(y)||null,d(p,h,S,j,null);Pi(p,S)}return null}function v(h,p,y,S){for(var j=null,b=null,T=p,$=p=0,_=null;T!==null&&$<y.length;$++){T.index>$?(_=T,T=null):_=T.sibling;var O=g(h,T,y[$],S);if(O===null){T===null&&(T=_);break}e&&T&&O.alternate===null&&t(h,T),p=i(O,p,$),b===null?j=O:b.sibling=O,b=O,T=_}if($===y.length)return n(h,T),Se&&Vn(h,$),j;if(T===null){for(;$<y.length;$++)T=f(h,y[$],S),T!==null&&(p=i(T,p,$),b===null?j=T:b.sibling=T,b=T);return Se&&Vn(h,$),j}for(T=r(h,T);$<y.length;$++)_=m(T,h,$,y[$],S),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?$:_.key),p=i(_,p,$),b===null?j=_:b.sibling=_,b=_);return e&&T.forEach(function(L){return t(h,L)}),Se&&Vn(h,$),j}function x(h,p,y,S){var j=ao(y);if(typeof j!="function")throw Error(R(150));if(y=j.call(y),y==null)throw Error(R(151));for(var b=j=null,T=p,$=p=0,_=null,O=y.next();T!==null&&!O.done;$++,O=y.next()){T.index>$?(_=T,T=null):_=T.sibling;var L=g(h,T,O.value,S);if(L===null){T===null&&(T=_);break}e&&T&&L.alternate===null&&t(h,T),p=i(L,p,$),b===null?j=L:b.sibling=L,b=L,T=_}if(O.done)return n(h,T),Se&&Vn(h,$),j;if(T===null){for(;!O.done;$++,O=y.next())O=f(h,O.value,S),O!==null&&(p=i(O,p,$),b===null?j=O:b.sibling=O,b=O);return Se&&Vn(h,$),j}for(T=r(h,T);!O.done;$++,O=y.next())O=m(T,h,$,O.value,S),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?$:O.key),p=i(O,p,$),b===null?j=O:b.sibling=O,b=O);return e&&T.forEach(function(D){return t(h,D)}),Se&&Vn(h,$),j}function E(h,p,y,S){if(typeof y=="object"&&y!==null&&y.type===vr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xi:e:{for(var j=y.key,b=p;b!==null;){if(b.key===j){if(j=y.type,j===vr){if(b.tag===7){n(h,b.sibling),p=o(b,y.props.children),p.return=h,h=p;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===hn&&hf(j)===b.type){n(h,b.sibling),p=o(b,y.props),p.ref=fo(h,b,y),p.return=h,h=p;break e}n(h,b);break}else t(h,b);b=b.sibling}y.type===vr?(p=Zn(y.props.children,h.mode,S,y.key),p.return=h,h=p):(S=ia(y.type,y.key,y.props,null,h.mode,S),S.ref=fo(h,p,y),S.return=h,h=S)}return a(h);case gr:e:{for(b=y.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=o(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ws(y,h.mode,S),p.return=h,h=p}return a(h);case hn:return b=y._init,E(h,p,b(y._payload),S)}if(wo(y))return v(h,p,y,S);if(ao(y))return x(h,p,y,S);Pi(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,y),p.return=h,h=p):(n(h,p),p=xs(y,h.mode,S),p.return=h,h=p),a(h)):n(h,p)}return E}var Br=vm(!0),ym=vm(!1),mi={},Wt=Un(mi),qo=Un(mi),Xo=Un(mi);function qn(e){if(e===mi)throw Error(R(174));return e}function Mc(e,t){switch(pe(Xo,t),pe(qo,e),pe(Wt,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}ge(Wt),pe(Wt,t)}function Hr(){ge(Wt),ge(qo),ge(Xo)}function xm(e){qn(Xo.current);var t=qn(Wt.current),n=eu(t,e.type);t!==n&&(pe(qo,e),pe(Wt,n))}function Nc(e){qo.current===e&&(ge(Wt),ge(qo))}var Ee=Un(0);function $a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function Lc(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var ea=sn.ReactCurrentDispatcher,hs=sn.ReactCurrentBatchConfig,or=0,je=null,Re=null,Me=null,_a=!1,Ro=!1,Jo=0,Oy=0;function Be(){throw Error(R(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Dc(e,t,n,r,o,i){if(or=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ea.current=e===null||e.memoizedState===null?My:Ny,e=n(r,o),Ro){i=0;do{if(Ro=!1,Jo=0,25<=i)throw Error(R(301));i+=1,Me=Re=null,t.updateQueue=null,ea.current=Ly,e=n(r,o)}while(Ro)}if(ea.current=Pa,t=Re!==null&&Re.next!==null,or=0,Me=Re=je=null,_a=!1,t)throw Error(R(300));return e}function Fc(){var e=Jo!==0;return Jo=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?je.memoizedState=Me=e:Me=Me.next=e,Me}function Ct(){if(Re===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Me===null?je.memoizedState:Me.next;if(t!==null)Me=t,Re=e;else{if(e===null)throw Error(R(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?je.memoizedState=Me=e:Me=Me.next=e}return Me}function Zo(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=Ct(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var d=u.lane;if((or&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,je.lanes|=d,ir|=d}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,zt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,je.lanes|=i,ir|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(e){var t=Ct(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);zt(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wm(){}function Sm(e,t){var n=je,r=Ct(),o=t(),i=!zt(r.memoizedState,o);if(i&&(r.memoizedState=o,et=!0),r=r.queue,Uc(Tm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,ei(9,jm.bind(null,n,r,o,t),void 0,null),Le===null)throw Error(R(349));or&30||Em(n,t,o)}return o}function Em(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jm(e,t,n,r){t.value=n,t.getSnapshot=r,Cm(t)&&bm(e)}function Tm(e,t,n){return n(function(){Cm(t)&&bm(e)})}function Cm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function bm(e){var t=on(e,1);t!==null&&Nt(t,e,1,-1)}function mf(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ay.bind(null,je,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function km(){return Ct().memoizedState}function ta(e,t,n,r){var o=Ut();je.flags|=e,o.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var o=Ct();r=r===void 0?null:r;var i=void 0;if(Re!==null){var a=Re.memoizedState;if(i=a.destroy,r!==null&&zc(r,a.deps)){o.memoizedState=ei(t,n,i,r);return}}je.flags|=e,o.memoizedState=ei(1|t,n,i,r)}function gf(e,t){return ta(8390656,8,e,t)}function Uc(e,t){return al(2048,8,e,t)}function $m(e,t){return al(4,2,e,t)}function _m(e,t){return al(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Om(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Pm.bind(null,t,e),n)}function Bc(){}function Rm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Im(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Am(e,t,n){return or&21?(zt(n,t)||(n=Lh(),je.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function Ry(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=hs.transition;hs.transition={};try{e(!1),t()}finally{se=n,hs.transition=r}}function Mm(){return Ct().memoizedState}function Iy(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nm(e))Lm(t,n);else if(n=pm(e,t,n,r),n!==null){var o=Ke();Nt(n,e,r,o),zm(n,t,r)}}function Ay(e,t,n){var r=_n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nm(e))Lm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,zt(l,a)){var s=t.interleaved;s===null?(o.next=o,Ic(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=pm(e,t,o,r),n!==null&&(o=Ke(),Nt(n,e,r,o),zm(n,t,r))}}function Nm(e){var t=e.alternate;return e===je||t!==null&&t===je}function Lm(e,t){Ro=_a=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var Pa={readContext:Tt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},My={readContext:Tt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:gf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ta(4194308,4,Pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return ta(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Iy.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:mf,useDebugValue:Bc,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=mf(!1),t=e[0];return e=Ry.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,o=Ut();if(Se){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Le===null)throw Error(R(349));or&30||Em(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gf(Tm.bind(null,r,i,e),[e]),r.flags|=2048,ei(9,jm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Le.identifierPrefix;if(Se){var n=en,r=Zt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ny={readContext:Tt,useCallback:Rm,useContext:Tt,useEffect:Uc,useImperativeHandle:Om,useInsertionEffect:$m,useLayoutEffect:_m,useMemo:Im,useReducer:ms,useRef:km,useState:function(){return ms(Zo)},useDebugValue:Bc,useDeferredValue:function(e){var t=Ct();return Am(t,Re.memoizedState,e)},useTransition:function(){var e=ms(Zo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:wm,useSyncExternalStore:Sm,useId:Mm,unstable_isNewReconciler:!1},Ly={readContext:Tt,useCallback:Rm,useContext:Tt,useEffect:Uc,useImperativeHandle:Om,useInsertionEffect:$m,useLayoutEffect:_m,useMemo:Im,useReducer:gs,useRef:km,useState:function(){return gs(Zo)},useDebugValue:Bc,useDeferredValue:function(e){var t=Ct();return Re===null?t.memoizedState=e:Am(t,Re.memoizedState,e)},useTransition:function(){var e=gs(Zo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:wm,useSyncExternalStore:Sm,useId:Mm,unstable_isNewReconciler:!1};function Vr(e,t){try{var n="",r=t;do n+=dv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function Dm(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ra||(Ra=!0,Iu=r),ju(e,t)},n}function Fm(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ju(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ju(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jy.bind(null,e,t,n),t.then(e,e))}function yf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Dy=sn.ReactCurrentOwner,et=!1;function Ge(e,t,n,r){t.child=e===null?ym(t,null,n,r):Br(t,e.child,n,r)}function wf(e,t,n,r,o){n=n.render;var i=t.ref;return Ar(t,o),r=Dc(e,t,n,r,i,o),n=Fc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(Se&&n&&kc(t),t.flags|=1,Ge(e,t,r,o),t.child)}function Sf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Um(e,t,i,r,o)):(e=ia(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(a,r)&&e.ref===t.ref)return an(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Qo(i,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,an(e,t,o)}return Tu(e,t,n,r,o)}function Bm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(kr,at),at|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(kr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(kr,at),at|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(kr,at),at|=r;return Ge(e,t,o,n),t.child}function Hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tu(e,t,n,r,o){var i=rt(n)?nr:Ye.current;return i=Fr(t,i),Ar(t,o),n=Dc(e,t,n,r,i,o),r=Fc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(Se&&r&&kc(t),t.flags|=1,Ge(e,t,n,o),t.child)}function Ef(e,t,n,r,o){if(rt(n)){var i=!0;Ea(t)}else i=!1;if(Ar(t,o),t.stateNode===null)na(e,t),gm(t,n,r),Eu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tt(u):(u=rt(n)?nr:Ye.current,u=Fr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&pf(t,a,r,u),mn=!1;var g=t.memoizedState;a.state=g,ka(t,r,a,o),s=t.memoizedState,l!==r||g!==s||nt.current||mn?(typeof d=="function"&&(Su(t,n,d,r),s=t.memoizedState),(l=mn||ff(t,n,l,r,g,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Pt(t.type,l),a.props=u,f=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Tt(s):(s=rt(n)?nr:Ye.current,s=Fr(t,s));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||g!==s)&&pf(t,a,r,s),mn=!1,g=t.memoizedState,a.state=g,ka(t,r,a,o);var v=t.memoizedState;l!==f||g!==v||nt.current||mn?(typeof m=="function"&&(Su(t,n,m,r),v=t.memoizedState),(u=mn||ff(t,n,u,r,g,v,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,i,o)}function Cu(e,t,n,r,o,i){Hm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&lf(t,n,!1),an(e,t,i);r=t.stateNode,Dy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Br(t,e.child,null,i),t.child=Br(t,null,l,i)):Ge(e,t,l,i),t.memoizedState=r.state,o&&lf(t,n,!0),t.child}function Vm(e){var t=e.stateNode;t.pendingContext?af(e,t.pendingContext,t.pendingContext!==t.context):t.context&&af(e,t.context,!1),Mc(e,t.containerInfo)}function jf(e,t,n,r,o){return Ur(),_c(o),t.flags|=256,Ge(e,t,n,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wm(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(Ee,o&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ul(a,r,0,null),e=Zn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ku(n),t.memoizedState=bu,e):Hc(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Fy(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Pn(l,i):(i=Zn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=bu,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hc(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oi(e,t,n,r){return r!==null&&_c(r),Br(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fy(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=vs(Error(R(422))),Oi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ul({mode:"visible",children:r.children},o,0,null),i=Zn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Br(t,e.child,null,a),t.child.memoizedState=ku(a),t.memoizedState=bu,i);if(!(t.mode&1))return Oi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=vs(i,r,void 0),Oi(e,t,a,r)}if(l=(a&e.childLanes)!==0,et||l){if(r=Le,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,on(e,o),Nt(r,e,o,-1))}return Kc(),r=vs(Error(R(421))),Oi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,lt=bn(o.nextSibling),st=t,Se=!0,Rt=null,e!==null&&(wt[St++]=Zt,wt[St++]=en,wt[St++]=rr,Zt=e.id,en=e.overflow,rr=t),t=Hc(t,r.children),t.flags|=4096,t)}function Tf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wu(e.return,t,n)}function ys(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tf(e,n,t);else if(e.tag===19)Tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$a(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ys(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$a(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ys(t,!0,n,null,i);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uy(e,t,n){switch(t.tag){case 3:Vm(t),Ur();break;case 5:xm(t);break;case 1:rt(t.type)&&Ea(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(Ca,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Wm(e,t,n):(pe(Ee,Ee.current&1),e=an(e,t,n),e!==null?e.sibling:null);pe(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,n)}return an(e,t,n)}var Ym,$u,Gm,Km;Ym=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};Gm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,qn(Wt.current);var i=null;switch(n){case"input":o=qs(e,o),r=qs(e,r),i=[];break;case"select":o=Te({},o,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":o=Zs(e,o),r=Zs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wa)}tu(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Do.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Do.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&he("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Km=function(e,t,n,r){n!==r&&(t.flags|=4)};function po(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function By(e,t,n){var r=t.pendingProps;switch($c(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return rt(t.type)&&Sa(),He(t),null;case 3:return r=t.stateNode,Hr(),ge(nt),ge(Ye),Lc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(Nu(Rt),Rt=null))),$u(e,t),He(t),null;case 5:Nc(t);var o=qn(Xo.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return He(t),null}if(e=qn(Wt.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ht]=t,r[Ko]=i,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<Eo.length;o++)he(Eo[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Rd(r,i),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},he("invalid",r);break;case"textarea":Ad(r,i),he("invalid",r)}tu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,l,e),o=["children",""+l]):Do.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&he("scroll",r)}switch(n){case"input":wi(r),Id(r,i,!0);break;case"textarea":wi(r),Md(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ht]=t,e[Ko]=r,Ym(e,t,!1,!1),t.stateNode=e;e:{switch(a=nu(n,r),n){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<Eo.length;o++)he(Eo[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":Rd(e,r),o=qs(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Te({},r,{value:void 0}),he("invalid",e);break;case"textarea":Ad(e,r),o=Zs(e,r),he("invalid",e);break;default:o=r}tu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Ch(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jh(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Fo(e,s):typeof s=="number"&&Fo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Do.hasOwnProperty(i)?s!=null&&i==="onScroll"&&he("scroll",e):s!=null&&pc(e,i,s,a))}switch(n){case"input":wi(e),Id(e,r,!1);break;case"textarea":wi(e),Md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Km(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=qn(Xo.current),qn(Wt.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return He(t),null;case 13:if(ge(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&lt!==null&&t.mode&1&&!(t.flags&128))fm(),Ur(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Ht]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),i=!1}else Rt!==null&&(Nu(Rt),Rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ie===0&&(Ie=3):Kc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Hr(),$u(e,t),e===null&&Yo(t.stateNode.containerInfo),He(t),null;case 10:return Rc(t.type._context),He(t),null;case 17:return rt(t.type)&&Sa(),He(t),null;case 19:if(ge(Ee),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)po(i,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$a(e),a!==null){for(t.flags|=128,po(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&ke()>Wr&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304)}else{if(!r)if(e=$a(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Se)return He(t),null}else 2*ke()-i.renderingStartTime>Wr&&n!==1073741824&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ke(),t.sibling=null,n=Ee.current,pe(Ee,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Gc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Hy(e,t){switch($c(t),t.tag){case 1:return rt(t.type)&&Sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),ge(nt),ge(Ye),Lc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nc(t),null;case 13:if(ge(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Ee),null;case 4:return Hr(),null;case 10:return Rc(t.type._context),null;case 22:case 23:return Gc(),null;case 24:return null;default:return null}}var Ri=!1,We=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,M=null;function br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function _u(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Cf=!1;function Wy(e,t){if(fu=va,e=Zh(),bc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var m;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)g=f,f=m;for(;;){if(f===e)break t;if(g===n&&++u===o&&(l=a),g===i&&++d===r&&(s=a),(m=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},va=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,E=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Pt(t.type,x),E);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){Ce(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Cf,Cf=!1,v}function Io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_u(t,n,i)}o=o.next}while(o!==r)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qm(e){var t=e.alternate;t!==null&&(e.alternate=null,qm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Ko],delete t[gu],delete t[ky],delete t[$y])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function bf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wa));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ru(e,t,n),e=e.sibling;e!==null;)Ru(e,t,n),e=e.sibling}var De=null,Ot=!1;function un(e,t,n){for(n=n.child;n!==null;)Jm(e,t,n),n=n.sibling}function Jm(e,t,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 5:We||br(n,t);case 6:var r=De,o=Ot;De=null,un(e,t,n),De=r,Ot=o,De!==null&&(Ot?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Ot?(e=De,n=n.stateNode,e.nodeType===8?ds(e.parentNode,n):e.nodeType===1&&ds(e,n),Vo(e)):ds(De,n.stateNode));break;case 4:r=De,o=Ot,De=n.stateNode.containerInfo,Ot=!0,un(e,t,n),De=r,Ot=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&_u(n,t,a),o=o.next}while(o!==r)}un(e,t,n);break;case 1:if(!We&&(br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,un(e,t,n),We=r):un(e,t,n);break;default:un(e,t,n)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vy),t.forEach(function(r){var o=e1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,Ot=!1;break e;case 3:De=l.stateNode.containerInfo,Ot=!0;break e;case 4:De=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(De===null)throw Error(R(160));Jm(i,a,o),De=null,Ot=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zm(t,e),t=t.sibling}function Zm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Dt(e),r&4){try{Io(3,e,e.return),ll(3,e)}catch(x){Ce(e,e.return,x)}try{Io(5,e,e.return)}catch(x){Ce(e,e.return,x)}}break;case 1:_t(t,e),Dt(e),r&512&&n!==null&&br(n,n.return);break;case 5:if(_t(t,e),Dt(e),r&512&&n!==null&&br(n,n.return),e.flags&32){var o=e.stateNode;try{Fo(o,"")}catch(x){Ce(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&wh(o,i),nu(l,a);var u=nu(l,i);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?Ch(o,f):d==="dangerouslySetInnerHTML"?jh(o,f):d==="children"?Fo(o,f):pc(o,d,f,u)}switch(l){case"input":Xs(o,i);break;case"textarea":Sh(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Pr(o,!!i.multiple,m,!1):g!==!!i.multiple&&(i.defaultValue!=null?Pr(o,!!i.multiple,i.defaultValue,!0):Pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ko]=i}catch(x){Ce(e,e.return,x)}}break;case 6:if(_t(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Ce(e,e.return,x)}}break;case 3:if(_t(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(t.containerInfo)}catch(x){Ce(e,e.return,x)}break;case 4:_t(t,e),Dt(e);break;case 13:_t(t,e),Dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qc=ke())),r&4&&kf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||d,_t(t,e),We=u):_t(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(g=M,m=g.child,g.tag){case 0:case 11:case 14:case 15:Io(4,g,g.return);break;case 1:br(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Ce(r,n,x)}}break;case 5:br(g,g.return);break;case 22:if(g.memoizedState!==null){_f(f);continue}}m!==null?(m.return=g,M=m):_f(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Th("display",a))}catch(x){Ce(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Ce(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_t(t,e),Dt(e),r&4&&kf(e);break;case 21:break;default:_t(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Fo(o,""),r.flags&=-33);var i=bf(e);Ru(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=bf(e);Ou(e,l,a);break;default:throw Error(R(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qy(e,t,n){M=e,eg(e)}function eg(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ri;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||We;l=Ri;var u=We;if(Ri=a,(We=s)&&!u)for(M=o;M!==null;)a=M,s=a.child,a.tag===22&&a.memoizedState!==null?Pf(o):s!==null?(s.return=a,M=s):Pf(o);for(;i!==null;)M=i,eg(i),i=i.sibling;M=o,Ri=l,We=u}$f(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):$f(e)}}function $f(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&df(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}df(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}We||t.flags&512&&Pu(t)}catch(g){Ce(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function _f(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Pf(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ce(t,o,s)}}var i=t.return;try{Pu(t)}catch(s){Ce(t,i,s)}break;case 5:var a=t.return;try{Pu(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var Yy=Math.ceil,Oa=sn.ReactCurrentDispatcher,Vc=sn.ReactCurrentOwner,jt=sn.ReactCurrentBatchConfig,ee=0,Le=null,Pe=null,Fe=0,at=0,kr=Un(0),Ie=0,ti=null,ir=0,sl=0,Wc=0,Ao=null,Ze=null,Qc=0,Wr=1/0,qt=null,Ra=!1,Iu=null,$n=null,Ii=!1,wn=null,Ia=0,Mo=0,Au=null,ra=-1,oa=0;function Ke(){return ee&6?ke():ra!==-1?ra:ra=ke()}function _n(e){return e.mode&1?ee&2&&Fe!==0?Fe&-Fe:Py.transition!==null?(oa===0&&(oa=Lh()),oa):(e=se,e!==0||(e=window.event,e=e===void 0?16:Vh(e.type)),e):1}function Nt(e,t,n,r){if(50<Mo)throw Mo=0,Au=null,Error(R(185));fi(e,n,r),(!(ee&2)||e!==Le)&&(e===Le&&(!(ee&2)&&(sl|=n),Ie===4&&vn(e,Fe)),ot(e,r),n===1&&ee===0&&!(t.mode&1)&&(Wr=ke()+500,ol&&Bn()))}function ot(e,t){var n=e.callbackNode;Pv(e,t);var r=ga(e,e===Le?Fe:0);if(r===0)n!==null&&zd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zd(n),t===1)e.tag===0?_y(Of.bind(null,e)):um(Of.bind(null,e)),Cy(function(){!(ee&6)&&Bn()}),n=null;else{switch(zh(r)){case 1:n=yc;break;case 4:n=Mh;break;case 16:n=ma;break;case 536870912:n=Nh;break;default:n=ma}n=sg(n,tg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tg(e,t){if(ra=-1,oa=0,ee&6)throw Error(R(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=ga(e,e===Le?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Aa(e,r);else{t=r;var o=ee;ee|=2;var i=rg();(Le!==e||Fe!==t)&&(qt=null,Wr=ke()+500,Jn(e,t));do try{qy();break}catch(l){ng(e,l)}while(1);Oc(),Oa.current=i,ee=o,Pe!==null?t=0:(Le=null,Fe=0,t=Ie)}if(t!==0){if(t===2&&(o=lu(e),o!==0&&(r=o,t=Mu(e,o))),t===1)throw n=ti,Jn(e,0),vn(e,r),ot(e,ke()),n;if(t===6)vn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Gy(o)&&(t=Aa(e,r),t===2&&(i=lu(e),i!==0&&(r=i,t=Mu(e,i))),t===1))throw n=ti,Jn(e,0),vn(e,r),ot(e,ke()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Wn(e,Ze,qt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Qc+500-ke(),10<t)){if(ga(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=mu(Wn.bind(null,e,Ze,qt),t);break}Wn(e,Ze,qt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Mt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yy(r/1960))-r,10<r){e.timeoutHandle=mu(Wn.bind(null,e,Ze,qt),r);break}Wn(e,Ze,qt);break;case 5:Wn(e,Ze,qt);break;default:throw Error(R(329))}}}return ot(e,ke()),e.callbackNode===n?tg.bind(null,e):null}function Mu(e,t){var n=Ao;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Nu(t)),e}function Nu(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Gy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!zt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Wc,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function Of(e){if(ee&6)throw Error(R(327));Mr();var t=ga(e,0);if(!(t&1))return ot(e,ke()),null;var n=Aa(e,t);if(e.tag!==0&&n===2){var r=lu(e);r!==0&&(t=r,n=Mu(e,r))}if(n===1)throw n=ti,Jn(e,0),vn(e,t),ot(e,ke()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,Ze,qt),ot(e,ke()),null}function Yc(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Wr=ke()+500,ol&&Bn())}}function ar(e){wn!==null&&wn.tag===0&&!(ee&6)&&Mr();var t=ee;ee|=1;var n=jt.transition,r=se;try{if(jt.transition=null,se=1,e)return e()}finally{se=r,jt.transition=n,ee=t,!(ee&6)&&Bn()}}function Gc(){at=kr.current,ge(kr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ty(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch($c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:Hr(),ge(nt),ge(Ye),Lc();break;case 5:Nc(r);break;case 4:Hr();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:Rc(r.type._context);break;case 22:case 23:Gc()}n=n.return}if(Le=e,Pe=e=Pn(e.current,null),Fe=at=t,Ie=0,ti=null,Wc=sl=ir=0,Ze=Ao=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Kn=null}return e}function ng(e,t){do{var n=Pe;try{if(Oc(),ea.current=Pa,_a){for(var r=je.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_a=!1}if(or=0,Me=Re=je=null,Ro=!1,Jo=0,Vc.current=null,n===null||n.return===null){Ie=1,ti=t,Pe=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=yf(a);if(m!==null){m.flags&=-257,xf(m,a,l,i,t),m.mode&1&&vf(i,u,t),t=m,s=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(s),t.updateQueue=x}else v.add(s);break e}else{if(!(t&1)){vf(i,u,t),Kc();break e}s=Error(R(426))}}else if(Se&&l.mode&1){var E=yf(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),xf(E,a,l,i,t),_c(Vr(s,l));break e}}i=s=Vr(s,l),Ie!==4&&(Ie=2),Ao===null?Ao=[i]:Ao.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Dm(i,s,t);cf(i,h);break e;case 1:l=s;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($n===null||!$n.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Fm(i,l,t);cf(i,S);break e}}i=i.return}while(i!==null)}ig(n)}catch(j){t=j,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function rg(){var e=Oa.current;return Oa.current=Pa,e===null?Pa:e}function Kc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Le===null||!(ir&268435455)&&!(sl&268435455)||vn(Le,Fe)}function Aa(e,t){var n=ee;ee|=2;var r=rg();(Le!==e||Fe!==t)&&(qt=null,Jn(e,t));do try{Ky();break}catch(o){ng(e,o)}while(1);if(Oc(),ee=n,Oa.current=r,Pe!==null)throw Error(R(261));return Le=null,Fe=0,Ie}function Ky(){for(;Pe!==null;)og(Pe)}function qy(){for(;Pe!==null&&!Sv();)og(Pe)}function og(e){var t=lg(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?ig(e):Pe=t,Vc.current=null}function ig(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hy(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Pe=null;return}}else if(n=By(n,t,at),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ie===0&&(Ie=5)}function Wn(e,t,n){var r=se,o=jt.transition;try{jt.transition=null,se=1,Xy(e,t,n,r)}finally{jt.transition=o,se=r}return null}function Xy(e,t,n,r){do Mr();while(wn!==null);if(ee&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ov(e,i),e===Le&&(Pe=Le=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,sg(ma,function(){return Mr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=jt.transition,jt.transition=null;var a=se;se=1;var l=ee;ee|=4,Vc.current=null,Wy(e,n),Zm(n,e),vy(pu),va=!!fu,pu=fu=null,e.current=n,Qy(n),Ev(),ee=l,se=a,jt.transition=i}else e.current=n;if(Ii&&(Ii=!1,wn=e,Ia=o),i=e.pendingLanes,i===0&&($n=null),Cv(n.stateNode),ot(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ra)throw Ra=!1,e=Iu,Iu=null,e;return Ia&1&&e.tag!==0&&Mr(),i=e.pendingLanes,i&1?e===Au?Mo++:(Mo=0,Au=e):Mo=0,Bn(),null}function Mr(){if(wn!==null){var e=zh(Ia),t=jt.transition,n=se;try{if(jt.transition=null,se=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Ia=0,ee&6)throw Error(R(331));var o=ee;for(ee|=4,M=e.current;M!==null;){var i=M,a=i.child;if(M.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Io(8,d,i)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var g=d.sibling,m=d.return;if(qm(d),d===u){M=null;break}if(g!==null){g.return=m,M=g;break}M=m}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}M=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,M=a;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Io(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,M=h;break e}M=i.return}}var p=e.current;for(M=p;M!==null;){a=M;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,M=y;else e:for(a=p;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ll(9,l)}}catch(j){Ce(l,l.return,j)}if(l===a){M=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,M=S;break e}M=l.return}}if(ee=o,Bn(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Za,e)}catch{}r=!0}return r}finally{se=n,jt.transition=t}}return!1}function Rf(e,t,n){t=Vr(n,t),t=Dm(e,t,1),e=kn(e,t,1),t=Ke(),e!==null&&(fi(e,1,t),ot(e,t))}function Ce(e,t,n){if(e.tag===3)Rf(e,e,n);else for(;t!==null;){if(t.tag===3){Rf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Vr(n,e),e=Fm(t,e,1),t=kn(t,e,1),e=Ke(),t!==null&&(fi(t,1,e),ot(t,e));break}}t=t.return}}function Jy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Fe&n)===n&&(Ie===4||Ie===3&&(Fe&130023424)===Fe&&500>ke()-Qc?Jn(e,0):Wc|=n),ot(e,t)}function ag(e,t){t===0&&(e.mode&1?(t=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):t=1);var n=Ke();e=on(e,t),e!==null&&(fi(e,t,n),ot(e,n))}function Zy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ag(e,n)}function e1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),ag(e,n)}var lg;lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Uy(e,t,n);et=!!(e.flags&131072)}else et=!1,Se&&t.flags&1048576&&cm(t,Ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;na(e,t),e=t.pendingProps;var o=Fr(t,Ye.current);Ar(t,n),o=Dc(null,t,r,e,o,n);var i=Fc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,Ea(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ac(t),o.updater=il,t.stateNode=o,o._reactInternals=t,Eu(t,r,e,n),t=Cu(null,t,r,!0,i,n)):(t.tag=0,Se&&i&&kc(t),Ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(na(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=n1(r),e=Pt(r,e),o){case 0:t=Tu(null,t,r,e,n);break e;case 1:t=Ef(null,t,r,e,n);break e;case 11:t=wf(null,t,r,e,n);break e;case 14:t=Sf(null,t,r,Pt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Tu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Ef(e,t,r,o,n);case 3:e:{if(Vm(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hm(e,t),ka(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Vr(Error(R(423)),t),t=jf(e,t,r,n,o);break e}else if(r!==o){o=Vr(Error(R(424)),t),t=jf(e,t,r,n,o);break e}else for(lt=bn(t.stateNode.containerInfo.firstChild),st=t,Se=!0,Rt=null,n=ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===o){t=an(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return xm(t),e===null&&xu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,hu(r,o)?a=null:i!==null&&hu(r,i)&&(t.flags|=32),Hm(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&xu(t),null;case 13:return Wm(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),wf(e,t,r,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,pe(Ca,r._currentValue),r._currentValue=a,i!==null)if(zt(i.value,a)){if(i.children===o.children&&!nt.current){t=an(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=tn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),wu(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(R(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),wu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ar(t,n),o=Tt(o),r=r(o),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,o=Pt(r,t.pendingProps),o=Pt(r.type,o),Sf(e,t,r,o,n);case 15:return Um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),na(e,t),t.tag=1,rt(r)?(e=!0,Ea(t)):e=!1,Ar(t,n),gm(t,r,o),Eu(t,r,o,n),Cu(null,t,r,!0,e,n);case 19:return Qm(e,t,n);case 22:return Bm(e,t,n)}throw Error(R(156,t.tag))};function sg(e,t){return Ah(e,t)}function t1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new t1(e,t,n,r)}function qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n1(e){if(typeof e=="function")return qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===gc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ia(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")qc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vr:return Zn(n.children,o,i,t);case hc:a=8,o|=8;break;case Qs:return e=Et(12,n,t,o|2),e.elementType=Qs,e.lanes=i,e;case Ys:return e=Et(13,n,t,o),e.elementType=Ys,e.lanes=i,e;case Gs:return e=Et(19,n,t,o),e.elementType=Gs,e.lanes=i,e;case vh:return ul(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mh:a=10;break e;case gh:a=9;break e;case mc:a=11;break e;case gc:a=14;break e;case hn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Et(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Zn(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=Et(22,e,r,t),e.elementType=vh,e.lanes=n,e.stateNode={isHidden:!1},e}function xs(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function r1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xc(e,t,n,r,o,i,a,l,s){return e=new r1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(i),e}function o1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ug(e){if(!e)return Ln;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(rt(n))return sm(e,n,t)}return t}function cg(e,t,n,r,o,i,a,l,s){return e=Xc(n,r,!0,e,o,i,a,l,s),e.context=ug(null),n=e.current,r=Ke(),o=_n(n),i=tn(r,o),i.callback=t??null,kn(n,i,o),e.current.lanes=o,fi(e,o,r),ot(e,r),e}function cl(e,t,n,r){var o=t.current,i=Ke(),a=_n(o);return n=ug(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(o,t,a),e!==null&&(Nt(e,o,a,i),Zi(e,o,a)),a}function Ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function If(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jc(e,t){If(e,t),(e=e.alternate)&&If(e,t)}function i1(){return null}var dg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zc(e){this._internalRoot=e}dl.prototype.render=Zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));cl(e,t,null,null)};dl.prototype.unmount=Zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){cl(null,e,null,null)}),t[rn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&Hh(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Af(){}function a1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ma(a);i.call(u)}}var a=cg(t,r,e,0,null,!1,!1,"",Af);return e._reactRootContainer=a,e[rn]=a.current,Yo(e.nodeType===8?e.parentNode:e),ar(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ma(s);l.call(u)}}var s=Xc(e,0,!1,null,null,!1,!1,"",Af);return e._reactRootContainer=s,e[rn]=s.current,Yo(e.nodeType===8?e.parentNode:e),ar(function(){cl(t,s,n,r)}),s}function pl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ma(a);l.call(s)}}cl(t,a,e,o)}else a=a1(n,t,e,o,r);return Ma(a)}Dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=So(t.pendingLanes);n!==0&&(xc(t,n|1),ot(t,ke()),!(ee&6)&&(Wr=ke()+500,Bn()))}break;case 13:ar(function(){var r=on(e,1);if(r!==null){var o=Ke();Nt(r,e,1,o)}}),Jc(e,1)}};wc=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=Ke();Nt(t,e,134217728,n)}Jc(e,134217728)}};Fh=function(e){if(e.tag===13){var t=_n(e),n=on(e,t);if(n!==null){var r=Ke();Nt(n,e,t,r)}Jc(e,t)}};Uh=function(){return se};Bh=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};ou=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rl(r);if(!o)throw Error(R(90));xh(r),Xs(r,o)}}}break;case"textarea":Sh(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};$h=Yc;_h=ar;var l1={usingClientEntryPoint:!1,Events:[hi,Sr,rl,bh,kh,Yc]},ho={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},s1={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rh(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||i1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Za=Ai.inject(s1),Vt=Ai}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(t))throw Error(R(200));return o1(e,t,null,n)};dt.createRoot=function(e,t){if(!ed(e))throw Error(R(299));var n=!1,r="",o=dg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xc(e,1,!1,null,null,n,!1,r,o),e[rn]=t.current,Yo(e.nodeType===8?e.parentNode:e),new Zc(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Rh(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return ar(e)};dt.hydrate=function(e,t,n){if(!fl(t))throw Error(R(200));return pl(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!ed(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=dg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=cg(t,null,e,1,n??null,o,!1,i,a),e[rn]=t.current,Yo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new dl(t)};dt.render=function(e,t,n){if(!fl(t))throw Error(R(200));return pl(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!fl(e))throw Error(R(40));return e._reactRootContainer?(ar(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};dt.unstable_batchedUpdates=Yc;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return pl(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg)}catch(e){console.error(e)}}fg(),ch.exports=dt;var pg=ch.exports,Mf=pg;Vs.createRoot=Mf.createRoot,Vs.hydrateRoot=Mf.hydrateRoot;var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qe.apply(this,arguments)};function ni(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var me="-ms-",No="-moz-",ie="-webkit-",hg="comm",hl="rule",td="decl",u1="@import",mg="@keyframes",c1="@layer",d1=Math.abs,nd=String.fromCharCode,Lu=Object.assign;function f1(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function gg(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function aa(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function Qr(e,t,n){return e.slice(t,n)}function Bt(e){return e.length}function vg(e){return e.length}function jo(e,t){return t.push(e),e}function p1(e,t){return e.map(t).join("")}function Nf(e,t){return e.filter(function(n){return!Xt(n,t)})}var ml=1,Yr=1,yg=0,bt=0,_e=0,no="";function gl(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ml,column:Yr,length:a,return:"",siblings:l}}function pn(e,t){return Lu(gl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hr(e){for(;e.root;)e=pn(e.root,{children:[e]});jo(e,e.siblings)}function h1(){return _e}function m1(){return _e=bt>0?Ne(no,--bt):0,Yr--,_e===10&&(Yr=1,ml--),_e}function Lt(){return _e=bt<yg?Ne(no,bt++):0,Yr++,_e===10&&(Yr=1,ml++),_e}function er(){return Ne(no,bt)}function la(){return bt}function vl(e,t){return Qr(no,e,t)}function zu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g1(e){return ml=Yr=1,yg=Bt(no=e),bt=0,[]}function v1(e){return no="",e}function Ss(e){return gg(vl(bt-1,Du(e===91?e+2:e===40?e+1:e)))}function y1(e){for(;(_e=er())&&_e<33;)Lt();return zu(e)>2||zu(_e)>3?"":" "}function x1(e,t){for(;--t&&Lt()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return vl(e,la()+(t<6&&er()==32&&Lt()==32))}function Du(e){for(;Lt();)switch(_e){case e:return bt;case 34:case 39:e!==34&&e!==39&&Du(_e);break;case 40:e===41&&Du(e);break;case 92:Lt();break}return bt}function w1(e,t){for(;Lt()&&e+_e!==47+10;)if(e+_e===42+42&&er()===47)break;return"/*"+vl(t,bt-1)+"*"+nd(e===47?e:Lt())}function S1(e){for(;!zu(er());)Lt();return vl(e,bt)}function E1(e){return v1(sa("",null,null,null,[""],e=g1(e),0,[0],e))}function sa(e,t,n,r,o,i,a,l,s){for(var u=0,d=0,f=a,g=0,m=0,v=0,x=1,E=1,h=1,p=0,y="",S=o,j=i,b=r,T=y;E;)switch(v=p,p=Lt()){case 40:if(v!=108&&Ne(T,f-1)==58){aa(T+=Q(Ss(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:T+=Ss(p);break;case 9:case 10:case 13:case 32:T+=y1(v);break;case 92:T+=x1(la()-1,7);continue;case 47:switch(er()){case 42:case 47:jo(j1(w1(Lt(),la()),t,n,s),s);break;default:T+="/"}break;case 123*x:l[u++]=Bt(T)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+d:h==-1&&(T=Q(T,/\f/g,"")),m>0&&Bt(T)-f&&jo(m>32?zf(T+";",r,n,f-1,s):zf(Q(T," ","")+";",r,n,f-2,s),s);break;case 59:T+=";";default:if(jo(b=Lf(T,t,n,u,d,o,l,y,S=[],j=[],f,i),i),p===123)if(d===0)sa(T,t,b,b,S,i,f,l,j);else switch(g===99&&Ne(T,3)===110?100:g){case 100:case 108:case 109:case 115:sa(e,b,b,r&&jo(Lf(e,b,b,0,0,o,l,y,o,S=[],f,j),j),o,j,f,l,r?S:j);break;default:sa(T,b,b,b,[""],j,0,l,j)}}u=d=m=0,x=h=1,y=T="",f=a;break;case 58:f=1+Bt(T),m=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&m1()==125)continue}switch(T+=nd(p),p*x){case 38:h=d>0?1:(T+="\f",-1);break;case 44:l[u++]=(Bt(T)-1)*h,h=1;break;case 64:er()===45&&(T+=Ss(Lt())),g=er(),d=f=Bt(y=T+=S1(la())),p++;break;case 45:v===45&&Bt(T)==2&&(x=0)}}return i}function Lf(e,t,n,r,o,i,a,l,s,u,d,f){for(var g=o-1,m=o===0?i:[""],v=vg(m),x=0,E=0,h=0;x<r;++x)for(var p=0,y=Qr(e,g+1,g=d1(E=a[x])),S=e;p<v;++p)(S=gg(E>0?m[p]+" "+y:Q(y,/&\f/g,m[p])))&&(s[h++]=S);return gl(e,t,n,o===0?hl:l,s,u,d,f)}function j1(e,t,n,r){return gl(e,t,n,hg,nd(h1()),Qr(e,2,-2),0,r)}function zf(e,t,n,r,o){return gl(e,t,n,td,Qr(e,0,r),Qr(e,r+1,-1),r,o)}function xg(e,t,n){switch(f1(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 4789:return No+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+No+e+me+e+e;case 5936:switch(Ne(e,t+11)){case 114:return ie+e+me+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+me+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+me+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ie+e+me+e+e;case 6165:return ie+e+me+"flex-"+e+e;case 5187:return ie+e+Q(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return ie+e+me+"flex-item-"+Q(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":me+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return ie+e+me+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ie+e+me+Q(e,"shrink","negative")+e;case 5292:return ie+e+me+Q(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+Q(e,"-grow","")+ie+e+me+Q(e,"grow","positive")+e;case 4554:return ie+Q(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return me+"grid-column-align"+Qr(e,t)+e;break;case 2592:case 3360:return me+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Xt(r.props,/grid-\w+-end/)})?~aa(e+(n=n[t].value),"span")?e:me+Q(e,"-start","")+e+me+"grid-row-span:"+(~aa(n,"span")?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":me+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:me+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bt(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+No+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~aa(e,"stretch")?xg(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return me+o+":"+i+u+(a?me+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(Ne(e,t+6)===121)return Q(e,":",":"+ie)+e;break;case 6444:switch(Ne(e,Ne(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+me+"$2box$3")+e;case 100:return Q(e,":",":"+me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function Na(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function T1(e,t,n,r){switch(e.type){case c1:if(e.children.length)break;case u1:case td:return e.return=e.return||e.value;case hg:return"";case mg:return e.return=e.value+"{"+Na(e.children,r)+"}";case hl:if(!Bt(e.value=e.props.join(",")))return""}return Bt(n=Na(e.children,r))?e.return=e.value+"{"+n+"}":""}function C1(e){var t=vg(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function b1(e){return function(t){t.root||(t=t.return)&&e(t)}}function k1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case td:e.return=xg(e.value,e.length,n);return;case mg:return Na([pn(e,{value:Q(e.value,"@","@"+ie)})],r);case hl:if(e.length)return p1(n=e.props,function(o){switch(Xt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hr(pn(e,{props:[Q(o,/:(read-\w+)/,":"+No+"$1")]})),hr(pn(e,{props:[o]})),Lu(e,{props:Nf(n,r)});break;case"::placeholder":hr(pn(e,{props:[Q(o,/:(plac\w+)/,":"+ie+"input-$1")]})),hr(pn(e,{props:[Q(o,/:(plac\w+)/,":"+No+"$1")]})),hr(pn(e,{props:[Q(o,/:(plac\w+)/,me+"input-$1")]})),hr(pn(e,{props:[o]})),Lu(e,{props:Nf(n,r)});break}return""})}}var $1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rd=typeof window<"u"&&"HTMLElement"in window,_1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),P1={},yl=Object.freeze([]),Kr=Object.freeze({});function wg(e,t,n){return n===void 0&&(n=Kr),e.theme!==n.theme&&e.theme||t||n.theme}var Sg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,R1=/(^-|-$)/g;function Df(e){return e.replace(O1,"-").replace(R1,"")}var I1=/(a)(d)/gi,Ff=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ff(t%52)+n;return(Ff(t%52)+n).replace(I1,"$1-$2")}var Es,$r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Eg=function(e){return $r(5381,e)};function jg(e){return Fu(Eg(e)>>>0)}function A1(e){return e.displayName||e.name||"Component"}function js(e){return typeof e=="string"&&!0}var Tg=typeof Symbol=="function"&&Symbol.for,Cg=Tg?Symbol.for("react.memo"):60115,M1=Tg?Symbol.for("react.forward_ref"):60112,N1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z1=((Es={})[M1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Es[Cg]=bg,Es);function Uf(e){return("type"in(t=e)&&t.type.$$typeof)===Cg?bg:"$$typeof"in e?z1[e.$$typeof]:N1;var t}var D1=Object.defineProperty,F1=Object.getOwnPropertyNames,Bf=Object.getOwnPropertySymbols,U1=Object.getOwnPropertyDescriptor,B1=Object.getPrototypeOf,Hf=Object.prototype;function kg(e,t,n){if(typeof t!="string"){if(Hf){var r=B1(t);r&&r!==Hf&&kg(e,r,n)}var o=F1(t);Bf&&(o=o.concat(Bf(t)));for(var i=Uf(e),a=Uf(t),l=0;l<o.length;++l){var s=o[l];if(!(s in L1||n&&n[s]||a&&s in a||i&&s in i)){var u=U1(t,s);try{D1(e,s,u)}catch{}}}}return e}function qr(e){return typeof e=="function"}function od(e){return typeof e=="object"&&"styledComponentId"in e}function Xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Uu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ri(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bu(e,t,n){if(n===void 0&&(n=!1),!n&&!ri(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bu(e[r],t[r]);else if(ri(t))for(var r in t)e[r]=Bu(e[r],t[r]);return e}function id(e,t){Object.defineProperty(e,"toString",{value:t})}function gi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var H1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw gi(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),ua=new Map,La=new Map,Ts=1,Mi=function(e){if(ua.has(e))return ua.get(e);for(;La.has(Ts);)Ts++;var t=Ts++;return ua.set(e,t),La.set(t,e),t},V1=function(e,t){ua.set(e,t),La.set(t,e)},W1="style[".concat(Gr,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Q1=new RegExp("^".concat(Gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Y1=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},G1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(Q1);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(V1(d,u),Y1(e,d,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function K1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $g=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Gr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Gr,"active"),r.setAttribute("data-styled-version","6.0.7");var a=K1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},q1=function(){function e(t){this.element=$g(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw gi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),X1=function(){function e(t){this.element=$g(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),J1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vf=rd,Z1={isServer:!rd,useCSSOMInjection:!_1},za=function(){function e(t,n,r){t===void 0&&(t=Kr),n===void 0&&(n={});var o=this;this.options=Qe(Qe({},Z1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&rd&&Vf&&(Vf=!1,function(i){for(var a=document.querySelectorAll(W1),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Gr)!=="active"&&(G1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),id(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(f){var g=function(h){return La.get(h)}(f);if(g===void 0)return"continue";var m=i.names.get(g),v=a.getGroup(f);if(m===void 0||v.length===0)return"continue";var x="".concat(Gr,".g").concat(f,'[id="').concat(g,'"]'),E="";m!==void 0&&m.forEach(function(h){h.length>0&&(E+="".concat(h,","))}),s+="".concat(v).concat(x,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)u(d);return s}(o)})}return e.registerId=function(t){return Mi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Qe(Qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new J1(o):r?new q1(o):new X1(o)}(this.options),new H1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Mi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Mi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Mi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ex=/&/g,tx=/^\s*\/\/.*$/gm;function _g(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_g(n.children,t)),n})}function nx(e){var t,n,r,o=e===void 0?Kr:e,i=o.options,a=i===void 0?Kr:i,l=o.plugins,s=l===void 0?yl:l,u=function(g,m,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},d=s.slice();d.push(function(g){g.type===hl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(ex,n).replace(r,u))}),a.prefix&&d.push(k1),d.push(T1);var f=function(g,m,v,x){m===void 0&&(m=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var E=g.replace(tx,""),h=E1(v||m?"".concat(v," ").concat(m," { ").concat(E," }"):E);a.namespace&&(h=_g(h,a.namespace));var p=[];return Na(h,C1(d.concat(b1(function(y){return p.push(y)})))),p};return f.hash=s.length?s.reduce(function(g,m){return m.name||gi(15),$r(g,m.name)},5381).toString():"",f}var rx=new za,Hu=nx(),Pg=B.createContext({shouldForwardProp:void 0,styleSheet:rx,stylis:Hu});Pg.Consumer;B.createContext(void 0);function Vu(){return k.useContext(Pg)}var ox=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Hu);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,id(this,function(){throw gi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Hu),this.name+t.hash},e}(),ix=function(e){return e>="A"&&e<="Z"};function Wf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ix(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Og=function(e){return e==null||e===!1||e===""},Rg=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Og(i)&&(Array.isArray(i)&&i.isCss||qr(i)?r.push("".concat(Wf(o),":"),i,";"):ri(i)?r.push.apply(r,ni(ni(["".concat(o," {")],Rg(i),!1),["}"],!1)):r.push("".concat(Wf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in $1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function On(e,t,n,r){if(Og(e))return[];if(od(e))return[".".concat(e.styledComponentId)];if(qr(e)){if(!qr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return On(o,t,n,r)}var i;return e instanceof ox?n?(e.inject(n,r),[e.getName(r)]):[e]:ri(e)?Rg(e):Array.isArray(e)?Array.prototype.concat.apply(yl,e.map(function(a){return On(a,t,n,r)})):[e.toString()]}function Ig(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qr(n)&&!od(n))return!1}return!0}var ax=Eg("6.0.7"),lx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ig(t),this.componentId=n,this.baseHash=$r(ax,n),this.baseStyle=r,za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Xn(o,this.staticRulesId);else{var i=Uu(On(this.rules,t,n,r)),a=Fu($r(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=Xn(o,a),this.staticRulesId=a}else{for(var s=$r(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var g=Uu(On(f,t,n,r));s=$r(s,g),u+=g}}if(u){var m=Fu(s>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),o=Xn(o,m)}}return o},e}(),ad=B.createContext(void 0);ad.Consumer;var Cs={};function sx(e,t,n){var r=od(e),o=e,i=!js(e),a=t.attrs,l=a===void 0?yl:a,s=t.componentId,u=s===void 0?function(y,S){var j=typeof y!="string"?"sc":Df(y);Cs[j]=(Cs[j]||0)+1;var b="".concat(j,"-").concat(jg("6.0.7"+j+Cs[j]));return S?"".concat(S,"-").concat(b):b}(t.displayName,t.parentComponentId):s,d=t.displayName;d===void 0&&function(y){return js(y)?"styled.".concat(y):"Styled(".concat(A1(y),")")}(e);var f=t.displayName&&t.componentId?"".concat(Df(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(y,S){return v(y,S)&&x(y,S)}}else m=v}var E=new lx(n,f,r?o.componentStyle:void 0);function h(y,S){return function(j,b,T){var $=j.attrs,_=j.componentStyle,O=j.defaultProps,L=j.foldedComponentIds,D=j.styledComponentId,z=j.target,X=B.useContext(ad),ve=Vu(),oe=j.shouldForwardProp||ve.shouldForwardProp,de=function(it,$e,ht){for(var ye,be=Qe(Qe({},$e),{className:void 0,theme:ht}),Hn=0;Hn<it.length;Hn+=1){var Gt=qr(ye=it[Hn])?ye(be):ye;for(var P in Gt)be[P]=P==="className"?Xn(be[P],Gt[P]):P==="style"?Qe(Qe({},be[P]),Gt[P]):Gt[P]}return $e.className&&(be.className=Xn(be.className,$e.className)),be}($,b,wg(b,X,O)||Kr),I=de.as||z,F={};for(var U in de)de[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?F.as=de.forwardedAs:oe&&!oe(U,I)||(F[U]=de[U]));var ae=function(it,$e){var ht=Vu(),ye=it.generateAndInjectStyles($e,ht.styleSheet,ht.stylis);return ye}(_,de),fe=Xn(L,D);return ae&&(fe+=" "+ae),de.className&&(fe+=" "+de.className),F[js(I)&&!Sg.has(I)?"class":"className"]=fe,F.ref=T,k.createElement(I,F)}(p,y,S)}var p=B.forwardRef(h);return p.attrs=g,p.componentStyle=E,p.shouldForwardProp=m,p.foldedComponentIds=r?Xn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=f,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(S){for(var j=[],b=1;b<arguments.length;b++)j[b-1]=arguments[b];for(var T=0,$=j;T<$.length;T++)Bu(S,$[T],!0);return S}({},o.defaultProps,y):y}}),id(p,function(){return".".concat(p.styledComponentId)}),i&&kg(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Qf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Yf=function(e){return Object.assign(e,{isCss:!0})};function Ag(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qr(e)||ri(e)){var r=e;return Yf(On(Qf(yl,ni([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?On(o):Yf(On(Qf(o,t)))}function Wu(e,t,n){if(n===void 0&&(n=Kr),!t)throw gi(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Ag.apply(void 0,ni([o],i,!1)))};return r.attrs=function(o){return Wu(e,t,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Wu(e,t,Qe(Qe({},n),o))},r}var Mg=function(e){return Wu(sx,e)},C=Mg;Sg.forEach(function(e){C[e]=Mg(e)});var ux=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ig(t),za.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Uu(On(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&za.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function cx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ag.apply(void 0,ni([e],t,!1)),o="sc-global-".concat(jg(JSON.stringify(r))),i=new ux(r,o),a=function(s){var u=Vu(),d=B.useContext(ad),f=B.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(f,s,u.styleSheet,d,u.stylis),B.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,s,u.styleSheet,d,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,d,u.stylis]),null};function l(s,u,d,f,g){if(i.isStatic)i.renderStyles(s,P1,d,g);else{var m=Qe(Qe({},u),{theme:wg(u,f,a.defaultProps)});i.renderStyles(s,m,d,g)}}return B.memo(a)}/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Gf="popstate";function dx(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=dr(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Qu("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:Da(i))}function r(o,i){xl(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return px(t,n,r,e)}function Oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fx(){return Math.random().toString(36).substr(2,8)}function Kf(e,t){return{usr:e.state,key:e.key,idx:t}}function Qu(e,t,n,r){return n===void 0&&(n=null),oi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:n,key:t&&t.key||r||fx()})}function Da(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function px(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Sn.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(oi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Sn.Pop;let E=d(),h=E==null?null:E-u;u=E,s&&s({action:l,location:x.location,delta:h})}function g(E,h){l=Sn.Push;let p=Qu(x.location,E,h);n&&n(p,E),u=d()+1;let y=Kf(p,u),S=x.createHref(p);try{a.pushState(y,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(S)}i&&s&&s({action:l,location:x.location,delta:1})}function m(E,h){l=Sn.Replace;let p=Qu(x.location,E,h);n&&n(p,E),u=d();let y=Kf(p,u),S=x.createHref(p);a.replaceState(y,"",S),i&&s&&s({action:l,location:x.location,delta:0})}function v(E){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof E=="string"?E:Da(E);return Oe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return l},get location(){return e(o,a)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Gf,f),s=E,()=>{o.removeEventListener(Gf,f),s=null}},createHref(E){return t(o,E)},createURL:v,encodeLocation(E){let h=v(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:m,go(E){return a.go(E)}};return x}var qf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qf||(qf={}));function hx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dr(t):t,o=ld(r.pathname||"/",n);if(o==null)return null;let i=Ng(e);mx(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=Tx(i[l],kx(o));return a}function Ng(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(Oe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Rn([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(Oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ng(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Ex(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Lg(i.path))o(i,a,s)}),t}function Lg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Lg(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function mx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gx=/^:\w+$/,vx=3,yx=2,xx=1,wx=10,Sx=-2,Xf=e=>e==="*";function Ex(e,t){let n=e.split("/"),r=n.length;return n.some(Xf)&&(r+=Sx),t&&(r+=yx),n.filter(o=>!Xf(o)).reduce((o,i)=>o+(gx.test(i)?vx:i===""?xx:wx),r)}function jx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Tx(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=Cx({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;i.push({params:r,pathname:Rn([o,d.pathname]),pathnameBase:Ox(Rn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Rn([o,d.pathnameBase]))}return i}function Cx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let g=l[f]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=$x(l[f]||"",d),u},{}),pathname:i,pathnameBase:a,pattern:e}}function bx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function kx(e){try{return decodeURI(e)}catch(t){return xl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $x(e,t){try{return decodeURIComponent(e)}catch(n){return xl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ld(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _x(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?dr(e):e;return{pathname:n?n.startsWith("/")?n:Px(n,t):t,search:Rx(r),hash:Ix(o)}}function Px(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dg(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=dr(e):(o=oi({},e),Oe(!o.pathname||!o.pathname.includes("?"),bs("?","pathname","search",o)),Oe(!o.pathname||!o.pathname.includes("#"),bs("#","pathname","hash",o)),Oe(!o.search||!o.search.includes("#"),bs("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}l=f>=0?t[f]:"/"}let s=_x(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),Ox=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ix=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ax(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fg=["post","put","patch","delete"];new Set(Fg);const Mx=["get",...Fg];new Set(Mx);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}const sd=k.createContext(null),Nx=k.createContext(null),ro=k.createContext(null),wl=k.createContext(null),fr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Ug=k.createContext(null);function Lx(e,t){let{relative:n}=t===void 0?{}:t;vi()||Oe(!1);let{basename:r,navigator:o}=k.useContext(ro),{hash:i,pathname:a,search:l}=Hg(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Rn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function vi(){return k.useContext(wl)!=null}function Sl(){return vi()||Oe(!1),k.useContext(wl).location}function Bg(e){k.useContext(ro).static||k.useLayoutEffect(e)}function zx(){let{isDataRoute:e}=k.useContext(fr);return e?Xx():Dx()}function Dx(){vi()||Oe(!1);let e=k.useContext(sd),{basename:t,navigator:n}=k.useContext(ro),{matches:r}=k.useContext(fr),{pathname:o}=Sl(),i=JSON.stringify(zg(r).map(s=>s.pathnameBase)),a=k.useRef(!1);return Bg(()=>{a.current=!0}),k.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=Dg(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Rn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,i,o,e])}function Hg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(fr),{pathname:o}=Sl(),i=JSON.stringify(zg(r).map(a=>a.pathnameBase));return k.useMemo(()=>Dg(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Fx(e,t){return Ux(e,t)}function Ux(e,t,n){vi()||Oe(!1);let{navigator:r}=k.useContext(ro),{matches:o}=k.useContext(fr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=Sl(),u;if(t){var d;let x=typeof t=="string"?dr(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||Oe(!1),u=x}else u=s;let f=u.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",m=hx(e,{pathname:g}),v=Qx(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Rn([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Rn([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n);return t&&v?k.createElement(wl.Provider,{value:{location:Fa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Sn.Pop}},v):v}function Bx(){let e=qx(),t=Ax(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,i)}const Hx=k.createElement(Bx,null);class Vx extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(fr.Provider,{value:this.props.routeContext},k.createElement(Ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wx(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(sd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(fr.Provider,{value:t},r)}function Qx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=i.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Oe(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;n&&(f=s.route.errorElement||Hx);let g=t.concat(i.slice(0,u+1)),m=()=>{let v;return d?v=f:s.route.Component?v=k.createElement(s.route.Component,null):s.route.element?v=s.route.element:v=l,k.createElement(Wx,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:v})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?k.createElement(Vx,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Vg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vg||{}),Ua=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ua||{});function Yx(e){let t=k.useContext(sd);return t||Oe(!1),t}function Gx(e){let t=k.useContext(Nx);return t||Oe(!1),t}function Kx(e){let t=k.useContext(fr);return t||Oe(!1),t}function Wg(e){let t=Kx(),n=t.matches[t.matches.length-1];return n.route.id||Oe(!1),n.route.id}function qx(){var e;let t=k.useContext(Ug),n=Gx(Ua.UseRouteError),r=Wg(Ua.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Xx(){let{router:e}=Yx(Vg.UseNavigateStable),t=Wg(Ua.UseNavigateStable),n=k.useRef(!1);return Bg(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Fa({fromRouteId:t},i)))},[e,t])}function To(e){Oe(!1)}function Jx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Sn.Pop,navigator:i,static:a=!1}=e;vi()&&Oe(!1);let l=t.replace(/^\/*/,"/"),s=k.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=dr(r));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:m="default"}=r,v=k.useMemo(()=>{let x=ld(u,l);return x==null?null:{location:{pathname:x,search:d,hash:f,state:g,key:m},navigationType:o}},[l,u,d,f,g,m,o]);return v==null?null:k.createElement(ro.Provider,{value:s},k.createElement(wl.Provider,{children:n,value:v}))}function Zx(e){let{children:t,location:n}=e;return Fx(Yu(t),n)}new Promise(()=>{});function Yu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Yu(r.props.children,i));return}r.type!==To&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Yu(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gu.apply(this,arguments)}function ew(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function tw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nw(e,t){return e.button===0&&(!t||t==="_self")&&!tw(e)}const rw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ow="startTransition",Jf=Z0[ow];function iw(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=dx({window:o,v5Compat:!0}));let a=i.current,[l,s]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&Jf?Jf(()=>s(f)):s(f)},[s,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.createElement(Jx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const aw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,f=ew(t,rw),{basename:g}=k.useContext(ro),m,v=!1;if(typeof u=="string"&&lw.test(u)&&(m=u,aw))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=ld(y.pathname,g);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:v=!0}catch{}let x=Lx(u,{relative:o}),E=sw(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:o});function h(p){r&&r(p),p.defaultPrevented||E(p)}return k.createElement("a",Gu({},f,{href:m||x,onClick:v||i?r:h,ref:n,target:s}))});var Zf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Zf||(Zf={}));var ep;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ep||(ep={}));function sw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,l=zx(),s=Sl(),u=Hg(e,{relative:a});return k.useCallback(d=>{if(nw(d,n)){d.preventDefault();let f=r!==void 0?r:Da(s)===Da(u);l(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[s,l,u,r,o,n,e,i,a])}var Qg={exports:{}};(function(e,t){(function(r,o){e.exports=o(k)})(L0,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,s)=>{s.match=v,s.parse=x;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,m=/(dpi|dpcm|dppx)?$/;function v(y,S){return x(y).some(function(j){var b=j.inverse,T=j.type==="all"||S.type===j.type;if(T&&b||!(T||b))return!1;var $=j.expressions.every(function(_){var O=_.feature,L=_.modifier,D=_.value,z=S[O];if(!z)return!1;switch(O){case"orientation":case"scan":return z.toLowerCase()===D.toLowerCase();case"width":case"height":case"device-width":case"device-height":D=p(D),z=p(z);break;case"resolution":D=h(D),z=h(z);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":D=E(D),z=E(z);break;case"grid":case"color":case"color-index":case"monochrome":D=parseInt(D,10)||1,z=parseInt(z,10)||0;break}switch(L){case"min":return z>=D;case"max":return z<=D;default:return z===D}});return $&&!b||!$&&b})}function x(y){return y.split(",").map(function(S){S=S.trim();var j=S.match(u),b=j[1],T=j[2],$=j[3]||"",_={};return _.inverse=!!b&&b.toLowerCase()==="not",_.type=T?T.toLowerCase():"all",$=$.match(/\([^\)]+\)/g)||[],_.expressions=$.map(function(O){var L=O.match(d),D=L[1].toLowerCase().match(f);return{modifier:D[1],feature:D[2],value:L[2]}}),_})}function E(y){var S=Number(y),j;return S||(j=y.match(/^(\d+)\s*\/\s*(\d+)$/),S=j[1]/j[2]),S}function h(y){var S=parseFloat(y),j=String(y).match(m)[1];switch(j){case"dpcm":return S/2.54;case"dppx":return S*96;default:return S}}function p(y){var S=parseFloat(y),j=String(y).match(g)[1];switch(j){case"em":return S*16;case"rem":return S*16;case"cm":return S*96/2.54;case"mm":return S*96/2.54/10;case"in":return S*96;case"pt":return S*72;case"pc":return S*72/12;default:return S}}},"./node_modules/hyphenate-style-name/index.js":(l,s,u)=>{u.r(s),u.d(s,{default:()=>x});var d=/[A-Z]/g,f=/^ms-/,g={};function m(E){return"-"+E.toLowerCase()}function v(E){if(g.hasOwnProperty(E))return g[E];var h=E.replace(d,m);return g[E]=f.test(h)?"-"+h:h}const x=v},"./node_modules/matchmediaquery/index.js":(l,s,u)=>{var d=u("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function g(v,x,E){var h=this;if(f&&!E){var p=f.call(window,v);this.matches=p.matches,this.media=p.media,p.addListener(j)}else this.matches=d(v,x),this.media=v;this.addListener=y,this.removeListener=S,this.dispose=b;function y(T){p&&p.addListener(T)}function S(T){p&&p.removeListener(T)}function j(T){h.matches=T.matches,h.media=T.media}function b(){p&&p.removeListener(j)}}function m(v,x,E){return new g(v,x,E)}l.exports=m},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;function f(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function g(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var v={},x=0;x<10;x++)v["_"+String.fromCharCode(x)]=x;var E=Object.getOwnPropertyNames(v).map(function(p){return v[p]});if(E.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(p){h[p]=p}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=g()?Object.assign:function(m,v){for(var x,E=f(m),h,p=1;p<arguments.length;p++){x=Object(arguments[p]);for(var y in x)u.call(x,y)&&(E[y]=x[y]);if(s){h=s(x);for(var S=0;S<h.length;S++)d.call(x,h[S])&&(E[h[S]]=x[h[S]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(l,s,u)=>{var d=function(){};{var f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},m=u("./node_modules/prop-types/lib/has.js");d=function(x){var E="Warning: "+x;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function v(x,E,h,p,y){for(var S in x)if(m(x,S)){var j;try{if(typeof x[S]!="function"){var b=Error((p||"React class")+": "+h+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof x[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}j=x[S](E,S,p,h,null,f)}catch($){j=$}if(j&&!(j instanceof Error)&&d((p||"React class")+": type specification of "+h+" `"+S+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof j+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),j instanceof Error&&!(j.message in g)){g[j.message]=!0;var T=y?y():"";d("Failed "+h+" type: "+j.message+(T??""))}}}v.resetWarningCache=function(){g={}},l.exports=v},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,s,u)=>{var d=u("./node_modules/react-is/index.js"),f=u("./node_modules/object-assign/index.js"),g=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m=u("./node_modules/prop-types/lib/has.js"),v=u("./node_modules/prop-types/checkPropTypes.js"),x=function(){};x=function(h){var p="Warning: "+h;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}};function E(){return null}l.exports=function(h,p){var y=typeof Symbol=="function"&&Symbol.iterator,S="@@iterator";function j(P){var N=P&&(y&&P[y]||P[S]);if(typeof N=="function")return N}var b="<<anonymous>>",T={array:L("array"),bigint:L("bigint"),bool:L("boolean"),func:L("function"),number:L("number"),object:L("object"),string:L("string"),symbol:L("symbol"),any:D(),arrayOf:z,element:X(),elementType:ve(),instanceOf:oe,node:U(),objectOf:I,oneOf:de,oneOfType:F,shape:fe,exact:it};function $(P,N){return P===N?P!==0||1/P===1/N:P!==P&&N!==N}function _(P,N){this.message=P,this.data=N&&typeof N=="object"?N:{},this.stack=""}_.prototype=Error.prototype;function O(P){var N={},J=0;function G(te,Y,K,ne,le,re,A){if(ne=ne||b,re=re||K,A!==g){if(p){var Ae=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Ae.name="Invariant Violation",Ae}else if(typeof console<"u"){var $t=ne+":"+K;!N[$t]&&J<3&&(x("You are manually calling a React.PropTypes validation function for the `"+re+"` prop on `"+ne+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),N[$t]=!0,J++)}}return Y[K]==null?te?Y[K]===null?new _("The "+le+" `"+re+"` is marked as required "+("in `"+ne+"`, but its value is `null`.")):new _("The "+le+" `"+re+"` is marked as required in "+("`"+ne+"`, but its value is `undefined`.")):null:P(Y,K,ne,le,re)}var W=G.bind(null,!1);return W.isRequired=G.bind(null,!0),W}function L(P){function N(J,G,W,te,Y,K){var ne=J[G],le=ye(ne);if(le!==P){var re=be(ne);return new _("Invalid "+te+" `"+Y+"` of type "+("`"+re+"` supplied to `"+W+"`, expected ")+("`"+P+"`."),{expectedType:P})}return null}return O(N)}function D(){return O(E)}function z(P){function N(J,G,W,te,Y){if(typeof P!="function")return new _("Property `"+Y+"` of component `"+W+"` has invalid PropType notation inside arrayOf.");var K=J[G];if(!Array.isArray(K)){var ne=ye(K);return new _("Invalid "+te+" `"+Y+"` of type "+("`"+ne+"` supplied to `"+W+"`, expected an array."))}for(var le=0;le<K.length;le++){var re=P(K,le,W,te,Y+"["+le+"]",g);if(re instanceof Error)return re}return null}return O(N)}function X(){function P(N,J,G,W,te){var Y=N[J];if(!h(Y)){var K=ye(Y);return new _("Invalid "+W+" `"+te+"` of type "+("`"+K+"` supplied to `"+G+"`, expected a single ReactElement."))}return null}return O(P)}function ve(){function P(N,J,G,W,te){var Y=N[J];if(!d.isValidElementType(Y)){var K=ye(Y);return new _("Invalid "+W+" `"+te+"` of type "+("`"+K+"` supplied to `"+G+"`, expected a single ReactElement type."))}return null}return O(P)}function oe(P){function N(J,G,W,te,Y){if(!(J[G]instanceof P)){var K=P.name||b,ne=Gt(J[G]);return new _("Invalid "+te+" `"+Y+"` of type "+("`"+ne+"` supplied to `"+W+"`, expected ")+("instance of `"+K+"`."))}return null}return O(N)}function de(P){if(!Array.isArray(P))return arguments.length>1?x("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):x("Invalid argument supplied to oneOf, expected an array."),E;function N(J,G,W,te,Y){for(var K=J[G],ne=0;ne<P.length;ne++)if($(K,P[ne]))return null;var le=JSON.stringify(P,function(A,Ae){var $t=be(Ae);return $t==="symbol"?String(Ae):Ae});return new _("Invalid "+te+" `"+Y+"` of value `"+String(K)+"` "+("supplied to `"+W+"`, expected one of "+le+"."))}return O(N)}function I(P){function N(J,G,W,te,Y){if(typeof P!="function")return new _("Property `"+Y+"` of component `"+W+"` has invalid PropType notation inside objectOf.");var K=J[G],ne=ye(K);if(ne!=="object")return new _("Invalid "+te+" `"+Y+"` of type "+("`"+ne+"` supplied to `"+W+"`, expected an object."));for(var le in K)if(m(K,le)){var re=P(K,le,W,te,Y+"."+le,g);if(re instanceof Error)return re}return null}return O(N)}function F(P){if(!Array.isArray(P))return x("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var N=0;N<P.length;N++){var J=P[N];if(typeof J!="function")return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Hn(J)+" at index "+N+"."),E}function G(W,te,Y,K,ne){for(var le=[],re=0;re<P.length;re++){var A=P[re],Ae=A(W,te,Y,K,ne,g);if(Ae==null)return null;Ae.data&&m(Ae.data,"expectedType")&&le.push(Ae.data.expectedType)}var $t=le.length>0?", expected one of type ["+le.join(", ")+"]":"";return new _("Invalid "+K+" `"+ne+"` supplied to "+("`"+Y+"`"+$t+"."))}return O(G)}function U(){function P(N,J,G,W,te){return $e(N[J])?null:new _("Invalid "+W+" `"+te+"` supplied to "+("`"+G+"`, expected a ReactNode."))}return O(P)}function ae(P,N,J,G,W){return new _((P||"React class")+": "+N+" type `"+J+"."+G+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+W+"`.")}function fe(P){function N(J,G,W,te,Y){var K=J[G],ne=ye(K);if(ne!=="object")return new _("Invalid "+te+" `"+Y+"` of type `"+ne+"` "+("supplied to `"+W+"`, expected `object`."));for(var le in P){var re=P[le];if(typeof re!="function")return ae(W,te,Y,le,be(re));var A=re(K,le,W,te,Y+"."+le,g);if(A)return A}return null}return O(N)}function it(P){function N(J,G,W,te,Y){var K=J[G],ne=ye(K);if(ne!=="object")return new _("Invalid "+te+" `"+Y+"` of type `"+ne+"` "+("supplied to `"+W+"`, expected `object`."));var le=f({},J[G],P);for(var re in le){var A=P[re];if(m(P,re)&&typeof A!="function")return ae(W,te,Y,re,be(A));if(!A)return new _("Invalid "+te+" `"+Y+"` key `"+re+"` supplied to `"+W+"`.\nBad object: "+JSON.stringify(J[G],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(P),null,"  "));var Ae=A(K,re,W,te,Y+"."+re,g);if(Ae)return Ae}return null}return O(N)}function $e(P){switch(typeof P){case"number":case"string":case"undefined":return!0;case"boolean":return!P;case"object":if(Array.isArray(P))return P.every($e);if(P===null||h(P))return!0;var N=j(P);if(N){var J=N.call(P),G;if(N!==P.entries){for(;!(G=J.next()).done;)if(!$e(G.value))return!1}else for(;!(G=J.next()).done;){var W=G.value;if(W&&!$e(W[1]))return!1}}else return!1;return!0;default:return!1}}function ht(P,N){return P==="symbol"?!0:N?N["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&N instanceof Symbol:!1}function ye(P){var N=typeof P;return Array.isArray(P)?"array":P instanceof RegExp?"object":ht(N,P)?"symbol":N}function be(P){if(typeof P>"u"||P===null)return""+P;var N=ye(P);if(N==="object"){if(P instanceof Date)return"date";if(P instanceof RegExp)return"regexp"}return N}function Hn(P){var N=be(P);switch(N){case"array":case"object":return"an "+N;case"boolean":case"date":case"regexp":return"a "+N;default:return N}}function Gt(P){return!P.constructor||!P.constructor.name?b:P.constructor.name}return T.checkPropTypes=v,T.resetWarningCache=v.resetWarningCache,T.PropTypes=T,T}},"./node_modules/prop-types/index.js":(l,s,u)=>{{var d=u("./node_modules/react-is/index.js"),f=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(d.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=s},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,d=u?Symbol.for("react.element"):60103,f=u?Symbol.for("react.portal"):60106,g=u?Symbol.for("react.fragment"):60107,m=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.profiler"):60114,x=u?Symbol.for("react.provider"):60109,E=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,S=u?Symbol.for("react.suspense"):60113,j=u?Symbol.for("react.suspense_list"):60120,b=u?Symbol.for("react.memo"):60115,T=u?Symbol.for("react.lazy"):60116,$=u?Symbol.for("react.block"):60121,_=u?Symbol.for("react.fundamental"):60117,O=u?Symbol.for("react.responder"):60118,L=u?Symbol.for("react.scope"):60119;function D(A){return typeof A=="string"||typeof A=="function"||A===g||A===p||A===v||A===m||A===S||A===j||typeof A=="object"&&A!==null&&(A.$$typeof===T||A.$$typeof===b||A.$$typeof===x||A.$$typeof===E||A.$$typeof===y||A.$$typeof===_||A.$$typeof===O||A.$$typeof===L||A.$$typeof===$)}function z(A){if(typeof A=="object"&&A!==null){var Ae=A.$$typeof;switch(Ae){case d:var $t=A.type;switch($t){case h:case p:case g:case v:case m:case S:return $t;default:var Cd=$t&&$t.$$typeof;switch(Cd){case E:case y:case T:case b:case x:return Cd;default:return Ae}}case f:return Ae}}}var X=h,ve=p,oe=E,de=x,I=d,F=y,U=g,ae=T,fe=b,it=f,$e=v,ht=m,ye=S,be=!1;function Hn(A){return be||(be=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Gt(A)||z(A)===h}function Gt(A){return z(A)===p}function P(A){return z(A)===E}function N(A){return z(A)===x}function J(A){return typeof A=="object"&&A!==null&&A.$$typeof===d}function G(A){return z(A)===y}function W(A){return z(A)===g}function te(A){return z(A)===T}function Y(A){return z(A)===b}function K(A){return z(A)===f}function ne(A){return z(A)===v}function le(A){return z(A)===m}function re(A){return z(A)===S}s.AsyncMode=X,s.ConcurrentMode=ve,s.ContextConsumer=oe,s.ContextProvider=de,s.Element=I,s.ForwardRef=F,s.Fragment=U,s.Lazy=ae,s.Memo=fe,s.Portal=it,s.Profiler=$e,s.StrictMode=ht,s.Suspense=ye,s.isAsyncMode=Hn,s.isConcurrentMode=Gt,s.isContextConsumer=P,s.isContextProvider=N,s.isElement=J,s.isForwardRef=G,s.isFragment=W,s.isLazy=te,s.isMemo=Y,s.isPortal=K,s.isProfiler=ne,s.isStrictMode=le,s.isSuspense=re,s.isValidElementType=D,s.typeOf=z})()},"./node_modules/react-is/index.js":(l,s,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,s,u)=>{u.r(s),u.d(s,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>d});function d(g,m){if(g===m)return!0;if(!g||!m)return!1;var v=Object.keys(g),x=Object.keys(m),E=v.length;if(x.length!==E)return!1;for(var h=0;h<E;h++){var p=v[h];if(g[p]!==m[p]||!Object.prototype.hasOwnProperty.call(m,p))return!1}return!0}function f(g,m){if(g===m)return!0;if(!g||!m)return!1;var v=g.length;if(m.length!==v)return!1;for(var x=0;x<v;x++)if(g[x]!==m[x])return!1;return!0}},"./src/Component.ts":function(l,s,u){var d=this&&this.__rest||function(v,x){var E={};for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&x.indexOf(h)<0&&(E[h]=v[h]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,h=Object.getOwnPropertySymbols(v);p<h.length;p++)x.indexOf(h[p])<0&&Object.prototype.propertyIsEnumerable.call(v,h[p])&&(E[h[p]]=v[h[p]]);return E},f=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(s,"__esModule",{value:!0});var g=f(u("./src/useMediaQuery.ts")),m=function(v){var x=v.children,E=v.device,h=v.onChange,p=d(v,["children","device","onChange"]),y=(0,g.default)(p,E,h);return typeof x=="function"?x(y):y?x:null};s.default=m},"./src/Context.ts":(l,s,u)=>{Object.defineProperty(s,"__esModule",{value:!0});var d=u("react"),f=(0,d.createContext)(void 0);s.default=f},"./src/index.ts":function(l,s,u){var d=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var f=d(u("./src/useMediaQuery.ts"));s.useMediaQuery=f.default;var g=d(u("./src/Component.ts"));s.default=g.default;var m=d(u("./src/toQuery.ts"));s.toQuery=m.default;var v=d(u("./src/Context.ts"));s.Context=v.default},"./src/mediaQuery.ts":function(l,s,u){var d=this&&this.__assign||function(){return d=Object.assign||function(S){for(var j,b=1,T=arguments.length;b<T;b++){j=arguments[b];for(var $ in j)Object.prototype.hasOwnProperty.call(j,$)&&(S[$]=j[$])}return S},d.apply(this,arguments)},f=this&&this.__rest||function(S,j){var b={};for(var T in S)Object.prototype.hasOwnProperty.call(S,T)&&j.indexOf(T)<0&&(b[T]=S[T]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,T=Object.getOwnPropertySymbols(S);$<T.length;$++)j.indexOf(T[$])<0&&Object.prototype.propertyIsEnumerable.call(S,T[$])&&(b[T[$]]=S[T[$]]);return b},g=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(s,"__esModule",{value:!0});var m=g(u("./node_modules/prop-types/index.js")),v=m.default.oneOfType([m.default.string,m.default.number]),x={all:m.default.bool,grid:m.default.bool,aural:m.default.bool,braille:m.default.bool,handheld:m.default.bool,print:m.default.bool,projection:m.default.bool,screen:m.default.bool,tty:m.default.bool,tv:m.default.bool,embossed:m.default.bool},E={orientation:m.default.oneOf(["portrait","landscape"]),scan:m.default.oneOf(["progressive","interlace"]),aspectRatio:m.default.string,deviceAspectRatio:m.default.string,height:v,deviceHeight:v,width:v,deviceWidth:v,color:m.default.bool,colorIndex:m.default.bool,monochrome:m.default.bool,resolution:v,type:Object.keys(x)};E.type;var h=f(E,["type"]),p=d({minAspectRatio:m.default.string,maxAspectRatio:m.default.string,minDeviceAspectRatio:m.default.string,maxDeviceAspectRatio:m.default.string,minHeight:v,maxHeight:v,minDeviceHeight:v,maxDeviceHeight:v,minWidth:v,maxWidth:v,minDeviceWidth:v,maxDeviceWidth:v,minColor:m.default.number,maxColor:m.default.number,minColorIndex:m.default.number,maxColorIndex:m.default.number,minMonochrome:m.default.number,maxMonochrome:m.default.number,minResolution:v,maxResolution:v},h),y=d(d({},x),p);s.default={all:y,types:x,matchers:E,features:p}},"./src/toQuery.ts":function(l,s,u){var d=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(s,"__esModule",{value:!0});var f=d(u("./node_modules/hyphenate-style-name/index.js")),g=d(u("./src/mediaQuery.ts")),m=function(h){return"not ".concat(h)},v=function(h,p){var y=(0,f.default)(h);return typeof p=="number"&&(p="".concat(p,"px")),p===!0?y:p===!1?m(y):"(".concat(y,": ").concat(p,")")},x=function(h){return h.join(" and ")},E=function(h){var p=[];return Object.keys(g.default.all).forEach(function(y){var S=h[y];S!=null&&p.push(v(y,S))}),x(p)};s.default=E},"./src/useMediaQuery.ts":function(l,s,u){var d=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(s,"__esModule",{value:!0});var f=u("react"),g=d(u("./node_modules/matchmediaquery/index.js")),m=d(u("./node_modules/hyphenate-style-name/index.js")),v=u("./node_modules/shallow-equal/dist/index.esm.js"),x=d(u("./src/toQuery.ts")),E=d(u("./src/Context.ts")),h=function(_){return _.query||(0,x.default)(_)},p=function(_){if(_){var O=Object.keys(_);return O.reduce(function(L,D){return L[(0,m.default)(D)]=_[D],L},{})}},y=function(){var _=(0,f.useRef)(!1);return(0,f.useEffect)(function(){_.current=!0},[]),_.current},S=function(_){var O=(0,f.useContext)(E.default),L=function(){return p(_)||p(O)},D=(0,f.useState)(L),z=D[0],X=D[1];return(0,f.useEffect)(function(){var ve=L();(0,v.shallowEqualObjects)(z,ve)||X(ve)},[_,O]),z},j=function(_){var O=function(){return h(_)},L=(0,f.useState)(O),D=L[0],z=L[1];return(0,f.useEffect)(function(){var X=O();D!==X&&z(X)},[_]),D},b=function(_,O){var L=function(){return(0,g.default)(_,O||{},!!O)},D=(0,f.useState)(L),z=D[0],X=D[1],ve=y();return(0,f.useEffect)(function(){if(ve){var oe=L();return X(oe),function(){oe&&oe.dispose()}}},[_,O]),z},T=function(_){var O=(0,f.useState)(_.matches),L=O[0],D=O[1];return(0,f.useEffect)(function(){var z=function(X){D(X.matches)};return _.addListener(z),D(_.matches),function(){_.removeListener(z)}},[_]),L},$=function(_,O,L){var D=S(O),z=j(_);if(!z)throw new Error("Invalid or missing MediaQuery!");var X=b(z,D),ve=T(X),oe=y();return(0,f.useEffect)(function(){oe&&L&&L(ve)},[ve]),(0,f.useEffect)(function(){return function(){X&&X.dispose()}},[]),ve};s.default=$},react:l=>{l.exports=n}},o={};function i(l){var s=o[l];if(s!==void 0)return s.exports;var u=o[l]={exports:{}};return r[l].call(u.exports,u,u.exports,i),u.exports}i.d=(l,s)=>{for(var u in s)i.o(s,u)&&!i.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:s[u]})},i.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s),i.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a=i("./src/index.ts");return a})())})(Qg);var uw=Qg.exports,Yg={exports:{}},cw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dw=cw,fw=dw;function Gg(){}function Kg(){}Kg.resetWarningCache=Gg;var pw=function(){function e(r,o,i,a,l,s){if(s!==fw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kg,resetWarningCache:Gg};return n.PropTypes=n,n};Yg.exports=pw();var hw=Yg.exports;const Z=ci(hw),w={colors:{white:"#FEFEFF",seasalt:"#F9F9F9",lavender:"#EFECFF",platinum:"#E2DFDF",gray:"#797979",raisinblack:"#242331",onyx:"#413F50",lavenderfloral:"#B06EFE",electricindigo:"#5236FF"},bp:{"x-small":"576px",small:"767px",medium:"992px",large:"1200px"}},mw=C.div`
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
    color: ${w.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: ${w.colors.onyx};
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
`;function Ba({buttonText:e,handleClick:t}){return c.jsx(mw,{children:c.jsx("button",{onClick:t,children:e})})}Ba.propTypes={buttonText:Z.string,handleClick:Z.func};const gw=C.div`
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
    color: ${w.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: linear-gradient(
      to right,
      ${w.colors.electricindigo} 0%,
      ${w.colors.lavenderfloral} 100%
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
`;function Ha({buttonText:e,handleClick:t}){return c.jsx(gw,{children:c.jsx("button",{onClick:t,children:e})})}Ha.propTypes={buttonText:Z.string,handleClick:Z.func};var qg={exports:{}},Xg={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=k;function vw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yw=typeof Object.is=="function"?Object.is:vw,xw=Xr.useState,ww=Xr.useEffect,Sw=Xr.useLayoutEffect,Ew=Xr.useDebugValue;function jw(e,t){var n=t(),r=xw({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Sw(function(){o.value=n,o.getSnapshot=t,ks(o)&&i({inst:o})},[e,n,t]),ww(function(){return ks(o)&&i({inst:o}),e(function(){ks(o)&&i({inst:o})})},[e]),Ew(n),n}function ks(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yw(e,n)}catch{return!0}}function Tw(e,t){return t()}var Cw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Tw:jw;Xg.useSyncExternalStore=Xr.useSyncExternalStore!==void 0?Xr.useSyncExternalStore:Cw;qg.exports=Xg;var bw=qg.exports,Jg={exports:{}},Zg={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=k,kw=bw;function $w(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _w=typeof Object.is=="function"?Object.is:$w,Pw=kw.useSyncExternalStore,Ow=El.useRef,Rw=El.useEffect,Iw=El.useMemo,Aw=El.useDebugValue;Zg.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Ow(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Iw(function(){function s(m){if(!u){if(u=!0,d=m,m=r(m),o!==void 0&&a.hasValue){var v=a.value;if(o(v,m))return f=v}return f=m}if(v=f,_w(d,m))return v;var x=r(m);return o!==void 0&&o(v,x)?v:(d=m,f=x)}var u=!1,d,f,g=n===void 0?null:n;return[function(){return s(t())},g===null?void 0:function(){return s(g())}]},[t,n,r,o]);var l=Pw(e,i[0],i[1]);return Rw(function(){a.hasValue=!0,a.value=l},[l]),Aw(l),l};Jg.exports=Zg;var Mw=Jg.exports;function Nw(e){e()}let e0=Nw;const Lw=e=>e0=e,zw=()=>e0,tp=Symbol.for("react-redux-context"),np=typeof globalThis<"u"?globalThis:{};function Dw(){var e;if(!k.createContext)return{};const t=(e=np[tp])!=null?e:np[tp]=new Map;let n=t.get(k.createContext);return n||(n=k.createContext(null),t.set(k.createContext,n)),n}const zn=Dw();function ud(e=zn){return function(){return k.useContext(e)}}const t0=ud(),Fw=()=>{throw new Error("uSES not initialized!")};let n0=Fw;const Uw=e=>{n0=e},Bw=(e,t)=>e===t;function Hw(e=zn){const t=e===zn?t0:ud(e);return function(r,o={}){const{equalityFn:i=Bw,stabilityCheck:a=void 0,noopCheck:l=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:s,subscription:u,getServerState:d,stabilityCheck:f,noopCheck:g}=t();k.useRef(!0);const m=k.useCallback({[r.name](x){return r(x)}}[r.name],[r,f,a]),v=n0(u.addNestedSub,s.getState,d||s.getState,m,i);return k.useDebugValue(v),v}}const r0=Hw();var o0={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,cd=ze?Symbol.for("react.element"):60103,dd=ze?Symbol.for("react.portal"):60106,jl=ze?Symbol.for("react.fragment"):60107,Tl=ze?Symbol.for("react.strict_mode"):60108,Cl=ze?Symbol.for("react.profiler"):60114,bl=ze?Symbol.for("react.provider"):60109,kl=ze?Symbol.for("react.context"):60110,fd=ze?Symbol.for("react.async_mode"):60111,$l=ze?Symbol.for("react.concurrent_mode"):60111,_l=ze?Symbol.for("react.forward_ref"):60112,Pl=ze?Symbol.for("react.suspense"):60113,Vw=ze?Symbol.for("react.suspense_list"):60120,Ol=ze?Symbol.for("react.memo"):60115,Rl=ze?Symbol.for("react.lazy"):60116,Ww=ze?Symbol.for("react.block"):60121,Qw=ze?Symbol.for("react.fundamental"):60117,Yw=ze?Symbol.for("react.responder"):60118,Gw=ze?Symbol.for("react.scope"):60119;function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cd:switch(e=e.type,e){case fd:case $l:case jl:case Cl:case Tl:case Pl:return e;default:switch(e=e&&e.$$typeof,e){case kl:case _l:case Rl:case Ol:case bl:return e;default:return t}}case dd:return t}}}function i0(e){return pt(e)===$l}ue.AsyncMode=fd;ue.ConcurrentMode=$l;ue.ContextConsumer=kl;ue.ContextProvider=bl;ue.Element=cd;ue.ForwardRef=_l;ue.Fragment=jl;ue.Lazy=Rl;ue.Memo=Ol;ue.Portal=dd;ue.Profiler=Cl;ue.StrictMode=Tl;ue.Suspense=Pl;ue.isAsyncMode=function(e){return i0(e)||pt(e)===fd};ue.isConcurrentMode=i0;ue.isContextConsumer=function(e){return pt(e)===kl};ue.isContextProvider=function(e){return pt(e)===bl};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cd};ue.isForwardRef=function(e){return pt(e)===_l};ue.isFragment=function(e){return pt(e)===jl};ue.isLazy=function(e){return pt(e)===Rl};ue.isMemo=function(e){return pt(e)===Ol};ue.isPortal=function(e){return pt(e)===dd};ue.isProfiler=function(e){return pt(e)===Cl};ue.isStrictMode=function(e){return pt(e)===Tl};ue.isSuspense=function(e){return pt(e)===Pl};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jl||e===$l||e===Cl||e===Tl||e===Pl||e===Vw||typeof e=="object"&&e!==null&&(e.$$typeof===Rl||e.$$typeof===Ol||e.$$typeof===bl||e.$$typeof===kl||e.$$typeof===_l||e.$$typeof===Qw||e.$$typeof===Yw||e.$$typeof===Gw||e.$$typeof===Ww)};ue.typeOf=pt;o0.exports=ue;var Kw=o0.exports,a0=Kw,qw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l0={};l0[a0.ForwardRef]=qw;l0[a0.Memo]=Xw;var ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=Symbol.for("react.element"),hd=Symbol.for("react.portal"),Il=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Nl=Symbol.for("react.provider"),Ll=Symbol.for("react.context"),Jw=Symbol.for("react.server_context"),zl=Symbol.for("react.forward_ref"),Dl=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Ul=Symbol.for("react.memo"),Bl=Symbol.for("react.lazy"),Zw=Symbol.for("react.offscreen"),s0;s0=Symbol.for("react.module.reference");function kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pd:switch(e=e.type,e){case Il:case Ml:case Al:case Dl:case Fl:return e;default:switch(e=e&&e.$$typeof,e){case Jw:case Ll:case zl:case Bl:case Ul:case Nl:return e;default:return t}}case hd:return t}}}ce.ContextConsumer=Ll;ce.ContextProvider=Nl;ce.Element=pd;ce.ForwardRef=zl;ce.Fragment=Il;ce.Lazy=Bl;ce.Memo=Ul;ce.Portal=hd;ce.Profiler=Ml;ce.StrictMode=Al;ce.Suspense=Dl;ce.SuspenseList=Fl;ce.isAsyncMode=function(){return!1};ce.isConcurrentMode=function(){return!1};ce.isContextConsumer=function(e){return kt(e)===Ll};ce.isContextProvider=function(e){return kt(e)===Nl};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pd};ce.isForwardRef=function(e){return kt(e)===zl};ce.isFragment=function(e){return kt(e)===Il};ce.isLazy=function(e){return kt(e)===Bl};ce.isMemo=function(e){return kt(e)===Ul};ce.isPortal=function(e){return kt(e)===hd};ce.isProfiler=function(e){return kt(e)===Ml};ce.isStrictMode=function(e){return kt(e)===Al};ce.isSuspense=function(e){return kt(e)===Dl};ce.isSuspenseList=function(e){return kt(e)===Fl};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Il||e===Ml||e===Al||e===Dl||e===Fl||e===Zw||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Ul||e.$$typeof===Nl||e.$$typeof===Ll||e.$$typeof===zl||e.$$typeof===s0||e.getModuleId!==void 0)};ce.typeOf=kt;function e2(){const e=zw();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const rp={notify(){},get:()=>[]};function t2(e,t){let n,r=rp,o=0,i=!1;function a(x){d();const E=r.subscribe(x);let h=!1;return()=>{h||(h=!0,E(),f())}}function l(){r.notify()}function s(){v.onStateChange&&v.onStateChange()}function u(){return i}function d(){o++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=e2())}function f(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=rp)}function g(){i||(i=!0,d())}function m(){i&&(i=!1,f())}const v={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:g,tryUnsubscribe:m,getListeners:()=>r};return v}const n2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r2=n2?k.useLayoutEffect:k.useEffect;function o2({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=k.useMemo(()=>{const u=t2(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),l=k.useMemo(()=>e.getState(),[e]);r2(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,l]);const s=t||zn;return k.createElement(s.Provider,{value:a},n)}function u0(e=zn){const t=e===zn?t0:ud(e);return function(){const{store:r}=t();return r}}const i2=u0();function a2(e=zn){const t=e===zn?i2:u0(e);return function(){return t().dispatch}}const Hl=a2();Uw(Mw.useSyncExternalStoreWithSelector);Lw(pg.unstable_batchedUpdates);function It(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Dn(e){return!!e&&!!e[we]}function ln(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===m2}(e)||Array.isArray(e)||!!e[cp]||!!(!((t=e.constructor)===null||t===void 0)&&t[cp])||md(e)||gd(e))}function lr(e,t,n){n===void 0&&(n=!1),io(e)===0?(n?Object.keys:Lr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function io(e){var t=e[we];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:md(e)?2:gd(e)?3:0}function Nr(e,t){return io(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l2(e,t){return io(e)===2?e.get(t):e[t]}function c0(e,t,n){var r=io(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function d0(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function md(e){return p2&&e instanceof Map}function gd(e){return h2&&e instanceof Set}function Qn(e){return e.o||e.t}function vd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=p0(e);delete t[we];for(var n=Lr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function yd(e,t){return t===void 0&&(t=!1),xd(e)||Dn(e)||!ln(e)||(io(e)>1&&(e.set=e.add=e.clear=e.delete=s2),Object.freeze(e),t&&lr(e,function(n,r){return yd(r,!0)},!0)),e}function s2(){It(2)}function xd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Qt(e){var t=Ju[e];return t||It(18,e),t}function u2(e,t){Ju[e]||(Ju[e]=t)}function Ku(){return ii}function $s(e,t){t&&(Qt("Patches"),e.u=[],e.s=[],e.v=t)}function Va(e){qu(e),e.p.forEach(c2),e.p=null}function qu(e){e===ii&&(ii=e.l)}function op(e){return ii={p:[],l:ii,h:e,m:!0,_:0}}function c2(e){var t=e[we];t.i===0||t.i===1?t.j():t.g=!0}function _s(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Qt("ES5").S(t,e,r),r?(n[we].P&&(Va(t),It(4)),ln(e)&&(e=Wa(t,e),t.l||Qa(t,e)),t.u&&Qt("Patches").M(n[we].t,e,t.u,t.s)):e=Wa(t,n,[]),Va(t),t.u&&t.v(t.u,t.s),e!==f0?e:void 0}function Wa(e,t,n){if(xd(t))return t;var r=t[we];if(!r)return lr(t,function(l,s){return ip(e,r,t,l,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Qa(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=vd(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),lr(i,function(l,s){return ip(e,r,o,l,s,n,a)}),Qa(e,o,!1),n&&e.u&&Qt("Patches").N(r,n,e.u,e.s)}return r.o}function ip(e,t,n,r,o,i,a){if(Dn(o)){var l=Wa(e,o,i&&t&&t.i!==3&&!Nr(t.R,r)?i.concat(r):void 0);if(c0(n,r,l),!Dn(l))return;e.m=!1}else a&&n.add(o);if(ln(o)&&!xd(o)){if(!e.h.D&&e._<1)return;Wa(e,o),t&&t.A.l||Qa(e,o)}}function Qa(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&yd(t,n)}function Ps(e,t){var n=e[we];return(n?Qn(n):e)[t]}function ap(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function yn(e){e.P||(e.P=!0,e.l&&yn(e.l))}function Os(e){e.o||(e.o=vd(e.t))}function Xu(e,t,n){var r=md(t)?Qt("MapSet").F(t,n):gd(t)?Qt("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),l={i:a?1:0,A:i?i.A:Ku(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=l,u=ai;a&&(s=[l],u=Co);var d=Proxy.revocable(s,u),f=d.revoke,g=d.proxy;return l.k=g,l.j=f,g}(t,n):Qt("ES5").J(t,n);return(n?n.A:Ku()).p.push(r),r}function d2(e){return Dn(e)||It(22,e),function t(n){if(!ln(n))return n;var r,o=n[we],i=io(n);if(o){if(!o.P&&(o.i<4||!Qt("ES5").K(o)))return o.t;o.I=!0,r=lp(n,i),o.I=!1}else r=lp(n,i);return lr(r,function(a,l){o&&l2(o.t,a)===l||c0(r,a,t(l))}),i===3?new Set(r):r}(e)}function lp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return vd(e)}function f2(){function e(i,a){var l=o[i];return l?l.enumerable=a:o[i]=l={configurable:!0,enumerable:a,get:function(){var s=this[we];return ai.get(s,i)},set:function(s){var u=this[we];ai.set(u,i,s)}},l}function t(i){for(var a=i.length-1;a>=0;a--){var l=i[a][we];if(!l.P)switch(l.i){case 5:r(l)&&yn(l);break;case 4:n(l)&&yn(l)}}}function n(i){for(var a=i.t,l=i.k,s=Lr(l),u=s.length-1;u>=0;u--){var d=s[u];if(d!==we){var f=a[d];if(f===void 0&&!Nr(a,d))return!0;var g=l[d],m=g&&g[we];if(m?m.t!==f:!d0(g,f))return!0}}var v=!!a[we];return s.length!==Lr(a).length+(v?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var o={};u2("ES5",{J:function(i,a){var l=Array.isArray(i),s=function(d,f){if(d){for(var g=Array(f.length),m=0;m<f.length;m++)Object.defineProperty(g,""+m,e(m,!0));return g}var v=p0(f);delete v[we];for(var x=Lr(v),E=0;E<x.length;E++){var h=x[E];v[h]=e(h,d||!!v[h].enumerable)}return Object.create(Object.getPrototypeOf(f),v)}(l,i),u={i:l?5:4,A:a?a.A:Ku(),P:!1,I:!1,R:{},l:a,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,we,{value:u,writable:!0}),s},S:function(i,a,l){l?Dn(a)&&a[we].A===i&&t(i.p):(i.u&&function s(u){if(u&&typeof u=="object"){var d=u[we];if(d){var f=d.t,g=d.k,m=d.R,v=d.i;if(v===4)lr(g,function(y){y!==we&&(f[y]!==void 0||Nr(f,y)?m[y]||s(g[y]):(m[y]=!0,yn(d)))}),lr(f,function(y){g[y]!==void 0||Nr(g,y)||(m[y]=!1,yn(d))});else if(v===5){if(r(d)&&(yn(d),m.length=!0),g.length<f.length)for(var x=g.length;x<f.length;x++)m[x]=!1;else for(var E=f.length;E<g.length;E++)m[E]=!0;for(var h=Math.min(g.length,f.length),p=0;p<h;p++)g.hasOwnProperty(p)||(m[p]=!0),m[p]===void 0&&s(g[p])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var sp,ii,wd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",p2=typeof Map<"u",h2=typeof Set<"u",up=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",f0=wd?Symbol.for("immer-nothing"):((sp={})["immer-nothing"]=!0,sp),cp=wd?Symbol.for("immer-draftable"):"__$immer_draftable",we=wd?Symbol.for("immer-state"):"__$immer_state",m2=""+Object.prototype.constructor,Lr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,p0=Object.getOwnPropertyDescriptors||function(e){var t={};return Lr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ju={},ai={get:function(e,t){if(t===we)return e;var n=Qn(e);if(!Nr(n,t))return function(o,i,a){var l,s=ap(i,a);return s?"value"in s?s.value:(l=s.get)===null||l===void 0?void 0:l.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!ln(r)?r:r===Ps(e.t,t)?(Os(e),e.o[t]=Xu(e.A.h,r,e)):r},has:function(e,t){return t in Qn(e)},ownKeys:function(e){return Reflect.ownKeys(Qn(e))},set:function(e,t,n){var r=ap(Qn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Ps(Qn(e),t),i=o==null?void 0:o[we];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(d0(n,o)&&(n!==void 0||Nr(e.t,t)))return!0;Os(e),yn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ps(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Os(e),yn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Qn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){It(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){It(12)}},Co={};lr(ai,function(e,t){Co[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Co.deleteProperty=function(e,t){return Co.set.call(this,e,t,void 0)},Co.set=function(e,t,n){return ai.set.call(this,e[0],t,n,e[0])};var g2=function(){function e(n){var r=this;this.O=up,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var l=i;i=o;var s=r;return function(x){var E=this;x===void 0&&(x=l);for(var h=arguments.length,p=Array(h>1?h-1:0),y=1;y<h;y++)p[y-1]=arguments[y];return s.produce(x,function(S){var j;return(j=i).call.apply(j,[E,S].concat(p))})}}var u;if(typeof i!="function"&&It(6),a!==void 0&&typeof a!="function"&&It(7),ln(o)){var d=op(r),f=Xu(r,o,void 0),g=!0;try{u=i(f),g=!1}finally{g?Va(d):qu(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(x){return $s(d,a),_s(x,d)},function(x){throw Va(d),x}):($s(d,a),_s(u,d))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===f0&&(u=void 0),r.D&&yd(u,!0),a){var m=[],v=[];Qt("Patches").M(o,u,m,v),a(m,v)}return u}It(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var d=arguments.length,f=Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];return r.produceWithPatches(u,function(m){return o.apply(void 0,[m].concat(f))})};var a,l,s=r.produce(o,i,function(u,d){a=u,l=d});return typeof Promise<"u"&&s instanceof Promise?s.then(function(u){return[u,a,l]}):[s,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){ln(n)||It(8),Dn(n)&&(n=d2(n));var r=op(this),o=Xu(this,n,void 0);return o[we].C=!0,qu(r),o},t.finishDraft=function(n,r){var o=n&&n[we],i=o.A;return $s(i,r),_s(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!up&&It(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Qt("Patches").$;return Dn(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),ct=new g2,h0=ct.produce;ct.produceWithPatches.bind(ct);ct.setAutoFreeze.bind(ct);ct.setUseProxies.bind(ct);ct.applyPatches.bind(ct);ct.createDraft.bind(ct);ct.finishDraft.bind(ct);function li(e){"@babel/helpers - typeof";return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},li(e)}function v2(e,t){if(li(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(li(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y2(e){var t=v2(e,"string");return li(t)==="symbol"?t:String(t)}function x2(e,t,n){return t=y2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function fp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dp(Object(n),!0).forEach(function(r){x2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ve(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var pp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Rs=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ya={INIT:"@@redux/INIT"+Rs(),REPLACE:"@@redux/REPLACE"+Rs(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Rs()}};function w2(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function m0(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ve(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ve(1));return n(m0)(e,t)}if(typeof e!="function")throw new Error(Ve(2));var o=e,i=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(Ve(3));return i}function f(x){if(typeof x!="function")throw new Error(Ve(4));if(s)throw new Error(Ve(5));var E=!0;return u(),l.push(x),function(){if(E){if(s)throw new Error(Ve(6));E=!1,u();var p=l.indexOf(x);l.splice(p,1),a=null}}}function g(x){if(!w2(x))throw new Error(Ve(7));if(typeof x.type>"u")throw new Error(Ve(8));if(s)throw new Error(Ve(9));try{s=!0,i=o(i,x)}finally{s=!1}for(var E=a=l,h=0;h<E.length;h++){var p=E[h];p()}return x}function m(x){if(typeof x!="function")throw new Error(Ve(10));o=x,g({type:Ya.REPLACE})}function v(){var x,E=f;return x={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ve(11));function y(){p.next&&p.next(d())}y();var S=E(y);return{unsubscribe:S}}},x[pp]=function(){return this},x}return g({type:Ya.INIT}),r={dispatch:g,subscribe:f,getState:d,replaceReducer:m},r[pp]=v,r}function S2(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ya.INIT});if(typeof r>"u")throw new Error(Ve(12));if(typeof n(void 0,{type:Ya.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ve(13))})}function E2(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{S2(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var d=!1,f={},g=0;g<i.length;g++){var m=i[g],v=n[m],x=s[m],E=v(x,u);if(typeof E>"u")throw u&&u.type,new Error(Ve(14));f[m]=E,d=d||E!==x}return d=d||i.length!==Object.keys(s).length,d?f:s}}function Ga(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function j2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ve(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return i=Ga.apply(void 0,l)(o.dispatch),fp(fp({},o),{},{dispatch:i})}}}function g0(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var v0=g0();v0.withExtraArgument=g0;const hp=v0;var y0=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),T2=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(d){return s([u,d])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Jr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},C2=Object.defineProperty,b2=Object.defineProperties,k2=Object.getOwnPropertyDescriptors,mp=Object.getOwnPropertySymbols,$2=Object.prototype.hasOwnProperty,_2=Object.prototype.propertyIsEnumerable,gp=function(e,t,n){return t in e?C2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},In=function(e,t){for(var n in t||(t={}))$2.call(t,n)&&gp(e,n,t[n]);if(mp)for(var r=0,o=mp(t);r<o.length;r++){var n=o[r];_2.call(t,n)&&gp(e,n,t[n])}return e},Is=function(e,t){return b2(e,k2(t))},P2=function(e,t,n){return new Promise(function(r,o){var i=function(s){try{l(n.next(s))}catch(u){o(u)}},a=function(s){try{l(n.throw(s))}catch(u){o(u)}},l=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(i,a)};l((n=n.apply(e,t)).next())})},O2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ga:Ga.apply(null,arguments)};function R2(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function An(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return In(In({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var I2=function(e){y0(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Jr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Jr([void 0],n.concat(this))))},t}(Array),A2=function(e){y0(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Jr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Jr([void 0],n.concat(this))))},t}(Array);function Zu(e){return ln(e)?h0(e,function(){}):e}function M2(e){return typeof e=="boolean"}function N2(){return function(t){return L2(t)}}function L2(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new I2;return n&&(M2(n)?r.push(hp):r.push(hp.withExtraArgument(n.extraArgument))),r}var z2=!0;function D2(e){var t=N2(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,l=n.devTools,s=l===void 0?!0:l,u=n.preloadedState,d=u===void 0?void 0:u,f=n.enhancers,g=f===void 0?void 0:f,m;if(typeof o=="function")m=o;else if(R2(o))m=E2(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var x=j2.apply(void 0,v),E=Ga;s&&(E=O2(In({trace:!z2},typeof s=="object"&&s)));var h=new A2(x),p=h;Array.isArray(g)?p=Jr([x],g):typeof g=="function"&&(p=g(h));var y=E.apply(void 0,p);return m0(m,d,y)}function x0(e){var t={},n=[],r,o={addCase:function(i,a){var l=typeof i=="string"?i:i.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function F2(e){return typeof e=="function"}function U2(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?x0(t):[t,n,r],i=o[0],a=o[1],l=o[2],s;if(F2(e))s=function(){return Zu(e())};else{var u=Zu(e);s=function(){return u}}function d(f,g){f===void 0&&(f=s());var m=Jr([i[g.type]],a.filter(function(v){var x=v.matcher;return x(g)}).map(function(v){var x=v.reducer;return x}));return m.filter(function(v){return!!v}).length===0&&(m=[l]),m.reduce(function(v,x){if(x)if(Dn(v)){var E=v,h=x(E,g);return h===void 0?v:h}else{if(ln(v))return h0(v,function(p){return x(p,g)});var h=x(v,g);if(h===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return v},f)}return d.getInitialState=s,d}function B2(e,t){return e+"/"+t}function w0(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Zu(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},l={};o.forEach(function(d){var f=r[d],g=B2(t,d),m,v;"reducer"in f?(m=f.reducer,v=f.prepare):m=f,i[d]=m,a[g]=m,l[d]=v?An(g,v):An(g)});function s(){var d=typeof e.extraReducers=="function"?x0(e.extraReducers):[e.extraReducers],f=d[0],g=f===void 0?{}:f,m=d[1],v=m===void 0?[]:m,x=d[2],E=x===void 0?void 0:x,h=In(In({},g),a);return U2(n,function(p){for(var y in h)p.addCase(y,h[y]);for(var S=0,j=v;S<j.length;S++){var b=j[S];p.addMatcher(b.matcher,b.reducer)}E&&p.addDefaultCase(E)})}var u;return{name:t,reducer:function(d,f){return u||(u=s()),u(d,f)},actions:l,caseReducers:i,getInitialState:function(){return u||(u=s()),u.getInitialState()}}}var H2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",V2=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=H2[Math.random()*64|0];return t},W2=["name","message","stack","code"],As=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),vp=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Q2=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=W2;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=An(t+"/fulfilled",function(u,d,f,g){return{payload:u,meta:Is(In({},g||{}),{arg:f,requestId:d,requestStatus:"fulfilled"})}}),i=An(t+"/pending",function(u,d,f){return{payload:void 0,meta:Is(In({},f||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),a=An(t+"/rejected",function(u,d,f,g,m){return{payload:g,error:(r&&r.serializeError||Q2)(u||"Rejected"),meta:Is(In({},m||{}),{arg:f,requestId:d,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function s(u){return function(d,f,g){var m=r!=null&&r.idGenerator?r.idGenerator(u):V2(),v=new l,x;function E(p){x=p,v.abort()}var h=function(){return P2(this,null,function(){var p,y,S,j,b,T,$;return T2(this,function(_){switch(_.label){case 0:return _.trys.push([0,4,,5]),j=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:f,extra:g}),G2(j)?[4,j]:[3,2];case 1:j=_.sent(),_.label=2;case 2:if(j===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=new Promise(function(O,L){return v.signal.addEventListener("abort",function(){return L({name:"AbortError",message:x||"Aborted"})})}),d(i(m,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:m,arg:u},{getState:f,extra:g}))),[4,Promise.race([b,Promise.resolve(n(u,{dispatch:d,getState:f,extra:g,requestId:m,signal:v.signal,abort:E,rejectWithValue:function(O,L){return new As(O,L)},fulfillWithValue:function(O,L){return new vp(O,L)}})).then(function(O){if(O instanceof As)throw O;return O instanceof vp?o(O.payload,m,u,O.meta):o(O,m,u)})])];case 3:return S=_.sent(),[3,5];case 4:return T=_.sent(),S=T instanceof As?a(null,m,u,T.payload,T.meta):a(T,m,u),[3,5];case 5:return $=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,$||d(S),[2,S]}})})}();return Object.assign(h,{abort:E,requestId:m,arg:u,unwrap:function(){return h.then(Y2)}})}}return Object.assign(s,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Y2(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function G2(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Sd="listenerMiddleware";An(Sd+"/add");An(Sd+"/removeAll");An(Sd+"/remove");var yp;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);f2();const S0=w0({name:"modal",initialState:{modalType:"closed"},reducers:{contactModal:e=>{e.modalType="contact"},loginModal:e=>{e.modalType="login"},signupModal:e=>{e.modalType="signup"},closeModal:e=>{e.modalType="closed"}}}),{contactModal:E0,loginModal:K2,signupModal:q2,closeModal:X2}=S0.actions,J2=S0.reducer,Z2=C.div`
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

  background-color: ${w.colors.seasalt};

  @media (max-width: ${w.bp["x-small"]}) {
    height: 20px;
  }
`,eS=C(oo)`
  padding-left: 1rem;
  img {
    height: 40px;

    @media (max-width: ${w.bp["x-small"]}) {
      height: 30px;
    }
  }
`,tS=C.button`
  background: none;
  border: none;
  color: ${w.colors.raisinblack};
  font-size: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: ${w.bp.medium}) {
    display: block;
  }

  @media (max-width: ${w.bp["x-small"]}) {
    font-size: 30px;
  }
`,xp=C.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${w.bp.medium}) {
    display: ${({showMenu:e})=>e?"none":"flex"};
    flex-direction: column;
    position: absolute;
    top: 370px;
    left: 0;
    background-color: ${w.colors.white};
    width: 100%;
    padding: 10px;
    transform: ${({showMenu:e})=>e?"translateY(0)":"translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    top: 360px;
  }
`,Ft=C(oo)`
  display: flex;
  align-items: center;
  color: ${w.colors.raisinblack};
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
    border-bottom: 2px solid ${w.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${w.bp.large}) {
    font-size: 12px;
  }
`,mo=C.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${w.bp.large}) {
    padding: 0px 0px;
  }
`,wp=C.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,Vl=()=>{const[e,t]=k.useState(!1),n=Hl(),r=uw.useMediaQuery({maxWidth:w.bp.medium}),o=()=>{t(!e)},i=()=>{n(K2())},a=()=>{n(q2())};return c.jsxs(Z2,{children:[c.jsx(eS,{to:"/",children:c.jsx("img",{src:"assets/logotipo.svg",alt:"Logo Sintética"})}),r?c.jsxs(c.Fragment,{children:[c.jsx(tS,{onClick:o,children:e?"✕":"☰"}),e&&c.jsxs(xp,{children:[c.jsx(Ft,{to:"/VoiceCloning",children:"Voice Cloning"}),c.jsx(Ft,{to:"/Maintenance",children:"Experiencia TTS"}),c.jsx(Ft,{to:"/Maintenance",children:"AI & Salud"}),c.jsx(Ft,{to:"/Maintenance",children:"Investigación"}),c.jsx(Ft,{to:"/Maintenance",children:"Nosotros"}),c.jsxs(wp,{children:[c.jsx(Ba,{buttonText:"Login",handleClick:i}),c.jsx(Ha,{buttonText:"Signup",handleClick:a})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs(xp,{children:[c.jsx(Ft,{to:"/VoiceCloning",children:"Voice Cloning"}),c.jsx(mo,{children:" "}),c.jsx(Ft,{to:"/Maintenance",children:"Experiencia TTS"}),c.jsx(mo,{children:" "}),c.jsx(Ft,{to:"/Maintenance",children:"AI & Salud"}),c.jsx(mo,{children:" "}),c.jsx(Ft,{to:"/Maintenance",children:"Investigación"}),c.jsx(mo,{children:" "}),c.jsx(Ft,{to:"/Maintenance",children:"Nosotros"}),c.jsx(mo,{children:" "})]}),c.jsxs(wp,{children:[c.jsx(Ba,{buttonText:"Login",handleClick:i}),c.jsx(Ha,{buttonText:"Signup",handleClick:a})]})]})]})},nS=C.section`
  background-color: ${w.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  width: 100vw;

  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
`,rS=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;

  @media (max-width: ${w.bp.medium}) {
    width: 100vw;
  }
`,oS=C.img`
  width: 300px;
  @media (max-width: ${w.bp.small}) {
    width: 240px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 200px;
  }
`,iS=C.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 95px;
    color: ${w.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: ${w.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${w.bp.small}) {
    h1 {
      font-size: 80px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: ${w.bp["x-small"]}) {
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 18px;
    }
  }
`,aS=C.div`
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

  @media (max-width: ${w.bp.medium}) {
    width: 100vw;
    background-size: 98%;
    height: 40vh;
  }

  @media (max-width: ${w.bp["x-small"]}) {
    background-size: 130%;
  }
`,lS=C.h4`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: ${w.colors.raisinblack};

  @media (max-width: ${w.bp.large}) {
    font-size: 28px;
  }
  @media (max-width: ${w.bp.medium}) {
    font-size: 32px;
  }
  @media (max-width: ${w.bp.small}) {
    font-size: 28px;
  }

  @media (max-width: ${w.bp["x-small"]}) {
    font-size: 20px;
  }
`,sS=C.p`
  text-align: left;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${w.colors.platinum};
  padding: 30px 0px 30px 130px;
  justify-content: flex-end;

  @media (max-width: ${w.bp.large}) {
    padding: 10px 20px 10px 130px;
    font-size: 20px;
  }

  @media (max-width: ${w.bp.medium}) {
    font-size: 22px;
    padding: 30px 20px 30px 190px;
  }
  @media (max-width: ${w.bp.small}) {
    font-size: 22px;
  }

  @media (max-width: ${w.bp["x-small"]}) {
    padding: 20px 20px 20px 20px;
    font-size: 20px;
  }
`,uS=C.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${w.bp.medium}) {
    margin-right: 50px;
  }
`;function cS(){const e=Hl(),t=()=>{e(E0())};return c.jsxs(nS,{children:[c.jsxs(rS,{children:[c.jsx(oS,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),c.jsxs(iS,{children:[c.jsx("h1",{children:"Sintética"}),c.jsx("p",{children:"Laboratorio de voces"})]})]}),c.jsxs(aS,{children:[c.jsx(lS,{children:"Síntesis de voces potenciadas por AI"}),c.jsx(sS,{children:"Desde Argentina al mundo: líderes en el desarrollo de voces artificiales en nuestro idioma."}),c.jsx(uS,{children:c.jsx(Ba,{buttonText:"Contactanos",handleClick:t})})]})]})}const dS=C.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${w.bp.small}) {
    margin-top: 80px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    margin-top: 100px;
  }
`,fS=C.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${w.colors.lavenderfloral};
  background-color: ${w.colors.lavender};
`,pS=C.h4`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: ${w.colors.raisinblack};
  margin: 0;
  max-width: 90vw;
  padding: 15px 0px 70px 0px;
  @media (max-width: ${w.bp.small}) {
    font-size: 28px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    font-size: 24px;
  }
`,hS=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
`,Ms=C(oo)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 450px;
  width: 300px;
  background-color: ${w.colors.white};
  border-radius: 10px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);

  &.selected {
    background-color: ${w.colors.white};
  }

  img {
    width: 250px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${w.colors.gray};
    margin: 0;
    text-transform: uppercase;
  }
  &:hover {
    img {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @media (max-width: ${w.bp.medium}) {
    margin: 30px 0px;
    width: 400px;
  }

  @media (max-width: ${w.bp["x-small"]}) {
    margin: 30px 0px;
    width: 300px;
    height: 400px;
    h3 {
      font-size: 16px;
    }
  }
`;function mS(){return c.jsxs(dS,{children:[c.jsx(fS,{children:"Nuestros objetivos"}),c.jsx(pS,{children:"Queremos reducir la brecha tecnológica de las voces sintéticas en nuestro idioma"}),c.jsxs(hS,{children:[c.jsxs(Ms,{to:"/VoiceCloning",children:[c.jsx("img",{src:"assets/home/card1.svg",alt:"icon"}),c.jsx("h3",{children:"Sistemas entrenados en"}),c.jsx("h3",{children:"Español Latinoamericano"})]}),c.jsxs(Ms,{to:"/Maintenance",className:"selected",children:[c.jsx("img",{src:"assets/home/card2.svg",alt:"icon"}),c.jsx("h3",{children:"Inteligencia Artificial"}),c.jsx("h3",{children:"desarrollada desde la ética"})]}),c.jsxs(Ms,{to:"/Maintenance",children:[c.jsx("img",{src:"assets/home/card3.svg",alt:"icon"}),c.jsx("h3",{children:"Herramientas de impacto social"}),c.jsx("h3",{children:"Salud e Inclusión"})]})]})]})}var j0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sp=B.createContext&&B.createContext(j0),Mn=globalThis&&globalThis.__assign||function(){return Mn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Mn.apply(this,arguments)},gS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function T0(e){return e&&e.map(function(t,n){return B.createElement(t.tag,Mn({key:n},t.attr),T0(t.child))})}function Yt(e){return function(t){return B.createElement(vS,Mn({attr:Mn({},e.attr)},t),T0(e.child))}}function vS(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=gS(e,["attr","size","title"]),l=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),B.createElement("svg",Mn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Mn(Mn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&B.createElement("title",null,i),e.children)};return Sp!==void 0?B.createElement(Sp.Consumer,null,function(n){return t(n)}):t(j0)}function yS(e){return Yt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const xS=C(oo)`
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
  color: ${w.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${w.colors.electricindigo} 0%,
    ${w.colors.lavenderfloral} 100%
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
`,wS=C(oo)`
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
  color: ${w.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${w.colors.electricindigo} 0%,
    ${w.colors.lavenderfloral} 100%
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
`;function _r({to:e,buttonText:t,rightArrow:n}){return n?c.jsxs(wS,{to:e,children:[t,c.jsx(yS,{size:20})]}):c.jsx(xS,{to:e,children:t})}_r.propTypes={to:Z.string.isRequired,buttonText:Z.string,rightArrow:Z.bool};const SS=C.section`
  color: ${w.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${w.bp.large}) {
    padding-top: 100px;
  }
  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${w.bp.small}) {
    margin-top: 100px;
  }
`,ES=C.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
`,jS=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 400px;
  @media (max-width: ${w.bp.medium}) {
    width: 90%;
    height: 400px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 90%;
    height: 250px;
  }
`,TS=C.img`
  position: relative;
  width: 400px;
  @media (max-width: ${w.bp.large}) {
    width: 350px;
  }
  @media (max-width: ${w.bp.small}) {
    width: 90vw;
  }
`,CS=C.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  padding-left: 10%;

  @media (max-width: ${w.bp.large}) {
    width: 90%;
  }
  @media (max-width: ${w.bp.medium}) {
    width: 90%;
    padding: 0;
  }
`,bS=C.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${w.colors.lavenderfloral};
  background-color: ${w.colors.lavender};
`,kS=C.h3`
  font-size: 46px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${w.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: ${w.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`,$S=C.div`
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 20px 0px;
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${w.colors.gray};
    margin: 0;
  }
`,_S=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,Ni=C.div`
  display: flex;
  flex-direction: row;
  width: 60vw;

  padding-bottom: 20px;
  margin: 20px 0px;
  border: 2px solid ${w.colors.platinum};
  background-color: ${w.colors.seasalt};
  border-radius: 20px;
  padding: 15px;
  padding-top: 40px;

  @media (max-width: ${w.bp.large}) {
    width: 80vw;
  }

  @media (max-width: ${w.bp.small}) {
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
`,Li=C.img`
  width: 150px;
  height: 150px;
  padding-right: 15px;
  @media (max-width: ${w.bp.small}) {
    padding: 0;
  }
`,zi=C.div`
  display: flex;
  flex-direction: column;
`,Di=C.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${w.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`,Fi=C.p`
  font-size: 16px;
  line-height: 30px;
  color: ${w.colors.gray};
  padding-top: 3px;
  margin: 0;
`,Ui=C.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;function PS(){return c.jsxs(SS,{children:[c.jsx(bS,{children:"¿Qué es Sintética?"}),c.jsxs(ES,{children:[c.jsx(jS,{children:c.jsx(TS,{src:"assets/home/card5.svg",alt:"globos"})}),c.jsxs(CS,{children:[c.jsx(kS,{children:"Voces en Español Rioplatense"}),c.jsxs($S,{children:[c.jsx("p",{children:"Sintética es un laboratorio de síntesis de voces. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),c.jsx("p",{children:"Transformamos voces en posibilidades."})]})]})]}),c.jsxs(_S,{children:[c.jsxs(Ni,{children:[c.jsx(Li,{src:"assets/home/card4.svg",alt:"text-icon"}),c.jsxs(zi,{children:[c.jsx(Di,{children:"Text To Speech - Español Latinoamericano"}),c.jsx(Fi,{children:"Nuestra tecnología te ofrece una experiencia de conversión de texto a discurso única. Con acentos auténticos y entonaciones naturales tus proyectos, presentaciones y aplicaciones serán sobresalientes. Sumérgete en la nueva era del habla sintética y dale voz a tus ideas en tu propio idioma."}),c.jsx(Ui,{children:c.jsx(_r,{rightArrow:!0,to:"/Maintenance"})})]})]}),c.jsxs(Ni,{children:[c.jsx(Li,{src:"assets/voiceCloning/bannerVoice.svg",alt:"text-icon"}),c.jsxs(zi,{children:[c.jsx(Di,{children:"Voice Cloning - Español Latinoamericano"}),c.jsx(Fi,{children:"¿Te imaginas poder replicar cualquier voz? Con nuestro sistema podés hacerlo realidad. Experimenta la libertad de dar vida a tus proyectos con voces familiares o icónicas en español rioplatense."}),c.jsx(Ui,{children:c.jsx(_r,{rightArrow:!0,to:"/VoiceCloning"})})]})]}),c.jsxs(Ni,{children:[c.jsx(Li,{src:"assets/home/card6.svg",alt:"text-icon"}),c.jsxs(zi,{children:[c.jsx(Di,{children:"AI al servicio de la salud y la inclusión"}),c.jsx(Fi,{children:"Nuestra clonación de voz es la herramienta que cambiará vidas, brindando independencia a través del habla sintética personalizada. Explora cómo estamos redefiniendo la comunicación inclusiva."}),c.jsx(Ui,{children:c.jsx(_r,{rightArrow:!0,to:"/Maintenance"})})]})]}),c.jsxs(Ni,{children:[c.jsx(Li,{src:"assets/home/card7.svg",alt:"text-icon"}),c.jsxs(zi,{children:[c.jsx(Di,{children:"Toolkit para voces"}),c.jsx(Fi,{children:"Nuestro toolkit te brinda el control completo sobre tus archivos de audio, desde el inicio hasta el final. ¿Necesitas dividir automáticamente pistas largas? Hecho. ¿No cuentas con transcripciones? No hay problema. ¿Buscas validar transcripciones con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes idiomas? Lo hacemos posible."}),c.jsx(Ui,{children:c.jsx(_r,{rightArrow:!0,to:"/Maintenance"})})]})]})]})]})}const si={_origin:"https://api.emailjs.com"},OS=(e,t="https://api.emailjs.com")=>{si._userID=e,si._origin=t},C0=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ep{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const b0=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const l=new Ep(a);l.status===200||l.text==="OK"?r(l):o(l)}),i.addEventListener("error",({target:a})=>{o(new Ep(a))}),i.open("POST",si._origin+e,!0),Object.keys(n).forEach(a=>{i.setRequestHeader(a,n[a])}),i.send(t)}),RS=(e,t,n,r)=>{const o=r||si._userID;return C0(o,e,t),b0("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},IS=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},AS=(e,t,n,r)=>{const o=r||si._userID,i=IS(n);C0(o,e,t);const a=new FormData(i);return a.append("lib_version","3.11.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",o),b0("/api/v1.0/email/send-form",a)},Wl={init:OS,send:RS,sendForm:AS};function k0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=k0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function En(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=k0(e))&&(r&&(r+=" "),r+=t);return r}const Lo=e=>typeof e=="number"&&!isNaN(e),sr=e=>typeof e=="string",tt=e=>typeof e=="function",ca=e=>sr(e)||tt(e)?e:null,Ns=e=>k.isValidElement(e)||sr(e)||tt(e)||Lo(e);function MS(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Ql(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(a){let{children:l,position:s,preventExitTransition:u,done:d,nodeRef:f,isIn:g}=a;const m=r?`${t}--${s}`:t,v=r?`${n}--${s}`:n,x=k.useRef(0);return k.useLayoutEffect(()=>{const E=f.current,h=m.split(" "),p=y=>{y.target===f.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",p),E.removeEventListener("animationcancel",p),x.current===0&&y.type!=="animationcancel"&&E.classList.remove(...h))};E.classList.add(...h),E.addEventListener("animationend",p),E.addEventListener("animationcancel",p)},[]),k.useEffect(()=>{const E=f.current,h=()=>{E.removeEventListener("animationend",h),o?MS(E,d,i):d()};g||(u?h():(x.current=1,E.className+=` ${v}`,E.addEventListener("animationend",h)))},[g]),B.createElement(B.Fragment,null,l)}}function jp(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const xt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Bi=e=>{let{theme:t,type:n,...r}=e;return B.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Ls={info:function(e){return B.createElement(Bi,{...e},B.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return B.createElement(Bi,{...e},B.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return B.createElement(Bi,{...e},B.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return B.createElement(Bi,{...e},B.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return B.createElement("div",{className:"Toastify__spinner"})}};function NS(e){const[,t]=k.useReducer(m=>m+1,0),[n,r]=k.useState([]),o=k.useRef(null),i=k.useRef(new Map).current,a=m=>n.indexOf(m)!==-1,l=k.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:m=>i.get(m)}).current;function s(m){let{containerId:v}=m;const{limit:x}=l.props;!x||v&&l.containerId!==v||(l.count-=l.queue.length,l.queue=[])}function u(m){r(v=>m==null?[]:v.filter(x=>x!==m))}function d(){const{toastContent:m,toastProps:v,staleId:x}=l.queue.shift();g(m,v,x)}function f(m,v){let{delay:x,staleId:E,...h}=v;if(!Ns(m)||function(D){return!o.current||l.props.enableMultiContainer&&D.containerId!==l.props.containerId||i.has(D.toastId)&&D.updateId==null}(h))return;const{toastId:p,updateId:y,data:S}=h,{props:j}=l,b=()=>u(p),T=y==null;T&&l.count++;const $={...j,style:j.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(h).filter(D=>{let[z,X]=D;return X!=null})),toastId:p,updateId:y,data:S,closeToast:b,isIn:!1,className:ca(h.className||j.toastClassName),bodyClassName:ca(h.bodyClassName||j.bodyClassName),progressClassName:ca(h.progressClassName||j.progressClassName),autoClose:!h.isLoading&&(_=h.autoClose,O=j.autoClose,_===!1||Lo(_)&&_>0?_:O),deleteToast(){const D=jp(i.get(p),"removed");i.delete(p),xt.emit(4,D);const z=l.queue.length;if(l.count=p==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),z>0){const X=p==null?l.props.limit:1;if(z===1||X===1)l.displayedToast++,d();else{const ve=X>z?z:X;l.displayedToast=ve;for(let oe=0;oe<ve;oe++)d()}}else t()}};var _,O;$.iconOut=function(D){let{theme:z,type:X,isLoading:ve,icon:oe}=D,de=null;const I={theme:z,type:X};return oe===!1||(tt(oe)?de=oe(I):k.isValidElement(oe)?de=k.cloneElement(oe,I):sr(oe)||Lo(oe)?de=oe:ve?de=Ls.spinner():(F=>F in Ls)(X)&&(de=Ls[X](I))),de}($),tt(h.onOpen)&&($.onOpen=h.onOpen),tt(h.onClose)&&($.onClose=h.onClose),$.closeButton=j.closeButton,h.closeButton===!1||Ns(h.closeButton)?$.closeButton=h.closeButton:h.closeButton===!0&&($.closeButton=!Ns(j.closeButton)||j.closeButton);let L=m;k.isValidElement(m)&&!sr(m.type)?L=k.cloneElement(m,{closeToast:b,toastProps:$,data:S}):tt(m)&&(L=m({closeToast:b,toastProps:$,data:S})),j.limit&&j.limit>0&&l.count>j.limit&&T?l.queue.push({toastContent:L,toastProps:$,staleId:E}):Lo(x)?setTimeout(()=>{g(L,$,E)},x):g(L,$,E)}function g(m,v,x){const{toastId:E}=v;x&&i.delete(x);const h={content:m,props:v};i.set(E,h),r(p=>[...p,E].filter(y=>y!==x)),xt.emit(4,jp(h,h.props.updateId==null?"added":"updated"))}return k.useEffect(()=>(l.containerId=e.containerId,xt.cancelEmit(3).on(0,f).on(1,m=>o.current&&u(m)).on(5,s).emit(2,l),()=>{i.clear(),xt.emit(3,l)}),[]),k.useEffect(()=>{l.props=e,l.isToastActive=a,l.displayedToast=n.length}),{getToastToRender:function(m){const v=new Map,x=Array.from(i.values());return e.newestOnTop&&x.reverse(),x.forEach(E=>{const{position:h}=E.props;v.has(h)||v.set(h,[]),v.get(h).push(E)}),Array.from(v,E=>m(E[0],E[1]))},containerRef:o,isToastActive:a}}function Tp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Cp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function LS(e){const[t,n]=k.useState(!1),[r,o]=k.useState(!1),i=k.useRef(null),a=k.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=k.useRef(e),{autoClose:s,pauseOnHover:u,closeToast:d,onClick:f,closeOnClick:g}=e;function m(S){if(e.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",h),document.addEventListener("mouseup",p),document.addEventListener("touchmove",h),document.addEventListener("touchend",p);const j=i.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=j.getBoundingClientRect(),j.style.transition="",a.x=Tp(S.nativeEvent),a.y=Cp(S.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=j.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=j.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(S){if(a.boundingRect){const{top:j,bottom:b,left:T,right:$}=a.boundingRect;S.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=T&&a.x<=$&&a.y>=j&&a.y<=b?E():x()}}function x(){n(!0)}function E(){n(!1)}function h(S){const j=i.current;a.canDrag&&j&&(a.didMove=!0,t&&E(),a.x=Tp(S),a.y=Cp(S),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),j.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,j.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function p(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",p);const S=i.current;if(a.canDrag&&a.didMove&&S){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),void e.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${e.draggableDirection}(0)`,S.style.opacity="1"}}k.useEffect(()=>{l.current=e}),k.useEffect(()=>(i.current&&i.current.addEventListener("d",x,{once:!0}),tt(e.onOpen)&&e.onOpen(k.isValidElement(e.children)&&e.children.props),()=>{const S=l.current;tt(S.onClose)&&S.onClose(k.isValidElement(S.children)&&S.children.props)}),[]),k.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",x),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);const y={onMouseDown:m,onTouchStart:m,onMouseUp:v,onTouchEnd:v};return s&&u&&(y.onMouseEnter=E,y.onMouseLeave=x),g&&(y.onClick=S=>{f&&f(S),a.canCloseOnClick&&d()}),{playToast:x,pauseToast:E,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:y}}function $0(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return B.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},B.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},B.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function zS(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:a,style:l,controlledProgress:s,progress:u,rtl:d,isIn:f,theme:g}=e;const m=i||s&&u===0,v={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};s&&(v.transform=`scaleX(${u})`);const x=En("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),E=tt(a)?a({rtl:d,type:o,defaultClassName:x}):En(x,a);return B.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:E,style:v,[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{f&&r()}})}const DS=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=LS(e),{closeButton:i,children:a,autoClose:l,onClick:s,type:u,hideProgressBar:d,closeToast:f,transition:g,position:m,className:v,style:x,bodyClassName:E,bodyStyle:h,progressClassName:p,progressStyle:y,updateId:S,role:j,progress:b,rtl:T,toastId:$,deleteToast:_,isIn:O,isLoading:L,iconOut:D,closeOnClick:z,theme:X}=e,ve=En("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":z}),oe=tt(v)?v({rtl:T,position:m,type:u,defaultClassName:ve}):En(ve,v),de=!!b||!l,I={closeToast:f,type:u,theme:X};let F=null;return i===!1||(F=tt(i)?i(I):k.isValidElement(i)?k.cloneElement(i,I):$0(I)),B.createElement(g,{isIn:O,done:_,position:m,preventExitTransition:n,nodeRef:r},B.createElement("div",{id:$,onClick:s,className:oe,...o,style:x,ref:r},B.createElement("div",{...O&&{role:j},className:tt(E)?E({type:u}):En("Toastify__toast-body",E),style:h},D!=null&&B.createElement("div",{className:En("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},D),B.createElement("div",null,a)),F,B.createElement(zS,{...S&&!de?{key:`pb-${S}`}:{},rtl:T,theme:X,delay:l,isRunning:t,isIn:O,closeToast:f,hide:d,type:u,style:y,className:p,controlledProgress:de,progress:b||0})))},Yl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},FS=Ql(Yl("bounce",!0));Ql(Yl("slide",!0));Ql(Yl("zoom"));Ql(Yl("flip"));const Ka=k.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=NS(e),{className:i,style:a,rtl:l,containerId:s}=e;function u(d){const f=En("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":l});return tt(i)?i({position:d,rtl:l,defaultClassName:f}):En(f,ca(i))}return k.useEffect(()=>{t&&(t.current=r.current)},[]),B.createElement("div",{ref:r,className:"Toastify",id:s},n((d,f)=>{const g=f.length?{...a}:{...a,pointerEvents:"none"};return B.createElement("div",{className:u(d),style:g,key:`container-${d}`},f.map((m,v)=>{let{content:x,props:E}=m;return B.createElement(DS,{...E,isIn:o(E.toastId),style:{...E.style,"--nth":v+1,"--len":f.length},key:`toast-${E.key}`},x)}))}))});Ka.displayName="ToastContainer",Ka.defaultProps={position:"top-right",transition:FS,autoClose:5e3,closeButton:$0,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let zs,Yn=new Map,bo=[],US=1;function _0(){return""+US++}function BS(e){return e&&(sr(e.toastId)||Lo(e.toastId))?e.toastId:_0()}function zo(e,t){return Yn.size>0?xt.emit(0,e,t):bo.push({content:e,options:t}),t.toastId}function qa(e,t){return{...t,type:t&&t.type||e,toastId:BS(t)}}function Hi(e){return(t,n)=>zo(t,qa(e,n))}function H(e,t){return zo(e,qa("default",t))}H.loading=(e,t)=>zo(e,qa("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),H.promise=function(e,t,n){let r,{pending:o,error:i,success:a}=t;o&&(r=sr(o)?H.loading(o,n):H.loading(o.render,{...n,...o}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(d,f,g)=>{if(f==null)return void H.dismiss(r);const m={type:d,...l,...n,data:g},v=sr(f)?{render:f}:f;return r?H.update(r,{...m,...v}):H(v.render,{...m,...v}),g},u=tt(e)?e():e;return u.then(d=>s("success",a,d)).catch(d=>s("error",i,d)),u},H.success=Hi("success"),H.info=Hi("info"),H.error=Hi("error"),H.warning=Hi("warning"),H.warn=H.warning,H.dark=(e,t)=>zo(e,qa("default",{theme:"dark",...t})),H.dismiss=e=>{Yn.size>0?xt.emit(1,e):bo=bo.filter(t=>e!=null&&t.options.toastId!==e)},H.clearWaitingQueue=function(e){return e===void 0&&(e={}),xt.emit(5,e)},H.isActive=e=>{let t=!1;return Yn.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},H.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const a=Yn.get(i||zs);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:_0()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,zo(a,i)}},0)},H.done=e=>{H.update(e,{progress:1})},H.onChange=e=>(xt.on(4,e),()=>{xt.off(4,e)}),H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},xt.on(2,e=>{zs=e.containerId||e,Yn.set(zs,e),bo.forEach(t=>{xt.emit(0,t.content,t.options)}),bo=[]}).on(3,e=>{Yn.delete(e.containerId||e),Yn.size===0&&xt.off(0).off(1).off(5)});const HS=C.section`
  background: none;
  color: ${w.colors.gray};
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

  @media (max-width: ${w.bp.large}) {
    background-size: 30%;
  }
`,VS=C.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${w.colors.lavenderfloral};
  background-color: ${w.colors.lavender};
`,WS=C.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${w.colors.raisinblack};
  font-size: 45px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 30px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${w.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`,QS=C.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  gap: 10px;
  margin-bottom: 20px;
  background-color: ${w.colors.white};
  border-radius: 25px;

  @media (max-width: ${w.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
`,bp=C.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${w.colors.platinum};
  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${w.bp.medium}) {
    width: 85vw;
  }
`,kp=C.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`,$p=C.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${w.colors.raisinblack};

  @media (max-width: ${w.bp["x-small"]}) {
    display: none;
  }
`,_p=C.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${w.colors.gray};
`,Pp=C.img`
  align-items: flex-start;
  width: 50px;
`,YS=C.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${w.colors.platinum};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 50px;
  column-gap: 20px;
  background-color: ${w.colors.white};

  @media (max-width: ${w.bp.large}) {
    width: 90vw;
  }
`,GS=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Vi=C.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${w.colors.platinum};
  color: ${w.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${w.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${w.colors.platinum};
  }
`,KS=C.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${w.colors.platinum};
  color: ${w.colors.onyx};
  padding: 10px 15px;
  @media (max-width: ${w.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${w.colors.platinum};
  }
`,qS=C.button`
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
  color: ${w.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${w.colors.electricindigo} 0%,
    ${w.colors.lavenderfloral} 100%
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
`;Wl.init({}.VITE_EMAILJS_USER_ID);function Ed(){const e=k.useRef(),[t,n]=k.useState({}),[r,o]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},a=(u,d)=>{u.preventDefault();const f={},g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;d.name||(f.name="Por favor, completa tu nombre",H.error(f.name)),d.email?g.test(d.email)||(f.email="El formato del email no es valido",H.error(f.email)):(f.email="Por favor, completa tu email",H.error(f.email)),d.message||(f.message="Por favor, contanos cómo podemos ayudarte",H.error(f.message)),d.phone||(f.phone="Por favor, completa tu teléfono",H.error(f.phone)),d.subject||(f.subject="Por favor, escribe un asunto",H.error(f.subject)),d.message.length<8&&(f.message="Por favor, completa el mensaje con al menos 8 caracteres",H.error(f.message)),d.message.length>200&&(f.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",H.error(f.message)),n(f),Object.keys(f).length===0&&l()},l=()=>{const{name:u,email:d,phone:f,subject:g,message:m}=r;H.info("Enviando mensaje"),Wl.send({}.VITE_EMAILJS_SERVICE_ID,{}.VITE_EMAILJS_TEMPLATE_ID,{name:u,email:d,message:m,phone:f,subject:g},{}.VITE_EMAILJS_USER_ID).then(v=>{console.log(v.text),H.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},v=>{console.log(v.text),H.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),s()},s=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return c.jsxs(HS,{children:[c.jsx(VS,{children:"Contacto"}),c.jsx(WS,{children:"Dejanos tu consulta"}),c.jsxs(QS,{children:[c.jsxs(bp,{href:"tel:+61383766284",children:[c.jsx(Pp,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),c.jsxs(kp,{children:[c.jsx($p,{children:"Llamanos"}),c.jsx(_p,{children:"+54 9 11 5 739 7834"})]})]}),c.jsxs(bp,{href:"info@mecantronic.com.ar",children:[c.jsx(Pp,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),c.jsxs(kp,{children:[c.jsx($p,{children:"Escribinos"}),c.jsx(_p,{children:"info@mecantronic.com.ar"})]})]})]}),c.jsxs(YS,{ref:e,onSubmit:u=>a(u,r),children:[c.jsx(Vi,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),c.jsx(Vi,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),c.jsx(Vi,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),c.jsx(Vi,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),c.jsx(KS,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),c.jsx(GS,{children:c.jsx(qS,{type:"submit",children:"Enviar mensaje"})})]}),c.jsx(Ka,{position:"bottom-right"})]})}const XS=C.section`
  background: none;
  color: ${w.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  background-image: url("assets/backgrounds/Background2.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${w.bp.large}) {
    background-size: 30%;
  }
`,JS=C.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${w.colors.raisinblack};
  font-size: 30px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 0 0 10px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${w.bp.small}) {
    line-height: 44px;
    font-size: 24px;
    padding: 10px 0;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    line-height: 30px;
    font-size: 20px;
    padding: 5px 0;
  }
`,ZS=C.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;

  gap: 10px;
  margin-bottom: 20px;
  border-radius: 25px;

  @media (max-width: ${w.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
`,Op=C.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${w.colors.platinum};
  background-color: ${w.colors.white};

  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${w.bp.medium}) {
    width: 85vw;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    height: 50px;
    width: 80vw;
  }
`,Rp=C.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`,Ip=C.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${w.colors.raisinblack};

  @media (max-width: ${w.bp["x-small"]}) {
    display: none;
  }
`,Ap=C.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${w.colors.gray};
`,Mp=C.img`
  align-items: flex-start;
  width: 50px;
  @media (max-width: ${w.bp["x-small"]}) {
    width: 30px;
  }
`,eE=C.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${w.colors.platinum};
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  row-gap: 20px;
  column-gap: 20px;
  background-color: ${w.colors.white};

  @media (max-width: ${w.bp.large}) {
    width: 90vw;
    row-gap: 30px;
  }
  @media (max-width: ${w.bp.medium}) {
    row-gap: 20px;
  }
  @media (max-width: ${w.bp.small}) {
    row-gap: 20px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    row-gap: 10px;
  }
`,tE=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Wi=C.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${w.colors.platinum};
  color: ${w.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${w.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 80%;
    height: 30px;
  }

  &::placeholder {
    opacity: 1;
    color: ${w.colors.platinum};
  }
`,nE=C.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${w.colors.platinum};
  color: ${w.colors.onyx};
  padding: 10px 15px;

  @media (max-width: ${w.bp["x-small"]}) {
    width: 80%;
  }

  &::placeholder {
    opacity: 1;
    color: ${w.colors.platinum};
  }
`,rE=C.button`
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
  color: ${w.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${w.colors.electricindigo} 0%,
    ${w.colors.lavenderfloral} 100%
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
`;Wl.init({}.VITE_EMAILJS_USER_ID);function jd(){const e=k.useRef(),[t,n]=k.useState({}),[r,o]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},a=(u,d)=>{u.preventDefault();const f={},g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;d.name||(f.name="Por favor, completa tu nombre",H.error(f.name)),d.email?g.test(d.email)||(f.email="El formato del email no es valido",H.error(f.email)):(f.email="Por favor, completa tu email",H.error(f.email)),d.message||(f.message="Por favor, contanos cómo podemos ayudarte",H.error(f.message)),d.phone||(f.phone="Por favor, completa tu teléfono",H.error(f.phone)),d.subject||(f.subject="Por favor, escribe un asunto",H.error(f.subject)),d.message.length<8&&(f.message="Por favor, completa el mensaje con al menos 8 caracteres",H.error(f.message)),d.message.length>200&&(f.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",H.error(f.message)),n(f),Object.keys(f).length===0&&l()},l=()=>{const{name:u,email:d,phone:f,subject:g,message:m}=r;H.info("Enviando mensaje"),Wl.send({}.VITE_EMAILJS_SERVICE_ID,{}.VITE_EMAILJS_TEMPLATE_ID,{name:u,email:d,message:m,phone:f,subject:g},{}.VITE_EMAILJS_USER_ID).then(v=>{console.log(v.text),H.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},v=>{console.log(v.text),H.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),s()},s=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return c.jsxs(XS,{children:[c.jsx(JS,{children:"Dejanos tu consulta"}),c.jsxs(ZS,{children:[c.jsxs(Op,{href:"tel:+61383766284",children:[c.jsx(Mp,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),c.jsxs(Rp,{children:[c.jsx(Ip,{children:"Llamanos"}),c.jsx(Ap,{children:"+54 9 11 5 739 7834"})]})]}),c.jsxs(Op,{href:"info@mecantronic.com.ar",children:[c.jsx(Mp,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),c.jsxs(Rp,{children:[c.jsx(Ip,{children:"Escribinos"}),c.jsx(Ap,{children:"info@mecantronic.com.ar"})]})]})]}),c.jsxs(eE,{ref:e,onSubmit:u=>a(u,r),children:[c.jsx(Wi,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),c.jsx(Wi,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),c.jsx(Wi,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),c.jsx(Wi,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),c.jsx(nE,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),c.jsx(tE,{children:c.jsx(rE,{type:"submit",children:"Enviar mensaje"})})]}),c.jsx(Ka,{position:"bottom-right"})]})}function ec(e){return Yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Np(e){return Yt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}}]})(e)}function oE(e){return Yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function tc(e){return Yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function Lp(e){return Yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function zp(e){return Yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function iE(e){return Yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function Qi(e){return Yt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function aE(e){return Yt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"}}]})(e)}const lE=C.div`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: ${w.colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${w.colors.electricindigo},
      ${w.colors.lavenderfloral}
    );
    z-index: 6;
    transform: translateX(
      ${e=>e.formType==="login"?"100%":"0"}
    );
    transition: 1s ease-in-out;
  }

  @media (max-width: ${w.bp.small}) {
    width: 95vw;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    height: 95vh;
    &::before {
      display: none;
    }
  }
`,sE=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`,uE=C.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: 1;
  opacity: ${e=>e.formType==="login"?"1":"0"};
  @media (max-width: ${w.bp["x-small"]}) {
    display: ${e=>e.formType==="login"?"flex":"none"};
    width: 80%;
  }
`,cE=C.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: ${e=>e.formType==="login"?"0":"1"};
  @media (max-width: ${w.bp["x-small"]}) {
    display: ${e=>e.formType==="login"?"none":"flex"};
    width: 80%;
  }
`,Dp=C.h2`
  font-size: 35px;
  color: ${w.colors.electricindigo};
  margin-bottom: 10px;
`,Fp=C.p`
  display: none;
  @media (max-width: ${w.bp["x-small"]}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    a {
      text-decoration: none;
      color: ${w.colors.electricindigo};
    }
  }
`,cn=C.i`
  flex: 1;
  text-align: center;
  color: ${w.colors.gray};
  font-size: 16px;
`,dn=C.div`
  width: 100%;
  height: 40px;
  background: ${w.colors.white};
  margin: 10px 0;
  border: 2px solid ${w.colors.platinum};
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
    color: ${w.colors.onyx};
  }
  @media (max-width: ${w.bp["x-small"]}) {
    height: 30px;
  }
`,Up=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Bp=C.button`
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
  color: ${w.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${w.colors.electricindigo} 0%,
    ${w.colors.lavenderfloral} 100%
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
`,Hp=C.p`
  margin: 10px 0;
  font-size: 16px;
`,Vp=C.div`
  display: flex;
  justify-content: center;
`,fn=C.a`
  text-decoration: none;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${w.colors.raisinblack};
  border: 1px solid ${w.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${w.colors.electricindigo};
    border-color: ${w.colors.electricindigo};
  }
`,dE=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${w.bp["x-small"]}) {
    display: none;
  }
`,fE=C.div`
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
    ${e=>e.formType==="login"?"-200%":"0"}
  );
  pointer-events: ${e=>e.formType==="login"?"none":"all"};
`,pE=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  min-width: 238px;
  padding: 0 10px;
  text-align: center;
  z-index: 6;
  pointer-events: ${e=>e.formType==="login"?"all":"none"};
  transform: translateX(
    ${e=>e.formType==="login"?"0":"200%"}
  );
`,Wp=C.div`
  color: ${w.colors.white};
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
`,Qp=C.button`
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
  color: ${w.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: ${w.colors.onyx};
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
`;function nc({initialType:e="login"}){const[t,n]=k.useState(e),r=()=>{if(t==="login"){n("signup");return}if(t==="signup"){n("login");return}};return c.jsxs(lE,{formType:t,children:[c.jsxs(sE,{children:[c.jsxs(uE,{action:"",formType:t,children:[c.jsx(Dp,{children:"Log In"}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(Qi,{})}),c.jsx("input",{type:"text",placeholder:"Email"})]}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(zp,{})}),c.jsx("input",{type:"password",placeholder:"Contraseña"})]}),c.jsx(Up,{children:c.jsx(Bp,{type:"submit",value:"Login",children:"Ingresar"})}),c.jsx(Hp,{children:"O iniciá sesión con"}),c.jsxs(Vp,{children:[c.jsx(fn,{href:"#",children:c.jsx(ec,{})}),c.jsx(fn,{href:"",children:c.jsx(Lp,{})}),c.jsx(fn,{href:"",children:c.jsx(Np,{})}),c.jsx(fn,{href:"",children:c.jsx(tc,{})})]}),c.jsxs(Fp,{children:["¿No tienes una cuenta? ","",c.jsx("a",{href:"#",onClick:r,id:"sign-up-btn2",children:"Registrarse"})]})]}),c.jsxs(cE,{action:"",formType:t,children:[c.jsx(Dp,{children:"Registro"}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(Qi,{})}),c.jsx("input",{type:"text",placeholder:"Nombre"})]}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(Qi,{})}),c.jsx("input",{type:"text",placeholder:"Apellido"})]}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(iE,{})}),c.jsx("input",{type:"text",placeholder:"Teléfono"})]}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(Qi,{})}),c.jsx("input",{type:"text",placeholder:"Usuario"})]}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(aE,{})}),c.jsx("input",{type:"text",placeholder:"Email"})]}),c.jsxs(dn,{children:[c.jsx(cn,{children:c.jsx(zp,{})}),c.jsx("input",{type:"password",placeholder:"Contraseña"})]}),c.jsx(Up,{children:c.jsx(Bp,{type:"submit",value:"Sign up",children:"Registrarse"})}),c.jsx(Hp,{children:"O registrate con"}),c.jsxs(Vp,{children:[c.jsx(fn,{href:"#",children:c.jsx(ec,{})}),c.jsx(fn,{href:"",children:c.jsx(Lp,{})}),c.jsx(fn,{href:"",children:c.jsx(Np,{})}),c.jsx(fn,{href:"",children:c.jsx(tc,{})})]}),c.jsxs(Fp,{children:["¿ Ya tienes una cuenta? ","",c.jsx("a",{href:"#",onClick:r,id:"sign-in-btn2",children:"Ingresar"})]})]})]}),c.jsxs(dE,{children:[c.jsxs(fE,{formType:t,children:[c.jsxs(Wp,{children:[c.jsx("h3",{children:"¿Ya tenés una cuenta?"}),c.jsx("p",{children:"Iniciá sesión para disfrutar de nuestros servicios"}),c.jsx(Qp,{onClick:r,children:"Ingresar"})]}),c.jsx("img",{src:"signin.svg",alt:""})]}),c.jsxs(pE,{formType:t,children:[c.jsxs(Wp,{children:[c.jsx("h3",{children:"¿No tenés una cuenta?"}),c.jsx("p",{children:"Sería un placer que formes parte de Sintética. Registrate acá para disfrutar nuestros servicios"}),c.jsx(Qp,{onClick:r,children:"Registrarse"})]}),c.jsx("img",{src:"signup.svg",alt:""})]})]})]})}nc.propTypes={initialType:Z.oneOf(["login","signup"])};const hE=C.div`
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
`,mE=C.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`,gE=C.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${w.colors.onyx};
  z-index: 12;
`,Td=()=>{const e=Hl(),t=r0(o=>o.modal.modalType),n=()=>{e(X2())};let r;switch(t){case"contact":r=c.jsx(jd,{});break;case"login":r=c.jsx(nc,{initialType:"login"});break;case"signup":r=c.jsx(nc,{initialType:"signup"});break;default:r=c.jsx(c.Fragment,{})}return t==="closed"?c.jsx(c.Fragment,{}):c.jsx(hE,{children:c.jsxs(mE,{children:[c.jsx(gE,{onClick:n,children:"x"}),r]})})},vE=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`,yE=C.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`,xE=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: ${w.colors.seasalt};
`,wE=C.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,SE=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;

  @media (max-width: ${w.bp.large}) {
    width: 992px;
  }
  @media (max-width: ${w.bp.medium}) {
    width: 767px;
  }
  @media (max-width: ${w.bp.small}) {
    width: 576px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`,EE=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 138px;
  margin-right: 0px;

  @media (max-width: ${w.bp.large}) {
    width: 113px;
  }
  @media (max-width: ${w.bp.small}) {
    display: none;
  }
`,jE=C.img`
  width: 110px;

  @media (max-width: ${w.bp.large}) {
    width: 90px;
  }
`,TE=C.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 32px;
    color: ${w.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 9px;
    font-weight: 700;
    color: ${w.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${w.bp.large}) {
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 8px;
    }
  }
`,CE=C.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    height: 100%;
  }
`,bE=C.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`,kE=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${w.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${w.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${w.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
  }
`,Ds=C.h5`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px 0;
  margin: 0;

  @media (max-width: ${w.bp.small}) {
    font-size: 16px;
    line-height: 16px;
  }
`,go=C(oo)`
  display: flex;
  color: ${w.colors.raisinblack};
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
    border-bottom: 2px solid ${w.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${w.bp.small}) {
    font-size: 12px;
    line-height: 12px;
  }
`,Fs=C.a`
  display: flex;
  color: ${w.colors.raisinblack};
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
    border-bottom: 2px solid ${w.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${w.bp.large}) {
    font-size: 12px;
  }
  @media (max-width: ${w.bp.small}) {
    font-size: 12px !important;
    line-height: 12px !important;
  }
`,$E=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${w.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${w.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${w.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
  }
`,_E=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;

  p {
    margin: 0;
  }

  @media (max-width: ${w.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${w.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${w.bp.small}) {
    p {
      font-size: 12px;
      line-height: 12px;
    }
  }
  @media (max-width: ${w.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
  }
`,PE=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,Us=C.a`
  text-decoration: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${w.colors.raisinblack};
  border: 1px solid ${w.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${w.colors.electricindigo};
    border-color: ${w.colors.electricindigo};
  }
`,OE=C.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${w.colors.gray};
  @media (max-width: ${w.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`;function Gl(){return c.jsx(xE,{children:c.jsxs(wE,{children:[c.jsxs(SE,{children:[c.jsxs(EE,{children:[c.jsx(jE,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),c.jsxs(TE,{children:[c.jsx("h1",{children:"Sintética"}),c.jsx("p",{children:"Laboratorio de voces"})]})]}),c.jsxs(CE,{children:[c.jsxs(bE,{children:[c.jsxs(kE,{children:[c.jsx(Ds,{children:"Navegación"}),c.jsx(go,{to:"/VoiceCloning",children:"Voice Cloning"}),c.jsx(go,{to:"/Maintenance",children:"Experiencia TTS"}),c.jsx(go,{to:"/Maintenance",children:"AI & Salud"}),c.jsx(go,{to:"/Maintenance",children:"Investigación"}),c.jsx(go,{to:"/Maintenance",children:"Nosotros"})]}),c.jsxs($E,{children:[c.jsx(Ds,{children:"Contacto"}),c.jsx(Fs,{href:"",rel:"noreferrer",children:"Belgrano, CABA."}),c.jsx(Fs,{href:"https://wa.me/5491157397834",target:"_blank",rel:"noreferrer",children:"+54 9 11 5 739 7834"}),c.jsx(Fs,{href:"mailto:info@mecantronic.com.ar",children:"info@mecantronic.com.ar"})]})]}),c.jsxs(_E,{children:[c.jsx(Ds,{children:"Conectemos"}),c.jsx("p",{children:"Seguinos en nuestras"}),c.jsx("p",{children:"redes sociales."}),c.jsxs(PE,{children:[c.jsx(Us,{href:"https://www.facebook.com/mecantronic",target:"_blank",rel:"noreferrer",children:c.jsx(ec,{})}),c.jsx(Us,{href:"https://www.linkedin.com/company/mecantronic-sa/",target:"_blank",rel:"noreferrer",children:c.jsx(tc,{})}),c.jsx(Us,{href:"https://www.instagram.com/mecantronic/?hl=es",target:"_blank",rel:"noreferrer",children:c.jsx(oE,{})})]})]})]})]}),c.jsxs(OE,{children:[c.jsx("p",{children:"Copyright 2023 Todos los derechos reservados"}),c.jsx("p",{children:"©Mecantronic 2023"})]})]})})}function RE(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var P0=k,IE=RE(P0);function Yp(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ME=!!(typeof window<"u"&&window.document&&window.document.createElement);function NE(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],l;function s(){l=e(a.map(function(d){return d.props})),u.canUseDOM?t(l):n&&(l=n(l))}var u=function(d){AE(f,d);function f(){return d.apply(this,arguments)||this}f.peek=function(){return l},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var v=l;return l=void 0,a=[],v};var g=f.prototype;return g.UNSAFE_componentWillMount=function(){a.push(this),s()},g.componentDidUpdate=function(){s()},g.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),s()},g.render=function(){return IE.createElement(i,this.props)},f}(P0.PureComponent);return Yp(u,"displayName","SideEffect("+r(i)+")"),Yp(u,"canUseDOM",ME),u}}var LE=NE;const zE=ci(LE);var DE=typeof Element<"u",FE=typeof Map=="function",UE=typeof Set=="function",BE=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function da(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!da(e[r],t[r]))return!1;return!0}var i;if(FE&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!da(r.value[1],t.get(r.value[0])))return!1;return!0}if(UE&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(BE&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(DE&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!da(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var HE=function(t,n){try{return da(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const VE=ci(HE);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Gp=Object.getOwnPropertySymbols,WE=Object.prototype.hasOwnProperty,QE=Object.prototype.propertyIsEnumerable;function YE(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function GE(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var KE=GE()?Object.assign:function(e,t){for(var n,r=YE(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)WE.call(n,a)&&(r[a]=n[a]);if(Gp){o=Gp(n);for(var l=0;l<o.length;l++)QE.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r};const qE=ci(KE);var tr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},V={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(V).map(function(e){return V[e]});var xe={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Xa={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ui={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},XE=Object.keys(Xa).reduce(function(e,t){return e[Xa[t]]=t,e},{}),JE=[V.NOSCRIPT,V.SCRIPT,V.STYLE],At="data-react-helmet",ZE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ej=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},tj=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nj=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Kp=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},rj=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},rc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oj=function(t){var n=zr(t,V.TITLE),r=zr(t,ui.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=zr(t,ui.DEFAULT_TITLE);return n||o||void 0},ij=function(t){return zr(t,ui.ON_CHANGE_CLIENT_STATE)||function(){}},Bs=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,o){return Je({},r,o)},{})},aj=function(t,n){return n.filter(function(r){return typeof r[V.BASE]<"u"}).map(function(r){return r[V.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],s=l.toLowerCase();if(t.indexOf(s)!==-1&&o[s])return r.concat(o)}return r},[])},vo=function(t,n,r){var o={};return r.filter(function(i){return Array.isArray(i[t])?!0:(typeof i[t]<"u"&&cj("Helmet: "+t+' should be of type "Array". Instead found type "'+ZE(i[t])+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,a){var l={};a.filter(function(g){for(var m=void 0,v=Object.keys(g),x=0;x<v.length;x++){var E=v[x],h=E.toLowerCase();n.indexOf(h)!==-1&&!(m===xe.REL&&g[m].toLowerCase()==="canonical")&&!(h===xe.REL&&g[h].toLowerCase()==="stylesheet")&&(m=h),n.indexOf(E)!==-1&&(E===xe.INNER_HTML||E===xe.CSS_TEXT||E===xe.ITEM_PROP)&&(m=E)}if(!m||!g[m])return!1;var p=g[m].toLowerCase();return o[m]||(o[m]={}),l[m]||(l[m]={}),o[m][p]?!1:(l[m][p]=!0,!0)}).reverse().forEach(function(g){return i.push(g)});for(var s=Object.keys(l),u=0;u<s.length;u++){var d=s[u],f=qE({},o[d],l[d]);o[d]=f}return i},[]).reverse()},zr=function(t,n){for(var r=t.length-1;r>=0;r--){var o=t[r];if(o.hasOwnProperty(n))return o[n]}return null},lj=function(t){return{baseTag:aj([xe.HREF,xe.TARGET],t),bodyAttributes:Bs(tr.BODY,t),defer:zr(t,ui.DEFER),encode:zr(t,ui.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Bs(tr.HTML,t),linkTags:vo(V.LINK,[xe.REL,xe.HREF],t),metaTags:vo(V.META,[xe.NAME,xe.CHARSET,xe.HTTPEQUIV,xe.PROPERTY,xe.ITEM_PROP],t),noscriptTags:vo(V.NOSCRIPT,[xe.INNER_HTML],t),onChangeClientState:ij(t),scriptTags:vo(V.SCRIPT,[xe.SRC,xe.INNER_HTML],t),styleTags:vo(V.STYLE,[xe.CSS_TEXT],t),title:oj(t),titleAttributes:Bs(tr.TITLE,t)}},oc=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){oc(t)},0)}}(),qp=function(t){return clearTimeout(t)},sj=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oc:global.requestAnimationFrame||oc,uj=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||qp:global.cancelAnimationFrame||qp,cj=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},yo=null,dj=function(t){yo&&uj(yo),t.defer?yo=sj(function(){Xp(t,function(){yo=null})}):(Xp(t),yo=null)},Xp=function(t,n){var r=t.baseTag,o=t.bodyAttributes,i=t.htmlAttributes,a=t.linkTags,l=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,f=t.styleTags,g=t.title,m=t.titleAttributes;ic(V.BODY,o),ic(V.HTML,i),fj(g,m);var v={baseTag:mr(V.BASE,r),linkTags:mr(V.LINK,a),metaTags:mr(V.META,l),noscriptTags:mr(V.NOSCRIPT,s),scriptTags:mr(V.SCRIPT,d),styleTags:mr(V.STYLE,f)},x={},E={};Object.keys(v).forEach(function(h){var p=v[h],y=p.newTags,S=p.oldTags;y.length&&(x[h]=y),S.length&&(E[h]=v[h].oldTags)}),n&&n(),u(t,x,E)},O0=function(t){return Array.isArray(t)?t.join(""):t},fj=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=O0(t)),ic(V.TITLE,n)},ic=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var o=r.getAttribute(At),i=o?o.split(","):[],a=[].concat(i),l=Object.keys(n),s=0;s<l.length;s++){var u=l[s],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),i.indexOf(u)===-1&&i.push(u);var f=a.indexOf(u);f!==-1&&a.splice(f,1)}for(var g=a.length-1;g>=0;g--)r.removeAttribute(a[g]);i.length===a.length?r.removeAttribute(At):r.getAttribute(At)!==l.join(",")&&r.setAttribute(At,l.join(","))}},mr=function(t,n){var r=document.head||document.querySelector(V.HEAD),o=r.querySelectorAll(t+"["+At+"]"),i=Array.prototype.slice.call(o),a=[],l=void 0;return n&&n.length&&n.forEach(function(s){var u=document.createElement(t);for(var d in s)if(s.hasOwnProperty(d))if(d===xe.INNER_HTML)u.innerHTML=s.innerHTML;else if(d===xe.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=s.cssText:u.appendChild(document.createTextNode(s.cssText));else{var f=typeof s[d]>"u"?"":s[d];u.setAttribute(d,f)}u.setAttribute(At,"true"),i.some(function(g,m){return l=m,u.isEqualNode(g)})?i.splice(l,1):a.push(u)}),i.forEach(function(s){return s.parentNode.removeChild(s)}),a.forEach(function(s){return r.appendChild(s)}),{oldTags:i,newTags:a}},R0=function(t){return Object.keys(t).reduce(function(n,r){var o=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+o:o},"")},pj=function(t,n,r,o){var i=R0(r),a=O0(n);return i?"<"+t+" "+At+'="true" '+i+">"+rc(a,o)+"</"+t+">":"<"+t+" "+At+'="true">'+rc(a,o)+"</"+t+">"},hj=function(t,n,r){return n.reduce(function(o,i){var a=Object.keys(i).filter(function(u){return!(u===xe.INNER_HTML||u===xe.CSS_TEXT)}).reduce(function(u,d){var f=typeof i[d]>"u"?d:d+'="'+rc(i[d],r)+'"';return u?u+" "+f:f},""),l=i.innerHTML||i.cssText||"",s=JE.indexOf(t)===-1;return o+"<"+t+" "+At+'="true" '+a+(s?"/>":">"+l+"</"+t+">")},"")},I0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[Xa[o]||o]=t[o],r},n)},mj=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[XE[o]||o]=t[o],r},n)},gj=function(t,n,r){var o,i=(o={key:n},o[At]=!0,o),a=I0(r,i);return[B.createElement(V.TITLE,a,n)]},vj=function(t,n){return n.map(function(r,o){var i,a=(i={key:o},i[At]=!0,i);return Object.keys(r).forEach(function(l){var s=Xa[l]||l;if(s===xe.INNER_HTML||s===xe.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[s]=r[l]}),B.createElement(t,a)})},Kt=function(t,n,r){switch(t){case V.TITLE:return{toComponent:function(){return gj(t,n.title,n.titleAttributes)},toString:function(){return pj(t,n.title,n.titleAttributes,r)}};case tr.BODY:case tr.HTML:return{toComponent:function(){return I0(n)},toString:function(){return R0(n)}};default:return{toComponent:function(){return vj(t,n)},toString:function(){return hj(t,n,r)}}}},A0=function(t){var n=t.baseTag,r=t.bodyAttributes,o=t.encode,i=t.htmlAttributes,a=t.linkTags,l=t.metaTags,s=t.noscriptTags,u=t.scriptTags,d=t.styleTags,f=t.title,g=f===void 0?"":f,m=t.titleAttributes;return{base:Kt(V.BASE,n,o),bodyAttributes:Kt(tr.BODY,r,o),htmlAttributes:Kt(tr.HTML,i,o),link:Kt(V.LINK,a,o),meta:Kt(V.META,l,o),noscript:Kt(V.NOSCRIPT,s,o),script:Kt(V.SCRIPT,u,o),style:Kt(V.STYLE,d,o),title:Kt(V.TITLE,{title:g,titleAttributes:m},o)}},yj=function(t){var n,r;return r=n=function(o){nj(i,o);function i(){return ej(this,i),rj(this,o.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(l){return!VE(this.props,l)},i.prototype.mapNestedChildrenToProps=function(l,s){if(!s)return null;switch(l.type){case V.SCRIPT:case V.NOSCRIPT:return{innerHTML:s};case V.STYLE:return{cssText:s}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(l){var s,u=l.child,d=l.arrayTypeChildren,f=l.newChildProps,g=l.nestedChildren;return Je({},d,(s={},s[u.type]=[].concat(d[u.type]||[],[Je({},f,this.mapNestedChildrenToProps(u,g))]),s))},i.prototype.mapObjectTypeChildren=function(l){var s,u,d=l.child,f=l.newProps,g=l.newChildProps,m=l.nestedChildren;switch(d.type){case V.TITLE:return Je({},f,(s={},s[d.type]=m,s.titleAttributes=Je({},g),s));case V.BODY:return Je({},f,{bodyAttributes:Je({},g)});case V.HTML:return Je({},f,{htmlAttributes:Je({},g)})}return Je({},f,(u={},u[d.type]=Je({},g),u))},i.prototype.mapArrayTypeChildrenToProps=function(l,s){var u=Je({},s);return Object.keys(l).forEach(function(d){var f;u=Je({},u,(f={},f[d]=l[d],f))}),u},i.prototype.warnOnInvalidChildren=function(l,s){return!0},i.prototype.mapChildrenToProps=function(l,s){var u=this,d={};return B.Children.forEach(l,function(f){if(!(!f||!f.props)){var g=f.props,m=g.children,v=Kp(g,["children"]),x=mj(v);switch(u.warnOnInvalidChildren(f,m),f.type){case V.LINK:case V.META:case V.NOSCRIPT:case V.SCRIPT:case V.STYLE:d=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:d,newChildProps:x,nestedChildren:m});break;default:s=u.mapObjectTypeChildren({child:f,newProps:s,newChildProps:x,nestedChildren:m});break}}}),s=this.mapArrayTypeChildrenToProps(d,s),s},i.prototype.render=function(){var l=this.props,s=l.children,u=Kp(l,["children"]),d=Je({},u);return s&&(d=this.mapChildrenToProps(s,d)),B.createElement(t,d)},tj(i,null,[{key:"canUseDOM",set:function(l){t.canUseDOM=l}}]),i}(B.Component),n.propTypes={base:Z.object,bodyAttributes:Z.object,children:Z.oneOfType([Z.arrayOf(Z.node),Z.node]),defaultTitle:Z.string,defer:Z.bool,encodeSpecialCharacters:Z.bool,htmlAttributes:Z.object,link:Z.arrayOf(Z.object),meta:Z.arrayOf(Z.object),noscript:Z.arrayOf(Z.object),onChangeClientState:Z.func,script:Z.arrayOf(Z.object),style:Z.arrayOf(Z.object),title:Z.string,titleAttributes:Z.object,titleTemplate:Z.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var o=t.rewind();return o||(o=A0({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},xj=function(){return null},wj=zE(lj,dj,A0)(xj),ac=yj(wj);ac.renderStatic=ac.rewind;function Sj(){const[e,t]=k.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return c.jsxs(vE,{children:[c.jsxs(ac,{children:[c.jsx("title",{children:"Sintética"}),c.jsx("meta",{name:"description",content:"Este es un ejemplo de descripción de la página web para SEO"}),c.jsx("meta",{name:"keywords",content:"SEO, etiquetas meta, palabras clave, HTML5"}),c.jsx("meta",{name:"canonical",href:"https://www.ejemplo.com/mi-pagina"}),c.jsx("meta",{name:"og:title",content:"Mi Página en Open Graph"}),c.jsx("meta",{name:"og:description",content:"Una descripción especial para Open Graph"}),c.jsx("meta",{name:"robots",content:"index, follow"})]}),c.jsx(Vl,{}),c.jsx(cS,{openModal:n}),c.jsxs(yE,{children:[c.jsx(mS,{}),c.jsx(PS,{}),c.jsx(Ed,{})]}),e&&c.jsx(Td,{closeModal:r,children:c.jsx(jd,{})}),c.jsx(Gl,{})]})}const Ej=C.section`
  background-color: ${w.colors.white};
  color: ${w.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${w.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${w.bp.small}) {
    padding-top: 50px;
  }
`,jj=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${w.bp.large}) {
    width: auto;
  }
`,Tj=C.img`
  width: 500px;
  @media (max-width: ${w.bp.large}) {
    width: 500px;
  }
  @media (max-width: ${w.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${w.bp.small}) {
    width: 300px;
  }
`,Cj=C.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${w.bp.large}) {
    width: 80%;
  }
`,bj=C.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${w.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${w.bp["x-small"]}) {
    font-size: 40px;
  }
`,kj=C.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${w.colors.gray};
`,$j=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,_j=C.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${w.bp.medium}) {
    margin-right: 50px;
  }
`;function M0({openModal:e}){const t=Hl(),n=()=>{t(E0())};return c.jsxs(Ej,{children:[c.jsx(jj,{children:c.jsx(Tj,{src:"assets/voiceCloning/bannerVoice.svg"})}),c.jsxs(Cj,{children:[c.jsx(bj,{children:"Inteligencia Artificial para alzar tu voz"}),c.jsx(kj,{children:"Crea una copia digital de tu voz con nuestros sistemas de inteligencia artificial para clonar voces. Desarrollamos modelos de IA personalizados para capturar tu voz y darte la experiencia más realista en tu propio idioma."}),c.jsx($j,{children:c.jsx(_j,{onClick:e,children:c.jsx(Ha,{buttonText:"Cloná tu voz ",rightArrow:!0,handleClick:n})})})]})]})}M0.propTypes={openModal:Z.func.isRequired};const Pj=C.section`
  background-color: ${w.colors.white};
  color: ${w.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${w.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${w.bp.small}) {
    padding-top: 80px;
  }
`,Oj=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${w.colors.lavenderfloral};
  background-color: ${w.colors.lavender};
`,Rj=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`,mt=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${w.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
`,gt=C.audio`
  width: 330px;
`,vt=C.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${w.colors.raisinblack};
`,yt=C.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${w.colors.electricindigo};
`;function Ij(){return c.jsxs(Pj,{children:[c.jsx(Oj,{children:"Nuestras voces"}),c.jsxs(Rj,{children:[c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/fem1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Ana"}),c.jsx(yt,{children:"Voz Real"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/fem1_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Ana"}),c.jsx(yt,{children:"Voz AI"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/mas1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Franco"}),c.jsx(yt,{children:"Voz Real"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/mas1_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Franco"}),c.jsx(yt,{children:"Voz AI"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/fem2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Paula"}),c.jsx(yt,{children:"Voz Real"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/fem2_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Paula"}),c.jsx(yt,{children:"Voz AI"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/mas2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Darío"}),c.jsx(yt,{children:"Voz Real"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/mas2_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Darío"}),c.jsx(yt,{children:"Voz AI"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/fem3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Luciana"}),c.jsx(yt,{children:"Voz Real"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/fem3_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Luciana"}),c.jsx(yt,{children:"Voz AI"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/mas3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Hernán"}),c.jsx(yt,{children:"Voz Real"})]}),c.jsxs(mt,{children:[c.jsxs(gt,{controls:!0,children:[c.jsx("source",{src:"audios-voice/mas3_cloned(enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(vt,{children:"Hernán"}),c.jsx(yt,{children:"Voz AI"})]})]})]})}const Aj=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;function Mj(){const[e,t]=k.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return c.jsxs(Aj,{children:[c.jsx(Vl,{}),c.jsx(M0,{openModal:n}),c.jsx(Ij,{}),c.jsx(Ed,{}),e&&c.jsx(Td,{closeModal:r,children:c.jsx(jd,{})}),c.jsx(Gl,{})]})}const Nj=C.section`
  background-color: ${w.colors.onyx};
  color: ${w.colors.electricindigo};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${w.bp.large}) {
    margin-top: 100px;
  }
`,Lj=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media (max-width: ${w.bp.large}) {
    width: 80%;
  }
`,zj=C.img`
  position: relative;
  width: 430px;
  @media (max-width: ${w.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${w.bp.small}) {
    width: 80vw;
  }
`,Dj=C.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${w.bp.large}) {
    width: 90%;
  }
`,Fj=C.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${w.colors.onyx};
  letter-spacing: 1px;
`,Uj=C.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${w.bp["x-small"]}) {
    font-size: 40px;
    line-height: 50px;
  }
`,Hs=C.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;function Bj(){return c.jsxs(Nj,{children:[c.jsxs(Dj,{children:[c.jsx(Fj,{children:"*** ¿Porqué lo hacemos?"}),c.jsx(Uj,{children:"Tecnología al servicio de la salud y la inclusión"}),c.jsx(Hs,{children:"En Sintética, estamos convencidos de que la tecnología debe ser una fuerza impulsora para mejorar la vida de las personas en todo el mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos hacia una visión transformadora: empoderar a individuos de todas las capacidades y orígenes a través de soluciones innovadoras."}),c.jsx(Hs,{children:"En la intersección de la vanguardia tecnológica y el bienestar humano, la inteligencia artificial ha emergido como un faro de posibilidades. Creemos en la importancia de la inclusión, en la eliminación de barreras y en la promoción de la igualdad en todos los niveles."}),c.jsx(Hs,{children:"La clonación de voz no solo es un avance técnico, es un testimonio de nuestro compromiso de construir un mundo donde cada voz sea escuchada y respetada. Te invitamos a explorar nuestros proyectos y descubrir cómo la inteligencia artificial está transformando la salud de maneras que antes solo podíamos imaginar."})]}),c.jsx(Lj,{children:c.jsx(zj,{src:"assets/ia-salud/logo_1.png",alt:"Logo IA-salud"})})]})}const Hj=C.section`
  background-color: ${w.colors.onyx};
  color: ${w.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-top: 100px;
`,Vj=C.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${w.bp["x-small"]}) {
    font-size: 40px;
  }
`,Yi=C.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`,Wj=C.iframe`
  width: 80vw;
  height: 50vw;
  padding-top: 50px;
`;function Qj(){return c.jsxs(Hj,{children:[c.jsx(Vj,{children:"Proyecto Mi Identidad Vocal: programa ImpaCT.ar Ciencia y Tecnología - Ministerio de Salud de la Nación."}),c.jsx(Yi,{children:"En las actividades cotidianas se hace evidente que la voz desempeña un papel indispensable. Desde la comunicación con el entorno familiar, hasta el desempeño académico y laboral. Prescindir de este instrumento significa una desventaja importante para el desarrollo de cualquier persona."}),c.jsx(Yi,{children:"La clonación de voz emerge como una herramienta de gran potencial en la asistencia a personas afectadas por patologías de alta complejidad. Entre las condiciones que mayores limitaciones generan se encuentran la esclerosis lateral amiotrófica (ELA), la enfermedad de Huntington (EH), la apraxia, el accidente cerebrovascular (ACV) y el trastorno del espectro autista (TEA). Sin embargo, existen otro tipo de afecciones leves que pueden ser mitigadas con la tecnología propuesta, como por ejemplo, las intervenciones quirúrgicas en las cuerdas vocales y traqueotomías."}),c.jsx(Yi,{children:"Mediante la aplicación de la clonación de voz, los usuarios podrán introducir mensajes en formato de texto, lo que conlleva a la producción de una representación auditiva por medio de una voz sintética. Esta tendrá como característica principal una gran similitud con su voz natural gracias al registro de audios de referencia y las tecnologías que se describen en este documento."}),c.jsx(Yi,{children:"El software que desarrollamos permite reproducir cualquier texto que se ingrese, en forma de discurso y en español rioplatense. Esto representa un gran aporte en términos de inclusión para un porcentaje de la población que se ve imposibilitado en su desarrollo cotidiano."}),c.jsx(Wj,{src:"https://www.youtube.com/embed/-KylP16dxj0?si=CDhRIkNFvzT6ZUnR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}const Yj=C.section`
  background-color: ${w.colors.onyx};
  color: ${w.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`,Gj=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${w.colors.onyx};
  letter-spacing: 1px;
`,Kj=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`,Jp=C.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${w.colors.seasalt};
  border-radius: 15px;
`,Zp=C.img`
  width: 320px;
  height: 380px;
`;function qj(){return c.jsxs(Yj,{children:[c.jsx(Gj,{children:"*** Prensa ***"}),c.jsxs(Kj,{children:[c.jsx(Jp,{href:"https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/",children:c.jsx(Zp,{src:"assets/ia-salud/nota1.png",alt:"Nota"})}),c.jsx(Jp,{href:"https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/",children:c.jsx(Zp,{src:"assets/ia-salud/nota2.png",alt:"Nota"})})]})]})}const Xj=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${w.colors.white};
`;function Jj(){return c.jsxs(Xj,{children:[c.jsx(Vl,{}),c.jsx(Bj,{}),c.jsx(Qj,{}),c.jsx(qj,{}),c.jsx(Ed,{}),c.jsx(Gl,{})]})}const Zj=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${w.colors.white};
`,eT=C.div`
  display: flex;
  align-items: center;

  @media (max-width: ${w.bp.medium}) {
    flex-direction: column;
  }
`,tT=C.img`
  width: 40vw;
  @media (max-width: ${w.bp.medium}) {
    width: 60vw;
  }
`,nT=C.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  h2 {
    font-size: 80px;
    font-weight: 400;
    line-height: 90px;
    padding-bottom: 4px;
    color: ${w.colors.electricindigo};
  }
  span {
    font-size: 40px;
    color: ${w.colors.raisinblack};
    padding-bottom: 19px;
  }

  @media (max-width: ${w.bp.medium}) {
    width: 90vw;
  }
  @media (max-width: ${w.bp["x-small"]}) {
    h2 {
      font-size: 50px;
      font-weight: 400;
      line-height: 30px;
      padding-bottom: 4px;
      color: ${w.colors.electricindigo};
    }
    span {
      font-size: 20px;
      color: ${w.colors.raisinblack};
      padding-bottom: 19px;
    }
  }
`,rT=C.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function oT(){return c.jsxs(Zj,{children:[c.jsx(Vl,{}),c.jsxs(eT,{children:[c.jsx(tT,{src:"assets/backgrounds/maintenance.svg"}),c.jsxs(nT,{children:[c.jsx("h2",{children:"¡Lo sentimos!"}),c.jsx("span",{children:"Sección en mantenimiento."}),c.jsx(rT,{children:c.jsx(_r,{to:"/",buttonText:"Volver a Inicio"})})]})]}),c.jsx(Gl,{})]})}const iT=cx`
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
`,aT=C.div`
`;function lT(){const e=r0(t=>t.modal.modalType);return k.useEffect(()=>{},[e]),c.jsxs(iw,{children:[c.jsx(Td,{}),c.jsx(iT,{}),c.jsx(aT,{children:c.jsxs(Zx,{children:[c.jsx(To,{exact:!0,path:"/",element:c.jsx(Sj,{})}),c.jsx(To,{exact:!0,path:"/VoiceCloning",element:c.jsx(Mj,{})}),c.jsx(To,{exact:!0,path:"/IA",element:c.jsx(Jj,{})}),c.jsx(To,{exact:!0,path:"/Maintenance",element:c.jsx(oT,{})})]})})]})}const sT=w0({name:"user",initialState:{userName:"",name:"",surname:"",email:"",phone:"",credits:0,role:""},reducers:{setUser:e=>{e.userName="userName",e.name="user",e.surname="user",e.email="user@example.com",e.phone="123-456",e.credits=100,e.role="premuim"},removeUser:e=>{e.userName="",e.name="",e.surname="",e.email="",e.phone="",e.credits=0,e.role=""}}}),uT=sT.reducer,cT=D2({reducer:{modal:J2,user:uT}});Vs.createRoot(document.getElementById("root")).render(c.jsx(B.StrictMode,{children:c.jsx(o2,{store:cT,children:c.jsx(lT,{})})}));

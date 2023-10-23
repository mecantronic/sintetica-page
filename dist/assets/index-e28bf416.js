function rg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $p={exports:{}},Ll={},_p={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),ig=Symbol.for("react.portal"),lg=Symbol.for("react.fragment"),ag=Symbol.for("react.strict_mode"),sg=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),cg=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),fg=Symbol.for("react.suspense"),pg=Symbol.for("react.memo"),hg=Symbol.for("react.lazy"),ed=Symbol.iterator;function mg(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Pp={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||bp}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Op(){}Op.prototype=Wr.prototype;function zu(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||bp}var Mu=zu.prototype=new Op;Mu.constructor=zu;Tp(Mu,Wr.prototype);Mu.isPureReactComponent=!0;var td=Array.isArray,Rp=Object.prototype.hasOwnProperty,Nu={current:null},Ip={key:!0,ref:!0,__self:!0,__source:!0};function zp(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Rp.call(t,r)&&!Ip.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:qo,type:e,key:i,ref:l,props:o,_owner:Nu.current}}function gg(e,t){return{$$typeof:qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===qo}function vg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nd=/\/+/g;function Ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vg(""+e.key):t.toString(36)}function Mi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qo:case ig:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ra(l,0):r,td(o)?(n="",e!=null&&(n=e.replace(nd,"$&/")+"/"),Mi(o,t,n,"",function(u){return u})):o!=null&&(Lu(o)&&(o=gg(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(nd,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",td(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ra(i,a);l+=Mi(i,t,n,s,o)}else if(s=mg(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ra(i,a++),l+=Mi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ii(e,t,n){if(e==null)return e;var r=[],o=0;return Mi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Ni={transition:null},xg={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Ni,ReactCurrentOwner:Nu};G.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Wr;G.Fragment=lg;G.Profiler=sg;G.PureComponent=zu;G.StrictMode=ag;G.Suspense=fg;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tp({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Nu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Rp.call(t,s)&&!Ip.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qo,type:e.type,key:o,ref:i,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:cg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ug,_context:e},e.Consumer=e};G.createElement=zp;G.createFactory=function(e){var t=zp.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:dg,render:e}};G.isValidElement=Lu;G.lazy=function(e){return{$$typeof:hg,_payload:{_status:-1,_result:e},_init:yg}};G.memo=function(e,t){return{$$typeof:pg,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Ni.transition;Ni.transition={};try{e()}finally{Ni.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Ye.current.useCallback(e,t)};G.useContext=function(e){return Ye.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ye.current.useEffect(e,t)};G.useId=function(){return Ye.current.useId()};G.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ye.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};G.useRef=function(e){return Ye.current.useRef(e)};G.useState=function(e){return Ye.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ye.current.useTransition()};G.version="18.2.0";_p.exports=G;var _=_p.exports;const V=kp(_),wg=rg({__proto__:null,default:V},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=_,Eg=Symbol.for("react.element"),jg=Symbol.for("react.fragment"),Cg=Object.prototype.hasOwnProperty,kg=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$g={key:!0,ref:!0,__self:!0,__source:!0};function Mp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Cg.call(t,r)&&!$g.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Eg,type:e,key:i,ref:l,props:o,_owner:kg.current}}Ll.Fragment=jg;Ll.jsx=Mp;Ll.jsxs=Mp;$p.exports=Ll;var c=$p.exports,js={},Np={exports:{}},at={},Lp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var U=I.length;I.push(F);e:for(;0<U;){var oe=U-1>>>1,ce=I[oe];if(0<o(ce,F))I[oe]=F,I[U]=ce,U=oe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],U=I.pop();if(U!==F){I[0]=U;e:for(var oe=0,ce=I.length,tt=ce>>>1;oe<tt;){var ke=2*(oe+1)-1,ct=I[ke],ge=ke+1,je=I[ge];if(0>o(ct,U))ge<ce&&0>o(je,ct)?(I[oe]=je,I[ge]=U,oe=ge):(I[oe]=ct,I[ke]=U,oe=ke);else if(ge<ce&&0>o(je,U))I[oe]=je,I[ge]=U,oe=ge;else break e}}return F}function o(I,F){var U=I.sortIndex-F.sortIndex;return U!==0?U:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,p=null,g=3,m=!1,v=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=I)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function w(I){if(x=!1,y(I),!v)if(n(s)!==null)v=!0,ne(j);else{var F=n(u);F!==null&&ue(w,F.startTime-I)}}function j(I,F){v=!1,x&&(x=!1,h(b),b=-1),m=!0;var U=g;try{for(y(F),p=n(s);p!==null&&(!(p.expirationTime>F)||I&&!L());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,g=p.priorityLevel;var ce=oe(p.expirationTime<=F);F=e.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(s)&&r(s),y(F)}else r(s);p=n(s)}if(p!==null)var tt=!0;else{var ke=n(u);ke!==null&&ue(w,ke.startTime-F),tt=!1}return tt}finally{p=null,g=U,m=!1}}var $=!1,C=null,b=-1,T=5,O=-1;function L(){return!(e.unstable_now()-O<T)}function D(){if(C!==null){var I=e.unstable_now();O=I;var F=!0;try{F=C(!0,I)}finally{F?A():($=!1,C=null)}}else $=!1}var A;if(typeof d=="function")A=function(){d(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,me=X.port2;X.port1.onmessage=D,A=function(){me.postMessage(null)}}else A=function(){E(D,0)};function ne(I){C=I,$||($=!0,A())}function ue(I,F){b=E(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,ne(j))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var U=g;g=F;try{return I()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=g;g=I;try{return F()}finally{g=U}},e.unstable_scheduleCallback=function(I,F,U){var oe=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?oe+U:oe):U=oe,I){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=U+ce,I={id:f++,callback:F,priorityLevel:I,startTime:U,expirationTime:ce,sortIndex:-1},U>oe?(I.sortIndex=U,t(u,I),n(s)===null&&I===n(u)&&(x?(h(b),b=-1):x=!0,ue(w,U-oe))):(I.sortIndex=ce,t(s,I),v||m||(v=!0,ne(j))),I},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(I){var F=g;return function(){var U=g;g=F;try{return I.apply(this,arguments)}finally{g=U}}}})(Ap);Lp.exports=Ap;var _g=Lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=_,it=_g;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,_o={};function rr(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(_o[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=Object.prototype.hasOwnProperty,bg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},od={};function Tg(e){return Cs.call(od,e)?!0:Cs.call(rd,e)?!1:bg.test(e)?od[e]=!0:(rd[e]=!0,!1)}function Pg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Og(e,t,n,r){if(t===null||typeof t>"u"||Pg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function Du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Au,Du);Ae[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Au,Du);Ae[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Au,Du);Ae[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fu(e,t,n,r){var o=Ae.hasOwnProperty(t)?Ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Og(t,n,o,r)&&(n=null),r||o===null?Tg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),ks=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),$s=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),id=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Ia;function lo(e){if(Ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ia=t&&t[1]||""}return`
`+Ia+e}var za=!1;function Ma(e,t){if(!e||za)return"";za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lo(e):""}function Rg(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case sr:return"Portal";case ks:return"Profiler";case Uu:return"StrictMode";case $s:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bp:return(e.displayName||"Context")+".Consumer";case Up:return(e._context.displayName||"Context")+".Provider";case Bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vu:return t=e.displayName||null,t!==null?t:bs(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return bs(e(t))}catch{}}return null}function Ig(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(t);case 8:return t===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zg(e){var t=Wp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=zg(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ts(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ld(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qp(e,t){t=t.checked,t!=null&&Fu(e,"checked",t,!1)}function Ps(e,t){Qp(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Os(e,t.type,n):t.hasOwnProperty("defaultValue")&&Os(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Os(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ao(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Yp(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,Gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mg=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(e){Mg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mo[t]=mo[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}function qp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ng=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zs(e,t){if(t){if(Ng[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,jr=null,Cr=null;function cd(e){if(e=ei(e)){if(typeof Ls!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Bl(t),Ls(e.stateNode,e.type,t))}}function Jp(e){jr?Cr?Cr.push(e):Cr=[e]:jr=e}function Zp(){if(jr){var e=jr,t=Cr;if(Cr=jr=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function eh(e,t){return e(t)}function th(){}var Na=!1;function nh(e,t,n){if(Na)return e(t,n);Na=!0;try{return eh(e,t,n)}finally{Na=!1,(jr!==null||Cr!==null)&&(th(),Zp())}}function To(e,t){var n=e.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var As=!1;if(Xt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){As=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{As=!1}function Lg(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var go=!1,Zi=null,el=!1,Ds=null,Ag={onError:function(e){go=!0,Zi=e}};function Dg(e,t,n,r,o,i,l,a,s){go=!1,Zi=null,Lg.apply(Ag,arguments)}function Fg(e,t,n,r,o,i,l,a,s){if(Dg.apply(this,arguments),go){if(go){var u=Zi;go=!1,Zi=null}else throw Error(R(198));el||(el=!0,Ds=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dd(e){if(or(e)!==e)throw Error(R(188))}function Ug(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return dd(o),e;if(i===r)return dd(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function oh(e){return e=Ug(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ih(e);if(t!==null)return t;e=e.sibling}return null}var lh=it.unstable_scheduleCallback,fd=it.unstable_cancelCallback,Bg=it.unstable_shouldYield,Vg=it.unstable_requestPaint,Ce=it.unstable_now,Wg=it.unstable_getCurrentPriorityLevel,Hu=it.unstable_ImmediatePriority,ah=it.unstable_UserBlockingPriority,tl=it.unstable_NormalPriority,Hg=it.unstable_LowPriority,sh=it.unstable_IdlePriority,Al=null,Dt=null;function Qg(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Gg,Yg=Math.log,Kg=Math.LN2;function Gg(e){return e>>>=0,e===0?32:31-(Yg(e)/Kg|0)|0}var ui=64,ci=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=so(a):(i&=l,i!==0&&(r=so(i)))}else l=n&~o,l!==0?r=so(l):i!==0&&(r=so(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),o=1<<n,r|=e[n],t&=~o;return r}function Xg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Pt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Xg(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function La(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function Jg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Qu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var le=0;function ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dh,Yu,fh,ph,hh,Us=!1,di=[],yn=null,xn=null,wn=null,Po=new Map,Oo=new Map,dn=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(t.pointerId)}}function Zr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ei(t),t!==null&&Yu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ev(e,t,n,r,o){switch(t){case"focusin":return yn=Zr(yn,e,t,n,r,o),!0;case"dragenter":return xn=Zr(xn,e,t,n,r,o),!0;case"mouseover":return wn=Zr(wn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Po.set(i,Zr(Po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Oo.set(i,Zr(Oo.get(i)||null,e,t,n,r,o)),!0}return!1}function mh(e){var t=Vn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=rh(n),t!==null){e.blockedOn=t,hh(e.priority,function(){fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ns=r,n.target.dispatchEvent(r),Ns=null}else return t=ei(n),t!==null&&Yu(t),e.blockedOn=n,!1;t.shift()}return!0}function hd(e,t,n){Li(e)&&n.delete(t)}function tv(){Us=!1,yn!==null&&Li(yn)&&(yn=null),xn!==null&&Li(xn)&&(xn=null),wn!==null&&Li(wn)&&(wn=null),Po.forEach(hd),Oo.forEach(hd)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,tv)))}function Ro(e){function t(o){return eo(o,e)}if(0<di.length){eo(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&eo(yn,e),xn!==null&&eo(xn,e),wn!==null&&eo(wn,e),Po.forEach(t),Oo.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)mh(n),n.blockedOn===null&&dn.shift()}var kr=tn.ReactCurrentBatchConfig,rl=!0;function nv(e,t,n,r){var o=le,i=kr.transition;kr.transition=null;try{le=1,Ku(e,t,n,r)}finally{le=o,kr.transition=i}}function rv(e,t,n,r){var o=le,i=kr.transition;kr.transition=null;try{le=4,Ku(e,t,n,r)}finally{le=o,kr.transition=i}}function Ku(e,t,n,r){if(rl){var o=Bs(e,t,n,r);if(o===null)Ya(e,t,r,ol,n),pd(e,r);else if(ev(o,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<Zg.indexOf(e)){for(;o!==null;){var i=ei(o);if(i!==null&&dh(i),i=Bs(e,t,n,r),i===null&&Ya(e,t,r,ol,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var ol=null;function Bs(e,t,n,r){if(ol=null,e=Wu(r),e=Vn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ol=e,null}function gh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wg()){case Hu:return 1;case ah:return 4;case tl:case Hg:return 16;case sh:return 536870912;default:return 16}default:return 16}}var hn=null,Gu=null,Ai=null;function vh(){if(Ai)return Ai;var e,t=Gu,n=t.length,r,o="value"in hn?hn.value:hn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ai=o.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function md(){return!1}function st(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fi:md,this.isPropagationStopped=md,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=st(Hr),Zo=Se({},Hr,{view:0,detail:0}),ov=st(Zo),Aa,Da,to,Dl=Se({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Aa=e.screenX-to.screenX,Da=e.screenY-to.screenY):Da=Aa=0,to=e),Aa)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),gd=st(Dl),iv=Se({},Dl,{dataTransfer:0}),lv=st(iv),av=Se({},Zo,{relatedTarget:0}),Fa=st(av),sv=Se({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=st(sv),cv=Se({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dv=st(cv),fv=Se({},Hr,{data:0}),vd=st(fv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mv[e])?!!t[e]:!1}function qu(){return gv}var vv=Se({},Zo,{key:function(e){if(e.key){var t=pv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yv=st(vv),xv=Se({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=st(xv),wv=Se({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),Sv=st(wv),Ev=Se({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=st(Ev),Cv=Se({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=st(Cv),$v=[9,13,27,32],Ju=Xt&&"CompositionEvent"in window,vo=null;Xt&&"documentMode"in document&&(vo=document.documentMode);var _v=Xt&&"TextEvent"in window&&!vo,yh=Xt&&(!Ju||vo&&8<vo&&11>=vo),xd=String.fromCharCode(32),wd=!1;function xh(e,t){switch(e){case"keyup":return $v.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function bv(e,t){switch(e){case"compositionend":return wh(t);case"keypress":return t.which!==32?null:(wd=!0,xd);case"textInput":return e=t.data,e===xd&&wd?null:e;default:return null}}function Tv(e,t){if(cr)return e==="compositionend"||!Ju&&xh(e,t)?(e=vh(),Ai=Gu=hn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yh&&t.locale!=="ko"?null:t.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pv[e.type]:t==="textarea"}function Sh(e,t,n,r){Jp(r),t=il(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yo=null,Io=null;function Ov(e){Rh(e,0)}function Fl(e){var t=pr(e);if(Hp(t))return e}function Rv(e,t){if(e==="change")return t}var Eh=!1;if(Xt){var Ua;if(Xt){var Ba="oninput"in document;if(!Ba){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Ba=typeof Ed.oninput=="function"}Ua=Ba}else Ua=!1;Eh=Ua&&(!document.documentMode||9<document.documentMode)}function jd(){yo&&(yo.detachEvent("onpropertychange",jh),Io=yo=null)}function jh(e){if(e.propertyName==="value"&&Fl(Io)){var t=[];Sh(t,Io,e,Wu(e)),nh(Ov,t)}}function Iv(e,t,n){e==="focusin"?(jd(),yo=t,Io=n,yo.attachEvent("onpropertychange",jh)):e==="focusout"&&jd()}function zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Io)}function Mv(e,t){if(e==="click")return Fl(t)}function Nv(e,t){if(e==="input"||e==="change")return Fl(t)}function Lv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Lv;function zo(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Cs.call(t,o)||!It(e[o],t[o]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kh(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Av(e){var t=kh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ch(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=kd(n,i);var l=kd(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dv=Xt&&"documentMode"in document&&11>=document.documentMode,dr=null,Vs=null,xo=null,Ws=!1;function $d(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ws||dr==null||dr!==Ji(r)||(r=dr,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&zo(xo,r)||(xo=r,r=il(Vs,"onSelect"),0<r.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},Va={},$h={};Xt&&($h=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Ul(e){if(Va[e])return Va[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $h)return Va[e]=t[n];return e}var _h=Ul("animationend"),bh=Ul("animationiteration"),Th=Ul("animationstart"),Ph=Ul("transitionend"),Oh=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){Oh.set(e,t),rr(t,[e])}for(var Wa=0;Wa<_d.length;Wa++){var Ha=_d[Wa],Fv=Ha.toLowerCase(),Uv=Ha[0].toUpperCase()+Ha.slice(1);Mn(Fv,"on"+Uv)}Mn(_h,"onAnimationEnd");Mn(bh,"onAnimationIteration");Mn(Th,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Ph,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function bd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fg(r,t,void 0,e),e.currentTarget=null}function Rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;bd(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;bd(o,a,u),i=s}}}if(el)throw e=Ds,el=!1,Ds=null,e}function fe(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(Ih(t,e,2,!1),n.add(r))}function Qa(e,t,n){var r=0;t&&(r|=4),Ih(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[hi]){e[hi]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(Bv.has(n)||Qa(n,!1,e),Qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,Qa("selectionchange",!1,t))}}function Ih(e,t,n,r){switch(gh(t)){case 1:var o=nv;break;case 4:o=rv;break;default:o=Ku}n=o.bind(null,t,n,e),o=void 0,!As||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Vn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}nh(function(){var u=i,f=Wu(n),p=[];e:{var g=Oh.get(e);if(g!==void 0){var m=Xu,v=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":m=yv;break;case"focusin":v="focus",m=Fa;break;case"focusout":v="blur",m=Fa;break;case"beforeblur":case"afterblur":m=Fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Sv;break;case _h:case bh:case Th:m=uv;break;case Ph:m=jv;break;case"scroll":m=ov;break;case"wheel":m=kv;break;case"copy":case"cut":case"paste":m=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=yd}var x=(t&4)!==0,E=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,y;d!==null;){y=d;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,h!==null&&(w=To(d,h),w!=null&&x.push(No(d,w,y)))),E)break;d=d.return}0<x.length&&(g=new m(g,v,null,n,f),p.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Ns&&(v=n.relatedTarget||n.fromElement)&&(Vn(v)||v[qt]))break e;if((m||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Vn(v):null,v!==null&&(E=or(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=gd,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=yd,w="onPointerLeave",h="onPointerEnter",d="pointer"),E=m==null?g:pr(m),y=v==null?g:pr(v),g=new x(w,d+"leave",m,n,f),g.target=E,g.relatedTarget=y,w=null,Vn(f)===u&&(x=new x(h,d+"enter",v,n,f),x.target=y,x.relatedTarget=E,w=x),E=w,m&&v)t:{for(x=m,h=v,d=0,y=x;y;y=lr(y))d++;for(y=0,w=h;w;w=lr(w))y++;for(;0<d-y;)x=lr(x),d--;for(;0<y-d;)h=lr(h),y--;for(;d--;){if(x===h||h!==null&&x===h.alternate)break t;x=lr(x),h=lr(h)}x=null}else x=null;m!==null&&Td(p,g,m,x,!1),v!==null&&E!==null&&Td(p,E,v,x,!0)}}e:{if(g=u?pr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var j=Rv;else if(Sd(g))if(Eh)j=Nv;else{j=zv;var $=Iv}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Mv);if(j&&(j=j(e,u))){Sh(p,j,n,f);break e}$&&$(e,g,u),e==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&Os(g,"number",g.value)}switch($=u?pr(u):window,e){case"focusin":(Sd($)||$.contentEditable==="true")&&(dr=$,Vs=u,xo=null);break;case"focusout":xo=Vs=dr=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,$d(p,n,f);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":$d(p,n,f)}var C;if(Ju)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else cr?xh(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yh&&n.locale!=="ko"&&(cr||b!=="onCompositionStart"?b==="onCompositionEnd"&&cr&&(C=vh()):(hn=f,Gu="value"in hn?hn.value:hn.textContent,cr=!0)),$=il(u,b),0<$.length&&(b=new vd(b,e,null,n,f),p.push({event:b,listeners:$}),C?b.data=C:(C=wh(n),C!==null&&(b.data=C)))),(C=_v?bv(e,n):Tv(e,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(f=new vd("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}Rh(p,t)})}function No(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=To(e,n),i!=null&&r.unshift(No(e,i,o)),i=To(e,t),i!=null&&r.push(No(e,i,o))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=To(n,i),s!=null&&l.unshift(No(n,s,a))):o||(s=To(n,i),s!=null&&l.push(No(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Vv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(Vv,`
`).replace(Wv,"")}function mi(e,t,n){if(t=Pd(t),Pd(e)!==t&&n)throw Error(R(425))}function ll(){}var Hs=null,Qs=null;function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ks=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(Yv)}:Ks;function Yv(e){setTimeout(function(){throw e})}function Ka(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ro(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ro(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),At="__reactFiber$"+Qr,Lo="__reactProps$"+Qr,qt="__reactContainer$"+Qr,Gs="__reactEvents$"+Qr,Kv="__reactListeners$"+Qr,Gv="__reactHandles$"+Qr;function Vn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[At])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[At]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Bl(e){return e[Lo]||null}var Xs=[],hr=-1;function Nn(e){return{current:e}}function he(e){0>hr||(e.current=Xs[hr],Xs[hr]=null,hr--)}function de(e,t){hr++,Xs[hr]=e.current,e.current=t}var Rn={},We=Nn(Rn),Je=Nn(!1),Xn=Rn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function al(){he(Je),he(We)}function Id(e,t,n){if(We.current!==Rn)throw Error(R(168));de(We,t),de(Je,n)}function zh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Ig(e)||"Unknown",o));return Se({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Xn=We.current,de(We,e),de(Je,Je.current),!0}function zd(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=zh(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,he(Je),he(We),de(We,e)):he(Je),de(Je,n)}var Ht=null,Vl=!1,Ga=!1;function Mh(e){Ht===null?Ht=[e]:Ht.push(e)}function Xv(e){Vl=!0,Mh(e)}function Ln(){if(!Ga&&Ht!==null){Ga=!0;var e=0,t=le;try{var n=Ht;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,Vl=!1}catch(o){throw Ht!==null&&(Ht=Ht.slice(e+1)),lh(Hu,Ln),o}finally{le=t,Ga=!1}}return null}var mr=[],gr=0,ul=null,cl=0,gt=[],vt=0,qn=null,Qt=1,Yt="";function Dn(e,t){mr[gr++]=cl,mr[gr++]=ul,ul=e,cl=t}function Nh(e,t,n){gt[vt++]=Qt,gt[vt++]=Yt,gt[vt++]=qn,qn=e;var r=Qt;e=Yt;var o=32-Pt(r)-1;r&=~(1<<o),n+=1;var i=32-Pt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Qt=1<<32-Pt(t)+o|n<<o|r,Yt=i+e}else Qt=1<<i|n<<o|r,Yt=e}function ec(e){e.return!==null&&(Dn(e,1),Nh(e,1,0))}function tc(e){for(;e===ul;)ul=mr[--gr],mr[gr]=null,cl=mr[--gr],mr[gr]=null;for(;e===qn;)qn=gt[--vt],gt[vt]=null,Yt=gt[--vt],gt[vt]=null,Qt=gt[--vt],gt[vt]=null}var ot=null,rt=null,ye=!1,bt=null;function Lh(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Md(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Qt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(ye){var t=rt;if(t){var n=t;if(!Md(e,t)){if(qs(e))throw Error(R(418));t=Sn(n.nextSibling);var r=ot;t&&Md(e,t)?Lh(r,n):(e.flags=e.flags&-4097|2,ye=!1,ot=e)}}else{if(qs(e))throw Error(R(418));e.flags=e.flags&-4097|2,ye=!1,ot=e}}}function Nd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function gi(e){if(e!==ot)return!1;if(!ye)return Nd(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ys(e.type,e.memoizedProps)),t&&(t=rt)){if(qs(e))throw Ah(),Error(R(418));for(;t;)Lh(e,t),t=Sn(t.nextSibling)}if(Nd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?Sn(e.stateNode.nextSibling):null;return!0}function Ah(){for(var e=rt;e;)e=Sn(e.nextSibling)}function Rr(){rt=ot=null,ye=!1}function nc(e){bt===null?bt=[e]:bt.push(e)}var qv=tn.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var dl=Nn(null),fl=null,vr=null,rc=null;function oc(){rc=vr=fl=null}function ic(e){var t=dl.current;he(dl),e._currentValue=t}function Zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){fl=e,rc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(fl===null)throw Error(R(308));vr=e,fl.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Wn=null;function lc(e){Wn===null?Wn=[e]:Wn.push(e)}function Dh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,lc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jt(e,n)}return o=r.interleaved,o===null?(t.next=t,lc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Jt(e,n)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qu(e,n)}}function Ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pl(e,t,n,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,f=u=s=null,a=i;do{var g=a.lane,m=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(g=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(m,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(m,p,g):v,g==null)break e;p=Se({},p,g);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,s=p):f=f.next=m,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(f===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Zn|=l,e.lanes=l,e.memoizedState=p}}function Ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Uh=new Dp.Component().refs;function eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wl={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Cn(e),i=Kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&(Ot(t,e,o,r),Fi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Cn(e),i=Kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&(Ot(t,e,o,r),Fi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Cn(e),o=Kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=En(e,o,r),t!==null&&(Ot(t,e,r,n),Fi(t,e,r))}};function Dd(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(o,i):!0}function Bh(e,t,n){var r=!1,o=Rn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=Ze(t)?Xn:We.current,r=t.contextTypes,i=(r=r!=null)?Or(e,o):Rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function tu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Uh,ac(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=Ze(t)?Xn:We.current,o.context=Or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(eu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wl.enqueueReplaceState(o,o.state,null),pl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function no(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Uh&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function Vh(e){function t(h,d){if(e){var y=h.deletions;y===null?(h.deletions=[d],h.flags|=16):y.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=kn(h,d),h.index=0,h.sibling=null,h}function i(h,d,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<d?(h.flags|=2,d):y):(h.flags|=2,d)):(h.flags|=1048576,d)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,y,w){return d===null||d.tag!==6?(d=ns(y,h.mode,w),d.return=h,d):(d=o(d,y),d.return=h,d)}function s(h,d,y,w){var j=y.type;return j===ur?f(h,d,y.props.children,w,y.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===un&&Ud(j)===d.type)?(w=o(d,y.props),w.ref=no(h,d,y),w.return=h,w):(w=Qi(y.type,y.key,y.props,null,h.mode,w),w.ref=no(h,d,y),w.return=h,w)}function u(h,d,y,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=rs(y,h.mode,w),d.return=h,d):(d=o(d,y.children||[]),d.return=h,d)}function f(h,d,y,w,j){return d===null||d.tag!==7?(d=Kn(y,h.mode,w,j),d.return=h,d):(d=o(d,y),d.return=h,d)}function p(h,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ns(""+d,h.mode,y),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case li:return y=Qi(d.type,d.key,d.props,null,h.mode,y),y.ref=no(h,null,d),y.return=h,y;case sr:return d=rs(d,h.mode,y),d.return=h,d;case un:var w=d._init;return p(h,w(d._payload),y)}if(ao(d)||qr(d))return d=Kn(d,h.mode,y,null),d.return=h,d;vi(h,d)}return null}function g(h,d,y,w){var j=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:a(h,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case li:return y.key===j?s(h,d,y,w):null;case sr:return y.key===j?u(h,d,y,w):null;case un:return j=y._init,g(h,d,j(y._payload),w)}if(ao(y)||qr(y))return j!==null?null:f(h,d,y,w,null);vi(h,y)}return null}function m(h,d,y,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(y)||null,a(d,h,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case li:return h=h.get(w.key===null?y:w.key)||null,s(d,h,w,j);case sr:return h=h.get(w.key===null?y:w.key)||null,u(d,h,w,j);case un:var $=w._init;return m(h,d,y,$(w._payload),j)}if(ao(w)||qr(w))return h=h.get(y)||null,f(d,h,w,j,null);vi(d,w)}return null}function v(h,d,y,w){for(var j=null,$=null,C=d,b=d=0,T=null;C!==null&&b<y.length;b++){C.index>b?(T=C,C=null):T=C.sibling;var O=g(h,C,y[b],w);if(O===null){C===null&&(C=T);break}e&&C&&O.alternate===null&&t(h,C),d=i(O,d,b),$===null?j=O:$.sibling=O,$=O,C=T}if(b===y.length)return n(h,C),ye&&Dn(h,b),j;if(C===null){for(;b<y.length;b++)C=p(h,y[b],w),C!==null&&(d=i(C,d,b),$===null?j=C:$.sibling=C,$=C);return ye&&Dn(h,b),j}for(C=r(h,C);b<y.length;b++)T=m(C,h,b,y[b],w),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?b:T.key),d=i(T,d,b),$===null?j=T:$.sibling=T,$=T);return e&&C.forEach(function(L){return t(h,L)}),ye&&Dn(h,b),j}function x(h,d,y,w){var j=qr(y);if(typeof j!="function")throw Error(R(150));if(y=j.call(y),y==null)throw Error(R(151));for(var $=j=null,C=d,b=d=0,T=null,O=y.next();C!==null&&!O.done;b++,O=y.next()){C.index>b?(T=C,C=null):T=C.sibling;var L=g(h,C,O.value,w);if(L===null){C===null&&(C=T);break}e&&C&&L.alternate===null&&t(h,C),d=i(L,d,b),$===null?j=L:$.sibling=L,$=L,C=T}if(O.done)return n(h,C),ye&&Dn(h,b),j;if(C===null){for(;!O.done;b++,O=y.next())O=p(h,O.value,w),O!==null&&(d=i(O,d,b),$===null?j=O:$.sibling=O,$=O);return ye&&Dn(h,b),j}for(C=r(h,C);!O.done;b++,O=y.next())O=m(C,h,b,O.value,w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?b:O.key),d=i(O,d,b),$===null?j=O:$.sibling=O,$=O);return e&&C.forEach(function(D){return t(h,D)}),ye&&Dn(h,b),j}function E(h,d,y,w){if(typeof y=="object"&&y!==null&&y.type===ur&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case li:e:{for(var j=y.key,$=d;$!==null;){if($.key===j){if(j=y.type,j===ur){if($.tag===7){n(h,$.sibling),d=o($,y.props.children),d.return=h,h=d;break e}}else if($.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===un&&Ud(j)===$.type){n(h,$.sibling),d=o($,y.props),d.ref=no(h,$,y),d.return=h,h=d;break e}n(h,$);break}else t(h,$);$=$.sibling}y.type===ur?(d=Kn(y.props.children,h.mode,w,y.key),d.return=h,h=d):(w=Qi(y.type,y.key,y.props,null,h.mode,w),w.ref=no(h,d,y),w.return=h,h=w)}return l(h);case sr:e:{for($=y.key;d!==null;){if(d.key===$)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(h,d.sibling),d=o(d,y.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=rs(y,h.mode,w),d.return=h,h=d}return l(h);case un:return $=y._init,E(h,d,$(y._payload),w)}if(ao(y))return v(h,d,y,w);if(qr(y))return x(h,d,y,w);vi(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(h,d.sibling),d=o(d,y),d.return=h,h=d):(n(h,d),d=ns(y,h.mode,w),d.return=h,h=d),l(h)):n(h,d)}return E}var Ir=Vh(!0),Wh=Vh(!1),ti={},Ft=Nn(ti),Ao=Nn(ti),Do=Nn(ti);function Hn(e){if(e===ti)throw Error(R(174));return e}function sc(e,t){switch(de(Do,t),de(Ao,e),de(Ft,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}he(Ft),de(Ft,t)}function zr(){he(Ft),he(Ao),he(Do)}function Hh(e){Hn(Do.current);var t=Hn(Ft.current),n=Is(t,e.type);t!==n&&(de(Ao,e),de(Ft,n))}function uc(e){Ao.current===e&&(he(Ft),he(Ao))}var xe=Nn(0);function hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xa=[];function cc(){for(var e=0;e<Xa.length;e++)Xa[e]._workInProgressVersionPrimary=null;Xa.length=0}var Ui=tn.ReactCurrentDispatcher,qa=tn.ReactCurrentBatchConfig,Jn=0,we=null,Te=null,Re=null,ml=!1,wo=!1,Fo=0,Jv=0;function De(){throw Error(R(321))}function dc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function fc(e,t,n,r,o,i){if(Jn=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?ny:ry,e=n(r,o),wo){i=0;do{if(wo=!1,Fo=0,25<=i)throw Error(R(301));i+=1,Re=Te=null,t.updateQueue=null,Ui.current=oy,e=n(r,o)}while(wo)}if(Ui.current=gl,t=Te!==null&&Te.next!==null,Jn=0,Re=Te=we=null,ml=!1,t)throw Error(R(300));return e}function pc(){var e=Fo!==0;return Fo=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?we.memoizedState=Re=e:Re=Re.next=e,Re}function St(){if(Te===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Re===null?we.memoizedState:Re.next;if(t!==null)Re=t,Te=e;else{if(e===null)throw Error(R(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Re===null?we.memoizedState=Re=e:Re=Re.next=e}return Re}function Uo(e,t){return typeof t=="function"?t(e):t}function Ja(e){var t=St(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((Jn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,we.lanes|=f,Zn|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,It(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,we.lanes|=i,Zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Za(e){var t=St(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);It(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qh(){}function Yh(e,t){var n=we,r=St(),o=t(),i=!It(r.memoizedState,o);if(i&&(r.memoizedState=o,Xe=!0),r=r.queue,hc(Xh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Bo(9,Gh.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(R(349));Jn&30||Kh(n,t,o)}return o}function Kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gh(e,t,n,r){t.value=n,t.getSnapshot=r,qh(t)&&Jh(e)}function Xh(e,t,n){return n(function(){qh(t)&&Jh(e)})}function qh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Jh(e){var t=Jt(e,1);t!==null&&Ot(t,e,1,-1)}function Bd(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=ty.bind(null,we,e),[t.memoizedState,e]}function Bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zh(){return St().memoizedState}function Bi(e,t,n,r){var o=Nt();we.flags|=e,o.memoizedState=Bo(1|t,n,void 0,r===void 0?null:r)}function Hl(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(Te!==null){var l=Te.memoizedState;if(i=l.destroy,r!==null&&dc(r,l.deps)){o.memoizedState=Bo(t,n,i,r);return}}we.flags|=e,o.memoizedState=Bo(1|t,n,i,r)}function Vd(e,t){return Bi(8390656,8,e,t)}function hc(e,t){return Hl(2048,8,e,t)}function em(e,t){return Hl(4,2,e,t)}function tm(e,t){return Hl(4,4,e,t)}function nm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rm(e,t,n){return n=n!=null?n.concat([e]):null,Hl(4,4,nm.bind(null,t,e),n)}function mc(){}function om(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function im(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lm(e,t,n){return Jn&21?(It(n,t)||(n=uh(),we.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function Zv(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=qa.transition;qa.transition={};try{e(!1),t()}finally{le=n,qa.transition=r}}function am(){return St().memoizedState}function ey(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sm(e))um(t,n);else if(n=Dh(e,t,n,r),n!==null){var o=Qe();Ot(n,e,r,o),cm(n,t,r)}}function ty(e,t,n){var r=Cn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sm(e))um(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,It(a,l)){var s=t.interleaved;s===null?(o.next=o,lc(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Dh(e,t,o,r),n!==null&&(o=Qe(),Ot(n,e,r,o),cm(n,t,r))}}function sm(e){var t=e.alternate;return e===we||t!==null&&t===we}function um(e,t){wo=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qu(e,n)}}var gl={readContext:wt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ny={readContext:wt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,nm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ey.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Bd,useDebugValue:mc,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Bd(!1),t=e[0];return e=Zv.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,o=Nt();if(ye){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ze===null)throw Error(R(349));Jn&30||Kh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vd(Xh.bind(null,r,i,e),[e]),r.flags|=2048,Bo(9,Gh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=ze.identifierPrefix;if(ye){var n=Yt,r=Qt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ry={readContext:wt,useCallback:om,useContext:wt,useEffect:hc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:im,useReducer:Ja,useRef:Zh,useState:function(){return Ja(Uo)},useDebugValue:mc,useDeferredValue:function(e){var t=St();return lm(t,Te.memoizedState,e)},useTransition:function(){var e=Ja(Uo)[0],t=St().memoizedState;return[e,t]},useMutableSource:Qh,useSyncExternalStore:Yh,useId:am,unstable_isNewReconciler:!1},oy={readContext:wt,useCallback:om,useContext:wt,useEffect:hc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:im,useReducer:Za,useRef:Zh,useState:function(){return Za(Uo)},useDebugValue:mc,useDeferredValue:function(e){var t=St();return Te===null?t.memoizedState=e:lm(t,Te.memoizedState,e)},useTransition:function(){var e=Za(Uo)[0],t=St().memoizedState;return[e,t]},useMutableSource:Qh,useSyncExternalStore:Yh,useId:am,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",r=t;do n+=Rg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function dm(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,fu=r),nu(e,t)},n}function fm(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){nu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nu(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xy.bind(null,e,t,n),t.then(e,e))}function Hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var ly=tn.ReactCurrentOwner,Xe=!1;function He(e,t,n,r){t.child=e===null?Wh(t,null,n,r):Ir(t,e.child,n,r)}function Yd(e,t,n,r,o){n=n.render;var i=t.ref;return $r(t,o),r=fc(e,t,n,r,i,o),n=pc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(ye&&n&&ec(t),t.flags|=1,He(e,t,r,o),t.child)}function Kd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!jc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pm(e,t,i,r,o)):(e=Qi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(l,r)&&e.ref===t.ref)return Zt(e,t,o)}return t.flags|=1,e=kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zo(i,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Zt(e,t,o)}return ru(e,t,n,r,o)}function hm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(xr,nt),nt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(xr,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(xr,nt),nt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(xr,nt),nt|=r;return He(e,t,o,n),t.child}function mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ru(e,t,n,r,o){var i=Ze(n)?Xn:We.current;return i=Or(t,i),$r(t,o),n=fc(e,t,n,r,i,o),r=pc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(ye&&r&&ec(t),t.flags|=1,He(e,t,n,o),t.child)}function Gd(e,t,n,r,o){if(Ze(n)){var i=!0;sl(t)}else i=!1;if($r(t,o),t.stateNode===null)Vi(e,t),Bh(t,n,r),tu(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=Ze(n)?Xn:We.current,u=Or(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Fd(t,l,r,u),cn=!1;var g=t.memoizedState;l.state=g,pl(t,r,l,o),s=t.memoizedState,a!==r||g!==s||Je.current||cn?(typeof f=="function"&&(eu(t,n,f,r),s=t.memoizedState),(a=cn||Dd(t,n,a,r,g,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Fh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:$t(t.type,a),l.props=u,p=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=Ze(n)?Xn:We.current,s=Or(t,s));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||g!==s)&&Fd(t,l,r,s),cn=!1,g=t.memoizedState,l.state=g,pl(t,r,l,o);var v=t.memoizedState;a!==p||g!==v||Je.current||cn?(typeof m=="function"&&(eu(t,n,m,r),v=t.memoizedState),(u=cn||Dd(t,n,u,r,g,v,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ou(e,t,n,r,i,o)}function ou(e,t,n,r,o,i){mm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zd(t,n,!1),Zt(e,t,i);r=t.stateNode,ly.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ir(t,e.child,null,i),t.child=Ir(t,null,a,i)):He(e,t,a,i),t.memoizedState=r.state,o&&zd(t,n,!0),t.child}function gm(e){var t=e.stateNode;t.pendingContext?Id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Id(e,t.context,!1),sc(e,t.containerInfo)}function Xd(e,t,n,r,o){return Rr(),nc(o),t.flags|=256,He(e,t,n,r),t.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function vm(e,t,n){var r=t.pendingProps,o=xe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(xe,o&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Kl(l,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=lu(n),t.memoizedState=iu,e):gc(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return ay(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=kn(a,i):(i=Kn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?lu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=iu,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gc(e,t){return t=Kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&nc(r),Ir(t,e.child,null,n),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ay(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=es(Error(R(422))),yi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Kl({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ir(t,e.child,null,l),t.child.memoizedState=lu(l),t.memoizedState=iu,i);if(!(t.mode&1))return yi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(R(419)),r=es(i,r,void 0),yi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Xe||a){if(r=ze,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Jt(e,o),Ot(r,e,o,-1))}return Ec(),r=es(Error(R(421))),yi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=wy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,rt=Sn(o.nextSibling),ot=t,ye=!0,bt=null,e!==null&&(gt[vt++]=Qt,gt[vt++]=Yt,gt[vt++]=qn,Qt=e.id,Yt=e.overflow,qn=t),t=gc(t,r.children),t.flags|=4096,t)}function qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zs(e.return,t,n)}function ts(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ym(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(He(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(xe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&hl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ts(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ts(t,!0,n,null,i);break;case"together":ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sy(e,t,n){switch(t.tag){case 3:gm(t),Rr();break;case 5:Hh(t);break;case 1:Ze(t.type)&&sl(t);break;case 4:sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;de(dl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?vm(e,t,n):(de(xe,xe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);de(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ym(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,hm(e,t,n)}return Zt(e,t,n)}var xm,au,wm,Sm;xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};au=function(){};wm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hn(Ft.current);var i=null;switch(n){case"input":o=Ts(e,o),r=Ts(e,r),i=[];break;case"select":o=Se({},o,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":o=Rs(e,o),r=Rs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}zs(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&fe("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Sm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ro(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uy(e,t,n){var r=t.pendingProps;switch(tc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ze(t.type)&&al(),Fe(t),null;case 3:return r=t.stateNode,zr(),he(Je),he(We),cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(mu(bt),bt=null))),au(e,t),Fe(t),null;case 5:uc(t);var o=Hn(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)wm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Fe(t),null}if(e=Hn(Ft.current),gi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[At]=t,r[Lo]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(o=0;o<uo.length;o++)fe(uo[o],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ld(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":sd(r,i),fe("invalid",r)}zs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),o=["children",""+a]):_o.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&fe("scroll",r)}switch(n){case"input":ai(r),ad(r,i,!0);break;case"textarea":ai(r),ud(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[At]=t,e[Lo]=r,xm(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ms(n,r),n){case"dialog":fe("cancel",e),fe("close",e),o=r;break;case"iframe":case"object":case"embed":fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<uo.length;o++)fe(uo[o],e);o=r;break;case"source":fe("error",e),o=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=r;break;case"details":fe("toggle",e),o=r;break;case"input":ld(e,r),o=Ts(e,r),fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Se({},r,{value:void 0}),fe("invalid",e);break;case"textarea":sd(e,r),o=Rs(e,r),fe("invalid",e);break;default:o=r}zs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?qp(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gp(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bo(e,s):typeof s=="number"&&bo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_o.hasOwnProperty(i)?s!=null&&i==="onScroll"&&fe("scroll",e):s!=null&&Fu(e,i,s,l))}switch(n){case"input":ai(e),ad(e,r,!1);break;case"textarea":ai(e),ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Er(e,!!r.multiple,i,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Sm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Hn(Do.current),Hn(Ft.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(i=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Fe(t),null;case 13:if(he(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&rt!==null&&t.mode&1&&!(t.flags&128))Ah(),Rr(),t.flags|=98560,i=!1;else if(i=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[At]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else bt!==null&&(mu(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Pe===0&&(Pe=3):Ec())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return zr(),au(e,t),e===null&&Mo(t.stateNode.containerInfo),Fe(t),null;case 10:return ic(t.type._context),Fe(t),null;case 17:return Ze(t.type)&&al(),Fe(t),null;case 19:if(he(xe),i=t.memoizedState,i===null)return Fe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ro(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=hl(e),l!==null){for(t.flags|=128,ro(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(xe,xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ce()>Nr&&(t.flags|=128,r=!0,ro(i,!1),t.lanes=4194304)}else{if(!r)if(e=hl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ye)return Fe(t),null}else 2*Ce()-i.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,ro(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ce(),t.sibling=null,n=xe.current,de(xe,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function cy(e,t){switch(tc(t),t.tag){case 1:return Ze(t.type)&&al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),he(Je),he(We),cc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uc(t),null;case 13:if(he(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(xe),null;case 4:return zr(),null;case 10:return ic(t.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var xi=!1,Be=!1,dy=typeof WeakSet=="function"?WeakSet:Set,M=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function su(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Jd=!1;function fy(e,t){if(Hs=rl,e=kh(),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var m;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(m=p.firstChild)!==null;)g=p,p=m;for(;;){if(p===e)break t;if(g===n&&++u===o&&(a=l),g===i&&++f===r&&(s=l),(m=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=m}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qs={focusedElem:e,selectionRange:n},rl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,E=v.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:$t(t.type,x),E);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Jd,Jd=!1,v}function So(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&su(t,n,i)}o=o.next}while(o!==r)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Em(e){var t=e.alternate;t!==null&&(e.alternate=null,Em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Lo],delete t[Gs],delete t[Kv],delete t[Gv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jm(e){return e.tag===5||e.tag===3||e.tag===4}function Zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}var Ne=null,_t=!1;function rn(e,t,n){for(n=n.child;n!==null;)Cm(e,t,n),n=n.sibling}function Cm(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Be||yr(n,t);case 6:var r=Ne,o=_t;Ne=null,rn(e,t,n),Ne=r,_t=o,Ne!==null&&(_t?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(_t?(e=Ne,n=n.stateNode,e.nodeType===8?Ka(e.parentNode,n):e.nodeType===1&&Ka(e,n),Ro(e)):Ka(Ne,n.stateNode));break;case 4:r=Ne,o=_t,Ne=n.stateNode.containerInfo,_t=!0,rn(e,t,n),Ne=r,_t=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&su(n,t,l),o=o.next}while(o!==r)}rn(e,t,n);break;case 1:if(!Be&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,t,a)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,rn(e,t,n),Be=r):rn(e,t,n);break;default:rn(e,t,n)}}function ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dy),t.forEach(function(r){var o=Sy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,_t=!1;break e;case 3:Ne=a.stateNode.containerInfo,_t=!0;break e;case 4:Ne=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Ne===null)throw Error(R(160));Cm(i,l,o),Ne=null,_t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)km(t,e),t=t.sibling}function km(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),zt(e),r&4){try{So(3,e,e.return),Ql(3,e)}catch(x){Ee(e,e.return,x)}try{So(5,e,e.return)}catch(x){Ee(e,e.return,x)}}break;case 1:kt(t,e),zt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(kt(t,e),zt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var o=e.stateNode;try{bo(o,"")}catch(x){Ee(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qp(o,i),Ms(a,l);var u=Ms(a,i);for(l=0;l<s.length;l+=2){var f=s[l],p=s[l+1];f==="style"?qp(o,p):f==="dangerouslySetInnerHTML"?Gp(o,p):f==="children"?bo(o,p):Fu(o,f,p,u)}switch(a){case"input":Ps(o,i);break;case"textarea":Yp(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Er(o,!!i.multiple,m,!1):g!==!!i.multiple&&(i.defaultValue!=null?Er(o,!!i.multiple,i.defaultValue,!0):Er(o,!!i.multiple,i.multiple?[]:"",!1))}o[Lo]=i}catch(x){Ee(e,e.return,x)}}break;case 6:if(kt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Ee(e,e.return,x)}}break;case 3:if(kt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(t.containerInfo)}catch(x){Ee(e,e.return,x)}break;case 4:kt(t,e),zt(e);break;case 13:kt(t,e),zt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(xc=Ce())),r&4&&ef(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||f,kt(t,e),Be=u):kt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(p=M=f;M!==null;){switch(g=M,m=g.child,g.tag){case 0:case 11:case 14:case 15:So(4,g,g.return);break;case 1:yr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Ee(r,n,x)}}break;case 5:yr(g,g.return);break;case 22:if(g.memoizedState!==null){nf(p);continue}}m!==null?(m.return=g,M=m):nf(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Xp("display",l))}catch(x){Ee(e,e.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){Ee(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kt(t,e),zt(e),r&4&&ef(e);break;case 21:break;default:kt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jm(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(bo(o,""),r.flags&=-33);var i=Zd(e);du(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Zd(e);cu(e,a,l);break;default:throw Error(R(161))}}catch(s){Ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function py(e,t,n){M=e,$m(e)}function $m(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||xi;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Be;a=xi;var u=Be;if(xi=l,(Be=s)&&!u)for(M=o;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?rf(o):s!==null?(s.return=l,M=s):rf(o);for(;i!==null;)M=i,$m(i),i=i.sibling;M=o,xi=a,Be=u}tf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):tf(e)}}function tf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||Ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ad(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ad(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ro(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Be||t.flags&512&&uu(t)}catch(g){Ee(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function nf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function rf(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(s){Ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ee(t,o,s)}}var i=t.return;try{uu(t)}catch(s){Ee(t,i,s)}break;case 5:var l=t.return;try{uu(t)}catch(s){Ee(t,l,s)}}}catch(s){Ee(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var hy=Math.ceil,vl=tn.ReactCurrentDispatcher,vc=tn.ReactCurrentOwner,xt=tn.ReactCurrentBatchConfig,J=0,ze=null,_e=null,Le=0,nt=0,xr=Nn(0),Pe=0,Vo=null,Zn=0,Yl=0,yc=0,Eo=null,Ge=null,xc=0,Nr=1/0,Vt=null,yl=!1,fu=null,jn=null,wi=!1,mn=null,xl=0,jo=0,pu=null,Wi=-1,Hi=0;function Qe(){return J&6?Ce():Wi!==-1?Wi:Wi=Ce()}function Cn(e){return e.mode&1?J&2&&Le!==0?Le&-Le:qv.transition!==null?(Hi===0&&(Hi=uh()),Hi):(e=le,e!==0||(e=window.event,e=e===void 0?16:gh(e.type)),e):1}function Ot(e,t,n,r){if(50<jo)throw jo=0,pu=null,Error(R(185));Jo(e,n,r),(!(J&2)||e!==ze)&&(e===ze&&(!(J&2)&&(Yl|=n),Pe===4&&fn(e,Le)),et(e,r),n===1&&J===0&&!(t.mode&1)&&(Nr=Ce()+500,Vl&&Ln()))}function et(e,t){var n=e.callbackNode;qg(e,t);var r=nl(e,e===ze?Le:0);if(r===0)n!==null&&fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fd(n),t===1)e.tag===0?Xv(of.bind(null,e)):Mh(of.bind(null,e)),Qv(function(){!(J&6)&&Ln()}),n=null;else{switch(ch(r)){case 1:n=Hu;break;case 4:n=ah;break;case 16:n=tl;break;case 536870912:n=sh;break;default:n=tl}n=zm(n,_m.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _m(e,t){if(Wi=-1,Hi=0,J&6)throw Error(R(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=nl(e,e===ze?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var o=J;J|=2;var i=Tm();(ze!==e||Le!==t)&&(Vt=null,Nr=Ce()+500,Yn(e,t));do try{vy();break}catch(a){bm(e,a)}while(1);oc(),vl.current=i,J=o,_e!==null?t=0:(ze=null,Le=0,t=Pe)}if(t!==0){if(t===2&&(o=Fs(e),o!==0&&(r=o,t=hu(e,o))),t===1)throw n=Vo,Yn(e,0),fn(e,r),et(e,Ce()),n;if(t===6)fn(e,r);else{if(o=e.current.alternate,!(r&30)&&!my(o)&&(t=wl(e,r),t===2&&(i=Fs(e),i!==0&&(r=i,t=hu(e,i))),t===1))throw n=Vo,Yn(e,0),fn(e,r),et(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Fn(e,Ge,Vt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=xc+500-Ce(),10<t)){if(nl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ks(Fn.bind(null,e,Ge,Vt),t);break}Fn(e,Ge,Vt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Pt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hy(r/1960))-r,10<r){e.timeoutHandle=Ks(Fn.bind(null,e,Ge,Vt),r);break}Fn(e,Ge,Vt);break;case 5:Fn(e,Ge,Vt);break;default:throw Error(R(329))}}}return et(e,Ce()),e.callbackNode===n?_m.bind(null,e):null}function hu(e,t){var n=Eo;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=wl(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&mu(t)),e}function mu(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function my(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!It(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~yc,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(J&6)throw Error(R(327));_r();var t=nl(e,0);if(!(t&1))return et(e,Ce()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=Fs(e);r!==0&&(t=r,n=hu(e,r))}if(n===1)throw n=Vo,Yn(e,0),fn(e,t),et(e,Ce()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,Ge,Vt),et(e,Ce()),null}function wc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Nr=Ce()+500,Vl&&Ln())}}function er(e){mn!==null&&mn.tag===0&&!(J&6)&&_r();var t=J;J|=1;var n=xt.transition,r=le;try{if(xt.transition=null,le=1,e)return e()}finally{le=r,xt.transition=n,J=t,!(J&6)&&Ln()}}function Sc(){nt=xr.current,he(xr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hv(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:zr(),he(Je),he(We),cc();break;case 5:uc(r);break;case 4:zr();break;case 13:he(xe);break;case 19:he(xe);break;case 10:ic(r.type._context);break;case 22:case 23:Sc()}n=n.return}if(ze=e,_e=e=kn(e.current,null),Le=nt=t,Pe=0,Vo=null,yc=Yl=Zn=0,Ge=Eo=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Wn=null}return e}function bm(e,t){do{var n=_e;try{if(oc(),Ui.current=gl,ml){for(var r=we.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ml=!1}if(Jn=0,Re=Te=we=null,wo=!1,Fo=0,vc.current=null,n===null||n.return===null){Pe=1,Vo=t,_e=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Le,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Hd(l);if(m!==null){m.flags&=-257,Qd(m,l,a,i,t),m.mode&1&&Wd(i,u,t),t=m,s=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(s),t.updateQueue=x}else v.add(s);break e}else{if(!(t&1)){Wd(i,u,t),Ec();break e}s=Error(R(426))}}else if(ye&&a.mode&1){var E=Hd(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qd(E,l,a,i,t),nc(Mr(s,a));break e}}i=s=Mr(s,a),Pe!==4&&(Pe=2),Eo===null?Eo=[i]:Eo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=dm(i,s,t);Ld(i,h);break e;case 1:a=s;var d=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jn===null||!jn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=fm(i,a,t);Ld(i,w);break e}}i=i.return}while(i!==null)}Om(n)}catch(j){t=j,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function Tm(){var e=vl.current;return vl.current=gl,e===null?gl:e}function Ec(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),ze===null||!(Zn&268435455)&&!(Yl&268435455)||fn(ze,Le)}function wl(e,t){var n=J;J|=2;var r=Tm();(ze!==e||Le!==t)&&(Vt=null,Yn(e,t));do try{gy();break}catch(o){bm(e,o)}while(1);if(oc(),J=n,vl.current=r,_e!==null)throw Error(R(261));return ze=null,Le=0,Pe}function gy(){for(;_e!==null;)Pm(_e)}function vy(){for(;_e!==null&&!Bg();)Pm(_e)}function Pm(e){var t=Im(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Om(e):_e=t,vc.current=null}function Om(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cy(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,_e=null;return}}else if(n=uy(n,t,nt),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Pe===0&&(Pe=5)}function Fn(e,t,n){var r=le,o=xt.transition;try{xt.transition=null,le=1,yy(e,t,n,r)}finally{xt.transition=o,le=r}return null}function yy(e,t,n,r){do _r();while(mn!==null);if(J&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jg(e,i),e===ze&&(_e=ze=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,zm(tl,function(){return _r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xt.transition,xt.transition=null;var l=le;le=1;var a=J;J|=4,vc.current=null,fy(e,n),km(n,e),Av(Qs),rl=!!Hs,Qs=Hs=null,e.current=n,py(n),Vg(),J=a,le=l,xt.transition=i}else e.current=n;if(wi&&(wi=!1,mn=e,xl=o),i=e.pendingLanes,i===0&&(jn=null),Qg(n.stateNode),et(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yl)throw yl=!1,e=fu,fu=null,e;return xl&1&&e.tag!==0&&_r(),i=e.pendingLanes,i&1?e===pu?jo++:(jo=0,pu=e):jo=0,Ln(),null}function _r(){if(mn!==null){var e=ch(xl),t=xt.transition,n=le;try{if(xt.transition=null,le=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,xl=0,J&6)throw Error(R(331));var o=J;for(J|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:So(8,f,i)}var p=f.child;if(p!==null)p.return=f,M=p;else for(;M!==null;){f=M;var g=f.sibling,m=f.return;if(Em(f),f===u){M=null;break}if(g!==null){g.return=m,M=g;break}M=m}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,M=h;break e}M=i.return}}var d=e.current;for(M=d;M!==null;){l=M;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,M=y;else e:for(l=d;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ql(9,a)}}catch(j){Ee(a,a.return,j)}if(a===l){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(J=o,Ln(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{le=n,xt.transition=t}}return!1}function lf(e,t,n){t=Mr(n,t),t=dm(e,t,1),e=En(e,t,1),t=Qe(),e!==null&&(Jo(e,1,t),et(e,t))}function Ee(e,t,n){if(e.tag===3)lf(e,e,n);else for(;t!==null;){if(t.tag===3){lf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Mr(n,e),e=fm(t,e,1),t=En(t,e,1),e=Qe(),t!==null&&(Jo(t,1,e),et(t,e));break}}t=t.return}}function xy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Le&n)===n&&(Pe===4||Pe===3&&(Le&130023424)===Le&&500>Ce()-xc?Yn(e,0):yc|=n),et(e,t)}function Rm(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=Qe();e=Jt(e,t),e!==null&&(Jo(e,t,n),et(e,n))}function wy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rm(e,n)}function Sy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Rm(e,n)}var Im;Im=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,sy(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,ye&&t.flags&1048576&&Nh(t,cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var o=Or(t,We.current);$r(t,n),o=fc(null,t,r,e,o,n);var i=pc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,sl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ac(t),o.updater=Wl,t.stateNode=o,o._reactInternals=t,tu(t,r,e,n),t=ou(null,t,r,!0,i,n)):(t.tag=0,ye&&i&&ec(t),He(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=jy(r),e=$t(r,e),o){case 0:t=ru(null,t,r,e,n);break e;case 1:t=Gd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=Kd(null,t,r,$t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),ru(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Gd(e,t,r,o,n);case 3:e:{if(gm(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Fh(e,t),pl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Mr(Error(R(423)),t),t=Xd(e,t,r,n,o);break e}else if(r!==o){o=Mr(Error(R(424)),t),t=Xd(e,t,r,n,o);break e}else for(rt=Sn(t.stateNode.containerInfo.firstChild),ot=t,ye=!0,bt=null,n=Wh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===o){t=Zt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Hh(t),e===null&&Js(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ys(r,o)?l=null:i!==null&&Ys(r,i)&&(t.flags|=32),mm(e,t),He(e,t,l,n),t.child;case 6:return e===null&&Js(t),null;case 13:return vm(e,t,n);case 4:return sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Yd(e,t,r,o,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,de(dl,r._currentValue),r._currentValue=l,i!==null)if(It(i.value,l)){if(i.children===o.children&&!Je.current){t=Zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Kt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Zs(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(R(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Zs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}He(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$r(t,n),o=wt(o),r=r(o),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,o=$t(r,t.pendingProps),o=$t(r.type,o),Kd(e,t,r,o,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Vi(e,t),t.tag=1,Ze(r)?(e=!0,sl(t)):e=!1,$r(t,n),Bh(t,r,o),tu(t,r,o,n),ou(null,t,r,!0,e,n);case 19:return ym(e,t,n);case 22:return hm(e,t,n)}throw Error(R(156,t.tag))};function zm(e,t){return lh(e,t)}function Ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Ey(e,t,n,r)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jy(e){if(typeof e=="function")return jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bu)return 11;if(e===Vu)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")jc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ur:return Kn(n.children,o,i,t);case Uu:l=8,o|=8;break;case ks:return e=yt(12,n,t,o|2),e.elementType=ks,e.lanes=i,e;case $s:return e=yt(13,n,t,o),e.elementType=$s,e.lanes=i,e;case _s:return e=yt(19,n,t,o),e.elementType=_s,e.lanes=i,e;case Vp:return Kl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Up:l=10;break e;case Bp:l=9;break e;case Bu:l=11;break e;case Vu:l=14;break e;case un:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=yt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Kl(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cy(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Cc(e,t,n,r,o,i,l,a,s){return e=new Cy(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(i),e}function ky(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mm(e){if(!e)return Rn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ze(n))return zh(e,n,t)}return t}function Nm(e,t,n,r,o,i,l,a,s){return e=Cc(n,r,!0,e,o,i,l,a,s),e.context=Mm(null),n=e.current,r=Qe(),o=Cn(n),i=Kt(r,o),i.callback=t??null,En(n,i,o),e.current.lanes=o,Jo(e,o,r),et(e,r),e}function Gl(e,t,n,r){var o=t.current,i=Qe(),l=Cn(o);return n=Mm(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(o,t,l),e!==null&&(Ot(e,o,l,i),Fi(e,o,l)),l}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function $y(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function $c(e){this._internalRoot=e}Xl.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Gl(e,t,null,null)};Xl.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Gl(null,e,null,null)}),t[qt]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&mh(e)}};function _c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function _y(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Sl(l);i.call(u)}}var l=Nm(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=l,e[qt]=l.current,Mo(e.nodeType===8?e.parentNode:e),er(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Sl(s);a.call(u)}}var s=Cc(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=s,e[qt]=s.current,Mo(e.nodeType===8?e.parentNode:e),er(function(){Gl(t,s,n,r)}),s}function Jl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Sl(l);a.call(s)}}Gl(t,l,e,o)}else l=_y(n,t,e,o,r);return Sl(l)}dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=so(t.pendingLanes);n!==0&&(Qu(t,n|1),et(t,Ce()),!(J&6)&&(Nr=Ce()+500,Ln()))}break;case 13:er(function(){var r=Jt(e,1);if(r!==null){var o=Qe();Ot(r,e,1,o)}}),kc(e,1)}};Yu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Qe();Ot(t,e,134217728,n)}kc(e,134217728)}};fh=function(e){if(e.tag===13){var t=Cn(e),n=Jt(e,t);if(n!==null){var r=Qe();Ot(n,e,t,r)}kc(e,t)}};ph=function(){return le};hh=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};Ls=function(e,t,n){switch(t){case"input":if(Ps(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bl(r);if(!o)throw Error(R(90));Hp(r),Ps(r,o)}}}break;case"textarea":Yp(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};eh=wc;th=er;var by={usingClientEntryPoint:!1,Events:[ei,pr,Bl,Jp,Zp,wc]},oo={findFiberByHostInstance:Vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ty={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oh(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{Al=Si.inject(Ty),Dt=Si}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(t))throw Error(R(200));return ky(e,t,null,n)};at.createRoot=function(e,t){if(!_c(e))throw Error(R(299));var n=!1,r="",o=Lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cc(e,1,!1,null,null,n,!1,r,o),e[qt]=t.current,Mo(e.nodeType===8?e.parentNode:e),new $c(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=oh(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return er(e)};at.hydrate=function(e,t,n){if(!ql(t))throw Error(R(200));return Jl(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!_c(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Lm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Nm(t,null,e,1,n??null,o,!1,i,l),e[qt]=t.current,Mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xl(t)};at.render=function(e,t,n){if(!ql(t))throw Error(R(200));return Jl(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!ql(e))throw Error(R(40));return e._reactRootContainer?(er(function(){Jl(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};at.unstable_batchedUpdates=wc;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Jl(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function Am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Am)}catch(e){console.error(e)}}Am(),Np.exports=at;var Dm=Np.exports,uf=Dm;js.createRoot=uf.createRoot,js.hydrateRoot=uf.hydrateRoot;var Ve=function(){return Ve=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ve.apply(this,arguments)};function Wo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var pe="-ms-",Co="-moz-",re="-webkit-",Fm="comm",Zl="rule",bc="decl",Py="@import",Um="@keyframes",Oy="@layer",Ry=Math.abs,Tc=String.fromCharCode,gu=Object.assign;function Iy(e,t){return Ie(e,0)^45?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function Bm(e){return e.trim()}function Wt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Yi(e,t){return e.indexOf(t)}function Ie(e,t){return e.charCodeAt(t)|0}function Lr(e,t,n){return e.slice(t,n)}function Lt(e){return e.length}function Vm(e){return e.length}function co(e,t){return t.push(e),e}function zy(e,t){return e.map(t).join("")}function cf(e,t){return e.filter(function(n){return!Wt(n,t)})}var ea=1,Ar=1,Wm=0,Et=0,$e=0,Yr="";function ta(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ea,column:Ar,length:l,return:"",siblings:a}}function sn(e,t){return gu(ta("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ar(e){for(;e.root;)e=sn(e.root,{children:[e]});co(e,e.siblings)}function My(){return $e}function Ny(){return $e=Et>0?Ie(Yr,--Et):0,Ar--,$e===10&&(Ar=1,ea--),$e}function Rt(){return $e=Et<Wm?Ie(Yr,Et++):0,Ar++,$e===10&&(Ar=1,ea++),$e}function Gn(){return Ie(Yr,Et)}function Ki(){return Et}function na(e,t){return Lr(Yr,e,t)}function vu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ly(e){return ea=Ar=1,Wm=Lt(Yr=e),Et=0,[]}function Ay(e){return Yr="",e}function os(e){return Bm(na(Et-1,yu(e===91?e+2:e===40?e+1:e)))}function Dy(e){for(;($e=Gn())&&$e<33;)Rt();return vu(e)>2||vu($e)>3?"":" "}function Fy(e,t){for(;--t&&Rt()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return na(e,Ki()+(t<6&&Gn()==32&&Rt()==32))}function yu(e){for(;Rt();)switch($e){case e:return Et;case 34:case 39:e!==34&&e!==39&&yu($e);break;case 40:e===41&&yu(e);break;case 92:Rt();break}return Et}function Uy(e,t){for(;Rt()&&e+$e!==47+10;)if(e+$e===42+42&&Gn()===47)break;return"/*"+na(t,Et-1)+"*"+Tc(e===47?e:Rt())}function By(e){for(;!vu(Gn());)Rt();return na(e,Et)}function Vy(e){return Ay(Gi("",null,null,null,[""],e=Ly(e),0,[0],e))}function Gi(e,t,n,r,o,i,l,a,s){for(var u=0,f=0,p=l,g=0,m=0,v=0,x=1,E=1,h=1,d=0,y="",w=o,j=i,$=r,C=y;E;)switch(v=d,d=Rt()){case 40:if(v!=108&&Ie(C,p-1)==58){Yi(C+=H(os(d),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=os(d);break;case 9:case 10:case 13:case 32:C+=Dy(v);break;case 92:C+=Fy(Ki()-1,7);continue;case 47:switch(Gn()){case 42:case 47:co(Wy(Uy(Rt(),Ki()),t,n,s),s);break;default:C+="/"}break;case 123*x:a[u++]=Lt(C)*h;case 125*x:case 59:case 0:switch(d){case 0:case 125:E=0;case 59+f:h==-1&&(C=H(C,/\f/g,"")),m>0&&Lt(C)-p&&co(m>32?ff(C+";",r,n,p-1,s):ff(H(C," ","")+";",r,n,p-2,s),s);break;case 59:C+=";";default:if(co($=df(C,t,n,u,f,o,a,y,w=[],j=[],p,i),i),d===123)if(f===0)Gi(C,t,$,$,w,i,p,a,j);else switch(g===99&&Ie(C,3)===110?100:g){case 100:case 108:case 109:case 115:Gi(e,$,$,r&&co(df(e,$,$,0,0,o,a,y,o,w=[],p,j),j),o,j,p,a,r?w:j);break;default:Gi(C,$,$,$,[""],j,0,a,j)}}u=f=m=0,x=h=1,y=C="",p=l;break;case 58:p=1+Lt(C),m=v;default:if(x<1){if(d==123)--x;else if(d==125&&x++==0&&Ny()==125)continue}switch(C+=Tc(d),d*x){case 38:h=f>0?1:(C+="\f",-1);break;case 44:a[u++]=(Lt(C)-1)*h,h=1;break;case 64:Gn()===45&&(C+=os(Rt())),g=Gn(),f=p=Lt(y=C+=By(Ki())),d++;break;case 45:v===45&&Lt(C)==2&&(x=0)}}return i}function df(e,t,n,r,o,i,l,a,s,u,f,p){for(var g=o-1,m=o===0?i:[""],v=Vm(m),x=0,E=0,h=0;x<r;++x)for(var d=0,y=Lr(e,g+1,g=Ry(E=l[x])),w=e;d<v;++d)(w=Bm(E>0?m[d]+" "+y:H(y,/&\f/g,m[d])))&&(s[h++]=w);return ta(e,t,n,o===0?Zl:a,s,u,f,p)}function Wy(e,t,n,r){return ta(e,t,n,Fm,Tc(My()),Lr(e,2,-2),0,r)}function ff(e,t,n,r,o){return ta(e,t,n,bc,Lr(e,0,r),Lr(e,r+1,-1),r,o)}function Hm(e,t,n){switch(Iy(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Co+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Co+e+pe+e+e;case 5936:switch(Ie(e,t+11)){case 114:return re+e+pe+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+pe+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+pe+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+pe+e+e;case 6165:return re+e+pe+"flex-"+e+e;case 5187:return re+e+H(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return re+e+pe+"flex-item-"+H(e,/flex-|-self/g,"")+(Wt(e,/flex-|baseline/)?"":pe+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return re+e+pe+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+pe+H(e,"shrink","negative")+e;case 5292:return re+e+pe+H(e,"basis","preferred-size")+e;case 6060:return re+"box-"+H(e,"-grow","")+re+e+pe+H(e,"grow","positive")+e;case 4554:return re+H(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Wt(e,/flex-|baseline/))return pe+"grid-column-align"+Lr(e,t)+e;break;case 2592:case 3360:return pe+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Wt(r.props,/grid-\w+-end/)})?~Yi(e+(n=n[t].value),"span")?e:pe+H(e,"-start","")+e+pe+"grid-row-span:"+(~Yi(n,"span")?Wt(n,/\d+/):+Wt(n,/\d+/)-+Wt(e,/\d+/))+";":pe+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Wt(r.props,/grid-\w+-start/)})?e:pe+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lt(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(Ie(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Co+(Ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Yi(e,"stretch")?Hm(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return pe+o+":"+i+u+(l?pe+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(Ie(e,t+6)===121)return H(e,":",":"+re)+e;break;case 6444:switch(Ie(e,Ie(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Ie(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+pe+"$2box$3")+e;case 100:return H(e,":",":"+pe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function El(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hy(e,t,n,r){switch(e.type){case Oy:if(e.children.length)break;case Py:case bc:return e.return=e.return||e.value;case Fm:return"";case Um:return e.return=e.value+"{"+El(e.children,r)+"}";case Zl:if(!Lt(e.value=e.props.join(",")))return""}return Lt(n=El(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qy(e){var t=Vm(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Yy(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ky(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bc:e.return=Hm(e.value,e.length,n);return;case Um:return El([sn(e,{value:H(e.value,"@","@"+re)})],r);case Zl:if(e.length)return zy(n=e.props,function(o){switch(Wt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ar(sn(e,{props:[H(o,/:(read-\w+)/,":"+Co+"$1")]})),ar(sn(e,{props:[o]})),gu(e,{props:cf(n,r)});break;case"::placeholder":ar(sn(e,{props:[H(o,/:(plac\w+)/,":"+re+"input-$1")]})),ar(sn(e,{props:[H(o,/:(plac\w+)/,":"+Co+"$1")]})),ar(sn(e,{props:[H(o,/:(plac\w+)/,pe+"input-$1")]})),ar(sn(e,{props:[o]})),gu(e,{props:cf(n,r)});break}return""})}}var Gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Pc=typeof window<"u"&&"HTMLElement"in window,Xy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),qy={},ra=Object.freeze([]),Fr=Object.freeze({});function Qm(e,t,n){return n===void 0&&(n=Fr),e.theme!==n.theme&&e.theme||t||n.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zy=/(^-|-$)/g;function pf(e){return e.replace(Jy,"-").replace(Zy,"")}var e1=/(a)(d)/gi,hf=function(e){return String.fromCharCode(e+(e>25?39:97))};function xu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=hf(t%52)+n;return(hf(t%52)+n).replace(e1,"$1-$2")}var is,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Km=function(e){return wr(5381,e)};function Gm(e){return xu(Km(e)>>>0)}function t1(e){return e.displayName||e.name||"Component"}function ls(e){return typeof e=="string"&&!0}var Xm=typeof Symbol=="function"&&Symbol.for,qm=Xm?Symbol.for("react.memo"):60115,n1=Xm?Symbol.for("react.forward_ref"):60112,r1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i1=((is={})[n1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},is[qm]=Jm,is);function mf(e){return("type"in(t=e)&&t.type.$$typeof)===qm?Jm:"$$typeof"in e?i1[e.$$typeof]:r1;var t}var l1=Object.defineProperty,a1=Object.getOwnPropertyNames,gf=Object.getOwnPropertySymbols,s1=Object.getOwnPropertyDescriptor,u1=Object.getPrototypeOf,vf=Object.prototype;function Zm(e,t,n){if(typeof t!="string"){if(vf){var r=u1(t);r&&r!==vf&&Zm(e,r,n)}var o=a1(t);gf&&(o=o.concat(gf(t)));for(var i=mf(e),l=mf(t),a=0;a<o.length;++a){var s=o[a];if(!(s in o1||n&&n[s]||l&&s in l||i&&s in i)){var u=s1(t,s);try{l1(e,s,u)}catch{}}}}return e}function Ur(e){return typeof e=="function"}function Oc(e){return typeof e=="object"&&"styledComponentId"in e}function Qn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Su(e,t,n){if(n===void 0&&(n=!1),!n&&!Ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Su(e[r],t[r]);else if(Ho(t))for(var r in t)e[r]=Su(e[r],t[r]);return e}function Rc(e,t){Object.defineProperty(e,"toString",{value:t})}function ni(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var c1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw ni(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Xi=new Map,jl=new Map,as=1,Ei=function(e){if(Xi.has(e))return Xi.get(e);for(;jl.has(as);)as++;var t=as++;return Xi.set(e,t),jl.set(t,e),t},d1=function(e,t){Xi.set(e,t),jl.set(t,e)},f1="style[".concat(Dr,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),p1=new RegExp("^".concat(Dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),h1=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},m1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(p1);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(d1(f,u),h1(e,f,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function g1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Dr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Dr,"active"),r.setAttribute("data-styled-version","6.0.7");var l=g1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},v1=function(){function e(t){this.element=e0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw ni(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),y1=function(){function e(t){this.element=e0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),x1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),yf=Pc,w1={isServer:!Pc,useCSSOMInjection:!Xy},Cl=function(){function e(t,n,r){t===void 0&&(t=Fr),n===void 0&&(n={});var o=this;this.options=Ve(Ve({},w1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Pc&&yf&&(yf=!1,function(i){for(var l=document.querySelectorAll(f1),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Dr)!=="active"&&(m1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Rc(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(p){var g=function(h){return jl.get(h)}(p);if(g===void 0)return"continue";var m=i.names.get(g),v=l.getGroup(p);if(m===void 0||v.length===0)return"continue";var x="".concat(Dr,".g").concat(p,'[id="').concat(g,'"]'),E="";m!==void 0&&m.forEach(function(h){h.length>0&&(E+="".concat(h,","))}),s+="".concat(v).concat(x,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},f=0;f<a;f++)u(f);return s}(o)})}return e.registerId=function(t){return Ei(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ve(Ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new x1(o):r?new v1(o):new y1(o)}(this.options),new c1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ei(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ei(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ei(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),S1=/&/g,E1=/^\s*\/\/.*$/gm;function t0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=t0(n.children,t)),n})}function j1(e){var t,n,r,o=e===void 0?Fr:e,i=o.options,l=i===void 0?Fr:i,a=o.plugins,s=a===void 0?ra:a,u=function(g,m,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===Zl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(S1,n).replace(r,u))}),l.prefix&&f.push(Ky),f.push(Hy);var p=function(g,m,v,x){m===void 0&&(m=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var E=g.replace(E1,""),h=Vy(v||m?"".concat(v," ").concat(m," { ").concat(E," }"):E);l.namespace&&(h=t0(h,l.namespace));var d=[];return El(h,Qy(f.concat(Yy(function(y){return d.push(y)})))),d};return p.hash=s.length?s.reduce(function(g,m){return m.name||ni(15),wr(g,m.name)},5381).toString():"",p}var C1=new Cl,Eu=j1(),n0=V.createContext({shouldForwardProp:void 0,styleSheet:C1,stylis:Eu});n0.Consumer;V.createContext(void 0);function ju(){return _.useContext(n0)}var k1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Eu);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Rc(this,function(){throw ni(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Eu),this.name+t.hash},e}(),$1=function(e){return e>="A"&&e<="Z"};function xf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;$1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var r0=function(e){return e==null||e===!1||e===""},o0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!r0(i)&&(Array.isArray(i)&&i.isCss||Ur(i)?r.push("".concat(xf(o),":"),i,";"):Ho(i)?r.push.apply(r,Wo(Wo(["".concat(o," {")],o0(i),!1),["}"],!1)):r.push("".concat(xf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Gy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $n(e,t,n,r){if(r0(e))return[];if(Oc(e))return[".".concat(e.styledComponentId)];if(Ur(e)){if(!Ur(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return $n(o,t,n,r)}var i;return e instanceof k1?n?(e.inject(n,r),[e.getName(r)]):[e]:Ho(e)?o0(e):Array.isArray(e)?Array.prototype.concat.apply(ra,e.map(function(l){return $n(l,t,n,r)})):[e.toString()]}function i0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!Oc(n))return!1}return!0}var _1=Km("6.0.7"),b1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&i0(t),this.componentId=n,this.baseHash=wr(_1,n),this.baseStyle=r,Cl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Qn(o,this.staticRulesId);else{var i=wu($n(this.rules,t,n,r)),l=xu(wr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=Qn(o,l),this.staticRulesId=l}else{for(var s=wr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var g=wu($n(p,t,n,r));s=wr(s,g),u+=g}}if(u){var m=xu(s>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),o=Qn(o,m)}}return o},e}(),Ic=V.createContext(void 0);Ic.Consumer;var ss={};function T1(e,t,n){var r=Oc(e),o=e,i=!ls(e),l=t.attrs,a=l===void 0?ra:l,s=t.componentId,u=s===void 0?function(y,w){var j=typeof y!="string"?"sc":pf(y);ss[j]=(ss[j]||0)+1;var $="".concat(j,"-").concat(Gm("6.0.7"+j+ss[j]));return w?"".concat(w,"-").concat($):$}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(y){return ls(y)?"styled.".concat(y):"Styled(".concat(t1(y),")")}(e);var p=t.displayName&&t.componentId?"".concat(pf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(y,w){return v(y,w)&&x(y,w)}}else m=v}var E=new b1(n,p,r?o.componentStyle:void 0);function h(y,w){return function(j,$,C){var b=j.attrs,T=j.componentStyle,O=j.defaultProps,L=j.foldedComponentIds,D=j.styledComponentId,A=j.target,X=V.useContext(Ic),me=ju(),ne=j.shouldForwardProp||me.shouldForwardProp,ue=function(tt,ke,ct){for(var ge,je=Ve(Ve({},ke),{className:void 0,theme:ct}),An=0;An<tt.length;An+=1){var Bt=Ur(ge=tt[An])?ge(je):ge;for(var P in Bt)je[P]=P==="className"?Qn(je[P],Bt[P]):P==="style"?Ve(Ve({},je[P]),Bt[P]):Bt[P]}return ke.className&&(je.className=Qn(je.className,ke.className)),je}(b,$,Qm($,X,O)||Fr),I=ue.as||A,F={};for(var U in ue)ue[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?F.as=ue.forwardedAs:ne&&!ne(U,I)||(F[U]=ue[U]));var oe=function(tt,ke){var ct=ju(),ge=tt.generateAndInjectStyles(ke,ct.styleSheet,ct.stylis);return ge}(T,ue),ce=Qn(L,D);return oe&&(ce+=" "+oe),ue.className&&(ce+=" "+ue.className),F[ls(I)&&!Ym.has(I)?"class":"className"]=ce,F.ref=C,_.createElement(I,F)}(d,y,w)}var d=V.forwardRef(h);return d.attrs=g,d.componentStyle=E,d.shouldForwardProp=m,d.foldedComponentIds=r?Qn(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=p,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(w){for(var j=[],$=1;$<arguments.length;$++)j[$-1]=arguments[$];for(var C=0,b=j;C<b.length;C++)Su(w,b[C],!0);return w}({},o.defaultProps,y):y}}),Rc(d,function(){return".".concat(d.styledComponentId)}),i&&Zm(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function wf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Sf=function(e){return Object.assign(e,{isCss:!0})};function l0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Ho(e)){var r=e;return Sf($n(wf(ra,Wo([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?$n(o):Sf($n(wf(o,t)))}function Cu(e,t,n){if(n===void 0&&(n=Fr),!t)throw ni(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,l0.apply(void 0,Wo([o],i,!1)))};return r.attrs=function(o){return Cu(e,t,Ve(Ve({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Cu(e,t,Ve(Ve({},n),o))},r}var a0=function(e){return Cu(T1,e)},k=a0;Ym.forEach(function(e){k[e]=a0(e)});var P1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=i0(t),Cl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(wu($n(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Cl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function O1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=l0.apply(void 0,Wo([e],t,!1)),o="sc-global-".concat(Gm(JSON.stringify(r))),i=new P1(r,o),l=function(s){var u=ju(),f=V.useContext(Ic),p=V.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(p,s,u.styleSheet,f,u.stylis),V.useLayoutEffect(function(){if(!u.styleSheet.server)return a(p,s,u.styleSheet,f,u.stylis),function(){return i.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,f,u.stylis]),null};function a(s,u,f,p,g){if(i.isStatic)i.renderStyles(s,qy,f,g);else{var m=Ve(Ve({},u),{theme:Qm(u,p,l.defaultProps)});i.renderStyles(s,m,f,g)}}return V.memo(l)}/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const Ef="popstate";function R1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ku("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:kl(o)}return z1(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I1(){return Math.random().toString(36).substr(2,8)}function jf(e,t){return{usr:e.state,key:e.key,idx:t}}function ku(e,t,n,r){return n===void 0&&(n=null),Qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kr(t):t,{state:n,key:t&&t.key||r||I1()})}function kl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=gn.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(Qo({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function p(){a=gn.Pop;let E=f(),h=E==null?null:E-u;u=E,s&&s({action:a,location:x.location,delta:h})}function g(E,h){a=gn.Push;let d=ku(x.location,E,h);n&&n(d,E),u=f()+1;let y=jf(d,u),w=x.createHref(d);try{l.pushState(y,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(w)}i&&s&&s({action:a,location:x.location,delta:1})}function m(E,h){a=gn.Replace;let d=ku(x.location,E,h);n&&n(d,E),u=f();let y=jf(d,u),w=x.createHref(d);l.replaceState(y,"",w),i&&s&&s({action:a,location:x.location,delta:0})}function v(E){let h=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof E=="string"?E:kl(E);return be(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let x={get action(){return a},get location(){return e(o,l)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ef,p),s=E,()=>{o.removeEventListener(Ef,p),s=null}},createHref(E){return t(o,E)},createURL:v,encodeLocation(E){let h=v(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:m,go(E){return l.go(E)}};return x}var Cf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cf||(Cf={}));function M1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kr(t):t,o=Mc(r.pathname||"/",n);if(o==null)return null;let i=s0(e);N1(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=H1(i[a],K1(o));return l}function s0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(be(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=_n([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),s0(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:V1(u,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of u0(i.path))o(i,l,s)}),t}function u0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=u0(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function N1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:W1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L1=/^:\w+$/,A1=3,D1=2,F1=1,U1=10,B1=-2,kf=e=>e==="*";function V1(e,t){let n=e.split("/"),r=n.length;return n.some(kf)&&(r+=B1),t&&(r+=D1),n.filter(o=>!kf(o)).reduce((o,i)=>o+(L1.test(i)?A1:i===""?F1:U1),r)}function W1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function H1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=Q1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;i.push({params:r,pathname:_n([o,f.pathname]),pathnameBase:J1(_n([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=_n([o,f.pathnameBase]))}return i}function Q1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Y1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let g=a[p]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=G1(a[p]||"",f),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Y1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function K1(e){try{return decodeURI(e)}catch(t){return zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function G1(e,t){try{return decodeURIComponent(e)}catch(n){return zc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function X1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kr(e):e;return{pathname:n?n.startsWith("/")?n:q1(n,t):t,search:Z1(r),hash:ex(o)}}function q1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function d0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kr(e):(o=Qo({},e),be(!o.pathname||!o.pathname.includes("?"),us("?","pathname","search",o)),be(!o.pathname||!o.pathname.includes("#"),us("#","pathname","hash",o)),be(!o.search||!o.search.includes("#"),us("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let p=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;o.pathname=g.join("/")}a=p>=0?t[p]:"/"}let s=X1(o,a),u=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),J1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ex=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const f0=["post","put","patch","delete"];new Set(f0);const nx=["get",...f0];new Set(nx);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$l.apply(this,arguments)}const Nc=_.createContext(null),rx=_.createContext(null),Gr=_.createContext(null),oa=_.createContext(null),ir=_.createContext({outlet:null,matches:[],isDataRoute:!1}),p0=_.createContext(null);function ox(e,t){let{relative:n}=t===void 0?{}:t;ri()||be(!1);let{basename:r,navigator:o}=_.useContext(Gr),{hash:i,pathname:l,search:a}=m0(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:_n([r,l])),o.createHref({pathname:s,search:a,hash:i})}function ri(){return _.useContext(oa)!=null}function ia(){return ri()||be(!1),_.useContext(oa).location}function h0(e){_.useContext(Gr).static||_.useLayoutEffect(e)}function ix(){let{isDataRoute:e}=_.useContext(ir);return e?yx():lx()}function lx(){ri()||be(!1);let e=_.useContext(Nc),{basename:t,navigator:n}=_.useContext(Gr),{matches:r}=_.useContext(ir),{pathname:o}=ia(),i=JSON.stringify(c0(r).map(s=>s.pathnameBase)),l=_.useRef(!1);return h0(()=>{l.current=!0}),_.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let f=d0(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:_n([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,o,e])}function m0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(ir),{pathname:o}=ia(),i=JSON.stringify(c0(r).map(l=>l.pathnameBase));return _.useMemo(()=>d0(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function ax(e,t){return sx(e,t)}function sx(e,t,n){ri()||be(!1);let{navigator:r}=_.useContext(Gr),{matches:o}=_.useContext(ir),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=ia(),u;if(t){var f;let x=typeof t=="string"?Kr(t):t;a==="/"||(f=x.pathname)!=null&&f.startsWith(a)||be(!1),u=x}else u=s;let p=u.pathname||"/",g=a==="/"?p:p.slice(a.length)||"/",m=M1(e,{pathname:g}),v=px(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:_n([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:_n([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n);return t&&v?_.createElement(oa.Provider,{value:{location:$l({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:gn.Pop}},v):v}function ux(){let e=vx(),t=tx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:o},n):null,i)}const cx=_.createElement(ux,null);class dx extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(ir.Provider,{value:this.props.routeContext},_.createElement(p0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fx(e){let{routeContext:t,match:n,children:r}=e,o=_.useContext(Nc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(ir.Provider,{value:t},r)}function px(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||be(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let f=s.route.id?l==null?void 0:l[s.route.id]:null,p=null;n&&(p=s.route.errorElement||cx);let g=t.concat(i.slice(0,u+1)),m=()=>{let v;return f?v=p:s.route.Component?v=_.createElement(s.route.Component,null):s.route.element?v=s.route.element:v=a,_.createElement(fx,{match:s,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:v})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?_.createElement(dx,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var g0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(g0||{}),_l=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_l||{});function hx(e){let t=_.useContext(Nc);return t||be(!1),t}function mx(e){let t=_.useContext(rx);return t||be(!1),t}function gx(e){let t=_.useContext(ir);return t||be(!1),t}function v0(e){let t=gx(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function vx(){var e;let t=_.useContext(p0),n=mx(_l.UseRouteError),r=v0(_l.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function yx(){let{router:e}=hx(g0.UseNavigateStable),t=v0(_l.UseNavigateStable),n=_.useRef(!1);return h0(()=>{n.current=!0}),_.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,$l({fromRouteId:t},i)))},[e,t])}function fo(e){be(!1)}function xx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=gn.Pop,navigator:i,static:l=!1}=e;ri()&&be(!1);let a=t.replace(/^\/*/,"/"),s=_.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=Kr(r));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:m="default"}=r,v=_.useMemo(()=>{let x=Mc(u,a);return x==null?null:{location:{pathname:x,search:f,hash:p,state:g,key:m},navigationType:o}},[a,u,f,p,g,m,o]);return v==null?null:_.createElement(Gr.Provider,{value:s},_.createElement(oa.Provider,{children:n,value:v}))}function wx(e){let{children:t,location:n}=e;return ax($u(t),n)}new Promise(()=>{});function $u(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,o)=>{if(!_.isValidElement(r))return;let i=[...t,o];if(r.type===_.Fragment){n.push.apply(n,$u(r.props.children,i));return}r.type!==fo&&be(!1),!r.props.index||!r.props.children||be(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=$u(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_u.apply(this,arguments)}function Sx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ex(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jx(e,t){return e.button===0&&(!t||t==="_self")&&!Ex(e)}const Cx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],kx="startTransition",$f=wg[kx];function $x(e){let{basename:t,children:n,future:r,window:o}=e,i=_.useRef();i.current==null&&(i.current=R1({window:o,v5Compat:!0}));let l=i.current,[a,s]=_.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=_.useCallback(p=>{u&&$f?$f(()=>s(p)):s(p)},[s,u]);return _.useLayoutEffect(()=>l.listen(f),[l,f]),_.createElement(xx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oi=_.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:f}=t,p=Sx(t,Cx),{basename:g}=_.useContext(Gr),m,v=!1;if(typeof u=="string"&&bx.test(u)&&(m=u,_x))try{let d=new URL(window.location.href),y=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=Mc(y.pathname,g);y.origin===d.origin&&w!=null?u=w+y.search+y.hash:v=!0}catch{}let x=ox(u,{relative:o}),E=Tx(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:o});function h(d){r&&r(d),d.defaultPrevented||E(d)}return _.createElement("a",_u({},p,{href:m||x,onClick:v||i?r:h,ref:n,target:s}))});var _f;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(_f||(_f={}));var bf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bf||(bf={}));function Tx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=ix(),s=ia(),u=m0(e,{relative:l});return _.useCallback(f=>{if(jx(f,n)){f.preventDefault();let p=r!==void 0?r:kl(s)===kl(u);a(e,{replace:p,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}var y0={exports:{}};(function(e,t){(function(r,o){e.exports=o(_)})(og,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,s)=>{s.match=v,s.parse=x;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,f=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,p=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,m=/(dpi|dpcm|dppx)?$/;function v(y,w){return x(y).some(function(j){var $=j.inverse,C=j.type==="all"||w.type===j.type;if(C&&$||!(C||$))return!1;var b=j.expressions.every(function(T){var O=T.feature,L=T.modifier,D=T.value,A=w[O];if(!A)return!1;switch(O){case"orientation":case"scan":return A.toLowerCase()===D.toLowerCase();case"width":case"height":case"device-width":case"device-height":D=d(D),A=d(A);break;case"resolution":D=h(D),A=h(A);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":D=E(D),A=E(A);break;case"grid":case"color":case"color-index":case"monochrome":D=parseInt(D,10)||1,A=parseInt(A,10)||0;break}switch(L){case"min":return A>=D;case"max":return A<=D;default:return A===D}});return b&&!$||!b&&$})}function x(y){return y.split(",").map(function(w){w=w.trim();var j=w.match(u),$=j[1],C=j[2],b=j[3]||"",T={};return T.inverse=!!$&&$.toLowerCase()==="not",T.type=C?C.toLowerCase():"all",b=b.match(/\([^\)]+\)/g)||[],T.expressions=b.map(function(O){var L=O.match(f),D=L[1].toLowerCase().match(p);return{modifier:D[1],feature:D[2],value:L[2]}}),T})}function E(y){var w=Number(y),j;return w||(j=y.match(/^(\d+)\s*\/\s*(\d+)$/),w=j[1]/j[2]),w}function h(y){var w=parseFloat(y),j=String(y).match(m)[1];switch(j){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function d(y){var w=parseFloat(y),j=String(y).match(g)[1];switch(j){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(a,s,u)=>{u.r(s),u.d(s,{default:()=>x});var f=/[A-Z]/g,p=/^ms-/,g={};function m(E){return"-"+E.toLowerCase()}function v(E){if(g.hasOwnProperty(E))return g[E];var h=E.replace(f,m);return g[E]=p.test(h)?"-"+h:h}const x=v},"./node_modules/matchmediaquery/index.js":(a,s,u)=>{var f=u("./node_modules/css-mediaquery/index.js").match,p=typeof window<"u"?window.matchMedia:null;function g(v,x,E){var h=this;if(p&&!E){var d=p.call(window,v);this.matches=d.matches,this.media=d.media,d.addListener(j)}else this.matches=f(v,x),this.media=v;this.addListener=y,this.removeListener=w,this.dispose=$;function y(C){d&&d.addListener(C)}function w(C){d&&d.removeListener(C)}function j(C){h.matches=C.matches,h.media=C.media}function $(){d&&d.removeListener(j)}}function m(v,x,E){return new g(v,x,E)}a.exports=m},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function p(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function g(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var v={},x=0;x<10;x++)v["_"+String.fromCharCode(x)]=x;var E=Object.getOwnPropertyNames(v).map(function(d){return v[d]});if(E.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(d){h[d]=d}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=g()?Object.assign:function(m,v){for(var x,E=p(m),h,d=1;d<arguments.length;d++){x=Object(arguments[d]);for(var y in x)u.call(x,y)&&(E[y]=x[y]);if(s){h=s(x);for(var w=0;w<h.length;w++)f.call(x,h[w])&&(E[h[w]]=x[h[w]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(a,s,u)=>{var f=function(){};{var p=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},m=u("./node_modules/prop-types/lib/has.js");f=function(x){var E="Warning: "+x;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function v(x,E,h,d,y){for(var w in x)if(m(x,w)){var j;try{if(typeof x[w]!="function"){var $=Error((d||"React class")+": "+h+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof x[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw $.name="Invariant Violation",$}j=x[w](E,w,d,h,null,p)}catch(b){j=b}if(j&&!(j instanceof Error)&&f((d||"React class")+": type specification of "+h+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof j+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),j instanceof Error&&!(j.message in g)){g[j.message]=!0;var C=y?y():"";f("Failed "+h+" type: "+j.message+(C??""))}}}v.resetWarningCache=function(){g={}},a.exports=v},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,s,u)=>{var f=u("./node_modules/react-is/index.js"),p=u("./node_modules/object-assign/index.js"),g=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m=u("./node_modules/prop-types/lib/has.js"),v=u("./node_modules/prop-types/checkPropTypes.js"),x=function(){};x=function(h){var d="Warning: "+h;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function E(){return null}a.exports=function(h,d){var y=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function j(P){var N=P&&(y&&P[y]||P[w]);if(typeof N=="function")return N}var $="<<anonymous>>",C={array:L("array"),bigint:L("bigint"),bool:L("boolean"),func:L("function"),number:L("number"),object:L("object"),string:L("string"),symbol:L("symbol"),any:D(),arrayOf:A,element:X(),elementType:me(),instanceOf:ne,node:U(),objectOf:I,oneOf:ue,oneOfType:F,shape:ce,exact:tt};function b(P,N){return P===N?P!==0||1/P===1/N:P!==P&&N!==N}function T(P,N){this.message=P,this.data=N&&typeof N=="object"?N:{},this.stack=""}T.prototype=Error.prototype;function O(P){var N={},q=0;function Y(Z,Q,K,ee,ie,te,z){if(ee=ee||$,te=te||K,z!==g){if(d){var Oe=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Oe.name="Invariant Violation",Oe}else if(typeof console<"u"){var Ct=ee+":"+K;!N[Ct]&&q<3&&(x("You are manually calling a React.PropTypes validation function for the `"+te+"` prop on `"+ee+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),N[Ct]=!0,q++)}}return Q[K]==null?Z?Q[K]===null?new T("The "+ie+" `"+te+"` is marked as required "+("in `"+ee+"`, but its value is `null`.")):new T("The "+ie+" `"+te+"` is marked as required in "+("`"+ee+"`, but its value is `undefined`.")):null:P(Q,K,ee,ie,te)}var W=Y.bind(null,!1);return W.isRequired=Y.bind(null,!0),W}function L(P){function N(q,Y,W,Z,Q,K){var ee=q[Y],ie=ge(ee);if(ie!==P){var te=je(ee);return new T("Invalid "+Z+" `"+Q+"` of type "+("`"+te+"` supplied to `"+W+"`, expected ")+("`"+P+"`."),{expectedType:P})}return null}return O(N)}function D(){return O(E)}function A(P){function N(q,Y,W,Z,Q){if(typeof P!="function")return new T("Property `"+Q+"` of component `"+W+"` has invalid PropType notation inside arrayOf.");var K=q[Y];if(!Array.isArray(K)){var ee=ge(K);return new T("Invalid "+Z+" `"+Q+"` of type "+("`"+ee+"` supplied to `"+W+"`, expected an array."))}for(var ie=0;ie<K.length;ie++){var te=P(K,ie,W,Z,Q+"["+ie+"]",g);if(te instanceof Error)return te}return null}return O(N)}function X(){function P(N,q,Y,W,Z){var Q=N[q];if(!h(Q)){var K=ge(Q);return new T("Invalid "+W+" `"+Z+"` of type "+("`"+K+"` supplied to `"+Y+"`, expected a single ReactElement."))}return null}return O(P)}function me(){function P(N,q,Y,W,Z){var Q=N[q];if(!f.isValidElementType(Q)){var K=ge(Q);return new T("Invalid "+W+" `"+Z+"` of type "+("`"+K+"` supplied to `"+Y+"`, expected a single ReactElement type."))}return null}return O(P)}function ne(P){function N(q,Y,W,Z,Q){if(!(q[Y]instanceof P)){var K=P.name||$,ee=Bt(q[Y]);return new T("Invalid "+Z+" `"+Q+"` of type "+("`"+ee+"` supplied to `"+W+"`, expected ")+("instance of `"+K+"`."))}return null}return O(N)}function ue(P){if(!Array.isArray(P))return arguments.length>1?x("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):x("Invalid argument supplied to oneOf, expected an array."),E;function N(q,Y,W,Z,Q){for(var K=q[Y],ee=0;ee<P.length;ee++)if(b(K,P[ee]))return null;var ie=JSON.stringify(P,function(z,Oe){var Ct=je(Oe);return Ct==="symbol"?String(Oe):Oe});return new T("Invalid "+Z+" `"+Q+"` of value `"+String(K)+"` "+("supplied to `"+W+"`, expected one of "+ie+"."))}return O(N)}function I(P){function N(q,Y,W,Z,Q){if(typeof P!="function")return new T("Property `"+Q+"` of component `"+W+"` has invalid PropType notation inside objectOf.");var K=q[Y],ee=ge(K);if(ee!=="object")return new T("Invalid "+Z+" `"+Q+"` of type "+("`"+ee+"` supplied to `"+W+"`, expected an object."));for(var ie in K)if(m(K,ie)){var te=P(K,ie,W,Z,Q+"."+ie,g);if(te instanceof Error)return te}return null}return O(N)}function F(P){if(!Array.isArray(P))return x("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var N=0;N<P.length;N++){var q=P[N];if(typeof q!="function")return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+An(q)+" at index "+N+"."),E}function Y(W,Z,Q,K,ee){for(var ie=[],te=0;te<P.length;te++){var z=P[te],Oe=z(W,Z,Q,K,ee,g);if(Oe==null)return null;Oe.data&&m(Oe.data,"expectedType")&&ie.push(Oe.data.expectedType)}var Ct=ie.length>0?", expected one of type ["+ie.join(", ")+"]":"";return new T("Invalid "+K+" `"+ee+"` supplied to "+("`"+Q+"`"+Ct+"."))}return O(Y)}function U(){function P(N,q,Y,W,Z){return ke(N[q])?null:new T("Invalid "+W+" `"+Z+"` supplied to "+("`"+Y+"`, expected a ReactNode."))}return O(P)}function oe(P,N,q,Y,W){return new T((P||"React class")+": "+N+" type `"+q+"."+Y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+W+"`.")}function ce(P){function N(q,Y,W,Z,Q){var K=q[Y],ee=ge(K);if(ee!=="object")return new T("Invalid "+Z+" `"+Q+"` of type `"+ee+"` "+("supplied to `"+W+"`, expected `object`."));for(var ie in P){var te=P[ie];if(typeof te!="function")return oe(W,Z,Q,ie,je(te));var z=te(K,ie,W,Z,Q+"."+ie,g);if(z)return z}return null}return O(N)}function tt(P){function N(q,Y,W,Z,Q){var K=q[Y],ee=ge(K);if(ee!=="object")return new T("Invalid "+Z+" `"+Q+"` of type `"+ee+"` "+("supplied to `"+W+"`, expected `object`."));var ie=p({},q[Y],P);for(var te in ie){var z=P[te];if(m(P,te)&&typeof z!="function")return oe(W,Z,Q,te,je(z));if(!z)return new T("Invalid "+Z+" `"+Q+"` key `"+te+"` supplied to `"+W+"`.\nBad object: "+JSON.stringify(q[Y],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(P),null,"  "));var Oe=z(K,te,W,Z,Q+"."+te,g);if(Oe)return Oe}return null}return O(N)}function ke(P){switch(typeof P){case"number":case"string":case"undefined":return!0;case"boolean":return!P;case"object":if(Array.isArray(P))return P.every(ke);if(P===null||h(P))return!0;var N=j(P);if(N){var q=N.call(P),Y;if(N!==P.entries){for(;!(Y=q.next()).done;)if(!ke(Y.value))return!1}else for(;!(Y=q.next()).done;){var W=Y.value;if(W&&!ke(W[1]))return!1}}else return!1;return!0;default:return!1}}function ct(P,N){return P==="symbol"?!0:N?N["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&N instanceof Symbol:!1}function ge(P){var N=typeof P;return Array.isArray(P)?"array":P instanceof RegExp?"object":ct(N,P)?"symbol":N}function je(P){if(typeof P>"u"||P===null)return""+P;var N=ge(P);if(N==="object"){if(P instanceof Date)return"date";if(P instanceof RegExp)return"regexp"}return N}function An(P){var N=je(P);switch(N){case"array":case"object":return"an "+N;case"boolean":case"date":case"regexp":return"a "+N;default:return N}}function Bt(P){return!P.constructor||!P.constructor.name?$:P.constructor.name}return C.checkPropTypes=v,C.resetWarningCache=v.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(a,s,u)=>{{var f=u("./node_modules/react-is/index.js"),p=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(f.isElement,p)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=s},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,f=u?Symbol.for("react.element"):60103,p=u?Symbol.for("react.portal"):60106,g=u?Symbol.for("react.fragment"):60107,m=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.profiler"):60114,x=u?Symbol.for("react.provider"):60109,E=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,d=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,j=u?Symbol.for("react.suspense_list"):60120,$=u?Symbol.for("react.memo"):60115,C=u?Symbol.for("react.lazy"):60116,b=u?Symbol.for("react.block"):60121,T=u?Symbol.for("react.fundamental"):60117,O=u?Symbol.for("react.responder"):60118,L=u?Symbol.for("react.scope"):60119;function D(z){return typeof z=="string"||typeof z=="function"||z===g||z===d||z===v||z===m||z===w||z===j||typeof z=="object"&&z!==null&&(z.$$typeof===C||z.$$typeof===$||z.$$typeof===x||z.$$typeof===E||z.$$typeof===y||z.$$typeof===T||z.$$typeof===O||z.$$typeof===L||z.$$typeof===b)}function A(z){if(typeof z=="object"&&z!==null){var Oe=z.$$typeof;switch(Oe){case f:var Ct=z.type;switch(Ct){case h:case d:case g:case v:case m:case w:return Ct;default:var Zc=Ct&&Ct.$$typeof;switch(Zc){case E:case y:case C:case $:case x:return Zc;default:return Oe}}case p:return Oe}}}var X=h,me=d,ne=E,ue=x,I=f,F=y,U=g,oe=C,ce=$,tt=p,ke=v,ct=m,ge=w,je=!1;function An(z){return je||(je=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Bt(z)||A(z)===h}function Bt(z){return A(z)===d}function P(z){return A(z)===E}function N(z){return A(z)===x}function q(z){return typeof z=="object"&&z!==null&&z.$$typeof===f}function Y(z){return A(z)===y}function W(z){return A(z)===g}function Z(z){return A(z)===C}function Q(z){return A(z)===$}function K(z){return A(z)===p}function ee(z){return A(z)===v}function ie(z){return A(z)===m}function te(z){return A(z)===w}s.AsyncMode=X,s.ConcurrentMode=me,s.ContextConsumer=ne,s.ContextProvider=ue,s.Element=I,s.ForwardRef=F,s.Fragment=U,s.Lazy=oe,s.Memo=ce,s.Portal=tt,s.Profiler=ke,s.StrictMode=ct,s.Suspense=ge,s.isAsyncMode=An,s.isConcurrentMode=Bt,s.isContextConsumer=P,s.isContextProvider=N,s.isElement=q,s.isForwardRef=Y,s.isFragment=W,s.isLazy=Z,s.isMemo=Q,s.isPortal=K,s.isProfiler=ee,s.isStrictMode=ie,s.isSuspense=te,s.isValidElementType=D,s.typeOf=A})()},"./node_modules/react-is/index.js":(a,s,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,s,u)=>{u.r(s),u.d(s,{shallowEqualArrays:()=>p,shallowEqualObjects:()=>f});function f(g,m){if(g===m)return!0;if(!g||!m)return!1;var v=Object.keys(g),x=Object.keys(m),E=v.length;if(x.length!==E)return!1;for(var h=0;h<E;h++){var d=v[h];if(g[d]!==m[d]||!Object.prototype.hasOwnProperty.call(m,d))return!1}return!0}function p(g,m){if(g===m)return!0;if(!g||!m)return!1;var v=g.length;if(m.length!==v)return!1;for(var x=0;x<v;x++)if(g[x]!==m[x])return!1;return!0}},"./src/Component.ts":function(a,s,u){var f=this&&this.__rest||function(v,x){var E={};for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&x.indexOf(h)<0&&(E[h]=v[h]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,h=Object.getOwnPropertySymbols(v);d<h.length;d++)x.indexOf(h[d])<0&&Object.prototype.propertyIsEnumerable.call(v,h[d])&&(E[h[d]]=v[h[d]]);return E},p=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(s,"__esModule",{value:!0});var g=p(u("./src/useMediaQuery.ts")),m=function(v){var x=v.children,E=v.device,h=v.onChange,d=f(v,["children","device","onChange"]),y=(0,g.default)(d,E,h);return typeof x=="function"?x(y):y?x:null};s.default=m},"./src/Context.ts":(a,s,u)=>{Object.defineProperty(s,"__esModule",{value:!0});var f=u("react"),p=(0,f.createContext)(void 0);s.default=p},"./src/index.ts":function(a,s,u){var f=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var p=f(u("./src/useMediaQuery.ts"));s.useMediaQuery=p.default;var g=f(u("./src/Component.ts"));s.default=g.default;var m=f(u("./src/toQuery.ts"));s.toQuery=m.default;var v=f(u("./src/Context.ts"));s.Context=v.default},"./src/mediaQuery.ts":function(a,s,u){var f=this&&this.__assign||function(){return f=Object.assign||function(w){for(var j,$=1,C=arguments.length;$<C;$++){j=arguments[$];for(var b in j)Object.prototype.hasOwnProperty.call(j,b)&&(w[b]=j[b])}return w},f.apply(this,arguments)},p=this&&this.__rest||function(w,j){var $={};for(var C in w)Object.prototype.hasOwnProperty.call(w,C)&&j.indexOf(C)<0&&($[C]=w[C]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,C=Object.getOwnPropertySymbols(w);b<C.length;b++)j.indexOf(C[b])<0&&Object.prototype.propertyIsEnumerable.call(w,C[b])&&($[C[b]]=w[C[b]]);return $},g=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(s,"__esModule",{value:!0});var m=g(u("./node_modules/prop-types/index.js")),v=m.default.oneOfType([m.default.string,m.default.number]),x={all:m.default.bool,grid:m.default.bool,aural:m.default.bool,braille:m.default.bool,handheld:m.default.bool,print:m.default.bool,projection:m.default.bool,screen:m.default.bool,tty:m.default.bool,tv:m.default.bool,embossed:m.default.bool},E={orientation:m.default.oneOf(["portrait","landscape"]),scan:m.default.oneOf(["progressive","interlace"]),aspectRatio:m.default.string,deviceAspectRatio:m.default.string,height:v,deviceHeight:v,width:v,deviceWidth:v,color:m.default.bool,colorIndex:m.default.bool,monochrome:m.default.bool,resolution:v,type:Object.keys(x)};E.type;var h=p(E,["type"]),d=f({minAspectRatio:m.default.string,maxAspectRatio:m.default.string,minDeviceAspectRatio:m.default.string,maxDeviceAspectRatio:m.default.string,minHeight:v,maxHeight:v,minDeviceHeight:v,maxDeviceHeight:v,minWidth:v,maxWidth:v,minDeviceWidth:v,maxDeviceWidth:v,minColor:m.default.number,maxColor:m.default.number,minColorIndex:m.default.number,maxColorIndex:m.default.number,minMonochrome:m.default.number,maxMonochrome:m.default.number,minResolution:v,maxResolution:v},h),y=f(f({},x),d);s.default={all:y,types:x,matchers:E,features:d}},"./src/toQuery.ts":function(a,s,u){var f=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(s,"__esModule",{value:!0});var p=f(u("./node_modules/hyphenate-style-name/index.js")),g=f(u("./src/mediaQuery.ts")),m=function(h){return"not ".concat(h)},v=function(h,d){var y=(0,p.default)(h);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?y:d===!1?m(y):"(".concat(y,": ").concat(d,")")},x=function(h){return h.join(" and ")},E=function(h){var d=[];return Object.keys(g.default.all).forEach(function(y){var w=h[y];w!=null&&d.push(v(y,w))}),x(d)};s.default=E},"./src/useMediaQuery.ts":function(a,s,u){var f=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(s,"__esModule",{value:!0});var p=u("react"),g=f(u("./node_modules/matchmediaquery/index.js")),m=f(u("./node_modules/hyphenate-style-name/index.js")),v=u("./node_modules/shallow-equal/dist/index.esm.js"),x=f(u("./src/toQuery.ts")),E=f(u("./src/Context.ts")),h=function(T){return T.query||(0,x.default)(T)},d=function(T){if(T){var O=Object.keys(T);return O.reduce(function(L,D){return L[(0,m.default)(D)]=T[D],L},{})}},y=function(){var T=(0,p.useRef)(!1);return(0,p.useEffect)(function(){T.current=!0},[]),T.current},w=function(T){var O=(0,p.useContext)(E.default),L=function(){return d(T)||d(O)},D=(0,p.useState)(L),A=D[0],X=D[1];return(0,p.useEffect)(function(){var me=L();(0,v.shallowEqualObjects)(A,me)||X(me)},[T,O]),A},j=function(T){var O=function(){return h(T)},L=(0,p.useState)(O),D=L[0],A=L[1];return(0,p.useEffect)(function(){var X=O();D!==X&&A(X)},[T]),D},$=function(T,O){var L=function(){return(0,g.default)(T,O||{},!!O)},D=(0,p.useState)(L),A=D[0],X=D[1],me=y();return(0,p.useEffect)(function(){if(me){var ne=L();return X(ne),function(){ne&&ne.dispose()}}},[T,O]),A},C=function(T){var O=(0,p.useState)(T.matches),L=O[0],D=O[1];return(0,p.useEffect)(function(){var A=function(X){D(X.matches)};return T.addListener(A),D(T.matches),function(){T.removeListener(A)}},[T]),L},b=function(T,O,L){var D=w(O),A=j(T);if(!A)throw new Error("Invalid or missing MediaQuery!");var X=$(A,D),me=C(X),ne=y();return(0,p.useEffect)(function(){ne&&L&&L(me)},[me]),(0,p.useEffect)(function(){return function(){X&&X.dispose()}},[]),me};s.default=b},react:a=>{a.exports=n}},o={};function i(a){var s=o[a];if(s!==void 0)return s.exports;var u=o[a]={exports:{}};return r[a].call(u.exports,u,u.exports,i),u.exports}i.d=(a,s)=>{for(var u in s)i.o(s,u)&&!i.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},i.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var l=i("./src/index.ts");return l})())})(y0);var Px=y0.exports,x0={exports:{}},Ox="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Rx=Ox,Ix=Rx;function w0(){}function S0(){}S0.resetWarningCache=w0;var zx=function(){function e(r,o,i,l,a,s){if(s!==Ix){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:S0,resetWarningCache:w0};return n.PropTypes=n,n};x0.exports=zx();var Mx=x0.exports;const Gt=kp(Mx),S={colors:{white:"#FEFEFF",seasalt:"#F9F9F9",lavender:"#EFECFF",platinum:"#E2DFDF",gray:"#797979",raisinblack:"#242331",onyx:"#413F50",lavenderfloral:"#B06EFE",electricindigo:"#5236FF",cinnabar:"#D05938",background:{1:"#F3F3F8",2:"#F1E7FE",3:"#FAEAE4"},text:{1:"#333",2:"#C0C0C0",error:"#de00ac"},detail1:{1:"#F0A308",2:"#F5CB5C",3:"#F1C47B"},detail2:{1:"#F0A308",2:"#F5CB5C",3:"#F1C47B"},prueba1:"#CED4DA",prueba2:"#FAF7FC",prueba3:"#302A40"},bp:{"x-small":"576px",small:"767px",medium:"992px",large:"1200px"}},Nx=k.div`
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
`;function bl({buttonText:e,handleClick:t}){return c.jsx(Nx,{children:c.jsx("button",{onClick:t,children:e})})}bl.propTypes={buttonText:Gt.string,handleClick:Gt.node};const Lx=k.div`
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
`;function Tl({buttonText:e,handleClick:t}){return c.jsx(Lx,{children:c.jsx("button",{onClick:t,children:e})})}Tl.propTypes={buttonText:Gt.string,handleClick:Gt.node};var E0={exports:{}},j0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=_;function Ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dx=typeof Object.is=="function"?Object.is:Ax,Fx=Br.useState,Ux=Br.useEffect,Bx=Br.useLayoutEffect,Vx=Br.useDebugValue;function Wx(e,t){var n=t(),r=Fx({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Bx(function(){o.value=n,o.getSnapshot=t,cs(o)&&i({inst:o})},[e,n,t]),Ux(function(){return cs(o)&&i({inst:o}),e(function(){cs(o)&&i({inst:o})})},[e]),Vx(n),n}function cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dx(e,n)}catch{return!0}}function Hx(e,t){return t()}var Qx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Hx:Wx;j0.useSyncExternalStore=Br.useSyncExternalStore!==void 0?Br.useSyncExternalStore:Qx;E0.exports=j0;var Yx=E0.exports,C0={exports:{}},k0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=_,Kx=Yx;function Gx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xx=typeof Object.is=="function"?Object.is:Gx,qx=Kx.useSyncExternalStore,Jx=la.useRef,Zx=la.useEffect,ew=la.useMemo,tw=la.useDebugValue;k0.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Jx(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=ew(function(){function s(m){if(!u){if(u=!0,f=m,m=r(m),o!==void 0&&l.hasValue){var v=l.value;if(o(v,m))return p=v}return p=m}if(v=p,Xx(f,m))return v;var x=r(m);return o!==void 0&&o(v,x)?v:(f=m,p=x)}var u=!1,f,p,g=n===void 0?null:n;return[function(){return s(t())},g===null?void 0:function(){return s(g())}]},[t,n,r,o]);var a=qx(e,i[0],i[1]);return Zx(function(){l.hasValue=!0,l.value=a},[a]),tw(a),a};C0.exports=k0;var nw=C0.exports;function rw(e){e()}let $0=rw;const ow=e=>$0=e,iw=()=>$0,Tf=Symbol.for("react-redux-context"),Pf=typeof globalThis<"u"?globalThis:{};function lw(){var e;if(!_.createContext)return{};const t=(e=Pf[Tf])!=null?e:Pf[Tf]=new Map;let n=t.get(_.createContext);return n||(n=_.createContext(null),t.set(_.createContext,n)),n}const In=lw();function Lc(e=In){return function(){return _.useContext(e)}}const _0=Lc(),aw=()=>{throw new Error("uSES not initialized!")};let b0=aw;const sw=e=>{b0=e},uw=(e,t)=>e===t;function cw(e=In){const t=e===In?_0:Lc(e);return function(r,o={}){const{equalityFn:i=uw,stabilityCheck:l=void 0,noopCheck:a=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:s,subscription:u,getServerState:f,stabilityCheck:p,noopCheck:g}=t();_.useRef(!0);const m=_.useCallback({[r.name](x){return r(x)}}[r.name],[r,p,l]),v=b0(u.addNestedSub,s.getState,f||s.getState,m,i);return _.useDebugValue(v),v}}const T0=cw();var P0={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,Ac=Me?Symbol.for("react.element"):60103,Dc=Me?Symbol.for("react.portal"):60106,aa=Me?Symbol.for("react.fragment"):60107,sa=Me?Symbol.for("react.strict_mode"):60108,ua=Me?Symbol.for("react.profiler"):60114,ca=Me?Symbol.for("react.provider"):60109,da=Me?Symbol.for("react.context"):60110,Fc=Me?Symbol.for("react.async_mode"):60111,fa=Me?Symbol.for("react.concurrent_mode"):60111,pa=Me?Symbol.for("react.forward_ref"):60112,ha=Me?Symbol.for("react.suspense"):60113,dw=Me?Symbol.for("react.suspense_list"):60120,ma=Me?Symbol.for("react.memo"):60115,ga=Me?Symbol.for("react.lazy"):60116,fw=Me?Symbol.for("react.block"):60121,pw=Me?Symbol.for("react.fundamental"):60117,hw=Me?Symbol.for("react.responder"):60118,mw=Me?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ac:switch(e=e.type,e){case Fc:case fa:case aa:case ua:case sa:case ha:return e;default:switch(e=e&&e.$$typeof,e){case da:case pa:case ga:case ma:case ca:return e;default:return t}}case Dc:return t}}}function O0(e){return ut(e)===fa}ae.AsyncMode=Fc;ae.ConcurrentMode=fa;ae.ContextConsumer=da;ae.ContextProvider=ca;ae.Element=Ac;ae.ForwardRef=pa;ae.Fragment=aa;ae.Lazy=ga;ae.Memo=ma;ae.Portal=Dc;ae.Profiler=ua;ae.StrictMode=sa;ae.Suspense=ha;ae.isAsyncMode=function(e){return O0(e)||ut(e)===Fc};ae.isConcurrentMode=O0;ae.isContextConsumer=function(e){return ut(e)===da};ae.isContextProvider=function(e){return ut(e)===ca};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ac};ae.isForwardRef=function(e){return ut(e)===pa};ae.isFragment=function(e){return ut(e)===aa};ae.isLazy=function(e){return ut(e)===ga};ae.isMemo=function(e){return ut(e)===ma};ae.isPortal=function(e){return ut(e)===Dc};ae.isProfiler=function(e){return ut(e)===ua};ae.isStrictMode=function(e){return ut(e)===sa};ae.isSuspense=function(e){return ut(e)===ha};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===aa||e===fa||e===ua||e===sa||e===ha||e===dw||typeof e=="object"&&e!==null&&(e.$$typeof===ga||e.$$typeof===ma||e.$$typeof===ca||e.$$typeof===da||e.$$typeof===pa||e.$$typeof===pw||e.$$typeof===hw||e.$$typeof===mw||e.$$typeof===fw)};ae.typeOf=ut;P0.exports=ae;var gw=P0.exports,R0=gw,vw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I0={};I0[R0.ForwardRef]=vw;I0[R0.Memo]=yw;var se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=Symbol.for("react.element"),Bc=Symbol.for("react.portal"),va=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),wa=Symbol.for("react.provider"),Sa=Symbol.for("react.context"),xw=Symbol.for("react.server_context"),Ea=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Ca=Symbol.for("react.suspense_list"),ka=Symbol.for("react.memo"),$a=Symbol.for("react.lazy"),ww=Symbol.for("react.offscreen"),z0;z0=Symbol.for("react.module.reference");function jt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uc:switch(e=e.type,e){case va:case xa:case ya:case ja:case Ca:return e;default:switch(e=e&&e.$$typeof,e){case xw:case Sa:case Ea:case $a:case ka:case wa:return e;default:return t}}case Bc:return t}}}se.ContextConsumer=Sa;se.ContextProvider=wa;se.Element=Uc;se.ForwardRef=Ea;se.Fragment=va;se.Lazy=$a;se.Memo=ka;se.Portal=Bc;se.Profiler=xa;se.StrictMode=ya;se.Suspense=ja;se.SuspenseList=Ca;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return jt(e)===Sa};se.isContextProvider=function(e){return jt(e)===wa};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uc};se.isForwardRef=function(e){return jt(e)===Ea};se.isFragment=function(e){return jt(e)===va};se.isLazy=function(e){return jt(e)===$a};se.isMemo=function(e){return jt(e)===ka};se.isPortal=function(e){return jt(e)===Bc};se.isProfiler=function(e){return jt(e)===xa};se.isStrictMode=function(e){return jt(e)===ya};se.isSuspense=function(e){return jt(e)===ja};se.isSuspenseList=function(e){return jt(e)===Ca};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===va||e===xa||e===ya||e===ja||e===Ca||e===ww||typeof e=="object"&&e!==null&&(e.$$typeof===$a||e.$$typeof===ka||e.$$typeof===wa||e.$$typeof===Sa||e.$$typeof===Ea||e.$$typeof===z0||e.getModuleId!==void 0)};se.typeOf=jt;function Sw(){const e=iw();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Of={notify(){},get:()=>[]};function Ew(e,t){let n,r=Of,o=0,i=!1;function l(x){f();const E=r.subscribe(x);let h=!1;return()=>{h||(h=!0,E(),p())}}function a(){r.notify()}function s(){v.onStateChange&&v.onStateChange()}function u(){return i}function f(){o++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=Sw())}function p(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Of)}function g(){i||(i=!0,f())}function m(){i&&(i=!1,p())}const v={addNestedSub:l,notifyNestedSubs:a,handleChangeWrapper:s,isSubscribed:u,trySubscribe:g,tryUnsubscribe:m,getListeners:()=>r};return v}const jw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cw=jw?_.useLayoutEffect:_.useEffect;function kw({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const l=_.useMemo(()=>{const u=Ew(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),a=_.useMemo(()=>e.getState(),[e]);Cw(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,a]);const s=t||In;return _.createElement(s.Provider,{value:l},n)}function M0(e=In){const t=e===In?_0:Lc(e);return function(){const{store:r}=t();return r}}const $w=M0();function _w(e=In){const t=e===In?$w:M0(e);return function(){return t().dispatch}}const _a=_w();sw(nw.useSyncExternalStoreWithSelector);ow(Dm.unstable_batchedUpdates);function Tt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function zn(e){return!!e&&!!e[ve]}function en(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Nw}(e)||Array.isArray(e)||!!e[Af]||!!(!((t=e.constructor)===null||t===void 0)&&t[Af])||Vc(e)||Wc(e))}function tr(e,t,n){n===void 0&&(n=!1),Xr(e)===0?(n?Object.keys:Tr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Xr(e){var t=e[ve];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Vc(e)?2:Wc(e)?3:0}function br(e,t){return Xr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function bw(e,t){return Xr(e)===2?e.get(t):e[t]}function N0(e,t,n){var r=Xr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function L0(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Vc(e){return zw&&e instanceof Map}function Wc(e){return Mw&&e instanceof Set}function Un(e){return e.o||e.t}function Hc(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=D0(e);delete t[ve];for(var n=Tr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Qc(e,t){return t===void 0&&(t=!1),Yc(e)||zn(e)||!en(e)||(Xr(e)>1&&(e.set=e.add=e.clear=e.delete=Tw),Object.freeze(e),t&&tr(e,function(n,r){return Qc(r,!0)},!0)),e}function Tw(){Tt(2)}function Yc(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Ut(e){var t=Ou[e];return t||Tt(18,e),t}function Pw(e,t){Ou[e]||(Ou[e]=t)}function bu(){return Yo}function ds(e,t){t&&(Ut("Patches"),e.u=[],e.s=[],e.v=t)}function Pl(e){Tu(e),e.p.forEach(Ow),e.p=null}function Tu(e){e===Yo&&(Yo=e.l)}function Rf(e){return Yo={p:[],l:Yo,h:e,m:!0,_:0}}function Ow(e){var t=e[ve];t.i===0||t.i===1?t.j():t.g=!0}function fs(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Ut("ES5").S(t,e,r),r?(n[ve].P&&(Pl(t),Tt(4)),en(e)&&(e=Ol(t,e),t.l||Rl(t,e)),t.u&&Ut("Patches").M(n[ve].t,e,t.u,t.s)):e=Ol(t,n,[]),Pl(t),t.u&&t.v(t.u,t.s),e!==A0?e:void 0}function Ol(e,t,n){if(Yc(t))return t;var r=t[ve];if(!r)return tr(t,function(a,s){return If(e,r,t,a,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Rl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Hc(r.k):r.o,i=o,l=!1;r.i===3&&(i=new Set(o),o.clear(),l=!0),tr(i,function(a,s){return If(e,r,o,a,s,n,l)}),Rl(e,o,!1),n&&e.u&&Ut("Patches").N(r,n,e.u,e.s)}return r.o}function If(e,t,n,r,o,i,l){if(zn(o)){var a=Ol(e,o,i&&t&&t.i!==3&&!br(t.R,r)?i.concat(r):void 0);if(N0(n,r,a),!zn(a))return;e.m=!1}else l&&n.add(o);if(en(o)&&!Yc(o)){if(!e.h.D&&e._<1)return;Ol(e,o),t&&t.A.l||Rl(e,o)}}function Rl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Qc(t,n)}function ps(e,t){var n=e[ve];return(n?Un(n):e)[t]}function zf(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function pn(e){e.P||(e.P=!0,e.l&&pn(e.l))}function hs(e){e.o||(e.o=Hc(e.t))}function Pu(e,t,n){var r=Vc(t)?Ut("MapSet").F(t,n):Wc(t)?Ut("MapSet").T(t,n):e.O?function(o,i){var l=Array.isArray(o),a={i:l?1:0,A:i?i.A:bu(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=a,u=Ko;l&&(s=[a],u=po);var f=Proxy.revocable(s,u),p=f.revoke,g=f.proxy;return a.k=g,a.j=p,g}(t,n):Ut("ES5").J(t,n);return(n?n.A:bu()).p.push(r),r}function Rw(e){return zn(e)||Tt(22,e),function t(n){if(!en(n))return n;var r,o=n[ve],i=Xr(n);if(o){if(!o.P&&(o.i<4||!Ut("ES5").K(o)))return o.t;o.I=!0,r=Mf(n,i),o.I=!1}else r=Mf(n,i);return tr(r,function(l,a){o&&bw(o.t,l)===a||N0(r,l,t(a))}),i===3?new Set(r):r}(e)}function Mf(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Hc(e)}function Iw(){function e(i,l){var a=o[i];return a?a.enumerable=l:o[i]=a={configurable:!0,enumerable:l,get:function(){var s=this[ve];return Ko.get(s,i)},set:function(s){var u=this[ve];Ko.set(u,i,s)}},a}function t(i){for(var l=i.length-1;l>=0;l--){var a=i[l][ve];if(!a.P)switch(a.i){case 5:r(a)&&pn(a);break;case 4:n(a)&&pn(a)}}}function n(i){for(var l=i.t,a=i.k,s=Tr(a),u=s.length-1;u>=0;u--){var f=s[u];if(f!==ve){var p=l[f];if(p===void 0&&!br(l,f))return!0;var g=a[f],m=g&&g[ve];if(m?m.t!==p:!L0(g,p))return!0}}var v=!!l[ve];return s.length!==Tr(l).length+(v?0:1)}function r(i){var l=i.k;if(l.length!==i.t.length)return!0;var a=Object.getOwnPropertyDescriptor(l,l.length-1);if(a&&!a.get)return!0;for(var s=0;s<l.length;s++)if(!l.hasOwnProperty(s))return!0;return!1}var o={};Pw("ES5",{J:function(i,l){var a=Array.isArray(i),s=function(f,p){if(f){for(var g=Array(p.length),m=0;m<p.length;m++)Object.defineProperty(g,""+m,e(m,!0));return g}var v=D0(p);delete v[ve];for(var x=Tr(v),E=0;E<x.length;E++){var h=x[E];v[h]=e(h,f||!!v[h].enumerable)}return Object.create(Object.getPrototypeOf(p),v)}(a,i),u={i:a?5:4,A:l?l.A:bu(),P:!1,I:!1,R:{},l,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,ve,{value:u,writable:!0}),s},S:function(i,l,a){a?zn(l)&&l[ve].A===i&&t(i.p):(i.u&&function s(u){if(u&&typeof u=="object"){var f=u[ve];if(f){var p=f.t,g=f.k,m=f.R,v=f.i;if(v===4)tr(g,function(y){y!==ve&&(p[y]!==void 0||br(p,y)?m[y]||s(g[y]):(m[y]=!0,pn(f)))}),tr(p,function(y){g[y]!==void 0||br(g,y)||(m[y]=!1,pn(f))});else if(v===5){if(r(f)&&(pn(f),m.length=!0),g.length<p.length)for(var x=g.length;x<p.length;x++)m[x]=!1;else for(var E=p.length;E<g.length;E++)m[E]=!0;for(var h=Math.min(g.length,p.length),d=0;d<h;d++)g.hasOwnProperty(d)||(m[d]=!0),m[d]===void 0&&s(g[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Nf,Yo,Kc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",zw=typeof Map<"u",Mw=typeof Set<"u",Lf=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",A0=Kc?Symbol.for("immer-nothing"):((Nf={})["immer-nothing"]=!0,Nf),Af=Kc?Symbol.for("immer-draftable"):"__$immer_draftable",ve=Kc?Symbol.for("immer-state"):"__$immer_state",Nw=""+Object.prototype.constructor,Tr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,D0=Object.getOwnPropertyDescriptors||function(e){var t={};return Tr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ou={},Ko={get:function(e,t){if(t===ve)return e;var n=Un(e);if(!br(n,t))return function(o,i,l){var a,s=zf(i,l);return s?"value"in s?s.value:(a=s.get)===null||a===void 0?void 0:a.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!en(r)?r:r===ps(e.t,t)?(hs(e),e.o[t]=Pu(e.A.h,r,e)):r},has:function(e,t){return t in Un(e)},ownKeys:function(e){return Reflect.ownKeys(Un(e))},set:function(e,t,n){var r=zf(Un(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=ps(Un(e),t),i=o==null?void 0:o[ve];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(L0(n,o)&&(n!==void 0||br(e.t,t)))return!0;hs(e),pn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ps(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,hs(e),pn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Un(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Tt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Tt(12)}},po={};tr(Ko,function(e,t){po[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),po.deleteProperty=function(e,t){return po.set.call(this,e,t,void 0)},po.set=function(e,t,n){return Ko.set.call(this,e[0],t,n,e[0])};var Lw=function(){function e(n){var r=this;this.O=Lf,this.D=!0,this.produce=function(o,i,l){if(typeof o=="function"&&typeof i!="function"){var a=i;i=o;var s=r;return function(x){var E=this;x===void 0&&(x=a);for(var h=arguments.length,d=Array(h>1?h-1:0),y=1;y<h;y++)d[y-1]=arguments[y];return s.produce(x,function(w){var j;return(j=i).call.apply(j,[E,w].concat(d))})}}var u;if(typeof i!="function"&&Tt(6),l!==void 0&&typeof l!="function"&&Tt(7),en(o)){var f=Rf(r),p=Pu(r,o,void 0),g=!0;try{u=i(p),g=!1}finally{g?Pl(f):Tu(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(x){return ds(f,l),fs(x,f)},function(x){throw Pl(f),x}):(ds(f,l),fs(u,f))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===A0&&(u=void 0),r.D&&Qc(u,!0),l){var m=[],v=[];Ut("Patches").M(o,u,m,v),l(m,v)}return u}Tt(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var f=arguments.length,p=Array(f>1?f-1:0),g=1;g<f;g++)p[g-1]=arguments[g];return r.produceWithPatches(u,function(m){return o.apply(void 0,[m].concat(p))})};var l,a,s=r.produce(o,i,function(u,f){l=u,a=f});return typeof Promise<"u"&&s instanceof Promise?s.then(function(u){return[u,l,a]}):[s,l,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){en(n)||Tt(8),zn(n)&&(n=Rw(n));var r=Rf(this),o=Pu(this,n,void 0);return o[ve].C=!0,Tu(r),o},t.finishDraft=function(n,r){var o=n&&n[ve],i=o.A;return ds(i,r),fs(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Lf&&Tt(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var l=Ut("Patches").$;return zn(n)?l(n,r):this.produce(n,function(a){return l(a,r)})},e}(),lt=new Lw,F0=lt.produce;lt.produceWithPatches.bind(lt);lt.setAutoFreeze.bind(lt);lt.setUseProxies.bind(lt);lt.applyPatches.bind(lt);lt.createDraft.bind(lt);lt.finishDraft.bind(lt);function Go(e){"@babel/helpers - typeof";return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Go(e)}function Aw(e,t){if(Go(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Go(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dw(e){var t=Aw(e,"string");return Go(t)==="symbol"?t:String(t)}function Fw(e,t,n){return t=Dw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Df(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ff(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Df(Object(n),!0).forEach(function(r){Fw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Df(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ue(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Uf=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ms=function(){return Math.random().toString(36).substring(7).split("").join(".")},Il={INIT:"@@redux/INIT"+ms(),REPLACE:"@@redux/REPLACE"+ms(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ms()}};function Uw(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function U0(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ue(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ue(1));return n(U0)(e,t)}if(typeof e!="function")throw new Error(Ue(2));var o=e,i=t,l=[],a=l,s=!1;function u(){a===l&&(a=l.slice())}function f(){if(s)throw new Error(Ue(3));return i}function p(x){if(typeof x!="function")throw new Error(Ue(4));if(s)throw new Error(Ue(5));var E=!0;return u(),a.push(x),function(){if(E){if(s)throw new Error(Ue(6));E=!1,u();var d=a.indexOf(x);a.splice(d,1),l=null}}}function g(x){if(!Uw(x))throw new Error(Ue(7));if(typeof x.type>"u")throw new Error(Ue(8));if(s)throw new Error(Ue(9));try{s=!0,i=o(i,x)}finally{s=!1}for(var E=l=a,h=0;h<E.length;h++){var d=E[h];d()}return x}function m(x){if(typeof x!="function")throw new Error(Ue(10));o=x,g({type:Il.REPLACE})}function v(){var x,E=p;return x={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Ue(11));function y(){d.next&&d.next(f())}y();var w=E(y);return{unsubscribe:w}}},x[Uf]=function(){return this},x}return g({type:Il.INIT}),r={dispatch:g,subscribe:p,getState:f,replaceReducer:m},r[Uf]=v,r}function Bw(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Il.INIT});if(typeof r>"u")throw new Error(Ue(12));if(typeof n(void 0,{type:Il.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ue(13))})}function Vw(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),l;try{Bw(n)}catch(a){l=a}return function(s,u){if(s===void 0&&(s={}),l)throw l;for(var f=!1,p={},g=0;g<i.length;g++){var m=i[g],v=n[m],x=s[m],E=v(x,u);if(typeof E>"u")throw u&&u.type,new Error(Ue(14));p[m]=E,f=f||E!==x}return f=f||i.length!==Object.keys(s).length,f?p:s}}function zl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function Ww(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ue(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},a=t.map(function(s){return s(l)});return i=zl.apply(void 0,a)(o.dispatch),Ff(Ff({},o),{},{dispatch:i})}}}function B0(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(l){return function(a){return typeof a=="function"?a(o,i,e):l(a)}}};return t}var V0=B0();V0.withExtraArgument=B0;const Bf=V0;var W0=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Hw=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(u){return function(f){return s([u,f])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Vr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},Qw=Object.defineProperty,Yw=Object.defineProperties,Kw=Object.getOwnPropertyDescriptors,Vf=Object.getOwnPropertySymbols,Gw=Object.prototype.hasOwnProperty,Xw=Object.prototype.propertyIsEnumerable,Wf=function(e,t,n){return t in e?Qw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},bn=function(e,t){for(var n in t||(t={}))Gw.call(t,n)&&Wf(e,n,t[n]);if(Vf)for(var r=0,o=Vf(t);r<o.length;r++){var n=o[r];Xw.call(t,n)&&Wf(e,n,t[n])}return e},gs=function(e,t){return Yw(e,Kw(t))},qw=function(e,t,n){return new Promise(function(r,o){var i=function(s){try{a(n.next(s))}catch(u){o(u)}},l=function(s){try{a(n.throw(s))}catch(u){o(u)}},a=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(i,l)};a((n=n.apply(e,t)).next())})},Jw=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zl:zl.apply(null,arguments)};function Zw(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Tn(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return bn(bn({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var e2=function(e){W0(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Vr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Vr([void 0],n.concat(this))))},t}(Array),t2=function(e){W0(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Vr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Vr([void 0],n.concat(this))))},t}(Array);function Ru(e){return en(e)?F0(e,function(){}):e}function n2(e){return typeof e=="boolean"}function r2(){return function(t){return o2(t)}}function o2(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new e2;return n&&(n2(n)?r.push(Bf):r.push(Bf.withExtraArgument(n.extraArgument))),r}var i2=!0;function l2(e){var t=r2(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,l=i===void 0?t():i,a=n.devTools,s=a===void 0?!0:a,u=n.preloadedState,f=u===void 0?void 0:u,p=n.enhancers,g=p===void 0?void 0:p,m;if(typeof o=="function")m=o;else if(Zw(o))m=Vw(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=l;typeof v=="function"&&(v=v(t));var x=Ww.apply(void 0,v),E=zl;s&&(E=Jw(bn({trace:!i2},typeof s=="object"&&s)));var h=new t2(x),d=h;Array.isArray(g)?d=Vr([x],g):typeof g=="function"&&(d=g(h));var y=E.apply(void 0,d);return U0(m,f,y)}function H0(e){var t={},n=[],r,o={addCase:function(i,l){var a=typeof i=="string"?i:i.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[a]=l,o},addMatcher:function(i,l){return n.push({matcher:i,reducer:l}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function a2(e){return typeof e=="function"}function s2(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?H0(t):[t,n,r],i=o[0],l=o[1],a=o[2],s;if(a2(e))s=function(){return Ru(e())};else{var u=Ru(e);s=function(){return u}}function f(p,g){p===void 0&&(p=s());var m=Vr([i[g.type]],l.filter(function(v){var x=v.matcher;return x(g)}).map(function(v){var x=v.reducer;return x}));return m.filter(function(v){return!!v}).length===0&&(m=[a]),m.reduce(function(v,x){if(x)if(zn(v)){var E=v,h=x(E,g);return h===void 0?v:h}else{if(en(v))return F0(v,function(d){return x(d,g)});var h=x(v,g);if(h===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return v},p)}return f.getInitialState=s,f}function u2(e,t){return e+"/"+t}function Q0(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Ru(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},l={},a={};o.forEach(function(f){var p=r[f],g=u2(t,f),m,v;"reducer"in p?(m=p.reducer,v=p.prepare):m=p,i[f]=m,l[g]=m,a[f]=v?Tn(g,v):Tn(g)});function s(){var f=typeof e.extraReducers=="function"?H0(e.extraReducers):[e.extraReducers],p=f[0],g=p===void 0?{}:p,m=f[1],v=m===void 0?[]:m,x=f[2],E=x===void 0?void 0:x,h=bn(bn({},g),l);return s2(n,function(d){for(var y in h)d.addCase(y,h[y]);for(var w=0,j=v;w<j.length;w++){var $=j[w];d.addMatcher($.matcher,$.reducer)}E&&d.addDefaultCase(E)})}var u;return{name:t,reducer:function(f,p){return u||(u=s()),u(f,p)},actions:a,caseReducers:i,getInitialState:function(){return u||(u=s()),u.getInitialState()}}}var c2="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",d2=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=c2[Math.random()*64|0];return t},f2=["name","message","stack","code"],vs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Hf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),p2=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=f2;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Tn(t+"/fulfilled",function(u,f,p,g){return{payload:u,meta:gs(bn({},g||{}),{arg:p,requestId:f,requestStatus:"fulfilled"})}}),i=Tn(t+"/pending",function(u,f,p){return{payload:void 0,meta:gs(bn({},p||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),l=Tn(t+"/rejected",function(u,f,p,g,m){return{payload:g,error:(r&&r.serializeError||p2)(u||"Rejected"),meta:gs(bn({},m||{}),{arg:p,requestId:f,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function s(u){return function(f,p,g){var m=r!=null&&r.idGenerator?r.idGenerator(u):d2(),v=new a,x;function E(d){x=d,v.abort()}var h=function(){return qw(this,null,function(){var d,y,w,j,$,C,b;return Hw(this,function(T){switch(T.label){case 0:return T.trys.push([0,4,,5]),j=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:p,extra:g}),m2(j)?[4,j]:[3,2];case 1:j=T.sent(),T.label=2;case 2:if(j===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return $=new Promise(function(O,L){return v.signal.addEventListener("abort",function(){return L({name:"AbortError",message:x||"Aborted"})})}),f(i(m,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:m,arg:u},{getState:p,extra:g}))),[4,Promise.race([$,Promise.resolve(n(u,{dispatch:f,getState:p,extra:g,requestId:m,signal:v.signal,abort:E,rejectWithValue:function(O,L){return new vs(O,L)},fulfillWithValue:function(O,L){return new Hf(O,L)}})).then(function(O){if(O instanceof vs)throw O;return O instanceof Hf?o(O.payload,m,u,O.meta):o(O,m,u)})])];case 3:return w=T.sent(),[3,5];case 4:return C=T.sent(),w=C instanceof vs?l(null,m,u,C.payload,C.meta):l(C,m,u),[3,5];case 5:return b=r&&!r.dispatchConditionRejection&&l.match(w)&&w.meta.condition,b||f(w),[2,w]}})})}();return Object.assign(h,{abort:E,requestId:m,arg:u,unwrap:function(){return h.then(h2)}})}}return Object.assign(s,{pending:i,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function h2(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function m2(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Gc="listenerMiddleware";Tn(Gc+"/add");Tn(Gc+"/removeAll");Tn(Gc+"/remove");var Qf;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Iw();const Y0=Q0({name:"modal",initialState:{modalType:"closed"},reducers:{contactModal:e=>{e.modalType="contact"},loginModal:e=>{e.modalType="login"},signupModal:e=>{e.modalType="signup"},closeModal:e=>{e.modalType="closed"}}}),{contactModal:K0,loginModal:g2,signupModal:v2,closeModal:y2}=Y0.actions,x2=Y0.reducer,w2=k.div`
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
`,S2=k(oi)`
  padding-left: 1rem;
  img {
    height: 40px;

    @media (max-width: ${S.bp["x-small"]}) {
      height: 30px;
    }
  }
`,E2=k.button`
  background: none;
  border: none;
  color: ${S.colors.raisinblack};
  font-size: 40px;
  cursor: pointer;
  display: none; // Inicialmente oculto en dispositivos móviles

  @media (max-width: ${S.bp.medium}) {
    display: block; // Mostrar en dispositivos móviles
  }

  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 30px;
  }
`,Yf=k.div`
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
`,Mt=k(oi)`
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
`,io=k.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${S.bp.large}) {
    padding: 0px 0px;
  }
`,Kf=k.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,ba=()=>{const[e,t]=_.useState(!1),n=_a(),r=Px.useMediaQuery({maxWidth:S.bp.medium}),o=()=>{t(!e)},i=()=>{console.log("Intentando cambiar estado"),n(g2())},l=()=>{console.log("Intentando cambiar estado"),n(v2())};return c.jsxs(w2,{children:[c.jsx(S2,{to:"/",children:c.jsx("img",{src:"assets/logotipo.svg",alt:"Logo Sintética"})}),r?c.jsxs(c.Fragment,{children:[c.jsx(E2,{onClick:o,children:e?"✕":"☰"}),e&&c.jsxs(Yf,{children:[c.jsx(Mt,{to:"/VoiceCloning",children:"Voice Cloning"}),c.jsx(Mt,{to:"/Maintenance",children:"Experiencia TTS"}),c.jsx(Mt,{to:"/Maintenance",children:"AI & Salud"}),c.jsx(Mt,{to:"/Maintenance",children:"Investigación"}),c.jsx(Mt,{to:"/Maintenance",children:"Nosotros"}),c.jsxs(Kf,{children:[c.jsx(bl,{buttonText:"Login",handleClick:i}),c.jsx(Tl,{buttonText:"Signup",handleClick:l})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs(Yf,{children:[c.jsx(Mt,{to:"/VoiceCloning",children:"Voice Cloning"}),c.jsx(io,{children:" "}),c.jsx(Mt,{to:"/Maintenance",children:"Experiencia TTS"}),c.jsx(io,{children:" "}),c.jsx(Mt,{to:"/Maintenance",children:"AI & Salud"}),c.jsx(io,{children:" "}),c.jsx(Mt,{to:"/Maintenance",children:"Investigación"}),c.jsx(io,{children:" "}),c.jsx(Mt,{to:"/Maintenance",children:"Nosotros"}),c.jsx(io,{children:" "})]}),c.jsxs(Kf,{children:[c.jsx(bl,{buttonText:"Login",handleClick:i}),c.jsx(Tl,{buttonText:"Signup",handleClick:l})]})]})]})},j2=k.section`
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
`,C2=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;

  @media (max-width: ${S.bp.medium}) {
    width: 100vw;
  }
`,k2=k.img`
  width: 300px;
  @media (max-width: ${S.bp.small}) {
    width: 240px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 200px;
  }
`,$2=k.div`
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
`,_2=k.div`
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
`,b2=k.h4`
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
`,T2=k.p`
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
`,P2=k.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${S.bp.medium}) {
    margin-right: 50px;
  }
`;function O2(){const e=_a(),t=()=>{e(K0())};return c.jsxs(j2,{children:[c.jsxs(C2,{children:[c.jsx(k2,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),c.jsxs($2,{children:[c.jsx("h1",{children:"Sintética"}),c.jsx("p",{children:"Laboratorio de voces"})]})]}),c.jsxs(_2,{children:[c.jsx(b2,{children:"Síntesis de voces potenciadas por AI"}),c.jsx(T2,{children:"Desde Argentina al mundo: Líderes en el desarrollo de voces artificiales en nuestro idioma."}),c.jsx(P2,{children:c.jsx(bl,{buttonText:"Contactanos",handleClick:t})})]})]})}const R2=k.section`
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
`,I2=k.h3`
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
`,z2=k.h4`
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
`,M2=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,ys=k(oi)`
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
    h3{
      font-size: 16px;
    }
  }
`;function N2(){return c.jsxs(R2,{children:[c.jsx(I2,{children:"Nuestros objetivos"}),c.jsx(z2,{children:"Queremos reducir la brecha tecnológica de las voces sintéticas en nuestro idioma"}),c.jsxs(M2,{children:[c.jsxs(ys,{to:"/VoiceCloning",children:[c.jsx("img",{src:"assets/home/card1.svg",alt:"icon"}),c.jsx("h3",{children:"Sistemas entrenados en"}),c.jsx("h3",{children:"Español Latinoamericano"})]}),c.jsxs(ys,{to:"/Maintenance",className:"selected",children:[c.jsx("img",{src:"assets/home/card2.svg",alt:"icon"}),c.jsx("h3",{children:"Inteligencia Artificial"}),c.jsx("h3",{children:"desarrollada desde la ética"})]}),c.jsxs(ys,{to:"/Maintenance",children:[c.jsx("img",{src:"assets/home/card3.svg",alt:"icon"}),c.jsx("h3",{children:"Herramientas de impacto social"}),c.jsx("h3",{children:"Salud e Inclusión"})]})]})]})}var G0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Gf=V.createContext&&V.createContext(G0),Pn=globalThis&&globalThis.__assign||function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Pn.apply(this,arguments)},L2=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function X0(e){return e&&e.map(function(t,n){return V.createElement(t.tag,Pn({key:n},t.attr),X0(t.child))})}function nn(e){return function(t){return V.createElement(A2,Pn({attr:Pn({},e.attr)},t),X0(e.child))}}function A2(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=L2(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),V.createElement("svg",Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&V.createElement("title",null,i),e.children)};return Gf!==void 0?V.createElement(Gf.Consumer,null,function(n){return t(n)}):t(G0)}function D2(e){return nn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const F2=k(oi)`
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
`,U2=k(oi)`
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
`;function Sr({to:e,buttonText:t,rightArrow:n}){return n?c.jsxs(U2,{to:e,children:[t,c.jsx(D2,{size:20})]}):c.jsx(F2,{to:e,children:t})}Sr.propTypes={to:Gt.string.isRequired,buttonText:Gt.string,rightArrow:Gt.bool};const B2=k.section`
  color: ${S.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${S.bp.large}) {
    padding-top: 100px ;
  }
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${S.bp.small}) {
    margin-top: 100px;
  }
`,V2=k.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,W2=k.div`
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
`,H2=k.img`
  position: relative;
  width: 400px;
  @media (max-width: ${S.bp.large}) {
    width: 350px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 90vw;
  }
`,Q2=k.div`
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
    padding: 0 ;
  }
`,Y2=k.h3`
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
`,K2=k.h3`
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
`,G2=k.div`
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
`,X2=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,ji=k.div`
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
`,Ci=k.img`
  width: 150px;
  height: 150px;
  padding-right: 15px;
  @media (max-width: ${S.bp.small}) {
    padding: 0;
  }
`,ki=k.div`
  display: flex;
  flex-direction: column;
`,$i=k.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${S.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`,_i=k.p`
  font-size: 16px;
  line-height: 30px;
  color: ${S.colors.gray};
  padding-top: 3px;
  margin: 0;
`,bi=k.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;function q2(){return c.jsxs(B2,{children:[c.jsx(Y2,{children:"¿Qué es Sintética?"}),c.jsxs(V2,{children:[c.jsx(W2,{children:c.jsx(H2,{src:"assets/home/card5.svg",alt:"globos"})}),c.jsxs(Q2,{children:[c.jsx(K2,{children:"Voces en Español Rioplatense"}),c.jsxs(G2,{children:[c.jsx("p",{children:"Sintética es un laboratorio de síntesis de voces. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),c.jsx("p",{children:"Transformamos voces en posibilidades."})]})]})]}),c.jsxs(X2,{children:[c.jsxs(ji,{children:[c.jsx(Ci,{src:"../../../public/assets/home/card4.svg",alt:"text-icon"}),c.jsxs(ki,{children:[c.jsx($i,{children:"Tex To Speech - Español Latinoamericano"}),c.jsx(_i,{children:"Nuestra tecnología te ofrece una experiencia de conversión a texto única. Con acentos auténticos y entonaciones naturales tus proyectos, presentaciones y aplicaciones serán sobresalientes. Sumérgete en la nueva era del habla sintética y dale voz a tus ideas en tu propio idioma."}),c.jsx(bi,{children:c.jsx(Sr,{rightArrow:!0,to:"/Maintenance"})})]})]}),c.jsxs(ji,{children:[c.jsx(Ci,{src:"assets/voiceCloning/bannerVoice.svg",alt:"text-icon"}),c.jsxs(ki,{children:[c.jsx($i,{children:"Voice Cloning - Español Latinoamericano"}),c.jsx(_i,{children:"¿Te imaginas poder replicar cualquier voz? Con nuestro sistema podés hacerlo realidad. Experimenta la libertad de dar vida a tus proyectos con voces familiares o icónicas en español rioplatense."}),c.jsx(bi,{children:c.jsx(Sr,{rightArrow:!0,to:"/VoiceCloning"})})]})]}),c.jsxs(ji,{children:[c.jsx(Ci,{src:"assets/home/card6.svg",alt:"text-icon"}),c.jsxs(ki,{children:[c.jsx($i,{children:"AI al servicio de la salud y la inclusión"}),c.jsx(_i,{children:"Nuestra clonación de voz es la herramienta que cambiará vidas, brindando independencia a través del habla sintética personalizada. Explora cómo estamos redefiniendo la comunicación inclusiva."}),c.jsx(bi,{children:c.jsx(Sr,{rightArrow:!0,to:"/Maintenance"})})]})]}),c.jsxs(ji,{children:[c.jsx(Ci,{src:"assets/home/card7.svg",alt:"text-icon"}),c.jsxs(ki,{children:[c.jsx($i,{children:"Toolkit para voces"}),c.jsx(_i,{children:"Nuestro toolkit te brinda el control completo sobre tus archivos de audio, desde el inicio hasta el final. ¿Necesitas dividir automáticamente pistas largas? Hecho. ¿No cuentas con transcripciones? No hay problema. ¿Buscas validar transcripciones con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes idiomas? Lo hacemos posible."}),c.jsx(bi,{children:c.jsx(Sr,{rightArrow:!0,to:"/Maintenance"})})]})]})]})]})}const Xo={_origin:"https://api.emailjs.com"},J2=(e,t="https://api.emailjs.com")=>{Xo._userID=e,Xo._origin=t},q0=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Xf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const J0=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new Xf(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new Xf(l))}),i.open("POST",Xo._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),Z2=(e,t,n,r)=>{const o=r||Xo._userID;return q0(o,e,t),J0("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},eS=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},tS=(e,t,n,r)=>{const o=r||Xo._userID,i=eS(n);q0(o,e,t);const l=new FormData(i);return l.append("lib_version","3.11.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),J0("/api/v1.0/email/send-form",l)},Ta={init:J2,send:Z2,sendForm:tS};function Z0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Z0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function vn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Z0(e))&&(r&&(r+=" "),r+=t);return r}const ko=e=>typeof e=="number"&&!isNaN(e),nr=e=>typeof e=="string",qe=e=>typeof e=="function",qi=e=>nr(e)||qe(e)?e:null,xs=e=>_.isValidElement(e)||nr(e)||qe(e)||ko(e);function nS(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Pa(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(l){let{children:a,position:s,preventExitTransition:u,done:f,nodeRef:p,isIn:g}=l;const m=r?`${t}--${s}`:t,v=r?`${n}--${s}`:n,x=_.useRef(0);return _.useLayoutEffect(()=>{const E=p.current,h=m.split(" "),d=y=>{y.target===p.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",d),E.removeEventListener("animationcancel",d),x.current===0&&y.type!=="animationcancel"&&E.classList.remove(...h))};E.classList.add(...h),E.addEventListener("animationend",d),E.addEventListener("animationcancel",d)},[]),_.useEffect(()=>{const E=p.current,h=()=>{E.removeEventListener("animationend",h),o?nS(E,f,i):f()};g||(u?h():(x.current=1,E.className+=` ${v}`,E.addEventListener("animationend",h)))},[g]),V.createElement(V.Fragment,null,a)}}function qf(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const mt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Ti=e=>{let{theme:t,type:n,...r}=e;return V.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},ws={info:function(e){return V.createElement(Ti,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return V.createElement(Ti,{...e},V.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return V.createElement(Ti,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return V.createElement(Ti,{...e},V.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return V.createElement("div",{className:"Toastify__spinner"})}};function rS(e){const[,t]=_.useReducer(m=>m+1,0),[n,r]=_.useState([]),o=_.useRef(null),i=_.useRef(new Map).current,l=m=>n.indexOf(m)!==-1,a=_.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:m=>i.get(m)}).current;function s(m){let{containerId:v}=m;const{limit:x}=a.props;!x||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function u(m){r(v=>m==null?[]:v.filter(x=>x!==m))}function f(){const{toastContent:m,toastProps:v,staleId:x}=a.queue.shift();g(m,v,x)}function p(m,v){let{delay:x,staleId:E,...h}=v;if(!xs(m)||function(D){return!o.current||a.props.enableMultiContainer&&D.containerId!==a.props.containerId||i.has(D.toastId)&&D.updateId==null}(h))return;const{toastId:d,updateId:y,data:w}=h,{props:j}=a,$=()=>u(d),C=y==null;C&&a.count++;const b={...j,style:j.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(h).filter(D=>{let[A,X]=D;return X!=null})),toastId:d,updateId:y,data:w,closeToast:$,isIn:!1,className:qi(h.className||j.toastClassName),bodyClassName:qi(h.bodyClassName||j.bodyClassName),progressClassName:qi(h.progressClassName||j.progressClassName),autoClose:!h.isLoading&&(T=h.autoClose,O=j.autoClose,T===!1||ko(T)&&T>0?T:O),deleteToast(){const D=qf(i.get(d),"removed");i.delete(d),mt.emit(4,D);const A=a.queue.length;if(a.count=d==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),A>0){const X=d==null?a.props.limit:1;if(A===1||X===1)a.displayedToast++,f();else{const me=X>A?A:X;a.displayedToast=me;for(let ne=0;ne<me;ne++)f()}}else t()}};var T,O;b.iconOut=function(D){let{theme:A,type:X,isLoading:me,icon:ne}=D,ue=null;const I={theme:A,type:X};return ne===!1||(qe(ne)?ue=ne(I):_.isValidElement(ne)?ue=_.cloneElement(ne,I):nr(ne)||ko(ne)?ue=ne:me?ue=ws.spinner():(F=>F in ws)(X)&&(ue=ws[X](I))),ue}(b),qe(h.onOpen)&&(b.onOpen=h.onOpen),qe(h.onClose)&&(b.onClose=h.onClose),b.closeButton=j.closeButton,h.closeButton===!1||xs(h.closeButton)?b.closeButton=h.closeButton:h.closeButton===!0&&(b.closeButton=!xs(j.closeButton)||j.closeButton);let L=m;_.isValidElement(m)&&!nr(m.type)?L=_.cloneElement(m,{closeToast:$,toastProps:b,data:w}):qe(m)&&(L=m({closeToast:$,toastProps:b,data:w})),j.limit&&j.limit>0&&a.count>j.limit&&C?a.queue.push({toastContent:L,toastProps:b,staleId:E}):ko(x)?setTimeout(()=>{g(L,b,E)},x):g(L,b,E)}function g(m,v,x){const{toastId:E}=v;x&&i.delete(x);const h={content:m,props:v};i.set(E,h),r(d=>[...d,E].filter(y=>y!==x)),mt.emit(4,qf(h,h.props.updateId==null?"added":"updated"))}return _.useEffect(()=>(a.containerId=e.containerId,mt.cancelEmit(3).on(0,p).on(1,m=>o.current&&u(m)).on(5,s).emit(2,a),()=>{i.clear(),mt.emit(3,a)}),[]),_.useEffect(()=>{a.props=e,a.isToastActive=l,a.displayedToast=n.length}),{getToastToRender:function(m){const v=new Map,x=Array.from(i.values());return e.newestOnTop&&x.reverse(),x.forEach(E=>{const{position:h}=E.props;v.has(h)||v.set(h,[]),v.get(h).push(E)}),Array.from(v,E=>m(E[0],E[1]))},containerRef:o,isToastActive:l}}function Jf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Zf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function oS(e){const[t,n]=_.useState(!1),[r,o]=_.useState(!1),i=_.useRef(null),l=_.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=_.useRef(e),{autoClose:s,pauseOnHover:u,closeToast:f,onClick:p,closeOnClick:g}=e;function m(w){if(e.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",h),document.addEventListener("mouseup",d),document.addEventListener("touchmove",h),document.addEventListener("touchend",d);const j=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=j.getBoundingClientRect(),j.style.transition="",l.x=Jf(w.nativeEvent),l.y=Zf(w.nativeEvent),e.draggableDirection==="x"?(l.start=l.x,l.removalDistance=j.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=j.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(w){if(l.boundingRect){const{top:j,bottom:$,left:C,right:b}=l.boundingRect;w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&l.x>=C&&l.x<=b&&l.y>=j&&l.y<=$?E():x()}}function x(){n(!0)}function E(){n(!1)}function h(w){const j=i.current;l.canDrag&&j&&(l.didMove=!0,t&&E(),l.x=Jf(w),l.y=Zf(w),l.delta=e.draggableDirection==="x"?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),j.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,j.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function d(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",d);const w=i.current;if(l.canDrag&&l.didMove&&w){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),void e.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${e.draggableDirection}(0)`,w.style.opacity="1"}}_.useEffect(()=>{a.current=e}),_.useEffect(()=>(i.current&&i.current.addEventListener("d",x,{once:!0}),qe(e.onOpen)&&e.onOpen(_.isValidElement(e.children)&&e.children.props),()=>{const w=a.current;qe(w.onClose)&&w.onClose(_.isValidElement(w.children)&&w.children.props)}),[]),_.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",x),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);const y={onMouseDown:m,onTouchStart:m,onMouseUp:v,onTouchEnd:v};return s&&u&&(y.onMouseEnter=E,y.onMouseLeave=x),g&&(y.onClick=w=>{p&&p(w),l.canCloseOnClick&&f()}),{playToast:x,pauseToast:E,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:y}}function eg(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return V.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},V.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},V.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function iS(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:l,style:a,controlledProgress:s,progress:u,rtl:f,isIn:p,theme:g}=e;const m=i||s&&u===0,v={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};s&&(v.transform=`scaleX(${u})`);const x=vn("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":f}),E=qe(l)?l({rtl:f,type:o,defaultClassName:x}):vn(x,l);return V.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:E,style:v,[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{p&&r()}})}const lS=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=oS(e),{closeButton:i,children:l,autoClose:a,onClick:s,type:u,hideProgressBar:f,closeToast:p,transition:g,position:m,className:v,style:x,bodyClassName:E,bodyStyle:h,progressClassName:d,progressStyle:y,updateId:w,role:j,progress:$,rtl:C,toastId:b,deleteToast:T,isIn:O,isLoading:L,iconOut:D,closeOnClick:A,theme:X}=e,me=vn("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":A}),ne=qe(v)?v({rtl:C,position:m,type:u,defaultClassName:me}):vn(me,v),ue=!!$||!a,I={closeToast:p,type:u,theme:X};let F=null;return i===!1||(F=qe(i)?i(I):_.isValidElement(i)?_.cloneElement(i,I):eg(I)),V.createElement(g,{isIn:O,done:T,position:m,preventExitTransition:n,nodeRef:r},V.createElement("div",{id:b,onClick:s,className:ne,...o,style:x,ref:r},V.createElement("div",{...O&&{role:j},className:qe(E)?E({type:u}):vn("Toastify__toast-body",E),style:h},D!=null&&V.createElement("div",{className:vn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},D),V.createElement("div",null,l)),F,V.createElement(iS,{...w&&!ue?{key:`pb-${w}`}:{},rtl:C,theme:X,delay:a,isRunning:t,isIn:O,closeToast:p,hide:f,type:u,style:y,className:d,controlledProgress:ue,progress:$||0})))},Oa=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},aS=Pa(Oa("bounce",!0));Pa(Oa("slide",!0));Pa(Oa("zoom"));Pa(Oa("flip"));const Ml=_.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=rS(e),{className:i,style:l,rtl:a,containerId:s}=e;function u(f){const p=vn("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return qe(i)?i({position:f,rtl:a,defaultClassName:p}):vn(p,qi(i))}return _.useEffect(()=>{t&&(t.current=r.current)},[]),V.createElement("div",{ref:r,className:"Toastify",id:s},n((f,p)=>{const g=p.length?{...l}:{...l,pointerEvents:"none"};return V.createElement("div",{className:u(f),style:g,key:`container-${f}`},p.map((m,v)=>{let{content:x,props:E}=m;return V.createElement(lS,{...E,isIn:o(E.toastId),style:{...E.style,"--nth":v+1,"--len":p.length},key:`toast-${E.key}`},x)}))}))});Ml.displayName="ToastContainer",Ml.defaultProps={position:"top-right",transition:aS,autoClose:5e3,closeButton:eg,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ss,Bn=new Map,ho=[],sS=1;function tg(){return""+sS++}function uS(e){return e&&(nr(e.toastId)||ko(e.toastId))?e.toastId:tg()}function $o(e,t){return Bn.size>0?mt.emit(0,e,t):ho.push({content:e,options:t}),t.toastId}function Nl(e,t){return{...t,type:t&&t.type||e,toastId:uS(t)}}function Pi(e){return(t,n)=>$o(t,Nl(e,n))}function B(e,t){return $o(e,Nl("default",t))}B.loading=(e,t)=>$o(e,Nl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let r,{pending:o,error:i,success:l}=t;o&&(r=nr(o)?B.loading(o,n):B.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(f,p,g)=>{if(p==null)return void B.dismiss(r);const m={type:f,...a,...n,data:g},v=nr(p)?{render:p}:p;return r?B.update(r,{...m,...v}):B(v.render,{...m,...v}),g},u=qe(e)?e():e;return u.then(f=>s("success",l,f)).catch(f=>s("error",i,f)),u},B.success=Pi("success"),B.info=Pi("info"),B.error=Pi("error"),B.warning=Pi("warning"),B.warn=B.warning,B.dark=(e,t)=>$o(e,Nl("default",{theme:"dark",...t})),B.dismiss=e=>{Bn.size>0?mt.emit(1,e):ho=ho.filter(t=>e!=null&&t.options.toastId!==e)},B.clearWaitingQueue=function(e){return e===void 0&&(e={}),mt.emit(5,e)},B.isActive=e=>{let t=!1;return Bn.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},B.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const l=Bn.get(i||Ss);return l&&l.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:tg()};i.toastId!==e&&(i.staleId=e);const l=i.render||o;delete i.render,$o(l,i)}},0)},B.done=e=>{B.update(e,{progress:1})},B.onChange=e=>(mt.on(4,e),()=>{mt.off(4,e)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},mt.on(2,e=>{Ss=e.containerId||e,Bn.set(Ss,e),ho.forEach(t=>{mt.emit(0,t.content,t.options)}),ho=[]}).on(3,e=>{Bn.delete(e.containerId||e),Bn.size===0&&mt.off(0).off(1).off(5)});Ta.init({}.VITE_EMAILJS_USER_ID);const cS=k.section`
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
`,dS=k.h3`
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
`,fS=k.h3`
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
`,pS=k.div`
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
`,ep=k.a`
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
`,tp=k.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`,np=k.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,rp=k.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${S.colors.gray};
`,op=k.img`
  align-items: flex-start;
  width: 50px;
`,hS=k.form`
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
`,mS=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Oi=k.input`
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
`,gS=k.textarea`
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
`,vS=k.button`
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
`;function Xc(){const e=_.useRef(),[t,n]=_.useState({}),[r,o]=_.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},l=(u,f)=>{u.preventDefault();const p={},g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;f.name||(p.name="Por favor, completa tu nombre",B.error(p.name)),f.email?g.test(f.email)||(p.email="El formato del email no es valido",B.error(p.email)):(p.email="Por favor, completa tu email",B.error(p.email)),f.message||(p.message="Por favor, contanos cómo podemos ayudarte",B.error(p.message)),f.phone||(p.phone="Por favor, completa tu teléfono",B.error(p.phone)),f.subject||(p.subject="Por favor, escribe un asunto",B.error(p.subject)),f.message.length<8&&(p.message="Por favor, completa el mensaje con al menos 8 caracteres",B.error(p.message)),f.message.length>200&&(p.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",B.error(p.message)),n(p),Object.keys(p).length===0&&a()},a=()=>{const{name:u,email:f,phone:p,subject:g,message:m}=r;console.log("serviceID",{}.VITE_EMAILJS_SERVICE_ID),console.log("templateID",{}.VITE_EMAILJS_TEMPLATE_ID),console.log("userID",{}.VITE_EMAILJS_USER_ID),B.info("Enviando mensaje"),Ta.send({}.VITE_EMAILJS_SERVICE_ID,{}.VITE_EMAILJS_TEMPLATE_ID,{name:u,email:f,message:m,phone:p,subject:g},{}.VITE_EMAILJS_USER_ID).then(v=>{console.log(v.text),B.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},v=>{console.log(v.text),B.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),s()},s=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return c.jsxs(cS,{children:[c.jsx(dS,{children:"Contacto"}),c.jsx(fS,{children:"Dejanos tu consulta"}),c.jsxs(pS,{children:[c.jsxs(ep,{href:"tel:+61383766284",children:[c.jsx(op,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),c.jsxs(tp,{children:[c.jsx(np,{children:"Llamanos"}),c.jsx(rp,{children:"+54 9 11 5 739 7834"})]})]}),c.jsxs(ep,{href:"info@mecantronic.com.ar",children:[c.jsx(op,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),c.jsxs(tp,{children:[c.jsx(np,{children:"Escribinos"}),c.jsx(rp,{children:"info@mecantronic.com.ar"})]})]})]}),c.jsxs(hS,{ref:e,onSubmit:u=>l(u,r),children:[c.jsx(Oi,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),c.jsx(Oi,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),c.jsx(Oi,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),c.jsx(Oi,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),c.jsx(gS,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),c.jsx(mS,{children:c.jsx(vS,{type:"submit",children:"Enviar mensaje"})})]}),c.jsx(Ml,{position:"bottom-right"})]})}Ta.init({}.VITE_EMAILJS_USER_ID);const yS=k.section`
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
`,xS=k.h3`
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
`,wS=k.div`
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
`,ip=k.a`
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
`,lp=k.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`,ap=k.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,sp=k.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${S.colors.gray};
`,up=k.img`
  align-items: flex-start;
  width: 50px;
  @media (max-width: ${S.bp["x-small"]}) {
    width: 30px;
  }
`,SS=k.form`
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
`,ES=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Ri=k.input`
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
`,jS=k.textarea`
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
`,CS=k.button`
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
`;function qc(){const e=_.useRef(),[t,n]=_.useState({}),[r,o]=_.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},l=(u,f)=>{u.preventDefault();const p={},g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;f.name||(p.name="Por favor, completa tu nombre",B.error(p.name)),f.email?g.test(f.email)||(p.email="El formato del email no es valido",B.error(p.email)):(p.email="Por favor, completa tu email",B.error(p.email)),f.message||(p.message="Por favor, contanos cómo podemos ayudarte",B.error(p.message)),f.phone||(p.phone="Por favor, completa tu teléfono",B.error(p.phone)),f.subject||(p.subject="Por favor, escribe un asunto",B.error(p.subject)),f.message.length<8&&(p.message="Por favor, completa el mensaje con al menos 8 caracteres",B.error(p.message)),f.message.length>200&&(p.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",B.error(p.message)),n(p),Object.keys(p).length===0&&a()},a=()=>{const{name:u,email:f,phone:p,subject:g,message:m}=r;B.info("Enviando mensaje"),Ta.send({}.VITE_EMAILJS_SERVICE_ID,{}.VITE_EMAILJS_TEMPLATE_ID,{name:u,email:f,message:m,phone:p,subject:g},{}.VITE_EMAILJS_USER_ID).then(v=>{console.log(v.text),B.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},v=>{console.log(v.text),B.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),s()},s=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return c.jsxs(yS,{children:[c.jsx(xS,{children:"Dejanos tu consulta"}),c.jsxs(wS,{children:[c.jsxs(ip,{href:"tel:+61383766284",children:[c.jsx(up,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),c.jsxs(lp,{children:[c.jsx(ap,{children:"Llamanos"}),c.jsx(sp,{children:"+54 9 11 5 739 7834"})]})]}),c.jsxs(ip,{href:"info@mecantronic.com.ar",children:[c.jsx(up,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),c.jsxs(lp,{children:[c.jsx(ap,{children:"Escribinos"}),c.jsx(sp,{children:"info@mecantronic.com.ar"})]})]})]}),c.jsxs(SS,{ref:e,onSubmit:u=>l(u,r),children:[c.jsx(Ri,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),c.jsx(Ri,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),c.jsx(Ri,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),c.jsx(Ri,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),c.jsx(jS,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),c.jsx(ES,{children:c.jsx(CS,{type:"submit",children:"Enviar mensaje"})})]}),c.jsx(Ml,{position:"bottom-right"})]})}function cp(e){return nn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function dp(e){return nn({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}}]})(e)}function fp(e){return nn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function pp(e){return nn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function hp(e){return nn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function kS(e){return nn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function Ii(e){return nn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function $S(e){return nn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"}}]})(e)}const _S=k.div`
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
      ${e=>e.formType==="login"?"100%":"0"}
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
`,bS=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`,TS=k.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: 1;
  opacity: ${e=>e.formType==="login"?"1":"0"};
  @media (max-width: ${S.bp["x-small"]}) {
    display: ${e=>e.formType==="login"?"flex":"none"};
    width: 80%;
  }
`,PS=k.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: ${e=>e.formType==="login"?"0":"1"};
  @media (max-width: ${S.bp["x-small"]}) {
    display: ${e=>e.formType==="login"?"none":"flex"};
    width: 80%;
  }
`,mp=k.h2`
  font-size: 35px;
  color: ${S.colors.electricindigo};
  margin-bottom: 10px;
`,gp=k.p`
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
`,on=k.i`
  flex: 1;
  text-align: center;
  color: ${S.colors.gray};
  font-size: 16px;
`,ln=k.div`
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
`,vp=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,yp=k.button`
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
`,xp=k.p`
  margin: 10px 0;
  font-size: 16px;
`,wp=k.div`
  display: flex;
  justify-content: center;
`,an=k.a`
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
`,OS=k.div`
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
`,RS=k.div`
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
`,IS=k.div`
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
`,Sp=k.div`
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
`,Ep=k.button`
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
`;function Iu({initialType:e="login"}){const[t,n]=_.useState(e),r=()=>{if(t==="login"){n("signup"),console.log("se ha cambiado a ",t);return}if(t==="signup"){n("login"),console.log("se ha cambiado a ",t);return}};return c.jsxs(_S,{formType:t,children:[c.jsxs(bS,{children:[c.jsxs(TS,{action:"",formType:t,children:[c.jsx(mp,{children:"Log In"}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(Ii,{})}),c.jsx("input",{type:"text",placeholder:"Email"})]}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(hp,{})}),c.jsx("input",{type:"password",placeholder:"Contraseña"})]}),c.jsx(vp,{children:c.jsx(yp,{type:"submit",value:"Login",children:"Ingresar"})}),c.jsx(xp,{children:"O iniciá sesión con"}),c.jsxs(wp,{children:[c.jsx(an,{href:"#",children:c.jsx(cp,{})}),c.jsx(an,{href:"",children:c.jsx(pp,{})}),c.jsx(an,{href:"",children:c.jsx(dp,{})}),c.jsx(an,{href:"",children:c.jsx(fp,{})})]}),c.jsxs(gp,{children:["¿No tienes una cuenta? ","",c.jsx("a",{href:"#",onClick:r,id:"sign-up-btn2",children:"Registrarse"})]})]}),c.jsxs(PS,{action:"",formType:t,children:[c.jsx(mp,{children:"Registro"}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(Ii,{})}),c.jsx("input",{type:"text",placeholder:"Nombre"})]}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(Ii,{})}),c.jsx("input",{type:"text",placeholder:"Apellido"})]}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(kS,{})}),c.jsx("input",{type:"text",placeholder:"Teléfono"})]}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(Ii,{})}),c.jsx("input",{type:"text",placeholder:"Usuario"})]}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx($S,{})}),c.jsx("input",{type:"text",placeholder:"Email"})]}),c.jsxs(ln,{children:[c.jsx(on,{children:c.jsx(hp,{})}),c.jsx("input",{type:"password",placeholder:"Contraseña"})]}),c.jsx(vp,{children:c.jsx(yp,{type:"submit",value:"Sign up",children:"Registrarse"})}),c.jsx(xp,{children:"O registrate con"}),c.jsxs(wp,{children:[c.jsx(an,{href:"#",children:c.jsx(cp,{})}),c.jsx(an,{href:"",children:c.jsx(pp,{})}),c.jsx(an,{href:"",children:c.jsx(dp,{})}),c.jsx(an,{href:"",children:c.jsx(fp,{})})]}),c.jsxs(gp,{children:["¿ Ya tienes una cuenta? ","",c.jsx("a",{href:"#",onClick:r,id:"sign-in-btn2",children:"Ingresar"})]})]})]}),c.jsxs(OS,{children:[c.jsxs(RS,{formType:t,children:[c.jsxs(Sp,{children:[c.jsx("h3",{children:"¿Ya tenés una cuenta?"}),c.jsx("p",{children:"Iniciá sesión para disfrutar de nuestros servicios"}),c.jsx(Ep,{onClick:r,children:"Ingresar"})]}),c.jsx("img",{src:"signin.svg",alt:""})]}),c.jsxs(IS,{formType:t,children:[c.jsxs(Sp,{children:[c.jsx("h3",{children:"¿No tenés una cuenta?"}),c.jsx("p",{children:"Sería un placer que formes parte de Sintética. Registrate acá para disfrutar nuestros servicios"}),c.jsx(Ep,{onClick:r,children:"Registrarse"})]}),c.jsx("img",{src:"signup.svg",alt:""})]})]})]})}Iu.propTypes={initialType:Gt.oneOf(["login","signup"])};const zS=k.div`
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
`,MS=k.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`,NS=k.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${S.colors.onyx};
  z-index: 12;
`,Jc=()=>{const e=_a(),t=T0(o=>o.modal.modalType),n=()=>{e(y2())};let r;switch(t){case"contact":r=c.jsx(qc,{});break;case"login":r=c.jsx(Iu,{initialType:"login"});break;case"signup":r=c.jsx(Iu,{initialType:"signup"});break;default:r=c.jsx(c.Fragment,{})}return t==="closed"?c.jsx(c.Fragment,{}):c.jsx(zS,{children:c.jsxs(MS,{children:[c.jsx(NS,{onClick:n,children:"x"}),r]})})},LS=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`,AS=k.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`;function DS(){const[e,t]=_.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return c.jsxs(LS,{children:[c.jsx(ba,{}),c.jsx(O2,{openModal:n}),c.jsxs(AS,{children:[c.jsx(N2,{}),c.jsx(q2,{}),c.jsx(Xc,{})]}),e&&c.jsx(Jc,{closeModal:r,children:c.jsx(qc,{})})]})}const FS=k.section`
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
`,US=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${S.bp.large}) {
    width: auto;
  }
`,BS=k.img`
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
`,VS=k.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${S.bp.large}) {
    width: 80%;
  }
`,WS=k.h3`
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
`,HS=k.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${S.colors.gray};
`,QS=k.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,YS=k.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${S.bp.medium}) {
    margin-right: 50px;
  }
`;function ng({openModal:e}){const t=_a(),n=()=>{t(K0())};return c.jsxs(FS,{children:[c.jsx(US,{children:c.jsx(BS,{src:"assets/voiceCloning/bannerVoice.svg"})}),c.jsxs(VS,{children:[c.jsx(WS,{children:"Inteligencia Artificial para alzar tu voz"}),c.jsx(HS,{children:"Crea una copia digital de tu voz con nuestros sistemas de inteligencia artificial para clonar voces. Desarrollamos modelos de IA personalizados para capturar tu voz y darte la experiencia más realista en tu propio idioma."}),c.jsx(QS,{children:c.jsx(YS,{onClick:e,children:c.jsx(Tl,{buttonText:"Cloná tu voz ",rightArrow:!0,handleClick:n})})})]})]})}ng.propTypes={openModal:Gt.node.isRequired};const KS=k.section`
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
`,GS=k.span`
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
`,XS=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`,dt=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${S.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
`,ft=k.audio`
  width: 330px;
`,pt=k.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${S.colors.raisinblack};
`,ht=k.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${S.colors.electricindigo};
`;function qS(){return c.jsxs(KS,{children:[c.jsx(GS,{children:"Nuestras voces"}),c.jsxs(XS,{children:[c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/fem1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Ana"}),c.jsx(ht,{children:"Voz Real"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/fem1_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Ana"}),c.jsx(ht,{children:"Voz AI"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/mas1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Franco"}),c.jsx(ht,{children:"Voz Real"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/mas1_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Franco"}),c.jsx(ht,{children:"Voz AI"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/fem2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Paula"}),c.jsx(ht,{children:"Voz Real"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/fem2_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Paula"}),c.jsx(ht,{children:"Voz AI"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/mas2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Darío"}),c.jsx(ht,{children:"Voz Real"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/mas2_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Darío"}),c.jsx(ht,{children:"Voz AI"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/fem3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Luciana"}),c.jsx(ht,{children:"Voz Real"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/fem3_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Luciana"}),c.jsx(ht,{children:"Voz AI"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/mas3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Hernán"}),c.jsx(ht,{children:"Voz Real"})]}),c.jsxs(dt,{children:[c.jsxs(ft,{controls:!0,children:[c.jsx("source",{src:"../../../public/audios-voice/mas3_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),c.jsx(pt,{children:"Hernán"}),c.jsx(ht,{children:"Voz AI"})]})]})]})}const JS=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;function ZS(){const[e,t]=_.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return c.jsxs(JS,{children:[c.jsx(ba,{}),c.jsx(ng,{openModal:n}),c.jsx(qS,{}),c.jsx(Xc,{}),e&&c.jsx(Jc,{closeModal:r,children:c.jsx(qc,{})})]})}const eE=k.section`
  background-color: ${S.colors.background[1]};
  color: ${S.colors.electricindigo};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  //margin-top: 200px;
  min-height: 100vh;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${S.bp.large}) {
    margin-top: 100px;
  }
`,tE=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media (max-width: ${S.bp.large}) {
    width: 80%;
  }
`,nE=k.img`
  position: relative;
  width: 430px;
  @media (max-width: ${S.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 80vw;
  }
`,rE=k.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${S.bp.large}) {
    width: 90%;
  }
`,oE=k.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${S.colors.detail1[1]};
  letter-spacing: 1px;
`,iE=k.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0 ;
  margin: 0;
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 40px;
    line-height: 50px;
  }
`,Es=k.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;function lE(){return c.jsxs(eE,{children:[c.jsxs(rE,{children:[c.jsx(oE,{children:"*** ¿Porqué lo hacemos?"}),c.jsx(iE,{children:"Tecnología al servicio de la salud y la inclusión"}),c.jsx(Es,{children:"En Sintética, estamos convencidos de que la tecnología debe ser una fuerza impulsora para mejorar la vida de las personas en todo el mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos hacia una visión transformadora: empoderar a individuos de todas las capacidades y orígenes a través de soluciones innovadoras."}),c.jsx(Es,{children:"En la intersección de la vanguardia tecnológica y el bienestar humano, la inteligencia artificial ha emergido como un faro de posibilidades. Creemos en la importancia de la inclusión, en la eliminación de barreras y en la promoción de la igualdad en todos los niveles."}),c.jsx(Es,{children:"La clonación de voz no solo es un avance técnico, es un testimonio de nuestro compromiso de construir un mundo donde cada voz sea escuchada y respetada. Te invitamos a explorar nuestros proyectos y descubrir cómo la inteligencia artificial está transformando la salud de maneras que antes solo podíamos imaginar."})]}),c.jsx(tE,{children:c.jsx(nE,{src:"../../../public/assets/ia-salud/logo_1.png",alt:"Logo IA-salud"})})]})}const aE=k.section`
  background-color: ${S.colors.background[1]};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-top: 100px;
`,sE=k.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0 ;
  margin: 0;
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 40px;
  }
`,zi=k.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`,uE=k.iframe`
  width: 80vw;
  height: 50vw;
  padding-top: 50px;

`;function cE(){return c.jsxs(aE,{children:[c.jsx(sE,{children:"Proyecto Mi Identidad Vocal: programa ImpaCT.ar Ciencia y Tecnología - Ministerio de Salud de la Nación."}),c.jsx(zi,{children:"En las actividades cotidianas se hace evidente que la voz desempeña un papel indispensable. Desde la comunicación con el entorno familiar, hasta el desempeño académico y laboral. Prescindir de este instrumento significa una desventaja importante para el desarrollo de cualquier persona."}),c.jsx(zi,{children:"La clonación de voz emerge como una herramienta de gran potencial en la asistencia a personas afectadas por patologías de alta complejidad. Entre las condiciones que mayores limitaciones generan se encuentran la esclerosis lateral amiotrófica (ELA), la enfermedad de Huntington (EH), la apraxia, el accidente cerebrovascular (ACV) y el trastorno del espectro autista (TEA). Sin embargo, existen otro tipo de afecciones leves que pueden ser mitigadas con la tecnología propuesta, como por ejemplo, las intervenciones quirúrgicas en las cuerdas vocales y traqueotomías."}),c.jsx(zi,{children:"Mediante la aplicación de la clonación de voz, los usuarios podrán introducir mensajes en formato de texto, lo que conlleva a la producción de una representación auditiva por medio de una voz sintética. Esta tendrá como característica principal una gran similitud con su voz natural gracias al registro de audios de referencia y las tecnologías que se describen en este documento."}),c.jsx(zi,{children:"El software que desarrollamos permite reproducir cualquier texto que se ingrese, en forma de discurso y en español rioplatense. Esto representa un gran aporte en términos de inclusión para un porcentaje de la población que se ve imposibilitado en su desarrollo cotidiano."}),c.jsx(uE,{src:"https://www.youtube.com/embed/-KylP16dxj0?si=CDhRIkNFvzT6ZUnR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}const dE=k.section`
  background-color: ${S.colors.background[1]};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`,fE=k.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${S.colors.detail1[1]};
  letter-spacing: 1px;
`,pE=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`,jp=k.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${S.colors.background[3]};
  border-radius: 15px;
`,Cp=k.img`
  width: 320px;
  height: 380px;
`;function hE(){return c.jsxs(dE,{children:[c.jsx(fE,{children:"*** Prensa ***"}),c.jsxs(pE,{children:[c.jsx(jp,{href:"https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/",children:c.jsx(Cp,{src:"../../../public/assets/ia-salud/nota1.png",alt:"Nota"})}),c.jsx(jp,{href:"https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/",children:c.jsx(Cp,{src:"../../../public/assets/ia-salud/nota2.png",alt:"Nota"})})]})]})}const mE=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${S.colors.background[1]};
`;function gE(){return c.jsxs(mE,{children:[c.jsx(ba,{}),c.jsx(lE,{}),c.jsx(cE,{}),c.jsx(hE,{}),c.jsx(Xc,{})]})}const vE=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${S.colors.white};
`,yE=k.div`
  display: flex;
  align-items: center;

  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,xE=k.img`
  width: 40vw;
  @media (max-width: ${S.bp.medium}) {
    width: 60vw;
  }
`,wE=k.div`
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
`,SE=k.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function EE(){return c.jsxs(vE,{children:[c.jsx(ba,{}),c.jsxs(yE,{children:[c.jsx(xE,{src:"assets/backgrounds/maintenance.svg"}),c.jsxs(wE,{children:[c.jsx("h2",{children:"¡Lo sentimos!"}),c.jsx("span",{children:"Sección en mantenimiento."}),c.jsx(SE,{children:c.jsx(Sr,{to:"/",buttonText:"Volver a Inicio"})})]})]})]})}const jE=O1`
  /* Define tus fuentes globales aquí */
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
`,CE=k.div`
  /* Agrega tus estilos aquí */
`;function kE(){const e=T0(t=>t.modal.modalType);return _.useEffect(()=>{},[e]),c.jsxs($x,{children:[c.jsx(Jc,{}),c.jsx(jE,{}),c.jsx(CE,{children:c.jsxs(wx,{children:[c.jsx(fo,{exact:!0,path:"/",element:c.jsx(DS,{})}),c.jsx(fo,{exact:!0,path:"/VoiceCloning",element:c.jsx(ZS,{})}),c.jsx(fo,{exact:!0,path:"/IA",element:c.jsx(gE,{})}),c.jsx(fo,{exact:!0,path:"/Maintenance",element:c.jsx(EE,{})})]})})]})}const $E=Q0({name:"user",initialState:{userName:"",name:"",surname:"",email:"",phone:"",credits:0,role:""},reducers:{setUser:e=>{e.userName="userName",e.name="user",e.surname="user",e.email="user@example.com",e.phone="123-456",e.credits=100,e.role="premuim"},removeUser:e=>{e.userName="",e.name="",e.surname="",e.email="",e.phone="",e.credits=0,e.role=""}}}),_E=$E.reducer,bE=l2({reducer:{modal:x2,user:_E}});js.createRoot(document.getElementById("root")).render(c.jsx(V.StrictMode,{children:c.jsx(kw,{store:bE,children:c.jsx(kE,{})})}));

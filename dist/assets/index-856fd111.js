function wh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Zi={},md={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),Eh=Symbol.for("react.portal"),kh=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),jh=Symbol.for("react.profiler"),_h=Symbol.for("react.provider"),Th=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Ph=Symbol.for("react.suspense"),Rh=Symbol.for("react.memo"),Ih=Symbol.for("react.lazy"),wu=Symbol.iterator;function Oh(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function yr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||gd}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xd(){}xd.prototype=yr.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||gd}var ms=hs.prototype=new xd;ms.constructor=hs;vd(ms,yr.prototype);ms.isPureReactComponent=!0;var Su=Array.isArray,wd=Object.prototype.hasOwnProperty,gs={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)wd.call(t,r)&&!Sd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:So,type:e,key:i,ref:l,props:o,_owner:gs.current}}function zh(e,t){return{$$typeof:So,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function Lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Eu=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lh(""+e.key):t.toString(36)}function ri(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case So:case Eh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+_l(l,0):r,Su(o)?(n="",e!=null&&(n=e.replace(Eu,"$&/")+"/"),ri(o,t,n,"",function(u){return u})):o!=null&&(vs(o)&&(o=zh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Eu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Su(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+_l(i,a);l+=ri(i,t,n,s,o)}else if(s=Oh(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+_l(i,a++),l+=ri(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $o(e,t,n){if(e==null)return e;var r=[],o=0;return ri(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},oi={transition:null},Mh={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:oi,ReactCurrentOwner:gs};G.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=yr;G.Fragment=kh;G.Profiler=jh;G.PureComponent=hs;G.StrictMode=Ch;G.Suspense=Ph;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=gs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)wd.call(t,s)&&!Sd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:So,type:e.type,key:o,ref:i,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Th,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_h,_context:e},e.Consumer=e};G.createElement=Ed;G.createFactory=function(e){var t=Ed.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:$h,render:e}};G.isValidElement=vs;G.lazy=function(e){return{$$typeof:Ih,_payload:{_status:-1,_result:e},_init:Nh}};G.memo=function(e,t){return{$$typeof:Rh,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=oi.transition;oi.transition={};try{e()}finally{oi.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Be.current.useCallback(e,t)};G.useContext=function(e){return Be.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};G.useEffect=function(e,t){return Be.current.useEffect(e,t)};G.useId=function(){return Be.current.useId()};G.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Be.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};G.useRef=function(e){return Be.current.useRef(e)};G.useState=function(e){return Be.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Be.current.useTransition()};G.version="18.2.0";md.exports=G;var T=md.exports;const V=pd(T),bh=wh({__proto__:null,default:V},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=T,Dh=Symbol.for("react.element"),Fh=Symbol.for("react.fragment"),Uh=Object.prototype.hasOwnProperty,Bh=Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vh={key:!0,ref:!0,__self:!0,__source:!0};function kd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Uh.call(t,r)&&!Vh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Dh,type:e,key:i,ref:l,props:o,_owner:Bh.current}}Zi.Fragment=Fh;Zi.jsx=kd;Zi.jsxs=kd;hd.exports=Zi;var f=hd.exports,ua={},Cd={exports:{}},tt={},jd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,D){var U=z.length;z.push(D);e:for(;0<U;){var oe=U-1>>>1,se=z[oe];if(0<o(se,D))z[oe]=D,z[U]=se,U=oe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var D=z[0],U=z.pop();if(U!==D){z[0]=U;e:for(var oe=0,se=z.length,Xe=se>>>1;oe<Xe;){var Ee=2*(oe+1)-1,rt=z[Ee],he=Ee+1,we=z[he];if(0>o(rt,U))he<se&&0>o(we,rt)?(z[oe]=we,z[he]=U,oe=he):(z[oe]=rt,z[Ee]=U,oe=Ee);else if(he<se&&0>o(we,U))z[oe]=we,z[he]=U,oe=he;else break e}}return D}function o(z,D){var U=z.sortIndex-D.sortIndex;return U!==0?U:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,p=null,v=3,g=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=z)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function x(z){if(w=!1,m(z),!y)if(n(s)!==null)y=!0,ne(E);else{var D=n(u);D!==null&&ae(x,D.startTime-z)}}function E(z,D){y=!1,w&&(w=!1,d($),$=-1),g=!0;var U=v;try{for(m(D),p=n(s);p!==null&&(!(p.expirationTime>D)||z&&!F());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,v=p.priorityLevel;var se=oe(p.expirationTime<=D);D=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(s)&&r(s),m(D)}else r(s);p=n(s)}if(p!==null)var Xe=!0;else{var Ee=n(u);Ee!==null&&ae(x,Ee.startTime-D),Xe=!1}return Xe}finally{p=null,v=U,g=!1}}var j=!1,C=null,$=-1,R=5,O=-1;function F(){return!(e.unstable_now()-O<R)}function A(){if(C!==null){var z=e.unstable_now();O=z;var D=!0;try{D=C(!0,z)}finally{D?b():(j=!1,C=null)}}else j=!1}var b;if(typeof c=="function")b=function(){c(A)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,pe=X.port2;X.port1.onmessage=A,b=function(){pe.postMessage(null)}}else b=function(){k(A,0)};function ne(z){C=z,j||(j=!0,b())}function ae(z,D){$=k(function(){z(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,ne(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var D=3;break;default:D=v}var U=v;v=D;try{return z()}finally{v=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=v;v=z;try{return D()}finally{v=U}},e.unstable_scheduleCallback=function(z,D,U){var oe=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?oe+U:oe):U=oe,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=U+se,z={id:h++,callback:D,priorityLevel:z,startTime:U,expirationTime:se,sortIndex:-1},U>oe?(z.sortIndex=U,t(u,z),n(s)===null&&z===n(u)&&(w?(d($),$=-1):w=!0,ae(x,U-oe))):(z.sortIndex=se,t(s,z),y||g||(y=!0,ne(E))),z},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(z){var D=v;return function(){var U=v;v=D;try{return z.apply(this,arguments)}finally{v=U}}}})(_d);jd.exports=_d;var Wh=jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=T,et=Wh;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,Zr={};function Mn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,Hh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},Cu={};function Qh(e){return ca.call(Cu,e)?!0:ca.call(ku,e)?!1:Hh.test(e)?Cu[e]=!0:(ku[e]=!0,!1)}function Yh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kh(e,t,n,r){if(t===null||typeof t>"u"||Yh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,xs);Le[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,xs);Le[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,xs);Le[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ws(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kh(t,n,o,r)&&(n=null),r||o===null?Qh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),ks=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),ju=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Tl;function Lr(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var $l=!1;function Pl(e,t){if(!e||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function Gh(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Un:return"Portal";case da:return"Profiler";case Ss:return"StrictMode";case fa:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case Pd:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ks:return t=e.displayName||null,t!==null?t:ha(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return ha(e(t))}catch{}}return null}function Xh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ha(t);case 8:return t===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jh(e){var t=Od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=Jh(e))}function zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ld(e,t){t=t.checked,t!=null&&ws(e,"checked",t,!1)}function ga(e,t){Ld(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?va(e,t.type,n):t.hasOwnProperty("defaultValue")&&va(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function va(e,t,n){(t!=="number"||wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Nr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function Nd(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Io,bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qh=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){qh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Dd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ad(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Zh=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(e,t){if(t){if(Zh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,tr=null,nr=null;function Ru(e){if(e=Co(e)){if(typeof ka!="function")throw Error(I(280));var t=e.stateNode;t&&(t=ol(t),ka(e.stateNode,e.type,t))}}function Fd(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Ud(){if(tr){var e=tr,t=nr;if(nr=tr=null,Ru(e),t)for(e=0;e<t.length;e++)Ru(t[e])}}function Bd(e,t){return e(t)}function Vd(){}var Rl=!1;function Wd(e,t,n){if(Rl)return e(t,n);Rl=!0;try{return Bd(e,t,n)}finally{Rl=!1,(tr!==null||nr!==null)&&(Vd(),Ud())}}function to(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ca=!1;if(Ut)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Ca=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Ca=!1}function em(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Br=!1,Si=null,Ei=!1,ja=null,tm={onError:function(e){Br=!0,Si=e}};function nm(e,t,n,r,o,i,l,a,s){Br=!1,Si=null,em.apply(tm,arguments)}function rm(e,t,n,r,o,i,l,a,s){if(nm.apply(this,arguments),Br){if(Br){var u=Si;Br=!1,Si=null}else throw Error(I(198));Ei||(Ei=!0,ja=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iu(e){if(bn(e)!==e)throw Error(I(188))}function om(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Iu(o),e;if(i===r)return Iu(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Qd(e){return e=om(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yd(e);if(t!==null)return t;e=e.sibling}return null}var Kd=et.unstable_scheduleCallback,Ou=et.unstable_cancelCallback,im=et.unstable_shouldYield,lm=et.unstable_requestPaint,Se=et.unstable_now,am=et.unstable_getCurrentPriorityLevel,js=et.unstable_ImmediatePriority,Gd=et.unstable_UserBlockingPriority,ki=et.unstable_NormalPriority,sm=et.unstable_LowPriority,Xd=et.unstable_IdlePriority,el=null,Rt=null;function um(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:fm,cm=Math.log,dm=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(cm(e)/dm|0)|0}var Oo=64,zo=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Mr(a):(i&=l,i!==0&&(r=Mr(i)))}else l=n&~o,l!==0?r=Mr(l):i!==0&&(r=Mr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-St(t),o=1<<n,r|=e[n],t&=~o;return r}function pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-St(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=pm(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jd(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-St(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function _s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var le=0;function qd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zd,Ts,ef,tf,nf,Ta=!1,Lo=[],nn=null,rn=null,on=null,no=new Map,ro=new Map,Xt=[],gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":no.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(t.pointerId)}}function Tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Co(t),t!==null&&Ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vm(e,t,n,r,o){switch(t){case"focusin":return nn=Tr(nn,e,t,n,r,o),!0;case"dragenter":return rn=Tr(rn,e,t,n,r,o),!0;case"mouseover":return on=Tr(on,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return no.set(i,Tr(no.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ro.set(i,Tr(ro.get(i)||null,e,t,n,r,o)),!0}return!1}function rf(e){var t=kn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hd(n),t!==null){e.blockedOn=t,nf(e.priority,function(){ef(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ea=r,n.target.dispatchEvent(r),Ea=null}else return t=Co(n),t!==null&&Ts(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){ii(e)&&n.delete(t)}function ym(){Ta=!1,nn!==null&&ii(nn)&&(nn=null),rn!==null&&ii(rn)&&(rn=null),on!==null&&ii(on)&&(on=null),no.forEach(Lu),ro.forEach(Lu)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Ta||(Ta=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,ym)))}function oo(e){function t(o){return $r(o,e)}if(0<Lo.length){$r(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&$r(nn,e),rn!==null&&$r(rn,e),on!==null&&$r(on,e),no.forEach(t),ro.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)rf(n),n.blockedOn===null&&Xt.shift()}var rr=Ht.ReactCurrentBatchConfig,ji=!0;function xm(e,t,n,r){var o=le,i=rr.transition;rr.transition=null;try{le=1,$s(e,t,n,r)}finally{le=o,rr.transition=i}}function wm(e,t,n,r){var o=le,i=rr.transition;rr.transition=null;try{le=4,$s(e,t,n,r)}finally{le=o,rr.transition=i}}function $s(e,t,n,r){if(ji){var o=$a(e,t,n,r);if(o===null)Ul(e,t,r,_i,n),zu(e,r);else if(vm(o,e,t,n,r))r.stopPropagation();else if(zu(e,r),t&4&&-1<gm.indexOf(e)){for(;o!==null;){var i=Co(o);if(i!==null&&Zd(i),i=$a(e,t,n,r),i===null&&Ul(e,t,r,_i,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var _i=null;function $a(e,t,n,r){if(_i=null,e=Cs(r),e=kn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _i=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(am()){case js:return 1;case Gd:return 4;case ki:case sm:return 16;case Xd:return 536870912;default:return 16}default:return 16}}var qt=null,Ps=null,li=null;function lf(){if(li)return li;var e,t=Ps,n=t.length,r,o="value"in qt?qt.value:qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return li=o.slice(e,1<r?1-r:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function Nu(){return!1}function nt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?No:Nu,this.isPropagationStopped=Nu,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=nt(xr),ko=ye({},xr,{view:0,detail:0}),Sm=nt(ko),Ol,zl,Pr,tl=ye({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Ol=e.screenX-Pr.screenX,zl=e.screenY-Pr.screenY):zl=Ol=0,Pr=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Mu=nt(tl),Em=ye({},tl,{dataTransfer:0}),km=nt(Em),Cm=ye({},ko,{relatedTarget:0}),Ll=nt(Cm),jm=ye({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=nt(jm),Tm=ye({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=nt(Tm),Pm=ye({},xr,{data:0}),bu=nt(Pm),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Om[e])?!!t[e]:!1}function Is(){return zm}var Lm=ye({},ko,{key:function(e){if(e.key){var t=Rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=nt(Lm),Mm=ye({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=nt(Mm),bm=ye({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),Am=nt(bm),Dm=ye({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=nt(Dm),Um=ye({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=nt(Um),Vm=[9,13,27,32],Os=Ut&&"CompositionEvent"in window,Vr=null;Ut&&"documentMode"in document&&(Vr=document.documentMode);var Wm=Ut&&"TextEvent"in window&&!Vr,af=Ut&&(!Os||Vr&&8<Vr&&11>=Vr),Du=String.fromCharCode(32),Fu=!1;function sf(e,t){switch(e){case"keyup":return Vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Hm(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(Fu=!0,Du);case"textInput":return e=t.data,e===Du&&Fu?null:e;default:return null}}function Qm(e,t){if(Vn)return e==="compositionend"||!Os&&sf(e,t)?(e=lf(),li=Ps=qt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return af&&t.locale!=="ko"?null:t.data;default:return null}}var Ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ym[e.type]:t==="textarea"}function cf(e,t,n,r){Fd(r),t=Ti(t,"onChange"),0<t.length&&(n=new Rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,io=null;function Km(e){Sf(e,0)}function nl(e){var t=Qn(e);if(zd(t))return e}function Gm(e,t){if(e==="change")return t}var df=!1;if(Ut){var Nl;if(Ut){var Ml="oninput"in document;if(!Ml){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Ml=typeof Bu.oninput=="function"}Nl=Ml}else Nl=!1;df=Nl&&(!document.documentMode||9<document.documentMode)}function Vu(){Wr&&(Wr.detachEvent("onpropertychange",ff),io=Wr=null)}function ff(e){if(e.propertyName==="value"&&nl(io)){var t=[];cf(t,io,e,Cs(e)),Wd(Km,t)}}function Xm(e,t,n){e==="focusin"?(Vu(),Wr=t,io=n,Wr.attachEvent("onpropertychange",ff)):e==="focusout"&&Vu()}function Jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(io)}function qm(e,t){if(e==="click")return nl(t)}function Zm(e,t){if(e==="input"||e==="change")return nl(t)}function eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:eg;function lo(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ca.call(t,o)||!Ct(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tg(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pf(n.ownerDocument.documentElement,n)){if(r!==null&&zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Hu(n,i);var l=Hu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ng=Ut&&"documentMode"in document&&11>=document.documentMode,Wn=null,Pa=null,Hr=null,Ra=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||Wn==null||Wn!==wi(r)||(r=Wn,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&lo(Hr,r)||(Hr=r,r=Ti(Pa,"onSelect"),0<r.length&&(t=new Rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},bl={},mf={};Ut&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function rl(e){if(bl[e])return bl[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mf)return bl[e]=t[n];return e}var gf=rl("animationend"),vf=rl("animationiteration"),yf=rl("animationstart"),xf=rl("transitionend"),wf=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){wf.set(e,t),Mn(t,[e])}for(var Al=0;Al<Yu.length;Al++){var Dl=Yu[Al],rg=Dl.toLowerCase(),og=Dl[0].toUpperCase()+Dl.slice(1);gn(rg,"on"+og)}gn(gf,"onAnimationEnd");gn(vf,"onAnimationIteration");gn(yf,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(xf,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rm(r,t,void 0,e),e.currentTarget=null}function Sf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ku(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ku(o,a,u),i=s}}}if(Ei)throw e=ja,Ei=!1,ja=null,e}function ce(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(Ef(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Ef(n,e,r,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function ao(e){if(!e[bo]){e[bo]=!0,$d.forEach(function(n){n!=="selectionchange"&&(ig.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,Fl("selectionchange",!1,t))}}function Ef(e,t,n,r){switch(of(t)){case 1:var o=xm;break;case 4:o=wm;break;default:o=$s}n=o.bind(null,t,n,e),o=void 0,!Ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=kn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Wd(function(){var u=i,h=Cs(n),p=[];e:{var v=wf.get(e);if(v!==void 0){var g=Rs,y=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":g=Nm;break;case"focusin":y="focus",g=Ll;break;case"focusout":y="blur",g=Ll;break;case"beforeblur":case"afterblur":g=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Am;break;case gf:case vf:case yf:g=_m;break;case xf:g=Fm;break;case"scroll":g=Sm;break;case"wheel":g=Bm;break;case"copy":case"cut":case"paste":g=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Au}var w=(t&4)!==0,k=!w&&e==="scroll",d=w?v!==null?v+"Capture":null:v;w=[];for(var c=u,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,d!==null&&(x=to(c,d),x!=null&&w.push(so(c,x,m)))),k)break;c=c.return}0<w.length&&(v=new g(v,y,null,n,h),p.push({event:v,listeners:w}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==Ea&&(y=n.relatedTarget||n.fromElement)&&(kn(y)||y[Bt]))break e;if((g||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?kn(y):null,y!==null&&(k=bn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=Mu,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Au,x="onPointerLeave",d="onPointerEnter",c="pointer"),k=g==null?v:Qn(g),m=y==null?v:Qn(y),v=new w(x,c+"leave",g,n,h),v.target=k,v.relatedTarget=m,x=null,kn(h)===u&&(w=new w(d,c+"enter",y,n,h),w.target=m,w.relatedTarget=k,x=w),k=x,g&&y)t:{for(w=g,d=y,c=0,m=w;m;m=Dn(m))c++;for(m=0,x=d;x;x=Dn(x))m++;for(;0<c-m;)w=Dn(w),c--;for(;0<m-c;)d=Dn(d),m--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=Dn(w),d=Dn(d)}w=null}else w=null;g!==null&&Gu(p,v,g,w,!1),y!==null&&k!==null&&Gu(p,k,y,w,!0)}}e:{if(v=u?Qn(u):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var E=Gm;else if(Uu(v))if(df)E=Zm;else{E=Jm;var j=Xm}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=qm);if(E&&(E=E(e,u))){cf(p,E,n,h);break e}j&&j(e,v,u),e==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&va(v,"number",v.value)}switch(j=u?Qn(u):window,e){case"focusin":(Uu(j)||j.contentEditable==="true")&&(Wn=j,Pa=u,Hr=null);break;case"focusout":Hr=Pa=Wn=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Qu(p,n,h);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":Qu(p,n,h)}var C;if(Os)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Vn?sf(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(af&&n.locale!=="ko"&&(Vn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Vn&&(C=lf()):(qt=h,Ps="value"in qt?qt.value:qt.textContent,Vn=!0)),j=Ti(u,$),0<j.length&&($=new bu($,e,null,n,h),p.push({event:$,listeners:j}),C?$.data=C:(C=uf(n),C!==null&&($.data=C)))),(C=Wm?Hm(e,n):Qm(e,n))&&(u=Ti(u,"onBeforeInput"),0<u.length&&(h=new bu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}Sf(p,t)})}function so(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=to(e,n),i!=null&&r.unshift(so(e,i,o)),i=to(e,t),i!=null&&r.push(so(e,i,o))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=to(n,i),s!=null&&l.unshift(so(n,s,a))):o||(s=to(n,i),s!=null&&l.push(so(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lg=/\r\n?/g,ag=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(lg,`
`).replace(ag,"")}function Ao(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(I(425))}function $i(){}var Ia=null,Oa=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(e){return Ju.resolve(null).then(e).catch(cg)}:La;function cg(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);oo(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+wr,uo="__reactProps$"+wr,Bt="__reactContainer$"+wr,Na="__reactEvents$"+wr,dg="__reactListeners$"+wr,fg="__reactHandles$"+wr;function kn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qu(e);e!==null;){if(n=e[Pt])return n;e=qu(e)}return t}e=n,n=e.parentNode}return null}function Co(e){return e=e[Pt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function ol(e){return e[uo]||null}var Ma=[],Yn=-1;function vn(e){return{current:e}}function fe(e){0>Yn||(e.current=Ma[Yn],Ma[Yn]=null,Yn--)}function ue(e,t){Yn++,Ma[Yn]=e.current,e.current=t}var mn={},De=vn(mn),Ye=vn(!1),Rn=mn;function ar(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function Pi(){fe(Ye),fe(De)}function Zu(e,t,n){if(De.current!==mn)throw Error(I(168));ue(De,t),ue(Ye,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,Xh(e)||"Unknown",o));return ye({},n,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Rn=De.current,ue(De,e),ue(Ye,Ye.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=kf(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,fe(Ye),fe(De),ue(De,e)):fe(Ye),ue(Ye,n)}var Nt=null,il=!1,Vl=!1;function Cf(e){Nt===null?Nt=[e]:Nt.push(e)}function pg(e){il=!0,Cf(e)}function yn(){if(!Vl&&Nt!==null){Vl=!0;var e=0,t=le;try{var n=Nt;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,il=!1}catch(o){throw Nt!==null&&(Nt=Nt.slice(e+1)),Kd(js,yn),o}finally{le=t,Vl=!1}}return null}var Kn=[],Gn=0,Ii=null,Oi=0,ut=[],ct=0,In=null,Mt=1,bt="";function wn(e,t){Kn[Gn++]=Oi,Kn[Gn++]=Ii,Ii=e,Oi=t}function jf(e,t,n){ut[ct++]=Mt,ut[ct++]=bt,ut[ct++]=In,In=e;var r=Mt;e=bt;var o=32-St(r)-1;r&=~(1<<o),n+=1;var i=32-St(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Mt=1<<32-St(t)+o|n<<o|r,bt=i+e}else Mt=1<<i|n<<o|r,bt=e}function Ls(e){e.return!==null&&(wn(e,1),jf(e,1,0))}function Ns(e){for(;e===Ii;)Ii=Kn[--Gn],Kn[Gn]=null,Oi=Kn[--Gn],Kn[Gn]=null;for(;e===In;)In=ut[--ct],ut[ct]=null,bt=ut[--ct],ut[ct]=null,Mt=ut[--ct],ut[ct]=null}var Ze=null,qe=null,me=!1,wt=null;function _f(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,qe=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Mt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,qe=null,!0):!1;default:return!1}}function ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(me){var t=qe;if(t){var n=t;if(!tc(e,t)){if(ba(e))throw Error(I(418));t=ln(n.nextSibling);var r=Ze;t&&tc(e,t)?_f(r,n):(e.flags=e.flags&-4097|2,me=!1,Ze=e)}}else{if(ba(e))throw Error(I(418));e.flags=e.flags&-4097|2,me=!1,Ze=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Do(e){if(e!==Ze)return!1;if(!me)return nc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=qe)){if(ba(e))throw Tf(),Error(I(418));for(;t;)_f(e,t),t=ln(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ze?ln(e.stateNode.nextSibling):null;return!0}function Tf(){for(var e=qe;e;)e=ln(e.nextSibling)}function sr(){qe=Ze=null,me=!1}function Ms(e){wt===null?wt=[e]:wt.push(e)}var hg=Ht.ReactCurrentBatchConfig;function yt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zi=vn(null),Li=null,Xn=null,bs=null;function As(){bs=Xn=Li=null}function Ds(e){var t=zi.current;fe(zi),e._currentValue=t}function Da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Li=e,bs=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Li===null)throw Error(I(308));Xn=e,Li.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var Cn=null;function Fs(e){Cn===null?Cn=[e]:Cn.push(e)}function $f(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Fs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ni(e,t,n,r){var o=e.updateQueue;Gt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,h=u=s=null,a=i;do{var v=a.lane,g=a.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(v=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(g,p,v);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,v=typeof y=="function"?y.call(g,p,v):y,v==null)break e;p=ye({},p,v);break e;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else g={eventTime:g,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,s=p):h=h.next=g,l|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(h===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zn|=l,e.lanes=l,e.memoizedState=p}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var Rf=new Td.Component().refs;function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=un(e),i=Dt(r,o);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(Et(t,e,o,r),si(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=un(e),i=Dt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(Et(t,e,o,r),si(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=un(e),o=Dt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(Et(t,e,r,n),si(t,e,r))}};function ic(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,i):!0}function If(e,t,n){var r=!1,o=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=pt(i):(o=Ke(t)?Rn:De.current,r=t.contextTypes,i=(r=r!=null)?ar(e,o):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function Ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Rf,Us(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=pt(i):(i=Ke(t)?Rn:De.current,o.context=ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ll.enqueueReplaceState(o,o.state,null),Ni(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Rf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function Of(e){function t(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=cn(d,c),d.index=0,d.sibling=null,d}function i(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=2,c):m):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,m,x){return c===null||c.tag!==6?(c=Xl(m,d.mode,x),c.return=d,c):(c=o(c,m),c.return=d,c)}function s(d,c,m,x){var E=m.type;return E===Bn?h(d,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kt&&ac(E)===c.type)?(x=o(c,m.props),x.ref=Rr(d,c,m),x.return=d,x):(x=hi(m.type,m.key,m.props,null,d.mode,x),x.ref=Rr(d,c,m),x.return=d,x)}function u(d,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Jl(m,d.mode,x),c.return=d,c):(c=o(c,m.children||[]),c.return=d,c)}function h(d,c,m,x,E){return c===null||c.tag!==7?(c=$n(m,d.mode,x,E),c.return=d,c):(c=o(c,m),c.return=d,c)}function p(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xl(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Po:return m=hi(c.type,c.key,c.props,null,d.mode,m),m.ref=Rr(d,null,c),m.return=d,m;case Un:return c=Jl(c,d.mode,m),c.return=d,c;case Kt:var x=c._init;return p(d,x(c._payload),m)}if(Nr(c)||jr(c))return c=$n(c,d.mode,m,null),c.return=d,c;Fo(d,c)}return null}function v(d,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(d,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:return m.key===E?s(d,c,m,x):null;case Un:return m.key===E?u(d,c,m,x):null;case Kt:return E=m._init,v(d,c,E(m._payload),x)}if(Nr(m)||jr(m))return E!==null?null:h(d,c,m,x,null);Fo(d,m)}return null}function g(d,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(m)||null,a(c,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Po:return d=d.get(x.key===null?m:x.key)||null,s(c,d,x,E);case Un:return d=d.get(x.key===null?m:x.key)||null,u(c,d,x,E);case Kt:var j=x._init;return g(d,c,m,j(x._payload),E)}if(Nr(x)||jr(x))return d=d.get(m)||null,h(c,d,x,E,null);Fo(c,x)}return null}function y(d,c,m,x){for(var E=null,j=null,C=c,$=c=0,R=null;C!==null&&$<m.length;$++){C.index>$?(R=C,C=null):R=C.sibling;var O=v(d,C,m[$],x);if(O===null){C===null&&(C=R);break}e&&C&&O.alternate===null&&t(d,C),c=i(O,c,$),j===null?E=O:j.sibling=O,j=O,C=R}if($===m.length)return n(d,C),me&&wn(d,$),E;if(C===null){for(;$<m.length;$++)C=p(d,m[$],x),C!==null&&(c=i(C,c,$),j===null?E=C:j.sibling=C,j=C);return me&&wn(d,$),E}for(C=r(d,C);$<m.length;$++)R=g(C,d,$,m[$],x),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?$:R.key),c=i(R,c,$),j===null?E=R:j.sibling=R,j=R);return e&&C.forEach(function(F){return t(d,F)}),me&&wn(d,$),E}function w(d,c,m,x){var E=jr(m);if(typeof E!="function")throw Error(I(150));if(m=E.call(m),m==null)throw Error(I(151));for(var j=E=null,C=c,$=c=0,R=null,O=m.next();C!==null&&!O.done;$++,O=m.next()){C.index>$?(R=C,C=null):R=C.sibling;var F=v(d,C,O.value,x);if(F===null){C===null&&(C=R);break}e&&C&&F.alternate===null&&t(d,C),c=i(F,c,$),j===null?E=F:j.sibling=F,j=F,C=R}if(O.done)return n(d,C),me&&wn(d,$),E;if(C===null){for(;!O.done;$++,O=m.next())O=p(d,O.value,x),O!==null&&(c=i(O,c,$),j===null?E=O:j.sibling=O,j=O);return me&&wn(d,$),E}for(C=r(d,C);!O.done;$++,O=m.next())O=g(C,d,$,O.value,x),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?$:O.key),c=i(O,c,$),j===null?E=O:j.sibling=O,j=O);return e&&C.forEach(function(A){return t(d,A)}),me&&wn(d,$),E}function k(d,c,m,x){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:e:{for(var E=m.key,j=c;j!==null;){if(j.key===E){if(E=m.type,E===Bn){if(j.tag===7){n(d,j.sibling),c=o(j,m.props.children),c.return=d,d=c;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kt&&ac(E)===j.type){n(d,j.sibling),c=o(j,m.props),c.ref=Rr(d,j,m),c.return=d,d=c;break e}n(d,j);break}else t(d,j);j=j.sibling}m.type===Bn?(c=$n(m.props.children,d.mode,x,m.key),c.return=d,d=c):(x=hi(m.type,m.key,m.props,null,d.mode,x),x.ref=Rr(d,c,m),x.return=d,d=x)}return l(d);case Un:e:{for(j=m.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(d,c.sibling),c=o(c,m.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Jl(m,d.mode,x),c.return=d,d=c}return l(d);case Kt:return j=m._init,k(d,c,j(m._payload),x)}if(Nr(m))return y(d,c,m,x);if(jr(m))return w(d,c,m,x);Fo(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,m),c.return=d,d=c):(n(d,c),c=Xl(m,d.mode,x),c.return=d,d=c),l(d)):n(d,c)}return k}var ur=Of(!0),zf=Of(!1),jo={},It=vn(jo),co=vn(jo),fo=vn(jo);function jn(e){if(e===jo)throw Error(I(174));return e}function Bs(e,t){switch(ue(fo,t),ue(co,e),ue(It,jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xa(t,e)}fe(It),ue(It,t)}function cr(){fe(It),fe(co),fe(fo)}function Lf(e){jn(fo.current);var t=jn(It.current),n=xa(t,e.type);t!==n&&(ue(co,e),ue(It,n))}function Vs(e){co.current===e&&(fe(It),fe(co))}var ge=vn(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Ws(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var ui=Ht.ReactCurrentDispatcher,Hl=Ht.ReactCurrentBatchConfig,On=0,ve=null,_e=null,Pe=null,bi=!1,Qr=!1,po=0,mg=0;function Ne(){throw Error(I(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,o,i){if(On=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?xg:wg,e=n(r,o),Qr){i=0;do{if(Qr=!1,po=0,25<=i)throw Error(I(301));i+=1,Pe=_e=null,t.updateQueue=null,ui.current=Sg,e=n(r,o)}while(Qr)}if(ui.current=Ai,t=_e!==null&&_e.next!==null,On=0,Pe=_e=ve=null,bi=!1,t)throw Error(I(300));return e}function Ys(){var e=po!==0;return po=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ve.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function ht(){if(_e===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Pe===null?ve.memoizedState:Pe.next;if(t!==null)Pe=t,_e=e;else{if(e===null)throw Error(I(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Pe===null?ve.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ho(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=ht(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=_e,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var h=u.lane;if((On&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,ve.lanes|=h,zn|=h}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ct(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=ht(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ct(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nf(){}function Mf(e,t){var n=ve,r=ht(),o=t(),i=!Ct(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,Ks(Df.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,mo(9,Af.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(I(349));On&30||bf(n,t,o)}return o}function bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Af(e,t,n,r){t.value=n,t.getSnapshot=r,Ff(t)&&Uf(e)}function Df(e,t,n){return n(function(){Ff(t)&&Uf(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Uf(e){var t=Vt(e,1);t!==null&&Et(t,e,1,-1)}function sc(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t.queue=e,e=e.dispatch=yg.bind(null,ve,e),[t.memoizedState,e]}function mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bf(){return ht().memoizedState}function ci(e,t,n,r){var o=Tt();ve.flags|=e,o.memoizedState=mo(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var o=ht();r=r===void 0?null:r;var i=void 0;if(_e!==null){var l=_e.memoizedState;if(i=l.destroy,r!==null&&Hs(r,l.deps)){o.memoizedState=mo(t,n,i,r);return}}ve.flags|=e,o.memoizedState=mo(1|t,n,i,r)}function uc(e,t){return ci(8390656,8,e,t)}function Ks(e,t){return al(2048,8,e,t)}function Vf(e,t){return al(4,2,e,t)}function Wf(e,t){return al(4,4,e,t)}function Hf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Hf.bind(null,t,e),n)}function Gs(){}function Yf(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kf(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gf(e,t,n){return On&21?(Ct(n,t)||(n=Jd(),ve.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function gg(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{le=n,Hl.transition=r}}function Xf(){return ht().memoizedState}function vg(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jf(e))qf(t,n);else if(n=$f(e,t,n,r),n!==null){var o=Ue();Et(n,e,r,o),Zf(n,t,r)}}function yg(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jf(e))qf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ct(a,l)){var s=t.interleaved;s===null?(o.next=o,Fs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=$f(e,t,o,r),n!==null&&(o=Ue(),Et(n,e,r,o),Zf(n,t,r))}}function Jf(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function qf(e,t){Qr=bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}var Ai={readContext:pt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},xg={readContext:pt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ci(4194308,4,Hf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vg.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:sc,useDebugValue:Gs,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=sc(!1),t=e[0];return e=gg.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=Tt();if(me){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ie===null)throw Error(I(349));On&30||bf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,uc(Df.bind(null,r,i,e),[e]),r.flags|=2048,mo(9,Af.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ie.identifierPrefix;if(me){var n=bt,r=Mt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=po++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wg={readContext:pt,useCallback:Yf,useContext:pt,useEffect:Ks,useImperativeHandle:Qf,useInsertionEffect:Vf,useLayoutEffect:Wf,useMemo:Kf,useReducer:Ql,useRef:Bf,useState:function(){return Ql(ho)},useDebugValue:Gs,useDeferredValue:function(e){var t=ht();return Gf(t,_e.memoizedState,e)},useTransition:function(){var e=Ql(ho)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Nf,useSyncExternalStore:Mf,useId:Xf,unstable_isNewReconciler:!1},Sg={readContext:pt,useCallback:Yf,useContext:pt,useEffect:Ks,useImperativeHandle:Qf,useInsertionEffect:Vf,useLayoutEffect:Wf,useMemo:Kf,useReducer:Yl,useRef:Bf,useState:function(){return Yl(ho)},useDebugValue:Gs,useDeferredValue:function(e){var t=ht();return _e===null?t.memoizedState=e:Gf(t,_e.memoizedState,e)},useTransition:function(){var e=Yl(ho)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Nf,useSyncExternalStore:Mf,useId:Xf,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=Gh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Eg=typeof WeakMap=="function"?WeakMap:Map;function ep(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fi||(Fi=!0,qa=r),Ba(e,t)},n}function tp(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ba(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ba(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Eg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mg.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var kg=Ht.ReactCurrentOwner,He=!1;function Fe(e,t,n,r){t.child=e===null?zf(t,null,n,r):ur(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var i=t.ref;return or(t,o),r=Qs(e,t,n,r,i,o),n=Ys(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(me&&n&&Ls(t),t.flags|=1,Fe(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,np(e,t,i,r,o)):(e=hi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(l,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function np(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(lo(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Va(e,t,n,r,o)}function rp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(qn,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(qn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(qn,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ue(qn,Je),Je|=r;return Fe(e,t,o,n),t.child}function op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,n,r,o){var i=Ke(n)?Rn:De.current;return i=ar(t,i),or(t,o),n=Qs(e,t,n,r,i,o),r=Ys(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(me&&r&&Ls(t),t.flags|=1,Fe(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Ke(n)){var i=!0;Ri(t)}else i=!1;if(or(t,o),t.stateNode===null)di(e,t),If(t,n,r),Ua(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ke(n)?Rn:De.current,u=ar(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&lc(t,l,r,u),Gt=!1;var v=t.memoizedState;l.state=v,Ni(t,r,l,o),s=t.memoizedState,a!==r||v!==s||Ye.current||Gt?(typeof h=="function"&&(Fa(t,n,h,r),s=t.memoizedState),(a=Gt||ic(t,n,a,r,v,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Pf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yt(t.type,a),l.props=u,p=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=pt(s):(s=Ke(n)?Rn:De.current,s=ar(t,s));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||v!==s)&&lc(t,l,r,s),Gt=!1,v=t.memoizedState,l.state=v,Ni(t,r,l,o);var y=t.memoizedState;a!==p||v!==y||Ye.current||Gt?(typeof g=="function"&&(Fa(t,n,g,r),y=t.memoizedState),(u=Gt||ic(t,n,u,r,v,y,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Wa(e,t,n,r,i,o)}function Wa(e,t,n,r,o,i){op(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),Wt(e,t,i);r=t.stateNode,kg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ur(t,e.child,null,i),t.child=ur(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function ip(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Bs(e,t.containerInfo)}function gc(e,t,n,r,o){return sr(),Ms(o),t.flags|=256,Fe(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function lp(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(ge,o&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=cl(l,r,0,null),e=$n(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qa(n),t.memoizedState=Ha,e):Xs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Cg(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=cn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=cn(a,i):(i=$n(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Qa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,n,r){return r!==null&&Ms(r),ur(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(I(422))),Uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=cl({mode:"visible",children:r.children},o,0,null),i=$n(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ur(t,e.child,null,l),t.child.memoizedState=Qa(l),t.memoizedState=Ha,i);if(!(t.mode&1))return Uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(I(419)),r=Kl(i,r,void 0),Uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,He||a){if(r=Ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Vt(e,o),Et(r,e,o,-1))}return nu(),r=Kl(Error(I(421))),Uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=ln(o.nextSibling),Ze=t,me=!0,wt=null,e!==null&&(ut[ct++]=Mt,ut[ct++]=bt,ut[ct++]=In,Mt=e.id,bt=e.overflow,In=t),t=Xs(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Da(e.return,t,n)}function Gl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ap(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gl(t,!0,n,null,i);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:ip(t),sr();break;case 5:Lf(t);break;case 1:Ke(t.type)&&Ri(t);break;case 4:Bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ue(zi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?lp(e,t,n):(ue(ge,ge.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ap(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,rp(e,t,n)}return Wt(e,t,n)}var sp,Ya,up,cp;sp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};up=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jn(It.current);var i=null;switch(n){case"input":o=ma(e,o),r=ma(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=ya(e,o),r=ya(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}wa(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ce("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _g(e,t,n){var r=t.pendingProps;switch(Ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ke(t.type)&&Pi(),Me(t),null;case 3:return r=t.stateNode,cr(),fe(Ye),fe(De),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(ts(wt),wt=null))),Ya(e,t),Me(t),null;case 5:Vs(t);var o=jn(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)up(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Me(t),null}if(e=jn(It.current),Do(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[uo]=i,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<br.length;o++)ce(br[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":_u(r,i),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ce("invalid",r);break;case"textarea":$u(r,i),ce("invalid",r)}wa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),o=["children",""+a]):Zr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ro(r),Tu(r,i,!0);break;case"textarea":Ro(r),Pu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$i)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Pt]=t,e[uo]=r,sp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sa(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<br.length;o++)ce(br[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":_u(e,r),o=ma(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),ce("invalid",e);break;case"textarea":$u(e,r),o=ya(e,r),ce("invalid",e);break;default:o=r}wa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Dd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&eo(e,s):typeof s=="number"&&eo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ce("scroll",e):s!=null&&ws(e,i,s,l))}switch(n){case"input":Ro(e),Tu(e,r,!1);break;case"textarea":Ro(e),Pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=jn(fo.current),jn(It.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Me(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&qe!==null&&t.mode&1&&!(t.flags&128))Tf(),sr(),t.flags|=98560,i=!1;else if(i=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Pt]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else wt!==null&&(ts(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Te===0&&(Te=3):nu())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return cr(),Ya(e,t),e===null&&ao(t.stateNode.containerInfo),Me(t),null;case 10:return Ds(t.type._context),Me(t),null;case 17:return Ke(t.type)&&Pi(),Me(t),null;case 19:if(fe(ge),i=t.memoizedState,i===null)return Me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Ir(i,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Mi(e),l!==null){for(t.flags|=128,Ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Se()>fr&&(t.flags|=128,r=!0,Ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=Mi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!me)return Me(t),null}else 2*Se()-i.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Se(),t.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Tg(e,t){switch(Ns(t),t.tag){case 1:return Ke(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),fe(Ye),fe(De),Ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return cr(),null;case 10:return Ds(t.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Bo=!1,be=!1,$g=typeof WeakSet=="function"?WeakSet:Set,N=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Ka(e,t,n){try{n()}catch(r){xe(e,t,r)}}var yc=!1;function Pg(e,t){if(Ia=ji,e=hf(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,p=e,v=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(g=p.firstChild)!==null;)v=p,p=g;for(;;){if(p===e)break t;if(v===n&&++u===o&&(a=l),v===i&&++h===r&&(s=l),(g=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oa={focusedElem:e,selectionRange:n},ji=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:yt(t.type,w),k);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){xe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=yc,yc=!1,y}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ka(t,n,i)}o=o.next}while(o!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[uo],delete t[Na],delete t[dg],delete t[fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fp(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}var Oe=null,xt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)pp(e,t,n),n=n.sibling}function pp(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:be||Jn(n,t);case 6:var r=Oe,o=xt;Oe=null,Qt(e,t,n),Oe=r,xt=o,Oe!==null&&(xt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(xt?(e=Oe,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),oo(e)):Bl(Oe,n.stateNode));break;case 4:r=Oe,o=xt,Oe=n.stateNode.containerInfo,xt=!0,Qt(e,t,n),Oe=r,xt=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ka(n,t,l),o=o.next}while(o!==r)}Qt(e,t,n);break;case 1:if(!be&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Qt(e,t,n),be=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $g),t.forEach(function(r){var o=Ag.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,xt=!1;break e;case 3:Oe=a.stateNode.containerInfo,xt=!0;break e;case 4:Oe=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(Oe===null)throw Error(I(160));pp(i,l,o),Oe=null,xt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){xe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hp(t,e),t=t.sibling}function hp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),jt(e),r&4){try{Yr(3,e,e.return),sl(3,e)}catch(w){xe(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:vt(t,e),jt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(vt(t,e),jt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{eo(o,"")}catch(w){xe(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ld(o,i),Sa(a,l);var u=Sa(a,i);for(l=0;l<s.length;l+=2){var h=s[l],p=s[l+1];h==="style"?Dd(o,p):h==="dangerouslySetInnerHTML"?bd(o,p):h==="children"?eo(o,p):ws(o,h,p,u)}switch(a){case"input":ga(o,i);break;case"textarea":Nd(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?er(o,!!i.multiple,g,!1):v!==!!i.multiple&&(i.defaultValue!=null?er(o,!!i.multiple,i.defaultValue,!0):er(o,!!i.multiple,i.multiple?[]:"",!1))}o[uo]=i}catch(w){xe(e,e.return,w)}}break;case 6:if(vt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){xe(e,e.return,w)}}break;case 3:if(vt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:vt(t,e),jt(e);break;case 13:vt(t,e),jt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zs=Se())),r&4&&wc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||h,vt(t,e),be=u):vt(t,e),jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(p=N=h;N!==null;){switch(v=N,g=v.child,v.tag){case 0:case 11:case 14:case 15:Yr(4,v,v.return);break;case 1:Jn(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:Jn(v,v.return);break;case 22:if(v.memoizedState!==null){Ec(p);continue}}g!==null?(g.return=v,N=g):Ec(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ad("display",l))}catch(w){xe(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){xe(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:vt(t,e),jt(e),r&4&&wc(e);break;case 21:break;default:vt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(eo(o,""),r.flags&=-33);var i=xc(e);Ja(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xc(e);Xa(e,a,l);break;default:throw Error(I(161))}}catch(s){xe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rg(e,t,n){N=e,mp(e)}function mp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Bo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||be;a=Bo;var u=be;if(Bo=l,(be=s)&&!u)for(N=o;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?kc(o):s!==null?(s.return=l,N=s):kc(o);for(;i!==null;)N=i,mp(i),i=i.sibling;N=o,Bo=a,be=u}Sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):Sc(e)}}function Sc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}be||t.flags&512&&Ga(t)}catch(v){xe(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ec(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function kc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(s){xe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){xe(t,o,s)}}var i=t.return;try{Ga(t)}catch(s){xe(t,i,s)}break;case 5:var l=t.return;try{Ga(t)}catch(s){xe(t,l,s)}}}catch(s){xe(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Ig=Math.ceil,Di=Ht.ReactCurrentDispatcher,Js=Ht.ReactCurrentOwner,ft=Ht.ReactCurrentBatchConfig,q=0,Ie=null,Ce=null,ze=0,Je=0,qn=vn(0),Te=0,go=null,zn=0,ul=0,qs=0,Kr=null,We=null,Zs=0,fr=1/0,zt=null,Fi=!1,qa=null,sn=null,Vo=!1,Zt=null,Ui=0,Gr=0,Za=null,fi=-1,pi=0;function Ue(){return q&6?Se():fi!==-1?fi:fi=Se()}function un(e){return e.mode&1?q&2&&ze!==0?ze&-ze:hg.transition!==null?(pi===0&&(pi=Jd()),pi):(e=le,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function Et(e,t,n,r){if(50<Gr)throw Gr=0,Za=null,Error(I(185));Eo(e,n,r),(!(q&2)||e!==Ie)&&(e===Ie&&(!(q&2)&&(ul|=n),Te===4&&Jt(e,ze)),Ge(e,r),n===1&&q===0&&!(t.mode&1)&&(fr=Se()+500,il&&yn()))}function Ge(e,t){var n=e.callbackNode;hm(e,t);var r=Ci(e,e===Ie?ze:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?pg(Cc.bind(null,e)):Cf(Cc.bind(null,e)),ug(function(){!(q&6)&&yn()}),n=null;else{switch(qd(r)){case 1:n=js;break;case 4:n=Gd;break;case 16:n=ki;break;case 536870912:n=Xd;break;default:n=ki}n=kp(n,gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gp(e,t){if(fi=-1,pi=0,q&6)throw Error(I(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=Ci(e,e===Ie?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bi(e,r);else{t=r;var o=q;q|=2;var i=yp();(Ie!==e||ze!==t)&&(zt=null,fr=Se()+500,Tn(e,t));do try{Lg();break}catch(a){vp(e,a)}while(1);As(),Di.current=i,q=o,Ce!==null?t=0:(Ie=null,ze=0,t=Te)}if(t!==0){if(t===2&&(o=_a(e),o!==0&&(r=o,t=es(e,o))),t===1)throw n=go,Tn(e,0),Jt(e,r),Ge(e,Se()),n;if(t===6)Jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Og(o)&&(t=Bi(e,r),t===2&&(i=_a(e),i!==0&&(r=i,t=es(e,i))),t===1))throw n=go,Tn(e,0),Jt(e,r),Ge(e,Se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Sn(e,We,zt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Zs+500-Se(),10<t)){if(Ci(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=La(Sn.bind(null,e,We,zt),t);break}Sn(e,We,zt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-St(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ig(r/1960))-r,10<r){e.timeoutHandle=La(Sn.bind(null,e,We,zt),r);break}Sn(e,We,zt);break;case 5:Sn(e,We,zt);break;default:throw Error(I(329))}}}return Ge(e,Se()),e.callbackNode===n?gp.bind(null,e):null}function es(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=Bi(e,t),e!==2&&(t=We,We=n,t!==null&&ts(t)),e}function ts(e){We===null?We=e:We.push.apply(We,e)}function Og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ct(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~qs,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(q&6)throw Error(I(327));ir();var t=Ci(e,0);if(!(t&1))return Ge(e,Se()),null;var n=Bi(e,t);if(e.tag!==0&&n===2){var r=_a(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=go,Tn(e,0),Jt(e,t),Ge(e,Se()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,We,zt),Ge(e,Se()),null}function eu(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(fr=Se()+500,il&&yn())}}function Ln(e){Zt!==null&&Zt.tag===0&&!(q&6)&&ir();var t=q;q|=1;var n=ft.transition,r=le;try{if(ft.transition=null,le=1,e)return e()}finally{le=r,ft.transition=n,q=t,!(q&6)&&yn()}}function tu(){Je=qn.current,fe(qn)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sg(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:cr(),fe(Ye),fe(De),Ws();break;case 5:Vs(r);break;case 4:cr();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Ds(r.type._context);break;case 22:case 23:tu()}n=n.return}if(Ie=e,Ce=e=cn(e.current,null),ze=Je=t,Te=0,go=null,qs=ul=zn=0,We=Kr=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Cn=null}return e}function vp(e,t){do{var n=Ce;try{if(As(),ui.current=Ai,bi){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bi=!1}if(On=0,Pe=_e=ve=null,Qr=!1,po=0,Js.current=null,n===null||n.return===null){Te=1,go=t,Ce=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ze,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=dc(l);if(g!==null){g.flags&=-257,fc(g,l,a,i,t),g.mode&1&&cc(i,u,t),t=g,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){cc(i,u,t),nu();break e}s=Error(I(426))}}else if(me&&a.mode&1){var k=dc(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),fc(k,l,a,i,t),Ms(dr(s,a));break e}}i=s=dr(s,a),Te!==4&&(Te=2),Kr===null?Kr=[i]:Kr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=ep(i,s,t);rc(i,d);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sn===null||!sn.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=tp(i,a,t);rc(i,x);break e}}i=i.return}while(i!==null)}wp(n)}catch(E){t=E,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function yp(){var e=Di.current;return Di.current=Ai,e===null?Ai:e}function nu(){(Te===0||Te===3||Te===2)&&(Te=4),Ie===null||!(zn&268435455)&&!(ul&268435455)||Jt(Ie,ze)}function Bi(e,t){var n=q;q|=2;var r=yp();(Ie!==e||ze!==t)&&(zt=null,Tn(e,t));do try{zg();break}catch(o){vp(e,o)}while(1);if(As(),q=n,Di.current=r,Ce!==null)throw Error(I(261));return Ie=null,ze=0,Te}function zg(){for(;Ce!==null;)xp(Ce)}function Lg(){for(;Ce!==null&&!im();)xp(Ce)}function xp(e){var t=Ep(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?wp(e):Ce=t,Js.current=null}function wp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tg(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Ce=null;return}}else if(n=_g(n,t,Je),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Te===0&&(Te=5)}function Sn(e,t,n){var r=le,o=ft.transition;try{ft.transition=null,le=1,Ng(e,t,n,r)}finally{ft.transition=o,le=r}return null}function Ng(e,t,n,r){do ir();while(Zt!==null);if(q&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mm(e,i),e===Ie&&(Ce=Ie=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,kp(ki,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var l=le;le=1;var a=q;q|=4,Js.current=null,Pg(e,n),hp(n,e),tg(Oa),ji=!!Ia,Oa=Ia=null,e.current=n,Rg(n),lm(),q=a,le=l,ft.transition=i}else e.current=n;if(Vo&&(Vo=!1,Zt=e,Ui=o),i=e.pendingLanes,i===0&&(sn=null),um(n.stateNode),Ge(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fi)throw Fi=!1,e=qa,qa=null,e;return Ui&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===Za?Gr++:(Gr=0,Za=e):Gr=0,yn(),null}function ir(){if(Zt!==null){var e=qd(Ui),t=ft.transition,n=le;try{if(ft.transition=null,le=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Ui=0,q&6)throw Error(I(331));var o=q;for(q|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Yr(8,h,i)}var p=h.child;if(p!==null)p.return=h,N=p;else for(;N!==null;){h=N;var v=h.sibling,g=h.return;if(dp(h),h===u){N=null;break}if(v!==null){v.return=g,N=v;break}N=g}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,N=d;break e}N=i.return}}var c=e.current;for(N=c;N!==null;){l=N;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,N=m;else e:for(l=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(E){xe(a,a.return,E)}if(a===l){N=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,N=x;break e}N=a.return}}if(q=o,yn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{le=n,ft.transition=t}}return!1}function jc(e,t,n){t=dr(n,t),t=ep(e,t,1),e=an(e,t,1),t=Ue(),e!==null&&(Eo(e,1,t),Ge(e,t))}function xe(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=dr(n,e),e=tp(t,e,1),t=an(t,e,1),e=Ue(),t!==null&&(Eo(t,1,e),Ge(t,e));break}}t=t.return}}function Mg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(ze&n)===n&&(Te===4||Te===3&&(ze&130023424)===ze&&500>Se()-Zs?Tn(e,0):qs|=n),Ge(e,t)}function Sp(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=Ue();e=Vt(e,t),e!==null&&(Eo(e,t,n),Ge(e,n))}function bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sp(e,n)}function Ag(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Sp(e,n)}var Ep;Ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,jg(e,t,n);He=!!(e.flags&131072)}else He=!1,me&&t.flags&1048576&&jf(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var o=ar(t,De.current);or(t,n),o=Qs(null,t,r,e,o,n);var i=Ys();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(i=!0,Ri(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Us(t),o.updater=ll,t.stateNode=o,o._reactInternals=t,Ua(t,r,e,n),t=Wa(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Ls(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fg(r),e=yt(r,e),o){case 0:t=Va(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,yt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Va(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),mc(e,t,r,o,n);case 3:e:{if(ip(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Pf(e,t),Ni(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=dr(Error(I(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=dr(Error(I(424)),t),t=gc(e,t,r,n,o);break e}else for(qe=ln(t.stateNode.containerInfo.firstChild),Ze=t,me=!0,wt=null,n=zf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===o){t=Wt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Lf(t),e===null&&Aa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,za(r,o)?l=null:i!==null&&za(r,i)&&(t.flags|=32),op(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return lp(e,t,n);case 4:return Bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),pc(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ue(zi,r._currentValue),r._currentValue=l,i!==null)if(Ct(i.value,l)){if(i.children===o.children&&!Ye.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Dt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Da(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(I(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Da(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=pt(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),hc(e,t,r,o,n);case 15:return np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),di(e,t),t.tag=1,Ke(r)?(e=!0,Ri(t)):e=!1,or(t,n),If(t,r,o),Ua(t,r,o,n),Wa(null,t,r,!0,e,n);case 19:return ap(e,t,n);case 22:return rp(e,t,n)}throw Error(I(156,t.tag))};function kp(e,t){return Kd(e,t)}function Dg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Dg(e,t,n,r)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fg(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===ks)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ru(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bn:return $n(n.children,o,i,t);case Ss:l=8,o|=8;break;case da:return e=dt(12,n,t,o|2),e.elementType=da,e.lanes=i,e;case fa:return e=dt(13,n,t,o),e.elementType=fa,e.lanes=i,e;case pa:return e=dt(19,n,t,o),e.elementType=pa,e.lanes=i,e;case Id:return cl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pd:l=10;break e;case Rd:l=9;break e;case Es:l=11;break e;case ks:l=14;break e;case Kt:l=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=dt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function $n(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Id,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ug(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,o,i,l,a,s){return e=new Ug(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(i),e}function Bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cp(e){if(!e)return mn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ke(n))return kf(e,n,t)}return t}function jp(e,t,n,r,o,i,l,a,s){return e=ou(n,r,!0,e,o,i,l,a,s),e.context=Cp(null),n=e.current,r=Ue(),o=un(n),i=Dt(r,o),i.callback=t??null,an(n,i,o),e.current.lanes=o,Eo(e,o,r),Ge(e,r),e}function dl(e,t,n,r){var o=t.current,i=Ue(),l=un(o);return n=Cp(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,l),e!==null&&(Et(e,o,l,i),si(e,o,l)),l}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function Vg(){return null}var _p=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}fl.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));dl(e,t,null,null)};fl.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){dl(null,e,null,null)}),t[Bt]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&rf(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Wg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Vi(l);i.call(u)}}var l=jp(t,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=l,e[Bt]=l.current,ao(e.nodeType===8?e.parentNode:e),Ln(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Vi(s);a.call(u)}}var s=ou(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=s,e[Bt]=s.current,ao(e.nodeType===8?e.parentNode:e),Ln(function(){dl(t,s,n,r)}),s}function hl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Vi(l);a.call(s)}}dl(t,l,e,o)}else l=Wg(n,t,e,o,r);return Vi(l)}Zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(_s(t,n|1),Ge(t,Se()),!(q&6)&&(fr=Se()+500,yn()))}break;case 13:Ln(function(){var r=Vt(e,1);if(r!==null){var o=Ue();Et(r,e,1,o)}}),iu(e,1)}};Ts=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Ue();Et(t,e,134217728,n)}iu(e,134217728)}};ef=function(e){if(e.tag===13){var t=un(e),n=Vt(e,t);if(n!==null){var r=Ue();Et(n,e,t,r)}iu(e,t)}};tf=function(){return le};nf=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};ka=function(e,t,n){switch(t){case"input":if(ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ol(r);if(!o)throw Error(I(90));zd(r),ga(r,o)}}}break;case"textarea":Nd(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Bd=eu;Vd=Ln;var Hg={usingClientEntryPoint:!1,Events:[Co,Qn,ol,Fd,Ud,eu]},Or={findFiberByHostInstance:kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qg={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||Vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{el=Wo.inject(Qg),Rt=Wo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hg;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(I(200));return Bg(e,t,null,n)};tt.createRoot=function(e,t){if(!au(e))throw Error(I(299));var n=!1,r="",o=_p;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,ao(e.nodeType===8?e.parentNode:e),new lu(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Qd(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return Ln(e)};tt.hydrate=function(e,t,n){if(!pl(t))throw Error(I(200));return hl(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!au(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=_p;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jp(t,null,e,1,n??null,o,!1,i,l),e[Bt]=t.current,ao(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fl(t)};tt.render=function(e,t,n){if(!pl(t))throw Error(I(200));return hl(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!pl(e))throw Error(I(40));return e._reactRootContainer?(Ln(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};tt.unstable_batchedUpdates=eu;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return hl(e,t,n,!1,r)};tt.version="18.2.0-next-9e3b772b8-20220608";function Tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp)}catch(e){console.error(e)}}Tp(),Cd.exports=tt;var Yg=Cd.exports,$c=Yg;ua.createRoot=$c.createRoot,ua.hydrateRoot=$c.hydrateRoot;var Ae=function(){return Ae=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ae.apply(this,arguments)};function vo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var de="-ms-",Xr="-moz-",re="-webkit-",$p="comm",ml="rule",su="decl",Kg="@import",Pp="@keyframes",Gg="@layer",Xg=Math.abs,uu=String.fromCharCode,ns=Object.assign;function Jg(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Rp(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function mi(e,t){return e.indexOf(t)}function Re(e,t){return e.charCodeAt(t)|0}function pr(e,t,n){return e.slice(t,n)}function $t(e){return e.length}function Ip(e){return e.length}function Ar(e,t){return t.push(e),e}function qg(e,t){return e.map(t).join("")}function Pc(e,t){return e.filter(function(n){return!Lt(n,t)})}var gl=1,hr=1,Op=0,mt=0,ke=0,Sr="";function vl(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:gl,column:hr,length:l,return:"",siblings:a}}function Yt(e,t){return ns(vl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fn(e){for(;e.root;)e=Yt(e.root,{children:[e]});Ar(e,e.siblings)}function Zg(){return ke}function e0(){return ke=mt>0?Re(Sr,--mt):0,hr--,ke===10&&(hr=1,gl--),ke}function kt(){return ke=mt<Op?Re(Sr,mt++):0,hr++,ke===10&&(hr=1,gl++),ke}function Pn(){return Re(Sr,mt)}function gi(){return mt}function yl(e,t){return pr(Sr,e,t)}function rs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t0(e){return gl=hr=1,Op=$t(Sr=e),mt=0,[]}function n0(e){return Sr="",e}function ql(e){return Rp(yl(mt-1,os(e===91?e+2:e===40?e+1:e)))}function r0(e){for(;(ke=Pn())&&ke<33;)kt();return rs(e)>2||rs(ke)>3?"":" "}function o0(e,t){for(;--t&&kt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return yl(e,gi()+(t<6&&Pn()==32&&kt()==32))}function os(e){for(;kt();)switch(ke){case e:return mt;case 34:case 39:e!==34&&e!==39&&os(ke);break;case 40:e===41&&os(e);break;case 92:kt();break}return mt}function i0(e,t){for(;kt()&&e+ke!==47+10;)if(e+ke===42+42&&Pn()===47)break;return"/*"+yl(t,mt-1)+"*"+uu(e===47?e:kt())}function l0(e){for(;!rs(Pn());)kt();return yl(e,mt)}function a0(e){return n0(vi("",null,null,null,[""],e=t0(e),0,[0],e))}function vi(e,t,n,r,o,i,l,a,s){for(var u=0,h=0,p=l,v=0,g=0,y=0,w=1,k=1,d=1,c=0,m="",x=o,E=i,j=r,C=m;k;)switch(y=c,c=kt()){case 40:if(y!=108&&Re(C,p-1)==58){mi(C+=H(ql(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:C+=ql(c);break;case 9:case 10:case 13:case 32:C+=r0(y);break;case 92:C+=o0(gi()-1,7);continue;case 47:switch(Pn()){case 42:case 47:Ar(s0(i0(kt(),gi()),t,n,s),s);break;default:C+="/"}break;case 123*w:a[u++]=$t(C)*d;case 125*w:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+h:d==-1&&(C=H(C,/\f/g,"")),g>0&&$t(C)-p&&Ar(g>32?Ic(C+";",r,n,p-1,s):Ic(H(C," ","")+";",r,n,p-2,s),s);break;case 59:C+=";";default:if(Ar(j=Rc(C,t,n,u,h,o,a,m,x=[],E=[],p,i),i),c===123)if(h===0)vi(C,t,j,j,x,i,p,a,E);else switch(v===99&&Re(C,3)===110?100:v){case 100:case 108:case 109:case 115:vi(e,j,j,r&&Ar(Rc(e,j,j,0,0,o,a,m,o,x=[],p,E),E),o,E,p,a,r?x:E);break;default:vi(C,j,j,j,[""],E,0,a,E)}}u=h=g=0,w=d=1,m=C="",p=l;break;case 58:p=1+$t(C),g=y;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&e0()==125)continue}switch(C+=uu(c),c*w){case 38:d=h>0?1:(C+="\f",-1);break;case 44:a[u++]=($t(C)-1)*d,d=1;break;case 64:Pn()===45&&(C+=ql(kt())),v=Pn(),h=p=$t(m=C+=l0(gi())),c++;break;case 45:y===45&&$t(C)==2&&(w=0)}}return i}function Rc(e,t,n,r,o,i,l,a,s,u,h,p){for(var v=o-1,g=o===0?i:[""],y=Ip(g),w=0,k=0,d=0;w<r;++w)for(var c=0,m=pr(e,v+1,v=Xg(k=l[w])),x=e;c<y;++c)(x=Rp(k>0?g[c]+" "+m:H(m,/&\f/g,g[c])))&&(s[d++]=x);return vl(e,t,n,o===0?ml:a,s,u,h,p)}function s0(e,t,n,r){return vl(e,t,n,$p,uu(Zg()),pr(e,2,-2),0,r)}function Ic(e,t,n,r,o){return vl(e,t,n,su,pr(e,0,r),pr(e,r+1,-1),r,o)}function zp(e,t,n){switch(Jg(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Xr+e+de+e+e;case 5936:switch(Re(e,t+11)){case 114:return re+e+de+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+de+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+de+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+de+e+e;case 6165:return re+e+de+"flex-"+e+e;case 5187:return re+e+H(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+de+"flex-$1$2")+e;case 5443:return re+e+de+"flex-item-"+H(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":de+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return re+e+de+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+de+H(e,"shrink","negative")+e;case 5292:return re+e+de+H(e,"basis","preferred-size")+e;case 6060:return re+"box-"+H(e,"-grow","")+re+e+de+H(e,"grow","positive")+e;case 4554:return re+H(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return de+"grid-column-align"+pr(e,t)+e;break;case 2592:case 3360:return de+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Lt(r.props,/grid-\w+-end/)})?~mi(e+(n=n[t].value),"span")?e:de+H(e,"-start","")+e+de+"grid-row-span:"+(~mi(n,"span")?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":de+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:de+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($t(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Xr+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~mi(e,"stretch")?zp(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return de+o+":"+i+u+(l?de+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(Re(e,t+6)===121)return H(e,":",":"+re)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Re(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+de+"$2box$3")+e;case 100:return H(e,":",":"+de)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function Wi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function u0(e,t,n,r){switch(e.type){case Gg:if(e.children.length)break;case Kg:case su:return e.return=e.return||e.value;case $p:return"";case Pp:return e.return=e.value+"{"+Wi(e.children,r)+"}";case ml:if(!$t(e.value=e.props.join(",")))return""}return $t(n=Wi(e.children,r))?e.return=e.value+"{"+n+"}":""}function c0(e){var t=Ip(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function d0(e){return function(t){t.root||(t=t.return)&&e(t)}}function f0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case su:e.return=zp(e.value,e.length,n);return;case Pp:return Wi([Yt(e,{value:H(e.value,"@","@"+re)})],r);case ml:if(e.length)return qg(n=e.props,function(o){switch(Lt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fn(Yt(e,{props:[H(o,/:(read-\w+)/,":"+Xr+"$1")]})),Fn(Yt(e,{props:[o]})),ns(e,{props:Pc(n,r)});break;case"::placeholder":Fn(Yt(e,{props:[H(o,/:(plac\w+)/,":"+re+"input-$1")]})),Fn(Yt(e,{props:[H(o,/:(plac\w+)/,":"+Xr+"$1")]})),Fn(Yt(e,{props:[H(o,/:(plac\w+)/,de+"input-$1")]})),Fn(Yt(e,{props:[o]})),ns(e,{props:Pc(n,r)});break}return""})}}var p0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cu=typeof window<"u"&&"HTMLElement"in window,h0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),m0={},xl=Object.freeze([]),gr=Object.freeze({});function Lp(e,t,n){return n===void 0&&(n=gr),e.theme!==n.theme&&e.theme||t||n.theme}var Np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),g0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v0=/(^-|-$)/g;function Oc(e){return e.replace(g0,"-").replace(v0,"")}var y0=/(a)(d)/gi,zc=function(e){return String.fromCharCode(e+(e>25?39:97))};function is(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zc(t%52)+n;return(zc(t%52)+n).replace(y0,"$1-$2")}var Zl,Zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mp=function(e){return Zn(5381,e)};function bp(e){return is(Mp(e)>>>0)}function x0(e){return e.displayName||e.name||"Component"}function ea(e){return typeof e=="string"&&!0}var Ap=typeof Symbol=="function"&&Symbol.for,Dp=Ap?Symbol.for("react.memo"):60115,w0=Ap?Symbol.for("react.forward_ref"):60112,S0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},k0=((Zl={})[w0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zl[Dp]=Fp,Zl);function Lc(e){return("type"in(t=e)&&t.type.$$typeof)===Dp?Fp:"$$typeof"in e?k0[e.$$typeof]:S0;var t}var C0=Object.defineProperty,j0=Object.getOwnPropertyNames,Nc=Object.getOwnPropertySymbols,_0=Object.getOwnPropertyDescriptor,T0=Object.getPrototypeOf,Mc=Object.prototype;function Up(e,t,n){if(typeof t!="string"){if(Mc){var r=T0(t);r&&r!==Mc&&Up(e,r,n)}var o=j0(t);Nc&&(o=o.concat(Nc(t)));for(var i=Lc(e),l=Lc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in E0||n&&n[s]||l&&s in l||i&&s in i)){var u=_0(t,s);try{C0(e,s,u)}catch{}}}}return e}function vr(e){return typeof e=="function"}function du(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ls(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function as(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=as(e[r],t[r]);else if(yo(t))for(var r in t)e[r]=as(e[r],t[r]);return e}function fu(e,t){Object.defineProperty(e,"toString",{value:t})}function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _o(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),yi=new Map,Hi=new Map,ta=1,Ho=function(e){if(yi.has(e))return yi.get(e);for(;Hi.has(ta);)ta++;var t=ta++;return yi.set(e,t),Hi.set(t,e),t},P0=function(e,t){yi.set(e,t),Hi.set(t,e)},R0="style[".concat(mr,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),I0=new RegExp("^".concat(mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),O0=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},z0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(I0);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(P0(h,u),O0(e,h,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function L0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(mr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(mr,"active"),r.setAttribute("data-styled-version","6.0.7");var l=L0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},N0=function(){function e(t){this.element=Bp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw _o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),M0=function(){function e(t){this.element=Bp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),b0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bc=cu,A0={isServer:!cu,useCSSOMInjection:!h0},Qi=function(){function e(t,n,r){t===void 0&&(t=gr),n===void 0&&(n={});var o=this;this.options=Ae(Ae({},A0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&cu&&bc&&(bc=!1,function(i){for(var l=document.querySelectorAll(R0),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(mr)!=="active"&&(z0(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),fu(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(p){var v=function(d){return Hi.get(d)}(p);if(v===void 0)return"continue";var g=i.names.get(v),y=l.getGroup(p);if(g===void 0||y.length===0)return"continue";var w="".concat(mr,".g").concat(p,'[id="').concat(v,'"]'),k="";g!==void 0&&g.forEach(function(d){d.length>0&&(k+="".concat(d,","))}),s+="".concat(y).concat(w,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)u(h);return s}(o)})}return e.registerId=function(t){return Ho(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ae(Ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new b0(o):r?new N0(o):new M0(o)}(this.options),new $0(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ho(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),D0=/&/g,F0=/^\s*\/\/.*$/gm;function Vp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vp(n.children,t)),n})}function U0(e){var t,n,r,o=e===void 0?gr:e,i=o.options,l=i===void 0?gr:i,a=o.plugins,s=a===void 0?xl:a,u=function(v,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):v},h=s.slice();h.push(function(v){v.type===ml&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(D0,n).replace(r,u))}),l.prefix&&h.push(f0),h.push(u0);var p=function(v,g,y,w){g===void 0&&(g=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=v.replace(F0,""),d=a0(y||g?"".concat(y," ").concat(g," { ").concat(k," }"):k);l.namespace&&(d=Vp(d,l.namespace));var c=[];return Wi(d,c0(h.concat(d0(function(m){return c.push(m)})))),c};return p.hash=s.length?s.reduce(function(v,g){return g.name||_o(15),Zn(v,g.name)},5381).toString():"",p}var B0=new Qi,ss=U0(),Wp=V.createContext({shouldForwardProp:void 0,styleSheet:B0,stylis:ss});Wp.Consumer;V.createContext(void 0);function us(){return T.useContext(Wp)}var V0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ss);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,fu(this,function(){throw _o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ss),this.name+t.hash},e}(),W0=function(e){return e>="A"&&e<="Z"};function Ac(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;W0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hp=function(e){return e==null||e===!1||e===""},Qp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Hp(i)&&(Array.isArray(i)&&i.isCss||vr(i)?r.push("".concat(Ac(o),":"),i,";"):yo(i)?r.push.apply(r,vo(vo(["".concat(o," {")],Qp(i),!1),["}"],!1)):r.push("".concat(Ac(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in p0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function dn(e,t,n,r){if(Hp(e))return[];if(du(e))return[".".concat(e.styledComponentId)];if(vr(e)){if(!vr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return dn(o,t,n,r)}var i;return e instanceof V0?n?(e.inject(n,r),[e.getName(r)]):[e]:yo(e)?Qp(e):Array.isArray(e)?Array.prototype.concat.apply(xl,e.map(function(l){return dn(l,t,n,r)})):[e.toString()]}function Yp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vr(n)&&!du(n))return!1}return!0}var H0=Mp("6.0.7"),Q0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yp(t),this.componentId=n,this.baseHash=Zn(H0,n),this.baseStyle=r,Qi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=_n(o,this.staticRulesId);else{var i=ls(dn(this.rules,t,n,r)),l=is(Zn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=_n(o,l),this.staticRulesId=l}else{for(var s=Zn(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")u+=p;else if(p){var v=ls(dn(p,t,n,r));s=Zn(s,v),u+=v}}if(u){var g=is(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),o=_n(o,g)}}return o},e}(),pu=V.createContext(void 0);pu.Consumer;var na={};function Y0(e,t,n){var r=du(e),o=e,i=!ea(e),l=t.attrs,a=l===void 0?xl:l,s=t.componentId,u=s===void 0?function(m,x){var E=typeof m!="string"?"sc":Oc(m);na[E]=(na[E]||0)+1;var j="".concat(E,"-").concat(bp("6.0.7"+E+na[E]));return x?"".concat(x,"-").concat(j):j}(t.displayName,t.parentComponentId):s,h=t.displayName;h===void 0&&function(m){return ea(m)?"styled.".concat(m):"Styled(".concat(x0(m),")")}(e);var p=t.displayName&&t.componentId?"".concat(Oc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(m,x){return y(m,x)&&w(m,x)}}else g=y}var k=new Q0(n,p,r?o.componentStyle:void 0);function d(m,x){return function(E,j,C){var $=E.attrs,R=E.componentStyle,O=E.defaultProps,F=E.foldedComponentIds,A=E.styledComponentId,b=E.target,X=V.useContext(pu),pe=us(),ne=E.shouldForwardProp||pe.shouldForwardProp,ae=function(Xe,Ee,rt){for(var he,we=Ae(Ae({},Ee),{className:void 0,theme:rt}),xn=0;xn<Xe.length;xn+=1){var Ot=vr(he=Xe[xn])?he(we):he;for(var P in Ot)we[P]=P==="className"?_n(we[P],Ot[P]):P==="style"?Ae(Ae({},we[P]),Ot[P]):Ot[P]}return Ee.className&&(we.className=_n(we.className,Ee.className)),we}($,j,Lp(j,X,O)||gr),z=ae.as||b,D={};for(var U in ae)ae[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?D.as=ae.forwardedAs:ne&&!ne(U,z)||(D[U]=ae[U]));var oe=function(Xe,Ee){var rt=us(),he=Xe.generateAndInjectStyles(Ee,rt.styleSheet,rt.stylis);return he}(R,ae),se=_n(F,A);return oe&&(se+=" "+oe),ae.className&&(se+=" "+ae.className),D[ea(z)&&!Np.has(z)?"class":"className"]=se,D.ref=C,T.createElement(z,D)}(c,m,x)}var c=V.forwardRef(d);return c.attrs=v,c.componentStyle=k,c.shouldForwardProp=g,c.foldedComponentIds=r?_n(o.foldedComponentIds,o.styledComponentId):"",c.styledComponentId=p,c.target=r?o.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(x){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var C=0,$=E;C<$.length;C++)as(x,$[C],!0);return x}({},o.defaultProps,m):m}}),fu(c,function(){return".".concat(c.styledComponentId)}),i&&Up(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Dc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Fc=function(e){return Object.assign(e,{isCss:!0})};function Kp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vr(e)||yo(e)){var r=e;return Fc(dn(Dc(xl,vo([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?dn(o):Fc(dn(Dc(o,t)))}function cs(e,t,n){if(n===void 0&&(n=gr),!t)throw _o(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Kp.apply(void 0,vo([o],i,!1)))};return r.attrs=function(o){return cs(e,t,Ae(Ae({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return cs(e,t,Ae(Ae({},n),o))},r}var Gp=function(e){return cs(Y0,e)},_=Gp;Np.forEach(function(e){_[e]=Gp(e)});var K0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Yp(t),Qi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ls(dn(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Qi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function G0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Kp.apply(void 0,vo([e],t,!1)),o="sc-global-".concat(bp(JSON.stringify(r))),i=new K0(r,o),l=function(s){var u=us(),h=V.useContext(pu),p=V.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(p,s,u.styleSheet,h,u.stylis),V.useLayoutEffect(function(){if(!u.styleSheet.server)return a(p,s,u.styleSheet,h,u.stylis),function(){return i.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,h,u.stylis]),null};function a(s,u,h,p,v){if(i.isStatic)i.renderStyles(s,m0,h,v);else{var g=Ae(Ae({},u),{theme:Lp(u,p,l.defaultProps)});i.renderStyles(s,g,h,v)}}return V.memo(l)}/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const Uc="popstate";function X0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ds("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Yi(o)}return q0(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function J0(){return Math.random().toString(36).substr(2,8)}function Bc(e,t){return{usr:e.state,key:e.key,idx:t}}function ds(e,t,n,r){return n===void 0&&(n=null),xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Er(t):t,{state:n,key:t&&t.key||r||J0()})}function Yi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function q0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=en.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(xo({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function p(){a=en.Pop;let k=h(),d=k==null?null:k-u;u=k,s&&s({action:a,location:w.location,delta:d})}function v(k,d){a=en.Push;let c=ds(w.location,k,d);n&&n(c,k),u=h()+1;let m=Bc(c,u),x=w.createHref(c);try{l.pushState(m,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(x)}i&&s&&s({action:a,location:w.location,delta:1})}function g(k,d){a=en.Replace;let c=ds(w.location,k,d);n&&n(c,k),u=h();let m=Bc(c,u),x=w.createHref(c);l.replaceState(m,"",x),i&&s&&s({action:a,location:w.location,delta:0})}function y(k){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof k=="string"?k:Yi(k);return je(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return a},get location(){return e(o,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Uc,p),s=k,()=>{o.removeEventListener(Uc,p),s=null}},createHref(k){return t(o,k)},createURL:y,encodeLocation(k){let d=y(k);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:g,go(k){return l.go(k)}};return w}var Vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vc||(Vc={}));function Z0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Er(t):t,o=mu(r.pathname||"/",n);if(o==null)return null;let i=Xp(e);ev(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=uv(i[a],fv(o));return l}function Xp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(je(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=fn([r,s.relativePath]),h=n.concat(s);i.children&&i.children.length>0&&(je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xp(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:av(u,i.index),routesMeta:h})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of Jp(i.path))o(i,l,s)}),t}function Jp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Jp(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function ev(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tv=/^:\w+$/,nv=3,rv=2,ov=1,iv=10,lv=-2,Wc=e=>e==="*";function av(e,t){let n=e.split("/"),r=n.length;return n.some(Wc)&&(r+=lv),t&&(r+=rv),n.filter(o=>!Wc(o)).reduce((o,i)=>o+(tv.test(i)?nv:i===""?ov:iv),r)}function sv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function uv(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",h=cv({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let p=a.route;i.push({params:r,pathname:fn([o,h.pathname]),pathnameBase:gv(fn([o,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(o=fn([o,h.pathnameBase]))}return i}function cv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,h,p)=>{if(h==="*"){let v=a[p]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return u[h]=pv(a[p]||"",h),u},{}),pathname:i,pathnameBase:l,pattern:e}}function dv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function fv(e){try{return decodeURI(e)}catch(t){return hu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pv(e,t){try{return decodeURIComponent(e)}catch(n){return hu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function mu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Er(e):e;return{pathname:n?n.startsWith("/")?n:mv(n,t):t,search:vv(r),hash:yv(o)}}function mv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ra(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Er(e):(o=xo({},e),je(!o.pathname||!o.pathname.includes("?"),ra("?","pathname","search",o)),je(!o.pathname||!o.pathname.includes("#"),ra("#","pathname","hash",o)),je(!o.search||!o.search.includes("#"),ra("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let p=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),p-=1;o.pathname=v.join("/")}a=p>=0?t[p]:"/"}let s=hv(o,a),u=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const fn=e=>e.join("/").replace(/\/\/+/g,"/"),gv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const eh=["post","put","patch","delete"];new Set(eh);const wv=["get",...eh];new Set(wv);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}const gu=T.createContext(null),Sv=T.createContext(null),kr=T.createContext(null),wl=T.createContext(null),An=T.createContext({outlet:null,matches:[],isDataRoute:!1}),th=T.createContext(null);function Ev(e,t){let{relative:n}=t===void 0?{}:t;To()||je(!1);let{basename:r,navigator:o}=T.useContext(kr),{hash:i,pathname:l,search:a}=rh(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:fn([r,l])),o.createHref({pathname:s,search:a,hash:i})}function To(){return T.useContext(wl)!=null}function Sl(){return To()||je(!1),T.useContext(wl).location}function nh(e){T.useContext(kr).static||T.useLayoutEffect(e)}function kv(){let{isDataRoute:e}=T.useContext(An);return e?Mv():Cv()}function Cv(){To()||je(!1);let e=T.useContext(gu),{basename:t,navigator:n}=T.useContext(kr),{matches:r}=T.useContext(An),{pathname:o}=Sl(),i=JSON.stringify(qp(r).map(s=>s.pathnameBase)),l=T.useRef(!1);return nh(()=>{l.current=!0}),T.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let h=Zp(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:fn([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,i,o,e])}function rh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(An),{pathname:o}=Sl(),i=JSON.stringify(qp(r).map(l=>l.pathnameBase));return T.useMemo(()=>Zp(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function jv(e,t){return _v(e,t)}function _v(e,t,n){To()||je(!1);let{navigator:r}=T.useContext(kr),{matches:o}=T.useContext(An),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=Sl(),u;if(t){var h;let w=typeof t=="string"?Er(t):t;a==="/"||(h=w.pathname)!=null&&h.startsWith(a)||je(!1),u=w}else u=s;let p=u.pathname||"/",v=a==="/"?p:p.slice(a.length)||"/",g=Z0(e,{pathname:v}),y=Iv(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:fn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:fn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n);return t&&y?T.createElement(wl.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:en.Pop}},y):y}function Tv(){let e=Nv(),t=xv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:o},n):null,i)}const $v=T.createElement(Tv,null);class Pv extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(An.Provider,{value:this.props.routeContext},T.createElement(th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rv(e){let{routeContext:t,match:n,children:r}=e,o=T.useContext(gu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(An.Provider,{value:t},r)}function Iv(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||je(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let h=s.route.id?l==null?void 0:l[s.route.id]:null,p=null;n&&(p=s.route.errorElement||$v);let v=t.concat(i.slice(0,u+1)),g=()=>{let y;return h?y=p:s.route.Component?y=T.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=a,T.createElement(Rv,{match:s,routeContext:{outlet:a,matches:v,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?T.createElement(Pv,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var oh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oh||{}),Gi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gi||{});function Ov(e){let t=T.useContext(gu);return t||je(!1),t}function zv(e){let t=T.useContext(Sv);return t||je(!1),t}function Lv(e){let t=T.useContext(An);return t||je(!1),t}function ih(e){let t=Lv(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function Nv(){var e;let t=T.useContext(th),n=zv(Gi.UseRouteError),r=ih(Gi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Mv(){let{router:e}=Ov(oh.UseNavigateStable),t=ih(Gi.UseNavigateStable),n=T.useRef(!1);return nh(()=>{n.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ki({fromRouteId:t},i)))},[e,t])}function Dr(e){je(!1)}function bv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=en.Pop,navigator:i,static:l=!1}=e;To()&&je(!1);let a=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=Er(r));let{pathname:u="/",search:h="",hash:p="",state:v=null,key:g="default"}=r,y=T.useMemo(()=>{let w=mu(u,a);return w==null?null:{location:{pathname:w,search:h,hash:p,state:v,key:g},navigationType:o}},[a,u,h,p,v,g,o]);return y==null?null:T.createElement(kr.Provider,{value:s},T.createElement(wl.Provider,{children:n,value:y}))}function Av(e){let{children:t,location:n}=e;return jv(fs(t),n)}new Promise(()=>{});function fs(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,o)=>{if(!T.isValidElement(r))return;let i=[...t,o];if(r.type===T.Fragment){n.push.apply(n,fs(r.props.children,i));return}r.type!==Dr&&je(!1),!r.props.index||!r.props.children||je(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=fs(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}function Dv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Fv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,t){return e.button===0&&(!t||t==="_self")&&!Fv(e)}const Bv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Vv="startTransition",Hc=bh[Vv];function Wv(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=X0({window:o,v5Compat:!0}));let l=i.current,[a,s]=T.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=T.useCallback(p=>{u&&Hc?Hc(()=>s(p)):s(p)},[s,u]);return T.useLayoutEffect(()=>l.listen(h),[l,h]),T.createElement(bv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const Hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cr=T.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:h}=t,p=Dv(t,Bv),{basename:v}=T.useContext(kr),g,y=!1;if(typeof u=="string"&&Qv.test(u)&&(g=u,Hv))try{let c=new URL(window.location.href),m=u.startsWith("//")?new URL(c.protocol+u):new URL(u),x=mu(m.pathname,v);m.origin===c.origin&&x!=null?u=x+m.search+m.hash:y=!0}catch{}let w=Ev(u,{relative:o}),k=Yv(u,{replace:l,state:a,target:s,preventScrollReset:h,relative:o});function d(c){r&&r(c),c.defaultPrevented||k(c)}return T.createElement("a",ps({},p,{href:g||w,onClick:y||i?r:d,ref:n,target:s}))});var Qc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Qc||(Qc={}));var Yc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yc||(Yc={}));function Yv(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=kv(),s=Sl(),u=rh(e,{relative:l});return T.useCallback(h=>{if(Uv(h,n)){h.preventDefault();let p=r!==void 0?r:Yi(s)===Yi(u);a(e,{replace:p,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}var lh={exports:{}};(function(e,t){(function(r,o){e.exports=o(T)})(Sh,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,s)=>{s.match=y,s.parse=w;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,h=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,p=/^(?:(min|max)-)?(.+)/,v=/(em|rem|px|cm|mm|in|pt|pc)?$/,g=/(dpi|dpcm|dppx)?$/;function y(m,x){return w(m).some(function(E){var j=E.inverse,C=E.type==="all"||x.type===E.type;if(C&&j||!(C||j))return!1;var $=E.expressions.every(function(R){var O=R.feature,F=R.modifier,A=R.value,b=x[O];if(!b)return!1;switch(O){case"orientation":case"scan":return b.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=c(A),b=c(b);break;case"resolution":A=d(A),b=d(b);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=k(A),b=k(b);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,b=parseInt(b,10)||0;break}switch(F){case"min":return b>=A;case"max":return b<=A;default:return b===A}});return $&&!j||!$&&j})}function w(m){return m.split(",").map(function(x){x=x.trim();var E=x.match(u),j=E[1],C=E[2],$=E[3]||"",R={};return R.inverse=!!j&&j.toLowerCase()==="not",R.type=C?C.toLowerCase():"all",$=$.match(/\([^\)]+\)/g)||[],R.expressions=$.map(function(O){var F=O.match(h),A=F[1].toLowerCase().match(p);return{modifier:A[1],feature:A[2],value:F[2]}}),R})}function k(m){var x=Number(m),E;return x||(E=m.match(/^(\d+)\s*\/\s*(\d+)$/),x=E[1]/E[2]),x}function d(m){var x=parseFloat(m),E=String(m).match(g)[1];switch(E){case"dpcm":return x/2.54;case"dppx":return x*96;default:return x}}function c(m){var x=parseFloat(m),E=String(m).match(v)[1];switch(E){case"em":return x*16;case"rem":return x*16;case"cm":return x*96/2.54;case"mm":return x*96/2.54/10;case"in":return x*96;case"pt":return x*72;case"pc":return x*72/12;default:return x}}},"./node_modules/hyphenate-style-name/index.js":(a,s,u)=>{u.r(s),u.d(s,{default:()=>w});var h=/[A-Z]/g,p=/^ms-/,v={};function g(k){return"-"+k.toLowerCase()}function y(k){if(v.hasOwnProperty(k))return v[k];var d=k.replace(h,g);return v[k]=p.test(d)?"-"+d:d}const w=y},"./node_modules/matchmediaquery/index.js":(a,s,u)=>{var h=u("./node_modules/css-mediaquery/index.js").match,p=typeof window<"u"?window.matchMedia:null;function v(y,w,k){var d=this;if(p&&!k){var c=p.call(window,y);this.matches=c.matches,this.media=c.media,c.addListener(E)}else this.matches=h(y,w),this.media=y;this.addListener=m,this.removeListener=x,this.dispose=j;function m(C){c&&c.addListener(C)}function x(C){c&&c.removeListener(C)}function E(C){d.matches=C.matches,d.media=C.media}function j(){c&&c.removeListener(E)}}function g(y,w,k){return new v(y,w,k)}a.exports=g},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function p(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function v(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var y={},w=0;w<10;w++)y["_"+String.fromCharCode(w)]=w;var k=Object.getOwnPropertyNames(y).map(function(c){return y[c]});if(k.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(c){d[c]=c}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=v()?Object.assign:function(g,y){for(var w,k=p(g),d,c=1;c<arguments.length;c++){w=Object(arguments[c]);for(var m in w)u.call(w,m)&&(k[m]=w[m]);if(s){d=s(w);for(var x=0;x<d.length;x++)h.call(w,d[x])&&(k[d[x]]=w[d[x]])}}return k}},"./node_modules/prop-types/checkPropTypes.js":(a,s,u)=>{var h=function(){};{var p=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v={},g=u("./node_modules/prop-types/lib/has.js");h=function(w){var k="Warning: "+w;typeof console<"u"&&console.error(k);try{throw new Error(k)}catch{}}}function y(w,k,d,c,m){for(var x in w)if(g(w,x)){var E;try{if(typeof w[x]!="function"){var j=Error((c||"React class")+": "+d+" type `"+x+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof w[x]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}E=w[x](k,x,c,d,null,p)}catch($){E=$}if(E&&!(E instanceof Error)&&h((c||"React class")+": type specification of "+d+" `"+x+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in v)){v[E.message]=!0;var C=m?m():"";h("Failed "+d+" type: "+E.message+(C??""))}}}y.resetWarningCache=function(){v={}},a.exports=y},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,s,u)=>{var h=u("./node_modules/react-is/index.js"),p=u("./node_modules/object-assign/index.js"),v=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g=u("./node_modules/prop-types/lib/has.js"),y=u("./node_modules/prop-types/checkPropTypes.js"),w=function(){};w=function(d){var c="Warning: "+d;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}};function k(){return null}a.exports=function(d,c){var m=typeof Symbol=="function"&&Symbol.iterator,x="@@iterator";function E(P){var M=P&&(m&&P[m]||P[x]);if(typeof M=="function")return M}var j="<<anonymous>>",C={array:F("array"),bigint:F("bigint"),bool:F("boolean"),func:F("function"),number:F("number"),object:F("object"),string:F("string"),symbol:F("symbol"),any:A(),arrayOf:b,element:X(),elementType:pe(),instanceOf:ne,node:U(),objectOf:z,oneOf:ae,oneOfType:D,shape:se,exact:Xe};function $(P,M){return P===M?P!==0||1/P===1/M:P!==P&&M!==M}function R(P,M){this.message=P,this.data=M&&typeof M=="object"?M:{},this.stack=""}R.prototype=Error.prototype;function O(P){var M={},J=0;function Y(Z,Q,K,ee,ie,te,L){if(ee=ee||j,te=te||K,L!==v){if(c){var $e=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $e.name="Invariant Violation",$e}else if(typeof console<"u"){var gt=ee+":"+K;!M[gt]&&J<3&&(w("You are manually calling a React.PropTypes validation function for the `"+te+"` prop on `"+ee+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),M[gt]=!0,J++)}}return Q[K]==null?Z?Q[K]===null?new R("The "+ie+" `"+te+"` is marked as required "+("in `"+ee+"`, but its value is `null`.")):new R("The "+ie+" `"+te+"` is marked as required in "+("`"+ee+"`, but its value is `undefined`.")):null:P(Q,K,ee,ie,te)}var W=Y.bind(null,!1);return W.isRequired=Y.bind(null,!0),W}function F(P){function M(J,Y,W,Z,Q,K){var ee=J[Y],ie=he(ee);if(ie!==P){var te=we(ee);return new R("Invalid "+Z+" `"+Q+"` of type "+("`"+te+"` supplied to `"+W+"`, expected ")+("`"+P+"`."),{expectedType:P})}return null}return O(M)}function A(){return O(k)}function b(P){function M(J,Y,W,Z,Q){if(typeof P!="function")return new R("Property `"+Q+"` of component `"+W+"` has invalid PropType notation inside arrayOf.");var K=J[Y];if(!Array.isArray(K)){var ee=he(K);return new R("Invalid "+Z+" `"+Q+"` of type "+("`"+ee+"` supplied to `"+W+"`, expected an array."))}for(var ie=0;ie<K.length;ie++){var te=P(K,ie,W,Z,Q+"["+ie+"]",v);if(te instanceof Error)return te}return null}return O(M)}function X(){function P(M,J,Y,W,Z){var Q=M[J];if(!d(Q)){var K=he(Q);return new R("Invalid "+W+" `"+Z+"` of type "+("`"+K+"` supplied to `"+Y+"`, expected a single ReactElement."))}return null}return O(P)}function pe(){function P(M,J,Y,W,Z){var Q=M[J];if(!h.isValidElementType(Q)){var K=he(Q);return new R("Invalid "+W+" `"+Z+"` of type "+("`"+K+"` supplied to `"+Y+"`, expected a single ReactElement type."))}return null}return O(P)}function ne(P){function M(J,Y,W,Z,Q){if(!(J[Y]instanceof P)){var K=P.name||j,ee=Ot(J[Y]);return new R("Invalid "+Z+" `"+Q+"` of type "+("`"+ee+"` supplied to `"+W+"`, expected ")+("instance of `"+K+"`."))}return null}return O(M)}function ae(P){if(!Array.isArray(P))return arguments.length>1?w("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):w("Invalid argument supplied to oneOf, expected an array."),k;function M(J,Y,W,Z,Q){for(var K=J[Y],ee=0;ee<P.length;ee++)if($(K,P[ee]))return null;var ie=JSON.stringify(P,function(L,$e){var gt=we($e);return gt==="symbol"?String($e):$e});return new R("Invalid "+Z+" `"+Q+"` of value `"+String(K)+"` "+("supplied to `"+W+"`, expected one of "+ie+"."))}return O(M)}function z(P){function M(J,Y,W,Z,Q){if(typeof P!="function")return new R("Property `"+Q+"` of component `"+W+"` has invalid PropType notation inside objectOf.");var K=J[Y],ee=he(K);if(ee!=="object")return new R("Invalid "+Z+" `"+Q+"` of type "+("`"+ee+"` supplied to `"+W+"`, expected an object."));for(var ie in K)if(g(K,ie)){var te=P(K,ie,W,Z,Q+"."+ie,v);if(te instanceof Error)return te}return null}return O(M)}function D(P){if(!Array.isArray(P))return w("Invalid argument supplied to oneOfType, expected an instance of array."),k;for(var M=0;M<P.length;M++){var J=P[M];if(typeof J!="function")return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+xn(J)+" at index "+M+"."),k}function Y(W,Z,Q,K,ee){for(var ie=[],te=0;te<P.length;te++){var L=P[te],$e=L(W,Z,Q,K,ee,v);if($e==null)return null;$e.data&&g($e.data,"expectedType")&&ie.push($e.data.expectedType)}var gt=ie.length>0?", expected one of type ["+ie.join(", ")+"]":"";return new R("Invalid "+K+" `"+ee+"` supplied to "+("`"+Q+"`"+gt+"."))}return O(Y)}function U(){function P(M,J,Y,W,Z){return Ee(M[J])?null:new R("Invalid "+W+" `"+Z+"` supplied to "+("`"+Y+"`, expected a ReactNode."))}return O(P)}function oe(P,M,J,Y,W){return new R((P||"React class")+": "+M+" type `"+J+"."+Y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+W+"`.")}function se(P){function M(J,Y,W,Z,Q){var K=J[Y],ee=he(K);if(ee!=="object")return new R("Invalid "+Z+" `"+Q+"` of type `"+ee+"` "+("supplied to `"+W+"`, expected `object`."));for(var ie in P){var te=P[ie];if(typeof te!="function")return oe(W,Z,Q,ie,we(te));var L=te(K,ie,W,Z,Q+"."+ie,v);if(L)return L}return null}return O(M)}function Xe(P){function M(J,Y,W,Z,Q){var K=J[Y],ee=he(K);if(ee!=="object")return new R("Invalid "+Z+" `"+Q+"` of type `"+ee+"` "+("supplied to `"+W+"`, expected `object`."));var ie=p({},J[Y],P);for(var te in ie){var L=P[te];if(g(P,te)&&typeof L!="function")return oe(W,Z,Q,te,we(L));if(!L)return new R("Invalid "+Z+" `"+Q+"` key `"+te+"` supplied to `"+W+"`.\nBad object: "+JSON.stringify(J[Y],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(P),null,"  "));var $e=L(K,te,W,Z,Q+"."+te,v);if($e)return $e}return null}return O(M)}function Ee(P){switch(typeof P){case"number":case"string":case"undefined":return!0;case"boolean":return!P;case"object":if(Array.isArray(P))return P.every(Ee);if(P===null||d(P))return!0;var M=E(P);if(M){var J=M.call(P),Y;if(M!==P.entries){for(;!(Y=J.next()).done;)if(!Ee(Y.value))return!1}else for(;!(Y=J.next()).done;){var W=Y.value;if(W&&!Ee(W[1]))return!1}}else return!1;return!0;default:return!1}}function rt(P,M){return P==="symbol"?!0:M?M["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&M instanceof Symbol:!1}function he(P){var M=typeof P;return Array.isArray(P)?"array":P instanceof RegExp?"object":rt(M,P)?"symbol":M}function we(P){if(typeof P>"u"||P===null)return""+P;var M=he(P);if(M==="object"){if(P instanceof Date)return"date";if(P instanceof RegExp)return"regexp"}return M}function xn(P){var M=we(P);switch(M){case"array":case"object":return"an "+M;case"boolean":case"date":case"regexp":return"a "+M;default:return M}}function Ot(P){return!P.constructor||!P.constructor.name?j:P.constructor.name}return C.checkPropTypes=y,C.resetWarningCache=y.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(a,s,u)=>{{var h=u("./node_modules/react-is/index.js"),p=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(h.isElement,p)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=s},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,h=u?Symbol.for("react.element"):60103,p=u?Symbol.for("react.portal"):60106,v=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,y=u?Symbol.for("react.profiler"):60114,w=u?Symbol.for("react.provider"):60109,k=u?Symbol.for("react.context"):60110,d=u?Symbol.for("react.async_mode"):60111,c=u?Symbol.for("react.concurrent_mode"):60111,m=u?Symbol.for("react.forward_ref"):60112,x=u?Symbol.for("react.suspense"):60113,E=u?Symbol.for("react.suspense_list"):60120,j=u?Symbol.for("react.memo"):60115,C=u?Symbol.for("react.lazy"):60116,$=u?Symbol.for("react.block"):60121,R=u?Symbol.for("react.fundamental"):60117,O=u?Symbol.for("react.responder"):60118,F=u?Symbol.for("react.scope"):60119;function A(L){return typeof L=="string"||typeof L=="function"||L===v||L===c||L===y||L===g||L===x||L===E||typeof L=="object"&&L!==null&&(L.$$typeof===C||L.$$typeof===j||L.$$typeof===w||L.$$typeof===k||L.$$typeof===m||L.$$typeof===R||L.$$typeof===O||L.$$typeof===F||L.$$typeof===$)}function b(L){if(typeof L=="object"&&L!==null){var $e=L.$$typeof;switch($e){case h:var gt=L.type;switch(gt){case d:case c:case v:case y:case g:case x:return gt;default:var xu=gt&&gt.$$typeof;switch(xu){case k:case m:case C:case j:case w:return xu;default:return $e}}case p:return $e}}}var X=d,pe=c,ne=k,ae=w,z=h,D=m,U=v,oe=C,se=j,Xe=p,Ee=y,rt=g,he=x,we=!1;function xn(L){return we||(we=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Ot(L)||b(L)===d}function Ot(L){return b(L)===c}function P(L){return b(L)===k}function M(L){return b(L)===w}function J(L){return typeof L=="object"&&L!==null&&L.$$typeof===h}function Y(L){return b(L)===m}function W(L){return b(L)===v}function Z(L){return b(L)===C}function Q(L){return b(L)===j}function K(L){return b(L)===p}function ee(L){return b(L)===y}function ie(L){return b(L)===g}function te(L){return b(L)===x}s.AsyncMode=X,s.ConcurrentMode=pe,s.ContextConsumer=ne,s.ContextProvider=ae,s.Element=z,s.ForwardRef=D,s.Fragment=U,s.Lazy=oe,s.Memo=se,s.Portal=Xe,s.Profiler=Ee,s.StrictMode=rt,s.Suspense=he,s.isAsyncMode=xn,s.isConcurrentMode=Ot,s.isContextConsumer=P,s.isContextProvider=M,s.isElement=J,s.isForwardRef=Y,s.isFragment=W,s.isLazy=Z,s.isMemo=Q,s.isPortal=K,s.isProfiler=ee,s.isStrictMode=ie,s.isSuspense=te,s.isValidElementType=A,s.typeOf=b})()},"./node_modules/react-is/index.js":(a,s,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,s,u)=>{u.r(s),u.d(s,{shallowEqualArrays:()=>p,shallowEqualObjects:()=>h});function h(v,g){if(v===g)return!0;if(!v||!g)return!1;var y=Object.keys(v),w=Object.keys(g),k=y.length;if(w.length!==k)return!1;for(var d=0;d<k;d++){var c=y[d];if(v[c]!==g[c]||!Object.prototype.hasOwnProperty.call(g,c))return!1}return!0}function p(v,g){if(v===g)return!0;if(!v||!g)return!1;var y=v.length;if(g.length!==y)return!1;for(var w=0;w<y;w++)if(v[w]!==g[w])return!1;return!0}},"./src/Component.ts":function(a,s,u){var h=this&&this.__rest||function(y,w){var k={};for(var d in y)Object.prototype.hasOwnProperty.call(y,d)&&w.indexOf(d)<0&&(k[d]=y[d]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,d=Object.getOwnPropertySymbols(y);c<d.length;c++)w.indexOf(d[c])<0&&Object.prototype.propertyIsEnumerable.call(y,d[c])&&(k[d[c]]=y[d[c]]);return k},p=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(s,"__esModule",{value:!0});var v=p(u("./src/useMediaQuery.ts")),g=function(y){var w=y.children,k=y.device,d=y.onChange,c=h(y,["children","device","onChange"]),m=(0,v.default)(c,k,d);return typeof w=="function"?w(m):m?w:null};s.default=g},"./src/Context.ts":(a,s,u)=>{Object.defineProperty(s,"__esModule",{value:!0});var h=u("react"),p=(0,h.createContext)(void 0);s.default=p},"./src/index.ts":function(a,s,u){var h=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var p=h(u("./src/useMediaQuery.ts"));s.useMediaQuery=p.default;var v=h(u("./src/Component.ts"));s.default=v.default;var g=h(u("./src/toQuery.ts"));s.toQuery=g.default;var y=h(u("./src/Context.ts"));s.Context=y.default},"./src/mediaQuery.ts":function(a,s,u){var h=this&&this.__assign||function(){return h=Object.assign||function(x){for(var E,j=1,C=arguments.length;j<C;j++){E=arguments[j];for(var $ in E)Object.prototype.hasOwnProperty.call(E,$)&&(x[$]=E[$])}return x},h.apply(this,arguments)},p=this&&this.__rest||function(x,E){var j={};for(var C in x)Object.prototype.hasOwnProperty.call(x,C)&&E.indexOf(C)<0&&(j[C]=x[C]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,C=Object.getOwnPropertySymbols(x);$<C.length;$++)E.indexOf(C[$])<0&&Object.prototype.propertyIsEnumerable.call(x,C[$])&&(j[C[$]]=x[C[$]]);return j},v=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(s,"__esModule",{value:!0});var g=v(u("./node_modules/prop-types/index.js")),y=g.default.oneOfType([g.default.string,g.default.number]),w={all:g.default.bool,grid:g.default.bool,aural:g.default.bool,braille:g.default.bool,handheld:g.default.bool,print:g.default.bool,projection:g.default.bool,screen:g.default.bool,tty:g.default.bool,tv:g.default.bool,embossed:g.default.bool},k={orientation:g.default.oneOf(["portrait","landscape"]),scan:g.default.oneOf(["progressive","interlace"]),aspectRatio:g.default.string,deviceAspectRatio:g.default.string,height:y,deviceHeight:y,width:y,deviceWidth:y,color:g.default.bool,colorIndex:g.default.bool,monochrome:g.default.bool,resolution:y,type:Object.keys(w)};k.type;var d=p(k,["type"]),c=h({minAspectRatio:g.default.string,maxAspectRatio:g.default.string,minDeviceAspectRatio:g.default.string,maxDeviceAspectRatio:g.default.string,minHeight:y,maxHeight:y,minDeviceHeight:y,maxDeviceHeight:y,minWidth:y,maxWidth:y,minDeviceWidth:y,maxDeviceWidth:y,minColor:g.default.number,maxColor:g.default.number,minColorIndex:g.default.number,maxColorIndex:g.default.number,minMonochrome:g.default.number,maxMonochrome:g.default.number,minResolution:y,maxResolution:y},d),m=h(h({},w),c);s.default={all:m,types:w,matchers:k,features:c}},"./src/toQuery.ts":function(a,s,u){var h=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(s,"__esModule",{value:!0});var p=h(u("./node_modules/hyphenate-style-name/index.js")),v=h(u("./src/mediaQuery.ts")),g=function(d){return"not ".concat(d)},y=function(d,c){var m=(0,p.default)(d);return typeof c=="number"&&(c="".concat(c,"px")),c===!0?m:c===!1?g(m):"(".concat(m,": ").concat(c,")")},w=function(d){return d.join(" and ")},k=function(d){var c=[];return Object.keys(v.default.all).forEach(function(m){var x=d[m];x!=null&&c.push(y(m,x))}),w(c)};s.default=k},"./src/useMediaQuery.ts":function(a,s,u){var h=this&&this.__importDefault||function(R){return R&&R.__esModule?R:{default:R}};Object.defineProperty(s,"__esModule",{value:!0});var p=u("react"),v=h(u("./node_modules/matchmediaquery/index.js")),g=h(u("./node_modules/hyphenate-style-name/index.js")),y=u("./node_modules/shallow-equal/dist/index.esm.js"),w=h(u("./src/toQuery.ts")),k=h(u("./src/Context.ts")),d=function(R){return R.query||(0,w.default)(R)},c=function(R){if(R){var O=Object.keys(R);return O.reduce(function(F,A){return F[(0,g.default)(A)]=R[A],F},{})}},m=function(){var R=(0,p.useRef)(!1);return(0,p.useEffect)(function(){R.current=!0},[]),R.current},x=function(R){var O=(0,p.useContext)(k.default),F=function(){return c(R)||c(O)},A=(0,p.useState)(F),b=A[0],X=A[1];return(0,p.useEffect)(function(){var pe=F();(0,y.shallowEqualObjects)(b,pe)||X(pe)},[R,O]),b},E=function(R){var O=function(){return d(R)},F=(0,p.useState)(O),A=F[0],b=F[1];return(0,p.useEffect)(function(){var X=O();A!==X&&b(X)},[R]),A},j=function(R,O){var F=function(){return(0,v.default)(R,O||{},!!O)},A=(0,p.useState)(F),b=A[0],X=A[1],pe=m();return(0,p.useEffect)(function(){if(pe){var ne=F();return X(ne),function(){ne&&ne.dispose()}}},[R,O]),b},C=function(R){var O=(0,p.useState)(R.matches),F=O[0],A=O[1];return(0,p.useEffect)(function(){var b=function(X){A(X.matches)};return R.addListener(b),A(R.matches),function(){R.removeListener(b)}},[R]),F},$=function(R,O,F){var A=x(O),b=E(R);if(!b)throw new Error("Invalid or missing MediaQuery!");var X=j(b,A),pe=C(X),ne=m();return(0,p.useEffect)(function(){ne&&F&&F(pe)},[pe]),(0,p.useEffect)(function(){return function(){X&&X.dispose()}},[]),pe};s.default=$},react:a=>{a.exports=n}},o={};function i(a){var s=o[a];if(s!==void 0)return s.exports;var u=o[a]={exports:{}};return r[a].call(u.exports,u,u.exports,i),u.exports}i.d=(a,s)=>{for(var u in s)i.o(s,u)&&!i.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},i.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var l=i("./src/index.ts");return l})())})(lh);var Kv=lh.exports,ah={exports:{}},Gv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xv=Gv,Jv=Xv;function sh(){}function uh(){}uh.resetWarningCache=sh;var qv=function(){function e(r,o,i,l,a,s){if(s!==Jv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:uh,resetWarningCache:sh};return n.PropTypes=n,n};ah.exports=qv();var Zv=ah.exports;const Ft=pd(Zv),S={colors:{white:"#FEFEFF",seasalt:"#F9F9F9",lavender:"#EFECFF",platinum:"#E2DFDF",gray:"#797979",raisinblack:"#242331",onyx:"#413F50",lavenderfloral:"#B06EFE",electricindigo:"#5236FF",cinnabar:"#D05938",background:{1:"#F3F3F8",2:"#F1E7FE",3:"#FAEAE4"},text:{1:"#333",2:"#C0C0C0",error:"#de00ac"},detail1:{1:"#F0A308",2:"#F5CB5C",3:"#F1C47B"},detail2:{1:"#F0A308",2:"#F5CB5C",3:"#F1C47B"},prueba1:"#CED4DA",prueba2:"#FAF7FC",prueba3:"#302A40"},bp:{"x-small":"576px",small:"767px",medium:"992px",large:"1200px"}},ey=_(Cr)`
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
  background: rgba(255, 255, 255, 0.3);    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;function Xi({to:e,buttonText:t}){return f.jsx(ey,{to:e,children:t})}Xi.propTypes={to:Ft.string,buttonText:Ft.string};var ch={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kc=V.createContext&&V.createContext(ch),pn=globalThis&&globalThis.__assign||function(){return pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},pn.apply(this,arguments)},ty=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function dh(e){return e&&e.map(function(t,n){return V.createElement(t.tag,pn({key:n},t.attr),dh(t.child))})}function ny(e){return function(t){return V.createElement(ry,pn({attr:pn({},e.attr)},t),dh(e.child))}}function ry(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=ty(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),V.createElement("svg",pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:pn(pn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&V.createElement("title",null,i),e.children)};return Kc!==void 0?V.createElement(Kc.Consumer,null,function(n){return t(n)}):t(ch)}function oy(e){return ny({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const iy=_(Cr)`
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
`,ly=_(Cr)`
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
`;function At({to:e,buttonText:t,rightArrow:n}){return n?f.jsxs(ly,{to:e,children:[t,f.jsx(oy,{size:20})]}):f.jsx(iy,{to:e,children:t})}At.propTypes={to:Ft.string.isRequired,buttonText:Ft.string,rightArrow:Ft.bool};const ay=_.div`
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
`,sy=_(Cr)`
  padding-left: 1rem;
  img {
    height: 40px;

    @media (max-width: ${S.bp["x-small"]}) {
      height: 30px;
    }
  }
`,uy=_.button`
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
`,Gc=_.div`
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
`,_t=_(Cr)`
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
`,zr=_.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${S.bp.large}) {
    padding: 0px 0px;
  }
`,Xc=_.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,El=()=>{const[e,t]=T.useState(!1),n=Kv.useMediaQuery({maxWidth:S.bp.medium}),r=()=>{t(!e)};return f.jsxs(ay,{children:[f.jsx(sy,{to:"/",children:f.jsx("img",{src:"assets/logotipo.svg",alt:"Logo Sintética"})}),n?f.jsxs(f.Fragment,{children:[f.jsx(uy,{onClick:r,children:e?"✕":"☰"}),e&&f.jsxs(Gc,{children:[f.jsx(_t,{to:"/VoiceCloning",children:"Voice Cloning"}),f.jsx(_t,{to:"/Maintenance",children:"Experiencia TTS"}),f.jsx(_t,{to:"/Maintenance",children:"AI & Salud"}),f.jsx(_t,{to:"/Maintenance",children:"Investigación"}),f.jsx(_t,{to:"/Maintenance",children:"Nosotros"}),f.jsxs(Xc,{children:[f.jsx(Xi,{buttonText:"Login",to:"/Maintenance"}),f.jsx(At,{buttonText:"Signup",to:"/Maintenance"})]})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(Gc,{children:[f.jsx(_t,{to:"/VoiceCloning",children:"Voice Cloning"}),f.jsx(zr,{children:" "}),f.jsx(_t,{to:"/Maintenance",children:"Experiencia TTS"}),f.jsx(zr,{children:" "}),f.jsx(_t,{to:"/Maintenance",children:"AI & Salud"}),f.jsx(zr,{children:" "}),f.jsx(_t,{to:"/Maintenance",children:"Investigación"}),f.jsx(zr,{children:" "}),f.jsx(_t,{to:"/Maintenance",children:"Nosotros"}),f.jsx(zr,{children:" "})]}),f.jsxs(Xc,{children:[f.jsx(Xi,{buttonText:"Login",to:"/Maintenance"}),f.jsx(At,{buttonText:"Signup",to:"/Maintenance"})]})]})]})},cy=_.section`
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
`,dy=_.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;

  @media (max-width: ${S.bp.medium}) {
    width: 100vw;
  }
`,fy=_.img`
  width: 300px;
  @media (max-width: ${S.bp.small}) {
    width: 240px;
  }
  @media (max-width: ${S.bp["x-small"]}) {
    width: 200px;
  }
`,py=_.div`
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
`,hy=_.div`
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
`,my=_.h4`
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
`,gy=_.p`
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
`,vy=_.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${S.bp.medium}) {
    margin-right: 50px;
  }
`;function fh({openModal:e}){return f.jsxs(cy,{children:[f.jsxs(dy,{children:[f.jsx(fy,{src:"assets/sintetica-black-logo.svg",alt:"logo"}),f.jsxs(py,{children:[f.jsx("h1",{children:"Sintética"}),f.jsx("p",{children:"Laboratorio de voces"})]})]}),f.jsxs(hy,{children:[f.jsx(my,{children:"Síntesis de voces potenciadas por AI"}),f.jsx(gy,{children:"Desde Argentina al mundo: Líderes en el desarrollo de voces artificiales en nuestro idioma."}),f.jsx(vy,{onClick:e,children:f.jsx(Xi,{buttonText:"Contactanos"})})]})]})}fh.propTypes={openModal:Ft.node.isRequired};const yy=_.section`
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
`,xy=_.h3`
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
`,wy=_.h4`
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
`,Sy=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,oa=_(Cr)`
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
`;function Ey(){return f.jsxs(yy,{children:[f.jsx(xy,{children:"Nuestros objetivos"}),f.jsx(wy,{children:"Queremos reducir la brecha tecnológica de las voces sintéticas en nuestro idioma"}),f.jsxs(Sy,{children:[f.jsxs(oa,{to:"/VoiceCloning",children:[f.jsx("img",{src:"assets/home/card1.svg",alt:"icon"}),f.jsx("h3",{children:"Sistemas entrenados en"}),f.jsx("h3",{children:"Español Latinoamericano"})]}),f.jsxs(oa,{to:"/Maintenance",className:"selected",children:[f.jsx("img",{src:"assets/home/card2.svg",alt:"icon"}),f.jsx("h3",{children:"Inteligencia Artificial"}),f.jsx("h3",{children:"desarrollada desde la ética"})]}),f.jsxs(oa,{to:"/Maintenance",children:[f.jsx("img",{src:"assets/home/card3.svg",alt:"icon"}),f.jsx("h3",{children:"Herramientas de impacto social"}),f.jsx("h3",{children:"Salud e Inclusión"})]})]})]})}const ky=_.section`
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
`,Cy=_.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,jy=_.div`
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
`,_y=_.img`
  position: relative;
  width: 400px;
  @media (max-width: ${S.bp.large}) {
    width: 350px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 90vw;
  }
`,Ty=_.div`
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
`,$y=_.h3`
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
`,Py=_.h3`
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
`,Ry=_.div`
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
`,Iy=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,Qo=_.div`
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
`,Yo=_.img`
  width: 150px;
  height: 150px;
  padding-right: 15px;
  @media (max-width: ${S.bp.small}) {
    padding: 0;
  }
`,Ko=_.div`
  display: flex;
  flex-direction: column;
`,Go=_.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${S.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`,Xo=_.p`
  font-size: 16px;
  line-height: 30px;
  color: ${S.colors.gray};
  padding-top: 3px;
  margin: 0;
`,Jo=_.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;function Oy(){return f.jsxs(ky,{children:[f.jsx($y,{children:"¿Qué es Sintética?"}),f.jsxs(Cy,{children:[f.jsx(jy,{children:f.jsx(_y,{src:"assets/home/card5.svg",alt:"globos"})}),f.jsxs(Ty,{children:[f.jsx(Py,{children:"Voces en Español Rioplatense"}),f.jsxs(Ry,{children:[f.jsx("p",{children:"Sintética es un laboratorio de síntesis de voces. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."}),f.jsx("p",{children:"Transformamos voces en posibilidades."})]})]})]}),f.jsxs(Iy,{children:[f.jsxs(Qo,{children:[f.jsx(Yo,{src:"../../../public/assets/home/card4.svg",alt:"text-icon"}),f.jsxs(Ko,{children:[f.jsx(Go,{children:"Tex To Speech - Español Latinoamericano"}),f.jsx(Xo,{children:"Nuestra tecnología te ofrece una experiencia de conversión a texto única. Con acentos auténticos y entonaciones naturales tus proyectos, presentaciones y aplicaciones serán sobresalientes. Sumérgete en la nueva era del habla sintética y dale voz a tus ideas en tu propio idioma."}),f.jsx(Jo,{children:f.jsx(At,{rightArrow:!0,to:"/Maintenance"})})]})]}),f.jsxs(Qo,{children:[f.jsx(Yo,{src:"assets/voiceCloning/bannerVoice.svg",alt:"text-icon"}),f.jsxs(Ko,{children:[f.jsx(Go,{children:"Voice Cloning - Español Latinoamericano"}),f.jsx(Xo,{children:"¿Te imaginas poder replicar cualquier voz? Con nuestro sistema podés hacerlo realidad. Experimenta la libertad de dar vida a tus proyectos con voces familiares o icónicas en español rioplatense."}),f.jsx(Jo,{children:f.jsx(At,{rightArrow:!0,to:"/VoiceCloning"})})]})]}),f.jsxs(Qo,{children:[f.jsx(Yo,{src:"assets/home/card6.svg",alt:"text-icon"}),f.jsxs(Ko,{children:[f.jsx(Go,{children:"AI al servicio de la salud y la inclusión"}),f.jsx(Xo,{children:"Nuestra clonación de voz es la herramienta que cambiará vidas, brindando independencia a través del habla sintética personalizada. Explora cómo estamos redefiniendo la comunicación inclusiva."}),f.jsx(Jo,{children:f.jsx(At,{rightArrow:!0,to:"/Maintenance"})})]})]}),f.jsxs(Qo,{children:[f.jsx(Yo,{src:"assets/home/card7.svg",alt:"text-icon"}),f.jsxs(Ko,{children:[f.jsx(Go,{children:"Toolkit para voces"}),f.jsx(Xo,{children:"Nuestro toolkit te brinda el control completo sobre tus archivos de audio, desde el inicio hasta el final. ¿Necesitas dividir automáticamente pistas largas? Hecho. ¿No cuentas con transcripciones? No hay problema. ¿Buscas validar transcripciones con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes idiomas? Lo hacemos posible."}),f.jsx(Jo,{children:f.jsx(At,{rightArrow:!0,to:"/Maintenance"})})]})]})]})]})}const wo={_origin:"https://api.emailjs.com"},zy=(e,t="https://api.emailjs.com")=>{wo._userID=e,wo._origin=t},ph=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Jc{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const hh=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new Jc(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new Jc(l))}),i.open("POST",wo._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),Ly=(e,t,n,r)=>{const o=r||wo._userID;return ph(o,e,t),hh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},Ny=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},My=(e,t,n,r)=>{const o=r||wo._userID,i=Ny(n);ph(o,e,t);const l=new FormData(i);return l.append("lib_version","3.11.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),hh("/api/v1.0/email/send-form",l)},kl={init:zy,send:Ly,sendForm:My};function mh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=mh(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function tn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=mh(e))&&(r&&(r+=" "),r+=t);return r}const Jr=e=>typeof e=="number"&&!isNaN(e),Nn=e=>typeof e=="string",Qe=e=>typeof e=="function",xi=e=>Nn(e)||Qe(e)?e:null,ia=e=>T.isValidElement(e)||Nn(e)||Qe(e)||Jr(e);function by(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Cl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(l){let{children:a,position:s,preventExitTransition:u,done:h,nodeRef:p,isIn:v}=l;const g=r?`${t}--${s}`:t,y=r?`${n}--${s}`:n,w=T.useRef(0);return T.useLayoutEffect(()=>{const k=p.current,d=g.split(" "),c=m=>{m.target===p.current&&(k.dispatchEvent(new Event("d")),k.removeEventListener("animationend",c),k.removeEventListener("animationcancel",c),w.current===0&&m.type!=="animationcancel"&&k.classList.remove(...d))};k.classList.add(...d),k.addEventListener("animationend",c),k.addEventListener("animationcancel",c)},[]),T.useEffect(()=>{const k=p.current,d=()=>{k.removeEventListener("animationend",d),o?by(k,h,i):h()};v||(u?d():(w.current=1,k.className+=` ${y}`,k.addEventListener("animationend",d)))},[v]),V.createElement(V.Fragment,null,a)}}function qc(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const st={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},qo=e=>{let{theme:t,type:n,...r}=e;return V.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},la={info:function(e){return V.createElement(qo,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return V.createElement(qo,{...e},V.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return V.createElement(qo,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return V.createElement(qo,{...e},V.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return V.createElement("div",{className:"Toastify__spinner"})}};function Ay(e){const[,t]=T.useReducer(g=>g+1,0),[n,r]=T.useState([]),o=T.useRef(null),i=T.useRef(new Map).current,l=g=>n.indexOf(g)!==-1,a=T.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:g=>i.get(g)}).current;function s(g){let{containerId:y}=g;const{limit:w}=a.props;!w||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(g){r(y=>g==null?[]:y.filter(w=>w!==g))}function h(){const{toastContent:g,toastProps:y,staleId:w}=a.queue.shift();v(g,y,w)}function p(g,y){let{delay:w,staleId:k,...d}=y;if(!ia(g)||function(A){return!o.current||a.props.enableMultiContainer&&A.containerId!==a.props.containerId||i.has(A.toastId)&&A.updateId==null}(d))return;const{toastId:c,updateId:m,data:x}=d,{props:E}=a,j=()=>u(c),C=m==null;C&&a.count++;const $={...E,style:E.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(d).filter(A=>{let[b,X]=A;return X!=null})),toastId:c,updateId:m,data:x,closeToast:j,isIn:!1,className:xi(d.className||E.toastClassName),bodyClassName:xi(d.bodyClassName||E.bodyClassName),progressClassName:xi(d.progressClassName||E.progressClassName),autoClose:!d.isLoading&&(R=d.autoClose,O=E.autoClose,R===!1||Jr(R)&&R>0?R:O),deleteToast(){const A=qc(i.get(c),"removed");i.delete(c),st.emit(4,A);const b=a.queue.length;if(a.count=c==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),b>0){const X=c==null?a.props.limit:1;if(b===1||X===1)a.displayedToast++,h();else{const pe=X>b?b:X;a.displayedToast=pe;for(let ne=0;ne<pe;ne++)h()}}else t()}};var R,O;$.iconOut=function(A){let{theme:b,type:X,isLoading:pe,icon:ne}=A,ae=null;const z={theme:b,type:X};return ne===!1||(Qe(ne)?ae=ne(z):T.isValidElement(ne)?ae=T.cloneElement(ne,z):Nn(ne)||Jr(ne)?ae=ne:pe?ae=la.spinner():(D=>D in la)(X)&&(ae=la[X](z))),ae}($),Qe(d.onOpen)&&($.onOpen=d.onOpen),Qe(d.onClose)&&($.onClose=d.onClose),$.closeButton=E.closeButton,d.closeButton===!1||ia(d.closeButton)?$.closeButton=d.closeButton:d.closeButton===!0&&($.closeButton=!ia(E.closeButton)||E.closeButton);let F=g;T.isValidElement(g)&&!Nn(g.type)?F=T.cloneElement(g,{closeToast:j,toastProps:$,data:x}):Qe(g)&&(F=g({closeToast:j,toastProps:$,data:x})),E.limit&&E.limit>0&&a.count>E.limit&&C?a.queue.push({toastContent:F,toastProps:$,staleId:k}):Jr(w)?setTimeout(()=>{v(F,$,k)},w):v(F,$,k)}function v(g,y,w){const{toastId:k}=y;w&&i.delete(w);const d={content:g,props:y};i.set(k,d),r(c=>[...c,k].filter(m=>m!==w)),st.emit(4,qc(d,d.props.updateId==null?"added":"updated"))}return T.useEffect(()=>(a.containerId=e.containerId,st.cancelEmit(3).on(0,p).on(1,g=>o.current&&u(g)).on(5,s).emit(2,a),()=>{i.clear(),st.emit(3,a)}),[]),T.useEffect(()=>{a.props=e,a.isToastActive=l,a.displayedToast=n.length}),{getToastToRender:function(g){const y=new Map,w=Array.from(i.values());return e.newestOnTop&&w.reverse(),w.forEach(k=>{const{position:d}=k.props;y.has(d)||y.set(d,[]),y.get(d).push(k)}),Array.from(y,k=>g(k[0],k[1]))},containerRef:o,isToastActive:l}}function Zc(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ed(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Dy(e){const[t,n]=T.useState(!1),[r,o]=T.useState(!1),i=T.useRef(null),l=T.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=T.useRef(e),{autoClose:s,pauseOnHover:u,closeToast:h,onClick:p,closeOnClick:v}=e;function g(x){if(e.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),document.addEventListener("touchmove",d),document.addEventListener("touchend",c);const E=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=E.getBoundingClientRect(),E.style.transition="",l.x=Zc(x.nativeEvent),l.y=ed(x.nativeEvent),e.draggableDirection==="x"?(l.start=l.x,l.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=E.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(x){if(l.boundingRect){const{top:E,bottom:j,left:C,right:$}=l.boundingRect;x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&l.x>=C&&l.x<=$&&l.y>=E&&l.y<=j?k():w()}}function w(){n(!0)}function k(){n(!1)}function d(x){const E=i.current;l.canDrag&&E&&(l.didMove=!0,t&&k(),l.x=Zc(x),l.y=ed(x),l.delta=e.draggableDirection==="x"?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),E.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,E.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function c(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",c);const x=i.current;if(l.canDrag&&l.didMove&&x){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),void e.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${e.draggableDirection}(0)`,x.style.opacity="1"}}T.useEffect(()=>{a.current=e}),T.useEffect(()=>(i.current&&i.current.addEventListener("d",w,{once:!0}),Qe(e.onOpen)&&e.onOpen(T.isValidElement(e.children)&&e.children.props),()=>{const x=a.current;Qe(x.onClose)&&x.onClose(T.isValidElement(x.children)&&x.children.props)}),[]),T.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||k(),window.addEventListener("focus",w),window.addEventListener("blur",k)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",k))}),[e.pauseOnFocusLoss]);const m={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return s&&u&&(m.onMouseEnter=k,m.onMouseLeave=w),v&&(m.onClick=x=>{p&&p(x),l.canCloseOnClick&&h()}),{playToast:w,pauseToast:k,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:m}}function gh(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return V.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},V.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},V.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Fy(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:l,style:a,controlledProgress:s,progress:u,rtl:h,isIn:p,theme:v}=e;const g=i||s&&u===0,y={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};s&&(y.transform=`scaleX(${u})`);const w=tn("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":h}),k=Qe(l)?l({rtl:h,type:o,defaultClassName:w}):tn(w,l);return V.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:k,style:y,[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{p&&r()}})}const Uy=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=Dy(e),{closeButton:i,children:l,autoClose:a,onClick:s,type:u,hideProgressBar:h,closeToast:p,transition:v,position:g,className:y,style:w,bodyClassName:k,bodyStyle:d,progressClassName:c,progressStyle:m,updateId:x,role:E,progress:j,rtl:C,toastId:$,deleteToast:R,isIn:O,isLoading:F,iconOut:A,closeOnClick:b,theme:X}=e,pe=tn("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":b}),ne=Qe(y)?y({rtl:C,position:g,type:u,defaultClassName:pe}):tn(pe,y),ae=!!j||!a,z={closeToast:p,type:u,theme:X};let D=null;return i===!1||(D=Qe(i)?i(z):T.isValidElement(i)?T.cloneElement(i,z):gh(z)),V.createElement(v,{isIn:O,done:R,position:g,preventExitTransition:n,nodeRef:r},V.createElement("div",{id:$,onClick:s,className:ne,...o,style:w,ref:r},V.createElement("div",{...O&&{role:E},className:Qe(k)?k({type:u}):tn("Toastify__toast-body",k),style:d},A!=null&&V.createElement("div",{className:tn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!F})},A),V.createElement("div",null,l)),D,V.createElement(Fy,{...x&&!ae?{key:`pb-${x}`}:{},rtl:C,theme:X,delay:a,isRunning:t,isIn:O,closeToast:p,hide:h,type:u,style:m,className:c,controlledProgress:ae,progress:j||0})))},jl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},By=Cl(jl("bounce",!0));Cl(jl("slide",!0));Cl(jl("zoom"));Cl(jl("flip"));const Ji=T.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=Ay(e),{className:i,style:l,rtl:a,containerId:s}=e;function u(h){const p=tn("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":a});return Qe(i)?i({position:h,rtl:a,defaultClassName:p}):tn(p,xi(i))}return T.useEffect(()=>{t&&(t.current=r.current)},[]),V.createElement("div",{ref:r,className:"Toastify",id:s},n((h,p)=>{const v=p.length?{...l}:{...l,pointerEvents:"none"};return V.createElement("div",{className:u(h),style:v,key:`container-${h}`},p.map((g,y)=>{let{content:w,props:k}=g;return V.createElement(Uy,{...k,isIn:o(k.toastId),style:{...k.style,"--nth":y+1,"--len":p.length},key:`toast-${k.key}`},w)}))}))});Ji.displayName="ToastContainer",Ji.defaultProps={position:"top-right",transition:By,autoClose:5e3,closeButton:gh,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let aa,En=new Map,Fr=[],Vy=1;function vh(){return""+Vy++}function Wy(e){return e&&(Nn(e.toastId)||Jr(e.toastId))?e.toastId:vh()}function qr(e,t){return En.size>0?st.emit(0,e,t):Fr.push({content:e,options:t}),t.toastId}function qi(e,t){return{...t,type:t&&t.type||e,toastId:Wy(t)}}function Zo(e){return(t,n)=>qr(t,qi(e,n))}function B(e,t){return qr(e,qi("default",t))}B.loading=(e,t)=>qr(e,qi("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let r,{pending:o,error:i,success:l}=t;o&&(r=Nn(o)?B.loading(o,n):B.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(h,p,v)=>{if(p==null)return void B.dismiss(r);const g={type:h,...a,...n,data:v},y=Nn(p)?{render:p}:p;return r?B.update(r,{...g,...y}):B(y.render,{...g,...y}),v},u=Qe(e)?e():e;return u.then(h=>s("success",l,h)).catch(h=>s("error",i,h)),u},B.success=Zo("success"),B.info=Zo("info"),B.error=Zo("error"),B.warning=Zo("warning"),B.warn=B.warning,B.dark=(e,t)=>qr(e,qi("default",{theme:"dark",...t})),B.dismiss=e=>{En.size>0?st.emit(1,e):Fr=Fr.filter(t=>e!=null&&t.options.toastId!==e)},B.clearWaitingQueue=function(e){return e===void 0&&(e={}),st.emit(5,e)},B.isActive=e=>{let t=!1;return En.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},B.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const l=En.get(i||aa);return l&&l.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:vh()};i.toastId!==e&&(i.staleId=e);const l=i.render||o;delete i.render,qr(l,i)}},0)},B.done=e=>{B.update(e,{progress:1})},B.onChange=e=>(st.on(4,e),()=>{st.off(4,e)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},st.on(2,e=>{aa=e.containerId||e,En.set(aa,e),Fr.forEach(t=>{st.emit(0,t.content,t.options)}),Fr=[]}).on(3,e=>{En.delete(e.containerId||e),En.size===0&&st.off(0).off(1).off(5)});kl.init({}.VITE_EMAILJS_USER_ID);const Hy=_.section`
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
`,Qy=_.h3`
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
`,Yy=_.h3`
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
`,Ky=_.div`
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
`,td=_.a`
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
`,nd=_.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`,rd=_.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,od=_.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${S.colors.gray};
`,id=_.img`
  align-items: flex-start;
  width: 50px;
`,Gy=_.form`
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
`,Xy=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,ei=_.input`
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
`,Jy=_.textarea`
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
`,qy=_.button`
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
`;function vu(){const e=T.useRef(),[t,n]=T.useState({}),[r,o]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},l=(u,h)=>{u.preventDefault();const p={},v=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;h.name||(p.name="Por favor, completa tu nombre",B.error(p.name)),h.email?v.test(h.email)||(p.email="El formato del email no es valido",B.error(p.email)):(p.email="Por favor, completa tu email",B.error(p.email)),h.message||(p.message="Por favor, contanos cómo podemos ayudarte",B.error(p.message)),h.phone||(p.phone="Por favor, completa tu teléfono",B.error(p.phone)),h.subject||(p.subject="Por favor, escribe un asunto",B.error(p.subject)),h.message.length<8&&(p.message="Por favor, completa el mensaje con al menos 8 caracteres",B.error(p.message)),h.message.length>200&&(p.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",B.error(p.message)),n(p),Object.keys(p).length===0&&a()},a=()=>{const{name:u,email:h,phone:p,subject:v,message:g}=r;console.log("serviceID",{}.VITE_EMAILJS_SERVICE_ID),console.log("templateID",{}.VITE_EMAILJS_TEMPLATE_ID),console.log("userID",{}.VITE_EMAILJS_USER_ID),B.info("Enviando mensaje"),kl.send({}.VITE_EMAILJS_SERVICE_ID,{}.VITE_EMAILJS_TEMPLATE_ID,{name:u,email:h,message:g,phone:p,subject:v},{}.VITE_EMAILJS_USER_ID).then(y=>{console.log(y.text),B.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},y=>{console.log(y.text),B.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),s()},s=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return f.jsxs(Hy,{children:[f.jsx(Qy,{children:"Contacto"}),f.jsx(Yy,{children:"Dejanos tu consulta"}),f.jsxs(Ky,{children:[f.jsxs(td,{href:"tel:+61383766284",children:[f.jsx(id,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),f.jsxs(nd,{children:[f.jsx(rd,{children:"Llamanos"}),f.jsx(od,{children:"+54 9 11 5 739 7834"})]})]}),f.jsxs(td,{href:"info@mecantronic.com.ar",children:[f.jsx(id,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),f.jsxs(nd,{children:[f.jsx(rd,{children:"Escribinos"}),f.jsx(od,{children:"info@mecantronic.com.ar"})]})]})]}),f.jsxs(Gy,{ref:e,onSubmit:u=>l(u,r),children:[f.jsx(ei,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),f.jsx(ei,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),f.jsx(ei,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),f.jsx(ei,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),f.jsx(Jy,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),f.jsx(Xy,{children:f.jsx(qy,{type:"submit",children:"Enviar mensaje"})})]}),f.jsx(Ji,{position:"bottom-right"})]})}kl.init({}.VITE_EMAILJS_USER_ID);const Zy=_.section`
  background: none;
  color: ${S.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("assets/backgrounds/Background2.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${S.bp.large}) {
    background-size: 30%;
  }
`,e1=_.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${S.colors.raisinblack};
  font-size: 30px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 30px 0;
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
`,t1=_.div`
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
`,ld=_.a`
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
  @media (max-width: ${S.bp["x-small"]}) {
    height: 50px;
    width: 80vw;
  }
`,ad=_.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`,sd=_.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${S.colors.raisinblack};

  @media (max-width: ${S.bp["x-small"]}) {
    display: none;
  }
`,ud=_.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${S.colors.gray};
`,cd=_.img`
  align-items: flex-start;
  width: 50px;
  @media (max-width: ${S.bp["x-small"]}) {
    width: 30px;
  }
`,n1=_.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${S.colors.platinum};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 40px;
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
`,r1=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,ti=_.input`
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
`,o1=_.textarea`
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
`,i1=_.button`
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
`;function yh(){const e=T.useRef(),[t,n]=T.useState({}),[r,o]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),i=u=>{o({...r,[u.target.name]:u.target.value})},l=(u,h)=>{u.preventDefault();const p={},v=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;h.name||(p.name="Por favor, completa tu nombre",B.error(p.name)),h.email?v.test(h.email)||(p.email="El formato del email no es valido",B.error(p.email)):(p.email="Por favor, completa tu email",B.error(p.email)),h.message||(p.message="Por favor, contanos cómo podemos ayudarte",B.error(p.message)),h.phone||(p.phone="Por favor, completa tu teléfono",B.error(p.phone)),h.subject||(p.subject="Por favor, escribe un asunto",B.error(p.subject)),h.message.length<8&&(p.message="Por favor, completa el mensaje con al menos 8 caracteres",B.error(p.message)),h.message.length>200&&(p.message="Mensaje demasiado largo, debe contener menos de 200 caracteres",B.error(p.message)),n(p),Object.keys(p).length===0&&a()},a=()=>{const{name:u,email:h,phone:p,subject:v,message:g}=r;console.log("serviceID",{}.VITE_EMAILJS_SERVICE_ID),console.log("templateID",{}.VITE_EMAILJS_TEMPLATE_ID),console.log("userID",{}.VITE_EMAILJS_USER_ID),B.info("Enviando mensaje"),kl.send({}.VITE_EMAILJS_SERVICE_ID,{}.VITE_EMAILJS_TEMPLATE_ID,{name:u,email:h,message:g,phone:p,subject:v},{}.VITE_EMAILJS_USER_ID).then(y=>{console.log(y.text),B.success("¡Gracias por escribirnos, pronto estaremos respondiendo!")},y=>{console.log(y.text),B.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")}),s()},s=()=>{o({name:"",email:"",phone:"",subject:"",message:""}),e.current&&e.current.reset()};return f.jsxs(Zy,{children:[f.jsx(e1,{children:"Dejanos tu consulta"}),f.jsxs(t1,{children:[f.jsxs(ld,{href:"tel:+61383766284",children:[f.jsx(cd,{src:"assets/icons/phoneicon.svg",alt:"phone-icon"}),f.jsxs(ad,{children:[f.jsx(sd,{children:"Llamanos"}),f.jsx(ud,{children:"+54 9 11 5 739 7834"})]})]}),f.jsxs(ld,{href:"info@mecantronic.com.ar",children:[f.jsx(cd,{src:"assets/icons/emailicon.svg",alt:"phone-icon"}),f.jsxs(ad,{children:[f.jsx(sd,{children:"Escribinos"}),f.jsx(ud,{children:"info@mecantronic.com.ar"})]})]})]}),f.jsxs(n1,{ref:e,onSubmit:u=>l(u,r),children:[f.jsx(ti,{type:"text",placeholder:"Nombre*",id:"name",name:"name",value:r.name,onChange:i}),f.jsx(ti,{type:"text",placeholder:"Email*",id:"email",name:"email",value:r.email,onChange:i}),f.jsx(ti,{type:"text",placeholder:"Teléfono*",id:"phone",name:"phone",value:r.phone,onChange:i}),f.jsx(ti,{type:"text",placeholder:"Asunto*",id:"subject",name:"subject",value:r.subject,onChange:i}),f.jsx(o1,{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Mensaje*",value:r.message,onChange:i}),f.jsx(r1,{children:f.jsx(i1,{type:"submit",children:"Enviar mensaje"})})]}),f.jsx(Ji,{position:"bottom-right"})]})}const l1=_.div`
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,a1=_.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
`,s1=_.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
`,yu=({children:e,closeModal:t})=>f.jsx(l1,{children:f.jsxs(a1,{children:[f.jsx(s1,{onClick:t,children:"x"}),e]})});yu.propTypes={children:Ft.node.isRequired,closeModal:Ft.node.isRequired};const u1=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`,c1=_.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`;function d1(){const[e,t]=T.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return f.jsxs(u1,{children:[f.jsx(El,{}),f.jsx(fh,{openModal:n}),f.jsxs(c1,{children:[f.jsx(Ey,{}),f.jsx(Oy,{}),f.jsx(vu,{})]}),e&&f.jsx(yu,{closeModal:r,children:f.jsx(yh,{})})]})}const f1=_.section`
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
`,p1=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${S.bp.large}) {
    width: auto;
  }
`,h1=_.img`
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
`,m1=_.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${S.bp.large}) {
    width: 80%;
  }
`,g1=_.h3`
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
`,v1=_.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${S.colors.gray};
`,y1=_.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,x1=_.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${S.bp.medium}) {
    margin-right: 50px;
  }
`;function xh({openModal:e}){return f.jsxs(f1,{children:[f.jsx(p1,{children:f.jsx(h1,{src:"assets/voiceCloning/bannerVoice.svg"})}),f.jsxs(m1,{children:[f.jsx(g1,{children:"Inteligencia Artificial para alzar tu voz"}),f.jsx(v1,{children:"Crea una copia digital de tu voz con nuestros sistemas de inteligencia artificial para clonar voces. Desarrollamos modelos de IA personalizados para capturar tu voz y darte la experiencia más realista en tu propio idioma."}),f.jsx(y1,{children:f.jsx(x1,{onClick:e,children:f.jsx(At,{to:"",buttonText:"Cloná tu voz ",rightArrow:!0})})})]})]})}xh.propTypes={openModal:Ft.node.isRequired};const w1=_.section`
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
`,S1=_.span`
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
`,E1=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`,ot=_.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${S.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
`,it=_.audio`
  width: 330px;
`,lt=_.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${S.colors.raisinblack};
`,at=_.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${S.colors.electricindigo};
`;function k1(){return f.jsxs(w1,{children:[f.jsx(S1,{children:"Nuestras voces"}),f.jsxs(E1,{children:[f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/fem1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Ana"}),f.jsx(at,{children:"Voz Real"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/fem1_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Ana"}),f.jsx(at,{children:"Voz AI"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/mas1.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Franco"}),f.jsx(at,{children:"Voz Real"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/mas1_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Franco"}),f.jsx(at,{children:"Voz AI"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/fem2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Paula"}),f.jsx(at,{children:"Voz Real"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/fem2_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Paula"}),f.jsx(at,{children:"Voz AI"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/mas2.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Darío"}),f.jsx(at,{children:"Voz Real"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/mas2_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Darío"}),f.jsx(at,{children:"Voz AI"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/fem3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Luciana"}),f.jsx(at,{children:"Voz Real"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/fem3_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Luciana"}),f.jsx(at,{children:"Voz AI"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/mas3.wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Hernán"}),f.jsx(at,{children:"Voz Real"})]}),f.jsxs(ot,{children:[f.jsxs(it,{controls:!0,children:[f.jsx("source",{src:"../../../public/audios-voice/mas3_cloned (enhanced).wav",type:"audio/mpeg"}),"Tu navegador no soporta la reproducción de audio."]}),f.jsx(lt,{children:"Hernán"}),f.jsx(at,{children:"Voz AI"})]})]})]})}const C1=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;function j1(){const[e,t]=T.useState(!1),n=()=>{t(!0),document.body.style.overflow="hidden"},r=()=>{t(!1),document.body.style.overflow="auto"};return f.jsxs(C1,{children:[f.jsx(El,{}),f.jsx(xh,{openModal:n}),f.jsx(k1,{}),f.jsx(vu,{}),e&&f.jsx(yu,{closeModal:r,children:f.jsx(yh,{})})]})}const _1=_.section`
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
`,T1=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media (max-width: ${S.bp.large}) {
    width: 80%;
  }
`,$1=_.img`
  position: relative;
  width: 430px;
  @media (max-width: ${S.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${S.bp.small}) {
    width: 80vw;
  }
`,P1=_.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${S.bp.large}) {
    width: 90%;
  }
`,R1=_.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${S.colors.detail1[1]};
  letter-spacing: 1px;
`,I1=_.h3`
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
`,sa=_.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;function O1(){return f.jsxs(_1,{children:[f.jsxs(P1,{children:[f.jsx(R1,{children:"*** ¿Porqué lo hacemos?"}),f.jsx(I1,{children:"Tecnología al servicio de la salud y la inclusión"}),f.jsx(sa,{children:"En Sintética, estamos convencidos de que la tecnología debe ser una fuerza impulsora para mejorar la vida de las personas en todo el mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos hacia una visión transformadora: empoderar a individuos de todas las capacidades y orígenes a través de soluciones innovadoras."}),f.jsx(sa,{children:"En la intersección de la vanguardia tecnológica y el bienestar humano, la inteligencia artificial ha emergido como un faro de posibilidades. Creemos en la importancia de la inclusión, en la eliminación de barreras y en la promoción de la igualdad en todos los niveles."}),f.jsx(sa,{children:"La clonación de voz no solo es un avance técnico, es un testimonio de nuestro compromiso de construir un mundo donde cada voz sea escuchada y respetada. Te invitamos a explorar nuestros proyectos y descubrir cómo la inteligencia artificial está transformando la salud de maneras que antes solo podíamos imaginar."})]}),f.jsx(T1,{children:f.jsx($1,{src:"../../../public/assets/ia-salud/logo_1.png",alt:"Logo IA-salud"})})]})}const z1=_.section`
  background-color: ${S.colors.background[1]};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-top: 100px;
`,L1=_.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0 ;
  margin: 0;
  @media (max-width: ${S.bp["x-small"]}) {
    font-size: 40px;
  }
`,ni=_.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`,N1=_.iframe`
  width: 80vw;
  height: 50vw;
  padding-top: 50px;

`;function M1(){return f.jsxs(z1,{children:[f.jsx(L1,{children:"Proyecto Mi Identidad Vocal: programa ImpaCT.ar Ciencia y Tecnología - Ministerio de Salud de la Nación."}),f.jsx(ni,{children:"En las actividades cotidianas se hace evidente que la voz desempeña un papel indispensable. Desde la comunicación con el entorno familiar, hasta el desempeño académico y laboral. Prescindir de este instrumento significa una desventaja importante para el desarrollo de cualquier persona."}),f.jsx(ni,{children:"La clonación de voz emerge como una herramienta de gran potencial en la asistencia a personas afectadas por patologías de alta complejidad. Entre las condiciones que mayores limitaciones generan se encuentran la esclerosis lateral amiotrófica (ELA), la enfermedad de Huntington (EH), la apraxia, el accidente cerebrovascular (ACV) y el trastorno del espectro autista (TEA). Sin embargo, existen otro tipo de afecciones leves que pueden ser mitigadas con la tecnología propuesta, como por ejemplo, las intervenciones quirúrgicas en las cuerdas vocales y traqueotomías."}),f.jsx(ni,{children:"Mediante la aplicación de la clonación de voz, los usuarios podrán introducir mensajes en formato de texto, lo que conlleva a la producción de una representación auditiva por medio de una voz sintética. Esta tendrá como característica principal una gran similitud con su voz natural gracias al registro de audios de referencia y las tecnologías que se describen en este documento."}),f.jsx(ni,{children:"El software que desarrollamos permite reproducir cualquier texto que se ingrese, en forma de discurso y en español rioplatense. Esto representa un gran aporte en términos de inclusión para un porcentaje de la población que se ve imposibilitado en su desarrollo cotidiano."}),f.jsx(N1,{src:"https://www.youtube.com/embed/-KylP16dxj0?si=CDhRIkNFvzT6ZUnR",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}const b1=_.section`
  background-color: ${S.colors.background[1]};
  color: ${S.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`,A1=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${S.colors.detail1[1]};
  letter-spacing: 1px;
`,D1=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`,dd=_.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${S.colors.background[3]};
  border-radius: 15px;
`,fd=_.img`
  width: 320px;
  height: 380px;
`;function F1(){return f.jsxs(b1,{children:[f.jsx(A1,{children:"*** Prensa ***"}),f.jsxs(D1,{children:[f.jsx(dd,{href:"https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/",children:f.jsx(fd,{src:"../../../public/assets/ia-salud/nota1.png",alt:"Nota"})}),f.jsx(dd,{href:"https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/",children:f.jsx(fd,{src:"../../../public/assets/ia-salud/nota2.png",alt:"Nota"})})]})]})}const U1=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${S.colors.background[1]};
`;function B1(){return f.jsxs(U1,{children:[f.jsx(El,{}),f.jsx(O1,{}),f.jsx(M1,{}),f.jsx(F1,{}),f.jsx(vu,{})]})}const V1=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${S.colors.white};
`,W1=_.div`
  display: flex;
  align-items: center;

  @media (max-width: ${S.bp.medium}) {
    flex-direction: column;
  }
`,H1=_.img`
  width: 40vw;
  @media (max-width: ${S.bp.medium}) {
    width: 60vw;
  }
`,Q1=_.div`
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
`,Y1=_.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function K1(){return f.jsxs(V1,{children:[f.jsx(El,{}),f.jsxs(W1,{children:[f.jsx(H1,{src:"assets/backgrounds/maintenance.svg"}),f.jsxs(Q1,{children:[f.jsx("h2",{children:"¡Lo sentimos!"}),f.jsx("span",{children:"Sección en mantenimiento."}),f.jsx(Y1,{children:f.jsx(At,{to:"/",buttonText:"Volver a Inicio"})})]})]})]})}const G1=G0`
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
`,X1=_.div`
  /* Agrega tus estilos aquí */
`;function J1(){return f.jsxs(Wv,{children:[f.jsx(G1,{}),f.jsx(X1,{children:f.jsxs(Av,{children:[f.jsx(Dr,{exact:!0,path:"/",element:f.jsx(d1,{})}),f.jsx(Dr,{exact:!0,path:"/VoiceCloning",element:f.jsx(j1,{})}),f.jsx(Dr,{exact:!0,path:"/IA",element:f.jsx(B1,{})}),f.jsx(Dr,{exact:!0,path:"/Maintenance",element:f.jsx(K1,{})})]})})]})}ua.createRoot(document.getElementById("root")).render(f.jsx(V.StrictMode,{children:f.jsx(J1,{})}));

function yp(e,n){for(var s=0;s<n.length;s++){const t=n[s];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(t,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mi={exports:{}},ga={},Ai={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=Symbol.for("react.element"),vp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),wp=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Ep=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),po=Symbol.iterator;function Pp(e){return e===null||typeof e!="object"?null:(e=po&&e[po]||e["@@iterator"],typeof e=="function"?e:null)}var Fi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ui=Object.assign,Bi={};function fs(e,n,s){this.props=e,this.context=n,this.refs=Bi,this.updater=s||Fi}fs.prototype.isReactComponent={};fs.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};fs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vi(){}Vi.prototype=fs.prototype;function fr(e,n,s){this.props=e,this.context=n,this.refs=Bi,this.updater=s||Fi}var hr=fr.prototype=new Vi;hr.constructor=fr;Ui(hr,fs.prototype);hr.isPureReactComponent=!0;var fo=Array.isArray,Hi=Object.prototype.hasOwnProperty,mr={current:null},Wi={key:!0,ref:!0,__self:!0,__source:!0};function Qi(e,n,s){var t,a={},l=null,r=null;if(n!=null)for(t in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(l=""+n.key),n)Hi.call(n,t)&&!Wi.hasOwnProperty(t)&&(a[t]=n[t]);var o=arguments.length-2;if(o===1)a.children=s;else if(1<o){for(var i=Array(o),c=0;c<o;c++)i[c]=arguments[c+2];a.children=i}if(e&&e.defaultProps)for(t in o=e.defaultProps,o)a[t]===void 0&&(a[t]=o[t]);return{$$typeof:rt,type:e,key:l,ref:r,props:a,_owner:mr.current}}function Np(e,n){return{$$typeof:rt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function gr(e){return typeof e=="object"&&e!==null&&e.$$typeof===rt}function Tp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return n[s]})}var ho=/\/+/g;function Aa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Tp(""+e.key):n.toString(36)}function $t(e,n,s,t,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(l){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case rt:case vp:r=!0}}if(r)return r=e,a=a(r),e=t===""?"."+Aa(r,0):t,fo(a)?(s="",e!=null&&(s=e.replace(ho,"$&/")+"/"),$t(a,n,s,"",function(c){return c})):a!=null&&(gr(a)&&(a=Np(a,s+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(ho,"$&/")+"/")+e)),n.push(a)),1;if(r=0,t=t===""?".":t+":",fo(e))for(var o=0;o<e.length;o++){l=e[o];var i=t+Aa(l,o);r+=$t(l,n,s,i,a)}else if(i=Pp(e),typeof i=="function")for(e=i.call(e),o=0;!(l=e.next()).done;)l=l.value,i=t+Aa(l,o++),r+=$t(l,n,s,i,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function ht(e,n,s){if(e==null)return e;var t=[],a=0;return $t(e,t,"","",function(l){return n.call(s,l,a++)}),t}function Rp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Lt={transition:null},$p={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Lt,ReactCurrentOwner:mr};function Yi(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:ht,forEach:function(e,n,s){ht(e,function(){n.apply(this,arguments)},s)},count:function(e){var n=0;return ht(e,function(){n++}),n},toArray:function(e){return ht(e,function(n){return n})||[]},only:function(e){if(!gr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=fs;$.Fragment=jp;$.Profiler=wp;$.PureComponent=fr;$.StrictMode=_p;$.Suspense=Ep;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;$.act=Yi;$.cloneElement=function(e,n,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Ui({},e.props),a=e.key,l=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,r=mr.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(i in n)Hi.call(n,i)&&!Wi.hasOwnProperty(i)&&(t[i]=n[i]===void 0&&o!==void 0?o[i]:n[i])}var i=arguments.length-2;if(i===1)t.children=s;else if(1<i){o=Array(i);for(var c=0;c<i;c++)o[c]=arguments[c+2];t.children=o}return{$$typeof:rt,type:e.type,key:a,ref:l,props:t,_owner:r}};$.createContext=function(e){return e={$$typeof:kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xp,_context:e},e.Consumer=e};$.createElement=Qi;$.createFactory=function(e){var n=Qi.bind(null,e);return n.type=e,n};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Sp,render:e}};$.isValidElement=gr;$.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Rp}};$.memo=function(e,n){return{$$typeof:Cp,type:e,compare:n===void 0?null:n}};$.startTransition=function(e){var n=Lt.transition;Lt.transition={};try{e()}finally{Lt.transition=n}};$.unstable_act=Yi;$.useCallback=function(e,n){return pe.current.useCallback(e,n)};$.useContext=function(e){return pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};$.useEffect=function(e,n){return pe.current.useEffect(e,n)};$.useId=function(){return pe.current.useId()};$.useImperativeHandle=function(e,n,s){return pe.current.useImperativeHandle(e,n,s)};$.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};$.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};$.useMemo=function(e,n){return pe.current.useMemo(e,n)};$.useReducer=function(e,n,s){return pe.current.useReducer(e,n,s)};$.useRef=function(e){return pe.current.useRef(e)};$.useState=function(e){return pe.current.useState(e)};$.useSyncExternalStore=function(e,n,s){return pe.current.useSyncExternalStore(e,n,s)};$.useTransition=function(){return pe.current.useTransition()};$.version="18.3.1";Ai.exports=$;var S=Ai.exports;const Ki=Oi(S),Lp=yp({__proto__:null,default:Ki},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=S,zp=Symbol.for("react.element"),Dp=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,Mp=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ap={key:!0,ref:!0,__self:!0,__source:!0};function Xi(e,n,s){var t,a={},l=null,r=null;s!==void 0&&(l=""+s),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(r=n.ref);for(t in n)Op.call(n,t)&&!Ap.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)a[t]===void 0&&(a[t]=n[t]);return{$$typeof:zp,type:e,key:l,ref:r,props:a,_owner:Mp.current}}ga.Fragment=Dp;ga.jsx=Xi;ga.jsxs=Xi;Mi.exports=ga;var g=Mi.exports,Gi={exports:{}},ke={},qi={exports:{}},Zi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,T){var R=P.length;P.push(T);e:for(;0<R;){var Q=R-1>>>1,Z=P[Q];if(0<a(Z,T))P[Q]=T,P[R]=Z,R=Q;else break e}}function s(P){return P.length===0?null:P[0]}function t(P){if(P.length===0)return null;var T=P[0],R=P.pop();if(R!==T){P[0]=R;e:for(var Q=0,Z=P.length,pt=Z>>>1;Q<pt;){var kn=2*(Q+1)-1,Ma=P[kn],Sn=kn+1,dt=P[Sn];if(0>a(Ma,R))Sn<Z&&0>a(dt,Ma)?(P[Q]=dt,P[Sn]=R,Q=Sn):(P[Q]=Ma,P[kn]=R,Q=kn);else if(Sn<Z&&0>a(dt,R))P[Q]=dt,P[Sn]=R,Q=Sn;else break e}}return T}function a(P,T){var R=P.sortIndex-T.sortIndex;return R!==0?R:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var i=[],c=[],d=1,f=null,m=3,y=!1,j=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var T=s(c);T!==null;){if(T.callback===null)t(c);else if(T.startTime<=P)t(c),T.sortIndex=T.expirationTime,n(i,T);else break;T=s(c)}}function v(P){if(_=!1,h(P),!j)if(s(i)!==null)j=!0,Da(k);else{var T=s(c);T!==null&&Oa(v,T.startTime-P)}}function k(P,T){j=!1,_&&(_=!1,p(N),N=-1),y=!0;var R=m;try{for(h(T),f=s(i);f!==null&&(!(f.expirationTime>T)||P&&!Re());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,m=f.priorityLevel;var Z=Q(f.expirationTime<=T);T=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===s(i)&&t(i),h(T)}else t(i);f=s(i)}if(f!==null)var pt=!0;else{var kn=s(c);kn!==null&&Oa(v,kn.startTime-T),pt=!1}return pt}finally{f=null,m=R,y=!1}}var x=!1,C=null,N=-1,F=5,I=-1;function Re(){return!(e.unstable_now()-I<F)}function vs(){if(C!==null){var P=e.unstable_now();I=P;var T=!0;try{T=C(!0,P)}finally{T?js():(x=!1,C=null)}}else x=!1}var js;if(typeof u=="function")js=function(){u(vs)};else if(typeof MessageChannel<"u"){var uo=new MessageChannel,gp=uo.port2;uo.port1.onmessage=vs,js=function(){gp.postMessage(null)}}else js=function(){E(vs,0)};function Da(P){C=P,x||(x=!0,js())}function Oa(P,T){N=E(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){j||y||(j=!0,Da(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return s(i)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var R=m;m=T;try{return P()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=m;m=P;try{return T()}finally{m=R}},e.unstable_scheduleCallback=function(P,T,R){var Q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,P={id:d++,callback:T,priorityLevel:P,startTime:R,expirationTime:Z,sortIndex:-1},R>Q?(P.sortIndex=R,n(c,P),s(i)===null&&P===s(c)&&(_?(p(N),N=-1):_=!0,Oa(v,R-Q))):(P.sortIndex=Z,n(i,P),j||y||(j=!0,Da(k))),P},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(P){var T=m;return function(){var R=m;m=T;try{return P.apply(this,arguments)}finally{m=R}}}})(Zi);qi.exports=Zi;var Fp=qi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=S,xe=Fp;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ji=new Set,Us={};function Mn(e,n){rs(e,n),rs(e+"Capture",n)}function rs(e,n){for(Us[e]=n,e=0;e<n.length;e++)Ji.add(n[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mo={},go={};function Vp(e){return ml.call(go,e)?!0:ml.call(mo,e)?!1:Bp.test(e)?go[e]=!0:(mo[e]=!0,!1)}function Hp(e,n,s,t){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wp(e,n,s,t){if(n===null||typeof n>"u"||Hp(e,n,s,t))return!0;if(t)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,s,t,a,l,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=r}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var yr=/[\-:]([a-z])/g;function vr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(yr,vr);ae[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(yr,vr);ae[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(yr,vr);ae[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function jr(e,n,s,t){var a=ae.hasOwnProperty(n)?ae[n]:null;(a!==null?a.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Wp(n,s,a,t)&&(s=null),t||a===null?Vp(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(n=a.attributeName,t=a.attributeNamespace,s===null?e.removeAttribute(n):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,t?e.setAttributeNS(t,n,s):e.setAttribute(n,s))))}var en=Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mt=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),_r=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),nc=Symbol.for("react.context"),wr=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),xr=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),sc=Symbol.for("react.offscreen"),yo=Symbol.iterator;function _s(e){return e===null||typeof e!="object"?null:(e=yo&&e[yo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Fa;function Ps(e){if(Fa===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Fa=n&&n[1]||""}return`
`+Fa+e}var Ua=!1;function Ba(e,n){if(!e||Ua)return"";Ua=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var t=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){t=c}e.call(n.prototype)}else{try{throw Error()}catch(c){t=c}e()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),l=t.stack.split(`
`),r=a.length-1,o=l.length-1;1<=r&&0<=o&&a[r]!==l[o];)o--;for(;1<=r&&0<=o;r--,o--)if(a[r]!==l[o]){if(r!==1||o!==1)do if(r--,o--,0>o||a[r]!==l[o]){var i=`
`+a[r].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=r&&0<=o);break}}}finally{Ua=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?Ps(e):""}function Qp(e){switch(e.tag){case 5:return Ps(e.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return e=Ba(e.type,!1),e;case 11:return e=Ba(e.type.render,!1),e;case 1:return e=Ba(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Bn:return"Portal";case gl:return"Profiler";case _r:return"StrictMode";case yl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nc:return(e.displayName||"Context")+".Consumer";case ec:return(e._context.displayName||"Context")+".Provider";case wr:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xr:return n=e.displayName||null,n!==null?n:jl(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return jl(e(n))}catch{}}return null}function Yp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(n);case 8:return n===_r?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kp(e){var n=tc(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,l=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(r){t=""+r,l.call(this,r)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gt(e){e._valueTracker||(e._valueTracker=Kp(e))}function ac(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),t="";return e&&(t=tc(e)?e.checked?"true":"false":e.value),e=t,e!==s?(n.setValue(e),!0):!1}function Ht(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _l(e,n){var s=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function vo(e,n){var s=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;s=vn(n.value!=null?n.value:s),e._wrapperState={initialChecked:t,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function lc(e,n){n=n.checked,n!=null&&jr(e,"checked",n,!1)}function wl(e,n){lc(e,n);var s=vn(n.value),t=n.type;if(s!=null)t==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?xl(e,n.type,s):n.hasOwnProperty("defaultValue")&&xl(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function jo(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function xl(e,n,s){(n!=="number"||Ht(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Ns=Array.isArray;function es(e,n,s,t){if(e=e.options,n){n={};for(var a=0;a<s.length;a++)n["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=n.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&t&&(e[s].defaultSelected=!0)}else{for(s=""+vn(s),n=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function kl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(w(92));if(Ns(s)){if(1<s.length)throw Error(w(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:vn(s)}}function rc(e,n){var s=vn(n.value),t=vn(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),t!=null&&(e.defaultValue=""+t)}function wo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?oc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yt,ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,t,a){MSApp.execUnsafeLocalFunction(function(){return e(n,s,t,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yt=yt||document.createElement("div"),yt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bs(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xp=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(e){Xp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$s[n]=$s[e]})});function cc(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||$s.hasOwnProperty(e)&&$s[e]?(""+n).trim():n+"px"}function uc(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var t=s.indexOf("--")===0,a=cc(s,n[s],t);s==="float"&&(s="cssFloat"),t?e.setProperty(s,a):e[s]=a}}var Gp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(e,n){if(n){if(Gp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Cl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,ns=null,ss=null;function xo(e){if(e=ct(e)){if(typeof Pl!="function")throw Error(w(280));var n=e.stateNode;n&&(n=wa(n),Pl(e.stateNode,e.type,n))}}function pc(e){ns?ss?ss.push(e):ss=[e]:ns=e}function dc(){if(ns){var e=ns,n=ss;if(ss=ns=null,xo(e),n)for(e=0;e<n.length;e++)xo(n[e])}}function fc(e,n){return e(n)}function hc(){}var Va=!1;function mc(e,n,s){if(Va)return e(n,s);Va=!0;try{return fc(e,n,s)}finally{Va=!1,(ns!==null||ss!==null)&&(hc(),dc())}}function Vs(e,n){var s=e.stateNode;if(s===null)return null;var t=wa(s);if(t===null)return null;s=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(w(231,n,typeof s));return s}var Nl=!1;if(Ge)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Nl=!1}function qp(e,n,s,t,a,l,r,o,i){var c=Array.prototype.slice.call(arguments,3);try{n.apply(s,c)}catch(d){this.onError(d)}}var Ls=!1,Wt=null,Qt=!1,Tl=null,Zp={onError:function(e){Ls=!0,Wt=e}};function Jp(e,n,s,t,a,l,r,o,i){Ls=!1,Wt=null,qp.apply(Zp,arguments)}function ed(e,n,s,t,a,l,r,o,i){if(Jp.apply(this,arguments),Ls){if(Ls){var c=Wt;Ls=!1,Wt=null}else throw Error(w(198));Qt||(Qt=!0,Tl=c)}}function An(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function gc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ko(e){if(An(e)!==e)throw Error(w(188))}function nd(e){var n=e.alternate;if(!n){if(n=An(e),n===null)throw Error(w(188));return n!==e?null:e}for(var s=e,t=n;;){var a=s.return;if(a===null)break;var l=a.alternate;if(l===null){if(t=a.return,t!==null){s=t;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===s)return ko(a),e;if(l===t)return ko(a),n;l=l.sibling}throw Error(w(188))}if(s.return!==t.return)s=a,t=l;else{for(var r=!1,o=a.child;o;){if(o===s){r=!0,s=a,t=l;break}if(o===t){r=!0,t=a,s=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===s){r=!0,s=l,t=a;break}if(o===t){r=!0,t=l,s=a;break}o=o.sibling}if(!r)throw Error(w(189))}}if(s.alternate!==t)throw Error(w(190))}if(s.tag!==3)throw Error(w(188));return s.stateNode.current===s?e:n}function yc(e){return e=nd(e),e!==null?vc(e):null}function vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=vc(e);if(n!==null)return n;e=e.sibling}return null}var jc=xe.unstable_scheduleCallback,So=xe.unstable_cancelCallback,sd=xe.unstable_shouldYield,td=xe.unstable_requestPaint,Y=xe.unstable_now,ad=xe.unstable_getCurrentPriorityLevel,Sr=xe.unstable_ImmediatePriority,_c=xe.unstable_UserBlockingPriority,Yt=xe.unstable_NormalPriority,ld=xe.unstable_LowPriority,wc=xe.unstable_IdlePriority,ya=null,Be=null;function rd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:cd,od=Math.log,id=Math.LN2;function cd(e){return e>>>=0,e===0?32:31-(od(e)/id|0)|0}var vt=64,jt=4194304;function Ts(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kt(e,n){var s=e.pendingLanes;if(s===0)return 0;var t=0,a=e.suspendedLanes,l=e.pingedLanes,r=s&268435455;if(r!==0){var o=r&~a;o!==0?t=Ts(o):(l&=r,l!==0&&(t=Ts(l)))}else r=s&~a,r!==0?t=Ts(r):l!==0&&(t=Ts(l));if(t===0)return 0;if(n!==0&&n!==t&&!(n&a)&&(a=t&-t,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(t&4&&(t|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)s=31-De(n),a=1<<s,t|=e[s],n&=~a;return t}function ud(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,n){for(var s=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var r=31-De(l),o=1<<r,i=a[r];i===-1?(!(o&s)||o&t)&&(a[r]=ud(o,n)):i<=n&&(e.expiredLanes|=o),l&=~o}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xc(){var e=vt;return vt<<=1,!(vt&4194240)&&(vt=64),e}function Ha(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function ot(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=s}function dd(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-De(s),l=1<<a;n[a]=0,t[a]=-1,e[a]=-1,s&=~l}}function Er(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var t=31-De(s),a=1<<t;a&n|e[t]&n&&(e[t]|=n),s&=~a}}var D=0;function kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sc,Cr,Ec,Cc,bc,$l=!1,_t=[],un=null,pn=null,dn=null,Hs=new Map,Ws=new Map,an=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eo(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Hs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(n.pointerId)}}function xs(e,n,s,t,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:s,eventSystemFlags:t,nativeEvent:l,targetContainers:[a]},n!==null&&(n=ct(n),n!==null&&Cr(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function hd(e,n,s,t,a){switch(n){case"focusin":return un=xs(un,e,n,s,t,a),!0;case"dragenter":return pn=xs(pn,e,n,s,t,a),!0;case"mouseover":return dn=xs(dn,e,n,s,t,a),!0;case"pointerover":var l=a.pointerId;return Hs.set(l,xs(Hs.get(l)||null,e,n,s,t,a)),!0;case"gotpointercapture":return l=a.pointerId,Ws.set(l,xs(Ws.get(l)||null,e,n,s,t,a)),!0}return!1}function Pc(e){var n=bn(e.target);if(n!==null){var s=An(n);if(s!==null){if(n=s.tag,n===13){if(n=gc(s),n!==null){e.blockedOn=n,bc(e.priority,function(){Ec(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function It(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Ll(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var t=new s.constructor(s.type,s);bl=t,s.target.dispatchEvent(t),bl=null}else return n=ct(s),n!==null&&Cr(n),e.blockedOn=s,!1;n.shift()}return!0}function Co(e,n,s){It(e)&&s.delete(n)}function md(){$l=!1,un!==null&&It(un)&&(un=null),pn!==null&&It(pn)&&(pn=null),dn!==null&&It(dn)&&(dn=null),Hs.forEach(Co),Ws.forEach(Co)}function ks(e,n){e.blockedOn===n&&(e.blockedOn=null,$l||($l=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,md)))}function Qs(e){function n(a){return ks(a,e)}if(0<_t.length){ks(_t[0],e);for(var s=1;s<_t.length;s++){var t=_t[s];t.blockedOn===e&&(t.blockedOn=null)}}for(un!==null&&ks(un,e),pn!==null&&ks(pn,e),dn!==null&&ks(dn,e),Hs.forEach(n),Ws.forEach(n),s=0;s<an.length;s++)t=an[s],t.blockedOn===e&&(t.blockedOn=null);for(;0<an.length&&(s=an[0],s.blockedOn===null);)Pc(s),s.blockedOn===null&&an.shift()}var ts=en.ReactCurrentBatchConfig,Xt=!0;function gd(e,n,s,t){var a=D,l=ts.transition;ts.transition=null;try{D=1,br(e,n,s,t)}finally{D=a,ts.transition=l}}function yd(e,n,s,t){var a=D,l=ts.transition;ts.transition=null;try{D=4,br(e,n,s,t)}finally{D=a,ts.transition=l}}function br(e,n,s,t){if(Xt){var a=Ll(e,n,s,t);if(a===null)el(e,n,t,Gt,s),Eo(e,t);else if(hd(a,e,n,s,t))t.stopPropagation();else if(Eo(e,t),n&4&&-1<fd.indexOf(e)){for(;a!==null;){var l=ct(a);if(l!==null&&Sc(l),l=Ll(e,n,s,t),l===null&&el(e,n,t,Gt,s),l===a)break;a=l}a!==null&&t.stopPropagation()}else el(e,n,t,null,s)}}var Gt=null;function Ll(e,n,s,t){if(Gt=null,e=kr(t),e=bn(e),e!==null)if(n=An(e),n===null)e=null;else if(s=n.tag,s===13){if(e=gc(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Gt=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case Sr:return 1;case _c:return 4;case Yt:case ld:return 16;case wc:return 536870912;default:return 16}default:return 16}}var rn=null,Pr=null,zt=null;function Tc(){if(zt)return zt;var e,n=Pr,s=n.length,t,a="value"in rn?rn.value:rn.textContent,l=a.length;for(e=0;e<s&&n[e]===a[e];e++);var r=s-e;for(t=1;t<=r&&n[s-t]===a[l-t];t++);return zt=a.slice(e,1<t?1-t:void 0)}function Dt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wt(){return!0}function bo(){return!1}function Se(e){function n(s,t,a,l,r){this._reactName=s,this._targetInst=a,this.type=t,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(s=e[o],this[o]=s?s(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wt:bo,this.isPropagationStopped=bo,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=wt)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=wt)},persist:function(){},isPersistent:wt}),n}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nr=Se(hs),it=H({},hs,{view:0,detail:0}),vd=Se(it),Wa,Qa,Ss,va=H({},it,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ss&&(Ss&&e.type==="mousemove"?(Wa=e.screenX-Ss.screenX,Qa=e.screenY-Ss.screenY):Qa=Wa=0,Ss=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:Qa}}),Po=Se(va),jd=H({},va,{dataTransfer:0}),_d=Se(jd),wd=H({},it,{relatedTarget:0}),Ya=Se(wd),xd=H({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Se(xd),Sd=H({},hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ed=Se(Sd),Cd=H({},hs,{data:0}),No=Se(Cd),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nd[e])?!!n[e]:!1}function Tr(){return Td}var Rd=H({},it,{key:function(e){if(e.key){var n=bd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return e.type==="keypress"?Dt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$d=Se(Rd),Ld=H({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),To=Se(Ld),Id=H({},it,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),zd=Se(Id),Dd=H({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Se(Dd),Md=H({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=Se(Md),Fd=[9,13,27,32],Rr=Ge&&"CompositionEvent"in window,Is=null;Ge&&"documentMode"in document&&(Is=document.documentMode);var Ud=Ge&&"TextEvent"in window&&!Is,Rc=Ge&&(!Rr||Is&&8<Is&&11>=Is),Ro=" ",$o=!1;function $c(e,n){switch(e){case"keyup":return Fd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Bd(e,n){switch(e){case"compositionend":return Lc(n);case"keypress":return n.which!==32?null:($o=!0,Ro);case"textInput":return e=n.data,e===Ro&&$o?null:e;default:return null}}function Vd(e,n){if(Hn)return e==="compositionend"||!Rr&&$c(e,n)?(e=Tc(),zt=Pr=rn=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rc&&n.locale!=="ko"?null:n.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hd[e.type]:n==="textarea"}function Ic(e,n,s,t){pc(t),n=qt(n,"onChange"),0<n.length&&(s=new Nr("onChange","change",null,s,t),e.push({event:s,listeners:n}))}var zs=null,Ys=null;function Wd(e){Wc(e,0)}function ja(e){var n=Yn(e);if(ac(n))return e}function Qd(e,n){if(e==="change")return n}var zc=!1;if(Ge){var Ka;if(Ge){var Xa="oninput"in document;if(!Xa){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),Xa=typeof Io.oninput=="function"}Ka=Xa}else Ka=!1;zc=Ka&&(!document.documentMode||9<document.documentMode)}function zo(){zs&&(zs.detachEvent("onpropertychange",Dc),Ys=zs=null)}function Dc(e){if(e.propertyName==="value"&&ja(Ys)){var n=[];Ic(n,Ys,e,kr(e)),mc(Wd,n)}}function Yd(e,n,s){e==="focusin"?(zo(),zs=n,Ys=s,zs.attachEvent("onpropertychange",Dc)):e==="focusout"&&zo()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(Ys)}function Xd(e,n){if(e==="click")return ja(n)}function Gd(e,n){if(e==="input"||e==="change")return ja(n)}function qd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:qd;function Ks(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),t=Object.keys(n);if(s.length!==t.length)return!1;for(t=0;t<s.length;t++){var a=s[t];if(!ml.call(n,a)||!Me(e[a],n[a]))return!1}return!0}function Do(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oo(e,n){var s=Do(e);e=0;for(var t;s;){if(s.nodeType===3){if(t=e+s.textContent.length,e<=n&&t>=n)return{node:s,offset:n-e};e=t}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Do(s)}}function Oc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Oc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mc(){for(var e=window,n=Ht();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Ht(e.document)}return n}function $r(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zd(e){var n=Mc(),s=e.focusedElem,t=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Oc(s.ownerDocument.documentElement,s)){if(t!==null&&$r(s)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,l=Math.min(t.start,a);t=t.end===void 0?l:Math.min(t.end,a),!e.extend&&l>t&&(a=t,t=l,l=a),a=Oo(s,l);var r=Oo(s,t);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>t?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=Ge&&"documentMode"in document&&11>=document.documentMode,Wn=null,Il=null,Ds=null,zl=!1;function Mo(e,n,s){var t=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;zl||Wn==null||Wn!==Ht(t)||(t=Wn,"selectionStart"in t&&$r(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Ds&&Ks(Ds,t)||(Ds=t,t=qt(Il,"onSelect"),0<t.length&&(n=new Nr("onSelect","select",null,n,s),e.push({event:n,listeners:t}),n.target=Wn)))}function xt(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Qn={animationend:xt("Animation","AnimationEnd"),animationiteration:xt("Animation","AnimationIteration"),animationstart:xt("Animation","AnimationStart"),transitionend:xt("Transition","TransitionEnd")},Ga={},Ac={};Ge&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function _a(e){if(Ga[e])return Ga[e];if(!Qn[e])return e;var n=Qn[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Ac)return Ga[e]=n[s];return e}var Fc=_a("animationend"),Uc=_a("animationiteration"),Bc=_a("animationstart"),Vc=_a("transitionend"),Hc=new Map,Ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,n){Hc.set(e,n),Mn(n,[e])}for(var qa=0;qa<Ao.length;qa++){var Za=Ao[qa],ef=Za.toLowerCase(),nf=Za[0].toUpperCase()+Za.slice(1);_n(ef,"on"+nf)}_n(Fc,"onAnimationEnd");_n(Uc,"onAnimationIteration");_n(Bc,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Vc,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Fo(e,n,s){var t=e.type||"unknown-event";e.currentTarget=s,ed(t,n,void 0,e),e.currentTarget=null}function Wc(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var t=e[s],a=t.event;t=t.listeners;e:{var l=void 0;if(n)for(var r=t.length-1;0<=r;r--){var o=t[r],i=o.instance,c=o.currentTarget;if(o=o.listener,i!==l&&a.isPropagationStopped())break e;Fo(a,o,c),l=i}else for(r=0;r<t.length;r++){if(o=t[r],i=o.instance,c=o.currentTarget,o=o.listener,i!==l&&a.isPropagationStopped())break e;Fo(a,o,c),l=i}}}if(Qt)throw e=Tl,Qt=!1,Tl=null,e}function M(e,n){var s=n[Fl];s===void 0&&(s=n[Fl]=new Set);var t=e+"__bubble";s.has(t)||(Qc(n,e,2,!1),s.add(t))}function Ja(e,n,s){var t=0;n&&(t|=4),Qc(s,e,t,n)}var kt="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[kt]){e[kt]=!0,Ji.forEach(function(s){s!=="selectionchange"&&(sf.has(s)||Ja(s,!1,e),Ja(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kt]||(n[kt]=!0,Ja("selectionchange",!1,n))}}function Qc(e,n,s,t){switch(Nc(n)){case 1:var a=gd;break;case 4:a=yd;break;default:a=br}s=a.bind(null,n,s,e),a=void 0,!Nl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(n,s,{capture:!0,passive:a}):e.addEventListener(n,s,!0):a!==void 0?e.addEventListener(n,s,{passive:a}):e.addEventListener(n,s,!1)}function el(e,n,s,t,a){var l=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var r=t.tag;if(r===3||r===4){var o=t.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(r===4)for(r=t.return;r!==null;){var i=r.tag;if((i===3||i===4)&&(i=r.stateNode.containerInfo,i===a||i.nodeType===8&&i.parentNode===a))return;r=r.return}for(;o!==null;){if(r=bn(o),r===null)return;if(i=r.tag,i===5||i===6){t=l=r;continue e}o=o.parentNode}}t=t.return}mc(function(){var c=l,d=kr(s),f=[];e:{var m=Hc.get(e);if(m!==void 0){var y=Nr,j=e;switch(e){case"keypress":if(Dt(s)===0)break e;case"keydown":case"keyup":y=$d;break;case"focusin":j="focus",y=Ya;break;case"focusout":j="blur",y=Ya;break;case"beforeblur":case"afterblur":y=Ya;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zd;break;case Fc:case Uc:case Bc:y=kd;break;case Vc:y=Od;break;case"scroll":y=vd;break;case"wheel":y=Ad;break;case"copy":case"cut":case"paste":y=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=To}var _=(n&4)!==0,E=!_&&e==="scroll",p=_?m!==null?m+"Capture":null:m;_=[];for(var u=c,h;u!==null;){h=u;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,p!==null&&(v=Vs(u,p),v!=null&&_.push(Gs(u,v,h)))),E)break;u=u.return}0<_.length&&(m=new y(m,j,null,s,d),f.push({event:m,listeners:_}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&s!==bl&&(j=s.relatedTarget||s.fromElement)&&(bn(j)||j[qe]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(j=s.relatedTarget||s.toElement,y=c,j=j?bn(j):null,j!==null&&(E=An(j),j!==E||j.tag!==5&&j.tag!==6)&&(j=null)):(y=null,j=c),y!==j)){if(_=Po,v="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(_=To,v="onPointerLeave",p="onPointerEnter",u="pointer"),E=y==null?m:Yn(y),h=j==null?m:Yn(j),m=new _(v,u+"leave",y,s,d),m.target=E,m.relatedTarget=h,v=null,bn(d)===c&&(_=new _(p,u+"enter",j,s,d),_.target=h,_.relatedTarget=E,v=_),E=v,y&&j)n:{for(_=y,p=j,u=0,h=_;h;h=Fn(h))u++;for(h=0,v=p;v;v=Fn(v))h++;for(;0<u-h;)_=Fn(_),u--;for(;0<h-u;)p=Fn(p),h--;for(;u--;){if(_===p||p!==null&&_===p.alternate)break n;_=Fn(_),p=Fn(p)}_=null}else _=null;y!==null&&Uo(f,m,y,_,!1),j!==null&&E!==null&&Uo(f,E,j,_,!0)}}e:{if(m=c?Yn(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=Qd;else if(Lo(m))if(zc)k=Gd;else{k=Kd;var x=Yd}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Xd);if(k&&(k=k(e,c))){Ic(f,k,s,d);break e}x&&x(e,m,c),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&xl(m,"number",m.value)}switch(x=c?Yn(c):window,e){case"focusin":(Lo(x)||x.contentEditable==="true")&&(Wn=x,Il=c,Ds=null);break;case"focusout":Ds=Il=Wn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Mo(f,s,d);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":Mo(f,s,d)}var C;if(Rr)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Hn?$c(e,s)&&(N="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(N="onCompositionStart");N&&(Rc&&s.locale!=="ko"&&(Hn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Hn&&(C=Tc()):(rn=d,Pr="value"in rn?rn.value:rn.textContent,Hn=!0)),x=qt(c,N),0<x.length&&(N=new No(N,e,null,s,d),f.push({event:N,listeners:x}),C?N.data=C:(C=Lc(s),C!==null&&(N.data=C)))),(C=Ud?Bd(e,s):Vd(e,s))&&(c=qt(c,"onBeforeInput"),0<c.length&&(d=new No("onBeforeInput","beforeinput",null,s,d),f.push({event:d,listeners:c}),d.data=C))}Wc(f,n)})}function Gs(e,n,s){return{instance:e,listener:n,currentTarget:s}}function qt(e,n){for(var s=n+"Capture",t=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Vs(e,s),l!=null&&t.unshift(Gs(e,l,a)),l=Vs(e,n),l!=null&&t.push(Gs(e,l,a))),e=e.return}return t}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uo(e,n,s,t,a){for(var l=n._reactName,r=[];s!==null&&s!==t;){var o=s,i=o.alternate,c=o.stateNode;if(i!==null&&i===t)break;o.tag===5&&c!==null&&(o=c,a?(i=Vs(s,l),i!=null&&r.unshift(Gs(s,i,o))):a||(i=Vs(s,l),i!=null&&r.push(Gs(s,i,o)))),s=s.return}r.length!==0&&e.push({event:n,listeners:r})}var tf=/\r\n?/g,af=/\u0000|\uFFFD/g;function Bo(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(af,"")}function St(e,n,s){if(n=Bo(n),Bo(e)!==n&&s)throw Error(w(425))}function Zt(){}var Dl=null,Ol=null;function Ml(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,lf=typeof clearTimeout=="function"?clearTimeout:void 0,Vo=typeof Promise=="function"?Promise:void 0,rf=typeof queueMicrotask=="function"?queueMicrotask:typeof Vo<"u"?function(e){return Vo.resolve(null).then(e).catch(of)}:Al;function of(e){setTimeout(function(){throw e})}function nl(e,n){var s=n,t=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(t===0){e.removeChild(a),Qs(n);return}t--}else s!=="$"&&s!=="$?"&&s!=="$!"||t++;s=a}while(s);Qs(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ho(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var ms=Math.random().toString(36).slice(2),Ue="__reactFiber$"+ms,qs="__reactProps$"+ms,qe="__reactContainer$"+ms,Fl="__reactEvents$"+ms,cf="__reactListeners$"+ms,uf="__reactHandles$"+ms;function bn(e){var n=e[Ue];if(n)return n;for(var s=e.parentNode;s;){if(n=s[qe]||s[Ue]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=Ho(e);e!==null;){if(s=e[Ue])return s;e=Ho(e)}return n}e=s,s=e.parentNode}return null}function ct(e){return e=e[Ue]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function wa(e){return e[qs]||null}var Ul=[],Kn=-1;function wn(e){return{current:e}}function A(e){0>Kn||(e.current=Ul[Kn],Ul[Kn]=null,Kn--)}function O(e,n){Kn++,Ul[Kn]=e.current,e.current=n}var jn={},ie=wn(jn),me=wn(!1),Ln=jn;function os(e,n){var s=e.type.contextTypes;if(!s)return jn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in s)a[l]=n[l];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function ge(e){return e=e.childContextTypes,e!=null}function Jt(){A(me),A(ie)}function Wo(e,n,s){if(ie.current!==jn)throw Error(w(168));O(ie,n),O(me,s)}function Yc(e,n,s){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return s;t=t.getChildContext();for(var a in t)if(!(a in n))throw Error(w(108,Yp(e)||"Unknown",a));return H({},s,t)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Ln=ie.current,O(ie,e),O(me,me.current),!0}function Qo(e,n,s){var t=e.stateNode;if(!t)throw Error(w(169));s?(e=Yc(e,n,Ln),t.__reactInternalMemoizedMergedChildContext=e,A(me),A(ie),O(ie,e)):A(me),O(me,s)}var Qe=null,xa=!1,sl=!1;function Kc(e){Qe===null?Qe=[e]:Qe.push(e)}function pf(e){xa=!0,Kc(e)}function xn(){if(!sl&&Qe!==null){sl=!0;var e=0,n=D;try{var s=Qe;for(D=1;e<s.length;e++){var t=s[e];do t=t(!0);while(t!==null)}Qe=null,xa=!1}catch(a){throw Qe!==null&&(Qe=Qe.slice(e+1)),jc(Sr,xn),a}finally{D=n,sl=!1}}return null}var Xn=[],Gn=0,na=null,sa=0,Ee=[],Ce=0,In=null,Ye=1,Ke="";function En(e,n){Xn[Gn++]=sa,Xn[Gn++]=na,na=e,sa=n}function Xc(e,n,s){Ee[Ce++]=Ye,Ee[Ce++]=Ke,Ee[Ce++]=In,In=e;var t=Ye;e=Ke;var a=32-De(t)-1;t&=~(1<<a),s+=1;var l=32-De(n)+a;if(30<l){var r=a-a%5;l=(t&(1<<r)-1).toString(32),t>>=r,a-=r,Ye=1<<32-De(n)+a|s<<a|t,Ke=l+e}else Ye=1<<l|s<<a|t,Ke=e}function Lr(e){e.return!==null&&(En(e,1),Xc(e,1,0))}function Ir(e){for(;e===na;)na=Xn[--Gn],Xn[Gn]=null,sa=Xn[--Gn],Xn[Gn]=null;for(;e===In;)In=Ee[--Ce],Ee[Ce]=null,Ke=Ee[--Ce],Ee[Ce]=null,Ye=Ee[--Ce],Ee[Ce]=null}var we=null,_e=null,U=!1,ze=null;function Gc(e,n){var s=be(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function Yo(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,_e=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=In!==null?{id:Ye,overflow:Ke}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=be(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,we=e,_e=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(U){var n=_e;if(n){var s=n;if(!Yo(e,n)){if(Bl(e))throw Error(w(418));n=fn(s.nextSibling);var t=we;n&&Yo(e,n)?Gc(t,s):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Bl(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function Ko(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Et(e){if(e!==we)return!1;if(!U)return Ko(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ml(e.type,e.memoizedProps)),n&&(n=_e)){if(Bl(e))throw qc(),Error(w(418));for(;n;)Gc(e,n),n=fn(n.nextSibling)}if(Ko(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){_e=fn(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=we?fn(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=_e;e;)e=fn(e.nextSibling)}function is(){_e=we=null,U=!1}function zr(e){ze===null?ze=[e]:ze.push(e)}var df=en.ReactCurrentBatchConfig;function Es(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(w(309));var t=s.stateNode}if(!t)throw Error(w(147,e));var a=t,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(r){var o=a.refs;r===null?delete o[l]:o[l]=r},n._stringRef=l,n)}if(typeof e!="string")throw Error(w(284));if(!s._owner)throw Error(w(290,e))}return e}function Ct(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xo(e){var n=e._init;return n(e._payload)}function Zc(e){function n(p,u){if(e){var h=p.deletions;h===null?(p.deletions=[u],p.flags|=16):h.push(u)}}function s(p,u){if(!e)return null;for(;u!==null;)n(p,u),u=u.sibling;return null}function t(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function a(p,u){return p=yn(p,u),p.index=0,p.sibling=null,p}function l(p,u,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<u?(p.flags|=2,u):h):(p.flags|=2,u)):(p.flags|=1048576,u)}function r(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,u,h,v){return u===null||u.tag!==6?(u=cl(h,p.mode,v),u.return=p,u):(u=a(u,h),u.return=p,u)}function i(p,u,h,v){var k=h.type;return k===Vn?d(p,u,h.props.children,v,h.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sn&&Xo(k)===u.type)?(v=a(u,h.props),v.ref=Es(p,u,h),v.return=p,v):(v=Vt(h.type,h.key,h.props,null,p.mode,v),v.ref=Es(p,u,h),v.return=p,v)}function c(p,u,h,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=ul(h,p.mode,v),u.return=p,u):(u=a(u,h.children||[]),u.return=p,u)}function d(p,u,h,v,k){return u===null||u.tag!==7?(u=Rn(h,p.mode,v,k),u.return=p,u):(u=a(u,h),u.return=p,u)}function f(p,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=cl(""+u,p.mode,h),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case mt:return h=Vt(u.type,u.key,u.props,null,p.mode,h),h.ref=Es(p,null,u),h.return=p,h;case Bn:return u=ul(u,p.mode,h),u.return=p,u;case sn:var v=u._init;return f(p,v(u._payload),h)}if(Ns(u)||_s(u))return u=Rn(u,p.mode,h,null),u.return=p,u;Ct(p,u)}return null}function m(p,u,h,v){var k=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:o(p,u,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mt:return h.key===k?i(p,u,h,v):null;case Bn:return h.key===k?c(p,u,h,v):null;case sn:return k=h._init,m(p,u,k(h._payload),v)}if(Ns(h)||_s(h))return k!==null?null:d(p,u,h,v,null);Ct(p,h)}return null}function y(p,u,h,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(h)||null,o(u,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mt:return p=p.get(v.key===null?h:v.key)||null,i(u,p,v,k);case Bn:return p=p.get(v.key===null?h:v.key)||null,c(u,p,v,k);case sn:var x=v._init;return y(p,u,h,x(v._payload),k)}if(Ns(v)||_s(v))return p=p.get(h)||null,d(u,p,v,k,null);Ct(u,v)}return null}function j(p,u,h,v){for(var k=null,x=null,C=u,N=u=0,F=null;C!==null&&N<h.length;N++){C.index>N?(F=C,C=null):F=C.sibling;var I=m(p,C,h[N],v);if(I===null){C===null&&(C=F);break}e&&C&&I.alternate===null&&n(p,C),u=l(I,u,N),x===null?k=I:x.sibling=I,x=I,C=F}if(N===h.length)return s(p,C),U&&En(p,N),k;if(C===null){for(;N<h.length;N++)C=f(p,h[N],v),C!==null&&(u=l(C,u,N),x===null?k=C:x.sibling=C,x=C);return U&&En(p,N),k}for(C=t(p,C);N<h.length;N++)F=y(C,p,N,h[N],v),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?N:F.key),u=l(F,u,N),x===null?k=F:x.sibling=F,x=F);return e&&C.forEach(function(Re){return n(p,Re)}),U&&En(p,N),k}function _(p,u,h,v){var k=_s(h);if(typeof k!="function")throw Error(w(150));if(h=k.call(h),h==null)throw Error(w(151));for(var x=k=null,C=u,N=u=0,F=null,I=h.next();C!==null&&!I.done;N++,I=h.next()){C.index>N?(F=C,C=null):F=C.sibling;var Re=m(p,C,I.value,v);if(Re===null){C===null&&(C=F);break}e&&C&&Re.alternate===null&&n(p,C),u=l(Re,u,N),x===null?k=Re:x.sibling=Re,x=Re,C=F}if(I.done)return s(p,C),U&&En(p,N),k;if(C===null){for(;!I.done;N++,I=h.next())I=f(p,I.value,v),I!==null&&(u=l(I,u,N),x===null?k=I:x.sibling=I,x=I);return U&&En(p,N),k}for(C=t(p,C);!I.done;N++,I=h.next())I=y(C,p,N,I.value,v),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?N:I.key),u=l(I,u,N),x===null?k=I:x.sibling=I,x=I);return e&&C.forEach(function(vs){return n(p,vs)}),U&&En(p,N),k}function E(p,u,h,v){if(typeof h=="object"&&h!==null&&h.type===Vn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mt:e:{for(var k=h.key,x=u;x!==null;){if(x.key===k){if(k=h.type,k===Vn){if(x.tag===7){s(p,x.sibling),u=a(x,h.props.children),u.return=p,p=u;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sn&&Xo(k)===x.type){s(p,x.sibling),u=a(x,h.props),u.ref=Es(p,x,h),u.return=p,p=u;break e}s(p,x);break}else n(p,x);x=x.sibling}h.type===Vn?(u=Rn(h.props.children,p.mode,v,h.key),u.return=p,p=u):(v=Vt(h.type,h.key,h.props,null,p.mode,v),v.ref=Es(p,u,h),v.return=p,p=v)}return r(p);case Bn:e:{for(x=h.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){s(p,u.sibling),u=a(u,h.children||[]),u.return=p,p=u;break e}else{s(p,u);break}else n(p,u);u=u.sibling}u=ul(h,p.mode,v),u.return=p,p=u}return r(p);case sn:return x=h._init,E(p,u,x(h._payload),v)}if(Ns(h))return j(p,u,h,v);if(_s(h))return _(p,u,h,v);Ct(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(s(p,u.sibling),u=a(u,h),u.return=p,p=u):(s(p,u),u=cl(h,p.mode,v),u.return=p,p=u),r(p)):s(p,u)}return E}var cs=Zc(!0),Jc=Zc(!1),ta=wn(null),aa=null,qn=null,Dr=null;function Or(){Dr=qn=aa=null}function Mr(e){var n=ta.current;A(ta),e._currentValue=n}function Hl(e,n,s){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===s)break;e=e.return}}function as(e,n){aa=e,Dr=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Dr!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(aa===null)throw Error(w(308));qn=e,aa.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var Pn=null;function Ar(e){Pn===null?Pn=[e]:Pn.push(e)}function eu(e,n,s,t){var a=n.interleaved;return a===null?(s.next=s,Ar(n)):(s.next=a.next,a.next=s),n.interleaved=s,Ze(e,t)}function Ze(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var tn=!1;function Fr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,s){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,z&2){var a=t.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n,Ze(e,s)}return a=t.interleaved,a===null?(n.next=n,Ar(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ze(e,s)}function Ot(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,s|=t,n.lanes=s,Er(e,s)}}function Go(e,n){var s=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,s===t)){var a=null,l=null;if(s=s.firstBaseUpdate,s!==null){do{var r={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};l===null?a=l=r:l=l.next=r,s=s.next}while(s!==null);l===null?a=l=n:l=l.next=n}else a=l=n;s={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:t.shared,effects:t.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function la(e,n,s,t){var a=e.updateQueue;tn=!1;var l=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var i=o,c=i.next;i.next=null,r===null?l=c:r.next=c,r=i;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=i))}if(l!==null){var f=a.baseState;r=0,d=c=i=null,o=l;do{var m=o.lane,y=o.eventTime;if((t&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=e,_=o;switch(m=n,y=s,_.tag){case 1:if(j=_.payload,typeof j=="function"){f=j.call(y,f,m);break e}f=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=_.payload,m=typeof j=="function"?j.call(y,f,m):j,m==null)break e;f=H({},f,m);break e;case 2:tn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else y={eventTime:y,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=y,i=f):d=d.next=y,r|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(d===null&&(i=f),a.baseState=i,a.firstBaseUpdate=c,a.lastBaseUpdate=d,n=a.shared.interleaved,n!==null){a=n;do r|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);Dn|=r,e.lanes=r,e.memoizedState=f}}function qo(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],a=t.callback;if(a!==null){if(t.callback=null,t=s,typeof a!="function")throw Error(w(191,a));a.call(t)}}}var ut={},Ve=wn(ut),Zs=wn(ut),Js=wn(ut);function Nn(e){if(e===ut)throw Error(w(174));return e}function Ur(e,n){switch(O(Js,n),O(Zs,e),O(Ve,ut),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Sl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Sl(n,e)}A(Ve),O(Ve,n)}function us(){A(Ve),A(Zs),A(Js)}function su(e){Nn(Js.current);var n=Nn(Ve.current),s=Sl(n,e.type);n!==s&&(O(Zs,e),O(Ve,s))}function Br(e){Zs.current===e&&(A(Ve),A(Zs))}var B=wn(0);function ra(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var tl=[];function Vr(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Mt=en.ReactCurrentDispatcher,al=en.ReactCurrentBatchConfig,zn=0,V=null,X=null,J=null,oa=!1,Os=!1,et=0,ff=0;function le(){throw Error(w(321))}function Hr(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Me(e[s],n[s]))return!1;return!0}function Wr(e,n,s,t,a,l){if(zn=l,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.current=e===null||e.memoizedState===null?yf:vf,e=s(t,a),Os){l=0;do{if(Os=!1,et=0,25<=l)throw Error(w(301));l+=1,J=X=null,n.updateQueue=null,Mt.current=jf,e=s(t,a)}while(Os)}if(Mt.current=ia,n=X!==null&&X.next!==null,zn=0,J=X=V=null,oa=!1,n)throw Error(w(300));return e}function Qr(){var e=et!==0;return et=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function Te(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=J===null?V.memoizedState:J.next;if(n!==null)J=n,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function nt(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=Te(),s=n.queue;if(s===null)throw Error(w(311));s.lastRenderedReducer=e;var t=X,a=t.baseQueue,l=s.pending;if(l!==null){if(a!==null){var r=a.next;a.next=l.next,l.next=r}t.baseQueue=a=l,s.pending=null}if(a!==null){l=a.next,t=t.baseState;var o=r=null,i=null,c=l;do{var d=c.lane;if((zn&d)===d)i!==null&&(i=i.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:e(t,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};i===null?(o=i=f,r=t):i=i.next=f,V.lanes|=d,Dn|=d}c=c.next}while(c!==null&&c!==l);i===null?r=t:i.next=o,Me(t,n.memoizedState)||(he=!0),n.memoizedState=t,n.baseState=r,n.baseQueue=i,s.lastRenderedState=t}if(e=s.interleaved,e!==null){a=e;do l=a.lane,V.lanes|=l,Dn|=l,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function rl(e){var n=Te(),s=n.queue;if(s===null)throw Error(w(311));s.lastRenderedReducer=e;var t=s.dispatch,a=s.pending,l=n.memoizedState;if(a!==null){s.pending=null;var r=a=a.next;do l=e(l,r.action),r=r.next;while(r!==a);Me(l,n.memoizedState)||(he=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),s.lastRenderedState=l}return[l,t]}function tu(){}function au(e,n){var s=V,t=Te(),a=n(),l=!Me(t.memoizedState,a);if(l&&(t.memoizedState=a,he=!0),t=t.queue,Yr(ou.bind(null,s,t,e),[e]),t.getSnapshot!==n||l||J!==null&&J.memoizedState.tag&1){if(s.flags|=2048,st(9,ru.bind(null,s,t,a,n),void 0,null),ee===null)throw Error(w(349));zn&30||lu(s,n,a)}return a}function lu(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function ru(e,n,s,t){n.value=s,n.getSnapshot=t,iu(n)&&cu(e)}function ou(e,n,s){return s(function(){iu(n)&&cu(e)})}function iu(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Me(e,s)}catch{return!0}}function cu(e){var n=Ze(e,1);n!==null&&Oe(n,e,1,-1)}function Zo(e){var n=Fe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:e},n.queue=e,e=e.dispatch=gf.bind(null,V,e),[n.memoizedState,e]}function st(e,n,s,t){return e={tag:e,create:n,destroy:s,deps:t,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(t=s.next,s.next=e,e.next=t,n.lastEffect=e)),e}function uu(){return Te().memoizedState}function At(e,n,s,t){var a=Fe();V.flags|=e,a.memoizedState=st(1|n,s,void 0,t===void 0?null:t)}function ka(e,n,s,t){var a=Te();t=t===void 0?null:t;var l=void 0;if(X!==null){var r=X.memoizedState;if(l=r.destroy,t!==null&&Hr(t,r.deps)){a.memoizedState=st(n,s,l,t);return}}V.flags|=e,a.memoizedState=st(1|n,s,l,t)}function Jo(e,n){return At(8390656,8,e,n)}function Yr(e,n){return ka(2048,8,e,n)}function pu(e,n){return ka(4,2,e,n)}function du(e,n){return ka(4,4,e,n)}function fu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hu(e,n,s){return s=s!=null?s.concat([e]):null,ka(4,4,fu.bind(null,n,e),s)}function Kr(){}function mu(e,n){var s=Te();n=n===void 0?null:n;var t=s.memoizedState;return t!==null&&n!==null&&Hr(n,t[1])?t[0]:(s.memoizedState=[e,n],e)}function gu(e,n){var s=Te();n=n===void 0?null:n;var t=s.memoizedState;return t!==null&&n!==null&&Hr(n,t[1])?t[0]:(e=e(),s.memoizedState=[e,n],e)}function yu(e,n,s){return zn&21?(Me(s,n)||(s=xc(),V.lanes|=s,Dn|=s,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=s)}function hf(e,n){var s=D;D=s!==0&&4>s?s:4,e(!0);var t=al.transition;al.transition={};try{e(!1),n()}finally{D=s,al.transition=t}}function vu(){return Te().memoizedState}function mf(e,n,s){var t=gn(e);if(s={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null},ju(e))_u(n,s);else if(s=eu(e,n,s,t),s!==null){var a=ue();Oe(s,e,t,a),wu(s,n,t)}}function gf(e,n,s){var t=gn(e),a={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null};if(ju(e))_u(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var r=n.lastRenderedState,o=l(r,s);if(a.hasEagerState=!0,a.eagerState=o,Me(o,r)){var i=n.interleaved;i===null?(a.next=a,Ar(n)):(a.next=i.next,i.next=a),n.interleaved=a;return}}catch{}finally{}s=eu(e,n,a,t),s!==null&&(a=ue(),Oe(s,e,t,a),wu(s,n,t))}}function ju(e){var n=e.alternate;return e===V||n!==null&&n===V}function _u(e,n){Os=oa=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function wu(e,n,s){if(s&4194240){var t=n.lanes;t&=e.pendingLanes,s|=t,n.lanes=s,Er(e,s)}}var ia={readContext:Ne,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},yf={readContext:Ne,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Jo,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,At(4194308,4,fu.bind(null,n,e),s)},useLayoutEffect:function(e,n){return At(4194308,4,e,n)},useInsertionEffect:function(e,n){return At(4,2,e,n)},useMemo:function(e,n){var s=Fe();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var t=Fe();return n=s!==void 0?s(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=mf.bind(null,V,e),[t.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:Zo,useDebugValue:Kr,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Zo(!1),n=e[0];return e=hf.bind(null,e[1]),Fe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var t=V,a=Fe();if(U){if(s===void 0)throw Error(w(407));s=s()}else{if(s=n(),ee===null)throw Error(w(349));zn&30||lu(t,n,s)}a.memoizedState=s;var l={value:s,getSnapshot:n};return a.queue=l,Jo(ou.bind(null,t,l,e),[e]),t.flags|=2048,st(9,ru.bind(null,t,l,s,n),void 0,null),s},useId:function(){var e=Fe(),n=ee.identifierPrefix;if(U){var s=Ke,t=Ye;s=(t&~(1<<32-De(t)-1)).toString(32)+s,n=":"+n+"R"+s,s=et++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=ff++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vf={readContext:Ne,useCallback:mu,useContext:Ne,useEffect:Yr,useImperativeHandle:hu,useInsertionEffect:pu,useLayoutEffect:du,useMemo:gu,useReducer:ll,useRef:uu,useState:function(){return ll(nt)},useDebugValue:Kr,useDeferredValue:function(e){var n=Te();return yu(n,X.memoizedState,e)},useTransition:function(){var e=ll(nt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:tu,useSyncExternalStore:au,useId:vu,unstable_isNewReconciler:!1},jf={readContext:Ne,useCallback:mu,useContext:Ne,useEffect:Yr,useImperativeHandle:hu,useInsertionEffect:pu,useLayoutEffect:du,useMemo:gu,useReducer:rl,useRef:uu,useState:function(){return rl(nt)},useDebugValue:Kr,useDeferredValue:function(e){var n=Te();return X===null?n.memoizedState=e:yu(n,X.memoizedState,e)},useTransition:function(){var e=rl(nt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:tu,useSyncExternalStore:au,useId:vu,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function Wl(e,n,s,t){n=e.memoizedState,s=s(t,n),s=s==null?n:H({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Sa={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var t=ue(),a=gn(e),l=Xe(t,a);l.payload=n,s!=null&&(l.callback=s),n=hn(e,l,a),n!==null&&(Oe(n,e,a,t),Ot(n,e,a))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var t=ue(),a=gn(e),l=Xe(t,a);l.tag=1,l.payload=n,s!=null&&(l.callback=s),n=hn(e,l,a),n!==null&&(Oe(n,e,a,t),Ot(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=ue(),t=gn(e),a=Xe(s,t);a.tag=2,n!=null&&(a.callback=n),n=hn(e,a,t),n!==null&&(Oe(n,e,t,s),Ot(n,e,t))}};function ei(e,n,s,t,a,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,r):n.prototype&&n.prototype.isPureReactComponent?!Ks(s,t)||!Ks(a,l):!0}function xu(e,n,s){var t=!1,a=jn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ne(l):(a=ge(n)?Ln:ie.current,t=n.contextTypes,l=(t=t!=null)?os(e,a):jn),n=new n(s,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Sa,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function ni(e,n,s,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,t),n.state!==e&&Sa.enqueueReplaceState(n,n.state,null)}function Ql(e,n,s,t){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},Fr(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=Ne(l):(l=ge(n)?Ln:ie.current,a.context=os(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Wl(e,n,l,s),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Sa.enqueueReplaceState(a,a.state,null),la(e,s,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ps(e,n){try{var s="",t=n;do s+=Qp(t),t=t.return;while(t);var a=s}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function ol(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function Yl(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function ku(e,n,s){s=Xe(-1,s),s.tag=3,s.payload={element:null};var t=n.value;return s.callback=function(){ua||(ua=!0,tr=t),Yl(e,n)},s}function Su(e,n,s){s=Xe(-1,s),s.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=n.value;s.payload=function(){return t(a)},s.callback=function(){Yl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(s.callback=function(){Yl(e,n),typeof t!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),s}function si(e,n,s){var t=e.pingCache;if(t===null){t=e.pingCache=new _f;var a=new Set;t.set(n,a)}else a=t.get(n),a===void 0&&(a=new Set,t.set(n,a));a.has(s)||(a.add(s),e=If.bind(null,e,n,s),n.then(e,e))}function ti(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ai(e,n,s,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=Xe(-1,1),n.tag=2,hn(s,n,1))),s.lanes|=1),e)}var wf=en.ReactCurrentOwner,he=!1;function ce(e,n,s,t){n.child=e===null?Jc(n,null,s,t):cs(n,e.child,s,t)}function li(e,n,s,t,a){s=s.render;var l=n.ref;return as(n,a),t=Wr(e,n,s,t,l,a),s=Qr(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Je(e,n,a)):(U&&s&&Lr(n),n.flags|=1,ce(e,n,t,a),n.child)}function ri(e,n,s,t,a){if(e===null){var l=s.type;return typeof l=="function"&&!so(l)&&l.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=l,Eu(e,n,l,t,a)):(e=Vt(s.type,null,t,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var r=l.memoizedProps;if(s=s.compare,s=s!==null?s:Ks,s(r,t)&&e.ref===n.ref)return Je(e,n,a)}return n.flags|=1,e=yn(l,t),e.ref=n.ref,e.return=n,n.child=e}function Eu(e,n,s,t,a){if(e!==null){var l=e.memoizedProps;if(Ks(l,t)&&e.ref===n.ref)if(he=!1,n.pendingProps=t=l,(e.lanes&a)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,Je(e,n,a)}return Kl(e,n,s,t,a)}function Cu(e,n,s){var t=n.pendingProps,a=t.children,l=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Jn,je),je|=s;else{if(!(s&1073741824))return e=l!==null?l.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Jn,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:s,O(Jn,je),je|=t}else l!==null?(t=l.baseLanes|s,n.memoizedState=null):t=s,O(Jn,je),je|=t;return ce(e,n,a,s),n.child}function bu(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function Kl(e,n,s,t,a){var l=ge(s)?Ln:ie.current;return l=os(n,l),as(n,a),s=Wr(e,n,s,t,l,a),t=Qr(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Je(e,n,a)):(U&&t&&Lr(n),n.flags|=1,ce(e,n,s,a),n.child)}function oi(e,n,s,t,a){if(ge(s)){var l=!0;ea(n)}else l=!1;if(as(n,a),n.stateNode===null)Ft(e,n),xu(n,s,t),Ql(n,s,t,a),t=!0;else if(e===null){var r=n.stateNode,o=n.memoizedProps;r.props=o;var i=r.context,c=s.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=ge(s)?Ln:ie.current,c=os(n,c));var d=s.getDerivedStateFromProps,f=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function";f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==t||i!==c)&&ni(n,r,t,c),tn=!1;var m=n.memoizedState;r.state=m,la(n,t,r,a),i=n.memoizedState,o!==t||m!==i||me.current||tn?(typeof d=="function"&&(Wl(n,s,d,t),i=n.memoizedState),(o=tn||ei(n,s,o,t,m,i,c))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=i),r.props=t,r.state=i,r.context=c,t=o):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{r=n.stateNode,nu(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:Le(n.type,o),r.props=c,f=n.pendingProps,m=r.context,i=s.contextType,typeof i=="object"&&i!==null?i=Ne(i):(i=ge(s)?Ln:ie.current,i=os(n,i));var y=s.getDerivedStateFromProps;(d=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==f||m!==i)&&ni(n,r,t,i),tn=!1,m=n.memoizedState,r.state=m,la(n,t,r,a);var j=n.memoizedState;o!==f||m!==j||me.current||tn?(typeof y=="function"&&(Wl(n,s,y,t),j=n.memoizedState),(c=tn||ei(n,s,c,t,m,j,i)||!1)?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,j,i),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,j,i)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=j),r.props=t,r.state=j,r.context=i,t=c):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),t=!1)}return Xl(e,n,s,t,l,a)}function Xl(e,n,s,t,a,l){bu(e,n);var r=(n.flags&128)!==0;if(!t&&!r)return a&&Qo(n,s,!1),Je(e,n,l);t=n.stateNode,wf.current=n;var o=r&&typeof s.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&r?(n.child=cs(n,e.child,null,l),n.child=cs(n,null,o,l)):ce(e,n,o,l),n.memoizedState=t.state,a&&Qo(n,s,!0),n.child}function Pu(e){var n=e.stateNode;n.pendingContext?Wo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Wo(e,n.context,!1),Ur(e,n.containerInfo)}function ii(e,n,s,t,a){return is(),zr(a),n.flags|=256,ce(e,n,s,t),n.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nu(e,n,s){var t=n.pendingProps,a=B.current,l=!1,r=(n.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),O(B,a&1),e===null)return Vl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=t.children,e=t.fallback,l?(t=n.mode,l=n.child,r={mode:"hidden",children:r},!(t&1)&&l!==null?(l.childLanes=0,l.pendingProps=r):l=ba(r,t,0,null),e=Rn(e,t,s,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=ql(s),n.memoizedState=Gl,e):Xr(n,r));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return xf(e,n,r,t,o,a,s);if(l){l=t.fallback,r=n.mode,a=e.child,o=a.sibling;var i={mode:"hidden",children:t.children};return!(r&1)&&n.child!==a?(t=n.child,t.childLanes=0,t.pendingProps=i,n.deletions=null):(t=yn(a,i),t.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=yn(o,l):(l=Rn(l,r,s,null),l.flags|=2),l.return=n,t.return=n,t.sibling=l,n.child=t,t=l,l=n.child,r=e.child.memoizedState,r=r===null?ql(s):{baseLanes:r.baseLanes|s,cachePool:null,transitions:r.transitions},l.memoizedState=r,l.childLanes=e.childLanes&~s,n.memoizedState=Gl,t}return l=e.child,e=l.sibling,t=yn(l,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=s),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t}function Xr(e,n){return n=ba({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function bt(e,n,s,t){return t!==null&&zr(t),cs(n,e.child,null,s),e=Xr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xf(e,n,s,t,a,l,r){if(s)return n.flags&256?(n.flags&=-257,t=ol(Error(w(422))),bt(e,n,r,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=t.fallback,a=n.mode,t=ba({mode:"visible",children:t.children},a,0,null),l=Rn(l,a,r,null),l.flags|=2,t.return=n,l.return=n,t.sibling=l,n.child=t,n.mode&1&&cs(n,e.child,null,r),n.child.memoizedState=ql(r),n.memoizedState=Gl,l);if(!(n.mode&1))return bt(e,n,r,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var o=t.dgst;return t=o,l=Error(w(419)),t=ol(l,t,void 0),bt(e,n,r,t)}if(o=(r&e.childLanes)!==0,he||o){if(t=ee,t!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|r)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ze(e,a),Oe(t,e,a,-1))}return no(),t=ol(Error(w(421))),bt(e,n,r,t)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=zf.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,_e=fn(a.nextSibling),we=n,U=!0,ze=null,e!==null&&(Ee[Ce++]=Ye,Ee[Ce++]=Ke,Ee[Ce++]=In,Ye=e.id,Ke=e.overflow,In=n),n=Xr(n,t.children),n.flags|=4096,n)}function ci(e,n,s){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Hl(e.return,n,s)}function il(e,n,s,t,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:s,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=s,l.tailMode=a)}function Tu(e,n,s){var t=n.pendingProps,a=t.revealOrder,l=t.tail;if(ce(e,n,t.children,s),t=B.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ci(e,s,n);else if(e.tag===19)ci(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(O(B,t),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(s=n.child,a=null;s!==null;)e=s.alternate,e!==null&&ra(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=n.child,n.child=null):(a=s.sibling,s.sibling=null),il(n,!1,a,s,l);break;case"backwards":for(s=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ra(e)===null){n.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}il(n,!0,s,null,l);break;case"together":il(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ft(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(s&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,s=yn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=yn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function kf(e,n,s){switch(n.tag){case 3:Pu(n),is();break;case 5:su(n);break;case 1:ge(n.type)&&ea(n);break;case 4:Ur(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,a=n.memoizedProps.value;O(ta,t._currentValue),t._currentValue=a;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(O(B,B.current&1),n.flags|=128,null):s&n.child.childLanes?Nu(e,n,s):(O(B,B.current&1),e=Je(e,n,s),e!==null?e.sibling:null);O(B,B.current&1);break;case 19:if(t=(s&n.childLanes)!==0,e.flags&128){if(t)return Tu(e,n,s);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(B,B.current),t)break;return null;case 22:case 23:return n.lanes=0,Cu(e,n,s)}return Je(e,n,s)}var Ru,Zl,$u,Lu;Ru=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Zl=function(){};$u=function(e,n,s,t){var a=e.memoizedProps;if(a!==t){e=n.stateNode,Nn(Ve.current);var l=null;switch(s){case"input":a=_l(e,a),t=_l(e,t),l=[];break;case"select":a=H({},a,{value:void 0}),t=H({},t,{value:void 0}),l=[];break;case"textarea":a=kl(e,a),t=kl(e,t),l=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Zt)}El(s,t);var r;s=null;for(c in a)if(!t.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var o=a[c];for(r in o)o.hasOwnProperty(r)&&(s||(s={}),s[r]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Us.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in t){var i=t[c];if(o=a!=null?a[c]:void 0,t.hasOwnProperty(c)&&i!==o&&(i!=null||o!=null))if(c==="style")if(o){for(r in o)!o.hasOwnProperty(r)||i&&i.hasOwnProperty(r)||(s||(s={}),s[r]="");for(r in i)i.hasOwnProperty(r)&&o[r]!==i[r]&&(s||(s={}),s[r]=i[r])}else s||(l||(l=[]),l.push(c,s)),s=i;else c==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(c,i)):c==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(c,""+i):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Us.hasOwnProperty(c)?(i!=null&&c==="onScroll"&&M("scroll",e),l||o===i||(l=[])):(l=l||[]).push(c,i))}s&&(l=l||[]).push("style",s);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Lu=function(e,n,s,t){s!==t&&(n.flags|=4)};function Cs(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,t=0;if(n)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=s,n}function Sf(e,n,s){var t=n.pendingProps;switch(Ir(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return ge(n.type)&&Jt(),re(n),null;case 3:return t=n.stateNode,us(),A(me),A(ie),Vr(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Et(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ze!==null&&(rr(ze),ze=null))),Zl(e,n),re(n),null;case 5:Br(n);var a=Nn(Js.current);if(s=n.type,e!==null&&n.stateNode!=null)$u(e,n,s,t,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(w(166));return re(n),null}if(e=Nn(Ve.current),Et(n)){t=n.stateNode,s=n.type;var l=n.memoizedProps;switch(t[Ue]=n,t[qs]=l,e=(n.mode&1)!==0,s){case"dialog":M("cancel",t),M("close",t);break;case"iframe":case"object":case"embed":M("load",t);break;case"video":case"audio":for(a=0;a<Rs.length;a++)M(Rs[a],t);break;case"source":M("error",t);break;case"img":case"image":case"link":M("error",t),M("load",t);break;case"details":M("toggle",t);break;case"input":vo(t,l),M("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},M("invalid",t);break;case"textarea":_o(t,l),M("invalid",t)}El(s,l),a=null;for(var r in l)if(l.hasOwnProperty(r)){var o=l[r];r==="children"?typeof o=="string"?t.textContent!==o&&(l.suppressHydrationWarning!==!0&&St(t.textContent,o,e),a=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&St(t.textContent,o,e),a=["children",""+o]):Us.hasOwnProperty(r)&&o!=null&&r==="onScroll"&&M("scroll",t)}switch(s){case"input":gt(t),jo(t,l,!0);break;case"textarea":gt(t),wo(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=Zt)}t=a,n.updateQueue=t,t!==null&&(n.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oc(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=r.createElement(s,{is:t.is}):(e=r.createElement(s),s==="select"&&(r=e,t.multiple?r.multiple=!0:t.size&&(r.size=t.size))):e=r.createElementNS(e,s),e[Ue]=n,e[qs]=t,Ru(e,n,!1,!1),n.stateNode=e;e:{switch(r=Cl(s,t),s){case"dialog":M("cancel",e),M("close",e),a=t;break;case"iframe":case"object":case"embed":M("load",e),a=t;break;case"video":case"audio":for(a=0;a<Rs.length;a++)M(Rs[a],e);a=t;break;case"source":M("error",e),a=t;break;case"img":case"image":case"link":M("error",e),M("load",e),a=t;break;case"details":M("toggle",e),a=t;break;case"input":vo(e,t),a=_l(e,t),M("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=H({},t,{value:void 0}),M("invalid",e);break;case"textarea":_o(e,t),a=kl(e,t),M("invalid",e);break;default:a=t}El(s,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?uc(e,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&ic(e,i)):l==="children"?typeof i=="string"?(s!=="textarea"||i!=="")&&Bs(e,i):typeof i=="number"&&Bs(e,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Us.hasOwnProperty(l)?i!=null&&l==="onScroll"&&M("scroll",e):i!=null&&jr(e,l,i,r))}switch(s){case"input":gt(e),jo(e,t,!1);break;case"textarea":gt(e),wo(e);break;case"option":t.value!=null&&e.setAttribute("value",""+vn(t.value));break;case"select":e.multiple=!!t.multiple,l=t.value,l!=null?es(e,!!t.multiple,l,!1):t.defaultValue!=null&&es(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Zt)}switch(s){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Lu(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(w(166));if(s=Nn(Js.current),Nn(Ve.current),Et(n)){if(t=n.stateNode,s=n.memoizedProps,t[Ue]=n,(l=t.nodeValue!==s)&&(e=we,e!==null))switch(e.tag){case 3:St(t.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&St(t.nodeValue,s,(e.mode&1)!==0)}l&&(n.flags|=4)}else t=(s.nodeType===9?s:s.ownerDocument).createTextNode(t),t[Ue]=n,n.stateNode=t}return re(n),null;case 13:if(A(B),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&_e!==null&&n.mode&1&&!(n.flags&128))qc(),is(),n.flags|=98560,l=!1;else if(l=Et(n),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ue]=n}else is(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),l=!1}else ze!==null&&(rr(ze),ze=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=s,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?G===0&&(G=3):no())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return us(),Zl(e,n),e===null&&Xs(n.stateNode.containerInfo),re(n),null;case 10:return Mr(n.type._context),re(n),null;case 17:return ge(n.type)&&Jt(),re(n),null;case 19:if(A(B),l=n.memoizedState,l===null)return re(n),null;if(t=(n.flags&128)!==0,r=l.rendering,r===null)if(t)Cs(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=ra(e),r!==null){for(n.flags|=128,Cs(l,!1),t=r.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=s,s=n.child;s!==null;)l=s,e=t,l.flags&=14680066,r=l.alternate,r===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,l.type=r.type,e=r.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return O(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&Y()>ds&&(n.flags|=128,t=!0,Cs(l,!1),n.lanes=4194304)}else{if(!t)if(e=ra(r),e!==null){if(n.flags|=128,t=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Cs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!U)return re(n),null}else 2*Y()-l.renderingStartTime>ds&&s!==1073741824&&(n.flags|=128,t=!0,Cs(l,!1),n.lanes=4194304);l.isBackwards?(r.sibling=n.child,n.child=r):(s=l.last,s!==null?s.sibling=r:n.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Y(),n.sibling=null,s=B.current,O(B,t?s&1|2:s&1),n):(re(n),null);case 22:case 23:return eo(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?je&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function Ef(e,n){switch(Ir(n),n.tag){case 1:return ge(n.type)&&Jt(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return us(),A(me),A(ie),Vr(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Br(n),null;case 13:if(A(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(B),null;case 4:return us(),null;case 10:return Mr(n.type._context),null;case 22:case 23:return eo(),null;case 24:return null;default:return null}}var Pt=!1,oe=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,b=null;function Zn(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(t){W(e,n,t)}else s.current=null}function Jl(e,n,s){try{s()}catch(t){W(e,n,t)}}var ui=!1;function bf(e,n){if(Dl=Xt,e=Mc(),$r(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var t=s.getSelection&&s.getSelection();if(t&&t.rangeCount!==0){s=t.anchorNode;var a=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var r=0,o=-1,i=-1,c=0,d=0,f=e,m=null;n:for(;;){for(var y;f!==s||a!==0&&f.nodeType!==3||(o=r+a),f!==l||t!==0&&f.nodeType!==3||(i=r+t),f.nodeType===3&&(r+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break n;if(m===s&&++c===a&&(o=r),m===l&&++d===t&&(i=r),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}s=o===-1||i===-1?null:{start:o,end:i}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ol={focusedElem:e,selectionRange:s},Xt=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var j=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var _=j.memoizedProps,E=j.memoizedState,p=n.stateNode,u=p.getSnapshotBeforeUpdate(n.elementType===n.type?_:Le(n.type,_),E);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){W(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return j=ui,ui=!1,j}function Ms(e,n,s){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Jl(n,s,l)}a=a.next}while(a!==t)}}function Ea(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var t=s.create;s.destroy=t()}s=s.next}while(s!==n)}}function er(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function Iu(e){var n=e.alternate;n!==null&&(e.alternate=null,Iu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[qs],delete n[Fl],delete n[cf],delete n[uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function pi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nr(e,n,s){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Zt));else if(t!==4&&(e=e.child,e!==null))for(nr(e,n,s),e=e.sibling;e!==null;)nr(e,n,s),e=e.sibling}function sr(e,n,s){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(sr(e,n,s),e=e.sibling;e!==null;)sr(e,n,s),e=e.sibling}var se=null,Ie=!1;function nn(e,n,s){for(s=s.child;s!==null;)Du(e,n,s),s=s.sibling}function Du(e,n,s){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ya,s)}catch{}switch(s.tag){case 5:oe||Zn(s,n);case 6:var t=se,a=Ie;se=null,nn(e,n,s),se=t,Ie=a,se!==null&&(Ie?(e=se,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):se.removeChild(s.stateNode));break;case 18:se!==null&&(Ie?(e=se,s=s.stateNode,e.nodeType===8?nl(e.parentNode,s):e.nodeType===1&&nl(e,s),Qs(e)):nl(se,s.stateNode));break;case 4:t=se,a=Ie,se=s.stateNode.containerInfo,Ie=!0,nn(e,n,s),se=t,Ie=a;break;case 0:case 11:case 14:case 15:if(!oe&&(t=s.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var l=a,r=l.destroy;l=l.tag,r!==void 0&&(l&2||l&4)&&Jl(s,n,r),a=a.next}while(a!==t)}nn(e,n,s);break;case 1:if(!oe&&(Zn(s,n),t=s.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=s.memoizedProps,t.state=s.memoizedState,t.componentWillUnmount()}catch(o){W(s,n,o)}nn(e,n,s);break;case 21:nn(e,n,s);break;case 22:s.mode&1?(oe=(t=oe)||s.memoizedState!==null,nn(e,n,s),oe=t):nn(e,n,s);break;default:nn(e,n,s)}}function di(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Cf),n.forEach(function(t){var a=Df.bind(null,e,t);s.has(t)||(s.add(t),t.then(a,a))})}}function $e(e,n){var s=n.deletions;if(s!==null)for(var t=0;t<s.length;t++){var a=s[t];try{var l=e,r=n,o=r;e:for(;o!==null;){switch(o.tag){case 5:se=o.stateNode,Ie=!1;break e;case 3:se=o.stateNode.containerInfo,Ie=!0;break e;case 4:se=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(se===null)throw Error(w(160));Du(l,r,a),se=null,Ie=!1;var i=a.alternate;i!==null&&(i.return=null),a.return=null}catch(c){W(a,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ou(n,e),n=n.sibling}function Ou(e,n){var s=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(n,e),Ae(e),t&4){try{Ms(3,e,e.return),Ea(3,e)}catch(_){W(e,e.return,_)}try{Ms(5,e,e.return)}catch(_){W(e,e.return,_)}}break;case 1:$e(n,e),Ae(e),t&512&&s!==null&&Zn(s,s.return);break;case 5:if($e(n,e),Ae(e),t&512&&s!==null&&Zn(s,s.return),e.flags&32){var a=e.stateNode;try{Bs(a,"")}catch(_){W(e,e.return,_)}}if(t&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,r=s!==null?s.memoizedProps:l,o=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&lc(a,l),Cl(o,r);var c=Cl(o,l);for(r=0;r<i.length;r+=2){var d=i[r],f=i[r+1];d==="style"?uc(a,f):d==="dangerouslySetInnerHTML"?ic(a,f):d==="children"?Bs(a,f):jr(a,d,f,c)}switch(o){case"input":wl(a,l);break;case"textarea":rc(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?es(a,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?es(a,!!l.multiple,l.defaultValue,!0):es(a,!!l.multiple,l.multiple?[]:"",!1))}a[qs]=l}catch(_){W(e,e.return,_)}}break;case 6:if($e(n,e),Ae(e),t&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(_){W(e,e.return,_)}}break;case 3:if($e(n,e),Ae(e),t&4&&s!==null&&s.memoizedState.isDehydrated)try{Qs(n.containerInfo)}catch(_){W(e,e.return,_)}break;case 4:$e(n,e),Ae(e);break;case 13:$e(n,e),Ae(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Zr=Y())),t&4&&di(e);break;case 22:if(d=s!==null&&s.memoizedState!==null,e.mode&1?(oe=(c=oe)||d,$e(n,e),oe=c):$e(n,e),Ae(e),t&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(b=e,d=e.child;d!==null;){for(f=b=d;b!==null;){switch(m=b,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ms(4,m,m.return);break;case 1:Zn(m,m.return);var j=m.stateNode;if(typeof j.componentWillUnmount=="function"){t=m,s=m.return;try{n=t,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(_){W(t,s,_)}}break;case 5:Zn(m,m.return);break;case 22:if(m.memoizedState!==null){hi(f);continue}}y!==null?(y.return=m,b=y):hi(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,c?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,i=f.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=cc("display",r))}catch(_){W(e,e.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){W(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(n,e),Ae(e),t&4&&di(e);break;case 21:break;default:$e(n,e),Ae(e)}}function Ae(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(zu(s)){var t=s;break e}s=s.return}throw Error(w(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(Bs(a,""),t.flags&=-33);var l=pi(e);sr(e,l,a);break;case 3:case 4:var r=t.stateNode.containerInfo,o=pi(e);nr(e,o,r);break;default:throw Error(w(161))}}catch(i){W(e,e.return,i)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pf(e,n,s){b=e,Mu(e)}function Mu(e,n,s){for(var t=(e.mode&1)!==0;b!==null;){var a=b,l=a.child;if(a.tag===22&&t){var r=a.memoizedState!==null||Pt;if(!r){var o=a.alternate,i=o!==null&&o.memoizedState!==null||oe;o=Pt;var c=oe;if(Pt=r,(oe=i)&&!c)for(b=a;b!==null;)r=b,i=r.child,r.tag===22&&r.memoizedState!==null?mi(a):i!==null?(i.return=r,b=i):mi(a);for(;l!==null;)b=l,Mu(l),l=l.sibling;b=a,Pt=o,oe=c}fi(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,b=l):fi(e)}}function fi(e){for(;b!==null;){var n=b;if(n.flags&8772){var s=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Ea(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!oe)if(s===null)t.componentDidMount();else{var a=n.elementType===n.type?s.memoizedProps:Le(n.type,s.memoizedProps);t.componentDidUpdate(a,s.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&qo(n,l,t);break;case 3:var r=n.updateQueue;if(r!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}qo(n,r,s)}break;case 5:var o=n.stateNode;if(s===null&&n.flags&4){s=o;var i=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break;case"img":i.src&&(s.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||n.flags&512&&er(n)}catch(m){W(n,n.return,m)}}if(n===e){b=null;break}if(s=n.sibling,s!==null){s.return=n.return,b=s;break}b=n.return}}function hi(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var s=n.sibling;if(s!==null){s.return=n.return,b=s;break}b=n.return}}function mi(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Ea(4,n)}catch(i){W(n,s,i)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var a=n.return;try{t.componentDidMount()}catch(i){W(n,a,i)}}var l=n.return;try{er(n)}catch(i){W(n,l,i)}break;case 5:var r=n.return;try{er(n)}catch(i){W(n,r,i)}}}catch(i){W(n,n.return,i)}if(n===e){b=null;break}var o=n.sibling;if(o!==null){o.return=n.return,b=o;break}b=n.return}}var Nf=Math.ceil,ca=en.ReactCurrentDispatcher,Gr=en.ReactCurrentOwner,Pe=en.ReactCurrentBatchConfig,z=0,ee=null,K=null,te=0,je=0,Jn=wn(0),G=0,tt=null,Dn=0,Ca=0,qr=0,As=null,fe=null,Zr=0,ds=1/0,We=null,ua=!1,tr=null,mn=null,Nt=!1,on=null,pa=0,Fs=0,ar=null,Ut=-1,Bt=0;function ue(){return z&6?Y():Ut!==-1?Ut:Ut=Y()}function gn(e){return e.mode&1?z&2&&te!==0?te&-te:df.transition!==null?(Bt===0&&(Bt=xc()),Bt):(e=D,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function Oe(e,n,s,t){if(50<Fs)throw Fs=0,ar=null,Error(w(185));ot(e,s,t),(!(z&2)||e!==ee)&&(e===ee&&(!(z&2)&&(Ca|=s),G===4&&ln(e,te)),ye(e,t),s===1&&z===0&&!(n.mode&1)&&(ds=Y()+500,xa&&xn()))}function ye(e,n){var s=e.callbackNode;pd(e,n);var t=Kt(e,e===ee?te:0);if(t===0)s!==null&&So(s),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(s!=null&&So(s),n===1)e.tag===0?pf(gi.bind(null,e)):Kc(gi.bind(null,e)),rf(function(){!(z&6)&&xn()}),s=null;else{switch(kc(t)){case 1:s=Sr;break;case 4:s=_c;break;case 16:s=Yt;break;case 536870912:s=wc;break;default:s=Yt}s=Qu(s,Au.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function Au(e,n){if(Ut=-1,Bt=0,z&6)throw Error(w(327));var s=e.callbackNode;if(ls()&&e.callbackNode!==s)return null;var t=Kt(e,e===ee?te:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=da(e,t);else{n=t;var a=z;z|=2;var l=Uu();(ee!==e||te!==n)&&(We=null,ds=Y()+500,Tn(e,n));do try{$f();break}catch(o){Fu(e,o)}while(!0);Or(),ca.current=l,z=a,K!==null?n=0:(ee=null,te=0,n=G)}if(n!==0){if(n===2&&(a=Rl(e),a!==0&&(t=a,n=lr(e,a))),n===1)throw s=tt,Tn(e,0),ln(e,t),ye(e,Y()),s;if(n===6)ln(e,t);else{if(a=e.current.alternate,!(t&30)&&!Tf(a)&&(n=da(e,t),n===2&&(l=Rl(e),l!==0&&(t=l,n=lr(e,l))),n===1))throw s=tt,Tn(e,0),ln(e,t),ye(e,Y()),s;switch(e.finishedWork=a,e.finishedLanes=t,n){case 0:case 1:throw Error(w(345));case 2:Cn(e,fe,We);break;case 3:if(ln(e,t),(t&130023424)===t&&(n=Zr+500-Y(),10<n)){if(Kt(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Al(Cn.bind(null,e,fe,We),n);break}Cn(e,fe,We);break;case 4:if(ln(e,t),(t&4194240)===t)break;for(n=e.eventTimes,a=-1;0<t;){var r=31-De(t);l=1<<r,r=n[r],r>a&&(a=r),t&=~l}if(t=a,t=Y()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Nf(t/1960))-t,10<t){e.timeoutHandle=Al(Cn.bind(null,e,fe,We),t);break}Cn(e,fe,We);break;case 5:Cn(e,fe,We);break;default:throw Error(w(329))}}}return ye(e,Y()),e.callbackNode===s?Au.bind(null,e):null}function lr(e,n){var s=As;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=da(e,n),e!==2&&(n=fe,fe=s,n!==null&&rr(n)),e}function rr(e){fe===null?fe=e:fe.push.apply(fe,e)}function Tf(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var t=0;t<s.length;t++){var a=s[t],l=a.getSnapshot;a=a.value;try{if(!Me(l(),a))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~qr,n&=~Ca,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-De(n),t=1<<s;e[s]=-1,n&=~t}}function gi(e){if(z&6)throw Error(w(327));ls();var n=Kt(e,0);if(!(n&1))return ye(e,Y()),null;var s=da(e,n);if(e.tag!==0&&s===2){var t=Rl(e);t!==0&&(n=t,s=lr(e,t))}if(s===1)throw s=tt,Tn(e,0),ln(e,n),ye(e,Y()),s;if(s===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,fe,We),ye(e,Y()),null}function Jr(e,n){var s=z;z|=1;try{return e(n)}finally{z=s,z===0&&(ds=Y()+500,xa&&xn())}}function On(e){on!==null&&on.tag===0&&!(z&6)&&ls();var n=z;z|=1;var s=Pe.transition,t=D;try{if(Pe.transition=null,D=1,e)return e()}finally{D=t,Pe.transition=s,z=n,!(z&6)&&xn()}}function eo(){je=Jn.current,A(Jn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,lf(s)),K!==null)for(s=K.return;s!==null;){var t=s;switch(Ir(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Jt();break;case 3:us(),A(me),A(ie),Vr();break;case 5:Br(t);break;case 4:us();break;case 13:A(B);break;case 19:A(B);break;case 10:Mr(t.type._context);break;case 22:case 23:eo()}s=s.return}if(ee=e,K=e=yn(e.current,null),te=je=n,G=0,tt=null,qr=Ca=Dn=0,fe=As=null,Pn!==null){for(n=0;n<Pn.length;n++)if(s=Pn[n],t=s.interleaved,t!==null){s.interleaved=null;var a=t.next,l=s.pending;if(l!==null){var r=l.next;l.next=a,t.next=r}s.pending=t}Pn=null}return e}function Fu(e,n){do{var s=K;try{if(Or(),Mt.current=ia,oa){for(var t=V.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}oa=!1}if(zn=0,J=X=V=null,Os=!1,et=0,Gr.current=null,s===null||s.return===null){G=1,tt=n,K=null;break}e:{var l=e,r=s.return,o=s,i=n;if(n=te,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var c=i,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=ti(r);if(y!==null){y.flags&=-257,ai(y,r,o,l,n),y.mode&1&&si(l,c,n),n=y,i=c;var j=n.updateQueue;if(j===null){var _=new Set;_.add(i),n.updateQueue=_}else j.add(i);break e}else{if(!(n&1)){si(l,c,n),no();break e}i=Error(w(426))}}else if(U&&o.mode&1){var E=ti(r);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ai(E,r,o,l,n),zr(ps(i,o));break e}}l=i=ps(i,o),G!==4&&(G=2),As===null?As=[l]:As.push(l),l=r;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=ku(l,i,n);Go(l,p);break e;case 1:o=i;var u=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(mn===null||!mn.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=Su(l,o,n);Go(l,v);break e}}l=l.return}while(l!==null)}Vu(s)}catch(k){n=k,K===s&&s!==null&&(K=s=s.return);continue}break}while(!0)}function Uu(){var e=ca.current;return ca.current=ia,e===null?ia:e}function no(){(G===0||G===3||G===2)&&(G=4),ee===null||!(Dn&268435455)&&!(Ca&268435455)||ln(ee,te)}function da(e,n){var s=z;z|=2;var t=Uu();(ee!==e||te!==n)&&(We=null,Tn(e,n));do try{Rf();break}catch(a){Fu(e,a)}while(!0);if(Or(),z=s,ca.current=t,K!==null)throw Error(w(261));return ee=null,te=0,G}function Rf(){for(;K!==null;)Bu(K)}function $f(){for(;K!==null&&!sd();)Bu(K)}function Bu(e){var n=Wu(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?Vu(e):K=n,Gr.current=null}function Vu(e){var n=e;do{var s=n.alternate;if(e=n.return,n.flags&32768){if(s=Ef(s,n),s!==null){s.flags&=32767,K=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(s=Sf(s,n,je),s!==null){K=s;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);G===0&&(G=5)}function Cn(e,n,s){var t=D,a=Pe.transition;try{Pe.transition=null,D=1,Lf(e,n,s,t)}finally{Pe.transition=a,D=t}return null}function Lf(e,n,s,t){do ls();while(on!==null);if(z&6)throw Error(w(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=s.lanes|s.childLanes;if(dd(e,l),e===ee&&(K=ee=null,te=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Nt||(Nt=!0,Qu(Yt,function(){return ls(),null})),l=(s.flags&15990)!==0,s.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var r=D;D=1;var o=z;z|=4,Gr.current=null,bf(e,s),Ou(s,e),Zd(Ol),Xt=!!Dl,Ol=Dl=null,e.current=s,Pf(s),td(),z=o,D=r,Pe.transition=l}else e.current=s;if(Nt&&(Nt=!1,on=e,pa=a),l=e.pendingLanes,l===0&&(mn=null),rd(s.stateNode),ye(e,Y()),n!==null)for(t=e.onRecoverableError,s=0;s<n.length;s++)a=n[s],t(a.value,{componentStack:a.stack,digest:a.digest});if(ua)throw ua=!1,e=tr,tr=null,e;return pa&1&&e.tag!==0&&ls(),l=e.pendingLanes,l&1?e===ar?Fs++:(Fs=0,ar=e):Fs=0,xn(),null}function ls(){if(on!==null){var e=kc(pa),n=Pe.transition,s=D;try{if(Pe.transition=null,D=16>e?16:e,on===null)var t=!1;else{if(e=on,on=null,pa=0,z&6)throw Error(w(331));var a=z;for(z|=4,b=e.current;b!==null;){var l=b,r=l.child;if(b.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var c=o[i];for(b=c;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Ms(8,d,l)}var f=d.child;if(f!==null)f.return=d,b=f;else for(;b!==null;){d=b;var m=d.sibling,y=d.return;if(Iu(d),d===c){b=null;break}if(m!==null){m.return=y,b=m;break}b=y}}}var j=l.alternate;if(j!==null){var _=j.child;if(_!==null){j.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}b=l}}if(l.subtreeFlags&2064&&r!==null)r.return=l,b=r;else e:for(;b!==null;){if(l=b,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ms(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,b=p;break e}b=l.return}}var u=e.current;for(b=u;b!==null;){r=b;var h=r.child;if(r.subtreeFlags&2064&&h!==null)h.return=r,b=h;else e:for(r=u;b!==null;){if(o=b,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ea(9,o)}}catch(k){W(o,o.return,k)}if(o===r){b=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,b=v;break e}b=o.return}}if(z=a,xn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ya,e)}catch{}t=!0}return t}finally{D=s,Pe.transition=n}}return!1}function yi(e,n,s){n=ps(s,n),n=ku(e,n,1),e=hn(e,n,1),n=ue(),e!==null&&(ot(e,1,n),ye(e,n))}function W(e,n,s){if(e.tag===3)yi(e,e,s);else for(;n!==null;){if(n.tag===3){yi(n,e,s);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(mn===null||!mn.has(t))){e=ps(s,e),e=Su(n,e,1),n=hn(n,e,1),e=ue(),n!==null&&(ot(n,1,e),ye(n,e));break}}n=n.return}}function If(e,n,s){var t=e.pingCache;t!==null&&t.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&s,ee===e&&(te&s)===s&&(G===4||G===3&&(te&130023424)===te&&500>Y()-Zr?Tn(e,0):qr|=s),ye(e,n)}function Hu(e,n){n===0&&(e.mode&1?(n=jt,jt<<=1,!(jt&130023424)&&(jt=4194304)):n=1);var s=ue();e=Ze(e,n),e!==null&&(ot(e,n,s),ye(e,s))}function zf(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Hu(e,s)}function Df(e,n){var s=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(w(314))}t!==null&&t.delete(n),Hu(e,s)}var Wu;Wu=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)he=!0;else{if(!(e.lanes&s)&&!(n.flags&128))return he=!1,kf(e,n,s);he=!!(e.flags&131072)}else he=!1,U&&n.flags&1048576&&Xc(n,sa,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;Ft(e,n),e=n.pendingProps;var a=os(n,ie.current);as(n,s),a=Wr(null,n,t,e,a,s);var l=Qr();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(t)?(l=!0,ea(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Fr(n),a.updater=Sa,n.stateNode=a,a._reactInternals=n,Ql(n,t,e,s),n=Xl(null,n,t,!0,l,s)):(n.tag=0,U&&l&&Lr(n),ce(null,n,a,s),n=n.child),n;case 16:t=n.elementType;e:{switch(Ft(e,n),e=n.pendingProps,a=t._init,t=a(t._payload),n.type=t,a=n.tag=Mf(t),e=Le(t,e),a){case 0:n=Kl(null,n,t,e,s);break e;case 1:n=oi(null,n,t,e,s);break e;case 11:n=li(null,n,t,e,s);break e;case 14:n=ri(null,n,t,Le(t.type,e),s);break e}throw Error(w(306,t,""))}return n;case 0:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Le(t,a),Kl(e,n,t,a,s);case 1:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Le(t,a),oi(e,n,t,a,s);case 3:e:{if(Pu(n),e===null)throw Error(w(387));t=n.pendingProps,l=n.memoizedState,a=l.element,nu(e,n),la(n,t,null,s);var r=n.memoizedState;if(t=r.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=ps(Error(w(423)),n),n=ii(e,n,t,s,a);break e}else if(t!==a){a=ps(Error(w(424)),n),n=ii(e,n,t,s,a);break e}else for(_e=fn(n.stateNode.containerInfo.firstChild),we=n,U=!0,ze=null,s=Jc(n,null,t,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(is(),t===a){n=Je(e,n,s);break e}ce(e,n,t,s)}n=n.child}return n;case 5:return su(n),e===null&&Vl(n),t=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,r=a.children,Ml(t,a)?r=null:l!==null&&Ml(t,l)&&(n.flags|=32),bu(e,n),ce(e,n,r,s),n.child;case 6:return e===null&&Vl(n),null;case 13:return Nu(e,n,s);case 4:return Ur(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=cs(n,null,t,s):ce(e,n,t,s),n.child;case 11:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Le(t,a),li(e,n,t,a,s);case 7:return ce(e,n,n.pendingProps,s),n.child;case 8:return ce(e,n,n.pendingProps.children,s),n.child;case 12:return ce(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(t=n.type._context,a=n.pendingProps,l=n.memoizedProps,r=a.value,O(ta,t._currentValue),t._currentValue=r,l!==null)if(Me(l.value,r)){if(l.children===a.children&&!me.current){n=Je(e,n,s);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){r=l.child;for(var i=o.firstContext;i!==null;){if(i.context===t){if(l.tag===1){i=Xe(-1,s&-s),i.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i}}l.lanes|=s,i=l.alternate,i!==null&&(i.lanes|=s),Hl(l.return,s,n),o.lanes|=s;break}i=i.next}}else if(l.tag===10)r=l.type===n.type?null:l.child;else if(l.tag===18){if(r=l.return,r===null)throw Error(w(341));r.lanes|=s,o=r.alternate,o!==null&&(o.lanes|=s),Hl(r,s,n),r=l.sibling}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===n){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}ce(e,n,a.children,s),n=n.child}return n;case 9:return a=n.type,t=n.pendingProps.children,as(n,s),a=Ne(a),t=t(a),n.flags|=1,ce(e,n,t,s),n.child;case 14:return t=n.type,a=Le(t,n.pendingProps),a=Le(t.type,a),ri(e,n,t,a,s);case 15:return Eu(e,n,n.type,n.pendingProps,s);case 17:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Le(t,a),Ft(e,n),n.tag=1,ge(t)?(e=!0,ea(n)):e=!1,as(n,s),xu(n,t,a),Ql(n,t,a,s),Xl(null,n,t,!0,e,s);case 19:return Tu(e,n,s);case 22:return Cu(e,n,s)}throw Error(w(156,n.tag))};function Qu(e,n){return jc(e,n)}function Of(e,n,s,t){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,n,s,t){return new Of(e,n,s,t)}function so(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return so(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wr)return 11;if(e===xr)return 14}return 2}function yn(e,n){var s=e.alternate;return s===null?(s=be(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Vt(e,n,s,t,a,l){var r=2;if(t=e,typeof e=="function")so(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Vn:return Rn(s.children,a,l,n);case _r:r=8,a|=8;break;case gl:return e=be(12,s,n,a|2),e.elementType=gl,e.lanes=l,e;case yl:return e=be(13,s,n,a),e.elementType=yl,e.lanes=l,e;case vl:return e=be(19,s,n,a),e.elementType=vl,e.lanes=l,e;case sc:return ba(s,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ec:r=10;break e;case nc:r=9;break e;case wr:r=11;break e;case xr:r=14;break e;case sn:r=16,t=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=be(r,s,n,a),n.elementType=e,n.type=t,n.lanes=l,n}function Rn(e,n,s,t){return e=be(7,e,t,n),e.lanes=s,e}function ba(e,n,s,t){return e=be(22,e,t,n),e.elementType=sc,e.lanes=s,e.stateNode={isHidden:!1},e}function cl(e,n,s){return e=be(6,e,null,n),e.lanes=s,e}function ul(e,n,s){return n=be(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Af(e,n,s,t,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function to(e,n,s,t,a,l,r,o,i){return e=new Af(e,n,s,o,i),n===1?(n=1,l===!0&&(n|=8)):n=0,l=be(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:t,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fr(l),e}function Ff(e,n,s){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:s}}function Yu(e){if(!e)return jn;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var s=e.type;if(ge(s))return Yc(e,s,n)}return n}function Ku(e,n,s,t,a,l,r,o,i){return e=to(s,t,!0,e,a,l,r,o,i),e.context=Yu(null),s=e.current,t=ue(),a=gn(s),l=Xe(t,a),l.callback=n??null,hn(s,l,a),e.current.lanes=a,ot(e,a,t),ye(e,t),e}function Pa(e,n,s,t){var a=n.current,l=ue(),r=gn(a);return s=Yu(s),n.context===null?n.context=s:n.pendingContext=s,n=Xe(l,r),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=hn(a,n,r),e!==null&&(Oe(e,a,r,l),Ot(e,a,r)),r}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vi(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function ao(e,n){vi(e,n),(e=e.alternate)&&vi(e,n)}function Uf(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function lo(e){this._internalRoot=e}Na.prototype.render=lo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Pa(e,n,null,null)};Na.prototype.unmount=lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;On(function(){Pa(null,e,null,null)}),n[qe]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cc();e={blockedOn:null,target:e,priority:n};for(var s=0;s<an.length&&n!==0&&n<an[s].priority;s++);an.splice(s,0,e),s===0&&Pc(e)}};function ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ji(){}function Bf(e,n,s,t,a){if(a){if(typeof t=="function"){var l=t;t=function(){var c=fa(r);l.call(c)}}var r=Ku(n,t,e,0,null,!1,!1,"",ji);return e._reactRootContainer=r,e[qe]=r.current,Xs(e.nodeType===8?e.parentNode:e),On(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var o=t;t=function(){var c=fa(i);o.call(c)}}var i=to(e,0,!1,null,null,!1,!1,"",ji);return e._reactRootContainer=i,e[qe]=i.current,Xs(e.nodeType===8?e.parentNode:e),On(function(){Pa(n,i,s,t)}),i}function Ra(e,n,s,t,a){var l=s._reactRootContainer;if(l){var r=l;if(typeof a=="function"){var o=a;a=function(){var i=fa(r);o.call(i)}}Pa(n,r,e,a)}else r=Bf(s,n,e,a,t);return fa(r)}Sc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=Ts(n.pendingLanes);s!==0&&(Er(n,s|1),ye(n,Y()),!(z&6)&&(ds=Y()+500,xn()))}break;case 13:On(function(){var t=Ze(e,1);if(t!==null){var a=ue();Oe(t,e,1,a)}}),ao(e,1)}};Cr=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var s=ue();Oe(n,e,134217728,s)}ao(e,134217728)}};Ec=function(e){if(e.tag===13){var n=gn(e),s=Ze(e,n);if(s!==null){var t=ue();Oe(s,e,n,t)}ao(e,n)}};Cc=function(){return D};bc=function(e,n){var s=D;try{return D=e,n()}finally{D=s}};Pl=function(e,n,s){switch(n){case"input":if(wl(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var t=s[n];if(t!==e&&t.form===e.form){var a=wa(t);if(!a)throw Error(w(90));ac(t),wl(t,a)}}}break;case"textarea":rc(e,s);break;case"select":n=s.value,n!=null&&es(e,!!s.multiple,n,!1)}};fc=Jr;hc=On;var Vf={usingClientEntryPoint:!1,Events:[ct,Yn,wa,pc,dc,Jr]},bs={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||Uf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tt.isDisabled&&Tt.supportsFiber)try{ya=Tt.inject(Hf),Be=Tt}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;ke.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ro(n))throw Error(w(200));return Ff(e,n,null,s)};ke.createRoot=function(e,n){if(!ro(e))throw Error(w(299));var s=!1,t="",a=Xu;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=to(e,1,!1,null,null,s,!1,t,a),e[qe]=n.current,Xs(e.nodeType===8?e.parentNode:e),new lo(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=yc(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return On(e)};ke.hydrate=function(e,n,s){if(!Ta(n))throw Error(w(200));return Ra(null,e,n,!0,s)};ke.hydrateRoot=function(e,n,s){if(!ro(e))throw Error(w(405));var t=s!=null&&s.hydratedSources||null,a=!1,l="",r=Xu;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onRecoverableError!==void 0&&(r=s.onRecoverableError)),n=Ku(n,null,e,1,s??null,a,!1,l,r),e[qe]=n.current,Xs(e),t)for(e=0;e<t.length;e++)s=t[e],a=s._getVersion,a=a(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,a]:n.mutableSourceEagerHydrationData.push(s,a);return new Na(n)};ke.render=function(e,n,s){if(!Ta(n))throw Error(w(200));return Ra(null,e,n,!1,s)};ke.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(w(40));return e._reactRootContainer?(On(function(){Ra(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};ke.unstable_batchedUpdates=Jr;ke.unstable_renderSubtreeIntoContainer=function(e,n,s,t){if(!Ta(s))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ra(e,n,s,!1,t)};ke.version="18.3.1-next-f1338f8080-20240426";function Gu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gu)}catch(e){console.error(e)}}Gu(),Gi.exports=ke;var Wf=Gi.exports,qu,Zu,_i=Wf;Zu=_i.createRoot,qu=_i.hydrateRoot;const Ju={theme:"light",sideNav:!0,initialized:!1},ep=S.createContext({state:Ju,init:e=>{},setTheme:e=>{},toggleSideNav:()=>{}});function oo(){return S.useContext(ep)}function wi(e,n){try{localStorage.setItem(e,n)}catch(s){console.error(s)}}const xi=({children:e})=>{const[n,s]=S.useState(Ju);function t(o){o=="dark"?(document.body.classList.remove("light"),document.body.classList.add("dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"))}function a(o){try{const i=localStorage.getItem("theme")||"light";let c=o.width>=500;{const d=localStorage.getItem("sideNav");d&&(c=d=="true")}t(i),s(d=>({...d,theme:i,sideNav:c}))}catch(i){console.error(i)}s(i=>({...i,initialized:!0}))}function l(o){t(o),s({...n,theme:o}),wi("theme",o)}function r(){const o=!n.sideNav;s({...n,sideNav:o}),wi("sideNav",o)}return g.jsx(ep.Provider,{value:S.useMemo(()=>({state:n,init:a,setTheme:l,toggleSideNav:r}),[n]),children:e})};/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function at(){return at=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},at.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const ki="popstate";function Qf(e){e===void 0&&(e={});function n(t,a){let{pathname:l,search:r,hash:o}=t.location;return or("",{pathname:l,search:r,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function s(t,a){return typeof a=="string"?a:sp(a)}return Kf(n,s,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function np(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Yf(){return Math.random().toString(36).substr(2,8)}function Si(e,n){return{usr:e.state,key:e.key,idx:n}}function or(e,n,s,t){return s===void 0&&(s=null),at({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?gs(n):n,{state:s,key:n&&n.key||t||Yf()})}function sp(e){let{pathname:n="/",search:s="",hash:t=""}=e;return s&&s!=="?"&&(n+=s.charAt(0)==="?"?s:"?"+s),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function gs(e){let n={};if(e){let s=e.indexOf("#");s>=0&&(n.hash=e.substr(s),e=e.substr(0,s));let t=e.indexOf("?");t>=0&&(n.search=e.substr(t),e=e.substr(0,t)),e&&(n.pathname=e)}return n}function Kf(e,n,s,t){t===void 0&&(t={});let{window:a=document.defaultView,v5Compat:l=!1}=t,r=a.history,o=cn.Pop,i=null,c=d();c==null&&(c=0,r.replaceState(at({},r.state,{idx:c}),""));function d(){return(r.state||{idx:null}).idx}function f(){o=cn.Pop;let E=d(),p=E==null?null:E-c;c=E,i&&i({action:o,location:_.location,delta:p})}function m(E,p){o=cn.Push;let u=or(_.location,E,p);c=d()+1;let h=Si(u,c),v=_.createHref(u);try{r.pushState(h,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(v)}l&&i&&i({action:o,location:_.location,delta:1})}function y(E,p){o=cn.Replace;let u=or(_.location,E,p);c=d();let h=Si(u,c),v=_.createHref(u);r.replaceState(h,"",v),l&&i&&i({action:o,location:_.location,delta:0})}function j(E){let p=a.location.origin!=="null"?a.location.origin:a.location.href,u=typeof E=="string"?E:sp(E);return u=u.replace(/ $/,"%20"),q(p,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,p)}let _={get action(){return o},get location(){return e(a,r)},listen(E){if(i)throw new Error("A history only accepts one active listener");return a.addEventListener(ki,f),i=E,()=>{a.removeEventListener(ki,f),i=null}},createHref(E){return n(a,E)},createURL:j,encodeLocation(E){let p=j(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(E){return r.go(E)}};return _}var Ei;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ei||(Ei={}));function Xf(e,n,s){return s===void 0&&(s="/"),Gf(e,n,s,!1)}function Gf(e,n,s,t){let a=typeof n=="string"?gs(n):n,l=lp(a.pathname||"/",s);if(l==null)return null;let r=tp(e);qf(r);let o=null;for(let i=0;o==null&&i<r.length;++i){let c=ih(l);o=rh(r[i],c,t)}return o}function tp(e,n,s,t){n===void 0&&(n=[]),s===void 0&&(s=[]),t===void 0&&(t="");let a=(l,r,o)=>{let i={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:r,route:l};i.relativePath.startsWith("/")&&(q(i.relativePath.startsWith(t),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(t.length));let c=$n([t,i.relativePath]),d=s.concat(i);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tp(l.children,n,d,c)),!(l.path==null&&!l.index)&&n.push({path:c,score:ah(c,l.index),routesMeta:d})};return e.forEach((l,r)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))a(l,r);else for(let i of ap(l.path))a(l,r,i)}),n}function ap(e){let n=e.split("/");if(n.length===0)return[];let[s,...t]=n,a=s.endsWith("?"),l=s.replace(/\?$/,"");if(t.length===0)return a?[l,""]:[l];let r=ap(t.join("/")),o=[];return o.push(...r.map(i=>i===""?l:[l,i].join("/"))),a&&o.push(...r),o.map(i=>e.startsWith("/")&&i===""?"/":i)}function qf(e){e.sort((n,s)=>n.score!==s.score?s.score-n.score:lh(n.routesMeta.map(t=>t.childrenIndex),s.routesMeta.map(t=>t.childrenIndex)))}const Zf=/^:[\w-]+$/,Jf=3,eh=2,nh=1,sh=10,th=-2,Ci=e=>e==="*";function ah(e,n){let s=e.split("/"),t=s.length;return s.some(Ci)&&(t+=th),n&&(t+=eh),s.filter(a=>!Ci(a)).reduce((a,l)=>a+(Zf.test(l)?Jf:l===""?nh:sh),t)}function lh(e,n){return e.length===n.length&&e.slice(0,-1).every((t,a)=>t===n[a])?e[e.length-1]-n[n.length-1]:0}function rh(e,n,s){let{routesMeta:t}=e,a={},l="/",r=[];for(let o=0;o<t.length;++o){let i=t[o],c=o===t.length-1,d=l==="/"?n:n.slice(l.length)||"/",f=ir({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d),m=i.route;if(!f&&c&&s&&!t[t.length-1].route.index&&(f=ir({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},d)),!f)return null;Object.assign(a,f.params),r.push({params:a,pathname:$n([l,f.pathname]),pathnameBase:hh($n([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=$n([l,f.pathnameBase]))}return r}function ir(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[s,t]=oh(e.path,e.caseSensitive,e.end),a=n.match(s);if(!a)return null;let l=a[0],r=l.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:t.reduce((c,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let _=o[f]||"";r=l.slice(0,l.length-_.length).replace(/(.)\/+$/,"$1")}const j=o[f];return y&&!j?c[m]=void 0:c[m]=(j||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:r,pattern:e}}function oh(e,n,s){n===void 0&&(n=!1),s===void 0&&(s=!0),np(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,i)=>(t.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),t]}function ih(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return np(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function lp(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let s=n.endsWith("/")?n.length-1:n.length,t=e.charAt(s);return t&&t!=="/"?null:e.slice(s)||"/"}function ch(e,n){n===void 0&&(n="/");let{pathname:s,search:t="",hash:a=""}=typeof e=="string"?gs(e):e;return{pathname:s?s.startsWith("/")?s:uh(s,n):n,search:mh(t),hash:gh(a)}}function uh(e,n){let s=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?s.length>1&&s.pop():a!=="."&&s.push(a)}),s.length>1?s.join("/"):"/"}function pl(e,n,s,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ph(e){return e.filter((n,s)=>s===0||n.route.path&&n.route.path.length>0)}function dh(e,n){let s=ph(e);return n?s.map((t,a)=>a===s.length-1?t.pathname:t.pathnameBase):s.map(t=>t.pathnameBase)}function fh(e,n,s,t){t===void 0&&(t=!1);let a;typeof e=="string"?a=gs(e):(a=at({},e),q(!a.pathname||!a.pathname.includes("?"),pl("?","pathname","search",a)),q(!a.pathname||!a.pathname.includes("#"),pl("#","pathname","hash",a)),q(!a.search||!a.search.includes("#"),pl("#","search","hash",a)));let l=e===""||a.pathname==="",r=l?"/":a.pathname,o;if(r==null)o=s;else{let f=n.length-1;if(!t&&r.startsWith("..")){let m=r.split("/");for(;m[0]==="..";)m.shift(),f-=1;a.pathname=m.join("/")}o=f>=0?n[f]:"/"}let i=ch(a,o),c=r&&r!=="/"&&r.endsWith("/"),d=(l||r===".")&&s.endsWith("/");return!i.pathname.endsWith("/")&&(c||d)&&(i.pathname+="/"),i}const $n=e=>e.join("/").replace(/\/\/+/g,"/"),hh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rp=["post","put","patch","delete"];new Set(rp);const vh=["get",...rp];new Set(vh);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lt(){return lt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},lt.apply(this,arguments)}const io=S.createContext(null),jh=S.createContext(null),$a=S.createContext(null),La=S.createContext(null),ys=S.createContext({outlet:null,matches:[],isDataRoute:!1}),op=S.createContext(null);function Ia(){return S.useContext(La)!=null}function za(){return Ia()||q(!1),S.useContext(La).location}function ip(e){S.useContext($a).static||S.useLayoutEffect(e)}function _h(){let{isDataRoute:e}=S.useContext(ys);return e?Lh():wh()}function wh(){Ia()||q(!1);let e=S.useContext(io),{basename:n,future:s,navigator:t}=S.useContext($a),{matches:a}=S.useContext(ys),{pathname:l}=za(),r=JSON.stringify(dh(a,s.v7_relativeSplatPath)),o=S.useRef(!1);return ip(()=>{o.current=!0}),S.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){t.go(c);return}let f=fh(c,JSON.parse(r),l,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:$n([n,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[n,t,r,l,e])}function xh(e,n){return kh(e,n)}function kh(e,n,s,t){Ia()||q(!1);let{navigator:a}=S.useContext($a),{matches:l}=S.useContext(ys),r=l[l.length-1],o=r?r.params:{};r&&r.pathname;let i=r?r.pathnameBase:"/";r&&r.route;let c=za(),d;if(n){var f;let E=typeof n=="string"?gs(n):n;i==="/"||(f=E.pathname)!=null&&f.startsWith(i)||q(!1),d=E}else d=c;let m=d.pathname||"/",y=m;if(i!=="/"){let E=i.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=Xf(e,{pathname:y}),_=Ph(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:$n([i,a.encodeLocation?a.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?i:$n([i,a.encodeLocation?a.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,s,t);return n&&_?S.createElement(La.Provider,{value:{location:lt({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:cn.Pop}},_):_}function Sh(){let e=$h(),n=yh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),s=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),s?S.createElement("pre",{style:a},s):null,null)}const Eh=S.createElement(Sh,null);class Ch extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,s){return s.location!==n.location||s.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:s.error,location:s.location,revalidation:n.revalidation||s.revalidation}}componentDidCatch(n,s){console.error("React Router caught the following error during render",n,s)}render(){return this.state.error!==void 0?S.createElement(ys.Provider,{value:this.props.routeContext},S.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bh(e){let{routeContext:n,match:s,children:t}=e,a=S.useContext(io);return a&&a.static&&a.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=s.route.id),S.createElement(ys.Provider,{value:n},t)}function Ph(e,n,s,t){var a;if(n===void 0&&(n=[]),s===void 0&&(s=null),t===void 0&&(t=null),e==null){var l;if(!s)return null;if(s.errors)e=s.matches;else if((l=t)!=null&&l.v7_partialHydration&&n.length===0&&!s.initialized&&s.matches.length>0)e=s.matches;else return null}let r=e,o=(a=s)==null?void 0:a.errors;if(o!=null){let d=r.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||q(!1),r=r.slice(0,Math.min(r.length,d+1))}let i=!1,c=-1;if(s&&t&&t.v7_partialHydration)for(let d=0;d<r.length;d++){let f=r[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:y}=s,j=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||j){i=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((d,f,m)=>{let y,j=!1,_=null,E=null;s&&(y=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||Eh,i&&(c<0&&m===0?(j=!0,E=null):c===m&&(j=!0,E=f.route.hydrateFallbackElement||null)));let p=n.concat(r.slice(0,m+1)),u=()=>{let h;return y?h=_:j?h=E:f.route.Component?h=S.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,S.createElement(bh,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:s!=null},children:h})};return s&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?S.createElement(Ch,{location:s.location,revalidation:s.revalidation,component:_,error:y,children:u(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):u()},null)}var cp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cp||{}),ha=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ha||{});function Nh(e){let n=S.useContext(io);return n||q(!1),n}function Th(e){let n=S.useContext(jh);return n||q(!1),n}function Rh(e){let n=S.useContext(ys);return n||q(!1),n}function up(e){let n=Rh(),s=n.matches[n.matches.length-1];return s.route.id||q(!1),s.route.id}function $h(){var e;let n=S.useContext(op),s=Th(ha.UseRouteError),t=up(ha.UseRouteError);return n!==void 0?n:(e=s.errors)==null?void 0:e[t]}function Lh(){let{router:e}=Nh(cp.UseNavigateStable),n=up(ha.UseNavigateStable),s=S.useRef(!1);return ip(()=>{s.current=!0}),S.useCallback(function(a,l){l===void 0&&(l={}),s.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,lt({fromRouteId:n},l)))},[e,n])}function pp(e){q(!1)}function Ih(e){let{basename:n="/",children:s=null,location:t,navigationType:a=cn.Pop,navigator:l,static:r=!1,future:o}=e;Ia()&&q(!1);let i=n.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:i,navigator:l,static:r,future:lt({v7_relativeSplatPath:!1},o)}),[i,o,l,r]);typeof t=="string"&&(t=gs(t));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:j="default"}=t,_=S.useMemo(()=>{let E=lp(d,i);return E==null?null:{location:{pathname:E,search:f,hash:m,state:y,key:j},navigationType:a}},[i,d,f,m,y,j,a]);return _==null?null:S.createElement($a.Provider,{value:c},S.createElement(La.Provider,{children:s,value:_}))}function zh(e){let{children:n,location:s}=e;return xh(cr(n),s)}new Promise(()=>{});function cr(e,n){n===void 0&&(n=[]);let s=[];return S.Children.forEach(e,(t,a)=>{if(!S.isValidElement(t))return;let l=[...n,a];if(t.type===S.Fragment){s.push.apply(s,cr(t.props.children,l));return}t.type!==pp&&q(!1),!t.props.index||!t.props.children||q(!1);let r={id:t.props.id||l.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(r.children=cr(t.props.children,l)),s.push(r)}),s}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,s)=>{let t=e[s];return n.concat(Array.isArray(t)?t.map(a=>[s,a]):[[s,t]])},[]))}function Dh(e,n){let s=ur(e);return n&&n.forEach((t,a)=>{s.has(a)||n.getAll(a).forEach(l=>{s.append(a,l)})}),s}const Oh="6";try{window.__reactRouterVersion=Oh}catch{}const Mh="startTransition",bi=Lp[Mh];function Ah(e){let{basename:n,children:s,future:t,window:a}=e,l=S.useRef();l.current==null&&(l.current=Qf({window:a,v5Compat:!0}));let r=l.current,[o,i]=S.useState({action:r.action,location:r.location}),{v7_startTransition:c}=t||{},d=S.useCallback(f=>{c&&bi?bi(()=>i(f)):i(f)},[i,c]);return S.useLayoutEffect(()=>r.listen(d),[r,d]),S.createElement(Ih,{basename:n,children:s,location:o.location,navigationType:o.action,navigator:r,future:t})}var Pi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pi||(Pi={}));var Ni;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ni||(Ni={}));function Fh(e){let n=S.useRef(ur(e)),s=S.useRef(!1),t=za(),a=S.useMemo(()=>Dh(t.search,s.current?null:n.current),[t.search]),l=_h(),r=S.useCallback((o,i)=>{const c=ur(typeof o=="function"?o(a):o);s.current=!0,l("?"+c,i)},[l,a]);return[a,r]}const Uh="_component_nqcni_1",Bh="_sideNav_nqcni_6",Vh="_main_nqcni_13",Hh="_children_nqcni_21",Rt={component:Uh,sideNav:Bh,main:Vh,children:Hh},Wh="_list_1ltry_1",Qh="_title_1ltry_6",Yh="_listItem_1ltry_11",Kh="_listItemActive_1ltry_18",Xh="_link_1ltry_26",Un={list:Wh,title:Qh,listItem:Yh,listItemActive:Kh,link:Xh},Gh=[{lang:"Simplified Chinese",url:"https://github.com/Web3-Club/vyper-by-example_Chinese"}],qh=[{path:"whats-new",title:"What's New in Vyper 0.4"},{path:"hello-world",title:"Hello World"},{path:"values",title:"Data Types - Values"},{path:"references",title:"Data Types - References"},{path:"dynamic-arrays",title:"Dynamic Arrays"},{path:"constructor",title:"Constructor"},{path:"private-public-state-variables",title:"Private and Public State Variables"},{path:"constants",title:"Constants"},{path:"immutable",title:"Immutable"},{path:"function",title:"Function"},{path:"internal-external-functions",title:"Internal and External Functions"},{path:"view-pure-functions",title:"View and Pure Functions"},{path:"if-else",title:"If Else"},{path:"for-loop",title:"For Loop"},{path:"error",title:"Error"},{path:"event",title:"Event"},{path:"payable",title:"Payable"},{path:"default-function",title:"Default Function"},{path:"send-ether",title:"Send Ether"},{path:"interface",title:"Interface"},{path:"raw-call",title:"Raw Call"},{path:"delegate-call",title:"Delegate Call"},{path:"hash-function",title:"Hash Function"},{path:"verify-signature",title:"Verify Signature"},{path:"re-entrancy-lock",title:"Re-entrancy Lock"},{path:"create-new-contract",title:"Create New Contract"},{path:"self-destruct",title:"Self Destruct"},{path:"imports",title:"Imports"},{path:"modules",title:"Modules"},{path:"unsafe-math",title:"Unsafe Math"},{path:"print",title:"Debug with Print"}],Zh=[{path:"rebase-token",title:"Rebase Token"},{path:"lerp",title:"Linear Interpolation"},{path:"multi-sig-wallet",title:"Multi Sig Wallet"}],Jh=[{path:"curve-swap",title:"Curve Swap"},{path:"curve-liquidity",title:"Curve Add and Remove Liquidity"}],co=[{title:"",routes:qh.map(e=>({...e,path:`/${e.path}`}))},{title:"App",routes:Zh.map(e=>({...e,path:`/app/${e.path}`}))},{title:"DeFi",routes:Jh.map(e=>({...e,path:`/defi/${e.path}`}))}],ma=co.map(({routes:e})=>e).flat(),em=ma.reduce((e,n,s)=>(e[n.path]=s,e),{});function nm(e){const n=em[e];if(n>=0){const s=ma[n-1]||null,t=ma[n+1]||null;return{prev:s,next:t}}return{prev:null,next:null}}const sm=({onClick:e})=>{const n=za();function s(t,a){t.preventDefault(),e(a)}return g.jsxs(g.Fragment,{children:[g.jsx("h3",{className:Un.category,children:"Basic"}),co.map(({routes:t,title:a},l)=>g.jsxs("div",{children:[a&&g.jsx("h3",{className:Un.title,children:a}),g.jsx("ul",{className:Un.list,children:t.map(({path:r,title:o})=>{const i=!!ir(r,n.pathname);return g.jsx("li",{className:i?Un.listItemActive:Un.listItem,children:g.jsx("a",{className:Un.link,href:r,onClick:c=>s(c,r),children:o})},r)})})]},l))]})},tm=({size:e,className:n="",onClick:s})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",strokeWidth:2,stroke:"currentColor",className:n,width:e,height:e,onClick:s,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),am="_component_2l8uv_1",lm="_a_2l8uv_14",rm="_center_2l8uv_18",om="_centerInner_2l8uv_24",im="_logo_2l8uv_30",cm="_header_2l8uv_34",um="_mode_2l8uv_39",pm="_hamburger_2l8uv_45",He={component:am,a:lm,center:rm,centerInner:om,logo:im,header:cm,mode:um,hamburger:pm},dm=({size:e,className:n=""})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 438.277 438.277",width:e,height:e,className:n,children:g.jsx("path",{d:"M428.756 300.104c-.664-3.81-2.334-7.047-4.996-9.713-5.9-5.903-12.752-7.142-20.554-3.716-20.937 9.708-42.641 14.558-65.097 14.558-28.171 0-54.152-6.94-77.943-20.838-23.791-13.894-42.631-32.736-56.525-56.53-13.899-23.793-20.844-49.773-20.844-77.945 0-21.888 4.333-42.683 12.991-62.384 8.66-19.7 21.176-36.973 37.543-51.82 6.283-5.898 7.713-12.752 4.287-20.557-3.236-7.801-9.041-11.511-17.415-11.132-29.121 1.141-56.72 7.664-82.797 19.556C111.33 31.478 88.917 47.13 70.168 66.548c-18.747 19.414-33.595 42.399-44.54 68.95-10.942 26.553-16.416 54.39-16.416 83.511 0 29.694 5.806 58.054 17.416 85.082 11.613 27.028 27.218 50.344 46.824 69.949 19.604 19.599 42.92 35.207 69.951 46.822 27.028 11.607 55.384 17.415 85.075 17.415 42.64 0 81.987-11.563 118.054-34.69 36.069-23.124 63.05-54.006 80.944-92.645 1.524-3.423 1.951-7.036 1.28-10.838zm-122.191 84.064c-24.646 11.711-50.676 17.562-78.087 17.562-24.743 0-48.39-4.853-70.947-14.558-22.554-9.705-41.971-22.695-58.246-38.972-16.271-16.272-29.259-35.686-38.97-58.241-9.707-22.556-14.561-46.203-14.561-70.948 0-40.922 12.135-77.466 36.403-109.636 24.266-32.165 55.531-53.959 93.788-65.379-19.795 31.405-29.694 65.379-29.694 101.926 0 34.644 8.564 66.715 25.697 96.223 17.128 29.499 40.446 52.811 69.95 69.948 29.499 17.129 61.565 25.694 96.211 25.694 10.656 0 21.129-.855 31.408-2.57-17.318 20.938-38.307 37.255-62.952 48.951z"})}),fm=({size:e,className:n=""})=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 302.4 302.4",width:e,height:e,className:n,children:[g.jsx("path",{d:"M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2z",stroke:"#252519",strokeWidth:12}),g.jsx("path",{d:"M292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zm-140.8 110c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zm106.8-7.2-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zm107.2 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zm39.2 80.8c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zm0-155.2-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z",stroke:"#252519",strokeWidth:5})]}),hm=({size:e,className:n="",fill:s})=>g.jsxs("svg",{"data-name":"Transparent Logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 1773.62",width:e,height:e,className:n,fill:s,children:[g.jsx("path",{style:{opacity:.8},d:"m1024 886.81-256 443.41 256 443.4 256-443.4-256-443.41z"}),g.jsx("path",{style:{opacity:.6},d:"m1280 443.41-256 443.4 256 443.41 256-443.41-256-443.4zM768 443.41l-256 443.4 256 443.41 256-443.41-256-443.4z"}),g.jsx("path",{style:{opacity:.45},d:"m1536 0-256 443.41 256 443.4 256-443.4L1536 0zM1152 221.7H896L768 443.41l256 443.4 256-443.4-128-221.71zM512 0 256 443.41l256 443.4 256-443.4L512 0z"}),g.jsx("path",{style:{opacity:.3},d:"M1792 443.4 2048 0h-512l256 443.4zM256 443.4 512 0H0l256 443.4z"})]}),mm="/assets/powered-by-cyfrin-CPb_54II.png",gm="_component_12cj2_1",ym={component:gm},vm=()=>g.jsx("a",{target:"__blank",href:"https://www.cyfrin.io/",children:g.jsx("img",{src:mm,alt:"Powered by Cyfrin",className:ym.component})});function jm(){const{state:e,setTheme:n,toggleSideNav:s}=oo();function t(){n(e.theme=="light"?"dark":"light")}return g.jsxs("div",{className:He.component,children:[g.jsx(tm,{size:20,className:He.hamburger,onClick:s}),g.jsxs("div",{className:He.center,children:[g.jsxs("div",{className:He.centerInner,children:[g.jsx("a",{href:"/",className:He.a,children:g.jsx(hm,{className:He.logo,size:30,fill:e.theme=="dark"?"rgb(255, 0, 255)":"currentColor"})}),g.jsx("h3",{className:He.header,children:g.jsx("a",{href:"/",className:He.a,children:"Vyper by Example"})})]}),g.jsx(vm,{})]}),g.jsx("button",{className:He.mode,onClick:t,children:e.theme=="dark"?g.jsx(dm,{size:20}):g.jsx(fm,{size:20})})]})}const _m="_component_13dyh_1",wm="_row_13dyh_8",xm="_bar_13dyh_13",km="_to_13dyh_21",Sm="_social_13dyh_24",Em="_updraft_13dyh_29",Cm="_telegram_13dyh_33",bm="_discord_13dyh_37",Pm="_youTube_13dyh_41",ve={component:_m,row:wm,bar:xm,to:km,social:Sm,updraft:Em,telegram:Cm,discord:bm,youTube:Pm},dp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAyCAYAAAAOX8ZtAAAABmJLR0QA/wD/AP+gvaeTAAADmUlEQVRoge3bT2wUZRjH8c9Ml39S09IC/uFiRBIwabzVE15oiJBwLBcP3npS4E4IBA/EAwmcCInhoCeJNwgQoDGRC8GESMDYhJRyUAQplZa2tBYdD+9suqmsadHO+6J8kzd5Z3Znnt/+9p1ndt593swCKViFV7EWK8vWjpewouyvLLdfLg9rxZKG0ywt39NIOzL8gdE5r42W++uMY6bs/4pJTOARxsr+RHncOO7hbsbjhXzWrNkLBcvxPt5FF97Ga8L+55VR/Ijv8R0u45uM3+d9hoK+gnsFxf+g3S74cD6mrCj4PAHBMdpXRUgLTc35IgGRMduXzYz5OAFxKbSP6p5kpTHtuI22eSem/y4P8UbGaF7u6PXCmDrtgh/q5vTE05IkPcya0x1RSIp0Q1aEy+lhZDEpsirH+tgqEmV9jjdjq0iUt3Ksi60iUdbl6Kw05NatrFlTachnpDPH6kpD7tjBrVscOMCyZZWGXiCrqzcHWlvZv5/r1+ntrTz8POms/rJqZMMGTp7k4kW6uqLJaMLqHB2xVdiyhatXOX48pXzUmQvTmfGp1ejrY2CA3bvDdlyW50grK3Z0cORIyEfbtsVUsjQ9c+ps3MiZM1y4wKZNMRQsS9ecOj09XLvG0aO0VTqrkvDIaWTJEnbtYnAw5KOWliqiPgcjp5HOzpCPrlxh8+bFjrY0R7HYUZ5Tshy/xVYxb4aH2bOH7m4uXVrsaFM1TEvlt04zZmY4dox9+xgbqyrqdN2cdDl9OoyWwcGqI0/nUjVnYIDt28NTfPXGkKQ5IyNhpHR1cfZsTCVTNaF8Iz5PnnDiBHv3hsQbn6kaRmKr0N8fRsuNG7GVNDKcI97XdPMmO3eGR4S0jIHhmhjmjI9z+DCHDjGdVsprIII5p05x8CD371ca9hl4UMODSkOeP19puH/AcI47sVUkys85bsVWkSiDLwoJmtOWZ6H8dCi2ksQYyhir1+dciSolPb5ltnipP6KQFPmaFwWTT+ORUDA5kkMWEvIncTUlw6fZ3OfNgpaCUwnUAcds/QVP/6u1YHnBZwmIjNHOFbOrfJpT8EHBUAKCq2h3i1C9n8/14e+WFLXgPWFJ0TvCkqLXxajn+fd4jJ/wg7Cs6DLOZU1mQ5ua04wi/Am4Fq8Id7lWs4vSVjX0W4W7X17GaZ9zqvriszr19xb++ov9EZ40bD/GVNkfFWYzJ8vjJsp+fWHaJH7BnSzsmzd/AkgxNaTAmykLAAAAAElFTkSuQmCC",fp="/assets/updraft-D5eZlzRj.png",Nm="/assets/telegram-DMavHjFx.png",Tm="/assets/discord-BqSoMD3G.png";function Rm(){return g.jsxs("div",{className:ve.component,children:[g.jsxs("div",{className:ve.row,children:[g.jsx("img",{src:fp,alt:"updraft",className:ve.updraft}),g.jsx("a",{href:"https://updraft.cyfrin.io",target:"__blank",children:"Cyfrin Updraft"})]}),g.jsxs("div",{className:ve.social,children:[g.jsxs("div",{className:ve.row,children:[g.jsx("img",{src:Tm,alt:"discord",className:ve.discord}),g.jsx("a",{href:"https://discord.gg/bt8FK2wkcW",target:"__blank",children:"Discord"})]}),g.jsxs("div",{className:ve.row,children:[g.jsx("img",{src:Nm,alt:"telegram",className:ve.telegram}),g.jsx("a",{href:"https://t.me/smartcontractprogrammer",target:"__blank",children:"Telegram"})]}),g.jsxs("div",{className:ve.row,children:[g.jsx("img",{src:dp,alt:"youtube",className:ve.youTube}),g.jsx("a",{href:"https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA",target:"__blank",children:"YouTube"})]})]}),g.jsx("div",{className:ve.row,children:g.jsx("a",{href:"mailto:contact@vyper-by-example.org",children:"contact@vyper-by-example.org"})}),g.jsxs("div",{className:ve.row,children:[g.jsx("a",{href:"https://github.com/Cyfrin/vyper-by-example.github.io",target:"__blank",children:"source"}),g.jsx("div",{className:ve.bar,children:"|"}),g.jsx("a",{href:"https://github.com/Cyfrin/vyper-by-example.github.io/blob/gh-pages/LICENSE",target:"__blank",children:"license"})]})]})}const $m=({children:e})=>{const{state:n}=oo(),s=S.useRef(null);S.useLayoutEffect(()=>{s.current&&(s.current.scrollTop=sessionStorage.getItem("scroll")||0)},[]);function t(a){var l;sessionStorage.setItem("scroll",(l=s.current)==null?void 0:l.scrollTop),window.location.href=a}return g.jsxs("div",{className:Rt.component,children:[g.jsx("div",{ref:s,className:Rt.sideNav,style:n.sideNav?{width:"var(--side-nav-width)",padding:"20px 10px 60px 10px"}:{width:0},children:n.sideNav?g.jsx(sm,{onClick:t}):null}),g.jsxs("div",{className:Rt.main,children:[g.jsx(jm,{}),g.jsxs("div",{className:Rt.children,children:[e,g.jsx(Rm,{})]})]})]})},hp=({title:e,description:n})=>(S.useEffect(()=>{document.title=e;const s=document.querySelector("meta[name='description']");s&&s.setAttribute("content",n)},[]),null),Ti='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20" height="20" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /> </svg>',Lm='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="20" height="20" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>';function Im(e=[]){S.useEffect(()=>{const n=a=>{try{const l=document.createElement("textarea");l.setAttribute("style","width:1px;border:0;opacity:0;"),document.body.appendChild(l),navigator.clipboard.writeText(a.innerText),document.body.removeChild(l)}catch(l){console.error(l)}},s=[];return document.querySelectorAll("pre").forEach(a=>{var c;if(((c=a.parentElement)==null?void 0:c.className)=="copy-wrapper")return;const l=document.createElement("div");l.className="copy-wrapper",a.parentElement.insertBefore(l,a),l.appendChild(a);const r=document.createElement("button");r.className="copy",r.title="Copy",r.innerHTML=Ti,r.ariaLabel="Copy to clipboard",a.after(r);function o(d){d.preventDefault(),n(a.childNodes[0]),r.innerHTML=Lm}function i(d){d.preventDefault(),r.innerHTML=Ti}r.addEventListener("click",o),r.addEventListener("blur",i),s.push(()=>{r.removeEventListener("click",o),r.removeEventListener("blur",i)})}),()=>{for(let a=0;a<s.length;a++)s[a]()}},e)}const zm=({className:e="",html:n})=>(Im([]),g.jsx("div",{className:`code ${e}`,dangerouslySetInnerHTML:{__html:n}})),Dm="_component_ni5i2_1",Om="_content_ni5i2_5",Mm="_prevNext_ni5i2_8",dl={component:Dm,content:Om,prevNext:Mm},L=({title:e,version:n,description:s,html:t,prev:a,next:l})=>g.jsxs("div",{className:dl.component,children:[g.jsx(hp,{title:`${e} | Vyper by Example | ${n}`,description:s}),g.jsxs("div",{className:dl.content,children:[g.jsx("h2",{children:e}),g.jsx(zm,{html:t}),g.jsxs("div",{className:dl.prevNext,children:[a&&g.jsxs("a",{href:a.path,children:["< ",a.title]}),l&&g.jsxs("a",{href:l.path,children:[l.title," >"]})]}),g.jsxs("p",{children:["Try on"," ",g.jsx("a",{href:"https://smartcontract.engineer/challenges?language=vyper",target:"__blank",children:"Smart Contract Engineer"})]})]})]}),Am="0.4.0",Fm="Linear interpolation",Um="Lerp",Bm=`<p>Example of linear interpolation (lerp).</p>
<p>Value changes linearly from <code>y0</code> to <code>y1</code> over the time span of <code>t0</code> to <code>t1</code>.</p>
<pre><code class="language-vyper"><span class="hljs-comment">#pragma version 0.4.0</span>

y0: public(uint256)
y1: public(uint256)
t0: public(uint256)
t1: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.y0 = <span class="hljs-number">10</span>
    <span class="hljs-variable language_">self</span>.y1 = <span class="hljs-number">20</span>
    <span class="hljs-variable language_">self</span>.t0 = block.timestamp + <span class="hljs-number">30</span>
    <span class="hljs-variable language_">self</span>.t1 = block.timestamp + <span class="hljs-number">60</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">lerp</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._lerp(<span class="hljs-variable language_">self</span>.y0, <span class="hljs-variable language_">self</span>.y1, <span class="hljs-variable language_">self</span>.t0, <span class="hljs-variable language_">self</span>.t1, block.timestamp)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_lerp</span>(<span class="hljs-params">y0: uint256, y1: uint256, x0: uint256, x1: uint256, x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">assert</span> x0 &lt; x1

    <span class="hljs-keyword">if</span> x &lt;= x0:
        <span class="hljs-keyword">return</span> y0

    <span class="hljs-keyword">if</span> x &gt;= x1:
        <span class="hljs-keyword">return</span> y1

    <span class="hljs-comment"># w(x) = (x - x0) / (x1 - x0)</span>
    <span class="hljs-comment"># f(x) = y0*(1 - w(x)) + y1*w(x)</span>
    <span class="hljs-comment">#      = (y0*((x1 - x0) - (x - x0)) + y1*(x - x0)) / (x1 - x0)</span>
    x1_x: uint256 = x1 - x
    x_x0: uint256 = x - x0
    x1_x0: uint256 = x1 - x0

    <span class="hljs-keyword">return</span> (y0*x1_x + y1*x_x0) // x1_x0

</code></pre>`,Vm=({prev:e,next:n})=>g.jsx(L,{version:Am,title:Fm,description:Um,html:Bm,prev:e,next:n}),Hm="0.4.0",Wm="Multi Sig Wallet",Qm="multi sig wallet",Ym=`<p>Example of a multi sig wallet</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

MAX_TX_DATA_SIZE: constant(uint256) = <span class="hljs-number">1000</span>

<span class="hljs-comment"># Max owners</span>
M: public(constant(uint256)) = <span class="hljs-number">5</span>
<span class="hljs-comment"># Number of signatures required</span>
k: public(uint256)
<span class="hljs-comment"># Mapping storing address of owners</span>
auth: public(HashMap[address, <span class="hljs-built_in">bool</span>])
owners: public(DynArray[address, M])
<span class="hljs-comment"># Nonce used to invalidate executed transaction</span>
nonce: public(uint256)

event Execute:
    tx_id: indexed(bytes32)
    to: indexed(address)
    data: Bytes[MAX_TX_DATA_SIZE]
    val: uint256
    nonce: uint256

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">k: uint256, owners: DynArray[address, M]</span>):
    n: uint256 = <span class="hljs-built_in">len</span>(owners)

    <span class="hljs-keyword">assert</span> <span class="hljs-number">0</span> &lt; n, <span class="hljs-string">"n = 0"</span>
    <span class="hljs-keyword">assert</span> n &lt;= M, <span class="hljs-string">"n &gt; max"</span>
    <span class="hljs-keyword">assert</span> <span class="hljs-number">0</span> &lt; k, <span class="hljs-string">"k = 0"</span>
    <span class="hljs-keyword">assert</span> k &lt;= n, <span class="hljs-string">"k &gt; n"</span>

    <span class="hljs-variable language_">self</span>.k = k

    <span class="hljs-keyword">for</span> owner: address <span class="hljs-keyword">in</span> owners:
        <span class="hljs-keyword">assert</span> owner != empty(address), <span class="hljs-string">"owner = 0 address"</span>
        <span class="hljs-keyword">assert</span> <span class="hljs-keyword">not</span> <span class="hljs-variable language_">self</span>.auth[owner], <span class="hljs-string">"duplicate owner"</span>
        <span class="hljs-variable language_">self</span>.auth[owner] = <span class="hljs-literal">True</span>

    <span class="hljs-variable language_">self</span>.owners = owners

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_check_auth</span>():
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.auth[msg.sender], <span class="hljs-string">"not authorized"</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_check_self</span>():
    <span class="hljs-keyword">assert</span> msg.sender == <span class="hljs-variable language_">self</span>, <span class="hljs-string">"not authorized"</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set</span>(<span class="hljs-params">k: uint256</span>):
    <span class="hljs-variable language_">self</span>._check_self()
    <span class="hljs-keyword">assert</span> k &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"k = 0"</span>
    <span class="hljs-keyword">assert</span> k &lt;= <span class="hljs-built_in">len</span>(<span class="hljs-variable language_">self</span>.owners), <span class="hljs-string">"k &gt; n"</span>
    <span class="hljs-variable language_">self</span>.k = k

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">addr: address</span>):
    <span class="hljs-variable language_">self</span>._check_self()
    <span class="hljs-keyword">assert</span> addr != empty(address), <span class="hljs-string">"0 address"</span>
    <span class="hljs-keyword">assert</span> <span class="hljs-keyword">not</span> <span class="hljs-variable language_">self</span>.auth[addr], <span class="hljs-string">"already owner"</span>

    <span class="hljs-variable language_">self</span>.owners.append(addr)
    <span class="hljs-variable language_">self</span>.auth[addr] = <span class="hljs-literal">True</span>

    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(<span class="hljs-variable language_">self</span>.owners) &lt;= M, <span class="hljs-string">"n &gt; max"</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">remove</span>(<span class="hljs-params">i: uint256</span>):
    <span class="hljs-variable language_">self</span>._check_self()

    addr: address = <span class="hljs-variable language_">self</span>.owners[i]
    last: address = <span class="hljs-variable language_">self</span>.owners.pop()
    <span class="hljs-keyword">if</span> addr != last:
        <span class="hljs-variable language_">self</span>.owners[i] = last

    <span class="hljs-variable language_">self</span>.auth[addr] = <span class="hljs-literal">False</span>

    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(<span class="hljs-variable language_">self</span>.owners) &gt;= <span class="hljs-variable language_">self</span>.k, <span class="hljs-string">"n &lt; k"</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_get_tx_id</span>(<span class="hljs-params">
    to: address,
    data: Bytes[MAX_TX_DATA_SIZE],
    val: uint256,
    nonce: uint256
</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            convert(chain.<span class="hljs-built_in">id</span>, bytes32),
            convert(<span class="hljs-variable language_">self</span>, bytes32),
            convert(to, bytes32),
            data,
            convert(val, bytes32),
            convert(nonce, bytes32),
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_tx_id</span>(<span class="hljs-params">to: address, data: Bytes[MAX_TX_DATA_SIZE], val: uint256, nonce: uint256</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._get_tx_id(to, data, val, nonce)

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_get_eth_hash</span>(<span class="hljs-params">tx_id: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            <span class="hljs-string">b&#x27;\\x19Ethereum Signed Message:\\n32&#x27;</span>,
            tx_id
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_eth_hash</span>(<span class="hljs-params">tx_id: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._get_eth_hash(tx_id)

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], eth_hash: bytes32, signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    <span class="hljs-keyword">return</span> ecrecover(eth_hash, v, r, s) == signer

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], eth_hash: bytes32, signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._verify(sig, eth_hash, signer)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-meta">@nonreentrant</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">exec</span>(<span class="hljs-params">
    to: address,
    data: Bytes[MAX_TX_DATA_SIZE],
    val: uint256,
    signers: DynArray[address, M],
    sigs: DynArray[Bytes[<span class="hljs-number">65</span>], M]
</span>):
    <span class="hljs-variable language_">self</span>._check_auth()
    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(signers) == <span class="hljs-built_in">len</span>(sigs), <span class="hljs-string">"len(signers) != len(sigs)"</span>
    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(signers) == <span class="hljs-variable language_">self</span>.k, <span class="hljs-string">"signers &lt; k"</span>

    nonce: uint256 = <span class="hljs-variable language_">self</span>.nonce
    tx_id: bytes32 = <span class="hljs-variable language_">self</span>._get_tx_id(to, data, val, nonce)
    eth_hash: bytes32 = <span class="hljs-variable language_">self</span>._get_eth_hash(tx_id)

    prev: address = empty(address)
    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(signers), bound = M):
        signer: address = signers[i]
        sig: Bytes[<span class="hljs-number">65</span>] = sigs[i]

        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.auth[signer], <span class="hljs-string">"not authorized"</span>
        <span class="hljs-keyword">assert</span> convert(prev, uint256) &lt; convert(signer, uint256), <span class="hljs-string">"duplicate or unsorted signer"</span>
        prev = signer

        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>._verify(sig, eth_hash, signer), <span class="hljs-string">"invalid sig"</span>

    <span class="hljs-variable language_">self</span>.nonce = nonce + <span class="hljs-number">1</span>
    raw_call(to, data, value = val)

    log Execute(tx_id, to, data, val, nonce)

</code></pre>`,Km=({prev:e,next:n})=>g.jsx(L,{version:Hm,title:Wm,description:Qm,html:Ym,prev:e,next:n}),Xm="0.4.0",Gm="Rebase token",qm="Rebase token in Vyper",Zm=`<p>Example of rebase token</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Rebase token (compound interest rate)</span>

RAY: constant(uint256) = <span class="hljs-number">10</span>**<span class="hljs-number">27</span>
MIN_R: constant(uint256) = <span class="hljs-number">10</span>**<span class="hljs-number">25</span>

authorized: public(HashMap[address, <span class="hljs-built_in">bool</span>])
pie: public(uint256)
slices: public(HashMap[address, uint256])
rate: public(uint256)
acc: public(uint256)
t: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.authorized[msg.sender] = <span class="hljs-literal">True</span>
    <span class="hljs-variable language_">self</span>.rate = RAY
    <span class="hljs-variable language_">self</span>.acc = RAY
    <span class="hljs-variable language_">self</span>.t = block.timestamp

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_rate</span>(<span class="hljs-params">ray: uint256</span>):
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.authorized[msg.sender]
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
    <span class="hljs-variable language_">self</span>.rate = ray

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">r</span>() -&gt; uint256:
    n: uint256 = (block.timestamp - <span class="hljs-variable language_">self</span>.t)
    <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">0</span>:
        rate: uint256 = <span class="hljs-variable language_">self</span>.rate
        <span class="hljs-keyword">if</span> rate &gt; RAY:
            <span class="hljs-comment"># rate = 1 + x</span>
            x: uint256 = rate - RAY
            <span class="hljs-comment"># binomial expansion</span>
            <span class="hljs-comment"># (1+x)^n = 1 + n*x + (n*(n-1)/2*x^2) + (n*(n-1)*(n-2)/(2*3)*x^3) + ...</span>
            x1: uint256 = n * x
            x2: uint256 = x1 * ((n - <span class="hljs-number">1</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">1</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">2</span> * x // RAY
            x3: uint256 = x2 * ((n - <span class="hljs-number">2</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">2</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">3</span> * x // RAY
            <span class="hljs-keyword">return</span> RAY + x1 + x2 + x3
        <span class="hljs-keyword">elif</span> rate &lt; RAY:
            <span class="hljs-comment"># rate = 1 - x</span>
            x: uint256 = RAY - rate
            <span class="hljs-comment"># binomial expansion</span>
            <span class="hljs-comment"># (1-x)^n = 1 - n*x + (n*(n-1)/2*x^2) - (n*(n-1)*(n-2)/(2*3)*x^3) + ...</span>
            x1: uint256 = n * x
            x2: uint256 = x1 * ((n - <span class="hljs-number">1</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">1</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">2</span> * x // RAY
            x3: uint256 = x2 * ((n - <span class="hljs-number">2</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">2</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">3</span> * x // RAY
            <span class="hljs-comment"># Check underflow and min</span>
            <span class="hljs-comment"># RAY - x1 + x2 - x3 &lt;= MIN_R</span>
            <span class="hljs-keyword">if</span> RAY + x2 &lt; MIN_R + x1 + x3:
                <span class="hljs-keyword">return</span> MIN_R
            <span class="hljs-keyword">return</span> RAY - x1 + x2 - x3
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> RAY
    <span class="hljs-keyword">return</span> RAY

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">a</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.acc * <span class="hljs-variable language_">self</span>.r() // RAY

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">total_supply</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.pie * <span class="hljs-variable language_">self</span>.a() // RAY

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">balance_of</span>(<span class="hljs-params">usr: address</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.slices[usr] * <span class="hljs-variable language_">self</span>.a() // RAY

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">poke</span>():
    <span class="hljs-variable language_">self</span>.acc *= <span class="hljs-variable language_">self</span>.r() // RAY
    <span class="hljs-variable language_">self</span>.t = block.timestamp

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mint</span>(<span class="hljs-params">dst: address, amt: uint256</span>):
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.authorized[msg.sender]
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
    a: uint256 = <span class="hljs-variable language_">self</span>.acc
    s: uint256 = amt * RAY // a
    <span class="hljs-keyword">assert</span> s &gt; <span class="hljs-number">0</span>
    <span class="hljs-variable language_">self</span>.slices[dst] += s
    <span class="hljs-variable language_">self</span>.pie += s

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">burn</span>(<span class="hljs-params">amt: uint256</span>):
    <span class="hljs-keyword">if</span> amt == max_value(uint256):
        <span class="hljs-variable language_">self</span>.pie -= <span class="hljs-variable language_">self</span>.slices[msg.sender]
        <span class="hljs-variable language_">self</span>.slices[msg.sender] = <span class="hljs-number">0</span>
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
        a: uint256 = <span class="hljs-variable language_">self</span>.acc
        s: uint256 = amt * RAY // a
        <span class="hljs-keyword">assert</span> s &gt; <span class="hljs-number">0</span>
        <span class="hljs-variable language_">self</span>.pie -= s
        <span class="hljs-variable language_">self</span>.slices[msg.sender] -= s

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">transfer</span>(<span class="hljs-params">dst: address, amt: uint256</span>):
    <span class="hljs-keyword">if</span> amt == max_value(uint256):
        <span class="hljs-variable language_">self</span>.slices[dst] += <span class="hljs-variable language_">self</span>.slices[msg.sender]
        <span class="hljs-variable language_">self</span>.slices[msg.sender] = <span class="hljs-number">0</span>
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
        a: uint256 = <span class="hljs-variable language_">self</span>.acc
        s: uint256 = amt * RAY // a
        <span class="hljs-variable language_">self</span>.slices[msg.sender] -= s
        <span class="hljs-variable language_">self</span>.slices[dst] += s
</code></pre>`,Jm=({prev:e,next:n})=>g.jsx(L,{version:Xm,title:Gm,description:qm,html:Zm,prev:e,next:n}),eg="0.4.0",ng="Constants",sg="Constants in Vyper",tg=`<p>Constants are variables that cannot change.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

MY_CONSTANT: public(constant(uint256)) = <span class="hljs-number">123</span>
MIN: public(constant(uint256)) = <span class="hljs-number">1</span>
MAX: public(constant(uint256)) = <span class="hljs-number">10</span>
ADDR: public(constant(address)) = <span class="hljs-number">0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deprecated_constants</span>() -&gt; (address, uint256, bytes32):
    <span class="hljs-comment"># 0.3 deprecated constants</span>
    <span class="hljs-comment"># return (ZERO_ADDRESS, MAX_UINT256, EMPTY_BYTES32)</span>
    <span class="hljs-comment"># 0.4</span>
    <span class="hljs-keyword">return</span> (empty(address), max_value(uint256), empty(bytes32))

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getMyConstants</span>() -&gt; (uint256, uint256, address):
    <span class="hljs-keyword">return</span> (MIN, MAX, ADDR)
</code></pre>`,ag=({prev:e,next:n})=>g.jsx(L,{version:eg,title:ng,description:sg,html:tg,prev:e,next:n}),lg="0.4.0",rg="Constructor",og="Constructor in Vyper",ig=`<p><code>__init__</code> is a special function that is executed only once when the contract is deployed.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

owner: public(address)
name: public(String[<span class="hljs-number">10</span>])
createdAt: public(uint256)
expiresAt: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">name: String[<span class="hljs-number">10</span>], duration: uint256</span>):
    <span class="hljs-comment"># set owner to caller</span>
    <span class="hljs-variable language_">self</span>.owner = msg.sender
    <span class="hljs-comment"># set name from input</span>
    <span class="hljs-variable language_">self</span>.name = name
    <span class="hljs-variable language_">self</span>.createdAt = block.timestamp
    <span class="hljs-variable language_">self</span>.expiresAt = block.timestamp + duration
</code></pre>`,cg=({prev:e,next:n})=>g.jsx(L,{version:lg,title:rg,description:og,html:ig,prev:e,next:n}),ug="0.4.0",pg="Create New Contract",dg="Create new contract in Vyper",fg=`<p>Vyper contracts can deploy new contracts using the function <code>create_minimal_proxy_to</code>.</p>
<p><code>create_minimal_proxy_to</code> is also known as "minimal proxy contract". How it works, we won&#39;t explain it here.</p>
<p>Here we will focus on how to use it to deploy new contracts.</p>
<h3>How to use <code>create_minimal_proxy_to</code></h3>
<ol>
<li>Deploy <code>ContractToDeploy</code>. This is the "master copy." All deployed contracts will execute code from this master copy.</li>
<li>Call <code>deploy()</code> passing the address of the master copy and any other arguments needed to setup the new contract</li>
</ol>
<p>Here is <code>ContractToDeploy</code></p>
<p>ContractToDeploy.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

owner: public(address)

<span class="hljs-comment"># create_minimal_proxy_to</span>
<span class="hljs-comment"># 1. Deploy master copy</span>
<span class="hljs-comment"># 2. Call create_minimal_proxy_to</span>

<span class="hljs-comment"># Master copy contract M (Test.vy)</span>
<span class="hljs-comment">#                      |</span>
<span class="hljs-comment">#                      V</span>
<span class="hljs-comment"># Factory -- create_minimal_proxy_to --&gt; contract A (Test.vy)</span>

<span class="hljs-comment"># user -&gt; A -- delegate call --&gt; M</span>

<span class="hljs-comment"># __init__ is not called when deployed from create_minimal_proxy_to</span>
<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
  <span class="hljs-variable language_">self</span>.owner = msg.sender

<span class="hljs-comment"># call once after create_minimal_proxy_to</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>):
  <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.owner == empty(address), <span class="hljs-string">"owner != zero address"</span>
  <span class="hljs-variable language_">self</span>.owner = owner

<span class="hljs-comment"># DANGER: never have selfdestruct in original contract used by create_minimal_proxy_to</span>
<span class="hljs-comment"># This function has been deprecated from version 0.3.8 onwards. The underlying</span>
<span class="hljs-comment"># opcode will eventually undergo breaking changes, and its use is not recommended.</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">kill</span>():
  selfdestruct(msg.sender)
</code></pre><p>Create.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

interface ContractToDeploy:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>): nonpayable

event Log:
    addr: address

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deploy</span>(<span class="hljs-params">master_copy: address, owner: address</span>):
    addr: address = create_minimal_proxy_to(master_copy)
    extcall ContractToDeploy(addr).set_owner(owner)
    log Log(addr)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deploy_test</span>(<span class="hljs-params">master_copy: address</span>):
    addr: address = create_minimal_proxy_to(master_copy)
    extcall ContractToDeploy(addr).set_owner(<span class="hljs-variable language_">self</span>)
    log Log(addr)
</code></pre>`,hg=({prev:e,next:n})=>g.jsx(L,{version:ug,title:pg,description:dg,html:fg,prev:e,next:n}),mg="0.4.0",gg="Default Function",yg="Default function in Vyper",vg=`<p>A contract can have a default function, executed when a function that does not exist is called. This is the same function as the fallback function in Solidity.</p>
<p>This function is named <code>__default__</code> and it is commonly used to receive Ether.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

event Payment:
    sender: indexed(address)
    amount: uint256

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    log Payment(msg.sender, msg.value)
</code></pre>`,jg=({prev:e,next:n})=>g.jsx(L,{version:mg,title:gg,description:yg,html:vg,prev:e,next:n}),_g="0.4.0",wg="Curve Add and Remove Liquidity",xg="Curve Add and Remove Liquidity",kg=`<p>Add and remove liquidity from Curve pools</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">from</span> ethereum.ercs <span class="hljs-keyword">import</span> IERC20

interface IStableSwap:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">add_liquidity</span>(<span class="hljs-params">amounts: uint256[<span class="hljs-number">3</span>], min_shares: uint256</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity</span>(<span class="hljs-params">shares: uint256, min_amounts: uint256[<span class="hljs-number">3</span>]</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity_one_coin</span>(<span class="hljs-params">shares: uint256, i: int128, min_amount: uint256</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">get_virtual_price</span>() -&gt; uint256: view

DAI: constant(address) = <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>
USDC: constant(address) = <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>
USDT: constant(address) = <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>

POOL: constant(address) = <span class="hljs-number">0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7</span>
COINS: constant(address[<span class="hljs-number">3</span>]) = [DAI, USDC, USDT]

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_transfer</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"transfer(address,uint256)"</span>),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_transfer_from</span>(<span class="hljs-params">coin: address, _<span class="hljs-keyword">from</span>: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"transferFrom(address,address,uint256)"</span>),
            convert(_<span class="hljs-keyword">from</span>, bytes32),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_approve</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"approve(address,uint256)"</span>),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">add_liquidity</span>(<span class="hljs-params">amounts: uint256[<span class="hljs-number">3</span>], min_shares: uint256</span>):
    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):
        <span class="hljs-keyword">if</span> amounts[i] &gt; <span class="hljs-number">0</span>:
            <span class="hljs-variable language_">self</span>._safe_transfer_from(COINS[i], msg.sender, <span class="hljs-variable language_">self</span>, amounts[i])
            <span class="hljs-variable language_">self</span>._safe_approve(COINS[i], POOL, amounts[i])

    extcall IStableSwap(POOL).add_liquidity(amounts, min_shares)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">calc_value_of_shares</span>(<span class="hljs-params">shares: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> shares * staticcall IStableSwap(POOL).get_virtual_price() // <span class="hljs-number">10</span>**<span class="hljs-number">18</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity</span>(<span class="hljs-params">shares: uint256, min_amounts: uint256[<span class="hljs-number">3</span>]</span>):
    extcall IStableSwap(POOL).remove_liquidity(shares, min_amounts)

    <span class="hljs-keyword">for</span> coin: address <span class="hljs-keyword">in</span> [DAI, USDC, USDT]:
        bal: uint256 = staticcall IERC20(coin).balanceOf(<span class="hljs-variable language_">self</span>)
        <span class="hljs-variable language_">self</span>._safe_transfer(coin, msg.sender, bal)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity_one_coin</span>(<span class="hljs-params">shares: uint256, i: int128, min_amount: uint256</span>):
    extcall IStableSwap(POOL).remove_liquidity_one_coin(shares, i, min_amount)

    bal: uint256 = staticcall IERC20(COINS[i]).balanceOf(<span class="hljs-variable language_">self</span>)
    <span class="hljs-variable language_">self</span>._safe_transfer(COINS[i], msg.sender, bal)
</code></pre>`,Sg=({prev:e,next:n})=>g.jsx(L,{version:_g,title:wg,description:xg,html:kg,prev:e,next:n}),Eg="0.4.0",Cg="Curve Swap",bg="Curve Swap",Pg=`<p>Swap tokens on Curve</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">from</span> ethereum.ercs <span class="hljs-keyword">import</span> IERC20

interface IStableSwap:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">exchange</span>(<span class="hljs-params">i: int128, j: int128, dx: uint256, min_dy: uint256</span>): nonpayable

DAI: constant(address) = <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>
USDC: constant(address) = <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>
USDT: constant(address) = <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>

POOL: constant(address) = <span class="hljs-number">0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7</span>
COINS: constant(address[<span class="hljs-number">3</span>]) = [DAI, USDC, USDT]

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_transfer</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"transfer(address,uint256)"</span>),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_transfer_from</span>(<span class="hljs-params">coin: address, _<span class="hljs-keyword">from</span>: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"transferFrom(address,address,uint256)"</span>),
            convert(_<span class="hljs-keyword">from</span>, bytes32),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_approve</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"approve(address,uint256)"</span>),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">swap</span>(<span class="hljs-params">i: int128, j: int128, dx: uint256, min_dy: uint256</span>):
    <span class="hljs-variable language_">self</span>._safe_transfer_from(COINS[i], msg.sender, <span class="hljs-variable language_">self</span>, dx)
    <span class="hljs-variable language_">self</span>._safe_approve(COINS[i], POOL, dx)

    extcall IStableSwap(POOL).exchange(i, j, dx, min_dy)

    bal: uint256 = staticcall IERC20(COINS[j]).balanceOf(<span class="hljs-variable language_">self</span>)
    <span class="hljs-variable language_">self</span>._safe_transfer(COINS[j], msg.sender, bal)
</code></pre>`,Ng=({prev:e,next:n})=>g.jsx(L,{version:Eg,title:Cg,description:bg,html:Pg,prev:e,next:n}),Tg="0.4.0",Rg="Delegate Call",$g="Delegate call in Vyper",Lg=`<p>When contract <code>A</code> delegates call to contract <code>B</code>, <code>B</code>&#39;s code will be executed inside contract <code>A</code>. This will update state variables and Ether balance inside contract <code>A</code> and not <code>B</code>.</p>
<p>Delegate call is commonly used to create an upgradable contract.</p>
<p>Here is the contract that we will delegate call to.</p>
<p>TestDelegateCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># State variables must be declared in the same order</span>
<span class="hljs-comment"># as contract making the call</span>
x: public(uint256)
y: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">update_x</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-comment"># when this function is called with delegate call</span>
    <span class="hljs-comment"># this will update self.x inside the calling contract</span>
    <span class="hljs-variable language_">self</span>.x = x + <span class="hljs-number">1</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">update_y</span>(<span class="hljs-params">y: uint256</span>):
    <span class="hljs-variable language_">self</span>.y = y * y
</code></pre><p>DelegateCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

x: public(uint256)
y: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">update_x</span>(<span class="hljs-params">to: address, x: uint256</span>):
    raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"update_x(uint256)"</span>),
            convert(x, bytes32)
        ),
        is_delegate_call=<span class="hljs-literal">True</span>
    )

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">update_y</span>(<span class="hljs-params">to: address, y: uint256</span>):
    raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"update_y(uint256)"</span>),
            convert(y, bytes32)
        ),
        is_delegate_call=<span class="hljs-literal">True</span>
    )
</code></pre>`,Ig=({prev:e,next:n})=>g.jsx(L,{version:Tg,title:Rg,description:$g,html:Lg,prev:e,next:n}),zg="0.4.0",Dg="Dynamic Arrays",Og="Dynamic arrays in Vyper",Mg=`<p>Dynamic arrays are bounded arrays whose length can change. The length of the array cannot exceed the maximum length set where the array is declared.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Dynamic array of type uint256, max 3 elements</span>
nums: public(DynArray[uint256, <span class="hljs-number">3</span>])

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.nums.append(<span class="hljs-number">11</span>)
    <span class="hljs-variable language_">self</span>.nums.append(<span class="hljs-number">22</span>)
    <span class="hljs-variable language_">self</span>.nums.append(<span class="hljs-number">33</span>)
    <span class="hljs-comment"># This will revert (Appending to array with max 3 elements)</span>
    <span class="hljs-comment"># self.nums.append(44)</span>

    <span class="hljs-comment"># Remove last element</span>
    <span class="hljs-variable language_">self</span>.nums.pop()

    <span class="hljs-comment"># Delete all elements</span>
    <span class="hljs-variable language_">self</span>.nums = []
    <span class="hljs-comment"># Set values</span>
    <span class="hljs-variable language_">self</span>.nums = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">examples</span>(<span class="hljs-params">xs: DynArray[uint256, <span class="hljs-number">5</span>]</span>) -&gt; DynArray[uint256, <span class="hljs-number">8</span>]:
    ys: DynArray[uint256, <span class="hljs-number">5</span>] = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]
    <span class="hljs-comment"># Copy xs into ys</span>
    <span class="hljs-keyword">for</span> x: uint256 <span class="hljs-keyword">in</span> xs:
        ys.append(x)
    <span class="hljs-keyword">return</span> ys

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">filter</span>(<span class="hljs-params">addrs: DynArray[address, <span class="hljs-number">5</span>]</span>) -&gt; DynArray[address, <span class="hljs-number">5</span>]:
    nonzeros: DynArray[address, <span class="hljs-number">5</span>] = []
    <span class="hljs-keyword">for</span> addr: address <span class="hljs-keyword">in</span> addrs:
        <span class="hljs-keyword">if</span> addr != empty(address):
            nonzeros.append(addr)
    <span class="hljs-keyword">return</span> nonzeros
</code></pre>`,Ag=({prev:e,next:n})=>g.jsx(L,{version:zg,title:Dg,description:Og,html:Mg,prev:e,next:n}),Fg="0.4.0",Ug="Error",Bg="Error in Vyper",Vg=`<p>Use <code>assert</code> and <code>raise</code> to check inputs and validate state.</p>
<p>When an error occurs, it will halt the entire function call, undoing any changes.</p>
<p>You will still need to pay gas for the failed transaction.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

x: public(uint256)
owner: public(address)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.owner = msg.sender

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_assert</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-keyword">assert</span> x &gt;= <span class="hljs-number">1</span>, <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-comment"># self.x will not be updated if there is an error from line above</span>
    <span class="hljs-variable language_">self</span>.x = x

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_raise</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-comment"># same check as above using "raise"</span>
    <span class="hljs-keyword">if</span> x &lt;= <span class="hljs-number">1</span>:
        <span class="hljs-keyword">raise</span> <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-variable language_">self</span>.x = x

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_test_error_bubbles_up</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-keyword">assert</span> x &gt;= <span class="hljs-number">1</span>, <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-variable language_">self</span>.x = x

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_error_bubbles_up</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-variable language_">self</span>._test_error_bubbles_up(x)
    <span class="hljs-comment"># self.x = 123 will not be executed if there is an error</span>
    <span class="hljs-comment"># from function above</span>
    <span class="hljs-variable language_">self</span>.x = <span class="hljs-number">123</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-keyword">assert</span> msg.sender == <span class="hljs-variable language_">self</span>.owner, <span class="hljs-string">"!owner"</span>
    <span class="hljs-keyword">assert</span> owner != empty(address), <span class="hljs-string">"owner = zero"</span>
    <span class="hljs-variable language_">self</span>.owner = owner
</code></pre>`,Hg=({prev:e,next:n})=>g.jsx(L,{version:Fg,title:Ug,description:Bg,html:Vg,prev:e,next:n}),Wg="0.4.0",Qg="Event",Yg="Event in Vyper",Kg=`<p>Events write logs to the blockchain, commonly used by application to monitor blockchain state and as a cheaper alternative to store data on the blockchain without using state variables.</p>
<p>Events can be efficiently searched by indexing their arguments. Up to 3 parameters can be indexed.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># up to 3 index</span>
event Transfer:
    <span class="hljs-comment"># enables quick search of all Transfer events where sender is a certain address</span>
    sender: indexed(address)
    <span class="hljs-comment"># enables quick search of all Transfer events where receiver is a certain address</span>
    receiver: indexed(address)
    amount: uint256

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">transfer</span>(<span class="hljs-params">receiver: address, amount: uint256</span>):
    <span class="hljs-comment"># some code ...</span>
    log Transfer(msg.sender, receiver, amount)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mint</span>(<span class="hljs-params">amount: uint256</span>):
    <span class="hljs-comment"># some code ...</span>
    log Transfer(empty(address), msg.sender, amount)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">burn</span>(<span class="hljs-params">amount: uint256</span>):
    <span class="hljs-comment"># some code ...</span>
    log Transfer(msg.sender, empty(address), amount)
</code></pre>`,Xg=({prev:e,next:n})=>g.jsx(L,{version:Wg,title:Qg,description:Yg,html:Kg,prev:e,next:n}),Gg="0.4.0",qg="For Loop",Zg="For loop in Vyper",Jg=`<p>There are 2 ways to loop through an array, using <code>range</code> and directly looping through array elements.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_start_end</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>, <span class="hljs-number">10</span>):
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_list</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    nums: uint256[<span class="hljs-number">4</span>] = [<span class="hljs-number">11</span>, <span class="hljs-number">22</span>, <span class="hljs-number">33</span>, <span class="hljs-number">44</span>]

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> nums:
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_skip</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">2</span>:
            <span class="hljs-keyword">continue</span>
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">4</span>:
            <span class="hljs-keyword">break</span>
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_bound</span>(<span class="hljs-params">start: uint256, end: uint256</span>) -&gt; uint256:
  last: uint256 = start
  <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(start, end, bound = <span class="hljs-number">5</span>):
    last = i
  <span class="hljs-keyword">return</span> last

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_bound_dyn_arr</span>(<span class="hljs-params">xs: DynArray[uint256, <span class="hljs-number">5</span>]</span>) -&gt; uint256:
    last: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(xs), bound = <span class="hljs-number">3</span>):
      last = i
    <span class="hljs-keyword">return</span> last

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">nums: uint256[<span class="hljs-number">10</span>]</span>) -&gt; uint256:
    s: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> n: uint256 <span class="hljs-keyword">in</span> nums:
        s += n
    <span class="hljs-keyword">return</span> s
</code></pre>`,ey=({prev:e,next:n})=>g.jsx(L,{version:Gg,title:qg,description:Zg,html:Jg,prev:e,next:n}),ny="0.4.0",sy="Function",ty="Function in Vyper",ay=`<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">multiply</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x * y

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">divide</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># integer division</span>
    <span class="hljs-keyword">return</span> x // y

<span class="hljs-comment"># A funciton that does nothing</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">doNothing</span>():
    <span class="hljs-comment"># pass is useful when you want to compile the contract now,</span>
    <span class="hljs-comment"># write the code later</span>
    <span class="hljs-keyword">pass</span>

<span class="hljs-comment"># Functions can return multiple outputs</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">multiOut</span>() -&gt; (uint256, <span class="hljs-built_in">bool</span>):
    <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">True</span>)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">addAndSub</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; (uint256, uint256):
    <span class="hljs-keyword">return</span> (x + y, x - y)
</code></pre>`,ly=({prev:e,next:n})=>g.jsx(L,{version:ny,title:sy,description:ty,html:ay,prev:e,next:n}),ry="0.4.0",oy="Hash Function",iy="Hash function in Vyper",cy=`<p>Vyper supports the same hash function available in Solidity, <code>keccack256</code>.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_hash</span>(<span class="hljs-params">addr: address, num: uint256, </span>) -&gt; bytes32:
    <span class="hljs-comment"># input of keccak256 can be String, Bytes or bytes32</span>
    <span class="hljs-keyword">return</span> keccak256(
        <span class="hljs-comment"># convert different data into Bytes</span>
        concat(
            convert(addr, bytes32),
            convert(num, bytes32),
            convert(<span class="hljs-string">"THIS IS A STRING"</span>, Bytes[<span class="hljs-number">16</span>])
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_message_hash</span>(<span class="hljs-params"><span class="hljs-built_in">str</span>: String[<span class="hljs-number">100</span>]</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(<span class="hljs-built_in">str</span>)
</code></pre>`,uy=({prev:e,next:n})=>g.jsx(L,{version:ry,title:oy,description:iy,html:cy,prev:e,next:n}),py="0.4.0",dy="Hello World",fy="Hello world in Vyper",hy=`<p><code>pragma</code> specifies the compiler version of Vyper.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Create a string variable that can store maximum 100 characters</span>
greet: public(String[<span class="hljs-number">100</span>])

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre>`,my=({prev:e,next:n})=>g.jsx(L,{version:py,title:dy,description:fy,html:hy,prev:e,next:n}),gy="0.4.0",yy="If Else Conditional Statement",vy="If else conditional statement in Vyper",jy=`<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">if_else</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">if</span> x &lt;= <span class="hljs-number">10</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>
    <span class="hljs-keyword">elif</span> x &lt;= <span class="hljs-number">20</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">abs_value</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">if</span> x &gt;= y:
        <span class="hljs-keyword">return</span> x - y
    <span class="hljs-keyword">return</span> y - x
</code></pre>`,_y=({prev:e,next:n})=>g.jsx(L,{version:gy,title:yy,description:vy,html:jy,prev:e,next:n}),wy="0.4.0",xy="Immutable",ky="Immutable in Vyper",Sy=`<p>Immutable variables are like constants except value are assigned when the contract is deployed.</p>
<h3>When to use <code>immutable</code> variables?</h3>
<ul>
<li>You have a variable that needs to be set when the contract is deployed,
for example like setting contract owner to <code>msg.sender</code></li>
<li>and this variable will never change after deployment</li>
</ul>
<h4>Why declare variables as <code>immutable</code>?</h4>
<p>Like constants, <code>immutable</code> variables save run time gas</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

OWNER: public(immutable(address))
MY_IMMUTABLE: public(immutable(uint256))

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">val: uint256</span>):
    OWNER = msg.sender
    MY_IMMUTABLE = val


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_my_immutable</span>() -&gt; uint256:
  <span class="hljs-keyword">return</span> MY_IMMUTABLE
</code></pre>`,Ey=({prev:e,next:n})=>g.jsx(L,{version:wy,title:xy,description:ky,html:Sy,prev:e,next:n}),Cy="0.4.0",by="Imports",Py="Imports in Vyper",Ny=`<p>Different ways to import Vyper files</p>
<pre><code>├── example.vy
└── math.vy
</code></pre><p>math.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
  <span class="hljs-keyword">return</span> x * y
</code></pre><p>example.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">import</span> math
<span class="hljs-comment"># Other ways to import</span>
<span class="hljs-comment"># import math as m</span>
<span class="hljs-comment"># from . import math</span>
<span class="hljs-comment"># from . import math as m</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">call_math_mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
  <span class="hljs-keyword">return</span> math.mul(x, y)
</code></pre>`,Ty=({prev:e,next:n})=>g.jsx(L,{version:Cy,title:by,description:Py,html:Ny,prev:e,next:n}),Ry="0.4.0",$y="Interface",Ly="Interface in Vyper",Iy=`<p>Use <code>interface</code> to call other smart contracts.</p>
<p>Here is the <code>TestInterface</code> self.contract that we will call.</p>
<p>TestInterface.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

val: public(uint256)
msg_value: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val</span>(<span class="hljs-params">val: uint256</span>):
    <span class="hljs-variable language_">self</span>.val = val

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_with_msg_value</span>(<span class="hljs-params">val: uint256</span>):
    <span class="hljs-variable language_">self</span>.val = val
    <span class="hljs-variable language_">self</span>.msg_value = msg.value

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_return_val</span>(<span class="hljs-params">val: uint256</span>) -&gt; uint256:
    <span class="hljs-variable language_">self</span>.val = val
    <span class="hljs-keyword">return</span> val

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_val</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.val

</code></pre><p>Interface.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

interface ITest:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">val</span>() -&gt; uint256: view
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val</span>(<span class="hljs-params">val: uint256</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_with_msg_value</span>(<span class="hljs-params">val: uint256</span>): payable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_return_val</span>(<span class="hljs-params">val: uint256</span>) -&gt; uint256: nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">get_val</span>() -&gt; uint256: view

test: public(ITest)
v: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">test_addr: address</span>):
    <span class="hljs-comment"># store contract instance</span>
    <span class="hljs-variable language_">self</span>.test = ITest(test_addr)
    <span class="hljs-comment"># if you need to get address from self.test</span>
    addr: address = <span class="hljs-variable language_">self</span>.test.address

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_set_val</span>(<span class="hljs-params">val: uint256</span>):
    extcall <span class="hljs-variable language_">self</span>.test.set_val(val)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_msg_val</span>(<span class="hljs-params">test_addr: address, val: uint256</span>):
    extcall ITest(test_addr).set_val_with_msg_value(val, value = msg.value)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_return_val</span>(<span class="hljs-params">test_addr: address, val: uint256</span>):
    <span class="hljs-variable language_">self</span>.v = extcall ITest(test_addr).set_val_return_val(val)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_get_val</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> staticcall <span class="hljs-variable language_">self</span>.test.get_val()
</code></pre>`,zy=({prev:e,next:n})=>g.jsx(L,{version:Ry,title:$y,description:Ly,html:Iy,prev:e,next:n}),Dy="0.4.0",Oy="Internal and External Functions",My="Internal and external functions in Vyper",Ay=`<p><code>@internal</code> functions can only be called inside the contract.</p>
<p><code>@external</code> functions can only be called from outside the contract.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Internal functions can only be called inside this contract</span>
<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_add</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x + y

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">ext_func</span>() -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-keyword">return</span> <span class="hljs-literal">True</span>

<span class="hljs-comment"># External functions can only be called from outside this contract</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">avg</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># cannot call other external function</span>
    <span class="hljs-comment"># self.extFunc()</span>

    <span class="hljs-comment"># can call internal functions</span>
    z: uint256 = <span class="hljs-variable language_">self</span>._add(x, y)

    <span class="hljs-keyword">return</span> (x + y) // <span class="hljs-number">2</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sqr</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x * x

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sum_of_squares</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._sqr(x) + <span class="hljs-variable language_">self</span>._sqr(y)
</code></pre>`,Fy=({prev:e,next:n})=>g.jsx(L,{version:Dy,title:Oy,description:My,html:Ay,prev:e,next:n}),Uy="0.4.0",By="Modules",Vy="Modules in Vyper",Hy=`<p>Reuse code with modules.</p>
<pre><code>├── auth_2_step.vy
├── auth.vy
├── example_1.vy
├── example_2.vy
└── math.vy
</code></pre><h3>Importing modules</h3>
<p>math.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Pure function can easily be reused in importing module</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x * y

<span class="hljs-comment"># Not included in final code if not used by importing module</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">div</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x // y
</code></pre><p>auth.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Not export to importing module?</span>
owner: public(address)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.owner = msg.sender

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_check_owner</span>():
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.owner == msg.sender

<span class="hljs-comment"># Must be exported by importing module</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-variable language_">self</span>._check_owner()
    <span class="hljs-variable language_">self</span>.owner = owner
</code></pre><p>example_1.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">import</span> auth
<span class="hljs-keyword">import</span> math

<span class="hljs-comment"># Need to call auth.__init__()</span>
initializes: auth
<span class="hljs-comment"># Exports auth.set_owner and auth.owner</span>
exports: (auth.set_owner, auth.owner)

my_num: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    auth.__init__()

<span class="hljs-comment"># Example of calling auth._check_owner</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_my_num</span>(<span class="hljs-params">x: uint256</span>):
    auth._check_owner()
    <span class="hljs-variable language_">self</span>.my_num = x

<span class="hljs-comment"># Example of reading auth.owner</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_owner</span>() -&gt; address:
    <span class="hljs-keyword">return</span> auth.owner

<span class="hljs-comment"># Example of importing and using a pure function</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">my_func</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> math.mul(x, y)

</code></pre><h3>The <code>use</code> statement</h3>
<p>auth_2_step.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>
<span class="hljs-keyword">import</span> auth

<span class="hljs-comment"># This contract is not a valid contract. auth.__init__() must be called</span>
<span class="hljs-comment"># by a contract that imports and uses this contract</span>

uses: auth

pending_owner: address

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">begin_transfer</span>(<span class="hljs-params">new_owner: address</span>):
    auth._check_owner()
    <span class="hljs-variable language_">self</span>.pending_owner = new_owner

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">accept_transfer</span>():
    <span class="hljs-keyword">assert</span> msg.sender == <span class="hljs-variable language_">self</span>.pending_owner
    auth.owner = msg.sender
    <span class="hljs-variable language_">self</span>.pending_owner = empty(address)
</code></pre><p>example_2.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">import</span> auth
<span class="hljs-keyword">import</span> auth_2_step

initializes: auth
<span class="hljs-comment"># auth is dependency of auth_2_step</span>
initializes: auth_2_step[auth := auth]

<span class="hljs-comment"># export all external functions</span>
exports: auth_2_step.__interface__

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    auth.__init__()
    auth_2_step.__init__()
</code></pre>`,Wy=({prev:e,next:n})=>g.jsx(L,{version:Uy,title:By,description:Vy,html:Hy,prev:e,next:n}),Qy="0.4.0",Yy="Payable",Ky="Payable in Vyper",Xy=`<p>Functions declared with <code>@payable</code> can receive Ether.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

event Deposit:
    sender: indexed(address)
    amount: uint256

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deposit</span>():
    log Deposit(msg.sender, msg.value)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_balance</span>() -&gt; uint256:
    <span class="hljs-comment"># Get balance of Ether stored in this contract</span>
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.balance

owner: public(address)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">pay</span>():
    <span class="hljs-keyword">assert</span> msg.value &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"msg.value = 0"</span>
    <span class="hljs-variable language_">self</span>.owner = msg.sender
</code></pre>`,Gy=({prev:e,next:n})=>g.jsx(L,{version:Qy,title:Yy,description:Ky,html:Xy,prev:e,next:n}),qy="0.4.0",Zy="Debug with Print",Jy="Debug with Print",ev=`<p>Use the built-in function <code>print</code> to debug smart contracts.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_print</span>():
    x: uint256 = <span class="hljs-number">123</span>
    <span class="hljs-comment"># Set hardhat_compat = True when testing with Hardhat</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"print something here"</span>, x, hardhat_compat=<span class="hljs-literal">True</span>)
</code></pre>`,nv=({prev:e,next:n})=>g.jsx(L,{version:qy,title:Zy,description:Jy,html:ev,prev:e,next:n}),sv="0.4.0",tv="Private and Public State Variables",av="Private and public state variables in Vyper",lv=`<p>Private state variables cannot be accessed from outside the contract.</p>
<p>Public state variables can be read by anyone, including users and other contracts.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># publis state variable</span>
owner: public(address)
<span class="hljs-comment"># private state variable</span>
foo: uint256
bar: public(<span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.owner = msg.sender
    <span class="hljs-variable language_">self</span>.foo = <span class="hljs-number">123</span>
    <span class="hljs-variable language_">self</span>.bar = <span class="hljs-literal">True</span>
</code></pre>`,rv=({prev:e,next:n})=>g.jsx(L,{version:sv,title:tv,description:av,html:lv,prev:e,next:n}),ov="0.4.0",iv="Raw Call",cv="Raw call in Vyper",uv=`<p><code>raw_call</code> is a low level function. It is used to call and send Ether to other functions.</p>
<p>For this example, we will write a contract that calls this contract below.</p>
<p>TestRawCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>


sender: public(address)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_add</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-variable language_">self</span>.sender = msg.sender
    <span class="hljs-keyword">return</span> x + y

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_sub</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-variable language_">self</span>.sender = msg.sender
    <span class="hljs-keyword">return</span> x - y
</code></pre><p>RawCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_raw_call</span>(<span class="hljs-params">to: address, x: uint256, y: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        to, <span class="hljs-comment"># address to call</span>
        <span class="hljs-comment"># data to send in Bytes</span>
        concat(
            method_id(<span class="hljs-string">"test_add(uint256,uint256)"</span>), <span class="hljs-comment"># function to call</span>
            convert(x, bytes32), <span class="hljs-comment"># first input</span>
            convert(y, bytes32), <span class="hljs-comment"># secode input</span>
        ),
        max_outsize=<span class="hljs-number">32</span>, <span class="hljs-comment"># max size of ouput, default 0</span>
        gas=<span class="hljs-number">100000</span>, <span class="hljs-comment"># optional, amount of gas to send, default forwards all gas</span>
        value=<span class="hljs-number">0</span>, <span class="hljs-comment"># optional, amount of ETH to send, default 0</span>
    )
    z: uint256 = convert(res, uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">send_eth</span>(<span class="hljs-params">to: address</span>):
    <span class="hljs-comment"># Example to send ETH</span>
    <span class="hljs-comment"># data = b"", empty data</span>
    <span class="hljs-comment"># value = msg.value, all of ETH that was sent to this function</span>
    raw_call(to, <span class="hljs-string">b""</span>, value=msg.value)

diff: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_raw_call_sub</span>(<span class="hljs-params">to: address, x: uint256, y: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"test_sub(uint256,uint256)"</span>),
            convert(x, bytes32),
            convert(y, bytes32)
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )

    <span class="hljs-variable language_">self</span>.diff = convert(res, uint256)
</code></pre>`,pv=({prev:e,next:n})=>g.jsx(L,{version:ov,title:iv,description:cv,html:uv,prev:e,next:n}),dv="0.4.0",fv="Re-Entrancy Lock",hv="Re-entrancy lock in Vyper",mv=`<p>Vyper has a handy way to secure your contract from re-entrancy.</p>
<p>A re-entrancy lock can be created on a function with <code>@nonreentrant</code>.</p>
<p>Contract with re-entrancy lock</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@nonreentrant</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>():
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)

</code></pre><p>Contract without re-entrancy lock</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>():
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)

</code></pre><p>Contract to test re-entrancy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

interface ILock:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>(): nonpayable

count: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">if</span> <span class="hljs-variable language_">self</span>.count &lt; <span class="hljs-number">2</span>:
        <span class="hljs-variable language_">self</span>.count += <span class="hljs-number">1</span>
        extcall ILock(msg.sender).func()

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">reset</span>():
    <span class="hljs-variable language_">self</span>.count = <span class="hljs-number">0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_lock</span>(<span class="hljs-params">to: address</span>):
    extcall ILock(to).func()

</code></pre>`,gv=({prev:e,next:n})=>g.jsx(L,{version:dv,title:fv,description:hv,html:mv,prev:e,next:n}),yv="0.4.0",vv="Data Types - References",jv="References in Vyper",_v=`<p>References types are data types that are passed by their reference, pointer to where the actual data is stored.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

struct Person:
    name: String[<span class="hljs-number">100</span>]
    age: uint256

<span class="hljs-comment"># Fixed sized list</span>
nums: public(uint256[<span class="hljs-number">10</span>])  <span class="hljs-comment"># must be bounded</span>
myMap: public(HashMap[address, uint256])
person: public(Person)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-comment"># This updates self.nums[0]</span>
    <span class="hljs-variable language_">self</span>.nums[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>
    <span class="hljs-variable language_">self</span>.nums[<span class="hljs-number">9</span>] = <span class="hljs-number">456</span>
    <span class="hljs-comment"># Copies self.nums to array in memory.</span>
    <span class="hljs-comment"># Does not modify referenced variable (self.nums)</span>
    arr: uint256[<span class="hljs-number">10</span>] = <span class="hljs-variable language_">self</span>.nums
    arr[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>

    <span class="hljs-comment"># This updates self.myMap</span>
    <span class="hljs-variable language_">self</span>.myMap[msg.sender] = <span class="hljs-number">1</span>
    <span class="hljs-variable language_">self</span>.myMap[msg.sender] = <span class="hljs-number">11</span>

    <span class="hljs-comment"># This updates self.person</span>
    <span class="hljs-variable language_">self</span>.person.age = <span class="hljs-number">11</span>
    <span class="hljs-variable language_">self</span>.person.name = <span class="hljs-string">"Vyper"</span>
    <span class="hljs-comment"># Person struct is copied into memory.</span>
    <span class="hljs-comment"># Does not modify referenced variable (self.person)</span>
    p: Person = <span class="hljs-variable language_">self</span>.person
    p.name = <span class="hljs-string">"Solidity"</span>
</code></pre>`,wv=({prev:e,next:n})=>g.jsx(L,{version:yv,title:vv,description:jv,html:_v,prev:e,next:n}),xv="0.4.0",kv="Self Destruct",Sv="Self destruct in Vyper",Ev=`<p><code>selfdestruct</code> deletes the contract from the blockchain. It takes a single input, an address to send all of Ether stored in the contract.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">kill</span>():
    selfdestruct(msg.sender)
</code></pre>`,Cv=({prev:e,next:n})=>g.jsx(L,{version:xv,title:kv,description:Sv,html:Ev,prev:e,next:n}),bv="0.4.0",Pv="Send Ether",Nv="Send ETH in Vyper",Tv=`<p>There are two ways to send Ether from a contract, <code>send</code> and <code>raw_call</code>. Here we introduce the simpler function to use, <code>send</code>.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Receive Ether into this contract</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">send_eth</span>(<span class="hljs-params">to: address, amount: uint256</span>):
    <span class="hljs-comment"># when Ether is sent to a contract it will call </span>
    <span class="hljs-comment"># __default__ inside the receiving contract</span>
    <span class="hljs-comment"># forwards 2300 gas</span>
    send(to, amount)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">send_all</span>(<span class="hljs-params">to: address</span>):
    send(to, <span class="hljs-variable language_">self</span>.balance)
</code></pre>`,Rv=({prev:e,next:n})=>g.jsx(L,{version:bv,title:Pv,description:Nv,html:Tv,prev:e,next:n}),$v="0.4.0",Lv="Unsafe Math",Iv="Unsafe math in Vyper",zv=`<p>Critical math checks such as overflow, underflow and division by 0 can be skipped using unsafe functions</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_add</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21510 gas</span>
    <span class="hljs-comment"># return x + y</span>

    <span class="hljs-comment"># 21472 gas</span>
    <span class="hljs-keyword">return</span> unsafe_add(x, y)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_sub</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21533 gas</span>
    <span class="hljs-comment"># return x - y</span>

    <span class="hljs-comment"># 21495 gas</span>
    <span class="hljs-keyword">return</span> unsafe_sub(x, y)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21578 gas</span>
    <span class="hljs-comment"># return x * y</span>

    <span class="hljs-comment"># 21520 gas</span>
    <span class="hljs-keyword">return</span> unsafe_mul(x, y)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_div</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21578 gas</span>
    <span class="hljs-comment"># return x // y</span>

    <span class="hljs-comment"># 21543 gas</span>
    <span class="hljs-keyword">return</span> unsafe_div(x, y)
</code></pre>`,Dv=({prev:e,next:n})=>g.jsx(L,{version:$v,title:Lv,description:Iv,html:zv,prev:e,next:n}),Ov="0.4.0",Mv="Data Types - Values",Av="Values in Vyper",Fv=`<p>Some values available in Vyper</p>
<ul>
<li><code>bool</code></li>
<li><code>int128</code></li>
<li><code>uint256</code></li>
<li><code>decimals</code></li>
<li><code>address</code></li>
<li><code>bytes32</code></li>
<li><code>Bytes</code></li>
<li><code>String</code></li>
</ul>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Must be compiled with --enable-decimals</span>

b: public(<span class="hljs-built_in">bool</span>)
i: public(int128)  <span class="hljs-comment"># -2 ** 127 to (2 ** 127 - 1)</span>
u: public(uint256)  <span class="hljs-comment"># 0 to 2 ** 256 - 1</span>
dec: public(decimal)  <span class="hljs-comment"># -2 ** 127 to (2 ** 127 - 1), 10 decimal places</span>
addr: public(address)
b32: public(bytes32)
bs: public(Bytes[<span class="hljs-number">100</span>])
s: public(String[<span class="hljs-number">100</span>])

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.b = <span class="hljs-literal">False</span>
    <span class="hljs-variable language_">self</span>.i = -<span class="hljs-number">1</span>
    <span class="hljs-variable language_">self</span>.u = <span class="hljs-number">123</span>
    <span class="hljs-variable language_">self</span>.dec = <span class="hljs-number">3.14</span>
    <span class="hljs-variable language_">self</span>.addr = <span class="hljs-number">0x5B38Da6a701c568545dCfcB03FcB875f56beddC4</span>
    <span class="hljs-variable language_">self</span>.b32 = <span class="hljs-number">0xada1b75f8ae9a65dcc16f95678ac203030505c6b465c8206e26ae84b525cdacb</span>
    <span class="hljs-variable language_">self</span>.bs = <span class="hljs-string">b"\\x01"</span>
    <span class="hljs-variable language_">self</span>.s = <span class="hljs-string">"Hello Vyper"</span>
</code></pre>`,Uv=({prev:e,next:n})=>g.jsx(L,{version:Ov,title:Mv,description:Av,html:Fv,prev:e,next:n}),Bv="0.4.0",Vv="Verify Signature",Hv="Verify signature in Vyper",Wv=`<p>Signing and verifying signature takes 3 steps.</p>
<ol>
<li>Hash the data to sign. This can be done with and without a smart contract.</li>
<li>Sign the hash. This must be done off chain.</li>
<li>Verify the signature. This is done using a smart contract.</li>
</ol>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># 1. Hash data to sign</span>
<span class="hljs-comment"># 2. Sign data offchain</span>
<span class="hljs-comment"># 3. Verify signature onchain</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_hash</span>(<span class="hljs-params">msg_str: String[<span class="hljs-number">100</span>]</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(msg_str)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_eth_hash</span>(<span class="hljs-params">msg_hash: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            <span class="hljs-string">b&#x27;\\x19Ethereum Signed Message:\\n32&#x27;</span>,
            msg_hash
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">recover_signer</span>(<span class="hljs-params">eth_signed_hash: bytes32, sig: Bytes[<span class="hljs-number">65</span>]</span>) -&gt; address:
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    <span class="hljs-keyword">return</span> ecrecover(eth_signed_hash, v, r, s)

<span class="hljs-comment"># Elliptic Curve Digital Signature Algorithm (ECDSA)</span>
<span class="hljs-comment"># accounts = await ethereum.request({ method: "eth_requestAccounts" })</span>
<span class="hljs-comment"># account = accounts[0]</span>
<span class="hljs-comment"># h = get_hash("vyper")</span>
<span class="hljs-comment"># signature = await ethereum.request({ method: "personal_sign", params: [account, h]})</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], msg_str: String[<span class="hljs-number">100</span>], signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    h: bytes32 = keccak256(msg_str)
    eth_hash: bytes32 = keccak256(
        concat(<span class="hljs-string">b"\\x19Ethereum Signed Message:\\n32"</span>, h)
    )
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    recovered_addr: address = ecrecover(eth_hash, v, r, s)
    <span class="hljs-keyword">return</span> recovered_addr == signer

</code></pre>`,Qv=({prev:e,next:n})=>g.jsx(L,{version:Bv,title:Vv,description:Hv,html:Wv,prev:e,next:n}),Yv="0.4.0",Kv="View and Pure Functions",Xv="View and pure functions in Vyper",Gv=`<p>Both <code>pure</code> and <code>view</code> functions are read only function, they cannot write anything to the blockchain.</p>
<p><code>pure</code> functions do not read any state or global variables</p>
<p><code>view</code> functions can read state variables, global variables and call internal functions.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

num: public(uint256)

<span class="hljs-comment"># Pure functions does not read any state or global variables</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">pureFunc</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x


<span class="hljs-comment"># View functions might read state or global state, or call an internal function</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">viewFunc</span>(<span class="hljs-params">x: uint256</span>) -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-keyword">return</span> x &gt; <span class="hljs-variable language_">self</span>.num


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">x: uint256, y: uint256, z: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x + y + z


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">addNum</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x + <span class="hljs-variable language_">self</span>.num
</code></pre>`,qv=({prev:e,next:n})=>g.jsx(L,{version:Yv,title:Kv,description:Xv,html:Gv,prev:e,next:n}),Zv="0.4.0",Jv="What's New",e0="What's new in Vyper 0.4",n0=`<h3>pragma version</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.0</span>
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-comment">#pragma version ^0.4.0</span>
</code></pre><h3>Optimization mode</h3>
<p><code>codesize</code>, <code>gas</code> (default), or <code>none</code></p>
<pre><code class="language-vyper"><span class="hljs-comment">#pragma version ^0.4.0 optimize codesize</span>
</code></pre><h3>Constructor</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre><h3>For loop</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-keyword">for</span> addr <span class="hljs-keyword">in</span> addrs:
    ...
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-keyword">for</span> addr: address <span class="hljs-keyword">in</span> addrs:
    ...
</code></pre><h3>Division</h3>
<p>0.3</p>
<pre><code class="language-shell">x / y
</code></pre><p>0.4</p>
<pre><code class="language-shell">x // y
</code></pre><h3>Constants</h3>
<p>0.3</p>
<pre><code class="language-vyper">ZERO_ADDRESS
MAX_UINT256
EMPTY_BYTES32
</code></pre><p>0.4</p>
<pre><code class="language-vyper">empty(address)
max_value(uint256)
empty(bytes32)
</code></pre><h3>Interface</h3>
<pre><code class="language-vyper">static IFoo(addr).bar()
extcall IFoo(addr).bar()
</code></pre><h3>Re-entrancy locks</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-meta">@nonreentrant(<span class="hljs-params"><span class="hljs-string">"lock"</span></span>)</span>
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-meta">@nonreentrant</span>
</code></pre><h3>Modules</h3>
<p>See <a href="/modules">modules</a></p>
`,s0=({prev:e,next:n})=>g.jsx(L,{version:Zv,title:Jv,description:e0,html:n0,prev:e,next:n}),t0=({size:e,className:n=""})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",width:e,height:e,className:n,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})}),a0="_component_efeb7_1",l0="_icon_efeb7_8",r0="_input_efeb7_12",fl={component:a0,icon:l0,input:r0},o0=({value:e,onChange:n})=>{function s(t){n(t.target.value)}return g.jsxs("div",{className:fl.component,children:[g.jsx(t0,{size:18,className:fl.icon}),g.jsx("input",{className:fl.input,placeholder:"Search",value:e,onChange:s})]})};var i0="Expected a function",Ri=NaN,c0="[object Symbol]",u0=/^\s+|\s+$/g,p0=/^[-+]0x[0-9a-f]+$/i,d0=/^0b[01]+$/i,f0=/^0o[0-7]+$/i,h0=parseInt,m0=typeof ft=="object"&&ft&&ft.Object===Object&&ft,g0=typeof self=="object"&&self&&self.Object===Object&&self,y0=m0||g0||Function("return this")(),v0=Object.prototype,j0=v0.toString,_0=Math.max,w0=Math.min,hl=function(){return y0.Date.now()};function x0(e,n,s){var t,a,l,r,o,i,c=0,d=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(i0);n=$i(n)||0,pr(s)&&(d=!!s.leading,f="maxWait"in s,l=f?_0($i(s.maxWait)||0,n):l,m="trailing"in s?!!s.trailing:m);function y(x){var C=t,N=a;return t=a=void 0,c=x,r=e.apply(N,C),r}function j(x){return c=x,o=setTimeout(p,n),d?y(x):r}function _(x){var C=x-i,N=x-c,F=n-C;return f?w0(F,l-N):F}function E(x){var C=x-i,N=x-c;return i===void 0||C>=n||C<0||f&&N>=l}function p(){var x=hl();if(E(x))return u(x);o=setTimeout(p,_(x))}function u(x){return o=void 0,m&&t?y(x):(t=a=void 0,r)}function h(){o!==void 0&&clearTimeout(o),c=0,t=i=a=o=void 0}function v(){return o===void 0?r:u(hl())}function k(){var x=hl(),C=E(x);if(t=arguments,a=this,i=x,C){if(o===void 0)return j(i);if(f)return o=setTimeout(p,n),y(i)}return o===void 0&&(o=setTimeout(p,n)),r}return k.cancel=h,k.flush=v,k}function pr(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function k0(e){return!!e&&typeof e=="object"}function S0(e){return typeof e=="symbol"||k0(e)&&j0.call(e)==c0}function $i(e){if(typeof e=="number")return e;if(S0(e))return Ri;if(pr(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=pr(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(u0,"");var s=d0.test(e);return s||f0.test(e)?h0(e.slice(2),s?2:8):p0.test(e)?Ri:+e}var E0=x0;const C0=Oi(E0),b0={leading:!1,trailing:!0};function P0(e,n,s){return S.useCallback(C0(e,n,b0),s)}function N0(e,n){let s=e;for(let t=0;t<n.length;t++){const a=n[t];s[a]||(s[a]={}),t<n.length-1?s=s[a]:s[a][""]={}}}function T0(e){if(!e)return[];const n=[],s=[];let t="",a=!1;for(n.push(["",0,e]);n.length>0;){const[l,r,o]=n.pop();a&&(t=t.slice(0,r-1),a=!1),t+=l;const i=Object.keys(o);if(i.length>0)for(let c=0;c<i.length;c++){const d=i[c];n.push([d,r+1,o[d]])}else s.push(t),a=!0}return s}function R0(e,n){let s=e;for(let a=0;a<n.length;a++){if(!s)return[];s=s[n[a]]}const t=T0(s);return t.length==0?[]:t.sort().map(a=>n+a)}const $0=["/whats-new"],L0=["/view-pure-functions"],I0=["/view-pure-functions"],z0=["/view-pure-functions","/payable","/internal-external-functions","/hash-function","/function","/default-function"],D0=["/verify-signature"],O0=["/verify-signature"],M0=["/verify-signature"],A0=["/values","/references"],F0=["/values","/references"],U0=["/values","/references"],B0=["/values"],V0=["/values"],H0=["/values","/references","/private-public-state-variables"],W0=["/values","/references","/private-public-state-variables"],Q0=["/values"],Y0=["/values"],K0=["/values"],X0=["/values"],G0=["/values"],q0=["/values"],Z0=["/values"],J0=["/unsafe-math"],ej=["/unsafe-math"],nj=["/unsafe-math","/app/lerp"],sj=["/send-ether"],tj=["/send-ether"],aj=["/send-ether","/raw-call"],lj=["/send-ether","/payable","/default-function"],rj=["/self-destruct"],oj=["/self-destruct"],ij=["/self-destruct"],cj=["/references"],uj=["/references"],pj=["/references","/dynamic-arrays"],dj=["/references","/dynamic-arrays"],fj=["/references"],hj=["/references"],mj=["/references"],gj=["/references"],yj=["/re-entrancy-lock"],vj=["/re-entrancy-lock"],jj=["/raw-call"],_j=["/raw-call","/delegate-call"],wj=["/private-public-state-variables"],xj=["/print"],kj=["/print"],Sj=["/modules"],Ej=["/modules"],Cj=["/modules"],bj=["/modules"],Pj=["/internal-external-functions"],Nj=["/internal-external-functions"],Tj=["/interface"],Rj=["/imports"],$j=["/immutable"],Lj=["/immutable"],Ij=["/immutable","/constants"],zj=["/immutable","/constants"],Dj=["/if-else"],Oj=["/if-else"],Mj=["/hello-world"],Aj=["/hello-world"],Fj=["/hello-world"],Uj=["/hash-function"],Bj=["/hash-function"],Vj=["/for-loop"],Hj=["/for-loop"],Wj=["/for-loop"],Qj=["/event"],Yj=["/event"],Kj=["/error"],Xj=["/error"],Gj=["/dynamic-arrays"],qj=["/delegate-call"],Zj=["/defi/curve-swap","/defi/curve-liquidity"],Jj=["/defi/curve-swap"],e1=["/defi/curve-swap","/defi/curve-liquidity"],n1=["/defi/curve-swap","/defi/curve-liquidity"],s1=["/defi/curve-liquidity"],t1=["/default-function"],a1=["/default-function"],l1=["/create-new-contract"],r1=["/create-new-contract"],o1=["/create-new-contract"],i1=["/constructor"],c1=["/app/rebase-token"],u1=["/app/rebase-token"],p1=["/app/rebase-token","/app/multi-sig-wallet","/app/lerp"],d1=["/app/multi-sig-wallet"],f1=["/app/multi-sig-wallet"],h1=["/app/multi-sig-wallet"],m1=["/app/lerp"],Li={vyper:$0,"0.4":["/whats-new"],view:L0,pure:I0,function:["/view-pure-functions","/payable","/internal-external-functions","/hash-function","/function","/default-function"],functions:z0,verify:D0,signature:O0,ecrecover:M0,data:A0,type:F0,types:U0,value:B0,values:V0,variable:H0,variables:W0,bool:Q0,int128:Y0,uint256:K0,decimals:X0,address:G0,bytes32:q0,Bytes:Z0,String:["/values"],gas:J0,unsafe:ej,math:nj,send:sj,ether:tj,raw_call:aj,payable:lj,selfdestruct:rj,self:oj,destruct:ij,reference:cj,references:uj,array:pj,arrays:dj,struct:fj,structs:hj,HashMap:mj,mapping:gj,"re-entrancy":["/re-entrancy-lock"],lock:yj,nonreentrant:vj,raw:jj,call:_j,private:["/private-public-state-variables"],public:["/private-public-state-variables"],state:wj,debug:xj,print:kj,modules:Sj,use:Ej,exports:Cj,initializes:bj,internal:Pj,external:Nj,interface:["/interface"],interfaces:Tj,imports:Rj,immutable:$j,immutables:Lj,constant:Ij,constants:zj,if:["/if-else"],else:["/if-else"],conditional:Dj,statement:Oj,hello:Mj,world:Aj,version:Fj,hash:Uj,keccack256:Bj,for:["/for-loop"],loop:Vj,loops:Hj,range:Wj,event:Qj,events:Yj,error:Kj,errors:Xj,dynamic:Gj,delegate:qj,curve:Zj,swap:Jj,defi:e1,amm:n1,add:s1,"remove liquidity":["/defi/curve-liquidity"],default:["/default-function"],__default__:t1,fallback:a1,create:l1,new:["/create-new-contract"],contract:r1,create_minimal_proxy_to:o1,constructor:i1,rebase:c1,token:u1,app:p1,multi:d1,sig:f1,wallet:h1,lerp:m1},Ii={"/whats-new":["vyper",.4],"/view-pure-functions":["view","pure","function","functions"],"/verify-signature":["verify","signature","ecrecover"],"/values":["data","type","types","value","values","variable","variables","bool","int128","uint256","decimals","address","bytes32","Bytes","String"],"/unsafe-math":["gas","unsafe","math"],"/send-ether":["send","ether","raw_call","payable"],"/self-destruct":["selfdestruct","self","destruct"],"/references":["data","type","types","reference","references","variable","variables","array","arrays","struct","structs","HashMap","mapping"],"/re-entrancy-lock":["re-entrancy","lock","nonreentrant"],"/raw-call":["raw","call","raw_call"],"/private-public-state-variables":["private","public","state","variable","variables"],"/print":["debug","print"],"/payable":["payable","function","functions"],"/modules":["modules","use","exports","initializes"],"/internal-external-functions":["internal","external","function","functions"],"/interface":["interface","interfaces"],"/imports":["imports"],"/immutable":["immutable","immutables","constant","constants"],"/if-else":["if","else","conditional","statement"],"/hello-world":["hello","world","version"],"/hash-function":["hash","keccack256","function","functions"],"/function":["function","functions"],"/for-loop":["for","loop","loops","range"],"/event":["event","events"],"/error":["error","errors"],"/dynamic-arrays":["dynamic","arrays","array"],"/delegate-call":["delegate","call"],"/defi/curve-swap":["curve","swap","defi","amm"],"/defi/curve-liquidity":["curve","add","remove liquidity","defi","amm"],"/default-function":["default","function","functions","__default__","fallback","payable"],"/create-new-contract":["create","new","contract","create_minimal_proxy_to"],"/constructor":["constructor"],"/constants":["constant","constants"],"/app/rebase-token":["rebase","token","app"],"/app/multi-sig-wallet":["app","multi","sig","wallet"],"/app/lerp":["lerp","math","app"]},dr=[];for(const e of Object.keys(Ii))dr.push(...Ii[e]);const mp={};for(let e=0;e<dr.length;e++)N0(mp,dr[e]);function g1(e){return Array.from(new Set(e))}function y1(e){const n=[],s=R0(mp,e.toLowerCase());for(let t=0;t<s.length;t++){const a=s[t];Li[a]&&n.push(...Li[a])}return n}const v1="_component_1aw21_1",j1="_updates_1aw21_8",_1="_search_1aw21_13",w1="_category_1aw21_17",x1="_listItem_1aw21_20",k1="_label_1aw21_28",S1="_header_1aw21_31",E1="_youTube_1aw21_35",C1="_youTubeLogo_1aw21_41",b1="_updraft_1aw21_45",P1="_updraftLogo_1aw21_51",ne={component:v1,updates:j1,search:_1,category:w1,listItem:x1,label:k1,header:S1,youTube:E1,youTubeLogo:C1,updraft:b1,updraftLogo:P1},N1=["2024/11/05 - Multi sig wallet","2024/10/24 - Update re-entrancy","2024/10/10 - Linear interpolation"];function T1(){const[e,n]=S.useState(""),[s,t]=Fh(),[a,l]=S.useState(null);S.useEffect(()=>{const d=s.get("q");d!=null&&d.length>0&&(n(d),r(d,!1))},[]);function r(d,f){const m=d.trim();if(m.length==0){l(null),f&&t({q:""});return}const y=g1(m.split(" ")),j={};for(const _ of y){const E=y1(_);for(const p of E)j[p]=!0}l(j),f&&t({q:m})}const o=P0(d=>r(d,!0),500,[]);function i(d){n(d),o(d)}function c(){return a?Object.keys(a).length==0?g.jsx("div",{children:"No results"}):g.jsx("ul",{className:ne.list,children:ma.filter(({path:d})=>a[d]).map(({path:d,title:f})=>g.jsx("li",{className:ne.listItem,children:g.jsx("a",{href:d,children:f})},d))}):g.jsxs(g.Fragment,{children:[co.map(({routes:d,title:f},m)=>g.jsxs("div",{children:[f&&g.jsx("h3",{className:ne.category,children:f}),g.jsx("ul",{className:ne.list,children:d.map(({path:y,title:j})=>g.jsx("li",{className:ne.listItem,children:g.jsx("a",{href:y,children:j})},y))})]},m)),g.jsxs("div",{children:[g.jsx("h3",{className:ne.category,children:"Translations"}),Gh.map(({lang:d,url:f})=>g.jsx("li",{className:ne.listItem,children:g.jsx("a",{href:f,target:"__blank",children:d})},f))]})]})}return g.jsxs("div",{className:ne.component,children:[g.jsx(hp,{title:"Vyper by Example | 0.4.0",description:"Learn smart contract programming using Vyper"}),g.jsx("h1",{className:ne.header,children:g.jsx("a",{href:"/",children:"Vyper by Example"})}),g.jsx("div",{className:ne.subHeader,children:"v 0.4.0"}),g.jsxs("div",{className:ne.main,children:[g.jsxs("p",{children:["an introduction to ",g.jsx("a",{href:"https://vyper.readthedocs.io",children:"Vyper"})," with simple examples"]}),g.jsxs("div",{className:ne.youTube,children:[g.jsx("img",{src:dp,alt:"logo",className:ne.youTubeLogo}),g.jsx("a",{href:"https://www.youtube.com/@smartcontractprogrammer",target:"__blank",children:"Most code are explained here"})]}),g.jsxs("div",{className:ne.updraft,children:[g.jsx("img",{src:fp,alt:"logo",className:ne.updraftLogo}),g.jsx("a",{href:"https://updraft.cyfrin.io",target:"__blank",children:"Learn more at Cyfrin Updraft"})]}),g.jsx("div",{className:ne.updates,children:N1.map((d,f)=>g.jsx("div",{children:d},f))}),g.jsx("div",{className:ne.search,children:g.jsx(o0,{value:e,onChange:i})}),c()]})]})}const R1=[{path:"/app/lerp",component:Vm},{path:"/app/multi-sig-wallet",component:Km},{path:"/app/rebase-token",component:Jm},{path:"/constants",component:ag},{path:"/constructor",component:cg},{path:"/create-new-contract",component:hg},{path:"/default-function",component:jg},{path:"/defi/curve-liquidity",component:Sg},{path:"/defi/curve-swap",component:Ng},{path:"/delegate-call",component:Ig},{path:"/dynamic-arrays",component:Ag},{path:"/error",component:Hg},{path:"/event",component:Xg},{path:"/for-loop",component:ey},{path:"/function",component:ly},{path:"/hash-function",component:uy},{path:"/hello-world",component:my},{path:"/if-else",component:_y},{path:"/immutable",component:Ey},{path:"/imports",component:Ty},{path:"/interface",component:zy},{path:"/internal-external-functions",component:Fy},{path:"/modules",component:Wy},{path:"/payable",component:Gy},{path:"/print",component:nv},{path:"/private-public-state-variables",component:rv},{path:"/raw-call",component:pv},{path:"/re-entrancy-lock",component:gv},{path:"/references",component:wv},{path:"/self-destruct",component:Cv},{path:"/send-ether",component:Rv},{path:"/unsafe-math",component:Dv},{path:"/values",component:Uv},{path:"/verify-signature",component:Qv},{path:"/view-pure-functions",component:qv},{path:"/whats-new",component:s0},{path:"",component:T1}];function zi(){const{state:e,init:n}=oo();return S.useLayoutEffect(()=>{n({width:window.document.body.clientWidth})},[]),e.initialized?g.jsx(Ah,{basename:"",children:g.jsx($m,{children:g.jsx(zh,{children:R1.map(s=>{const{prev:t,next:a}=nm(s.path);return g.jsx(pp,{path:s.path,element:Ki.createElement(s.component,{prev:t,next:a})},s.path)})})})}):null}const $1=document.getElementById("root"),L1=Zu($1),Di=document.getElementById("root");Di.hasChildNodes()?qu(Di,g.jsx(xi,{children:g.jsx(zi,{})})):L1.render(g.jsx(xi,{children:g.jsx(zi,{})}));

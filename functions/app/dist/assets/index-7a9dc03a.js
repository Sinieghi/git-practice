(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function vy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kf={exports:{}},Pi={},Yf={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),yy=Symbol.for("react.portal"),xy=Symbol.for("react.fragment"),by=Symbol.for("react.strict_mode"),wy=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),Ny=Symbol.for("react.memo"),Cy=Symbol.for("react.lazy"),Np=Symbol.iterator;function Ey(e){return e===null||typeof e!="object"?null:(e=Np&&e[Np]||e["@@iterator"],typeof e=="function"?e:null)}var Xf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jf=Object.assign,Zf={};function ea(e,t,n){this.props=e,this.context=t,this.refs=Zf,this.updater=n||Xf}ea.prototype.isReactComponent={};ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eh(){}eh.prototype=ea.prototype;function Ju(e,t,n){this.props=e,this.context=t,this.refs=Zf,this.updater=n||Xf}var Zu=Ju.prototype=new eh;Zu.constructor=Ju;Jf(Zu,ea.prototype);Zu.isPureReactComponent=!0;var Cp=Array.isArray,th=Object.prototype.hasOwnProperty,ed={current:null},nh={key:!0,ref:!0,__self:!0,__source:!0};function rh(e,t,n){var r,a={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)th.call(t,r)&&!nh.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:hs,type:e,key:s,ref:i,props:a,_owner:ed.current}}function Ly(e,t){return{$$typeof:hs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function td(e){return typeof e=="object"&&e!==null&&e.$$typeof===hs}function Ty(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ep=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ty(""+e.key):t.toString(36)}function Ks(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hs:case yy:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Ll(i,0):r,Cp(a)?(n="",e!=null&&(n=e.replace(Ep,"$&/")+"/"),Ks(a,t,n,"",function(u){return u})):a!=null&&(td(a)&&(a=Ly(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Ep,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=r===""?".":r+":",Cp(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ll(s,l);i+=Ks(s,t,n,c,a)}else if(c=Ey(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ll(s,l++),i+=Ks(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Cs(e,t,n){if(e==null)return e;var r=[],a=0;return Ks(e,r,"","",function(s){return t.call(n,s,a++)}),r}function Py(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ys={transition:null},$y={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:ed};Y.Children={map:Cs,forEach:function(e,t,n){Cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=ea;Y.Fragment=xy;Y.Profiler=wy;Y.PureComponent=Ju;Y.StrictMode=by;Y.Suspense=ky;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jf({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=ed.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)th.call(t,c)&&!nh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hs,type:e.type,key:a,ref:s,props:r,_owner:i}};Y.createContext=function(e){return e={$$typeof:jy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_y,_context:e},e.Consumer=e};Y.createElement=rh;Y.createFactory=function(e){var t=rh.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Sy,render:e}};Y.isValidElement=td;Y.lazy=function(e){return{$$typeof:Cy,_payload:{_status:-1,_result:e},_init:Py}};Y.memo=function(e,t){return{$$typeof:Ny,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ys.transition;Ys.transition={};try{e()}finally{Ys.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ve.current.useCallback(e,t)};Y.useContext=function(e){return Ve.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ve.current.useEffect(e,t)};Y.useId=function(){return Ve.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ve.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};Y.useRef=function(e){return Ve.current.useRef(e)};Y.useState=function(e){return Ve.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ve.current.useTransition()};Y.version="18.2.0";Yf.exports=Y;var _=Yf.exports;const V=vy(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy=_,Ry=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),Ay=Object.prototype.hasOwnProperty,Fy=Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iy={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,n){var r,a={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ay.call(t,r)&&!Iy.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ry,type:e,key:s,ref:i,props:a,_owner:Fy.current}}Pi.Fragment=zy;Pi.jsx=ah;Pi.jsxs=ah;Kf.exports=Pi;var o=Kf.exports,$c={},sh={exports:{}},ot={},oh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,U){var B=P.length;P.push(U);e:for(;0<B;){var oe=B-1>>>1,pe=P[oe];if(0<a(pe,U))P[oe]=U,P[B]=pe,B=oe;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var U=P[0],B=P.pop();if(B!==U){P[0]=B;e:for(var oe=0,pe=P.length,et=pe>>>1;oe<et;){var Lt=2*(oe+1)-1,Un=P[Lt],ct=Lt+1,Tt=P[ct];if(0>a(Un,B))ct<pe&&0>a(Tt,Un)?(P[oe]=Tt,P[ct]=B,oe=ct):(P[oe]=Un,P[Lt]=B,oe=Lt);else if(ct<pe&&0>a(Tt,B))P[oe]=Tt,P[ct]=B,oe=ct;else break e}}return U}function a(P,U){var B=P.sortIndex-U.sortIndex;return B!==0?B:P.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],d=1,p=null,m=3,v=!1,h=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=P)r(u),U.sortIndex=U.expirationTime,t(c,U);else break;U=n(u)}}function b(P){if(y=!1,x(P),!h)if(n(c)!==null)h=!0,M(j);else{var U=n(u);U!==null&&se(b,U.startTime-P)}}function j(P,U){h=!1,y&&(y=!1,g(E),E=-1),v=!0;var B=m;try{for(x(U),p=n(c);p!==null&&(!(p.expirationTime>U)||P&&!W());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,m=p.priorityLevel;var pe=oe(p.expirationTime<=U);U=e.unstable_now(),typeof pe=="function"?p.callback=pe:p===n(c)&&r(c),x(U)}else r(c);p=n(c)}if(p!==null)var et=!0;else{var Lt=n(u);Lt!==null&&se(b,Lt.startTime-U),et=!1}return et}finally{p=null,m=B,v=!1}}var k=!1,N=null,E=-1,A=5,$=-1;function W(){return!(e.unstable_now()-$<A)}function G(){if(N!==null){var P=e.unstable_now();$=P;var U=!0;try{U=N(!0,P)}finally{U?ne():(k=!1,N=null)}}else k=!1}var ne;if(typeof f=="function")ne=function(){f(G)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=G,ne=function(){de.postMessage(null)}}else ne=function(){w(G,0)};function M(P){N=P,k||(k=!0,ne())}function se(P,U){E=w(function(){P(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,M(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var B=m;m=U;try{return P()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,U){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=m;m=P;try{return U()}finally{m=B}},e.unstable_scheduleCallback=function(P,U,B){var oe=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?oe+B:oe):B=oe,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=B+pe,P={id:d++,callback:U,priorityLevel:P,startTime:B,expirationTime:pe,sortIndex:-1},B>oe?(P.sortIndex=B,t(u,P),n(c)===null&&P===n(u)&&(y?(g(E),E=-1):y=!0,se(b,B-oe))):(P.sortIndex=pe,t(c,P),h||v||(h=!0,M(j))),P},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(P){var U=m;return function(){var B=m;m=U;try{return P.apply(this,arguments)}finally{m=B}}}})(ih);oh.exports=ih;var Dy=oh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh=_,at=Dy;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ch=new Set,Wa={};function cr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Wa[e]=t,e=0;e<t.length;e++)ch.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,My=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Tp={};function Uy(e){return Oc.call(Tp,e)?!0:Oc.call(Lp,e)?!1:My.test(e)?Tp[e]=!0:(Lp[e]=!0,!1)}function By(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qy(e,t,n,r){if(t===null||typeof t>"u"||By(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nd,rd);Re[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nd,rd);Re[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nd,rd);Re[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function ad(e,t,n,r){var a=Re.hasOwnProperty(t)?Re[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qy(t,n,a,r)&&(n=null),r||a===null?Uy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),hr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),uh=Symbol.for("react.provider"),dh=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Ac=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),ph=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function la(e){return e===null||typeof e!="object"?null:(e=Pp&&e[Pp]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Tl;function xa(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Pl=!1;function $l(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=r.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xa(e):""}function Wy(e){switch(e.tag){case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function Fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case hr:return"Portal";case Rc:return"Profiler";case sd:return"StrictMode";case zc:return"Suspense";case Ac:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dh:return(e.displayName||"Context")+".Consumer";case uh:return(e._context.displayName||"Context")+".Provider";case od:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ld:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}function Vy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(t);case 8:return t===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hy(e){var t=mh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ls(e){e._valueTracker||(e._valueTracker=Hy(e))}function fh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ic(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $p(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hh(e,t){t=t.checked,t!=null&&ad(e,"checked",t,!1)}function Dc(e,t){hh(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mc(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Op(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mc(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ba=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ba(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function gh(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ts,yh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qy=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(e){Qy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ka[t]=ka[e]})});function xh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ka.hasOwnProperty(e)&&ka[e]?(""+t).trim():t+"px"}function bh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=xh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Gy=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(e,t){if(t){if(Gy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Wc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=null;function cd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hc=null,Lr=null,Tr=null;function Ap(e){if(e=ys(e)){if(typeof Hc!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Ai(t),Hc(e.stateNode,e.type,t))}}function wh(e){Lr?Tr?Tr.push(e):Tr=[e]:Lr=e}function _h(){if(Lr){var e=Lr,t=Tr;if(Tr=Lr=null,Ap(e),t)for(e=0;e<t.length;e++)Ap(t[e])}}function jh(e,t){return e(t)}function Sh(){}var Ol=!1;function kh(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return jh(e,t,n)}finally{Ol=!1,(Lr!==null||Tr!==null)&&(Sh(),_h())}}function Ha(e,t){var n=e.stateNode;if(n===null)return null;var r=Ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Qc=!1;if(Jt)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Qc=!1}function Ky(e,t,n,r,a,s,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Na=!1,qo=null,Wo=!1,Gc=null,Yy={onError:function(e){Na=!0,qo=e}};function Xy(e,t,n,r,a,s,i,l,c){Na=!1,qo=null,Ky.apply(Yy,arguments)}function Jy(e,t,n,r,a,s,i,l,c){if(Xy.apply(this,arguments),Na){if(Na){var u=qo;Na=!1,qo=null}else throw Error(L(198));Wo||(Wo=!0,Gc=u)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fp(e){if(ur(e)!==e)throw Error(L(188))}function Zy(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Fp(a),e;if(s===r)return Fp(a),t;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=a,r=s;else{for(var i=!1,l=a.child;l;){if(l===n){i=!0,n=a,r=s;break}if(l===r){i=!0,r=a,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,r=a;break}if(l===r){i=!0,r=s,n=a;break}l=l.sibling}if(!i)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Ch(e){return e=Zy(e),e!==null?Eh(e):null}function Eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eh(e);if(t!==null)return t;e=e.sibling}return null}var Lh=at.unstable_scheduleCallback,Ip=at.unstable_cancelCallback,e1=at.unstable_shouldYield,t1=at.unstable_requestPaint,xe=at.unstable_now,n1=at.unstable_getCurrentPriorityLevel,ud=at.unstable_ImmediatePriority,Th=at.unstable_UserBlockingPriority,Vo=at.unstable_NormalPriority,r1=at.unstable_LowPriority,Ph=at.unstable_IdlePriority,$i=null,At=null;function a1(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:i1,s1=Math.log,o1=Math.LN2;function i1(e){return e>>>=0,e===0?32:31-(s1(e)/o1|0)|0}var Ps=64,$s=4194304;function wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~a;l!==0?r=wa(l):(s&=i,s!==0&&(r=wa(s)))}else i=n&~a,i!==0?r=wa(i):s!==0&&(r=wa(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),a=1<<n,r|=e[n],t&=~a;return r}function l1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-kt(s),l=1<<i,c=a[i];c===-1?(!(l&n)||l&r)&&(a[i]=l1(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Kc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $h(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function u1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-kt(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ee=0;function Oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rh,pd,zh,Ah,Fh,Yc=!1,Os=[],xn=null,bn=null,wn=null,Qa=new Map,Ga=new Map,pn=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Qa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(t.pointerId)}}function ua(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=ys(t),t!==null&&pd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function p1(e,t,n,r,a){switch(t){case"focusin":return xn=ua(xn,e,t,n,r,a),!0;case"dragenter":return bn=ua(bn,e,t,n,r,a),!0;case"mouseover":return wn=ua(wn,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return Qa.set(s,ua(Qa.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,Ga.set(s,ua(Ga.get(s)||null,e,t,n,r,a)),!0}return!1}function Ih(e){var t=Hn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=Nh(n),t!==null){e.blockedOn=t,Fh(e.priority,function(){zh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vc=r,n.target.dispatchEvent(r),Vc=null}else return t=ys(n),t!==null&&pd(t),e.blockedOn=n,!1;t.shift()}return!0}function Mp(e,t,n){Xs(e)&&n.delete(t)}function m1(){Yc=!1,xn!==null&&Xs(xn)&&(xn=null),bn!==null&&Xs(bn)&&(bn=null),wn!==null&&Xs(wn)&&(wn=null),Qa.forEach(Mp),Ga.forEach(Mp)}function da(e,t){e.blockedOn===t&&(e.blockedOn=null,Yc||(Yc=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,m1)))}function Ka(e){function t(a){return da(a,e)}if(0<Os.length){da(Os[0],e);for(var n=1;n<Os.length;n++){var r=Os[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&da(xn,e),bn!==null&&da(bn,e),wn!==null&&da(wn,e),Qa.forEach(t),Ga.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&pn.shift()}var Pr=rn.ReactCurrentBatchConfig,Qo=!0;function f1(e,t,n,r){var a=ee,s=Pr.transition;Pr.transition=null;try{ee=1,md(e,t,n,r)}finally{ee=a,Pr.transition=s}}function h1(e,t,n,r){var a=ee,s=Pr.transition;Pr.transition=null;try{ee=4,md(e,t,n,r)}finally{ee=a,Pr.transition=s}}function md(e,t,n,r){if(Qo){var a=Xc(e,t,n,r);if(a===null)Wl(e,t,r,Go,n),Dp(e,r);else if(p1(a,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<d1.indexOf(e)){for(;a!==null;){var s=ys(a);if(s!==null&&Rh(s),s=Xc(e,t,n,r),s===null&&Wl(e,t,r,Go,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else Wl(e,t,r,null,n)}}var Go=null;function Xc(e,t,n,r){if(Go=null,e=cd(r),e=Hn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case ud:return 1;case Th:return 4;case Vo:case r1:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var hn=null,fd=null,Js=null;function Mh(){if(Js)return Js;var e,t=fd,n=t.length,r,a="value"in hn?hn.value:hn.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[s-r];r++);return Js=a.slice(e,1<r?1-r:void 0)}function Zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function Up(){return!1}function it(e){function t(n,r,a,s,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rs:Up,this.isPropagationStopped=Up,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=it(ta),vs=ve({},ta,{view:0,detail:0}),g1=it(vs),zl,Al,pa,Oi=ve({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pa&&(pa&&e.type==="mousemove"?(zl=e.screenX-pa.screenX,Al=e.screenY-pa.screenY):Al=zl=0,pa=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),Bp=it(Oi),v1=ve({},Oi,{dataTransfer:0}),y1=it(v1),x1=ve({},vs,{relatedTarget:0}),Fl=it(x1),b1=ve({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),w1=it(b1),_1=ve({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j1=it(_1),S1=ve({},ta,{data:0}),qp=it(S1),k1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C1[e])?!!t[e]:!1}function gd(){return E1}var L1=ve({},vs,{key:function(e){if(e.key){var t=k1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T1=it(L1),P1=ve({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=it(P1),$1=ve({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),O1=it($1),R1=ve({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=it(R1),A1=ve({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=it(A1),I1=[9,13,27,32],vd=Jt&&"CompositionEvent"in window,Ca=null;Jt&&"documentMode"in document&&(Ca=document.documentMode);var D1=Jt&&"TextEvent"in window&&!Ca,Uh=Jt&&(!vd||Ca&&8<Ca&&11>=Ca),Vp=String.fromCharCode(32),Hp=!1;function Bh(e,t){switch(e){case"keyup":return I1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function M1(e,t){switch(e){case"compositionend":return qh(t);case"keypress":return t.which!==32?null:(Hp=!0,Vp);case"textInput":return e=t.data,e===Vp&&Hp?null:e;default:return null}}function U1(e,t){if(vr)return e==="compositionend"||!vd&&Bh(e,t)?(e=Mh(),Js=fd=hn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uh&&t.locale!=="ko"?null:t.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B1[e.type]:t==="textarea"}function Wh(e,t,n,r){wh(r),t=Ko(t,"onChange"),0<t.length&&(n=new hd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ea=null,Ya=null;function q1(e){tg(e,0)}function Ri(e){var t=br(e);if(fh(t))return e}function W1(e,t){if(e==="change")return t}var Vh=!1;if(Jt){var Il;if(Jt){var Dl="oninput"in document;if(!Dl){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Dl=typeof Gp.oninput=="function"}Il=Dl}else Il=!1;Vh=Il&&(!document.documentMode||9<document.documentMode)}function Kp(){Ea&&(Ea.detachEvent("onpropertychange",Hh),Ya=Ea=null)}function Hh(e){if(e.propertyName==="value"&&Ri(Ya)){var t=[];Wh(t,Ya,e,cd(e)),kh(q1,t)}}function V1(e,t,n){e==="focusin"?(Kp(),Ea=t,Ya=n,Ea.attachEvent("onpropertychange",Hh)):e==="focusout"&&Kp()}function H1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Ya)}function Q1(e,t){if(e==="click")return Ri(t)}function G1(e,t){if(e==="input"||e==="change")return Ri(t)}function K1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:K1;function Xa(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Oc.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,t){var n=Yp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yp(n)}}function Qh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gh(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y1(e){var t=Gh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qh(n.ownerDocument.documentElement,n)){if(r!==null&&yd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=Xp(n,s);var i=Xp(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X1=Jt&&"documentMode"in document&&11>=document.documentMode,yr=null,Jc=null,La=null,Zc=!1;function Jp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zc||yr==null||yr!==Bo(r)||(r=yr,"selectionStart"in r&&yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),La&&Xa(La,r)||(La=r,r=Ko(Jc,"onSelect"),0<r.length&&(t=new hd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Ml={},Kh={};Jt&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function zi(e){if(Ml[e])return Ml[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kh)return Ml[e]=t[n];return e}var Yh=zi("animationend"),Xh=zi("animationiteration"),Jh=zi("animationstart"),Zh=zi("transitionend"),eg=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){eg.set(e,t),cr(t,[e])}for(var Ul=0;Ul<Zp.length;Ul++){var Bl=Zp[Ul],J1=Bl.toLowerCase(),Z1=Bl[0].toUpperCase()+Bl.slice(1);An(J1,"on"+Z1)}An(Yh,"onAnimationEnd");An(Xh,"onAnimationIteration");An(Jh,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Zh,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function em(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jy(r,t,void 0,e),e.currentTarget=null}function tg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;em(a,l,u),s=c}else for(i=0;i<r.length;i++){if(l=r[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;em(a,l,u),s=c}}}if(Wo)throw e=Gc,Wo=!1,Gc=null,e}function le(e,t){var n=t[au];n===void 0&&(n=t[au]=new Set);var r=e+"__bubble";n.has(r)||(ng(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),ng(n,e,r,t)}var As="_reactListening"+Math.random().toString(36).slice(2);function Ja(e){if(!e[As]){e[As]=!0,ch.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[As]||(t[As]=!0,ql("selectionchange",!1,t))}}function ng(e,t,n,r){switch(Dh(t)){case 1:var a=f1;break;case 4:a=h1;break;default:a=md}n=a.bind(null,t,n,e),a=void 0,!Qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wl(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Hn(l),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}l=l.parentNode}}r=r.return}kh(function(){var u=s,d=cd(n),p=[];e:{var m=eg.get(e);if(m!==void 0){var v=hd,h=e;switch(e){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":v=T1;break;case"focusin":h="focus",v=Fl;break;case"focusout":h="blur",v=Fl;break;case"beforeblur":case"afterblur":v=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=O1;break;case Yh:case Xh:case Jh:v=w1;break;case Zh:v=z1;break;case"scroll":v=g1;break;case"wheel":v=F1;break;case"copy":case"cut":case"paste":v=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wp}var y=(t&4)!==0,w=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var f=u,x;f!==null;){x=f;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,g!==null&&(b=Ha(f,g),b!=null&&y.push(Za(f,b,x)))),w)break;f=f.return}0<y.length&&(m=new v(m,h,null,n,d),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Vc&&(h=n.relatedTarget||n.fromElement)&&(Hn(h)||h[Zt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(h=n.relatedTarget||n.toElement,v=u,h=h?Hn(h):null,h!==null&&(w=ur(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=u),v!==h)){if(y=Bp,b="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wp,b="onPointerLeave",g="onPointerEnter",f="pointer"),w=v==null?m:br(v),x=h==null?m:br(h),m=new y(b,f+"leave",v,n,d),m.target=w,m.relatedTarget=x,b=null,Hn(d)===u&&(y=new y(g,f+"enter",h,n,d),y.target=x,y.relatedTarget=w,b=y),w=b,v&&h)t:{for(y=v,g=h,f=0,x=y;x;x=fr(x))f++;for(x=0,b=g;b;b=fr(b))x++;for(;0<f-x;)y=fr(y),f--;for(;0<x-f;)g=fr(g),x--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=fr(y),g=fr(g)}y=null}else y=null;v!==null&&tm(p,m,v,y,!1),h!==null&&w!==null&&tm(p,w,h,y,!0)}}e:{if(m=u?br(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=W1;else if(Qp(m))if(Vh)j=G1;else{j=H1;var k=V1}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Q1);if(j&&(j=j(e,u))){Wh(p,j,n,d);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Mc(m,"number",m.value)}switch(k=u?br(u):window,e){case"focusin":(Qp(k)||k.contentEditable==="true")&&(yr=k,Jc=u,La=null);break;case"focusout":La=Jc=yr=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Jp(p,n,d);break;case"selectionchange":if(X1)break;case"keydown":case"keyup":Jp(p,n,d)}var N;if(vd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else vr?Bh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Uh&&n.locale!=="ko"&&(vr||E!=="onCompositionStart"?E==="onCompositionEnd"&&vr&&(N=Mh()):(hn=d,fd="value"in hn?hn.value:hn.textContent,vr=!0)),k=Ko(u,E),0<k.length&&(E=new qp(E,e,null,n,d),p.push({event:E,listeners:k}),N?E.data=N:(N=qh(n),N!==null&&(E.data=N)))),(N=D1?M1(e,n):U1(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new qp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=N))}tg(p,t)})}function Za(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Ha(e,n),s!=null&&r.unshift(Za(e,s,a)),s=Ha(e,t),s!=null&&r.push(Za(e,s,a))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tm(e,t,n,r,a){for(var s=t._reactName,i=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,a?(c=Ha(n,s),c!=null&&i.unshift(Za(n,c,l))):a||(c=Ha(n,s),c!=null&&i.push(Za(n,c,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function nm(e){return(typeof e=="string"?e:""+e).replace(tx,`
`).replace(nx,"")}function Fs(e,t,n){if(t=nm(t),nm(e)!==t&&n)throw Error(L(425))}function Yo(){}var eu=null,tu=null;function nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(e){return rm.resolve(null).then(e).catch(sx)}:ru;function sx(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ka(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ka(t)}function _n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function am(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var na=Math.random().toString(36).slice(2),Rt="__reactFiber$"+na,es="__reactProps$"+na,Zt="__reactContainer$"+na,au="__reactEvents$"+na,ox="__reactListeners$"+na,ix="__reactHandles$"+na;function Hn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=am(e);e!==null;){if(n=e[Rt])return n;e=am(e)}return t}e=n,n=e.parentNode}return null}function ys(e){return e=e[Rt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ai(e){return e[es]||null}var su=[],wr=-1;function Fn(e){return{current:e}}function ue(e){0>wr||(e.current=su[wr],su[wr]=null,wr--)}function ie(e,t){wr++,su[wr]=e.current,e.current=t}var On={},Me=Fn(On),Xe=Fn(!1),tr=On;function Ur(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function Xo(){ue(Xe),ue(Me)}function sm(e,t,n){if(Me.current!==On)throw Error(L(168));ie(Me,t),ie(Xe,n)}function rg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(L(108,Vy(e)||"Unknown",a));return ve({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,tr=Me.current,ie(Me,e),ie(Xe,Xe.current),!0}function om(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=rg(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,ue(Xe),ue(Me),ie(Me,e)):ue(Xe),ie(Xe,n)}var Vt=null,Fi=!1,Hl=!1;function ag(e){Vt===null?Vt=[e]:Vt.push(e)}function lx(e){Fi=!0,ag(e)}function In(){if(!Hl&&Vt!==null){Hl=!0;var e=0,t=ee;try{var n=Vt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Fi=!1}catch(a){throw Vt!==null&&(Vt=Vt.slice(e+1)),Lh(ud,In),a}finally{ee=t,Hl=!1}}return null}var _r=[],jr=0,Zo=null,ei=0,dt=[],pt=0,nr=null,Gt=1,Kt="";function Bn(e,t){_r[jr++]=ei,_r[jr++]=Zo,Zo=e,ei=t}function sg(e,t,n){dt[pt++]=Gt,dt[pt++]=Kt,dt[pt++]=nr,nr=e;var r=Gt;e=Kt;var a=32-kt(r)-1;r&=~(1<<a),n+=1;var s=32-kt(t)+a;if(30<s){var i=a-a%5;s=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Gt=1<<32-kt(t)+a|n<<a|r,Kt=s+e}else Gt=1<<s|n<<a|r,Kt=e}function xd(e){e.return!==null&&(Bn(e,1),sg(e,1,0))}function bd(e){for(;e===Zo;)Zo=_r[--jr],_r[jr]=null,ei=_r[--jr],_r[jr]=null;for(;e===nr;)nr=dt[--pt],dt[pt]=null,Kt=dt[--pt],dt[pt]=null,Gt=dt[--pt],dt[pt]=null}var rt=null,nt=null,fe=!1,jt=null;function og(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function im(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=_n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(fe){var t=nt;if(t){var n=t;if(!im(e,t)){if(ou(e))throw Error(L(418));t=_n(n.nextSibling);var r=rt;t&&im(e,t)?og(r,n):(e.flags=e.flags&-4097|2,fe=!1,rt=e)}}else{if(ou(e))throw Error(L(418));e.flags=e.flags&-4097|2,fe=!1,rt=e}}}function lm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function Is(e){if(e!==rt)return!1;if(!fe)return lm(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nu(e.type,e.memoizedProps)),t&&(t=nt)){if(ou(e))throw ig(),Error(L(418));for(;t;)og(e,t),t=_n(t.nextSibling)}if(lm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=_n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?_n(e.stateNode.nextSibling):null;return!0}function ig(){for(var e=nt;e;)e=_n(e.nextSibling)}function Br(){nt=rt=null,fe=!1}function wd(e){jt===null?jt=[e]:jt.push(e)}var cx=rn.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ti=Fn(null),ni=null,Sr=null,_d=null;function jd(){_d=Sr=ni=null}function Sd(e){var t=ti.current;ue(ti),e._currentValue=t}function lu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){ni=e,_d=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(_d!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(ni===null)throw Error(L(308));Sr=e,ni.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Qn=null;function kd(e){Qn===null?Qn=[e]:Qn.push(e)}function lg(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,kd(t)):(n.next=a.next,a.next=n),t.interleaved=n,en(e,r)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function Nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,en(e,n)}return a=r.interleaved,a===null?(t.next=t,kd(r)):(t.next=a.next,a.next=t),r.interleaved=t,en(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}function cm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var a=e.updateQueue;dn=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;i=0,d=u=c=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,y=l;switch(m=t,v=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){p=h.call(v,p,m);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(v,p,m):h,m==null)break e;p=ve({},p,m);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=p):d=d.next=v,i|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(d===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);ar|=i,e.lanes=i,e.memoizedState=p}}function um(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(L(191,a));a.call(r)}}}var ug=new lh.Component().refs;function cu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),a=kn(e),s=Yt(r,a);s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,a),t!==null&&(Nt(t,e,a,r),eo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),a=kn(e),s=Yt(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,a),t!==null&&(Nt(t,e,a,r),eo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=kn(e),a=Yt(n,r);a.tag=2,t!=null&&(a.callback=t),t=jn(e,a,r),t!==null&&(Nt(t,e,r,n),eo(t,e,r))}};function dm(e,t,n,r,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!Xa(n,r)||!Xa(a,s):!0}function dg(e,t,n){var r=!1,a=On,s=t.contextType;return typeof s=="object"&&s!==null?s=gt(s):(a=Je(t)?tr:Me.current,r=t.contextTypes,s=(r=r!=null)?Ur(e,a):On),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function pm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function uu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=ug,Nd(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=gt(s):(s=Je(t)?tr:Me.current,a.context=Ur(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(cu(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ii.enqueueReplaceState(a,a.state,null),ri(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ma(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;l===ug&&(l=a.refs={}),i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Ds(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mm(e){var t=e._init;return t(e._payload)}function pg(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=Nn(g,f),g.index=0,g.sibling=null,g}function s(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,x,b){return f===null||f.tag!==6?(f=Zl(x,g.mode,b),f.return=g,f):(f=a(f,x),f.return=g,f)}function c(g,f,x,b){var j=x.type;return j===gr?d(g,f,x.props.children,b,x.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===un&&mm(j)===f.type)?(b=a(f,x.props),b.ref=ma(g,f,x),b.return=g,b):(b=oo(x.type,x.key,x.props,null,g.mode,b),b.ref=ma(g,f,x),b.return=g,b)}function u(g,f,x,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=ec(x,g.mode,b),f.return=g,f):(f=a(f,x.children||[]),f.return=g,f)}function d(g,f,x,b,j){return f===null||f.tag!==7?(f=Xn(x,g.mode,b,j),f.return=g,f):(f=a(f,x),f.return=g,f)}function p(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Zl(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Es:return x=oo(f.type,f.key,f.props,null,g.mode,x),x.ref=ma(g,null,f),x.return=g,x;case hr:return f=ec(f,g.mode,x),f.return=g,f;case un:var b=f._init;return p(g,b(f._payload),x)}if(ba(f)||la(f))return f=Xn(f,g.mode,x,null),f.return=g,f;Ds(g,f)}return null}function m(g,f,x,b){var j=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:l(g,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Es:return x.key===j?c(g,f,x,b):null;case hr:return x.key===j?u(g,f,x,b):null;case un:return j=x._init,m(g,f,j(x._payload),b)}if(ba(x)||la(x))return j!==null?null:d(g,f,x,b,null);Ds(g,x)}return null}function v(g,f,x,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(x)||null,l(f,g,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Es:return g=g.get(b.key===null?x:b.key)||null,c(f,g,b,j);case hr:return g=g.get(b.key===null?x:b.key)||null,u(f,g,b,j);case un:var k=b._init;return v(g,f,x,k(b._payload),j)}if(ba(b)||la(b))return g=g.get(x)||null,d(f,g,b,j,null);Ds(f,b)}return null}function h(g,f,x,b){for(var j=null,k=null,N=f,E=f=0,A=null;N!==null&&E<x.length;E++){N.index>E?(A=N,N=null):A=N.sibling;var $=m(g,N,x[E],b);if($===null){N===null&&(N=A);break}e&&N&&$.alternate===null&&t(g,N),f=s($,f,E),k===null?j=$:k.sibling=$,k=$,N=A}if(E===x.length)return n(g,N),fe&&Bn(g,E),j;if(N===null){for(;E<x.length;E++)N=p(g,x[E],b),N!==null&&(f=s(N,f,E),k===null?j=N:k.sibling=N,k=N);return fe&&Bn(g,E),j}for(N=r(g,N);E<x.length;E++)A=v(N,g,E,x[E],b),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?E:A.key),f=s(A,f,E),k===null?j=A:k.sibling=A,k=A);return e&&N.forEach(function(W){return t(g,W)}),fe&&Bn(g,E),j}function y(g,f,x,b){var j=la(x);if(typeof j!="function")throw Error(L(150));if(x=j.call(x),x==null)throw Error(L(151));for(var k=j=null,N=f,E=f=0,A=null,$=x.next();N!==null&&!$.done;E++,$=x.next()){N.index>E?(A=N,N=null):A=N.sibling;var W=m(g,N,$.value,b);if(W===null){N===null&&(N=A);break}e&&N&&W.alternate===null&&t(g,N),f=s(W,f,E),k===null?j=W:k.sibling=W,k=W,N=A}if($.done)return n(g,N),fe&&Bn(g,E),j;if(N===null){for(;!$.done;E++,$=x.next())$=p(g,$.value,b),$!==null&&(f=s($,f,E),k===null?j=$:k.sibling=$,k=$);return fe&&Bn(g,E),j}for(N=r(g,N);!$.done;E++,$=x.next())$=v(N,g,E,$.value,b),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?E:$.key),f=s($,f,E),k===null?j=$:k.sibling=$,k=$);return e&&N.forEach(function(G){return t(g,G)}),fe&&Bn(g,E),j}function w(g,f,x,b){if(typeof x=="object"&&x!==null&&x.type===gr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Es:e:{for(var j=x.key,k=f;k!==null;){if(k.key===j){if(j=x.type,j===gr){if(k.tag===7){n(g,k.sibling),f=a(k,x.props.children),f.return=g,g=f;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===un&&mm(j)===k.type){n(g,k.sibling),f=a(k,x.props),f.ref=ma(g,k,x),f.return=g,g=f;break e}n(g,k);break}else t(g,k);k=k.sibling}x.type===gr?(f=Xn(x.props.children,g.mode,b,x.key),f.return=g,g=f):(b=oo(x.type,x.key,x.props,null,g.mode,b),b.ref=ma(g,f,x),b.return=g,g=b)}return i(g);case hr:e:{for(k=x.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(g,f.sibling),f=a(f,x.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=ec(x,g.mode,b),f.return=g,g=f}return i(g);case un:return k=x._init,w(g,f,k(x._payload),b)}if(ba(x))return h(g,f,x,b);if(la(x))return y(g,f,x,b);Ds(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(g,f.sibling),f=a(f,x),f.return=g,g=f):(n(g,f),f=Zl(x,g.mode,b),f.return=g,g=f),i(g)):n(g,f)}return w}var qr=pg(!0),mg=pg(!1),xs={},Ft=Fn(xs),ts=Fn(xs),ns=Fn(xs);function Gn(e){if(e===xs)throw Error(L(174));return e}function Cd(e,t){switch(ie(ns,t),ie(ts,e),ie(Ft,xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bc(t,e)}ue(Ft),ie(Ft,t)}function Wr(){ue(Ft),ue(ts),ue(ns)}function fg(e){Gn(ns.current);var t=Gn(Ft.current),n=Bc(t,e.type);t!==n&&(ie(ts,e),ie(Ft,n))}function Ed(e){ts.current===e&&(ue(Ft),ue(ts))}var he=Fn(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Ld(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var to=rn.ReactCurrentDispatcher,Gl=rn.ReactCurrentBatchConfig,rr=0,ge=null,je=null,Ce=null,si=!1,Ta=!1,rs=0,ux=0;function ze(){throw Error(L(321))}function Td(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Pd(e,t,n,r,a,s){if(rr=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?fx:hx,e=n(r,a),Ta){s=0;do{if(Ta=!1,rs=0,25<=s)throw Error(L(301));s+=1,Ce=je=null,t.updateQueue=null,to.current=gx,e=n(r,a)}while(Ta)}if(to.current=oi,t=je!==null&&je.next!==null,rr=0,Ce=je=ge=null,si=!1,t)throw Error(L(300));return e}function $d(){var e=rs!==0;return rs=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ge.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function vt(){if(je===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ce===null?ge.memoizedState:Ce.next;if(t!==null)Ce=t,je=e;else{if(e===null)throw Error(L(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ce===null?ge.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function as(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=vt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=je,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var l=i=null,c=null,u=s;do{var d=u.lane;if((rr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=r):c=c.next=p,ge.lanes|=d,ar|=d}u=u.next}while(u!==null&&u!==s);c===null?i=r:c.next=l,Et(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,ge.lanes|=s,ar|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=vt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);Et(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function hg(){}function gg(e,t){var n=ge,r=vt(),a=t(),s=!Et(r.memoizedState,a);if(s&&(r.memoizedState=a,Ge=!0),r=r.queue,Od(xg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ss(9,yg.bind(null,n,r,a,t),void 0,null),Le===null)throw Error(L(349));rr&30||vg(n,t,a)}return a}function vg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yg(e,t,n,r){t.value=n,t.getSnapshot=r,bg(t)&&wg(e)}function xg(e,t,n){return n(function(){bg(t)&&wg(e)})}function bg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function wg(e){var t=en(e,1);t!==null&&Nt(t,e,1,-1)}function fm(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},t.queue=e,e=e.dispatch=mx.bind(null,ge,e),[t.memoizedState,e]}function ss(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _g(){return vt().memoizedState}function no(e,t,n,r){var a=$t();ge.flags|=e,a.memoizedState=ss(1|t,n,void 0,r===void 0?null:r)}function Di(e,t,n,r){var a=vt();r=r===void 0?null:r;var s=void 0;if(je!==null){var i=je.memoizedState;if(s=i.destroy,r!==null&&Td(r,i.deps)){a.memoizedState=ss(t,n,s,r);return}}ge.flags|=e,a.memoizedState=ss(1|t,n,s,r)}function hm(e,t){return no(8390656,8,e,t)}function Od(e,t){return Di(2048,8,e,t)}function jg(e,t){return Di(4,2,e,t)}function Sg(e,t){return Di(4,4,e,t)}function kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ng(e,t,n){return n=n!=null?n.concat([e]):null,Di(4,4,kg.bind(null,t,e),n)}function Rd(){}function Cg(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Td(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eg(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Td(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lg(e,t,n){return rr&21?(Et(n,t)||(n=$h(),ge.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function dx(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{ee=n,Gl.transition=r}}function Tg(){return vt().memoizedState}function px(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(e))$g(t,n);else if(n=lg(e,t,n,r),n!==null){var a=Be();Nt(n,e,r,a),Og(n,t,r)}}function mx(e,t,n){var r=kn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(e))$g(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(a.hasEagerState=!0,a.eagerState=l,Et(l,i)){var c=t.interleaved;c===null?(a.next=a,kd(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=lg(e,t,a,r),n!==null&&(a=Be(),Nt(n,e,r,a),Og(n,t,r))}}function Pg(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function $g(e,t){Ta=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Og(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}var oi={readContext:gt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},fx={readContext:gt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:hm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=px.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:fm,useDebugValue:Rd,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=fm(!1),t=e[0];return e=dx.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,a=$t();if(fe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Le===null)throw Error(L(349));rr&30||vg(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,hm(xg.bind(null,r,s,e),[e]),r.flags|=2048,ss(9,yg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=$t(),t=Le.identifierPrefix;if(fe){var n=Kt,r=Gt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ux++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hx={readContext:gt,useCallback:Cg,useContext:gt,useEffect:Od,useImperativeHandle:Ng,useInsertionEffect:jg,useLayoutEffect:Sg,useMemo:Eg,useReducer:Kl,useRef:_g,useState:function(){return Kl(as)},useDebugValue:Rd,useDeferredValue:function(e){var t=vt();return Lg(t,je.memoizedState,e)},useTransition:function(){var e=Kl(as)[0],t=vt().memoizedState;return[e,t]},useMutableSource:hg,useSyncExternalStore:gg,useId:Tg,unstable_isNewReconciler:!1},gx={readContext:gt,useCallback:Cg,useContext:gt,useEffect:Od,useImperativeHandle:Ng,useInsertionEffect:jg,useLayoutEffect:Sg,useMemo:Eg,useReducer:Yl,useRef:_g,useState:function(){return Yl(as)},useDebugValue:Rd,useDeferredValue:function(e){var t=vt();return je===null?t.memoizedState=e:Lg(t,je.memoizedState,e)},useTransition:function(){var e=Yl(as)[0],t=vt().memoizedState;return[e,t]},useMutableSource:hg,useSyncExternalStore:gg,useId:Tg,unstable_isNewReconciler:!1};function Vr(e,t){try{var n="",r=t;do n+=Wy(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function du(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function Rg(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){li||(li=!0,wu=r),du(e,t)},n}function zg(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){du(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){du(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function gm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vx;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Px.bind(null,e,t,n),t.then(e,e))}function vm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ym(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var yx=rn.ReactCurrentOwner,Ge=!1;function Ue(e,t,n,r){t.child=e===null?mg(t,null,n,r):qr(t,e.child,n,r)}function xm(e,t,n,r,a){n=n.render;var s=t.ref;return $r(t,a),r=Pd(e,t,n,r,s,a),n=$d(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,tn(e,t,a)):(fe&&n&&xd(t),t.flags|=1,Ue(e,t,r,a),t.child)}function bm(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ag(e,t,s,r,a)):(e=oo(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(i,r)&&e.ref===t.ref)return tn(e,t,a)}return t.flags|=1,e=Nn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ag(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(Xa(s,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,tn(e,t,a)}return pu(e,t,n,r,a)}function Fg(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Nr,tt),tt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Nr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Nr,tt),tt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ie(Nr,tt),tt|=r;return Ue(e,t,a,n),t.child}function Ig(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pu(e,t,n,r,a){var s=Je(n)?tr:Me.current;return s=Ur(t,s),$r(t,a),n=Pd(e,t,n,r,s,a),r=$d(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,tn(e,t,a)):(fe&&r&&xd(t),t.flags|=1,Ue(e,t,n,a),t.child)}function wm(e,t,n,r,a){if(Je(n)){var s=!0;Jo(t)}else s=!1;if($r(t,a),t.stateNode===null)ro(e,t),dg(t,n,r),uu(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=Je(n)?tr:Me.current,u=Ur(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||c!==u)&&pm(t,i,r,u),dn=!1;var m=t.memoizedState;i.state=m,ri(t,r,i,a),c=t.memoizedState,l!==r||m!==c||Xe.current||dn?(typeof d=="function"&&(cu(t,n,d,r),c=t.memoizedState),(l=dn||dm(t,n,l,r,m,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:wt(t.type,l),i.props=u,p=t.pendingProps,m=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=gt(c):(c=Je(n)?tr:Me.current,c=Ur(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||m!==c)&&pm(t,i,r,c),dn=!1,m=t.memoizedState,i.state=m,ri(t,r,i,a);var h=t.memoizedState;l!==p||m!==h||Xe.current||dn?(typeof v=="function"&&(cu(t,n,v,r),h=t.memoizedState),(u=dn||dm(t,n,u,r,m,h,c)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,h,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,h,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=c,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return mu(e,t,n,r,s,a)}function mu(e,t,n,r,a,s){Ig(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&om(t,n,!1),tn(e,t,s);r=t.stateNode,yx.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=qr(t,e.child,null,s),t.child=qr(t,null,l,s)):Ue(e,t,l,s),t.memoizedState=r.state,a&&om(t,n,!0),t.child}function Dg(e){var t=e.stateNode;t.pendingContext?sm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sm(e,t.context,!1),Cd(e,t.containerInfo)}function _m(e,t,n,r,a){return Br(),wd(a),t.flags|=256,Ue(e,t,n,r),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mg(e,t,n){var r=t.pendingProps,a=he.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ie(he,a&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Bi(i,r,0,null),e=Xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hu(n),t.memoizedState=fu,e):zd(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return xx(e,t,i,r,l,a,n);if(s){s=r.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Nn(a,c),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=Nn(l,s):(s=Xn(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?hu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=fu,r}return s=e.child,e=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zd(e,t){return t=Bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ms(e,t,n,r){return r!==null&&wd(r),qr(t,e.child,null,n),e=zd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xx(e,t,n,r,a,s,i){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(L(422))),Ms(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=Bi({mode:"visible",children:r.children},a,0,null),s=Xn(s,a,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&qr(t,e.child,null,i),t.child.memoizedState=hu(i),t.memoizedState=fu,s);if(!(t.mode&1))return Ms(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Xl(s,r,void 0),Ms(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ge||l){if(r=Le,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,en(e,a),Nt(r,e,a,-1))}return Ud(),r=Xl(Error(L(421))),Ms(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=$x.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,nt=_n(a.nextSibling),rt=t,fe=!0,jt=null,e!==null&&(dt[pt++]=Gt,dt[pt++]=Kt,dt[pt++]=nr,Gt=e.id,Kt=e.overflow,nr=t),t=zd(t,r.children),t.flags|=4096,t)}function jm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lu(e.return,t,n)}function Jl(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function Ug(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(Ue(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,n,t);else if(e.tag===19)jm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(he,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Jl(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ai(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Jl(t,!0,n,null,s);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bx(e,t,n){switch(t.tag){case 3:Dg(t),Br();break;case 5:fg(t);break;case 1:Je(t.type)&&Jo(t);break;case 4:Cd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ie(ti,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?Mg(e,t,n):(ie(he,he.current&1),e=tn(e,t,n),e!==null?e.sibling:null);ie(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ug(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Fg(e,t,n)}return tn(e,t,n)}var Bg,gu,qg,Wg;Bg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gu=function(){};qg=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Gn(Ft.current);var s=null;switch(n){case"input":a=Ic(e,a),r=Ic(e,r),s=[];break;case"select":a=ve({},a,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":a=Uc(e,a),r=Uc(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yo)}qc(n,r);var i;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&le("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Wg=function(e,t,n,r){n!==r&&(t.flags|=4)};function fa(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wx(e,t,n){var r=t.pendingProps;switch(bd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Je(t.type)&&Xo(),Ae(t),null;case 3:return r=t.stateNode,Wr(),ue(Xe),ue(Me),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(Su(jt),jt=null))),gu(e,t),Ae(t),null;case 5:Ed(t);var a=Gn(ns.current);if(n=t.type,e!==null&&t.stateNode!=null)qg(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Ae(t),null}if(e=Gn(Ft.current),Is(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Rt]=t,r[es]=s,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(a=0;a<_a.length;a++)le(_a[a],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":$p(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Rp(r,s),le("invalid",r)}qc(n,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,l,e),a=["children",""+l]):Wa.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&le("scroll",r)}switch(n){case"input":Ls(r),Op(r,s,!0);break;case"textarea":Ls(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yo)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Rt]=t,e[es]=r,Bg(e,t,!1,!1),t.stateNode=e;e:{switch(i=Wc(n,r),n){case"dialog":le("cancel",e),le("close",e),a=r;break;case"iframe":case"object":case"embed":le("load",e),a=r;break;case"video":case"audio":for(a=0;a<_a.length;a++)le(_a[a],e);a=r;break;case"source":le("error",e),a=r;break;case"img":case"image":case"link":le("error",e),le("load",e),a=r;break;case"details":le("toggle",e),a=r;break;case"input":$p(e,r),a=Ic(e,r),le("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ve({},r,{value:void 0}),le("invalid",e);break;case"textarea":Rp(e,r),a=Uc(e,r),le("invalid",e);break;default:a=r}qc(n,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?bh(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yh(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Va(e,c):typeof c=="number"&&Va(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",e):c!=null&&ad(e,s,c,i))}switch(n){case"input":Ls(e),Op(e,r,!1);break;case"textarea":Ls(e),zp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Er(e,!!r.multiple,s,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Wg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Gn(ns.current),Gn(Ft.current),Is(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(s=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:Fs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ue(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&nt!==null&&t.mode&1&&!(t.flags&128))ig(),Br(),t.flags|=98560,s=!1;else if(s=Is(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(L(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Rt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),s=!1}else jt!==null&&(Su(jt),jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Se===0&&(Se=3):Ud())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Wr(),gu(e,t),e===null&&Ja(t.stateNode.containerInfo),Ae(t),null;case 10:return Sd(t.type._context),Ae(t),null;case 17:return Je(t.type)&&Xo(),Ae(t),null;case 19:if(ue(he),s=t.memoizedState,s===null)return Ae(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)fa(s,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ai(e),i!==null){for(t.flags|=128,fa(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(he,he.current&1|2),t.child}e=e.sibling}s.tail!==null&&xe()>Hr&&(t.flags|=128,r=!0,fa(s,!1),t.lanes=4194304)}else{if(!r)if(e=ai(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!fe)return Ae(t),null}else 2*xe()-s.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,fa(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=xe(),t.sibling=null,n=he.current,ie(he,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Md(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function _x(e,t){switch(bd(t),t.tag){case 1:return Je(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),ue(Xe),ue(Me),Ld(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ed(t),null;case 13:if(ue(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(he),null;case 4:return Wr(),null;case 10:return Sd(t.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Us=!1,De=!1,jx=typeof WeakSet=="function"?WeakSet:Set,R=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function vu(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Sm=!1;function Sx(e,t){if(eu=Qo,e=Gh(),yd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,c=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(l=i+a),p!==s||r!==0&&p.nodeType!==3||(c=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===a&&(l=i),m===s&&++d===r&&(c=i),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:e,selectionRange:n},Qo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,w=h.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:wt(t.type,y),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){ye(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return h=Sm,Sm=!1,h}function Pa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&vu(t,n,s)}a=a.next}while(a!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vg(e){var t=e.alternate;t!==null&&(e.alternate=null,Vg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[es],delete t[au],delete t[ox],delete t[ix])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hg(e){return e.tag===5||e.tag===3||e.tag===4}function km(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yo));else if(r!==4&&(e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}function bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bu(e,t,n),e=e.sibling;e!==null;)bu(e,t,n),e=e.sibling}var $e=null,_t=!1;function on(e,t,n){for(n=n.child;n!==null;)Qg(e,t,n),n=n.sibling}function Qg(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount($i,n)}catch{}switch(n.tag){case 5:De||kr(n,t);case 6:var r=$e,a=_t;$e=null,on(e,t,n),$e=r,_t=a,$e!==null&&(_t?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(_t?(e=$e,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),Ka(e)):Vl($e,n.stateNode));break;case 4:r=$e,a=_t,$e=n.stateNode.containerInfo,_t=!0,on(e,t,n),$e=r,_t=a;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&vu(n,t,i),a=a.next}while(a!==r)}on(e,t,n);break;case 1:if(!De&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,on(e,t,n),De=r):on(e,t,n);break;default:on(e,t,n)}}function Nm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jx),t.forEach(function(r){var a=Ox.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,_t=!1;break e;case 3:$e=l.stateNode.containerInfo,_t=!0;break e;case 4:$e=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if($e===null)throw Error(L(160));Qg(s,i,a),$e=null,_t=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ye(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gg(t,e),t=t.sibling}function Gg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Pt(e),r&4){try{Pa(3,e,e.return),Mi(3,e)}catch(y){ye(e,e.return,y)}try{Pa(5,e,e.return)}catch(y){ye(e,e.return,y)}}break;case 1:bt(t,e),Pt(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(bt(t,e),Pt(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var a=e.stateNode;try{Va(a,"")}catch(y){ye(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hh(a,s),Wc(l,i);var u=Wc(l,s);for(i=0;i<c.length;i+=2){var d=c[i],p=c[i+1];d==="style"?bh(a,p):d==="dangerouslySetInnerHTML"?yh(a,p):d==="children"?Va(a,p):ad(a,d,p,u)}switch(l){case"input":Dc(a,s);break;case"textarea":gh(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Er(a,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Er(a,!!s.multiple,s.defaultValue,!0):Er(a,!!s.multiple,s.multiple?[]:"",!1))}a[es]=s}catch(y){ye(e,e.return,y)}}break;case 6:if(bt(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(y){ye(e,e.return,y)}}break;case 3:if(bt(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(t.containerInfo)}catch(y){ye(e,e.return,y)}break;case 4:bt(t,e),Pt(e);break;case 13:bt(t,e),Pt(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Id=xe())),r&4&&Nm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||d,bt(t,e),De=u):bt(t,e),Pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(p=R=d;R!==null;){switch(m=R,v=m.child,m.tag){case 0:case 11:case 14:case 15:Pa(4,m,m.return);break;case 1:kr(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){ye(r,n,y)}}break;case 5:kr(m,m.return);break;case 22:if(m.memoizedState!==null){Em(p);continue}}v!==null?(v.return=m,R=v):Em(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xh("display",i))}catch(y){ye(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ye(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(t,e),Pt(e),r&4&&Nm(e);break;case 21:break;default:bt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hg(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Va(a,""),r.flags&=-33);var s=km(e);bu(e,s,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=km(e);xu(e,l,i);break;default:throw Error(L(161))}}catch(c){ye(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kx(e,t,n){R=e,Kg(e)}function Kg(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var a=R,s=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Us;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||De;l=Us;var u=De;if(Us=i,(De=c)&&!u)for(R=a;R!==null;)i=R,c=i.child,i.tag===22&&i.memoizedState!==null?Lm(a):c!==null?(c.return=i,R=c):Lm(a);for(;s!==null;)R=s,Kg(s),s=s.sibling;R=a,Us=l,De=u}Cm(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,R=s):Cm(e)}}function Cm(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&um(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}um(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ka(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}De||t.flags&512&&yu(t)}catch(m){ye(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Em(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Lm(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(c){ye(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){ye(t,a,c)}}var s=t.return;try{yu(t)}catch(c){ye(t,s,c)}break;case 5:var i=t.return;try{yu(t)}catch(c){ye(t,i,c)}}}catch(c){ye(t,t.return,c)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Nx=Math.ceil,ii=rn.ReactCurrentDispatcher,Ad=rn.ReactCurrentOwner,ft=rn.ReactCurrentBatchConfig,J=0,Le=null,we=null,Oe=0,tt=0,Nr=Fn(0),Se=0,os=null,ar=0,Ui=0,Fd=0,$a=null,Qe=null,Id=0,Hr=1/0,Wt=null,li=!1,wu=null,Sn=null,Bs=!1,gn=null,ci=0,Oa=0,_u=null,ao=-1,so=0;function Be(){return J&6?xe():ao!==-1?ao:ao=xe()}function kn(e){return e.mode&1?J&2&&Oe!==0?Oe&-Oe:cx.transition!==null?(so===0&&(so=$h()),so):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Dh(e.type)),e):1}function Nt(e,t,n,r){if(50<Oa)throw Oa=0,_u=null,Error(L(185));gs(e,n,r),(!(J&2)||e!==Le)&&(e===Le&&(!(J&2)&&(Ui|=n),Se===4&&mn(e,Oe)),Ze(e,r),n===1&&J===0&&!(t.mode&1)&&(Hr=xe()+500,Fi&&In()))}function Ze(e,t){var n=e.callbackNode;c1(e,t);var r=Ho(e,e===Le?Oe:0);if(r===0)n!==null&&Ip(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ip(n),t===1)e.tag===0?lx(Tm.bind(null,e)):ag(Tm.bind(null,e)),ax(function(){!(J&6)&&In()}),n=null;else{switch(Oh(r)){case 1:n=ud;break;case 4:n=Th;break;case 16:n=Vo;break;case 536870912:n=Ph;break;default:n=Vo}n=r0(n,Yg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yg(e,t){if(ao=-1,so=0,J&6)throw Error(L(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var r=Ho(e,e===Le?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ui(e,r);else{t=r;var a=J;J|=2;var s=Jg();(Le!==e||Oe!==t)&&(Wt=null,Hr=xe()+500,Yn(e,t));do try{Lx();break}catch(l){Xg(e,l)}while(1);jd(),ii.current=s,J=a,we!==null?t=0:(Le=null,Oe=0,t=Se)}if(t!==0){if(t===2&&(a=Kc(e),a!==0&&(r=a,t=ju(e,a))),t===1)throw n=os,Yn(e,0),mn(e,r),Ze(e,xe()),n;if(t===6)mn(e,r);else{if(a=e.current.alternate,!(r&30)&&!Cx(a)&&(t=ui(e,r),t===2&&(s=Kc(e),s!==0&&(r=s,t=ju(e,s))),t===1))throw n=os,Yn(e,0),mn(e,r),Ze(e,xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:qn(e,Qe,Wt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=Id+500-xe(),10<t)){if(Ho(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ru(qn.bind(null,e,Qe,Wt),t);break}qn(e,Qe,Wt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-kt(r);s=1<<i,i=t[i],i>a&&(a=i),r&=~s}if(r=a,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nx(r/1960))-r,10<r){e.timeoutHandle=ru(qn.bind(null,e,Qe,Wt),r);break}qn(e,Qe,Wt);break;case 5:qn(e,Qe,Wt);break;default:throw Error(L(329))}}}return Ze(e,xe()),e.callbackNode===n?Yg.bind(null,e):null}function ju(e,t){var n=$a;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=ui(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Su(t)),e}function Su(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Cx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!Et(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Fd,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function Tm(e){if(J&6)throw Error(L(327));Or();var t=Ho(e,0);if(!(t&1))return Ze(e,xe()),null;var n=ui(e,t);if(e.tag!==0&&n===2){var r=Kc(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=os,Yn(e,0),mn(e,t),Ze(e,xe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qn(e,Qe,Wt),Ze(e,xe()),null}function Dd(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Hr=xe()+500,Fi&&In())}}function sr(e){gn!==null&&gn.tag===0&&!(J&6)&&Or();var t=J;J|=1;var n=ft.transition,r=ee;try{if(ft.transition=null,ee=1,e)return e()}finally{ee=r,ft.transition=n,J=t,!(J&6)&&In()}}function Md(){tt=Nr.current,ue(Nr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rx(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:Wr(),ue(Xe),ue(Me),Ld();break;case 5:Ed(r);break;case 4:Wr();break;case 13:ue(he);break;case 19:ue(he);break;case 10:Sd(r.type._context);break;case 22:case 23:Md()}n=n.return}if(Le=e,we=e=Nn(e.current,null),Oe=tt=t,Se=0,os=null,Fd=Ui=ar=0,Qe=$a=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=a,r.next=i}n.pending=r}Qn=null}return e}function Xg(e,t){do{var n=we;try{if(jd(),to.current=oi,si){for(var r=ge.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}si=!1}if(rr=0,Ce=je=ge=null,Ta=!1,rs=0,Ad.current=null,n===null||n.return===null){Se=1,os=t,we=null;break}e:{var s=e,i=n.return,l=n,c=t;if(t=Oe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=vm(i);if(v!==null){v.flags&=-257,ym(v,i,l,s,t),v.mode&1&&gm(s,u,t),t=v,c=u;var h=t.updateQueue;if(h===null){var y=new Set;y.add(c),t.updateQueue=y}else h.add(c);break e}else{if(!(t&1)){gm(s,u,t),Ud();break e}c=Error(L(426))}}else if(fe&&l.mode&1){var w=vm(i);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ym(w,i,l,s,t),wd(Vr(c,l));break e}}s=c=Vr(c,l),Se!==4&&(Se=2),$a===null?$a=[s]:$a.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Rg(s,c,t);cm(s,g);break e;case 1:l=c;var f=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Sn===null||!Sn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=zg(s,l,t);cm(s,b);break e}}s=s.return}while(s!==null)}e0(n)}catch(j){t=j,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Jg(){var e=ii.current;return ii.current=oi,e===null?oi:e}function Ud(){(Se===0||Se===3||Se===2)&&(Se=4),Le===null||!(ar&268435455)&&!(Ui&268435455)||mn(Le,Oe)}function ui(e,t){var n=J;J|=2;var r=Jg();(Le!==e||Oe!==t)&&(Wt=null,Yn(e,t));do try{Ex();break}catch(a){Xg(e,a)}while(1);if(jd(),J=n,ii.current=r,we!==null)throw Error(L(261));return Le=null,Oe=0,Se}function Ex(){for(;we!==null;)Zg(we)}function Lx(){for(;we!==null&&!e1();)Zg(we)}function Zg(e){var t=n0(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?e0(e):we=t,Ad.current=null}function e0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_x(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=wx(n,t,tt),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function qn(e,t,n){var r=ee,a=ft.transition;try{ft.transition=null,ee=1,Tx(e,t,n,r)}finally{ft.transition=a,ee=r}return null}function Tx(e,t,n,r){do Or();while(gn!==null);if(J&6)throw Error(L(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(u1(e,s),e===Le&&(we=Le=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bs||(Bs=!0,r0(Vo,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var i=ee;ee=1;var l=J;J|=4,Ad.current=null,Sx(e,n),Gg(n,e),Y1(tu),Qo=!!eu,tu=eu=null,e.current=n,kx(n),t1(),J=l,ee=i,ft.transition=s}else e.current=n;if(Bs&&(Bs=!1,gn=e,ci=a),s=e.pendingLanes,s===0&&(Sn=null),a1(n.stateNode),Ze(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(li)throw li=!1,e=wu,wu=null,e;return ci&1&&e.tag!==0&&Or(),s=e.pendingLanes,s&1?e===_u?Oa++:(Oa=0,_u=e):Oa=0,In(),null}function Or(){if(gn!==null){var e=Oh(ci),t=ft.transition,n=ee;try{if(ft.transition=null,ee=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,ci=0,J&6)throw Error(L(331));var a=J;for(J|=4,R=e.current;R!==null;){var s=R,i=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Pa(8,d,s)}var p=d.child;if(p!==null)p.return=d,R=p;else for(;R!==null;){d=R;var m=d.sibling,v=d.return;if(Vg(d),d===u){R=null;break}if(m!==null){m.return=v,R=m;break}R=v}}}var h=s.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,R=i;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var f=e.current;for(R=f;R!==null;){i=R;var x=i.child;if(i.subtreeFlags&2064&&x!==null)x.return=i,R=x;else e:for(i=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(j){ye(l,l.return,j)}if(l===i){R=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,R=b;break e}R=l.return}}if(J=a,In(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot($i,e)}catch{}r=!0}return r}finally{ee=n,ft.transition=t}}return!1}function Pm(e,t,n){t=Vr(n,t),t=Rg(e,t,1),e=jn(e,t,1),t=Be(),e!==null&&(gs(e,1,t),Ze(e,t))}function ye(e,t,n){if(e.tag===3)Pm(e,e,n);else for(;t!==null;){if(t.tag===3){Pm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Vr(n,e),e=zg(t,e,1),t=jn(t,e,1),e=Be(),t!==null&&(gs(t,1,e),Ze(t,e));break}}t=t.return}}function Px(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Oe&n)===n&&(Se===4||Se===3&&(Oe&130023424)===Oe&&500>xe()-Id?Yn(e,0):Fd|=n),Ze(e,t)}function t0(e,t){t===0&&(e.mode&1?(t=$s,$s<<=1,!($s&130023424)&&($s=4194304)):t=1);var n=Be();e=en(e,t),e!==null&&(gs(e,t,n),Ze(e,n))}function $x(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),t0(e,n)}function Ox(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),t0(e,n)}var n0;n0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,bx(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,fe&&t.flags&1048576&&sg(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var a=Ur(t,Me.current);$r(t,n),a=Pd(null,t,r,e,a,n);var s=$d();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(s=!0,Jo(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Nd(t),a.updater=Ii,t.stateNode=a,a._reactInternals=t,uu(t,r,e,n),t=mu(null,t,r,!0,s,n)):(t.tag=0,fe&&s&&xd(t),Ue(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=zx(r),e=wt(r,e),a){case 0:t=pu(null,t,r,e,n);break e;case 1:t=wm(null,t,r,e,n);break e;case 11:t=xm(null,t,r,e,n);break e;case 14:t=bm(null,t,r,wt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),pu(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),wm(e,t,r,a,n);case 3:e:{if(Dg(t),e===null)throw Error(L(387));r=t.pendingProps,s=t.memoizedState,a=s.element,cg(e,t),ri(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Vr(Error(L(423)),t),t=_m(e,t,r,n,a);break e}else if(r!==a){a=Vr(Error(L(424)),t),t=_m(e,t,r,n,a);break e}else for(nt=_n(t.stateNode.containerInfo.firstChild),rt=t,fe=!0,jt=null,n=mg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===a){t=tn(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return fg(t),e===null&&iu(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,nu(r,a)?i=null:s!==null&&nu(r,s)&&(t.flags|=32),Ig(e,t),Ue(e,t,i,n),t.child;case 6:return e===null&&iu(t),null;case 13:return Mg(e,t,n);case 4:return Cd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),xm(e,t,r,a,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,ie(ti,r._currentValue),r._currentValue=i,s!==null)if(Et(s.value,i)){if(s.children===a.children&&!Xe.current){t=tn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Yt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),lu(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(L(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),lu(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ue(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,$r(t,n),a=gt(a),r=r(a),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,a=wt(r,t.pendingProps),a=wt(r.type,a),bm(e,t,r,a,n);case 15:return Ag(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),ro(e,t),t.tag=1,Je(r)?(e=!0,Jo(t)):e=!1,$r(t,n),dg(t,r,a),uu(t,r,a,n),mu(null,t,r,!0,e,n);case 19:return Ug(e,t,n);case 22:return Fg(e,t,n)}throw Error(L(156,t.tag))};function r0(e,t){return Lh(e,t)}function Rx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Rx(e,t,n,r)}function Bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zx(e){if(typeof e=="function")return Bd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===od)return 11;if(e===ld)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,a,s){var i=2;if(r=e,typeof e=="function")Bd(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case gr:return Xn(n.children,a,s,t);case sd:i=8,a|=8;break;case Rc:return e=mt(12,n,t,a|2),e.elementType=Rc,e.lanes=s,e;case zc:return e=mt(13,n,t,a),e.elementType=zc,e.lanes=s,e;case Ac:return e=mt(19,n,t,a),e.elementType=Ac,e.lanes=s,e;case ph:return Bi(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uh:i=10;break e;case dh:i=9;break e;case od:i=11;break e;case ld:i=14;break e;case un:i=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=mt(i,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function Xn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Bi(e,t,n,r){return e=mt(22,e,r,t),e.elementType=ph,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function ec(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ax(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function qd(e,t,n,r,a,s,i,l,c){return e=new Ax(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),e}function Fx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function a0(e){if(!e)return On;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Je(n))return rg(e,n,t)}return t}function s0(e,t,n,r,a,s,i,l,c){return e=qd(n,r,!0,e,a,s,i,l,c),e.context=a0(null),n=e.current,r=Be(),a=kn(n),s=Yt(r,a),s.callback=t??null,jn(n,s,a),e.current.lanes=a,gs(e,a,r),Ze(e,r),e}function qi(e,t,n,r){var a=t.current,s=Be(),i=kn(a);return n=a0(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(a,t,i),e!==null&&(Nt(e,a,i,s),eo(e,a,i)),i}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wd(e,t){$m(e,t),(e=e.alternate)&&$m(e,t)}function Ix(){return null}var o0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vd(e){this._internalRoot=e}Wi.prototype.render=Vd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));qi(e,t,null,null)};Wi.prototype.unmount=Vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){qi(null,e,null,null)}),t[Zt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ah();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Ih(e)}};function Hd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Om(){}function Dx(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var u=di(i);s.call(u)}}var i=s0(t,r,e,0,null,!1,!1,"",Om);return e._reactRootContainer=i,e[Zt]=i.current,Ja(e.nodeType===8?e.parentNode:e),sr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=di(c);l.call(u)}}var c=qd(e,0,!1,null,null,!1,!1,"",Om);return e._reactRootContainer=c,e[Zt]=c.current,Ja(e.nodeType===8?e.parentNode:e),sr(function(){qi(t,c,n,r)}),c}function Hi(e,t,n,r,a){var s=n._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var c=di(i);l.call(c)}}qi(t,i,e,a)}else i=Dx(n,t,e,a,r);return di(i)}Rh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wa(t.pendingLanes);n!==0&&(dd(t,n|1),Ze(t,xe()),!(J&6)&&(Hr=xe()+500,In()))}break;case 13:sr(function(){var r=en(e,1);if(r!==null){var a=Be();Nt(r,e,1,a)}}),Wd(e,1)}};pd=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=Be();Nt(t,e,134217728,n)}Wd(e,134217728)}};zh=function(e){if(e.tag===13){var t=kn(e),n=en(e,t);if(n!==null){var r=Be();Nt(n,e,t,r)}Wd(e,t)}};Ah=function(){return ee};Fh=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Hc=function(e,t,n){switch(t){case"input":if(Dc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ai(r);if(!a)throw Error(L(90));fh(r),Dc(r,a)}}}break;case"textarea":gh(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};jh=Dd;Sh=sr;var Mx={usingClientEntryPoint:!1,Events:[ys,br,Ai,wh,_h,Dd]},ha={findFiberByHostInstance:Hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ux={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ch(e),e===null?null:e.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{$i=qs.inject(Ux),At=qs}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(t))throw Error(L(200));return Fx(e,t,null,n)};ot.createRoot=function(e,t){if(!Hd(e))throw Error(L(299));var n=!1,r="",a=o0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=qd(e,1,!1,null,null,n,!1,r,a),e[Zt]=t.current,Ja(e.nodeType===8?e.parentNode:e),new Vd(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Ch(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return sr(e)};ot.hydrate=function(e,t,n){if(!Vi(t))throw Error(L(200));return Hi(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Hd(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",i=o0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=s0(t,null,e,1,n??null,a,!1,s,i),e[Zt]=t.current,Ja(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Wi(t)};ot.render=function(e,t,n){if(!Vi(t))throw Error(L(200));return Hi(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(L(40));return e._reactRootContainer?(sr(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};ot.unstable_batchedUpdates=Dd;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vi(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Hi(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function i0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0)}catch(e){console.error(e)}}i0(),sh.exports=ot;var l0=sh.exports,Rm=l0;$c.createRoot=Rm.createRoot,$c.hydrateRoot=Rm.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}var vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vn||(vn={}));const zm="popstate";function Bx(e){e===void 0&&(e={});function t(r,a){let{pathname:s,search:i,hash:l}=r.location;return ku("",{pathname:s,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:pi(a)}return Wx(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qx(){return Math.random().toString(36).substr(2,8)}function Am(e,t){return{usr:e.state,key:e.key,idx:t}}function ku(e,t,n,r){return n===void 0&&(n=null),is({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ra(t):t,{state:n,key:t&&t.key||r||qx()})}function pi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ra(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wx(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,i=a.history,l=vn.Pop,c=null,u=d();u==null&&(u=0,i.replaceState(is({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function p(){l=vn.Pop;let w=d(),g=w==null?null:w-u;u=w,c&&c({action:l,location:y.location,delta:g})}function m(w,g){l=vn.Push;let f=ku(y.location,w,g);n&&n(f,w),u=d()+1;let x=Am(f,u),b=y.createHref(f);try{i.pushState(x,"",b)}catch{a.location.assign(b)}s&&c&&c({action:l,location:y.location,delta:1})}function v(w,g){l=vn.Replace;let f=ku(y.location,w,g);n&&n(f,w),u=d();let x=Am(f,u),b=y.createHref(f);i.replaceState(x,"",b),s&&c&&c({action:l,location:y.location,delta:0})}function h(w){let g=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof w=="string"?w:pi(w);return _e(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return l},get location(){return e(a,i)},listen(w){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(zm,p),c=w,()=>{a.removeEventListener(zm,p),c=null}},createHref(w){return t(a,w)},createURL:h,encodeLocation(w){let g=h(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(w){return i.go(w)}};return y}var Fm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fm||(Fm={}));function Vx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ra(t):t,a=Gd(r.pathname||"/",n);if(a==null)return null;let s=c0(e);Hx(s);let i=null;for(let l=0;i==null&&l<s.length;++l)i=tb(s[l],ab(a));return i}function c0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(s,i,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(_e(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Cn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),c0(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zx(u,s.index),routesMeta:d})};return e.forEach((s,i)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))a(s,i);else for(let c of u0(s.path))a(s,i,c)}),t}function u0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return a?[s,""]:[s];let i=u0(r.join("/")),l=[];return l.push(...i.map(c=>c===""?s:[s,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Hx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qx=/^:\w+$/,Gx=3,Kx=2,Yx=1,Xx=10,Jx=-2,Im=e=>e==="*";function Zx(e,t){let n=e.split("/"),r=n.length;return n.some(Im)&&(r+=Jx),t&&(r+=Kx),n.filter(a=>!Im(a)).reduce((a,s)=>a+(Qx.test(s)?Gx:s===""?Yx:Xx),r)}function eb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function tb(e,t){let{routesMeta:n}=e,r={},a="/",s=[];for(let i=0;i<n.length;++i){let l=n[i],c=i===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=nb({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=l.route;s.push({params:r,pathname:Cn([a,d.pathname]),pathnameBase:lb(Cn([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Cn([a,d.pathnameBase]))}return s}function nb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rb(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],i=s.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=l[p]||"";i=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=sb(l[p]||"",d),u},{}),pathname:s,pathnameBase:i,pattern:e}}function rb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ab(e){try{return decodeURI(e)}catch(t){return Qd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sb(e,t){try{return decodeURIComponent(e)}catch(n){return Qd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ob(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?ra(e):e;return{pathname:n?n.startsWith("/")?n:ib(n,t):t,search:cb(r),hash:ub(a)}}function ib(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function tc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function d0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function p0(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=ra(e):(a=is({},e),_e(!a.pathname||!a.pathname.includes("?"),tc("?","pathname","search",a)),_e(!a.pathname||!a.pathname.includes("#"),tc("#","pathname","hash",a)),_e(!a.search||!a.search.includes("#"),tc("#","search","hash",a)));let s=e===""||a.pathname==="",i=s?"/":a.pathname,l;if(r||i==null)l=n;else{let p=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=ob(a,l),u=i&&i!=="/"&&i.endsWith("/"),d=(s||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),lb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ub=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function db(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const m0=["post","put","patch","delete"];new Set(m0);const pb=["get",...m0];new Set(pb);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}const Kd=_.createContext(null),mb=_.createContext(null),aa=_.createContext(null),Qi=_.createContext(null),an=_.createContext({outlet:null,matches:[],isDataRoute:!1}),f0=_.createContext(null);function fb(e,t){let{relative:n}=t===void 0?{}:t;bs()||_e(!1);let{basename:r,navigator:a}=_.useContext(aa),{hash:s,pathname:i,search:l}=v0(e,{relative:n}),c=i;return r!=="/"&&(c=i==="/"?r:Cn([r,i])),a.createHref({pathname:c,search:l,hash:s})}function bs(){return _.useContext(Qi)!=null}function Mt(){return bs()||_e(!1),_.useContext(Qi).location}function h0(e){_.useContext(aa).static||_.useLayoutEffect(e)}function dr(){let{isDataRoute:e}=_.useContext(an);return e?Lb():hb()}function hb(){bs()||_e(!1);let e=_.useContext(Kd),{basename:t,navigator:n}=_.useContext(aa),{matches:r}=_.useContext(an),{pathname:a}=Mt(),s=JSON.stringify(d0(r).map(c=>c.pathnameBase)),i=_.useRef(!1);return h0(()=>{i.current=!0}),_.useCallback(function(c,u){if(u===void 0&&(u={}),!i.current)return;if(typeof c=="number"){n.go(c);return}let d=p0(c,JSON.parse(s),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Cn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,a,e])}const g0=_.createContext(null);function Dn(){return _.useContext(g0)}function gb(e){let t=_.useContext(an).outlet;return t&&_.createElement(g0.Provider,{value:e},t)}function vb(){let{matches:e}=_.useContext(an),t=e[e.length-1];return t?t.params:{}}function v0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(an),{pathname:a}=Mt(),s=JSON.stringify(d0(r).map(i=>i.pathnameBase));return _.useMemo(()=>p0(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function yb(e,t){return xb(e,t)}function xb(e,t,n){bs()||_e(!1);let{navigator:r}=_.useContext(aa),{matches:a}=_.useContext(an),s=a[a.length-1],i=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Mt(),u;if(t){var d;let y=typeof t=="string"?ra(t):t;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||_e(!1),u=y}else u=c;let p=u.pathname||"/",m=l==="/"?p:p.slice(l.length)||"/",v=Vx(e,{pathname:m}),h=Sb(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},i,y.params),pathname:Cn([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Cn([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,n);return t&&h?_.createElement(Qi.Provider,{value:{location:mi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:vn.Pop}},h):h}function bb(){let e=Eb(),t=db(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:a},n):null,s)}const wb=_.createElement(bb,null);class _b extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(an.Provider,{value:this.props.routeContext},_.createElement(f0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jb(e){let{routeContext:t,match:n,children:r}=e,a=_.useContext(Kd);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(an.Provider,{value:t},r)}function Sb(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let s=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let l=s.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id]));l>=0||_e(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,c,u)=>{let d=c.route.id?i==null?void 0:i[c.route.id]:null,p=null;n&&(p=c.route.errorElement||wb);let m=t.concat(s.slice(0,u+1)),v=()=>{let h;return d?h=p:c.route.Component?h=_.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=l,_.createElement(jb,{match:c,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?_.createElement(_b,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var Nu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Nu||(Nu={}));var ls;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ls||(ls={}));function kb(e){let t=_.useContext(Kd);return t||_e(!1),t}function Nb(e){let t=_.useContext(mb);return t||_e(!1),t}function Cb(e){let t=_.useContext(an);return t||_e(!1),t}function y0(e){let t=Cb(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function Eb(){var e;let t=_.useContext(f0),n=Nb(ls.UseRouteError),r=y0(ls.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Lb(){let{router:e}=kb(Nu.UseNavigateStable),t=y0(ls.UseNavigateStable),n=_.useRef(!1);return h0(()=>{n.current=!0}),_.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,mi({fromRouteId:t},s)))},[e,t])}function Mn(e){return gb(e.context)}function I(e){_e(!1)}function Tb(e){let{basename:t="/",children:n=null,location:r,navigationType:a=vn.Pop,navigator:s,static:i=!1}=e;bs()&&_e(!1);let l=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:l,navigator:s,static:i}),[l,s,i]);typeof r=="string"&&(r=ra(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:v="default"}=r,h=_.useMemo(()=>{let y=Gd(u,l);return y==null?null:{location:{pathname:y,search:d,hash:p,state:m,key:v},navigationType:a}},[l,u,d,p,m,v,a]);return h==null?null:_.createElement(aa.Provider,{value:c},_.createElement(Qi.Provider,{children:n,value:h}))}function Pb(e){let{children:t,location:n}=e;return yb(Cu(t),n)}var Dm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Dm||(Dm={}));new Promise(()=>{});function Cu(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,a)=>{if(!_.isValidElement(r))return;let s=[...t,a];if(r.type===_.Fragment){n.push.apply(n,Cu(r.props.children,s));return}r.type!==I&&_e(!1),!r.props.index||!r.props.children||_e(!1);let i={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Cu(r.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eu(){return Eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eu.apply(this,arguments)}function $b(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ob(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rb(e,t){return e.button===0&&(!t||t==="_self")&&!Ob(e)}const zb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ab(e){let{basename:t,children:n,window:r}=e,a=_.useRef();a.current==null&&(a.current=Bx({window:r,v5Compat:!0}));let s=a.current,[i,l]=_.useState({action:s.action,location:s.location});return _.useLayoutEffect(()=>s.listen(l),[s]),_.createElement(Tb,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:s})}const Fb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ib=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,S=_.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:s,replace:i,state:l,target:c,to:u,preventScrollReset:d}=t,p=$b(t,zb),{basename:m}=_.useContext(aa),v,h=!1;if(typeof u=="string"&&Ib.test(u)&&(v=u,Fb))try{let f=new URL(window.location.href),x=u.startsWith("//")?new URL(f.protocol+u):new URL(u),b=Gd(x.pathname,m);x.origin===f.origin&&b!=null?u=b+x.search+x.hash:h=!0}catch{}let y=fb(u,{relative:a}),w=Db(u,{replace:i,state:l,target:c,preventScrollReset:d,relative:a});function g(f){r&&r(f),f.defaultPrevented||w(f)}return _.createElement("a",Eu({},p,{href:v||y,onClick:h||s?r:g,ref:n,target:c}))});var Mm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Mm||(Mm={}));var Um;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Um||(Um={}));function Db(e,t){let{target:n,replace:r,state:a,preventScrollReset:s,relative:i}=t===void 0?{}:t,l=dr(),c=Mt(),u=v0(e,{relative:i});return _.useCallback(d=>{if(Rb(d,n)){d.preventDefault();let p=r!==void 0?r:pi(c)===pi(u);l(e,{replace:p,state:a,preventScrollReset:s,relative:i})}},[c,l,u,r,a,n,e,s,i])}var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ke.apply(this,arguments)};function fi(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ce="-ms-",Ra="-moz-",Z="-webkit-",x0="comm",Gi="rule",Yd="decl",Mb="@import",b0="@keyframes",Ub="@layer",Bb=Math.abs,Xd=String.fromCharCode,qb=Object.assign;function Wb(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function w0(e){return e.trim()}function cn(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function io(e,t){return e.indexOf(t)}function Ee(e,t){return e.charCodeAt(t)|0}function Qr(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Jd(e){return e.length}function Ws(e,t){return t.push(e),e}function Vb(e,t){return e.map(t).join("")}var Ki=1,Gr=1,_0=0,yt=0,be=0,sa="";function Yi(e,t,n,r,a,s,i){return{value:e,root:t,parent:n,type:r,props:a,children:s,line:Ki,column:Gr,length:i,return:""}}function ga(e,t){return qb(Yi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Hb(){return be}function Qb(){return be=yt>0?Ee(sa,--yt):0,Gr--,be===10&&(Gr=1,Ki--),be}function Ct(){return be=yt<_0?Ee(sa,yt++):0,Gr++,be===10&&(Gr=1,Ki++),be}function Jn(){return Ee(sa,yt)}function lo(){return yt}function Xi(e,t){return Qr(sa,e,t)}function Lu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gb(e){return Ki=Gr=1,_0=Ht(sa=e),yt=0,[]}function Kb(e){return sa="",e}function nc(e){return w0(Xi(yt-1,Tu(e===91?e+2:e===40?e+1:e)))}function Yb(e){for(;(be=Jn())&&be<33;)Ct();return Lu(e)>2||Lu(be)>3?"":" "}function Xb(e,t){for(;--t&&Ct()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Xi(e,lo()+(t<6&&Jn()==32&&Ct()==32))}function Tu(e){for(;Ct();)switch(be){case e:return yt;case 34:case 39:e!==34&&e!==39&&Tu(be);break;case 40:e===41&&Tu(e);break;case 92:Ct();break}return yt}function Jb(e,t){for(;Ct()&&e+be!==47+10;)if(e+be===42+42&&Jn()===47)break;return"/*"+Xi(t,yt-1)+"*"+Xd(e===47?e:Ct())}function Zb(e){for(;!Lu(Jn());)Ct();return Xi(e,yt)}function ew(e){return Kb(co("",null,null,null,[""],e=Gb(e),0,[0],e))}function co(e,t,n,r,a,s,i,l,c){for(var u=0,d=0,p=i,m=0,v=0,h=0,y=1,w=1,g=1,f=0,x="",b=a,j=s,k=r,N=x;w;)switch(h=f,f=Ct()){case 40:if(h!=108&&Ee(N,p-1)==58){io(N+=H(nc(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:N+=nc(f);break;case 9:case 10:case 13:case 32:N+=Yb(h);break;case 92:N+=Xb(lo()-1,7);continue;case 47:switch(Jn()){case 42:case 47:Ws(tw(Jb(Ct(),lo()),t,n),c);break;default:N+="/"}break;case 123*y:l[u++]=Ht(N)*g;case 125*y:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+d:g==-1&&(N=H(N,/\f/g,"")),v>0&&Ht(N)-p&&Ws(v>32?qm(N+";",r,n,p-1):qm(H(N," ","")+";",r,n,p-2),c);break;case 59:N+=";";default:if(Ws(k=Bm(N,t,n,u,d,a,l,x,b=[],j=[],p),s),f===123)if(d===0)co(N,t,k,k,b,s,p,l,j);else switch(m===99&&Ee(N,3)===110?100:m){case 100:case 108:case 109:case 115:co(e,k,k,r&&Ws(Bm(e,k,k,0,0,a,l,x,a,b=[],p),j),a,j,p,l,r?b:j);break;default:co(N,k,k,k,[""],j,0,l,j)}}u=d=v=0,y=g=1,x=N="",p=i;break;case 58:p=1+Ht(N),v=h;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Qb()==125)continue}switch(N+=Xd(f),f*y){case 38:g=d>0?1:(N+="\f",-1);break;case 44:l[u++]=(Ht(N)-1)*g,g=1;break;case 64:Jn()===45&&(N+=nc(Ct())),m=Jn(),d=p=Ht(x=N+=Zb(lo())),f++;break;case 45:h===45&&Ht(N)==2&&(y=0)}}return s}function Bm(e,t,n,r,a,s,i,l,c,u,d){for(var p=a-1,m=a===0?s:[""],v=Jd(m),h=0,y=0,w=0;h<r;++h)for(var g=0,f=Qr(e,p+1,p=Bb(y=i[h])),x=e;g<v;++g)(x=w0(y>0?m[g]+" "+f:H(f,/&\f/g,m[g])))&&(c[w++]=x);return Yi(e,t,n,a===0?Gi:l,c,u,d)}function tw(e,t,n){return Yi(e,t,n,x0,Xd(Hb()),Qr(e,2,-2),0)}function qm(e,t,n,r){return Yi(e,t,n,Yd,Qr(e,0,r),Qr(e,r+1,-1),r)}function j0(e,t,n){switch(Wb(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return Ra+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Ra+e+ce+e+e;case 5936:switch(Ee(e,t+11)){case 114:return Z+e+ce+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ce+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ce+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+ce+e+e;case 6165:return Z+e+ce+"flex-"+e+e;case 5187:return Z+e+H(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return Z+e+ce+"flex-item-"+H(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":ce+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return Z+e+ce+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+ce+H(e,"shrink","negative")+e;case 5292:return Z+e+ce+H(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+H(e,"-grow","")+Z+e+ce+H(e,"grow","positive")+e;case 4554:return Z+H(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!cn(e,/flex-|baseline/))return ce+"grid-column-align"+Qr(e,t)+e;break;case 2592:case 3360:return ce+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,cn(r.props,/grid-\w+-end/)})?~io(e+(n=n[t].value),"span")?e:ce+H(e,"-start","")+e+ce+"grid-row-span:"+(~io(n,"span")?cn(n,/\d+/):+cn(n,/\d+/)-+cn(e,/\d+/))+";":ce+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return cn(r.props,/grid-\w+-start/)})?e:ce+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Ra+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~io(e,"stretch")?j0(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,s,i,l,c,u){return ce+a+":"+s+u+(i?ce+a+"-span:"+(l?c:+c-+s)+u:"")+e});case 4949:if(Ee(e,t+6)===121)return H(e,":",":"+Z)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Ee(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ce+"$2box$3")+e;case 100:return H(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function Rr(e,t){for(var n="",r=Jd(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function nw(e,t,n,r){switch(e.type){case Ub:if(e.children.length)break;case Mb:case Yd:return e.return=e.return||e.value;case x0:return"";case b0:return e.return=e.value+"{"+Rr(e.children,r)+"}";case Gi:e.value=e.props.join(",")}return Ht(n=Rr(e.children,r))?e.return=e.value+"{"+n+"}":""}function rw(e){var t=Jd(e);return function(n,r,a,s){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,s)||"";return i}}function aw(e){return function(t){t.root||(t=t.return)&&e(t)}}function sw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yd:e.return=j0(e.value,e.length,n);return;case b0:return Rr([ga(e,{value:H(e.value,"@","@"+Z)})],r);case Gi:if(e.length)return Vb(e.props,function(a){switch(cn(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Rr([ga(e,{props:[H(a,/:(read-\w+)/,":"+Ra+"$1")]})],r);case"::placeholder":return Rr([ga(e,{props:[H(a,/:(plac\w+)/,":"+Z+"input-$1")]}),ga(e,{props:[H(a,/:(plac\w+)/,":"+Ra+"$1")]}),ga(e,{props:[H(a,/:(plac\w+)/,ce+"input-$1")]})],r)}return""})}}var ow={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zd=typeof window<"u"&&"HTMLElement"in window,iw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),S0=Object.freeze([]),or=Object.freeze({});function lw(e,t,n){return n===void 0&&(n=or),e.theme!==n.theme&&e.theme||t||n.theme}var k0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uw=/(^-|-$)/g;function Wm(e){return e.replace(cw,"-").replace(uw,"")}var dw=/(a)(d)/gi,Vm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vm(t%52)+n;return(Vm(t%52)+n).replace(dw,"$1-$2")}var rc,Cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},N0=function(e){return Cr(5381,e)};function pw(e){return Pu(N0(e)>>>0)}function mw(e){return e.displayName||e.name||"Component"}function ac(e){return typeof e=="string"&&!0}var C0=typeof Symbol=="function"&&Symbol.for,E0=C0?Symbol.for("react.memo"):60115,fw=C0?Symbol.for("react.forward_ref"):60112,hw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},L0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vw=((rc={})[fw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rc[E0]=L0,rc);function Hm(e){return("type"in(t=e)&&t.type.$$typeof)===E0?L0:"$$typeof"in e?vw[e.$$typeof]:hw;var t}var yw=Object.defineProperty,xw=Object.getOwnPropertyNames,Qm=Object.getOwnPropertySymbols,bw=Object.getOwnPropertyDescriptor,ww=Object.getPrototypeOf,Gm=Object.prototype;function T0(e,t,n){if(typeof t!="string"){if(Gm){var r=ww(t);r&&r!==Gm&&T0(e,r,n)}var a=xw(t);Qm&&(a=a.concat(Qm(t)));for(var s=Hm(e),i=Hm(t),l=0;l<a.length;++l){var c=a[l];if(!(c in gw||n&&n[c]||i&&c in i||s&&c in s)){var u=bw(t,c);try{yw(e,c,u)}catch{}}}}return e}function Yr(e){return typeof e=="function"}function ep(e){return typeof e=="object"&&"styledComponentId"in e}function Kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Km(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function cs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $u(e,t,n){if(n===void 0&&(n=!1),!n&&!cs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=$u(e[r],t[r]);else if(cs(t))for(var r in t)e[r]=$u(e[r],t[r]);return e}function ws(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _w=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,s=a;t>=s;)if((s<<=1)<0)throw ws(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var i=a;i<s;i++)this.groupSizes[i]=0}for(var l=this.indexOfGroup(t+1),c=(i=0,n.length);i<c;i++)this.tag.insertRule(l,n[i])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var s=r;s<a;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),s=a+r,i=a;i<s;i++)n+="".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);return n},e}(),uo=new Map,hi=new Map,sc=1,Vs=function(e){if(uo.has(e))return uo.get(e);for(;hi.has(sc);)sc++;var t=sc++;return uo.set(e,t),hi.set(t,e),t},jw=function(e,t){uo.set(e,t),hi.set(t,e)},Sw="style[".concat(Kr,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),kw=new RegExp("^".concat(Kr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nw=function(e,t,n){for(var r,a=n.split(","),s=0,i=a.length;s<i;s++)(r=a[s])&&e.registerName(t,r)},Cw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),a=[],s=0,i=r.length;s<i;s++){var l=r[s].trim();if(l){var c=l.match(kw);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(jw(d,u),Nw(e,d,c[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}};function Ew(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var c=l.childNodes,u=c.length;u>=0;u--){var d=c[u];if(d&&d.nodeType===1&&d.hasAttribute(Kr))return d}}(n),s=a!==void 0?a.nextSibling:null;r.setAttribute(Kr,"active"),r.setAttribute("data-styled-version","6.0.0-rc.3");var i=Ew();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},Lw=function(){function e(t){this.element=P0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,s=r.length;a<s;a++){var i=r[a];if(i.ownerNode===n)return i}throw ws(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Tw=function(){function e(t){this.element=P0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Pw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ym=Zd,$w={isServer:!Zd,useCSSOMInjection:!iw},$0=function(){function e(t,n,r){t===void 0&&(t=or),n===void 0&&(n={}),this.options=Ke(Ke({},$w),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zd&&Ym&&(Ym=!1,function(a){for(var s=document.querySelectorAll(Sw),i=0,l=s.length;i<l;i++){var c=s[i];c&&c.getAttribute(Kr)!=="active"&&(Cw(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}return e.registerId=function(t){return Vs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ke(Ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new Pw(a):r?new Lw(a):new Tw(a)}(this.options),new _w(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,a="",s=function(l){var c=function(v){return hi.get(v)}(l);if(c===void 0)return"continue";var u=t.names.get(c),d=n.getGroup(l);if(u===void 0||d.length===0)return"continue";var p="".concat(Kr,".g").concat(l,'[id="').concat(c,'"]'),m="";u!==void 0&&u.forEach(function(v){v.length>0&&(m+="".concat(v,","))}),a+="".concat(d).concat(p,'{content:"').concat(m,'"}').concat(`/*!sc*/
`)},i=0;i<r;i++)s(i);return a}(this)},e}(),Ow=/&/g,Rw=/^\s*\/\/.*$/gm;function O0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=O0(n.children,t)),n})}function zw(e){var t,n,r,a=e===void 0?or:e,s=a.options,i=s===void 0?or:s,l=a.plugins,c=l===void 0?S0:l,u=function(m,v,h){return h===n||h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(t):m},d=c.slice();d.push(function(m){m.type===Gi&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Ow,n).replace(r,u))}),i.prefix&&d.push(sw),d.push(nw);var p=function(m,v,h,y){v===void 0&&(v=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var w=m.replace(Rw,""),g=ew(h||v?"".concat(h," ").concat(v," { ").concat(w," }"):w);i.namespace&&(g=O0(g,i.namespace));var f=[];return Rr(g,rw(d.concat(aw(function(x){return f.push(x)})))),f};return p.hash=c.length?c.reduce(function(m,v){return v.name||ws(15),Cr(m,v.name)},5381).toString():"",p}var Aw=new $0,Ou=zw(),R0=V.createContext({shouldForwardProp:void 0,styleSheet:Aw,stylis:Ou});R0.Consumer;V.createContext(void 0);function Xm(){return _.useContext(R0)}var Fw=function(){function e(t,n){var r=this;this.inject=function(a,s){s===void 0&&(s=Ou);var i=r.name+s.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){throw ws(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ou),this.name+t.hash},e}(),Iw=function(e){return e>="A"&&e<="Z"};function Jm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Iw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var z0=function(e){return e==null||e===!1||e===""},A0=function(e){var t,n,r=[];for(var a in e){var s=e[a];e.hasOwnProperty(a)&&!z0(s)&&(Array.isArray(s)&&s.isCss||Yr(s)?r.push("".concat(Jm(a),":"),s,";"):cs(s)?r.push.apply(r,fi(fi(["".concat(a," {")],A0(s),!1),["}"],!1)):r.push("".concat(Jm(a),": ").concat((t=a,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ow||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Zn(e,t,n,r){if(z0(e))return[];if(ep(e))return[".".concat(e.styledComponentId)];if(Yr(e)){if(!Yr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var a=e(t);return Zn(a,t,n,r)}var s;return e instanceof Fw?n?(e.inject(n,r),[e.getName(r)]):[e]:cs(e)?A0(e):Array.isArray(e)?e.flatMap(function(i){return Zn(i,t,n,r)}):[e.toString()]}function Dw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yr(n)&&!ep(n))return!1}return!0}var Mw=N0("6.0.0-rc.3"),Uw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Dw(t),this.componentId=n,this.baseHash=Cr(Mw,n),this.baseStyle=r,$0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Kn(a,this.staticRulesId);else{var s=Km(Zn(this.rules,t,n,r)),i=Pu(Cr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,i)){var l=r(s,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,l)}a=Kn(a,i),this.staticRulesId=i}else{for(var c=Cr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var m=Km(Zn(p,t,n,r));c=Cr(c,m),u+=m}}if(u){var v=Pu(c>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),a=Kn(a,v)}}return a},e}(),F0=V.createContext(void 0);F0.Consumer;function Bw(){return _.useContext(F0)}var oc={};function qw(e,t,n){var r,a=ep(e),s=e,i=!ac(e),l=t.componentId,c=l===void 0?function(j,k){var N=typeof j!="string"?"sc":Wm(j);oc[N]=(oc[N]||0)+1;var E="".concat(N,"-").concat(pw("6.0.0-rc.3"+N+oc[N]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(j){return ac(j)?"styled.".concat(j):"Styled(".concat(mw(j),")")}(e):u,p=(r=t.attrs)!==null&&r!==void 0?r:[],m=t.displayName&&t.componentId?"".concat(Wm(t.displayName),"-").concat(t.componentId):t.componentId||c,v=a&&s.attrs?s.attrs.concat(p).filter(Boolean):p,h=t.shouldForwardProp;if(a&&s.shouldForwardProp){var y=s.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(j,k){return y(j,k)&&w(j,k)}}else h=y}var g=new Uw(n,m,a?s.componentStyle:void 0),f=g.isStatic&&p.length===0;function x(j,k){return function(N,E,A,$){var W=N.attrs,G=N.componentStyle,ne=N.defaultProps,re=N.foldedComponentIds,de=N.styledComponentId,M=N.target,se=Bw(),P=Xm(),U=N.shouldForwardProp||P.shouldForwardProp,B=function(ct,Tt,Cl){for(var mr,qt=Ke(Ke({},Tt),{className:void 0,theme:Cl}),El=0;El<ct.length;El+=1){var Ns=Yr(mr=ct[El])?mr(qt):mr;for(var sn in Ns)qt[sn]=sn==="className"?Kn(qt[sn],Ns[sn]):sn==="style"?Ke(Ke({},qt[sn]),Ns[sn]):Ns[sn]}return Tt.className&&(qt.className=Kn(qt.className,Tt.className)),qt}(W,E,lw(E,se,ne)||or),oe=B.as||M,pe={};for(var et in B)B[et]===void 0||et[0]==="$"||et==="as"||et==="theme"||(et==="forwardedAs"?pe.as=B.forwardedAs:U&&!U(et,oe)||(pe[et]=B[et]));var Lt=function(ct,Tt,Cl){var mr=Xm(),qt=ct.generateAndInjectStyles(Tt?or:Cl,mr.styleSheet,mr.stylis);return qt}(G,$,B),Un=Kn(re,de);return Lt&&(Un+=" "+Lt),B.className&&(Un+=" "+B.className),pe[ac(oe)&&!k0.has(oe)?"class":"className"]=Un,pe.ref=A,_.createElement(oe,pe)}(b,j,k,f)}x.displayName=d;var b=V.forwardRef(x);return b.attrs=v,b.componentStyle=g,b.displayName=d,b.shouldForwardProp=h,b.foldedComponentIds=a?Kn(s.foldedComponentIds,s.styledComponentId):"",b.styledComponentId=m,b.target=a?s.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=a?function(k){for(var N=[],E=1;E<arguments.length;E++)N[E-1]=arguments[E];for(var A=0,$=N;A<$.length;A++)$u(k,$[A],!0);return k}({},s.defaultProps,j):j}}),Object.defineProperty(b,"toString",{value:function(){return".".concat(b.styledComponentId)}}),i&&T0(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Zm(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var ef=function(e){return Object.assign(e,{isCss:!0})};function Ww(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Yr(e)||cs(e)){var r=e;return ef(Zn(Zm(S0,fi([r],t,!0))))}var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Zn(a):ef(Zn(Zm(a,t)))}function Ru(e,t,n){if(n===void 0&&(n=or),!t)throw ws(1,t);var r=function(a){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,n,Ww.apply(void 0,fi([a],s,!1)))};return r.attrs=function(a){return Ru(e,t,Ke(Ke({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return Ru(e,t,Ke(Ke({},n),a))},r}function I0(e){return Ru(qw,e)}var T=I0;k0.forEach(function(e){T[e]=I0(e)});function K({type:e,value:t,name:n,labelText:r,handleChange:a,placeholder:s,className:i,required:l,min:c,max:u,autoComplete:d,labelClass:p,id:m,index:v,inputId:h,spellcheck:y,autocorrect:w,ariaInvalid:g,inputmode:f,inpClass:x}){return o.jsxs("div",{className:i||"form-box",id:m||"form-box",children:[o.jsx("input",{type:e,className:`input inp${v||"-none"} ${x}`,autoComplete:d||"off",minLength:c,maxLength:u,value:t||"",inputMode:f,required:l,onChange:a,spellCheck:y,autoCorrect:w,"aria-invalid":g,name:n,placeholder:s}),o.jsx("label",{htmlFor:n,id:"label",className:p||"label",children:r||n})]})}function D0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=D0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function yn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=D0(e))&&(r&&(r+=" "),r+=t);return r}const za=e=>typeof e=="number"&&!isNaN(e),ir=e=>typeof e=="string",Ye=e=>typeof e=="function",po=e=>ir(e)||Ye(e)?e:null,ic=e=>_.isValidElement(e)||ir(e)||Ye(e)||za(e);function Vw(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}function Ji(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:a=!0,collapseDuration:s=300}=e;return function(i){let{children:l,position:c,preventExitTransition:u,done:d,nodeRef:p,isIn:m}=i;const v=r?`${t}--${c}`:t,h=r?`${n}--${c}`:n,y=_.useRef(0);return _.useLayoutEffect(()=>{const w=p.current,g=v.split(" "),f=x=>{x.target===p.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",f),w.removeEventListener("animationcancel",f),y.current===0&&x.type!=="animationcancel"&&w.classList.remove(...g))};w.classList.add(...g),w.addEventListener("animationend",f),w.addEventListener("animationcancel",f)},[]),_.useEffect(()=>{const w=p.current,g=()=>{w.removeEventListener("animationend",g),a?Vw(w,d,s):d()};m||(u?g():(y.current=1,w.className+=` ${h}`,w.addEventListener("animationend",g)))},[m]),V.createElement(V.Fragment,null,l)}}function tf(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ut={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Hs=e=>{let{theme:t,type:n,...r}=e;return V.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},lc={info:function(e){return V.createElement(Hs,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return V.createElement(Hs,{...e},V.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return V.createElement(Hs,{...e},V.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return V.createElement(Hs,{...e},V.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return V.createElement("div",{className:"Toastify__spinner"})}};function Hw(e){const[,t]=_.useReducer(v=>v+1,0),[n,r]=_.useState([]),a=_.useRef(null),s=_.useRef(new Map).current,i=v=>n.indexOf(v)!==-1,l=_.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:i,getToast:v=>s.get(v)}).current;function c(v){let{containerId:h}=v;const{limit:y}=l.props;!y||h&&l.containerId!==h||(l.count-=l.queue.length,l.queue=[])}function u(v){r(h=>v==null?[]:h.filter(y=>y!==v))}function d(){const{toastContent:v,toastProps:h,staleId:y}=l.queue.shift();m(v,h,y)}function p(v,h){let{delay:y,staleId:w,...g}=h;if(!ic(v)||function(G){return!a.current||l.props.enableMultiContainer&&G.containerId!==l.props.containerId||s.has(G.toastId)&&G.updateId==null}(g))return;const{toastId:f,updateId:x,data:b}=g,{props:j}=l,k=()=>u(f),N=x==null;N&&l.count++;const E={...j,style:j.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(g).filter(G=>{let[ne,re]=G;return re!=null})),toastId:f,updateId:x,data:b,closeToast:k,isIn:!1,className:po(g.className||j.toastClassName),bodyClassName:po(g.bodyClassName||j.bodyClassName),progressClassName:po(g.progressClassName||j.progressClassName),autoClose:!g.isLoading&&(A=g.autoClose,$=j.autoClose,A===!1||za(A)&&A>0?A:$),deleteToast(){const G=tf(s.get(f),"removed");s.delete(f),ut.emit(4,G);const ne=l.queue.length;if(l.count=f==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),ne>0){const re=f==null?l.props.limit:1;if(ne===1||re===1)l.displayedToast++,d();else{const de=re>ne?ne:re;l.displayedToast=de;for(let M=0;M<de;M++)d()}}else t()}};var A,$;E.iconOut=function(G){let{theme:ne,type:re,isLoading:de,icon:M}=G,se=null;const P={theme:ne,type:re};return M===!1||(Ye(M)?se=M(P):_.isValidElement(M)?se=_.cloneElement(M,P):ir(M)||za(M)?se=M:de?se=lc.spinner():(U=>U in lc)(re)&&(se=lc[re](P))),se}(E),Ye(g.onOpen)&&(E.onOpen=g.onOpen),Ye(g.onClose)&&(E.onClose=g.onClose),E.closeButton=j.closeButton,g.closeButton===!1||ic(g.closeButton)?E.closeButton=g.closeButton:g.closeButton===!0&&(E.closeButton=!ic(j.closeButton)||j.closeButton);let W=v;_.isValidElement(v)&&!ir(v.type)?W=_.cloneElement(v,{closeToast:k,toastProps:E,data:b}):Ye(v)&&(W=v({closeToast:k,toastProps:E,data:b})),j.limit&&j.limit>0&&l.count>j.limit&&N?l.queue.push({toastContent:W,toastProps:E,staleId:w}):za(y)?setTimeout(()=>{m(W,E,w)},y):m(W,E,w)}function m(v,h,y){const{toastId:w}=h;y&&s.delete(y);const g={content:v,props:h};s.set(w,g),r(f=>[...f,w].filter(x=>x!==y)),ut.emit(4,tf(g,g.props.updateId==null?"added":"updated"))}return _.useEffect(()=>(l.containerId=e.containerId,ut.cancelEmit(3).on(0,p).on(1,v=>a.current&&u(v)).on(5,c).emit(2,l),()=>{s.clear(),ut.emit(3,l)}),[]),_.useEffect(()=>{l.props=e,l.isToastActive=i,l.displayedToast=n.length}),{getToastToRender:function(v){const h=new Map,y=Array.from(s.values());return e.newestOnTop&&y.reverse(),y.forEach(w=>{const{position:g}=w.props;h.has(g)||h.set(g,[]),h.get(g).push(w)}),Array.from(h,w=>v(w[0],w[1]))},containerRef:a,isToastActive:i}}function nf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function rf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Qw(e){const[t,n]=_.useState(!1),[r,a]=_.useState(!1),s=_.useRef(null),i=_.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=_.useRef(e),{autoClose:c,pauseOnHover:u,closeToast:d,onClick:p,closeOnClick:m}=e;function v(b){if(e.draggable){b.nativeEvent.type==="touchstart"&&b.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",g),document.addEventListener("mouseup",f),document.addEventListener("touchmove",g),document.addEventListener("touchend",f);const j=s.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=j.getBoundingClientRect(),j.style.transition="",i.x=nf(b.nativeEvent),i.y=rf(b.nativeEvent),e.draggableDirection==="x"?(i.start=i.x,i.removalDistance=j.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=j.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(b){if(i.boundingRect){const{top:j,bottom:k,left:N,right:E}=i.boundingRect;b.nativeEvent.type!=="touchend"&&e.pauseOnHover&&i.x>=N&&i.x<=E&&i.y>=j&&i.y<=k?w():y()}}function y(){n(!0)}function w(){n(!1)}function g(b){const j=s.current;i.canDrag&&j&&(i.didMove=!0,t&&w(),i.x=nf(b),i.y=rf(b),i.delta=e.draggableDirection==="x"?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),j.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,j.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function f(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",f);const b=s.current;if(i.canDrag&&i.didMove&&b){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return a(!0),void e.closeToast();b.style.transition="transform 0.2s, opacity 0.2s",b.style.transform=`translate${e.draggableDirection}(0)`,b.style.opacity="1"}}_.useEffect(()=>{l.current=e}),_.useEffect(()=>(s.current&&s.current.addEventListener("d",y,{once:!0}),Ye(e.onOpen)&&e.onOpen(_.isValidElement(e.children)&&e.children.props),()=>{const b=l.current;Ye(b.onClose)&&b.onClose(_.isValidElement(b.children)&&b.children.props)}),[]),_.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",w))}),[e.pauseOnFocusLoss]);const x={onMouseDown:v,onTouchStart:v,onMouseUp:h,onTouchEnd:h};return c&&u&&(x.onMouseEnter=w,x.onMouseLeave=y),m&&(x.onClick=b=>{p&&p(b),i.canCloseOnClick&&d()}),{playToast:y,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:x}}function M0(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return V.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:a=>{a.stopPropagation(),t(a)},"aria-label":r},V.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},V.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Gw(e){let{delay:t,isRunning:n,closeToast:r,type:a="default",hide:s,className:i,style:l,controlledProgress:c,progress:u,rtl:d,isIn:p,theme:m}=e;const v=s||c&&u===0,h={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};c&&(h.transform=`scaleX(${u})`);const y=yn("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":d}),w=Ye(i)?i({rtl:d,type:a,defaultClassName:y}):yn(y,i);return V.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:w,style:h,[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{p&&r()}})}const Kw=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:a}=Qw(e),{closeButton:s,children:i,autoClose:l,onClick:c,type:u,hideProgressBar:d,closeToast:p,transition:m,position:v,className:h,style:y,bodyClassName:w,bodyStyle:g,progressClassName:f,progressStyle:x,updateId:b,role:j,progress:k,rtl:N,toastId:E,deleteToast:A,isIn:$,isLoading:W,iconOut:G,closeOnClick:ne,theme:re}=e,de=yn("Toastify__toast",`Toastify__toast-theme--${re}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":ne}),M=Ye(h)?h({rtl:N,position:v,type:u,defaultClassName:de}):yn(de,h),se=!!k||!l,P={closeToast:p,type:u,theme:re};let U=null;return s===!1||(U=Ye(s)?s(P):_.isValidElement(s)?_.cloneElement(s,P):M0(P)),V.createElement(m,{isIn:$,done:A,position:v,preventExitTransition:n,nodeRef:r},V.createElement("div",{id:E,onClick:c,className:M,...a,style:y,ref:r},V.createElement("div",{...$&&{role:j},className:Ye(w)?w({type:u}):yn("Toastify__toast-body",w),style:g},G!=null&&V.createElement("div",{className:yn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!W})},G),V.createElement("div",null,i)),U,V.createElement(Gw,{...b&&!se?{key:`pb-${b}`}:{},rtl:N,theme:re,delay:l,isRunning:t,isIn:$,closeToast:p,hide:d,type:u,style:x,className:f,controlledProgress:se,progress:k||0})))},Zi=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Yw=Ji(Zi("bounce",!0));Ji(Zi("slide",!0));Ji(Zi("zoom"));Ji(Zi("flip"));const zu=_.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:a}=Hw(e),{className:s,style:i,rtl:l,containerId:c}=e;function u(d){const p=yn("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":l});return Ye(s)?s({position:d,rtl:l,defaultClassName:p}):yn(p,po(s))}return _.useEffect(()=>{t&&(t.current=r.current)},[]),V.createElement("div",{ref:r,className:"Toastify",id:c},n((d,p)=>{const m=p.length?{...i}:{...i,pointerEvents:"none"};return V.createElement("div",{className:u(d),style:m,key:`container-${d}`},p.map((v,h)=>{let{content:y,props:w}=v;return V.createElement(Kw,{...w,isIn:a(w.toastId),style:{...w.style,"--nth":h+1,"--len":p.length},key:`toast-${w.key}`},y)}))}))});zu.displayName="ToastContainer",zu.defaultProps={position:"top-right",transition:Yw,autoClose:5e3,closeButton:M0,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let cc,Wn=new Map,ja=[],Xw=1;function U0(){return""+Xw++}function Jw(e){return e&&(ir(e.toastId)||za(e.toastId))?e.toastId:U0()}function Aa(e,t){return Wn.size>0?ut.emit(0,e,t):ja.push({content:e,options:t}),t.toastId}function gi(e,t){return{...t,type:t&&t.type||e,toastId:Jw(t)}}function Qs(e){return(t,n)=>Aa(t,gi(e,n))}function O(e,t){return Aa(e,gi("default",t))}O.loading=(e,t)=>Aa(e,gi("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),O.promise=function(e,t,n){let r,{pending:a,error:s,success:i}=t;a&&(r=ir(a)?O.loading(a,n):O.loading(a.render,{...n,...a}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,p,m)=>{if(p==null)return void O.dismiss(r);const v={type:d,...l,...n,data:m},h=ir(p)?{render:p}:p;return r?O.update(r,{...v,...h}):O(h.render,{...v,...h}),m},u=Ye(e)?e():e;return u.then(d=>c("success",i,d)).catch(d=>c("error",s,d)),u},O.success=Qs("success"),O.info=Qs("info"),O.error=Qs("error"),O.warning=Qs("warning"),O.warn=O.warning,O.dark=(e,t)=>Aa(e,gi("default",{theme:"dark",...t})),O.dismiss=e=>{Wn.size>0?ut.emit(1,e):ja=ja.filter(t=>e!=null&&t.options.toastId!==e)},O.clearWaitingQueue=function(e){return e===void 0&&(e={}),ut.emit(5,e)},O.isActive=e=>{let t=!1;return Wn.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},O.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,a){let{containerId:s}=a;const i=Wn.get(s||cc);return i&&i.getToast(r)}(e,t);if(n){const{props:r,content:a}=n,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:U0()};s.toastId!==e&&(s.staleId=e);const i=s.render||a;delete s.render,Aa(i,s)}},0)},O.done=e=>{O.update(e,{progress:1})},O.onChange=e=>(ut.on(4,e),()=>{ut.off(4,e)}),O.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},O.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ut.on(2,e=>{cc=e.containerId||e,Wn.set(cc,e),ja.forEach(t=>{ut.emit(0,t.content,t.options)}),ja=[]}).on(3,e=>{Wn.delete(e.containerId||e),Wn.size===0&&ut.off(0).off(1).off(5)});var B0={exports:{}},q0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=_;function Zw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var e_=typeof Object.is=="function"?Object.is:Zw,t_=Xr.useState,n_=Xr.useEffect,r_=Xr.useLayoutEffect,a_=Xr.useDebugValue;function s_(e,t){var n=t(),r=t_({inst:{value:n,getSnapshot:t}}),a=r[0].inst,s=r[1];return r_(function(){a.value=n,a.getSnapshot=t,uc(a)&&s({inst:a})},[e,n,t]),n_(function(){return uc(a)&&s({inst:a}),e(function(){uc(a)&&s({inst:a})})},[e]),a_(n),n}function uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!e_(e,n)}catch{return!0}}function o_(e,t){return t()}var i_=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?o_:s_;q0.useSyncExternalStore=Xr.useSyncExternalStore!==void 0?Xr.useSyncExternalStore:i_;B0.exports=q0;var l_=B0.exports,W0={exports:{}},V0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=_,c_=l_;function u_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d_=typeof Object.is=="function"?Object.is:u_,p_=c_.useSyncExternalStore,m_=el.useRef,f_=el.useEffect,h_=el.useMemo,g_=el.useDebugValue;V0.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var s=m_(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=h_(function(){function c(v){if(!u){if(u=!0,d=v,v=r(v),a!==void 0&&i.hasValue){var h=i.value;if(a(h,v))return p=h}return p=v}if(h=p,d_(d,v))return h;var y=r(v);return a!==void 0&&a(h,y)?h:(d=v,p=y)}var u=!1,d,p,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,a]);var l=p_(e,s[0],s[1]);return f_(function(){i.hasValue=!0,i.value=l},[l]),g_(l),l};W0.exports=V0;var v_=W0.exports;function y_(e){e()}let H0=y_;const x_=e=>H0=e,b_=()=>H0,af=Symbol.for(`react-redux-context-${_.version}`),sf=globalThis;function w_(){let e=sf[af];return e||(e=_.createContext(null),sf[af]=e),e}const Rn=new Proxy({},new Proxy({},{get(e,t){const n=w_();return(r,...a)=>Reflect[t](n,...a)}}));function tp(e=Rn){return function(){return _.useContext(e)}}const Q0=tp(),__=()=>{throw new Error("uSES not initialized!")};let G0=__;const j_=e=>{G0=e},S_=(e,t)=>e===t;function k_(e=Rn){const t=e===Rn?Q0:tp(e);return function(r,a={}){const{equalityFn:s=S_,stabilityCheck:i=void 0,noopCheck:l=void 0}=typeof a=="function"?{equalityFn:a}:a,{store:c,subscription:u,getServerState:d,stabilityCheck:p,noopCheck:m}=t();_.useRef(!0);const v=_.useCallback({[r.name](y){return r(y)}}[r.name],[r,p,i]),h=G0(u.addNestedSub,c.getState,d||c.getState,v,s);return _.useDebugValue(h),h}}const z=k_();var K0={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,np=Pe?Symbol.for("react.element"):60103,rp=Pe?Symbol.for("react.portal"):60106,tl=Pe?Symbol.for("react.fragment"):60107,nl=Pe?Symbol.for("react.strict_mode"):60108,rl=Pe?Symbol.for("react.profiler"):60114,al=Pe?Symbol.for("react.provider"):60109,sl=Pe?Symbol.for("react.context"):60110,ap=Pe?Symbol.for("react.async_mode"):60111,ol=Pe?Symbol.for("react.concurrent_mode"):60111,il=Pe?Symbol.for("react.forward_ref"):60112,ll=Pe?Symbol.for("react.suspense"):60113,N_=Pe?Symbol.for("react.suspense_list"):60120,cl=Pe?Symbol.for("react.memo"):60115,ul=Pe?Symbol.for("react.lazy"):60116,C_=Pe?Symbol.for("react.block"):60121,E_=Pe?Symbol.for("react.fundamental"):60117,L_=Pe?Symbol.for("react.responder"):60118,T_=Pe?Symbol.for("react.scope"):60119;function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case np:switch(e=e.type,e){case ap:case ol:case tl:case rl:case nl:case ll:return e;default:switch(e=e&&e.$$typeof,e){case sl:case il:case ul:case cl:case al:return e;default:return t}}case rp:return t}}}function Y0(e){return lt(e)===ol}te.AsyncMode=ap;te.ConcurrentMode=ol;te.ContextConsumer=sl;te.ContextProvider=al;te.Element=np;te.ForwardRef=il;te.Fragment=tl;te.Lazy=ul;te.Memo=cl;te.Portal=rp;te.Profiler=rl;te.StrictMode=nl;te.Suspense=ll;te.isAsyncMode=function(e){return Y0(e)||lt(e)===ap};te.isConcurrentMode=Y0;te.isContextConsumer=function(e){return lt(e)===sl};te.isContextProvider=function(e){return lt(e)===al};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===np};te.isForwardRef=function(e){return lt(e)===il};te.isFragment=function(e){return lt(e)===tl};te.isLazy=function(e){return lt(e)===ul};te.isMemo=function(e){return lt(e)===cl};te.isPortal=function(e){return lt(e)===rp};te.isProfiler=function(e){return lt(e)===rl};te.isStrictMode=function(e){return lt(e)===nl};te.isSuspense=function(e){return lt(e)===ll};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tl||e===ol||e===rl||e===nl||e===ll||e===N_||typeof e=="object"&&e!==null&&(e.$$typeof===ul||e.$$typeof===cl||e.$$typeof===al||e.$$typeof===sl||e.$$typeof===il||e.$$typeof===E_||e.$$typeof===L_||e.$$typeof===T_||e.$$typeof===C_)};te.typeOf=lt;K0.exports=te;var P_=K0.exports,X0=P_,$_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},O_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J0={};J0[X0.ForwardRef]=$_;J0[X0.Memo]=O_;var ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=Symbol.for("react.element"),op=Symbol.for("react.portal"),dl=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),fl=Symbol.for("react.provider"),hl=Symbol.for("react.context"),R_=Symbol.for("react.server_context"),gl=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),bl=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),Z0;Z0=Symbol.for("react.module.reference");function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case sp:switch(e=e.type,e){case dl:case ml:case pl:case vl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case R_:case hl:case gl:case bl:case xl:case fl:return e;default:return t}}case op:return t}}}ae.ContextConsumer=hl;ae.ContextProvider=fl;ae.Element=sp;ae.ForwardRef=gl;ae.Fragment=dl;ae.Lazy=bl;ae.Memo=xl;ae.Portal=op;ae.Profiler=ml;ae.StrictMode=pl;ae.Suspense=vl;ae.SuspenseList=yl;ae.isAsyncMode=function(){return!1};ae.isConcurrentMode=function(){return!1};ae.isContextConsumer=function(e){return xt(e)===hl};ae.isContextProvider=function(e){return xt(e)===fl};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===sp};ae.isForwardRef=function(e){return xt(e)===gl};ae.isFragment=function(e){return xt(e)===dl};ae.isLazy=function(e){return xt(e)===bl};ae.isMemo=function(e){return xt(e)===xl};ae.isPortal=function(e){return xt(e)===op};ae.isProfiler=function(e){return xt(e)===ml};ae.isStrictMode=function(e){return xt(e)===pl};ae.isSuspense=function(e){return xt(e)===vl};ae.isSuspenseList=function(e){return xt(e)===yl};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dl||e===ml||e===pl||e===vl||e===yl||e===z_||typeof e=="object"&&e!==null&&(e.$$typeof===bl||e.$$typeof===xl||e.$$typeof===fl||e.$$typeof===hl||e.$$typeof===gl||e.$$typeof===Z0||e.getModuleId!==void 0)};ae.typeOf=xt;function A_(){const e=b_();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],a=t;for(;a;)r.push(a),a=a.next;return r},subscribe(r){let a=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!a||t===null||(a=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const of={notify(){},get:()=>[]};function F_(e,t){let n,r=of;function a(p){return c(),r.subscribe(p)}function s(){r.notify()}function i(){d.onStateChange&&d.onStateChange()}function l(){return!!n}function c(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=A_())}function u(){n&&(n(),n=void 0,r.clear(),r=of)}const d={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:i,isSubscribed:l,trySubscribe:c,tryUnsubscribe:u,getListeners:()=>r};return d}const I_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",D_=I_?_.useLayoutEffect:_.useEffect;function M_({store:e,context:t,children:n,serverState:r,stabilityCheck:a="once",noopCheck:s="once"}){const i=_.useMemo(()=>{const u=F_(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:a,noopCheck:s}},[e,r,a,s]),l=_.useMemo(()=>e.getState(),[e]);D_(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,l]);const c=t||Rn;return V.createElement(c.Provider,{value:i},n)}function ev(e=Rn){const t=e===Rn?Q0:tp(e);return function(){const{store:r}=t();return r}}const U_=ev();function B_(e=Rn){const t=e===Rn?U_:ev(e);return function(){return t().dispatch}}const F=B_();j_(v_.useSyncExternalStoreWithSelector);x_(l0.unstable_batchedUpdates);function St(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(a){return"'"+a+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function zn(e){return!!e&&!!e[me]}function nn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var a=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return a===Object||typeof a=="function"&&Function.toString.call(a)===X_}(e)||Array.isArray(e)||!!e[ff]||!!(!((t=e.constructor)===null||t===void 0)&&t[ff])||ip(e)||lp(e))}function lr(e,t,n){n===void 0&&(n=!1),oa(e)===0?(n?Object.keys:Ar)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,a){return t(a,r,e)})}function oa(e){var t=e[me];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ip(e)?2:lp(e)?3:0}function zr(e,t){return oa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function q_(e,t){return oa(e)===2?e.get(t):e[t]}function tv(e,t,n){var r=oa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function nv(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ip(e){return K_&&e instanceof Map}function lp(e){return Y_&&e instanceof Set}function Vn(e){return e.o||e.t}function cp(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=av(e);delete t[me];for(var n=Ar(t),r=0;r<n.length;r++){var a=n[r],s=t[a];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[a]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),t)}function up(e,t){return t===void 0&&(t=!1),dp(e)||zn(e)||!nn(e)||(oa(e)>1&&(e.set=e.add=e.clear=e.delete=W_),Object.freeze(e),t&&lr(e,function(n,r){return up(r,!0)},!0)),e}function W_(){St(2)}function dp(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function It(e){var t=Du[e];return t||St(18,e),t}function V_(e,t){Du[e]||(Du[e]=t)}function Au(){return us}function dc(e,t){t&&(It("Patches"),e.u=[],e.s=[],e.v=t)}function vi(e){Fu(e),e.p.forEach(H_),e.p=null}function Fu(e){e===us&&(us=e.l)}function lf(e){return us={p:[],l:us,h:e,m:!0,_:0}}function H_(e){var t=e[me];t.i===0||t.i===1?t.j():t.g=!0}function pc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||It("ES5").S(t,e,r),r?(n[me].P&&(vi(t),St(4)),nn(e)&&(e=yi(t,e),t.l||xi(t,e)),t.u&&It("Patches").M(n[me].t,e,t.u,t.s)):e=yi(t,n,[]),vi(t),t.u&&t.v(t.u,t.s),e!==rv?e:void 0}function yi(e,t,n){if(dp(t))return t;var r=t[me];if(!r)return lr(t,function(l,c){return cf(e,r,t,l,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return xi(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var a=r.i===4||r.i===5?r.o=cp(r.k):r.o,s=a,i=!1;r.i===3&&(s=new Set(a),a.clear(),i=!0),lr(s,function(l,c){return cf(e,r,a,l,c,n,i)}),xi(e,a,!1),n&&e.u&&It("Patches").N(r,n,e.u,e.s)}return r.o}function cf(e,t,n,r,a,s,i){if(zn(a)){var l=yi(e,a,s&&t&&t.i!==3&&!zr(t.R,r)?s.concat(r):void 0);if(tv(n,r,l),!zn(l))return;e.m=!1}else i&&n.add(a);if(nn(a)&&!dp(a)){if(!e.h.D&&e._<1)return;yi(e,a),t&&t.A.l||xi(e,a)}}function xi(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&up(t,n)}function mc(e,t){var n=e[me];return(n?Vn(n):e)[t]}function uf(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function fn(e){e.P||(e.P=!0,e.l&&fn(e.l))}function fc(e){e.o||(e.o=cp(e.t))}function Iu(e,t,n){var r=ip(t)?It("MapSet").F(t,n):lp(t)?It("MapSet").T(t,n):e.O?function(a,s){var i=Array.isArray(a),l={i:i?1:0,A:s?s.A:Au(),P:!1,I:!1,R:{},l:s,t:a,k:null,o:null,j:null,C:!1},c=l,u=ds;i&&(c=[l],u=Sa);var d=Proxy.revocable(c,u),p=d.revoke,m=d.proxy;return l.k=m,l.j=p,m}(t,n):It("ES5").J(t,n);return(n?n.A:Au()).p.push(r),r}function Q_(e){return zn(e)||St(22,e),function t(n){if(!nn(n))return n;var r,a=n[me],s=oa(n);if(a){if(!a.P&&(a.i<4||!It("ES5").K(a)))return a.t;a.I=!0,r=df(n,s),a.I=!1}else r=df(n,s);return lr(r,function(i,l){a&&q_(a.t,i)===l||tv(r,i,t(l))}),s===3?new Set(r):r}(e)}function df(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return cp(e)}function G_(){function e(s,i){var l=a[s];return l?l.enumerable=i:a[s]=l={configurable:!0,enumerable:i,get:function(){var c=this[me];return ds.get(c,s)},set:function(c){var u=this[me];ds.set(u,s,c)}},l}function t(s){for(var i=s.length-1;i>=0;i--){var l=s[i][me];if(!l.P)switch(l.i){case 5:r(l)&&fn(l);break;case 4:n(l)&&fn(l)}}}function n(s){for(var i=s.t,l=s.k,c=Ar(l),u=c.length-1;u>=0;u--){var d=c[u];if(d!==me){var p=i[d];if(p===void 0&&!zr(i,d))return!0;var m=l[d],v=m&&m[me];if(v?v.t!==p:!nv(m,p))return!0}}var h=!!i[me];return c.length!==Ar(i).length+(h?0:1)}function r(s){var i=s.k;if(i.length!==s.t.length)return!0;var l=Object.getOwnPropertyDescriptor(i,i.length-1);if(l&&!l.get)return!0;for(var c=0;c<i.length;c++)if(!i.hasOwnProperty(c))return!0;return!1}var a={};V_("ES5",{J:function(s,i){var l=Array.isArray(s),c=function(d,p){if(d){for(var m=Array(p.length),v=0;v<p.length;v++)Object.defineProperty(m,""+v,e(v,!0));return m}var h=av(p);delete h[me];for(var y=Ar(h),w=0;w<y.length;w++){var g=y[w];h[g]=e(g,d||!!h[g].enumerable)}return Object.create(Object.getPrototypeOf(p),h)}(l,s),u={i:l?5:4,A:i?i.A:Au(),P:!1,I:!1,R:{},l:i,t:s,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,me,{value:u,writable:!0}),c},S:function(s,i,l){l?zn(i)&&i[me].A===s&&t(s.p):(s.u&&function c(u){if(u&&typeof u=="object"){var d=u[me];if(d){var p=d.t,m=d.k,v=d.R,h=d.i;if(h===4)lr(m,function(x){x!==me&&(p[x]!==void 0||zr(p,x)?v[x]||c(m[x]):(v[x]=!0,fn(d)))}),lr(p,function(x){m[x]!==void 0||zr(m,x)||(v[x]=!1,fn(d))});else if(h===5){if(r(d)&&(fn(d),v.length=!0),m.length<p.length)for(var y=m.length;y<p.length;y++)v[y]=!1;else for(var w=p.length;w<m.length;w++)v[w]=!0;for(var g=Math.min(m.length,p.length),f=0;f<g;f++)m.hasOwnProperty(f)||(v[f]=!0),v[f]===void 0&&c(m[f])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var pf,us,pp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",K_=typeof Map<"u",Y_=typeof Set<"u",mf=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",rv=pp?Symbol.for("immer-nothing"):((pf={})["immer-nothing"]=!0,pf),ff=pp?Symbol.for("immer-draftable"):"__$immer_draftable",me=pp?Symbol.for("immer-state"):"__$immer_state",X_=""+Object.prototype.constructor,Ar=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,av=Object.getOwnPropertyDescriptors||function(e){var t={};return Ar(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Du={},ds={get:function(e,t){if(t===me)return e;var n=Vn(e);if(!zr(n,t))return function(a,s,i){var l,c=uf(s,i);return c?"value"in c?c.value:(l=c.get)===null||l===void 0?void 0:l.call(a.k):void 0}(e,n,t);var r=n[t];return e.I||!nn(r)?r:r===mc(e.t,t)?(fc(e),e.o[t]=Iu(e.A.h,r,e)):r},has:function(e,t){return t in Vn(e)},ownKeys:function(e){return Reflect.ownKeys(Vn(e))},set:function(e,t,n){var r=uf(Vn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var a=mc(Vn(e),t),s=a==null?void 0:a[me];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(nv(n,a)&&(n!==void 0||zr(e.t,t)))return!0;fc(e),fn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return mc(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,fc(e),fn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){St(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){St(12)}},Sa={};lr(ds,function(e,t){Sa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)},Sa.set=function(e,t,n){return ds.set.call(this,e[0],t,n,e[0])};var J_=function(){function e(n){var r=this;this.O=mf,this.D=!0,this.produce=function(a,s,i){if(typeof a=="function"&&typeof s!="function"){var l=s;s=a;var c=r;return function(y){var w=this;y===void 0&&(y=l);for(var g=arguments.length,f=Array(g>1?g-1:0),x=1;x<g;x++)f[x-1]=arguments[x];return c.produce(y,function(b){var j;return(j=s).call.apply(j,[w,b].concat(f))})}}var u;if(typeof s!="function"&&St(6),i!==void 0&&typeof i!="function"&&St(7),nn(a)){var d=lf(r),p=Iu(r,a,void 0),m=!0;try{u=s(p),m=!1}finally{m?vi(d):Fu(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return dc(d,i),pc(y,d)},function(y){throw vi(d),y}):(dc(d,i),pc(u,d))}if(!a||typeof a!="object"){if((u=s(a))===void 0&&(u=a),u===rv&&(u=void 0),r.D&&up(u,!0),i){var v=[],h=[];It("Patches").M(a,u,v,h),i(v,h)}return u}St(21,a)},this.produceWithPatches=function(a,s){if(typeof a=="function")return function(u){for(var d=arguments.length,p=Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];return r.produceWithPatches(u,function(v){return a.apply(void 0,[v].concat(p))})};var i,l,c=r.produce(a,s,function(u,d){i=u,l=d});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,i,l]}):[c,i,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){nn(n)||St(8),zn(n)&&(n=Q_(n));var r=lf(this),a=Iu(this,n,void 0);return a[me].C=!0,Fu(r),a},t.finishDraft=function(n,r){var a=n&&n[me],s=a.A;return dc(s,r),pc(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!mf&&St(20),this.O=n},t.applyPatches=function(n,r){var a;for(a=r.length-1;a>=0;a--){var s=r[a];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}a>-1&&(r=r.slice(a+1));var i=It("Patches").$;return zn(n)?i(n,r):this.produce(n,function(l){return i(l,r)})},e}(),st=new J_,sv=st.produce;st.produceWithPatches.bind(st);st.setAutoFreeze.bind(st);st.setUseProxies.bind(st);st.applyPatches.bind(st);st.createDraft.bind(st);st.finishDraft.bind(st);function ps(e){"@babel/helpers - typeof";return ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ps(e)}function Z_(e,t){if(ps(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ps(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ej(e){var t=Z_(e,"string");return ps(t)==="symbol"?t:String(t)}function tj(e,t,n){return t=ej(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hf(Object(n),!0).forEach(function(r){tj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var vf=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),hc=function(){return Math.random().toString(36).substring(7).split("").join(".")},bi={INIT:"@@redux/INIT"+hc(),REPLACE:"@@redux/REPLACE"+hc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+hc()}};function nj(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ov(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Fe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Fe(1));return n(ov)(e,t)}if(typeof e!="function")throw new Error(Fe(2));var a=e,s=t,i=[],l=i,c=!1;function u(){l===i&&(l=i.slice())}function d(){if(c)throw new Error(Fe(3));return s}function p(y){if(typeof y!="function")throw new Error(Fe(4));if(c)throw new Error(Fe(5));var w=!0;return u(),l.push(y),function(){if(w){if(c)throw new Error(Fe(6));w=!1,u();var f=l.indexOf(y);l.splice(f,1),i=null}}}function m(y){if(!nj(y))throw new Error(Fe(7));if(typeof y.type>"u")throw new Error(Fe(8));if(c)throw new Error(Fe(9));try{c=!0,s=a(s,y)}finally{c=!1}for(var w=i=l,g=0;g<w.length;g++){var f=w[g];f()}return y}function v(y){if(typeof y!="function")throw new Error(Fe(10));a=y,m({type:bi.REPLACE})}function h(){var y,w=p;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(Fe(11));function x(){f.next&&f.next(d())}x();var b=w(x);return{unsubscribe:b}}},y[vf]=function(){return this},y}return m({type:bi.INIT}),r={dispatch:m,subscribe:p,getState:d,replaceReducer:v},r[vf]=h,r}function rj(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:bi.INIT});if(typeof r>"u")throw new Error(Fe(12));if(typeof n(void 0,{type:bi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Fe(13))})}function aj(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var a=t[r];typeof e[a]=="function"&&(n[a]=e[a])}var s=Object.keys(n),i;try{rj(n)}catch(l){i=l}return function(c,u){if(c===void 0&&(c={}),i)throw i;for(var d=!1,p={},m=0;m<s.length;m++){var v=s[m],h=n[v],y=c[v],w=h(y,u);if(typeof w>"u")throw u&&u.type,new Error(Fe(14));p[v]=w,d=d||w!==y}return d=d||s.length!==Object.keys(c).length,d?p:c}}function wi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,a){return function(){return r(a.apply(void 0,arguments))}})}function sj(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var a=r.apply(void 0,arguments),s=function(){throw new Error(Fe(15))},i={getState:a.getState,dispatch:function(){return s.apply(void 0,arguments)}},l=t.map(function(c){return c(i)});return s=wi.apply(void 0,l)(a.dispatch),gf(gf({},a),{},{dispatch:s})}}}function iv(e){var t=function(r){var a=r.dispatch,s=r.getState;return function(i){return function(l){return typeof l=="function"?l(a,s,e):i(l)}}};return t}var lv=iv();lv.withExtraArgument=iv;const yf=lv;var cv=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),oj=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,a,s,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,a&&(s=u[0]&2?a.return:u[0]?a.throw||((s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,u[1])).done)return s;switch(a=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,a=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],a=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Jr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},ij=Object.defineProperty,lj=Object.defineProperties,cj=Object.getOwnPropertyDescriptors,xf=Object.getOwnPropertySymbols,uj=Object.prototype.hasOwnProperty,dj=Object.prototype.propertyIsEnumerable,bf=function(e,t,n){return t in e?ij(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},En=function(e,t){for(var n in t||(t={}))uj.call(t,n)&&bf(e,n,t[n]);if(xf)for(var r=0,a=xf(t);r<a.length;r++){var n=a[r];dj.call(t,n)&&bf(e,n,t[n])}return e},gc=function(e,t){return lj(e,cj(t))},pj=function(e,t,n){return new Promise(function(r,a){var s=function(c){try{l(n.next(c))}catch(u){a(u)}},i=function(c){try{l(n.throw(c))}catch(u){a(u)}},l=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(s,i)};l((n=n.apply(e,t)).next())})},mj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wi:wi.apply(null,arguments)};function fj(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var hj=function(e){cv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var a=e.apply(this,n)||this;return Object.setPrototypeOf(a,t.prototype),a}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Jr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Jr([void 0],n.concat(this))))},t}(Array),gj=function(e){cv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var a=e.apply(this,n)||this;return Object.setPrototypeOf(a,t.prototype),a}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Jr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Jr([void 0],n.concat(this))))},t}(Array);function Mu(e){return nn(e)?sv(e,function(){}):e}function vj(e){return typeof e=="boolean"}function yj(){return function(t){return xj(t)}}function xj(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new hj;return n&&(vj(n)?r.push(yf):r.push(yf.withExtraArgument(n.extraArgument))),r}var bj=!0;function wj(e){var t=yj(),n=e||{},r=n.reducer,a=r===void 0?void 0:r,s=n.middleware,i=s===void 0?t():s,l=n.devTools,c=l===void 0?!0:l,u=n.preloadedState,d=u===void 0?void 0:u,p=n.enhancers,m=p===void 0?void 0:p,v;if(typeof a=="function")v=a;else if(fj(a))v=aj(a);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=i;typeof h=="function"&&(h=h(t));var y=sj.apply(void 0,h),w=wi;c&&(w=mj(En({trace:!bj},typeof c=="object"&&c)));var g=new gj(y),f=g;Array.isArray(m)?f=Jr([y],m):typeof m=="function"&&(f=m(g));var x=w.apply(void 0,f);return ov(v,d,x)}function Ln(e,t){function n(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return En(En({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function uv(e){var t={},n=[],r,a={addCase:function(s,i){var l=typeof s=="string"?s:s.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=i,a},addMatcher:function(s,i){return n.push({matcher:s,reducer:i}),a},addDefaultCase:function(s){return r=s,a}};return e(a),[t,n,r]}function _j(e){return typeof e=="function"}function jj(e,t,n,r){n===void 0&&(n=[]);var a=typeof t=="function"?uv(t):[t,n,r],s=a[0],i=a[1],l=a[2],c;if(_j(e))c=function(){return Mu(e())};else{var u=Mu(e);c=function(){return u}}function d(p,m){p===void 0&&(p=c());var v=Jr([s[m.type]],i.filter(function(h){var y=h.matcher;return y(m)}).map(function(h){var y=h.reducer;return y}));return v.filter(function(h){return!!h}).length===0&&(v=[l]),v.reduce(function(h,y){if(y)if(zn(h)){var w=h,g=y(w,m);return g===void 0?h:g}else{if(nn(h))return sv(h,function(f){return y(f,m)});var g=y(h,m);if(g===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return h},p)}return d.getInitialState=c,d}function Sj(e,t){return e+"/"+t}function Ut(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Mu(e.initialState),r=e.reducers||{},a=Object.keys(r),s={},i={},l={};a.forEach(function(d){var p=r[d],m=Sj(t,d),v,h;"reducer"in p?(v=p.reducer,h=p.prepare):v=p,s[d]=v,i[m]=v,l[d]=h?Ln(m,h):Ln(m)});function c(){var d=typeof e.extraReducers=="function"?uv(e.extraReducers):[e.extraReducers],p=d[0],m=p===void 0?{}:p,v=d[1],h=v===void 0?[]:v,y=d[2],w=y===void 0?void 0:y,g=En(En({},m),i);return jj(n,function(f){for(var x in g)f.addCase(x,g[x]);for(var b=0,j=h;b<j.length;b++){var k=j[b];f.addMatcher(k.matcher,k.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:t,reducer:function(d,p){return u||(u=c()),u(d,p)},actions:l,caseReducers:s,getInitialState:function(){return u||(u=c()),u.getInitialState()}}}var kj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Nj=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=kj[Math.random()*64|0];return t},Cj=["name","message","stack","code"],vc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),wf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ej=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Cj;n<r.length;n++){var a=r[n];typeof e[a]=="string"&&(t[a]=e[a])}return t}return{message:String(e)}},q=function(){function e(t,n,r){var a=Ln(t+"/fulfilled",function(u,d,p,m){return{payload:u,meta:gc(En({},m||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),s=Ln(t+"/pending",function(u,d,p){return{payload:void 0,meta:gc(En({},p||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),i=Ln(t+"/rejected",function(u,d,p,m,v){return{payload:m,error:(r&&r.serializeError||Ej)(u||"Rejected"),meta:gc(En({},v||{}),{arg:p,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(d,p,m){var v=r!=null&&r.idGenerator?r.idGenerator(u):Nj(),h=new l,y;function w(f){y=f,h.abort()}var g=function(){return pj(this,null,function(){var f,x,b,j,k,N,E;return oj(this,function(A){switch(A.label){case 0:return A.trys.push([0,4,,5]),j=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:p,extra:m}),Tj(j)?[4,j]:[3,2];case 1:j=A.sent(),A.label=2;case 2:if(j===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return k=new Promise(function($,W){return h.signal.addEventListener("abort",function(){return W({name:"AbortError",message:y||"Aborted"})})}),d(s(v,u,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:v,arg:u},{getState:p,extra:m}))),[4,Promise.race([k,Promise.resolve(n(u,{dispatch:d,getState:p,extra:m,requestId:v,signal:h.signal,abort:w,rejectWithValue:function($,W){return new vc($,W)},fulfillWithValue:function($,W){return new wf($,W)}})).then(function($){if($ instanceof vc)throw $;return $ instanceof wf?a($.payload,v,u,$.meta):a($,v,u)})])];case 3:return b=A.sent(),[3,5];case 4:return N=A.sent(),b=N instanceof vc?i(null,v,u,N.payload,N.meta):i(N,v,u),[3,5];case 5:return E=r&&!r.dispatchConditionRejection&&i.match(b)&&b.meta.condition,E||d(b),[2,b]}})})}();return Object.assign(g,{abort:w,requestId:v,arg:u,unwrap:function(){return g.then(Lj)}})}}return Object.assign(c,{pending:s,rejected:i,fulfilled:a,typePrefix:t})}return e.withTypes=function(){return e},e}();function Lj(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Tj(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var mp="listenerMiddleware";Ln(mp+"/add");Ln(mp+"/removeAll");Ln(mp+"/remove");var _f;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);G_();const dv=e=>{localStorage.setItem("user",JSON.stringify(e))},Pj=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},pv=()=>{localStorage.removeItem("user")},$j=()=>{const e=localStorage.getItem("frete");return e?JSON.parse(e):null},Oj=()=>{localStorage.removeItem("frete")},Rj=()=>{localStorage.removeItem("freteClientShowCase")},mv=()=>{localStorage.removeItem("historic")};setTimeout(()=>{Oj(),mv(),Rj()},1e3*60*10);function fv(e,t){return function(){return e.apply(t,arguments)}}const{toString:zj}=Object.prototype,{getPrototypeOf:fp}=Object,wl=(e=>t=>{const n=zj.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=e=>(e=e.toLowerCase(),t=>wl(t)===e),_l=e=>t=>typeof t===e,{isArray:ia}=Array,ms=_l("undefined");function Aj(e){return e!==null&&!ms(e)&&e.constructor!==null&&!ms(e.constructor)&&ht(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const hv=Bt("ArrayBuffer");function Fj(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&hv(e.buffer),t}const Ij=_l("string"),ht=_l("function"),gv=_l("number"),jl=e=>e!==null&&typeof e=="object",Dj=e=>e===!0||e===!1,mo=e=>{if(wl(e)!=="object")return!1;const t=fp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Mj=Bt("Date"),Uj=Bt("File"),Bj=Bt("Blob"),qj=Bt("FileList"),Wj=e=>jl(e)&&ht(e.pipe),Vj=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ht(e.append)&&((t=wl(e))==="formdata"||t==="object"&&ht(e.toString)&&e.toString()==="[object FormData]"))},Hj=Bt("URLSearchParams"),Qj=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _s(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),ia(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function vv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const yv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xv=e=>!ms(e)&&e!==yv;function Uu(){const{caseless:e}=xv(this)&&this||{},t={},n=(r,a)=>{const s=e&&vv(t,a)||a;mo(t[s])&&mo(r)?t[s]=Uu(t[s],r):mo(r)?t[s]=Uu({},r):ia(r)?t[s]=r.slice():t[s]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&_s(arguments[r],n);return t}const Gj=(e,t,n,{allOwnKeys:r}={})=>(_s(t,(a,s)=>{n&&ht(a)?e[s]=fv(a,n):e[s]=a},{allOwnKeys:r}),e),Kj=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Yj=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Xj=(e,t,n,r)=>{let a,s,i;const l={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),s=a.length;s-- >0;)i=a[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&fp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Jj=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zj=e=>{if(!e)return null;if(ia(e))return e;let t=e.length;if(!gv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},eS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fp(Uint8Array)),tS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const s=a.value;t.call(e,s[0],s[1])}},nS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rS=Bt("HTMLFormElement"),aS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),jf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sS=Bt("RegExp"),bv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_s(n,(a,s)=>{t(a,s,e)!==!1&&(r[s]=a)}),Object.defineProperties(e,r)},oS=e=>{bv(e,(t,n)=>{if(ht(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ht(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},iS=(e,t)=>{const n={},r=a=>{a.forEach(s=>{n[s]=!0})};return ia(e)?r(e):r(String(e).split(t)),n},lS=()=>{},cS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),yc="abcdefghijklmnopqrstuvwxyz",Sf="0123456789",wv={DIGIT:Sf,ALPHA:yc,ALPHA_DIGIT:yc+yc.toUpperCase()+Sf},uS=(e=16,t=wv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function dS(e){return!!(e&&ht(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pS=e=>{const t=new Array(10),n=(r,a)=>{if(jl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const s=ia(r)?[]:{};return _s(r,(i,l)=>{const c=n(i,a+1);!ms(c)&&(s[l]=c)}),t[a]=void 0,s}}return r};return n(e,0)},mS=Bt("AsyncFunction"),fS=e=>e&&(jl(e)||ht(e))&&ht(e.then)&&ht(e.catch),C={isArray:ia,isArrayBuffer:hv,isBuffer:Aj,isFormData:Vj,isArrayBufferView:Fj,isString:Ij,isNumber:gv,isBoolean:Dj,isObject:jl,isPlainObject:mo,isUndefined:ms,isDate:Mj,isFile:Uj,isBlob:Bj,isRegExp:sS,isFunction:ht,isStream:Wj,isURLSearchParams:Hj,isTypedArray:eS,isFileList:qj,forEach:_s,merge:Uu,extend:Gj,trim:Qj,stripBOM:Kj,inherits:Yj,toFlatObject:Xj,kindOf:wl,kindOfTest:Bt,endsWith:Jj,toArray:Zj,forEachEntry:tS,matchAll:nS,isHTMLForm:rS,hasOwnProperty:jf,hasOwnProp:jf,reduceDescriptors:bv,freezeMethods:oS,toObjectSet:iS,toCamelCase:aS,noop:lS,toFiniteNumber:cS,findKey:vv,global:yv,isContextDefined:xv,ALPHABET:wv,generateString:uS,isSpecCompliantForm:dS,toJSONObject:pS,isAsyncFn:mS,isThenable:fS};function X(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}C.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _v=X.prototype,jv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{jv[e]={value:e}});Object.defineProperties(X,jv);Object.defineProperty(_v,"isAxiosError",{value:!0});X.from=(e,t,n,r,a,s)=>{const i=Object.create(_v);return C.toFlatObject(e,i,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),X.call(i,e.message,t,n,r,a),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const hS=null;function Bu(e){return C.isPlainObject(e)||C.isArray(e)}function Sv(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function kf(e,t,n){return e?e.concat(t).map(function(a,s){return a=Sv(a),!n&&s?"["+a+"]":a}).join(n?".":""):t}function gS(e){return C.isArray(e)&&!e.some(Bu)}const vS=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Sl(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!C.isUndefined(w[y])});const r=n.metaTokens,a=n.visitor||d,s=n.dots,i=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(a))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(C.isDate(h))return h.toISOString();if(!c&&C.isBlob(h))throw new X("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(h)||C.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function d(h,y,w){let g=h;if(h&&!w&&typeof h=="object"){if(C.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(C.isArray(h)&&gS(h)||(C.isFileList(h)||C.endsWith(y,"[]"))&&(g=C.toArray(h)))return y=Sv(y),g.forEach(function(x,b){!(C.isUndefined(x)||x===null)&&t.append(i===!0?kf([y],b,s):i===null?y:y+"[]",u(x))}),!1}return Bu(h)?!0:(t.append(kf(w,y,s),u(h)),!1)}const p=[],m=Object.assign(vS,{defaultVisitor:d,convertValue:u,isVisitable:Bu});function v(h,y){if(!C.isUndefined(h)){if(p.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(h),C.forEach(h,function(g,f){(!(C.isUndefined(g)||g===null)&&a.call(t,g,C.isString(f)?f.trim():f,y,m))===!0&&v(g,y?y.concat(f):[f])}),p.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Nf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function hp(e,t){this._pairs=[],e&&Sl(e,this,t)}const kv=hp.prototype;kv.append=function(t,n){this._pairs.push([t,n])};kv.toString=function(t){const n=t?function(r){return t.call(this,r,Nf)}:Nf;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function yS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Nv(e,t,n){if(!t)return e;const r=n&&n.encode||yS,a=n&&n.serialize;let s;if(a?s=a(t,n):s=C.isURLSearchParams(t)?t.toString():new hp(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class xS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Cf=xS,Cv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bS=typeof URLSearchParams<"u"?URLSearchParams:hp,wS=typeof FormData<"u"?FormData:null,_S=typeof Blob<"u"?Blob:null,jS=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),SS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zt={isBrowser:!0,classes:{URLSearchParams:bS,FormData:wS,Blob:_S},isStandardBrowserEnv:jS,isStandardBrowserWebWorkerEnv:SS,protocols:["http","https","file","blob","url","data"]};function kS(e,t){return Sl(e,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,s){return zt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function NS(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function CS(e){const t={},n=Object.keys(e);let r;const a=n.length;let s;for(r=0;r<a;r++)s=n[r],t[s]=e[s];return t}function Ev(e){function t(n,r,a,s){let i=n[s++];const l=Number.isFinite(+i),c=s>=n.length;return i=!i&&C.isArray(a)?a.length:i,c?(C.hasOwnProp(a,i)?a[i]=[a[i],r]:a[i]=r,!l):((!a[i]||!C.isObject(a[i]))&&(a[i]=[]),t(n,r,a[i],s)&&C.isArray(a[i])&&(a[i]=CS(a[i])),!l)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,a)=>{t(NS(r),a,n,0)}),n}return null}const ES={"Content-Type":void 0};function LS(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const kl={transitional:Cv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,s=C.isObject(t);if(s&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return a&&a?JSON.stringify(Ev(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return kS(t,this.formSerializer).toString();if((l=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Sl(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||a?(n.setContentType("application/json",!1),LS(t)):t}],transformResponse:[function(t){const n=this.transitional||kl.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||a)){const i=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?X.from(l,X.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],function(t){kl.headers[t]={}});C.forEach(["post","put","patch"],function(t){kl.headers[t]=C.merge(ES)});const gp=kl,TS=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PS=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(i){a=i.indexOf(":"),n=i.substring(0,a).trim().toLowerCase(),r=i.substring(a+1).trim(),!(!n||t[n]&&TS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ef=Symbol("internals");function va(e){return e&&String(e).trim().toLowerCase()}function fo(e){return e===!1||e==null?e:C.isArray(e)?e.map(fo):String(e)}function $S(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const OS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xc(e,t,n,r,a){if(C.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function RS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function zS(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,s,i){return this[r].call(this,t,a,s,i)},configurable:!0})})}class Nl{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function s(l,c,u){const d=va(c);if(!d)throw new Error("header name must be a non-empty string");const p=C.findKey(a,d);(!p||a[p]===void 0||u===!0||u===void 0&&a[p]!==!1)&&(a[p||c]=fo(l))}const i=(l,c)=>C.forEach(l,(u,d)=>s(u,d,c));return C.isPlainObject(t)||t instanceof this.constructor?i(t,n):C.isString(t)&&(t=t.trim())&&!OS(t)?i(PS(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=va(t),t){const r=C.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return $S(a);if(C.isFunction(n))return n.call(this,a,r);if(C.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=va(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||xc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function s(i){if(i=va(i),i){const l=C.findKey(r,i);l&&(!n||xc(r,r[l],l,n))&&(delete r[l],a=!0)}}return C.isArray(t)?t.forEach(s):s(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const s=n[r];(!t||xc(this,this[s],s,t,!0))&&(delete this[s],a=!0)}return a}normalize(t){const n=this,r={};return C.forEach(this,(a,s)=>{const i=C.findKey(r,s);if(i){n[i]=fo(a),delete n[s];return}const l=t?RS(s):String(s).trim();l!==s&&delete n[s],n[l]=fo(a),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[Ef]=this[Ef]={accessors:{}}).accessors,a=this.prototype;function s(i){const l=va(i);r[l]||(zS(a,i),r[l]=!0)}return C.isArray(t)?t.forEach(s):s(t),this}}Nl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.freezeMethods(Nl.prototype);C.freezeMethods(Nl);const Xt=Nl;function bc(e,t){const n=this||gp,r=t||n,a=Xt.from(r.headers);let s=r.data;return C.forEach(e,function(l){s=l.call(n,s,a.normalize(),t?t.status:void 0)}),a.normalize(),s}function Lv(e){return!!(e&&e.__CANCEL__)}function js(e,t,n){X.call(this,e??"canceled",X.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(js,X,{__CANCEL__:!0});function AS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const FS=zt.isStandardBrowserEnv?function(){return{write:function(n,r,a,s,i,l){const c=[];c.push(n+"="+encodeURIComponent(r)),C.isNumber(a)&&c.push("expires="+new Date(a).toGMTString()),C.isString(s)&&c.push("path="+s),C.isString(i)&&c.push("domain="+i),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function IS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function DS(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Tv(e,t){return e&&!IS(t)?DS(e,t):t}const MS=zt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(i){const l=C.isString(i)?a(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function US(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function BS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,s=0,i;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[s];i||(i=u),n[a]=c,r[a]=u;let p=s,m=0;for(;p!==a;)m+=n[p++],p=p%e;if(a=(a+1)%e,a===s&&(s=(s+1)%e),u-i<t)return;const v=d&&u-d;return v?Math.round(m*1e3/v):void 0}}function Lf(e,t){let n=0;const r=BS(50,250);return a=>{const s=a.loaded,i=a.lengthComputable?a.total:void 0,l=s-n,c=r(l),u=s<=i;n=s;const d={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:c||void 0,estimated:c&&i&&u?(i-s)/c:void 0,event:a};d[t?"download":"upload"]=!0,e(d)}}const qS=typeof XMLHttpRequest<"u",WS=qS&&function(e){return new Promise(function(n,r){let a=e.data;const s=Xt.from(e.headers).normalize(),i=e.responseType;let l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}C.isFormData(a)&&(zt.isStandardBrowserEnv||zt.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(v+":"+h))}const d=Tv(e.baseURL,e.url);u.open(e.method.toUpperCase(),Nv(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const v=Xt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};AS(function(g){n(g),c()},function(g){r(g),c()},y),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new X("Request aborted",X.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new X("Network Error",X.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Cv;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new X(h,y.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,u)),u=null},zt.isStandardBrowserEnv){const v=(e.withCredentials||MS(d))&&e.xsrfCookieName&&FS.read(e.xsrfCookieName);v&&s.set(e.xsrfHeaderName,v)}a===void 0&&s.setContentType(null),"setRequestHeader"in u&&C.forEach(s.toJSON(),function(h,y){u.setRequestHeader(y,h)}),C.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Lf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Lf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=v=>{u&&(r(!v||v.type?new js(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=US(d);if(m&&zt.protocols.indexOf(m)===-1){r(new X("Unsupported protocol "+m+":",X.ERR_BAD_REQUEST,e));return}u.send(a||null)})},ho={http:hS,xhr:WS};C.forEach(ho,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const VS={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let a=0;a<t&&(n=e[a],!(r=C.isString(n)?ho[n.toLowerCase()]:n));a++);if(!r)throw r===!1?new X(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(C.hasOwnProp(ho,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!C.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ho};function wc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new js(null,e)}function Tf(e){return wc(e),e.headers=Xt.from(e.headers),e.data=bc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),VS.getAdapter(e.adapter||gp.adapter)(e).then(function(r){return wc(e),r.data=bc.call(e,e.transformResponse,r),r.headers=Xt.from(r.headers),r},function(r){return Lv(r)||(wc(e),r&&r.response&&(r.response.data=bc.call(e,e.transformResponse,r.response),r.response.headers=Xt.from(r.response.headers))),Promise.reject(r)})}const Pf=e=>e instanceof Xt?e.toJSON():e;function Zr(e,t){t=t||{};const n={};function r(u,d,p){return C.isPlainObject(u)&&C.isPlainObject(d)?C.merge.call({caseless:p},u,d):C.isPlainObject(d)?C.merge({},d):C.isArray(d)?d.slice():d}function a(u,d,p){if(C.isUndefined(d)){if(!C.isUndefined(u))return r(void 0,u,p)}else return r(u,d,p)}function s(u,d){if(!C.isUndefined(d))return r(void 0,d)}function i(u,d){if(C.isUndefined(d)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,p){if(p in t)return r(u,d);if(p in e)return r(void 0,u)}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(u,d)=>a(Pf(u),Pf(d),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=c[d]||a,m=p(e[d],t[d],d);C.isUndefined(m)&&p!==l||(n[d]=m)}),n}const Pv="1.4.0",vp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $f={};vp.transitional=function(t,n,r){function a(s,i){return"[Axios v"+Pv+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new X(a(i," has been removed"+(n?" in "+n:"")),X.ERR_DEPRECATED);return n&&!$f[i]&&($f[i]=!0,console.warn(a(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function HS(e,t,n){if(typeof e!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const s=r[a],i=t[s];if(i){const l=e[s],c=l===void 0||i(l,s,e);if(c!==!0)throw new X("option "+s+" must be "+c,X.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new X("Unknown option "+s,X.ERR_BAD_OPTION)}}const qu={assertOptions:HS,validators:vp},ln=qu.validators;class _i{constructor(t){this.defaults=t,this.interceptors={request:new Cf,response:new Cf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zr(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:s}=n;r!==void 0&&qu.assertOptions(r,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),a!=null&&(C.isFunction(a)?n.paramsSerializer={serialize:a}:qu.assertOptions(a,{encode:ln.function,serialize:ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&C.merge(s.common,s[n.method]),i&&C.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),n.headers=Xt.concat(i,s);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,p=0,m;if(!c){const h=[Tf.bind(this),void 0];for(h.unshift.apply(h,l),h.push.apply(h,u),m=h.length,d=Promise.resolve(n);p<m;)d=d.then(h[p++],h[p++]);return d}m=l.length;let v=n;for(p=0;p<m;){const h=l[p++],y=l[p++];try{v=h(v)}catch(w){y.call(this,w);break}}try{d=Tf.call(this,v)}catch(h){return Promise.reject(h)}for(p=0,m=u.length;p<m;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=Zr(this.defaults,t);const n=Tv(t.baseURL,t.url);return Nv(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){_i.prototype[t]=function(n,r){return this.request(Zr(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(Zr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}_i.prototype[t]=n(),_i.prototype[t+"Form"]=n(!0)});const go=_i;class yp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(a=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](a);r._listeners=null}),this.promise.then=a=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(a);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new js(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new yp(function(a){t=a}),cancel:t}}}const QS=yp;function GS(e){return function(n){return e.apply(null,n)}}function KS(e){return C.isObject(e)&&e.isAxiosError===!0}const Wu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wu).forEach(([e,t])=>{Wu[t]=e});const YS=Wu;function $v(e){const t=new go(e),n=fv(go.prototype.request,t);return C.extend(n,go.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return $v(Zr(e,a))},n}const ke=$v(gp);ke.Axios=go;ke.CanceledError=js;ke.CancelToken=QS;ke.isCancel=Lv;ke.VERSION=Pv;ke.toFormData=Sl;ke.AxiosError=X;ke.Cancel=ke.CanceledError;ke.all=function(t){return Promise.all(t)};ke.spread=GS;ke.isAxiosError=KS;ke.mergeConfig=Zr;ke.AxiosHeaders=Xt;ke.formToJSON=e=>Ev(C.isHTMLForm(e)?new FormData(e):e);ke.HttpStatusCode=YS;ke.default=ke;const XS=ke,D=XS.create({baseURL:"https://frapp-4wvtprufuq-uc.a.run.app"}),JS=async(e,t)=>{try{const n=await D.get("/api/v1/users/single-user");return n.status!=200?n.status:{data:n.data,status:n.status}}catch(n){return t.rejectWithValue(n.response.data.msg)}},ZS=async(e,t)=>{try{const{email:n,name:r,userData:a}=t.getState().userData,s=await D.patch(`/api/v1/users/updateUser?id=${a._id}`,{email:n,name:r});if(s.status==201)return s.data}catch(n){return t.rejectWithValue(n.response.data.msg)}},ek=async(e,t)=>{const{_id:n,subscriptionID:r}=t.getState().userData.userData;try{const{data:a}=await D.post(`/api/v1/users/${n}?item=${r._id}`,e);return a}catch(a){return t.rejectWithValue(a.response.data.msg)}},tk=async(e,t)=>{const{_id:n,subscriptionID:r}=t.getState().userData.userData;try{const{data:a}=await D.post(`/api/v1/users/${n}/abort-delete?item=${r._id}`,e);return window.location.pathname="/client_page",a}catch(a){return t.rejectWithValue(a.response.data.msg)}},nk=async(e,t)=>{try{const{data:n}=await D.get("/api/v1/users/role-plan");return dv({userStatus:!0}),n}catch(n){return t.rejectWithValue(n.response.data.msg)}},rk={userData:null,isLoading:!1,userDataLoading:!1,name:"",email:"",role:"",reasons:"",msg:"",isSingleFreteOpen:!1},qe=q("userData/getUser",JS),vo=q("userData/updateUser",ZS),yo=q("userData/softDelete",ek),xo=q("userData/reverseSoftDelete",tk),bo=q("userData/sendUserForUpdateOnRequest",nk),Ov=Ut({name:"userData",initialState:rk,reducers:{userCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},showSingleFrete:e=>{e.isSingleFreteOpen=!0},hideSingleFrete:e=>{e.isSingleFreteOpen=!1},logoutUser:e=>{e.userData=null,setTimeout(()=>{window.location.pathname="/cadastro"},1e3)}},extraReducers:e=>{e.addCase(qe.pending,t=>{t.isLoading=!0,t.userDataLoading=!0}).addCase(qe.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.userDataLoading=!1;const{data:{user:r},status:a}=n;t.userData={...r,status:a}}).addCase(qe.rejected,t=>{t.isLoading=!1,t.userDataLoading=!1}).addCase(vo.pending,t=>{t.isLoading=!0}).addCase(vo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.userData=n.user,t.msg=n.msg,O.success(n.msg)}).addCase(vo.rejected,(t,{payload:n})=>{t.isLoading=!1,O.error(n.msg)}).addCase(bo.pending,t=>{t.isLoading=!0}).addCase(bo.fulfilled,t=>{t.isLoading=!1}).addCase(bo.rejected,t=>{t.isLoading=!1}).addCase(yo.pending,t=>{t.isLoading=!0}).addCase(yo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n.msg)}).addCase(yo.rejected,(t,{payload:n})=>{t.isLoading=!1,O.error(n.msg)}).addCase(xo.pending,t=>{t.isLoading=!0}).addCase(xo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n.msg)}).addCase(xo.rejected,(t,{payload:n})=>{t.isLoading=!1,O.error(n.msg)})}}),{userCollector:xp,hideSingleFrete:ak,showSingleFrete:Of,logoutUser:sk}=Ov.actions,ok=Ov.reducer,ik=async(e,t)=>{try{const n=new URLSearchParams(window.location.search);return(await D.post(`/api/v1/auth/register?session=${n.get("sessão")}`,e)).data}catch(n){return t.rejectWithValue(n.response.data.msg)}},lk=async(e,t)=>{const n=window.location.search;let r=new URLSearchParams(n);try{const{data:a}=await D.post("/api/v1/auth/verify-email",{verificationToken:r.get("token"),email:r.get("email")});return a}catch(a){return t.rejectWithValue(a.response.data.msg)}},ck=async(e,t)=>{let n=new URLSearchParams(window.location.search);try{if(e.eventType==="singIn popup"){const a=await D.post("/api/v1/auth/login",e);if(setTimeout(()=>{document.querySelector(".popup_content-form").classList.remove("show"),document.querySelector(".popup_content-display-form").classList.remove("show_contente")}),setTimeout(()=>{t.dispatch(qe())}),n.get("sessão")==="home_page"){setTimeout(()=>{window.location.pathname="/produto_assinatura"},1e3);return}return setTimeout(()=>{window.history.back()},1e3),a.data}const r=await D.post("/api/v1/auth/login",e);return n.get("sessão")==="home_page"&&setTimeout(()=>{window.location.pathname="/produto_assinatura"},1e3),setTimeout(()=>{t.dispatch(qe())}),r.data}catch(r){return t.rejectWithValue(r.response.data.msg)}},uk=async(e,t)=>{try{const{data:n}=await D.post("/api/v1/auth/login?sendNewEmail=resend-email",e);return n}catch(n){return t.rejectWithValue(n.response.data.msg)}},dk=async(e,t)=>{try{D.post("/api/v1/auth/forgot-password",{email:e});return}catch(n){return t.rejectWithValue(n.response.data.msg)}},pk=async(e,t)=>{const n=window.location.search;let r=new URLSearchParams(n);try{await D.post("/api/v1/auth/reset-password",{password:e,token:r.get("token"),email:r.get("email")});return}catch(a){return t.rejectWithValue(a.response.data.msg)}},mk=async(e,t)=>{try{await D.delete("/api/v1/auth/logout"),e&&t.dispatch(softDelete()),t.dispatch(sk()),t.dispatch(pv());return}catch(n){return t.rejectWithValue(n.response.data.msg)}},fk={isLoading:!1,logoutLoading:!1,user:Pj(),passwordForReset:"",emailForReset:"",msg:"",isSidebarMenuOpen:!1,isProfileSideBarOpen:!1},Fa=q("user/registerUser",ik),Ia=q("user/login",ck),wo=q("user/verifyToken",lk),_o=q("user/forgotPassword",dk),jo=q("user/resetPassword",pk),So=q("user/resentEmail",uk),ko=q("user/logout",mk),Rv=Ut({name:"user",initialState:fk,reducers:{logoutUser:e=>{e.user=null},userCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},openSidebar:e=>{e.isSidebarMenuOpen=!0},closeSidebar:(e,{payload:t})=>{t&&(e.isProfileSideBarOpen=!1),e.isSidebarMenuOpen=!1},openProfileSidebar:e=>{e.isProfileSideBarOpen=!0},closeProfileSidebar:e=>{e.isProfileSideBarOpen=!1}},extraReducers:e=>{e.addCase(Fa.pending,t=>{t.isLoading=!0}).addCase(Fa.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{user:r}=n;t.user=r,O.success("Sucesso, vá até seu email para confirmação")}).addCase(Fa.rejected,(t,{payload:n})=>{t.isLoading=!1,O.error(n)}).addCase(Ia.pending,t=>{t.isLoading=!0}).addCase(Ia.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{user:r,msg:a}=n;t.user=r,a==="success!"?O.success("Pronto!"):O.success(a),t.msg=a,dv({role:r,userStatus:!0})}).addCase(Ia.rejected,(t,{payload:n})=>{t.isLoading=!1,t.msg=n,O.error(n)}).addCase(wo.pending,t=>{t.isLoading=!0}).addCase(wo.fulfilled,t=>{t.isLoading=!1}).addCase(wo.rejected,t=>{t.isLoading=!1}).addCase(ko.pending,t=>{t.logoutLoading=!0}).addCase(ko.fulfilled,t=>{t.logoutLoading=!1,pv()}).addCase(ko.rejected,t=>{t.logoutLoading=!1}).addCase(_o.pending,t=>{t.isLoading=!0}).addCase(_o.fulfilled,t=>{t.isLoading=!1}).addCase(_o.rejected,t=>{t.isLoading=!1}).addCase(jo.pending,t=>{t.isLoading=!0}).addCase(jo.fulfilled,t=>{t.isLoading=!1}).addCase(jo.rejected,t=>{t.isLoading=!1}).addCase(So.pending,t=>{t.isLoading=!0}).addCase(So.fulfilled,t=>{t.isLoading=!1}).addCase(So.rejected,t=>{t.isLoading=!1})}}),{logoutUser:hk,userCollector:zv,openSidebar:M5,closeSidebar:U5,openProfileSidebar:B5,closeProfileSidebar:q5}=Rv.actions,gk=Rv.reducer,Ne=T.form`
  .input,
  input,
  select {
    background: white;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    color: var(--grey-700);
    background-color: rgba(white, 0.5);
    border: 1px solid var(--grey-700);
    transition: all 0.3s;
    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      border-bottom: 3px solid var(--primary-300);
    }
    &:focus:invalid {
      color: var(--red-org);
      border-bottom: 3px solid var(--red-org);
    }
    &::-webkit-input-placeholder {
      color: var(--grey-900);
    }
  }

  // optional for no visible labels, this is for the class who is optional for form-box on Forms component
  .animated-label {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }
  .input:placeholder-shown ~ .animated-label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1rem);
  }

  //animation for inputs who fail on the mission
  .target-fail {
    background-color: var(--red-light);
    position: relative;
    visibility: visible;
    opacity: 1;
  }
  .target-success {
    background-color: var(--primary-200);
  }
`,vk=async(e,t)=>{t.dispatch(Ss());const{sortStatus:n,name:r,city:a,page:s,bodyworkSpecial:i,bodyworkClosed:l,bodyworkOpen:c,colectDate:u,canvas:d,loadType:p,light:m,medium:v,heavy:h,eventType:y}=t.getState().allFretes;let w=`/api/v1/fretes/todos?page=${s}&sortStatus=${n}&name=${r}&city=${a}&bodyworkSpecial=${i}&bodyworkClosed=${l}&bodyworkOpen=${c}&colectDate=${u}&canvas=${d}&loadType=${p}&light=${m}&medium=${v}&heavy=${h}`;try{(y[0]==="notDeboucedReq"||y[0]==="debouceReq")&&t.dispatch(Mv()),console.log(D.get("/api/v1/fretes/todos"));const{data:g}=await D.get(w,{signal:e.signal});return g.fretes.length>9&&t.dispatch(Lk("clear")),g}catch(g){return t.rejectWithValue(g.response.data.msg)}},yk=async(e,t)=>{const{page:n}=t.getState().allFretes;try{const r=await D.get(`/api/v1/fretes/frete-user?page=${n}`);return t.dispatch(Qk()),r.data}catch(r){return t.rejectWithValue(r.response.data.msg)}},xk=async(e,t)=>{let n="/api/v1/fretes";const{pageHistoric:r}=t.getState().allFretes;try{const{data:a}=await D.get(`${n}/frete-user-historic?page=${r}`);return a}catch(a){return t.rejectWithValue(a.response.data.msg)}},bk=async(e,t)=>{t.dispatch(Ss());try{return(await D.delete(`/api/v1/fretes/${e}`)).data}catch(n){return t.rejectWithValue(n.response.data.msg)}},wk=async(e,t)=>{let{_id:n}=e;if(e.isDeleteStatus){if(e.isDeleteStatus){e.isDeleteStatus=!1;try{if(await D.patch(`/api/v1/fretes/${n}/define_status`,e),e.eventType==="freteHist"){t.dispatch(Dt()),O.success("Status removidos");return}t.dispatch(Tn()),O.success("Status removidos");return}catch(r){return t.rejectWithValue(r.response.data.msg)}}}else{e.isDeleteStatus=!0;try{if(await D.patch(`/api/v1/fretes/${n}/define_status`,e),e.eventType==="freteHist"){t.dispatch(Dt()),O.warning("Documento em processo de exclusão");return}t.dispatch(Tn()),O.warning("Documento em processo de exclusão");return}catch(r){return t.rejectWithValue(r.response.data.msg)}}},ji={DEFAULT:"",SP:"São Paulo",AC:"Acre",AL:"Alagoas",AP:"Amapá",AM:"Amazonas",BA:"Bahia",CE:"Ceará",ES:"Espírito Santo",GO:"Goiás",MA:"Maranhão",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PA:"Pará",PB:"Paraíba",PR:"Paraná",PE:"Pernambuco",PI:"Piauí",RJ:"Rio de Janeiro",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RO:"Rondônia",RR:"Roraima",SC:"Santa Catarina",SE:"Sergipe",TO:"Tocantins",DF:"Distrito Federal"},Si={DEFAULT:"",SP:"São Paulo",AC:"Acre",AL:"Alagoas",AP:"Amapá",AM:"Amazonas",BA:"Bahia",CE:"Ceará",ES:"Espírito Santo",GO:"Goiás",MA:"Maranhão",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PA:"Pará",PB:"Paraíba",PR:"Paraná",PE:"Pernambuco",PI:"Piauí",RJ:"Rio de Janeiro",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RO:"Rondônia",RR:"Roraima",SC:"Santa Catarina",SE:"Sergipe",TO:"Tocantins",DF:"Distrito Federal"},ki={DEFAULT:"",RODOTREM:"Rodotrem",BITREM:"Bitrem",VANDERLEIA:"Vanderléia",CARRETA_LS:"Cerreta LS",CARRETA:"Carreta"},Ni={DEFAULT:"",BITRUCK:"Bitruck",TRUCK:"truck"},Ci={DEFAULT:"",TOCO:"Toco",TRES_QUARTO:"3/4",VLC:"VLC",FURGOES:"Furgões"},Ei={DEFAULT:"",PLATAFORMA:"Plataforma",PRNCHA:"Prancha",CAÇAMBA:"Caçamba",GRANDE_ALTA_GRANELEIRA:"Grade alta Graneleira",GRANDE_BAIXA_CARGA_SECA:"Grade baixa Carga seca"},Li={DEFAULT:"",SIDEBAR:"Sider",BAU_FRIGORIFICA:"Baú frigorífico",BAU:"Baú"},Ti={DEFAULT:"",CAÇAMBA_BASCULANTE:"Caçamba basculante",CANAVIEIRA:"Canavieira",MUNCK:"Munck",FLORESTAL:"Florestal",BOIADEIRA:"Boiadeira",TANQUE:"Tanque",POLIGUNDASTE:"Poliguindaste"},Rf={improperBilling:"Cobrança indevida",navigation:"Navegação",oboutOtherUsers:"Sobre outros usuários",doubt:"Duvidas",others:"Outros"},_k=e=>{var r,a,s,i;let t=0;const n=F();if(e===""){(a=(r=document.querySelector(`.inp${t}`))==null?void 0:r.classList)==null||a.add("target-success");return}e.startsWith("inp1")&&(t=1),e.startsWith("inp2")&&(t=2),e.startsWith("inp3")&&(t=3),e.startsWith("inp4")&&(t=4),e.startsWith("inp5")&&(t=5),e.startsWith("inp6")&&(t=6),e.startsWith("inp7")&&(t=7),e.startsWith("inp8")&&(t=8),e.startsWith("inp9")&&(t=9),e.startsWith("inp10")&&(t=10),e.startsWith("inp11")&&(t=11),(i=(s=document.querySelector(`.inp${t}`))==null?void 0:s.classList)==null||i.add("target-fail"),setTimeout(()=>{var l,c;(c=(l=document.querySelector(`.inp${t}`))==null?void 0:l.classList)==null||c.remove("target-fail"),n(Ek())},1e3)};function Av(){const e=document.querySelectorAll(".paragraph-frete-desc"),t=document.querySelector(".query_for-filter-inputs");t==null||t.querySelectorAll(".input").forEach((n,r)=>{setTimeout(()=>{n.value!==""&&(e==null||e.forEach(a=>{a.classList.value.match(n.name)&&(a.classList.add("target-search"),setTimeout(()=>{a.classList.remove("target-search")},1e3*15))}))})})}const Fv={name:"",city:"",toCity:"",loadType:"",colectDate:"",canvas:"",states:Object.values(ji),sortStatus:ji.DEFAULT,destinyStates:Object.values(Si),destiny:Si.DEFAULT,heavy:ki.DEFAULT,heavyOpt:Object.values(ki),medium:Ni.DEFAULT,mediumOpt:Object.values(Ni),light:Ci.DEFAULT,lightOpt:Object.values(Ci),bodyworkOpen:Ei.DEFAULT,bodyworkOpenOpt:Object.values(Ei),bodyworkClosed:Li.DEFAULT,bodyworkClosedOpt:Object.values(Li),bodyworkSpecial:Ti.DEFAULT,bodyworkSpecialOpt:Object.values(Ti)},jk={isLoading:!1,firstRenderLoadin:!1,fretes:[],allFretes:[],freteHistoric:[],singleFrete:[],totalFretes:0,numOfPage:1,page:1,numOfPageHist:1,totalFretesHist:0,pageHistoric:1,fretePagesEvent:"fretes pag",msg:"",stats:{},isSidebarOpen:!1,isDeleteStatus:!1,hasNextPage:!1,showPopup:!1,eventType:"",url:"",...Fv},Da=q("allFretes/getAllFretes",vk),Tn=q("frete/getFretes",yk),Dt=q("frete/getFreteForHistoric",xk);q("frete/deleteFrete",bk);const Ma=q("frete/deleteStatus",wk),Iv=Ut({name:"allFretes",initialState:jk,reducers:{shwLoading:e=>{e.isLoading=!0},hideLoading:e=>{e.isLoading=!1},setExtPage:e=>{e.hasNextPage=!0},unsetExtPage:e=>{e.hasNextPage=!1},handleChanges:(e,{payload:{name:t,value:n,eventType:r}})=>{e.msg="",e.eventType=r,e.page=1,e.hasNextPage=!1,e[t]=n},setSingleFrete:(e,t)=>{e.singleFrete[0]=t.payload},handleChangesNotDebouced:(e,{payload:{name:t,value:n,eventType:r}})=>{e.msg="",e.eventType=r,e.page=1,e.hasNextPage=!1,e[t]=n},clearFilters:e=>({...e,...Fv}),clearMsg:e=>{e.msg=""},clearEvent:(e,{payload:t})=>{t==="clear"&&(e.eventType=["empty"]),delete e.eventType[t]},clearFreteState:e=>{e.fretes=[]},clearAllFreteOnRender:e=>{e.allFretes=[]},clearFreteStateInfinitScroll:e=>({...e}),showPopupHist:(e,{payload:t})=>{e.showPopup=t},clearObjects:e=>({...e,page:1,pageHistoric:1}),changePage:(e,{payload:t})=>{e.page=t},changePageHistoric:(e,{payload:t})=>{e.pageHistoric=t},showAside:(e,{payload:t})=>{e.isSidebarOpen=t},setEditedFreteBackToArray:(e,{payload:t})=>{e.fretes.filter((n,r)=>{n._id===t.frete._id&&(e.fretes[r]=t.frete)})}},extraReducers:e=>{e.addCase(Da.pending,t=>{t.isLoading=!0,t.page==1&&(t.firstRenderLoadin=!0)}).addCase(Da.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.page==1&&(t.firstRenderLoadin=!1);const{fretes:r,totalFretes:a,numOfPage:s,msg:i}=n;r.reverse(),r.forEach(l=>(t.allFretes.unshift(l),l)),t.msg=i,t.numOfPage=s,t.totalFretes=a,r.length&&(t.hasNextPage=!0),Av()}).addCase(Da.rejected,t=>{t.page==1&&(t.firstRenderLoadin=!1),t.isLoading=!1}).addCase(Tn.pending,t=>{t.isLoading=!0}).addCase(Tn.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{frete:r,numOfPage:a,totalFretes:s}=n;t.fretes=r,t.numOfPage=a,t.totalFretes=s}).addCase(Tn.rejected,t=>{t.isLoading=!1}).addCase(Ma.pending,t=>{t.isLoading=!0}).addCase(Ma.fulfilled,t=>{t.isLoading=!1}).addCase(Ma.rejected,t=>{t.isLoading=!1}).addCase(Dt.pending,t=>{t.isLoading=!0}).addCase(Dt.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{frete:r,totalFretesHist:a,numOfPageHist:s}=n;t.freteHistoric=r,t.numOfPageHist=s,t.totalFretesHist=a}).addCase(Dt.rejected,t=>{t.isLoading=!1})}}),{handleChanges:Sk,clearFilters:kk,hideLoading:W5,shwLoading:Ss,changePage:Vu,showAside:V5,changePageHistoric:Nk,clearObjects:Dv,clearFreteState:Mv,clearFreteStateInfinitScroll:H5,setExtPage:Q5,unsetExtPage:Ck,clearMsg:Ek,clearEvent:Lk,handleChangesNotDebouced:Tk,appendFunctionality:G5,setSingleFrete:Hu,setEditedFreteBackToArray:Pk,showPopupHist:K5,clearAllFreteOnRender:$k}=Iv.actions,Ok=Iv.reducer,Rk=async(e,t)=>{const{freteId:n}=t.getState().frete;try{const{data:r}=await D.patch(`/api/v1/fretes/${n}`,e);return O.success("Documento atualizado"),t.dispatch(Pk(r)),r}catch(r){return t.rejectWithValue({msg:r.response.data.msg,status:r.response.status})}},zk=async({freteId:e,isConcluded:t,controlRequests:n},r)=>{try{if(await D.patch(`/api/v1/fretes/${e}/status`,{isConcluded:t}),n&&r.dispatch(Tn()),r.dispatch(Dt()),t)return O.success("Frete movido para histórico");O.success("Frete removido do histórico"),r.dispatch(qk())}catch(a){return r.rejectWithValue(a.response.data.error.msg)}},Ak=async(e,t)=>{const{freteSetMany:n}=t.getState().frete;t.dispatch(Hk());let r={isConcluded:!0};try{(await n[0].map(async s=>await D.patch(`/api/v1/fretes/${s.id}/status`,r)))[0].then(()=>{t.dispatch(Mv()),t.dispatch(Gk()),t.dispatch(Tn()),O.success("Pagina movida para histórico")}).catch(s=>console.log(s))}catch(a){return t.rejectWithValue(a.response.data.error.msg)}},Fk=async(e,t)=>{try{const{data:n}=await D.post("/api/v1/fretes/criar",e);return n}catch(n){return t.rejectWithValue({msg:n.response.data.msg,status:n.response.status})}};function ks({eventType:e}){var t,n,r,a,s,i,l,c;e==="set"&&((n=(t=document.querySelector(".popup_content-admin-link"))==null?void 0:t.classList)==null||n.add("show"),(a=(r=document.querySelector(".popup_content-display-actions-admin-link"))==null?void 0:r.classList)==null||a.add("show_contente")),e==="close"&&((i=(s=document.querySelector(".popup_content-admin-link"))==null?void 0:s.classList)==null||i.remove("show"),(c=(l=document.querySelector(".popup_content-display-actions-admin-link"))==null?void 0:l.classList)==null||c.remove("show_contente"))}const Ik={states:Object.values(ji),sortStatus:ji.DEFAULT,destinyStates:Object.values(Si),destiny:Si.DEFAULT,loadType:"",colectDate:"",heavy:ki.DEFAULT,heavyOpt:Object.values(ki),medium:Ni.DEFAULT,mediumOpt:Object.values(Ni),light:Ci.DEFAULT,lightOpt:Object.values(Ci),bodyworkOpen:Ei.DEFAULT,bodyworkOpenOpt:Object.values(Ei),bodyworkClosed:Li.DEFAULT,bodyworkClosedOpt:Object.values(Li),bodyworkSpecial:Ti.DEFAULT,bodyworkSpecialOpt:Object.values(Ti)},zf={name:"",email:"",phone:"",price:"",text:"",city:"",toCity:"",freteId:"",msg:"",freteSetMany:[],status:null,isEditing:!1,isLoading:!1,isConcludedLoading:!1,isConcluded:!1,...Ik},No=q("frete/collectData",Fk),Co=q("frete/updateFrete",Rk),Eo=q("frete/setToConcluded",zk),Lo=q("frete/setManyToConcludedThunk",Ak),Uv=Ut({name:"frete",initialState:zf,reducers:{shwoLoading:e=>{e.isLoading=!0},hidLoading:e=>{e.isLoading=!1},shwoManyLoading:e=>({...e,isConcludedLoading:!0}),hideManyLoading:e=>({...e,isConcludedLoading:!1}),freteCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},clearSetManyArray:e=>{e.freteSetMany=[]},setEditFrete:(e,{payload:t})=>({...e,isEditing:!0,...t}),setEditToFalse:()=>zf,showConcludedLoading:e=>{e.isConcludedLoading=!0},hideConcludedLoading:e=>{e.isConcludedLoading=!1},clearMsg:e=>{e.msg=""},clearMsgAndloadingState:e=>({...e,msg:"",isLoading:!1}),populateSetArray:(e,{payload:t})=>{e.freteSetMany.length||e.freteSetMany.push(t)},clearStateSetArray:e=>{e.freteSetMany=[],ks({eventType:"close"})}},extraReducers:e=>{e.addCase(No.pending,t=>{t.isLoading=!0}).addCase(No.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.msg=n.msg,n.msg==="success!"&&O.success("Frete postado!")}).addCase(No.rejected,(t,{payload:n})=>{t.isLoading=!1;const{msg:r,status:a}=n;if(!(r!=null&&r.match(","))){O.error(r);return}let s=r==null?void 0:r.match(",").index,i=r==null?void 0:r.slice(0,s);t.msg=i,t.status=a,O.error(i)}).addCase(Co.pending,t=>{t.isLoading=!0}).addCase(Co.fulfilled,t=>{t.isLoading=!1}).addCase(Co.rejected,(t,{payload:n})=>{t.isLoading=!1;const{msg:r,status:a}=n;if(!(r!=null&&r.match(",")))O.error(r);else{let s=r==null?void 0:r.match(",").index,i=r==null?void 0:r.slice(0,s);t.msg=i,t.status=a,i!=="Verifique a data"&&O.error(i),i==="Verifique a data"&&O.error(r)}}).addCase(Eo.pending,t=>{t.isConcludedLoading=!0}).addCase(Eo.fulfilled,t=>{t.isConcludedLoading=!1}).addCase(Eo.rejected,t=>{t.isConcludedLoading=!1}).addCase(Lo.pending,t=>{t.isConcludedLoading=!0}).addCase(Lo.fulfilled,t=>{t.isConcludedLoading=!1}).addCase(Lo.rejected,t=>{t.isConcludedLoading=!1})}}),{freteCollector:Bv,setEditFrete:Dk,setEditToFalse:Mk,shwoLoading:Uk,hidLoading:Y5,clearMsgAndloadingState:Bk,showConcludedLoading:X5,hideConcludedLoading:qk,clearMsg:Wk,populateSetArray:Vk,clearStateSetArray:J5,shwoManyLoading:Hk,hideManyLoading:Qk,clearSetManyArray:Gk}=Uv.actions,Kk=Uv.reducer,Yk=e=>{var t,n,r,a,s,i,l,c;e?((n=(t=document.querySelector(".request__animations-animate"))==null?void 0:t.classList)==null||n.add("request__animations-animate-spin"),(a=(r=document.querySelector(".animated__btn"))==null?void 0:r.classList)==null||a.add("set-colum")):((i=(s=document.querySelector(".request__animations-animate"))==null?void 0:s.classList)==null||i.remove("request__animations-animate-spin"),(c=(l=document.querySelector(".animated__btn"))==null?void 0:l.classList)==null||c.remove("set-colum"))},Xk=()=>{var e,t,n,r,a,s;(t=(e=document.querySelector(".btn_text"))==null?void 0:e.classList)==null||t.add("submit__succeeded"),(r=(n=document.querySelector(".request__animations-animate"))==null?void 0:n.classList)==null||r.add("submit__succeeded"),(s=(a=document.querySelector(".unset__animation"))==null?void 0:a.classList)==null||s.add("set_animation-on-success")},Jk=({dispatch:e})=>{setTimeout(()=>{var t,n,r,a,s,i,l,c,u,d;(n=(t=document.querySelector(".unset__animation"))==null?void 0:t.classList)==null||n.remove("set_animation-on-success"),(a=(r=document.querySelector(".btn_text"))==null?void 0:r.classList)==null||a.remove("submit__succeeded"),(i=(s=document.querySelector(".request__animations-animate"))==null?void 0:s.classList)==null||i.remove("submit__succeeded"),(c=(l=document.querySelector(".request__animations-animate"))==null?void 0:l.classList)==null||c.remove("request__animations-animate-spin"),(d=(u=document.querySelector(".animated__btn"))==null?void 0:u.classList)==null||d.remove("set-colum"),e(Bk())},1e3*5)},Zk=({pNumber:e})=>{var t,n;(n=(t=document.querySelector(`.animation-${e}`))==null?void 0:t.classList)==null||n.add("animated-hover")},e2=({pNumber:e})=>{var t,n;(n=(t=document.querySelector(`.animation-${e}`))==null?void 0:t.classList)==null||n.remove("animated-hover")};var Qf;(Qf=document.querySelector("#cl"))==null||Qf.addEventListener("mouseenter",()=>{var e,t;(t=(e=document.querySelector("#cl"))==null?void 0:e.classList)==null||t.add("hover-bcg"),setTimeout(()=>{var n,r;(r=(n=document.querySelector("#cl"))==null?void 0:n.classList)==null||r.remove("hover-bcg")},200)});var Gf;(Gf=document.querySelector("#cl"))==null||Gf.addEventListener("mouseleave",()=>{var e,t;(t=(e=document.querySelector("#cl"))==null?void 0:e.classList)==null||t.remove("hover-bcg")});const t2=()=>o.jsx(n2,{className:"unset__animation",children:o.jsx("div",{className:"wrapper",children:o.jsx("span",{className:"check-mark"})})}),n2=T.div`
  position: absolute;
  display: none;
  place-self: center;
  place-content: center;
  height: 100%;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .check-mark {
    width: 2rem;
    height: 2rem;
    position: relative;
    position: absolute;
    display: grid;
    place-content: center;
    border: 1px solid var(--white);
    border-radius: 50%;
    z-index: 5;
    animation: slide-check 3s ease;
    &::before {
      content: "";
      width: 2rem;
      height: 2rem;
      border: 1px solid white;
      border-radius: 50%;
      background-color: #7ac142;
      animation: slide-check-back 3s ease;
    }
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      color: white;
      background: var(--white);
      clip-path: polygon(
        21% 44.5%,
        41% 65%,
        78% 33%,
        84% 40%,
        40% 78%,
        14.5% 51%
      );
    }
  }

  @keyframes slide-check {
    0% {
      transform: translateX(-300px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide-check-back {
    0% {
      transform: translateX(300px);
      opacity: 0;
    }
    70% {
      transform: translateX(100px);
      opacity: 0;
    }
    90% {
      transform: translateX(10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Te=({btnBorder:e,type:t,text:n,loadingText:r,handleClick:a,loading:s,width:i,height:l,margin:c,backgroundColor:u,btn_background:d,givemeCheckMark:p,msg:m})=>{console.log(s);const v=F();return a==="submitType"&&(a=()=>{console.log()}),m==="success!"&&(Xk(),Jk({dispatch:v})),Yk(s),o.jsx(r2,{className:"btn__animated-content",children:o.jsxs("button",{className:"animated__btn",type:t,style:{minWidth:i,height:l,margin:c,backgroundColor:u,border:e},disabled:s,onClick:a,children:[o.jsx("div",{style:{background:d},className:"btn__background"}),p&&o.jsx(t2,{}),o.jsx("p",{className:"btn_text",children:s?`${r}...`:n}),o.jsx("span",{className:"request__animations-animate"})]})})},r2=T.div`
  position: absolute;
  position: relative;
  display: grid;
  .request__animations-animate {
    display: none;
  }

  .request__animations-animate-spin {
    animation: spin 1s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
  .animated__btn {
    display: grid;
    padding: 0 1rem 0 1rem;
    overflow: hidden;
    backface-visibility: hidden;
    position: relative;
    grid-template-columns: auto unset;
    border: 1px solid var(--primary-blue-500);
    place-self: center;
    background: var(--primary-blue-500);
    border-radius: 9px;
    transition: all 0.1s ease-in-out;
    box-shadow: 0 1rem 5px rgba(0, 0, 0, 0.2);
    z-index: 0;
    .btn_text {
      margin-top: 0;
      letter-spacing: 2px;
      place-self: center;
      color: var(--white);
    }
    .submit__succeeded {
      visibility: hidden;
      opacity: 0;
    }
  }
  .set-colum {
    grid-template-columns: auto auto;
  }
  .set_animation-on-success {
    display: grid;
  }
  .animated__btn:hover {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(1.007);
  }
  .animated__btn:active {
    transform: scale(1);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  }

  .request__animations-animate-spin {
    display: block;
    margin: auto;
    overflow: hidden;
    backface-visibility: hidden;
    border: 3px solid var(--white);
    border-radius: 50%;
    border-top: 3px solid var(--grey-400);
    width: 2rem;
    height: 2rem;
  }
  .btn__background {
    background: linear-gradient(
      to right,
      rgba(0, 116, 212, 0) 0%,
      rgb(82, 132, 194) 50%,
      rgba(0, 116, 212, 0) 100%
    );
    z-index: 10000;
    position: absolute;
    width: 10rem;
    height: 100%;
    animation: silver-slide 3s infinite ease;
    opacity: 0.5;
    @keyframes silver-slide {
      0% {
        transform: translateX(-700px);
      }
      100% {
        transform: translateX(700px);
      }
    }
  }
`;function qv(e){e?(document.querySelector(".popup_content-ticket-adm").classList.add("show-act"),document.querySelector(".popup_content-cation-ticket-adm").classList.add("show_contente-freight")):setTimeout(()=>{document.querySelector(".popup_content-ticket-adm").classList.remove("show-act"),document.querySelector(".popup_content-cation-ticket-adm").classList.remove("show_contente-freight")},300)}function Wv(e){var t,n,r,a;e?((n=(t=document.querySelector(".popup_content-update-warning"))==null?void 0:t.classList)==null||n.add("show-act"),(a=(r=document.querySelector(".popup_content-action-update-warning"))==null?void 0:r.classList)==null||a.add("show_contente-success")):setTimeout(()=>{var s,i,l,c;(i=(s=document.querySelector(".popup_content-update-warning"))==null?void 0:s.classList)==null||i.remove("show-act"),(c=(l=document.querySelector(".popup_content-action-update-warning"))==null?void 0:l.classList)==null||c.remove("show_contente-success")},300)}function Qu(e){var t,n,r,a;e?((n=(t=document.querySelector(".popup_content-resend-email"))==null?void 0:t.classList)==null||n.add("show-act"),(a=(r=document.querySelector(".popup_content-cation-resend-email"))==null?void 0:r.classList)==null||a.add("show_contente-resent")):setTimeout(()=>{var s,i,l,c;(i=(s=document.querySelector(".popup_content-resend-email"))==null?void 0:s.classList)==null||i.remove("show-act"),(c=(l=document.querySelector(".popup_content-cation-resend-email"))==null?void 0:l.classList)==null||c.remove("show_contente-resent")},300)}function Gu(e){var t,n,r,a;e?((n=(t=document.querySelector(".popup_content-update-success"))==null?void 0:t.classList)==null||n.add("show-act"),(a=(r=document.querySelector(".popup_content-action-update-success"))==null?void 0:r.classList)==null||a.add("show_contente-success")):setTimeout(()=>{var s,i,l,c;(i=(s=document.querySelector(".popup_content-update-success"))==null?void 0:s.classList)==null||i.remove("show-act"),(c=(l=document.querySelector(".popup_content-action-update-success"))==null?void 0:l.classList)==null||c.remove("show_contente-success")},300)}function Vv(e){e?(document.querySelector(".popup_content-freight").classList.add("show-act"),document.querySelector(".popup_content-freight-act").classList.add("show_contente-freight")):setTimeout(()=>{document.querySelector(".popup_content-freight").classList.remove("show-act"),document.querySelector(".popup_content-freight-act").classList.remove("show_contente-freight")},300)}function Hv(e){e?(document.querySelector(".popup_content-message-adm").classList.add("show-act"),document.querySelector(".popup_content-cation-message-adm").classList.add("show_contente-freight")):setTimeout(()=>{document.querySelector(".popup_content-message-adm").classList.remove("show-act"),document.querySelector(".popup_content-cation-message-adm").classList.remove("show_contente-freight")},300)}const a2=({email:e,password:t})=>{const{isLoading:n}=z(s=>s.user),r=F(),a=()=>{const s=document.getElementById("messages");s==null||s.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{s==null||s.classList.add("msg-target")},700),setTimeout(()=>{s==null||s.classList.remove("msg-target")},1e4),Qu(!1)};return o.jsx(s2,{children:o.jsx("div",{className:"popup_content-resend-email",children:o.jsxs("div",{className:"popup_content-cation-resend-email",children:[o.jsx("button",{type:"button",onClick:()=>{Qu(!1)},className:"close",id:"cl",children:"×"}),o.jsxs("h3",{className:"action-description",children:["Olá, o email só pode ser reenviado 2 vezes, caso nenhuma dessas tentativas o senhor(a) não receba o email peço por gentileza que tente registrar um outro email! Ou entre em contato com nosso suporte"," ",o.jsx("a",{href:"mailto:onfrete7@gmail.com",className:"not-position",children:"email"}),","," ",o.jsx(S,{onClick:a,className:"not-position",children:"mensagem"})]}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Confirmar",height:"5rem",width:"10rem",btnBorder:"transparent",backgroundColor:"var(--clr-primary-orange-2)",btn_background:"var(--clr-primary-orange-2)",loading:n,handleClick:()=>r(So({password:t,email:e}))})]})})})},s2=T.div`
  .popup_content-resend-email {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-cation-resend-email {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 80%;
    height: 80%;
    background-color: var(--white);
    text-align: center;
    padding: 5rem;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-resent {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }

  .not-position {
    position: unset;
  }
`,o2={name:"",email:"",password:"",isMember:!0};function i2(){const e=F();let{userData:t}=z(c=>c.userData),{isLoading:n,msg:r}=z(c=>c.user);const[a,s]=_.useState(o2),i=c=>{const u=c.target.name,d=c.target.value;s({...a,[u]:d})},l=c=>{c.preventDefault();const{name:u,email:d,password:p,isMember:m}=a;if(!d||!p||!u&&!m){O.warning("preencha todos os campos");return}if(!new RegExp(/^\S+@\S+\.\S+$/).test(d)){O.warn('Parece que seu email esta faltando os caracteres base, confere o @ ou ".com"');return}if(m){e(Ia({email:d,password:p,eventType:"cadastro page"}));return}e(Fa({name:u,email:d,password:p}))};return _.useEffect(()=>{t||e(qe())},[]),o.jsxs(l2,{children:[o.jsx(a2,{...a}),o.jsxs(Ne,{className:"form",onSubmit:l,children:[o.jsx("h3",{children:a.isMember?"Entrar":"Registrar-se"}),o.jsxs("div",{className:"inputs",children:[!a.isMember&&o.jsx(K,{type:"name",name:"name",labelText:"Nome",labelClass:"animated-label",autocorrect:"off",inputmode:"name",spellcheck:"false",ariaInvalid:"false",placeholder:"Nome",value:a.name,handleChange:i}),o.jsx(K,{type:"email",name:"email",labelText:"Email",labelClass:"animated-label",placeholder:"Email",autocomplete:"email",autocorrect:"off",inputmode:"email",spellcheck:"false",ariaInvalid:"false",min:6,value:a.email,handleChange:i}),o.jsx(K,{type:"password",min:{min:8},labelText:"Senha",labelClass:"animated-label",placeholder:"Senha",name:"password",autoComplete:"off",value:a.password,handleChange:i})]}),a.isMember?o.jsx(Te,{handleClick:"submitType",loading:n,loadingText:"Processando",text:"Entrar",type:"submit",width:"20rem",height:"5rem",margin:"",btnBorder:"transparent",backgroundColor:"var(--primary-300)",btn_background:"var(--primary-200)"}):o.jsx(Te,{handleClick:"submitType",loading:n,loadingText:"Processando",text:"Registrar-se",type:"submit",width:"20rem",height:"5rem",margin:"",btnBorder:"transparent",backgroundColor:"var(--primary-300)",btn_background:"var(--primary-200)"}),a.isMember?o.jsx(S,{to:"/userData/forgot-password",children:"Trocar senha"}):null,o.jsxs("p",{className:"already_user",children:["Ja possui conta?"," ",o.jsx("button",{className:"switch-status",onClick:()=>s({...a,isMember:!a.isMember}),type:"button",children:a.isMember?"Registrar-se":"Entrar"})]}),!!(r!=null&&r.match("autenticação"))&&o.jsxs("p",{className:"resend-email",children:["Não recebeu o email?"," ",o.jsx(S,{onClick:()=>Qu(!0),className:"not-position pulsing",children:"reenviar"})]})]})]})}const l2=T.section`
  min-height: 100vh;
  display: flex;
  padding: 5rem;
  .form {
    position: relative;
    padding: 3rem;
    display: grid;
    margin: 0 auto;
    width: 600px;
    height: 600px;
    border-radius: 3px;
  }
  .inputs {
    width: 100%;
    padding: 3rem;
    display: grid;
    place-items: center;
    .form-box {
      width: 90%;
    }
    input {
      height: 4rem;
      width: 100%;
      margin: 0;
    }
    .password-input {
      margin-left: -6px;
    }
  }
  label {
    color: var(--grey-700);
  }
  h3 {
    color: var(--grey-600);
    font-size: 2rem;
    align-self: center;
    justify-self: center;
  }
  .already_user {
    color: var(--grey-600);
    font-size: 1.6rem;
    margin: 0 auto;
    position: absolute;
    right: 4rem;
    bottom: 4rem;
  }
  .resend-email {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
  }
  button {
    p {
      font-size: 1.8rem;
      padding-top: 1px;
    }
  }
  a,
  .switch-status {
    color: var(--yellow-org);
    font-size: 1.6rem;
    text-align: center;
  }
  a {
    position: absolute;
    top: 62%;
    right: 17%;
  }
  .switch-status {
    background: transparent;
    border: transparent;
  }
  @media (max-width: 700px) {
    padding: 0;
    padding-top: 10rem;
    .form {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .inputs {
      input {
        height: 2.6rem;
        width: 20rem;
      }
    }
  }
  .not-position {
    position: unset;
  }
  .pulsing {
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }

    70% {
      transform: scale(1);
      color: var(--grey-700);
    }

    100% {
      transform: scale(0.95);
      color: var(--yellow-org);
    }
  }
`,er={popup:{singIn:"cadastro",message:"mensagem"}};let c2=[{singInSignatures:"Entre ou crie uma conta para darmos prosseguimento a assinatura",alreadySubscribe:o.jsxs("p",{className:"content__description-text",children:["Olá, aparentemente o senhor(a) já tem uma inscrição ativa, para conseguirmos modificar o plano atual peço que vá até esse ",o.jsx("br",{})]})}];const u2=()=>{const e=()=>{setTimeout(()=>{const t=document.querySelector(".popup_content"),n=document.querySelector(".popup_content-display-form-message");!t||!n||(t.classList.add("show"),n.classList.add("show_contente"))})};return o.jsx(o.Fragment,{children:o.jsxs(d2,{children:[o.jsxs("div",{className:"footer-top-section",children:[o.jsxs("div",{className:"know-more",children:[o.jsx("p",{children:"conheça-nos"}),o.jsx(S,{className:"first",to:"/about_page",children:"sobre"}),o.jsx(S,{to:"/about_page/propostas",children:"propostas"}),o.jsx(S,{to:"/about_page/futuro",children:"futuro"})]}),o.jsxs("div",{className:"payments",children:[o.jsx("p",{children:"nossas assinaturas"}),o.jsx(S,{className:"first",to:"/produto_assinatura?plano=básico",children:"plano básico"}),o.jsx(S,{to:"/produto_assinatura?plano=avançado",children:"plano avançado"}),o.jsx(S,{to:"/produto_assinatura?plano=premium",children:"plano premium"}),o.jsx(S,{children:"planos customizáveis"})]}),o.jsxs("div",{className:"help",children:[o.jsx("p",{children:"ajuda"}),o.jsx(S,{className:"first",to:"/suporte_cliente",children:"tickets"}),o.jsx(S,{to:`?popup=${er.popup.message}&sessão=home_page`,onClick:e,id:"messages",children:"deixe sua mensagem"})]})]}),o.jsx("div",{className:"footer-middle-section",children:o.jsxs("div",{className:"logo",children:[o.jsx("div",{className:"logo-body"}),o.jsx("a",{href:"mailto:onfrete7@gmail.com",children:"onfrete7@gmail.com"})]})}),o.jsxs("div",{className:"footer-last-section",children:[o.jsxs("div",{className:"footer-links",children:[o.jsx(S,{className:"first",to:"/about_page/regras",children:"condições de uso"}),o.jsx(S,{to:"/about_page/sobre-cookie",children:"cookies"})]}),o.jsxs("h5",{children:["© ",new Date().getFullYear()," ","","onFrete All rights reserved"]})]})]})})},d2=T.footer`
  height: 50rem;
  position: relative;
  display: grid;
  background: var(--grey-900);
  grid-template-rows: 1fr 0.5fr 0.4fr;
  a {
    font-size: 1.2rem;
    color: var(--white);
  }
  a:hover {
    color: var(--red-org);
  }
  .footer-top-section {
    background: var(--grey-600);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    place-content: center;
    justify-items: center;
    div {
      width: 100%;
      height: 100%;
      text-align: center;
      display: grid;
      color: var(--white);
      p {
        letter-spacing: 2px;
        font-size: 1.4rem;
        height: 2rem;
      }
      .first {
      }
      a {
        margin-top: 5px;
        letter-spacing: 1px;
        width: fit-content;
        place-self: center;
      }
    }
    .help {
      a {
        margin-top: -2rem;
      }
    }
    .know-more {
      border-right: 1px solid var(--grey-200);
    }
    .payments {
      border-right: 1px solid var(--grey-200);
    }
  }
  .footer-middle-section {
    background: var(--grey-700);
    text-align: center;
    display: grid;
    place-content: center;
    .logo {
      h1 {
        color: var(--primary-400);
      }
    }
  }
  .footer-last-section {
    display: grid;
    place-content: center;
    position: relative;
    h5 {
      color: var(--white);
      font-size: 1.3rem;
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%);
    }
    .footer-links {
      position: relative;
      a {
        margin: 2rem;
      }
      :last-child {
      }
      :first-child {
      }
      &::after {
        content: "";
        position: absolute;
        background-color: var(--white);
        width: 1px;
        height: 2rem;
        right: 8.5rem;
      }
    }
  }
  @media (max-width: 500px) {
    height: 90rem;
    .footer-top-section {
      grid-template-columns: 1fr;
      row-gap: 3rem;
      p {
        margin: 0 0 1rem 0;
      }
      .help {
        a {
          margin: 0;
        }
      }
    }
  }
  .msg-target {
    color: var(--yellow-org);
    outline: 3px solid var(--yellow-org);
  }
  .logo-body {
    margin: 0 auto;
    background-size: 7.5rem;
    width: 8rem;
    height: 8rem;
  }
`;var Qv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Af=V.createContext&&V.createContext(Qv),Pn=globalThis&&globalThis.__assign||function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Pn.apply(this,arguments)},p2=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Gv(e){return e&&e.map(function(t,n){return V.createElement(t.tag,Pn({key:n},t.attr),Gv(t.child))})}function bp(e){return function(t){return V.createElement(m2,Pn({attr:Pn({},e.attr)},t),Gv(e.child))}}function m2(e){var t=function(n){var r=e.attr,a=e.size,s=e.title,i=p2(e,["attr","size","title"]),l=a||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),V.createElement("svg",Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:c,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&V.createElement("title",null,s),e.children)};return Af!==void 0?V.createElement(Af.Consumer,null,function(n){return t(n)}):t(Qv)}function f2(e){return bp({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function h2(e){return bp({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function g2(e){return bp({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(e)}function v2(e){const t=document.querySelector(".normal-device-client"),n=document.querySelector(".navbar-content"),r=document.querySelector(".icon-container"),a=document.querySelector(".mobile-device");e?(t==null||t.classList.toggle("target-side-cliente-content"),setTimeout(()=>{r==null||r.classList.add("close-side"),a==null||a.classList.add("transform-x")})):(t==null||t.classList.remove("target-side-cliente-content"),n==null||n.classList.remove("show-aside"),n==null||n.classList.remove("normal-device"))}function y2(e){const t=document.querySelector(".edit-profile-client-side"),n=document.querySelector(".freight-cliente"),r=document.querySelector(".historic-cliente"),a=document.querySelector(".signature-link"),s=document.querySelector(".remove-account"),i=document.querySelector(".cliente-profile");e==="/client_page/freight"&&(n==null||n.classList.add("target-navigation"),t==null||t.classList.remove("target-navigation"),r==null||r.classList.remove("target-navigation"),a==null||a.classList.remove("target-navigation"),s==null||s.classList.remove("target-navigation"),i==null||i.classList.remove("target-navigation")),e==="/client_page/profile"&&(t==null||t.classList.add("target-navigation"),n==null||n.classList.remove("target-navigation"),r==null||r.classList.remove("target-navigation"),a==null||a.classList.remove("target-navigation"),s==null||s.classList.remove("target-navigation"),i==null||i.classList.remove("target-navigation")),e==="/client_page/historico-fretes"&&(r==null||r.classList.add("target-navigation"),n==null||n.classList.remove("target-navigation"),t==null||t.classList.remove("target-navigation"),a==null||a.classList.remove("target-navigation"),s==null||s.classList.remove("target-navigation"),i==null||i.classList.remove("target-navigation")),e==="/client_page/pagamentos"&&(a==null||a.classList.add("target-navigation"),r==null||r.classList.remove("target-navigation"),n==null||n.classList.remove("target-navigation"),t==null||t.classList.remove("target-navigation"),s==null||s.classList.remove("target-navigation"),i==null||i.classList.remove("target-navigation")),e==="/client_page/remover-conta"&&(s==null||s.classList.add("target-navigation"),a==null||a.classList.remove("target-navigation"),r==null||r.classList.remove("target-navigation"),n==null||n.classList.remove("target-navigation"),t==null||t.classList.remove("target-navigation"),i==null||i.classList.remove("target-navigation")),e==="/client_page"&&(i==null||i.classList.add("target-navigation"),a==null||a.classList.remove("target-navigation"),r==null||r.classList.remove("target-navigation"),n==null||n.classList.remove("target-navigation"),t==null||t.classList.remove("target-navigation"),s==null||s.classList.remove("target-navigation"))}function Ot(e,t){const n=document.querySelector(".navbar-content"),r=document.querySelector(".icon-container"),a=document.querySelector(".mobile-device"),s=document==null?void 0:document.querySelector(".normal-device-client"),i=document.querySelector(".menu-shade-background");e?(n.classList.toggle("show-aside"),n.classList.toggle("normal-device"),r.classList.toggle("close-side"),a.classList.toggle("transform-x"),i.classList.toggle("target-shade"),setTimeout(()=>{var l;(l=s==null?void 0:s.classList)==null||l.remove("target-side-cliente-content")})):(n.classList.remove("show-aside"),n.classList.add("normal-device"),r.classList.remove("close-side"),a.classList.remove("transform-x")),t&&setTimeout(()=>{var l;(l=s==null?void 0:s.classList)==null||l.add("target-side-cliente-content")})}function Kv(e){const t=document.querySelector(".aside-cnt"),n=document.querySelector(".close-container");e&&(t.classList.toggle("active-fil"),n.classList.toggle("active-fil"))}const x2=({userData:e,pathname:t})=>{const n=F(),r=document.querySelector("body").getBoundingClientRect();return o.jsxs("ul",{className:"navbar-content normal-device",children:[o.jsxs("div",{className:"navigation-container",children:[o.jsx(S,{to:"/",className:"homepage-link",onClick:()=>r.width<=1100&&Ot(!0),children:"Pagina Inicial"}),o.jsx(S,{to:t!=="/frete_page"&&"/frete_page",className:"freight-page-link",onClick:()=>{r.width<=1100&&Ot(!0),n(Dv())},children:"Fretes"}),o.jsx(S,{to:"/create-frete",className:"publish-link",onClick:()=>r.width<=1100&&Ot(!0),children:"Publicar Frete"}),o.jsx(S,{to:"/about_page",className:"about-link",onClick:()=>r.width<=1100&&Ot(!0),children:"Sobre"})]}),o.jsxs("div",{className:"client-container",children:[o.jsx(S,{to:"suporte_cliente",onClick:()=>r.width<=1100&&Ot(!0),className:"support-link",children:"Suporte"}),e?o.jsx(S,{type:"button",className:"register_logout",onClick:()=>{n(ko()),r.width<=1100&&Ot(!0)},children:"Sair"}):o.jsx(S,{to:"/cadastro",onClick:()=>r.width<=1100&&Ot(!0),className:"register_logout",children:"entrar"}),e?o.jsx(S,{to:t.toString().split("/")[1]!=="client_page"&&"/client_page",onClick:()=>{setTimeout(()=>{v2(!0)})},className:"link profile-link",children:"Perfil"}):o.jsx(S,{to:"/cadastro",className:"link profile-link",children:"Perfil"})]})]})},b2=T.div`
  font-size: 1.4rem;
  height: 64px;
  display: flex;
  align-items: center;
  border-radius: 0;
  margin: 0;
  .logo {
    margin: 0 4rem 0 3rem;
    h2 {
      font-size: 1.5rem;
      color: var(--primary-400);
    }
  }
  .navbar-content {
    transition: all 0.3s ease;
  }
  .normal-device {
    width: 100%;
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr;
    .navigation-container {
      display: flex;
      gap: 3rem;
    }
    .client-container {
      display: flex;
      gap: 3rem;
      justify-content: end;
      margin: 0 11rem 0 0;
    }
  }
  .icon-container {
    display: none;
    transform: rotate(180deg);
    transform: rotate(180deg);
    transition: all 0.7s ease;
  }
  .show-aside {
    display: none;
  }
  @media (max-width: 1100px) {
    .icon-container {
      display: grid;
    }
    .mobile-device {
      transition: all 0.5s ease;
    }
    .close-side {
      border-radius: 50%;
      height: 5rem;
    }
    .close-side:hover {
      background-color: var(--grey-200);
    }
    .close-side {
      background-color: var(--white);
      .transform-x {
        backface-visibility: hidden;
        transform-origin: right;
        background-color: transparent;
        background-position: -50px;
        &::before {
          transform: rotate(45deg);
          bottom: 0;
        }
        &::after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
    .logo {
      place-self: center;
      position: absolute;
      margin: 0;

      left: 50%;
      transform: translate(-50%);
    }
    .normal-device {
      visibility: hidden;
      opacity: 0;
      z-index: -5;
      transform: translateX(-1000px);
      background-color: var(--white);
      transition: 0s;
    }
    .show-aside {
      visibility: visible;
      opacity: 1;
      z-index: 1;
      position: fixed;
      height: 100%;
      width: 30rem;
      left: 0;
      top: 64px;
      display: block;
      background-color: var(--white);
      padding-left: 4rem;
      animation: rotate-90 0.3s ease-in;
      transform: translateX(0);

      .navigation-container,
      .client-container {
        display: grid;
        a {
          height: fit-content;
          margin: 3rem 0 3rem 0;
          color: var(--grey-700);
        }
      }
      .navigation-container {
        margin-top: 5rem;
      }
    }
    @media (max-height: 670px) {
      .navbar-content {
        .navigation-container,
        .client-container {
          margin-top: 0;
          a {
            margin: 1rem 0 1rem 0;
          }
        }
      }
    }
  }
`,w2=({pathname:e})=>{let{userData:t}=z(r=>r.userData),{isSidebarOpen:n}=z(r=>r.allFretes);return o.jsxs(b2,{className:"nav",children:[o.jsx("div",{className:"icon-container",onClick:()=>{Ot(!0)},children:o.jsx("span",{className:"mobile-device"})}),e==="/frete_page"?o.jsx(g2,{type:"button",onClick:()=>Kv(!0)}):null,o.jsx("div",{className:"logo",children:o.jsx("div",{className:"logo-body"})}),o.jsx(x2,{userData:t,pathname:e,isSidebarOpen:n})]})},_2=()=>{const{pathname:e}=Mt();return S2(e),o.jsxs(j2,{style:{height:"64px",zIndex:"2"},children:[o.jsx(w2,{pathname:e}),o.jsx("div",{className:"menu-shade-background",onClick:()=>{Ot(!0)}})]})},j2=T.div`
  display: grid;
  width: 100%;
  height: 64px;
  background-color: var(--white);
  .nav {
    position: fixed;
    grid-area: nav;
    z-index: 7;

    background-color: var(--white);
    width: 100%;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .closing-on-click {
    grid-area: closing-on-click;
  }
  grid-template-columns: 360px auto;
  grid-template-rows: 64px auto;
  grid-template-areas:
    "nav nav"
    "sidebar closing-on-click";
  .page-target {
    color: var(--yellow-org) !important;
  }
  .menu-shade-background {
    display: none;
    width: 100vw;
    height: 100%;
    position: fixed;
    background-color: var(--cus-shade-for-aside-menu);
    z-index: 5;
  }
  .target-shade {
    display: block;
  }
  svg {
    font-size: 4rem;
    color: var(--blue-ocn);
    position: absolute;
    right: 2rem;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 1100px) {
    svg {
      display: block;
    }
  }
`;function S2(e){setTimeout(()=>{const t=document.querySelector(".homepage-link"),n=document.querySelector(".freight-page-link"),r=document.querySelector(".publish-link"),a=document.querySelector(".about-link"),s=document.querySelector(".support-link"),i=document.querySelector(".profile-link");e==="/"&&(t==null||t.classList.add("page-target"),n==null||n.classList.remove("page-target"),r==null||r.classList.remove("page-target"),a==null||a.classList.remove("page-target"),s==null||s.classList.remove("page-target"),i==null||i.classList.remove("page-target")),e==="/frete_page"&&(n==null||n.classList.add("page-target"),t==null||t.classList.remove("page-target"),r==null||r.classList.remove("page-target"),a==null||a.classList.remove("page-target"),s==null||s.classList.remove("page-target"),i==null||i.classList.remove("page-target")),e==="/create-frete"&&(r==null||r.classList.add("page-target"),t==null||t.classList.remove("page-target"),n==null||n.classList.remove("page-target"),a==null||a.classList.remove("page-target"),s==null||s.classList.remove("page-target"),i==null||i.classList.remove("page-target")),e==="/about_page"&&(a==null||a.classList.add("page-target"),t==null||t.classList.remove("page-target"),n==null||n.classList.remove("page-target"),r==null||r.classList.remove("page-target"),s==null||s.classList.remove("page-target"),i==null||i.classList.remove("page-target")),e==="/suporte_cliente"&&(s==null||s.classList.add("page-target"),t==null||t.classList.remove("page-target"),r==null||r.classList.remove("page-target"),a==null||a.classList.remove("page-target"),i==null||i.classList.remove("page-target"),n==null||n.classList.remove("page-target")),e.toString().split("/")[1]==="client_page"&&(i==null||i.classList.add("page-target"),t==null||t.classList.remove("page-target"),r==null||r.classList.remove("page-target"),a==null||a.classList.remove("page-target"),s==null||s.classList.remove("page-target"),n==null||n.classList.remove("page-target"))})}const k2=T.section`
  height: 100vh;
  background-image: 
  /* linear-gradient(
      130deg,
      var(--color-cus-head) 0%,
      var(--color-cus-head) 50%
    ), */ url("/road-4.jpeg");
  background-position: center;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .first__box-content {
    height: 100%;
    padding: 4rem;
    display: grid;
    position: relative;
    background-color: transparent;
    width: 100%;
    h1,
    h2,
    p,
    .link-plan {
      background-color: var(--white) !important;
      color: var(--grey-900) !important;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      font-size: 3rem;
    }

    h1 {
      font-size: 6rem;
      letter-spacing: 1px;
      stroke: 2px var(--color-cus-head);
      -webkit-text-stroke: 2px var(--yellow-org);

      p,
      .break__limit-para {
        stroke: 0;
        -webkit-text-stroke: 0.5px;
        -webkit-text-fill-color: var(--white);
      }
    }

    color: var(--white);
    .welcome-header {
      font-size: 8rem;
      text-align: center;
      letter-spacing: 2rem;
      background-color: transparent;
      font-weight: 500;
      display: flex;
      place-content: center;
      color: var(--grey-900);
      .on {
        /* font-family: "Supreme", sans-serif; */
        font-family: "Recia", serif;
        font-family: "Telma", cursive;
        font-size: 5rem;
        display: grid;
        place-content: end;
      }
    }
    .sell_content-first-sec {
      margin-top: 5rem;
      padding: 0 10rem;
      /* display: grid;
      .break__limit {
        grid-area: break__limit;
      }
      .plan_infos-first-sec {
        grid-area: plan_infos-first-sec;
      }
      .image-box {
        grid-area: image-box;
      } */
      display: flex;
      flex-direction: column;

      .break__limit {
        .break__limit-para {
          font-size: 2rem;
          font-weight: 200;
          margin-top: 1rem;
        }
      }
      /* .image-box {
        position: absolute;
        right: 10rem;
        display: none;
        top: 0;
        width: 50rem;
        height: 100%;
        width: 100%;
        background-size: cover;
        background: no-repeat;
        border-radius: 20px;
        transition: all 0.3s ease;
      } */
      .image-box:hover {
        border-radius: 3px;
      }
      /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%); */
      h2 {
        font-size: 3rem;
        font-weight: 500;
      }
      .plan_infos-first-sec {
        margin-top: 1rem;
      }
      .break__limit,
      .plan_infos-first-sec {
      }
    }
    .plans_first-sec {
      display: grid;
      text-align: center;
      margin-top: 4rem;
      p {
        margin-top: 4rem;
        font-size: 3rem;
      }
      .plan_first-sec-link {
        font-size: 2rem;
        width: 25rem;
        height: 7.5rem;
        padding: 2.2rem;
        background-color: var(--clr-primary-orange-6);
        color: var(--white);
        place-self: center;
        margin-top: 8rem;
        margin-bottom: 2rem;
      }
    }
  }
  .bounce_animation {
    display: grid;
    margin-top: 4rem;
    position: absolute;
    bottom: -3.7rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .arrow__animation {
    place-self: center;
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    display: grid;
    place-content: center;
    border: transparent;
    animation: bounce 1s infinite;
  }
  .arrow__animation::before,
  .arrow__animation::after {
    content: "";
    width: 2px;
    height: 3rem;
    background-color: #000000;
    border-radius: 30px;
    backface-visibility: hidden;
    margin: -0.49998px;
    position: absolute;
    background-color: var(--white);
    top: 1.25rem;
  }
  .arrow__animation::after {
    transform: rotate(45deg);
    transform-origin: left;
    right: 1.4rem;
  }
  .arrow__animation::before {
    transform: rotate(-45deg);
    transform-origin: right;
    left: 1.4rem;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`,N2=T.section`
  margin-top: 5rem;
  height: 100%;
  display: grid;
  align-content: center;
  .second__box-content {
    grid-template-rows: 6rem 1fr;
    padding: 4rem;

    h1 {
      margin-top: 3rem;
      height: 4rem;
      width: 100%;
      text-align: center;
      font-size: 3rem;
      letter-spacing: 1px;
      display: grid;
      place-content: center;
    }
    .in-line_box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 8rem;
      column-gap: 4rem;
      h1 {
        font-size: 2.3rem;
      }
      .text-eff {
        p {
          font-size: 1.7rem;
          margin-top: 3rem;
          width: 100%;
          padding: 2rem;
          margin: 0 auto;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
        transition: all 0.3s ease;
      }
      .text-eff:hover {
        box-shadow: var(--shadow-3);
      }
    }
  }
`,C2=T.section`
  min-height: 100rem;
  margin-top: 5rem;
  .third-content {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    padding: 0 5rem;
  }
  .third_left-side {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
      margin: 2rem 0 1rem 0;
    }
    p {
      font-size: 1.7rem;
      padding-left: 3px;
    }
    a {
      color: var(--red-org);
    }
  }
  //right side
  .third_right-side {
    margin: 0 auto;
    width: 100%;
    :first-child {
      text-align: center;
      margin-bottom: 5rem;
      font-size: 3rem;
    }
    .card-container {
      height: 40rem;
      .cards {
        position: relative;
        height: 100%;
        .plan-card {
          width: 25rem;
          height: 25rem;
          display: grid;
          place-content: center;
          position: absolute;
          outline-offset: 2rem;
          transition: all 0.3s ease;
          p {
            font-size: 5rem;
            margin-bottom: 2.5rem;
          }
          .plan-desc {
            font-size: 2rem;
            margin-bottom: 0;
          }
        }
        .basic {
          background-color: var(--primary-200);
          left: 38%;
        }
        .basic:hover {
          outline: 1.5rem solid var(--primary-300);
          transform: scale(1.05);
          box-shadow: var(--shadow-4);
          z-index: 10;
        }
        .advanced {
          background-color: var(--red-org);
          left: 10%;
          top: 25%;
        }
        .advanced:hover {
          outline: 1.5rem solid var(--red-org);
          transform: scale(1.05);
          box-shadow: var(--shadow-4);
          z-index: 10;
        }
        .premium {
          background-color: var(--yellow-org);
          top: 40%;
          left: 40%;
        }
        .premium:hover {
          outline: 1.5rem solid var(--yellow-org);
          transform: scale(1.05);
          box-shadow: var(--shadow-4);
          z-index: 10;
        }
      }
    }
  }
`,E2=T.section`
  display: grid;
  align-items: center;
  background-color: #f6f6f6;
  min-height: 90rem;
  margin-top: -10rem;
  .fourth-content {
    h1 {
      text-align: center;
      margin: 5rem 0 5rem 0;
      font-size: 3rem;
    }
    p {
      display: grid;
      place-content: center;
      font-size: 1.7rem;
    }

    .card-explain {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
    }
    .img-container {
      display: grid;
      place-content: center;
      margin-top: 4rem;
      box-shadow: var(--shadow-1);
      width: 25rem;
      height: 25rem;
      padding: 2rem;
      position: relative;
      cursor: pointer;
      p,
      .card-description {
        font-size: 1.3rem;
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s 0.4s ease;
        text-align: center;
      }
      .imgs {
        width: 15rem;
        height: 15rem;
        place-self: center;
        transition: all 0.4s 0.4s ease;
        position: absolute;
      }
    }
    .img-container:hover {
      .card-description {
        visibility: visible;
        opacity: 1;
      }
      .imgs {
        visibility: hidden;
        opacity: 0;
      }
    }
    .target {
      .card-description {
        visibility: visible;
        opacity: 1;
      }
      .imgs {
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`,L2="/truck-svg.svg",T2="/undraw_online_stats_0g94.svg",P2="/undraw_product_explainer_8jbm.svg";function _c(){var e;(e=document.querySelector(".worker-box"))==null||e.classList.add("target"),setTimeout(()=>{var t;(t=document.querySelector(".search-delivery"))==null||t.classList.add("target")},1e3),setTimeout(()=>{var t;(t=document.querySelector(".truck-box"))==null||t.classList.add("target")},2e3),setTimeout(()=>{var t,n,r;(t=document.querySelector(".worker-box"))==null||t.classList.remove("target"),(n=document.querySelector(".search-delivery"))==null||n.classList.remove("target"),(r=document.querySelector(".truck-box"))==null||r.classList.remove("target")},1e3*15)}const $2=T.section`
  background-color: var(--color-cus);
  width: 100vw;
  min-height: 100vh;
  margin-top: -10rem;
  display: grid;
  place-content: center;
  .new-section {
    padding: 5rem;
    .title-container {
      grid-area: heading;
    }
    .text-side {
      grid-area: texts;
      width: 100%;
    }
    .content-right-side {
      grid-area: right-side;
      display: flex;
      row-gap: 3rem;
      gap: 2rem;
    }
    h2,
    p,
    h3,
    a {
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      background-color: var(--white);
      color: transparent;
      letter-spacing: 1px;
    }
    h2,
    p,
    h3 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 8rem;
      background-color: var(--white);
    }
    a {
      color: var(--red-org);
    }
    .title {
      background-color: var(--yellow-org);
    }
    h3 {
      font-size: 2rem;
    }
    .text-side {
      display: flex;
      gap: 2rem;
      .text-1,
      .text-2 {
        width: 100%;
      }

      .small-title {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        text-align: unset;
      }
      p {
        font-size: 1.6rem;
        text-align: unset;
      }
    }
    .box-2,
    .box-1 {
      height: 15rem;
      width: 100%;
      background-color: var(--color-cus-1);
      border-radius: 5px;
      padding: 2rem;
      h2 {
        text-align: unset;
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.4rem;
        text-align: unset;
      }
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--color-cus-2);
      }
    }
  }
`,O2=T.section`
  margin-top: 5rem;
  min-height: 50rem;
  background-color: #f6f6f6;
  .new-section-sec {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    margin-top: 5rem;
    padding: 4rem;
    width: 100%;
    height: 100%;
  }
  .left-sec {
    width: 80%;
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
  .image {
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(
        130deg,
        var(--color-cus-new-sec) 0%,
        var(--color-cus-new-sec) 50%
      ),
      url("/boxes-5.jpeg");
    width: 100%;
    height: 100%;
    border-radius: 9px;
    transition: all 0.3s ease;
    &:hover {
      border-radius: 3px;
    }
  }
`,R2=()=>{const{userData:e}=z(s=>s.userData),t=dr(),n=F(),r=()=>{setTimeout(()=>{const s=document.querySelector(".popup_content-form"),i=document.querySelector(".popup_content-display-form");if(!s||!i)return t("/");s.classList.add("show"),i.classList.add("show_contente")})},a=()=>{setTimeout(()=>{const s=document.querySelector(".popup_content"),i=document.querySelector(".popup_content-display-form-message");if(!s||!i)return t("/");s.classList.add("show"),i.classList.add("show_contente")})};return _.useEffect(()=>{e||n(qe())},[]),o.jsxs(z2,{children:[o.jsxs("div",{className:"set-structure",children:[o.jsx(k2,{id:"top",children:o.jsxs("div",{className:"first__box-content",children:[o.jsx("div",{className:"sell_content-first-sec",children:o.jsxs("div",{className:"text-container",children:[o.jsx("div",{className:"break__limit",children:o.jsxs("h1",{children:["Divulgue seus fretes para todo o Brasil",o.jsx("p",{className:"break__limit-para",children:"Somos a solução para seus problemas de logística"})]})}),o.jsx("div",{className:"plan_infos-first-sec"})]})}),o.jsx("div",{className:"plans_first-sec",children:o.jsx(S,{onClick:()=>{document.getElementById("hook").scrollIntoView({behavior:"smooth",block:"center"})},className:"plan_first-sec-link",children:"Quero conhecer"})}),o.jsx("div",{className:"bounce_animation",children:o.jsx("span",{className:"arrow__animation"})})]})}),o.jsx(N2,{children:o.jsxs("div",{className:"second__box-content",children:[o.jsx("h1",{children:"O QUE OFERECEMOS?"}),o.jsxs("div",{className:"in-line_box",children:[o.jsxs("div",{className:"logistics text-eff",children:[o.jsx("h1",{children:"Logística"}),o.jsx("p",{children:"Acreditamos que a melhor maneira de organizar o processo de logística da sua empresa é facilitando o acesso de entregadores as suas cargas, em poucos cliques o entregador já consegue achar a carga publicada"})]}),o.jsxs("div",{className:"organization text-eff",children:[o.jsx("div",{className:"icon"}),o.jsx("h1",{children:"Organização"}),o.jsx("p",{children:"Se sua empresa precisa de ajuda para organizar o setor de entregas interno, a onFrete tem a solução, site feito com carinho para entender suas necessidades"})]}),o.jsxs("div",{className:"deliveryman text-eff",children:[o.jsx("div",{className:"icon"}),o.jsx("h1",{children:"Entregadores"}),o.jsx("p",{children:"Entregadores tem a opção de escolher a entrega que o melhor atende todo conteúdo é disponível de forma gratuita, escolha o tipo de carga e local que o melhor atende e parta em mais uma aventura"})]})]})]})}),o.jsx(O2,{children:o.jsxs("div",{className:"new-section-sec",children:[o.jsxs("div",{className:"left-sec",children:[o.jsx("h1",{children:"FRETES"}),o.jsx("p",{children:"Crie seus fretes quando quiser, descreva os detalhes da carga contato/localização e pronto, é só o entregador analisar se o veículo corresponde com o que foi descrito e negociar diretamente com você"}),o.jsx("div",{className:"text-1"})]}),o.jsx("div",{className:"right-sec",children:o.jsx("div",{className:"image"})})]})}),o.jsx(E2,{children:o.jsxs("div",{className:"fourth-content",children:[o.jsx("h1",{children:"Nosso processo é simples"}),o.jsxs("div",{className:"card-explain",id:"hook",children:[o.jsxs("div",{className:"img-container worker-box",onClick:()=>_c(),children:[o.jsx("p",{className:"card-description",children:"Entrega postada com os detalhes da localização e veículo compatível"}),o.jsx("img",{src:T2,className:"imgs",alt:"area de trabalho"})]}),o.jsxs("div",{className:"img-container search-delivery",onClick:()=>_c(),children:[o.jsx("p",{className:"card-description",children:"Entregador escolhe o frete que o melhor atende"}),o.jsx("img",{src:P2,className:"imgs",alt:"pequisa por entregas"})]}),o.jsxs("div",{className:"img-container truck-box",onClick:()=>_c(),children:[o.jsx("p",{className:"card-description",children:"Entregador busca o frete e parte em mais uma aventura"}),o.jsx("img",{src:L2,className:"imgs",alt:"caminhão com carga"})]})]})]})}),o.jsx($2,{children:o.jsxs("div",{className:"new-section",children:[o.jsx("div",{className:"title-container",children:o.jsx("h2",{className:"title",children:"Aumente a eficiência do processo de logística da sua empresa"})}),o.jsxs("div",{className:"text-side",children:[o.jsxs("div",{className:"text-1",children:[o.jsx("h2",{className:"small-title",children:"Para o empresário"}),o.jsx("p",{children:"Todos os entregadores do Brasil terão acesso as suas cargas publicadas de forma gratuita, basta o entregador se registra em nosso site"})]}),o.jsxs("div",{className:"text-2",children:[o.jsx("h2",{className:"small-title",children:"Para o entregador"}),o.jsx("p",{children:"Construímos um sistema de filtros para atender qualquer necessidades de busca, em poucos minutos o entregador já consegue encontrar o frete que o melhor atende e negociar diretamente com o empresário"})]})]}),o.jsxs("div",{className:"content-right-side",children:[o.jsxs("div",{className:"box-1",children:[o.jsx("h2",{children:"Contato"}),o.jsxs("p",{children:["Deixe sua"," ",o.jsx(S,{to:`?popup=${er.popup.message}&sessão=home_page`,onClick:a,children:"mensagem"})," ","ou mande um email"," ",o.jsx("a",{href:"mailto:onfrete7@gmail.com",children:"onfrete7@gmail.com"})," "]})]}),o.jsxs("div",{className:"box-2",children:[o.jsx("h2",{children:"Saiba mais"}),o.jsxs("p",{children:["Visite nosso ",o.jsx(S,{to:"/about_page",children:"artigo"})," e de uma olhada no que temos a oferecer com mais detalhes"]})]})]})]})}),o.jsx(C2,{id:"plan-sec",children:o.jsxs("div",{className:"third-content",children:[o.jsxs("div",{className:"third_left-side",children:[o.jsxs("div",{className:"plan plan-basic",children:[o.jsx("h1",{children:"Conheça nossos planos"}),o.jsx("h2",{children:"Plano básico"}),o.jsx("p",{children:"Publique até 17 fretes"})]}),o.jsxs("div",{className:"plan plan-advanced",children:[o.jsx("h2",{children:"Plano avançado"}),o.jsx("p",{children:"Publique até 25 fretes"})]}),o.jsxs("div",{className:"plan plan-premium",children:[o.jsx("h2",{children:"Plano premium"}),o.jsx("p",{children:"Publique até 37 fretes"})]}),o.jsx("div",{className:"plan plan-custom",children:o.jsx("h2",{children:"Planos customizáveis"})}),o.jsxs("p",{style:{marginTop:"2rem"},children:["Comece hoje mesmo a postar seus fretes para todo o Brasil!"," ",o.jsx("br",{})," ",e?o.jsx(S,{className:"popup-link",to:"/produto_assinatura",children:"Assinar"}):o.jsx(S,{className:"popup-link",onClick:r,to:`registrar?popup=${er.popup.singIn}&sessão=home_page`,children:"Registrar-se"})]})]}),o.jsxs("div",{className:"third_right-side",children:[o.jsx("h1",{children:"Quero começar hoje a publicar meus fretes"}),o.jsx("div",{className:"card-container",children:o.jsxs("div",{className:"cards",children:[o.jsxs("div",{className:"plan-card basic",children:[o.jsx("p",{className:"plan-desc",children:"Básico"}),o.jsx("p",{children:"69 R$"})]}),o.jsxs("div",{className:"plan-card advanced",children:[o.jsx("p",{className:"plan-desc",children:"Avançado"}),o.jsx("p",{children:"100 R$"})]}),o.jsxs("div",{className:"plan-card premium",children:[o.jsx("p",{className:"plan-desc",children:"Premium"}),o.jsx("p",{children:"150 R$"})]})]})})]})]})})]}),o.jsx(S,{className:"back-to-top",onClick:()=>{document.getElementById("top").scrollIntoView({behavior:"smooth",block:"start"})},children:"Voltar ao início"})]})},z2=T.main`
  width: 100vw;
  .set-structure {
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto;
    row-gap: 10rem;
  }
  section {
    width: 100%;
  }
  .first__box-content,
  .second__box-content,
  .new-section-sec,
  .fourth-content,
  .new-section,
  .third-content {
    width: 130rem;
    margin: 0 auto;
  }
  @media (max-width: 1380px) {
    .first__box-content,
    .second__box-content,
    .new-section-sec,
    .fourth-content,
    .new-section,
    .third-content {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    .third-content {
      display: block;
      .third_left-side {
        padding-left: 10rem;
        margin-bottom: 5rem;
      }
      .cards {
        margin-left: 10rem;
        .basic {
          left: 35% !important;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .third-content {
      .cards {
        margin-left: 5rem;
      }
    }
  }
  @media (max-width: 800px) {
    .set-structure {
      row-gap: 10rem;
    }
    .first__box-content {
      .sell_content-first-sec {
        padding: 0;
      }
      .break__limit {
        h1 {
          padding: 0;
          font-size: 4rem;
        }
      }
    }
    .second__box-content {
      .in-line_box {
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;
      }
    }
    .new-section-sec {
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
    }
    .fourth-content {
      .card-explain {
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;
      }
    }
    .new-section {
      .text-side {
        flex-direction: column;
      }
      .content-right-side {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 760px) {
    .back-to-top {
      margin-top: 20rem;
    }
    .third_left-side {
      padding-left: 0 !important;
    }
    .third-content {
      .card-container {
        height: 50rem;
      }
      .cards {
        margin-left: 0;
        display: grid;
        justify-items: center;
        .basic {
          left: unset !important;
        }
        .advanced {
          top: 35% !important;
          left: unset !important;
        }
        .premium {
          top: 70% !important;
          left: unset !important;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .break__limit {
      h1 {
        padding: 0;
        font-size: 2rem !important;
        .break__limit-para {
          font-size: 1.5rem !important;
        }
      }
    }
    .second__box-content {
      h1 {
        font-size: 2rem;
      }
      .in-line_box {
        div {
          h1 {
            font-size: 1.7rem;
          }
          p {
            font-size: 1.5rem !important;
          }
        }
      }
    }
    .new-section-sec {
      .left-sec {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
    .fourth-content {
      h1 {
        font-size: 2rem;
      }
    }
    .new-section {
      h2 {
        font-size: 2rem !important;
      }
      p {
        font-size: 1.5rem !important;
      }
    }
    .third-content {
      h1 {
        font-size: 2rem !important;
      }
      .third_right-side {
        h1 {
          margin-top: 5rem;
        }
      }
    }
  }
  color: var(--grey-900);
  a:hover {
    color: var(--red-org);
  }
  .back-to-top {
    display: grid;
    height: 4rem;
    place-content: center;
    font-size: 1.5rem;
    background-color: var(--grey-500);
    color: var(--white);
  }
  .back-to-top:hover {
    color: var(--white);
    background-color: var(--grey-600);
  }
`,A2={singleUser:[],isLoading:!1,users:[]},To=q("admin/crateAdminSession",async(e,t)=>{try{await D.post(`/api/v1/admin/${e}`)}catch(n){throw t.rejectWithValue(n.response.data.msg)}}),jc=q("admin/getAllUsers",async(e,t)=>{try{return(await D(`/api/v1/users/admin-user-route/${t.getState().userData.users.id}`,{signal:e.signal})).data}catch(n){throw t.rejectWithValue(n.response.data.msg)}}),F2=Ut({name:"admin",initialState:A2,reducers:{showLoading:e=>{e.isLoading=!0},hidLoading:e=>{e.isLoading=!1},adminCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},changePage:(e,{payload:t})=>{e.page=t},setHasNextPge:(e,{payload:t})=>{e.hasNextPage=t},setSingleThicket:(e,{payload:t})=>{e.singleUser[0]=t},clearSingleThicket:e=>{e.singleUser=[]}},extraReducers:e=>{e.addCase(To.pending,t=>{t.isLoading=!0}).addCase(To.fulfilled,t=>{t.isLoading=!1}).addCase(To.rejected,t=>{t.isLoading=!1}).addCase(jc.pending,t=>{t.isLoading=!0}).addCase(jc.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.users=n}).addCase(jc.rejected,t=>{t.isLoading=!1})}}),I2=F2.reducer,D2=()=>{var r;const{pathname:e}=Mt(),{userData:t}=z(a=>a.userData),n=F();return y2(e),o.jsx(o.Fragment,{children:o.jsxs(M2,{className:"cliente-aside-content normal-device-client",children:[o.jsx(S,{to:"/client_page",className:"link cliente-profile",children:"Perfil"}),o.jsx(S,{to:"profile",className:"edit-profile-client-side",children:"Editar Perfil"}),o.jsx(S,{to:"freight",onClick:()=>n(Mk()),id:"link",className:"freight-cliente",children:"Fretes"}),o.jsx(S,{className:"historic-cliente",onClick:()=>{n(Dv())},to:"historico-fretes?sessão_do_cliente=historico",id:"link",children:"Histórico"}),o.jsx(S,{to:`pagamentos?sessionId=${((r=t==null?void 0:t.subscriptionID)==null?void 0:r._id)||"nenhum"}&sessão=pagamento`,className:`${(t==null?void 0:t.isDeletede)&&"delete-process"} signature-link`,id:"link",children:"Assinatura"}),t!=null&&t.isDeletede?o.jsx(S,{to:"/client_page/abortar-processo",className:"signature-status",children:"Recuperar conta"}):o.jsx(S,{to:"/client_page/remover-conta",className:"remove-account",children:"Remover conta"}),(t==null?void 0:t.role)==="admin"&&o.jsx(S,{to:"/admin-checkout",onClick:()=>n(To(t._id)),children:"admin"})]})})},M2=T.aside`
  font-size: 1.4rem;
  padding: 3rem 4rem;
  background: var(--white);
  box-shadow: var(--shadow-4);
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
  z-index: 6;
  @media (max-width: 1100px) {
    position: fixed;
    left: 0;
  }
  @media (max-height: 650px) {
    row-gap: 1rem;
  }
  .delete-process,
  .msg-target {
    animation: pulse 4s ease-in-out infinite;
  }
  .msg-target {
    color: var(--yellow-org) !important;
    outline: 3px solid var(--yellow-org);
  }
  @keyframes pulse {
    100% {
      color: var(--red-org);
    }
  }
  .target-navigation {
    color: var(--blue-ocn);
  }
`,U2=({msg:e,index:t})=>o.jsx(B2,{className:`warn_ballon-inp${t}`,children:o.jsx("p",{className:"text__content-onClick",children:e})}),B2=T.div`
  position: absolute;
  display: grid;
  place-content: center;
  visibility: hidden;
  padding: 1rem;
  opacity: 0;
  position: absolute;
  height: 8rem;
  bottom: 4rem;
  right: 52.9rem;
  transition: all 0.3s ease;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    55% 75%,
    50% 100%,
    45% 75%,
    0% 75%
  );
  .text__content-onClick {
    margin-bottom: 2rem;
  }

  .show_the-ballon {
    visibility: visible;
    opacity: 1;
  }
`,Ie=({name:e,value:t,handleChange:n,labelText:r,sorts:a,className:s,holders:i,labelClass:l,id:c,ballon:u,msg:d,index:p,seleClass:m,queryClass:v})=>o.jsxs("div",{className:s||"form-opt",id:c||"form-opt",children:[u&&o.jsx(U2,{msg:d,index:p}),o.jsxs("label",{htmlFor:e,id:"label__from-opt",className:l||"form-label",children:[r||e,":"," "]}),o.jsx("select",{name:e,id:e,value:t,onChange:n,className:`selection inp${p||"-none"} ${m} ${v}`,children:a.map((h,y)=>o.jsx("option",{value:h,className:"options",children:h||i},y))})]}),q2=()=>{const e=F(),{states:t,sortStatus:n,bodyworkSpecial:r,bodyworkClosed:a,bodyworkOpen:s,light:i,medium:l,heavy:c,heavyOpt:u,bodyworkClosedOpt:d,mediumOpt:p,lightOpt:m,bodyworkOpenOpt:v,bodyworkSpecialOpt:h,msg:y,name:w,city:g,colectDate:f,loadType:x}=z(M=>M.allFretes),[b,j]=_.useState(w),[k,N]=_.useState(g),[E,A]=_.useState(f),[$,W]=_.useState(x),G=M=>{M.preventDefault(),e(Tk({name:M.target.name,value:M.target.value,eventType:["notDeboucedReq","Abort"]}))},ne=()=>{e(kk()),j(""),N(""),A(""),W(""),setTimeout(()=>{e(Da())},550)},re=()=>{let M;return se=>{j(se.target.names),N(se.target.city),A(se.target.colect),W(se.target.loadType),clearTimeout(M),M=setTimeout(()=>{e(Sk({name:se.target.name,value:se.target.value,eventType:["debouceReq","Abort"]}))},400)}},de=_.useMemo(()=>re(),[]);return _k(y==null?void 0:y.toString()),setTimeout(()=>{Av()}),o.jsxs(W2,{className:"aside-cnt",children:[o.jsxs("div",{className:"filt",children:[o.jsx("div",{className:"close-container",children:o.jsx("button",{onClick:()=>Kv(!0),className:"close",id:"cl",children:"×"})}),o.jsx("h3",{children:"Filtro"})]}),o.jsxs(Ne,{className:"filter query_for-filter-inputs",children:[o.jsxs("div",{className:"form-box",children:[o.jsx("label",{htmlFor:"name",children:"Por nome"}),o.jsx("input",{type:"search",className:"input inp1",name:"name",autoComplete:"name",value:b,onChange:de,placeholder:"Empresa/Contratante"})]}),o.jsxs("div",{className:"form-box",children:[o.jsx("label",{htmlFor:"city",children:"Cidades"}),o.jsx("input",{type:"search",className:"input inp2",name:"city",value:k,onChange:de,placeholder:"Rio Preto"})]}),o.jsxs("div",{className:"form-box",children:[o.jsx("label",{htmlFor:"colectDate",children:"coleta"}),o.jsx("input",{type:"date",className:"input inp3",name:"colectDate",value:E,onChange:de,placeholder:"data"})]}),o.jsxs("div",{className:"form-box",children:[o.jsx("label",{htmlFor:"loadType",children:"carga"}),o.jsx("input",{type:"search",className:"input inp4",name:"loadType",value:$,onChange:de,placeholder:"tipo de carga"})]}),o.jsx(Ie,{queryClass:"input",name:"sortStatus",value:n,handleChange:G,labelText:"Estado",sorts:t,ballon:!0,msg:y,index:5}),o.jsx("p",{children:"Carrocerias"}),o.jsx(Ie,{queryClass:"input",ballon:!0,msg:y,index:6,name:"bodyworkSpecial",value:r,handleChange:G,labelText:"especiais",sorts:h}),o.jsx(Ie,{queryClass:"input",ballon:!0,msg:y,index:7,name:"bodyworkClosed",value:a,handleChange:G,labelText:"fechada",sorts:d}),o.jsx(Ie,{queryClass:"input",ballon:!0,msg:y,index:8,name:"bodyworkOpen",value:s,handleChange:G,labelText:"abertas",sorts:v}),o.jsx("p",{children:"Tipo de veículos"}),o.jsx(Ie,{queryClass:"input",ballon:!0,msg:y,index:9,name:"light",value:i,handleChange:G,labelText:"leve",sorts:m}),o.jsx(Ie,{queryClass:"input",ballon:!0,msg:y,index:10,name:"medium",value:l,handleChange:G,labelText:"médio",sorts:p}),o.jsx(Ie,{queryClass:"input",ballon:!0,msg:y,index:11,name:"heavy",value:c,handleChange:G,labelText:"pesado",sorts:u}),o.jsx("div",{className:"btn-cnt",children:o.jsx(S,{className:"clear-btn",to:"/frete_page",type:"button",onClick:ne,children:"Limpar"})})]})]})},W2=T.aside`
  position: fixed;
  background-color: var(--white);
  right: 0;
  height: calc(100vh - 70px);
  .form-box {
    position: relative;
  }
  .filt {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    position: unset;
  }
  .filter {
    margin-left: 3px;
    margin-right: 3px;
  }
  label {
    font-size: 1.3rem;
    color: var(--grey-700);
    text-transform: capitalize;
  }
  input,
  select {
    height: 2rem;
  }
  p {
    color: var(--clr-primary-red-6);
    justify-self: center;
    margin-top: 18px;
    font-size: 2rem;
  }
  h3 {
    color: var(--primary-300);
    font-size: 2.3rem;
  }
  select,
  input {
    width: 99%;
    margin: 0 8px 0 0;
  }

  .close-btn {
    display: none;
  }
  .btn-cnt {
    width: 100%;
    display: grid;
    place-content: center;
  }
  .clear-btn,
  a {
    text-align: center;
    display: block;
    width: 8rem;
    padding: 8px;
    font-size: 1.5rem;
    background-color: var(--red-org);
    margin-top: 3rem;
    border-radius: 4px;
    letter-spacing: 2px;
    margin-bottom: 5rem;
  }

  @media (max-height: 875px) {
    overflow-y: scroll;
  }
`,V2=({children:e})=>(new Promise((t,n)=>{fetch("/api/v1/users/single-user").then(r=>{r.status==200?t():n("Não esta autorizado")})}).then().catch(t=>{window.location.assign("/"),console.log(t)}),e),Yv=_.createContext(),H2=()=>{const e=F(),{fretes:t,freteHistoric:n,numOfPage:r,numOfPageHist:a,totalFretesHist:s,totalFretes:i,page:l,pageHistoric:c,isLoading:u,fretePagesEvent:d}=z(h=>h.allFretes),{userData:p,name:m,email:v}=z(h=>h.userData);return _.useEffect(()=>{p||e(qe()),setTimeout(()=>{e(Tn()),e(Dt())})},[l,c]),o.jsx(Yv.Provider,{value:{userData:p,isLoading:u,fretes:t,freteHistoric:n,numOfPage:r,numOfPageHist:a,totalFretes:i,totalFretesHist:s,page:l,name:m,email:v,pageHistoric:c,fretePagesEvent:d},children:o.jsxs(Q2,{children:[o.jsx(D2,{}),o.jsx(Mn,{})]})})},Q2=T.main`
  display: grid;
  position: relative;
  min-height: 100vh;
  gap: 6px;
  grid-template-columns: 30rem 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    //cliente aside
    .normal-device-client {
      z-index: -10;
      visibility: hidden;
      opacity: 0;
      background-color: var(--white);
      width: 30rem;
      transform: translateY(-50rem);
      transition: all 0.3s ease;
    }
    .target-side-cliente-content {
      z-index: 7;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
  gap: 1px;
  .cliente_center-content {
    max-width: 100%;
    overflow-y: scroll;
    height: calc(90vh - 27px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
  .pagination {
    place-self: center;
  }
  .delete_status-on {
    background-color: var(--red-org);
  }
`,pr=()=>_.useContext(Yv),G2=()=>{const e=F();let{name:t,email:n,userData:r,isLoading:a}=pr();const s=u=>{u.preventDefault();const d=u.target.name,p=u.target.value;e(xp({name:d,value:p}))},i=u=>{u.preventDefault(),e(vo())};let l,c;switch(r==null?void 0:r.signaturePlan){case"basic":l="básico",c=17;break;case"advanced":l="avançado",c=25;break;case"premium":l="premium",c=37;break}return o.jsx(K2,{className:"all-cont",children:o.jsxs("div",{className:"all",children:[o.jsx("div",{className:"f1",children:o.jsxs(Ne,{className:"form",onSubmit:i,children:[o.jsx("h4",{className:"title positioning",children:"Modificar perfil"}),o.jsx(K,{type:"name",name:"name",labelText:"Nome",placeholder:"Nome",labelClass:"animated-label",value:t,handleChange:s}),o.jsx(K,{type:"email",name:"email",placeholder:"Email",labelClass:"animated-label",value:n,handleChange:s}),o.jsxs("div",{className:"btn-container",children:[o.jsx("button",{type:"submit",disabled:a,className:"btn",children:a?"Aplicando...":"Aplicar"}),o.jsx(S,{to:"/user/forgot-password",className:"links positioning-pass",onClick:()=>e(hk()),children:"Mudar Senha"}),o.jsx(S,{to:"/client_page/remover-conta",className:"links positioning-rem",children:"Deletar Conta"})]})]})}),o.jsx("div",{className:"f2",children:r!=null&&r.subscriptionID?o.jsxs(o.Fragment,{children:[o.jsx("h4",{className:"title text_title",children:"Plano Atual!"}),o.jsxs("p",{className:"texts",children:["O senhor(a) esta cadastrado no plano"," ",o.jsx(S,{to:`/planos/${l}`,className:"role_display-link",children:l})," ","o que fornece a possibilidade de postar até ",c," ","fretes, lembre-se sempre de excluir os fretes assim que completos, pois eles não serão removidos sozinhos."," ",o.jsx(S,{to:"/client_page/freight",className:"links",children:"Fretes"})]})]}):o.jsxs("h4",{className:"title text_title know__more",children:["conheça nossos"," ",o.jsx(S,{to:"/planos",className:"links",children:"planos"})]})}),o.jsxs("div",{className:"f3",children:[o.jsx("h4",{className:"title text_title",children:"Cargo no Site!"}),o.jsxs("p",{className:"texts",children:[o.jsx("span",{className:"role_display",children:(r==null?void 0:r.role)==="caminhoneiro"?"caminhoneiro/enregador":"empresario"}),(r==null?void 0:r.role)==="caminhoneiro"&&` Quais as vantagens desse cargo? No caso do senhor(a) que é caminhoneiro pode acessar todos os ${o.jsx(S,{to:"/about_page/entregador",children:"fretes"})} postados pelo empresario, sem pagar nada.`,(r==null?void 0:r.role)==="empresario"&&` Quais as vantagens desse cargo? No caso do senhor(a) que é empresario ganha a funcionalidade de postar fretes no site, podendo descrever todos os detalhes
            para o caminhoneiro/entregador.`," ",o.jsx(S,{to:"/about_page/empresario",className:"links",children:"Ver mais"})]})]})]})})},K2=T.div`
  padding: 10rem;

  .title {
    color: var(--yellow-org);
    font-size: 1.6rem;
  }

  .know__more {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
  .text_title {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .texts {
    color: var(--grey-700);
    font-size: 1.4rem;
  }
  .links {
    color: var(--red-org);
    font-size: 1.5rem;
  }
  .btn-container {
    :not(:first-child) {
      font-size: 1.1rem;
      position: absolute;
      margin-right: 3rem;
      margin-left: 3rem;
      bottom: 21.8rem;
      right: 7rem;
    }
    :not(:first-child, :last-child) {
      right: 15rem;
    }
  }
  label {
    color: var(--grey-700);
    font-size: 1.6rem;
  }
  .role_display {
    text-transform: capitalize;
    color: var(--blue-ocn);
    text-transform: capitalize;
  }
  .role_display-link {
    text-transform: capitalize;
    color: var(--red-org);
    text-transform: capitalize;
  }
  .all {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: grid;
    justify-content: center;
  }
  .f1 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .form {
    position: relative;
    transition: none;
    border-radius: 3px;
    margin: 2.5px 0 0 2.5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    width: 400px;
    height: 450px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-box {
      width: 90%;
      margin-bottom: 2rem;
    }
    input {
      height: 3rem;
      width: 100%;
      margin: 0;
    }
    .btn-container {
      display: flex;
      margin-top: 3rem;
      align-items: center;
      .btn {
        background: var(--clr-primary-orange-3);
        color: var(--grey-700);
        border-radius: 3px;
        letter-spacing: 1px;
        margin-top: 3rem;
        width: 8rem;
        height: 4rem;
        font-size: 1.5rem;
      }
    }
    .positioning {
      position: absolute;
      top: 50px;
    }
  }
  @media (max-width: 600px) {
    padding: 15rem 0;

    width: 100vw;

    .all {
      width: 100vw;
      .f1 {
        .form {
          width: 100vw;
        }
      }
    }
  }
`,Y2="/assets/not-found-b9d8cb5b.svg",X2=()=>o.jsxs(J2,{children:[o.jsx("img",{src:Y2,alt:"not found"}),o.jsx("h1",{children:"404"}),o.jsx("p",{children:"Não conseguimos encontrar a rota solicitada"}),o.jsx(S,{to:"/",children:"Pagina Inicial"})]}),J2=T.main`
  background: var(--white);
  height: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  h1 {
    color: var(--grey-900);
    font-size: 5rem;
    position: absolute;
  }
  p {
    color: var(--primary-blue-700);
    font-size: 2rem;
    position: absolute;
    bottom: 350px;
  }
  a {
    color: var(--red-org);
    position: absolute;
    bottom: 325px;
    font-size: 2.5rem;
  }
`,We=e=>[new Date(e)].toLocaleString();function Z2(e){const t=document.querySelectorAll(".support-forms");e.split(",").map((s,i)=>{if(s==="Informe o email"&&(i=1),s==="Mínimo 6 caracteres"&&(i=2),s==="Coloque uma mensagem"&&(i=3),s!=="Tickets só pode ser enviados duas horas depois do envio anterior")return t[0][i].classList.add("target"),setTimeout(()=>{t[0][i].classList.remove("target")},2e3),s});let r="";if(!(e!=null&&e.match(",")))return r=e;let a=e==null?void 0:e.match(",").index;return r=e==null?void 0:e.slice(0,a),r}function eN(e){const t=document.querySelectorAll(".forms__popup-message");e.split(",").map((s,i)=>(s==="Informe o nome"&&(i=0),s==="Informe o email"&&(i=1),s==="Mínimo 6 caracteres"&&(i=2),s==="Envie-nos uma mensagem"&&(i=3),t[0][i].classList.add("target"),setTimeout(()=>{t[0][i].classList.remove("target")},2e3),s));let r="";if(!(e!=null&&e.match(",")))return r=e;let a=e==null?void 0:e.match(",").index;return r=e==null?void 0:e.slice(0,a),r}const fs=new URLSearchParams(window.location.search),tN=async(e,t)=>{const{deleteArray:n}=t.getState().support;try{n.map(async a=>await D.delete(`/api/v1/support/support-tickets/${fs.get("ref")}/delete-many?item=${a.id}`))[0].then(a=>{ks({eventType:"close"}),t.dispatch(Fr({signal:"refuel data"})),O.success(a.data.msg)}).catch(a=>console.log(a))}catch(r){throw t.rejectWithValue(r.response.status)}},nN=async(e,t)=>{try{const n=await D.delete(`/api/v1/support/${fs.get("ref")}?item=${fs.get("item")}`);return n.status===200&&t.dispatch(Fr({signal:"refuel data"})),n.data.msg}catch(n){throw t.rejectWithValue(n.response.status)}},rN=async(e,t)=>{const n=new URLSearchParams(window.location.search);e.isOpen=n.get("isOpen")==="true";try{const r=await D.patch(`/api/v1/support/${n.get("ref")}?item=${n.get("item")}`,e);if(r.status===201)return r.data}catch(r){throw t.rejectWithValue(r.response.status)}},aN=async(e,t)=>{try{const{userData:n}=t.getState().userData,{data:r}=await D(`/api/v1/support/${n==null?void 0:n._id}`);return r}catch(n){throw t.rejectWithValue(n.response.status)}},sN=async(e,t)=>{const{page:n}=t.getState().support;try{if(e.signal==="refuel data"){t.dispatch(fN());const{data:a}=await D(`/api/v1/support/support-tickets/${fs.get("ref").toString()}?page=1`);return a}const{data:r}=await D(`/api/v1/support/support-tickets/${fs.get("ref").toString()}?page=${n}`,{signal:e.signal});return r}catch(r){throw t.rejectWithValue(r.response.data.msg)}},oN=async(e,t)=>{const{userData:n}=t.getState().userData;try{return(await D.post(`/api/v1/support/start-support/${n._id}`,e)).data}catch(r){return t.rejectWithValue(r.response.data)}},iN={supportEnum:Object.values(Rf),supportOpt:Rf.others,phone:"",email:"",message:"",isOpen:"",conclusion:"",status:"",suggestData:"",msg:"",support:[],supportTicket:[],deleteArray:[],singleTicket:[],userProfileSupTicket:[],isLoading:!1,hasNextPage:!1,btnLoading:!1,page:1},Po=q("support/supportPost",oN),Fr=q("support/getSupportTickets",sN),Ua=q("support/getSingleSupportTicket",aN),$o=q("support/editSupportTicket",rN),Oo=q("support/deleteSingleTicket",nN),lN=q("support/deleteMany",tN),Xv=Ut({name:"support",initialState:iN,reducers:{supportDataCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},changePage:(e,{payload:t})=>{e.page=t},setHasNextPge:(e,{payload:t})=>{e.hasNextPage=t},setSingleThicket:(e,{payload:t})=>{e.singleTicket[0]=t;let n=new URL(window.location.href);n.searchParams.set("isOpen",`${t.isOpen}`),window.history.pushState({path:n.href},"",n.href)},clearSingleThicket:e=>{e.singleTicket=[]},clearThicketArray:e=>{e.support=[]},populateDeleteArray:(e,{payload:t})=>{t.check&&e.deleteArray.push(t),t.check||e.deleteArray.filter((n,r)=>{if(n.id===t.id)return e.deleteArray[r]={}})}},extraReducers:e=>{e.addCase(Po.pending,t=>{t.isLoading=!0}).addCase(Po.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n.msg)}).addCase(Po.rejected,(t,{payload:n})=>{var r;if(t.isLoading=!1,console.log(n),!((r=n.msg)!=null&&r.match(",")))O.warning(n.msg);else{let a=Z2(n.msg);O.warning(a)}}).addCase(Fr.pending,t=>{t.isLoading=!0}).addCase(Fr.fulfilled,(t,{payload:n})=>{t.isLoading=!1,n==null||n.support.forEach(r=>(t.support.unshift(r),r)),n.support.length&&(t.hasNextPage=!0)}).addCase(Fr.rejected,t=>{t.isLoading=!1}).addCase(Ua.pending,t=>{t.isLoading=!0}).addCase(Ua.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.userProfileSupTicket=n.support}).addCase(Ua.rejected,t=>{t.isLoading=!1}).addCase($o.pending,t=>{t.btnLoading=!0}).addCase($o.fulfilled,(t,{payload:n})=>{t.btnLoading=!1,t.support.filter((r,a)=>{r._id===n.message._id&&(t.support[a]=n.message)})}).addCase($o.rejected,t=>{t.btnLoading=!1}).addCase(Oo.pending,t=>{t.btnLoading=!0}).addCase(Oo.fulfilled,(t,{payload:n})=>{t.btnLoading=!1,n==="ok!"&&(t.supportTicket=[]),O.success(n)}).addCase(Oo.rejected,t=>{t.btnLoading=!1})}}),{supportDataCollector:Jv,changePage:cN,setHasNextPge:uN,populateDeleteArray:dN,setSingleThicket:pN,clearSingleThicket:mN,clearThicketArray:fN}=Xv.actions,hN=Xv.reducer,gN=({link:e})=>o.jsxs(o.Fragment,{children:["Olá, aparentemente o senhor(a) já tem uma inscrição ativa, para conseguirmos modificar o plano atual peço que vá até esse"," ",o.jsx(S,{className:"link__for_update-sub",to:e,children:"link"})]}),wp=T.div`
  .popup_content,
  .popup_content-links,
  .popup_content-form,
  .popup_content-actions,
  .popup_content-admin-link {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    /* display: none; */
    z-index: 9999;
    transition: all 0.3s;
  }

  .popup_content-display-actions-admin-link,
  .popup_content-display-form,
  .popup_content-display-links,
  .popup_content-display-form-message {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    /* display: none; */
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
  }
  .popup_content-display-form,
  .popup_content-display-form-message {
    place-self: center;
    height: 35rem;
    width: 50%;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .popup_content-display-form-message {
    height: 50rem;
    box-shadow: var(--shadow-cus-white);
  }
  .popup_content-display-links {
    justify-self: center;
    margin-top: 20%;
    width: 30%;
    height: 20rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .popup_content-display-actions {
    justify-self: center;
    margin-top: 20%;
    width: 30%;
    height: 20rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .show {
    visibility: visible;
    opacity: 1;
    /* display: grid; */
  }
  .show_contente {
    visibility: visible;
    /* display: block; */
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 900px) {
    .popup_content-display-form,
    .popup_content-display-links,
    .popup_content-display-form-message {
      width: 100%;
    }
  }

  //forms structure
  .forms__content {
    height: 100%;
    padding: 5rem;
    position: relative;

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
    }
    .input__container {
      :first-child {
        height: 3.7rem;
        align-items: center;
      }
      .form-box {
        display: grid;
        grid-template-columns: 0.3fr 1fr;
        align-items: center;
        .check_stops {
          height: 2rem;
          width: 2rem;
          margin-left: 8px;
        }
        input {
          width: 20rem;
        }
        label {
          align-self: center;
          font-size: 1.4rem;
          padding: 9px;
        }
      }
    }
    .msg {
      display: grid;
      text-align: center;
      #text {
        justify-self: center;
        width: 60%;
      }
    }
    .button {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      .submit_btn {
        width: 14rem;
        height: 4rem;
        border: 3px;
        background-color: var(--primary-300);
        font-size: 2rem;
      }
    }
  }

  //links structure

  .popup__links-container {
    height: 100%;
    position: relative;
    display: grid;
    padding: 1rem;
    text-align: center;
    .content__description {
      place-self: center;
      font-size: 1.7rem;
      font-weight: 200;
      letter-spacing: 1px;
    }
    .content__description-text {
    }
    .content__description-link {
    }
    .link__for_update-sub {
      color: var(--red-org);
      text-transform: capitalize;
      letter-spacing: 1px;
    }
    #cl {
      position: absolute;
      right: 5px;
      font-size: 3.2rem;
    }
  }
  .action-description {
    text-align: center;
    margin-bottom: 4rem;
  }
`,Ku=new URLSearchParams(window.location.search),vN=async(e,t)=>{const{deleteArray:n}=t.getState().message;n.map(async a=>await D.delete(`/api/v1/message/${Ku.get("ref").toString()}?item=${a.id}`))[0].then(a=>{ks({eventType:"close"}),O.success(a.data.msg),t.dispatch(Ir({signal:"refuel"}))}).catch(a=>console.log(a))},yN=async(e,t)=>{const n=new URLSearchParams(window.location.search);try{(await D.delete(`/api/v1/message/${n.get("ref").toString()}?item=${n.get("item")}`)).status===200&&t.dispatch(Ir({signal:"refuel"}))}catch(r){throw t.rejectWithValue(r.response.data.msg)}},xN=async(e,t)=>{const n=new URLSearchParams(window.location.search);try{return(await D(`/api/v1/message/${n.get("ref").toString()}?item=${n.get("item")}`)).data}catch(r){throw t.rejectWithValue(r.response.data.msg)}},bN=async(e,t)=>{try{if(e.signal==="refuel"){t.dispatch(EN());const a=await D(`/api/v1/message/all-messages/${Ku.get("ref").toString()}?page=1`);return t.dispatch(ey()),a.data}const{page:n}=t.getState().message;return(await D(`/api/v1/message/all-messages/${Ku.get("ref").toString()}?page=${n}`,{signal:e.signal})).data}catch(n){throw t.rejectWithValue(n.response.data.msg)}},wN=async(e,t)=>{let n={};const{phone:r,sendMessage:a,name:s,email:i}=t.getState().message;n={...n,phone:r,sendMessage:a,name:s,email:i};try{return(await D.post("/api/v1/message/send-message",n)).data}catch(l){throw t.rejectWithValue(l.response.data.msg)}},_N={phone:"",email:"",sendMessage:"",name:"",msg:"",message:[],messageArray:[],deleteArray:[],singleMessage:[],isLoading:!1,hasNextPage:!1,btnLoading:!1,page:1,totalMessage:1},Ro=q("message/createMessage",wN),Ir=q("message/getAllMessages",bN),Sc=q("message/getSingleMessage",xN),zo=q("message/deleteSingleMessage",yN),Ao=q("message/deleteManyMessages",vN),Zv=Ut({name:"message",initialState:_N,reducers:{suportDataCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},changePage:(e,{payload:t})=>{e.page=t},handleChanges:(e,{payload:{name:t,value:n}})=>{e[t]=n},setHasNextPge:(e,{payload:t})=>{e.hasNextPage=t},setSingleMessage:(e,{payload:t})=>{e.singleMessage[0]=t},clearSingleMessage:e=>{e.singleMessage=[]},clearMessageArray:e=>{e.message=[]},populateDeleteArray:(e,{payload:t})=>{t.check&&e.deleteArray.push(t),t.check||e.deleteArray.filter((n,r)=>{if(n.id===t.id)return e.deleteArray[r]={}})}},extraReducers:e=>{e.addCase(Ro.pending,t=>{t.isLoading=!0}).addCase(Ro.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n.msg)}).addCase(Ro.rejected,(t,{payload:n})=>{t.isLoading=!1;let r=eN(n);O.warning(r)}).addCase(Ir.pending,t=>{t.isLoading=!0}).addCase(Ir.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.totalMessage=n.totalMessage,n==null||n.message.forEach(r=>(t.message.unshift(r),r)),n.message.length&&(t.hasNextPage=!0)}).addCase(Ir.rejected,t=>{t.isLoading=!1}).addCase(zo.pending,t=>{t.isLoading=!0}).addCase(zo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n)}).addCase(zo.rejected,(t,{payload:n})=>{t.isLoading=!1,O.success(n)}).addCase(Sc.pending,t=>{t.isLoading=!0}).addCase(Sc.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n)}).addCase(Sc.rejected,(t,{payload:n})=>{t.isLoading=!1,O.success(n)}).addCase(Ao.pending,t=>{t.isLoading=!0}).addCase(Ao.fulfilled,(t,{payload:n})=>{t.isLoading=!1,O.success(n)}).addCase(Ao.rejected,(t,{payload:n})=>{t.isLoading=!1,O.success(n)})}}),{suportDataCollector:Z5,changePage:jN,setHasNextPge:SN,populateDeleteArray:kN,handleChanges:NN,setSingleMessage:CN,clearSingleMessage:ey,clearMessageArray:EN}=Zv.actions,LN=Zv.reducer,TN=()=>o.jsx(PN,{className:"unset__animation",children:o.jsx("div",{className:"wrapper",children:o.jsx("span",{className:"check-mark"})})}),PN=T.div`
  position: absolute;
  display: none;
  place-self: center;
  place-content: center;
  height: 100%;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .check-mark {
    width: 2rem;
    height: 2rem;
    position: relative;
    position: absolute;
    display: grid;
    place-content: center;
    border: 1px solid var(--white);
    border-radius: 50%;
    z-index: 5;
    animation: slide-check 3s ease;
    &::before {
      content: "";
      width: 2rem;
      height: 2rem;
      border: 1px solid white;
      border-radius: 50%;
      background-color: #7ac142;
      animation: slide-check-back 3s ease;
    }
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      color: white;
      background: var(--white);
      clip-path: polygon(
        21% 44.5%,
        41% 65%,
        78% 33%,
        84% 40%,
        40% 78%,
        14.5% 51%
      );
    }
  }

  @keyframes slide-check {
    0% {
      transform: translateX(-300px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide-check-back {
    0% {
      transform: translateX(300px);
      opacity: 0;
    }
    70% {
      transform: translateX(100px);
      opacity: 0;
    }
    90% {
      transform: translateX(10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,$N=e=>{var t,n,r,a;(n=(t=document.querySelector(".request__animations-animate-popup"))==null?void 0:t.classList)==null||n.add("request__animations-animate-popup-spin"),(a=(r=document.querySelector(".animated__btn-popup"))==null?void 0:r.classList)==null||a.add("set-colum-popup")},ON=()=>{var e,t,n,r,a,s;(t=(e=document.querySelector(".btn_text-popup"))==null?void 0:e.classList)==null||t.add("submit__succeeded-popup"),(r=(n=document.querySelector(".request__animations-animate-popup"))==null?void 0:n.classList)==null||r.add("submit__succeeded-popup"),(s=(a=document.querySelector(".unset__animation-popup"))==null?void 0:a.classList)==null||s.add("set_animation-on-success-popup")},RN=({dispatch:e})=>{setTimeout(()=>{var t,n,r,a,s,i,l,c,u,d;(n=(t=document.querySelector(".unset__animation-popup"))==null?void 0:t.classList)==null||n.remove("set_animation-on-success-popup"),(a=(r=document.querySelector(".btn_text-popup"))==null?void 0:r.classList)==null||a.remove("submit__succeeded-popup"),(i=(s=document.querySelector(".request__animations-animate-popup"))==null?void 0:s.classList)==null||i.remove("submit__succeeded-popup"),(c=(l=document.querySelector(".request__animations-animate-popup"))==null?void 0:l.classList)==null||c.remove("request__animations-animate-popup-spin"),(d=(u=document.querySelector(".animated__btn-popup"))==null?void 0:u.classList)==null||d.remove("set-colum-popup"),e(clearMsgAndloadingState())},1e3*5)},Yu=({btnBorder:e,type:t,text:n,loadingText:r,handleClick:a,loading:s,width:i,height:l,margin:c,backgroundColor:u,btn_background:d,givemeCheckMark:p,msg:m})=>{const v=F();return a==="submitType"&&(a=()=>{}),m==="success!"&&(ON(),RN({dispatch:v})),$N(),o.jsx(zN,{className:"btn__animated-content-popup",children:o.jsxs("button",{className:"animated__btn-popup",type:t,style:{minWidth:i,height:l,margin:c,backgroundColor:u,border:e},disabled:s,onClick:a,children:[o.jsx("div",{style:{background:d},className:"btn__background-popup"}),p&&o.jsx(TN,{}),o.jsx("p",{className:"btn_text-popup",children:s?`${r}...`:n}),o.jsx("span",{className:"request__animations-animate-popup"})]})})},zN=T.div`
  position: absolute;
  position: relative;
  display: grid;
  .request__animations-animate-popup {
    display: none;
  }

  .request__animations-animate-popup-spin {
    animation: spin 1s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
  .animated__btn-popup {
    display: grid;
    padding: 0 1rem 0 1rem;
    overflow: hidden;
    backface-visibility: hidden;
    position: relative;
    grid-template-columns: auto unset;
    border: 1px solid var(--primary-blue-500);
    place-self: center;
    background: var(--primary-blue-500);
    border-radius: 9px;
    transition: all 0.1s ease-in-out;
    box-shadow: 0 1rem 5px rgba(0, 0, 0, 0.2);
    .btn_text-popup {
      margin-top: 0;
      letter-spacing: 2px;
      place-self: center;
      color: var(--white);
    }
    .submit__succeeded-popup {
      visibility: hidden;
      opacity: 0;
    }
  }
  .set-colum-popup {
    grid-template-columns: auto auto;
  }
  .set_animation-on-success-popup {
    display: grid;
  }
  .animated__btn-popup:hover {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(1.007);
  }
  .animated__btn-popup:active {
    transform: scale(1);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  }

  .request__animations-animate-popup-spin {
    display: block;
    margin: auto;
    overflow: hidden;
    backface-visibility: hidden;
    border: 3px solid var(--white);
    border-radius: 50%;
    border-top: 3px solid var(--grey-400);
    width: 2rem;
    height: 2rem;
  }
  .btn__background-popup {
    background: linear-gradient(
      to right,
      rgba(0, 116, 212, 0) 0%,
      rgb(82, 132, 194) 50%,
      rgba(0, 116, 212, 0) 100%
    );
    z-index: 10000;
    position: absolute;
    width: 10rem;
    height: 100%;
    animation: silver-slide 3s infinite ease;
    opacity: 0.5;
    @keyframes silver-slide {
      0% {
        transform: translateX(-700px);
      }
      100% {
        transform: translateX(700px);
      }
    }
  }
`,AN=()=>{const e=F(),t=dr(),{phone:n,email:r,sendMessage:a,name:s,isLoading:i}=z(u=>u.message),l=u=>{e(NN({name:u.target.name,value:u.target.value}))},c=u=>{u.preventDefault(),e(Ro())};return o.jsx(wp,{className:"message-popup",children:o.jsx("div",{className:"popup_content",children:o.jsx("div",{className:"popup_content-display-form-message",children:o.jsxs(FN,{children:[o.jsx(S,{type:"button",onClick:()=>{var u,d;(u=document.querySelector(".popup_content").classList)==null||u.remove("show"),(d=document.querySelector(".popup_content-display-form-message"))==null||d.classList.remove("show_contente"),setTimeout(()=>{t(-2)},500)},className:"close",id:"cl",children:"×"}),o.jsxs(Ne,{className:"forms__popup-message",onSubmit:c,children:[o.jsx(K,{type:"name",name:"name",autocorrect:"off",inputmode:"name",spellcheck:"false",ariaInvalid:"false",autoComplete:"name",labelText:"Nome",labelClass:"animated-label",placeholder:"Entre com seu nome",inputId:"message",value:s,handleChange:l}),o.jsx(K,{type:"email",placeholder:"luiz_exemplo@gmail.com",inputId:"message",name:"email",labelText:"Email",autoComplete:"off",autocorrect:"off",inputmode:"email",spellcheck:"false",ariaInvalid:"false",min:6,labelClass:"animated-label",value:r,handleChange:l}),o.jsx(K,{type:"tel",name:"phone",autoComplete:"tel",inputId:"message",value:n,labelText:"telefone",labelClass:"animated-label",handleChange:l,placeholder:"(99)99999-9999"}),o.jsxs("div",{className:"text-box",children:[o.jsx("p",{children:"Mensagem"}),o.jsx("textarea",{name:"sendMessage",className:"input",onChange:l,defaultValue:a})]}),o.jsx(Yu,{handleClick:"submitType",loading:i,loadingText:"Processando",text:"Enviar",type:"submit",width:"20rem",height:"5rem",margin:"5rem 0 0 0",btnBorder:"transparent",backgroundColor:"var(--primary-300)",btn_background:"var(--primary-200)"})]})]})})})})},FN=T.div`
  display: grid;
  width: 100%;
  .forms__popup-message {
    width: 100%;
    display: grid;
  }
  .form-box,
  .text-box {
    display: grid;
    width: 50%;
    margin: 0 auto;
    label {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 3rem;
    }
    .animated-labe,
    #label {
      display: none;
    }
    input {
      width: 100%;
      margin: 0;
      margin-top: 2rem;
    }
  }
  .text-box {
    width: 90%;
    textarea {
      height: 10rem;
    }
  }
  button {
    font-size: 2rem;
  }
  .target {
    background-color: var(--red-light);
  }
`,IN=()=>{const e=()=>{const t=document.querySelector("body").getBoundingClientRect(),n=document.querySelector(".signature-link");setTimeout(()=>{n==null||n.classList.add("msg-target"),t.width<1100&&Ot(!0,!0)},700),setTimeout(()=>{n==null||n.classList.remove("msg-target")},1e4),Gu(!1)};return _.useEffect(()=>{setTimeout(()=>{let t=new URL(window.location.href);t.searchParams.delete("assinatura"),window.history.pushState({path:t.href},"",t)},1e3)},[]),o.jsx(DN,{children:o.jsx("div",{className:"popup_content-update-success",children:o.jsxs("div",{className:"popup_content-action-update-success",children:[o.jsx("button",{type:"button",onClick:()=>{Gu(!1)},className:"close",id:"cl",children:"×"}),o.jsxs("h3",{className:"action-description",children:["Tudo certo! Caso o senhor(a) queira conferir os status da assinatura"," ",o.jsx(S,{onClick:e,className:"not-position",children:"ir"})]})]})})})},DN=T.div`
  .popup_content-update-success {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-action-update-success {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 35rem;
    height: 15rem;
    background-color: var(--white);
    text-align: center;
    padding: 5rem;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-success {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }

  .not-position {
    position: unset;
  }
`,MN=({userData:e})=>o.jsx(UN,{children:o.jsx("div",{className:"popup_content-update-warning",children:o.jsxs("div",{className:"popup_content-action-update-warning",children:[o.jsx("button",{type:"button",onClick:()=>{Wv(!1)},className:"close",id:"cl",children:"×"}),o.jsxs("h3",{className:"action-description",children:["Ola ",e==null?void 0:e.name," você já esta registrado neste plano! Conheça nossos outros planos caso o senhor(a) precise de um upgrade."]})]})})}),UN=T.div`
  .popup_content-update-warning {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-action-update-warning {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 50%;
    height: 50%;
    background-color: var(--white);
    text-align: center;
    padding: 5rem;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-success {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }

  .not-position {
    position: unset;
  }
`,BN=({link:e})=>{const t=dr();return o.jsxs("div",{className:"popup__links-container",children:[o.jsx(S,{type:"button",onClick:()=>{document.querySelector(".popup_content").classList.remove("show"),document.querySelector(".popup_content-display-links").classList.remove("show_contente"),setTimeout(()=>{t("/produto_assinatura")},500)},className:"close",id:"cl",children:"×"}),o.jsx("div",{className:"content__description",children:o.jsx(gN,{link:e})})]})},qN={name:"",email:"",password:"",isMember:!0},WN=()=>{const e=F(),{isLoading:t}=z(l=>l.user),[n,r]=_.useState(qN),a=dr(),s=l=>{const c=l.target.name,u=l.target.value;r({...n,[c]:u})},i=l=>{l.preventDefault();const c=new RegExp(/^\S+@\S+\.\S+$/),{name:u,email:d,password:p,isMember:m}=n;if(!d||!p||!u&&!m){O.warning("preencha todos os campos");return}if(!c.test(d)){O.warn('Parece que seu email esta faltando os caracteres base, confere o @ ou ".com"');return}if(m){e(Ia({email:d,password:p,eventType:"singIn popup"}));return}e(Fa({name:u,email:d,password:p}))};return o.jsx(wp,{className:"targ sing-in-popup",children:o.jsx("div",{className:"popup_content-form",children:o.jsx("div",{className:"popup_content-display-form",children:o.jsx(VN,{children:o.jsxs(Ne,{className:"forms__popup-singin",onSubmit:i,children:[o.jsx(S,{type:"button",onClick:()=>{document.querySelector(".popup_content-form").classList.remove("show"),document.querySelector(".popup_content-display-form").classList.remove("show_contente"),setTimeout(()=>{a(-2)},500)},className:"close",id:"cl",children:"×"}),o.jsx("h4",{className:"singin_description"}),o.jsxs("div",{className:"inputs",children:[!n.isMember&&o.jsx(K,{type:"name",name:"name",inputId:"singIn",autoComplete:"on",labelText:"Nome",labelClass:"animated-label",placeholder:"Entre com seu nome",value:n.name,handleChange:s}),o.jsx(K,{type:"email",placeholder:"luiz_exemplo@gmail.com",inputId:"singIn",name:"email",autoComplete:"off",autocorrect:"off",inputmode:"email",spellcheck:"false",ariaInvalid:"false",min:6,labelText:"Email",labelClass:"animated-label",value:n.email,handleChange:s}),o.jsx(K,{type:"password",min:{min:8},name:"password",className:"password-input",inputId:"singIn",labelText:"Senha",labelClass:"animated-label",autoComplete:"off",placeholder:"Senha",value:n.password,handleChange:s})]}),o.jsxs("div",{className:"btns-container",children:[n.isMember?o.jsx(Yu,{handleClick:"submitType",loading:t,loadingText:"Processando",text:"Entrar",type:"submit",width:"20rem",height:"5rem",margin:"",btnBorder:"transparent",backgroundColor:"var(--primary-300)",btn_background:"var(--primary-200)"}):o.jsx(Yu,{handleClick:"submitType",loading:t,loadingText:"Processando",text:"Registrar-se",type:"submit",width:"20rem",height:"5rem",margin:"",btnBorder:"transparent",backgroundColor:"var(--primary-300)",btn_background:"var(--primary-200)"}),n.isMember?o.jsx(S,{to:"/userData/forgot-password",children:"Trocar senha"}):null,o.jsxs("p",{className:"already_user",children:["Ja possui conta?"," ",o.jsx("button",{className:"switch-status",onClick:()=>r({...n,isMember:!n.isMember}),type:"button",children:n.isMember?"Registrar-se":"Entrar"})]})]})]})})})})})},VN=T.div`
  height: 50rem;
  background-color: var(--grey-50);
  .forms__popup-singin {
    position: relative;
    position: relative;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.9fr;
    .close {
      position: absolute;
      right: 5px;
      top: 5px;
    }
    h4 {
      position: absolute;
      top: 2rem;
      font-size: 1.4rem;
      left: 50%;
      transform: translate(-50%);
    }
    label {
      display: none;
    }
    input {
      width: 100%;
      height: 4rem;
    }
    .inputs {
      margin: 0 auto;
      padding: 0 1rem;
      padding-top: 9rem;
      width: 70%;
    }
    .btns-container {
      margin: 0 auto;
      width: 80%;
      padding: 6rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;

      a {
        position: absolute;
        top: 24rem;
        right: 20rem;
        font-size: 1.2rem;
        color: var(--red-org);
      }
      .already_user {
        position: absolute;
        font-size: 1.2rem;
        bottom: 2rem;
        right: 5rem;
        button {
          background-color: transparent;
          border: transparent;
          font-size: 1.2rem;
          color: var(--red-org);
        }
      }
    }
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`,HN=()=>{var d,p,m,v,h;const e=new URLSearchParams(window.location.search),t=F(),{userData:n,totalFretes:r,fretes:a}=pr(),{userDataLoading:s}=z(y=>y.userData),{userProfileSupTicket:i,isLoading:l}=z(y=>y.support);let c=0;switch(n==null?void 0:n.signaturePlan){case"basic":c=17;break;case"advanced":c=25;break;case"premium":c=37;break}let u=We((d=a[0])==null?void 0:d.createdAt);return i!=null&&i.isOpen&&((p=document.querySelector(".status"))==null||p.classList.add("target-status")),(m=i==null?void 0:i.sessionChanges)!=null&&m.length&&((v=document.querySelector(".ticket-container"))==null||v.classList.add("flex")),e.get("assinatura")==="atualizada"&&Gu(!0),s?o.jsx("div",{className:"loader"}):o.jsxs(QN,{children:[e.get("assinatura")==="atualizada"&&o.jsx(IN,{}),o.jsxs("div",{className:"user_content",children:[o.jsx("div",{className:"user-name",children:o.jsxs("h2",{className:"heading_text-user no-border",children:[n==null?void 0:n.name," ",o.jsx("br",{})," ",o.jsx(S,{className:"mod-credentials",to:"/client_page/profile",children:"alterar"})," "]})}),o.jsx("div",{className:"user-email",children:o.jsxs("h2",{className:"heading_text-user",children:[n==null?void 0:n.email," ",o.jsx("br",{})," ",o.jsx(S,{className:"mod-credentials",to:"/client_page/profile",children:"alterar"})," "]})}),(n==null?void 0:n.isDeletede)&&o.jsxs("div",{className:"user-delete-status",children:[o.jsx("h1",{className:"heading_text-user",children:"Aviso"}),o.jsxs("p",{children:["Por favor, leia esse pequeno"," ",o.jsx(S,{to:"/about_page/cancelamento-status",children:"artigo"})," antes de qualquer ação"]})]}),o.jsxs("div",{className:"publish-cont",children:[o.jsx("div",{className:"user-publish",children:u!=="Invalid Date"&&o.jsxs("h2",{className:"heading_text-user",children:["Última publicação: ",u]})}),o.jsx("div",{className:"user-last-publish",children:(n==null?void 0:n.role)!=="caminhoneiro"&&o.jsxs("h2",{className:"heading_text-user",children:["Fretes ativos: ",r," / ",c]})})]}),o.jsxs("div",{className:"get-support",children:[o.jsxs("div",{className:"post-support-ticket",children:[o.jsxs("h2",{className:"heading_text-user",children:["Solicitar ",o.jsx(S,{to:"/suporte_cliente",children:"suporte"})]}),o.jsx("p",{children:"Abra um ticket de suporte quando quiser, estamos aqui para o ajudar a resolver qualquer problema"})]}),o.jsxs("div",{className:"open-tickets",children:[o.jsx("h2",{className:"heading_text-user tickets",children:"Tickets de suporte em aberto"}),o.jsx("div",{className:"hide-ticket",onClick:()=>{var y;t(Ua(n._id)),(y=document.querySelector(".hide-ticket"))==null||y.classList.add("show-ticket")},children:o.jsx("p",{children:"Mostrar ticket"})}),o.jsx("div",{className:"ticket-container",children:l?o.jsx("div",{className:"loader-small-box"}):o.jsx(o.Fragment,{children:i?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"support-ticket",children:[o.jsxs("p",{children:["Motivo: ",i==null?void 0:i.supportOpt]}),o.jsxs("p",{children:["telefone: ",i==null?void 0:i.phone]}),o.jsxs("p",{children:["email: ",i==null?void 0:i.email]}),o.jsxs("p",{children:["mensagem: ",i==null?void 0:i.message]}),o.jsxs("p",{children:["status:"," ",o.jsx("span",{className:"status",children:i!=null&&i.isOpen?"aberto":"fechado"})]})]}),!!((h=i==null?void 0:i.sessionChanges)!=null&&h.length)&&o.jsxs("div",{className:"support-tickets-conclusions",children:[o.jsxs("p",{children:["descrição:"," ",i.sessionChanges[0].status]}),o.jsxs("p",{children:["conclusão:"," ",i.sessionChanges[0].conclusion]})]})]}):o.jsx("h2",{style:{textAlign:"center",width:"100%"},children:"Nenhum ticket"})})})]})]})]})]})},QN=T.section`
  padding: 5rem;
  display: grid;
  height: 100%;
  width: 100%;
  .user_content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .user_content,
    .user-email,
    .publish-cont,
    .user-delete-status,
    .get-support {
      box-shadow: var(--shadow-1);
      height: 100%;
    }
    .user-last-publish,
    .open-tickets {
      border-left: 1px solid var(--grey-300);
      border-radius: 3px;
      position: relative;
      p {
        font-size: 1.5rem;
      }
    }
    .user-delete-status {
      .heading_text-user {
        height: 10rem;
      }
      p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.3rem;
      }
    }
    .hide-ticket {
      position: absolute;
      height: 80%;
      width: 100%;
      background-color: var(--grey-200);
      top: 20%;
      cursor: pointer;
      place-content: center;
      display: grid;
      transition: all 0.5s ease;
    }
    .show-ticket {
      visibility: hidden;
      opacity: 0;
    }
    .ticket-container {
      margin-bottom: 2rem;
      padding: 2rem;
      .support-ticket {
      }
    }
    .flex {
      display: flex;
    }
    .get-support {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      text-align: center;
      .post-support-ticket {
        p {
          padding: 2rem;
          font-size: 1.3rem;
        }
      }
    }
    .publish-cont {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .total_container {
      padding-top: 2rem;
      margin-top: 3rem;
      height: 4rem;
      .total::before {
        right: 10rem;
      }
    }
    .total {
      width: 100%;
      font-size: 2rem;
    }
    .heading_text-user {
      display: grid;
      font-size: 1.8rem;
      text-align: center;
      padding: 2rem;
      height: 15rem;
      place-content: center;
    }
    .tickets {
      margin-top: 1.55rem;
      margin-bottom: 4rem;
      place-content: unset;
    }
    .no-border {
      border: transparent;
      height: 10rem;
    }
  }

  a {
    color: var(--red-org);
  }
  .mod-credentials {
    font-size: 1rem;
  }
  @media (max-width: 870px) {
    .get-support {
      grid-template-columns: unset !important;
    }
  }
  @media (max-width: 580px) {
    padding: 0;
    .ticket-container {
      display: grid !important;
      row-gap: 3rem;
    }
  }
  .status {
    color: var(--primary-300);
  }
  .target-status {
    color: var(--clr-primary-orange-3);
  }
`,GN=()=>{var r;const e=F(),{isLoading:t}=z(a=>a.user);if(_.useEffect(()=>{e(Ss(t)),e(wo())},[]),t)return o.jsx("div",{className:"loader"});const n=new URLSearchParams(window.location.search);return o.jsx(KN,{children:o.jsx("div",{className:"welcome",children:o.jsxs("h1",{children:["Bem vindo! onFrete a disposição."," ",o.jsx(S,{to:`/cadastro?sessão=${(r=n==null?void 0:n.get("sessão"))==null?void 0:r.toString()}`,children:"Entrar"})]})})})},KN=T.section`
  height: 100vh;
  position: relative;
  .welcome {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 3rem;
  }
  a {
    color: var(--red-org);
    font-size: 3rem;
  }
`,YN=()=>{const{passwordForReset:e,isLoading:t,msg:n}=z(i=>i.user),r=F(),a=i=>{const l=i.target.name,c=i.target.value;r(zv({name:l,value:c}))},s=i=>{i.preventDefault(),r(Ss(t)),r(jo(e))};return o.jsx(XN,{children:n?o.jsx("div",{className:"success-msg",children:o.jsxs("h3",{children:["Pronto! Clique em entrar para logar:"," ",o.jsx(S,{to:"/cadastro",children:"Entrar"})]})}):o.jsxs("form",{onSubmit:s,className:"form",children:[o.jsx("p",{children:"Coloque sua nova senha"}),o.jsx(K,{type:"password",name:"passwordForReset",labelText:"senha",value:e,handleChange:a}),o.jsx("button",{type:"submit",disabled:t,children:t?"Trocando...":"Trocar"})]})})},XN=T.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: var(--primary-blue-500);
  }
  label {
    color: var(--primary-blue-500);
  }
  form {
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 400px;
    align-items: center;
    justify-content: center;
  }
  button {
    height: 40px;
    width: 70px;
    background: var(--primary-400);
    cursor: pointer;
  }
  .success-msg {
    h3 {
      color: var(--primary-blue-500);
      font-weight: 200;
    }
  }
`,JN=()=>{const{emailForReset:e,isLoading:t,msg:n}=z(i=>i.user),r=F(),a=i=>{const l=i.target.name,c=i.target.value;r(zv({name:l,value:c}))},s=i=>{i.preventDefault(),r(Ss(t)),r(_o(e))};return o.jsx(ZN,{children:n?o.jsx("div",{className:"success-msg",children:o.jsx("h3",{children:"Cheque seu email para que possamos dar continuidade com a troca da senha"})}):o.jsxs("form",{onSubmit:s,className:"hist",children:[o.jsx("p",{children:"Coloque seu email para prosseguirmos com a troca"}),o.jsx(K,{type:"email",name:"emailForReset",labelText:"Email",value:e,handleChange:a}),o.jsx("button",{type:"submit",disabled:t,children:t?"Enviando...":"Envia"})]})})},ZN=T.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: var(--primary-blue-500);
  }
  label {
    color: var(--primary-blue-500);
  }
  form {
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 400px;
    align-items: center;
    justify-content: center;
  }
  button {
    height: 40px;
    width: 70px;
    background: var(--primary-400);
    cursor: pointer;
  }
  .hist {
    margin: 2.5px 0 0 2.5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 7px;
  }
  .hist:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .success-msg {
    background: var(--primary-300);
    border-radius: 43px;
    h3 {
      color: var(--clr-primary-4);
      font-size: 1.8rem;
      margin: 10px;
    }
  }
`,e3=()=>{const e=F(),{password:t,email:n,reasons:r,isLoading:a}=z(l=>l.userData),s=l=>{l.preventDefault();const c=l.target.name,u=l.target.value;e(xp({name:c,value:u}))},i=l=>{l.preventDefault(),e(yo({password:t,reasons:r,email:n}))};return o.jsx(t3,{className:"all-cont",children:o.jsxs("div",{className:"container",children:[o.jsx("p",{children:"Caso o senhor queira deletar a conta, basta preencher os campos abaixo."}),o.jsxs(Ne,{className:"del-form",onSubmit:i,children:[o.jsx(K,{type:"email",name:"email",labelClass:"animated-label",labelText:"email*",placeholder:"email",value:n,handleChange:s}),o.jsx(K,{type:"password",name:"password",labelClass:"animated-label",labelText:"senha*",placeholder:"senha",value:t,handleChange:s}),o.jsxs("div",{className:"form-box",children:[o.jsx("p",{children:"Deixe sua opinião sobre nossos serviços"}),o.jsx("textarea",{className:"input",name:"reasons",id:"reasons",placeholder:"não obrigatório",onChange:s,defaultValue:r})]}),o.jsx("div",{className:"btn-contaienr",children:o.jsx(Te,{handleClick:"submitType",loading:a,loadingText:"Processando...",text:"Deletar",type:"submit",width:"15rem",height:"5rem",margin:"",btnBorder:"transparent",backgroundColor:"var(--clr-primary-red-3)",btn_background:"var(--clr-primary-red-3)"})})]})]})})},t3=T.div`
  display: grid;
  place-content: center;
  padding: 5rem;
  width: 100%;
  .container {
    width: 80%;
    place-self: center;
  }
  p {
    text-align: center;
  }
  p,
  label {
    font-size: 1.4rem;
  }
  label {
    margin-left: 2rem;
  }
  .del-form {
    width: 100%;
    padding: 2rem;
  }
  .form-box {
    text-align: center;
    display: grid;
    margin-top: 3rem;
    label,
    .label {
      text-align: initial;
    }
  }
  #reasons,
  .input {
    width: 100%;
    margin: 0;
    height: 3rem;
  }
  #reasons {
    height: 8rem;
  }
  .btn-contaienr {
    display: grid;
    place-content: center;
    margin-top: 4rem;
  }
  button {
    height: 4rem;
    width: 8rem;
    border: transparent;
    background-color: var(--clr-primary-red-3);
    border-radius: 3px;
  }
`,n3=({children:e})=>{const{userData:t}=z(r=>r.userData),n=F();return _.useEffect(()=>{t||n(qe())},[]),!t||t.role==="caminhoneiro"||t.role==="user"?o.jsxs(r3,{children:[o.jsx("div",{className:"d1",children:o.jsxs("h2",{children:["Conheça nossos"," ",o.jsx(S,{className:"in",to:"/produto_assinatura",children:"planos"})]})}),o.jsxs("div",{className:"d2",children:[o.jsx("h3",{children:"Não assinante"}),o.jsx("p",{children:`Com o cargo de caminhoneiro o senhor(a) tem acesso a todos os fretes
            postados no site, ou seja, o senhor(a) pode escolher o frete que melhor o atende,
            ao entrar em contato com o contratante e prestando atenção aos detalhes descritos
            no frete`})]}),o.jsxs("div",{className:"d3",children:[o.jsx("h3",{children:" Assinante"}),o.jsx("p",{children:`Com o cargo de empresário o senhor(a) pode postar os fretes para que o
            caminhoneiro escolha qual deles o atende melhor, mas não esqueça dos detalhes
            preencha com o máximo de informação possível para que o caminhoneiro ou entregador saiba
            se seu equipamento suporta tal carga`})]}),o.jsxs("div",{className:"d4",children:[o.jsxs("h3",{children:[o.jsxs("span",{className:"Frete",children:[o.jsx("span",{className:"on",children:"on"}),"Frete"]})," ","agradece seu tempo!"]}),o.jsx("p",{children:o.jsx(S,{to:"/cadastro",className:"in",children:"Entrar"})})]})]}):e},r3=T.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 10rem;
  .d1 {
    grid-area: d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .d2 {
    grid-area: d2;
    display: flex;
    flex-direction: column;
  }
  .d3 {
    grid-area: d3;
    display: flex;
    flex-direction: column;
  }
  .d4 {
    grid-area: d4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 9px;
  grid-template-areas:
    "d1 d1"
    "d2 d3"
    "d4 d4";
  p {
    color: var(--primary-blue-500);
    font-size: 2.1rem;
  }
  h3 {
    color: var(--primary-400);
    align-self: center;
    font-size: 2rem;
  }
  h2 {
    font-size: 2.2rem;
    color: var(--yellow-org);
    align-self: center;
  }

  .in {
    color: var(--red-org);
  }
  @media (max-width: 720px) {
    padding: 5rem;
    :not(:first-child) {
      margin-top: 3rem;
    }
    grid-template-columns: 1fr;
    grid-template-areas:
      "d1"
      "d1"
      "d2"
      "d3"
      "d4"
      "d4";
  }
`;function a3(e,t){var n,r,a,s;if(t){(r=(n=document.querySelector(`.check${e}-hist`))==null?void 0:n.classList)==null||r.add(`ballon_text-container-check-${e}-hist`);return}else(s=(a=document.querySelector(`.check${e}`))==null?void 0:a.classList)==null||s.add(`ballon_text-container-check-${e}`)}function s3(e,t){var n,r,a,s;if(t){(r=(n=document.querySelector(`.check${e}-hist`))==null?void 0:n.classList)==null||r.remove(`ballon_text-container-check-${e}-hist`);return}else(s=(a=document.querySelector(`.check${e}`))==null?void 0:a.classList)==null||s.remove(`ballon_text-container-check-${e}`)}let kc,Nc="",ya=!1,Cc="";const o3=({freteId:e,isConcluded:t,handle:n,name:r,index:a})=>{var i,l;const s=new URLSearchParams(window.location.pathname);return(i=s==null?void 0:s.toString())!=null&&i.match("historico-fretes")?Cc=(l=s==null?void 0:s.toString())==null?void 0:l.match("historico-fretes")[0]:Cc="",Cc==="historico-fretes"?(ya=!0,Nc="Reativar documento",kc="90%"):(ya=!1,Nc="Mover documento para o histórico",kc="2%"),o.jsxs(i3,{className:"check-in-input",onMouseEnter:()=>{a3(a,ya)},onMouseLeave:()=>s3(a,ya),style:{left:kc},children:[o.jsx("div",{className:ya?`global-selector check${a}-hist`:`global-selector check${a}`,children:o.jsx("p",{className:"ballon-text",children:Nc})}),o.jsxs("svg",{className:"check-bcg",viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M4.1 12.7L9 17.6 20.3 6.3",fill:"none"})," "]}),o.jsx("p",{className:"check-bcg"}),o.jsx("input",{type:"checkbox",className:"check-in-input",id:e,checked:t,onChange:n}),o.jsxs("div",{className:"wrapper",children:[" ",o.jsxs("svg",{className:"animated-check",viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M4.1 12.7L9 17.6 20.3 6.3",fill:"none"})," "]})]})]})},i3=T.label`
  display: grid;
  position: relative;
  position: absolute;
  height: 3rem;
  width: 3rem;
  left: 2%;
  top: 2%;
  cursor: pointer;
  input {
    display: none;
  }
  .check-bcg {
    stroke: #7ac142;
    position: absolute;
  }
  .animated-check {
    position: absolute;
    top: 0;
    svg {
      cursor: pointer;
      background-color: var(--grey-200);
    }
  }
  input:checked + .wrapper {
    .animated-check path {
      fill: none;
      stroke: #7ac142;
      stroke-width: 4;
      stroke-dasharray: 23;
      stroke-dashoffset: 23;
      animation: draw 0.3s linear forwards;
      stroke-linecap: round;
      stroke-linejoin: round;
      cursor: pointer;
    }
  }
  .global-selector {
    visibility: hidden;
    opacity: 0;
    transition: show-us 0.3s ease;
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
      visibility: visible;
      opacity: 1;
    }
  }
  .ballon_text-container-check-1,
  .ballon_text-container-check-2,
  .ballon_text-container-check-3,
  .ballon_text-container-check-4,
  .ballon_text-container-check-5,
  .ballon_text-container-check-6 {
    position: relative;
    position: absolute;
    top: 100%;
    height: 8rem;
    width: 24rem;
    display: table;
    padding-top: 2rem;
    background: var(--green-light);
    border-radius: 3px;
    visibility: visible;
    opacity: 1;
    clip-path: polygon(
      9% 0,
      24% 24%,
      100% 25%,
      100% 100%,
      0 100%,
      0 24%,
      9% 24%
    );
  }
  .ballon-text {
    font-size: 1.3rem;
    text-align: center;
    margin-top: 2rem;
    font-weight: 500;
  }
  .ballon_text-container-check-1-hist,
  .ballon_text-container-check-2-hist,
  .ballon_text-container-check-3-hist,
  .ballon_text-container-check-4-hist,
  .ballon_text-container-check-5-hist,
  .ballon_text-container-check-6-hist {
    position: relative;
    position: absolute;
    height: 8rem;
    width: 24rem;
    display: table;
    padding-top: 2rem;
    top: 100%;
    right: -100%;
    z-index: 99;
    background: var(--red-light);
    border-top-left-radius: 9px;
    border-top-right-radius: 3px;
    visibility: visible;
    opacity: 1;
    border-radius: 3px;
    clip-path: polygon(
      80% 0,
      82% 23%,
      100% 24%,
      100% 100%,
      0 100%,
      0 24%,
      74% 23%
    );
  }
`,l3=({name:e,value:t,freteId:n,index:r})=>{var d;const[a,s]=_.useState(t),i=new URLSearchParams(window.location.pathname);let l=!1;(d=i==null?void 0:i.toString())!=null&&d.match("freight")&&(l=!0);const c=F(),u=p=>{s(!a),setTimeout(()=>{c(Eo({isConcluded:p.target.checked,freteId:p.target.id,controlRequests:l}))})};return o.jsx(o3,{isConcluded:a,handle:u,freteId:n,name:e,index:r})},c3=async(e,t)=>{try{const{data:n}=D(`/api/v1/historic/all-historic/${id}`);return n}catch(n){return t.rejectWithValue(n.response.data.msg)}},u3=async(e,t)=>{try{const{data:n}=await D.get(`/api/v1/historic/single/${e}`);return t.dispatch(y3({showHist:!0,_id:e})),n}catch(n){return t.rejectWithValue(n.response.data.msg)}},d3=async(e,t)=>{try{const{data:n}=await D.post(`/api/v1/historic/criar/${e.frete}`,e);return O.success("Notas criadas"),t.dispatch(Dt()),setTimeout(()=>{window.history.go(-1)},500),n}catch(n){return O.error(n.response.data.msg),t.rejectWithValue(n.response.data.msg)}},p3=async(e,t)=>{try{const{data:n}=await D.delete(`/api/v1/historic/${e.historicBy._id}`);return mv(),t.dispatch(Dt()),O.success("Notas deletadas"),n}catch(n){return O.error("Houve algum erro tente mais tarde"),t.rejectWithValue(n.response.data.msg)}},m3=async(e,t)=>{const{hist:n}=t.getState().historic;try{const{data:r}=await D.patch(`/api/v1/historic/${n._id}`,e);return O.success("Notas atualizadas"),t.dispatch(Dt()),setTimeout(()=>{window.history.go(-1)},500),r}catch(r){return O.error("Houve algum erro tente mais tarde"),t.rejectWithValue(r.response.data.msg)}},f3={isLoading:!1,timeSpectative:"",driverMan:"",description:"",stops:!1,howMany:"",addHist:!1,histAdded:!1,showHist:!1,_id:"",hist:[],isEditing:!1,msg:"",activeRotation:"card__fhater-hist-",activeRotationBack:"back__chield-hist-"};q("historic/getAllHistoric",c3);const Fo=q("historic/createHistoric",d3),Ec=q("historic/getHistoric",u3),Io=q("historic/deleteHistoric",p3),Do=q("historic/updateHistoric",m3),ty=Ut({name:"historic",initialState:f3,reducers:{historicCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n},setAddHistoric:(e,{payload:t})=>({...e,addHist:!0,...t}),clearState:e=>({...e.hist}),showLoad:e=>{e.isLoading=!0},hideLoad:e=>{e.isLoading=!1},setStatus:(e,{payload:t})=>({...e,showHist:t.showHist,_id:t._id}),setEditHistoric:(e,{payload:t})=>({...e.hist,isEditing:!0,...t}),clearMsg:e=>{e.msg=""}},extraReducers:e=>{e.addCase(Fo.pending,t=>{t.isLoading=!0}).addCase(Fo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.msg=n.msg}).addCase(Fo.rejected,t=>{t.isLoading=!1}).addCase(Ec.pending,t=>{t.isLoading=!0}).addCase(Ec.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{historic:r}=n;n&&(t.hist=r)}).addCase(Ec.rejected,t=>{t.isLoading=!1}).addCase(Io.pending,t=>{t.isLoading=!0}).addCase(Io.fulfilled,t=>{t.isLoading=!1}).addCase(Io.rejected,t=>{t.isLoading=!1}).addCase(Do.pending,t=>{t.isLoading=!0}).addCase(Do.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.msg=n.msg}).addCase(Do.rejected,t=>{t.isLoading=!1})}}),{historicCollector:h3,setAddHistoric:g3,showLoad:v3,hideLoad:eE,setStatus:y3,setEditHistoric:x3,clearState:tE,clearMsg:b3}=ty.actions,w3=ty.reducer,ny=()=>{var y,w,g,f;let{timeSpectative:e,description:t,stops:n,howMany:r,isLoading:a,_id:s,isEditing:i,msg:l,driverMan:c}=z(x=>x.historic);n=!1;const[u,d]=_.useState(n),p=F(),m=dr(),v=x=>{if(p(v3()),x.preventDefault(),i){p(Do({timeSpectative:e,description:t,stops:u,howMany:r,driverMan:c})),i=!1;return}p(Fo({timeSpectative:e,description:t,stops:u,howMany:r,frete:s,driverMan:c}))},h=x=>{x.preventDefault();const b=x.target.name,j=x.target.value;p(h3({name:b,value:j}))};return l==="success!"&&((w=(y=document.querySelector(".popup_add-hist"))==null?void 0:y.classList)==null||w.remove("show"),(f=(g=document.querySelector(".popup_content-add-hist"))==null?void 0:g.classList)==null||f.remove("show_contente"),setTimeout(()=>{p(b3())},1e3)),o.jsx(_3,{children:o.jsx("div",{className:"popup_add-hist",children:o.jsx("div",{className:"popup_content-add-hist",children:o.jsx(Ne,{onSubmit:v,children:o.jsxs("div",{className:"forms__content",children:[o.jsx(S,{type:"button",className:"close",id:"cl",onClick:()=>{document.querySelector(".popup_add-hist").classList.remove("show"),document.querySelector(".popup_content-add-hist").classList.remove("show_contente"),setTimeout(()=>{m(-1)},500)},children:"×"}),o.jsxs("div",{className:"form-box",children:[o.jsx("label",{htmlFor:"stops",children:"Paradas"}),o.jsx("input",{type:"checkbox",name:"stops",className:"check_stops",value:u,onChange:()=>d(!u)})]}),o.jsx(K,{type:"number",name:"howMany",labelClass:"animated-label",placeholder:"Quantas paradas",value:r,labelText:"Quantas",handleChange:h}),o.jsx(K,{type:"text",name:"timeSpectative",labelClass:"animated-label",placeholder:"Tempo para completar",value:e,labelText:"Tempo",handleChange:h}),o.jsx(K,{type:"name",name:"driverMan",value:c,labelText:"Nome",placeholder:"Caminhoneiro/entregador",labelClass:"animated-label",handleChange:h}),o.jsxs("div",{className:"msg",children:[o.jsx("label",{htmlFor:"text",children:"Detalhes"}),o.jsx("textarea",{name:"description",className:"input",id:"text",onChange:h,defaultValue:t})]}),o.jsx("div",{className:"button",children:o.jsx("button",{type:"submit",className:"submit_btn",disabled:a,children:a?"Enviando...":"Enviar"})})]})})})})})},_3=T.div`
  position: absolute;
  top: 0;
  .popup_add-hist {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
  }

  .popup_content-add-hist {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    place-self: center;
    height: 50rem;
    width: 50%;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
    padding: 1rem;
    display: grid;
  }
  form {
    width: 100%;
    display: grid;
    .form-box,
    .msg {
      margin: 0 auto;
      margin-top: 1rem;
      input {
        width: 100%;
        margin: 0;
      }
      textarea {
        width: 100%;
        height: 6rem;
      }
      label {
        font-size: 1.4rem;
      }
      .check_stops {
        width: fit-content;
        margin-left: 1rem;
      }
    }
    .form-box {
      width: 60%;
    }
    .msg {
      display: grid;
      width: 80%;
      label {
        text-align: center;
      }
    }
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
  .show_contente {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 800px) {
    .popup_content-add-hist {
      width: 100%;
    }
  }
  .button {
    display: grid;
    place-content: center;
    .submit_btn {
      background-color: var(--primary-300);
      border: transparent;
      width: 10rem;
      height: 5rem;
      border-radius: 3px;
      margin-top: 3rem;
    }
  }
`,Xu=({data:e,isEditing:t},n)=>{if(setTimeout(()=>{var r,a;(r=document.querySelector(".popup_add-hist"))==null||r.classList.add("show"),(a=document.querySelector(".popup_content-add-hist"))==null||a.classList.add("show_contente")}),t)return n(x3({hist:e}));n(g3({_id:e}))},ry=({fretes:e,index:t})=>{var i,l,c,u,d,p,m,v;const n=F();let{isLoading:r}=z(h=>h.historic);if(r)return o.jsx("div",{className:"loader"});let a=We((i=e==null?void 0:e.historicBy)==null?void 0:i.updatedAt),s=We((l=e==null?void 0:e.historicBy)==null?void 0:l.createdAt);return o.jsx(j3,{className:"show-hist hist-back",children:o.jsx(o.Fragment,{children:e!=null&&e.historicBy?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"d2-chield1",children:o.jsx("button",{type:"button",className:"close",onClick:()=>{document.querySelector(`.front_hist-${t}`).classList.add(`front__chield-hist-${t}`),document.querySelector(`.back_hist-${t}`).classList.remove(`front__chield-hist-${t}`)},children:"×"})}),o.jsxs("ul",{children:[o.jsxs("div",{className:"d1",children:[o.jsxs("p",{children:["Paradas:"," ",o.jsx("span",{children:(c=e==null?void 0:e.historicBy)!=null&&c.stops?"Sim":"Não"})]}),o.jsxs("p",{children:["Entregador: ",(u=e==null?void 0:e.historicBy)==null?void 0:u.driverMan]}),o.jsxs("p",{children:["Quantas paradas: ",(d=e==null?void 0:e.historicBy)==null?void 0:d.howMany]}),o.jsxs("p",{children:["Tempo até o destino: ",(p=e==null?void 0:e.historicBy)==null?void 0:p.timeSpectative]}),o.jsxs("p",{children:["Data de criação: ",s]}),o.jsxs("p",{children:["Ultima atualização: ",a]})]}),o.jsxs("div",{className:"d2",children:[o.jsx("div",{className:"d2-chield2"}),o.jsxs("div",{className:"d2-chield3",children:[o.jsx(S,{className:"edit-btn",to:`/client_page/historico-fretes/${(m=e==null?void 0:e.historicBy)==null?void 0:m._id}`,onClick:()=>Xu({data:e==null?void 0:e.historicBy,isEditing:!0},n),children:"Editar"}),o.jsx("button",{className:"delete-btn",onClick:()=>{n(Io(e))},children:"Deletar"})]})]}),o.jsx("div",{className:"d3",children:o.jsxs("p",{className:"text",children:[o.jsx("span",{children:"Experiência do serviço:"})," ",(v=e==null?void 0:e.historicBy)==null?void 0:v.description]})})]})]}):o.jsxs("div",{className:"empty",children:[o.jsx("button",{type:"button",className:"close",onClick:()=>{document.querySelector(`.front_hist-${t}`).classList.add(`front__chield-hist-${t}`),document.querySelector(`.back_hist-${t}`).classList.remove(`front__chield-hist-${t}`)},children:"×"}),o.jsxs("h1",{className:"text_setup",children:["Nenhuma anotação!"," ",o.jsx(S,{className:"add__hist",to:`/client_page/historico-fretes/${e==null?void 0:e._id}`,onClick:()=>Xu(e==null?void 0:e._id,n),children:"Adicionar"})]})]})})})},j3=T.div`
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  font-size: 1.6rem;
  padding: 6rem;
  color: var(--grey-700);
  h1 {
    text-align: center;
    padding: 10rem 2rem;
  }
  .add__hist {
    color: var(--red-org);
  }
  .close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .d2-chield3 {
    position: absolute;
    right: 0px;
    top: 10rem;
    padding: 2rem;
    :first-child {
      margin-right: 2rem;
      color: var(--blue-ocn);
    }
    :last-child {
      color: var(--red-dark);
    }
    .edit-btn,
    .delete-btn {
      font-size: 2rem;
      background-color: transparent;
      border: transparent;
    }
  }
`;T.div``;const Q=[{plan:{plan:o.jsx(o.Fragment,{children:"Plano Básico"}),planPrice:o.jsx(o.Fragment,{children:"69R$ / MES"})},text:o.jsxs(o.Fragment,{children:["No plano básico o assinante pode postar até 17 fretes, todos os fretes estarão disponíveis para a visualização de todos os cliente de forma gratuita!",o.jsx("br",{}),"As regras dos planos é simples, na area"," ",o.jsx(S,{to:"/create-frete",children:"Publicar Frete"})," o cliente tem acesso a serviço de postagem, onde ele pode postar de acordo com seu plano,"," ",o.jsx("span",{children:" no caso do plano básico até 17 fretes "}),"... ",o.jsx("br",{}),"E no"," ",o.jsx(S,{to:"/cliente_page",children:"Perfil"})," o cliente pode editar até 2 vezes o documento (frete), e na mesma sessão o cliente pode deletar os fretes postados, porém para o processo de exclusão acontecer leva 30 minutos, o processo é o mesmo para fretes marcados como concluído, mas quando concluído o cliente pode adicionar anotações, essas anotações serão salvas no banco de dados e estão disponíveis para o cliente caso queira adicionar alguma anotação referente ao processo de entrega."," "]}),descriptionClass:"basic",urlLinkPlan:"basico",priceId:"price_1NdbhBJurT2bp9vzJj7my0dB"},{plan:{plan:o.jsx(o.Fragment,{children:"Plano Avançado"}),planPrice:o.jsx(o.Fragment,{children:"100R$ / MES"})},text:o.jsxs(o.Fragment,{children:["No plano avançado o assinante pode postar até 25 fretes, todos os fretes estarão disponíveis para a visualização de todos os cliente de forma gratuita! ",o.jsx("br",{}),"As regras dos planos é simples, na area"," ",o.jsx(S,{to:"/create-frete",children:"Publicar Frete"})," o cliente tem acesso a serviço de postagem, onde ele pode postar de acordo com seu plano,"," ",o.jsx("span",{children:"no caso do plano avançado até 25 fretes"}),"... ",o.jsx("br",{}),"E no"," ",o.jsx(S,{to:"/cliente_page",children:"Perfil"})," o cliente pode editar até 2 vezes o documento (frete), e na mesma sessão o cliente pode deletar os fretes postados, porém para o processo de exclusão acontecer leva 30 minutos, o processo é o mesmo para fretes marcados como concluído, mas quando concluído o cliente pode adicionar anotações, essas anotações serão salvas no banco de dados e estão disponíveis para o cliente caso queira adicionar alguma anotação referente ao processo de entrega."," "]}),descriptionClass:"advanced",urlLinkPlan:"avançado",priceId:"price_1NdbhgJurT2bp9vzp3CRcOcl"},{plan:{plan:o.jsx(o.Fragment,{children:"Plano Premium"}),planPrice:o.jsx(o.Fragment,{children:"150R$ / MES"})},text:o.jsxs(o.Fragment,{children:["No plano premium o assinante pode postar até 37 fretes, todos os fretes estarão disponíveis para a visualização de todos os cliente de forma gratuita!",o.jsx("br",{}),"As regras dos planos é simples, na area"," ",o.jsx(S,{to:"/create-frete",children:"Publicar Frete"})," o cliente tem acesso a serviço de postagem, onde ele pode postar de acordo com seu plano,"," ",o.jsx("span",{children:"no caso do plano premium até 37 fretes"}),"... ",o.jsx("br",{}),"E no"," ",o.jsx(S,{to:"/cliente_page",children:"Perfil"})," o cliente pode editar até 2 vezes o documento (frete), e na mesma sessão o cliente pode deletar os fretes postados, porém para o processo de exclusão acontecer leva 30 minutos, o processo é o mesmo para fretes marcados como concluído, mas quando concluído o cliente pode adicionar anotações, essas anotações serão salvas no banco de dados e estão disponíveis para o cliente caso queira adicionar alguma anotação referente ao processo de entrega."," "]}),descriptionClass:"premium",urlLinkPlan:"premium",priceId:"price_1NdbipJurT2bp9vzcUj3xIfy"}],_p=()=>o.jsx(S3,{children:o.jsx("div",{className:"text-content",children:o.jsxs("h3",{children:["Para ter acesso aos upgrade das assinaturas o senhor primeiro precisa adquirir uma ",o.jsx(S,{to:"/produto_assinatura",children:"assinatura!"})]})})}),S3=T.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h3 {
    font-size: 2rem;
    color: var(--red-dark);
  }
  a {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    .text-content {
      padding: 15rem 2rem;
    }
  }
`,k3=T.section`
  position: relative;
  min-height: 100vh;
  padding: 8rem 0;
  .plan {
    margin: 0 auto;
    box-shadow: var(--shadow-4);
    height: 500px;
    width: 70%;
  }
  .title {
    grid-area: title;
    text-align: center;
    padding-top: 2rem;
    h2,
    h3 {
      font-size: 2rem;
    }
    h3 {
      margin-top: 2rem;
    }
  }
  a {
    color: var(--red-org);
    font-size: 1.6rem;
    font-weight: 600;
  }
  .links {
    display: flex;
    grid-area: links;
    align-items: center;
    justify-content: center;

    :not(:first-child) {
      margin-left: 2rem;
    }
  }
  .text_content {
    grid-area: text_content;
  }
  .forms {
    grid-area: forms;
    display: grid;
    .update {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit__subscription-0,
    .submit__subscription-1,
    .submit__subscription-2 {
      margin: 0 auto;
      font-size: 2rem;
      height: 5rem;
      border-radius: 50px;
      border: transparent;
      text-align: center;
    }
  }
  .know__more {
    width: 12rem;
    padding: 1rem;
  }
  .plan__description-containers {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.7fr 1fr 1fr;
    grid-template-areas:
      "title title"
      "forms text_content"
      "links text_content";
    p {
      font-weight: 600;
    }
    p,
    label {
      font-size: 1.9rem;
      color: var(--grey-700);
      letter-spacing: 1px;
      text-transform: capitalize;
    }
    .input {
      height: 5rem;
    }
    label {
      margin-left: 1.5rem;
    }
    @media (max-width: 1110px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      .submit__subscription-0,
      .submit__subscription-1,
      .submit__subscription-2 {
        width: 60%;
        padding: 0;
      }
    }
  }
  @media (max-width: 700px) {
    //paddin referente ao texto domain/planos

    .plan {
      width: 100%;
    }
  }
  .background_img {
    border-radius: 3px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  .plan__decription-basic {
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 60%
      ),
      url("/truck-2.jpeg");
    background-position: 50% 40%;
    p {
      color: var(--blue-ocn);
    }

    h2,
    h3 {
      color: var(--primary-400);
    }
  }
  .plan__decription-advanced {
    background-position: 50% 50%;
    background-image: linear-gradient(
        130deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 40%,
        transparent 60%
      ),
      url("/truck-1.jpeg");

    h2,
    h3 {
      color: var(--red-org);
    }
  }
  .plan__decription-premium {
    background-image: linear-gradient(
        130deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 60%
      ),
      url("/truck-3.jpeg");
    background-position: 50% 50%;

    h2,
    h3 {
      color: var(--yellow-org);
    }
  }
  .at_delete_process {
    position: absolute;
    right: 50%;
    left: 50%;
    transform: translate(-50%);
    margin-top: 20rem;
  }
`,Qt=T.div`
  button {
    letter-spacing: 2px;
  }
  .submit__subscription-0 {
    background-color: var(--primary-400);
  }
  .submit__subscription-0::after {
    background-color: var(--primary-600);
  }
  .submit__subscription-1 {
    background-color: var(--red-org);
  }
  .submit__subscription-1::after {
    background-color: var(--red-org);
  }
  .submit__subscription-2 {
    background-color: var(--yellow-org);
  }
  .submit__subscription-2::after {
    background-color: var(--yellow-org);
  }
`,N3=()=>{let{password:e,isLoading:t,handleClick:n,handleChange:r,handleSubmit:a,userData:s}=Dn();return s?o.jsx(C3,{className:`plan ${Q[2].descriptionClass}`,children:o.jsx("div",{className:`plan__decription-${Q[2].descriptionClass} background_img`,children:o.jsxs("div",{className:"plan__description-containers",children:[o.jsxs("div",{className:"title",children:[o.jsx("h2",{children:Q[2].plan.plan}),o.jsx("h3",{children:Q[2].plan.planPrice})]}),o.jsx("div",{className:"text_content"}),o.jsxs(Ne,{className:"forms",onSubmit:a,children:[o.jsx("input",{type:"password",name:"password",id:"password",className:"input",placeholder:"Senha",onChange:r}),o.jsx("label",{htmlFor:"password",className:"animated-label",children:"senha"}),o.jsx(Qt,{className:"update",children:o.jsx("button",{type:"submit",className:"submit__subscription-2",onClick:n,value:e,children:t?"Processando...":"Assinar"})})]}),o.jsx("div",{className:"links",children:o.jsx(S,{to:`/planos/${Q[1].urlLinkPlan}/${Q[1].priceId}?plan=advanced`,children:"← plano anterior"})}),o.jsx(S,{className:"know__more",to:`/planos/${Q[2].urlLinkPlan}`,children:"saiba mais..."})]})})}):o.jsx(_p,{})},C3=T.div``,E3=()=>{let{password:e,isLoading:t,handleClick:n,handleChange:r,handleSubmit:a,userData:s}=Dn();return s!=null&&s.subscriptionID?o.jsx(L3,{className:`plan ${Q[0].descriptionClass}`,children:o.jsx("div",{className:`plan__decription-${Q[0].descriptionClass} background_img`,children:o.jsxs("div",{className:"plan__description-containers",children:[o.jsxs("div",{className:"title",children:[o.jsx("h2",{children:Q[0].plan.plan}),o.jsx("h3",{children:Q[0].plan.planPrice})]}),o.jsx("div",{className:"text_content"}),o.jsxs(Ne,{className:"forms",onSubmit:a,children:[o.jsx("input",{type:"password",name:"password",id:"password",className:"input",placeholder:"Senha",onChange:r,value:e}),o.jsx("label",{htmlFor:"password",className:"animated-label",children:"senha"}),o.jsx(Qt,{className:"update",children:o.jsx("button",{type:"submit",className:"submit__subscription-0",onClick:n,disabled:t,children:t?"Processando...":"Assinar"})})]}),o.jsx("div",{className:"links",children:o.jsx(S,{to:`/planos/${Q[1].urlLinkPlan}/${Q[1].priceId}?plan=advanced`,children:"proximo plano →"})}),o.jsx(S,{className:"know__more",to:`/planos/${Q[0].urlLinkPlan}`,children:"saiba mais..."})]})})}):o.jsx(_p,{})},L3=T.div``;let T3=()=>{let{password:e,isLoading:t,handleClick:n,handleChange:r,handleSubmit:a,userData:s}=Dn();return s?o.jsx(P3,{className:`plan ${Q[1].descriptionClass}`,children:o.jsx("div",{className:`plan__decription-${Q[1].descriptionClass} background_img`,children:o.jsxs("div",{className:"plan__description-containers",children:[o.jsxs("div",{className:"title",children:[o.jsx("h2",{children:Q[1].plan.plan}),o.jsx("h3",{children:Q[1].plan.planPrice})]}),o.jsx("div",{className:"text_content"}),o.jsxs(Ne,{className:"forms",onSubmit:a,children:[o.jsx("input",{type:"password",name:"password",className:"input",id:"password",placeholder:"Senha",onChange:r,value:e}),o.jsx("label",{htmlFor:"password",className:"animated-label",children:"senha"}),o.jsx(Qt,{className:"update",children:o.jsx("button",{type:"submit",className:"submit__subscription-1",onClick:n,children:t?"Processando...":"Assinar"})})]}),o.jsxs("div",{className:"links",children:[o.jsx(S,{to:`/planos/${Q[0].urlLinkPlan}/${Q[0].priceId}?plan=basic`,children:"← plano anterior"}),o.jsx(S,{to:`/planos/${Q[2].urlLinkPlan}/${Q[2].priceId}?plan=premium`,children:"proximo plano →"})]}),o.jsx(S,{className:"know__more",to:`/planos/${Q[1].urlLinkPlan}`,children:"saiba mais..."})]})})}):o.jsx(_p,{})};const P3=T.div``,$3=({text:e})=>{let{supportEnum:t,supportOpt:n,phone:r,email:a,message:s,isLoading:i}=z(d=>d.support);const l=F(),c=d=>{const p=d.target.name,m=d.target.value;l(Jv({name:p,value:m}))},u=d=>{d.preventDefault(),l(Po({supportOpt:n,phone:r,email:a,message:s}))};return o.jsxs(O3,{className:"support_ticket",children:[o.jsx("h2",{children:e}),o.jsxs(Ne,{className:"support-forms",onSubmit:u,children:[o.jsx(Ie,{name:"supportOpt",value:n,handleChange:c,labelText:"",labelClass:"animated-label hide",sorts:t}),o.jsx(K,{type:"email",name:"email",labelText:"Email",labelClass:"animated-label",placeholder:"Email",autocomplete:"email",autocorrect:"off",inputmode:"email",spellcheck:"false",ariaInvalid:"false",min:6,value:a,handleChange:c}),o.jsx(K,{type:"tel",name:"phone",labelText:"Telefone",labelClass:"animated-label",placeholder:"Telefone",value:r,handleChange:c}),o.jsxs("div",{className:"form-box",children:[o.jsx("label",{className:"text-lab",htmlFor:"text",children:"Mensagem"}),o.jsx("textarea",{name:"message",value:s,onChange:c,id:"text",cols:"30",rows:"10",className:"input"})]}),o.jsx(Te,{type:"submit",loading:i,loadingText:"Processando",backgroundColor:"var(--blue-ocn)",btn_background:"var(--green-light)",width:"15rem",height:"6rem",text:"Enviar"})]})]})},O3=T.div`
  .target {
    background-color: var(--red-light);
  }
  .form-box {
    label {
      font-size: 1.3rem;
    }
  }
`,R3=({url:e,urlMessage:t})=>{if(!(!e&&!t))return o.jsx(z3,{children:o.jsx("div",{className:"popup_content-admin-link",children:o.jsxs("div",{className:"popup_content-display-actions-admin-link",children:[o.jsx("button",{type:"button",onClick:()=>{ks({eventType:"close"})},className:"close",id:"cl",children:"×"}),o.jsx("a",{href:e,children:"supp"}),o.jsx("a",{href:t,children:"messages"})]})})})},z3=T.div`
  text-align: center;
  a {
    font-size: 2rem;
  }
  .popup_content-admin-link {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
  }
  .popup_content-display-actions-admin-link {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    position: absolute;
    visibility: hidden;
  }
  .popup_content-display-actions-admin-link {
    justify-self: center;
    margin-top: 20%;
    width: 30%;
    height: 20rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
  .show_contente {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`,A3={password:""},F3=()=>{var v;let e=new URL(window.location.href);const{userData:t}=z(h=>h.userData),[n,r]=_.useState(A3),[a,s]=_.useState(""),[i,l]=_.useState(!1),[c,u]=_.useState(!1),d=F();if(_.useEffect(()=>{d(qe())},[]),(t==null?void 0:t.role)!=="admin")return o.jsx(Ff,{children:o.jsx("h1",{style:{textAlign:"center",margin:"15rem "},children:"You are not allowed"})});const p=async h=>{l(!0),h.preventDefault();try{const y=await D.post(`/api/v1/admin/admin-user/${t._id}`,n);y.status===201&&y.data.msg==="ok!"&&(s({url:y.data.url,urlMessage:y.data.urlMessage}),d(qe()),setTimeout(()=>{ks({eventType:"set"})})),y.status===200&&(l(!1),setTimeout(()=>{window.history.go(-1)},5e3),O.success("Pronto!")),l(!1)}catch(y){l(!1),u(!0),console.log(y)}},m=h=>{const y=h.target.name,w=h.target.value;r({...n,[y]:w})};return c?o.jsx("h1",{children:"Something went wrong"}):o.jsx(o.Fragment,{children:o.jsxs(Ff,{children:[((v=t==null?void 0:t.adminCredentials[0])==null?void 0:v.isValidSsesion)&&o.jsx(Mn,{}),o.jsx(R3,{...a}),e.pathname==="/admin-checkout"&&o.jsx(o.Fragment,{children:o.jsxs(Ne,{className:"pass-check",onSubmit:p,children:[o.jsx(K,{type:"password",name:"password",labelText:"Senha",labelClass:"animated-label",placeholder:"Senha",autoComplete:"new-password",value:n.password,handleChange:m}),o.jsx("div",{className:"inline-content",children:o.jsx(Te,{type:"submit",loadingText:"Processando",text:"Enviar",height:"5rem",width:"10rem",loading:i})})]})})]})})},Ff=T.section`
  min-height: calc(100vh - 75px);
  position: relative;
  .pass-check {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    width: 50%;
    input {
      height: 5rem;
      width: 100%;
    }
    .inline-content {
      place-content: center;
      display: grid;
    }
    button {
      margin-top: 5rem;
    }
  }
  a {
    color: var(--red-org);
    height: 1.5rem;
    bottom: 5rem;
    right: 5rem;
    margin-right: 10rem;
  }
`,I3=()=>{var s;const{singleTicket:e,btnLoading:t}=z(i=>i.support),n=F(),r=()=>{n(Oo())},a=We((s=e[0])==null?void 0:s.createdAt);return o.jsx("article",{children:!!e.length&&o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:()=>n(mN()),className:"close",id:"cl",children:"×"}),o.jsxs("ul",{children:[o.jsx("p",{children:e[0].supportOpt}),o.jsx("p",{children:e[0].phone}),o.jsx("p",{children:e[0].email}),o.jsx("div",{children:o.jsx("p",{children:e[0].message})}),o.jsxs("p",{children:[" ",e[0].isOpen&&"aberto"]}),o.jsx("p",{children:a})]}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Deletar",height:"5rem",width:"10rem",backgroundColor:"var(--red-org)",btn_background:"var(--red-org)",loading:t,handleClick:r})]})})},D3=()=>{const e=F(),t=new URLSearchParams(window.location.search),{conclusion:n,status:r,btnLoading:a}=z(d=>d.support),[s,i]=_.useState(t.get("isOpen")==="true"),l=d=>{const p=d.target.name,m=d.target.value;e(Jv({name:p,value:m}))},c=d=>{i(!s);let p=new URL(window.location.href);p.searchParams.set("isOpen",`${d.target.checked}`),window.history.pushState({path:p.href},"",p.href)},u=d=>{d.preventDefault(),e($o({conclusion:n,status:r}))};return o.jsx("div",{children:o.jsxs(Ne,{onSubmit:u,children:[o.jsx("input",{type:"checkbox",name:"isConcluded",id:"isOpen",onChange:c,checked:t.get("isOpen")==="true"}),o.jsx(K,{type:"text",name:"status",labelText:"Status",labelClass:"animated-label",placeholder:"Status",value:r,handleChange:l}),o.jsxs("div",{className:"form-box",children:[o.jsx("label",{htmlFor:"text",children:"conclusão"}),o.jsx("textarea",{name:"conclusion",value:n,onChange:l,id:"text",cols:"30",rows:"10",className:"input"})]}),o.jsx(Te,{type:"submit",loadingText:"Processando",text:"Enviar",height:"5rem",width:"10rem",loading:a})]})})},M3=()=>{const e=F(),{password:t,email:n,isLoading:r}=z(i=>i.userData),a=i=>{i.preventDefault();const l=i.target.name,c=i.target.value;e(xp({name:l,value:c}))},s=i=>{i.preventDefault(),e(xo({password:t,email:n}))};return o.jsx(U3,{className:"all-cont",children:o.jsxs("div",{className:"container",children:[o.jsx("p",{children:"Reverte o cancelamento da conta"}),o.jsxs(Ne,{className:"del-form",onSubmit:s,children:[o.jsx(K,{type:"email",name:"email",labelClass:"animated-label",labelText:"email*",placeholder:"email",value:n,handleChange:a}),o.jsx(K,{type:"password",name:"password",labelClass:"animated-label",labelText:"senha*",placeholder:"senha",value:t,handleChange:a}),o.jsx("div",{className:"btn-contaienr",children:o.jsx(Te,{handleClick:"submitType",loading:r,loadingText:"Processando...",text:"Recuperar",type:"submit",width:"15rem",height:"5rem",margin:"",btnBorder:"transparent",backgroundColor:"var(--primary-300)",btn_background:"var(--primary-200)"})})]})]})})},U3=T.div`
  display: grid;
  padding: 5rem;
  width: 100%;
  .container {
    width: 80%;
    place-self: center;
  }
  p {
    text-align: center;
  }
  p,
  label {
    font-size: 1.4rem;
  }
  label {
    margin-left: 2rem;
  }
  .del-form {
    width: 100%;
    padding: 2rem;
  }
  .form-box {
    text-align: center;
    display: grid;
    margin-top: 3rem;
    width: 50%;
    margin: 0 auto;
    label,
    .label {
      text-align: initial;
    }
  }
  #reasons,
  .input {
    width: 100%;
    margin: 0;
    height: 3rem;
  }
  #reasons {
    height: 8rem;
  }
  .btn-contaienr {
    display: grid;
    place-content: center;
    margin-top: 4rem;
  }
  button {
    height: 4rem;
    width: 8rem;
    border: transparent;
    background-color: var(--primary-300);
    border-radius: 3px;
  }
`,B3=()=>o.jsxs(q3,{children:[" ",o.jsx("h1",{children:"Status cancelamento"}),o.jsxs("p",{children:["A conta do senhor(a) foi marcada para ser deletada, nosso prazo para que o evento de remoção aconteça é de 30 dias, caso o senhor tenha cometido algum engano ou mudado de ideia basta clicar nesse"," ",o.jsx(S,{to:"/client_page/abortar-processo",children:"link"})," para remover o status de cancelamento. Do contrario a"," ",o.jsx("span",{className:"logo",children:"onFrete"})," agradece sua gentileza em ter dado uma chance para nossos serviços! Muito obrigado. ",o.jsx("br",{}),"Caso não tenha sido o senhor quem marcou a conta para cancelamento por favor remova o status de cancelamento clicando no"," ",o.jsx(S,{to:"/client_page/abortar-processo?artigo=ação_de_terceiros",children:"link"})," ",o.jsx("br",{}),o.jsx("span",{className:"optional",children:"opcional"})," e entre em contato para que possamos investigar o ocorrido"]}),o.jsx("h1",{children:"Cancelamento de contas"}),o.jsxs("p",{children:["O processo de cancelamento é simples, basta clicar nesse"," ",o.jsx(S,{to:"/client_page/remover-conta",children:"link"})," e colocar seu email e senha ",o.jsx("br",{}),"Quando a conta é marcada para ser cancelar o usuário tem um prazo de 30 dias para reverter o evento de cancelamento, esses 30 dias antes da remoção é para que o cliente caso tenha uma assinatura ativa possa aproveitar o restante da assinatura antes de ter a conta removida, qualquer outra duvida basta entrar em contato"," ",o.jsx("a",{href:"mailto:onfrete7@gmail.com",children:"email"})," ou abra um"," ",o.jsx(S,{to:"/suporte_cliente?sessão_status=cancelamento",children:"ticket"})]})]}),q3=T.article`
  h1 {
    margin: 5rem 0 3rem 0;
    font-size: 4rem;
  }
  p {
    font-size: 1.7rem;
  }
  a {
    color: var(--red-org);
  }
  span {
    font-size: 1.1rem;
  }
  .logo {
    font-size: 1.7rem;
  }
`,W3=()=>o.jsx("div",{className:"loading-container",style:{height:"100vh",width:"100%",position:"fixed",zIndex:"9999",background:"var(--white)"},children:o.jsx("div",{className:"loader",style:{margin:"20rem auto"}})}),V3=T.main`
  display: grid;
  min-height: 100vh;
  grid-gap: 3px;
  .avaible-cont {
    width: 100%;
    .box {
      width: 100%;
    }
  }

  grid-template-columns: 1fr 325px;
  .filter {
    height: 100%;
    padding: 2rem;
    display: grid;
    row-gap: 9px;
  }
  .aside-mobile-btn {
    display: none;
  }
  .close {
    display: none;
  }
  .article-container {
    position: relative;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
    font-size: 1.5rem;
    p {
      margin-top: 5px;
    }
    h5 {
      font-size: 1.6rem;
      color: var(--blue-ocn);
    }
    .contact {
      color: var(--primary-blue-500);
    }
    .price {
      color: var(--primary-500);
    }
    .date {
    }
  }
  @media (max-width: 1250px) {
    .article-container {
      display: grid;

      .user__details {
        grid-area: a;
      }
      .freigth__details-departure {
        grid-area: b;
      }
      .freigth__details-destiny {
        grid-area: c;
      }
      .freigth__details-colect {
        grid-area: d;
      }
      .truck__details {
        grid-area: e;
      }
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "a b d e"
        "a c d e";
    }
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    .avaible-cont {
      row-gap: 5px;
      margin: 0;
      padding: 1rem;
      .box {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
      }
    }
    .close {
      display: grid;
    }
    .close-container {
      position: absolute;
      left: -5px;
      top: -5px;
      #cl {
        font-size: 3rem;
      }
    }

    .aside-mobile-btn {
      display: block;
    }
    .aside-cnt {
      visibility: hidden;
      opacity: 0;
      background-color: var(--blue-ocn);
      transform: translateX(600px);
      transition: all 0.5s ease;
      label {
        color: var(--white);
        text-transform: capitalize;
      }
    }
    .active-fil {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 650px) {
    .article-container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "a b d"
        "a c d"
        "e e e";
    }
    .truck__details {
      display: grid;
      margin-top: 2rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 550px) {
    .article-container {
      grid-template-columns: 1fr 1fr;
      row-gap: 5px;
      grid-template-areas:
        "a  d"
        "e  b"
        "e  c";
    }
    .truck__details {
      grid-template-columns: 1fr;
    }
  }
  //single
  .single__content {
    background-color: transparent;
    padding: 10rem;
    width: 100%;
  }
  @media (max-width: 420px) {
    .article-container {
      grid-template-columns: 1fr;
      row-gap: 5px;
      grid-template-areas: "a" "e" "e" "d" "b" "c";
    }
    .box {
      div {
        padding: 0;
        margin: 0;
      }
    }
  }

  .back-to-top-content {
    width: 5rem;
    height: 5rem;
    position: fixed;
    border-radius: 50%;
    background-color: var(--red-org);
    display: grid;
    place-content: center;
    left: 5%;
    bottom: 2rem;
    cursor: pointer;
    animation: bounce 1s infinite;
    z-index: 5;
  }
  .backo-to-top {
    width: 2px;
    height: 2rem;
    background-color: var(--blue-ocn);
    &::after,
    &::before {
      content: "";
      width: 2px;
      height: 1.5rem;
      background-color: var(--blue-ocn);
      position: absolute;
      transform-origin: top;
    }
    &::after {
      transform: rotate(-45deg);
    }
    &::before {
      transform: rotate(45deg);
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  /* &::after, &::before{
    content: '';
    height: ;
  } */
`,H3=async({_id:e},t)=>{try{return(await D.get(`/api/v1/fretes/single/${e}`)).data}catch(n){t.rejectWithValue(n)}},Q3=async(e,t)=>{const{page:n}=t.getState().singleFrete;try{console.log(e);const{data:r}=await D.get(`/api/v1/fretes/client_showcase/${e.createdBy}/frete-user?page=${n}`);return r}catch(r){console.log(r)}},If={isLoading:!1,singleFrete:[$j()],userId:[],freteClientShowCase:[],isClienteShowcaseOpen:!1,totalFretes:0,numOfPage:1,page:1,clienteShowcaseEvent:"cliente showcase pag"},Lc=q("singleFrete/getSingleFrete",H3),Dr=q("singleFrete/getFreteClientShowCase",Q3),ay=Ut({name:"singleFrete",initialState:If,reducers:{showLoading:e=>{e.isLoading=!0},openClienteShowcase:e=>{e.isClienteShowcaseOpen=!0,console.log(e.isClienteShowcaseOpen)},closeClienteShowcase:e=>{e.isClienteShowcaseOpen=!1},changePageOnClienteShowcase:(e,{payload:t})=>{e.page=t},clearObjectSingle:()=>If},extraReducers:e=>{e.addCase(Lc.pending,t=>{t.isLoading=!0}).addCase(Lc.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{frete:r,userId:a}=n;t.singleFrete=r,t.userId=a,t.isDeleteStatus=r.isDeleteStatus}).addCase(Lc.rejected,t=>{t.isLoading=!1}).addCase(Dr.pending,t=>{t.isLoading=!0}).addCase(Dr.fulfilled,(t,{payload:n})=>{t.isLoading=!1;const{fretes:r,numOfPage:a,totalFretes:s}=n;t.freteClientShowCase=r,t.numOfPage=a,t.totalFretes=s}).addCase(Dr.rejected,t=>{t.isLoading=!1})}}),{showLoading:nE,openClienteShowcase:G3,closeClienteShowcase:Df,changePageOnClienteShowcase:K3,clearObjectSingle:rE}=ay.actions,Y3=ay.reducer,Mf=V.forwardRef(({frete:e,userData:t,index:n},r)=>{const a=F();let s=We(e==null?void 0:e.colectDate);const i=o.jsxs("ul",{className:"article-container",children:[o.jsxs("div",{className:"user__details",children:[o.jsxs("p",{className:"paragraph-frete-desc name",children:["Contratante: ",e==null?void 0:e.name]}),o.jsxs("p",{className:"paragraph-frete-desc",children:["Email: ",o.jsx("span",{className:"contact",children:e==null?void 0:e.email})]}),o.jsxs("p",{className:"paragraph-frete-desc",children:["tel:",o.jsxs("span",{className:"contact",children:[" ",t!=null&&t.role?`${e.phone}`:null]})]}),o.jsxs("p",{className:"paragraph-frete-desc",children:["Valor:"," ",o.jsxs("span",{className:"price",children:[t!=null&&t.role?`${e.price}`:"","R$"]})]})]}),o.jsxs("div",{className:"freigth__details-departure",children:[o.jsx("h5",{children:"Partida"}),o.jsxs("p",{className:"paragraph-frete-desc sortStatus",children:["Estado: ",e.sortStatus]}),o.jsxs("p",{className:"paragraph-frete-desc city",children:["Cidade: ",e.city]})]}),o.jsxs("div",{className:"freigth__details-destiny",children:[o.jsx("h5",{children:"Destino"}),o.jsxs("p",{className:"paragraph-frete-desc",children:["Estado: ",e.destiny]}),o.jsxs("p",{className:"paragraph-frete-desc",children:["Cidade: ",e.toCity]})]}),o.jsxs("div",{className:"freigth__details-colect",children:[o.jsxs("p",{className:"date paragraph-frete-desc colectDate",children:["Coleta: ",s]}),o.jsxs("p",{className:"paragraph-frete-desc loadType",children:["Carga: ",e.loadType]}),o.jsxs("p",{className:"paragraph-frete-desc",children:["Cobertura: ",e.canvas]})]}),o.jsxs("div",{className:"truck__details",children:[o.jsx("p",{className:"paragraph-frete-desc heavy",children:e.heavy===""?o.jsx("span",{style:{display:"none"}}):`veículo: ${e.heavy}`}),o.jsx("p",{className:"paragraph-frete-desc medium",children:e.medium===""?o.jsx("span",{style:{display:"none"}}):`veículo: ${e.medium}`}),o.jsx("p",{className:"paragraph-frete-desc light",children:e.light===""?o.jsx("span",{style:{display:"none"}}):`veículo: ${e.light}`}),o.jsx("p",{className:"paragraph-frete-desc bodyworkOpen",children:e.bodyworkOpen===""?o.jsx("span",{style:{display:"none"}}):`Carroceria: ${e.bodyworkOpen}`}),o.jsx("p",{className:"paragraph-frete-desc bodyworkClosed",children:e.bodyworkClosed===""?o.jsx("span",{style:{display:"none"}}):`Carroceria: ${e.bodyworkClosed}`}),o.jsx("p",{className:"paragraph-frete-desc bodyworkSpecial",children:e.bodyworkSpecial===""?o.jsx("span",{style:{display:"none"}}):`Carroceria: ${e.bodyworkSpecial}`})]})]});return r?o.jsx(Uf,{className:"box",id:`${n||"last"}`,onClick:()=>{a(Of()),a(Hu(e)),a(Dr({createdBy:e.createdBy}))},ref:r,children:i}):o.jsx(Uf,{className:"box",id:`${n||"0"}`,onClick:()=>{a(Of()),a(Hu(e)),a(Dr({createdBy:e.createdBy}))},children:i})}),Uf=T.article`
  display: block;
  background-color: var(--white);
  width: calc(100vw - 315px);
  cursor: pointer;
  .target-search {
    color: var(--red-org);
    text-decoration: underline;
  }
`;function sy(){let{isLoading:e,page:t,hasNextPage:n,eventType:r}=z(d=>d.allFretes);const{fretes:a,userData:s}=py(),i=F(),l=_.useRef(),c=_.useCallback(d=>{e||(l.current&&l.current.disconnect(),l.current=new IntersectionObserver(p=>{var m;(m=p[0])!=null&&m.isIntersecting&&n&&r[1]!=="Abort"&&i(Vu(t+1))}),d&&l.current.observe(d))},[e,n]),u=a.map((d,p)=>a.length===p+1?o.jsx(Mf,{ref:c,userData:s,frete:d},p+1):o.jsx(Mf,{index:p,userData:s,frete:d},p));return o.jsx(X3,{className:"avaible-cont",children:u})}const X3=T.div`
  .box {
    margin: 2.5px 0 0 2.5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 3px;
  }
  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .aside-mobile-btn {
    cursor: pointer;
    margin-top: 4px;
    height: 60px;
  }
  .aside-toggle {
    color: var(--primary-300);
    background: transparent;
    border: transparent;
    font-size: 4.5rem;
    svg {
      cursor: pointer;
    }
  }
`;function J3(e,t,n,r){var a,s,i;t!==200&&(e==="Informe o nome"&&(r=1),e==="Informe o email"&&(r=2),e==="Informe o telefone"&&(r=3),e==="Informe o estado partida"&&(r=4),e==="Informe a partida"&&(r=5),e==="Informe o estado destino"&&(r=6),e==="Informe o destino"&&(r=7),e==="Informe o tipo de carga"&&(r=8),e==="Informe a cobertura da carroceria"&&(r=9),(e==="Informe a data de coleta"||e==="Verifique a data")&&(r=10),e==="Informe o valor"&&(r=11),e==="Informe a descrição"&&(r=12),(e.startsWith("Mínimo")||e.startsWith("Máximo"))&&(r=Z3(e,r)),(s=(a=document.querySelector(`.inp${r}`))==null?void 0:a.classList)==null||s.add("target"),(i=document.querySelector(`.inp${r}`))==null||i.setAttribute("id","validação"),setTimeout(()=>{var l;(l=document.getElementById("validação"))==null||l.scrollIntoView({behavior:"smooth",block:"center"}),n(Wk())},500),setTimeout(()=>{var l,c,u;(c=(l=document.querySelector(`.inp${r}`))==null?void 0:l.classList)==null||c.remove("target"),(u=document.querySelector(`.inp${r}`))==null||u.removeAttribute("id","validação")},2500))}const Z3=(e,t)=>(e==="Mínimo 3 caracteres nome"&&(t=1),e==="Mínimo 4 caracteres email"&&(t=2),e==="Mínimo 6 caracteres telefone"&&(t=3),e==="Mínimo 2 caracteres partida"&&(t=5),e==="Mínimo 2 caracteres destino"&&(t=7),e==="Mínimo 2 caracteres carga"&&(t=8),e==="Máximo 20 caracteres cobertura"&&(t=9),e==="Mínimo 10 e máximo 500 caracteres descrição"&&(t=12),t),eC=()=>{const e=document==null?void 0:document.querySelector(".phone"),t=document==null?void 0:document.querySelector(".name"),n=document==null?void 0:document.querySelector(".email"),r=document==null?void 0:document.querySelector(".city"),a=document==null?void 0:document.querySelector(".to-city"),s=document==null?void 0:document.querySelector(".price"),i=document==null?void 0:document.querySelector(".date"),l=document==null?void 0:document.querySelector(".load"),c=document==null?void 0:document.querySelector(".message-text");window.addEventListener("click",function(u){var d,p,m,v,h,y,w,g,f,x,b,j,k;!(e!=null&&e.contains(u.target))&&((d=e==null?void 0:e.attributes.getNamedItem("value"))==null?void 0:d.nodeValue.length)<6?e==null||e.classList.add("length_lower"):this.setTimeout(()=>{e==null||e.classList.remove("length_lower")},1e3),!(t!=null&&t.contains(u.target))&&((p=t==null?void 0:t.attributes.getNamedItem("value"))==null?void 0:p.nodeValue.length)<3?t==null||t.classList.add("length_lower"):this.setTimeout(()=>{t==null||t.classList.remove("length_lower")},1e3),!(n!=null&&n.contains(u.target))&&((m=n==null?void 0:n.attributes.getNamedItem("value"))==null?void 0:m.nodeValue.length)<5?n==null||n.classList.add("length_lower"):this.setTimeout(()=>{n==null||n.classList.remove("length_lower")},1e3),!(r!=null&&r.contains(u.target))&&((v=r==null?void 0:r.attributes.getNamedItem("value"))==null?void 0:v.nodeValue.length)<2?r==null||r.classList.add("length_lower"):this.setTimeout(()=>{r==null||r.classList.remove("length_lower")},1e3),!(a!=null&&a.contains(u.target))&&((h=a==null?void 0:a.attributes.getNamedItem("value"))==null?void 0:h.nodeValue.length)<2?a==null||a.classList.add("length_lower"):this.setTimeout(()=>{a==null||a.classList.remove("length_lower")},1e3),!(s!=null&&s.contains(u.target))&&((g=(w=(y=s==null?void 0:s.attributes)==null?void 0:y.getNamedItem("value"))==null?void 0:w.nodeValue)==null?void 0:g.length)<1?s==null||s.classList.add("length_lower"):this.setTimeout(()=>{s==null||s.classList.remove("length_lower")},1e3),!(i!=null&&i.contains(u.target))&&((b=(x=(f=i==null?void 0:i.attributes)==null?void 0:f.getNamedItem("value"))==null?void 0:x.nodeValue)==null?void 0:b.length)<1?i==null||i.classList.add("length_lower"):this.setTimeout(()=>{i==null||i.classList.remove("length_lower")},1e3),!(l!=null&&l.contains(u.target))&&((j=l==null?void 0:l.attributes.getNamedItem("value"))==null?void 0:j.nodeValue.length)<1?l==null||l.classList.add("length_lower"):this.setTimeout(()=>{l==null||l.classList.remove("length_lower")},1e3),!(c!=null&&c.contains(u.target))&&((k=c==null?void 0:c.childNodes[0])==null?void 0:k.nodeValue.length)<10?c==null||c.classList.add("length_lower"):this.setTimeout(()=>{c==null||c.classList.remove("length_lower")},1e3)})};function tC(){const e=document==null?void 0:document.querySelector(".leave"),t=document==null?void 0:document.querySelector(".destiny");window.addEventListener("click",function(n){!(t!=null&&t.contains(n.target))&&(t==null?void 0:t.value)===""?t==null||t.classList.add("unselected-inp"):t==null||t.classList.remove("unselected-inp"),!(e!=null&&e.contains(n.target))&&(e==null?void 0:e.value)===""?e==null||e.classList.add("unselected-inp"):e==null||e.classList.remove("unselected-inp")})}const oy=({name:e,email:t,city:n,sortStatus:r,price:a,states:s,phone:i,text:l,handleChange:c,bodyworkSpecialOpt:u,bodyworkSpecial:d,bodyworkClosedOpt:p,bodyworkClosed:m,bodyworkOpenOpt:v,bodyworkOpen:h,lightOpt:y,light:w,mediumOpt:g,medium:f,heavyOpt:x,heavy:b,colectDate:j,loadType:k,toCity:N,destiny:E,destinyStates:A,canvas:$,msg:W,status:G})=>{const re=new URLSearchParams(window.location.search).get("edit"),de=F();let M;return W!==""&&J3(W.toString(),G,de,M),eC(),tC(),o.jsxs(nC,{className:re?"edit_frete-container":"publish_frete-container",children:[o.jsxs("div",{className:"d1",children:[o.jsx(K,{type:"text",name:"name",value:e,labelText:"Nome",autoComplete:"name",autocorrect:"off",inputmode:"name",spellcheck:"false",ariaInvalid:"false",labelClass:"animated-label",handleChange:c,placeholder:"nome do contratante",index:1,inpClass:"name",min:3}),o.jsx(K,{type:"email",name:"email",value:t,labelText:"Email",autoComplete:"email",autocorrect:"off",inputmode:"email",spellcheck:"false",ariaInvalid:"false",min:6,labelClass:"animated-label",handleChange:c,placeholder:"Email",index:2,inpClass:"email"}),o.jsx(K,{type:"tel",name:"phone",value:i,spellcheck:"false",autoComplete:"tel",autocorrect:"off",max:15,min:6,labelText:"telefone",labelClass:"animated-label",ariaInvalid:"false",handleChange:c,placeholder:"(11) 99999-9999",index:3,inpClass:"phone"})]}),o.jsxs("div",{className:"d2",children:[o.jsx("p",{id:"paragraph",children:"Informações de partida e chegada"}),o.jsx(Ie,{name:"sortStatus",value:r,handleChange:c,labelText:"Partida",sorts:s,index:4,seleClass:"leave"}),o.jsx(K,{type:"text",name:"city",value:n,labelText:"Cidade",inpClass:"city",autoComplete:"off",labelClass:"animated-label",handleChange:c,placeholder:"Partida",index:5,min:2}),o.jsx("div",{className:"break-line"}),o.jsx(Ie,{name:"destiny",value:E,handleChange:c,labelText:"Destino",labelClass:"animated-label",sorts:A,index:6,seleClass:"destiny"}),o.jsx(K,{type:"text",name:"toCity",value:N,labelText:"Cidade",autoComplete:"off",inpClass:"to-city",labelClass:"animated-label",handleChange:c,placeholder:"Destino",index:7,min:2})]}),o.jsxs("div",{className:"d3",children:[o.jsx("p",{id:"paragraph",children:"Tipo de carroceria"}),o.jsx(Ie,{name:"bodyworkSpecial",value:d,handleChange:c,labelText:"Especiais",sorts:u}),o.jsx(Ie,{name:"bodyworkClosed",value:m,handleChange:c,labelText:"Fechada",sorts:p}),o.jsx(Ie,{name:"bodyworkOpen",value:h,handleChange:c,labelText:"Aberta",sorts:v})]}),o.jsxs("div",{className:"d4",children:[o.jsx("p",{id:"paragraph",children:"Tipos de caminhão"}),o.jsx(Ie,{name:"light",value:w,handleChange:c,labelText:"Leve",sorts:y}),o.jsx(Ie,{name:"medium",value:f,handleChange:c,labelText:"Médio",sorts:g}),o.jsx(Ie,{name:"heavy",value:b,handleChange:c,labelText:"Pesado",sorts:x})]}),o.jsxs("div",{className:"d5",children:[o.jsx("p",{id:"paragraph",children:"Detalhe e preço do frete"}),o.jsx(K,{type:"text",name:"loadType",value:k,labelText:"Carga",autoComplete:"off",inpClass:"load",labelClass:"animated-label",handleChange:c,placeholder:"Tipo de carga",index:8,min:2}),o.jsx(K,{type:"text",name:"canvas",value:$,labelText:"Cobertura",inpClass:"canvas",labelClass:"animated-label",handleChange:c,placeholder:"Aberta ou fechada?",index:9}),o.jsx(K,{type:"datetime-local",name:"colectDate",value:j,labelText:"Coleta",inpClass:"date",handleChange:c,placeholder:"Data de coleta",index:10}),o.jsx(K,{type:"number",name:"price",value:a,labelText:"Valor",inpClass:"price",labelClass:"animated-label",handleChange:c,placeholder:"R$",index:11,min:1})]}),o.jsxs("div",{className:"msg d6",children:[o.jsx("p",{children:"Descreva os detalhes do frete"}),o.jsx("textarea",{name:"text",id:"text",maxLength:500,minLength:10,className:"input inp12 message-text",onChange:c,defaultValue:l})]})]})},nC=T.div`
  #label,
  label,
  #label__from-opt,
  .form-label {
    color: var(--grey-600);
    font-size: 1.6rem;
  }
  .msg {
    display: flex;
    flex-direction: column;
  }
  .target {
    background-color: var(--red-light);
  }
  .length_lower,
  .unselected-inp {
    border: 1px solid var(--clr-primary-red-5);
  }
`,rC=T.div`
  .edit_frete-container {
    position: relative;
    margin-top: 10rem;
    .d1,
    .d2,
    .d3 {
      padding: 2rem;
      div {
        width: 50%;
        display: grid;
        justify-content: end;
        margin-top: 1rem;
        width: 70%;
      }
    }
    .d4,
    .d5,
    .d6 {
      padding: 2rem;
      div {
        width: 70%;
        display: grid;
        justify-content: end;
        margin: 0;
        margin-top: 1rem;
      }
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      text-align: center;
      margin-bottom: 2rem;
    }
    input,
    select {
      width: 20rem;
      height: 4rem;
      margin: 0;
    }
    .msg {
      display: flex;
      justify-content: center;
      text-align: center;
      #text {
        height: 10rem;
      }
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    //style do submit-btn no app.css linha 166
    #submit-btn {
      margin-top: 3rem;
    }
  }
  @media (max-width: 920px) {
    .edit_frete-container {
      grid-template-columns: 1fr;
      margin: 1rem 1px;
      .d1,
      .d2,
      .d3,
      .d4,
      .d5,
      .d6 {
        display: grid;
        row-gap: 1rem;
      }
      .d2 {
        row-gap: 2rem;
      }
      .form-box,
      #form-box,
      .form-opt,
      #form-opt {
        display: block !important;
        margin: 0 auto;
        width: 90%;
        input,
        select {
          width: 100%;
        }
      }
    }
    margin: 0;
    margin-bottom: 3rem;

    .btn-container {
      margin-bottom: 5rem;
    }
  }
  @media (max-width: 470px) {
    .edit_frete-container {
      .d1,
      .d2,
      .d3,
      .d4,
      .d5,
      .d6 {
        width: 100%;
        & > * {
          margin-left: 2rem;
        }
      }
    }
  }
`,aC=()=>{const{fretes:e,sortStatus:t,destiny:n,name:r,email:a,phone:s,price:i,text:l,city:c,toCity:u,bodyworkSpecial:d,bodyworkClosed:p,bodyworkOpen:m,light:v,medium:h,heavy:y,colectDate:w,loadType:g,canvas:f,isLoading:x,msg:b}=z(M=>M.frete),{states:j,bodyworkSpecialOpt:k,bodyworkClosedOpt:N,bodyworkOpenOpt:E,lightOpt:A,mediumOpt:$,heavyOpt:W,destinyStates:G}=z(M=>M.allFretes),ne=F(),re=M=>{M.preventDefault();const se=M.target.name,P=M.target.value;ne(Bv({name:se,value:P}))},de=M=>{M.preventDefault(),ne(Uk()),ne(Co({...e,name:r,price:i,email:a,sortStatus:t,text:l,city:c,phone:s,toCity:u,canvas:f,colectDate:w,loadType:g,bodyworkSpecial:d,bodyworkClosed:p,bodyworkOpen:m,light:v,medium:h,heavy:y,destiny:n}))};return o.jsx(rC,{children:o.jsxs(Ne,{onSubmit:de,children:[o.jsx(oy,{name:r,email:a,city:c,toCity:u,phone:s,price:i,colectDate:w,loadType:g,canvas:f,states:j,handleChange:re,bodyworkSpecialOpt:k,bodyworkClosedOpt:N,bodyworkOpenOpt:E,lightOpt:A,mediumOpt:$,destinyStates:G,heavyOpt:W,heavy:y,sortStatus:t,destiny:n,bodyworkSpecial:d,bodyworkClosed:p,bodyworkOpen:m,light:v,medium:h,msg:b}),o.jsx("div",{className:"btn-container",children:o.jsx("button",{type:"submit",id:"submit-btn",disabled:x,children:x?"Editando...":"Editar"})})]})})},sC=T.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 85%;
  margin: 0 auto;
  background-color: var(--white);
  z-index: 555555;
  @media (min-width: 2000px) {
    width: 1200px;
  }
  .form-box {
    display: grid;
    label {
      grid-area: label;
    }
    input {
      grid-area: input;
    }
    grid-template-areas: "label" "input";
  }
  .form-opt {
  }
  .form-box,
  .form-opt {
    display: grid;
    padding: 1rem;
    width: 60%;
    margin: 0 auto;
    place-self: center;
    input,
    select {
      margin: 0;
      height: 3rem;
    }
  }
  p,
  h3 {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.6rem;
  }
  .d6 {
    display: grid;
    text-align: center;
    label {
      margin: 1rem 0;
    }
    textarea {
      height: 15rem;
      width: 50%;
      place-self: center;
    }
  }
  @media (max-width: 980px) {
    .publish_frete-container {
      label {
      }
      .d1,
      .d2,
      .d3 {
        :not(label, p) {
        }
        div {
          display: grid;
          align-items: unset;
        }
      }
      .d4,
      .d5,
      .d6 {
        div {
          display: grid;
          align-items: unset;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .publish_frete-container {
      grid-template-columns: 1fr;
      margin: 0;
      margin-bottom: 3rem;
    }
    .btn-container {
      margin-bottom: 5rem;
    }
    .d6 {
      padding: 1rem;
      textarea {
        width: 100%;
      }
    }
  }
  @media (max-width: 470px) {
    .publish_frete-container {
      .d1,
      .d2,
      .d3,
      .d4,
      .d5 {
        margin-left: 4rem;
      }
    }
  }
  @media (max-width: 360px) {
    .publish_frete-container {
      .d1,
      .d2,
      .d3,
      .d4,
      .d5 {
        padding-right: 0;
        & > *:not(p) {
          margin-left: 2rem;
        }
      }
      textarea {
        margin: 0 !important;
      }
    }
  }
  .btn-container {
    display: grid;
    margin-top: 3rem;
    #submit-btn {
      margin-bottom: 3rem;
      place-self: center;
    }
  }
`,oC=()=>{const{states:e,sortStatus:t,destiny:n,name:r,email:a,phone:s,price:i,text:l,city:c,toCity:u,bodyworkSpecialOpt:d,bodyworkSpecial:p,bodyworkClosedOpt:m,bodyworkClosed:v,bodyworkOpenOpt:h,bodyworkOpen:y,lightOpt:w,light:g,mediumOpt:f,medium:x,heavy:b,heavyOpt:j,colectDate:k,loadType:N,canvas:E,destinyStates:A,isLoading:$,msg:W,status:G}=z(M=>M.frete),ne=F(),re=M=>{M.preventDefault(),ne(No({name:r,price:i,email:a,sortStatus:t,text:l,city:c,phone:s,toCity:u,canvas:E,colectDate:k,loadType:N,bodyworkSpecial:p,bodyworkClosed:v,bodyworkOpen:y,light:g,medium:x,heavy:b,destiny:n}))},de=M=>{const se=M.target.name,P=M.target.value;ne(Bv({name:se,value:P}))};return o.jsxs(sC,{children:[o.jsx("div",{className:"title",children:o.jsx("h3",{children:"Publique seu frete"})}),o.jsxs(Ne,{onSubmit:re,children:[o.jsx(oy,{name:r,email:a,city:c,toCity:u,phone:s,price:i,colectDate:k,loadType:N,canvas:E,states:e,handleChange:de,bodyworkSpecialOpt:d,bodyworkClosedOpt:m,bodyworkOpenOpt:h,lightOpt:w,mediumOpt:f,destinyStates:A,heavyOpt:j,heavy:b,sortStatus:t,destiny:n,bodyworkSpecial:p,bodyworkClosed:v,bodyworkOpen:y,light:g,medium:x,text:l,msg:W,status:G}),o.jsx("div",{className:"btn-container",children:o.jsx(Te,{handleClick:"submitType",loading:$,loadingText:"Processando",text:"Publicar",type:"submit",width:"18rem",height:"5rem",margin:"0 0 3rem 0",msg:W,givemeCheckMark:"yes"})})]})]})},iC=()=>o.jsx(lC,{children:o.jsx(oC,{})}),lC=T.main`
  min-height: 100vh;
  position: relative;
`,jp=({numOfPage:e,event:t,page:n})=>{var w,g,f,x,b,j;const r=F(),{fretes:a,freteHistoric:s}=z(k=>k.allFretes),{freteClientShowCase:i}=z(k=>k.singleFrete);let l,c={},u={},d={};switch(t){case"fretes pag":c={...c,fretes:a},u={...u,page:n},d={...d,numOfPage:e},l=Vu;break;case"cliente showcase pag":c={...c,freteClientShowCase:i},u={...u,page:n},d={...d,numOfPage:e},l=K3;break;case"client freigth event":c={...c,fretes:a},u={...u,page:n},d={...d,numOfPage:e},l=Vu;break;case"historic freigth event":c={...c,freteHistoric:s},u={...u,page:n},d={...d,numOfPage:e},l=Nk;break;default:console.log("no envent");break}const p=()=>{let k=u.page+1;k>d.numOfPage&&(k=1),r(l(k))},m=()=>{let k=u.page-1;k<1&&(k=d.numOfPage),r(l(k))},v=k=>{r(l(k))},h=({pNumber:k,active:N})=>o.jsx("button",{onClick:()=>v(k),onMouseEnter:()=>Zk({pNumber:k}),onMouseLeave:()=>e2({pNumber:k}),type:"button-number",className:N?`animation-${k} page-btn selected`:`animation-${k} page-btn`,children:k},k),y=()=>{const k=[];return d.numOfPage!==1&&k.push(h({pNumber:1,active:u.page===1})),u.page>3&&k.push(o.jsx("span",{className:"pages-dots",children:"..."},"dots-1")),u.page!==1&&u.page!==2&&k.push(h({pNumber:u.page-1,active:!1})),u.page!==1&&u.page!==d.numOfPage&&k.push(h({pNumber:u.page,active:!0})),u.page!==d.numOfPage&&u.page!==d.numOfPage-1&&k.push(h({pNumber:u.page+1,active:!1})),u.page<d.numOfPage-2&&k.push(o.jsx("span",{className:"pages-dots-more",children:"..."},"dots+1")),k.push(h({pNumber:d.numOfPage,active:u.page===d.numOfPage})),k};return d.numOfPage>9&&((g=(w=document.querySelector(".pages-dots-more"))==null?void 0:w.classList)==null||g.add("margin-setup")),d.numOfPage>99&&((x=(f=document.querySelector(".pages-dots-more"))==null?void 0:f.classList)==null||x.replace("margin-setup","margin-setup-bigger")),u.page>100&&((j=(b=document.querySelector(".pages-dots-more"))==null?void 0:b.classList)==null||j.add("fixing-left-margin")),o.jsx(cC,{className:"pagination",children:o.jsxs("div",{className:(c==null?void 0:c.length)<6?"btn-cont check":"btn-cont",children:[o.jsx("button",{onClick:m,type:"button",className:"button-back"}),o.jsx("div",{className:"btn-container",children:y()}),o.jsx("button",{onClick:p,className:"button-next",type:"button"})]})})},cC=T.div`
  width: 45rem;
  margin: 1rem 0;
  .button-next {
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    display: grid;
    place-content: center;
    border: transparent;
  }

  .button-next::before,
  .button-next::after {
    content: "";
    width: 2rem;
    height: 2px;
    background-color: #000000;
    transform-origin: right;
    border-radius: 10px;
    backface-visibility: hidden;
    margin: -0.9px;
  }

  .button-next::after {
    transform: rotate(40deg);
  }

  .button-next::before {
    transform: rotate(-40deg);
  }

  .button-back {
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    display: grid;
    place-content: center;
    border: transparent;
  }

  .button-back::before,
  .button-back::after {
    content: "";
    width: 2rem;
    height: 2px;
    background-color: #000000;
    transform-origin: left;
    border-radius: 10px;
    backface-visibility: hidden;
    margin: -0.9px;
  }

  .button-back::after {
    transform: rotate(40deg);
  }

  .button-back::before {
    transform: rotate(-40deg);
  }
  .btn-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .page-btn {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        border: transparent;
        background-color: transparent;
        color: var(--grey-700);
        font-size: 2rem;
        margin: 0 5px 0 5px;
        transition: all 0.4s ease;
      }

      .selected {
        background-color: var(--grey-200);
        cursor: unset;
        background-color: var(--grey-200) !important;
      }

      .pages-dots-more,
      .pages-dots {
        font-size: 4rem;
        padding-bottom: 1rem;
        margin-right: 2px;
      }

      .margin-setup {
        margin-right: 1px;
      }

      .margin-setup-bigger {
        margin-right: 6px;
      }

      .fixing-left-margin {
        margin-left: 6px;
      }
    }
  }

  .animated-hover {
    background-color: var(--grey-200) !important;
  }
`,Sp=()=>o.jsx("div",{className:"loading-container",style:{height:"100vh",width:"100%"},children:o.jsx("div",{className:"loader",style:{margin:"20rem auto"}})}),uC=()=>{let{freteHistoric:e,numOfPageHist:t,pageHistoric:n,totalFretesHist:r,msg:a,isLoading:s}=pr();const{isConcludedLoading:i}=z(l=>l.frete);return a="historic freigth event",i||s?o.jsx(Sp,{}):e.length?o.jsxs(dC,{className:"set-structure-for-historic",children:[o.jsx(ny,{}),o.jsxs("div",{className:"cliente_center-content",children:[e==null?void 0:e.map((l,c)=>o.jsx(pC,{className:"card-contaier-hist",id:`${c}`,children:o.jsxs("div",{className:`container_setup card_fhater-hist-${c}`,children:[o.jsx("div",{className:`card-hist front_hist-${c}  front__chield-hist-${c}`,children:o.jsx(ry,{fretes:l,histStatus:{histStatus:""},index:c})}),o.jsx("div",{className:`card-hist  back_hist-${c}`,children:o.jsx(ly,{fretes:l,index:c})})]})},c)),o.jsx(Mn,{})]}),o.jsx("div",{className:"page__bottom-content",children:o.jsx(jp,{numOfPage:t,page:n,totalFretes:r,event:a})})]}):o.jsx("div",{className:"empty-container",children:o.jsxs("h1",{className:"empty__freight-container",children:["Movendo o documento relacionado ao frete para essa sessão você pode adicionar notas referente ao frete... ",o.jsx("br",{}),o.jsx(S,{})]})})},dC=T.div`
  display: grid;
  .page__bottom-content {
    display: flex;
    place-content: center;
    align-items: center;
    .inp-btn {
      width: 8rem;
      height: 4rem;
      margin-left: 1rem;
      background-color: var(--clr-primary-orange-2);
      border: 1px solid var(--clr-primary-orange-3);
      border-radius: 3px;
    }
  }
`,pC=T.div`
  min-height: 51rem;
  .card__flipper {
    background-color: transparent;
    border: transparent;
  }
  .setup_delete-btn-hist {
    position: absolute;
    left: 3rem;
    top: 1rem;
    color: var(--clr-primary-red-7);
  }
  margin: 2px;
  .card_fhater-hist-0,
  .card_fhater-hist-1,
  .card_fhater-hist-2,
  .card_fhater-hist-3,
  .card_fhater-hist-4,
  .card_fhater-hist-5 {
    border-radius: 3px;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    min-height: 51rem;
  }

  .card-hist {
    transition: all 0.9s ease;
    backface-visibility: hidden;
    background: var(--yellow-org);
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  .card-hist:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .back__chield-hist-0,
  .back__chield-hist-1,
  .back__chield-hist-2,
  .back__chield-hist-3,
  .back__chield-hist-4,
  .back__chield-hist-5 {
    transform: rotateY(180deg);
  }

  .back__chield-hist-0,
  .back__chield-hist-1,
  .back__chield-hist-2,
  .back__chield-hist-3,
  .back__chield-hist-4,
  .back__chield-hist-5 {
    transform: rotateY(0);
  }

  .front__chield-hist-0,
  .front__chield-hist-1,
  .front__chield-hist-2,
  .front__chield-hist-3,
  .front__chield-hist-4,
  .front__chield-hist-5 {
    transform: rotateY(-180deg);
  }
  @media (max-width: 950px) {
    min-height: 55rem;
    .card_fhater-hist-0,
    .card_fhater-hist-1,
    .card_fhater-hist-2,
    .card_fhater-hist-3,
    .card_fhater-hist-4,
    .card_fhater-hist-5 {
      min-height: 55rem;
    }
  }
  @media (max-width: 1200px) {
    .text_setup {
      padding: 15rem 8rem;
    }
    .text_setup {
      padding: 15rem 3rem;
    }
  }
  @media (max-width: 700px) {
    min-height: 85rem;
    .card_fhater-hist-0,
    .card_fhater-hist-1,
    .card_fhater-hist-2,
    .card_fhater-hist-3,
    .card_fhater-hist-4,
    .card_fhater-hist-5 {
      min-height: 85rem;
    }
  }
  @media (max-width: 490px) {
    .check-in-input {
      left: calc(100vw - 5rem) !important;
    }
  }
  //
`,mC=({linkTowhereNavigate:e})=>{setTimeout(()=>{const t=document.querySelector(".popup_content-links"),n=document.querySelector(".popup_content-display-links");if(!t||!n)return window.location.href=e;t.classList.add("show"),n.classList.add("show_contente")})},fC=({index:e})=>{document.querySelector(e?`.ballon-setup-${e}`:".ballon-setup").classList.replace(e?`ballon-${e}`:"ballon",e?`ballon-active-${e}`:"ballon-active"),document.querySelector(e?`.ballon_text-container-${e}`:".ballon_text-container").classList.replace(e?`idle-text-${e}`:"idle-text",e?`active-text-${e}`:"active-text")},hC=({index:e})=>{document.querySelector(e?`.ballon-setup-${e}`:".ballon-setup").classList.replace(e?`ballon-active-${e}`:"ballon-active",e?`ballon-${e}`:"ballon"),document.querySelector(e?`.ballon_text-container-${e}`:".ballon_text-container").classList.replace(e?`active-text-${e}`:"active-text",e?`idle-text-${e}`:"idle-text")},gC=({index:e})=>{setTimeout(()=>{var t,n,r,a,s;(n=(t=document.querySelector(`.ballon_text-container-${e}`))==null?void 0:t.classList)==null||n.add("already_on-limit-text"),(r=document.querySelector(`.ballon_text-container-${e}`))==null||r.setAttribute("id","already_on-limit-text"),(s=(a=document.querySelector(`.pulsing__animation-${e}`))==null?void 0:a.classList)==null||s.add("already_on-limit")})},iy=({link:e,icon:t,text:n,index:r})=>o.jsxs("div",{className:"ballon_container",children:[o.jsx("div",{className:r?`ballon-${r} ballon-setup-${r}`:"ballon ballon-setup"}),o.jsxs(vC,{className:"set-position",id:"ballon",children:[o.jsx("div",{className:r?`ballon_text-container-${r} idle-text-${r}`:"ballon_text-container idle-text",id:"text-id",children:o.jsx("p",{className:"ballon_text",children:n})}),o.jsx(S,{className:"ballon__animation-on-hover",onMouseEnter:()=>fC({index:r}),onMouseLeave:()=>hC({index:r}),to:e,children:o.jsx("div",{className:r?`pulsing__animation-${r}`:"pulsing__animation",children:o.jsx("i",{className:"warning",children:t})})})]})]}),vC=T.div`
  position: absolute;
  position: relative;
  .pulsing__animation {
    z-index: 901;
    height: 3rem;
    width: 3rem;
    /* background: linear-gradient(var(--clr-primary-orange-2), var(--red-org)); */
    display: grid;
    position: absolute;
    border-radius: 50%;
    margin: auto;
  }
  .ballon__animation-on-hover {
    place-self: center;
    margin-top: 4rem;
    margin-right: 3rem;
  }
  .warning {
    place-self: center;
    font-size: 2rem;
    margin-bottom: 5px;
    z-index: 1;
  }
  .ballon_text-container,
  .ballon_text-container-1,
  .ballon_text-container-2,
  .ballon_text-container-3,
  .ballon_text-container-4,
  .ballon_text-container-5,
  .ballon_text-container-6 {
    text-align: center;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 75%,
      0% 75%
    );
    transition: all 0.3s ease-in-out;
  }

  .pulsing__animation,
  .pulsing__animation-1,
  .pulsing__animation-2,
  .pulsing__animation-3,
  .pulsing__animation-4,
  .pulsing__animation-5,
  .pulsing__animation-6 {
    opacity: 0.9;
  }

  .pulsing__animation::before,
  .pulsing__animation::after,
  .pulsing__animation-1::before,
  .pulsing__animation-1::after,
  .pulsing__animation-2::before,
  .pulsing__animation-2::after,
  .pulsing__animation-3::before,
  .pulsing__animation-3::after,
  .pulsing__animation-4::before,
  .pulsing__animation-4::after,
  .pulsing__animation-5::before,
  .pulsing__animation-5::after,
  .pulsing__animation-6::before,
  .pulsing__animation-6::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 0;
  }
  .pulsing__animation::before,
  .pulsing__animation-1::before,
  .pulsing__animation-2::before,
  .pulsing__animation-3::before,
  .pulsing__animation-4::before,
  .pulsing__animation-5::before,
  .pulsing__animation-6::before {
    animation: pulse 2s ease-in-out infinite;
  }
  .pulsing__animation::after,
  .pulsing__animation-1::after,
  .pulsing__animation-2::after,
  .pulsing__animation-3::after,
  .pulsing__animation-4::after,
  .pulsing__animation-5::after,
  .pulsing__animation-6::after {
    animation: pulse 2s 1s ease-in-out infinite;
  }
  @keyframes pulse {
    100% {
      transform: scale(1.8);
    }
  }
  .idle-text,
  .idle-text-1,
  .idle-text-2,
  .idle-text-3,
  .idle-text-4,
  .idle-text-5,
  .idle-text-6 {
    visibility: hidden;
    opacity: 0;
  }
  .active-text,
  .active-text-1,
  .active-text-2,
  .active-text-3,
  .active-text-4,
  .active-text-5,
  .active-text-6 {
    visibility: visible;
    opacity: 1;
  }
`,ly=({fretes:e,index:t})=>{let{isLoading:n}=pr();const{heavy:r,medium:a,light:s,isDeleteStatus:i,bodyworkOpen:l,bodyworkClosed:c,bodyworkSpecial:u,destiny:d,toCity:p,loadType:m,colectDate:v,canvas:h,city:y,createdAt:w,name:g,email:f,text:x,sortStatus:b,price:j,phone:k,updatedAt:N,isConcluded:E,historicBy:A,_id:$}=e,W=F(),[G,ne]=_.useState(!1);e.numberOfUpdatesCount>=5&&gC({index:t+1,numberOfUpdatesCount:e==null?void 0:e.numberOfUpdatesCount}),new URL(window.location.href);let re=We(v),de=We(N),M=We(w);return o.jsx(o.Fragment,{children:o.jsxs(yC,{className:G?"desc historic-container":"desc",children:[o.jsxs("div",{className:"d1",id:"global",children:[o.jsx("h5",{className:"title",children:"Contratante"}),o.jsxs("p",{children:["Nome: ",g]}),o.jsx("a",{href:`mailto:${f}`,children:o.jsx("p",{className:"text",children:f})})]}),o.jsxs("div",{className:"d2",children:[o.jsx(l3,{name:"isConcluded",value:E,isLoading:n,freteId:$,index:t+1}),E?o.jsx(o.Fragment,{children:o.jsxs("div",{className:"d2_chield-historicPage",children:[o.jsx("h5",{children:"Anotações"}),A?o.jsx(o.Fragment,{children:o.jsx("div",{className:"check"})}):o.jsx(o.Fragment,{children:o.jsx(S,{to:`/client_page/historico-fretes/${$}`,className:"setup_edit-btn",onClick:()=>Xu({data:$,isEditing:!1},W),children:"Adicionar"})}),o.jsx("button",{type:"button",className:"setup_delete-btn card__flipper",onClick:()=>{document.querySelector(`.front_hist-${t}`).classList.remove(`front__chield-hist-${t}`),document.querySelector(`.back_hist-${t}`).classList.add(`front__chield-hist-${t}`)},id:`${$} ${t}`,children:"Verificar"}),o.jsx(S,{className:"setup_delete-btn-hist",onClick:()=>W(Ma({_id:$,isDeleteStatus:i,eventType:"freteHist"})),children:i?"Reverter":"Excluir"})]})}):o.jsxs("div",{className:"d2_chield-freightPage",children:[o.jsx(S,{to:`${$}?edit=true`,type:"button",className:"setup_edit-btn",onClick:()=>{W(Dk({freteId:$,city:y,createdAt:w,name:g,email:f,text:x,sortStatus:b,price:j,phone:k,heavy:r,medium:a,light:s,bodyworkOpen:l,bodyworkClosed:c,bodyworkSpecial:u,destiny:d,toCity:p,loadType:m,colectDate:v,canvas:h}))},children:"Editar"}),o.jsx(iy,{index:t+1,text:`numero de atualizações ${e.numberOfUpdatesCount} / 5`}),o.jsx(S,{className:"setup_delete-btn",onClick:()=>W(Ma({_id:$,isDeleteStatus:i})),children:i?"Reverter":"Excluir"})]})]}),o.jsxs("div",{className:"d3",id:"global",children:[o.jsx("h5",{className:"title",children:"Localização"}),o.jsxs("div",{className:"d3-chield",children:[o.jsxs("p",{children:["Partida: ",b]}),o.jsxs("p",{children:["Partida: ",y]})]}),o.jsxs("div",{className:"d3-chield",children:[o.jsx("p",{}),o.jsxs("p",{children:["Destino: ",d]}),o.jsxs("p",{children:["Destino: ",p]})]}),o.jsxs("p",{style:{placeSelf:"unset"},children:["Valor:",o.jsxs("span",{children:[" ",j]})]}),o.jsxs("p",{style:{placeSelf:"unset"},children:["Carga: ",m]}),o.jsxs("p",{style:{placeSelf:"unset"},children:["Telefone: ",k]})]}),o.jsxs("div",{className:"d4",id:"global",children:[o.jsxs("p",{className:"collect",children:["Coleta: ",re]}),o.jsxs("p",{children:["Criação: ",M]}),o.jsxs("p",{children:["Atualizado: ",de]})]}),o.jsxs("div",{className:"d5",id:"global",children:[o.jsx("h5",{className:"title",children:"Descrição do caminhão"}),o.jsxs("div",{className:"d5-chield",children:[o.jsx("p",{children:s!==""?`Caminhão leve: ${s}`:null}),o.jsx("p",{children:a!==""?`Caminhão médio: ${a}`:null}),o.jsx("p",{children:r!==""?`Caminhão pesado: ${r}`:null})]}),o.jsxs("div",{className:"d5-chield",children:[o.jsx("p",{children:h!==""?`Cobertura: ${h}`:null}),o.jsx("p",{children:l!==""?`Carroceria: ${l}`:null}),o.jsx("p",{children:c!==""?`Carroceria: ${c}`:null}),o.jsx("p",{children:u!==""?`Carroceria: ${u}`:null})]})]}),o.jsx("div",{className:"d6 add__scroll",id:"global",children:o.jsxs("p",{className:"text",children:[o.jsx("span",{children:"Descrição:"})," ",x]})})]},t)})},yC=T.ul`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  column-gap: 4px;
  font-size: 1.4rem;
  padding: 2rem;

  color: var(--grey-700);
  .title {
    margin-bottom: 1rem;
    font-weight: 800;
  }
  .d1,
  .d2,
  .d3,
  .d4,
  .d5,
  .d6 {
    margin-top: 2rem;
  }
  .d5,
  .d3,
  .d1 {
    border-right: 1px solid var(--grey-700);
  }
  .d6 {
    height: 10rem;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-300) var(--clr-primary-red-1);
  }
  .check-in {
    display: flex;
    .check-in-input {
      width: 4rem;
    }
    top: 1rem;
    right: 1rem;
    position: absolute;
  }

  .d2 {
    display: flex;
    flex-direction: column;
    align-items: end;
    a,
    button {
      font-size: 1.5rem;
    }
    .d2_chield-historicPage {
      h5 {
        width: fit-content;
        margin-bottom: 2rem;
      }
      .title {
        margin-bottom: 2rem;
      }
      .setup_edit-btn {
        color: var(--clr-primary-1);
      }
      .setup_delete-btn {
        margin-left: 3rem;
        color: var(--blue-ocn);
      }
    }

    .d2_chield-freightPage {
      .setup_edit-btn {
        color: var(--primary-300);
        font-size: 2rem;
      }
      .setup_delete-btn {
        margin-left: 4rem;
        color: var(--clr-primary-orange-3);
        font-size: 2rem;
      }

      //animations
      .pulsing__animation,
      .pulsing__animation-1,
      .pulsing__animation-2,
      .pulsing__animation-3,
      .pulsing__animation-4,
      .pulsing__animation-5,
      .pulsing__animation-6 {
        position: absolute;
        left: 6rem;
        top: -4rem;
        height: 1rem;
        width: 1rem;
      }
      .pulsing__animation::before,
      .pulsing__animation::after,
      .pulsing__animation-1::before,
      .pulsing__animation-1::after,
      .pulsing__animation-2::before,
      .pulsing__animation-2::after,
      .pulsing__animation-3::before,
      .pulsing__animation-3::after,
      .pulsing__animation-4::before,
      .pulsing__animation-4::after,
      .pulsing__animation-5::before,
      .pulsing__animation-5::after,
      .pulsing__animation-6::before,
      .pulsing__animation-6::after {
        background: var(--primary-300);
        opacity: 0.3;
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }
      .already_on-limit::before,
      .already_on-limit::after {
        background: var(--clr-primary-orange-3);
      }
      .already_on-limit-text,
      #already_on-limit-text {
        background: var(--clr-primary-orange-3);
      }
      .ballon_text-container,
      .ballon_text-container-1,
      .ballon_text-container-2,
      .ballon_text-container-3,
      .ballon_text-container-4,
      .ballon_text-container-5,
      .ballon_text-container-6 {
        position: relative;
        position: absolute;
        height: 8rem;
        width: 24rem;
        display: table;
        top: -13rem;
        right: -18.5rem;
        padding-top: 2rem;
        background: var(--primary-300);
        border-top-left-radius: 9px;
        border-top-right-radius: 3px;
      }
      .ballon_text-container-1,
      .ballon_text-container-2 {
        border-bottom-right-radius: 9px;
        top: -2rem;
        padding-top: 4rem;
        clip-path: polygon(
          50% 0,
          55% 25%,
          100% 25%,
          100% 100%,
          0 100%,
          0 25%,
          45% 25%
        );
      }
      .ballon_text-container-2 {
        right: -16.8rem;
        clip-path: polygon(
          55% 0,
          55% 25%,
          100% 25%,
          100% 100%,
          0 100%,
          0 25%,
          45% 25%
        );
      }
      .ballon_text-container-4,
      .ballon_text-container-6 {
        right: -16.8rem;
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 75%,
          55% 75%,
          55% 100%,
          45% 75%,
          0% 75%
        );
      }
      @media (max-width: 800px) {
        .ballon_text-container-1 {
          top: -2rem !important;
          padding-top: 4rem !important;
          clip-path: polygon(
            55% 0,
            55% 25%,
            100% 25%,
            100% 100%,
            0 100%,
            0 25%,
            45% 25%
          ) !important;
        }
        .ballon_text-container-2,
        #text-id {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 75%,
            55% 75%,
            55% 100%,
            45% 75%,
            0% 75%
          );
          padding-top: 2rem;
          top: -13rem;
          right: -16.8rem;
        }
        .ballon_text-container-5,
        #text-id {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 75%,
            55% 75%,
            55% 100%,
            45% 75%,
            0% 75%
          );
          padding-top: 2rem;
          top: -13rem;
          right: -16.8rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    display: block;
    .d5,
    .d3,
    .d1 {
      border-right: none;
    }
    .d2 {
      flex-direction: row;
      justify-content: center;
    }
  }
  @media (max-width: 490px) {
    .d2 {
      flex-direction: row;
      justify-content: unset;
    }
  }
`,xC=({fretes:e})=>{let t=We(e==null?void 0:e.colectDate);return o.jsxs(bC,{className:"client_frete-container-ul",id:"client_frete-container-showcase",children:[o.jsxs("div",{className:"sec_one-infos",children:[o.jsxs("p",{className:"frete_cliente-showcase",children:["Data/Coleta: ",t]}),o.jsxs("p",{className:"frete_cliente-showcase",children:["Carga: ",e==null?void 0:e.loadType]}),o.jsxs("p",{className:"frete_cliente-showcase",children:["Estado/Partida: ",e==null?void 0:e.sortStatus]})]}),o.jsxs("div",{className:"sec_two-infos",children:[o.jsxs("p",{className:"frete_cliente-showcase",children:["Estado/Chegada: ",e==null?void 0:e.destiny]}),(e==null?void 0:e.heavy)===""?null:o.jsxs("p",{className:"frete_cliente-showcase",children:["Veiculo: ",e==null?void 0:e.heavy]}),(e==null?void 0:e.medium)===""?null:o.jsxs("p",{className:"frete_cliente-showcase",children:["Veiculo: ",e==null?void 0:e.medium]}),(e==null?void 0:e.light)===""?null:o.jsxs("p",{className:"frete_cliente-showcase",children:["Veiculo: ",e==null?void 0:e.light]})]})]})},bC=T.ul`
  display: inline-flex;
  column-gap: 5rem;
  padding: 1.2rem 1rem 1.2rem 5rem;
  width: 100%;
  .frete_cliente-showcase {
    font-size: 1.5rem;
  }
`,wC=({createdBy:e})=>{let{freteClientShowCase:t,isLoading:n,page:r,numOfPage:a,totalFretes:s,clienteShowcaseEvent:i}=z(c=>c.singleFrete);const l=F();return _.useEffect(()=>{l(Dr({createdBy:e}))},[r]),o.jsx(o.Fragment,{children:n?o.jsx("div",{className:"loading-container",style:{height:"50rem",display:"grid"},children:o.jsx("div",{className:"loader"})}):o.jsxs(o.Fragment,{children:[o.jsxs(_C,{className:"shocase__container",children:[o.jsx("h4",{className:"frete_cliente-showcase",children:"Confira Também"}),o.jsx("h5",{className:"frete_cliente-showcase",children:"Outros Fretes do Mesmo"}),o.jsx("button",{id:"cl",onClick:()=>l(Df()),className:"close",children:"×"}),t==null?void 0:t.map((c,u)=>o.jsx(S,{className:"client_showcase-link",type:"button",onClick:()=>{l(Hu(c)),l(Df())},children:o.jsx(xC,{fretes:c})},u))]}),a>1&&o.jsx(jp,{numOfPage:a,page:r,totalFretes:s,event:i,createdBy:e})]})})},_C=T.div`
  h4,
  h5 {
    text-align: center;
  }
  .pagination {
    bottom: 2rem;
    right: 50%;
    transform: translate(-50%);
  }
`,jC=T.section`
  width: 100vw;

  .single__frete-content {
    overflow-x: hidden;
    display: grid;
    position: relative;

    .text-content {
      grid-area: text-content;
      padding: 10rem 15rem;
      span {
        color: var(--grey-700);
      }
      h3 {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: 1px;
        color: var(--dark-bl);
      }
    }
    .show__case-content {
      position: relative;
      grid-area: shows;
      width: 100%;
      border-radius: 0;
      background: var(--white);
    }
    .single-content {
      position: relative;
      grid-area: single;
    }
    .client_frete-container {
    }
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "single shows";
    .pagination {
      width: 35rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
    @media (max-width: 1100px) {
      .text-content {
        padding: 5rem 10rem;
      }
    }
    @media (max-width: 920px) {
      display: grid;
      grid-template-columns: 1fr;
      .single-content {
        width: 100%;
        display: grid;
        place-content: center;
        grid-column: 1 / 3;
        .text-content {
          padding-top: 20rem;
        }
      }
      .close,
      .show_cliente-showcase {
        visibility: visible;
        opacity: 1;
      }
      .show__case-content {
        visibility: hidden;
        transform: translate(600px);
        opacity: 0;
        transition: all 500ms ease-in;
      }
      .show-more {
        transform: translate(0);
        visibility: visible;
        opacity: 1;
      }

      @keyframes hidecase {
        0% {
          transform: translate(0);
        }
        100% {
          transform: translate(500px);
          display: none;
        }
      }
    }

    @media (max-width: 490px) {
      .show_cliente-showcase {
        font-size: 1.1rem;
        right: 1rem;
      }
    }
  }
  p,
  h5,
  h4,
  .email-container {
    color: var(--grey-700);
    font-size: 1.9rem;
    margin-top: 1rem;
  }
  .email {
    color: var(--clr-primary-orange-5);
  }
  .close {
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }
  .show__case-content {
    .shocase__container {
      display: grid;
      place-content: center;
      .pagination {
        right: 5%;
        bottom: 1%;
      }
    }
  }
  .show_cliente-showcase {
    position: absolute;
    top: 10rem;
    right: 10rem;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
    background-color: transparent;
    border: transparent;
    color: var(--red-org);
    font-size: 1.6rem;
  }
  .register-userData {
    position: absolute;
    bottom: 1%;
    left: 5%;
    a {
      color: var(--red-org);
    }
  }
`,cy=()=>{let{isClienteShowcaseOpen:e,totalFretes:t}=z(c=>c.singleFrete),{singleFrete:n}=z(c=>c.allFretes);const{userData:r}=py(),a=F();let s=We(n[0].colectDate),i=We(n[0].createdAt);if(n[0].updatedAt)var l=We(n[0].updatedAt);return o.jsx(jC,{children:o.jsxs("div",{className:"single__frete-content",children:[o.jsx("article",{className:"single-content",children:o.jsxs("ul",{className:"text-content",children:[o.jsx(S,{type:"button",className:"backward-arrow",onClick:()=>a(ak()),children:"←"}),o.jsxs("div",{className:"d1",children:[o.jsxs("h5",{children:["Nome: ",o.jsx("span",{className:"name",children:n[0].name})]}),o.jsx("div",{className:"email-container",children:r?o.jsx("a",{href:`mailto:${n[0].email}`,className:"email",children:n[0].email}):o.jsx("p",{children:"email"})}),o.jsxs("h4",{children:["Data para coleta:"," ",o.jsx("span",{className:"colect",children:s})]})]}),o.jsxs("div",{className:"d2",children:[o.jsxs("p",{children:["Tipo de carga: ",o.jsx("span",{children:n[0].loadType})]}),o.jsxs("p",{children:["Tipo de cobertura: ",o.jsx("span",{children:n[0].canvas})]}),o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Carroceria"}),n[0].bodyworkOpen===""?null:o.jsxs("p",{children:["Abertas:"," ",o.jsx("span",{className:"bodywork",children:n[0].bodyworkOpen})]}),n[0].bodyworkClosed===""?null:o.jsxs("p",{children:["Fechada:"," ",o.jsx("span",{className:"bodywork",children:n[0].bodyworkClosed})]}),n[0].bodyworkSpecial===""?null:o.jsxs("p",{children:["Especiais:"," ",o.jsx("span",{className:"bodywork",children:n[0].bodyworkSpecial})]}),o.jsx("h3",{children:"Veículo"}),n[0].heavy===""?null:o.jsxs("p",{children:["Pesado:"," ",o.jsx("span",{className:"vehicle",children:n[0].heavy})]}),n[0].medium===""?null:o.jsxs("p",{children:["Médio:"," ",o.jsx("span",{className:"vehicle",children:n[0].medium})]}),n[0].light===""?null:o.jsxs("p",{children:["Leve:"," ",o.jsx("span",{className:"vehicle",children:n[0].light})]})]})]}),o.jsxs("div",{className:"d3",children:[o.jsxs("p",{children:["Estado/Partida:"," ",o.jsx("span",{className:"locale",children:n[0].sortStatus})]}),o.jsxs("p",{children:["Cidade/Partida:"," ",o.jsx("span",{className:"city",children:n[0].city})]}),o.jsxs("p",{children:["Estado/Chegada:"," ",o.jsx("span",{className:"locale",children:n[0].destiny})]}),o.jsxs("p",{children:["Cidade/Chegada:"," ",o.jsx("span",{className:"city",children:n[0].toCity})]}),o.jsxs("p",{children:["valor:",o.jsxs("span",{className:"price",children:[" ",r?n[0].price:null]})]}),o.jsxs("p",{children:["telefone:"," ",o.jsx("span",{className:"tel",children:r?n[0].phone:null})]})]}),o.jsxs("div",{className:"d4",children:[o.jsxs("p",{children:["data de criação:"," ",o.jsx("span",{className:"locale",children:i})]}),o.jsxs("p",{children:["ultima atualização:"," ",o.jsx("span",{className:"locale",children:l})]})]}),o.jsx("div",{className:"d5",children:o.jsxs("p",{className:"text",children:["descrição:"," ",o.jsx("span",{className:"des-text",children:n[0].text})]})}),o.jsxs("button",{className:"show_cliente-showcase",onClick:()=>a(G3()),children:["Encontrar outros fretes desse cliente"," ",o.jsxs("span",{children:[t,"..."]})]}),r?null:o.jsxs("p",{className:"register-userData",children:["Cadastre-se e tenha acesso a todas as informações"," ",o.jsx(S,{to:"/cadastro",type:"button",children:"cadastrar"})]})]})}),o.jsx("article",{className:e?"show__case-content show-more":"show__case-content",children:o.jsx(wC,{isClienteShowcaseOpen:e,createdBy:n[0].createdBy})})]})})},SC=()=>{const{isLoading:e}=z(n=>n.frete),t=F();return o.jsx("div",{className:"popup_content-freight",children:o.jsxs("div",{className:"popup_content-freight-act",children:[o.jsx("button",{type:"button",onClick:()=>{Vv(!1)},className:"close",id:"cl",children:"×"}),o.jsx("h3",{className:"action-description",children:"Mover essa pagina para o histórico?"}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Confirmar",height:"5rem",width:"10rem",margin:"1rem 0 0 0",backgroundColor:"var(--clr-primary-orange-2)",btn_background:"var(--clr-primary-orange-2)",loading:e,handleClick:()=>{t(Lo())}})]})})},kC=()=>{const e=new URLSearchParams(window.location.pathname),t=F();let{fretes:n,numOfPage:r,totalFretes:a,page:s,msg:i,isLoading:l}=pr();i="client freigth event";const{isEditing:c,isConcludedLoading:u}=z(d=>d.frete);return u||l?o.jsx(Sp,{}):n.length?o.jsx(NC,{children:c?o.jsx(Mn,{}):o.jsxs(o.Fragment,{children:[o.jsx(SC,{}),o.jsx("div",{className:"cliente_center-content",children:n==null?void 0:n.map((d,p)=>o.jsx("div",{className:`freigth_page ${d.isDeleteStatus&&"delete_status-on"}`,children:o.jsx(ly,{fretes:d,index:p})},p))}),o.jsxs("div",{className:"page__bottom-content",children:[o.jsx(jp,{numOfPage:r,page:s,totalFretes:a,event:i}),!!e.toString().match("freight")&&o.jsxs(o.Fragment,{children:[o.jsx("label",{htmlFor:"btn",children:"Mover pag"}),o.jsxs("button",{type:"button",name:"btn",value:"",className:"inp-btn",onClick:()=>{Vv(!0),t(Vk(n.map(d=>({id:d._id}))))},children:["qnt ",n.length]})]})]})]})}):o.jsxs("h1",{className:"empty__freight-container",children:["Nenhum frete postado... ",o.jsx("br",{}),o.jsx(S,{className:"empty__freight-container-link",to:"/create-frete",children:"Publicar"})]})},NC=T.div`
  .freigth_page {
    border-radius: 3px;
  }
  display: grid;
  .page__bottom-content {
    display: flex;
    place-content: center;
    align-items: center;
    .inp-btn {
      width: 8rem;
      height: 4rem;
      margin-left: 1rem;
      background-color: var(--clr-primary-orange-2);
      border: 1px solid var(--clr-primary-orange-3);
      border-radius: 3px;
    }
    label {
      margin-left: 10rem;
    }
  }

  //pop-up
  .popup_content-freight {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-freight-act {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 40rem;
    height: 30rem;
    background-color: var(--white);
    text-align: center;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-freight {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }
`,CC=()=>{const e=F();let{sortStatus:t,name:n,city:r,bodyworkSpecial:a,bodyworkClosed:s,bodyworkOpen:i,colectDate:l,canvas:c,loadType:u,light:d,medium:p,heavy:m,isLoading:v,isSidebarOpen:h,allFretes:y,page:w,firstRenderLoadin:g}=z(j=>j.allFretes),{userData:f,isSingleFreteOpen:x}=z(j=>j.userData);const b=_.useRef(!1);return _.useEffect(()=>{b.current||(b.current=!0,e($k())),e(Ck()),f||e(qe());const j=new AbortController;return j.signal.addEventListener("abort",()=>console.log("Aborted!"),{once:!0}),e(Da({signal:j.signal})),()=>j.abort()},[r,n,t,a,s,i,l,c,u,d,p,m,h,w]),{userData:f,isSingleFreteOpen:x,isLoading:v,allFretes:y,page:w,firstRenderLoadin:g}};function EC(){const{pathname:e}=Mt();return _.useEffect(()=>{},[e]),null}function LC(){const{pathname:e}=Mt();return _.useEffect(()=>{e==="/frete_page"&&document.documentElement.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),null}const Ba=document.createElement("div"),uy=document.createElement("div");Ba.classList.add("on_infinit-sctroll");uy.classList.add("loader");Ba.appendChild(uy);function TC(e){var n,r;const t=document==null?void 0:document.querySelectorAll(".avaible-cont");e?((r=(n=t[0])==null?void 0:n.lastChild)==null||r.after(Ba),Ba.classList.remove("hide-loading")):e||setTimeout(()=>{Ba.classList.add("hide-loading")})}const PC=(e,t)=>{const n=_.useRef(!1);_.useEffect(()=>{n.current?e():n.current=!0},t)},dy=_.createContext(),$C=()=>{const{isLoading:e,allFretes:t,userData:n,isSingleFreteOpen:r,page:a,firstRenderLoadin:s}=CC();return LC(),PC(()=>{TC(e)},[e]),o.jsx(o.Fragment,{children:o.jsx(dy.Provider,{value:{userData:n,fretes:t,isLoading:e},children:o.jsxs(V3,{children:[r?o.jsx(cy,{}):o.jsxs(o.Fragment,{children:[s?o.jsx("div",{className:"set-body",children:o.jsx("div",{className:"loader-before-scroll-setup"})}):o.jsx(sy,{}),o.jsx(q2,{})]}),a>1&&o.jsx("div",{className:"back-to-top-content",onClick:()=>{document.getElementById("0").scrollIntoView({behavior:"smooth",block:"start"})},children:o.jsx("div",{className:"backo-to-top"})})]})})})},py=()=>_.useContext(dy),OC=()=>{const{pathname:e}=Mt();return setTimeout(()=>{zC(e)}),o.jsxs(RC,{className:"aside",children:[o.jsx("button",{type:"button",onClick:()=>{document.querySelector(".aside").classList.toggle("show-links")},className:"close",id:"cl",children:"×"}),o.jsxs("div",{className:"links-container",children:[o.jsx("h2",{children:"Veja também"}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"about-links",to:"futuro",children:"Sobre o nosso futuro"})}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"about-links",to:"propostas",children:"Propostas"})}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"about-links",to:"regras",children:"Regras"})}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"about-links",to:"sobre-cookie",children:"Sobre os cookies"})}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"about-links",to:"empresario",children:"Cargo empresario"})}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"about-links",to:"entregador",children:"Cargo entregador"})})]})]})},RC=T.div`
  background-color: var(--white);
  height: 100%;
  padding: 5rem;
  box-shadow: var(--shadow-2);
  .links-container {
    display: grid;
    row-gap: 5rem;
    a {
      text-decoration: none;
      color: var(--red-org);
      font-size: 1.5rem;
    }
    .current-target {
      color: var(--dark-bl);
    }
  }
  .close {
    position: absolute;
    right: 1%;
    top: 1%;
  }
`;function zC(e){const t=document.querySelectorAll(".about-links");t.forEach((n,r)=>{n.addEventListener("click",a=>{a.target.classList.add("current-target")}),e.toString().split("/")[2]!==n.href.split("/").slice(-1).toString()&&t[r].classList.remove("current-target")})}const AC=()=>o.jsx(o.Fragment,{children:o.jsxs(FC,{children:[o.jsx(OC,{}),o.jsxs("div",{className:"set-padding",children:[o.jsx("div",{className:"arrow-aside-content",onClick:()=>{document.querySelector(".aside").classList.toggle("show-links")},children:o.jsx("div",{className:"arrow-content-aside"})}),o.jsx(Mn,{})]})]})}),FC=T.section`
  position: relative;
  .set-padding {
    padding: 5rem;
    grid-area: set;
  }
  .aside {
    grid-area: aside;
  }
  grid-template-areas: "aside set";
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;

  .heading_text {
    margin: 0 auto;
  }
  h1 {
    font-size: 2rem;
    color: var(--red-org);
    p,
    span {
      margin-top: 2rem;
      font-size: 1.5rem;
      color: var(--grey-700);
    }
  }
  .hours {
    color: var(--blue-ocn);
  }
  .title {
    width: 100%;
    margin-top: 4rem;
    text-align: center;
  }
  .signature_basic,
  .number_basic {
    color: var(--primary-300);
  }
  .signature_advanced,
  .number_advanced {
    color: var(--red-org);
  }
  .signature_premium,
  .number_premium {
    color: var(--yellow-org);
  }
  a {
    text-decoration: underline;
    color: var(--dark-bl);
  }
  .active {
    color: var(--blue-ocn);
  }
  .close {
    display: none;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: "set";
    .close {
      display: flex;
    }
    .aside {
      z-index: -1;
      visibility: hidden;
      opacity: 0;
      position: fixed;
      left: -500px;
      transition: all 0.3s ease;
    }
    .show-links {
      z-index: 10;
      visibility: visible;
      opacity: 1;
      left: 0;
    }
    .arrow-aside-content {
      width: 3rem;
      height: 3rem;
      position: fixed;
      border-radius: 50%;
      background-color: var(--white);
      display: grid;
      place-content: center;
      left: 1%;
      cursor: pointer;
      animation: bounce-left 1s infinite;
      z-index: 5;
      padding-right: 1rem;
      top: 40%;
    }
    .arrow-content-aside {
      height: 2px;

      &::after,
      &::before {
        content: "";
        height: 2px;
        width: 1.5rem;
        background-color: var(--blue-ocn);
        position: absolute;
        transform-origin: left;
        margin-left: -1px;
      }
      &::after {
        transform: rotate(-45deg);
      }
      &::before {
        transform: rotate(45deg);
      }
    }
    @keyframes bounce-left {
      0%,
      100% {
        transform: translateX(0);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateX(-25%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
  @media (max-height: 650px) {
    .links-container {
      row-gap: 1rem;
    }
  }
`,IC=()=>{const e=new URLSearchParams(window.location.search),{support:t,isLoading:n,hasNextPage:r,page:a,supportTicket:s}=z(l=>l.support),i=F();return _.useEffect(()=>{i(uN(!1));const l=new AbortController;return l.signal.addEventListener("abort",()=>console.log("Aborted!"),{once:!0}),!s&&e.get("item")&&i(Ua()),i(Fr({signal:l.signal})),()=>l.abort()},[a]),{support:t,isLoading:n,hasNextPage:r,page:a}},Bf=V.forwardRef(({support:e,index:t},n)=>{const[r,a]=_.useState(!1),{btnLoading:s}=z(p=>p.support),i=F(),l=()=>{let p=new URL(window.location.href);p.searchParams.set("item",`${e._id}`),window.history.pushState({path:p.href},"",p.href),i(pN(e))},c=We(e.createdAt),u=o.jsxs("ul",{children:[o.jsx("input",{type:"checkbox",name:"check",className:"check-box",id:e._id,checked:r,onChange:p=>a(p.target.checked),onClick:p=>i(dN({id:p.target.id,check:p.target.checked}))}),o.jsx("p",{children:e.supportOpt}),o.jsx("p",{children:e.phone}),o.jsx("p",{children:e.email}),o.jsx("div",{children:o.jsx("p",{children:e.message})}),o.jsxs("p",{children:[" ",e.isOpen&&"aberto"]}),o.jsx("p",{children:c}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Visualizar",height:"3rem",width:"5rem",loading:s,handleClick:l})]});return n?o.jsx(qf,{ref:n,children:u}):o.jsx(qf,{children:u})}),qf=T.article`
  height: 20rem;
`,DC=()=>{const{isLoading:e}=z(n=>n.support),t=F();return o.jsx(MC,{children:o.jsx("div",{className:"popup_content-ticket-adm",children:o.jsxs("div",{className:"popup_content-cation-ticket-adm",children:[o.jsx("button",{type:"button",onClick:()=>{qv(!1)},className:"close",id:"cl",children:"×"}),o.jsx("h3",{className:"action-description",children:"deletar selecionados?"}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Confirmar",height:"5rem",width:"10rem",backgroundColor:"var(--clr-primary-orange-2)",btn_background:"var(--clr-primary-orange-2)",loading:e,handleClick:()=>t(lN())})]})})})},MC=T.div`
  .popup_content-ticket-adm {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-cation-ticket-adm {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 40rem;
    height: 30rem;
    background-color: var(--white);
    text-align: center;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-freight {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }
`,UC=()=>{const e=F();let{support:t,isLoading:n,hasNextPage:r,page:a}=IC();const s=_.useRef(),i=_.useCallback(d=>{n||(s.current&&s.current.disconnect(),s.current=new IntersectionObserver(p=>{var m;(m=p[0])!=null&&m.isIntersecting&&r&&e(cN(a+1))}),d&&s.current.observe(d))},[n,r]),l=t.map((d,p)=>t.length===p+1?o.jsx(Bf,{ref:i,support:d,index:p},p+1):o.jsx(Bf,{support:d,index:p},p)),c=()=>{qv(!0)},u=()=>{window.location.pathname="/admin-checkout/messages-page"};return o.jsx(o.Fragment,{children:o.jsxs(BC,{children:[o.jsx(DC,{}),o.jsx("div",{className:"support",children:l}),o.jsx("div",{className:"single__ticket",children:o.jsx(I3,{})}),o.jsx("div",{className:"edit__container",children:o.jsx(D3,{})}),o.jsx("div",{className:"delete__many-container",children:o.jsx(Te,{type:"button",loadingText:"Processando",text:"Deletar",height:"5rem",width:"10rem",handleClick:c,loading:n})}),o.jsx(S,{className:"paths",onClick:u,children:"messages"})]})})},BC=T.section`
  min-height: calc(100vh - 75px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0;
  .support {
    grid-area: sup;
    overflow-y: scroll;
    max-height: 90vh;
  }
  article {
    box-shadow: var(--shadow-3);
    position: relative;
    min-height: 30rem;
    padding: 5rem;
    font-size: 1.4rem;
    input {
      position: absolute;
      right: 0;
      top: 0;
    }
    .animated__btn {
      position: absolute;
      bottom: -10rem;
      right: 0;
    }
    #cl,
    .close {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .single__ticket {
    grid-area: single;
    padding: 5rem;
  }
  .edit__container {
    grid-area: edit;
    padding: 5rem;
  }
  .delete__many-container {
    grid-area: many;
  }
  grid-template-areas:
    "sup single"
    "sup edit"
    "many many";
  .paths {
    font-size: 2rem;
    position: absolute;
  }
`;let qC="Inicie uma chamada de suporte";const WC=()=>{const{userData:e}=z(r=>r.userData),t=F(),{pathname:n}=Mt();return console.log(),_.useEffect(()=>{var a;const r=new URLSearchParams(window.location.search);e||t(qe()),r.get("sessão_status")&&((a=document.querySelector(".support_ticket"))==null||a.classList.add("target"),setTimeout(()=>{var s;(s=document.querySelector(".support_ticket"))==null||s.classList.remove("target")},1e3))},[]),o.jsx(o.Fragment,{children:o.jsx(VC,{children:n.split("/")[2]==="suporte-chat"?o.jsx(Mn,{}):o.jsx(o.Fragment,{children:o.jsxs("div",{className:"support_recorces",children:[o.jsxs("div",{className:"usual_questions",children:[o.jsxs("h2",{className:"heading_text",children:["Como faço para ver os fretes?",o.jsx("br",{}),o.jsxs("span",{children:["Basta que o ","senhor(a)"," se cadastre em nosso site"," ",o.jsx(S,{to:"/cadastro",children:"cadastrar"}),", ao se cadastrar o"," ","senhor(a)"," ganha acesso a todos os fretes postados"]})]}),o.jsxs("h2",{className:"heading_text",children:["Como registro fretes no site?",o.jsx("br",{}),o.jsxs("span",{children:["Para registrar fretes o ","senhor(a)"," precisa ter um cargo especial, esse cargo é obtido através de uma assinatura!"," ",o.jsx(S,{to:"/produto_assinatura",children:"Conferir"})]})]}),o.jsxs("h2",{className:"heading_text",children:["Como o site funciona, para caminhoneiros e entregadores?",o.jsx("br",{}),o.jsxs("span",{children:["Quando cadastrado o senhor(a) pode acessar os fretes na sessão dos ",o.jsx(S,{to:"/frete_page",children:"fretes"})]})]}),o.jsxs("h2",{className:"heading_text",children:["Quanto tempo demora para que eu possa postar meus fretes?",o.jsx("br",{}),o.jsxs("span",{children:["Assim que o senhor realizou a assinatura já esta apto a postar, bastar ir até a sessão"," ",o.jsx(S,{to:"/create-frete",children:"Publicar Frete"})]})]})]}),o.jsx($3,{text:qC}),o.jsxs("div",{className:"all_contacts",children:[o.jsxs("h2",{className:"heading_text",children:["Redes sociais ",o.jsx("br",{})]}),o.jsx("a",{href:`mailto:${{}.VITE_EMAIL}`,className:"mail",children:"onfrete7@gmail.com"}),o.jsxs("ul",{className:"social-links",children:[o.jsx("a",{href:{}.VITE_LINKEDIN,className:"fa",children:o.jsx(h2,{})}),o.jsx("a",{href:{}.VITE_GIT,id:"git",className:"fa",children:o.jsx(f2,{})})]})]}),o.jsx("div",{className:"proposals"})]})})})})},VC=T.main`
  padding: 5rem;
  .support_recorces {
    margin-top: 64px;
    div {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    }
  }
  .support_recorces {
    display: grid;
    gap: 15px;
    min-height: 100vh;
    .heading_text {
      color: var(--blue-ocn);
    }
    br {
      margin: 5px;
    }
    p {
      color: var(--yellow-org);
      font-size: 1.6rem;
    }
    .usual_questions {
      overflow: hidden;
      :not(:first-child) {
        margin-top: 3rem;
      }
      padding: 1.5rem;
      grid-area: usual_questions;
      height: 100%;
      h2 {
        border-bottom: solid 1px var(--grey-700);
        font-size: 2rem;

        br {
          margin: 5px;
        }
        span {
          color: var(--grey-700);
          font-size: 1.8rem;
          a {
            color: var(--red-org);
          }
        }
      }
    }
    .all_contacts {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
    }
    .sujestions_box {
      grid-area: support_ticket;
      height: 100%;
      padding: 3rem;
      display: grid;
      h2 {
      }
      #text {
        width: 80%;
        justify-self: center;
      }
    }
    .support_ticket {
      text-align: center;
      h2 {
        color: var(--primary-300);
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
    .all_contacts {
      display: grid;
      row-gap: 1rem;
      height: 100%;
      padding: 2rem;
      text-align: center;
      h2 {
        place-self: center;
        font-size: 4rem;
      }
      .mail {
        font-size: 3rem;
        margin: 0 auto;
      }
      .social-links {
        margin: 0 auto;
        .fa {
          font-size: 3rem;
          margin: 1rem;
          color: var(--dark-bl);
        }
        #git {
          color: var(--grey-700);
        }
      }
    }
    .proposals {
      display: none;
    }
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "usual_questions support_ticket"
      "usual_questions social";
    .support-forms {
      display: grid;
      place-items: center;
      #text {
        width: 70%;
        height: 50%;
        margin: 0;
        margin-top: 1rem;
        place-self: center;
      }
      .btn__animated-content {
        margin: 0 0 3rem 0;
        border-radius: 8px;
      }
    }
    .form-box,
    .form-opt {
      box-shadow: none !important;
      display: grid;
      width: 90%;
      margin: 0;
      .hide {
        display: none;
      }
      label {
        width: 70%;
        text-align: initial;
        padding-left: 12.5rem;
      }

      input,
      select {
        place-self: center;
        height: 3rem;
        width: 70%;
        margin: 0;
      }
      select {
        margin-bottom: 3.7rem;
        margin-top: 2.7rem;
      }
      .text-lab {
        place-self: center;
        margin: 0;
        padding: 0;
        width: fit-content;
        margin-bottom: -8rem;
      }
    }
  }
  @media (max-width: 750px) {
    .support_recorces {
      grid-template-columns: 1fr;
      grid-template-areas:
        "support_ticket"
        "support_ticket"
        "usual_questions"
        "social";
    }
  }
  @media (max-width: 480px) {
    padding: 5rem 2rem;
    .support_recorces {
      margin-top: 1rem;
      width: 100%;
      .support-forms {
        width: 100%;
        .form-box,
        .form-opt {
          width: 100%;
        }
      }
    }
  }
  .ballon {
    box-shadow: none;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 75%,
      0% 75%
    );
    transition: all 0.3s ease-in-out;
    background-color: rgba(212, 199, 199, 0.212);
    padding: 4rem;
    border-radius: 7px;
    p {
      font-weight: 700;
    }
  }
  .active-ballon {
    visibility: visible;
    opacity: 1;
  }
  .target {
    color: var(--yellow-org);
    outline: 3px solid var(--yellow-org);
    border-radius: 3px;
    animation: pulse 0.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(2px);
    }
    0% {
      transform: translateY(0);
    }
  }
`;const HC=({createdAt:e})=>o.jsx(QC,{}),QC=T.div`
  height: 100vh;
  display: grid;
  place-content: center;
`,GC=({message:e})=>o.jsxs(KC,{children:[o.jsx("h3",{children:e}),o.jsxs("p",{children:["Caso nossos planos não atenda a sua demanda por favor entre em contato"," ",o.jsx("a",{href:"mailto:onfrete7@gmail.com",children:"onfrete7@gmail.com"})]})]}),KC=T.section`
  min-height: 100vh;
  padding: 10rem;
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
`,kp=T.div`
  padding: 8rem;
  h1 {
    font-size: 4rem;
  }
  .title-basic {
    color: var(--primary-300);
  }
  .title-advanced {
    color: var(--red-org);
  }
  .title-premium {
    color: var(--yellow-org);
  }
  p {
    margin-top: 4rem;
    font-size: 2rem;
  }
  a {
    font-size: 3rem;
    margin-top: 1rem;
  }
  .link-basic,
  .link-premium,
  .link-advance {
    font-size: 1.4rem;
  }
  .link-basic {
    color: var(--primary-300);
  }
  .link-premium {
    color: var(--yellow-org);
  }
  .link-advance {
    color: var(--red-org);
  }
  .texts {
    display: grid;
    row-gap: 1rem;
    .links-cont {
      display: flex;
      column-gap: 3rem;
      place-content: end;
    }
  }
  .links {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    place-content: center;
  }
  @media (max-width: 480px) {
    padding: 4rem;
    width: 100%;
    overflow-x: hidden;
  }
`,YC=()=>{const{userData:e}=Dn();return o.jsxs(kp,{children:[o.jsxs("div",{className:"texts",children:[o.jsx("h1",{className:"title-advanced",children:"PLANO AVANÇADO"}),o.jsx("p",{children:"Plano ideal para quem precisa de uma grande quantidade de fretes circulando sem gastar muito, por apenas 100R$ você tem acesso a 25 publicações, visíveis por todo o Brasil de forma gratuita! Não perca tempo e inicie nossa parceria, nosso objetivo é simplificar sua jornada de trabalho, reduzindo ao máximo o tempo que você gastaria para encontrar um entregador."}),o.jsxs("div",{className:"links-cont",children:[o.jsx(S,{to:"/planos/basico",className:"link-basic",children:"PLANO BÁSICO"}),o.jsx(S,{to:"/planos/premium",className:"link-premium",children:"PLANO PREMIUM"})]})]}),o.jsx("div",{className:"links",children:o.jsx("div",{className:"link-to-product",children:o.jsx(S,{className:"link-fit-cont",to:e!=null&&e.subscriptionID?`/planos/${Q[1].urlLinkPlan}/${Q[1].priceId}?plan=advanced`:"/produto_assinatura",children:"ASSINAR"})})})]})},XC=()=>{const{userData:e}=Dn();return o.jsxs(kp,{children:[o.jsxs("div",{className:"texts",children:[o.jsx("h1",{className:"title-basic",children:"PLANO BÁSICO"}),o.jsx("p",{children:"Básico em quantidade, porém muito eficiente o plano básico vem para resolver o processo de busca por entregador, por apenas 69R$ você tem acesso a 17 publicações, visíveis por todo o Brasil de forma gratuita! Não perca tempo e inicie nossa parceria, nosso objetivo é simplificar sua jornada de trabalho, reduzindo ao máximo o tempo que você gastaria para encontrar um entregador."}),o.jsxs("div",{className:"links-cont",children:[o.jsx(S,{to:"/planos/premium",className:"link-premium",children:"PLANO PREMIUM"}),o.jsx(S,{to:"/planos/avançado",className:"link-advance",children:"PLANO AVANÇADO"})]})]}),o.jsx("div",{className:"link-to-product"}),o.jsx("div",{className:"links",children:o.jsx(S,{className:"link-fit-cont",to:e!=null&&e.subscriptionID?`/planos/${Q[0].urlLinkPlan}/${Q[0].priceId}?plan=basico`:"/produto_assinatura",children:"ASSINAR"})})]})},JC=()=>{const{userData:e}=Dn();return o.jsxs(kp,{children:[o.jsxs("div",{className:"texts",children:[o.jsx("h1",{className:"title-premium",children:"PLANO PREMIUM"}),o.jsx("p",{children:"Ideal para quem quer ter o maior numero de posts circulando pelo Brasil, por apenas 150R$ você tem acesso a 37 publicações, visíveis por todo o Brasil de forma gratuita! Não perca tempo e inicie nossa parceria, nosso objetivo é simplificar sua jornada de trabalho, reduzindo ao máximo o tempo que você gastaria para encontrar um entregador."}),o.jsxs("div",{className:"links-cont",children:[o.jsx(S,{to:"/planos/basico",className:"link-basic",children:"PLANO BÁSICO"}),o.jsx(S,{to:"/planos/avançado",className:"link-advance",children:"PLANO AVANÇADO"})]})]}),o.jsx("div",{className:"links",children:o.jsx("div",{className:"link-to-product",children:o.jsx(S,{className:"link-fit-cont",to:e!=null&&e.subscriptionID?`/planos/${Q[2].urlLinkPlan}/${Q[2].priceId}?plan=premium`:"/produto_assinatura",children:"ASSINAR"})})})]})};function ZC(e,t){var n,r,a;switch(e){case"básico":(n=document.querySelector(`.${t[0]}`))==null||n.classList.add("target-0"),document.querySelector(`.${t[0]}`).scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.forEach(s=>{var i;(i=document.querySelector(`.${s}`))==null||i.classList.remove("target-0")})},5e3);break;case"avançado":(r=document.querySelector(`.${t[1]}`))==null||r.classList.add("target-1"),document.querySelector(`.${t[1]}`).scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.forEach(s=>{var i;(i=document.querySelector(`.${s}`))==null||i.classList.remove("target-1")})},5e3);break;case"premium":(a=document.querySelector(`.${t[2]}`))==null||a.classList.add("target-2"),document.querySelector(`.${t[2]}`).scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.forEach(s=>{var i;(i=document.querySelector(`.${s}`))==null||i.classList.remove("target-2")})},5e3);break}}const my=()=>{var i;const{userData:e}=z(l=>l.userData),t=new URLSearchParams(window.location.search),n=F(),r=dr(),a=()=>{setTimeout(()=>{const l=document.querySelector(".popup_content-form"),c=document.querySelector(".popup_content-display-form");if(!l||!c)return r("/produto_assinatura");l.classList.add("show"),c.classList.add("show_contente")})};_.useEffect(()=>{if(e||n(qe()),document.documentElement.scrollTo({top:0,left:0,behavior:"smooth"}),t.get("plano")){let l=["front-bas","front-adv","front-pre"];ZC(t.get("plano"),l)}},[]);let s=`/client_page/pagamentos?sessionId=${(i=e==null?void 0:e.subscriptionID)==null?void 0:i._id}&sessão=pagamento&atualizar_minha_assinatura=true`;return o.jsxs(e5,{className:"product_container",children:[o.jsxs("div",{className:"payment__basic card_container card__father",children:[o.jsxs("div",{className:"product card front__chield front-bas",children:[o.jsxs("div",{className:"front__cotente",children:[o.jsx("div",{className:"photo photo__cont-0",children:" "}),o.jsxs("div",{className:"description",children:[o.jsx("h3",{children:"Plano básico"}),o.jsx("div",{className:"change__clip",children:o.jsx("h5",{children:"R$69.00 / mês"})})]})]}),o.jsx("div",{className:"plan__descriptions"})]}),o.jsxs("div",{className:"form__stripe card back__chield",children:[o.jsxs("form",{action:"/api/v1/price_1NdbhBJurT2bp9vzJj7my0dB/create-checkout-sessions",method:"POST",children:[o.jsx("input",{type:"hidden",name:"lookup_key",value:"Plano basico"}),o.jsxs("div",{className:"change__back-clip",children:[o.jsx("h5",{children:"R$69.00 / mês"}),o.jsx("h5",{id:"plan_description",children:"Poste até 17 fretes"})]}),e?o.jsx(Qt,{className:"product_display",children:o.jsx("button",{id:"checkout-and-portal-button",className:"submit__subscription-0",type:"submit",children:"Assinar"})}):o.jsx(Qt,{className:"product_display",children:o.jsx(S,{to:`/produto_assinatura/registrar?popup=${er.popup.singIn}`,onClick:a,className:"submit__subscription-0 default_register-btn",children:"Registrar-se"})})]}),o.jsx(S,{to:"/planos/basico",className:"more",children:"mais..."})]})]}),o.jsxs("div",{className:"payment__advanced card_container card__father-1",children:[o.jsx("div",{className:"product card front__chield-1 front-adv",children:o.jsxs("div",{className:"front__cotente",children:[o.jsx("div",{className:"photo photo__cont-1",children:" "}),o.jsxs("div",{className:"description",children:[o.jsx("h3",{className:"fix",children:"Plano avançado"}),o.jsx("div",{className:"change__clip",children:o.jsx("h5",{children:"R$100.00 / mês"})})]})]})}),o.jsxs("div",{className:"form__stripe card back__chield-1",children:[o.jsxs("form",{action:"/api/v1/price_1NdbhgJurT2bp9vzp3CRcOcl/create-checkout-sessions",method:"POST",children:[o.jsx("input",{type:"hidden",name:"priceId",value:"Plano avançado"}),o.jsxs("div",{className:"change__back-clip-1",children:[o.jsx("h5",{children:"R$100.00 / mês"}),o.jsx("h5",{id:"plan_description",children:"Poste até 25 fretes"})]}),e?o.jsx(Qt,{className:"product_display",children:o.jsx("button",{id:"checkout-and-portal-button",className:"submit__subscription-1",type:"submit",children:"Assinar"})}):o.jsx(Qt,{className:"product_display",children:o.jsx(S,{className:"submit__subscription-1 default_register-btn",to:`/produto_assinatura/registrar?popup=${er.popup.singIn}`,onClick:a,children:"Registrar-se"})})]}),o.jsx(S,{to:"/planos/avançado",className:"more",children:"mais..."})]})]}),o.jsxs("div",{className:"payment__premium card_container card__father-2",children:[o.jsx("div",{className:"product card front__chield-2 front-pre",children:o.jsxs("div",{className:"front__cotente",children:[o.jsx("div",{className:"photo photo__cont-2",children:" "}),o.jsxs("div",{className:"description",children:[o.jsx("h3",{className:"fix-2",children:"Plano premium"}),o.jsx("div",{className:"change__clip",children:o.jsx("h5",{children:"R$150.00 / mês"})})]})]})}),o.jsxs("div",{className:"form__stripe card back__chield-2",children:[o.jsxs("form",{action:"/api/v1/price_1NdbipJurT2bp9vzcUj3xIfy/create-checkout-sessions",method:"POST",children:[o.jsx("input",{type:"hidden",name:"lookup_key",value:"Plano premium"}),o.jsxs("div",{className:"change__back-clip-2",children:[o.jsx("h5",{children:"R$150.00 / mês"}),o.jsx("h5",{id:"plan_description",children:"Poste até 37 fretes"})]}),e?o.jsx(Qt,{className:"product_display",children:o.jsx("button",{id:"checkout-and-portal-button",className:"submit__subscription-2",type:"submit",children:"Assinar"})}):o.jsx(Qt,{className:"product_display",children:o.jsx(S,{to:`/produto_assinatura/registrar?popup=${er.popup.singIn}`,onClick:a,className:"submit__subscription-2 default_register-btn",children:"Registrar-se"})})]}),o.jsx(S,{to:"/planos/premium",className:"more",children:"mais..."})]})]}),o.jsx(Mn,{context:{userData:e,link:s}})]})},e5=T.main`
  padding: 5rem;
  min-height: 100vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  .front__cotente {
    height: 100%;
  }
  .photo {
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    background-position: 50% 50%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }
  .photo__cont-0 {
    background-image: url("/product_plan-2.jpeg");
  }
  .photo__cont-1 {
    background-image: url("/product_plan-1.jpeg");
  }
  .photo__cont-2 {
    background-image: url("/product_plan-3.jpeg");
  }
  .card_container {
    height: 60rem;
    border-radius: 3px;
    h3 {
      font-size: 5rem;
      margin-top: 3rem;
      text-transform: uppercase;
      padding: 1rem 4rem;
    }
    .fix {
      padding: 0.5rem;
    }
    .fix-2 {
      padding: 2rem;
    }
    h5 {
      font-size: 3rem;
    }
  }
  .payment__basic {
    h3 {
      color: var(--primary-300);
    }
  }
  .payment__advanced {
    h3 {
      color: var(--red-org);
    }
    h5 {
      color: var(--green-dark);
    }
  }
  .payment__premium {
    h3 {
      color: var(--yellow-org);
    }
    h5 {
      color: var(--green-dark);
    }
  }
  .description {
    text-align: center;
    .change__clip {
      background: linear-gradient(
        to right,
        var(--primary-100),
        var(--primary-600)
      );
      -webkit-background-clip: text;
      background-clip: text;
      h5 {
        margin-top: 2rem;
        color: transparent;
      }
    }
    .change__clip-1 {
      background: linear-gradient(
        to right,
        var(--clr-primary-orange-2),
        var(--red-org)
      );
      -webkit-background-clip: text;
      background-clip: text;
      h5 {
        margin-top: 2rem;
        color: transparent;
      }
    }
    .change__clip-2 {
      background: linear-gradient(
        to right,
        var(--clr-primary-orange-2),
        var(--yellow-org)
      );
      -webkit-background-clip: text;
      background-clip: text;
      h5 {
        margin-top: 2rem;
        color: transparent;
      }
    }
  }
  .back__chield-2 .card {
    display: grid;
    justify-content: center;
    padding: 3rem;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
    justify-items: center;
    .card_container {
      width: 60rem;
    }
  }
  @media (max-width: 700px) {
    padding: 1rem;
    .card_container {
      width: 100%;
    }
  }
  //back
  .back__chield,
  .back__chield-1,
  .back__chield-2 {
    position: relative;
    display: grid;
    justify-content: center;
    text-align: center;
    .change__back-clip,
    .change__back-clip-1,
    .change__back-clip-2 {
      display: grid;
      h5 {
        margin-top: 7rem;
      }
      #plan_description {
        margin-bottom: 14rem;
      }
    }
  }
  button,
  #checkout-and-portal-button {
    border: transparent;
    height: 5rem;
    font-size: 2rem;
  }
  .default_register-btn {
    font-size: 2rem;
  }
  .more {
    position: absolute;
    font-size: 1.3rem;
    right: 1rem;
    bottom: 1rem;
    color: var(--red-org);
  }
  .target-0 {
    background-color: var(--green-light);
  }
  .target-1 {
    background-color: var(--clr-primary-red-2);
  }
  .target-2 {
    background-color: var(--clr-primary-orange-2);
  }
`,t5=({sessionId:e})=>{const t=async n=>{n.preventDefault();try{await D.post("/api/v1/create-portal-session",{sessionId:e}).then(r=>window.location.assign(r.data.url))}catch(r){console.log(r)}};return o.jsx(n5,{children:o.jsx("div",{className:"all-content",children:o.jsxs("div",{className:"billing_redirect",children:[o.jsxs("h1",{children:["Publique seu ",o.jsx("a",{href:"/create-frete",children:"frete"})]}),o.jsx("div",{className:"product Box-root",children:o.jsx("div",{className:"description Box-root",children:o.jsx("h3",{children:"Inscrição realizada com sucesso! onFrete agradece"})})}),o.jsx("form",{onSubmit:t,children:o.jsx("button",{id:"checkout-and-portal-button",type:"submit",children:"Conferir Recibo"})})]})})})},n5=T.section`
  height: 100vh;
  background: var(--blue-ocn);
  .all-content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--yellow-org);
    -webkit-clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  }
  h3 {
    color: var(--blue-ocn);
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 15rem;
  }
  .billing_redirect {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    text-align: center;
    a {
      color: var(--red-org);
    }
    #checkout-and-portal-button {
      width: 30rem;
      height: 5rem;
      border: transparent;
      background: transparent;
      font-size: 3rem;
    }
  }
`,r5=async(e,t)=>{try{const n=await D.patch(`/api/v1/update-subscription/${e.subscriptionID}`,{password:e.password,priceId:e.priceId,update:e.eventType});if(n.data.msg==="Processo de cancelamento abortado"){window.location.assign(n.data.url);return}return O.success(n.data.msg),t.dispatch(bo()),setTimeout(()=>{window.location.replace("/client_page?assinatura=atualizada")},2e3),n.data}catch(n){return O.error(n.response.data.msg),t.rejectWithValue(n.response.data.error.msg)}},a5=async({subscriptionID:e,password:t},n)=>{try{await fetch(`/api/v1/cancel/${e}`,{method:"POST",body:JSON.stringify({password:t}),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).then(r=>r.json()).then(r=>window.location.assign(r.url))}catch(r){return O.error(r.response.data.msg),n.rejectWithValue(r.response.data.error.msg)}},s5=async(e,t)=>{try{const n=new URLSearchParams(window.location.search),{data:r}=await D(`/api/v1/subscription/${n.get("sessionId").toString()}`);return r}catch(n){return t.rejectWithValue(n.response.data.error.msg)}},o5={isLoading:!1,password:"",upgradeUrl:"",msg:"",hosted_invoice_url:"",subscription:null},Mo=q("subscription/cancelSignature",a5),qa=q("subscription/updateSignature",r5),Uo=q("subscription/userSubscription",s5),fy=Ut({name:"subscription",initialState:o5,reducers:{showLoading:e=>{e.isLoading=!0},handleDataCollector:(e,{payload:{name:t,value:n}})=>{e[t]=n}},extraReducers:e=>{e.addCase(Uo.pending,t=>{t.isLoading=!0}).addCase(Uo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.subscription=n==null?void 0:n.subscriptionObj}).addCase(Uo.rejected,t=>{t.isLoading=!1}).addCase(Mo.pending,t=>{t.isLoading=!0}).addCase(Mo.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.msg=n.msg}).addCase(Mo.rejected,t=>{t.isLoading=!1}).addCase(qa.pending,t=>{t.isLoading=!0}).addCase(qa.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.upgradeUrl=n==null?void 0:n.upgradeUrl,t.msg=n==null?void 0:n.msg}).addCase(qa.rejected,t=>{t.isLoading=!1})}}),{showLoading:aE,handleDataCollector:hy}=fy.actions,i5=fy.reducer,l5=({handleSubmit:e,handleChange:t,handleClick:n,isLoading:r,password:a})=>o.jsxs(Ne,{onSubmit:e,children:[o.jsx("h4",{children:"Coloque sua senha"}),o.jsx(K,{type:"password",name:"password",labelText:"Senha",labelClass:"animated-label",placeholder:"Senha",autoComplete:"new-password",value:a,handleChange:t}),o.jsxs("div",{className:"inline-content",children:[o.jsx("button",{type:"submit",style:{background:"var(--primary-300)",minWidth:"10rem"},disabled:r,className:"btn-del",children:r?"Recuperando...":"Recuperar"}),o.jsx(S,{to:-1,style:{minWidth:"10rem"},onClick:n,children:"Cancelar"})]})]}),c5=({handleSubmit:e,handleChange:t,handleClick:n,password:r,isLoading:a})=>o.jsxs(Ne,{onSubmit:e,children:[o.jsx(K,{type:"password",name:"password",labelText:"Senha",labelClass:"animated-label",placeholder:"Senha",autoComplete:"new-password",value:r,handleChange:t}),o.jsxs("div",{className:"inline-content",children:[o.jsx("button",{type:"submit",disabled:a,className:"btn-del",children:a?"Deletando...":"Deletar"}),o.jsx(S,{to:-1,onClick:n,children:"Cancelar"})]})]}),u5=({handleSubmit:e,handleChange:t,handleClick:n,isLoading:r,password:a})=>o.jsxs(Ne,{onSubmit:e,children:[o.jsx("h4",{children:"Coloque sua senha"}),o.jsx(K,{type:"password",name:"password",labelText:"Senha",labelClass:"animated-label",placeholder:"Senha",autoComplete:"new-password",value:a,handleChange:t}),o.jsxs("div",{className:"inline-content",children:[o.jsx("button",{type:"submit",disabled:r,style:{background:"var(--primary-300)",minWidth:"10rem"},className:"btn-del",children:r?"Atualizando...":"Atualizar"}),o.jsx(S,{to:-1,style:{minWidth:"10rem"},onClick:n,children:"Cancelar"})]})]});let d5=document.querySelector("body");const p5=()=>{const{userData:e}=pr(),{password:t,isLoading:n}=z(c=>c.subscription),r=new URLSearchParams(window.location.search),a=F(),s=c=>{var u;c.preventDefault(),(u=e==null?void 0:e.subscriptionID)!=null&&u.at_canceling_process?a(qa({password:t,subscriptionID:e.subscriptionID._id})):a(Mo({password:t,subscriptionID:e.subscriptionID._id}))},i=c=>{const u=c.target.name,d=c.target.value;a(hy({name:u,value:d}))},l=()=>{d5.classList.remove("stop-for-aside")};switch(r.get("status")){case"recuperar":return o.jsx("div",{children:o.jsx(Tc,{className:"form",children:o.jsx(l5,{handleSubmit:s,handleChange:i,handleClick:l,password:t,isLoading:n})})});case"cancelar":return o.jsx("div",{className:"height-adjust-center-content",children:o.jsx(Tc,{className:"form",children:o.jsx(c5,{handleSubmit:s,handleChange:i,handleClick:l,password:t,isLoading:n})})});case"pagamento":return o.jsx("div",{className:"height-adjust-center-content",children:o.jsx(Tc,{className:"form",children:o.jsx(u5,{handleSubmit:s,handleChange:i,handleClick:l,password:t,isLoading:n})})})}},Tc=T.section`
  position: relative;
  width: 40%;
  height: 30rem;
  padding: 3rem;
  grid-row: 1 / 5;
  margin: 0 auto;
  margin-top: 15rem;
  form {
    width: 100%;
    display: grid;
    .inline-content {
      margin-top: 2rem;
      display: flex;
      place-self: center;
      align-items: center;
      a,
      .btn-del {
        border: transparent;
        border-radius: 3px;
        width: 8rem;
        height: 4rem;
        font-size: 1.4rem;
        text-align: center;
      }
      .btn-del {
        background-color: var(--red-dark);
        margin-right: 2rem;
      }
      a {
        background-color: var(--clr-primary-orange-3);
        margin-left: 2rem;
        padding: 11px;
      }
    }
    .form-box {
      width: 100%;
      display: grid;
      input {
        width: 100%;
        height: 5rem;
        place-self: center;
        margin-top: 5rem;
      }
      label {
        font-weight: 300;
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`,m5=()=>{var v;const[e,t]=_.useState(!1),{password:n,isLoading:r}=z(h=>h.subscription);let a;const{userData:s}=z(h=>h.userData);let{priceId:i}=vb();const l=new URLSearchParams(window.location.search),c=F(),u=h=>{h.preventDefault(),l.get("plan")===(s==null?void 0:s.signaturePlan)?(t(!0),setTimeout(()=>{Wv(!0)})):c(qa({password:n,priceId:i,subscriptionID:s.subscriptionID._id,eventType:l.get("plan")}))},d=h=>{const y=h.target.name,w=h.target.value;c(hy({name:y,value:w}))},p=()=>{},m=()=>{};return _.useEffect(()=>{s||c(qe())},[]),o.jsxs(k3,{children:[e&&o.jsx(MN,{userData:s}),(v=s==null?void 0:s.subscriptionID)!=null&&v.at_canceling_process?o.jsx(S,{className:"at_delete_process",to:"/client_page/pagamentos?att_page=atualizar",onClick:m,children:"Recuperar Assinatura"}):o.jsx(o.Fragment,{children:o.jsx(Mn,{context:{priceId:i,password:n,isLoading:r,eventType:a,userData:s,alreadyOnThisPlan:e,handleClick:p,handleChange:d,handleSubmit:u}})})]})},f5=()=>{let[e,t]=_.useState(""),[n,r]=_.useState(!1),[a,s]=_.useState("");return _.useEffect(()=>{const i=new URLSearchParams(window.location.search);i.get("success")&&(r(!0),s(i.get("session_id"))),i.get("canceled")&&(r(!1),t("Pagamento cancelado."))},[a]),!n&&e===""?o.jsx(my,{}):n&&a!==""?o.jsx(t5,{sessionId:a}):o.jsx(GC,{message:e})},h5=()=>{const{userData:e}=Dn();return o.jsxs(g5,{className:"plans",children:[o.jsxs("div",{className:"basic",children:[o.jsx("h1",{className:"title title_b",children:"plano básico"}),o.jsx("div",{className:"text-container",children:o.jsxs("p",{className:"text text_b",children:[Q[0].text," ",o.jsx(S,{to:e!=null&&e.subscriptionID?`${Q[0].urlLinkPlan}/${Q[0].priceId}?plan=básico`:"/produto_assinatura",children:"ASSINAR"})]})})]}),o.jsxs("div",{className:"advanced",children:[o.jsx("h1",{className:"title title_a",children:"plano avançado"}),o.jsx("div",{className:"text-container",children:o.jsxs("p",{className:"text text_a",children:[Q[1].text," ",o.jsx(S,{to:e!=null&&e.subscriptionID?`${Q[1].urlLinkPlan}/${Q[1].priceId}?plan=avançado`:"/produto_assinatura",children:"ASSINAR"})]})})]}),o.jsxs("div",{className:"premium",children:[o.jsx("h1",{className:"title title_p",children:"plano premium"}),o.jsx("div",{className:"text-container",children:o.jsxs("p",{className:"text text_p",children:[Q[2].text," ",o.jsx(S,{to:e!=null&&e.subscriptionID?`${Q[2].urlLinkPlan}/${Q[2].priceId}?plan=premium`:"/produto_assinatura",children:"ASSINAR"})]})})]})]})},g5=T.div`
  .title {
    font-size: 4rem;
    text-transform: uppercase;
  }
  .title_b {
    color: var(--primary-400);
  }
  .title_a {
    color: var(--red-org);
  }
  .title_p {
    color: var(--yellow-org);
  }

  .text,
  span {
    color: var(--grey-700);
    font-size: 2rem;
  }
  span {
    text-decoration: underline;
  }
  .text-container {
    padding: 5rem 15rem;
    display: inline-block;
  }
  @media (max-width: 650px) {
    .text-container {
      padding: 1rem;
    }
    .advanced,
    .premium {
      :first-child {
        margin-top: 4rem;
      }
    }
    .basic {
      :first-child {
        margin-bottom: 4rem;
      }
    }
  }
`;let Wf;const Gs=()=>{if(new URLSearchParams(window.location.search).get("assinante")==="sim"){const{link:t}=Dn();return Wf="/produto_assinatura",mC({linkTowhereNavigate:Wf}),o.jsx(wp,{children:o.jsx("div",{className:"popup_content-links",children:o.jsx("div",{className:"popup_content-display-links",children:o.jsx(BN,{description:c2[0].alreadySubscribe,link:t})})})})}};let v5={link:"/suporte_cliente",icon:o.jsx(o.Fragment,{children:"⚠"}),text:"Esses status indica a necessita de uma ação, entre em contato clicando no ícone pulsando para abrir um ticket ao suporte"};async function y5(e){var n;const t=new URLSearchParams(window.location.search);if(!t.get("sessionId")&&e){let r=new URL(window.location.href);r.searchParams.set("sessionId",`${(n=e.subscriptionID)==null?void 0:n._id}`),window.history.pushState({path:r.href},"",r.href)}setTimeout(()=>{t.get("att_page")==="atualizar"&&(setTimeout(()=>{var r;(r=document.querySelector(".ref-link"))==null||r.classList.add("target")}),setTimeout(()=>{var a;(a=document.querySelector(".ref-link"))==null||a.classList.remove("target");let r=new URL(window.location.href);r.searchParams.delete("att_page","atualizar"),window.history.pushState({path:r.href},"",r.href)},2e3))},1e3)}function x5(){const e=document.querySelector(".link-ref-update");e==null||e.classList.add("target-redirect-from-product"),setTimeout(()=>{e==null||e.classList.remove("target-redirect-from-product");let t=new URL(window.location.href);t.searchParams.delete("atualizar_minha_assinatura"),window.history.pushState({path:t.href},"",t.href)},5e3)}const b5=()=>{var c;const[e,t]=_.useState(!1),n=F(),{subscription:r,isLoading:a}=z(u=>u.subscription),{userData:s}=pr(),i=new URLSearchParams(window.location.search);if(_.useEffect(()=>{y5(s),r||n(Uo())},[e]),a)return o.jsx(Sp,{});if(s!=null&&s.subscriptionID||setTimeout(()=>o.jsx(Pc,{children:o.jsxs("h1",{className:"explore_subscription center__content_with-absolute",children:["Conheça nossos planos ",o.jsx(S,{to:"/produto_assinatura",children:"explorar"})]})})),!i.get("sessionId"))return o.jsx(Pc,{className:"height-adjust",children:o.jsxs("h1",{children:["Parece que houve algum problema na rota até essa pagina, por favor clique no"," ",o.jsx(S,{to:`/client_page/pagamentos?sessionId=${(c=s==null?void 0:s.subscriptionID)==null?void 0:c._id}&sessão=pagamento`,onClick:()=>t(!e),children:"link"})," ","para o redirecionar"]})});i.get("atualizar_minha_assinatura")&&x5();let l;switch(r==null?void 0:r.status){case"paid":l="pago";break;case"open":l="Aberto";break}return o.jsx(o.Fragment,{children:o.jsxs(Pc,{children:[l==="Aberto"&&o.jsx(iy,{...v5}),o.jsx("h2",{className:"heading-title",children:"Status da assinatura"}),o.jsxs("div",{className:"subscription__status-container",children:[o.jsxs("div",{className:"client-status",children:[o.jsxs("p",{children:["Status: ",l]}),o.jsxs("p",{children:["Plano: ",r==null?void 0:r.typeOfPlan]}),o.jsxs("p",{children:[o.jsx(S,{to:"/planos",className:"link-ref-update",children:"Atualizar"})," ","seu plano"]}),o.jsx("div",{className:"profile",children:o.jsx("div",{className:"profile__container",children:r!=null&&r.at_canceling_process?o.jsx(S,{className:"ref-link",to:"/client_page/inscrição?status=recuperar",children:"Recuperar Assinatura"}):o.jsx(S,{to:"/client_page/inscrição?status=cancelar",children:"Cancelar inscrição"})})})]}),o.jsxs("div",{className:"plan-description",children:[o.jsx("h2",{className:"plan-heading",children:r==null?void 0:r.typeOfPlan}),s!=null&&s.isDeletede?o.jsx(o.Fragment,{children:o.jsxs("p",{style:{fontSize:"1.2rem",padding:"0 0 0 2rem"},children:["Ola! sua conta esta em processo de cancelamento, quando o prazo de 30 dias for atingido sua conta junto de sua assinatura sera removida, entre em contato caso precise de ajuda e queria remover esses status, ou entre nesse"," ",o.jsx(S,{style:{fontSize:"1.4rem"},to:"/client_page/abortar-processo",children:"link"})," ","e reverta o processo de cancelamento da conta junto da assinatura"]})}):o.jsxs(o.Fragment,{children:[(r==null?void 0:r.typeOfPlan)==="Plano básico"&&o.jsxs("p",{className:"plan-paragraph",children:["Você pode postar até 17 fretes, básico mas eficaz para empresas que estão iniciando! aproveite e distribua seus"," ",o.jsx(S,{to:"/create-frete",children:"fretes"})," por todo Brasil"]}),(r==null?void 0:r.typeOfPlan)==="Plano avançado"&&o.jsxs("p",{className:"plan-paragraph",children:["Você pode postar até 25 fretes, plano perfeito para empresas que estão caminhando para o sucesso como a sua! Aproveite e distribua seus ",o.jsx(S,{to:"/create-frete",children:"fretes"})," por todo Brasil"]}),(r==null?void 0:r.typeOfPlan)==="Plano premium"&&o.jsxs("p",{className:"plan-paragraph",children:["Você pode postar até 37 fretes, ideal para empresas grande como sua, aproveite e distribua seus"," ",o.jsx(S,{to:"/create-frete",children:"fretes"})," por todo Brasil"]})]})]})]}),o.jsxs("div",{className:"singnature-optins",children:[o.jsx("div",{className:"update__payment-methods",children:o.jsxs("h2",{children:["Mudar opções de"," ",o.jsx(S,{to:"/client_page/inscrição?status=pagamento",children:"pagamento"})]})}),o.jsx("div",{className:"payment__historic",children:o.jsx("div",{className:"historic",children:o.jsxs("h2",{children:["Não recebeu o recibo no email?"," ",o.jsx(S,{to:r==null?void 0:r.hosted_invoice_url,children:"Recuperar recibo"})]})})})]})]})})},Pc=T.div`
  padding: 8rem;
  position: relative;
  .heading-title {
    font-size: 3.5rem;
    text-align: center;
    color: var(--blue-ocn);
  }
  h1,
  p,
  h2,
  p,
  a,
  .profile__container {
    font-weight: 700;
    font-size: 3rem;
    margin: 5rem 0;
  }
  a {
    color: var(--red-org);
  }

  .pulsing__animation {
    left: 22rem;
    top: 20rem;
  }
  .ballon_text {
    position: revert;
    margin-top: 3rem;
  }
  .ballon_text-container {
    position: relative;
    position: absolute;
    height: 20rem;
    display: table;
    left: 8.5rem;
  }
  .pulsing__animation::before,
  .pulsing__animation::after {
    background: var(--yellow-org);
    opacity: 0.3;
  }
  .ballon_text-container {
    padding: 1rem 1rem 3rem 1rem;
    width: 30rem;
    height: calc(100% + 30px);
    background: rgba(253, 237, 7, 1);
    border-top-left-radius: 9px;
    border-top-right-radius: 3px;
    .ballon_text {
      font-size: 1.4rem;
      font-weight: 550;
      letter-spacing: 1px;
    }
  }
  .subscription__status-container,
  .singnature-optins {
    box-shadow: var(--shadow-1);
    padding: 2rem;
  }

  .subscription__status-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .client-status {
    border-right: 1px solid var(--grey-700);
  }
  .singnature-optins {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .plan-heading {
    text-align: center;
  }
  .update__payment-methods,
  .payment__historic {
    padding: 3rem;
    h2,
    a {
      font-size: 1.8rem;
    }
  }
  .payment__historic {
    border-left: 1px solid var(--grey-700);
  }
  .plan-paragraph {
    font-size: 2rem;
    padding: 3rem;
    text-align: center;
    a {
      font-size: 2rem;
    }
  }
  @media (max-width: 750px) {
    padding: 0;
    .singnature-optins {
      grid-template-columns: 1fr;
    }
    .subscription__status-container {
      grid-template-columns: 1fr;
    }
    .client-status {
      border-right: none;
      border-bottom: 1px solid var(--grey-700);
    }
  }
  .target {
    color: var(--yellow-org);
    outline: 3px solid var(--yellow-org);
    border-radius: 3px;
    animation: pulse 4s ease-in-out infinite;
  }
  .target-redirect-from-product {
    outline: 3px solid var(--blue-ocn);
    border-radius: 3px;
  }
  @keyframes pulse {
    100% {
      outline-offset: 1.2rem;
    }
  }
  h2,
  a,
  p {
    font-size: 1.8rem;
  }
  /* setupe ballon end */
`,w5=()=>{const{message:e,isLoading:t,hasNextPage:n,page:r,supportTicket:a}=z(i=>i.message),s=F();return _.useEffect(()=>{const i=new URLSearchParams(window.location.search),l=new AbortController;return s(SN(!1)),l.signal.addEventListener("abort",()=>console.log("Aborted!"),{once:!0}),!a&&i.get("item"),s(Ir({signal:l.signal})),()=>l.abort()},[r]),{message:e,isLoading:t,hasNextPage:n,page:r}},Vf=V.forwardRef(({message:e},t)=>{const[n,r]=_.useState(!1),{isLoading:a}=z(d=>d.message),s=F(),i=()=>{let d=new URL(window.location.href);d.searchParams.set("item",`${e._id}`),window.history.pushState({path:d.href},"",d.href),s(CN(e))},l=We(e.createdAt),c=o.jsxs("ul",{children:[o.jsx("input",{type:"checkbox",name:"check",className:"check-box",id:e._id,checked:n,onChange:d=>r(d.target.checked),onClick:d=>s(kN({id:d.target.id,check:d.target.checked}))}),o.jsx("p",{children:e.name}),o.jsx("p",{children:e.phone}),o.jsx("p",{children:e.email}),o.jsx("div",{children:o.jsx("p",{children:e.sendMessage})}),o.jsx("p",{children:l}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Visualizar",height:"3rem",width:"5rem",loading:a,handleClick:i})]});return t?o.jsx(Hf,{ref:t,children:c}):o.jsx(Hf,{children:c})}),Hf=T.article`
  height: 15rem;
`,_5=()=>{var s;const{singleMessage:e,isLoading:t}=z(i=>i.message),n=F(),r=()=>{n(zo())},a=We((s=e[0])==null?void 0:s.createdAt);return o.jsx("article",{className:"single-art",children:!!e.length&&o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:()=>n(ey()),className:"close",id:"cl",children:"×"}),o.jsxs("ul",{children:[o.jsx("p",{children:e[0].supportOpt}),o.jsx("p",{children:e[0].phone}),o.jsx("p",{children:e[0].email}),o.jsx("div",{children:o.jsx("p",{children:e[0].message})}),o.jsx("p",{children:a})]}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Deletar",height:"5rem",width:"10rem",backgroundColor:"var(--red-org)",btn_background:"var(--red-org)",loading:t,handleClick:r})]})})},j5=()=>{const{isLoading:e}=z(n=>n.message),t=F();return o.jsx(S5,{children:o.jsx("div",{className:"popup_content-message-adm",children:o.jsxs("div",{className:"popup_content-cation-message-adm",children:[o.jsx("button",{type:"button",onClick:()=>{Hv(!1)},className:"close",id:"cl",children:"×"}),o.jsx("h3",{className:"action-description",children:"deletar selecionados?"}),o.jsx(Te,{type:"button",loadingText:"Processando",text:"Confirmar",height:"5rem",width:"10rem",backgroundColor:"var(--clr-primary-orange-2)",btn_background:"var(--clr-primary-orange-2)",loading:e,handleClick:()=>t(Ao())})]})})})},S5=T.div`
  .popup_content-message-adm {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-cation-message-adm {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 40rem;
    height: 30rem;
    background-color: var(--white);
    text-align: center;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-freight {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }
`,k5=()=>{const{isLoading:e,hasNextPage:t,message:n,page:r}=w5(),a=F(),s=_.useRef(),i=_.useCallback(d=>{e||(s.current&&s.current.disconnect(),s.current=new IntersectionObserver(p=>{var m;(m=p[0])!=null&&m.isIntersecting&&t&&a(jN(r+1))}),d&&s.current.observe(d))},[e,t]),l=n.map((d,p)=>n.length===p+1?o.jsx(Vf,{message:d,index:p,ref:i},p+1):o.jsx(Vf,{message:d,index:p},p)),c=()=>{Hv(!0)},u=()=>{window.location.pathname="/admin-checkout/admin-page"};return o.jsx(o.Fragment,{children:o.jsxs(N5,{children:[o.jsx(j5,{}),o.jsx("div",{className:"messages",children:l}),o.jsx("div",{className:"single_message",children:o.jsx(_5,{})}),o.jsx("div",{className:"delete_many-container",children:o.jsx(Te,{type:"button",loadingText:"Processando",text:"Deletar",height:"5rem",width:"10rem",handleClick:c,loading:e})}),o.jsx(S,{className:"paths",onClick:u,children:"tickets"})]})})},N5=T.section`
  display: grid;
  position: relative;
  .single_message {
    grid-area: single;
  }
  .messages {
    grid-area: messages;
  }
  article {
    box-shadow: var(--shadow-3);

    font-size: 1.4rem;
    min-height: 30rem;
    position: relative;
    padding: 4rem;
    .animated__btn {
      position: absolute;
      right: 5px;
      bottom: -10rem;
    }
    input {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    #cl {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
  .delete_many-container {
    grid-area: delete;
  }
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.2fr;
  grid-template-areas: "messages single" "messages delete";
  .messages {
    height: 90vh;
    overflow-y: scroll;
  }
  .paths {
    font-size: 2rem;
    position: absolute;
    right: 1rem;
  }
`,C5=()=>o.jsxs(E5,{children:[o.jsx("h1",{children:"Planos para 2024"}),o.jsx("p",{children:"Até o final do ano de 2024 sera lançado nosso aplicativo, mesmo nosso site sendo bem portado para smartphone, acreditamos que uma aplicação 100% dedicada para celulares facilitará para nossos caminhoneiros. Assim então pode se esperar que em 2024 tera nossa versão para celulares."}),o.jsx("br",{}),o.jsx("p",{children:"Aos próximos meses traremos novas funcionalidades para nosso site, implementaremos novos features para agregar ao nosso setor. A ideia é estar constantemente trazendo novas aplicações para nosso site."})]}),E5=T.article`
  font-size: 1.8rem;
`,L5=()=>{const[e,t]=_.useState(!1);return o.jsxs("div",{className:"heading_text",children:[o.jsxs("h1",{children:[o.jsx("div",{className:"title",children:"Produtos"}),o.jsxs("p",{children:["Nossos produtos inicialmente consiste em 3 tipos de assinatura, plano básico, avançado e premium. Todos os planos tem as mesmas funcionalidades, com diferenças na quantidade de fretes possíveis para ser postados, os valores podem ser consultado na pagina a seguir"," ",o.jsx(S,{to:"/produto_assinatura",children:"Produtos e assinaturas."})," como nosso web service ainda esta no inicio, nossas ofertas se limita somente a essas 3 assinaturas, porém, vamos expandir nossos planos no futuro e disponibilizar outros serviços que contribua em facilitar a vida de nossos clientes."]}),o.jsx("div",{className:e?"title active":"title",id:"signature",children:"Assinaturas"}),o.jsxs("p",{children:["Assinaturas são divididas em 3 tipos básico, avançado e premium onde cada um deles tem um numero limitado de publicações. ",o.jsx("br",{}),o.jsx("span",{className:"signature_basic",children:"Plano básico"}),": O cliente tem acesso até a ",o.jsx("span",{className:"number_basic",children:"17"})," publicações."," ",o.jsx("br",{}),o.jsx("span",{className:"signature_advanced",children:"Plano avançado"}),": O cliente tem acesso até a ",o.jsx("span",{className:"number_advanced",children:"25"})," ","publicações. ",o.jsx("br",{}),o.jsx("span",{className:"signature_premium",children:"Plano premium"}),": O cliente tem acesso até a ",o.jsx("span",{className:"number_prmium",children:"37"})," ","publicações. ",o.jsx("br",{}),o.jsx("span",{className:"question",children:"E como funciona?"}),o.jsx("br",{}),"Todos os planos tem as mesmas funcionalidades, onde ao postar o frete ele só sera removido quando o cliente excluído diretamente, ao excluir o frete permanecera em nosso banco de dados por"," ",o.jsx("span",{className:"hours",children:"15"})," minutos, depois desse tempo ele sera excluído permanentemente, quando o cliente marca o documento (frete) como concluído o mesmo sera movido para o"," ",o.jsx(S,{to:"/client_page/historico-fretes",children:"histórico"}),", quando no histórico o documento não aparecera para todos somente para o cliente dono do documento, e também não contara como um documento válido, ou seja, o cliente libera espaço para novas publicações. Conheça nossos planos ",o.jsx(S,{to:"/produto_assinatura",children:"Assinaturas"})]}),o.jsx("div",{className:"title",children:"Fretes"}),o.jsxs("p",{children:["Para ter acesso aos fretes o ","senhor(a)"," tem de se cadastrar no site, todos os fretes estarão disponíveis ao se registrar, porém, para postar fretes em nosso site tem de ser"," ",o.jsx(S,{to:"/produto_assinatura",children:"assinante"}),". Para postar fretes basta ir na sessão ",o.jsx(S,{to:"/create-frete",children:"Publicar Frete"})," e la o cliente assinante pode postar seus fretes, lembrando que existe um limite de fretes possíveis, limites esses descritos na"," ",o.jsx("a",{onClick:()=>{document.getElementById("signature").scrollIntoView({behavior:"smooth",block:"center"}),t(!0),setTimeout(()=>{document.getElementById("signature").classList.remove("active"),t(!1)},2e3)},children:"assinatura"}),", depois de postado o frete aparecera no"," ",o.jsx(S,{to:"/client_page/freight",children:"perfil"}),' do remetente, no perfil o cliente pode atualizar os dados, excluir ou colocar como "concluído", quando setado para concluído o frete aparecerá na sessão'," ",o.jsx(S,{to:"/client_page/historico-fretes",children:"histórico"})," e la o remetente pode adicionar notas referente ao serviço, essas notas ficarão salvas, caso o cliente queira ter alguma anotação referente ao frete"]})]}),o.jsxs("h1",{children:[o.jsx("div",{className:"title",children:"Objetivos"}),o.jsxs("p",{children:["Embora tenhamos acabado de lançar o site, já demos inicio ao desenvolvimento do nosso aplicativo para smartphone sabemos da importância da acessibilidade dos usuários que usam smartphone, com isso pode se esperar que nos próximos meses seja lançado o app, mas até la o site foi bem portado para smartphone, tivemos todo o cuidado para fazer uma aplicação moderna para que todos os usuários consiga navegar sem frustrações, caso qualquer problema na navegação seja detectado pelo usuário pedimos que entre em contato e nos avise"," ",o.jsx(S,{to:"/suporte_cliente",children:"suporte ao cliente"}),", só assim podemos ter certeza de que tudo esta dentro dos conformes"]}),o.jsx("div",{className:"title",children:"Jornada"}),o.jsx("p",{children:"onFrete inicia sua jornada no ano de 2023, com o objetivo de reduzir a burocracia no setor de entregas! Durante seu desenvolvimento foi estudado métodos para facilitar a conexão dentre entregadores e empresários, assim então chegamos a conclusão de que fazer um site com tal proposta era uma ótima ideia. Janeiro de 2023 foi dado inicio ao desenvolvimento do site, partindo do zero, desde aprender sobre desenvolvimento web até técnicas de lançamentos e estratégias de marketing. Mas isso não é tudo, pretendemos expandir a marca, ou seja, o conteúdo de hoje é o primeiro passo da nossa marca, vamos entrar para o segmento e implementar melhorias e novas ideias com o passar do tempo."})]})]})},T5=()=>{const e=()=>{setTimeout(()=>{const t=document.querySelector(".popup_content"),n=document.querySelector(".popup_content-display-form-message");!t||!n||(t.classList.add("show"),n.classList.add("show_contente"))})};return o.jsxs(P5,{children:[o.jsx("h1",{children:"Propostas"}),o.jsxs("p",{children:["Estamos aberto a discutir qualquer tipo de proposta, basta entrar em contado via ",o.jsx("a",{href:`mailto:${{}.VITE_EMAIL}`,children:"email"})," ","ou deixar sua"," ",o.jsx(S,{to:`?popup=${er.popup.message}&sessão=home_page`,onClick:e,children:"mensagem"})," "]})]})},P5=T.article`
  font-size: 1.8rem;
  a {
    color: var(--yellow-org);
  }
`,$5=()=>o.jsxs(O5,{children:[o.jsx("h1",{children:"Regras"}),o.jsx("p",{children:"Esperamos o bom comportamento no uso do site, algumas regras é necessária para o bom funcionamento de nosso site"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["1 ",o.jsx("p",{children:"Fique atento aos detalhes descritos nos documentos dos fretes"})]}),o.jsxs("li",{children:["2"," ",o.jsx("p",{children:"Descreva o máximo de detalhes ao postar os fretes, pois qualquer mal entendido todos saem perdendo"})]}),o.jsxs("li",{children:["3"," ",o.jsx("p",{children:"Cumpra com sua parte no acordo, qualquer usuário que vir a receber reclamações sobre não cumprir sua parte no acordo sera removido de nosso site permanentemente"})]}),o.jsxs("li",{children:["4"," ",o.jsx("p",{children:"Respeito com os outros usuários, caso reclamações sobre desrespeito vir a ser relatas com provas removeremos a conta do usuário"})]}),o.jsx("p",{className:"last",children:"Por fim lembre-se, construímos o site para atender suas necessidades! Qualquer problema que vir a acontecer com voce caro usuário entre em contato, o seu bem estar dentro de nossa plataforma é a nossa prioridade"})]})]}),O5=T.article`
  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2rem;
  }
  li {
    display: flex;
    position: relative;
    font-size: 2rem;
    margin-top: 5rem;
  }
  li::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 15px;
    border-radius: 50%;
    height: 4px;
    width: 4px;
    background-color: var(--blue-ocn);
  }
  p {
    margin-left: 2rem;
  }
  .last {
    margin-top: 3rem;
  }
`,R5=()=>o.jsxs(z5,{children:[o.jsx("h1",{children:"Cookies"}),o.jsxs("p",{children:["Cookies tem a função de proteger nossos dados, quando o usuário envia qualquer informação privada para o servidor que utiliza cookies esses dados são criptografados no envio para que a leitura humana seja impossível. ",o.jsx("br",{})," O principal ponto desses cookies é evitar que criminosos consiga interceptar esses dados e roubar informações de nossos usuários."]})]}),z5=T.article`
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
`,A5=()=>o.jsx(gy,{children:o.jsxs("div",{className:"text-container device-fix",children:[o.jsx("h2",{children:"Empresario"}),o.jsxs("p",{children:["O cargo de empresario é a representação de um cliente com uma assinatura ativa, com esse cargo o senhor(a) tem acesso a todas as funcionalidades disponíveis no site. Divulgue seus fretes para todo o Brasil, sem complicação nenhuma! ",o.jsx("br",{}),"Para o senhor(a) publicar seus fretes é simples, vá até esse"," ",o.jsx(S,{to:"/create-frete",children:"link"})," descreva todos os detalhes possíveis e publique, depois de publicado é só aguarda até que os detalhes de seu frete seja visualizado por algum entregador, assim que o entregador ver seu frete ele entra em contato diretamente com o senhor(a) e vocês negocia diretamente"]})]})}),F5=()=>o.jsx(gy,{children:o.jsxs("div",{className:"text-container",children:[o.jsx("h2",{className:"text",children:"Caminhoneiro/Entregador"}),o.jsxs("p",{className:"text",children:["O cargo de caminhoneiro é a representação de um cliente sem assinatura ativa, com esse cargo o senhor(a) tem acesso aos fretes postados pelos assinantes do site, é bem simples basta ir até esse"," ",o.jsx(S,{to:"/frete_page",children:"link"})," e la o senhor(a) pode ver todos os fretes postados até o momento, basta escolher o que melhor atende ao seu veículo e localidade e negociar diretamente com o empresario que postou o frete ",o.jsx("br",{})]})]})}),gy=T.article`
  font-size: 1.7rem;
  width: 100%;
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: var(--red-org);
  }
  .device-fix {
  }
`;function I5(){const{logoutLoading:e}=z(t=>t.user);return o.jsxs(o.Fragment,{children:[o.jsxs(Ab,{children:[e&&o.jsx(W3,{}),o.jsx(EC,{}),o.jsx(_2,{}),o.jsx(AN,{}),o.jsx(WN,{}),o.jsxs(Pb,{children:[o.jsx(I,{path:"/",element:o.jsx(R2,{}),children:o.jsx(I,{path:"registrar",element:o.jsx(Gs,{})})}),o.jsx(I,{path:"cadastro",element:o.jsx(i2,{})}),o.jsx(I,{path:"/user/verify-email",element:o.jsx(GN,{})}),o.jsx(I,{path:"/user/reset-password",element:o.jsx(YN,{})}),o.jsx(I,{path:"/user/forgot-password",element:o.jsx(JN,{})}),o.jsxs(I,{path:"frete_page",element:o.jsx($C,{}),children:[o.jsx(I,{index:!0,element:o.jsx(sy,{})}),o.jsx(I,{path:"frete",element:o.jsx(cy,{})})]}),o.jsx(I,{path:"create-frete",element:o.jsx(n3,{children:o.jsx(iC,{})})}),o.jsxs(I,{path:"about_page",element:o.jsx(AC,{}),children:[o.jsx(I,{index:!0,element:o.jsx(L5,{})}),o.jsx(I,{path:"futuro",element:o.jsx(C5,{})}),o.jsx(I,{path:"propostas",element:o.jsx(T5,{})}),o.jsx(I,{path:"regras",element:o.jsx($5,{})}),o.jsx(I,{path:"sobre-cookie",element:o.jsx(R5,{})}),o.jsx(I,{path:"cancelamento-status",element:o.jsx(B3,{})}),o.jsx(I,{path:"empresario",element:o.jsx(A5,{})}),o.jsx(I,{path:"entregador",element:o.jsx(F5,{})})]}),o.jsxs(I,{path:"client_page",element:o.jsx(V2,{children:o.jsx(H2,{})}),children:[o.jsx(I,{index:!0,element:o.jsx(HN,{})}),o.jsx(I,{path:"profile",element:o.jsx(G2,{})}),o.jsx(I,{path:"inscrição",element:o.jsx(p5,{})}),o.jsx(I,{path:"freight",element:o.jsx(kC,{}),children:o.jsx(I,{path:":id",element:o.jsx(aC,{})})}),o.jsxs(I,{path:"historico-fretes",element:o.jsx(uC,{}),children:[o.jsx(I,{path:"historicos-adicionados",element:o.jsx(ry,{})}),o.jsx(I,{path:":id",element:o.jsx(ny,{})})]}),o.jsx(I,{path:"pagamentos",element:o.jsx(b5,{})}),o.jsx(I,{path:"remover-conta",element:o.jsx(e3,{})}),o.jsx(I,{path:"abortar-processo",element:o.jsx(M3,{})})]}),o.jsxs(I,{path:"/planos",element:o.jsx(m5,{}),children:[o.jsx(I,{index:!0,element:o.jsx(h5,{})}),o.jsx(I,{path:"basico",element:o.jsx(XC,{})}),o.jsx(I,{path:"avançado",element:o.jsx(YC,{})}),o.jsx(I,{path:"premium",element:o.jsx(JC,{})}),o.jsx(I,{path:"basico/:priceId",element:o.jsx(E3,{})}),o.jsx(I,{path:"avançado/:priceId",element:o.jsx(T3,{})}),o.jsx(I,{path:"premium/:priceId",element:o.jsx(N3,{})}),o.jsx(I,{path:"registrar",element:o.jsx(Gs,{})})]}),o.jsx(I,{path:"/suporte_cliente",element:o.jsx(WC,{})}),o.jsx(I,{path:"/pagamentos/status",element:o.jsx(f5,{})}),o.jsxs(I,{path:"/produto_assinatura",element:o.jsx(my,{}),children:[o.jsx(I,{path:"registrar",element:o.jsx(Gs,{})}),o.jsx(I,{path:"y",element:o.jsx(Gs,{})})]}),o.jsxs(I,{path:"/admin-checkout",element:o.jsx(F3,{}),children:[o.jsx(I,{path:"admin-page",element:o.jsx(UC,{})}),o.jsx(I,{path:"messages-page",element:o.jsx(k5,{})})]}),o.jsx(I,{path:"/testing",element:o.jsx(HC,{})}),o.jsx(I,{path:"*",element:o.jsx(X2,{})})]}),o.jsx(u2,{})]}),o.jsx(zu,{position:"top-center"})]})}const D5=wj({reducer:{user:gk,frete:Kk,allFretes:Ok,userData:ok,singleFrete:Y3,historic:w3,subscription:i5,support:hN,admin:I2,message:LN}});$c.createRoot(document.getElementById("root")).render(o.jsx(V.StrictMode,{children:o.jsx(M_,{store:D5,children:o.jsx(I5,{})})}));

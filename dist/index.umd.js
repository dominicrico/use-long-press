!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],n):n((e||self).useLongPress={},e.react)}(this,function(e,n){function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},t.apply(this,arguments)}var o,r;function u(e){var n=e.nativeEvent;return window.TouchEvent?n instanceof TouchEvent:"touches"in n}function c(e){return e.nativeEvent instanceof MouseEvent}function s(e){return e.nativeEvent instanceof PointerEvent}function i(e){return u(e)?{x:e.touches[0].pageX,y:e.touches[0].pageY}:c(e)||s(e)?{x:e.pageX,y:e.pageY}:null}e.LongPressEventReason=void 0,(o=e.LongPressEventReason||(e.LongPressEventReason={})).CANCELED_BY_MOVEMENT="canceled-by-movement",o.CANCELED_BY_TIMEOUT="canceled-by-timeout",e.LongPressDetectEvents=void 0,(r=e.LongPressDetectEvents||(e.LongPressDetectEvents={})).ALL="all",r.POINTER="pointer",r.MOUSE="mouse",r.TOUCH="touch",e.useLongPress=function(o,r){var a=void 0===r?{}:r,v=a.threshold,f=void 0===v?400:v,l=a.captureEvent,E=void 0!==l&&l,d=a.detect,L=void 0===d?e.LongPressDetectEvents.ALL:d,g=a.cancelOnMovement,p=void 0!==g&&g,P=a.filterEvents,M=a.onStart,h=a.onMove,T=a.onFinish,y=a.onCancel,C=n.useRef(!1),O=n.useRef(!1),D=n.useRef(),b=n.useRef(o),x=n.useRef(null),R=n.useCallback(function(e){return function(n){if(!O.current&&(c(n)||u(n)||s(n))&&(void 0===P||P(n))){x.current=i(n),E&&n.persist();var t=void 0===e?{}:{context:e};null==M||M(n,t),O.current=!0,D.current=setTimeout(function(){b.current&&(b.current(n,t),C.current=!0)},f)}}},[E,P,M,f]),m=n.useCallback(function(n,o){return function(r){if(c(r)||u(r)||s(r)){x.current=null,E&&r.persist();var i=void 0===n?{}:{context:n};C.current?null==T||T(r,i):O.current&&(null==y||y(r,t({},i,{reason:null!=o?o:e.LongPressEventReason.CANCELED_BY_TIMEOUT}))),C.current=!1,O.current=!1,void 0!==D.current&&clearTimeout(D.current)}}},[E,T,y]),N=n.useCallback(function(n){return function(t){if(p&&x.current){var o=i(t);if(o){var r=!0===p?25:p,u={x:Math.abs(o.x-x.current.x),y:Math.abs(o.y-x.current.y)};(u.x>r||u.y>r)&&(null==h||h(t,{context:n}),m(n,e.LongPressEventReason.CANCELED_BY_MOVEMENT)(t))}}}},[m,p,h]);return n.useEffect(function(){return function(){void 0!==D.current&&clearTimeout(D.current)}},[]),n.useEffect(function(){b.current=o},[o]),n.useMemo(function(){return function(n){var r={onMouseDown:R(n),onMouseMove:N(n),onMouseUp:m(n),onMouseLeave:m(n)},u={onTouchStart:R(n),onTouchMove:N(n),onTouchEnd:m(n)},c={onPointerDown:R(n),onPointerMove:N(n),onPointerUp:m(n),onPointerLeave:m(n)};return null===o?{}:L===e.LongPressDetectEvents.MOUSE?r:L===e.LongPressDetectEvents.TOUCH?u:L===e.LongPressDetectEvents.POINTER?c:t({},r,u,c)}},[o,m,L,N,R])}});
//# sourceMappingURL=index.umd.js.map

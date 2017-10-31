/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,c){a.q={};o_("OffcanvasUtils",a.q,a);a.q.jX="oj-offcanvasEdge";a.q.Ms="oj-offcanvas";a.q.kX="oj-mediaQueryListener";a.q.Paa="oj-offcanvasHammer";a.q.Qaa="oj-offcanvasStyle";a.q.cy="selector";a.q.KF="content";a.q.Ox="start";a.q.Nx="end";a.q.NF="top";a.q.GM="bottom";a.q.Kx="displayMode";a.q.Lx="push";a.q.eW="overlay";a.q.W9="pin";a.q.Uxa="modality";a.q.M1a="none";a.q.Vxa="modal";a.q.DM="_dismissHandler";
a.q.HW="_openPromise";a.q.JF="_closePromise";a.q.tB="_glassPane";a.q.Z$="_surrogate";a.q.QW="data-oj-offcanvas-surrogate-id";a.q.oya="oj-offcanvas-outer-wrapper";a.q.aN="oj-offcanvas-open";a.q.Ii="oj-offcanvas-transition";a.q.rya="oj-offcanvas-pin";a.q.qya="oj-offcanvas-pin-transition";a.q.yxa="oj-offcanvas-glasspane";a.q.LM="oj-offcanvas-glasspane-dim";a.q.Xya="ojbeforeopen veto";a.q.Wya="ojbeforeclose veto";a.q.$Ta={start:"oj-offcanvas-shift-start",end:"oj-offcanvas-shift-end",top:"oj-offcanvas-shift-down",
bottom:"oj-offcanvas-shift-up"};a.q.zHa={start:"oj-offcanvas-start",end:"oj-offcanvas-end",top:"oj-offcanvas-top",bottom:"oj-offcanvas-bottom"};a.q.VIa=function(b){b=b[a.q.Kx];b!==a.q.eW&&b!==a.q.Lx&&b!==a.q.W9&&(b=(a.ic.Tc("oj-offcanvas-option-defaults")||{}).displayMode);return b};a.q.Ri=function(b){return g(b[a.q.cy])};a.q.bJ=function(b){return b[a.q.Uxa]===a.q.Vxa};a.q.C2=function(b){return b.hasClass(a.q.aN)};a.q.ez=function(b){return b.closest("."+a.q.oya)};a.q.FP=function(b){var c=a.q.Ri(b);
return a.q.gma(b)||b[a.q.Kx]===a.q.eW?c:c.parent()};a.q.kKa=function(b){var c=a.q.$Ta[b];if(!c)throw"Invalid edge: "+b;return c};a.q.Eh=function(){return"rtl"===a.T.Qk()};a.q.yp=function(a,c){a.css({"-webkit-transform":c,transform:c})};a.q.j1=function(b,c,e){b=b===a.q.Nx;if(a.q.Eh()||e)b=!b;return"translate3d("+(b?"-":"")+c+", 0, 0)"};a.q.iK=function(b,c,e){a.q.yp(b,a.q.j1(c,e,!1))};a.q.gja=function(b,c){return"translate3d(0, "+(b===a.q.GM?"-":"")+c+", 0)"};a.q.NTa=function(b,c,e){a.q.yp(b,a.q.gja(c,
e))};a.q.hja=function(a,c){return"translate3d(0, "+(c?"-":"")+a+", 0)"};a.q.PSa=function(b,c,e){b.addClass(a.q.Ii);a.q.yp(b,"translate3d(0, 0, 0)");c.addClass(a.q.Ii);a.q.yp(c,e)};a.q.eoa=function(b){var c=b.edge;b=a.q.Ri(b);c&&c.length||(c=b.hasClass("oj-offcanvas-start")?a.q.Ox:b.hasClass("oj-offcanvas-end")?a.q.Nx:b.hasClass("oj-offcanvas-top")?a.q.NF:b.hasClass("oj-offcanvas-bottom")?a.q.GM:a.q.Ox);g.data(b[0],a.q.jX,c);return c};a.q.o0=function(b){return g.data(b[0],a.q.jX)};a.q.hE=function(b,
c,e){var f=b[a.q.Kx],g=a.q.Ri(b),k=a.q.aN,f=f===a.q.eW?a.q.Ii+" oj-offcanvas-overlay":a.q.Ii;e?(g.addClass(k),c.addClass(f)):(b.makeFocusable&&a.T.aV({element:g,remove:!0}),b=b.tabindex,void 0===b?g.removeAttr("tabindex"):g.attr("tabindex",b),g.removeClass(k),c.removeClass(f))};a.q.Vm=function(b){var c=a.q.Ri(b),e=c.find("[autofocus]");0==e.length&&(e=c.find(":tabbable"));0==e.length?(e=c.attr("tabindex"),void 0!==e&&(b.tabindex=e),c.attr("tabindex","-1"),e=c,a.T.aV({element:c,applyHighlight:!0}),
b.makeFocusable=!0):e=e[0];a.mf.XK(e)};a.q.TNa=function(a){return"none"!=a.autoDismiss};a.q.tEa=function(a){var c=a.css("transitionProperty").split(","),e=a.css("transitionDelay").split(",");a=a.css("transitionDuration").split(",");for(var f=0,g=0;g<c.length;g++){var k=a[g%a.length],k=-1<k.indexOf("ms")?parseFloat(k):1E3*parseFloat(k);if(0<k)var l=e[g%e.length],l=-1<l.indexOf("ms")?parseFloat(l):1E3*parseFloat(l),f=Math.max(f,l+k)}return f+100};a.q.Rm=function(b,c){function e(){f&&(clearTimeout(f),
f=void 0);b.off("transitionend.oc webkitTransitionEnd.oc",e);c(b)}var f;b.on("transitionend.oc webkitTransitionEnd.oc",e);f=setTimeout(e,a.q.tEa(b))};a.q.Rea=function(b){a.q.close(b)["catch"](function(b){a.D.warn("Offcancas close failed: "+b)})};a.q.TR=function(b){a.q.B5(b);if(a.q.TNa(b)){var c=a.q.Ri(b),e=b[a.q.DM]=function(e){var f=e.target;a.T.Zta(e)||"focus"===e.type&&!g(f).is(":focusable")||(null==g.data(c[0],a.q.Ms)?a.q.B5(b):a.T.VZa(c[0],f)||a.q.Rea(b))},f=document.documentElement;a.T.ie()&&
f.addEventListener("touchstart",e,!0);f.addEventListener("mousedown",e,!0);f.addEventListener("focus",e,!0)}a.q.GD(b)};a.q.B5=function(b){var c=b[a.q.DM];if(c){var e=document.documentElement;a.T.ie()&&e.removeEventListener("touchstart",c,!0);e.removeEventListener("mousedown",c,!0);e.removeEventListener("focus",c,!0);delete b[a.q.DM];b[a.q.DM]=null}a.q.MS(b)};a.q.GD=function(b){if(a.T.ie()){var d=b[a.q.cy],e=g(d),f=a.q.o0(e),h,k;f===a.q.Ox&&!a.q.Eh()||f===a.q.Nx&&a.q.Eh()?(k={recognizers:[[c.Swipe,
{direction:c.DIRECTION_LEFT}]]},h="swipeleft"):f===a.q.Ox&&a.q.Eh()||f===a.q.Nx&&!a.q.Eh()?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_RIGHT}]]},h="swiperight"):f===a.q.NF?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_UP}]]},h="swipeup"):f===a.q.GM&&(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_DOWN}]]},h="swipedown");f=e.Lg(k).on(h,function(c){c.target===e[0]&&(c.preventDefault(),a.q.Rea(b))});g.data(g(d)[0],a.q.Paa,{event:h,hammer:f})}};a.q.MS=function(b){b=a.q.Ri(b);0<b.length&&(b=g.data(b[0],
a.q.Paa))&&b.hammer.off(b.event)};a.q.cOa=function(b){return a.q.ez(b).hasClass("oj-offcanvas-page")};a.q.E2=function(b){return b[a.q.Kx]===a.q.W9};a.q.gma=function(b){return b[a.q.KF]||a.q.cOa(a.q.Ri(b))||a.q.E2(b)};a.q.i3a=function(b){var c=b.attr("style");void 0!==c&&g.data(b[0],a.q.Qaa,c)};a.q.xSa=function(b){var c=g.data(b[0],a.q.Qaa);c?b.attr("style",c):b.removeAttr("style")};a.q.cA=function(b,c){var e=a.q.o0(b),e=a.q.kKa(e),f=a.q.ez(b);a.C.rf(f,g);var h=f.hasClass(e);c||f.toggleClass(e,!h);
return h};a.q.$s=function(b){a.q.B5(b);var c=a.q.Ri(b),e=a.q.E2(b),f=null;try{f=g.data(c[0],a.q.Ms)}catch(h){}f===b&&(b._panInProgress||(a.q.o0(c),f=a.q.FP(b),e?c.removeClass(a.q.aN+" "+a.q.qya):a.q.hE(b,f,!1),a.q.FRa(b),e&&(a.q.ez(c).removeClass(a.q.rya),a.q.xSa(c)),c.trigger("ojclose",b)),g.removeData(c[0],a.q.Ms))};a.q.dpa=function(b,c,e){var f=g(b);(c=!!c)&&a.q.C2(f)&&a.q.et(b,!1);f.toggleClass(a.q.zHa[e],!c)};a.q.X0a=function(b){var c=b.query;if(null!==c){var e=b[a.q.cy],c=window.matchMedia(c),
f=a.q.eoa(b);b=function(b){a.q.dpa(e,b.matches,f)};c.addListener(b);a.q.dpa(e,c.matches,f);g.data(g(e)[0],a.q.kX,{mqList:c,mqListener:b})}};o_("OffcanvasUtils.setupResponsive",a.q.X0a,a);a.q.n1a=function(b){b=a.q.Ri(b);var c=g.data(b[0],a.q.kX);c&&(c.mqList.removeListener(c.mqListener),g.removeData(b[0],a.q.kX))};o_("OffcanvasUtils.tearDownResponsive",a.q.n1a,a);a.q.XPa=function(b,c,e){function f(e){e.removeClass(a.q.Ii);l?l=!1:(a.q.Vm(b),h.trigger("ojopen",b),a.q.TR(b),c(!0))}var h=a.q.Ri(b),k=g(b[a.q.KF]);
a.C.rf(k,g);var l=!0,m=b.size,p;h.addClass(a.q.aN);window.setTimeout(function(){e===a.q.Ox||e===a.q.Nx?(void 0===m&&(m=h.outerWidth(!0)+"px"),p=a.q.j1(e,m,!1)):(void 0===m&&(m=h.outerHeight(!0)+"px"),a.q.yp(h,a.q.hja(m,e===a.q.NF)),p=a.q.hja(m,e!==a.q.NF));window.setTimeout(function(){a.q.PSa(h,k,p);a.q.cA(h,!1);a.q.Rm(k,f);a.q.Rm(h,f)},0)},0);a.q.UY(b,h)};a.q.TPa=function(b,c,e){var f=a.q.Ri(b);a.q.hE(b,f,!0);var g=b.size;g&&(e===a.q.Ox||e===a.q.Nx?a.q.yp(f,a.q.j1(e,g,!0)):a.q.yp(f,a.q.gja(e,g)));
window.setTimeout(function(){a.q.cA(f,!1)},20);a.q.UY(b,f);a.q.Rm(f,function(){f.removeClass(a.q.Ii);a.q.Vm(b);f.trigger("ojopen",b);a.q.TR(b);c(!0)})};a.q.aFa=function(b,c,e,f){function h(){l||(k.removeClass(a.q.Ii),a.q.yp(k,""),a.q.$s(b),c(!0));l=!1}var k=g(b[a.q.KF]),l=!0;a.q.yp(e,"");a.q.yp(k,"");a.q.cA(e,!1);a.q.bJ(b)&&b[a.q.tB].removeClass(a.q.LM);f?(k.addClass(a.q.Ii),e.addClass(a.q.Ii),a.q.Rm(e,h),a.q.Rm(k,h)):(l=!1,h())};a.q.$Ea=function(b,c,e,f){function g(){a.q.$s(b);c(!0)}a.q.cA(e,!1);
a.q.bJ(b)&&b[a.q.tB].removeClass(a.q.LM);f?(e.addClass(a.q.Ii),a.q.Rm(e,g)):g()};a.q.SPa=function(b,c,e,f){var h=a.q.Ri(b),k=a.q.FP(b);a.C.rf(k,g);a.q.hE(b,k,!0);var l;e===a.q.Ox||e===a.q.Nx?(l=void 0===l?h.outerWidth(!0)+"px":l,f===a.q.Lx&&a.q.iK(k,e,l)):(l=void 0===l?h.outerHeight(!0)+"px":l,f===a.q.Lx&&a.q.NTa(k,e,l));window.setTimeout(function(){a.q.cA(h,!1)},10);a.q.UY(b,h);a.q.Rm(k,function(){k.removeClass(a.q.Ii);a.q.Vm(b);h.trigger("ojopen",b);a.q.TR(b);c(!0)})};a.q.ZEa=function(b,c,e,f){function g(){a.q.$s(b);
c(!0)}var k=b[a.q.Kx],l=a.q.FP(b);k===a.q.Lx&&a.q.yp(l,"");a.q.cA(e,!1);a.q.bJ(b)&&b[a.q.tB].removeClass(a.q.LM);f?(l.addClass(a.q.Ii),a.q.Rm(l,g)):g()};a.q.open=function(b){var c=a.q.Ri(b),e=g.data(c[0],a.q.Ms);if(e){if(e[a.q.JF])return e[a.q.JF];if(e[a.q.HW])return e[a.q.HW]}var f,h=!1,e=new Promise(function(e,k){a.C.rf(c,g);var p=a.q.eoa(b),t=g.Event("ojbeforeopen");c.trigger(t,b);if(!1===t.result)k(a.q.Xya),h=!0;else{var t=a.q.VIa(b),r=a.q.E2(b);!r||p!==a.q.NF&&p!==a.q.GM||(t=a.q.Lx);var n=g.extend({},
b);n[a.q.Kx]=t;g.data(c[0],a.q.Ms,n);if(b[a.q.KF]){if(!a.q.gma(b))throw"Error: Both main content selector and the inner wrapper \x3cdiv class\x3d'oj-offcanvas-inner-wrapper'\x3e are provided. Please remove the inner wrapper.";f=a.Context.getContext(c[0]).md().ad({description:"The offcanvas selector \x3d'"+b[a.q.cy]+"' doing the open animation."});r||(t===a.q.Lx?a.q.XPa(n,e,p):a.q.TPa(n,e,p))}else a.q.SPa(n,e,p,t)}}),e=e.then(function(a){f&&f();return a},function(a){f&&f();throw a;});if(!h){var k=
g.data(c[0],a.q.Ms);k&&(k[a.q.HW]=e,a.Components.Bo(c[0]))}return e};o_("OffcanvasUtils.open",a.q.open,a);a.q.close=function(b){return a.q.et(b[a.q.cy],!0)};o_("OffcanvasUtils.close",a.q.close,a);a.q.et=function(b,c){var e=g(b);a.C.rf(e,g);var f=g.data(e[0],a.q.Ms);if(f&&f[a.q.JF])return f[a.q.JF];var h,k=!1,l=new Promise(function(l,p){if(a.q.C2(e)){b!=f[a.q.cy]&&l(!0);a.q.cA(e,!0)||l(!0);var t=g.Event("ojbeforeclose");e.trigger(t,f);!1===t.result?(p(a.q.Wya),k=!0):(c&&(h=a.Context.getContext(e[0]).md().ad({description:"The offcanvas selector \x3d'"+
f[a.q.cy]+"' doing the close animation."})),t=f[a.q.Kx],f[a.q.KF]?t===a.q.Lx?a.q.aFa(f,l,e,c):a.q.$Ea(f,l,e,c):a.q.ZEa(f,l,e,c))}else l(!0)}),l=l.then(function(a){h&&h();return a},function(a){h&&h();throw a;});!k&&(f=g.data(e[0],a.q.Ms))&&(f[a.q.JF]=l,a.Components.jq(e[0]));return l};a.q.toggle=function(b){var c=a.q.Ri(b);a.C.rf(c,g);return a.q.C2(c)?a.q.close(b):a.q.open(b)};o_("OffcanvasUtils.toggle",a.q.toggle,a);a.q.WCa=function(b){var c=g("\x3cdiv\x3e");c.addClass(a.q.yxa);c.attr("role","presentation");
c.attr("aria-hidden","true");c.appendTo(b.parent());c.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus",function(a){a.stopPropagation();a.preventDefault()});return c};a.q.f_=function(b){var c=g("\x3cspan style\x3d'display:none'\x3e");c.attr("aria-hidden","true");var e=b.attr("id");e?(e=[e,"surrogate"].join("_"),c.attr("id",e)):e=c.uniqueId();c.insertBefore(b);b.attr(a.q.QW,e);return c};a.q.vUa=function(b,c){b[a.q.Z$]=a.q.f_(c);c.appendTo(c.parent())};a.q.wSa=function(b){var c=
a.q.Ri(b);b=b[a.q.Z$];c&&b&&c.attr(a.q.QW)===b.attr("id")&&(c.insertAfter(b),c.removeAttr(a.q.QW),b.remove())};a.q.UY=function(b,c){a.q.bJ(b)&&(b[a.q.tB]=a.q.WCa(c),a.q.vUa(b,c),window.setTimeout(function(){b[a.q.tB].addClass(a.q.LM)},0))};a.q.FRa=function(b){a.q.bJ(b)&&(b[a.q.tB].remove(),a.q.wSa(b))};a.q.qwa=function(b){var d,e,f,h,k,l,m,p,t,r,n,q;null==g(b).attr("oj-data-pansetup")&&(g(b).attr("oj-data-pansetup","true"),b.displayMode="push",d=a.q.Ri(b),f=a.q.ez(d),k={recognizers:[[c.Pan,{direction:c.DIRECTION_HORIZONTAL}]]},
l=!1,g(f).Lg(k).on("panstart",function(f){m=null;switch(f.gesture.direction){case c.DIRECTION_LEFT:Math.abs(f.gesture.deltaY)<Math.abs(f.gesture.deltaX)&&(m=a.q.Eh()?"end":"start");break;case c.DIRECTION_RIGHT:Math.abs(f.gesture.deltaY)<Math.abs(f.gesture.deltaX)&&(m=a.q.Eh()?"start":"end")}null!=m&&(p={direction:m,distance:Math.abs(f.gesture.deltaX)},t=g.Event("ojpanstart"),d.trigger(t,p),t.isDefaultPrevented()||(e=b.size,null==e&&(e=d.outerWidth()),b._closePromise=null,b._panInProgress=!0,h=a.q.FP(b),
h.off(".oc"),a.q.hE(b,h,!0),l=!0,f.gesture.srcEvent.stopPropagation(),f.stopPropagation()))}).on("panmove",function(b){l&&(r=b.gesture.deltaX,"start"==m&&0<r||"end"==m&&0>r?a.q.iK(h,"start","0px"):(d.css("width",Math.abs(r)),h.removeClass(a.q.Ii),a.q.iK(h,"start",r+"px"),p={direction:m,distance:Math.abs(r)},t=g.Event("ojpanmove"),d.trigger(t,p),b.gesture.srcEvent.stopPropagation(),b.stopPropagation()))}).on("panend",function(c){l&&(l=!1,b._panInProgress=null,r=Math.abs(c.gesture.deltaX),p={distance:r},
t=g.Event("ojpanend"),d.trigger(t,p),c.stopPropagation(),t.isDefaultPrevented()?(q=function(){a.q.hE(b,h,!1);h.removeClass(a.q.Ii);h.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd",q);d.trigger("ojclose",b)},h.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd",q),h.addClass(a.q.Ii),a.q.iK(h,"start","0px")):(n=b.edge,null==n&&(n=d.hasClass("oj-offcanvas-start")?"start":"end"),a.q.EDa(h,d,n,e,b),g.data(d[0],a.q.Ms,b),g.data(d[0],a.q.jX,n),a.q.TR(b)))}))};o_("OffcanvasUtils.setupPanToReveal",
a.q.qwa,a);a.q.EDa=function(b,c,e,f,g){var k,l,m,p,t,r,n,q,s,u;b.removeClass(a.q.Ii);k=Math.round(1E3/60);l=b.css("transform").split("(")[1].split(")")[0].split(",");m=parseInt(l[4],10);p="end"==e?0-f:f;r=Math.max(1,Math.abs(p-m)/(400/k));n=(new Date).getTime();q=function(){s=(new Date).getTime();u=Math.max(r,r*Math.max((s-n)/k));n=s;m<p?m=Math.min(p,m+u):m>p&&(m=Math.max(p,m-u));a.q.iK(b,e,Math.abs(m)+"px");c.css("width",Math.abs(m)+"px");m==p?(window.cancelAnimationFrame(t),b.addClass(a.q.Ii),c.trigger("ojopen",
g)):t=window.requestAnimationFrame(q)};t=window.requestAnimationFrame(q)};a.q.Gwa=function(b){b=a.q.Ri(b);b=a.q.ez(b);g(b).off("panstart panmove panend")};o_("OffcanvasUtils.tearDownPanToReveal",a.q.Gwa,a)});
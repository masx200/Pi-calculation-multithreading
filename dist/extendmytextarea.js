parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Prqo":[function(require,module,exports) {
!function(){function n(n){var t=null,e=function(n,t){if(Math.abs(parseInt(n.style.height)-n.scrollHeight)>5){console.log(parseInt(n.style.height),n.scrollHeight),n.style.height=n.scrollHeight+3+"px";var e=n;console.log("拉伸文本框",parseInt(n.style.height),n.scrollHeight,e.outerHTML)}},o=function(n){t&&(clearTimeout(t),t=null),t=setTimeout(function(){e(n)},200)};n.addEventListener?(n.addEventListener("input",function(){e(n)},!1),e(n)):n.attachEvent&&(n.attachEvent("onpropertychange",function(){e(n)}),e(n)),window.VBArray&&window.addEventListener&&(n.attachEvent("onkeydown",function(){var t=window.event.keyCode;8!=t&&46!=t||o(n)}),n.attachEvent("oncut",function(){o(n)})),document.body.onmousemove=function(){o(n)},document.body.onmouseover=function(){o(n)},document.body.onmousewheel=function(){o(n)},document.body.onscroll=function(){o(n)},document.body.onmousedown=function(){o(n)},n.onchange=function(){o(n)},n.addEventListener("click",function(){o(n)})}$("#my主体").css("padding-top",$("#my导航栏").height()),function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];for(var i=0,c=e;i<c.length;i++){value=c[i];var u=document.getElementById(value);u.scrollHeight=60,u.style.height="60px",n(u)}}("tp","tp2","tp-big","tp2-big")}();
},{}]},{},["Prqo"], null)
//# sourceMappingURL=/extendmytextarea.js.map
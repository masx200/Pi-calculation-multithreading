parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wRMn":[function(require,module,exports) {
function l(l){return i(l)||e(l)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function i(l){if(Array.isArray(l)){for(var a=0,e=new Array(l.length);a<l.length;a++)e[a]=l[a];return e}}!function(){var a;importScripts("https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js"),addEventListener("message",function(e){var i;a=e.data[0];var m=e.data[1],c=e.data[2];console.log("副线程"+(c+1)+"从主线程接收event.data\n"),(i=console).log.apply(i,l(e.data)),Decimal.precision=a+1;for(var t=new Decimal(0),n=new Decimal(1),r=new Decimal(0),u=1,o=new Decimal(1),p=0,s=c;p<s;p++)u*=-1,n=Decimal.mul(n,1024),r=r.plus(1);for(;-1!=Decimal.abs(o).cmp(new Decimal("1e-"+(1+a)))&&(o=Decimal.mul(1,u).mul(Decimal.div(-Math.pow(2,5),Decimal.mul(4,r).plus(1)).plus(Decimal.div(-1,Decimal.mul(4,r).plus(3))).plus(Decimal.div(Math.pow(2,8),Decimal.mul(10,r).plus(1))).plus(Decimal.div(-Math.pow(2,6),Decimal.mul(10,r).plus(3))).plus(Decimal.div(-Math.pow(2,2),Decimal.mul(10,r).plus(5))).plus(Decimal.div(-Math.pow(2,2),Decimal.mul(10,r).plus(7))).plus(Decimal.div(1,Decimal.mul(10,r).plus(9)))).div(Decimal.mul(Math.pow(2,6),n)),t=Decimal.add(t,o),-1!=Decimal.abs(o).cmp(new Decimal("1e-"+(1+a))));)for(p=0,s=m;p<s;p++)u*=-1,n=Decimal.mul(n,1024),r=r.plus(1);postMessage([""+t,""+r.plus(1)])})}();
},{}]},{},["wRMn"], null)
//# sourceMappingURL=/mythread1.js.map
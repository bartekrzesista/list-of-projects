parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cFFK":[function(require,module,exports) {

},{}],"YvtQ":[function(require,module,exports) {

},{"./normalize.css":"cFFK"}],"QvaY":[function(require,module,exports) {
"use strict";function n(n,e){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=t(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var a=0,s=function(){};return{s:s,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=n[Symbol.iterator]()},n:function(){var n=r.next();return i=n.done,n},e:function(n){l=!0,o=n},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}require("../scss/index.scss"),fetch("https://api.github.com/users/bartekrzesista/repos?sort=created").then(function(n){return n.json()}).then(function(t){var e,r=document.querySelector(".menu__content-grid--js"),a=n(t);try{for(a.s();!(e=a.n()).done;){var s=e.value,o=s.name,i=s.language,l=s.created_at,c=s.html_url,p=l.slice(0,10),u='<article class="repo">\n        <ul class="repo__list">\n          <li class="repo__list-item">\n            <span class="repo-left-span">Name:</span\n            ><span class="repo-right-span">'.concat(o,'</span>\n          </li>\n          <li class="repo__list-item">\n            <span class="repo-left-span">Language:</span\n            ><span class="repo-right-span">').concat(i,'</span>\n          </li>\n          <li class="repo__list-item">\n            <span class="repo-left-span">Creation date:</span\n            ><span class="repo-right-span">').concat(p,'</span>\n          </li>\n          <li class="repo__list-item">\n            <span class="repo-left-span">Github:</span\n            ><span class="repo-right-span"><a href="').concat(c,'" title="').concat(o,' - repository">LINK</a></span>\n          </li>\n        </ul>\n      </article>');r.innerHTML+=u}}catch(f){a.e(f)}finally{a.f()}}).catch(function(n){console.log("Failed to fetch")});
},{"../scss/index.scss":"YvtQ"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.655c0e85.js.map
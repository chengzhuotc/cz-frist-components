!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cz=e():t.cz=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var r=n(14),i=o(r),s=n(15),a=o(s),p=n(6),u=function(t,e){t.component(i["default"].name,i["default"]),t.component(a["default"].name,a["default"])};t.exports={install:u,nx:p.nx}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=l[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(p(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(p(o.parts[i],e));l[o.id]={id:o.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],s=r[1],a=r[2],p=r[3],u={css:s,media:a,sourceMap:p};n[i]?n[i].parts.push(u):e.push(n[i]={id:i,parts:[u]})}return e}function i(t,e){var n=x(),o=m[m.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function p(t,e){var n,o,r;if(e.singleton){var i=v++;n=h||(h=a(e)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=a(e),o=f.bind(null,n),r=function(){s(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function u(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function f(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),x=c(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return o(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],p=l[a.id];p.refs--,i.push(p)}if(t){var u=r(t);o(u,e)}for(var s=0;s<i.length;s++){var p=i[s];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete l[p.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={computed:{positionClass:function(){return this.position?"alert-"+this.position:""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"hi"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"wo"}},function(t,e,n){"use strict";var o=function(t){var e=t.extend(n(13)),o=null;Object.defineProperty(t.prototype,"$alert",{get:function(){return function(t,n){o||(o=new e({el:document.createElement("div"),data:function(){return{message:t,position:n}}}),o.$appendTo(document.body))}}}),t.transition("fadeIn",{afterEnter:function(t){setTimeout(function(){o.$remove()},2e3)},afterLeave:function(t){o=null}})};window.Vue&&Vue.use(o),t.exports=o},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".alert-wrapper{position:absolute;top:50%;left:0;text-align:center;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity .3s linear;transition:opacity .3s linear;z-index:99999}.alert-wrapper.alert-bottom{bottom:10%;top:auto}.alert-wrapper.alert-bottom,.alert-wrapper.alert-top{-webkit-transform:translate(0);transform:translate(0)}.alert-wrapper.alert-top{top:10%;bottom:auto}.alertBox{padding:15px 20px;display:inline-block;background-color:rgba(0,0,0,.75);border-radius:3px;font-size:.9em;color:#fff;max-width:80%;-webkit-user-select:none}.fadeIn-transition{opacity:1}.fadeIn-enter,.fadeIn-leave{opacity:0}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"b{background-color:#fff}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"b{background-color:#fff}",""])},function(t,e){t.exports=" <div class=alert-wrapper :class=positionClass transition=fadeIn> <div class=alertBox>{{message}} </div> </div> "},function(t,e){t.exports=" <b>hihihihihihihih</b> "},function(t,e){t.exports=" <b>我我我我我我</b> "},function(t,e,n){var o,r;n(16),o=n(3),r=n(10),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(17),o=n(4),r=n(11),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(18),o=n(5),r=n(12),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(8);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)}])});
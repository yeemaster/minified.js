var j=!0,s=null,t=!1;if(/^u/.test(typeof define)){var J={};this.define=function(w,u){J[w]=u()};this.require=function(w){return J[w]}}define("minified",function(){function w(a){return a!=s?""+a:""}function u(a){return"string"==typeof a}function r(a){return a&&a.nodeType}function B(a){return a&&a.length!=s&&!u(a)&&!r(a)&&!n(a)}function K(a){return a}function y(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function L(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function v(a,b,c){var d=[];a(b,function(a,b){f(c(a,b),function(a){d.push(a)})});return d}function m(a,b,c){return w(a).replace(b,c||"")}function f(a,b){if(B(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=s&&b(a,0);return a}function n(a){return"function"==typeof a&&!a.item}function M(){return 1}function N(a,b){var c=RegExp("\\b"+a+"\\b","i");return a?function(a){return c.test(a[b])}:M}function O(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function C(a){return parseFloat(m(a,/^[^\d-]+/))}function G(a){return a.minified=a.minified||++U}function P(a,b){var c=[],d={},e;f(a,function(a){f(b(a),function(a){if(r(a)&&!d[e=G(a)])c.push(a),d[e]=j})});return c}function Q(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:s},c=a.get(b);a.set(b);b=a.get("$height",j);a.set(c);return b}function R(a){a()}function S(a){D?D.push(a):p.setTimeout(a,0)}function T(a,b,c,d){return function(){var e=k(z.createElement(a));B(b)||b!=s&&"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function k(a,b,c){return n(a)?S(a):new A(E(a,b,c))}function E(a,b,c){function d(a){a=v(f,a,function g(a){return B(a)?v(f,a,g):a});return e?L(a,function(a){for(;a=a.parentNode;){if(a===e)return j;if(c)return t}}):a}var e;if(b&&1!=(b=E(b)).length)return P(b,function(b){return E(a,b,c)});e=b&&b[0];if(!u(a))return d(a);b=(e||z).querySelectorAll(a);return e?d(b):b}function F(a,b){var c,d={};if(n(a))return a;if(!a||u(a)&&("*"==a||(c=/^([\w-]*)\.([\w-]+)$/.exec(a))||(c=/^([\w-]+)$/.exec(a)))){var e=N(c&&c[1],"nodeName"),l=N(c&&c[2],"className");return function(a){return 1==r(a)&&e(a)&&l(a)}}if(b)return function(c){return k(a,b).find(c)!=s};k(a).each(function(a){d[G(a)]=j});return function(a){return d[G(a)]}}function H(){function a(a,e){b==s&&(b=a,c=e,p.setTimeout(function(){f(d,R)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(n(d)){var g=d.apply(s,c);g&&n(g.then)?g.then(function(a){q(j,[a])},function(a){q(t,[a])}):q(j,[g])}else q(b,c)}catch(V){q(t,[V])}}var q=H();b!=s?p.setTimeout(g,0):d.push(g);return q};a.error=function(a){return e(0,a)};return a}function A(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var p=this,z=document,U=1,D=[],I=[],W=p.requestAnimationFrame||function(a){p.setTimeout(a,33)};y({each:function(a){return f(this,a)},filter:function(a){return new A(L(this,a))},collect:function(a){return new A(v(f,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&b<d})},find:function(a,b){for(var c,d=n(a)?a:function(b,c){if(a===b)return c},e=b;e<this.length;e++)if((c=d(this[e],e))!=s)return c},remove:function(){f(this,function(a){a.parentNode.removeChild(a)})},text:function(){function a(b){var c=r(b);return 1==c?v(f,b.childNodes,a):5>c?b.data:s}return v(f,this,a).join("")},trav:function(a,b,c){var d=F("number"==typeof b?s:b),e="number"==typeof b?b:c||1e9;return new A(P(this,function(b){for(var c=[];(b=b[a])&&c.length<e;)d(b)&&c.push(b);return c}))},select:function(a,b){return k(a,this,b)},is:function(a){var b=F(a);return!this.find(function(a){if(!b(a))return j})},only:function(a){return this.filter(F(a))},get:function(a,b){var c=this,d=c[0];if(d){if(u(a)){var e=m(m(a,/^%/,"data-"),/^[$@]+/),l;l="$"==a?d.className:"$$"==a?d.getAttribute("style"):/^\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(l=C(d.style.opacity))?1:l:"$$slide"==a?c.get("$height"):/^\$[^$]/.test(a)?p.getComputedStyle(d,s).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^[@%]/.test(a)?d.getAttribute(e):d[e];return b?C(l):l}var h={};(B(a)?f:y)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=C(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&Q(k(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=m(m(a,/^%/,"data-"),/^[@$]+/),g=c.className||"",q=/^\$/.test(a)?c.style:c,x=n(b)?b(k(c).get(a),d,c):b;"$"==a?x!=s&&(f(x.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b","i"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?x!=s?c.setAttribute("style",x):c.removeAttribute("style"):"$$scrollX"==a?p.scroll(x,p.scrollY):"$$scrollY"==a?p.scroll(p.scrollX,x):/^[@%]/.test(a)?x!=s?q.setAttribute(h,x):q.removeAttribute(h):q[h]=x}):u(a)||n(a)?c.set("$",a):y(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return this.each(function(c,d){var e;(function h(a){B(a)?f(a,h):n(a)?h(a(c,d)):a!=s&&(a=r(a)?a:z.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(r(a)&&d?s:a)})},fill:function(a){return this.each(function(a){k(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return this.collect(function(b){var c=r(b);if(1==c){var d={};f(b.attributes,function(a){var b=a.name;"id"!=b&&(d["@"+b]=a.value)});return T(b.tagName,d,k(b.childNodes).clone(),a)}return 5>c?b.data:s})},animate:function(a,b,c,d){var e=this,l=[],h,g=H(),q=n(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){h();g(t)};b=b||500;c=c||0;f(e,function(b,c){var d={a:k(b),c:{}};y(d.b=d.a.get(a),function(e,h){d.c[e]=n(dest)?dest(h,c,b):"$$slide"==e?a[e]*Q(d.a)+"px":a[e]});l.push(d)});h=k.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(l,function(a){a.a.set(a.c)}),h(),d.time=s,g(j,[e])):f(l,function(d){y(d.b,function(e,h){var g="rgb(",l=d.c[e],f=a/b;if(/^#|rgb\(/.test(l))for(var k=0;3>k;k++)g+=Math.round(q(c(h,k),c(l,k),f))+(2>k?",":")");else g=m(l,/-?[\d.]+/,w(q(C(h),C(l),f)));d.a.set(e,g)})})});return g},toggle:function(a,b,c,d){var e=this,l={},h=t,g=/\b(?=\w)/g,f;return b?e.set(a)&&function(g){if(g!==h)return f=(h=g===j||g===t?g:!h)?b:a,n(f)?f(e,c,d):c?e.animate(f,l.stop?l.stop()||l.time:c,d,l):e.set(f)&&void 0}:e.toggle(m(a,g,"-"),m(a,g,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,e=w(a.value);if(/form/i.test(a.tagName))k(v(f,a.elements,K)).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))b[d]=v(f,[b[d],e],K)});return b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d){return this.each(function(e,l){f(a.split(/\s/),function(a){var g=m(a,/\|/),f=n(b)||s,k=f?b:c,u=f&&d&&c,r=f&&(d||c),v=g==a,w=f?M:F(b,e);a=function(a,b){var c=a||p.event,d,e=b||c.target;if(w(e)&&(d=(!k.apply(u||e,r||[c,l])||r)&&v)&&!b)c.preventDefault(),c.stopPropagation();return d};f={e:e,h:a,n:g};(k.M=k.M||[]).push(f);e.addEventListener(g,a,t);(e.minified2=e.minified2||[]).push(f)})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,h=d.relatedTarget||d.toElement;if(c[e]!==f&&(f||!h||h!=b[e]&&!k(h).trav("parentNode",b[e]).length))c[e]=f,a.call(this,f,e)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)f(e.minified2,function(e){e.n==a&&(d=d||e.h(b,c))}),e=e.parentNode})}},function(a,b){A.prototype[a]=b});y({request:function(a,b,c,d,e,l){var h,g=c,k=0,m=H();try{h=new XMLHttpRequest,c!=s&&(d=d||{},!u(c)&&!r(c)&&(g=v(y,c,function(a,b){return v(f,b,function(b){return encodeURIComponent(a)+(b!=s?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(a)?!r(c)&&!u(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=s)),h.open(a,b,j,e,l),y(d,function(a,b){h.setRequestHeader(a,b)}),h.onreadystatechange=function(){4==h.readyState&&!k++&&(200==h.status?m(j,[h.responseText,h.responseXML]):m(t,[h.status,h.statusText,h.responseText]))},h.send(g)}catch(n){k||m(t,[0,s,w(n)])}return m},toJSON:p.JSON&&JSON.stringify,parseJSON:p.JSON&&JSON.parse,ready:S,setCookie:function(a,b,c,d,e,f){z.cookie=a+"="+(f?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(z.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={d:a,f:(new Date).getTime(),b:function(){O(I,b)}};2>I.push(b)&&function d(){f(I,function(a){a.d(Math.max(0,(new Date).getTime()-a.f),a.b)}).length&&W(d)}();return b.b},off:function(a){f(a.M,function(a){a.e.removeEventListener(a.n,a.h,t);O(a.e.minified2,a)});a.M=s}},function(a,b){k[a]=b});z.addEventListener("DOMContentLoaded",function(){f(D,R);D=s},t);return{$:k,$$:function(a){return E(a)[0]},EE:T,M:A}});
var k=!0,s=null,t=!1;if(/^u/.test(typeof define)){var P={};this.define=function(w,u){P[w]=u()};this.require=function(w){return P[w]}}define("minified",function(){function w(a){return a!=s?""+a:""}function u(a){return"string"==typeof a}function v(a){return a&&a.nodeType}function D(a){return a&&a.length!=s&&!u(a)&&!v(a)&&!r(a)}function Q(a){return a}function x(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function J(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function q(a,b,c){var d=[];a(b,function(a,b){f(c(a,b),function(a){d.push(a)})});return d}function m(a,b,c){return w(a).replace(b,c||"")}function f(a,b){if(D(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=s&&b(a,0);return a}function r(a){return"function"==typeof a&&!a.item}function R(){return 1}function K(a,b){var c=RegExp("\\b"+a+"\\b","i");return a?function(a){return c.test(a[b])}:R}function L(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function E(a){return parseFloat(m(a,/^[^\d-]+/))}function H(a){return a.minified=a.minified||++Z}function M(a,b){var c=[],d={},e;f(a,function(a){f(b(a),function(a){if(v(a)&&!d[e=H(a)])c.push(a),d[e]=k})});return c}function S(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:s},c=a.get(b);a.set(b);b=a.get("$height",k);a.set(c);return b}function T(a){a()}function U(a,b){f(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function V(){f(G,T);G=s}function W(a){G?G.push(a):l.setTimeout(a,0)}function X(a,b,c,d){return function(){var e=p(y.createElement(a));D(b)||b!=s&&"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function Y(a){return $[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function p(a,b,c){return r(a)?W(a):new F(A(a,b,c))}function A(a,b,c){function d(a){a=q(f,a,function aa(a){return D(a)?q(f,a,aa):a});return e?J(a,function(a){for(;a=a.parentNode;){if(a===e)return k;if(c)return t}}):a}var e,j,h,g;if(b&&1!=(b=A(b)).length)return M(b,function(b){return A(a,b,c)});e=b&&b[0];if(!u(a))return d(a);if(1<(b=a.split(/\s*,\s*/)).length)return M(b,function(a){return A(a,e,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return A(b[2],A(b[1],e),c);if(a!=(b=m(a,/^#/)))return d(y.getElementById(b));e=e||y;j=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1];g=b[2];b=(h=e.getElementsByClassName&&g)?e.getElementsByClassName(g):e.getElementsByTagName(j||"*");if(j=h?j:g)b=J(b,K(j,h?"nodeName":"className"));return e?d(b):b}function I(a,b){var c,d={};if(r(a))return a;if(!a||u(a)&&("*"==a||(c=/^([\w-]*)\.([\w-]+)$/.exec(a))||(c=/^([\w-]+)$/.exec(a)))){var e=K(c&&c[1],"nodeName"),j=K(c&&c[2],"className");return function(a){return 1==v(a)&&e(a)&&j(a)}}if(b)return function(c){return p(a,b).find(c)!=s};p(a).each(function(a){d[H(a)]=k});return function(a){return d[H(a)]}}function N(){function a(a,e){b==s&&(b=a,c=e,l.setTimeout(function(){f(d,T)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(r(d)){var g=d.apply(s,c);g&&r(g.then)?g.then(function(a){f(k,[a])},function(a){f(t,[a])}):f(k,[g])}else f(b,c)}catch(ba){f(t,[ba])}}var f=N();b!=s?l.setTimeout(g,0):d.push(g);return f};a.error=function(a){return e(0,a)};return a}function F(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var l=this,y=document,Z=1,C={},G=[],O=[],ca=l.requestAnimationFrame||function(a){l.setTimeout(a,33)},z=!!y.all&&!G.map,$={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};x({each:function(a){return f(this,a)},filter:function(a){return new F(J(this,a))},collect:function(a){return new F(q(f,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&b<d})},find:function(a,b){for(var c,d=r(a)?a:function(b,c){if(a===b)return c},e=b;e<this.length;e++)if((c=d(this[e],e))!=s)return c},remove:function(){f(this,function(a){z&&1==v(a)&&(f(A("*",a),function(a){U(0,C[a.minified]);delete C[a.minified]}),removeEvents(a));a.parentNode.removeChild(a)})},text:function(){function a(b){var c=v(b);return 1==c?q(f,b.childNodes,a):5>c?b.data:s}return q(f,this,a).join("")},trav:function(a,b,c){var d=I("number"==typeof b?s:b),e="number"==typeof b?b:c||1e9;return new F(M(this,function(b){for(var c=[];(b=b[a])&&c.length<e;)d(b)&&c.push(b);return c}))},select:function(a,b){return p(a,this,b)},is:function(a){var b=I(a);return!this.find(function(a){if(!b(a))return k})},only:function(a){return this.filter(I(a))},get:function(a,b){var c=this,d=c[0];if(d){if(u(a)){var e=m(m(a,/^%/,"data-"),/^[$@]+/),j;j="$"==a?d.className:"$$"==a?z?d.style.cssText:d.getAttribute("style"):/^\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(j=z?E(d.style.filter)/100:E(d.style.opacity))?1:j:"$$slide"==a?c.get("$height"):/^\$[^$]/.test(a)?l.getComputedStyle?l.getComputedStyle(d,s).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^[@%]/.test(a)?d.getAttribute(e):d[e];return b?E(j):j}var h={};(D(a)?f:x)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=E(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?z?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&S(p(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=m(m(a,/^%/,"data-"),/^[@$]+/),g=c.className||"",B=/^\$/.test(a)?c.style:c,n=r(b)?b(p(c).get(a),d,c):b;"$"==a?n!=s&&(f(n.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b","i"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?z?B.cssText=n:n!=s?c.setAttribute("style",n):c.removeAttribute("style"):"$$scrollX"==a?l.scroll(n,l.scrollY):"$$scrollY"==a?l.scroll(l.scrollX,n):/^[@%]/.test(a)?n!=s?B.setAttribute(h,n):B.removeAttribute(h):B[h]=n}):u(a)||r(a)?c.set("$",a):x(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return this.each(function(c,d){var e;(function h(a){D(a)?f(a,h):r(a)?h(a(c,d)):a!=s&&(a=v(a)?a:y.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(v(a)&&d?s:a)})},fill:function(a){return this.each(function(a){p(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return this.collect(function(b){var c=v(b);if(1==c){var d={$:b.className||s,$$:z?b.style.cssText:b.getAttribute("style")};f(b.attributes,function(a){var c=a.name;"id"!=c&&"style"!=c&&"class"!=c&&b.getAttribute(c)&&(d["@"+c]=a.value)});return X(b.tagName,d,p(b.childNodes).clone(),a)}return 5>c?b.data:s})},animate:function(a,b,c,d){var e=this,j=[],h,g=N(),B=r(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){h();g(t)};b=b||500;c=c||0;f(e,function(b,c){var d={a:p(b),c:{}};x(d.b=d.a.get(a),function(e,h){d.c[e]=r(dest)?dest(h,c,b):"$$slide"==e?a[e]*S(d.a)+"px":a[e]});j.push(d)});h=p.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(j,function(a){a.a.set(a.c)}),h(),d.time=s,g(k,[e])):f(j,function(d){x(d.b,function(e,h){var j="rgb(",g=d.c[e],f=a/b;if(/^#|rgb\(/.test(g))for(var l=0;3>l;l++)j+=Math.round(B(c(h,l),c(g,l),f))+(2>l?",":")");else j=m(g,/-?[\d.]+/,w(B(E(h),E(g),f)));d.a.set(e,j)})})});return g},toggle:function(a,b,c,d){var e=this,j={},h=t,g=/\b(?=\w)/g,f;return b?e.set(a)&&function(g){if(g!==h)return f=(h=g===k||g===t?g:!h)?b:a,r(f)?f(e,c,d):c?e.animate(f,j.stop?j.stop()||j.time:c,d,j):e.set(f)&&void 0}:e.toggle(m(a,g,"-"),m(a,g,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,e=w(a.value);if(/form/i.test(a.tagName))p(q(f,a.elements,Q)).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))b[d]=q(f,[b[d],e],Q)});return b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d){return this.each(function(e,j){f(a.split(/\s/),function(a){var g=m(a,/\|/),f=r(b)||s,n=f?b:c,p=f&&d&&c,q=f&&(d||c),u=g==a,v=f?R:I(b,e),f=function(a,b){var c=a||l.event,d,e=b||c.target;if(v(e)&&(d=(!n.apply(p||e,q||[c,j])||q)&&u)&&!b)c.stopPropagation&&(c.preventDefault(),c.stopPropagation()),c.returnValue=t,c.cancelBubble=k;return d};a={e:e,h:f,n:g};(n.M=n.M||[]).push(a);z?(e.attachEvent("on"+g,f),g=H(e),(C[g]=C[g]||[]).push(a)):(e.addEventListener(g,f,t),(e.minified2=e.minified2||[]).push(a))})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,h=d.relatedTarget||d.toElement;if(c[e]!==f&&(f||!h||h!=b[e]&&!p(h).trav("parentNode",b[e]).length))c[e]=f,a.call(this,f,e)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)f(z?C[e.minified]:e.minified2,function(e){e.n==a&&(d=d||e.h(b,c))}),e=e.parentNode})}},function(a,b){F.prototype[a]=b});x({request:function(a,b,c,d,e,j){var h,g=c,m=0,n=N();try{h=l.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=s&&(d=d||{},!u(c)&&!v(c)&&(g=q(x,c,function(a,b){return q(f,b,function(b){return encodeURIComponent(a)+(b!=s?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(a)?!v(c)&&!u(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=s)),h.open(a,b,k,e,j),x(d,function(a,b){h.setRequestHeader(a,b)}),h.onreadystatechange=function(){4==h.readyState&&!m++&&(200==h.status?n(k,[h.responseText,h.responseXML]):n(t,[h.status,h.statusText,h.responseText]))},h.send(g)}catch(p){m||n(t,[0,s,w(p)])}return n},toJSON:function b(c){return c==s?""+c:u(c=c.valueOf())?'"'+m(c,/[\\\"\x00-\x1f\x22\x5c]/g,Y)+'"':D(c)?"["+q(f,c,b).join()+"]":"object"==typeof c?"{"+q(x,c,function(c,e){return b(c)+":"+b(e)}).join()+"}":w(c)},parseJSON:l.JSON?l.JSON.parse:function(b){b=m(b,/[\x00\xad\u0600-\uffff]/g,Y);if(/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:W,setCookie:function(b,c,d,e,f,h){y.cookie=b+"="+(h?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(f?"; domain="+escape(f):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(y.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={d:b,f:(new Date).getTime(),b:function(){L(O,c)}};2>O.push(c)&&function e(){f(O,function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&ca(e)}();return c.b},off:function(b){f(b.M,function(b){z?(b.e.detachEvent("on"+b.n,b.h),L(C[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,t),L(b.e.minified2,b))});b.M=s}},function(b,c){p[b]=c});l.onload=V;y.addEventListener&&y.addEventListener("DOMContentLoaded",V,t);l.g=function(){f(C,U)};return{$:p,$$:function(b){return A(b)[0]},EE:X,M:F}});
var ajaxurl="https://jupiter.artbees.net/jovial/wp-admin/admin-ajax.php";window.abb={};php={};window.PHP={};PHP.ajax="https://jupiter.artbees.net/jovial/wp-admin/admin-ajax.php";PHP.wp_p_id="5";var mk_header_parallax,mk_banner_parallax,mk_page_parallax,mk_footer_parallax,mk_body_parallax;var mk_images_dir="https://cdn-jupiter.artbees.net/jovial/wp-content/themes/jupiter/assets/images",mk_theme_js_path="https://cdn-jupiter.artbees.net/jovial/wp-content/themes/jupiter/assets/js",mk_theme_dir="https://cdn-jupiter.artbees.net/jovial/wp-content/themes/jupiter",mk_captcha_placeholder="Enter Captcha",mk_captcha_invalid_txt="Invalid. Try again.",mk_captcha_correct_txt="Captcha correct.",mk_responsive_nav_width=1140,mk_vertical_header_back="Back",mk_vertical_header_anim="1",mk_check_rtl=!0,mk_grid_width=1140,mk_ajax_search_option="disable",mk_preloader_bg_color="#f6f6f6",mk_accent_color="#222529",mk_go_to_top="true",mk_smooth_scroll="true",mk_preloader_bar_color="#222529",mk_preloader_logo="https://jupiter.artbees.net/jovial/wp-content/uploads/sites/114/2016/06/defult-logo.png";var mk_header_parallax=!1,mk_banner_parallax=!1,mk_footer_parallax=!1,mk_body_parallax=!1,mk_no_more_posts="No More Posts",mk_typekit_id="",mk_google_fonts=["Arimo:100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic,100,200,300,400,500,600,700,800,900","Roboto:100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic,100,200,300,400,500,600,700,800,900"],mk_global_lazyload=!0;(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig))}());WebFontConfig={timeout:2000}
if(mk_typekit_id.length>0){WebFontConfig.typekit={id:mk_typekit_id}}
if(mk_google_fonts.length>0){WebFontConfig.google={families:mk_google_fonts}}
if((mk_google_fonts.length>0||mk_typekit_id.length>0)&&navigator.userAgent.indexOf("Speed Insights")==-1){WebFont.load(WebFontConfig)};/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create',abb.ga_id,'auto');ga('send','pageview');var isTest=!1;php={hasAdminbar:!1,json:(null!=null)?null:"",jsPath:'https://cdn-jupiter.artbees.net/jovial/wp-content/themes/jupiter/assets/js'};(function($){var MK={api:{},ui:{},component:{},};window.MK=MK;'use strict';console.log(23423);
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ResizeSensor = factory();
    }
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (fn) {
            return window.setTimeout(fn, 20);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function() {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call();
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';
            var style = 'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
            var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

            element.resizeSensor.style.cssText = style;
            element.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' + style + '">' +
                    '<div style="' + styleChild + '"></div>' +
                '</div>' +
                '<div class="resize-sensor-shrink" style="' + style + '">' +
                    '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
                '</div>';
            element.appendChild(element.resizeSensor);

            var position = window.getComputedStyle(element).getPropertyPriority('position');
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position) {
                element.style.position = 'relative';
            }

            var expand = element.resizeSensor.childNodes[0];
            var expandChild = expand.childNodes[0];
            var shrink = element.resizeSensor.childNodes[1];
            var dirty, rafId, newWidth, newHeight;
            var size = getElementSize(element);
            var lastWidth = size.width;
            var lastHeight = size.height;

            var reset = function() {
                //set display to block, necessary otherwise hidden elements won't ever work
                var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;

                if (invisible) {
                    var saveDisplay = element.style.display;
                    element.style.display = 'block';
                }

                expandChild.style.width = '100000px';
                expandChild.style.height = '100000px';

                expand.scrollLeft = 100000;
                expand.scrollTop = 100000;

                shrink.scrollLeft = 100000;
                shrink.scrollTop = 100000;

                if (invisible) {
                    element.style.display = saveDisplay;
                }
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = newWidth;
                lastHeight = newHeight;

                if (element.resizedAttached) {
                    element.resizedAttached.call();
                }
            };

            var onScroll = function() {
                var size = getElementSize(element);
                var newWidth = size.width;
                var newHeight = size.height;
                dirty = newWidth != lastWidth || newHeight != lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);

			// Fix for custom Elements
			requestAnimationFrame(reset);
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            element.resizeSensor.resetSensor();
        };
    };

    ResizeSensor.reset = function(element, ev) {
        forEachElement(element, function(elem){
            elem.resizeSensor.resetSensor();
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    return ResizeSensor;

}));

'use strict';

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./ResizeSensor.js'], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require('./ResizeSensor.js'));
    } else {
        root.ElementQueries = factory(root.ResizeSensor);
        root.ElementQueries.listen();
    }
}(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function () {
        //<style> element with our dynamically created styles
        var cssStyleElement;

        //all rules found for element queries
        var allQueries = {};

        //association map to identify which selector belongs to a element from the animationstart event.
        var idToSelectorMapping = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         * Get element size
         * @param {HTMLElement} element
         * @returns {Object} {width, height}
         */
        function getElementSize(element) {
            if (!element.getBoundingClientRect) {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                }
            }

            var rect = element.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            }
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\d/);
            var units = numbers[numbers.length - 1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {String} id
         * @constructor
         */
        function SetupInformation(element, id) {
            this.element = element;
            var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function () {
                // extract current dimensions
                elementSize = getElementSize(this.element);

                attrValues = {};

                for (key in allQueries[id]) {
                    if (!allQueries[id].hasOwnProperty(key)) {
                        continue;
                    }
                    option = allQueries[id][key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode === 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode === 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if (!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      id
         */
        function setupElement(element, id) {
            if (!element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation = new SetupInformation(element, id);
            }
            if (!element.elementQueriesSensor) {
                element.elementQueriesSensor = new ResizeSensor(element, function () {
                    element.elementQueriesSetupInformation.call();
                });
            }

            element.elementQueriesSetupInformation.call();
        }

        /**
         * Stores rules to the selector that should be applied once resized.
         *
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[selector]) === 'undefined') {
                allQueries[selector] = [];
                // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

                var id = idToSelectorMapping.length;
                cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
                cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
                idToSelectorMapping.push(selector);
            }

            allQueries[selector].push({
                mode: mode,
                property: property,
                value: value
            });
        }

        function getQuery(container) {
            var query;
            if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
            }

            return query;
        }

        /**
         * If animationStart didn't catch a new element in the DOM, we can manually search for it
         */
        function findElementQueriesElements(container) {
            var query = getQuery(container);

            for (var selector in allQueries) if (allQueries.hasOwnProperty(mode)) {
                // find all elements based on the extract query selector from the element query rule
                var elements = query(selector, container);

                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], selector);
                }
            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if (!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children) {
                    if (!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage !== imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]) {
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function () {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensor = new ResizeSensor(element, check);
            check();
        }

        function findResponsiveImages() {
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
        var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match, smatch, attrs, attrMatch;

            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';

            if (!rules) {
                return;
            }

            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    } else if (3 === rules[i].type) {
                        readRules(rules[i].styleSheet.cssRules);
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         */
        this.init = function () {
            var animationStart = 'animationstart';
            if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
                animationStart = 'webkitAnimationStart';
            } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
                animationStart = 'mozanimationstart';
            } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
                animationStart = 'oanimationstart';
            }

            document.body.addEventListener(animationStart, function (e) {
                var element = e.target;
                var styles = window.getComputedStyle(element, null);

                if (-1 !== styles.getPropertyValue('animation-name').indexOf('element-queries')) {
                    element.elementQueriesSensor = new ResizeSensor(element, function () {
                        if (element.elementQueriesSetupInformation) {
                            element.elementQueriesSetupInformation.call();
                        }
                    });

                    var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
                    var id = sensorStyles.getPropertyValue('min-width');
                    id = parseInt(id.replace('px', ''));
                    setupElement(e.target, idToSelectorMapping[id]);
                }
            });

            if (!defaultCssInjected) {
                cssStyleElement = document.createElement('style');
                cssStyleElement.type = 'text/css';
                cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';

                //safari wants at least one rule in keyframes to start working
                cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
                document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
                defaultCssInjected = true;
            }

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
                        console.log("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
                    }

                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch (e) {
                }
            }

            // findElementQueriesElements();
            findResponsiveImages();
        };

        /**
         * Go through all collected rules (readRules()) and attach the resize-listener.
         * Not necessary to call it manually, since we detect automatically when new elements
         * are available in the DOM. However, sometimes handy for dirty DOM modifications.
         *
         * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
         */
        this.findElementQueriesElements = function (container) {
            findElementQueriesElements(container);
        };

        this.update = function () {
            this.init();
        };
    };

    ElementQueries.update = function () {
        ElementQueries.instance.update();
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function (element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensor) {
            //responsive image

            element.resizeSensor.detach();
            delete element.resizeSensor;
        }
    };

    ElementQueries.init = function () {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init();
    };

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.findElementQueriesElements = function (container) {
        ElementQueries.instance.findElementQueriesElements(container);
    };

    ElementQueries.listen = function () {
        domLoaded(ElementQueries.init);
    };

    return ElementQueries;

}));

(function($) {
	'use strict';

	$.exists = function(selector) {
	    return ($(selector).length > 0);
	};

	/**
	 * Helper to enable caching async scripts
	 * https://api.jquery.com/jquery.getscript/
	 * http://www.vrdmn.com/2013/07/overriding-jquerygetscript-to-include.html
	 * 
	 * @param  {String}   script url
	 * @param  {Function} callback     
	 */
	$.getCachedScript = function( url ) {
		var options = {
			dataType: "script",
			cache: true,
			url: url
		};
	 
	    // Use $.ajax() since it is more flexible than $.getScript
	    // Return the jqXHR object so we can chain callbacks
	  	return $.ajax( options );
	};



	// Fn to allow an event to fire after all images are loaded
	// usage:
	// $.ajax({
	//     cache: false,
	//     url: 'ajax/content.php',
	//     success: function(data) {
	//         $('#divajax').html(data).imagesLoaded().then(function(){
	//             // do stuff after images are loaded here
	//         });
	//     }
	// });
	$.fn.mk_imagesLoaded = function () {

	    // Edit: in strict mode, the var keyword is needed
	    var $imgs = this.find('img[src!=""]');
	    // if there's no images, just return an already resolved promise
	    if (!$imgs.length) {return $.Deferred().resolve().promise();}

	    // for each image, add a deferred object to the array which resolves when the image is loaded (or if loading fails)
	    var dfds = [];  
	    $imgs.each(function(){
	        var dfd = $.Deferred();
	        dfds.push(dfd);
	        var img = new Image();
	        img.onload = function(){dfd.resolve();};
	        img.onerror = function(){dfd.resolve();};
	        img.src = this.src;
	    });

	    // return a master promise object which will resolve when all the deferred objects have resolved
	    // IE - when all the images are loaded
	    return $.when.apply($,dfds);

	};

}(jQuery));
/**
* Detect Element Resize
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

(function () {
	var attachEvent = document.attachEvent,
		stylesCreated = false;
	
	if (!attachEvent) {
		var requestFrame = (function(){
			var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
								function(fn){ return window.setTimeout(fn, 20); };
			return function(fn){ return raf(fn); };
		})();
		
		var cancelFrame = (function(){
			var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
								   window.clearTimeout;
		  return function(id){ return cancel(id); };
		})();

		function resetTriggers(element){
			var triggers = element.__resizeTriggers__,
				expand = triggers.firstElementChild,
				contract = triggers.lastElementChild,
				expandChild = expand.firstElementChild;
			contract.scrollLeft = contract.scrollWidth;
			contract.scrollTop = contract.scrollHeight;
			expandChild.style.width = expand.offsetWidth + 1 + 'px';
			expandChild.style.height = expand.offsetHeight + 1 + 'px';
			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
		};

		function checkTriggers(element){
			return element.offsetWidth != element.__resizeLast__.width ||
						 element.offsetHeight != element.__resizeLast__.height;
		}
		
		function scrollListener(e){
			var element = this;
			resetTriggers(this);
			if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
			this.__resizeRAF__ = requestFrame(function(){
				if (checkTriggers(element)) {
					element.__resizeLast__.width = element.offsetWidth;
					element.__resizeLast__.height = element.offsetHeight;
					element.__resizeListeners__.forEach(function(fn){
						fn.call(element, e);
					});
				}
			});
		};
		
		/* Detect CSS Animations support to detect element display/re-attach */
		var animation = false,
			animationstring = 'animation',
			keyframeprefix = '',
			animationstartevent = 'animationstart',
			domPrefixes = 'Webkit Moz O ms'.split(' '),
			startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
			pfx  = '';
		{
			var elm = document.createElement('fakeelement');
			if( elm.style.animationName !== undefined ) { animation = true; }    
			
			if( animation === false ) {
				for( var i = 0; i < domPrefixes.length; i++ ) {
					if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
						pfx = domPrefixes[ i ];
						animationstring = pfx + 'Animation';
						keyframeprefix = '-' + pfx.toLowerCase() + '-';
						animationstartevent = startEvents[ i ];
						animation = true;
						break;
					}
				}
			}
		}
		
		var animationName = 'resizeanim';
		var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
		var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}
	
	function createStyles() {
		if (!stylesCreated) {
			//opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
			var css = (animationKeyframes ? animationKeyframes : '') +
					'.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' +
					'.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
				head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');
			
			style.type = 'text/css';
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}

			head.appendChild(style);
			stylesCreated = true;
		}
	}
	
	window.addResizeListener = function(element, fn){
		if (attachEvent) element.attachEvent('onresize', fn);
		else {
			if (!element.__resizeTriggers__) {
				if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
				createStyles();
				element.__resizeLast__ = {};
				element.__resizeListeners__ = [];
				(element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
				element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' +
																						'<div class="contract-trigger"></div>';
				element.appendChild(element.__resizeTriggers__);
				resetTriggers(element);
				element.addEventListener('scroll', scrollListener, true);
				
				/* Listen for a css animation to detect element display/re-attach */
				animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
					if(e.animationName == animationName)
						resetTriggers(element);
				});
			}
			element.__resizeListeners__.push(fn);
		}
	};
	
	window.removeResizeListener = function(element, fn){
		if (attachEvent) element.detachEvent('onresize', fn);
		else {
			element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
			if (!element.__resizeListeners__.length) {
					element.removeEventListener('scroll', scrollListener);
					element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
			}
		}
	}
})();
/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window,document){
/*jshint evil:true */
  /** version */
  var version = '3.7.3';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

  /**
   * Extends the built-in list of html5 elements
   * @memberOf html5
   * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
   * @param {Document} ownerDocument The context document.
   */
  function addElements(newElements, ownerDocument) {
    var elements = html5.elements;
    if(typeof elements != 'string'){
      elements = elements.join(' ');
    }
    if(typeof newElements != 'string'){
      newElements = newElements.join(' ');
    }
    html5.elements = elements +' '+ newElements;
    shivDocument(ownerDocument);
  }

   /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document|DocumentFragment} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment,

    //extends list of elements
    addElements: addElements
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

  if(typeof module == 'object' && module.exports){
    module.exports = html5;
  }

}(typeof window !== "undefined" ? window : this, document));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());

/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

( function ( global ) {

  'use strict';

  //
  // Test for support. We do this as early as possible to optimise for browsers
  // that have native support for the attribute.
  //

  var test = document.createElement('input');
  var nativeSupport = test.placeholder !== void 0;

  global.Placeholders = {
    nativeSupport: nativeSupport,
    disable: nativeSupport ? noop : disablePlaceholders,
    enable: nativeSupport ? noop : enablePlaceholders
  };

  if ( nativeSupport ) {
    return;
  }

  //
  // If we reach this point then the browser does not have native support for
  // the attribute.
  //

  // The list of input element types that support the placeholder attribute.
  var validTypes = [
    'text',
    'search',
    'url',
    'tel',
    'email',
    'password',
    'number',
    'textarea'
  ];

  // The list of keycodes that are not allowed when the polyfill is configured
  // to hide-on-input.
  var badKeys = [

    // The following keys all cause the caret to jump to the end of the input
    // value.

    27, // Escape
    33, // Page up
    34, // Page down
    35, // End
    36, // Home

    // Arrow keys allow you to move the caret manually, which should be
    // prevented when the placeholder is visible.

    37, // Left
    38, // Up
    39, // Right
    40, // Down

    // The following keys allow you to modify the placeholder text by removing
    // characters, which should be prevented when the placeholder is visible.

    8, // Backspace
    46 // Delete
  ];

  // Styling variables.
  var placeholderStyleColor = '#ccc';
  var placeholderClassName = 'placeholdersjs';
  var classNameRegExp = new RegExp('(?:^|\\s)' + placeholderClassName + '(?!\\S)');

  // The various data-* attributes used by the polyfill.
  var ATTR_CURRENT_VAL = 'data-placeholder-value';
  var ATTR_ACTIVE = 'data-placeholder-active';
  var ATTR_INPUT_TYPE = 'data-placeholder-type';
  var ATTR_FORM_HANDLED = 'data-placeholder-submit';
  var ATTR_EVENTS_BOUND = 'data-placeholder-bound';
  var ATTR_OPTION_FOCUS = 'data-placeholder-focus';
  var ATTR_OPTION_LIVE = 'data-placeholder-live';
  var ATTR_MAXLENGTH = 'data-placeholder-maxlength';

  // Various other variables used throughout the rest of the script.
  var UPDATE_INTERVAL = 100;
  var head = document.getElementsByTagName('head')[ 0 ];
  var root = document.documentElement;
  var Placeholders = global.Placeholders;
  var keydownVal;

  // Get references to all the input and textarea elements currently in the DOM
  // (live NodeList objects to we only need to do this once).
  var inputs = document.getElementsByTagName('input');
  var textareas = document.getElementsByTagName('textarea');

  // Get any settings declared as data-* attributes on the root element.
  // Currently the only options are whether to hide the placeholder on focus
  // or input and whether to auto-update.
  var hideOnInput = root.getAttribute(ATTR_OPTION_FOCUS) === 'false';
  var liveUpdates = root.getAttribute(ATTR_OPTION_LIVE) !== 'false';

  // Create style element for placeholder styles (instead of directly setting
  // style properties on elements - allows for better flexibility alongside
  // user-defined styles).
  var styleElem = document.createElement('style');
  styleElem.type = 'text/css';

  // Create style rules as text node.
  var styleRules = document.createTextNode(
    '.' + placeholderClassName + ' {' +
      'color:' + placeholderStyleColor + ';' +
    '}'
  );

  // Append style rules to newly created stylesheet.
  if ( styleElem.styleSheet ) {
    styleElem.styleSheet.cssText = styleRules.nodeValue;
  } else {
    styleElem.appendChild(styleRules);
  }

  // Prepend new style element to the head (before any existing stylesheets,
  // so user-defined rules take precedence).
  head.insertBefore(styleElem, head.firstChild);

  // Set up the placeholders.
  var placeholder;
  var elem;

  for ( var i = 0, len = inputs.length + textareas.length; i < len; i++ ) {

    // Find the next element. If we've already done all the inputs we move on
    // to the textareas.
    elem = i < inputs.length ? inputs[ i ] : textareas[ i - inputs.length ];

    // Get the value of the placeholder attribute, if any. IE10 emulating IE7
    // fails with getAttribute, hence the use of the attributes node.
    placeholder = elem.attributes.placeholder;

    // If the element has a placeholder attribute we need to modify it.
    if ( placeholder ) {

      // IE returns an empty object instead of undefined if the attribute is
      // not present.
      placeholder = placeholder.nodeValue;

      // Only apply the polyfill if this element is of a type that supports
      // placeholders and has a placeholder attribute with a non-empty value.
      if ( placeholder && inArray(validTypes, elem.type) ) {
        newElement(elem);
      }
    }
  }

  // If enabled, the polyfill will repeatedly check for changed/added elements
  // and apply to those as well.
  var timer = setInterval(function () {
    for ( var i = 0, len = inputs.length + textareas.length; i < len; i++ ) {
      elem = i < inputs.length ? inputs[ i ] : textareas[ i - inputs.length ];

      // Only apply the polyfill if this element is of a type that supports
      // placeholders, and has a placeholder attribute with a non-empty value.
      placeholder = elem.attributes.placeholder;

      if ( placeholder ) {

        placeholder = placeholder.nodeValue;

        if ( placeholder && inArray(validTypes, elem.type) ) {

          // If the element hasn't had event handlers bound to it then add
          // them.
          if ( !elem.getAttribute(ATTR_EVENTS_BOUND) ) {
            newElement(elem);
          }

          // If the placeholder value has changed or not been initialised yet
          // we need to update the display.
          if (
            placeholder !== elem.getAttribute(ATTR_CURRENT_VAL) ||
            ( elem.type === 'password' && !elem.getAttribute(ATTR_INPUT_TYPE) )
          ) {

            // Attempt to change the type of password inputs (fails in IE < 9).
            if (
              elem.type === 'password' &&
              !elem.getAttribute(ATTR_INPUT_TYPE) &&
              changeType(elem, 'text')
            ) {
              elem.setAttribute(ATTR_INPUT_TYPE, 'password');
            }

            // If the placeholder value has changed and the placeholder is
            // currently on display we need to change it.
            if ( elem.value === elem.getAttribute(ATTR_CURRENT_VAL) ) {
              elem.value = placeholder;
            }

            // Keep a reference to the current placeholder value in case it
            // changes via another script.
            elem.setAttribute(ATTR_CURRENT_VAL, placeholder);
          }
        }
      } else if ( elem.getAttribute(ATTR_ACTIVE) ) {
        hidePlaceholder(elem);
        elem.removeAttribute(ATTR_CURRENT_VAL);
      }
    }

    // If live updates are not enabled cancel the timer.
    if ( !liveUpdates ) {
      clearInterval(timer);
    }
  }, UPDATE_INTERVAL);

  // Disabling placeholders before unloading the page prevents flash of
  // unstyled placeholders on load if the page was refreshed.
  addEventListener(global, 'beforeunload', function () {
    Placeholders.disable();
  });

  //
  // Utility functions
  //

  // No-op (used in place of public methods when native support is detected).
  function noop() {}

  // Avoid IE9 activeElement of death when an iframe is used.
  //
  // More info:
  //  - http://bugs.jquery.com/ticket/13393
  //  - https://github.com/jquery/jquery/commit/85fc5878b3c6af73f42d61eedf73013e7faae408
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch ( err ) {}
  }

  // Check whether an item is in an array. We don't use Array.prototype.indexOf
  // so we don't clobber any existing polyfills. This is a really simple
  // alternative.
  function inArray( arr, item ) {
    for ( var i = 0, len = arr.length; i < len; i++ ) {
      if ( arr[ i ] === item ) {
        return true;
      }
    }
    return false;
  }

  // Cross-browser DOM event binding
  function addEventListener( elem, event, fn ) {
    if ( elem.addEventListener ) {
      return elem.addEventListener(event, fn, false);
    }
    if ( elem.attachEvent ) {
      return elem.attachEvent('on' + event, fn);
    }
  }

  // Move the caret to the index position specified. Assumes that the element
  // has focus.
  function moveCaret( elem, index ) {
    var range;
    if ( elem.createTextRange ) {
      range = elem.createTextRange();
      range.move('character', index);
      range.select();
    } else if ( elem.selectionStart ) {
      elem.focus();
      elem.setSelectionRange(index, index);
    }
  }

  // Attempt to change the type property of an input element.
  function changeType( elem, type ) {
    try {
      elem.type = type;
      return true;
    } catch ( e ) {
      // You can't change input type in IE8 and below.
      return false;
    }
  }

  function handleElem( node, callback ) {

    // Check if the passed in node is an input/textarea (in which case it can't
    // have any affected descendants).
    if ( node && node.getAttribute(ATTR_CURRENT_VAL) ) {
      callback(node);
    } else {

      // If an element was passed in, get all affected descendants. Otherwise,
      // get all affected elements in document.
      var handleInputs = node ? node.getElementsByTagName('input') : inputs;
      var handleTextareas = node ? node.getElementsByTagName('textarea') : textareas;

      var handleInputsLength = handleInputs ? handleInputs.length : 0;
      var handleTextareasLength = handleTextareas ? handleTextareas.length : 0;

      // Run the callback for each element.
      var len = handleInputsLength + handleTextareasLength;
      var elem;
      for ( var i = 0; i < len; i++ ) {

        elem = i < handleInputsLength ?
          handleInputs[ i ] :
          handleTextareas[ i - handleInputsLength ];

        callback(elem);
      }
    }
  }

  // Return all affected elements to their normal state (remove placeholder
  // value if present).
  function disablePlaceholders( node ) {
    handleElem(node, hidePlaceholder);
  }

  // Show the placeholder value on all appropriate elements.
  function enablePlaceholders( node ) {
    handleElem(node, showPlaceholder);
  }

  // Hide the placeholder value on a single element. Returns true if the
  // placeholder was hidden and false if it was not (because it wasn't visible
  // in the first place).
  function hidePlaceholder( elem, keydownValue ) {

    var valueChanged = !!keydownValue && elem.value !== keydownValue;
    var isPlaceholderValue = elem.value === elem.getAttribute(ATTR_CURRENT_VAL);

    if (
      ( valueChanged || isPlaceholderValue ) &&
      elem.getAttribute(ATTR_ACTIVE) === 'true'
    ) {

      elem.removeAttribute(ATTR_ACTIVE);
      elem.value = elem.value.replace(elem.getAttribute(ATTR_CURRENT_VAL), '');
      elem.className = elem.className.replace(classNameRegExp, '');

      // Restore the maxlength value. Old FF returns -1 if attribute not set.
      // See GH-56.
      var maxLength = elem.getAttribute(ATTR_MAXLENGTH);
      if ( parseInt(maxLength, 10) >= 0 ) {
        elem.setAttribute('maxLength', maxLength);
        elem.removeAttribute(ATTR_MAXLENGTH);
      }

      // If the polyfill has changed the type of the element we need to change
      // it back.
      var type = elem.getAttribute(ATTR_INPUT_TYPE);
      if ( type ) {
        elem.type = type;
      }

      return true;
    }

    return false;
  }

  // Show the placeholder value on a single element. Returns true if the
  // placeholder was shown and false if it was not (because it was already
  // visible).
  function showPlaceholder( elem ) {

    var val = elem.getAttribute(ATTR_CURRENT_VAL);

    if ( elem.value === '' && val ) {

      elem.setAttribute(ATTR_ACTIVE, 'true');
      elem.value = val;
      elem.className += ' ' + placeholderClassName;

      // Store and remove the maxlength value.
      var maxLength = elem.getAttribute(ATTR_MAXLENGTH);
      if ( !maxLength ) {
        elem.setAttribute(ATTR_MAXLENGTH, elem.maxLength);
        elem.removeAttribute('maxLength');
      }

      // If the type of element needs to change, change it (e.g. password
      // inputs).
      var type = elem.getAttribute(ATTR_INPUT_TYPE);
      if ( type ) {
        elem.type = 'text';
      } else if ( elem.type === 'password' && changeType(elem, 'text') ) {
        elem.setAttribute(ATTR_INPUT_TYPE, 'password');
      }

      return true;
    }

    return false;
  }

  // Returns a function that is used as a focus event handler.
  function makeFocusHandler( elem ) {
    return function () {

      // Only hide the placeholder value if the (default) hide-on-focus
      // behaviour is enabled.
      if (
        hideOnInput &&
        elem.value === elem.getAttribute(ATTR_CURRENT_VAL) &&
        elem.getAttribute(ATTR_ACTIVE) === 'true'
      ) {

        // Move the caret to the start of the input (this mimics the behaviour
        // of all browsers that do not hide the placeholder on focus).
        moveCaret(elem, 0);
      } else {

        // Remove the placeholder.
        hidePlaceholder(elem);
      }
    };
  }

  // Returns a function that is used as a blur event handler.
  function makeBlurHandler( elem ) {
    return function () {
      showPlaceholder(elem);
    };
  }

  // Returns a function that is used as a submit event handler on form elements
  // that have children affected by this polyfill.
  function makeSubmitHandler( form ) {
    return function () {

        // Turn off placeholders on all appropriate descendant elements.
        disablePlaceholders(form);
    };
  }

  // Functions that are used as a event handlers when the hide-on-input
  // behaviour has been activated - very basic implementation of the 'input'
  // event.
  function makeKeydownHandler( elem ) {
    return function ( e ) {
      keydownVal = elem.value;

      // Prevent the use of the arrow keys (try to keep the cursor before the
      // placeholder).
      if (
        elem.getAttribute(ATTR_ACTIVE) === 'true' &&
        keydownVal === elem.getAttribute(ATTR_CURRENT_VAL) &&
        inArray(badKeys, e.keyCode)
      ) {
        if ( e.preventDefault ) {
            e.preventDefault();
        }
        return false;
      }
    };
  }

  function makeKeyupHandler(elem) {
    return function () {
      hidePlaceholder(elem, keydownVal);

      // If the element is now empty we need to show the placeholder
      if ( elem.value === '' ) {
        elem.blur();
        moveCaret(elem, 0);
      }
    };
  }

  function makeClickHandler(elem) {
    return function () {
      if (
        elem === safeActiveElement() &&
        elem.value === elem.getAttribute(ATTR_CURRENT_VAL) &&
        elem.getAttribute(ATTR_ACTIVE) === 'true'
      ) {
        moveCaret(elem, 0);
      }
    };
  }

  // Bind event handlers to an element that we need to affect with the
  // polyfill.
  function newElement( elem ) {

    // If the element is part of a form, make sure the placeholder string is
    // not submitted as a value.
    var form = elem.form;
    if ( form && typeof form === 'string' ) {

      // Get the real form.
      form = document.getElementById(form);

      // Set a flag on the form so we know it's been handled (forms can contain
      // multiple inputs).
      if ( !form.getAttribute(ATTR_FORM_HANDLED) ) {
        addEventListener(form, 'submit', makeSubmitHandler(form));
        form.setAttribute(ATTR_FORM_HANDLED, 'true');
      }
    }

    // Bind event handlers to the element so we can hide/show the placeholder
    // as appropriate.
    addEventListener(elem, 'focus', makeFocusHandler(elem));
    addEventListener(elem, 'blur', makeBlurHandler(elem));

    // If the placeholder should hide on input rather than on focus we need
    // additional event handlers
    if (hideOnInput) {
      addEventListener(elem, 'keydown', makeKeydownHandler(elem));
      addEventListener(elem, 'keyup', makeKeyupHandler(elem));
      addEventListener(elem, 'click', makeClickHandler(elem));
    }

    // Remember that we've bound event handlers to this element.
    elem.setAttribute(ATTR_EVENTS_BOUND, 'true');
    elem.setAttribute(ATTR_CURRENT_VAL, placeholder);

    // If the element doesn't have a value and is not focussed, set it to the
    // placeholder string.
    if ( hideOnInput || elem !== safeActiveElement() ) {
      showPlaceholder(elem);
    }
  }

}(this) );
// IE spupport comes in IE10
(function rAFPolyfill() {
    var lastTime, vendors, x;
    lastTime = 0;
    vendors = ["webkit", "moz"];
    x = 0;
    while (x < vendors.length && !window.requestAnimationFrame) {
      window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
      ++x;
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime, id, timeToCall;
        currTime = new Date().getTime();
        timeToCall = Math.max(0, 16 - (currTime - lastTime));
        id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }
})();



(function($) {
	'use strict';

	var MK = window.MK || {};

	/**
	 * MK.core holds most important methods that bootstraps whole application
	 * 
	 * @type {Object}
	 */
	MK.core = {};



	/**
	 * State for referance of already loaded script files
	 * @type {Array}
	 */
	var _loadedDependencies = [];

	/**
	 * State of queue represented as pairs of script ref => callback
	 * @type {Object}
	 */
	var _inQueue = {};
	
	/**
	 * Initializes all components in given scope (object or DOM reference) based on data attribute and 'pointer' css class '.js-el'.
	 * DOM work is reduced by single traversing for pointer class and later filtering through cached object. It expects init() method
	 * on every component. Component itself should be defined in MK.component namespace and assign to DOM element via data-mk-component.
	 * Use it once on DOM ready with document as a scope. For partial initialization after ajax operations pass as a scope element
	 * where new DOM was inserted.
	 * 
	 * @param  {string|object}
	 */
	MK.core.initAll = function( scope ) {
		var $el = $( scope ).find( '.js-el' ), // single traversing
			$components = $el.filter( '[data-mk-component]' ),
			component = null;


		// initialize  component
		var init = function init(name, el) {
			var $el = $(el);

			if ( $el.data('init-' + name) ) return; // do not initialize the same module twice

			if ( typeof MK.component[ name ] !== 'function' ) console.log('Component init error: ', name);
			else {
				component = new MK.component[ name ]( el );
				component.init();
				$el.data('init-' + name, true); // mark as initialised
				// TODO add name
				MK.utils.eventManager.publish('component-inited');
			}
		};

		$components.each( function() {
			var self = this,
				$this = $( this ),
				names = $this.data( 'mk-component' );

			if( typeof names === 'string' ) {
				var name = names; // containes only single name. Keep it transparent.
				init(name, self);
			} else {
				names.forEach( function( name ) {
					init(name, self);
				});
			} 
		}); 
	};

	/**
	 * Async loader for 3rd party plugins available from within theme or external CDNs / APIs.
	 * Take one argument as callback which is run when loading is finished. Also keeps track of already loaded scripts 
	 * and prevent duplication. Holds in queue multiple callbacks that where defined in different places but depend on the 
	 * same plugin.
	 *
	 * TODO: heavy test for multiple dependencies and crosssharing one dependency and different one dependency in queue, 
	 * bulletproof with single dependency
	 *
	 * @example MK.core.loadDependencies([MK.core.path.plugins + 'plugin.js'], function() {
	 *          	// do something when plugin is loaded
	 * 			})
	 * 
	 * @param  {array}
	 * @param  {function}
	 */
	MK.core.loadDependencies = function( dependencies, callback ) {
		var _callback = callback || function() {};

        if( !dependencies ) {
        	// If no dependencies defined then run _callback imidietelly
        	_callback(); 
        	return;
        }

		// Check for new dependencies
        var newDeps = dependencies.map( function( dep ) {
            if( _loadedDependencies.indexOf( dep ) === -1 ) {
            	 if( typeof _inQueue[ dep ] === 'undefined' ) {
        			// console.log( dep );
                	return dep;
                } else {
                	_inQueue[ dep ].push( _callback );
                	return true;
                }
            } else {
            	return false;
            }
        });

        // The dependency is not new but it's not resolved yet
        // Callback is added to queue that will be run after the script is loaded
        // Don't run callback just yet.
        if( newDeps[0] === true ) {
        	// console.log('Waiting for ' + dependencies[0]);
        	return;
        }

        // Dependency was loaded previously. We can run callback safely
        if( newDeps[0] === false ) {
        	_callback();
        	return;
        }

        // Create queue and relationship script -> callback array to track
        // all callbacks that waits for ths script
        var queue = newDeps.map( function( script ) {
        	// console.log( script );
        	_inQueue[ script ] = [ _callback ];
            return $.getCachedScript( script );
        });

        // Callbacks invoking
        var onLoad = function onLoad() {
        	var index;
        	newDeps.map( function( loaded ) {
        		_inQueue[ loaded ].forEach( function( callback ) {
        			callback();
        		});
        		delete _inQueue[ loaded ];
                _loadedDependencies.push( loaded );
        	});
        };

        // Run callbacks when promise is resolved
        $.when.apply( null, queue ).done( onLoad );
	};

	/**
	 * Single namespace for all paths recuired in application.
	 * @type {Object}
	 */
	MK.core.path = {
		theme   : mk_theme_dir,
		plugins : mk_theme_js_path + '/plugins/async/min/',
		ajaxUrl : window.PHP.ajax
	};


})(jQuery);
(function($) {
	'use strict';

    var MK = window.MK || {};
	MK.utils = window.MK.utils || {};

    /**
     * Enables to evaluate common methods through DOM JSON references by invoking from object with bracket notation MK.utils[var][var]
     * @type {Object}
     */
    MK.utils.actions = {};

    MK.utils.actions.activate = function (el) {
        $(el).addClass('is-active');
    };
        
    MK.utils.actions.deactivate = function (el) {
        $(el).removeClass('is-active');
    };

}(jQuery));
(function($) {
	'use strict';

    var MK = window.MK || {};
	MK.utils = window.MK.utils || {};

    /**
     * Gets user browser and its version
     * @return {Object} => {name, version}
     */
	MK.utils.browser = (function() {
        var dataBrowser = [
            {string: navigator.userAgent, subString: "Edge", identity: "Edge"},
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "MSIE", identity: "IE"},
            {string: navigator.userAgent, subString: "Trident", identity: "IE"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
        ];

		var versionSearchString = null;
        var searchString = function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        };
        
        var searchVersion = function (dataString) {
            var index = dataString.indexOf(versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + versionSearchString.length + 1));
            }
        };

        var name = searchString(dataBrowser) || "Other";
        var version = searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || "Unknown";

        // Expose for css
        $('html').addClass(name).addClass(name + version);


        return {
        	name : name,
        	version : version
        };
        
	})();

    /**
     * Gets user operating system
     * @return {String}
     */
	MK.utils.OS = (function() {
		if (navigator.appVersion.indexOf("Win")!=-1) return "Windows";
		if (navigator.appVersion.indexOf("Mac")!=-1) return "OSX";
		if (navigator.appVersion.indexOf("X11")!=-1) return "UNIX";
		if (navigator.appVersion.indexOf("Linux")!=-1) return "Linux";
	})();
	
    /**
     * Check if mobile device.
     * @return {Boolean}
     */
	MK.utils.isMobile = function() {
        // Problems with bigger tablets as users raport differences with behaviour. Switch to navigator sniffing
		// return ('ontouchstart' in document.documentElement) && matchMedia( '(max-width: 1024px)' ).matches;
     
        // http://www.abeautifulsite.net/detecting-mobile-devices-with-javascript/
        // if it still brings problem try to move to more sophisticated solution like
        // apachemobilefilter.org
        // detectright.com
        // web.wurfl.io
        // 
        // Seems as best solution here:
        // hgoebl.github.io/mobile-detect.js

        function android() {
            return navigator.userAgent.match(/Android/i);
        }

        function blackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        }

        function iOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }

        function opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        }

        function windows() {
            return navigator.userAgent.match(/IEMobile/i);
        }

        return (android() || blackBerry() || iOS() || opera() || windows() || matchMedia( '(max-width: 1024px)' ).matches); 
            
	};

    /**
     * Check if menu is switched to responsive state based on user width settings
     * @return {Boolean} 
     */
    MK.utils.isResponsiveMenuState = function() {
        return window.matchMedia( '(max-width: '+ mk_responsive_nav_width +'px)').matches;
    };



    MK.utils.getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };


    MK.utils.isSmoothScroll = (function() {
        var isUserChoice = (mk_smooth_scroll === 'true');

        // We notify our app about smooth scroll option when user choose it from admin panel.
        return isUserChoice;
    }());

}(jQuery));
(function($) {
	'use strict';

    var MK = window.MK || {};
	MK.utils = window.MK.utils || {};

	/**
	 * Basic implementation of pub / sub pattern to avoid tight coupling with direct module communication
	 * @type {Object}
	 */
	MK.utils.eventManager = {};

	/**
	 * Subscribe to custom event and run callbacks
	 * @param  {String}
	 * @param  {Function}
	 *
	 * @usage MK.utils.eventManager.subscribe('event', function(e, params) {} )
	 */
	MK.utils.eventManager.subscribe = function(evt, func) {
		$(this).on(evt, func);
	};

	/**
	 * Unsubscribe from custom event
	 * @param  {String}
	 * @param  {Function}
	 */
	MK.utils.eventManager.unsubscribe = function(evt, func) {
		$(this).off(evt, func);
	};

	/**
	 * Publish custom event to notify appliaction about state change
	 * @param  {String}
	 * 
	 * @usage MK.utils.eventManager.publish('event', {
	 *        	param: val
	 *        })
	 */
	MK.utils.eventManager.publish = function(evt, params) {
		$(this).trigger(evt, [params]);
	};

}(jQuery));
(function($) {
	'use strict';

    var MK = window.MK || {};
	MK.utils = window.MK.utils || {};

	/**
	 * Control browser fullscreen mode
	 * @type {Object}
	 */
	MK.utils.fullscreen = {};

	// TODO: move to namespace
	MK.utils.launchIntoFullscreen = function ( element ) {
	    if(element.requestFullscreen) {
	     	element.requestFullscreen();
	  	} else if(element.mozRequestFullScreen) {
	    	element.mozRequestFullScreen();
	  	} else if(element.webkitRequestFullscreen) {
	    	element.webkitRequestFullscreen();
	  	} else if(element.msRequestFullscreen) {
	    	element.msRequestFullscreen();
	  	}
	};

	MK.utils.exitFullscreen = function () {
	  	if(document.exitFullscreen) {
	    	document.exitFullscreen();
	  	} else if(document.mozCancelFullScreen) {
	    	document.mozCancelFullScreen();
	  	} else if(document.webkitExitFullscreen) {
	    	document.webkitExitFullscreen();
	  	}
	};

}(jQuery));
(function($) {
	'use strict';

    var MK = window.MK || {};
	MK.utils = window.MK.utils || {};

	MK.utils.misc = {};
	// TODO: move to namespace

	/**
	 * Get all top offsets from jQuery collection
	 * 
	 * @param  {$Objects}
	 * @return {Aray}
	 */
	MK.utils.offsets = function( $els ) {
		return $.map( $els, function( el ) {
			return $( el ).offset().top;
		});
	};

	/**
	 * Retrive from array of numbers first number that is higher than given parameter
	 * 
	 * @param  {Number}
	 * @param  {Array}
	 * @return {Number}
	 */
	MK.utils.nextHigherVal = function( val, arr ) {
		var i = 0,
			higher = null;

		var check = function() {
			if( val > arr[ i ]) {
				i += 1;
				check();
			} else {
				higher = arr[ i ];
			}
		};
		check();

		return higher;
	};


    MK.utils.throttle = function( delay, fn ) {
        var last;
        var deferTimer;

        return function() {
            var context = this;
            var args = arguments;
            var now = +new Date;
            if( last && now < last + delay ) {
            	clearTimeout( deferTimer );
            	deferTimer = setTimeout( function() { 
            		last = now; fn.apply( context, args ); 
            	}, delay );
          	} else {
            	last = now;
            	fn.apply( context, args );
          	}
        };
    };

    MK.utils.isElementInViewport = function( el ) {
        var elemTop = el.getBoundingClientRect().top;
	    var isVisible = (elemTop < window.innerHeight);
	    return isVisible;
    };

})(jQuery); 
(function($) {
	'use strict';

    var MK = window.MK || {};
	MK.utils = window.MK.utils || {};

	/**
	 * Scrolls page to static pixel offset
	 * @param  {Number}
	 */
	MK.utils.scrollTo = function( offset ) {
		$('html, body').stop().animate({
			scrollTop: offset
			}, {
	  		duration: 1200,
	  		easing: "easeInOutExpo"
		});
	};

	/**
	 * Scrolls to element passed in as object or DOM reference
	 * @param  {String|Object}
	 */
	MK.utils.scrollToAnchor = function( hash ) {
		// Escape meta-chars from hash name only.
		hash = hash.substring(1).replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, "\\$&");
		hash = "#" + hash;
		var $target = $( hash );
		// console.log( hash );

		if( ! $target.length ) return;

		var offset  = $target.offset().top;
		offset = offset - MK.val.offsetHeaderHeight( offset );

		if( hash === '#top-of-page' ) window.history.replaceState( undefined, undefined, ' ' );
		else window.history.replaceState( undefined, undefined, hash );

		MK.utils.scrollTo( offset );
	};

	/**
	 * Controls native scroll behaviour
	 * @return {Object} => {disable, enable}
	 */
	MK.utils.scroll = (function() {
        // 37 - left arror, 38 - up arrow, 39 right arrow, 40 down arrow
	    var keys = [38, 40];

        function preventDefault(e) {
          e = e || window.event;
          e.preventDefault();
          e.returnValue = false;  
        }

        function wheel(e) {
          preventDefault(e);
        }

        function keydown(e) {
            for (var i = keys.length; i--;) {
                if (e.keyCode === keys[i]) {
                    preventDefault(e);
                    return;
                }
            }
        }

        function disableScroll() {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', wheel, false);
            }
          	window.onmousewheel = document.onmousewheel = wheel;
          	document.onkeydown = keydown;
        }

        function enableScroll() {            
          	if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', wheel, false);
            }
            window.onmousewheel = document.onmousewheel = document.onkeydown = null; 
        }	

        return {
        	disable : disableScroll,
        	enable  : enableScroll
        };

	})();

	/**
	 * Checks if passed link element has anchor inside current page. Returns string like '#anchor' if so or false
	 * @param  {String|Object}
	 * @return {String|Boolean}
	 */
	MK.utils.detectAnchor = function( el ) {
		var $this = $( el ),
			loc = window.location,
			currentPage = loc.origin + loc.pathname,
			href = $this.attr( 'href' ),
			linkSplit = (href) ? href.split( '#' ) : '',
			hrefPage  = linkSplit[0] ? linkSplit[0] : '', 
			hrefHash  = linkSplit[1] ? linkSplit[1] : '';

		if( typeof hrefHash !== 'undefined' && hrefHash !== '' ) {
			return '#' + hrefHash;
		} else {
			return false;
		}
	};

	/**
	 * This should be invoked only on page load. 
	 * Scrolls to anchor from  address bar
	 */
	MK.utils.scrollToURLHash = function() {
		var loc = window.location,
			hash = loc.hash;

		if ( hash.length && hash.substring(1).length ) {
			// !loading is added early after DOM is ready to prevent native jump to anchor
			hash = hash.replace( '!loading', '' );

			// Wait for one second before animating 
			// Most of UI animations should be done by then and async operations complited
			setTimeout( function() {
				MK.utils.scrollToAnchor( hash );
			}, 1000 ); 

			// Right after reset back address bar
			setTimeout( function() {
				window.history.replaceState(undefined, undefined, hash);
			}, 1001);
		}
	};

	/**
	 * Scroll Spy implementation. Spy dynamic offsets of elements or static pixel offset
	 * @param  {Number|Element}
	 * @param  {Object} => callback object {before, active, after}
	 */
	MK.utils.scrollSpy = function( toSpy, config ) {
		var $window   = $( window ),
	        container = document.getElementById( 'mk-theme-container' ),
	        isObj     = ( typeof toSpy === 'object' ),
	        offset    = (isObj) ? MK.val.dynamicOffset( toSpy, config.position, config.threshold ) : function() { return toSpy; },
	        height    = (isObj) ? MK.val.dynamicHeight( toSpy ) : function() { return 0; },
	        cacheVals = {},
	        _p 		  = 'before'; // current position

		var checkPosition = function() {
	    	var s = MK.val.scroll(), 
	    		o = offset(),
	    		h = height();

	        if( s < o && _p !== 'before' ) {
	        	// console.log( toSpy, 'before' );
	        	if( config.before ) config.before();
	        	_p = 'before';
	        } 
	        else if( s >= o && s <= o + h && _p !== 'active' ) {
	        	// console.log( toSpy, 'active' );
	        	if( config.active ) config.active( o );
	        	_p = 'active';
	        }
	        else if( s > o + h && _p !== 'after' ) {
	        	// console.log( toSpy, 'after' );
	        	if( config.after) config.after( o + h );
	        	_p = 'after';
	        }
		};

		var rAF = function() {
			window.requestAnimationFrame( checkPosition );
		};

		var exportVals = function() {
			return cacheVals;    
		};

		var updateCache = function() {
	    	var o = offset(),
	    		h = height();
	    		
	        cacheVals = {
	        	before : o - $window.height(),
	        	active : o,
	        	after : o + h
	        };
		};

		if( config.cache ) {
			config.cache( exportVals );
		}

	    checkPosition();
	    $window.on( 'load', checkPosition );
	    $window.on( 'resize', checkPosition );
	    $window.on( 'mouseup', checkPosition );
   		window.addResizeListener( container, checkPosition );

	    $window.on( 'scroll', rAF ); 

   		updateCache();
	    $window.on( 'load', updateCache );
	    $window.on( 'resize', updateCache );
   		window.addResizeListener( container, updateCache );
	};

}(jQuery));
(function($) {
    'use strict';

    // Create delagation event handler to behave as "live" listener. We may provide new elements with ajax etc later
    // Just add js-taphover class whatever element you'd like to immidietely bring hover on touch devices
    $("body").on("click touchend", '.js-taphover', function (e) {
        var $link = $(e.currentTarget); // grab target
        var $target = $(e.target);

        // Rather than ":hover" state we operate on ".hover" class which gives us more control and chance to emulate it on click
        // yet it is easy to reason about in our CSS
        if ($link.hasClass('hover')) {
            return true;
        } else if ( MK.utils.isMobile() ) {
            if ( ($target.hasClass('hover-icon') || $target.closest('.hover-icon').length) && !$target.closest('.js-taphover').hasClass('hover') ) {
                e.preventDefault();
            }
            $link.addClass('hover');
            $('.js-taphover').not(e.currentTarget).removeClass('hover'); // remove it from previous element
            e.stopPropagation(); // do not leak to document root if expected element was touched
        }
    });

    // Whenever click leaks to the root romve all hover classes
    $(document).on("click", function(e) {
        $('.js-taphover').removeClass('hover');
    });

}(jQuery));
// (function() {
//     'use strict';

//     // Make sure the video behaves like background-size: cover
//     window.videoCover = function( holderSelector, videoSelector ) {
//         var videos = document.querySelectorAll( videoSelector ),
//             holder = document.querySelectorAll( holderSelector )[0];

//         [].forEach.call(videos, function(video) {

//             var videoAspectRatio;

//             resizeBackground(); 

//             video.onloadedmetadata = function() {
//                 // get images aspect ratio
//                 videoAspectRatio = this.height / this.width;
//                 // attach resize event and fire it once
//                 window.onresize = resizeBackground;
//                 resizeBackground();
//             };

//             function resizeBackground() {
//                 // get window size and aspect ratio
//                 var holderWidth = holder.innerWidth,
//                     holderHeight = holder.innerHeight,
//                     holderAspectRatio = holderHeight / holderWidth;

//                 //compare holder ratio to image ratio so you know which way the image should fill
//                 if ( holderAspectRatio < videoAspectRatio ) {
//                     // we are fill width
//                     video.style.width = holderWidth + "px";
//                     // and applying the correct aspect to the height now
//                     video.style.height = (holderWidth * videoAspectRatio) + "px"; // this can be margin if your element is not positioned relatively, absolutely or fixed
//                     // make sure image is always centered
//                     video.style.left = "0px";
//                     video.style.top = (holderHeight - (holderWidth * videoAspectRatio)) / 2 + "px";
//                 } else { // same thing as above but filling height instead
//                     video.style.height = holderHeight + "px";
//                     video.style.width = (holderHeight / videoAspectRatio) + "px";
//                     video.style.left = (holderWidth - (holderHeight / videoAspectRatio)) / 2 + "px";
//                     video.style.top = "0px";
//                 }
//             }

//         });
//     };

// }());
// 
// 
// 
// TODO it is temp only. make it as a plugin

(function($) {
    'use strict';

    var $videoHolder = $('.mk-center-video'),
        $wrapper = $videoHolder.parent(),
        baseAspectRatio = 56.25;

    var wrapperHeight,
        wrapperWidth,
        wrapperAspectRatio;

    function calc() {
        wrapperHeight = $wrapper.height();
        wrapperWidth = $wrapper.width();
        wrapperAspectRatio = (wrapperHeight / wrapperWidth) * 100;
    } 

    function apply() {        
        var width = (wrapperAspectRatio / baseAspectRatio) * 100,
            widthOverflow = (width - 100);

        $videoHolder.css({
            'padding-top': wrapperAspectRatio + '%',
            'width': width + '%',
            'left': -(widthOverflow / 2) + '%'
        }); 
    }

    function reset() {
        $videoHolder.css({
            'padding-top': baseAspectRatio + '%',
            'width': 100 + '%',
            'left': 0
        });
    }

    function setCover() {
        reset();
        calc();
        if(wrapperAspectRatio > baseAspectRatio) apply();
    }

    $(window).on('load', setCover);
    $(window).on('resize', setCover);


}(jQuery));
(function($) {
	'use strict';

	var MK = window.MK || {};

	/**
	* 	MK.val is collection of Lambdas responsible for returning up to date values of method type like scrollY or el offset.
	* 	The Lambda is responsible for keeping track of value of a particular property, usually takes as argument an object
	* 	(or DOM reference) and internally creates and updates data that is returned as primitive value - through variable reference.
	*
	*  Benefits of this approach:
	*  - reduced DOM reads
	*  - auto-updating values without need for additional logic where methods are called
	*  - updating values when needed to be updated not read
	*
	*  Downsides:
	*  - Memory overhead with closures and keeping state in memory ( still beter than read state from DOM, but use wisely -
	*    do not use it when you really need static value on runtime )
	*/
	MK.val = {};

	/**
	* Current window offsetY position
	*
	* @uses   MK.val.scroll()
	* @return {number}
	*/
	MK.val.scroll = (function() {
		var offset = 0,
		$window = $(window),
		hasPageYOffset = (window.pageYOffset !== undefined),
		body = (document.documentElement || document.body.parentNode || document.body); // cross browser handling

		var update = function() {
			offset = hasPageYOffset ? window.pageYOffset : body.scrollTop;
		};

		var rAF = function() {
			window.requestAnimationFrame(update);
		};

		update();
		$window.on('load', update);
		$window.on('resize', update);
		$window.on('scroll', rAF);

		return function() {
			return offset;
		};
	})();


	/**
	* Changes number of percent to pixels based on viewport height
	*
	* @uses   MK.val.viewportPercentHeight({percent val})
	* @param  {number}
	* @return {number}
	*/
	MK.val.viewportPercentHeight = function(percent) {
		return $(window).height() * (percent / 100);
	};


	/**
	* Wordpress adminbar height based on wp media queries
	* @return {Number}
	*/
	MK.val.adminbarHeight = function() {
		if (php.hasAdminbar) {
			// apply WP native media-query and sizes
			return (window.matchMedia('( max-width: 782px )').matches) ? 46 : 32;
		} else {
			return 0;
		}
	};


	/**
	* Offset when header becomes sticky. Evaluates viewport % and header height to pixels for according options
	* @return {Number}
	*/
	MK.val.stickyOffset = (function() {
		var $header = $('.mk-header').not('.js-header-shortcode').first();

		// We need to have returning function even when header is disabled
		if (!$header.length) {
			return function() {
				return 0;
			};
		}



		var $toolbar = $header.find('.mk-header-toolbar'),
		config = $header.data(),
		hasToolbar = $toolbar.length,
		toolbarHeight = (hasToolbar) ? $toolbar.height() : 0,
		isVertical = (config.headerStyle === 4),
		headerHeight = (isVertical) ? 0 : config.height;

		var type = ((typeof config.stickyOffset === 'number') ? 'number' : false) ||
		((config.stickyOffset === 'header') ? 'header' : false) ||
		'percent';

		var stickyOffset = 0;
		var setOffset = function() {

			//we calculate toolbar height for When the device is changed Size
			//Toolbar height in responsive state is 0
			toolbarHeight = (hasToolbar) ? $toolbar.height() : 0;

			if (MK.utils.isResponsiveMenuState()) {
				headerHeight = config.responsiveHeight;

				if (hasToolbar) {
					if ($toolbar.is(':hidden')) {
						toolbarHeight = 0;
					}
				}
			}

			if (type === 'number') {
				stickyOffset = config.stickyOffset;
			} else if (type === 'header') {

				stickyOffset = headerHeight + toolbarHeight + MK.val.adminbarHeight(); // add all header components here, make them 0 if needed

			} else if (type === 'percent') {
				stickyOffset = MK.val.viewportPercentHeight(parseInt(config.stickyOffset));
			}
		};

		setOffset();
		$(window).on('resize', setOffset);

		return function() {
			return stickyOffset;
		};
	}());



	/**
	* Gets header height on particular offsetY position. Use to determine logic for fullHeight, smooth scroll etc.
	* Takes one parameter which is offset position we're interested in.
	*
	* @uses   MK.val.offsetHeaderHeight({offset val})
	* @param  {number}
	* @return {number}
	*/
	MK.val.offsetHeaderHeight = (function() { // Closure avoids multiple DOM reads. We need to fetch header config only once.
		var $header = $('.mk-header').not('.js-header-shortcode').first();

		// We need to have returning function even when header is disabled
		if (!$header.length) {
			return function() {
				return 0;
			};
		}

		var $toolbar = $header.find('.mk-header-toolbar'),
		config = $header.data(),
		stickyHeight = config.stickyHeight,
		desktopHeight = config.height,
		mobileHeight = config.responsiveHeight,
		isTransparent = $header.hasClass('transparent-header'),
		isSticky = config.stickyStyle.length,
		isStickyLazy = config.stickyStyle === 'lazy',
		isVertical = config.headerStyle === 4,
		hasToolbar = $toolbar.length,
		toolbarHeight = hasToolbar ? $toolbar.height() : 0,
		bufor = 5;

		/**
		 * The sticky section of header style 2 has fixed height.
		 * The stickey height option does not affect this header style.
		 */
		if ( config.headerStyle === 2 ) {
			stickyHeight = $header.find( '.mk-header-nav-container' ).outerHeight();
		}

		// if header has border bottom we can calculate that (for responsive state)
		var $innerHeader = $header.find('.mk-header-inner');
		var hasInnerHeader = $innerHeader.length;

		var headerHeight = function(offset) {

			toolbarHeight = hasToolbar ? $toolbar.height() : 0
			var stickyOffset = MK.val.stickyOffset();


			if (MK.utils.isResponsiveMenuState()) { //  Header avaible only on top for mobile

				if (hasToolbar && $toolbar.is(':hidden')) {
					toolbarHeight = 0;
				}

				//in responsive state , .mk-header-holder position's changed to "relative"
				//and header's border affected to offset,so borders must be calculated
				var headerBorder = 0;
				headerBorder = parseInt($innerHeader.css('border-bottom-width'));

				var totalHeight = mobileHeight + MK.val.adminbarHeight() + toolbarHeight + headerBorder;

				if (offset <= totalHeight) return totalHeight;
				else return MK.val.adminbarHeight();
			} else {
				if (offset <= stickyOffset) {
					if (isVertical) {
						if (hasToolbar) {
							return toolbarHeight + MK.val.adminbarHeight();
						} else {
							return MK.val.adminbarHeight();
						}
					} else if (isTransparent) {
						return MK.val.adminbarHeight();
					} else {
						return desktopHeight + toolbarHeight + MK.val.adminbarHeight();
					} // For any other return regular desktop height
				} else if (offset > stickyOffset) {
					if (isVertical) {
						return MK.val.adminbarHeight();
					} else if (!isSticky) {
						return MK.val.adminbarHeight();
					} else if (isStickyLazy) {
						return MK.val.adminbarHeight();
					} else if (isSticky) {
						return stickyHeight + MK.val.adminbarHeight();
					}
				}
			}
			// default to 0 to prevent errors ( need to return number )
			// Anyway make sure all scenarios are covered in IFs
			return 0;
		};

		return function(offset) {
			return headerHeight(offset - MK.val.adminbarHeight());
		};
	})();


	/**
	* Gets current offset of given element (passed as object or DOM reference) from top or bottom (default to top)
	* of screen  with possible threshold (default to 0)
	*
	* @uses   MK.val.dynamicOffset({obj reference}, {'top'|'bottom'}, {threshold val})
	* @param  {string|object}
	* @param  {string}
	* @param  {number}
	* @return {number}
	*/
	MK.val.dynamicOffset = function(el, position, threshold) {
		var $window = $(window),
		$el = $(el),
		pos = position || 'top',
		thr = threshold || 0,
		container = document.getElementById('mk-theme-container'),
		currentPos = 0;

		var offset = 0,
		winH = 0,
		rect = 0,
		x = 0;

		var update = function() {
			winH = $window.height();
			rect = $el[0].getBoundingClientRect();
			offset = (rect.top + MK.val.scroll());
			x = (pos === 'top') ? MK.val.offsetHeaderHeight(offset) : winH + (rect.height - thr);
			currentPos = offset - x - 1;
		};

		update();
		$window.on('load', update);
		$window.on('resize', update);
		window.addResizeListener(container, update);

		return function() {
			return currentPos;
		};
	};

	/**
	* Gets current height of given element (passed as object or DOM reference)
	*
	* @uses   MK.val.dynamicHeight({obj reference})
	* @param  {string|object}
	* @return {number}
	*/
	MK.val.dynamicHeight = function(el) {
		var $window = $(window),
		$el = $(el),
		container = document.getElementById('mk-theme-container'),
		currentHeight = 0;

		var update = function() {
			currentHeight = $el.outerHeight();
		};

		update();
		$window.on('load', update);
		$window.on('resize', update);
		window.addResizeListener(container, update);

		return function() {
			return currentHeight;
		};
	};

})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 */
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (a, b, c, d, e) {
                return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function (a, b, c, d, e) {
                return d * (b /= e) * b + c
        },
        easeOutQuad: function (a, b, c, d, e) {
                return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function (a, b, c, d, e) {
                if ((b /= e / 2) < 1) return d / 2 * b * b + c;
                return -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function (a, b, c, d, e) {
                return d * (b /= e) * b * b + c
        },
        easeOutCubic: function (a, b, c, d, e) {
                return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function (a, b, c, d, e) {
                if ((b /= e / 2) < 1) return d / 2 * b * b * b + c;
                return d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function (a, b, c, d, e) {
                return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function (a, b, c, d, e) {
                return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function (a, b, c, d, e) {
                if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c;
                return -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function (a, b, c, d, e) {
                return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function (a, b, c, d, e) {
                return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function (a, b, c, d, e) {
                if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c;
                return d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function (a, b, c, d, e) {
                return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function (a, b, c, d, e) {
                return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function (a, b, c, d, e) {
                return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function (a, b, c, d, e) {
                return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function (a, b, c, d, e) {
                return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function (a, b, c, d, e) {
                if (b == 0) return c;
                if (b == e) return c + d;
                if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c;
                return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function (a, b, c, d, e) {
                return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function (a, b, c, d, e) {
                return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function (a, b, c, d, e) {
                if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c;
                return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function (a, b, c, d, e) {
                var f = 1.70158;
                var g = 0;
                var h = d;
                if (b == 0) return c;
                if ((b /= e) == 1) return c + d;
                if (!g) g = e * .3;
                if (h < Math.abs(d)) {
                        h = d;
                        var f = g / 4
                } else var f = g / (2 * Math.PI) * Math.asin(d / h);
                return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
        },
        easeOutElastic: function (a, b, c, d, e) {
                var f = 1.70158;
                var g = 0;
                var h = d;
                if (b == 0) return c;
                if ((b /= e) == 1) return c + d;
                if (!g) g = e * .3;
                if (h < Math.abs(d)) {
                        h = d;
                        var f = g / 4
                } else var f = g / (2 * Math.PI) * Math.asin(d / h);
                return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
        },
        easeInOutElastic: function (a, b, c, d, e) {
                var f = 1.70158;
                var g = 0;
                var h = d;
                if (b == 0) return c;
                if ((b /= e / 2) == 2) return c + d;
                if (!g) g = e * .3 * 1.5;
                if (h < Math.abs(d)) {
                        h = d;
                        var f = g / 4
                } else var f = g / (2 * Math.PI) * Math.asin(d / h);
                if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c;
                return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
        },
        easeInBack: function (a, b, c, d, e, f) {
                if (f == undefined) f = 1.70158;
                return d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function (a, b, c, d, e, f) {
                if (f == undefined) f = 1.70158;
                return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function (a, b, c, d, e, f) {
                if (f == undefined) f = 1.70158;
                if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c;
                return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function (a, b, c, d, e) {
                return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function (a, b, c, d, e) {
                if ((b /= e) < 1 / 2.75) {
                        return d * 7.5625 * b * b + c
                } else if (b < 2 / 2.75) {
                        return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c
                } else if (b < 2.5 / 2.75) {
                        return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c
                } else {
                        return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
                }
        },
        easeInOutBounce: function (a, b, c, d, e) {
                if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c;
                return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c
        }
});

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s, H, f, w) {
    var K = f("html"),
        q = f(s),
        p = f(H),
        b = f.fancybox = function() {
            b.open.apply(this, arguments)
        },
        J = navigator.userAgent.match(/msie/i),
        C = null,
        t = H.createTouch !== w,
        u = function(a) {
            return a && a.hasOwnProperty && a instanceof f
        },
        r = function(a) {
            return a && "string" === f.type(a)
        },
        F = function(a) {
            return r(a) && 0 < a.indexOf("%")
        },
        m = function(a, d) {
            var e = parseInt(a, 10) || 0;
            d && F(a) && (e *= b.getViewport()[d] / 100);
            return Math.ceil(e)
        },
        x = function(a, b) {
            return m(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !t,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (J ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = u(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var l = {},
                    g, h, k, n, m;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), u(c) ? (l = {
                        href: c.data("fancybox-href") || c.attr("href"),
                        title: f("<div/>").text(c.data("fancybox-title") || c.attr("title")).html(),
                        isDom: !0,
                        element: c
                    },
                    f.metadata && f.extend(!0, l, c.metadata())) : l = c);
                g = d.href || l.href || (r(c) ? c : null);
                h = d.title !== w ? d.title : l.title || "";
                n = (k = d.content || l.content) ? "html" : d.type || l.type;
                !n && l.isDom && (n = c.data("fancybox-type"), n || (n = (n = c.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
                r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(c) && (n = "html", k = c)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift()));
                k || ("inline" === n ? g ? k = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : l.isDom && (k = c) :
                    "html" === n ? k = g : n || g || !l.isDom || (n = "inline", k = c));
                f.extend(l, {
                    href: g,
                    type: n,
                    content: k,
                    title: h,
                    selector: m
                });
                a[e] = l
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== w && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
                b.coming = null, b.current || b._afterZoomOut(a)))
        },
        close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())))
        },
        play: function(a) {
            var d = function() {
                    clearTimeout(b.player.timer)
                },
                e = function() {
                    d();
                    b.current && b.player.isActive &&
                        (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                },
                c = function() {
                    d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({
                "onCancel.player beforeClose.player": c,
                "onUpdate.player": e,
                "beforeLoad.player": d
            }), e(), b.trigger("onPlayStart")) : c()
        },
        next: function(a) {
            var d = b.current;
            d && (r(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d =
                b.current;
            d && (r(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = m(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== w && (b.cancel(), b._start(a)))
        },
        reposition: function(a, d) {
            var e = b.current,
                c = e ? e.wrap : null,
                l;
            c && (l = b._getPosition(d), a && "scroll" === a.type ? (delete l.position, c.stop(!0, !0).animate(l, 200)) : (c.css(l), e.pos = f.extend({}, e.dim, l)))
        },
        update: function(a) {
            var d = a && a.originalEvent && a.originalEvent.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(C), C = null);
            b.isOpen && !C && (C = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), C = null)
            }, e && !t ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, t && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
                b.trigger("onUpdate")), b.update())
        },
        hideLoading: function() {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel())
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }));
            b.trigger("onLoading")
        },
        getViewport: function() {
            var a = b.current &&
                b.current.locked || !1,
                d = {
                    x: q.scrollLeft(),
                    y: q.scrollTop()
                };
            a && a.length ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = t && s.innerWidth ? s.innerWidth : q.width(), d.h = t && s.innerHeight ? s.innerHeight : q.height());
            return d
        },
        unbindEvents: function() {
            b.wrap && u(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            q.unbind(".fb")
        },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (q.bind("orientationchange.fb" + (t ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c =
                    e.which || e.keyCode,
                    l = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l && (l.type || f(l).is("[contenteditable]")) || f.each(d, function(d, l) {
                    if (1 < a.group.length && l[c] !== w) return b[d](l[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, l)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, l, g) {
                for (var h = f(d.target || null), k = !1; h.length && !(k || h.is(".fancybox-skin") || h.is(".fancybox-wrap"));) k = h[0] && !(h[0].style.overflow &&
                    "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                0 !== c && !k && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), d.preventDefault())
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e &&
                        b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                })
            }
            p.trigger(a)
        },
        isImage: function(a) {
            return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return r(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var d = {},
                e, c;
            a = m(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c,
                c, c
            ]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" ===
                    c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && t && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (t ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, x(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width =
                    this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", t ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function() {
                f(this).data("ready", 1);
                t || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload ||
                b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, l, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    l = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace(/\{href\}/g, g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                                e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"'
                            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }
                    u(e) && e.parent().is(a.inner) || a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === l ? "scroll" : "no" === l ? "hidden" : l);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    else if (d.prevMethod) b.transitions[d.prevMethod]();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                l = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                k = h.height,
                n = h.minWidth,
                v = h.minHeight,
                p = h.maxWidth,
                q = h.maxHeight,
                t = h.scrolling,
                r = h.scrollOutside ? h.scrollbarWidth : 0,
                y = h.margin,
                z = m(y[1] + y[3]),
                s = m(y[0] + y[2]),
                w, A, u, D, B, G, C, E, I;
            e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            y = m(l.outerWidth(!0) - l.width());
            w = m(l.outerHeight(!0) - l.height());
            A = z + y;
            u = s + w;
            D = F(c) ? (a.w - A) * m(c) / 100 : c;
            B = F(k) ? (a.h - u) * m(k) / 100 : k;
            if ("iframe" === h.type) {
                if (I = h.content, h.autoHeight && 1 === I.data("ready")) try {
                    I[0].contentWindow.document.location && (g.width(D).height(9999), G = I.contents().find("body"), r && G.css("overflow-x",
                        "hidden"), B = G.outerHeight(!0))
                } catch (H) {}
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");
            c = m(D);
            k = m(B);
            E = D / B;
            n = m(F(n) ? m(n, "w") - A : n);
            p = m(F(p) ? m(p, "w") - A : p);
            v = m(F(v) ? m(v, "h") - u : v);
            q = m(F(q) ? m(q, "h") - u : q);
            G = p;
            C = q;
            h.fitToView && (p = Math.min(a.w - A, p), q = Math.min(a.h - u, q));
            A = a.w - z;
            s = a.h - s;
            h.aspectRatio ? (c > p && (c = p, k = m(c / E)), k > q && (k = q, c = m(k * E)), c < n && (c = n, k = m(c /
                E)), k < v && (k = v, c = m(k * E))) : (c = Math.max(n, Math.min(c, p)), h.autoHeight && "iframe" !== h.type && (g.width(c), k = g.height()), k = Math.max(v, Math.min(k, q)));
            if (h.fitToView)
                if (g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(), h.aspectRatio)
                    for (;
                        (a > A || z > s) && c > n && k > v && !(19 < d++);) k = Math.max(v, Math.min(q, k - 10)), c = m(k * E), c < n && (c = n, k = m(c / E)), c > p && (c = p, k = m(c / E)), g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height();
                else c = Math.max(n, Math.min(c, c - (a - A))), k = Math.max(v, Math.min(k, k - (z - s)));
            r && "auto" === t && k < B &&
                c + y + r < A && (c += r);
            g.width(c).height(k);
            e.width(c + y);
            a = e.width();
            z = e.height();
            e = (a > A || z > s) && c > n && k > v;
            c = h.aspectRatio ? c < G && k < C && c < D && k < B : (c < G || k < C) && (c < D || k < B);
            f.extend(h, {
                dim: {
                    width: x(a),
                    height: x(z)
                },
                origWidth: D,
                origHeight: B,
                canShrink: e,
                canExpand: c,
                wPadding: y,
                hPadding: w,
                wrapSpace: z - l.outerHeight(!0),
                skinSpace: l.height() - k
            });
            !I && h.autoHeight && k > v && k < q && !c && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                f(d.target).is("a") || f(d.target).parent().is("a") ||
                    (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play(!0)) : b.play(!1))
        },
        _afterZoomOut: function(a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                k = a.wPadding,
                n = b.getViewport();
            !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));
            u(e) ? (c = e.offset(), e.is("img") &&
                (f = e.outerWidth(), g = e.outerHeight())) : (c.top = n.y + (n.h - g) * a.topRatio, c.left = n.x + (n.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= n.y, c.left -= n.x;
            return c = {
                top: x(c.top - h * a.topRatio),
                left: x(c.left - k * a.leftRatio),
                width: x(f + k),
                height: x(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" ===
                f ? c : c - g * e)), b.inner[f](m("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function() {
            var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                l = f.extend({
                    opacity: 1
                }, d);
            delete l.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(l, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = {
                    opacity: 0.1
                };
            e && (c = this.getOrigPosition(), a.closeOpacity &&
                (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = {
                    opacity: 1
                },
                f = b.direction,
                g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(m(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(m(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function() {
            var a = b.previous,
                d = a.prevEffect,
                e = {
                    opacity: 0.1
                },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !t,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            var d;
            a = f.extend({}, this.defaults, a);
            this.overlay &&
                this.close();
            d = b.coming ? b.coming.parent : a.parent;
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(d && d.lenth ? d : "body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay",
                function(a) {
                    if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
                });
            this.overlay.css(a.css).show()
        },
        close: function() {
            q.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            J ? (b = Math.max(H.documentElement.offsetWidth, H.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*").filter(function() {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (r(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), J && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" :
                    "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function(a) {
        var d, e = f(this),
            c = this.selector || "",
            l = function(g) {
                var h = f(this).blur(),
                    k = d,
                    l, m;
                g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || h.is(".fancybox-wrap") || (l = a.groupAttr || "data-fancybox-group", m = h.attr(l), m || (l = "rel", m = h.get(0)[l]), m && "" !== m && "nofollow" !== m && (h = c.length ? f(c) : e, h = h.filter("[" + l + '="' + m + '"]'), k = h.index(this)), a.index = k, !1 !== b.open(h, a) && g.preventDefault())
            };
        a = a || {};
        d = a.index || 0;
        c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')",
            "click.fb-start", l) : e.unbind("click.fb-start").bind("click.fb-start", l);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === w && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        f.support.fixedPosition === w && (f.support.fixedPosition = function() {
            var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            a.remove();
            return b
        }());
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        });
        a = f(s).width();
        K.addClass("fancybox-lock-test");
        d = f(s).width();
        K.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);






/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *          http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
    "use strict";

    //Shortcut for fancyBox object
    var F = $.fancybox,
        format = function( url, rez, params ) {
            params = params || '';

            if ( $.type( params ) === "object" ) {
                params = $.param(params, true);
            }

            $.each(rez, function(key, value) {
                url = url.replace( '$' + key, value || '' );
            });

            if (params.length) {
                url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
            }

            return url;
        };

    //Add helper object
    F.helpers.media = {
        defaults : {
            youtube : {
                matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params  : {
                    autoplay    : 1,
                    autohide    : 1,
                    fs          : 1,
                    rel         : 0,
                    hd          : 1,
                    wmode       : 'opaque',
                    enablejsapi : 1
                },
                type : 'iframe',
                url  : '//www.youtube.com/embed/$3'
            },
            vimeo : {
                matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params  : {
                    autoplay      : 1,
                    hd            : 1,
                    show_title    : 1,
                    show_byline   : 1,
                    show_portrait : 0,
                    fullscreen    : 1
                },
                type : 'iframe',
                url  : '//player.vimeo.com/video/$1'
            },
            metacafe : {
                matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params  : {
                    autoPlay : 'yes'
                },
                type : 'swf',
                url  : function( rez, params, obj ) {
                    obj.swf.flashVars = 'playerVars=' + $.param( params, true );

                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
                }
            },
            dailymotion : {
                matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
                params  : {
                    additionalInfos : 0,
                    autoStart : 1
                },
                type : 'swf',
                url  : '//www.dailymotion.com/swf/video/$1'
            },
            twitvid : {
                matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params  : {
                    autoplay : 0
                },
                type : 'iframe',
                url  : '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic : {
                matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type : 'image',
                url  : '//twitpic.com/show/full/$1/'
            },
            instagram : {
                matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type : 'image',
                url  : '//$1/p/$2/media/?size=l'
            },
            google_maps : {
                matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type : 'iframe',
                url  : function( rez ) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
                }
            }
        },

        beforeLoad : function(opts, obj) {
            var url   = obj.href || '',
                type  = false,
                what,
                item,
                rez,
                params;

            for (what in opts) {
                if (opts.hasOwnProperty(what)) {
                    item = opts[ what ];
                    rez  = url.match( item.matcher );

                    if (rez) {
                        type   = item.type;
                        params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

                        url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

                        break;
                    }
                }
            }

            if (type) {
                obj.href = url;
                obj.type = type;

                obj.autoHeight = false;
            }
        }
    };

}(jQuery));
;
(function ($, window, document, undefined) {

  var pluginName = "MegaMenu",
    defaults = {
      propertyName: "value"
    };

  // Set delay time for mouseout
  var delayOut = 400; // Default delay time is 200

  // the list of menus
  var menus = [];

  function CustomMenu(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  CustomMenu.prototype = {
    isOpen: false,
    timeout: null,
    init: function () {

      var that = this;

      $(this).each(function(index, menu) {
        that.node = menu.element; 
        that.addListeners(menu.element);

        var $menu = $(menu.element);
        $menu.addClass("dropdownJavascript");
        menus.push(menu.element);

        $menu.find('ul > li').each(function(index, submenu) {
          if ($(submenu).find('ul').length > 0 ) {
            $(submenu).addClass('with-menu');
          }
        });
      });
    },
    addListeners: function(menu) {
      var that = this;
      $(menu).mouseover(function(e) {
        that.handleMouseOver.call(that, e);
      }).mouseout(function(e) {
          that.handleMouseOut.call(that, e);
        });
    },
    handleMouseOver: function (e) {
      var that = this;
      // clear the timeout
      this.clearTimeout();

      // find the parent list item
      //var item = ('target' in e ? e.target : e.srcElement);
      var item = e.target || e.srcElement;
      while (item.nodeName != 'LI' && item != this.node) {
        item = item.parentNode;
      }

      // if the target is within a list item, set the timeout
      if (item.nodeName == 'LI') {
        this.toOpen = item;
        this.timeout = setTimeout(function() {
          that.open.call(that);
        }, this.options.delay);
      }

    },
    handleMouseOut: function () {
      var that = this;
      // clear the timeout
      this.clearTimeout();

      // Check mouseout delay overriding
      var _delayOut = this.options.delay;
      if ( delayOut ) {
        _delayOut = delayOut;
      }

      this.timeout = setTimeout(function() {
        that.close.call(that);
      }, _delayOut );

    },
    clearTimeout: function () {

      // clear the timeout
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }

    },
    open: function () {

      var that = this;
      // store that the menu is open
      this.isOpen = true;

      // loop over the list items with the same parent
      var items = $(this.toOpen).parent().children('li');
      $(items).each(function(index, item) {
        $(item).find("ul").each(function(index, submenu) {
          if (item != that.toOpen) {
            // close the submenu
            $(item).removeClass("dropdownOpen");
            that.close(item);

          } else if (!$(item).hasClass('dropdownOpen')) {

            // open the submenu
            //if ( !$(item).parents('li').hasClass('has-mega-menu') ) {
              $(item).addClass("dropdownOpen");
            //}


            // determine the location of the edges of the submenu
            var left = 0;
            var node = submenu;
            while (node) {
              //abs is because when you make menus right to left
              //the offsetLeft would be negative
              left += Math.abs(node.offsetLeft);
              node = node.offsetParent;
            }
            var right = left + submenu.offsetWidth;


            //We should refactor this code to execute only when menu is vertical
            var menuHeight = $(submenu).outerHeight();
            var parentTop = $(submenu).offset().top - $(window).scrollTop();
            var totalHeight = menuHeight + parentTop;
            var windowHeight = window.innerHeight;

           /* if (totalHeight > windowHeight) {
              var bestTop = (windowHeight - totalHeight) - 20;
              $(submenu).css('margin-top', bestTop + "px");
            }*/

            //remove any previous classes
            $(item).removeClass('dropdownRightToLeft');

            // move the submenu to the right of the item if appropriate
            if (left < 0) $(item).addClass('dropdownLeftToRight');

            // move the submenu to the left of the item if appropriate
            if (right > document.body.clientWidth) {
              $(item).addClass('dropdownRightToLeft');
            }

          }
        });
      });

    },


    close: function (node) {

      // if no node was specified, close all menus
      if (!node) {
        this.isOpen = false;
        node = this.node;
      }

      // loop over the items, closing their submenus
      $(node).find('li').each(function(index, item) {
        $(item).removeClass('dropdownOpen');
      });

    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new CustomMenu(this, options));
      }
    });
  };

})(jQuery, window, document);

/*!
 * modernizr v3.3.1
 * Build https://modernizr.com/download?-cssanimations-csstransitions-touchevents-domprefixes-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var classes = [];
  

  var tests = [];
  

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['','']);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

/**
  * @optionName html5shiv
  * @optionProp html5shiv
  */

  // Take the html5 variable out of the html5shiv scope so we can return it.
  var html5;
  if (!isSVG) {
    /**
     * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
;(function(window,document){var version='3.7.3';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden' in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined')}())}catch(e){supportsHtml5Styles=!0;supportsUnknownElements=!0}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild)}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements}
function addElements(newElements,ownerDocument){var elements=html5.elements;if(typeof elements!='string'){elements=elements.join(' ')}
if(typeof newElements!='string'){newElements=newElements.join(' ')}
html5.elements=elements+' '+newElements;shivDocument(ownerDocument)}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data}
return data}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName)}
if(!data){data=getExpandoData(ownerDocument)}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode()}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode()}else{node=data.createElem(nodeName)}
return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment()}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i])}
return clone}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()}
ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName)}
return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+getElements().join().replace(/[\w\-:]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")'})+');return n}')(html5,data.frag)}
function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}'+'mark{background:#FF0;color:#000}'+'template{display:none}')}
if(!supportsUnknownElements){shivMethods(ownerDocument,data)}
return ownerDocument}
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==!1),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==!1),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment,addElements:addElements};window.html5=html5;shivDocument(document);if(typeof module=='object'&&module.exports){module.exports=html5}}(typeof window!=="undefined"?window:this,document))};var omPrefixes='Moz O ms Webkit';var domPrefixes=(ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(' '):[]);ModernizrProto._domPrefixes=domPrefixes;function cssToDOM(name){return name.replace(/([a-z])-([a-z])/g,function(str,m1,m2){return m1+m2.toUpperCase()}).replace(/^-/,'')};var cssomPrefixes=(ModernizrProto._config.usePrefixes?omPrefixes.split(' '):[]);ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(prop){var length=prefixes.length;var cssrule=window.CSSRule;var rule;if(typeof cssrule==='undefined'){return undefined}
if(!prop){return!1}
prop=prop.replace(/^@/,'');rule=prop.replace(/-/g,'_').toUpperCase()+'_RULE';if(rule in cssrule){return'@'+prop}
for(var i=0;i<length;i++){var prefix=prefixes[i];var thisRule=prefix.toUpperCase()+'_'+rule;if(thisRule in cssrule){return'@-'+prefix.toLowerCase()+'-'+prop}}
return!1};ModernizrProto.atRule=atRule;function contains(str,substr){return!!~(''+str).indexOf(substr)};function createElement(){if(typeof document.createElement!=='function'){return document.createElement(arguments[0])}else if(isSVG){return document.createElementNS.call(document,'http://www.w3.org/2000/svg',arguments[0])}else{return document.createElement.apply(document,arguments)}};function getBody(){var body=document.body;if(!body){body=createElement(isSVG?'svg':'body');body.fake=!0}
return body};function injectElementWithStyles(rule,callback,nodes,testnames){var mod='modernizr';var style;var ret;var node;var docOverflow;var div=createElement('div');var body=getBody();if(parseInt(nodes,10)){while(nodes--){node=createElement('div');node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node)}}
style=createElement('style');style.type='text/css';style.id='s'+mod;(!body.fake?div:body).appendChild(style);body.appendChild(div);if(style.styleSheet){style.styleSheet.cssText=rule}else{style.appendChild(document.createTextNode(rule))}
div.id=mod;if(body.fake){body.style.background='';body.style.overflow='hidden';docOverflow=docElement.style.overflow;docElement.style.overflow='hidden';docElement.appendChild(body)}
ret=callback(div,rule);if(body.fake){body.parentNode.removeChild(body);docElement.style.overflow=docOverflow;docElement.offsetHeight}else{div.parentNode.removeChild(div)}
return!!ret};var testStyles=ModernizrProto.testStyles=injectElementWithStyles;function fnBind(fn,that){return function(){return fn.apply(that,arguments)}};function testDOMProps(props,obj,elem){var item;for(var i in props){if(props[i]in obj){if(elem===!1){return props[i]}
item=obj[props[i]];if(is(item,'function')){return fnBind(item,elem||obj)}
return item}}
return!1};var modElem={elem:createElement('modernizr')};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});function domToCSS(name){return name.replace(/([A-Z])/g,function(str,m1){return'-'+m1.toLowerCase()}).replace(/^ms-/,'-ms-')};function nativeTestProps(props,value){var i=props.length;if('CSS' in window&&'supports' in window.CSS){while(i--){if(window.CSS.supports(domToCSS(props[i]),value)){return!0}}
return!1}else if('CSSSupportsRule' in window){var conditionText=[];while(i--){conditionText.push('('+domToCSS(props[i])+':'+value+')')}
conditionText=conditionText.join(' or ');return injectElementWithStyles('@supports ('+conditionText+') { #modernizr { position: absolute; } }',function(node){return getComputedStyle(node,null).position=='absolute'})}
return undefined};function testProps(props,prefixed,value,skipValueTest){skipValueTest=is(skipValueTest,'undefined')?!1:skipValueTest;if(!is(value,'undefined')){var result=nativeTestProps(props,value);if(!is(result,'undefined')){return result}}
var afterInit,i,propsLength,prop,before;var elems=['modernizr','tspan','samp'];while(!mStyle.style&&elems.length){afterInit=!0;mStyle.modElem=createElement(elems.shift());mStyle.style=mStyle.modElem.style}
function cleanElems(){if(afterInit){delete mStyle.style;delete mStyle.modElem}}
propsLength=props.length;for(i=0;i<propsLength;i++){prop=props[i];before=mStyle.style[prop];if(contains(prop,'-')){prop=cssToDOM(prop)}
if(mStyle.style[prop]!==undefined){if(!skipValueTest&&!is(value,'undefined')){try{mStyle.style[prop]=value}catch(e){}
if(mStyle.style[prop]!=before){cleanElems();return prefixed=='pfx'?prop:!0}}else{cleanElems();return prefixed=='pfx'?prop:!0}}}
cleanElems();return!1};var testProp=ModernizrProto.testProp=function(prop,value,useValue){return testProps([prop],undefined,value,useValue)};function testPropsAll(prop,prefixed,elem,value,skipValueTest){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');if(is(prefixed,'string')||is(prefixed,'undefined')){return testProps(props,prefixed,value,skipValueTest)}else{props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');return testDOMProps(props,prefixed,elem)}}
ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(prop,obj,elem){if(prop.indexOf('@')===0){return atRule(prop)}
if(prop.indexOf('-')!=-1){prop=cssToDOM(prop)}
if(!obj){return testPropsAll(prop,'pfx')}else{return testPropsAll(prop,obj,elem)}};function testAllProps(prop,value,skipValueTest){return testPropsAll(prop,undefined,undefined,value,skipValueTest)}
ModernizrProto.testAllProps=testAllProps;
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
Modernizr.addTest('cssanimations',testAllProps('animationName','a',!0));
/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest('csstransitions',testAllProps('transition','all',!0));
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
Modernizr.addTest('touchevents',function(){var bool;if(('ontouchstart' in window)||window.DocumentTouch&&document instanceof DocumentTouch){bool=!0}else{var query=['@media (',prefixes.join('touch-enabled),('),'heartz',')','{#modernizr{top:9px;position:absolute}}'].join('');testStyles(query,function(node){bool=node.offsetTop===9})}
return bool});testRunner();setClasses(classes);delete ModernizrProto.addTest;delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++){Modernizr._q[i]()}
window.Modernizr=Modernizr})(window,document);$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1000,init:function(){this._log("init");if(this._inited){this._log("Already Inited");this._inited=!0;return}
this._requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback,element){window.setTimeout(callback,1000/60)}})();this._onScroll(!0)},_inited:!1,_properties:['x','y','z','rotateX','rotateY','rotateZ','scaleX','scaleY','scaleZ','scale'],_requestAnimationFrame:null,_log:function(message){if(this.showLogs)console.log("Parallax Scroll / "+message)},_onScroll:function(noSmooth){var scroll=$(document).scrollTop();var windowHeight=$(window).height();this._log("onScroll "+scroll);$("[data-parallax]").each($.proxy(function(index,el){var $el=$(el);var properties=[];var applyProperties=!1;var style=$el.data("style");if(style==undefined){style=$el.attr("style")||"";$el.data("style",style)}
var datas=[$el.data("parallax")];var iData;for(iData=2;;iData++){if($el.data("parallax"+iData)){datas.push($el.data("parallax-"+iData))}else{break}}
var datasLength=datas.length;for(iData=0;iData<datasLength;iData ++){var data=datas[iData];var scrollFrom=data["from-scroll"];if(scrollFrom==undefined)scrollFrom=Math.max(0,$(el).offset().top-windowHeight);scrollFrom=scrollFrom|0;var scrollDistance=data.distance;var scrollTo=data["to-scroll"];if(scrollDistance==undefined&&scrollTo==undefined)scrollDistance=windowHeight;scrollDistance=Math.max(scrollDistance|0,1);var easing=data.easing;var easingReturn=data["easing-return"];if(easing==undefined||!$.easing||!$.easing[easing])easing=null;if(easingReturn==undefined||!$.easing||!$.easing[easingReturn])easingReturn=easing;if(easing){var totalTime=data.duration;if(totalTime==undefined)totalTime=scrollDistance;totalTime=Math.max(totalTime|0,1);var totalTimeReturn=data["duration-return"];if(totalTimeReturn==undefined)totalTimeReturn=totalTime;scrollDistance=1;var currentTime=$el.data("current-time");if(currentTime==undefined)currentTime=0}
if(scrollTo==undefined)scrollTo=scrollFrom+scrollDistance;scrollTo=scrollTo|0;var smoothness=data.smoothness;if(smoothness==undefined)smoothness=30;smoothness=smoothness|0;if(noSmooth||smoothness==0)smoothness=1;smoothness=smoothness|0;var scrollCurrent=scroll;scrollCurrent=Math.max(scrollCurrent,scrollFrom);scrollCurrent=Math.min(scrollCurrent,scrollTo);if(easing){if($el.data("sens")==undefined)$el.data("sens","back");if(scrollCurrent>scrollFrom){if($el.data("sens")=="back"){currentTime=1;$el.data("sens","go")}else{currentTime++}}
if(scrollCurrent<scrollTo){if($el.data("sens")=="go"){currentTime=1;$el.data("sens","back")}else{currentTime++}}
if(noSmooth)currentTime=totalTime;$el.data("current-time",currentTime)}
this._properties.map($.proxy(function(prop){var defaultProp=0;var to=data[prop];if(to==undefined)return;if(prop=="scale"||prop=="scaleX"||prop=="scaleY"||prop=="scaleZ"){defaultProp=1}else{to=to|0}
var prev=$el.data("_"+prop);if(prev==undefined)prev=defaultProp;var next=((to-defaultProp)*((scrollCurrent-scrollFrom)/(scrollTo-scrollFrom)))+defaultProp;var val=prev+(next-prev)/smoothness;if(easing&&currentTime>0&&currentTime<=totalTime){var from=defaultProp;if($el.data("sens")=="back"){from=to;to=-to;easing=easingReturn;totalTime=totalTimeReturn}
val=$.easing[easing](null,currentTime,from,to,totalTime)}
val=Math.ceil(val*this.round)/this.round;if(val==prev&&next==to)val=to;if(!properties[prop])properties[prop]=0;properties[prop]+=val;if(prev!=properties[prop]){$el.data("_"+prop,properties[prop]);applyProperties=!0}},this))}
if(applyProperties){if(properties.z!=undefined){var perspective=data.perspective;if(perspective==undefined)perspective=800;var $parent=$el.parent();if(!$parent.data("style"))$parent.data("style",$parent.attr("style")||"");$parent.attr("style","perspective:"+perspective+"px; -webkit-perspective:"+perspective+"px; "+$parent.data("style"))}
if(properties.scaleX==undefined)properties.scaleX=1;if(properties.scaleY==undefined)properties.scaleY=1;if(properties.scaleZ==undefined)properties.scaleZ=1;if(properties.scale!=undefined){properties.scaleX*=properties.scale;properties.scaleY*=properties.scale;properties.scaleZ*=properties.scale}
var translate3d="translate3d("+(properties.x?properties.x:0)+"px, "+(properties.y?properties.y:0)+"px, "+(properties.z?properties.z:0)+"px)";var rotate3d="rotateX("+(properties.rotateX?properties.rotateX:0)+"deg) rotateY("+(properties.rotateY?properties.rotateY:0)+"deg) rotateZ("+(properties.rotateZ?properties.rotateZ:0)+"deg)";var scale3d="scaleX("+properties.scaleX+") scaleY("+properties.scaleY+") scaleZ("+properties.scaleZ+")";var cssTransform=translate3d+" "+rotate3d+" "+scale3d+";";this._log(cssTransform);$el.attr("style","transform:"+cssTransform+" -webkit-transform:"+cssTransform+" "+style)}},this));if(window.requestAnimationFrame){window.requestAnimationFrame($.proxy(this._onScroll,this,!1))}else{this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}}};(function($,window,undefined){'use strict';var Modernizr=window.Modernizr,$body=$('body');$.DLMenu=function(options,element){this.$el=$(element);this._init(options)};$.DLMenu.defaults={animationClasses:{classin:'mk-vm-animate-in-'+mk_vertical_header_anim,classout:'mk-vm-animate-out-'+mk_vertical_header_anim},onLevelClick:function(el,name){return!1},onLinkClick:function(el,ev){return!1}};$.DLMenu.prototype={_init:function(options){this.options=$.extend(!0,{},$.DLMenu.defaults,options);this._config();var animEndEventNames={'WebkitAnimation':'webkitAnimationEnd','OAnimation':'oAnimationEnd','msAnimation':'MSAnimationEnd','animation':'animationend'},transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'};this.animEndEventName=animEndEventNames[Modernizr.prefixed('animation')]+'.dlmenu';this.transEndEventName=transEndEventNames[Modernizr.prefixed('transition')]+'.dlmenu';this.animEndEventNameUnsufixed=animEndEventNames[Modernizr.prefixed('animation')];this.transEndEventNameUnsufixed=transEndEventNames[Modernizr.prefixed('transition')];this.supportAnimations=Modernizr.cssanimations;this.supportTransitions=Modernizr.csstransitions;this._initEvents()},_config:function(){this.open=!1;this.$trigger=this.$el.children('.mk-vm-trigger');this.$menu=this.$el.children('ul.mk-vm-menu');this.$menuitems=this.$menu.find('li:not(.mk-vm-back)');this.$back=this.$menu.find('li.mk-vm-back')},_initEvents:function(){var self=this;$('.mk-vm-menuwrapper a').on('transitionend',function(event){event.stopPropagation()});this.$menuitems.on('click.dlmenu','a',function(event){var $item=$(event.delegateTarget),$submenu=$(event.currentTarget).siblings('ul.sub-menu');if($submenu.length>0){var $flyin=$submenu.clone().css('opacity',0).insertAfter(self.$menu);var onAnimationEndFn=function(){var $parent=$item.parents('.mk-vm-subviewopen:first');self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('mk-vm-subview');$item.addClass('mk-vm-subviewopen')
$parent.removeClass('mk-vm-subviewopen').addClass('mk-vm-subview');$flyin.remove();var $txt=$item.find('.meni-item-text');$txt.css('opacity',0.99);setTimeout(function(){$txt.css('opacity',1)},0)};setTimeout(function(){$flyin.addClass(self.options.animationClasses.classin);self.$menu.addClass(self.options.animationClasses.classout);if(self.supportAnimations){self.$menu.on(self.animEndEventName,onAnimationEndFn)}else{onAnimationEndFn.call()}
self.options.onLevelClick($item,$item.children('a:first').text())});return!1}else{self.options.onLinkClick($item,event)}});this.$back.on('click.dlmenu',function(event){var $this=$(this),$submenu=$this.parents('ul.sub-menu:first'),$item=$submenu.parent(),$flyin=$submenu.clone().insertAfter(self.$menu);var onAnimationEndFn=function(){self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);$flyin.remove()};setTimeout(function(){$flyin.addClass(self.options.animationClasses.classout);self.$menu.addClass(self.options.animationClasses.classin);if(self.supportAnimations){self.$menu.on(self.animEndEventName,onAnimationEndFn)}else{onAnimationEndFn.call()}
$item.removeClass('mk-vm-subviewopen');var $subview=$this.parents('.mk-vm-subview:first');if($subview.is('li')){$subview.addClass('mk-vm-subviewopen')}
$subview.removeClass('mk-vm-subview')});return!1})},closeMenu:function(){if(this.open){this._closeMenu()}},_closeMenu:function(){var self=this,onTransitionEndFn=function(){self.$menu.off(self.transEndEventName);self._resetMenu()};this.$menu.removeClass('mk-vm-menuopen');this.$menu.addClass('mk-vm-menu-toggle');this.$trigger.removeClass('mk-vm-active');if(this.supportTransitions){this.$menu.on(this.transEndEventName,onTransitionEndFn)}else{onTransitionEndFn.call()}
this.open=!1},openMenu:function(){if(!this.open){this._openMenu()}},_openMenu:function(){var self=this;$body.off('click').on('click.dlmenu',function(){self._closeMenu()});this.$menu.addClass('mk-vm-menuopen mk-vm-menu-toggle').on(this.transEndEventName,function(){$(this).removeClass('mk-vm-menu-toggle')});this.$trigger.addClass('mk-vm-active');this.open=!0},_resetMenu:function(){this.$menu.removeClass('mk-vm-subview');this.$menuitems.removeClass('mk-vm-subview mk-vm-subviewopen')}};var logError=function(message){if(window.console){window.console.error(message)}};$.fn.dlmenu=function(options){if(typeof options==='string'){var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$.data(this,'dlmenu');if(!instance){logError("cannot call methods on dlmenu prior to initialization; "+"attempted to call method '"+options+"'");return}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){logError("no such method '"+options+"' for dlmenu instance");return}
instance[options].apply(instance,args)})}else{this.each(function(){var instance=$.data(this,'dlmenu');if(instance){instance._init()}else{instance=$.data(this,'dlmenu',new $.DLMenu(options,this))}})}
return this}})(jQuery,window);(function($){'use strict';$('.mk-main-navigation .menu-item-has-children').children('a').attr('aria-haspopup','true');$('.animated-column-item').attr('aria-haspopup','true')})(jQuery);(function($){'use strict';var Accordion=function(el){var that=this,$el=$(el),initial=$el.data('initialindex'),timeout;this.$el=$el;this.$single=$('.'+this.dom.single,$el);this.isExpendable=($el.data('style')==='toggle-action');this.bindClicks();$(window).on('load',function(){if(initial!==-1)that.show(that.$single.eq(initial))});$(window).on('resize',function(){clearTimeout(timeout);timeout=setTimeout(that.bindClicks.bind(that),500)})}
Accordion.prototype.dom={single:'mk-accordion-single',tab:'mk-accordion-tab',pane:'mk-accordion-pane',current:'current',mobileToggle:'mobile-false',mobileBreakPoint:767}
Accordion.prototype.bindClicks=function(){this.$single.off('click','.'+this.dom.tab);if(!(window.matchMedia('(max-width: '+this.dom.mobileBreakPoint+'px)').matches&&this.$el.hasClass(this.dom.mobileToggle))){this.$single.on('click','.'+this.dom.tab,this.handleEvent.bind(this));var $current=$('.'+this.dom.current,this.$el);if($('.'+this.dom.pane,$current).css('display')==='none')this.show($current)}}
Accordion.prototype.handleEvent=function(e){e.preventDefault();e.stopPropagation();var $single=$(e.delegateTarget);if(!$single.hasClass(this.dom.current)){this.show($single)}else{if(this.isExpendable)this.hide($single)}}
Accordion.prototype.hide=function($single){$single.removeClass(this.dom.current);$('.'+this.dom.pane,$single).slideUp()}
Accordion.prototype.show=function($single){if(!this.isExpendable){var that=this;this.hide($('.'+this.dom.current,that.$el))}
$single.addClass(this.dom.current);$('.'+this.dom.pane,$single).slideDown()}
function init(){$('.mk-accordion').each(function(){new Accordion(this)})}
init();$(window).on('vc_reload',init)})(jQuery);(function($){'use strict';var SkillDiagram=function(el){this.el=el}
SkillDiagram.prototype={init:function(){this.cacheElements();this.createDiagram();this.$skills.each(this.createSkill.bind(this))},cacheElements:function(){this.$el=$(this.el);this.$skills=this.$el.find('.mk-meter-arch');this.config=this.$el.data();this.config.radius=this.config.dimension/2},random:function(l,u){return Math.floor((Math.random()*(u-l+1))+l)},createDiagram:function(){var self=this;$(this.el).find('svg').remove();this.diagram=Raphael(this.el,this.config.dimension,this.config.dimension);this.diagram.setViewBox(0,0,this.config.dimension,this.config.dimension,!0);this.diagram.setSize('90%','90%');this.diagram.circle(this.config.radius,this.config.radius,80).attr({stroke:'none',fill:this.config.circleColor});this.title=this.diagram.text(this.config.radius,this.config.radius,this.config.defaultText).attr({font:"22px helvetica",fill:this.config.defaultTextColor}).toFront();this.diagram.customAttributes.arc=function(value,color,rad){var v=3.6*value,alpha=v==360?359.99:v,r=self.random(91,240),a=(r-alpha)*Math.PI/180,b=r*Math.PI/180,sx=self.config.radius+rad*Math.cos(b),sy=self.config.radius-rad*Math.sin(b),x=self.config.radius+rad*Math.cos(a),y=self.config.radius-rad*Math.sin(a),path=[['M',sx,sy],['A',rad,rad,0,+(alpha>180),1,x,y]];return{path:path,stroke:color}}},createSkill:function(id,el){var self=this,$this=$(el),config=$this.data(),radMin=72,radVal=27,newRad=radMin+(radVal*(id+1));var $path=this.diagram.path().attr({'stroke-width':28,arc:[config.percent,config.color,newRad]});$path.mouseover(function(){self.showSkill(this,config.name,config.percent)}).mouseout(function(){self.hideSkill(this)})},showSkill:function(self,name,percent){var $this=self,time=250;if(Raphael.type!='VML')$this.toFront();$this.animate({'stroke-width':50,'opacity':0.9,},800,'elastic');this.title.stop().animate({opacity:0},time,'>',function(){this.attr({text:name+'\n'+percent+'%'}).animate({opacity:1},time,'<')}).toFront()},hideSkill:function(self){var $this=self,self=this,time=250;$this.stop().animate({'stroke-width':28,opacity:1},time*4,'elastic');self.title.stop().animate({opacity:0},time,'>',function(){self.title.attr({text:self.config.defaultText}).animate({opacity:1},time,'<')})}}
var init=function init(){if(typeof Raphael==='undefined')return;$('.mk-skill-diagram').each(function(){var diagram=new SkillDiagram(this);diagram.init()})}
init();$(window).on('vc_reload',init)})(jQuery);(function($){'use strict';$('[data-js="tab-delegation"]').each(tabDelegation);function tabDelegation(){var $this=$(this),data=$this.data();if(data.tab)$this.on('click','a',openInTab)}
function openInTab(e){e.preventDefault();var $this=$(this),url=$this.attr('href');window.open(url,'_blank')}})(jQuery);(function($){'use strict';var init=function init(){var Toggle=function(el){var that=this,$el=$(el);this.$el=$el;$el.toggle(that.open.bind(that),that.close.bind(that))};Toggle.prototype.dom={pane:'mk-toggle-pane',active:'active-toggle'};Toggle.prototype.open=function(){var $this=this.$el;$this.addClass(this.dom.active);$this.siblings('.'+this.dom.pane).slideDown(200)};Toggle.prototype.close=function(){var $this=this.$el;$this.removeClass(this.dom.active);$this.siblings('.'+this.dom.pane).slideUp(200)};var $toggle=$('.mk-toggle-title');if(!$toggle.length)return;$toggle.each(function(){new Toggle(this)})}
$(window).on('load vc_reload',init)})(jQuery);window.ajaxInit=function(){mk_lightbox_init();mk_click_events();mk_social_share_global();mk_gallery();loop_audio_init()};window.ajaxDelayedInit=function(){mk_flexslider_init()};$(document).ready(function(){mk_lightbox_init();mk_login_form();mk_backgrounds_parallax();mk_flexslider_init();mk_event_countdown();mk_skill_meter();mk_milestone();mk_ajax_search();mk_hover_events();mk_portfolio_ajax();product_loop_add_cart();mk_portfolio_widget();mk_contact_form();mk_blog_carousel();mk_header_searchform();mk_click_events();mk_text_typer();mk_tab_slider_func();$(window).on('load',function(){mk_unfold_footer();mk_tabs();mk_accordion_toggles_tooltip();mk_gallery();mk_theatre_responsive_calculator();mk_tabs_responsive();mk_start_tour_resize();mk_header_social_resize();mk_page_section_social_video_bg();loop_audio_init();mk_one_page_scroller();mkPositionSidebar();setTimeout(function(){mk_mobile_tablet_responsive_calculator()},300);console.log("ready for rock")});var onDebouncedResize=function(){mk_theatre_responsive_calculator();mk_mobile_tablet_responsive_calculator();mk_tabs_responsive();mk_accordion_toggles_tooltip();mk_start_tour_resize();mk_header_social_resize();setTimeout(function(){mk_unfold_footer()},300)};var debounceResize=null;$(window).on("resize",function(){if(debounceResize!==null){clearTimeout(debounceResize)}
debounceResize=setTimeout(onDebouncedResize,300)});var onDebouncedScroll=function(){mk_skill_meter();mk_milestone()};var debounceScroll=null;$(window).on("scroll",function(){if(debounceScroll!==null){clearTimeout(debounceScroll)}
debounceScroll=setTimeout(onDebouncedScroll,100)});if(MK.utils.isMobile()){$('body').addClass('no-transform')}});$(window).on("vc_reload",function(){mk_flexslider_init();loop_audio_init();mk_tab_slider_func();mk_event_countdown();videoLoadState();mk_page_section_social_video_bg();mk_hover_events();setTimeout(function(){mkPositionSidebar()},200)});$(document).on('click','.vc_control-btn-delete',function(){$(window).trigger('vc_reload')});$(document).on('sortupdate','.ui-sortable',function(){$(window).trigger('vc_reload')});function mk_text_typer(){"use strict";$('[data-typer-targets]').each(function(){var that=this;MK.core.loadDependencies([MK.core.path.plugins+'jquery.typed.js'],function(){var $this=$(that),$first_string=[$this.text()],$rest_strings=$this.attr('data-typer-targets').split(','),$strings=$first_string.concat($rest_strings);$this.text('');$this.typed({strings:$strings,typeSpeed:30,backDelay:1200,loop:!0,loopCount:!1,})})})}
function mk_tab_slider_func(){"use strict";$('.mk-tab-slider').each(function(){var that=this;MK.core.loadDependencies([MK.core.path.plugins+'jquery.swiper.js'],function(){var $this=$(that),id=$this.data('id'),$autoplayTime=$this.data('autoplay'),$content=$('.mk-slider-content');var mk_tab_slider=$this.swiper({wrapperClass:'mk-tab-slider-wrapper',slideClass:'mk-tab-slider-item',calculateHeight:!0,speed:500,autoplay:isTest?!1:$autoplayTime,onSlideChangeStart:function(){$('.mk-tab-slider-nav[data-id="'+id+'"]').find(".active").removeClass('active')
$('.mk-tab-slider-nav[data-id="'+id+'"]').find("a").eq(mk_tab_slider.activeIndex).addClass('active')}});function repaintFirefox(){$content.css('display','block');setTimeout(function(){mk_tab_slider.reInit();$content.css('display','table')},100)}
$('.mk-tab-slider-nav[data-id="'+id+'"]').find("a").first().addClass('active');$('.mk-tab-slider-nav[data-id="'+id+'"]').find("a").on('touchstart mousedown',function(e){e.preventDefault()
$('.mk-tab-slider-nav[data-id="'+id+'"]').find(".active").removeClass('active')
$(this).addClass('active')
mk_tab_slider.swipeTo($(this).index())});$('.mk-tab-slider-nav[data-id="'+id+'"]').find("a").click(function(e){e.preventDefault()});repaintFirefox();$(window).on('resize',repaintFirefox)})})}
function mk_one_page_scroller(){"use strict";$('.mk-edge-one-pager').each(function(){var self=this;MK.core.loadDependencies([MK.core.path.plugins+'jquery.fullpage.js'],function(){var $this=$(self),anchorArr=[];$this.find('.section').each(function(){anchorArr.push($(this).attr('data-title'))});var scrollable=!0;$this.find('.section').each(function(){var $section=$(this),$content=$section.find('.edge-slide-content'),sectionHeight=$section.height(),contentHeight=$content.innerHeight();if((contentHeight+30)>$(window).height()){scrollable=!1}});if(!scrollable){$this.find('.section').each(function(){var $section=$(this);$section.addClass('active').css({'padding-bottom':'50px'})})}
if(scrollable){$this.fullpage({verticalCentered:!1,resize:!0,slidesColor:['#ccc','#fff'],anchors:anchorArr,scrollingSpeed:600,easing:'easeInQuart',menu:!1,navigation:!0,navigationPosition:'right',navigationTooltips:!1,slidesNavigation:!0,slidesNavPosition:'bottom',loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!0,paddingTop:0,paddingBottom:0,normalScrollElements:'.mk-header, .mk-responsive-wrap',normalScrollElementTouchThreshold:5,keyboardScrolling:!0,touchSensitivity:15,continuousVertical:!1,animateAnchor:!0,onLeave:function(index,nextIndex,direction){var currentSkin=$this.find('.one-pager-slide').eq(nextIndex-1).attr('data-header-skin');MK.utils.eventManager.publish('firstElSkinChange',currentSkin);$('#fullPage-nav').removeClass('light-skin dark-skin').addClass(currentSkin+'-skin')},afterRender:function(){var $nav=$('#fullPage-nav');setTimeout(function(){var currentSkin=$this.find('.one-pager-slide').eq(0).attr('data-header-skin');MK.utils.eventManager.publish('firstElSkinChange',currentSkin);if($nav.length)$nav.removeClass('light-skin dark-skin').addClass(currentSkin+'-skin')},300);var $slide=$this.find('.section'),headerHeight=MK.val.offsetHeaderHeight(0),windowHeight=$(window).height();$slide.height(windowHeight-headerHeight);if($nav.length){$nav.css({'top':'calc(50% + '+(headerHeight/2)+'px)','marginTop':0});var style=$this.attr('data-pagination');$nav.addClass('pagination-'+style)}
setTimeout(mk_one_pager_resposnive,1000)},afterResize:function(){var $slide=$this.find('.section'),headerHeight=MK.val.offsetHeaderHeight(0),windowHeight=$(window).height();$slide.height(windowHeight-headerHeight);$('#fullPage-nav').css({'top':'calc(50% + '+(headerHeight/2)+'px)','marginTop':0});setTimeout(mk_one_pager_resposnive,1000);console.log('Reposition pager content.')},})}
function swipeTo(href,e){href='_'+href;if(!~href.indexOf('#'))return;var section=href.split('#')[1];if(~anchorArr.indexOf(section)){if(typeof e!=='undefined')e.preventDefault();if(scrollable)$.fn.fullpage.moveTo(section);else MK.utils.scrollToAnchor('[data-title="'+section+'"]')}}
var loc=window.location;if(loc.hash)swipeTo(loc.hash);$(document).on('click','a',function(e){var $link=$(e.currentTarget);swipeTo($link.attr('href'),e)})})})}
function mk_one_pager_resposnive(){"use strict";$('.mk-edge-one-pager').each(function(){var $pager=$(this),headerHeight=MK.val.offsetHeaderHeight(0),windowHeight=$(window).height()-headerHeight;$pager.find('.one-pager-slide').each(function(){var $slide=$(this),$content=$slide.find('.edge-slide-content');if($slide.hasClass('left_center')||$slide.hasClass('center_center')||$slide.hasClass('right_center')){var contentHeight=$content.height(),distanceFromTop=(windowHeight-contentHeight)/2;distanceFromTop=(distanceFromTop<50)?50+headerHeight:distanceFromTop;$content.css('marginTop',distanceFromTop)}
if($slide.hasClass('left_bottom')||$slide.hasClass('center_bottom')||$slide.hasClass('right_bottom')){var distanceFromTop=windowHeight-$content.height()-90;$content.css('marginTop',(distanceFromTop))}});var $row=$pager.parents('.vc_row.vc_row-fluid.mk-fullwidth-true');if($row.length>0){var $wrapper=$('.mk-main-wrapper-holder');var $grid=$row.children('.mk-grid');var rowWidth=$row.width();var wrapperWidth=$wrapper.width();if(rowWidth>=wrapperWidth||$grid.length>0){return}
var $content=$wrapper.find('.theme-content');var oriPos=$content.position();var oriPadLeft=$content.css('padding-left');var oriLeft=parseInt(oriPos.left)+parseInt(oriPadLeft);if(wrapperWidth<=0||oriLeft<=0){return}
$row.css({'width':wrapperWidth,'left':oriLeft*-1,})}})}
function mk_gallery(){"use strict";$('.mk-gallery .mk-gallery-item.hover-overlay_layer .item-holder').each(function(){var itemHolder=$(this),galleryDesc=itemHolder.find('.gallery-desc');function updatePosition(){var parentHeight=itemHolder.outerHeight(),contentHeight=galleryDesc.innerHeight();var paddingVal=(parentHeight-contentHeight)/2;galleryDesc.css({'top':paddingVal,})}
updatePosition();$(window).on('resize',function(){setTimeout(function(){updatePosition()},1000)})});if($(window).width()<=1024){$('.mk-gallery .mk-gallery-item').on('click',function(e){var clicks=$(this).data('clicks');if(clicks){$(this).toggleClass('hover-state')}else{$(this).toggleClass('hover-state')}
$(this).data("clicks",!clicks)})}}
function mk_theatre_responsive_calculator(){var $laptopContainer=$(".laptop-theatre-slider");var $computerContainer=$(".desktop-theatre-slider");$laptopContainer.each(function(){var $this=$(this),$window=$(window),$windowWidth=$window.outerWidth(),$windowHeight=$window.outerHeight(),$width=$this.outerWidth(),$height=$this.outerHeight(),$paddingTop=38,$paddingRight=143,$paddingBottom=78,$paddingLeft=143;var $player=$this.find('.player-container');if($windowWidth>$width){$player.css({'padding-left':parseInt(($width*$paddingLeft)/1200),'padding-right':parseInt(($width*$paddingRight)/1200),'padding-top':parseInt(($height*$paddingTop)/690),'padding-bottom':parseInt(($height*$paddingBottom)/690),})}});$computerContainer.each(function(){var $this=$(this),$window=$(window),$windowWidth=$window.outerWidth(),$windowHeight=$window.outerHeight(),$width=$this.outerWidth(),$height=$this.outerHeight(),$paddingTop=60,$paddingRight=52,$paddingBottom=290,$paddingLeft=49;var $player=$this.find('.player-container');if($windowWidth>$width){$player.css({'padding-left':parseInt(($width*$paddingLeft)/1200),'padding-right':parseInt(($width*$paddingRight)/1200),'padding-top':parseInt(($height*$paddingTop)/969),'padding-bottom':parseInt(($height*$paddingBottom)/969),})}})}
function mk_mobile_tablet_responsive_calculator(){var $laptopSlideshow=$(".mk-laptop-slideshow-shortcode");var $lcdSlideshow=$(".mk-lcd-slideshow");if($.exists(".mk-laptop-slideshow-shortcode")){$laptopSlideshow.each(function(){var $this=$(this),$window=$(window),$windowWidth=$window.outerWidth(),$windowHeight=$window.outerHeight(),$width=$this.outerWidth(),$height=$this.outerHeight(),$paddingTop=28,$paddingRight=102,$paddingBottom=52,$paddingLeft=102;var $player=$this.find(".slideshow-container");$player.css({"padding-left":parseInt(($width*$paddingLeft)/836),"padding-right":parseInt(($width*$paddingRight)/836),"padding-top":parseInt(($height*$paddingTop)/481),"padding-bottom":parseInt(($height*$paddingBottom)/481),})})}
if($.exists(".mk-lcd-slideshow")){$lcdSlideshow.each(function(){var $this=$(this),$window=$(window),$windowWidth=$window.outerWidth(),$windowHeight=$window.outerHeight(),$width=$this.outerWidth(),$height=$this.outerHeight(),$paddingTop=35,$paddingRight=39,$paddingBottom=213,$paddingLeft=36;var $player=$this.find(".slideshow-container");$player.css({"padding-left":parseInt(($width*$paddingLeft)/886),"padding-right":parseInt(($width*$paddingRight)/886),"padding-top":parseInt(($height*$paddingTop)/713),"padding-bottom":parseInt(($height*$paddingBottom)/713),})})}}
function mk_start_tour_resize(){$('.mk-header-start-tour').each(function(){var $windowWidth=$(document).width(),$this=$(this),$linkWidth=$this.width()+15,$padding=($windowWidth-mk_responsive_nav_width)/2;function updateStartTour(){if($windowWidth<mk_responsive_nav_width){$this.removeClass('hidden');$this.addClass('show')}else{if($padding<$linkWidth){$this.removeClass('show');$this.addClass('hidden')}else{$this.removeClass('hidden');$this.addClass('show')}}}
setTimeout(function(){updateStartTour()},300)})}
function mk_header_social_resize(){$('.mk-header-social.header-section').each(function(){var $windowWidth=$(document).width(),$this=$(this),$linkWidth=$this.width()+15,$padding=($windowWidth-mk_responsive_nav_width)/2;function updateStartTour(){if($windowWidth<mk_responsive_nav_width){$this.removeClass('hidden');$this.addClass('show')}else{if($padding<$linkWidth){$this.removeClass('show');$this.addClass('hidden')}else{$this.removeClass('hidden');$this.addClass('show')}}}
setTimeout(function(){updateStartTour()},300)})}
function mk_page_section_social_video_bg(){$(".mk-page-section.social-hosted").each(function(){var $container=$(this),$sound=$container.data('sound'),$source=$container.data('source'),player,timer=1000;if($('body').hasClass('.compose-mode')){timer=2000}
if($source=='youtube'){var youtube=$container.find('iframe')[0];try{player=new YT.Player(youtube,{events:{'onReady':function(){player.playVideo();if($sound==!1){player.mute()}}}})}catch(e){console.log(e)}}
if($source=='vimeo'){var vimeo=$container.find('iframe')[0];player=$f(vimeo);setTimeout(function(){player.api('play');if($sound===!1){player.api('setVolume',0)}},timer)}})}
function videoLoadState(){$('.mk-section-video video').each(function(){var mkVideo=this;mkVideo.play();this.onload=fire();function fire(){setTimeout(function(){$(mkVideo).animate({'opacity':1},300)},1000)}})}
videoLoadState();(function($){$(window).on('load vc_reload',initialize);function initialize(){var $gmap=$('.gmap_widget');if($gmap.length&&typeof google!=='undefined')$gmap.each(run)}
function run(){var $mapHolder=$(this);var myLatlng=new google.maps.LatLng($mapHolder.data('latitude'),$mapHolder.data('longitude'));var mapOptions=$mapHolder.data('options');mapOptions.mapTypeId=google.maps.MapTypeId.ROADMAP;mapOptions.center=myLatlng;var map=new google.maps.Map(this,mapOptions);new google.maps.Marker({position:myLatlng,map:map})}}(jQuery));(function($){$(window).on('load',function(){var $feeds=$('.mk-instagram-feeds');if($feeds.length)$feeds.each(run)});function run(){var options=$(this).data('options');options.template='<a class="featured-image '+options.tmp_col+'-columns" href="{{link}}" target="_'+options.tmp_target+'"><div class="item-holder"><img src="{{image}}" /><div class="image-hover-overlay"></div></div></a>';var feed=new Instafeed(options);feed.run()}}(jQuery));(function($){$(window).on('load',function(){setTimeout(function(){$('.chrome-flipbox-backface-fix').removeClass('chrome-flipbox-backface-fix')},300)})}(jQuery));(function($){$(window).on('load',function(){$('.vc_tta-tab a').on('click',function(){setTimeout(function(){$(window).trigger('resize')},100)})})}(jQuery));(function($){$(window).on('load',function(){$('#mk-vm-menu .menu-item-has-children, #mk-vm-menu .mk-vm-back').on('mouseenter',function(){var $header_inner=$(this).closest('.mk-header-inner'),$header_inner_height=$header_inner.outerHeight(),$header_bg=$header_inner.find('.mk-header-bg'),total_height=0;$header_bg.css('height','100%');setTimeout(function(){$header_inner.children(':visible').each(function(){total_height+=$(this).outerHeight(!0)});total_height-=$header_bg.height();if(total_height<$header_inner_height){$header_bg.css('height','100%')}else{$header_bg.css('height',total_height+'px')}},600)})})}(jQuery));(function($){$(window).on('load',function(){var $variations_form=$('.variations_form');if($variations_form.length){var $varitions_selects=$variations_form.find('.variations').find('.value').find('select');$varitions_selects.on('change',function(){var $all_img_container=$('.mk-product-image .mk-woocommerce-main-image');if($all_img_container.length){$($all_img_container).each(set_lightbox_href)}});$varitions_selects.trigger('change')}});function set_lightbox_href(){var $product_img=$(this).find('img'),$lightbox=$(this).find('.mk-lightbox');setTimeout(function(){var image_url=$product_img.attr('src'),image_suffix=image_url.substr(image_url.lastIndexOf('.')-image_url.length),image_url=image_url.slice(0,image_url.lastIndexOf('-'));$lightbox.attr('href',image_url+image_suffix)},300)}}(jQuery));(function($){if(MK.utils.isMobile()){$('.mk-section-video video').remove()}}(jQuery));(function($){$(window).on('load',function(){$(document).on('yith-wcan-ajax-filtered yith_infs_added_elem yith-wcan-ajax-reset-filtered',function(){setTimeout(function(){MK.utils.eventManager.publish('ajaxLoaded');MK.core.initAll(document)},1000)});$(document).on('yith-wcan-ajax-filtered yith-wcan-ajax-reset-filtered',function(){setTimeout(function(){$('.woocommerce-ordering').on('change','select.orderby',function(){$(this).closest('form').submit()})},1000)})})}(jQuery));!function(e){var a=window.location,n=a.hash;if(n.length&&n.substring(1).length){var hSuf=n.substring(1).replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g,"\\$&");var r=e(".vc_row, .mk-main-wrapper-holder, .mk-page-section, #comments"),t=r.filter("#"+hSuf);if(!t.length)return;n=n.replace("!loading","");var i=n+"!loading";a.hash=i}}(jQuery);function mkPositionSidebar(){var themeContent=$('.theme-content'),lastFullWidthChild=themeContent.find('.vc_row-full-width').last(),top,sidebar=$('#theme-page > .mk-main-wrapper-holder > .theme-page-wrapper > #mk-sidebar');if(!lastFullWidthChild.length){sidebar.removeAttr('style');return}
top=lastFullWidthChild.offset().top-themeContent.offset().top;sidebar.css('padding-top',top)}
function mk_accordion_toggles_tooltip(){"use strict";$('.box-close-btn').on('click',function(){$(this).parent().fadeOut(300);return!1})}
function mk_portfolio_ajax(){"use strict";var headerHeight=0;if($.exists("#wpadminbar")){headerHeight+=$("#wpadminbar").height()}
if(!$.exists('.mk-vm-menuwrapper')){headerHeight+=parseInt($('.mk-header').attr('data-sticky-height'))}
function init(){var $portfolio=$('.portfolio-grid.portfolio-ajax-enabled');if(!$portfolio.length)return;MK.core.loadDependencies([MK.core.path.plugins+'jquery.ajax.portfolio.js'],function(){setTimeout(function(){$portfolio.each(function(){$(this).ajaxPortfolio({extraOffset:headerHeight})})},100)})}
init();MK.utils.eventManager.subscribe('ajaxLoaded',init)}
function mk_ajax_search(){"use strict";if(mk_ajax_search_option!=="beside_nav"){return}
var minimumLengthToSearch=3;var $mkAjaxSearchInput=$('#mk-ajax-search-input');var security=$mkAjaxSearchInput.siblings('input[name="security"]').val();var wpHttpReferer=$mkAjaxSearchInput.siblings('input[name="_wp_http_referer"]').val();var querySpliter=(ajaxurl.indexOf('?')>-1)?'&':'?';var ul=document.getElementById('mk-nav-search-result');var searchTerm;var requestCounter=0;var responseCounter=0;$mkAjaxSearchInput.on('paste input propertychange',onSearchBoxInput);function onSearchBoxInput(e){var target=e.target||e.srcElement;var newValue=target.value;if(searchTerm!==newValue){searchTerm=newValue;ul.innerHTML='';if(searchTerm.length>=minimumLengthToSearch){$mkAjaxSearchInput.addClass('ajax-searching');requestCounter++;$.getJSON(ajaxurl+querySpliter+'callback=?&action=mk_ajax_search&security='+security+'&_wp_http_referer='+wpHttpReferer+'&term='+searchTerm).done(showSearchResult).fail(showErrorMessage)}}}
function showSearchResult(data){responseCounter++;if(isCorrectResponse()){if(data.length>0){for(var i=0;i<data.length;i++){var item=data[i];$('<li>').append('<a href="'+item.link+'">'+item.image+'<span class="search-title">'+item.label+'</span><span class="search-date">'+item.date+'</span></a>').appendTo(ul)}}else{ul.innerHTML='<li class="mk-nav-search-result-zero">No Result.</li>'}
$mkAjaxSearchInput.parent('form').removeClass('ajax-searching').addClass('ajax-search-complete')}}
function showErrorMessage(){responseCounter++;if(isCorrectResponse()){ul.innerHTML='<li class="mk-nav-search-error-message">Can not search! Please try again.</li>'}}
function isCorrectResponse(){return requestCounter===responseCounter}}
function mk_backgrounds_parallax(){"use strict";if(mk_header_parallax==!0){$('.mk-header-bg').addClass('mk-parallax-enabled')}
if(mk_body_parallax==!0){$('body').addClass('mk-parallax-enabled')}
if(mk_banner_parallax==!0){$('.mk-header').addClass('mk-parallax-enabled')}
if(mk_footer_parallax==!0){$('#mk-footer').addClass('mk-parallax-enabled')}
$('.mk-parallax-enabled').each(function(){var $this=$(this);if(!MK.utils.isMobile()){MK.core.loadDependencies([MK.core.path.plugins+'jquery.parallax.js'],function(){$this.parallax("49%",0.3)})}});$('.mk-fullwidth-slideshow.parallax-slideshow').each(function(){var $this=$(this);if(!MK.utils.isMobile()){MK.core.loadDependencies([MK.core.path.plugins+'jquery.parallax.js'],function(){var speed_factor=$this.attr('data-speedFactor');$this.parallax("49%",speed_factor)})}})}
function loop_audio_init(){if($.exists('.jp-jplayer')){$('.jp-jplayer.mk-blog-audio').each(function(){var $this=$(this);MK.core.loadDependencies([MK.core.path.plugins+'jquery.jplayer.js'],function(){var css_selector_ancestor="#"+$this.siblings('.jp-audio').attr('id');var ogg_file,mp3_file,mk_theme_js_path;ogg_file=$this.attr('data-ogg');mp3_file=$this.attr('data-mp3');$this.jPlayer({ready:function(){$this.jPlayer("setMedia",{mp3:mp3_file,ogg:ogg_file})},play:function(){$this.jPlayer("pauseOthers")},swfPath:mk_theme_js_path,supplied:"mp3, ogg",cssSelectorAncestor:css_selector_ancestor,wmode:"window"})})})}}
function mk_blog_carousel(){"use strict";if(!$.exists('.mk-blog-showcase')){return}
$('.mk-blog-showcase ul li').each(function(){$(this).on('hover',function(){$(this).siblings('li').removeClass('mk-blog-first-el').end().addClass('mk-blog-first-el')})})}
function mk_contact_form(){"use strict";var mkContactForms=document.getElementsByClassName('mk-contact-form');if(mkContactForms.length===0){return}
var captchaImageHolder=$('.captcha-image-holder');var activeClassName='is-active';var invalidClassName='mk-invalid';for(var i=0;i<mkContactForms.length;i++){initializeForm(mkContactForms[i],activeClassName,invalidClassName)}
if(captchaImageHolder.length>0){$(window).on('load',initializeCaptchas)}
function initializeForm(form,activeClassName,invalidClassName){var inputs=getFormInputs(form);for(var i=0;i<inputs.length;i++){markActiveClass(inputs[i])}
form.addEventListener('submit',function(e){validateForm(e,invalidClassName)});function setActiveClass(){addClass(this.parentNode,activeClassName)}
function unsetActiveClass(){if(this.value===''){removeClass(this.parentNode,activeClassName)}}
function markActiveClass(input){input.addEventListener('focus',setActiveClass);input.addEventListener('blur',unsetActiveClass)}}
function validateForm(e,invalidClassName){e.preventDefault();var form=e.target||e.srcElement;var inputs=getFormInputs(form);var isValidForm=!0;var hasCaptchaField=!1;for(var i=0;i<inputs.length;i++){var input=inputs[i];input.value=String(input.value).trim();switch(input.type){case 'hidden':break;case 'checkbox':isValidForm=validateCheckBox(input,invalidClassName)&&isValidForm;break;case 'email':isValidForm=validateEmail(input,invalidClassName)&&isValidForm;break;case 'textarea':isValidForm=validateText(input,invalidClassName)&&isValidForm;break;case 'text':if(input.dataset.type==='captcha'){isValidForm=validateText(input,invalidClassName)&&isValidForm;hasCaptchaField=!0}else if(input.dataset.type==='email'){isValidForm=validateEmail(input,invalidClassName)&&isValidForm}else{isValidForm=validateText(input,invalidClassName)&&isValidForm}
break;default:console.warn('Implement validation for '+input.name+':'+input.type);break}}
if(isValidForm){if(hasCaptchaField){validateCaptcha(form,invalidClassName,sendForm)}else{sendForm(form)}}}
function validateCaptcha(form,invalidClassName,captchaIsValidCallback){var input=form.querySelectorAll('[data-type="captcha"]')[0];if(input.value.length===0){addClass(input,invalidClassName);return!1}else{window.get.captcha(input.value).done(function(data){loadCaptcha();input.value='';if(data!=='ok'){addClass(input,invalidClassName);addClass(input,'contact-captcha-invalid');removeClass(input,'contact-captcha-valid');input.placeholder=mk_captcha_invalid_txt}else{removeClass(input,invalidClassName);removeClass(input,'contact-captcha-invalid');addClass(input,'contact-captcha-valid');input.placeholder=mk_captcha_correct_txt;captchaIsValidCallback(form)}})}}
function sendForm(form){var $form=$(form);var data=getFormData(form);progressButton.loader($form);$.post(ajaxurl,data,function(response){var res=JSON.parse(response);if(res.action_Status){progressButton.success($form);$form.find('.text-input').val('');$form.find('textarea').val('');$form.find('input[type=checkbox]').attr("checked",!1);$form.find('.contact-form-message').slideDown().addClass('state-success').html(res.message);setTimeout(function(){$form.find('.contact-form-message').slideUp()},5000)}else{progressButton.error($form);$form.find('.contact-form-message').removeClass('state-success').html(res.message)}})}
function initializeCaptchas(){var captchaChangeImageButtons=document.getElementsByClassName('captcha-change-image');for(var i=0;i<captchaChangeImageButtons.length;i++){captchaChangeImageButtons[i].addEventListener('click',loadCaptcha)}}
function loadCaptcha(e){if(e){e.preventDefault()}
$.post(ajaxurl,{action:'mk_create_captcha_image'},appendImage);function appendImage(captchaImageURL){if(captchaImageHolder.find('.captcha-image').length===0){captchaImageHolder.html('<img src="'+captchaImageURL+'" class="captcha-image" alt="captcha txt">')}else{captchaImageHolder.find('.captcha-image').attr("src",captchaImageURL+'?'+new Date().getTime())}}}
function getFormInputs(form){return form.querySelectorAll('input,textarea')}
function getFormData(form){var data={action:'mk_contact_form'};var inputs=getFormInputs(form);for(var i=0;i<inputs.length;i++){data[inputs[i].name]=inputs[i].value}
return data}}
function mk_login_form(){$('form.mk-login-form').each(function(){var $this=$(this);$this.on('submit',function(e){$('p.mk-login-status',$this).show().text(ajax_login_object.loadingmessage);$.ajax({type:'POST',dataType:'json',url:ajax_login_object.ajaxurl,data:{'action':'ajaxlogin','username':$('#username',$this).val(),'password':$('#password',$this).val(),'security':$('#security',$this).val()},success:function(data){$('p.mk-login-status',$this).text(data.message);if(data.loggedin===!0){document.location.href=ajax_login_object.redirecturl}}});e.preventDefault()})})}
var progressButton={loader:function(form){MK.core.loadDependencies([MK.core.path.plugins+'tweenmax.js'],function(){var $form=form,progressBar=$form.find(".mk-progress-button .mk-progress-inner"),buttonText=$form.find(".mk-progress-button .mk-progress-button-content"),progressButton=new TimelineLite();progressButton.to(progressBar,0,{width:"100%",scaleX:0,scaleY:1}).to(buttonText,.3,{y:-5}).to(progressBar,1.5,{scaleX:1,ease:Power2.easeInOut},"-=.1").to(buttonText,.3,{y:0}).to(progressBar,.3,{scaleY:0})})},success:function(form){MK.core.loadDependencies([MK.core.path.plugins+'tweenmax.js'],function(){var $form=form,buttonText=$form.find(".mk-button .mk-progress-button-content, .mk-contact-button .mk-progress-button-content"),successIcon=$form.find(".mk-progress-button .state-success"),progressButtonSuccess=new TimelineLite({onComplete:hideSuccessMessage});progressButtonSuccess.to(buttonText,.3,{paddingRight:20,ease:Power2.easeInOut},"+=1").to(successIcon,.3,{opacity:1}).to(successIcon,2,{opacity:1});function hideSuccessMessage(){progressButtonSuccess.reverse()}})},error:function(form){MK.core.loadDependencies([MK.core.path.plugins+'tweenmax.js'],function(){var $form=form,buttonText=$form.find(".mk-button .mk-progress-button-content, .mk-contact-button .mk-progress-button-content"),errorIcon=$form.find(".mk-progress-button .state-error"),progressButtonError=new TimelineLite({onComplete:hideErrorMessage});progressButtonError.to(buttonText,.3,{paddingRight:20},"+=1").to(errorIcon,.3,{opacity:1}).to(errorIcon,2,{opacity:1});function hideErrorMessage(){progressButtonError.reverse()}})}};function mk_click_events(){"use strict";var eventtype='click';$(".mk-header-login, .mk-header-signup, .mk-side-dashboard, .mk-quick-contact-wrapper, .mk-dashboard-trigger, .blog-share-container, .news-share-buttons, .main-nav-side-search, #mk-fullscreen-search-wrapper, #fullscreen-navigation").on(eventtype,function(event){if(event.stopPropagation){event.stopPropagation()}else if(window.event){window.event.cancelBubble=!0}});$("html").on(eventtype,function(){$(".mk-login-register, .mk-header-subscribe, #mk-quick-contact, .single-share-buttons, .single-share-box, .blog-social-share, .news-share-buttons, #mk-nav-search-wrapper").fadeOut(300);$('.mk-quick-contact-link').removeClass('quick-contact-active')});$('.mk-fullscreen-search-overlay').on(eventtype,function(){$(this).removeClass('mk-fullscreen-search-overlay-show')});$('.mk-forget-password').on(eventtype,function(){$('.mk-forget-panel').siblings().hide().end().show()});$('.mk-create-account').on(eventtype,function(){$('#mk-register-panel').siblings().hide().end().show()});$('.mk-return-login').on(eventtype,function(){$('#mk-login-panel').siblings().hide().end().show()});$('.mk-quick-contact-link').on(eventtype,function(){var $this=$(this),$quickContact=$('#mk-quick-contact');if(!$this.hasClass('quick-contact-active')){$quickContact.addClass('quick-contact-anim').fadeIn(250);$this.addClass('quick-contact-active')}else{$quickContact.removeClass('quick-contact-anim').fadeOut(100);$this.removeClass('quick-contact-active')}
return!1})}
function mk_social_share_global(){"use strict";var eventtype='click';$('.twitter-share').on(eventtype,function(){var $this=$(this),$url=$this.attr('data-url'),$title=$this.attr('data-title');window.open('http://twitter.com/intent/tweet?text='+$title+' '+$url,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1});$('.pinterest-share').on(eventtype,function(){var $this=$(this),$url=$this.attr('data-url'),$title=$this.attr('data-title'),$image=$this.attr('data-image');window.open('http://pinterest.com/pin/create/button/?url='+$url+'&media='+$image+'&description='+$title,"twitterWindow","height=320,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1});$('.facebook-share').on(eventtype,function(){var $url=$(this).attr('data-url');window.open('https://www.facebook.com/sharer/sharer.php?u='+$url,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1});$('.googleplus-share').on(eventtype,function(){var $url=$(this).attr('data-url');window.open('https://plus.google.com/share?url='+$url,"googlePlusWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1});$('.linkedin-share').on(eventtype,function(){var $this=$(this),$url=$this.attr('data-url'),$title=$this.attr('data-title'),$desc=$this.attr('data-desc');window.open('http://www.linkedin.com/shareArticle?mini=true&url='+$url+'&title='+$title+'&summary='+$desc,"linkedInWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1})}
function mk_event_countdown(){if($.exists('.mk-event-countdown')){MK.core.loadDependencies([MK.core.path.plugins+'jquery.countdown.js'],function(){$('.mk-event-countdown').each(function(){if(isTest)return;var $this=$(this),$date=$this.attr('data-date'),$offset=$this.attr('data-offset');$this.downCount({date:$date,offset:$offset})})})}}
function mk_flexslider_init(){var $lcd=$('.mk-lcd-slideshow'),$laptop=$('.mk-laptop-slideshow-shortcode');if($lcd.length)$lcd.find('.mk-lcd-image').fadeIn();if($laptop.length)$laptop.find(".mk-laptop-image").fadeIn();$('.js-flexslider').each(function(){if($(this).parents('.mk-tabs').length||$(this).parents('.mk-accordion').length){$(this).removeData("flexslider")}
var $this=$(this),$selector=$this.attr('data-selector'),$animation=$this.attr('data-animation'),$easing=$this.attr('data-easing'),$direction=$this.attr('data-direction'),$smoothHeight=$this.attr('data-smoothHeight')=="true"?!0:!1,$slideshowSpeed=$this.attr('data-slideshowSpeed'),$animationSpeed=$this.attr('data-animationSpeed'),$controlNav=$this.attr('data-controlNav')=="true"?!0:!1,$directionNav=$this.attr('data-directionNav')=="true"?!0:!1,$pauseOnHover=$this.attr('data-pauseOnHover')=="true"?!0:!1,$isCarousel=$this.attr('data-isCarousel')=="true"?!0:!1;if($selector!==undefined){var $selector_class=$selector}else{var $selector_class=".mk-flex-slides > li"}
if($isCarousel===!0){var $itemWidth=parseInt($this.attr('data-itemWidth')),$itemMargin=parseInt($this.attr('data-itemMargin')),$minItems=parseInt($this.attr('data-minItems')),$maxItems=parseInt($this.attr('data-maxItems')),$move=parseInt($this.attr('data-move'))}else{var $itemWidth=$itemMargin=$minItems=$maxItems=$move=0}
MK.core.loadDependencies([MK.core.path.plugins+'jquery.flexslider.js'],function(){$this.flexslider({selector:$selector_class,animation:$animation,easing:$easing,direction:$direction,smoothHeight:$smoothHeight,slideshow:!isTest,slideshowSpeed:$slideshowSpeed,animationSpeed:$animationSpeed,controlNav:$controlNav,directionNav:$directionNav,pauseOnHover:$pauseOnHover,prevText:"",nextText:"",itemWidth:$itemWidth,itemMargin:$itemMargin,minItems:$minItems,maxItems:$maxItems,move:$move})})})}
function mk_header_searchform(){$('.mk-search-trigger').click(function(){setTimeout(function(){$('#mk-ajax-search-input').focus()},500)});"use strict";$('.mk-header-toolbar .mk-header-searchform .text-input').on('focus',function(){if($('.mk-header-toolbar .mk-header-searchform .text-input').hasClass('on-close-state')){$('.mk-header-toolbar .mk-header-searchform .text-input').removeClass('on-close-state').animate({'width':'200px'},200);return!1}});$(".mk-header-toolbar .mk-header-searchform").click(function(event){if(event.stopPropagation){event.stopPropagation()}else if(window.event){window.event.cancelBubble=!0}});$("html").click(function(){$(this).find(".mk-header-toolbar .mk-header-searchform .text-input").addClass('on-close-state').animate({'width':90},300)});if(MK.utils.browser.name==='Edge'){$('#mk-fullscreen-search-input').on('keydown',function(e){if(e.which==13){e.preventDefault();$('#mk-fullscreen-searchform').submit()}})}}
function mk_hover_events(){"use strict";$('.shopping-cart-header').hover(function(){$(this).find('.mk-shopping-cart-box').stop(!0,!0).fadeIn(250)},function(){$(this).find('.mk-shopping-cart-box').stop(!0,!0).fadeOut(250)});$('.widget-sub-navigation > ul > li, .widget_nav_menu ul.menu > li, .widget_product_categories ul > .cat-item').each(function(){var $this=$(this),$subLevel=$this.find('ul').first();if($this.hasClass('page_item_has_children')||$this.hasClass('menu-item-has-children')||$this.hasClass('cat-parent')){$this.on('click',function(){if($this.hasClass('toggle-active')){$subLevel.stop(!0,!0).slideUp(700);$this.removeClass('toggle-active')}else{$subLevel.stop(!0,!0).slideDown(700);$this.addClass('toggle-active')}});$subLevel.on('click',function(e){e.stopPropagation()})}});var eventtype='click';$('.mk-fullscreen-trigger').on(eventtype,function(e){$('.mk-fullscreen-search-overlay').addClass('mk-fullscreen-search-overlay-show');setTimeout(function(){$("#mk-fullscreen-search-input").focus()},300);e.preventDefault()});$('.mk-fullscreen-close').on(eventtype,function(e){$('.mk-fullscreen-search-overlay').removeClass('mk-fullscreen-search-overlay-show');e.preventDefault()})}
function mk_unfold_footer(){var $this=$('#mk-footer'),$spacer=$('#mk-footer-unfold-spacer'),$footerHeight=$this.outerHeight();if(!window.matchMedia("(max-width: 767px)").matches){if($this.hasClass('mk-footer-unfold')){$spacer.css('height',$footerHeight)}}else{$spacer.css('height',0)}}
function mk_lightbox_init(){var $lightbox=$(".mk-lightbox");$lightbox.fancybox({padding:15,margin:15,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:'auto',wrapCSS:'',arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3000,preload:3,modal:!1,loop:!0,openEffect:'fade',openSpeed:200,openEasing:'swing',openOpacity:!0,openMethod:'zoomIn',closeEffect:'fade',closeSpeed:200,closeEasing:'swing',closeOpacity:!0,closeMethod:'zoomOut',nextEffect:'none',nextSpeed:350,nextEasing:'swing',nextMethod:'changeIn',prevEffect:'none',prevSpeed:350,prevEasing:'swing',prevMethod:'changeOut',helpers:{media:{},overlay:{locked:!0}},tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i><svg class="mk-svg-icon" svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M390.628 345.372l-45.256 45.256-89.372-89.373-89.373 89.372-45.255-45.255 89.373-89.372-89.372-89.373 45.254-45.254 89.373 89.372 89.372-89.373 45.256 45.255-89.373 89.373 89.373 89.372z"/></svg></i></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><i><svg class="mk-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M144 505.6c8 0 16-3.2 22.4-8l240-225.6c6.4-6.4 9.6-14.4 9.6-22.4s-3.2-16-9.6-22.4l-240-224c-12.8-12.8-32-12.8-44.8 0s-11.2 32 1.6 44.8l214.4 201.6-216 203.2c-12.8 11.2-12.8 32 0 44.8 6.4 4.8 14.4 8 22.4 8z"/></svg></i></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><i><svg class="mk-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368 505.6c-8 0-16-3.2-22.4-8l-240-225.6c-6.4-6.4-9.6-14.4-9.6-24 0-8 3.2-16 9.6-22.4l240-224c12.8-11.2 33.6-11.2 44.8 1.6 12.8 12.8 11.2 32-1.6 44.8l-214.4 201.6 216 203.2c12.8 11.2 12.8 32 0 44.8-4.8 4.8-14.4 8-22.4 8z"/></svg></i></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},afterLoad:function(){$('html').addClass('fancybox-lock');$('.fancybox-wrap').appendTo('.fancybox-overlay')},beforeShow:function(){this.locked=!0},afterClose:function(){var galleryParent=this.element.parents('.mk-gallery-item');if(galleryParent){galleryParent.removeClass('hover-state')}}})}
function mk_milestone(){"use strict";if(isTest||!$.exists('.mk-milestone'))return;$('.mk-milestone').each(function(){var $this=$(this),stop_number=$this.find('.milestone-number').attr('data-stop'),animation_speed=parseInt($this.find('.milestone-number').attr('data-speed'));var build=function(){if(!$this.hasClass('scroll-animated')){$this.addClass('scroll-animated');$({countNum:$this.find('.milestone-number').text()}).animate({countNum:stop_number},{duration:animation_speed,easing:'linear',step:function(){$this.find('.milestone-number').text(Math.floor(this.countNum))},complete:function(){$this.find('.milestone-number').text(this.countNum)}})}};if(!MK.utils.isMobile()){MK.utils.scrollSpy(this,{position:'bottom',after:build})}else{build()}})}
function mk_portfolio_widget(){"use strict";$('.widget_recent_portfolio li').each(function(){$(this).find('.portfolio-widget-thumb').hover(function(){$(this).siblings('.portfolio-widget-info').animate({'opacity':1},200)},function(){$(this).siblings('.portfolio-widget-info').animate({'opacity':0},200)})})}
function mk_skill_meter(){"use strict";if($.exists('.mk-skill-meter')){if(!MK.utils.isMobile()){$(".mk-skill-meter .progress-outer").each(function(){var $this=$(this);var build=function(){if(!$this.hasClass('scroll-animated')){$this.addClass('scroll-animated');$this.animate({width:$this.attr("data-width")+'%'},2000)}};MK.utils.scrollSpy(this,{position:'bottom',after:build})})}else{$(".mk-skill-meter .progress-outer").each(function(){var $this=$(this);if(!$this.hasClass('scroll-animated')){$this.addClass('scroll-animated');$this.css({width:$(this).attr("data-width")+'%'})}})}}}
$("#mc-embedded-subscribe-form").submit(function(e){var $this=$(this);e.preventDefault();$.ajax({url:MK.core.path.ajaxUrl,type:"POST",data:{action:"mk_ajax_subscribe",email:$this.find(".mk-subscribe--email").val(),list_id:$this.find(".mk-subscribe--list-id").val(),optin:$this.find(".mk-subscribe--optin").val()},success:function(res){$this.parent().find(".mk-subscribe--message").html($.parseJSON(res).message)}})});function addClass(tag,className){tag.className+=' '+className}
function removeClass(tag,className){tag.className=tag.className.replace(new RegExp(className,'g'),'')}
if(typeof exports!=='undefined'){exports.addClass=addClass;exports.removeClass=removeClass}
/*!
*  javascript-debounce 1.0.0
*
*  A lightweight, dependency-free JavaScript module for debouncing functions based on David Walsh's debounce function.
*
*  Source code available at: https://github.com/jgarber623/javascript-debounce
*
*  (c) 2015-present Jason Garber (http://sixtwothree.org)
*
*  javascript-debounce may be freely distributed under the MIT license.
*/
(function(root,factory){if(typeof define==="function"&&define.amd){define([],factory)}else if(typeof exports==="object"){module.exports=factory()}else{root.debounce=factory()}})(this,function(){"use strict";return function(callback,delay){var timeout;return function(){var context=this,args=arguments;clearTimeout(timeout);timeout=setTimeout(function(){callback.apply(context,args)},delay)}}});function validateEmail(input,invalidClassName){var value=input.value.trim();if((input.required||value.length>0)&&!/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,63})$/i.test(value)){if(invalidClassName){addClass(input,invalidClassName)}
return!1}else{if(invalidClassName){removeClass(input,invalidClassName)}
return!0}}
function validateText(input,invalidClassName){var value=input.value.trim();if(input.required&&value.length===0){if(invalidClassName){addClass(input,invalidClassName)}
return!1}else{if(invalidClassName){removeClass(input,invalidClassName)}
return!0}}
function validateCheckBox(input,invalidClassName){if(input.required&&input.checked==!1){if(invalidClassName){addClass(input,invalidClassName)}
return!1}else{if(invalidClassName){removeClass(input,invalidClassName)}
return!0}}
if(typeof exports!=='undefined'){exports.validateEmail=validateEmail;exports.validateText=validateText}(function($){'use strict';var $wrapper=$('.js-bottom-corner-btns');var $contactBtn=$wrapper.find('.js-bottom-corner-btn--contact');var $backBtn=$wrapper.find('.js-bottom-corner-btn--back');var hasContactBtn=$contactBtn.length;var hasBackBtn=$backBtn.length;if(!hasBackBtn)return;function deactivate(){$contactBtn.removeClass('is-active');$backBtn.removeClass('is-active')}
function activate(){$contactBtn.addClass('is-active');$backBtn.addClass('is-active')}
MK.utils.scrollSpy(400,{before:deactivate,after:activate})})(jQuery);(function($){'use strict';$('.mk-fullscreen-nav-close, .mk-fullscreen-nav-wrapper, #fullscreen-navigation a').on('click',function(e){$('.mk-fullscreen-nav').removeClass('opened');$('.mk-dashboard-trigger').removeClass('fullscreen-active');$('body').removeClass('fullscreen-nav-opened');var anchor=MK.utils.detectAnchor(this),$this=$(this);if(anchor.length){var href=$this.attr('href').split('#')[0];var url=window.location.href;var isSamePage=url.indexOf(href)!==-1;if(isSamePage){e.preventDefault()}
MK.utils.scrollToAnchor(anchor)}else if($this.attr('href')==='#'){e.preventDefault()}});$('.fullscreen-navigation-ul .menu-sub-level-arrow').on('click',function(){$(this).siblings('.sub-menu').slideToggle()})}(jQuery));(function($){'use strict';var $navList=$(".main-navigation-ul");var megaMenu=function megaMenu(){$navList.MegaMenu({type:"vertical",delay:200})};$(window).on('load',megaMenu)}(jQuery));(function($){'use strict';var onePageNavItem=function onePageNavItem(){var $this=$(this),link=$this.find('a'),anchor=MK.utils.detectAnchor(link);if(!anchor.length)return;$this.removeClass('current-menu-item current-menu-ancestor current-menu-parent');var activeNav=function(state){return function(){$this[state?'addClass':'removeClass']('current-menu-item');window.history.replaceState(undefined,undefined,[state?anchor:' '])}};MK.utils.scrollSpy($(anchor)[0],{before:activeNav(!1),active:activeNav(!0),after:activeNav(!1),})};var $navItems=$('.js-main-nav').find('li');$(window).on('load',function(){setTimeout(function(){$navItems.each(onePageNavItem)},1000)})}(jQuery));(function($){'use strict';var $window=$(window);var $body=$('body');var $resMenuWrap=$('.mk-responsive-wrap');var $post_nav=$('.mk-post-nav');var $toolbar=$('.mk-header-toolbar');var $resMenuLink=$('.mk-nav-responsive-link');var hasResMenu=($resMenuWrap.length>0);var windowHeight=$window.height();var screenHeight=screen.height;$('.mk-toolbar-resposnive-icon').on('click',function(e){e.preventDefault();console.log('clicked');if($body.hasClass('toolbar-opened')){$body.removeClass('toolbar-opened').addClass('toolbar-closed');$toolbar.hide()}else{$body.removeClass('toolbar-closed').addClass('toolbar-opened');$toolbar.show()}});if(!hasResMenu&&!$('.vc_mk_header'))return;function toggleResMenu(e){e.preventDefault();var $this=$(this);var $headerInner=$this.parents('header');var $resMenu=$headerInner.find('.mk-responsive-wrap');var searchBox=$('.responsive-searchform .text-input');var adminBarHeight=$('#wpadminbar').height();if($body.hasClass('mk-opened-nav')){$this.removeClass('is-active');$body.removeClass('mk-opened-nav').addClass('mk-closed-nav').trigger('mk-closed-nav');$resMenu.hide();$post_nav.removeClass('post-nav-backward')}else{$this.addClass('is-active');$body.removeClass('mk-closed-nav').addClass('mk-opened-nav').trigger('mk-opened-nav');$resMenu.show();$post_nav.addClass('post-nav-backward')}
if(searchBox.hasClass('input-focused')){searchBox.removeClass('input-focused')}}
$resMenuLink.each(function(){$(this).on('click',toggleResMenu)});$(window).on('vc_reload',function(){$('.vc_mk_header .mk-nav-responsive-link').each(function(){$(this).on('click',toggleResMenu)})})
var setResMenuHeight=function(){var height=$window.height()-MK.val.offsetHeaderHeight(0);$resMenuWrap.css('max-height',height)};var isVirtualKeyboard=function(){var currentWindowHeight=$window.height();var currentScreenHeight=screen.height;var searchBox=$('.responsive-searchform .text-input');var searchBoxIsFocused=!1;searchBox.on('touchstart touchend',function(e){searchBox.addClass('input-focused')});searchBoxIsFocused=(searchBox.is(':focus')||searchBox.hasClass("input-focused"));if($body.hasClass('mk-opened-nav')&&searchBoxIsFocused&&currentScreenHeight==screenHeight&&currentWindowHeight!=windowHeight){return!0}else{return!1}};var hideResMenu=function hideResMenu(){if(MK.utils.isResponsiveMenuState()){if(!isVirtualKeyboard()){if($body.hasClass('mk-opened-nav')){$resMenuLink.filter('.is-active').trigger('click')}
$resMenuWrap.hide()}}};$resMenuWrap.on('click','a',hideResMenu)}(jQuery));(function($){'use strict';var $header=$('.mk-header');var hasHeader=($header.length>0);if(!hasHeader&&!$('.vc_mk_header'))return;var $sticky_style=$header.attr('data-header-style');$('.sidedash-navigation-ul > li').each(function(){var $this=$(this);$this.children('ul').siblings('a').after('<span class="mk-nav-arrow mk-nav-sub-closed"><svg class="mk-svg-icon" data-name="mk-moon-arrow-down" data-cacheid="2" style=" height:14px; width: 14px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 192l-96-96-160 160-160-160-96 96 256 255.999z"></path></svg></span>')});function toggleSubMenu(e){e.preventDefault();var $this=$(this);if($this.hasClass('mk-nav-sub-closed')){$this.siblings('ul').slideDown(450).end().removeClass('mk-nav-sub-closed').addClass('mk-nav-sub-opened')}else{$this.siblings('ul').slideUp(450).end().removeClass('mk-nav-sub-opened').addClass('mk-nav-sub-closed')}};function toggleFullMenu(e){e.preventDefault();var $this=$(this),$body=$('body'),$fullscreen_box=$('.mk-fullscreen-nav');if($this.hasClass('dashboard-style')){if(!$this.hasClass('dashboard-active')){$this.addClass('dashboard-active');$body.addClass('dashboard-opened')}else{$this.removeClass('dashboard-active');$body.removeClass('dashboard-opened')}}else if($this.hasClass('fullscreen-style')){if(!$this.hasClass('fullscreen-active')){$this.addClass('fullscreen-active');$body.addClass('fullscreen-nav-opened');$fullscreen_box.addClass('opened')}else{$this.removeClass('fullscreen-active');$body.removeClass('fullscreen-nav-opened');$fullscreen_box.removeClass('opened')}}}
$('.mk-nav-arrow').each(function(){$(this).stop(!0).on('click',toggleSubMenu)});$('.mk-dashboard-trigger').each(function(){$(this).on('click',toggleFullMenu)});$(window).on('vc_reload',function(){$('.vc_mk_header .mk-dashboard-trigger').each(function(){$(this).on('click',toggleFullMenu)});$('.vc_mk_header .mk-nav-arrow').each(function(){$(this).stop(!0).on('click',toggleSubMenu)})});$('html').on('click',function(){$('body').removeClass('dashboard-opened');$('.mk-dashboard-trigger').removeClass('dashboard-active')})}(jQuery));(function($){'use strict';var $verticalMenu=$('#mk-vm-menu');var verticalMenu=function verticalMenu(){if(!$verticalMenu.data('vertical-menu')&&!MK.utils.isResponsiveMenuState()){$verticalMenu.dlmenu();$verticalMenu.data('vertical-menu',!0)}};verticalMenu();$(window).on('resize',verticalMenu)}(jQuery));(function($){'use strict';var $lang_item=$('.mk-main-navigation > .main-navigation-ul > .menu-item-language');$lang_item.addClass('no-mega-menu').css('visibility','visible');$('.mk-main-navigation .menu-item-language > a').addClass('menu-item-link')})(jQuery);(function($){'use strict';var $header=$('.mk-header').first();var hasHeader=($header.length>0);if(!hasHeader)return;var $window=$(window);var $document=$(document);var $headerHolder=$header.find('.mk-header-holder');var $paddingWrapper=$header.find('.mk-header-padding-wrapper');var config=$header.data();var isStickyLazy=(config.stickyStyle==='lazy');var isStickyFixed=(config.stickyStyle==='fixed');var isStickySlide=(config.stickyStyle==='slide');function isSticky(){return!0}
function isColorable(){return config.headerStyle!==4}
function changeSkin(e,skin){$header.attr('data-transparent-skin',skin);var contrast=skin==='light'?'dark':'light';$header.addClass(skin+'-skin');$header.removeClass(contrast+'-skin')}
if(isColorable())MK.utils.eventManager.subscribe('firstElSkinChange',changeSkin);if(isSticky()&&isStickyLazy){if(config.headerStyle!==2){lazySticky()}}else if(isSticky()&&isStickyFixed)fixedSticky();else if(isSticky()&&isStickySlide)slideSticky();function lazySticky(){var elClassHidden='header--hidden';var elClassSticky='a-sticky';var wScrollCurrent=0;var wScrollBefore=0;var wScrollDiff=0;var wHeight=0;var dHeight=0;var setSizes=function setSizes(){dHeight=$document.height();wHeight=$window.height()};var onScroll=function onScroll(){wScrollCurrent=MK.val.scroll();wScrollDiff=wScrollBefore-wScrollCurrent;if(wScrollCurrent<=0){$headerHolder.removeClass(elClassHidden);$header.removeClass(elClassSticky);$('body').trigger('mk:header-unsticky')}else if(wScrollDiff>0&&$headerHolder.hasClass(elClassHidden)){$headerHolder.removeClass(elClassHidden);$header.addClass(elClassSticky);$('body').trigger('mk:header-sticky')}else if(wScrollDiff<0){if(wScrollCurrent+wHeight>=dHeight&&$headerHolder.hasClass(elClassHidden)){$headerHolder.removeClass(elClassHidden);$header.addClass(elClassSticky);$('body').trigger('mk:header-sticky')}else{$headerHolder.addClass(elClassHidden);$header.removeClass(elClassSticky);$('body').trigger('mk:header-unsticky')}}
wScrollBefore=wScrollCurrent};setSizes();onScroll();$window.on('resize',MK.utils.throttle(100,setSizes));$window.on('scroll',MK.utils.throttle(500,onScroll))}
function fixedSticky(){var sticked=!1;var scrollPos;var toggleState=function toggleState(){scrollPos=MK.val.scroll()+MK.val.adminbarHeight();if((scrollPos>MK.val.stickyOffset())&&!MK.utils.isResponsiveMenuState()){if(sticked)return;$header.addClass('a-sticky');sticked=!0;$('body').trigger('mk:header-sticky')}else{if(!sticked)return;$header.removeClass('a-sticky');sticked=!1;$('body').trigger('mk:header-unsticky')}};toggleState();$window.on('scroll',MK.utils.throttle(100,toggleState));$window.on('resize',MK.utils.throttle(100,toggleState))}
function slideSticky(){var sticked=!1;var onScroll=function onScroll(){if(MK.val.scroll()>MK.val.stickyOffset()){if(sticked)return;$header.addClass('pre-sticky');$paddingWrapper.addClass('enable-padding');setTimeout(function(){$header.addClass('a-sticky');$('body').trigger('mk:header-sticky')},1);sticked=!0}else{if(!sticked)return;$header.removeClass('a-sticky');$header.removeClass('pre-sticky');$paddingWrapper.removeClass('enable-padding');sticked=!1;$('body').trigger('mk:header-unsticky')}};onScroll();$window.on('scroll',MK.utils.throttle(100,onScroll))}})(jQuery);(function($){'use strict';var hasTouchscreen=('ontouchstart' in document.documentElement);if(!hasTouchscreen)return;$('.mk-main-navigation .menu-item-has-children').each(normalizeClick);function normalizeClick(){$(this).on('click',handleClick)}
function handleClick(e){var $this=$(e.currentTarget);var $child=$this.find('> ul');var isVisible=$child.css('display')!=='none';if(!isVisible){e.preventDefault();e.stopPropagation()}}}(jQuery));(function($){'use strict';MK.ui.preloader={dom:{overlay:'.mk-body-loader-overlay'},hide:function hide(){$(this.dom.overlay).fadeOut(600,"easeInOutExpo",function(){$('body').removeClass('loading')})}}})(jQuery);(function($){'use strict';var _ajaxUrl=MK.core.path.ajaxUrl;var _instances={};MK.utils.ajaxLoader=function ajaxLoader(el){var id='#'+($(el).attr('id'));if(typeof _instances[id]!=='undefined')return _instances[id];this.id=id;this.el=el;this.isLoading=!1;this.xhrCounter=0};MK.utils.ajaxLoader.prototype={init:function init(){if(this.initialized&&typeof window.vc_iframe==='undefined'){return}
this.createInstance();this.cacheElements();this.initialized=!0},cacheElements:function cacheElements(){this.$container=$(this.el);this.id='#'+(this.$container.attr('id'));this.categories=this.$container.data('loop-categories');this.data={};this.data.action='mk_load_more';this.data.query=this.$container.data('query');this.data.atts=this.$container.data('loop-atts');this.data.loop_iterator=this.$container.data('loop-iterator');this.data.author=this.$container.data('loop-author');this.data.posts=this.$container.data('loop-posts');this.data.safe_load_more=this.$container.siblings('#safe_load_more').val();this.data._wp_http_referer=this.$container.siblings('input[name="_wp_http_referer"]').val();this.data.paged=1;this.data.maxPages=this.$container.data('max-pages');this.data.term=this.categories},createInstance:function(){_instances[this.id]=this},load:function load(unique){var self=this;var seq=++this.xhrCounter;this.isLoading=!0;if(this.$container.siblings('.mk-ajax-loaded-posts').length){var loaded_posts=this.$container.siblings('.mk-ajax-loaded-posts').attr('data-loop-loaded-posts');if(this.$container.attr('data-pagination-style')!=1){self.data.loaded_posts=loaded_posts.split(',')}}
return $.when($.ajax({url:_ajaxUrl,type:"POST",data:self.data})).done(function(response){self.onDone(response,unique,seq)})},onDone:function(response,unique,seq){if(seq===this.xhrCounter){var self=this;response=$.parseJSON(response);response.unique=unique;response.id=this.id;if(this.$container.siblings('.mk-ajax-loaded-posts').length){this.$container.siblings('.mk-ajax-loaded-posts').attr('data-loop-loaded-posts',response.loaded_posts)}
this.setData({maxPages:response.maxPages,found_posts:response.found_posts,loop_iterator:response.i});$(response.content).mk_imagesLoaded().then(function(){MK.utils.eventManager.publish('ajaxLoaded',response);self.isLoading=!1;self.initNewComponents()})}else console.log('XHR request nr '+seq+' aborted')},setData:function setData(atts){for(var att in atts){if(att==='term'&&atts[att]==='*')this.data.term='';else this.data[att]=atts[att]}},getData:function getData(att){return this.data[att]},initNewComponents:function initNewComponents(){window.ajaxInit();setTimeout(window.ajaxDelayedInit,1000);MK.core.initAll(this.el)}}}(jQuery));MK.component.BackgroundImageSetter=(function($){'use strict';var module={};var $win=$(window),screen=getScreenSize(),orientation=getOrientation(),device=getDevice(),lastOrientation=orientation,lastDevice=device;function run($layers){$layers.filter(function(){return!this.hasAttribute("mk-img-loaded")}).each(applyBg)}
function applyBg(){var $this=$(this),imgs=$this.data('mk-img-set');$this.css('background-image','url('+module.getImage(imgs)+')');$this.find('.mk-adaptive-image').attr('src',module.getImage(imgs))}
function handleResize($layers){updateScreenSize();if(hasSwitched()){updateDevice();run($layers)}}
function getScreenSize(){return{w:$win.width(),h:$win.height()}}
function getDevice(){if(screen.w>1024)return{class:'desktop',id:2};else if(screen.w>736)return{class:'tablet',id:1};else return{class:'mobile',id:0}}
function getOrientation(){if(screen.w>screen.h)return'landscape';else return'portrait'}
function updateScreenSize(){screen=getScreenSize()}
function updateDevice(){if(lastOrientation!==orientation)orientation=lastOrientation;if(lastDevice.id>device.id)device=lastDevice}
function hasSwitched(){lastOrientation=getOrientation();lastDevice=getDevice();if(lastOrientation!==orientation||lastDevice.class!==device.class)return!0;else return!1}
module.getImage=function(imgs){if(imgs.responsive==='false'){return(imgs.landscape.desktop)?imgs.landscape.desktop:(imgs.landscape.external?imgs.landscape.external:'')}
var hasOrientation=!!imgs[orientation];var imgOriented=imgs[(hasOrientation?orientation:Object.keys(imgs)[0])],imgExact=(imgOriented[device.class])?imgOriented[device.class]:(imgOriented.external?imgOriented.external:'');return imgExact}
module.init=function($layers){run($layers);$layers.attr('mk-img-loaded','')};module.onResize=function($layers){$win.on('resize',MK.utils.throttle(500,function(){handleResize($layers)}))};return module}(jQuery));jQuery(function($){var init=function init(){$allLayers=$('[data-mk-img-set]').filter(function(index){return!$(this).hasClass('mk-section-image')&&!$(this).hasClass('background-layer')&&!$(this).hasClass('mk-video-section-touch')});MK.component.BackgroundImageSetter.onResize($allLayers);MK.component.BackgroundImageSetter.init($allLayers)}
init();$(window).on('vc_reload',init)});(function($){'use strict';var val=MK.val;MK.component.FullHeight=function(el){var $window=$(window),$this=$(el),config=$this.data('fullheight-config'),container=document.getElementById('mk-theme-container'),minH=(config&&config.min)?config.min:0,winH=null,height=null,update_count=0,testing=MK.utils.getUrlParameter('testing'),offset=null;if(MK.utils.browser.name===('IE'||'Edge'))$this.css('height','1px');var update=function(){if(update_count===0){winH=$window.height();offset=$this.offset().top-1;height=Math.max(minH,winH-val.offsetHeaderHeight(offset));$this.css('min-height',height);if(testing!==undefined)
update_count++}};var init=function(){update();$window.on('resize',update);$window.on('scroll',update);window.addResizeListener(container,update)};return{init:init}}})(jQuery);(function($){'use strict';var core=MK.core,utils=MK.utils,path=MK.core.path;MK.ui.FullScreenGallery=function(element,settings){this.element=element;this.config=settings;this.isFullScreen=!1};MK.ui.FullScreenGallery.prototype={dom:{fullScrBtn:'.slick-full-screen',exitFullScrBtn:'.slick-minimize',playBtn:'.slick-play',pauseBtn:'.slick-pause',shareBtn:'.slick-share',socialShare:'.slick-social-share',wrapper:'.slick-slider-wrapper',slider:'.slick-slides',slides:'.slick-slide',dots:'.slick-dot',active:'.slick-active',hiddenClass:'is-hidden',dataId:'slick-index'},tpl:{dot:'<div class="slick-dot"></div>',next:'<a href="javascript:;" class="slick-next"> <svg width="33px" height="65px"> <polyline fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=" 0.5,0.5 32.5,32.5 0.5,64.5"/> </svg> </a>',prev:'<a href="javascript:;" class="slick-prev"> <svg  width="33px" height="65px"> <polyline fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=" 32.5,64.5 0.5,32.5 32.5,0.5"/> </svg> </a>'},init:function(){var self=this;self.cacheElements();self.getViewportSizes();self.updateSizes('window');self.create();self.updateCacheElements();self.createPagination();self.bindEvents()},create:function(){var self=this;this.slick=this.$gallery.slick({dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,centerPadding:'0px',variableWidth:!0,autoplay:!1,autoplaySpeed:3000,useTransform:!0,prevArrow:self.tpl.prev,nextArrow:self.tpl.next,customPaging:function(slider,i){return self.tpl.dot},})},cacheElements:function(){this.$window=$(window);this.$gallery=$(this.element);this.$fullScrBtn=$(this.dom.fullScrBtn);this.$exitFullScrBtn=$(this.dom.exitFullScrBtn);this.$playBtn=$(this.dom.playBtn);this.$pauseBtn=$(this.dom.pauseBtn);this.$shareBtn=$(this.dom.shareBtn);this.$socialShare=$(this.dom.socialShare);this.$wrapper=$(this.dom.wrapper);this.$slider=$(this.dom.slider);this.$slides=$(this.dom.slides);this.$imgs=this.$slides.find('img');this.$originalImgs=this.$imgs},updateCacheElements:function(){this.$slides=$(this.dom.slides);this.$imgs=this.$slides.find('img');this.$dots=$(this.dom.dots)},bindEvents:function(){var self=this;this.$fullScrBtn.on('click',this.toFullScreen.bind(this));this.$exitFullScrBtn.on('click',this.exitFullScreen.bind(this));this.$playBtn.on('click',this.play.bind(this));this.$pauseBtn.on('click',this.pause.bind(this));this.$shareBtn.on('click',this.toggleShare.bind(this));this.$socialShare.on('click','a',this.socialShare.bind(this));this.$window.on('resize',this.onResize.bind(this));this.$window.on('keydown',function(e){if(e.keyCode===39)self.$gallery.slick('slickNext');if(e.keyCode===37)self.$gallery.slick('slickPrev')});$(document).on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullcreenchange',this.exitFullScreen.bind(this))},getViewportSizes:function(){this.screen={w:screen.width,h:screen.height};this.window={w:this.$window.width(),h:this.$window.height()}},updateSizes:function(viewport){this.$wrapper.width(this[viewport].w);this.$wrapper.height('100%');this.$imgs.height('100%')},createPagination:function(){var self=this;this.$dots.each(function(i){var img=self.$originalImgs.eq(i).attr('src');$(this).css({'background-image':'url('+img+')'})})},play:function(e){e.preventDefault();this.$playBtn.addClass(this.dom.hiddenClass);this.$pauseBtn.removeClass(this.dom.hiddenClass);$(this.element).slick('slickPlay')},pause:function(e){e.preventDefault();this.$pauseBtn.addClass(this.dom.hiddenClass);this.$playBtn.removeClass(this.dom.hiddenClass);$(this.element).slick('slickPause')},toggleShare:function(e){e.preventDefault();this.$socialShare.toggleClass(this.dom.hiddenClass)},getCurentId:function(){return this.$slides.filter(this.dom.active).data(this.dom.dataId)},toFullScreen:function(){var self=this;this.$fullScrBtn.addClass(this.dom.hiddenClass);this.$exitFullScrBtn.removeClass(this.dom.hiddenClass);this.$slider.hide().fadeIn(500);utils.launchIntoFullscreen(document.documentElement);this.updateSizes('screen');$(this.element).slick('slickGoTo',this.getCurentId(),!0);setTimeout(function(){self.isFullScreen=!0},1000)},exitFullScreen:function(){if(this.isFullScreen){this.$exitFullScrBtn.addClass(this.dom.hiddenClass);this.$fullScrBtn.removeClass(this.dom.hiddenClass);utils.exitFullscreen();this.updateSizes('window');$(this.element).slick('slickGoTo',this.getCurentId(),!0);this.isFullScreen=!1}},onResize:function(){this.getViewportSizes();this.updateSizes(this.isFullScreen?'screen':'window');$(this.element).slick('refresh');$(this.element).slick('slickGoTo',this.getCurentId(),!0);this.updateCacheElements();this.createPagination()},socialShare:function(e){e.preventDefault();var $this=$(e.currentTarget),network=$this.data('network'),id=this.config.id,url=this.config.url,title=this.$wrapper.find('.slick-title').text(),name;var picture=this.$slides.filter(this.dom.active).children().first().attr('src');switch(network){case 'facebook':url='https://www.facebook.com/sharer/sharer.php?picture='+picture+'&u='+url+'#id='+id;name='Facebook Share';break;case 'twitter':url='http://twitter.com/intent/tweet?text='+url+'#id='+id;name='Twitter Share';break;case 'pinterest':url='http://pinterest.com/pin/create/bookmarklet/?media='+picture+'&url='+url+'&is_video=false&description='+title;name='Pinterest Share';break}
window.open(url,name,"height=380 ,width=660, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0")}}})(jQuery);(function($){'use strict';function MkfullWidthRow(){var $windowWidth=$(document).width();var $elements=$('[data-mk-full-width="true"]');var direction=$('body.rtl').length?'right':'left';var verticalHeader=$('body.vertical-header-enabled').length?!0:!1;var verticalHeaderWidth=($('.header-style-4 .mk-header-inner').outerWidth()>270)?0:270;var verticalHeaderRtl=$('body.rtl').length?-1:1;var verticalHeaderRtlWidth=$('body.rtl.vertical-header-enabled').length?verticalHeaderWidth:0;var verticalHeaderRight=$('body.vertical-header-right').length?-1:1;var verticalHeaderWidthBoxed=0;var boxed=$('body.mk-boxed-enabled').length;var boxedOffset=(boxed)?($(window).width()-$('#theme-page').outerWidth())/2:0;var boxedMaxWidth=(boxed)?$('#theme-page').outerWidth():'auto';if(verticalHeader&&boxed){verticalHeaderWidthBoxed=($('.header-style-4 .mk-header-inner').outerWidth()>270)?0:verticalHeaderRtl*verticalHeaderRight*135}
var transparentHeader=$('.transparent-header').length;if(transparentHeader>0){verticalHeaderWidthBoxed=0}
$.each($elements,function(key,item){var $el=$(this);var css;$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if(css={position:"relative","box-sizing":"border-box",width:$(window).width(),maxWidth:boxedMaxWidth},css[direction]=offset+boxedOffset+verticalHeaderWidthBoxed+(verticalHeaderRight*verticalHeaderRtlWidth),$el.css(css),!$el.data("mkStretchContent")){var padding=-1*offset;0>padding&&(padding=0);var paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right;padding=padding-paddingRight;if(0>paddingRight&&(paddingRight=0)){css={};if('right'===direction){css["padding-left"]=padding+"px";css["padding-right"]=0}else{css["padding-right"]=padding+"px";css["padding-left"]=0}
$el.css(css)}}
if(verticalHeader&&!boxed&&!transparentHeader&&!css.hasOwnProperty('padding-left')&&!css.hasOwnProperty('padding-right')){var side='left';if(verticalHeaderRight===-1){side='right'}
var el_padding_dir=parseInt($el.css('padding-'+side),10);var header_padding_dir=$('.header-style-4 .mk-header-inner').outerWidth();if(el_padding_dir!=header_padding_dir){if($windowWidth>mk_responsive_nav_width){$el[0].style.setProperty('padding-'+side,header_padding_dir+'px','important')}else{$el[0].style.removeProperty('padding-'+side)}
var $el_page_section=$el.find('.mk-page-section.full_layout');if($el_page_section.length>0){$el_page_section[0].style.setProperty('padding-'+side,'unset','important')}}}
$el.attr("data-mk-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("mk-full-width-row",$elements)}
MkfullWidthRow();var debounceResize=null;$(window).on("resize",function(){if(debounceResize!==null){clearTimeout(debounceResize)}
debounceResize=setTimeout(MkfullWidthRow,100)})})(jQuery);(function($){'use strict';MK.component.Grid=function(el){var $container=$(el);var config=$container.data('grid-config');var isSlideshow=$container.closest('[data-mk-component="SwipeSlideshow"]').length;var miniGridConfig={container:el,item:config.item+':not(.is-hidden)',gutter:0};var init=function init(){if(isSlideshow)return;MK.core.loadDependencies([MK.core.path.plugins+'minigrid.js'],create)};var prepareForGrid=function prepareForGrid(){var $item=$(this);var isHidden=($item.css('display')==='none');if(isHidden)$item.addClass('is-hidden');else $item.removeClass('is-hidden')};var create=function create(){var timer=null;function draw(){$container.find(config.item).each(prepareForGrid);minigrid(miniGridConfig)}
function redraw(){if(timer)clearTimeout(timer);timer=setTimeout(draw,100)}
draw();$(window).off('resize',redraw);$(window).on('resize',redraw);MK.utils.eventManager.subscribe('item-expanded',redraw);MK.utils.eventManager.subscribe('ajaxLoaded',redraw);MK.utils.eventManager.subscribe('staticFilter',redraw)};return{init:init}}})(jQuery);(function($){'use strict';var families=[['awesome-icons','mk-icon-'],['icomoon','mk-moon-'],['pe-line-icons','mk-li-'],['theme-icons','mk-jupiter-icon-']];var extend={'awesome-icons':[],'icomoon':[],'pe-line-icons':[],'theme-icons':[]};var _cache={};var _cacheId=0;var _config=[];var _roundCount=0;var _iconMap={};var getIconsSprite=(function(){var $icons=null;var iterator=0;function run(callback){var config=encodeURIComponent(JSON.stringify(_config));$.ajax({url:MK.core.path.ajaxUrl,method:'POST',data:{action:'mk_get_icon',iterator:iterator++,config:config},success:function(sprite){callback(sprite,$icons);_config=[];_iconMap={};$icons=null},error:function(err){console.log('Icon load problem')}})}
return function(callback,$els,count){if(!$icons)$icons=$els;else $icons.add($els);if(!count)run(callback)}}());$(window).on('load',function(){setTimeout(function(){createAll(document);if($('.mk-header').length)createAll('.mk-header');if($('.js-flexslider, .mk-flexslider').length)createAll('.js-flexslider, .mk-flexslider');if($('.mk-accordion').length)createAll('.mk-accordion')},1000)});MK.utils.eventManager.subscribe('ajaxLoaded',function(){setTimeout(createAll,100,'.js-loop')});MK.utils.eventManager.subscribe('ajax-preview',function(){setTimeout(createAll,100,'.ajax-container')});MK.utils.eventManager.subscribe('photoAlbum-open',function(){setTimeout(createAll,100,'.gallery-share')});MK.utils.eventManager.subscribe('quickViewOpen',function(){setTimeout(createAll,300,'.mk-modal-content')});function createAll(scope){for(var i=0,l=families.length;i<l;i++){var family=families[i][0];var prefix=families[i][1];var $icons=getIcons(family,prefix,scope);if($icons.length){_roundCount++;setTimeout(createIcons,0,$icons,family,prefix)}}}
function getIcons(family,prefix,scope){var $scope=$(scope);var $icons=$scope.find('[class*='+prefix+']');var extraClassNames=extend[family];if(!extraClassNames)return $icons;extraClassNames.forEach(function(className){var $icon=$scope.find(className);$icons=$icons.add($icon)});return $icons}
function createIcons($icons,family,prefix,i,unicode){var id=i||0;var icon=$icons[id];if(!icon){_roundCount--;getIconsSprite(insertIcons,$icons,_roundCount,_config);return}
var css=getComputedStyle(icon,':before');var classAttr=icon.getAttribute('class');var name=(classAttr)?matchClass(classAttr.split(' '),prefix):!1;var h=getComputedStyle(icon).fontSize;var config=createConfig(css,name,family,unicode,h);var cache=JSON.stringify(config);if(!config){}else if(_cache[cache]){if(typeof _iconMap[cache]==='undefined')_iconMap[cache]=[$icons.eq(id)];else _iconMap[cache].push($icons.eq(id))}else{if(typeof _iconMap[cache]==='undefined')_iconMap[cache]=[$icons.eq(id)];else _iconMap[cache].push($icons.eq(id));_cache[cache]=_cacheId.toString();config.id=_cacheId;_config.push(config);_cacheId++}
createIcons($icons,family,prefix,++id)}
function insertIcons(sprite,$icons){var $sprite=$(sprite);var $svgs=$sprite.find('svg');var idMap=invert(_cache);$sprite.each(function(){var $svg=$(this);var id=$svg.attr('data-cacheid');var configKey=idMap[id];_cache[configKey]=this});Object.keys(_iconMap).forEach(function(cacheKey){_iconMap[cacheKey].forEach(function($icons){$icons.each(function(){var $svg=$(_cache[cacheKey]).clone();var $icon=$(this);function remove(){if($icon.parents('.pricing-features'))return;$icon.not('.mk-jupiter-icon-xing').not('.mk-jupiter-icon-square-xing').not('.mk-jupiter-icon-simple-xing').find('.mk-svg-icon').not('[data-name="mk-moon-zoom-in"]').remove()}
if($svg.length)remove();if(!$icon.find('svg').length){if($icon.parents('.widget ul').length)$icon.prepend($svg);else $icon.append($svg)}})})});MK.utils.eventManager.publish('iconsInsert')}
function createConfig(css,name,family,unicode,height){var hasGradient=checkGradient(css);var hasDirection=extractGradient('direction',css.background);var config={family:family,unicode:(unicode)?unicode:decodeUnicode(css.content),name:name,gradient_type:hasGradient?extractGradient('type',css.background):!1,gradient_start:hasGradient?extractGradient('start',css.background):!1,gradient_stop:hasGradient?extractGradient('stop',css.background):!1,gradient_direction:hasDirection?extractGradient('direction',css.background).replace(' ','-'):!1,height:height};if(!config.name&&!config.unicode)return!1;else return config}
function matchClass(classes,prefix){for(var i=0,l=classes.length;i<l;i++){if(classes[i].indexOf(prefix)!==-1)return classes[i]}}
function checkGradient(css){var bg=css.background;if(bg.indexOf('radial')!==-1||bg.indexOf('linear')!==-1)return bg;else return!1}
function extractGradient(attr,grad){if(!grad)return!1;var isRadial=grad.indexOf('radial')!==-1;var isLinear=grad.indexOf('linear')!==-1;var hasDirection=grad.indexOf('(to')!==-1;var f,t;if(attr==='type'){if(isRadial)return'radial';if(isLinear)return'linear'}else if(attr==='start'){f=getStrPosition(grad,'rgb(',1);t=getStrPosition(grad,'0%',1)}else if(attr==='stop'){f=getStrPosition(grad,'rgb(',2);t=getStrPosition(grad,'100%',1)}else if(attr==='direction'){if(!hasDirection)return!1;f=getStrPosition(grad,'(to',1)+4;t=getStrPosition(grad,', rgb(',1)}else{return!1}
return grad.slice(f,t)}
function getStrPosition(str,m,i){return str.split(m,i).join(m).length}
function decodeUnicode(content){if(content&&content!=='none')return escape(content).replace(/%22/g,'').replace('%u','').toLowerCase();else return!1}
function invert(obj){var new_obj={};for(var prop in obj){if(obj.hasOwnProperty(prop)){new_obj[obj[prop]]=prop}}
return new_obj}}(jQuery));
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});(function($,window){'use strict';var scrollY=MK.val.scroll;var dynamicHeight=MK.val.dynamicHeight;var $window=$(window);var $containers=$('.js-loop');$containers.each(pagination);$window.on('vc_reload',function(){$('.js-loop').each(pagination)});function pagination(){var unique=Date.now();var $container=$(this);var $superContainer=$container.parent();var $loadBtn=$container.siblings('.js-loadmore-holder').find('.js-loadmore-button');var $loadScroll=$('.js-load-more-scroll');var style=$container.data('pagination-style');var maxPages=$container.data('max-pages');var id='#'+($container.attr('id'));var ajaxLoader=new MK.utils.ajaxLoader(id);var isLoadBtn=(style===2);var isInfiniteScroll=(style===3);var scrollCheckPoint=null;var isHandlerBinded=!1;ajaxLoader.init();init();function init(){MK.utils.eventManager.subscribe('ajaxLoaded',onLoad);bindHandlers();if(isInfiniteScroll)scrollCheckPoint=spyScrollCheckPoint();$window.on('vc_reload',function(){$window.off('scroll',handleScroll)})}
function bindHandlers(){if(isLoadBtn)$loadBtn.on('click',handleClick);if(isInfiniteScroll)$window.on('scroll',handleScroll);isHandlerBinded=!0}
function unbindHandlers(){if(isLoadBtn)$loadBtn.off('click',handleClick);if(isInfiniteScroll)$window.off('scroll',handleScroll);isHandlerBinded=!1}
function handleClick(e){e.preventDefault();if(!ajaxLoader.isLoading)loadMore()}
function handleScroll(){if((scrollY()>scrollCheckPoint())&&!ajaxLoader.isLoading)loadMore()}
function loadMore(){loadingIndicatorStart();var page=ajaxLoader.getData('paged');ajaxLoader.setData({paged:++page});ajaxLoader.load(unique)}
function onLoad(e,response){if(typeof response!=='undefined'&&response.id===id){if(ajaxLoader.getData('found_posts')<=0&&ajaxLoader.getData('paged')>=ajaxLoader.getData('maxPages'))loadingIndicatorHide();else loadingIndicatorShow();if(response.unique===unique)$container.append(response.content);loadingIndicatorStop()}}
function loadingIndicatorStart(){if(isLoadBtn)$loadBtn.addClass('is-active');else if(isInfiniteScroll)MK.ui.loader.add('.js-load-more-scroll')}
function loadingIndicatorStop(){if(isLoadBtn)$loadBtn.removeClass('is-active');else if(isInfiniteScroll)MK.ui.loader.remove('.js-load-more-scroll')}
function loadingIndicatorShow(){if(isHandlerBinded)return;if(isLoadBtn)$loadBtn.show();else if(isInfiniteScroll)$loadScroll.show();bindHandlers()}
function loadingIndicatorHide(){if(!isHandlerBinded)return;if(isLoadBtn)$loadBtn.hide();else if(isInfiniteScroll)$loadScroll.hide();unbindHandlers()}
function spyScrollCheckPoint(){var containerO=0;var containerH=dynamicHeight($superContainer);var winH=dynamicHeight(window);var setVals=function(){containerO=$superContainer.offset().top};setVals();$window.on('resize',function(){requestAnimationFrame(setVals)});return function(){return(containerH()+containerO)-(winH()*2)}}}})(jQuery,window);(function($){'use strict';function isHidden(el){return(el.offsetParent===null)}
MK.component.Masonry=function(el){var $window=$(window);var $container=$(el);var config=$container.data('masonry-config');var $masonryItems=$container.find(config.item);var cols=config.cols||8;var $filterItems=null;var wall=null;var init=function init(){MK.core.loadDependencies([MK.core.path.plugins+'freewall.js'],onDepLoad)};var onDepLoad=function onDepLoad(){masonry();$window.on('resize',onResize);MK.utils.eventManager.subscribe('ajaxLoaded',onPostAddition);MK.utils.eventManager.subscribe('staticFilter',resize)};var masonry=function masonry(){if(isHidden(el))return;var newCols;if(window.matchMedia('(max-width:600px)').matches)newCols=2;else if(window.matchMedia('(max-width:850px)').matches)newCols=4;else newCols=cols;var colW=$container.width()/newCols;wall=new Freewall(config.container);wall.reset({selector:config.item+':not(.is-hidden)',gutterX:0,gutterY:0,cellW:colW,cellH:colW});wall.fillHoles();wall.fitWidth();$masonryItems.each(function(){$(this).data('loaded',!0)})};var destroyContainer=function destroyContainer(){$container.removeAttr('style').removeData('wall-height').removeData('wall-width').removeData('min-width').removeData('total-col').removeData('total-row').removeAttr('data-wall-height').removeAttr('data-wall-width').removeAttr('data-min-width').removeAttr('data-total-col').removeAttr('data-total-row')};var destroyItem=function destroyItem(){var $item=$(this);$item.removeAttr('style').removeData('delay').removeData('height').removeData('width').removeData('state').removeAttr('data-delay').removeAttr('data-height').removeAttr('data-width').removeAttr('data-state')};var destroyAll=function destroyAll(){if(!wall)return;wall.destroy();destroyContainer();$masonryItems.each(destroyItem)};var onResize=function onResize(){requestAnimationFrame(resize)};var refresh=function refresh(){if(!wall)return;setTimeout(wall.fitWidth.bind(wall),5)};var resize=function resize(){destroyAll();masonry()};var onPostAddition=function onPostAddition(){$masonryItems=$container.find(config.item);$masonryItems.each(function(){var $item=$(this),isLoaded=$item.data('loaded');if(!isLoaded)$item.css('visibility','hidden')});$container.mk_imagesLoaded().then(function(){destroyAll();masonry()})};return{init:init}}}(jQuery));(function($){'use strict';MK.component.Pagination=function(el){this.el=el};MK.component.Pagination.prototype={init:function init(){this.cacheElements();this.bindEvents();this.onInitLoad()},cacheElements:function cacheElements(){this.lastId=1;this.unique=Date.now();this.$pagination=$(this.el);this.$container=this.$pagination.prev('.js-loop');this.$pageLinks=this.$pagination.find('.js-pagination-page');this.$nextLink=this.$pagination.find('.js-pagination-next');this.$prevLink=this.$pagination.find('.js-pagination-prev');this.$current=this.$pagination.find('.js-current-page');this.$maxPages=this.$pagination.find('.pagination-max-pages');this.containerId='#'+this.$container.attr('id');this.pagePathname=window.location.pathname;this.pageSearch=window.location.search;this.popState=!1;this.ajaxLoader=new MK.utils.ajaxLoader('#'+this.$container.attr('id'));this.ajaxLoader.init()},bindEvents:function bindEvents(){this.$pageLinks.on('click',this.pageClick.bind(this));this.$nextLink.on('click',this.nextClick.bind(this));this.$prevLink.on('click',this.prevClick.bind(this));MK.utils.eventManager.subscribe('ajaxLoaded',this.onLoad.bind(this))},pageClick:function pageClick(e){e.preventDefault();var $this=$(e.currentTarget);var id=parseFloat($this.attr('data-page-id'));if(id>this.ajaxLoader.getData('maxPages')||id<1)return;this.load(id,$this);this.updatePagedNumUrl(id)},nextClick:function nextClick(e){e.preventDefault();if(this.ajaxLoader.getData('paged')===this.ajaxLoader.getData('maxPages'))return;this.load(++this.lastId,$(e.currentTarget));this.updatePagedNumUrl(this.lastId)},prevClick:function prevClick(e){e.preventDefault();if(this.ajaxLoader.getData('paged')===1)return;this.load(--this.lastId,$(e.currentTarget));this.updatePagedNumUrl(this.lastId)},load:function load(id,$el){this.lastId=id;this.ajaxLoader.setData({paged:id});this.ajaxLoader.load(this.unique);this.removeIndicator();MK.ui.loader.add($el)},onLoad:function success(e,response){if(typeof response!=='undefined'&&response.id===this.containerId){this.updatePagination();this.lastId=this.ajaxLoader.getData('paged');if(response.unique===this.unique){this.removeIndicator();this.scrollPage();this.$container.html(response.content)}}},updatePagination:function updatePagination(){var self=this;var isFirst=(this.ajaxLoader.getData('paged')===1);var isLast=(this.ajaxLoader.getData('paged')===this.ajaxLoader.getData('maxPages'));if(isFirst)this.$prevLink.addClass('is-vis-hidden');else this.$prevLink.removeClass('is-vis-hidden');if(isLast)this.$nextLink.addClass('is-vis-hidden');else this.$nextLink.removeClass('is-vis-hidden');this.$current.html(this.ajaxLoader.getData('paged'));this.$maxPages.html(this.ajaxLoader.getData('maxPages'));var displayItems=10;var centerAt=displayItems/2;if(this.ajaxLoader.getData('maxPages')>displayItems){this.$pageLinks.each(function(i){var id=self.lastId-centerAt;id=Math.max(id,1);id=Math.min(id,self.ajaxLoader.getData('maxPages')-displayItems+1);id=id+i;$(this).html(id).attr('data-page-id',id).show();if(i===0&&id>1)$(this).html('...');if(i===displayItems-1&&id<self.ajaxLoader.getData('maxPages'))$(this).html('...')})}else{this.$pageLinks.each(function(i){var $link=$(this);var id=i+1;$link.html(id).attr('data-page-id',id);if(self.ajaxLoader.getData('maxPages')===1){self.$pageLinks.hide()}else{if(i>self.ajaxLoader.getData('maxPages')-1)$link.hide();else $link.show()}})}
this.$pageLinks.filter('[data-page-id="'+this.ajaxLoader.getData('paged')+'"]').addClass('current-page').siblings().removeClass('current-page')},scrollPage:function scrollPage(){var containerOffset=this.$container.offset().top;var offset=containerOffset-MK.val.offsetHeaderHeight(containerOffset)-20;MK.utils.scrollTo(offset)},removeIndicator:function removeIndicator(){MK.ui.loader.remove('.js-pagination-page, .js-pagination-next, .js-pagination-prev')},onInitLoad:function onInitLoad(){var initPagedID=this.$pagination.data('init-pagination');if(initPagedID&&initPagedID>1){this.$current.html(initPagedID);this.$pageLinks.filter('[data-page-id="'+initPagedID+'"]').addClass('current-page').siblings().removeClass('current-page')}
if('onpopstate' in window){var thisPop=this;window.onpopstate=function(event){var id=1;if(typeof event.state==='object'&&event.state){var state=event.state;if(state.hasOwnProperty('MkPagination')){var currentState=state.MkPagination;if(currentState.hasOwnProperty('paged')){id=parseFloat(currentState.paged)}}}else{id=parseFloat(thisPop.getURLPagedID())}
thisPop.popState=!0;thisPop.$pageLinks.filter('[data-page-id="'+id+'"]').trigger('click')}}},updatePagedNumUrl:function updatePagedNumUrl(id){if('history' in window&&'pushState' in history&&id&&!this.popState){var fullPage=this.pagePathname+this.pageSearch;var isQueryPage=!1;var newPage='page/'+id+'/';var expPage=/page\/\d+\/?/;var result=this.pagePathname.match(/\/page\/\d+/);var isPagedExist=(result)?!0:!1;if(!isPagedExist&&this.pageSearch){isQueryPage=this.pageSearch.match(/page\=\d+/);if(isQueryPage){newPage='page='+id;expPage=/page\=\d+/}}
if(id===1){newPage='';if(isQueryPage){expPage=(this.pageSearch.match(/\&+/))?/page\=\d+\&?/:/\?page\=\d+\&?/}}
var newURL=this.pagePathname+newPage+this.pageSearch;if(fullPage.match(expPage)){newURL=fullPage.replace(expPage,newPage)}
var historyState={MkPagination:{url:newURL,paged:id}}
this.popState=!1;window.history.pushState(historyState,null,newURL)}
this.popState=!1},getURLPagedID:function getURLPagedID(){var pathname=window.location.pathname;var search=window.location.search;var pagedId=1;var result='';var isPagedExist=!1;result=pathname.match(/\/page\/(\d+)/);if(result){isPagedExist=!0;pagedId=(result.hasOwnProperty(1))?result[1]:1}
if(!isPagedExist&&search){result=search.match(/page\=(\d+)/);if(result){isPagedExist=!0;pagedId=(result.hasOwnProperty(1))?result[1]:1}}
return pagedId}}}(jQuery));(function($){'use strict';var val=MK.val,utils=MK.utils;MK.component.Parallax=function(el){var self=this,$this=$(el),obj=$this[0],$window=$(window),container=document.getElementById('mk-theme-container'),config=$this.data('parallax-config'),$holder=$(config.holder),headerHeight=null,offset=null,elHeight=null,ticking=!1,isMobile=null;var clientRect=null;var update=function(){obj.style.transform=null;obj.style.top=null;obj.style.bottom=null;isMobile=MK.utils.isMobile();if(isMobile){$this.css('height','');return}
clientRect=$this[0].getBoundingClientRect();offset=clientRect.top;elHeight=clientRect.height;headerHeight=val.offsetHeaderHeight(offset);offset=offset-headerHeight+val.scroll();setPosition();setSize()};var h=0,winH=0,proportion=0,height=0;var setSize=function(){$this.css('height','');winH=$window.height()-headerHeight;h=obj.getBoundingClientRect().height;if(config.speed<=1&&config.speed>0){if(offset===0){$this.css({backgroundAttachment:'scroll','will-change':'transform'})}else{$this.css({height:h+((winH-h)*config.speed),backgroundAttachment:'scroll','will-change':'transform'})}}else if(config.speed>1&&h<=winH){$this.css({height:(winH+((winH*config.speed)-winH)*2),top:-((winH*config.speed)-winH),backgroundAttachment:'scroll','will-change':'transform'})}else if(config.speed>1&&h>winH){proportion=h/winH;height=(winH+((winH*config.speed)-winH)*(1+proportion));$this.css({height:height,top:-(height-(winH*config.speed)),backgroundAttachment:'scroll','will-change':'transform'})}else if(config.speed<0&&h>=winH){height=h*(1-config.speed);$this.css({height:height+(height-h),top:h-height,backgroundAttachment:'scroll','will-change':'transform'})}else if(config.speed<0&&h<winH){var display=(winH+h)/winH;height=h*-config.speed*display;$this.css({height:h+(height*2),top:-height,backgroundAttachment:'scroll','will-change':'transform'})}};var currentPoint=null,progressVal=null,startPoint=null,endPoint=null,$opacityLayer=config.opacity?$this.find(config.opacity):null,scrollY=null;var setPosition=function(){startPoint=offset-winH;endPoint=offset+elHeight+winH-headerHeight;scrollY=val.scroll();if(scrollY<startPoint||scrollY>endPoint){ticking=!1;return}
currentPoint=((-offset+scrollY)*config.speed);$this.css({'-webkit-transform':'translateY('+currentPoint+'px) translateZ(0)','-moz-transform':'translateY('+currentPoint+'px) translateZ(0)','-ms-transform':'translateY('+currentPoint+'px) translateZ(0)','-o-transform':'translateY('+currentPoint+'px) translateZ(0)','transform':'translateY('+currentPoint+'px) translateZ(0)'});ticking=!1};var requestTick=function(){if(!ticking&&!isMobile){ticking=!0;window.requestAnimationFrame(setPosition)}};var init=function(){if(!MK.utils.isSmoothScroll){return}
update();setTimeout(update,100);$window.on('load',update);$window.on('resize',update);window.addResizeListener(container,update);$window.on('scroll',requestTick)};return{init:init}}})(jQuery);(function($){'use strict';MK.component.Preloader=function(el){this.el=el};MK.component.Preloader.prototype={init:function init(){this.cacheElements();this.bindEvents()},cacheElements:function cacheElements(){this.$preloader=$(this.el)},bindEvents:function bindEvents(){this.onLoad()},onLoad:function onLoad(){setTimeout(this.hidePreloader.bind(this),300)},hidePreloader:function hidePreloader(){this.$preloader.hide()}}}(jQuery));(function($){'use strict';MK.ui.loader={tpl:function(){return'<div class="mk-loading-indicator">'+'<div class="mk-loading-indicator__inner">'+'<div class="mk-loading-indicator__icon"></div>'+'<img style="height:100%; width:auto;" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">'+'</div>'+'</div>'},add:function(item){$(item).append(this.tpl)},remove:function(item){if(item)$(item).find('.mk-loading-indicator').remove();else $('.mk-loading-indicator').remove()}}}(jQuery));(function($){if(MK.utils.browser.name==='Edge'||MK.utils.browser.name==='IE'){var val=1;var $edgeClipper=$('.mk-slider-slide');var $sectionClipper=$('.clipper-true');var $bgLayer=$('.background-layer');var onScroll=function onScroll(){val*=-1;if($edgeClipper.length)$edgeClipper.each(redraw);if($sectionClipper.length)$sectionClipper.each(redraw);if($bgLayer.length)$bgLayer.each(redraw)};var redraw=function redraw(){$(this).css('margin-top',val/100)};$(window).on("scroll",function(){window.requestAnimationFrame(onScroll)})}}(jQuery));MK.component.ResponsiveImageSetter=(function($){'use strict';var module={};var viewportClass=getViewportClass();var isRetina=window.devicePixelRatio>=2;function run($imgs){$imgs.filter(function(){return!this.hasAttribute("mk-img-src-setted")}).each(setSrcAttr)}
function setSrcAttr(){var $img=$(this);var set=$img.data('mk-image-src-set');if(set.responsive==='false'&&isRetina&&set['2x'])$img.attr('src',set['2x']);else if(set.responsive==='false')$img.attr('src',set.default);else if(viewportClass===1&&isRetina&&set['2x'])$img.attr('src',set['2x']);else if(viewportClass===0&&set.mobile)$img.attr('src',set.mobile);else $img.attr('src',set.default)}
function getViewportClass(){if(window.matchMedia('(max-width: 736px)').matches)return 0;else return 1}
function handleResize($imgs){if(!$imgs.length)return;var currentViewportClass=getViewportClass();if(currentViewportClass>viewportClass){viewportClass=currentViewportClass;run($imgs)}}
module.init=function($imgs){if(!$imgs.length)return;run($imgs);$imgs.attr('mk-img-src-setted','')};module.onResize=function($imgs){$(window).on('resize',MK.utils.throttle(500,function(){handleResize($imgs)}))};module.handleAjax=function(){setTimeout(function ajaxDelayedCallback(){var $newImgs=$('img[data-mk-image-src-set]').filter(function(){return!this.hasAttribute("mk-lazyload")});if(!$newImgs.length)return;run($newImgs)},100)}
return module}(jQuery));jQuery(function($){var init=function init(){$allImages=$('img[data-mk-image-src-set]').filter(function(index){var isNotPortfolioImage=!$(this).hasClass('portfolio-image'),isNotBlogImage=$(this).closest('.mk-blog-container').length==0,isNotSwiperImage=!$(this).hasClass('swiper-slide-image'),isNotGalleryImage=!$(this).hasClass('mk-gallery-image');return isNotPortfolioImage&&isNotBlogImage&&isNotSwiperImage&&isNotGalleryImage});MK.component.ResponsiveImageSetter.onResize($allImages);MK.component.ResponsiveImageSetter.init($allImages);MK.utils.eventManager.subscribe('ajaxLoaded',MK.component.ResponsiveImageSetter.handleAjax);MK.utils.eventManager.subscribe('ajax-preview',MK.component.ResponsiveImageSetter.handleAjax);MK.utils.eventManager.subscribe('quickViewOpen',MK.component.ResponsiveImageSetter.handleAjax)}
init();$(window).on('vc_reload',init)});(function($){'use strict';var utils=MK.utils;var val=MK.val;var $topLevelSections=$('#theme-page > .vc_row, #theme-page > .mk-main-wrapper-holder, #theme-page > .mk-page-section');$(document).on('click','.mk-skip-to-next',function(){var $this=$(this),btnHeight=$this.hasClass('edge-skip-slider')?150:76,offset=$this.offset().top+btnHeight,nextOffset=utils.nextHigherVal(utils.offsets($topLevelSections),[offset]);utils.scrollTo(nextOffset-val.offsetHeaderHeight(nextOffset))})})(jQuery);(function($){'use strict';MK.ui.Slider=function(container,config){var defaults={slide:'.mk-slider-slide',nav:'.mk-slider-nav',effect:'roulete',ease:'easeOutQuart',slidesPerView:1,slidesToView:1,transitionTime:700,displayTime:3000,autoplay:!0,hasNav:!0,hasPagination:!0,paginationTpl:'<span></span>',paginationEl:'#pagination',draggable:!0,fluidHeight:!1,pauseOnHover:!1,lazyload:!1,activeClass:'is-active',edgeSlider:!1,spinnerTpl:'<div class="mk-slider-spinner-wrap"><div class="mk-slider-spinner-fallback"></div><svg class="mk-slider-spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="mk-slider-spinner-path" fill="none" stroke-width="4" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div>',onInitialize:function(){},onAfterSlide:function(id){},onBeforeSlide:function(id){}};this.state={id:0,moveForward:!0,running:!1,zIFlow:null,stop:!1,};this.config=$.extend(defaults,config);this.container=container;this.initPerView=this.config.slidesPerView;this.activeTimer=null;this.autoplay=null;this.timer=null;this.timerRemaining=parseInt(this.config.displayTime);this.config.lazyload=JSON.parse(this.config.lazyload);this.config.edgeSlider=JSON.parse(this.config.edgeSlider);this.imageLoader=null;imagesLoaded.prototype.abort=function(){this.progress=this.complete=function(){}}};MK.ui.Slider.prototype={init:function(){this.setPerViewItems();this.cacheElements();this.getSlideSize();this.bindEvents();this.setSize();this.setPos();this.updateId(-1);this.updateId(1);this.val=this.dynamicVal();this.timeline=this.prepareTimeline(this.config.transitionTime);this.timeline.build();if(this.config.hasPagination){this.buildPagination()}
if(this.config.autoplay&&document.hasFocus()){this.setTimer()}
if(typeof this.config.onInitialize==='function'){this.config.onInitialize(this.slides)}
if(this.config.fluidHeight===!0){$(this.slides).height('auto');$(this.container).css('transition','height '+200+'ms ease-out');this.setHeight(0)}
if(this.config.fluidHeight==='toHighest'){this.setHeightToHighest()}
$(this.slides).each(this.createTimer);if(this.config.lazyload&&this.config.edgeSlider){if($(this.slides[this.state.id]).find('video').length===0){var $slideImg=$(this.slides[this.state.id]).children('[data-mk-img-set]');MK.component.BackgroundImageSetter.init($slideImg)}
$(this.config.spinnerTpl).prependTo(this.$slides)}else{MK.component.BackgroundImageSetter.init($(this.slides).children('[data-mk-img-set]'))}},cacheElements:function(){this.container=this.isNode(this.container)?this.container:document.querySelectorAll(this.container)[0];this.slides=this.container.querySelectorAll(this.config.slide);this.$slides=$(this.slides);if(this.config.hasNav){this.$nav=$(this.config.nav)}
if(this.config.hasPagination){this.$pagination=$(this.config.paginationEl)}},bindEvents:function(){var $window=$(window);if(this.config.slidesPerView>1){$window.on('resize',this.setPerViewItems.bind(this))}
if(this.config.hasNav){this.eventsNav()}
if(this.config.hasPagination){this.eventsPag()}
if(this.config.draggable){this.dragHandler()}
if(this.config.autoplay){$window.on('focus',this.windowActive.bind(this));$window.on('blur',this.windowInactive.bind(this))}
if(this.config.pauseOnHover){$(this.container).on('mouseleave',this.setTimer.bind(this));$(this.container).on('mouseenter',this.unsetTimer.bind(this))}
if(this.config.fluidHeight==='toHighest'){$window.on('resize',this.setHeightToHighest.bind(this))}},setPerViewItems:function(){if(window.matchMedia('(max-width: 500px)').matches){this.config.slidesPerView=1}else if(window.matchMedia('(max-width: 767px)').matches&&this.initPerView>=2){this.config.slidesPerView=2}else if(window.matchMedia('(max-width: 1024px)').matches&&this.initPerView>=3){this.config.slidesPerView=3}else{this.config.slidesPerView=this.initPerView}
if(typeof this.slides==='undefined')return;this.getSlideSize();this.setSize();this.setPos();this.timeline=this.prepareTimeline(this.config.transitionTime);this.timeline.build()},eventsNav:function(){this.$nav.on('click','a',this.handleNav.bind(this))},eventsPag:function(){this.$pagination.on('click','a',this.handlePagination.bind(this))},handleNav:function(e){e.preventDefault();if(this.state.running){return}
this.state.running=!0;var $this=$(e.currentTarget),moveForward=$this.data('direction')==='next';if(this.config.autoplay){this.unsetTimer();setTimeout(this.setTimer.bind(this),this.config.transitionTime)}
this.state.moveForward=moveForward;this.timeline.build();this.timeline.play();this.setActive(this.nextId(moveForward?1:-1));if(this.config.fluidHeight){this.setHeight(this.nextId(moveForward?1:-1))}},handlePagination:function(e){e.preventDefault();var $this=$(e.currentTarget),id=$this.index();this.goTo(id)},reset:function(){this.state.stop=!0;this.state.id=0;this.setPos();this.unsetTimer();this.setTimer()},goTo:function(id){if(this.state.running){return}
this.state.running=!0;var lastId=this.state.id;if(lastId===id){return}else if(lastId<id){this.state.moveForward=!0}else{this.state.moveForward=!1}
if(this.config.autoplay){this.unsetTimer();setTimeout(this.setTimer.bind(this),this.config.transitionTime)}
this.timeline.build(Math.abs(lastId-id));this.timeline.play();this.setActive(id);if(this.config.fluidHeight){this.setHeight(id)}},windowActive:function(){this.setTimer(!1,!0);$(this.container).removeClass('is-paused')},windowInactive:function(){this.unsetTimer();$(this.container).addClass('is-paused')},updateId:function(val){this.state.id=this.nextId(val)},nextId:function(val){var len=this.slides.length,insertVal=this.state.id+val;insertVal=(insertVal>=0)?insertVal:len+val;insertVal=(insertVal>=len)?0:insertVal;return insertVal},setStyle:function(obj,style){var hasT=style.transform,t={x:(hasT)?style.transform.translateX:null,y:(hasT)?style.transform.translateY:null,scale:(hasT)?style.transform.scale:null,rotate:(hasT)?style.transform.rotate:null,rotateX:(hasT)?style.transform.rotateX:null,rotateY:(hasT)?style.transform.rotateY:null},z='translateZ(0)',x=(t.x)?'translateX('+t.x+'%)':'translateX(0)',y=(t.y)?'translateY('+t.y+'%)':'translateY(0)',s=(t.scale)?'scale('+t.scale+')':'scale(1)',r=(t.rotate)?'rotate('+t.rotate+'deg)':'rotate(0)',rX=(t.rotateX)?'rotateX('+t.rotateX+'deg)':'',rY=(t.rotateY)?'rotateY('+t.rotateY+'deg)':'',o=style.opacity,h=style.height,w=style.width;var c=z+x+y+s+r+rX+rY;if(c.length){obj.style.webkitTransform=c;obj.style.msTransform=c;obj.style.transform=c}
if(typeof o==='number'){obj.style.opacity=o}
if(h){obj.style.height=h+'%'}
if(w){obj.style.width=w+'%'}},setPos:function(){if(typeof this.slides==='undefined')return;var id=this.state.id,i=0,len=this.slides.length,animation=this.animation[this.config.effect],axis=animation.axis,animNext=animation.next,animActi=animation.active,animPrev=animation.prev,perView=this.config.slidesPerView,slideId=null,zIFlow=null,style={};style.transform={};for(;i<len;i+=1){if(i<perView){style=animActi;style.transform['translate'+axis]=i*100}else{style=this.state.moveForward?animNext:animPrev;style.transform['translate'+axis]=this.state.moveForward?perView*100:-100}
this.slides[i].style.zIndex=0;slideId=(i+id)%len;this.setStyle(this.slides[slideId],style)}},setSize:function(){if(typeof this.slides==='undefined')return;var i=0,len=this.slides.length,axis=this.animation[this.config.effect].axis,slideSize=this.slideSize,style={};if(axis==='Y'){style.height=slideSize[axis]}else{style.width=slideSize[axis]}
for(;i<len;i+=1){this.setStyle(this.slides[i],style)}},setHeight:function(id){var $slides=$(this.slides),$activeSlide=$slides.eq(id);var currentHeight=$activeSlide.height();$(this.container).height(currentHeight)},setHeightToHighest:function(){var $slides=$(this.slides),height=0;$slides.each(function(){height=Math.max(height,$(this).find('> div').outerHeight())});$(this.container).height(height)},prepareTimeline:function(time){var self=this,iteration=0,totalIter=time/(1000/60),animLoop=[],aL=0,loops=1,ease=this.config.ease,currentStyle,timeProg,build,move,add,play,reverse,progress,kill;var len=this.slides.length,perView=this.config.slidesPerView,animation=this.animation[this.config.effect],animAxis=animation.axis,animNext=animation.next,animActi=animation.active,animPrev=animation.prev,style={},slideId=null,zIFlow=null;style.transform={};build=function(repeats){var currentEase=ease;loops=repeats||loops;if(!loops){return}
if(loops>1){currentEase='linearEase'}
kill();self.setPos();var id=self.state.id,moveForward=self.state.moveForward,i=0,axisMove=(moveForward)?-100:100;for(;i<=perView;i+=1){slideId=((moveForward)?i+id:i+id-1)%len;slideId=(slideId<0)?len+slideId:slideId;if(i===0){style=moveForward?animPrev:animActi}else if(i===perView){style=moveForward?animActi:animNext}else{style=animActi}
zIFlow=(self.state.moveForward)?animNext.zIndex:animPrev.zIndex;if(zIFlow){self.slides[slideId].style.zIndex=(zIFlow==='+')?i+1:len-i}
style.transform['translate'+animAxis]=axisMove;add(self.slides[slideId],style,currentEase)}};add=function(slide,toStyles,ease){if(typeof slide==='undefined'){throw 'Add at least one slide'}
var fromStyles=slide.style,style=self.refStyle(toStyles,fromStyles);animLoop.push([slide,style,ease]);aL+=1};move=function(startProg,mode){if(isTest)return;var currentTotalIter=totalIter;if(loops>1){currentTotalIter=totalIter/5}
if(!self.state.running){self.state.running=!0}
if(startProg){iteration=Math.ceil(startProg*currentTotalIter)}
timeProg=iteration/currentTotalIter;progress(timeProg);if(iteration>=currentTotalIter&&mode==='play'||iteration<=0&&mode==='reverse'){self.state.running=!1;iteration=0;kill();self.updateId(self.state.moveForward?1:-1);loops-=1;if(loops>0){build();play()}
if(!loops){loops=1;self.timerRemaining=parseInt(self.config.displayTime);self.config.onAfterSlide(self.state.id)}
return}
if(mode==='play'){iteration+=1}else{iteration-=1}
requestAnimationFrame(function(){if(self.state.stop)return;move(0,mode)})};play=function(startProg){var $nextSlide=$(self.slides[self.nextId(self.state.moveForward?1:-1)]);if(self.config.lazyload&&self.config.edgeSlider){var $slideImg=$nextSlide.find('[data-mk-img-set]');if($slideImg.length){MK.component.BackgroundImageSetter.init($slideImg)}}
self.config.onBeforeSlide(self.nextId(self.state.moveForward?1:-1));var start=startProg||0;iteration=0;self.state.stop=!1;move(start,'play')};reverse=function(startProg){var start=startProg||1;move(start,'reverse')};progress=function(progVal){var aI=0,currentStyle;for(aI;aI<aL;aI++){if(progVal!==1&&progVal!==0){currentStyle=self.currentStyle(progVal,animLoop[aI][1],animLoop[aI][2])}else if(progVal===1){currentStyle=self.currentStyle(progVal,animLoop[aI][1],'linearEase')}else if(progVal===0){currentStyle=self.currentStyle(progVal,animLoop[aI][1],'linearEase')}
self.setStyle(animLoop[aI][0],currentStyle)}};kill=function(){animLoop=[];aL=0};return{build:build,add:add,play:play,reverse:reverse,progress:progress}},refStyle:function(toStyles,fromStyles){var axis=this.animation[this.config.effect].axis,style={},initVal,changeVal,endVal,dynamicEnd,styleProp,transProp,transform;for(styleProp in toStyles){if(styleProp==='transform'){transform=this.getTransforms(fromStyles);style.transform={};for(transProp in toStyles.transform){if(transProp==='translateZ'){continue}
initVal=transform[transProp]||0;dynamicEnd=(transProp==='translate'+axis)?initVal:0;endVal=toStyles.transform[transProp]+dynamicEnd;changeVal=endVal-initVal;style.transform[transProp]=[initVal,changeVal]}}else if(styleProp==='zIndex'){continue}else{initVal=parseFloat(fromStyles[styleProp])||0;endVal=toStyles[styleProp];changeVal=endVal-initVal;style[styleProp]=[initVal,changeVal]}}
return style},currentStyle:function(progress,style,ease){var self=this,currentStyle={},currentVals,styleProp,transProp,prog;for(styleProp in style){if(styleProp==='transform'){currentStyle.transform={};for(transProp in style.transform){if(transProp==='translateZ'){continue}
currentVals=style.transform[transProp];currentStyle.transform[transProp]=self.ease[ease](progress,currentVals[0],currentVals[1],1)}}else{currentVals=style[styleProp];currentStyle[styleProp]=self.ease[ease](progress,currentVals[0],currentVals[1],1)}}
return currentStyle},setActive:function(id){var $slides=$(this.slides),className=this.config.activeClass;$slides.removeClass(className);if(this.config.hasPagination){var $pagination=this.$pagination.find('a');$pagination.removeClass(className);$pagination.eq(id).addClass(className)}
if(this.activeTimer){clearTimeout(this.activeTimer);if(this.imageLoader){this.imageLoader.abort()}}
var self=this;this.activeTimer=setTimeout(function(){var $currentSlide=$slides.eq(id);if(self.config.lazyload&&self.config.edgeSlider){if($currentSlide.find('.mk-section-video').length&&$currentSlide.children('.mk-video-section-touch').length){var imgSet=$currentSlide.children('.mk-video-section-touch').data('mk-img-set');var exactImg=MK.component.BackgroundImageSetter.getImage(imgSet);var $bgImage=$('<img>').attr('src',exactImg);self.imageLoader=imagesLoaded($bgImage[0],function(instance){$currentSlide.children('.mk-slider-spinner-wrap').addClass('mk-slider-spinner-wrap-hidden');setTimeout(function(){$currentSlide.children('.mk-slider-spinner-wrap').hide()},200);$currentSlide.addClass(className)})}else if($currentSlide.find('.mk-section-video').length&&$currentSlide.children('.mk-video-section-touch').length===0){$currentSlide.children('.mk-slider-spinner-wrap').addClass('mk-slider-spinner-wrap-hidden');setTimeout(function(){$currentSlide.children('.mk-slider-spinner-wrap').hide()},200);$currentSlide.addClass(className)}else{if($currentSlide.children('[data-mk-img-set]').length){var imgSet=$currentSlide.children('[data-mk-img-set]').data('mk-img-set');var exactImg=MK.component.BackgroundImageSetter.getImage(imgSet);var $bgImage=$('<img>').attr('src',exactImg);self.unsetTimer();self.imageLoader=imagesLoaded($bgImage[0],function(instance){$currentSlide.children('.mk-slider-spinner-wrap').addClass('mk-slider-spinner-wrap-hidden');setTimeout(function(){$currentSlide.children('.mk-slider-spinner-wrap').hide()},200);self.setTimer(!1,!1,$currentSlide.data('timer')||Number(self.config.displayTime));$currentSlide.addClass(className)})}else{$currentSlide.children('.mk-slider-spinner-wrap').addClass('mk-slider-spinner-wrap-hidden');setTimeout(function(){$currentSlide.children('.mk-slider-spinner-wrap').hide()},200);self.setTimer(!1,!1,$currentSlide.data('timer')||Number(self.config.displayTime));$currentSlide.addClass(className)}}}else{$currentSlide.addClass(className)}},this.config.transitionTime)},createTimer:function(){var $slide=$(this),video=$slide.find('video').get(0);if(video){var interval=setInterval(function(){if(video.readyState>0){$slide.data('timer',(video.duration*1000));$slide.attr('data-timer',(video.duration*1000));clearInterval(interval)}},100)}},setTimer:function(isFirst,isPaused,fixed_time){var customTimer=this.$slides.eq(this.nextId(this.state.moveForward?1:-1)).data('timer'),trans=parseInt(this.config.transitionTime),interval=customTimer?customTimer:parseInt(this.config.displayTime),timer=interval+trans;var self=this,first=isFirst||!0,fixed_time=fixed_time||0,create,run;this.timer=!0;this.lastSetTimer=Date.now();create=function(){if(self.autoplay){clearTimeout(self.autoplay)}
if(!self.timer){return}
self.state.moveForward=!0;self.timeline.build();self.timeline.play();self.setActive(self.nextId(1));if(self.config.fluidHeight){self.setHeight(self.nextId(1))}
first=!1;self.lastSetTimer=Date.now();run()};run=function(newInterval){customTimer=self.$slides.eq(self.nextId(self.state.moveForward?1:-1)).data('timer');interval=customTimer?customTimer:parseInt(self.config.displayTime);timer=interval+trans;var time=newInterval||timer;self.autoplay=setTimeout(create,time)};if(fixed_time){run(fixed_time)}else if(isPaused){run(this.timerRemaining)}else{run()}},unsetTimer:function(){this.timer=!1;this.lastUnsetTimer=Date.now();this.timerRemaining-=this.lastUnsetTimer-this.lastSetTimer;if(this.autoplay){clearTimeout(this.autoplay)}},buildPagination:function(){var i=0,len=this.slides.length,tpl='';for(;i<len;i+=1){tpl+='<a href="javascript:;">'+this.config.paginationTpl+'</a>'}
this.$pagination.html(tpl);this.setActive(0)},getSlideSize:function(){this.slideSize={X:100/this.config.slidesPerView,Y:100/this.config.slidesPerView}},getTransforms:function(style){var transform=style.transform||style.webkitTransform||style.mozTransform,regex=/(\w+)\(([^)]*)\)/g,match,T={};if(typeof transform!=='string'){throw 'Transform prop is not a string.'}
if(!transform){return}
while(match=regex.exec(transform)){T[match[1]]=parseFloat(match[2])}
return T},isNode:function(o){return(typeof Node==="object"?o instanceof Node:o&&typeof o==="object"&&typeof o.nodeType==="number"&&typeof o.nodeName==="string")},dragHandler:function(){var self=this,$container=$(this.container),prevBuild=!1,nextBuild=!1,dragging=!1,buffor=5,dragStart,dragMove,dragEnd,progress;progress=function(moveX){return moveX/self.val.viewportW()};dragStart=function(moveX,startX){};dragMove=function(moveX){if(self.state.running)return;if(moveX<-buffor){if(!nextBuild){self.state.moveForward=!0;self.timeline.build();nextBuild=!0;prevBuild=!1;self.unsetTimer()}else{self.timeline.progress(-progress(moveX))}
dragging=!0}else if(moveX>buffor){if(!prevBuild){self.state.moveForward=!1;self.timeline.build();prevBuild=!0;nextBuild=!1;self.unsetTimer()}else{self.timeline.progress(progress(moveX))}
dragging=!0}};dragEnd=function(moveX){if(dragging){var prog=progress(moveX),absProg=prog<0?-prog:prog;if(absProg>0.1){self.timeline.play(absProg);self.setActive(self.nextId(prog<0?1:-1));if(self.config.fluidHeight){self.setHeight(self.nextId(prog<0?1:-1))}}else{self.timeline.reverse(absProg);if(prog<0){self.updateId(-1)}else{self.updateId(1)}}
prevBuild=!1;nextBuild=!1;dragging=!1;if(self.config.autoplay){self.setTimer(!1)}}};this.drag($container,dragStart,dragMove,dragEnd)},drag:function($el,startFn,moveFn,stopFn){var touchX,touchY,movX,movY,go,evt,prevent,start,move,stop;prevent=function(e){e.preventDefault()};start=function(e){$el.on("mousemove",prevent);$el.on("touchmove",move);$el.on("mousemove",move);evt=(e.type==='touchstart')?e.originalEvent.touches[0]:e;touchX=evt.pageX;if(typeof startFn==='function'){startFn(movX,touchX)}};move=function(e){evt=(e.type==='touchmove')?e.originalEvent.touches[0]:e;movX=evt.pageX-touchX;if(typeof moveFn==='function'){moveFn(movX)}};stop=function(e){$el.off("mousemove",prevent);$el.off("touchmove",move);$el.off("mousemove",move);if(typeof stopFn==='function'){stopFn(movX)}};$el.on("touchstart",start);$el.on("mousedown",start);$el.on("touchend",stop);$el.on("touchleave",stop);$el.on("touchcancel",stop);$el.on("mouseup",stop);$el.on("mouseleave",stop)},dynamicVal:function(){var $window=$(window),update,getViewportW,viewportW;update=function(){viewportW=$window.width()};getViewportW=function(){return viewportW};update();$window.on('load',update);$window.on('resize',update);return{viewportW:getViewportW}}};MK.ui.Slider.prototype.animation={slide:{axis:'X',next:{transform:{}},active:{transform:{}},prev:{transform:{}}},vertical_slide:{axis:'Y',next:{transform:{}},active:{transform:{}},prev:{transform:{}}},perspective_flip:{axis:'Y',next:{transform:{rotateX:80}},active:{transform:{rotateX:0}},prev:{transform:{rotateX:0}}},zoom:{axis:'Z',next:{opacity:0,transform:{scale:0.9}},active:{opacity:1,transform:{scale:1}},prev:{opacity:0,transform:{scale:1.1}}},fade:{axis:'Z',next:{opacity:0,transform:{}},active:{opacity:1,transform:{}},prev:{opacity:0,transform:{}}},kenburned:{axis:'Z',next:{opacity:0,transform:{}},active:{opacity:1,transform:{}},prev:{opacity:0,transform:{}}},zoom_out:{axis:'Z',next:{zIndex:'+',opacity:1,transform:{translateY:100,scale:1}},active:{opacity:1,transform:{translateY:0,scale:1}},prev:{zIndex:'+',opacity:0,transform:{translateY:0,scale:0.5}}},horizontal_curtain:{axis:'Z',next:{zIndex:'+',transform:{translateX:100,}},active:{transform:{translateX:0,}},prev:{zIndex:'+',transform:{translateX:-70,}}},roulete:{axis:'X',next:{opacity:0.5,transform:{scale:0.5,rotate:10,translateY:20}},active:{opacity:1,transform:{scale:1,rotate:0,translateY:0}},prev:{opacity:0.3,transform:{scale:0.5,rotate:-10,translateY:20}}}};MK.ui.Slider.prototype.ease={linearEase:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*currentIteration/totalIterations+startValue},easeInQuad:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*(currentIteration/=totalIterations)*currentIteration+startValue},easeOutQuad:function(currentIteration,startValue,changeInValue,totalIterations){return-changeInValue*(currentIteration/=totalIterations)*(currentIteration-2)+startValue},easeInOutQuad:function(currentIteration,startValue,changeInValue,totalIterations){if((currentIteration/=totalIterations/2)<1){return changeInValue/2*currentIteration*currentIteration+startValue}
return-changeInValue/2*((--currentIteration)*(currentIteration-2)-1)+startValue},easeInCubic:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*Math.pow(currentIteration/totalIterations,3)+startValue},easeOutCubic:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*(Math.pow(currentIteration/totalIterations-1,3)+1)+startValue},easeInOutCubic:function(currentIteration,startValue,changeInValue,totalIterations){if((currentIteration/=totalIterations/2)<1){return changeInValue/2*Math.pow(currentIteration,3)+startValue}
return changeInValue/2*(Math.pow(currentIteration-2,3)+2)+startValue},easeInQuart:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*Math.pow(currentIteration/totalIterations,4)+startValue},easeOutQuart:function(currentIteration,startValue,changeInValue,totalIterations){return-changeInValue*(Math.pow(currentIteration/totalIterations-1,4)-1)+startValue},easeInOutQuart:function(currentIteration,startValue,changeInValue,totalIterations){if((currentIteration/=totalIterations/2)<1){return changeInValue/2*Math.pow(currentIteration,4)+startValue}
return-changeInValue/2*(Math.pow(currentIteration-2,4)-2)+startValue},easeInQuint:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*Math.pow(currentIteration/totalIterations,5)+startValue},easeOutQuint:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*(Math.pow(currentIteration/totalIterations-1,5)+1)+startValue},easeInOutQuint:function(currentIteration,startValue,changeInValue,totalIterations){if((currentIteration/=totalIterations/2)<1){return changeInValue/2*Math.pow(currentIteration,5)+startValue}
return changeInValue/2*(Math.pow(currentIteration-2,5)+2)+startValue},easeInSine:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*(1-Math.cos(currentIteration/totalIterations*(Math.PI/2)))+startValue},easeOutSine:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*Math.sin(currentIteration/totalIterations*(Math.PI/2))+startValue},easeInOutSine:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue/2*(1-Math.cos(Math.PI*currentIteration/totalIterations))+startValue},easeInExpo:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*Math.pow(2,10*(currentIteration/totalIterations-1))+startValue},easeOutExpo:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*(-Math.pow(2,-10*currentIteration/totalIterations)+1)+startValue},easeInOutExpo:function(currentIteration,startValue,changeInValue,totalIterations){if((currentIteration/=totalIterations/2)<1){return changeInValue/2*Math.pow(2,10*(currentIteration-1))+startValue}
return changeInValue/2*(-Math.pow(2,-10*--currentIteration)+2)+startValue},easeInCirc:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*(1-Math.sqrt(1-(currentIteration/=totalIterations)*currentIteration))+startValue},easeOutCirc:function(currentIteration,startValue,changeInValue,totalIterations){return changeInValue*Math.sqrt(1-(currentIteration=currentIteration/totalIterations-1)*currentIteration)+startValue},easeInOutCirc:function(currentIteration,startValue,changeInValue,totalIterations){if((currentIteration/=totalIterations/2)<1){return changeInValue/2*(1-Math.sqrt(1-currentIteration*currentIteration))+startValue}
return changeInValue/2*(Math.sqrt(1-(currentIteration-=2)*currentIteration)+1)+startValue}}})(jQuery);(function($){'use strict';MK.component.SocialShare=function(el){var networks={twitter:'http://twitter.com/intent/tweet?text={title} {url}',pinterest:'http://pinterest.com/pin/create/button/?url={url}&media={image}&description={title}',facebook:'https://www.facebook.com/sharer/sharer.php?u={url}',googleplus:'https://plus.google.com/share?url={url}',linkedin:'http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={desc}',digg:'http://digg.com/submit?url={url}&title={title}',reddit:'http://reddit.com/submit?url={url}&title={title}',};this.networks=networks;this.el=el};MK.component.SocialShare.prototype={init:function(){this.cacheElements();this.bindEvents()},cacheElements:function(){this.$this=$(this.el)},bindEvents:function(){var thisObject=this;var tempClass="";$.each(this.networks,function(key,value){thisObject.$tempClass=$('.'+key+'-share');thisObject.$tempClass.click(thisObject.openSharingDialog.bind(self,this,key))})},openSharingDialog:function(url,site,args){var urlWrapper=url;var rx=new RegExp('\{[a-z]*\}','g'),res;var match=rx.exec(url);while(match!=null){var pureAttr=match[0].replace("{","").replace("}","");var attValue=$(args.currentTarget).attr('data-'+pureAttr);if(attValue===undefined||attValue===null){attValue=""}
attValue=attValue.replace('#','%23');urlWrapper=urlWrapper.replace(match,attValue);match=rx.exec(url)}
window.open(urlWrapper,site+"Window","height=320,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")},};var $body=$('body');if(!$body.length)return;$body.each(function(){var socialShare=new MK.component.SocialShare(this);socialShare.init()})})(jQuery);(function($){'use strict';MK.component.Sortable=function(el){this.el=el};MK.component.Sortable.prototype={init:function init(){this.cacheElements();this.bindEvents()},cacheElements:function cacheElements(){this.unique=Date.now();this.$filter=$(this.el);this.config=this.$filter.data('sortable-config');this.ajaxLoader=new MK.utils.ajaxLoader(this.config.container);this.ajaxLoader.init();this.$container=$(this.config.container);this.$navItems=this.$filter.find('a');this.$filterItems=this.$container.find(this.config.item)},bindEvents:function bindEvents(){this.$navItems.on('click',this.handleClick.bind(this));MK.utils.eventManager.subscribe('ajaxLoaded',this.onLoad.bind(this))},handleClick:function handleClick(e){e.preventDefault();var $item=$(e.currentTarget);var term=$item.data('filter');this.$navItems.removeClass('current');$item.addClass('current');if(this.config.mode==='ajax')this.inDB(term,$item);else this.inPage(term)},inDB:function inDB(term,$item){MK.ui.loader.remove(this.$filter);MK.ui.loader.add($item);if(this.$container.siblings('.mk-ajax-loaded-posts').length){this.$container.siblings('.mk-ajax-loaded-posts').attr('data-loop-loaded-posts','')}
this.ajaxLoader.setData({paged:1,term:term});this.ajaxLoader.load(this.unique)},inPage:function inPage(term){var $filterItems=this.$container.find(this.config.item);$filterItems.removeClass('is-hidden');var className=term.replace(/, /g,", .");if(term!=='*')$filterItems.not('.'+className).addClass('is-hidden');MK.utils.eventManager.publish('staticFilter')},onLoad:function onLoad(e,response){if(this.config.mode==='static'){this.$navItems.removeClass('current').first().addClass('current')}
if(typeof response!=='undefined'&&response.id===this.config.container){MK.ui.loader.remove(this.$filter);if(response.unique===this.unique){this.$container.html(response.content);this.ajaxLoader.setData({paged:1})}}}}})(jQuery);(function($){'use strict';MK.component.Tabs=function(el){var defaults={activeClass:'is-active'};this.config=defaults;this.el=el};MK.component.Tabs.prototype={init:function(){this.cacheElements();this.bindEvents()},cacheElements:function(){this.$this=$(this.el);this.$tabs=this.$this.find('.mk-tabs-tab');this.$panes=this.$this.find('.mk-tabs-pane');this.currentId=0},bindEvents:function(){var self=this;this.$tabs.on('click',this.switchPane.bind(this))},switchPane:function(evt){evt.preventDefault();var clickedId=$(evt.currentTarget).index();this.hide(this.currentId);this.show(clickedId);this.currentId=clickedId;MK.utils.eventManager.publish('item-expanded')},show:function(id){this.$tabs.eq(id).addClass(this.config.activeClass);this.$panes.eq(id).addClass(this.config.activeClass)},hide:function(id){this.$tabs.eq(id).removeClass(this.config.activeClass);this.$panes.eq(id).removeClass(this.config.activeClass)}}})(jQuery);function mk_tabs(){}
function mk_tabs_responsive(){}(function($){'use strict';$(document).on('click',function(e){$('.mk-toggle-trigger').removeClass('mk-toggle-active')});function toggle(e){e.preventDefault();e.stopPropagation();var $this=$(e.currentTarget);if(!$this.hasClass('mk-toggle-active')){$('.mk-box-to-trigger').fadeOut(200);$this.parent().find('.mk-box-to-trigger').fadeIn(250);$('.mk-toggle-trigger').removeClass('mk-toggle-active');$this.addClass('mk-toggle-active')}else{$('.mk-box-to-trigger').fadeOut(200);$this.removeClass('mk-toggle-active')}}
function assignToggle(){setTimeout(function(){$('.mk-toggle-trigger').off('click',toggle);$('.mk-toggle-trigger').on('click',toggle)},100)}
assignToggle();MK.utils.eventManager.subscribe('ajaxLoaded',assignToggle);MK.utils.eventManager.subscribe('ajax-preview',assignToggle);$(window).on('vc_reload',function(){assignToggle();MK.utils.eventManager.subscribe('ajaxLoaded',assignToggle);MK.utils.eventManager.subscribe('ajax-preview',assignToggle)})}(jQuery));(function($){'use strict';var $iframes=$('iframe');$iframes.each(function(){var $iframe=$(this);var parent=$iframe.parent().get(0);var tagName=parent.tagName;if(tagName==='P')$iframe.wrap('<div class="mk-video-container"></div>')})}(jQuery));(function($){'use strict';if(MK.utils.isMobile()){$('.mk-animate-element').removeClass('mk-animate-element');return}
var init=function init(){var $rootLevelEls=$('.js-master-row, .widget');$rootLevelEls.each(spyViewport);$rootLevelEls.each(function rootLevelEl(){var $animateEl=$(this).find('.mk-animate-element');$animateEl.each(spyViewport);var browserName=MK.utils.browser.name;if(browserName==='Firefox'){var $rightToLeft=$(this).find('.right-to-left');if($rightToLeft.length>0){$('#theme-page').css('overflow-x','hidden')}}})};var spyViewport=function spyViewport(i){var self=this;MK.utils.scrollSpy(this,{position:'bottom',threshold:200,after:function(){animate.call(self,i)}})};var animate=function animate(i){var $this=$(this);setTimeout(function(){$this.addClass('mk-in-viewport')},100*i)};$(window).on('load vc_reload',init)}(jQuery));function product_loop_add_cart(){var $body=$('body');$body.on('click','.add_to_cart_button',function(){var icon='<svg class="mk-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.011 74.99c-46.326-46.328-110.318-74.99-181.011-74.99-109.744 0-203.345 69.064-239.749 166.094l59.938 22.477c27.302-72.773 97.503-124.571 179.811-124.571 53.02 0 101.01 21.5 135.753 56.247l-71.753 71.753h192v-192l-74.989 74.99zm-181.011 373.01c-53.02 0-101.013-21.496-135.756-56.244l71.756-71.756h-192v192l74.997-74.997c46.323 46.331 110.309 74.997 181.003 74.997 109.745 0 203.346-69.064 239.75-166.094l-59.938-22.477c-27.302 72.773-97.503 124.571-179.812 124.571z"/></svg>';var $holder=$(this).parents('.product:eq(0)');var $i=$holder.find('.product-loading-icon');$holder.addClass('adding-to-cart').removeClass('added-to-cart');$i.html(icon)});$body.bind('added_to_cart',function(){var icon='<svg class="mk-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 64l-240 240-112-112-80 80 192 192 320-320z"/></svg>';var $holder=$('.adding-to-cart');var $i=$holder.find('.product-loading-icon');$holder.removeClass('adding-to-cart').addClass('added-to-cart');$i.html(icon)})}(function($){'use strict';$(window).on('load',function(){MK.core.initAll(document);MK.utils.scrollToURLHash();setTimeout(function(){MK.ui.preloader.hide();$('.mk-preloader').hide();$('body').removeClass('loading')},150)});$(window).on('vc_reload',function(){setTimeout(function(){MK.core.initAll(document)},100)});$(document).on('click','.js-smooth-scroll, .js-main-nav a',smoothScrollToAnchor);$('.side_dashboard_menu a').on('click',smoothScrollToAnchor);function smoothScrollToAnchor(evt){var anchor=MK.utils.detectAnchor(this);var $this=$(evt.currentTarget);var loc=window.location;var currentPage=loc.origin+loc.pathname;var href=$this.attr('href');var linkSplit=(href)?href.split('#'):'';var hrefPage=linkSplit[0]?linkSplit[0]:'';var hrefHash=linkSplit[1]?linkSplit[1]:'';if(anchor.length){if(hrefPage===currentPage||hrefPage==='')evt.preventDefault();MK.utils.scrollToAnchor(anchor)}else if($this.attr('href')==='#'){evt.preventDefault()}}}(jQuery))})(jQuery);(function($){'use strict';var _toBuild=[];MK.component.AdvancedGMaps=function(el){var $this=$(el),container=document.getElementById('mk-theme-container'),data=$this.data('advancedgmaps-config'),apikey=data.options.apikey?('key='+data.options.apikey+'&'):!1,map=null,bounds=null,infoWindow=null,position=null;var build=function(){data.options.scrollwheel=!1;data.options.mapTypeId=google.maps.MapTypeId[data.options.mapTypeId];data.options.styles=data.style;bounds=new google.maps.LatLngBounds();map=new google.maps.Map(el,data.options);infoWindow=new google.maps.InfoWindow();map.setOptions({panControl:data.options.panControl,draggable:data.options.draggable,zoomControl:data.options.zoomControl,mapTypeControl:data.options.scaleControl,scaleControl:data.options.mapTypeControl,});var marker,i;map.setTilt(45);for(i=0;i<data.places.length;i++){if(data.places[i].latitude&&data.places[i].longitude){position=new google.maps.LatLng(data.places[i].latitude,data.places[i].longitude);bounds.extend(position);marker=new google.maps.Marker({position:position,map:map,title:data.places[i].address,icon:(data.places[i].marker)?data.places[i].marker:data.icon});google.maps.event.addListener(marker,'click',(function(marker,i){return function(){if(data.places[i].address&&data.places[i].address.length>1){infoWindow.setContent('<div class="info_content"><p>'+data.places[i].address+'</p></div>');infoWindow.open(map,marker)}else{infoWindow.setContent('');infoWindow.close()}}})(marker,i));if(i>0){map.fitBounds(bounds)}else{var latLang={lat:parseFloat(data.places[i].latitude),lng:parseFloat(data.places[i].longitude)};map.setCenter(latLang);map.setZoom(data.options.zoom)}}}
var boundsListener=google.maps.event.addListener((map),'bounds_changed',function(event){this.setZoom(data.options.zoom);google.maps.event.removeListener(boundsListener)});var update=function(){google.maps.event.trigger(map,"resize");map.setCenter(position)};update();var bindEvents=function(){$(window).on('resize',update);window.addResizeListener(container,update)};bindEvents()};var initAll=function(){for(var i=0,l=_toBuild.length;i<l;i++){_toBuild[i]()}};MK.api.advancedgmaps=MK.api.advancedgmaps||function(){initAll()};return{init:function(){_toBuild.push(build);MK.core.loadDependencies(['https://maps.googleapis.com/maps/api/js?'+apikey+'callback=MK.api.advancedgmaps'])}}}})(jQuery);(function($){'use strict';function mk_animated_cols(){function equalheight(container){var currentTallest=0,currentRowStart=0,rowDivs=new Array(),$el,topPosition=0;$(container).each(function(){$el=$(this);$($el).height('auto');topPosition=$el.position().top;if(currentRowStart!=topPosition){for(var currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest)}
rowDivs.length=0;currentRowStart=topPosition;currentTallest=$el.height();rowDivs.push($el)}else{rowDivs.push($el);currentTallest=(currentTallest<$el.height())?($el.height()):(currentTallest)}
for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest)}});return currentTallest}
function prepareCols(el){var $this=el.parent().parent().find('.mk-animated-columns');var iconHeight=equalheight('.vc_row .animated-column-icon, .animated-column-holder .mk-svg-icon'),titleHeight=equalheight('.vc_row .animated-column-title'),descHeight=equalheight('.vc_row .animated-column-desc'),btnHeight=$this.find('.animated-column-btn').innerHeight();if($this.hasClass('full-style')){$this.find('.animated-column-item').each(function(){var $this=$(this),contentHeight=(iconHeight+30)+(titleHeight+10)+(descHeight+70)+34;var $columnHeight=contentHeight*1.5+50;var $minHeight=parseInt($this.css('min-height'),10);if(!isNaN($minHeight)){if($minHeight<$columnHeight){$columnHeight=$minHeight}}
$this.height($columnHeight);var $box_height=$this.outerHeight(!0),$icon_height=$this.find('.animated-column-icon, .animated-column-holder .mk-svg-icon').height();$this.find('.animated-column-holder').css({'paddingTop':$box_height/2-$icon_height});$this.animate({opacity:1},300)})}else{$this.find('.animated-column-item').each(function(){var $this=$(this),halfHeight=$this.height()/2,halfIconHeight=$this.find('.animated-column-icon, .animated-column-holder .mk-svg-icon').height()/2,halfTitleHeight=$this.find('.animated-column-simple-title').height()/2;$this.find('.animated-column-holder').css({'paddingTop':halfHeight-halfIconHeight});$this.find('.animated-column-title').css({'paddingTop':halfHeight-halfTitleHeight});$this.animate({opacity:1},300)})}}
$('.mk-animated-columns').each(function(){var that=this;MK.core.loadDependencies([MK.core.path.plugins+'tweenmax.js'],function(){var $this=$(that),$parent=$this.parent().parent(),$columns=$parent.find('.column_container'),index=$columns.index($this.parent());if($this.hasClass('full-style')){$this.find('.animated-column-item').hover(function(){TweenLite.to($(this).find(".animated-column-holder"),0.5,{top:'-15%',ease:Back.easeOut});TweenLite.to($(this).find(".animated-column-desc"),0.5,{top:'50%',ease:Expo.easeOut},0.4);TweenLite.to($(this).find(".animated-column-btn"),0.3,{top:'50%',ease:Expo.easeOut},0.6)},function(){TweenLite.to($(this).find(".animated-column-holder"),0.5,{top:'0%',ease:Back.easeOut,easeParams:[3]});TweenLite.to($(this).find(".animated-column-desc"),0.5,{top:'100%',ease:Back.easeOut},0.4);TweenLite.to($(this).find(".animated-column-btn"),0.5,{top:'100%',ease:Back.easeOut},0.2)})}
if($this.hasClass('simple-style')){$this.find('.animated-column-item').hover(function(){TweenLite.to($(this).find(".animated-column-holder"),0.7,{top:'100%',ease:Expo.easeOut});TweenLite.to($(this).find(".animated-column-title"),0.7,{top:'0%',ease:Back.easeOut},0.2)},function(){TweenLite.to($(this).find(".animated-column-holder"),0.7,{top:'0%',ease:Expo.easeOut});TweenLite.to($(this).find(".animated-column-title"),0.7,{top:'-100%',ease:Back.easeOut},0.2)})}
if($columns.length===index+1){prepareCols($this);$(window).on("resize",function(){setTimeout(prepareCols($this),1000)})}
MK.utils.eventManager.subscribe('iconsInsert',function(){prepareCols($this)})})})}
$(window).on('load vc_reload',mk_animated_cols)}(jQuery));(function($){'use strict';var core=MK.core,path=MK.core.path;MK.component.BannerBuilder=function(el){var init=function(){var $this=$(el),data=$this.data('bannerbuilder-config');MK.core.loadDependencies([MK.core.path.plugins+'jquery.flexslider.js'],function(){$this.flexslider({selector:'.mk-banner-slides > .mk-banner-slide',animation:data.animation,smoothHeight:!1,direction:'horizontal',slideshow:!0,slideshowSpeed:data.slideshowSpeed,animationSpeed:data.animationSpeed,pauseOnHover:!0,directionNav:data.directionNav,controlNav:!1,initDelay:2000,prevText:'',nextText:'',pauseText:'',playText:''})})};return{init:init}}})(jQuery);(function($){'use strict';var zIndex=0;$('.mk-newspaper-wrapper').on('click','.blog-loop-comments',function(event){event.preventDefault();var $this=$(event.currentTarget);var $parent=$this.parents('.mk-blog-newspaper-item');$parent.css('z-index',++zIndex);$this.parents('.newspaper-item-footer').find('.newspaper-social-share').slideUp(200).end().find('.newspaper-comments-list').slideDown(200);setTimeout(function(){MK.utils.eventManager.publish('item-expanded')},300)});$('.mk-newspaper-wrapper').on('click','.newspaper-item-share',function(event){event.preventDefault();var $this=$(event.currentTarget);var $parent=$this.parents('.mk-blog-newspaper-item');$parent.css('z-index',++zIndex);$this.parents('.newspaper-item-footer').find('.newspaper-comments-list').slideUp(200).end().find('.newspaper-social-share').slideDown(200);setTimeout(function(){MK.utils.eventManager.publish('item-expanded')},300)});var init=function init(){setTimeout(function(){var $blog=$('.mk-blog-container');var $imgs=$blog.find('img[data-mk-image-src-set]');if($blog.hasClass('mk-blog-container-lazyload')&&$imgs.length){$(window).on('scroll.mk_blog_lazyload',MK.utils.throttle(500,function(){$imgs.each(function(index,elem){if(MK.utils.isElementInViewport(elem)){MK.component.ResponsiveImageSetter.init($(elem));$imgs=$imgs.not($(elem))}})}));$(window).trigger('scroll.mk_blog_lazyload');MK.component.ResponsiveImageSetter.onResize($imgs)}else{MK.component.ResponsiveImageSetter.init($imgs);MK.component.ResponsiveImageSetter.onResize($imgs)}},50);if($('body').hasClass('vc_editor')){setTimeout(function(){$(window).trigger('resize')},2000)}}
init();$(window).on('vc_reload',init)}(jQuery));(function($){'use strict';var core=MK.core,path=MK.core.path;MK.component.Category=function(el){var init=function(){core.loadDependencies([path.plugins+'pixastic.js'],function(){blurImage($('.blur-image-effect .mk-loop-item .item-holder '))});core.loadDependencies([path.plugins+'minigrid.js'],masonry)};var blurImage=function($item){return $item.each(function(){var $_this=$(this);var img=$_this.find('.item-thumbnail');img.clone().addClass("blur-effect item-blur-thumbnail").removeClass('item-thumbnail').prependTo(this);var blur_this=$(".blur-effect",this);blur_this.each(function(index,element){if(img[index].complete===!0){Pixastic.process(blur_this[index],"blurfast",{amount:0.5})}else{blur_this.load(function(){Pixastic.process(blur_this[index],"blurfast",{amount:0.5})})}})})};var masonry=function(){if(!$('.js-masonry').length)return;function grid(){minigrid({container:'.js-masonry',item:'.js-masonry-item',gutter:0})}
grid();$(window).on('resize',grid)};return{init:init}}})(jQuery);(function($){'use strict';var core=MK.core,path=core.path;MK.component.Chart=function(el){var init=function(){MK.core.loadDependencies([MK.core.path.plugins+'jquery.easyPieChart.js'],function(){$('.mk-chart__chart').each(function(){var $this=$(this),$parent_width=$(this).parent().width(),$chart_size=parseInt($this.attr('data-barSize'));if($parent_width<$chart_size){$chart_size=$parent_width;$this.css('line-height',$chart_size);$this.find('i').css({'line-height':$chart_size+'px'});$this.css({'line-height':$chart_size+'px'})}
var build=function(){$this.easyPieChart({animate:1300,lineCap:'butt',lineWidth:$this.attr('data-lineWidth'),size:$chart_size,barColor:$this.attr('data-barColor'),trackColor:$this.attr('data-trackColor'),scaleColor:'transparent',onStep:function(value){this.$el.find('.chart-percent span').text(Math.ceil(value))}})};MK.utils.scrollSpy(this,{position:'bottom',after:build})})})};return{init:init}}})(jQuery);(function($){"use strict";$('.mk-clients.column-style').each(function(){var $group=$(this),$listItems=$group.find('li'),listItemsCount=$listItems.length,listStyle=$group.find('ul').attr('style')||'',fullRowColumnsCount=$group.find('ul:first-of-type li').length;function recreateGrid(){var i;$listItems.unwrap();if(window.matchMedia('(max-width: 550px)').matches&&fullRowColumnsCount>=1){for(i=0;i<listItemsCount;i+=1){$listItems.slice(i,i+1).wrapAll('<ul class="mk-clients-fixed-list" style="'+listStyle+'"></ul>')}}else if(window.matchMedia('(max-width: 767px)').matches&&fullRowColumnsCount>=2){for(i=0;i<listItemsCount;i+=2){$listItems.slice(i,i+2).wrapAll('<ul class="mk-clients-fixed-list" style="'+listStyle+'"></ul>')}}else if(window.matchMedia('(max-width: 960px)').matches&&fullRowColumnsCount>=3){for(i=0;i<listItemsCount;i+=3){$listItems.slice(i,i+3).wrapAll('<ul class="mk-clients-fixed-list" style="'+listStyle+'"></ul>')}}else{for(i=0;i<listItemsCount;i+=fullRowColumnsCount){$listItems.slice(i,i+fullRowColumnsCount).wrapAll('<ul style="'+listStyle+'"></ul>')}}}
recreateGrid();$(window).on('resize',recreateGrid)})}(jQuery));(function($){'use strict';$(window).on('vc_reload',function(){$('.mk-event-countdown-ul').each(function(){if($(this).width()<750){$(this).addClass('mk-event-countdown-ul-block')}else{$(this).removeClass('mk-event-countdown-ul-block')}})})})(jQuery);(function($){'use strict';$('.mk-edge-slider').find('video').each(function(){this.pause();this.currentTime=0});MK.component.EdgeSlider=function(el){var self=this,$this=$(el),$window=$(window),$wrapper=$this.parent(),config=$this.data('edgeslider-config'),$nav=$(config.nav),$prev=$nav.find('.mk-edge-prev'),$prevTitle=$prev.find('.nav-item-caption'),$prevBg=$prev.find('.edge-nav-bg'),$next=$nav.find('.mk-edge-next'),$nextTitle=$next.find('.nav-item-caption'),$nextBg=$next.find('.edge-nav-bg'),$navBtns=$nav.find('a'),$pagination=$('.swiper-pagination'),$skipBtn=$('.edge-skip-slider'),$opacityLayer=$this.find('.edge-slide-content'),$videos=$this.find('video'),currentSkin=null,currentPoint=null,winH=null,opacity=null,offset=null;var callbacks={onInitialize:function(slides){self.$slides=$(slides);self.slideContents=$.map(self.$slides,function(slide){var $slide=$(slide),title=$slide.find('.edge-slide-content .edge-title').first().text(),skin=$slide.attr("data-header-skin"),image=$slide.find('.mk-section-image').attr('data-thumb')||$slide.find('.mk-video-section-touch').attr('data-thumb'),bgColor=$slide.find('.mk-section-image').css('background-color');return{skin:skin,title:title,image:image,bgColor:bgColor}});if(MK.utils.isSmoothScroll)$this.css('position','fixed');setNavigationContent(1,self.$slides.length-1);setSkin(0);playVideo(0);setTimeout(function(){$('.edge-slider-loading').fadeOut('100')},1000)},onBeforeSlide:function(id){},onAfterSlide:function(id){setNavigationContent(nextFrom(id),prevFrom(id));setSkin(id);stopVideos();playVideo(id)}};var nextFrom=function nextFrom(id){return(id+1===self.$slides.length)?0:id+1};var prevFrom=function prevFrom(id){return(id-1===-1)?self.$slides.length-1:id-1};var setNavigationContent=function(nextId,prevId){if(self.slideContents[prevId]){$prevTitle.text(self.slideContents[prevId].title);$prevBg.css('background',self.slideContents[prevId].image!=='none'?'url('+self.slideContents[prevId].image+')':self.slideContents[prevId].bgColor)}
if(self.slideContents[nextId]){$nextTitle.text(self.slideContents[nextId].title);$nextBg.css('background',self.slideContents[nextId].image!=='none'?'url('+self.slideContents[nextId].image+')':self.slideContents[nextId].bgColor)}};var setSkin=function setSkin(id){currentSkin=self.slideContents[id].skin;$navBtns.attr('data-skin',currentSkin);$pagination.attr('data-skin',currentSkin);$skipBtn.attr('data-skin',currentSkin);if(self.config.firstEl){MK.utils.eventManager.publish('firstElSkinChange',currentSkin)}};var stopVideos=function stopVideos(){$videos.each(function(){this.pause();this.currentTime=0})};var playVideo=function playVideo(id){var video=self.$slides.eq(id).find('video').get(0);if(video){video.play();console.log('play video in slide nr '+id)}};var onResize=function onResize(){var height=$wrapper.height();$this.height(height);var width=$wrapper.width();$this.width(width);winH=$window.height();offset=$this.offset().top;if(!MK.utils.isSmoothScroll)return;if(MK.utils.isResponsiveMenuState()){$this.css({'-webkit-transform':'translateZ(0)','-moz-transform':'translateZ(0)','-ms-transform':'translateZ(0)','-o-transform':'translateZ(0)','transform':'translateZ(0)','position':'absolute'});$opacityLayer.css({'opacity':1})}else{onScroll()}};var onScroll=function onScroll(){currentPoint=-MK.val.scroll();if(offset+currentPoint<=0){opacity=1+((offset+currentPoint)/winH)*2;opacity=Math.min(opacity,1);opacity=Math.max(opacity,0);$opacityLayer.css({opacity:opacity})}
$this.css({'-webkit-transform':'translateY('+currentPoint+'px) translateZ(0)','-moz-transform':'translateY('+currentPoint+'px) translateZ(0)','-ms-transform':'translateY('+currentPoint+'px) translateZ(0)','-o-transform':'translateY('+currentPoint+'px) translateZ(0)','transform':'translateY('+currentPoint+'px) translateZ(0)','position':'fixed'})};onResize();$window.on('load',onResize);$window.on('resize',onResize);window.addResizeListener($wrapper.get(0),onResize);if(MK.utils.isSmoothScroll){onScroll();$window.on('scroll',function(){if(MK.utils.isResponsiveMenuState())return;window.requestAnimationFrame(onScroll)})}
this.el=el;this.config=$.extend(config,callbacks);this.slideContents=null;this.config.edgeSlider=!0};MK.component.EdgeSlider.prototype={init:function(){var slider=new MK.ui.Slider(this.el,this.config);slider.init()}}})(jQuery);(function($){'use strict';var init=function init(){$('.mk-faq-wrapper').each(function(){var $this=$(this);var $filter=$this.find('.filter-faq');var $filterItem=$filter.find('a');var $faq=$this.find('.mk-faq-container > div');var currentFilter='';$filterItem.on('click',function(e){var $this=$(this);currentFilter=$this.data('filter');$filterItem.removeClass('current');$this.addClass('current');filterItems(currentFilter);e.preventDefault()});function filterItems(cat){if(cat===''){$faq.slideDown(200).removeClass('hidden');return}
$faq.not('.'+cat).slideUp(200).addClass('hidden');$faq.filter('.'+cat).slideDown(200).removeClass('hidden')}})}
init();$(window).on('vc_reload',init)}(jQuery));(function($){'use strict';function mk_flickr_feeds(){$('.mk-flickr-feeds').each(function(){var $this=$(this),apiKey=$this.attr('data-key'),userId=$this.attr('data-userid'),perPage=$this.attr('data-count'),column=$this.attr('data-column');if(!$('.mk-flickr-feeds').is(':empty')){return}
jQuery.getJSON('https://api.flickr.com/services/rest/?format=json&method='+'flickr.photos.search&api_key='+apiKey+'&user_id='+userId+'&&per_page='+perPage+'&jsoncallback=?',function(data){jQuery.each(data.photos.photo,function(i,rPhoto){var basePhotoURL='http://farm'+rPhoto.farm+'.static.flickr.com/'+rPhoto.server+'/'+rPhoto.id+'_'+rPhoto.secret;var thumbPhotoURL=basePhotoURL+'_q.jpg';var mediumPhotoURL=basePhotoURL+'.jpg';var photoStringStart='<a ';var photoStringEnd='title="'+rPhoto.title+'" rel="flickr-feeds" class="mk-lightbox flickr-item a_colitem" href="'+mediumPhotoURL+'"><img src="'+thumbPhotoURL+'" alt="'+rPhoto.title+'"/></a>;';var photoString=(i<perPage)?photoStringStart+photoStringEnd:photoStringStart+photoStringEnd;jQuery(photoString).appendTo($this)})})})}
mk_flickr_feeds();$(window).on('vc_reload',mk_flickr_feeds)})(jQuery);jQuery(function($){'use strict';var init=function init(){var $gallery=$('.mk-gallery');var $imgs=$gallery.find('img[data-mk-image-src-set]');if($gallery.hasClass('mk-gallery-lazyload')&&$imgs.length){$(window).on('scroll.mk_gallery_lazyload',MK.utils.throttle(500,function(){$imgs.each(function(index,elem){if(MK.utils.isElementInViewport(elem)){MK.component.ResponsiveImageSetter.init($(elem));$imgs=$imgs.not($(elem))}})}));$(window).trigger('scroll.mk_gallery_lazyload');MK.component.ResponsiveImageSetter.onResize($imgs)}else{MK.component.ResponsiveImageSetter.init($imgs);MK.component.ResponsiveImageSetter.onResize($imgs)}}
init();$(window).on('vc_reload',init)});(function($){'use strict';$('.js-header-shortcode').each(function(){var $this=$(this),$parent_page_section=$this.parents('.mk-page-section'),$parent_row=$this.parents('.js-master-row'),$is_inside=$parent_page_section.attr('id');if($is_inside){$this.detach().appendTo($parent_page_section)}
$parent_page_section.css({'overflow':'visible'});$parent_row.css({'overflow':'visible'});$this.parent().css('z-index',99999)})})(jQuery);(function($){'use strict';function mk_section_intro_effects(){if(!MK.utils.isMobile()){if(!$.exists('.mk-page-section.intro-true'))return;$('.mk-page-section.intro-true').each(function(){var that=this;MK.core.loadDependencies([MK.core.path.plugins+'jquery.sectiontrans.js',MK.core.path.plugins+'tweenmax.js'],function(){var $this=$(that),$pageCnt=$this.parent().nextAll('div'),windowHeight=$(window).height(),effectName=$this.attr('data-intro-effect'),$header=$('.mk-header');var effect={fade:new TimelineLite({paused:!0}).set($pageCnt,{opacity:0,y:windowHeight*0.3}).to($this,1,{opacity:0,ease:Power2.easeInOut}).to($pageCnt,1,{opacity:1,y:0,ease:Power2.easeInOut},"-=.7").set($this,{zIndex:'-1'}),zoom_out:new TimelineLite({paused:!0}).set($pageCnt,{opacity:0,y:windowHeight*0.3}).to($this,1.5,{opacity:.8,scale:0.8,y:-windowHeight-100,ease:Strong.easeInOut}).to($pageCnt,1.5,{opacity:1,y:0,ease:Strong.easeInOut},"-=1.3"),shuffle:new TimelineLite({paused:!0}).to($this,1.5,{y:-windowHeight/2,ease:Strong.easeInOut}).to($pageCnt.first(),1.5,{paddingTop:windowHeight/2,ease:Strong.easeInOut},"-=1.3")};console.log($pageCnt);$this.sectiontrans({effect:effectName});if($this.hasClass('shuffled')){TweenLite.set($this,{y:-windowHeight/2});TweenLite.set($this.nextAll('div').first(),{paddingTop:windowHeight/2})}
$('body').on('page_intro',function(){MK.utils.scroll.disable();$(this).data('intro',!0);effect[effectName].play();setTimeout(function(){$header.addClass('pre-sticky');$header.addClass('a-sticky');$('.mk-header-padding-wrapper').addClass('enable-padding');$('body').data('intro',!1);if(effectName==='shuffle')$this.addClass('shuffled')},1000);setTimeout(MK.utils.scroll.enable,1500)});$('body').on('page_outro',function(){MK.utils.scroll.disable();$(this).data('intro',!0);effect[effectName].reverse();setTimeout(function(){$header.removeClass('pre-sticky');$header.removeClass('a-sticky');$('.mk-header-padding-wrapper').removeClass('enable-padding');$('body').data('intro',!1);if($this.hasClass('shuffled'))$this.removeClass('shuffled')},1000);setTimeout(MK.utils.scroll.enable,1500)})})})}else{$('.mk-page-section.intro-true').each(function(){$(this).attr('data-intro-effect','')})}}
mk_section_intro_effects();var debounceResize=null;$(window).on("resize",function(){if(debounceResize!==null){clearTimeout(debounceResize)}
debounceResize=setTimeout(mk_section_intro_effects,300)});function mk_section_adaptive_height(){$(".mk-page-section.mk-adaptive-height").each(function(){var imageHeight=$(this).find(".mk-adaptive-image").height();$(this).css("height",imageHeight)})}
$(window).on("load resize",mk_section_adaptive_height);var init=function init(){var $allLayers=$('.mk-page-section .background-layer').filter(function(index){var isLazyLoad=$(this).attr('data-mk-lazyload')==='true';if(!isLazyLoad){MK.component.BackgroundImageSetter.init($(this))}
return isLazyLoad});if($allLayers.length){$(window).on('scroll.mk_page_section_lazyload',MK.utils.throttle(500,function(){$allLayers.each(function(index,elem){if(MK.utils.isElementInViewport(elem)){MK.component.BackgroundImageSetter.init($(elem));$allLayers=$allLayers.not($(elem))}})}));$(window).trigger('scroll.mk_page_section_lazyload');MK.component.BackgroundImageSetter.onResize($allLayers)}}
init();$(window).on('vc_reload',init);function mk_section_half_layout(){$(".mk-page-section.half_boxed").each(function(){var $section=$(this);if($(window).width()>mk_grid_width){var margin=($(window).width()-mk_grid_width)/2;var $section_inner=$section.find('.mk-half-layout-inner');if($section.hasClass('half_left_layout')){$section_inner.css({marginRight:margin+'px'})}
if($section.hasClass('half_right_layout')){$section_inner.css({marginLeft:margin+'px'})}}})}
$(window).on("load resize",mk_section_half_layout);function mk_reset_section_fluid_width_equal_height_columns(){var $colWrappers='',maxWidth=850;$colWrappers=$('.page-section-content.fluid-width-equal-height-columns');$colWrappers.each(function(){var $colWrapper='',colHeight=0;$colWrapper=$(this);$colWrapper.find('.wpb_column.column_container').each(function(){var $col=$(this),size=$(this).children('div').length;if(size>0){$col.removeAttr("style");$col.children('div').each(function(){var $this=$(this);if(!$this.hasClass('mk-advanced-gmaps')){$this.removeAttr('style')}})}})})}
function mk_section_fluid_width_equal_height_columns(){mk_reset_section_fluid_width_equal_height_columns();var $colWrappers='',maxWidth=850,$pageSection=$('.page-section-content');if(!$pageSection.hasClass('.fluid-width-equal-height-columns')){$pageSection.find('.wpb_column.column_container').removeAttr('style');$pageSection.find('.wpb_column.column_container .vc_element').removeAttr('style')}
$colWrappers=$('.page-section-content.fluid-width-equal-height-columns');$colWrappers.each(function(){var $colWrapper='',colHeight=0;$colWrapper=$(this);if($colWrapper.length>0){colHeight=$colWrappers.outerHeight(!0);$colWrapper.find('.wpb_column.column_container').each(function(){var $col=$(this);if($col.length>0){colHeight=($col.outerHeight(!0)>colHeight)?$col.outerHeight(!0):colHeight}})}
if(colHeight>0){$colWrapper.find('.wpb_column.column_container').each(function(){var $col=$(this),size=$(this).children('div').length;if(size>0){colHeight=($(window).width()<maxWidth)?'initial':colHeight;$col.css("height",colHeight);if($colWrapper.hasClass('vertical-align-center')){$col.children('div').each(function(){var elHeight=($(window).width()<maxWidth)?'initial':(colHeight/size);if(!$(this).hasClass('mk-advanced-gmaps')){$(this).css("height",elHeight)}})}}})}})}
$(window).on('load vc_reload',function(){setTimeout(function(){mk_section_fluid_width_equal_height_columns()},500)});var debounceResize=null;$(window).on("resize",function(){if(debounceResize!==null){clearTimeout(debounceResize)}
debounceResize=setTimeout(mk_section_fluid_width_equal_height_columns(),500)})}(jQuery));(function($){'use strict';function mk_page_title_parallax(){if(!MK.utils.isMobile()&&mk_smooth_scroll!=='false'){$('.mk-effect-wrapper').each(function(){var $this=$(this),progressVal,currentPoint,ticking=!1,scrollY=MK.val.scroll(),$window=$(window),windowHeight=$(window).height(),parentHeight=$this.outerHeight(),startPoint=0,endPoint=$this.offset().top+parentHeight,effectLayer=$this.find('.mk-effect-bg-layer'),gradientLayer=effectLayer.find('.mk-effect-gradient-layer'),cntLayer=$this.find('.mk-page-title-box-content'),animation=effectLayer.attr('data-effect'),top=$this.offset().top,height=$this.outerHeight();var parallaxSpeed=0.7,zoomFactor=1.3;var parallaxTopGap=function(){var gap=top*parallaxSpeed;effectLayer.css({height:height+gap+'px',top:(-gap)+'px'})};if(animation==("parallax"||"parallaxZoomOut")){parallaxTopGap()}
var animationSet=function(){scrollY=MK.val.scroll();if(animation=="parallax"){currentPoint=(startPoint+scrollY)*parallaxSpeed;effectLayer.get(0).style.transform='translateY('+currentPoint+'px)'}
if(animation=="parallaxZoomOut"){console.log(effectLayer);currentPoint=(startPoint+scrollY)*parallaxSpeed;progressVal=(1/(endPoint-startPoint)*(scrollY-startPoint));var zoomCalc=zoomFactor-((zoomFactor-1)*progressVal);effectLayer.get(0).style.transform='translateY('+currentPoint+'px) scale('+zoomCalc+')'}
if(animation=="gradient"){progressVal=(1/(endPoint-startPoint)*(scrollY-startPoint));gradientLayer.css({opacity:progressVal*2})}
if(animation!="gradient"){progressVal=(1/(endPoint-startPoint)*(scrollY-startPoint));cntLayer.css({opacity:1-(progressVal*4)})}
ticking=!1};animationSet();var requestTick=function(){if(!ticking){window.requestAnimationFrame(animationSet);ticking=!0}};$window.off('scroll',requestTick);$window.on('scroll',requestTick)})}}
var $window=$(window);var debounceResize=null;$window.on('load',mk_page_title_parallax);$window.on("resize",function(){if(debounceResize!==null){clearTimeout(debounceResize)}
debounceResize=setTimeout(mk_page_title_parallax,300)})}(jQuery));(function($){'use strict';var utils=MK.utils,core=MK.core,path=MK.core.path;MK.component.PhotoAlbum=function(el){this.album=el;this.initialOpen=!1};MK.component.PhotoAlbum.prototype={dom:{gallery:'.slick-slider-wrapper',title:'.slick-title',galleryContainer:'.slick-slides',closeBtn:'.slick-close-icon',thumbList:'.slick-dots',thumbs:'.slick-dots li',imagesData:'photoalbum-images',titleData:'photoalbum-title',idData:'photoalbum-id',urlData:'photoalbum-url',activeClass:'is-active'},tpl:{gallery:'#tpl-photo-album',slide:'<div class="slick-slide"></div>'},init:function(){this.cacheElements();this.bindEvents();this.openByLink()},cacheElements:function(){this.$album=$(this.album);this.imagesSrc=this.$album.data(this.dom.imagesData);this.albumLength=this.imagesSrc.length;this.title=this.$album.data(this.dom.titleData);this.id=this.$album.data(this.dom.idData);this.url=this.$album.data(this.dom.urlData);this.images=[]},bindEvents:function(){this.$album.not('[data-photoalbum-images="[null]"]').on('click',this.albumClick.bind(this));$(document).on('click',this.dom.closeBtn,this.closeClick.bind(this));$(window).on('resize',this.thumbsVisibility.bind(this));$(window).on('resize',this.makeArrows.bind(this))},albumClick:function(e){e.preventDefault();this.open();MK.ui.loader.add(this.album)},closeClick:function(e){e.preventDefault();if(this.slider){this.removeGallery();this.slider.exitFullScreen()}},thumbsVisibility:function(){if(!this.thumbsWidth)return;if(window.matchMedia('(max-width:'+(this.thumbsWidth+260)+'px)').matches)this.hideThumbs();else this.showThumbs()},hideThumbs:function(){if(!this.$thumbList)return;this.$thumbList.hide()},showThumbs:function(){if(!this.$thumbList)return;this.$thumbList.show()},open:function(){var self=this;core.loadDependencies([path.plugins+'slick.js'],function(){self.createGallery();self.loadImages()})},createGallery:function(){if(!$(this.dom.gallery).length){var tpl=$(this.tpl.gallery).eq(0).html();$('body').append(tpl)}
this.$gallery=$(this.dom.gallery);this.$closeBtn=$(this.dom.closeBtn)},createSlideshow:function(){var self=this;this.slider=new MK.ui.FullScreenGallery(this.dom.galleryContainer,{id:this.id,url:this.url});this.slider.init();$(window).trigger('resize');this.makeArrows();this.$thumbList=$(this.dom.thumbList);this.$thumbs=$(this.dom.thumbs);this.thumbsWidth=(this.$thumbs.length)*95;this.thumbsVisibility();setTimeout(function(){MK.ui.loader.remove(self.album)},100);MK.utils.eventManager.publish('photoAlbum-open')},makeArrows:function(){if(this.arrowsTimeout)clearTimeout(this.arrowsTimeout);this.arrowsTimeout=setTimeout(function(){var $prev=$('.slick-prev').find('svg');var $next=$('.slick-next').find('svg');$prev.wrap('<div class="slick-nav-holder"></div>');$next.wrap('<div class="slick-nav-holder"></div>');if(matchMedia("(max-width: 1024px)").matches){$prev.attr({width:12,height:22}).find('polyline').attr('points','12,0 0,11 12,22');$next.attr({width:12,height:22}).find('polyline').attr('points','0,0 12,11 0,22')}else{$prev.attr({width:33,height:65}).find('polyline').attr('points','0.5,0.5 32.5,32.5 0.5,64.5');$next.attr({width:33,height:65}).find('polyline').attr('points','0.5,0.5 32.5,32.5 0.5,64.5')}},0)},loadImages:function(){var self=this,n=0;if(!this.images.length){this.imagesSrc.forEach(function(src){if(src===null)return;var img=new Image();img.onload=function(){self.onLoad(n+=1)};img.src=src;self.images.push(img)})}else{this.onLoad(this.albumLength)}},onLoad:function(n){if(n===this.albumLength){this.insertImages();this.showGallery();this.createSlideshow()}},insertImages:function(){var $galleryContainer=this.$gallery.find(this.dom.galleryContainer),$title=$(this.dom.title),slide=this.tpl.slide;$galleryContainer.html('');$title.html(this.title);this.images.forEach(function(img){var $slide=$(slide);$slide.html(img);$galleryContainer.prepend($slide)})},showGallery:function(){var self=this;this.$gallery.addClass(this.dom.activeClass);utils.scroll.disable()},removeGallery:function(){var self=this;this.$gallery.removeClass(this.dom.activeClass);setTimeout(function(){self.$gallery.remove()},300);utils.scroll.enable()},openByLink:function(){var loc=window.location,hash=loc.hash,id;if(hash.length&&hash.substring(1).length){id=hash.substring(1);id=id.replace('!loading','');if(id==this.id&&!this.initialOpen){this.initialOpen=!0;this.open()}}}};MK.component.PhotoAlbumBlur=function(el){var init=function(){core.loadDependencies([path.plugins+'pixastic.js'],function(){blurImage($('.mk-album-item figure'))})};var blurImage=function($item){return $item.each(function(){var $_this=$(this);var img=$_this.find('.album-cover-image');img.clone().addClass("blur-effect item-blur-thumbnail").removeClass('album-cover-image').prependTo(this);var blur_this=$(".blur-effect",this);blur_this.each(function(index,element){if(img[index].complete===!0){Pixastic.process(blur_this[index],"blurfast",{amount:0.5})}else{blur_this.load(function(){Pixastic.process(blur_this[index],"blurfast",{amount:0.5})})}})})};return{init:init}}})(jQuery);jQuery(document).ready(function($){if(typeof window.safari==='undefined'){return}
function mkRedraw(){$('.mk-photo-roller').hide().show(0)}
mkRedraw();$(window).resize(function(){mkRedraw()})});jQuery(function($){'use strict';var init=function init(){var $portfolio=$('.portfolio-grid');var $imgs=$portfolio.find('img[data-mk-image-src-set]');if($portfolio.hasClass('portfolio-grid-lazyload')&&$imgs.length){$(window).on('scroll.mk_portfolio_lazyload',MK.utils.throttle(500,function(){$imgs.each(function(index,elem){if(MK.utils.isElementInViewport(elem)){MK.component.ResponsiveImageSetter.init($(elem));$imgs=$imgs.not($(elem))}})}));$(window).trigger('scroll.mk_portfolio_lazyload');MK.component.ResponsiveImageSetter.onResize($imgs)}else{MK.component.ResponsiveImageSetter.init($imgs);MK.component.ResponsiveImageSetter.onResize($imgs)}}
init();$(window).on('vc_reload',function(){init();$('.mk-portfolio-container').each(function(){var id=$(this).attr('id');var el='#'+id+'.mk-portfolio-container.js-el';if($(this).data('mk-component')=='Grid'){$(el).data('init-Grid',!0);var component=new MK.component.Grid(el);component.init()}})})});jQuery(document).ready(function($){'use strict';function get_item_width(style,showItems,id){var item_width;if(style=="classic"){item_width=275;items_to_show=4}else{var screen_width=$('#portfolio-carousel-'+id).width(),items_to_show=showItems;if(screen_width>=1100){item_width=screen_width/items_to_show}else if(screen_width<=1200&&screen_width>=800){item_width=screen_width/3}else if(screen_width<=800&&screen_width>=540){item_width=screen_width/2}else{item_width=screen_width}}
return item_width}
jQuery(window).on("load vc_reload",function(){MK.core.loadDependencies([MK.core.path.plugins+'jquery.flexslider.js'],function(){$('.portfolio-carousel .mk-flexslider').each(function(){var $this=$(this);var $pauseOnHover=$this.attr('data-pauseOnHover')=="true"?!0:!1;$this.flexslider({selector:".mk-flex-slides > li",slideshow:!isTest,animation:"slide",slideshowSpeed:parseInt($this.attr('data-slideshowSpeed')),animationSpeed:parseInt($this.attr('data-animationSpeed')),pauseOnHover:$pauseOnHover,controlNav:!1,smoothHeight:!1,useCSS:!1,directionNav:$this.data('directionNav'),prevText:"",nextText:"",itemWidth:get_item_width($this.data('style'),$this.data('showItems'),$this.data('id')),itemMargin:0,maxItems:($this.data('style')==='modern')?$this.data('showItems'):4,minItems:1,move:1})})})})});(function($){'use strict';var AjaxModal=function AjaxModal(el){this.el=el;var $this=$(el);var action=$this.data('action');var id=$this.data('id');this.load(action,id)};AjaxModal.prototype={init:function init(html){var self=this;$('body').append(html);this.cacheElements();this.bindEvents();this.$modal.addClass('is-active');MK.core.initAll(self.$modal.get(0));$('.variations_form').each(function(){$(this).wc_variation_form().find('.variations select:eq(0)').change()});MK.utils.scroll.disable();MK.ui.loader.remove();MK.utils.eventManager.publish('quickViewOpen')},cacheElements:function cacheElement(){this.$modal=$('.mk-modal');this.$slider=this.$modal.find('.mk-slider-holder');this.$container=this.$modal.find('.mk-modal-container');this.$closeBtn=this.$modal.find('.js-modal-close')},bindEvents:function bindEvents(){this.$container.on('click',function(e){e.stopPropagation()});this.$closeBtn.on('click',this.handleClose.bind(this));this.$modal.on('click',this.handleClose.bind(this))},handleClose:function handleClose(e){e.preventDefault();MK.utils.scroll.enable();this.close()},close:function close(){this.$modal.remove()},load:function load(action,id){$.ajax({url:MK.core.path.ajaxUrl,data:{action:action,id:id},success:this.init.bind(this),error:this.error.bind(this)})},error:function error(response){console.log(response)}};var createModal=function createModal(e){e.preventDefault();var el=e.currentTarget;MK.ui.loader.add($(el).parents('.product-loop-thumb'));new AjaxModal(el)};$(document).on('click','.js-ajax-modal',createModal);$(window).on('vc_reload',function(){$('.mk-product-loop').each(function(){var id=$(this).attr('id');var el='#'+id+' > .products.js-el';$(el).data('init-Grid',!0);var component=new MK.component.Grid(el);component.init()})})})(jQuery);(function($){if(window.addEventListener){window.addEventListener('load',handleLoad,!1)}else if(window.attachEvent){window.attachEvent('onload',handleLoad)}
function handleLoad(){$('.mk-slideshow-box').each(run)}
function run(){var $slider=$(this);var $slides=$slider.find('.mk-slideshow-box-item');var $transition_time=$slider.data('transitionspeed');var $time_between_slides=$slider.data('slideshowspeed');$slider.find('.mk-slideshow-box-content').children('p').filter(function(){if($.trim($(this).text())==''){return!0}}).remove();$slides.first().addClass('active').fadeIn($transition_time,function(){setTimeout(autoScroll,$time_between_slides)});function autoScroll(){if(isTest)return;var $i=$slider.find('.active').index();$slides.eq($i).removeClass('active').fadeOut($transition_time);if($slides.length==$i+1)$i=-1;$slides.eq($i+1).addClass('active').fadeIn($transition_time,function(){setTimeout(autoScroll,$time_between_slides)})}
var browserName=MK.utils.browser.name;if(browserName==='Firefox'||browserName==='Safari'){var currentWidth=parseInt($(window).width());if(currentWidth>=850){var height=$slider.css('min-height');if(typeof height!=='undefined'){$slider.find('.mk-slideshow-box-items').height(parseInt(height))}}else{$slider.find('.mk-slideshow-box-items').removeAttr('style')}}}
$(window).on('vc_reload',function(){handleLoad()});window.addEventListener('resize',function(){var browserName=MK.utils.browser.name;if(browserName==='Firefox'||browserName==='Safari'){handleLoad()}},!0)}(jQuery));(function($){'use strict';$(".mk-subscribe").each(function(){var $this=$(this);$this.find('.mk-subscribe--form').submit(function(e){$this.addClass('form-in-progress');e.preventDefault();$.ajax({url:MK.core.path.ajaxUrl,type:"POST",data:{action:"mk_ajax_subscribe",email:$this.find(".mk-subscribe--email").val(),list_id:$this.find(".mk-subscribe--list-id").val(),optin:$this.find(".mk-subscribe--optin").val()},success:function(response){$this.removeClass('form-in-progress');var data=$.parseJSON(response),$messaage_box=$this.find(".mk-subscribe--message");$messaage_box.html(data.message);if(data.action_status==!0){$messaage_box.addClass('success')}else{$messaage_box.addClass('error')}
$this.find(".mk-subscribe--email").val('')}})})})}(jQuery));(function($){'use strict';var _instancesCollection={};MK.component.SwipeSlideshow=function(el){var $this=$(el);var id=$this.parent().attr('id');this.el=el;this.id=id;this.config=$this.data('swipeslideshow-config');if(this.config)this.config.hasPagination=!1};MK.component.SwipeSlideshow.prototype={init:function(){var slider=new MK.ui.Slider(this.el,this.config);slider.init();_instancesCollection[this.id]=slider}};MK.component.SwipeSlideshowExtraNav=function(el){this.el=el};MK.component.SwipeSlideshowExtraNav.prototype={init:function init(){this.cacheElements();this.bindEvents()},cacheElements:function cacheElements(){var $this=$(this.el);this.sliderId=$this.data('gallery');this.slider=_instancesCollection[this.sliderId];this.$thumbs=$('#'+this.sliderId).find('.thumbnails a')},bindEvents:function bindEvents(){this.$thumbs.on('click',this.clickThumb.bind(this))},clickThumb:function clickThumb(e){e.preventDefault();var $this=$(e.currentTarget),id=$this.index();this.slider.goTo(id)}};MK.utils.eventManager.subscribe('gallery-update',function(e,config){if(typeof _instancesCollection[config.id]==='undefined')return;_instancesCollection[config.id].reset()});function init(){var $swiper=$('.mk-swipe-slideshow');var $imgs=$swiper.find('img[data-mk-image-src-set]');if($swiper.hasClass('mk-swipe-slideshow-lazyload')&&$imgs.length){$(window).on('scroll.mk_swipe_slideshow_lazyload',MK.utils.throttle(500,function(){$imgs.each(function(index,elem){if(MK.utils.isElementInViewport(elem)){MK.component.ResponsiveImageSetter.init($(elem));$imgs=$imgs.not($(elem))}})}));$(window).trigger('scroll.mk_swipe_slideshow_lazyload');MK.component.ResponsiveImageSetter.onResize($imgs)}else{MK.component.ResponsiveImageSetter.init($imgs);MK.component.ResponsiveImageSetter.onResize($imgs)}}
init();$(window).on('vc_reload',init)})(jQuery);(function($){'use strict';var core=MK.core,path=core.path;MK.component.Tooltip=function(el){var init=function(){$('.mk-tooltip').each(function(){$(this).find('.mk-tooltip--link').hover(function(){$(this).siblings('.mk-tooltip--text').stop(!0).animate({'opacity':1},400)},function(){$(this).siblings('.mk-tooltip--text').stop(!0).animate({'opacity':0},400)})})};return{init:init}}})(jQuery);(function($){'use strict';function mkWcCarouselSwiperHeight(){var mkWCRecentCarousel=$('.mk-woocommerce-carousel.classic-style');mkWCRecentCarousel.each(function(){var maxHeight=0;var height=$(this).height();var childs=$(this).find('.item');childs.each(function(){if($(this).height()>maxHeight){maxHeight=$(this).height()}});var swiperContainers=$(this).find('.mk-swiper-container');swiperContainers[0].style.setProperty('min-height',maxHeight+'px','important')})}
mkWcCarouselSwiperHeight()})(jQuery);(function($){'use strict';function dynamicHeight(){var $this=$(this);$this.height('auto');if(window.matchMedia('(max-width: 768px)').matches){return}
$this.height($this.height())}
var $window=$(window);var container=document.getElementById('mk-theme-container');function equalColumns(){$('.equal-columns').each(function(){dynamicHeight.bind(this);$window.on('load',dynamicHeight.bind(this));$window.on('resize',dynamicHeight.bind(this));window.addResizeListener(container,dynamicHeight.bind(this))})}
equalColumns();$window.on('vc_reload',function(){equalColumns()})}(jQuery));(function($){'use strict';function mk_video_play(){var lightboxMargin=60;function playSelfHosted($video,isLightbox){if(isLightbox===undefined||typeof isLightbox==='undefined'){isLightbox=!1}
if(isLightbox){var content=$video.parent().html();playLightbox({content:'<div class="fancybox-video">'+$(content).attr('autoplay','autoplay').wrap('<div></div>').parent().html()+'</div>',})}else{playTagVideo($video)}}
function playSocialHosted($iframe,isLightbox){if(isLightbox===undefined||typeof isLightbox==='undefined'){isLightbox=!1}
if(isLightbox){playLightbox({type:'iframe',href:$iframe.attr('src'),helpers:{media:!0}})}else{var videoData=getSocialVideoData($iframe.attr('src'));switch(videoData.source){case 'youtube':playTagIframeYoutube(videoData.videoId,$iframe);break;case 'vimeo':playTagIframeVimeo(videoData.videoId,$iframe);break;default:playTagIframe($iframe);break}}}
function playLightbox(args){var options={padding:0,margin:lightboxMargin,showCloseButton:1,autoSize:0,width:getVideoboxWidth(),height:getVideoHeight(),tpl:{closeBtn:'<a title="Close" class="fancybox-item fancybox-close fancybox-video-close" href="javascript:;"></a>',},};$.extend(options,args);$.fancybox.open(options)}
function playTagVideo($video){$video.get(0).play();$video.closest('.video-container').find('.video-thumbnail').fadeOut('slow')}
function playTagIframe($iframe,videoId){var video_loop='';if(videoId!==undefined&&typeof videoId!=='undefined'){video_loop='&playlist='+videoId}
var src=$iframe.attr('src');var separator=(src.indexOf('?')===-1)?'?':'&';src+=separator+'autoplay=1';separator=(src.indexOf('?')===-1)?'?':'&';video_loop=separator+'loop=1'+video_loop;video_loop=($iframe.closest('.video-container').data('loop')=='1')?video_loop:'';src+=video_loop;$iframe.attr('src',src).closest('.video-container').find('.video-thumbnail').fadeOut(3000)}
function playTagIframeYoutube(videoId,$iframe){if(document.getElementById('mk_iframe_api')===null){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";tag.id="mk_iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)}else{runPlayer()}
window.onYouTubeIframeAPIReady=function(){runPlayer()};function runPlayer(){var player,isPlayed=!1;player=new YT.Player('video-player-'+$iframe.data('id'),{videoId:videoId,rel:!1,events:{onReady:function(e){e.target.playVideo()},onStateChange:function(e){if(e.data===1&&!isPlayed){$(e.target.a).closest('.video-container').find('.video-thumbnail').fadeOut('slow');isPlayed=!0}
if($(e.target.a).closest('.video-container').data('loop')&&e.data===YT.PlayerState.ENDED){e.target.playVideo()}},onError:function(e){playTagIframe($iframe,videoId)}}})}}
function playTagIframeVimeo(videoId,$iframe){$.getScript('//player.vimeo.com/api/player.js',function(data,textStatus,jqxhr){if(jqxhr.status===200){var player,isPlayed=!1;player=new Vimeo.Player('video-player-'+$iframe.data('id'),{id:videoId});player.play().then(function(){if(!isPlayed){$iframe.closest('.video-container').find('.video-thumbnail').fadeOut('slow');isPlayed=!0}}).catch(function(error){playTagIframe($iframe)});if($iframe.closest('.video-container').data('loop')){player.setLoop(!0).then(function(loop){}).catch(function(error){playTagIframe($iframe)})}}else{playTagIframe($iframe)}})}
function getSocialVideoData(url){var youtubeRegex=/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i;var youtubeMatch=url.match(youtubeRegex);if(youtubeMatch&&youtubeMatch!=null){return{source:'youtube',videoId:youtubeMatch[3]}}
var vimeoRegex=/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/i;var vimeoMatch=url.match(vimeoRegex);if(vimeoMatch&&vimeoMatch!=null){return{source:'vimeo',videoId:vimeoMatch[1]}}
return{source:!1,videoId:!1}}
function getVideoboxWidth(){var $width,wWidth=$(window).width(),wHeight=$(window).height();if(wHeight>=wWidth){$width=wWidth-(lightboxMargin*2)}else{var wHeightMax=(wHeight*90)/100;if(wWidth>1280){var $width=(wHeightMax/5768)*10000}else{var $width=(wHeightMax/6120)*10000}}
return Math.round($width)+'px'}
function getVideoHeight(){var $height,wWidth=$(window).width(),wHeight=$(window).height();if(wHeight>=wWidth){$height=((wWidth-(lightboxMargin*2))*5670)/10000}else{$height=((wHeight*90)/100)+(lightboxMargin*2)}
return Math.round($height)+'px'}
$('.video-container').each(function(){var $videoContainer=$(this);var playSource=$videoContainer.data('source');var playTarget=$videoContainer.data('target');var $iframe=$videoContainer.find('iframe');var $video=$videoContainer.find('video');if($videoContainer.data('autoplay')){switch(playSource){case 'social_hosted':playSocialHosted($iframe);break;case 'self_hosted':playSelfHosted($video);break}}else{var $playIcon=$videoContainer.find('.mk-svg-icon');$playIcon.bind('click',function(e){e.preventDefault();var isLightbox=(playTarget=='lightbox')?!0:!1;if(!isLightbox){$playIcon.hide().next('.preloader-preview-area').show()}
switch(playSource){case 'social_hosted':playSocialHosted($iframe,isLightbox);break;case 'self_hosted':playSelfHosted($video,isLightbox);break}})}})}
$(window).on('load vc_reload',mk_video_play);function mk_video_resize_play_icon(){$('.video-thumbnail-overlay').each(function(){var $thumbnailOverlay=$(this);var thumbnailWidth=$thumbnailOverlay.width();var $svg=$thumbnailOverlay.find('svg');if(typeof $svg.data('width')==='undefined'){$svg.attr('data-width',$svg.width())}
if(typeof $svg.data('height')==='undefined'){$svg.attr('data-height',$svg.height())}
if(($svg.data('width')*4)>thumbnailWidth){$svg.css({width:Math.round((parseInt(thumbnailWidth)/4))+'px',height:Math.round((parseInt(thumbnailWidth)/4)*$svg.data('height')/$svg.data('width'))+'px'})}else{$svg.css({width:$svg.data('width')+'px',height:$svg.data('height')+'px'})}})}
$(window).on('load resize orientationChange vc_reload',mk_video_resize_play_icon)}(jQuery));(function(){var defaultOptions={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:''};var options=defaultOptions;var isExcluded=!1;var isFrame=!1;var direction={x:0,y:0};var initDone=!1;var root=document.documentElement;var activeElement;var observer;var refreshSize;var deltaBuffer=[];var isMac=/^Mac/.test(navigator.platform);var key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function initTest(){if(options.keyboardSupport){addEvent('keydown',keydown)}}
function init(){if(initDone||!document.body)return;initDone=!0;var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;var rootScrollHeight=function(){var adminbar=document.querySelector('#wpadminbar');if(!adminbar){return root.scrollHeight}
return root.scrollHeight-adminbar.offsetHeight}
root=(document.compatMode.indexOf('CSS')>=0)?html:body;activeElement=body;initTest();if(top!=self){isFrame=!0}else if(scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){var fullPageElem=document.createElement('div');fullPageElem.style.cssText='position:absolute; z-index:-10000; '+'top:0; left:0; right:0; height:'+rootScrollHeight()+'px';document.body.appendChild(fullPageElem);var pendingRefresh;refreshSize=function(){if(pendingRefresh)return;pendingRefresh=setTimeout(function(){if(isExcluded)return;fullPageElem.style.height='0';fullPageElem.style.height=rootScrollHeight()+'px';pendingRefresh=null},500)};setTimeout(refreshSize,10);addEvent('resize',refreshSize);window.addResizeListener(document.getElementById('mk-theme-container'),refreshSize);var config={attributes:!0,childList:!0,characterData:!1};observer=new MutationObserver(refreshSize);observer.observe(body,config);if(root.offsetHeight<=windowHeight){var clearfix=document.createElement('div');clearfix.style.clear='both';body.appendChild(clearfix)}}
if(!options.fixedBackground&&!isExcluded){body.style.backgroundAttachment='scroll';html.style.backgroundAttachment='scroll'}}
function cleanup(){observer&&observer.disconnect();removeEvent(wheelEvent,wheel);removeEvent('mousedown',mousedown);removeEvent('keydown',keydown);removeEvent('resize',refreshSize);removeEvent('load',init)}
var que=[];var pending=!1;var lastScroll=Date.now();function scrollArray(elem,left,top){directionCheck(left,top);if(options.accelerationMax!=1){var now=Date.now();var elapsed=now-lastScroll;if(elapsed<options.accelerationDelta){var factor=(1+(50/elapsed))/2;if(factor>1){factor=Math.min(factor,options.accelerationMax);left*=factor;top*=factor}}
lastScroll=Date.now()}
que.push({x:left,y:top,lastX:(left<0)?0.99:-0.99,lastY:(top<0)?0.99:-0.99,start:Date.now()});if(pending){return}
var scrollWindow=(elem===document.body);var step=function(time){var now=Date.now();var scrollX=0;var scrollY=0;for(var i=0;i<que.length;i++){var item=que[i];var elapsed=now-item.start;var finished=(elapsed>=options.animationTime);var position=(finished)?1:elapsed/options.animationTime;if(options.pulseAlgorithm){position=pulse(position)}
var x=(item.x*position-item.lastX)>>0;var y=(item.y*position-item.lastY)>>0;scrollX+=x;scrollY+=y;item.lastX+=x;item.lastY+=y;if(finished){que.splice(i,1);i--}}
if(scrollWindow){window.scrollBy(scrollX,scrollY)}else{if(scrollX)elem.scrollLeft+=scrollX;if(scrollY)elem.scrollTop+=scrollY}
if(!left&&!top){que=[]}
if(que.length){requestFrame(step,elem,(1000/options.frameRate+1))}else{pending=!1}};requestFrame(step,elem,0);pending=!0}
function wheel(event){if(!initDone){init()}
var target=event.target;var overflowing=overflowingAncestor(target);if(!overflowing||event.defaultPrevented||event.ctrlKey){return!0}
if(isNodeName(activeElement,'embed')||(isNodeName(target,'embed')&&/\.pdf/i.test(target.src))||isNodeName(activeElement,'object')){return!0}
var deltaX=-event.wheelDeltaX||event.deltaX||0;var deltaY=-event.wheelDeltaY||event.deltaY||0;if(isMac){options.touchpadSupport=!1;if(event.wheelDeltaX&&isDivisible(event.wheelDeltaX,120)){deltaX=-120*(event.wheelDeltaX/Math.abs(event.wheelDeltaX))}
if(event.wheelDeltaY&&isDivisible(event.wheelDeltaY,120)){deltaY=-120*(event.wheelDeltaY/Math.abs(event.wheelDeltaY))}}
if(!deltaX&&!deltaY){deltaY=-event.wheelDelta||0}
if(event.deltaMode===1){deltaX*=40;deltaY*=40}
if(!options.touchpadSupport&&isTouchpad(deltaY)){return!0}
if(Math.abs(deltaX)>1.2){deltaX*=options.stepSize/120}
if(Math.abs(deltaY)>1.2){deltaY*=options.stepSize/120}
scrollArray(overflowing,deltaX,deltaY);event.preventDefault();scheduleClearCache()}
function keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey||(event.shiftKey&&event.keyCode!==key.spacebar);if(!document.body.contains(activeElement)){activeElement=document.activeElement}
var inputNodeNames=/^(textarea|select|embed|object)$/i;var buttonTypes=/^(button|submit|radio|checkbox|file|color|image)$/i;if(inputNodeNames.test(target.nodeName)||isNodeName(target,'input')&&!buttonTypes.test(target.type)||isNodeName(activeElement,'video')||isInsideYoutubeVideo(event)||target.isContentEditable||event.defaultPrevented||modifier){return!0}
if((isNodeName(target,'button')||isNodeName(target,'input')&&buttonTypes.test(target.type))&&event.keyCode===key.spacebar){return!0}
var shift,x=0,y=0;var elem=overflowingAncestor(activeElement);var clientHeight=elem.clientHeight;if(elem==document.body){clientHeight=window.innerHeight}
switch(event.keyCode){case key.up:y=-options.arrowScroll;break;case key.down:y=options.arrowScroll;break;case key.spacebar:shift=event.shiftKey?1:-1;y=-shift*clientHeight*0.9;break;case key.pageup:y=-clientHeight*0.9;break;case key.pagedown:y=clientHeight*0.9;break;case key.home:y=-elem.scrollTop;break;case key.end:var damt=elem.scrollHeight-elem.scrollTop-clientHeight;y=(damt>0)?damt+10:0;break;case key.left:x=-options.arrowScroll;break;case key.right:x=options.arrowScroll;break;default:return!0}
scrollArray(elem,x,y);event.preventDefault();scheduleClearCache()}
function mousedown(event){activeElement=event.target}
var uniqueID=(function(){var i=0;return function(el){return el.uniqueID||(el.uniqueID=i++)}})();var cache={};var clearCacheTimer;function scheduleClearCache(){clearTimeout(clearCacheTimer);clearCacheTimer=setInterval(function(){cache={}},1*1000)}
function setCache(elems,overflowing){for(var i=elems.length;i--;)
cache[uniqueID(elems[i])]=overflowing;return overflowing}
function overflowingAncestor(el){var elems=[];var body=document.body;var rootScrollHeight=root.scrollHeight;do{var cached=cache[uniqueID(el)];if(cached){return setCache(elems,cached)}
elems.push(el);if(rootScrollHeight===el.scrollHeight){var topOverflowsNotHidden=overflowNotHidden(root)&&overflowNotHidden(body);var isOverflowCSS=topOverflowsNotHidden||overflowAutoOrScroll(root);if(isFrame&&isContentOverflowing(root)||!isFrame&&isOverflowCSS){return setCache(elems,getScrollRoot())}}else if(isContentOverflowing(el)&&overflowAutoOrScroll(el)){return setCache(elems,el)}}while(el=el.parentElement);}
function isContentOverflowing(el){return(el.clientHeight+10<el.scrollHeight)}
function overflowNotHidden(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return(overflow!=='hidden')}
function overflowAutoOrScroll(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return(overflow==='scroll'||overflow==='auto')}
function addEvent(type,fn){window.addEventListener(type,fn,!1)}
function removeEvent(type,fn){window.removeEventListener(type,fn,!1)}
function isNodeName(el,tag){return(el.nodeName||'').toLowerCase()===tag.toLowerCase()}
function directionCheck(x,y){x=(x>0)?1:-1;y=(y>0)?1:-1;if(direction.x!==x||direction.y!==y){direction.x=x;direction.y=y;que=[];lastScroll=0}}
var deltaBufferTimer;if(window.localStorage&&localStorage.SS_deltaBuffer){deltaBuffer=localStorage.SS_deltaBuffer.split(',')}
function isTouchpad(deltaY){if(!deltaY)return;if(!deltaBuffer.length){deltaBuffer=[deltaY,deltaY,deltaY]}
deltaY=Math.abs(deltaY);deltaBuffer.push(deltaY);deltaBuffer.shift();clearTimeout(deltaBufferTimer);deltaBufferTimer=setTimeout(function(){if(window.localStorage){localStorage.SS_deltaBuffer=deltaBuffer.join(',')}},1000);return!allDeltasDivisableBy(120)&&!allDeltasDivisableBy(100)}
function isDivisible(n,divisor){return(Math.floor(n/divisor)==n/divisor)}
function allDeltasDivisableBy(divisor){return(isDivisible(deltaBuffer[0],divisor)&&isDivisible(deltaBuffer[1],divisor)&&isDivisible(deltaBuffer[2],divisor))}
function isInsideYoutubeVideo(event){var elem=event.target;var isControl=!1;if(document.URL.indexOf('www.youtube.com/watch')!=-1){do{isControl=(elem.classList&&elem.classList.contains('html5-video-controls'));if(isControl)break}while(elem=elem.parentNode);}
return isControl}
var requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback,element,delay){window.setTimeout(callback,delay||(1000/60))})})();var MutationObserver=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var getScrollRoot=(function(){var SCROLL_ROOT;return function(){if(!SCROLL_ROOT){var dummy=document.createElement('div');dummy.style.cssText='height:10000px;width:1px;';document.body.appendChild(dummy);var bodyScrollTop=document.body.scrollTop;var docElScrollTop=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=bodyScrollTop)(SCROLL_ROOT=document.body);else(SCROLL_ROOT=document.documentElement);window.scrollBy(0,-3);document.body.removeChild(dummy)}
return SCROLL_ROOT}})();function pulse_(x){var val,start,expx;x=x*options.pulseScale;if(x<1){val=x-(1-Math.exp(-x))}else{start=Math.exp(-1);x-=1;expx=1-Math.exp(-x);val=start+(expx*(1-start))}
return val*options.pulseNormalize}
function pulse(x){if(x>=1)return 1;if(x<=0)return 0;if(options.pulseNormalize==1){options.pulseNormalize/=pulse_(1)}
return pulse_(x)}
var userAgent=window.navigator.userAgent;var isIE=/Trident/.test(userAgent);var isEdge=/Edge/.test(userAgent);var isChrome=/chrome/i.test(userAgent)&&!isEdge;var isSafari=/safari/i.test(userAgent)&&!isEdge;var isMobile=/mobile/i.test(userAgent);var isIEWin7=/Windows NT 6.1/i.test(userAgent)&&/rv:11/i.test(userAgent);var isEnabledForBrowser=(isChrome||isIEWin7||isIE||isEdge)&&!isMobile;var wheelEvent;if('onwheel' in document.createElement('div'))
wheelEvent='wheel';else if('onmousewheel' in document.createElement('div'))
wheelEvent='mousewheel';if(wheelEvent&&isEnabledForBrowser){addEvent(wheelEvent,wheel);addEvent('mousedown',mousedown);addEvent('load',init)}
function SmoothScroll(optionsToSet){for(var key in optionsToSet)
if(defaultOptions.hasOwnProperty(key))
options[key]=optionsToSet[key]}
SmoothScroll.destroy=cleanup;if(window.SmoothScrollOptions)
SmoothScroll(window.SmoothScrollOptions)
if(typeof define==='function'&&define.amd)
define(function(){return SmoothScroll});else if('object'==typeof exports)
module.exports=SmoothScroll;else window.SmoothScroll=SmoothScroll})();(function($){var windowSel=$(window);var bodySel=$('body');var fixedSel=$('.mkhb-fixed');var stickySel=$('.mkhb-sticky');var normalRespNav=$('.mkhb-navigation-resp__normal');var stickyRespNav=$('.mkhb-navigation-resp__sticky');var windowHeight=windowSel.height();var adminBarHeight=0;function mkhbGetOffset(offset,device){var deviceEl=$('.mkhb-'+device);var $deviceHeight=deviceEl.height();var $offset=0;if(typeof offset==='string'&&offset!=='header'){$offset=Math.round((parseInt(offset)/100)*windowHeight)}else if(typeof offset==='number'){$offset=parseInt(offset)}
if(0==$offset||isNaN($offset)){$offset=$deviceHeight;if(deviceEl.hasClass('mkhb-overlap')){$offset=deviceEl.children('.mkhb-device-container').height()}}
if($deviceHeight>$offset){$offset=$deviceHeight}
return $offset}
function mkhbUpdateTop(){adminBarHeight=$('#wpadminbar').height();adminBarHeight=(adminBarHeight==null)?0:adminBarHeight}
function mkhbSetFixedHeight(selector){selector.each(function(e){var thisSel=$(this);if(!thisSel.hasClass('mkhb-overlap')){var childHeight=thisSel.children('.mkhb-device-container').height();thisSel.height(childHeight)}})}
function mkhbSlideDown(current,offset,device,curHeight){var onScroll=function onScroll(){var addOffset=mkhbAddRespNormal(offset,device);if(windowSel.scrollTop()>addOffset){current.css({'top':adminBarHeight});current.addClass('mkhb-sticky--active')}else{current.css({'top':-curHeight});current.removeClass('mkhb-sticky--active');mkhbHideRespBurger()}};onScroll();windowSel.on('scroll',onScroll)}
function mkhbLazy(current,offset,device,curHeight){var lastScrollPos=0;var onScroll=function onScroll(){var addOffset=mkhbAddRespNormal(offset,device);var scrollPos=windowSel.scrollTop();if(scrollPos>addOffset&&scrollPos<lastScrollPos){current.css({'top':adminBarHeight});current.addClass('mkhb-sticky--active')}else{current.css({'top':-curHeight});current.removeClass('mkhb-sticky--active');mkhbHideRespBurger()}
lastScrollPos=scrollPos};onScroll();windowSel.on('scroll',onScroll)}
function mkhbHideRespBurger(){if(stickyRespNav.length<=0){return}
if($('body[class*="mkhb-navigation-resp--opened"]')<=0){return}
stickyRespNav.each(function(){var wrap=$(this);var id=wrap.attr('id').replace('-wrap','');var current=$('#'+id).find('.mkhb-navigation-resp');if(bodySel.hasClass('mkhb-navigation-resp--opened-'+id)){current.removeClass('is-active').find('.mkhb-navigation-resp__container').removeClass('fullscreen-active');bodySel.removeClass('mkhb-navigation-resp--opened-'+id).addClass('mkhb-navigation-resp--closed-'+id).trigger('mkhb-navigation-resp--closed-'+id);wrap.hide()}})}
function mkhbAddRespNormal(offset,device){if(normalRespNav.length<=0){return offset}
if($('body[class*="mkhb-navigation-resp--opened"]')<=0){return offset}
var deviceEl=$('.mkhb-'+device);var deviceHeight=deviceEl.height();normalRespNav.each(function(){var current=$(this);var height=current.height();var id=current.attr('id').replace('-wrap','');if(bodySel.hasClass('mkhb-navigation-resp--opened-'+id)){var newOffset=deviceHeight+parseInt(height);if(newOffset>offset){offset=newOffset}
return offset}});return offset}
var resizeHeader=function resizeHeader(){var fixedRsz=$('.mkhb-fixed');if(fixedRsz.length>0){mkhbSetFixedHeight(fixedRsz)}}
if(fixedSel.length>0){mkhbSetFixedHeight(fixedSel);windowSel.on('resize',resizeHeader)}
var initialAction=function initialAction(){if(stickySel.length>0){stickySel.each(function(e){var current=$(this);var offset=current.data('offset');var device=current.data('device');offset=mkhbGetOffset(offset,device);mkhbUpdateTop();var curHeight=current.height();current.css({'top':-curHeight});var effect=current.data('effect');if(effect=='slide-down'){mkhbSlideDown(current,offset,device,curHeight)}else if(effect=='lazy'){mkhbLazy(current,offset,device,curHeight)}})}}
windowSel.on('load',initialAction);windowSel.on('resize',mkhbUpdateTop)})(jQuery);(function($){var inlineContainer=$('.mkhb-col__container-inline');if(inlineContainer.length>0){inlineContainer.css('opacity','0');$.each(inlineContainer,function(key,value){var thisContainer=$(this);var thisChildren=thisContainer.children();if(thisChildren.length<1){return}
var inlineStatus=!1;var inlineContent='';var inlineTypes=[];inlineTypes.left='';inlineTypes.center='';inlineTypes.right='';var countEls=thisChildren.length;$.each(thisChildren,function(key,value){elSel=$(this);--countEls;var elMarkup=elSel[0].outerHTML;var elDisplay='inline';var elAlign='left';if(elMarkup){elDisplay=elSel.data('display')||'block'}
if('inline'==elDisplay){elAlign=elSel.data('align')||'left';inlineTypes[elAlign]+=elMarkup;elMarkup='';inlineStatus=!0}
if(inlineStatus&&('block'==elDisplay||countEls<=0)){inlineContent+=setInlineContainer(inlineTypes);inlineStatus=!1;inlineTypes.left='';inlineTypes.center='';inlineTypes.right=''}
inlineContent+=elMarkup});thisContainer.html(inlineContent)});inlineContainer.css('opacity','1')}
function setInlineContainer(inlineElements){leftContainer='<div class="mkhb-col__container-inline__left">'+inlineElements.left+'</div>';rightContainer='<div class="mkhb-col__container-inline__right">'+inlineElements.right+'</div>';centerContainer='<div class="mkhb-col__container-inline__center">'+inlineElements.center+'</div>';if(''==inlineElements.center){centerContainer='';if(''==inlineElements.left){leftContainer=''}
if(''==inlineElements.right){rightContainer=''}}
if(''==inlineElements.left&&''==inlineElements.right){leftContainer='';rightContainer=''}
columnContent='<div class="mkhb-col__container-inline__wrap">'+leftContainer+centerContainer+rightContainer+'</div>';return columnContent}})(jQuery);/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),function($){"function"!=typeof window.vc_js&&(window.vc_js=function(){"use strict";vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval"),10),sliderFx=this_element.attr("data-flex_fx"),slideshow=!0;0===sliderTimeout&&(slideshow=!1),this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="https://apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="https://assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".vc_progress_bar").each(function(){var $el=jQuery(this);$el.vcwaypoint(function(){$el.find(".vc_single_bar").each(function(index){var bar=jQuery(this).find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function(){var $el=jQuery(this);$el.vcwaypoint(function(){$el.addClass("wpb_start_animation animated")},{offset:"85%"})})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var element=jQuery(this).closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}$el?$el.hasClass("vc_toggle_title")?$el.unbind("click").on("click",event):$el.find(".vc_toggle_title").off("click").on("click",event):jQuery(".vc_toggle_title").off("click").on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0],10)&&parseInt(ver[1],10)<9;$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];if($tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}}),interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(err){window.console&&window.console.warn&&console.warn("tabs behaviours error",err)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").on("click",function(e){return e&&e.preventDefault&&e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click",function(e){var index,length;e&&e.preventDefault&&e.preventDefault(),old_version?(index=$tabs.tabs("option","selected"),jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,index<0?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)):(index=$tabs.tabs("option","active"),length=$tabs.find(".wpb_tab").length,index=jQuery(this).parent().hasClass("wpb_next_slide")?length<=index+1?0:index+1:index-1<0?length-1:index-1,$tabs.tabs("option","active",index))})})}}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $tabs,active_tab,collapsible,$this=jQuery(this);$this.attr("data-interval"),collapsible=!1===(active_tab=!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"),10)&&parseInt($this.data("active-tab"),10)-1)||"yes"===$this.data("collapsible"),$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}}),!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).on("click",function(e){e&&e.preventDefault&&e.preventDefault();var $thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);if(!0!==$this.data("carousel_enabled")&&$this.is(":visible")){$this.data("carousel_enabled",!0);getColumnsCount(jQuery(this));jQuery(this).hasClass("columns_count_1")&&900;var carousel_li=jQuery(this).find(".wpb_thumbnails-fluid li");carousel_li.css({"margin-right":carousel_li.css("margin-left"),"margin-left":0});var fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid");fluid_ul.width(fluid_ul.width()+300),jQuery(window).on("resize",function(){screen_size!=(screen_size=getSizeName())&&window.setTimeout(function(){location.reload()},20)})}})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,this_element=jQuery(this);if(this_element.hasClass("wpb_slider_nivo")){var sliderTimeout=1e3*this_element.attr("data-interval");0===sliderTimeout&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})}else this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.warn&&window.console.warn("vc_prettyPhoto initialize error",err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return window.console&&window.console.warn&&window.console.warn("function vc_google_fonts is deprecated, no need to use it"),!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var vcSkrollrOptions,callSkrollInit,$=window.jQuery;function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var padding,paddingRight,el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if("rtl"===$el.css("direction")&&(offset-=$el_full.width(),offset+=width,offset+=el_margin_left,offset+=el_margin_right),$el.css({position:"relative",left:offset,"box-sizing":"border-box",width:width}),!$el.data("vcStretchContent"))"rtl"===$el.css("direction")?((padding=offset)<0&&(padding=0),(paddingRight=offset)<0&&(paddingRight=0)):((padding=-1*offset)<0&&(padding=0),(paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right)<0&&(paddingRight=0)),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"});$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var windowHeight,offsetTop,fullHeight,$element=$(".vc_row-o-full-height:first");$element.length&&(windowHeight=$(window).height(),(offsetTop=$element.offset().top)<windowHeight&&(fullHeight=100-offsetTop/(windowHeight/100),$element.css("min-height",fullHeight+"vh")));$(document).trigger("vc-full-height-row",$element)}$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds(),callSkrollInit=!1,window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSize,skrollrStart,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),($parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize+"%"),parallaxImage=$(this).data("vcParallaxImage"),(youtubeId=vcExtractYoutubeId(parallaxImage))?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrStart=-(skrollrSize-100),$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: 0%;")}),callSkrollInit&&window.skrollr&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&screen_w<1169?"desktop":768<screen_w&&screen_w<959?"tablet":300<screen_w&&screen_w<767?"mobile":screen_w<300?"mobile_portrait":""}"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var $ui_panel,$google_maps,panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');if(vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),$ui_panel=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$ui_panel.length&&$ui_panel.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")){var $frame=$google_maps.find("iframe");$frame.attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")}panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),"function"!=typeof window.vc_ttaActivation&&(window.vc_ttaActivation=function(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}),"function"!=typeof window.vc_accordionActivate&&(window.vc_accordionActivate=function(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}}),"function"!=typeof window.initVideoBackgrounds&&(window.initVideoBackgrounds=function(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}),"function"!=typeof window.vc_initVideoBackgrounds&&(window.vc_initVideoBackgrounds=function(){jQuery("[data-vc-video-bg]").each(function(){var youtubeUrl,youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?(youtubeUrl=$element.data("vcVideoBg"),(youtubeId=vcExtractYoutubeId(youtubeUrl))&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}),"function"!=typeof window.insertYoutubeVideoAsBackground&&(window.insertYoutubeVideoAsBackground=function($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).bind("resize",function(){vcResizeVideoBackground($element)})}),"function"!=typeof window.vcResizeVideoBackground&&(window.vcResizeVideoBackground=function($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px"):(iframeH=(iframeW=containerW)*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px"),iframeW+="px",iframeH+="px",$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}),"function"!=typeof window.vcExtractYoutubeId&&(window.vcExtractYoutubeId=function(url){if(void 0===url)return!1;var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}),"function"!=typeof window.vc_googleMapsPointer&&(window.vc_googleMapsPointer=function(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.on("click",function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.on("mouseleave",function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}),"function"!=typeof window.vc_setHoverBoxPerspective&&(window.vc_setHoverBoxPerspective=function(hoverBox){hoverBox.each(function(){var $this=jQuery(this),perspective=4*$this.width()+"px";$this.css("perspective",perspective)})}),"function"!=typeof window.vc_setHoverBoxHeight&&(window.vc_setHoverBoxHeight=function(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=$this.find(".vc-hoverbox-front-inner").outerHeight(),backHeight=$this.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=backHeight<frontHeight?frontHeight:backHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}),"function"!=typeof window.vc_prepareHoverBox&&(window.vc_prepareHoverBox=function(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}),jQuery(document).ready(window.vc_prepareHoverBox),jQuery(window).resize(window.vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()})}(window.jQuery);window.get={};window.get.captcha=function(enteredCaptcha){return jQuery.get(ajaxurl,{action:"mk_validate_captcha_input",captcha:enteredCaptcha})}
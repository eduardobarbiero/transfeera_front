/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-es5date-inputtypes-setclasses !*/
!function(e,t,n){function a(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,c;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],t=r[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],c=i.split("."),1===c.length?Modernizr[c[0]]=s:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=s),l.push((s?"":"no-")+c.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(p&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),p?u.className.baseVal=t:u.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):p?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var l=[],r=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(n){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)});var u=t.documentElement,p="svg"===u.nodeName.toLowerCase(),f=i("input"),d="search tel url email datetime date month week time datetime-local number range color".split(" "),m={};Modernizr.inputtypes=function(e){for(var a,s,o,i=e.length,l="1)",r=0;i>r;r++)f.setAttribute("type",a=e[r]),o="text"!==f.type&&"style"in f,o&&(f.value=l,f.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&f.style.WebkitAppearance!==n?(u.appendChild(f),s=t.defaultView,o=s.getComputedStyle&&"textfield"!==s.getComputedStyle(f,null).WebkitAppearance&&0!==f.offsetHeight,u.removeChild(f)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?f.checkValidity&&f.checkValidity()===!1:f.value!=l)),m[e[r]]=!!o;return m}(d),s(),o(l),delete c.addTest,delete c.addAsyncTest;for(var h=0;h<Modernizr._q.length;h++)Modernizr._q[h]();e.Modernizr=Modernizr}(window,document);
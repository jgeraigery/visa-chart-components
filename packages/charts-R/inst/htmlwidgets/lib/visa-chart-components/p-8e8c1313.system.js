/**
 * Copyright (c) 2022 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
System.register(["./p-36d0ec22.system.js","./p-134059df.system.js","./p-d607fc6f.system.js"],(function(n){"use strict";var t,e,r;return{setters:[function(n){t=n.b},function(n){e=n.i},function(n){r=n.i}],execute:function(){n({a:$,b:q,c:I,d:cn,e:h,f:C,i:l,l:sn,n:m,o:A,t:c});var i=Math.sqrt(50),a=Math.sqrt(10),u=Math.sqrt(2);function o(n,t,e){var r,i=-1,a,u,o;t=+t,n=+n,e=+e;if(n===t&&e>0)return[n];if(r=t<n)a=n,n=t,t=a;if((o=f(n,t,e))===0||!isFinite(o))return[];if(o>0){n=Math.ceil(n/o);t=Math.floor(t/o);u=new Array(a=Math.ceil(t-n+1));while(++i<a)u[i]=(n+i)*o}else{n=Math.floor(n*o);t=Math.ceil(t*o);u=new Array(a=Math.ceil(n-t+1));while(++i<a)u[i]=(n-i)/o}if(r)u.reverse();return u}function f(n,t,e){var r=(t-n)/Math.max(0,e),o=Math.floor(Math.log(r)/Math.LN10),f=r/Math.pow(10,o);return o>=0?(f>=i?10:f>=a?5:f>=u?2:1)*Math.pow(10,o):-Math.pow(10,-o)/(f>=i?10:f>=a?5:f>=u?2:1)}function c(n,t,e){var r=Math.abs(t-n)/Math.max(0,e),o=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),f=r/o;if(f>=i)o*=10;else if(f>=a)o*=5;else if(f>=u)o*=2;return t<n?-o:o}function s(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function l(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function h(n,t){switch(arguments.length){case 0:break;case 1:this.interpolator(n);break;default:this.interpolator(t).domain(n);break}return this}var p="$";function d(){}d.prototype=g.prototype={constructor:d,has:function(n){return p+n in this},get:function(n){return this[p+n]},set:function(n,t){this[p+n]=t;return this},remove:function(n){var t=p+n;return t in this&&delete this[t]},clear:function(){for(var n in this)if(n[0]===p)delete this[n]},keys:function(){var n=[];for(var t in this)if(t[0]===p)n.push(t.slice(1));return n},values:function(){var n=[];for(var t in this)if(t[0]===p)n.push(this[t]);return n},entries:function(){var n=[];for(var t in this)if(t[0]===p)n.push({key:t.slice(1),value:this[t]});return n},size:function(){var n=0;for(var t in this)if(t[0]===p)++n;return n},empty:function(){for(var n in this)if(n[0]===p)return false;return true},each:function(n){for(var t in this)if(t[0]===p)n(this[t],t.slice(1),this)}};function g(n,t){var e=new d;if(n instanceof d)n.each((function(n,t){e.set(t,n)}));else if(Array.isArray(n)){var r=-1,i=n.length,a;if(t==null)while(++r<i)e.set(r,n[r]);else while(++r<i)e.set(t(a=n[r],r,n),a)}else if(n)for(var u in n)e.set(u,n[u]);return e}function m(){var n=[],t=[],e,r,i;function a(t,i,u,o){if(i>=n.length){if(e!=null)t.sort(e);return r!=null?r(t):t}var f=-1,c=t.length,s=n[i++],l,h,p=g(),d,m=u();while(++f<c){if(d=p.get(l=s(h=t[f])+"")){d.push(h)}else{p.set(l,[h])}}p.each((function(n,t){o(m,t,a(n,i,u,o))}));return m}function u(e,i){if(++i>n.length)return e;var a,o=t[i-1];if(r!=null&&i>=n.length)a=e.entries();else a=[],e.each((function(n,t){a.push({key:t,values:u(n,i)})}));return o!=null?a.sort((function(n,t){return o(n.key,t.key)})):a}return i={object:function(n){return a(n,0,v,M)},map:function(n){return a(n,0,y,w)},entries:function(n){return u(a(n,0,y,w),0)},key:function(t){n.push(t);return i},sortKeys:function(e){t[n.length-1]=e;return i},sortValues:function(n){e=n;return i},rollup:function(n){r=n;return i}}}function v(){return{}}function M(n,t,e){n[t]=e}function y(){return g()}function w(n,t,e){n.set(t,e)}var b=Array.prototype;var k=n("m",b.map);var x=n("s",b.slice);var N={name:"implicit"};function A(){var n=g(),t=[],e=[],r=N;function i(i){var a=i+"",u=n.get(a);if(!u){if(r!==N)return r;n.set(a,u=t.push(i))}return e[(u-1)%e.length]}i.domain=function(e){if(!arguments.length)return t.slice();t=[],n=g();var r=-1,a=e.length,u,o;while(++r<a)if(!n.has(o=(u=e[r])+""))n.set(o,t.push(u));return i};i.range=function(n){return arguments.length?(e=x.call(n),i):e.slice()};i.unknown=function(n){return arguments.length?(r=n,i):r};i.copy=function(){return A(t,e).unknown(r)};l.apply(i,arguments);return i}function j(n){return function(){return n}}function S(n){return+n}var z=[0,1];function $(n){return n}function E(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:j(isNaN(t)?NaN:.5)}function F(n){var t=n[0],e=n[n.length-1],r;if(t>e)r=t,t=e,e=r;return function(n){return Math.max(t,Math.min(e,n))}}function L(n,t,e){var r=n[0],i=n[1],a=t[0],u=t[1];if(i<r)r=E(i,r),a=e(u,a);else r=E(r,i),a=e(a,u);return function(n){return a(r(n))}}function P(n,e,r){var i=Math.min(n.length,e.length)-1,a=new Array(i),u=new Array(i),o=-1;if(n[i]<n[0]){n=n.slice().reverse();e=e.slice().reverse()}while(++o<i){a[o]=E(n[o],n[o+1]);u[o]=r(e[o],e[o+1])}return function(e){var r=t(n,e,1,i)-1;return u[r](a[r](e))}}function q(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function C(){var n=z,t=z,i=r,a,u,o,f=$,c,l,h;function p(){c=Math.min(n.length,t.length)>2?P:L;l=h=null;return d}function d(e){return isNaN(e=+e)?o:(l||(l=c(n.map(a),t,i)))(a(f(e)))}d.invert=function(r){return f(u((h||(h=c(t,n.map(a),e)))(r)))};d.domain=function(t){return arguments.length?(n=k.call(t,S),f===$||(f=F(n)),p()):n.slice()};d.range=function(n){return arguments.length?(t=x.call(n),p()):t.slice()};d.rangeRound=function(n){return t=x.call(n),i=s,p()};d.clamp=function(t){return arguments.length?(f=t?F(n):$,d):f!==$};d.interpolate=function(n){return arguments.length?(i=n,p()):i};d.unknown=function(n){return arguments.length?(o=n,d):o};return function(n,t){a=n,u=t;return p()}}function I(n,t){return C()(n,t)}function X(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function G(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function K(n){return n=G(Math.abs(n)),n?n[1]:NaN}function O(n,t){return function(e,r){var i=e.length,a=[],u=0,o=n[0],f=0;while(i>0&&o>0){if(f+o+1>r)o=Math.max(1,r-f);a.push(e.substring(i-=o,i+o));if((f+=o+1)>r)break;o=n[u=(u+1)%n.length]}return a.reverse().join(t)}}function R(n){return function(t){return t.replace(/[0-9]/g,(function(t){return n[+t]}))}}var T=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function U(n){if(!(t=T.exec(n)))throw new Error("invalid format: "+n);var t;return new V({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}U.prototype=V.prototype;function V(n){this.fill=n.fill===undefined?" ":n.fill+"";this.align=n.align===undefined?">":n.align+"";this.sign=n.sign===undefined?"-":n.sign+"";this.symbol=n.symbol===undefined?"":n.symbol+"";this.zero=!!n.zero;this.width=n.width===undefined?undefined:+n.width;this.comma=!!n.comma;this.precision=n.precision===undefined?undefined:+n.precision;this.trim=!!n.trim;this.type=n.type===undefined?"":n.type+""}V.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===undefined?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===undefined?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Y(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e){switch(n[e]){case".":r=i=e;break;case"0":if(r===0)r=e;i=e;break;default:if(!+n[e])break n;if(r>0)r=0;break}}return r>0?n.slice(0,r)+n.slice(i+1):n}var Z;function B(n,t){var e=G(n,t);if(!e)return n+"";var r=e[0],i=e[1],a=i-(Z=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,u=r.length;return a===u?r:a>u?r+new Array(a-u+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+G(n,Math.max(0,t+a-1))[0]}function D(n,t){var e=G(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var H={"%":function(n,t){return(n*100).toFixed(t)},b:function(n){return Math.round(n).toString(2)},c:function(n){return n+""},d:X,e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},g:function(n,t){return n.toPrecision(t)},o:function(n){return Math.round(n).toString(8)},p:function(n,t){return D(n*100,t)},r:D,s:B,X:function(n){return Math.round(n).toString(16).toUpperCase()},x:function(n){return Math.round(n).toString(16)}};function J(n){return n}var Q=Array.prototype.map,W=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function _(n){var t=n.grouping===undefined||n.thousands===undefined?J:O(Q.call(n.grouping,Number),n.thousands+""),e=n.currency===undefined?"":n.currency[0]+"",r=n.currency===undefined?"":n.currency[1]+"",i=n.decimal===undefined?".":n.decimal+"",a=n.numerals===undefined?J:R(Q.call(n.numerals,String)),u=n.percent===undefined?"%":n.percent+"",o=n.minus===undefined?"-":n.minus+"",f=n.nan===undefined?"NaN":n.nan+"";function c(n){n=U(n);var c=n.fill,s=n.align,l=n.sign,h=n.symbol,p=n.zero,d=n.width,g=n.comma,m=n.precision,v=n.trim,M=n.type;if(M==="n")g=true,M="g";else if(!H[M])m===undefined&&(m=12),v=true,M="g";if(p||c==="0"&&s==="=")p=true,c="0",s="=";var y=h==="$"?e:h==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",w=h==="$"?r:/[%p]/.test(M)?u:"";var b=H[M],k=/[defgprs%]/.test(M);m=m===undefined?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m));function x(n){var e=y,r=w,u,h,x;if(M==="c"){r=b(n)+r;n=""}else{n=+n;var N=n<0||1/n<0;n=isNaN(n)?f:b(Math.abs(n),m);if(v)n=Y(n);if(N&&+n===0&&l!=="+")N=false;e=(N?l==="("?l:o:l==="-"||l==="("?"":l)+e;r=(M==="s"?W[8+Z/3]:"")+r+(N&&l==="("?")":"");if(k){u=-1,h=n.length;while(++u<h){if(x=n.charCodeAt(u),48>x||x>57){r=(x===46?i+n.slice(u+1):n.slice(u))+r;n=n.slice(0,u);break}}}}if(g&&!p)n=t(n,Infinity);var A=e.length+n.length+r.length,j=A<d?new Array(d-A+1).join(c):"";if(g&&p)n=t(j+n,j.length?d-r.length:Infinity),j="";switch(s){case"<":n=e+n+r+j;break;case"=":n=e+j+n+r;break;case"^":n=j.slice(0,A=j.length>>1)+e+n+r+j.slice(A);break;default:n=j+e+n+r;break}return a(n)}x.toString=function(){return n+""};return x}function s(n,t){var e=c((n=U(n),n.type="f",n)),r=Math.max(-8,Math.min(8,Math.floor(K(t)/3)))*3,i=Math.pow(10,-r),a=W[8+r/3];return function(n){return e(i*n)+a}}return{format:c,formatPrefix:s}}var nn;var tn;var en;rn({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function rn(n){nn=_(n);tn=nn.format;en=nn.formatPrefix;return nn}function an(n){return Math.max(0,-K(Math.abs(n)))}function un(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(K(t)/3)))*3-K(Math.abs(n)))}function on(n,t){n=Math.abs(n),t=Math.abs(t)-n;return Math.max(0,K(t)-K(n))+1}function fn(n,t,e,r){var i=c(n,t,e),a;r=U(r==null?",f":r);switch(r.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(t));if(r.precision==null&&!isNaN(a=un(i,u)))r.precision=a;return en(r,u)}case"":case"e":case"g":case"p":case"r":{if(r.precision==null&&!isNaN(a=on(i,Math.max(Math.abs(n),Math.abs(t)))))r.precision=a-(r.type==="e");break}case"f":case"%":{if(r.precision==null&&!isNaN(a=an(i)))r.precision=a-(r.type==="%")*2;break}}return tn(r)}function cn(n){var t=n.domain;n.ticks=function(n){var e=t();return o(e[0],e[e.length-1],n==null?10:n)};n.tickFormat=function(n,e){var r=t();return fn(r[0],r[r.length-1],n==null?10:n,e)};n.nice=function(e){if(e==null)e=10;var r=t(),i=0,a=r.length-1,u=r[i],o=r[a],c;if(o<u){c=u,u=o,o=c;c=i,i=a,a=c}c=f(u,o,e);if(c>0){u=Math.floor(u/c)*c;o=Math.ceil(o/c)*c;c=f(u,o,e)}else if(c<0){u=Math.ceil(u*c)/c;o=Math.floor(o*c)/c;c=f(u,o,e)}if(c>0){r[i]=Math.floor(u/c)*c;r[a]=Math.ceil(o/c)*c;t(r)}else if(c<0){r[i]=Math.ceil(u*c)/c;r[a]=Math.floor(o*c)/c;t(r)}return n};return n}function sn(){var n=I($,$);n.copy=function(){return q(n,sn())};l.apply(n,arguments);return cn(n)}}}}));
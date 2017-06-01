"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","5d4dd05e816c9c8fc17a96e304e02da8"],["static/css/main.6d3814d2.css","c562afdb2d0beae01947f78532bfe0c2"],["static/js/main.74646268.js","80a0f61554fb6832dac3845955a9c891"],["static/media/SalesforceSans-Bold.1a99b4b5.woff","1a99b4b58efca0b3c1b1ea9c29d981e4"],["static/media/SalesforceSans-Bold.68a71533.woff2","68a71533d08ff9251d6f179043a4781b"],["static/media/SalesforceSans-BoldItalic.41ae6b36.woff","41ae6b36a1f81e8c5d2aafe12c409f30"],["static/media/SalesforceSans-BoldItalic.dba3843e.woff2","dba3843e5b62ac3c2d9637a98f2207f4"],["static/media/SalesforceSans-Italic.882515c4.woff","882515c44aafee22611dbcbc904a792b"],["static/media/SalesforceSans-Italic.afa7774c.woff2","afa7774ce458bd2fc11c0f838f95a920"],["static/media/SalesforceSans-Light.2edec878.woff","2edec8788fdf09212e4fecdfeed96a7e"],["static/media/SalesforceSans-Light.c9505072.woff2","c9505072b839823249fbfbf0c3e31ef8"],["static/media/SalesforceSans-LightItalic.676a9c30.woff2","676a9c306dd2390c45ec0d0b28e51a6a"],["static/media/SalesforceSans-LightItalic.8080e8bc.woff","8080e8bc6c523ed5c657931fdd80e032"],["static/media/SalesforceSans-Regular.401b32dd.woff","401b32ddc80c4c66d0558df1bc202d9b"],["static/media/SalesforceSans-Regular.aa41afda.woff2","aa41afdaceb8b78c56529555448bcf44"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
"use strict";var precacheConfig=[["cube.fusionsoft.ru/index.html","4435e34fa6064db82eca775990d46f90"],["cube.fusionsoft.ru/static/css/main.1fb8ae09.css","1e1ee71913e5fb719099d03c5ba92f45"],["cube.fusionsoft.ru/static/js/main.4abc7ac6.js","b5441dab161aeb873055f385e867e65c"],["cube.fusionsoft.ru/static/media/arrow-down.d6584377.svg","d6584377c605b535ca47bd9a36bcfff8"],["cube.fusionsoft.ru/static/media/arrow-left.bb56707f.svg","bb56707f34958798a0349dfda41b5faf"],["cube.fusionsoft.ru/static/media/arrow-right.d45b608a.svg","d45b608a08f4f20a8783730cc99c4efe"],["cube.fusionsoft.ru/static/media/arrow-up.5ddaef3b.svg","5ddaef3b3984bd8d9c3fe9f5efe53d62"],["cube.fusionsoft.ru/static/media/btn-plus-icon.b160c2b3.svg","b160c2b317c8b527f6d63bf1ef3fe631"],["cube.fusionsoft.ru/static/media/checkbox-checked.85a8d402.svg","85a8d4026a94f43b9341ffab7f1ab2f8"],["cube.fusionsoft.ru/static/media/close-modal-icon.2ac33c5f.svg","2ac33c5fc70fa53d6bce511c5f95949b"],["cube.fusionsoft.ru/static/media/cloud-icon.5880c636.svg","5880c6367a70b592cd99fed5500b8c88"],["cube.fusionsoft.ru/static/media/dropdown-arrow-icon.c6129516.svg","c61295168ed3b1fb01b4a15ed8edc5c0"],["cube.fusionsoft.ru/static/media/help-icon.8d2a40b5.svg","8d2a40b55f0df69fc487cbf44e8ef381"],["cube.fusionsoft.ru/static/media/print-icon.34b9263a.svg","34b9263ad338c603aac515e576ea41ff"],["cube.fusionsoft.ru/static/media/remove-line-icon.c68aa397.svg","c68aa397cdc425dfbd643799b5ebf8a3"],["cube.fusionsoft.ru/static/media/settings-icon.512de80a.svg","512de80ae575f82e0158e304355b32e2"],["cube.fusionsoft.ru/static/media/warning-icon.bcb032aa.svg","bcb032aae1f0664de49f4d89d333d1ba"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="cube.fusionsoft.ru/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
"use strict";var precacheConfig=[["/crypto-mining-game/index.html","e41a34af6dfd546b2eeda263d668f579"],["/crypto-mining-game/static/css/main.c67b7359.css","683c6c08dfb29ab2519d79e496d035cf"],["/crypto-mining-game/static/js/main.7f817d9b.js","61b73628b22d0479a1ea734c40138329"],["/crypto-mining-game/static/media/cat1.2acf1843.png","2acf1843c726cc12b080a76207091fc2"],["/crypto-mining-game/static/media/cat2.6e376466.png","6e3764666525c2b8e6daea01de9bb6c4"],["/crypto-mining-game/static/media/computer_screen.60606b56.png","60606b5669f195aff04dc0bcfc0ba74f"],["/crypto-mining-game/static/media/computershoplogo.bd9ceb68.png","bd9ceb682602944681860b0204b6a0c5"],["/crypto-mining-game/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/crypto-mining-game/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/crypto-mining-game/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/crypto-mining-game/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/crypto-mining-game/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/crypto-mining-game/static/media/gpu1fan.e9425bf0.svg","e9425bf012dd64ffba983552b0f965c7"],["/crypto-mining-game/static/media/gpu2fan.e358a4bf.svg","e358a4bf57d362f3cfe7194340d7d9f6"],["/crypto-mining-game/static/media/gpu3fan.fd4cbf9d.svg","fd4cbf9df5d761a119344ece716b8200"],["/crypto-mining-game/static/media/motherboard.3202bfa0.svg","3202bfa03a537dca9ffca87ae4088d48"],["/crypto-mining-game/static/media/motherboard2.726b5669.svg","726b5669f81650b3253720fba695fa1c"],["/crypto-mining-game/static/media/motherboard3.ee6915e8.svg","ee6915e8c36397efd778118a63a9da53"],["/crypto-mining-game/static/media/pc.af909f42.svg","af909f42cec566eaba973b7fc753f6fa"],["/crypto-mining-game/static/media/pc2.9ee48a54.svg","9ee48a540dc62b195dea425abea59b47"],["/crypto-mining-game/static/media/pc3.2fff2053.svg","2fff2053de5e6d3b4c3c2b913536b783"],["/crypto-mining-game/static/media/powersupply.a45a802d.svg","a45a802d3b6ce9ad9e74dda6c5155546"],["/crypto-mining-game/static/media/powersupply2.e1e7e88f.svg","e1e7e88fcb0f096e386a8348283ff3b0"],["/crypto-mining-game/static/media/powersupply3.320fd7eb.svg","320fd7eb864add39217150960ec9c9a9"],["/crypto-mining-game/static/media/trollcoin.7d24eeec.svg","7d24eeec5aa4c4ffaa49b9c9bfb9884a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/crypto-mining-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
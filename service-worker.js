"use strict";var precacheConfig=[["/crypto-mining-game/index.html","ea745340b4f2e790e30e61f3482473e2"],["/crypto-mining-game/static/css/main.ca0b4119.css","06c31a67e2dc1faca572d7f4807a80f0"],["/crypto-mining-game/static/js/main.46fd4164.js","e56a412fba17d6a47d6f5f8952eccae7"],["/crypto-mining-game/static/media/cat1.2acf1843.png","2acf1843c726cc12b080a76207091fc2"],["/crypto-mining-game/static/media/cat2.6e376466.png","6e3764666525c2b8e6daea01de9bb6c4"],["/crypto-mining-game/static/media/chinese.3dc1931d.png","3dc1931d30cca1ab754ba54ae6b46097"],["/crypto-mining-game/static/media/clouddata.711c4010.png","711c4010eaf26ddf6ce49ac369494ca5"],["/crypto-mining-game/static/media/computer_screen.60606b56.png","60606b5669f195aff04dc0bcfc0ba74f"],["/crypto-mining-game/static/media/computershoplogo.bd9ceb68.png","bd9ceb682602944681860b0204b6a0c5"],["/crypto-mining-game/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/crypto-mining-game/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/crypto-mining-game/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/crypto-mining-game/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/crypto-mining-game/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/crypto-mining-game/static/media/gpu1fan.e9425bf0.svg","e9425bf012dd64ffba983552b0f965c7"],["/crypto-mining-game/static/media/gpu2fan.e358a4bf.svg","e358a4bf57d362f3cfe7194340d7d9f6"],["/crypto-mining-game/static/media/gpu3fan.fd4cbf9d.svg","fd4cbf9df5d761a119344ece716b8200"],["/crypto-mining-game/static/media/grumpycat.d3831aab.png","d3831aabfec3649c8937d8c9169bb7db"],["/crypto-mining-game/static/media/hamster.dd295374.png","dd2953743ca5af5f4e43c15ddafa1895"],["/crypto-mining-game/static/media/motherboard.3202bfa0.svg","3202bfa03a537dca9ffca87ae4088d48"],["/crypto-mining-game/static/media/motherboard2.726b5669.svg","726b5669f81650b3253720fba695fa1c"],["/crypto-mining-game/static/media/motherboard3.ee6915e8.svg","ee6915e8c36397efd778118a63a9da53"],["/crypto-mining-game/static/media/overclock.a4d5e209.png","a4d5e20909de9460e1853ccc6903f686"],["/crypto-mining-game/static/media/overclock2.2d9035fe.png","2d9035fec3ce70e37cd37960eca57a49"],["/crypto-mining-game/static/media/pc.af909f42.svg","af909f42cec566eaba973b7fc753f6fa"],["/crypto-mining-game/static/media/pc2.9ee48a54.svg","9ee48a540dc62b195dea425abea59b47"],["/crypto-mining-game/static/media/pc3.2fff2053.svg","2fff2053de5e6d3b4c3c2b913536b783"],["/crypto-mining-game/static/media/penguin.9e08b8da.png","9e08b8da60264021a051a483c6a5293b"],["/crypto-mining-game/static/media/power.30e095ba.png","30e095ba1fa16d990bb1ed1a469cc67d"],["/crypto-mining-game/static/media/powersupply.a45a802d.svg","a45a802d3b6ce9ad9e74dda6c5155546"],["/crypto-mining-game/static/media/powersupply2.e1e7e88f.svg","e1e7e88fcb0f096e386a8348283ff3b0"],["/crypto-mining-game/static/media/powersupply3.320fd7eb.svg","320fd7eb864add39217150960ec9c9a9"],["/crypto-mining-game/static/media/russian.fcec89ec.png","fcec89ecbec5e152dc8ecdae73e812d0"],["/crypto-mining-game/static/media/spacerocket.b4652d5b.png","b4652d5b26e3bd41b92c21a4bc5bb5e1"],["/crypto-mining-game/static/media/trollcoin.7d24eeec.svg","7d24eeec5aa4c4ffaa49b9c9bfb9884a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/crypto-mining-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
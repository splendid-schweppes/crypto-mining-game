"use strict";var precacheConfig=[["/crypto-mining-game/index.html","8e8203451184a42b196225bb4a390208"],["/crypto-mining-game/static/css/main.7737bbdb.css","2db727f73330cdace215e49900d240ec"],["/crypto-mining-game/static/js/main.4ef6e141.js","bc3c93a3f957c0f56922a0ea5fa82597"],["/crypto-mining-game/static/media/cat1.2acf1843.png","2acf1843c726cc12b080a76207091fc2"],["/crypto-mining-game/static/media/computer_screen.60606b56.png","60606b5669f195aff04dc0bcfc0ba74f"],["/crypto-mining-game/static/media/computershoplogo.885837f5.png","885837f572f8fbe9e7b9f044e2528e56"],["/crypto-mining-game/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/crypto-mining-game/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/crypto-mining-game/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/crypto-mining-game/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/crypto-mining-game/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/crypto-mining-game/static/media/gpu1fan.9b76600f.svg","9b76600f92b5ccea201c600341dafbb8"],["/crypto-mining-game/static/media/gpu2fan.bbf62423.svg","bbf624234913a9dcc9a89ba2174f19a5"],["/crypto-mining-game/static/media/gpu3fan.d7c6752e.svg","d7c6752e72de76fc9b287afd29b8ed56"],["/crypto-mining-game/static/media/motherboard.3b56f53e.svg","3b56f53e36843617ee6a3c0993d36417"],["/crypto-mining-game/static/media/motherboard2.36cd3105.svg","36cd3105c8fb177a04e9230a89605cda"],["/crypto-mining-game/static/media/motherboard3.41399e6c.svg","41399e6c59638a1adbd2b89c38356967"],["/crypto-mining-game/static/media/pc.8598bc39.svg","8598bc399d5bec87bd4624b7f6e56393"],["/crypto-mining-game/static/media/pc2.a1da7568.svg","a1da75687ce6fc1522019421b572f466"],["/crypto-mining-game/static/media/pc3.2e0632bd.svg","2e0632bdabb2677d4db2bd831c5067c9"],["/crypto-mining-game/static/media/powersupply.fa28f7be.svg","fa28f7be063066c5e4cced05390057ea"],["/crypto-mining-game/static/media/powersupply2.9d559093.svg","9d559093b8319e4f0c82e500e26955e6"],["/crypto-mining-game/static/media/powersupply3.be640fb4.svg","be640fb44244c5649184e27212363825"],["/crypto-mining-game/static/media/trollcoin.5d150bcf.svg","5d150bcf7b54e419659bc740aaa98201"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/crypto-mining-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
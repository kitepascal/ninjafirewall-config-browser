if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return d;default:return e(r)}})).then(e=>{const r=c(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-a5798ee2"],(function(e){"use strict";importScripts("workbox-sw.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"icon_128x128.a1a705e773ed122a8181a98bfb8f2f3c.png",revision:"a1a705e773ed122a8181a98bfb8f2f3c"},{url:"icon_192x192.241942c049a2b89dbda290a014997360.png",revision:"241942c049a2b89dbda290a014997360"},{url:"icon_250x250.acbc6b80265619c55e754d7e0bdbbace.png",revision:"acbc6b80265619c55e754d7e0bdbbace"},{url:"icon_96x96.d95388d4e7388d2189ef18554db4f798.png",revision:"d95388d4e7388d2189ef18554db4f798"},{url:"index.html",revision:"28f7dbc71773c07015942e9b3e5f72e5"},{url:"main.61335237146961f2b8e7.css",revision:"24fd0d140a7aa953defc1c364bb7e4bb"},{url:"main.js",revision:"6f504ca89cdc98c3dd16e61a130d033d"},{url:"manifest.47e85dd935e04a22cf95d521a003e9e1.json",revision:"47e85dd935e04a22cf95d521a003e9e1"},{url:"workbox-sw.js",revision:"a3219bbb2b7f4fc864090a77cd2839e8"}],{})}));

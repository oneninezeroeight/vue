(function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=139)})({139:function(e,n){var t,o={};function r(e){return+e+""===e}function c(e){chrome.tabs.executeScript(e,{file:"/build/proxy.js"},function(n){n?console.log("injected proxy to tab "+e):o[e].devtools.postMessage("proxy-fail")})}function s(e,n,t){function r(n){if("log"===n.event)return console.log("tab "+e,n.payload);console.log("devtools -> backend",n),t.postMessage(n)}function c(t){if("log"===t.event)return console.log("tab "+e,t.payload);console.log("backend -> devtools",t),n.postMessage(t)}function s(){console.log("tab "+e+" disconnected."),n.onMessage.removeListener(r),t.onMessage.removeListener(c),n.disconnect(),t.disconnect(),o[e]=null,a()}n.onMessage.addListener(r),t.onMessage.addListener(c),n.onDisconnect.addListener(s),t.onDisconnect.addListener(s),console.log("tab "+e+" connected."),a()}function a(){chrome.contextMenus.removeAll(()=>{o[t]&&chrome.contextMenus.create({id:"vue-inspect-instance",title:"Inspect Vue component",contexts:["all"]})})}chrome.runtime.onConnect.addListener(e=>{var n,t;r(e.name)?(n=e.name,t="devtools",c(+e.name)):(n=e.sender.tab.id,t="backend"),o[n]||(o[n]={devtools:null,backend:null}),o[n][t]=e,o[n].devtools&&o[n].backend&&s(n,o[n].devtools,o[n].backend)}),chrome.runtime.onMessage.addListener((e,n)=>{if(n.tab&&e.vueDetected){var t=e.nuxtDetected?".nuxt":"";chrome.browserAction.setIcon({tabId:n.tab.id,path:{16:`icons/16${t}.png`,48:`icons/48${t}.png`,128:`icons/128${t}.png`}}),chrome.browserAction.setPopup({tabId:n.tab.id,popup:e.devtoolsEnabled?`popups/enabled${t}.html`:`popups/disabled${t}.html`})}}),chrome.tabs.onActivated.addListener(e=>{var n=e.tabId;t=n,a()}),chrome.contextMenus.onClicked.addListener((e,n)=>{chrome.runtime.sendMessage({vueContextMenu:{id:e.menuItemId}})})}});
# v-show和v-if区别

show是改变display的属性值

if是对节点增删

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

# vue-devtools

https://github.com/vuejs/vue-devtools

- Clone this repo
- npm install (Or yarn install if you are using yarn as the package manager)
- npm run build
- Open Chrome extension page
- Check "developer mode"
- Click "load unpacked extension", and choose shells/chrome.
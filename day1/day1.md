# webpack

npm 第三方模块

- gulp 代码压缩合并重命名
- webpack 模块化，压缩

npm 里面的模块分两种，一种是前端的模块，一种是后端的模块

- jquery 前端
- express 后端

webpack从npm 下载jquery第三方模块，直接在前端引入使用，三大模块的打工仔(第三方，内置和自定义)

```html
<script src="./jquery.js"></scripot>
```

把所有第三方模块绑在一起，然后在浏览器使用，webpack 是一个模块打包器。webpack 的主要目标是将 JavaScript 文件打包在一起,打包后的文件用于在浏览器中使用

# 本地安装

要安装最新版本或特定版本，请运行以下命令之一：

```bash
npm install --save-dev webpack
# 4.0以上需要安装命令行界面
npm install --save-dev webpack-cli
```
一般不建议全局安装，建议本地安装，因为本地安装会去默认寻找本地的node_modules文件夹里面的webpack命令，这样可以保证不同项目有不同webpack版本，而如果在全局就会所有项目都有可能固定在全局版本

# 初始化项目

新建index.html文件和src目录(里面新建一份index.js)

 webpack-demo
  |- package.json
+ |- /dist
    |- index.html
+ |- webpack.config.js
+ |- /src
+   |- index.js

- dist 出口文件夹类似于gulp.dest(xxx)
  - index.html
- src 入口文件夹gulp.src()
  - index.js

webpack里面src是放待处理的JS模块文件，dist被处理之后的JS模块文件，我们当时用gulp的时候跟现在的做法很相似，`gulpfile.js`有一份配置文件，在该文件目录下启动`gulp xxx`

> src ---> webpack ---> dist

```bash
gulp.src('./src/index.js')
.pipe(xx)
.gulp.dest('./dist/index.js)
```

# webpack.config.js

相当于`gulpfile.js`文件，就是webpack的配置文件

- mode 生产development/开发production，开发的时候用未压缩版本，发布用压缩版本
- entry入口配置
- output出口配置

```js
const path = require('path');
// 导出模块，必须这样写，webpack定制的写法，webpack的命令使用
module.exports = {
  mode: 'development', // 可以设置为开发模式或者生产模式 development和production
  entry: './src/index.js', // 配置我需要处理的入口模块
  output: {
    filename: 'bundle.js', // 把入口模块所有的模块，通通打包进bundle.js文件里面
    path: path.resolve(__dirname, 'dist') // 配置打包输出的地方
  }
};
```

现在需要启动webpack执行打包，需要启动`npm start`
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack --config webpack.config.js"
},
```
当打包成功之后，会在dist/bundle.js文件生成一份打包后的文件，现在你需要借助一份`index.html`把打包后的运行浏览器里面，浏览器会运行打包前的那些文件的逻辑，只不过是bundle.js运行
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./bundle.js"></script>
</body>
</html>
```
在以前我们如果要引入jquery等模块需要用script一个一个的引入
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./jquery.js"></script>
    <script src="./bundle.js"></script>
</body>
</html>
```
现在有了webpack，我们应该在入口文件夹里面引入这个模块，不管你是内置模块还是第三方模块，还是自定义模块都可以打包，只是内置模块都用在后端(Node)
```js
var $ = require('jquery')
// var express = require('express')
// var fs = require('fs')
$('body').html('hello world')
console.log('hello world')
```

# 官方文档

- [webpack官方文档](https://www.webpackjs.com/concepts/)

# loader

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）

下面这句话的意思就是匹配所有以.txt为后缀的文件，将这些文件交给raw-loader去处理

需要安装这个模块
```bash
npm install raw-loader --save-dev
```

```js
{
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      // style-loader在前 css-loader在后
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
};
```
有了加载器，我们前端理论可以写各种后缀的文件，而最终通过webpack的加载器把这些文件统统转为JS，给浏览器识别使用

我们在开发中经常会写scss，es6，最后发布的时候用css，es5，以前我们使用的三大模块(内置，三方和自定义)，那些都是泛指JS模块，现在有加载器，一切非JS，都可以称之为，JS加载器可以同化任何文件为JS

> 一切可以是JS，终将用JS写

# typescript

JS的预编译语言，最终还是转化为JS
```bash
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```


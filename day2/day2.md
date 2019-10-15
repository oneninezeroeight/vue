# webpack模块化项目

- [webpack](./webpack)

# webpack插件

插件可以理解为webpack的补丁，增加拓展功能，修复漏洞(一般不会)

把这个代码放入`webpack.config.js`里面：
```js
plugins: [
    // 放入多个插件
    new HtmlWebpackPlugin({ template: './src/index.html' })
]
```
安装你所需要的模块(插件)
```bash
npm install --save-dev html-webpack-plugin
```
你可以使用该插件去生成不一样的前端模板，你也可以指定模板
```js
plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
    // new HtmlWebpackPlugin()
]
```
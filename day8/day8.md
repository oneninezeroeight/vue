# token

令牌

- 输入用户名和密码
- cookie存着一个令牌

http://nodejs.cn/api/crypto.html

crypto加密模块

加密
```js
const info = {
    user: 'yao',
    password: 'jasd123213'
}
const token = Buffer.from(JSON.stringify(info)).toString('base64')
console.log(token)
```
解密
```js
let key = "eyJ1c2VyIjoieWFvIiwicGFzc3dvcmQiOiJqYXNkMTIzMjEzIn0="
const token = Buffer.from(key, 'base64').toString('utf8')
console.log(token)
```
类似方案，我们讲道理再cookie存密码非常不安全，所以你第一次登录把密码发到后端，后端如果校验你的密码是正确，那就会给你的密码处理一次转成一个令牌，你拿到令牌存到cookie，下一次把令牌发到做校验
```bash
12345678
```
(12345678 + '99') / 3 转成8禁止 再 - 1

密码从可读变为难以识别的乱码，token，前端拿着这份token

后端拿着token

(12345678 + 1) 转成10禁止  * 3

token把密码的信息转为后端能识别乱码

令牌就密码的另外一种形态
var info = {
    user: 'yao',
    password: 'jasd123213'
}

const token = Buffer.from(JSON.stringify(info)).toString('base64')
console.log('token',token)

const crypto = require('crypto');

const secret = 'enoyao';
const hash = crypto.createHmac('sha256', secret)
    .update(token)
    .digest('hex');
console.log('hash',hash)
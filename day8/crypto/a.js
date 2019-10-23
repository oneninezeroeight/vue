let key = "eyJ1c2VyIjoieWFvIiwicGFzc3dvcmQiOiJqYXNkMTIzMjEzIn0="

const token = Buffer.from(key, 'base64').toString('utf8')

console.log(token)
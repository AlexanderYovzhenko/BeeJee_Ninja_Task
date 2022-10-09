const jwt = require('jsonwebtoken')

const privateKey = 'secretKey'


const verifyToken = async (authorization) => {
  const token = authorization.split(' ')[1]

  return jwt.verify(token, privateKey, function(err, decoded) {
    if (err) {
      return false
    }
    return true
  })
}

module.exports = verifyToken

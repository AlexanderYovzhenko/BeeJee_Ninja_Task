const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

const login = 'admin'
const password = '123'

const privateKey = 'secretKey'

router.post('/login', async(req, res) => {
  if (req.body.login === login && req.body.password === password) {
    const token = jwt.sign(
      { login: login },
      privateKey,
      { expiresIn: '1h' }
    )
    res.header("Access-Control-Allow-Origin", "*")
    res.status(200).send(token)
  } else {
    res.header("Access-Control-Allow-Origin", "*")
    res.status(401).send("login or password is invalid")
  }
})

module.exports = router

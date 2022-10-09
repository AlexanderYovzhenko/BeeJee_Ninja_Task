const express = require('express')

const verifyToken = require('./login/verifyToken')
const { getTasks, addTask, putTask } = require('./repository')

const router = express.Router()

router.get('/', (_ , res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.status(200).send('Home page!')
})

router.get('/tasks', async(_, res) => {
  const tasks = await getTasks()
  res.header("Access-Control-Allow-Origin", "*")
  res.status(200).send(tasks)
})

router.post('/tasks', async(req, res) => {
  const task = await addTask(req.body)
  res.header("Access-Control-Allow-Origin", "*")
  res.status(201).send(task)
})

router.put('/tasks', async(req, res) => {
  const authorization = req.headers.authorization

  if (await verifyToken(authorization)) {
    const { id } = req.query
    await putTask(id, req.body)
    res.header("Access-Control-Allow-Origin", "*")
    res.status(201).send({ id, ...req.body })
  } else {
    res.status(403).send('not authorization')
  }
})

router.get('/*', (_, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.status(404).send('Page not found!')
})

module.exports = router

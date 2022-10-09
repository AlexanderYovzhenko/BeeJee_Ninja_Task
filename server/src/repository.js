const { getRepository } = require('typeorm')
const Task = require('./model')

const getTasks = async() => {
  const tasks = await getRepository(Task).find()
  return tasks
}

const addTask = async(newTask) => {
  const task = await getRepository(Task).save(newTask)
  return task
}

const putTask = async(id, updateTask) => {
  const task = await getRepository(Task).update(id, updateTask)
  return task
}

module.exports = {
  getTasks,
  addTask,
  putTask
}

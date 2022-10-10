const server = require('./app')
const { createConnection } = require('typeorm')
const config = require('./ormconfig')

const PORT = 3000


const startServer = async () => {
  try {
    await createConnection(config)
    server.listen(process.env.PORT || PORT, '0.0.0.0', () =>
      console.info(`Server is running on port ${PORT}`)
    );
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
};

startServer()

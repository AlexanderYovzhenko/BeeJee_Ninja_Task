const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  dropSchema: false,
  logging: true,
  synchronize: false,
  entities: ['src/model.js'],
  migrationsRun: true,
  migrations: ['src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
}

module.exports = config

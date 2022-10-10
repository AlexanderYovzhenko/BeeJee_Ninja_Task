const config = {
  type: 'postgres',
  url: 'postgres://hdfolegpqredna:df49e88726d7dc062ac506af009ff14908ffbabc96f5d1884869d8e138bab00e@ec2-34-247-72-29.eu-west-1.compute.amazonaws.com:5432/d17too5mdv73e3',
  host: 'ec2-34-247-72-29.eu-west-1.compute.amazonaws.com',
  port: 5432,
  username: 'hdfolegpqredna',
  password: 'df49e88726d7dc062ac506af009ff14908ffbabc96f5d1884869d8e138bab00e',
  database: 'd17too5mdv73e3',
  logging: true,
  synchronize: true,
  entities: ['src/model.js'],
  ssl: {
    rejectUnauthorized: false,
  }
}


module.exports = config

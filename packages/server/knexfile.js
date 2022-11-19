const path = require('path');
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    pool: { min: 0, max: 7 },
    seeds: {
      directory: path.join(__dirname, '/seeds/development'),
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    pool: { min: 0, max: 7 },
    seeds: {
      directory: path.join(__dirname, '/seeds/production'),
    },
  },
};

import { join } from 'path';

export const development = {
  client: 'sqlite3',
  connection: {
    filename: './data/dev.db3',
  },
  useNullAsDefault: true,
  seeds: {
    directory: join(__dirname, '/seeds/development'),
  },
};
export const production = {
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
    directory: join(__dirname, '/seeds/production'),
  },
};

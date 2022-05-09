#!/usr/bin/env node

const JSON = require('flatted');
require('dotenv').config({ path: '../../../.env' });
const dbOptions = require('../knexfile').development;

const config = {
  knex: { ...dbOptions, client: 'mysql' },
  dbManager: {
    // db manager related configuration
    collate: ['fi_FI.UTF-8', 'Finnish_Finland.1252'],
    superUser: 'privilegedUser',
    superPassword:
      'bepREzJzekZ7FiAzER36sFnWsYfLfX3YGtHcEgQsz42obrWTHN2i8jFah3mayWqf',
    populatePathPattern: 'data/**/*.js', // glob format for searching seeds
  },
};

const dbManager = require('knex-db-manager').databaseManagerFactory(config);

(async function () {
  if (process.env.NODE_ENV !== 'development') {
    // eslint-disable-next-line no-console
    console.log('Can only clean DB on development.');
    return;
  }
  await dbManager.createDbOwnerIfNotExist();
  const drop = await dbManager.dropDb('final_project_database');
  console.log({ drop });
  // await dbManager.createDb(process.env.MYSQL_DATABASE);
})();

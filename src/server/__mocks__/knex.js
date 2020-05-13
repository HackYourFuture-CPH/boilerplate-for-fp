// const knex = require('jest-mock-knex');

// // export { client } from 'jest-mock-knex';

// module.exports = knex;

// process.setMaxListeners(0);

module.exports = () => ({
  select: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  first: jest.fn().mockReturnThis(),
  raw: jest.fn().mockReturnThis(),
  then: jest.fn(function(done) {
    done(null);
  }),
});

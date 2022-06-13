web: yarn workspace server start
release: yarn knex migrate:rollback --all && yarn knex migrate:latest && yarn knex seed:run
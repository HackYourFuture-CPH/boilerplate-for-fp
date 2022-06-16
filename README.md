# HYF Final project boilerplate

## Setup instructions

You can either choose to install the project using a Docker container that comes prepared with the project or you can install your database manually:

### With Docker

1. Install Docker from docker.com .
2. Clone this repository and cd into the `/packages/server` folder.
3. Copy and rename the `.env.example` file so it is calle `.env`: `cp .env.example .env`.
4. (Optional) update the credentials in the newly created `.env`. If you skip this step everything should work, but your database will have a generic name and user.
5. Run this command to build a database with Docker: `docker compose up -d`. The database will be built based on the values in `.env`.
6. Run `yarn db:setup` to run example migrations and seeds.
7. Run `yarn dev` to start the server in development mode.
8. Navigate to http://localhost:5000/api/exampleResources to verify that the API works and you can read data from the database.

### Or without Docker

1. Install Mysql manually and set up a database dedicated to the project.
2. Clone this repository and cd into the `/packages/server` folder.
3. Copy and rename the `.env.example` file so it is calle `.env`: `cp .env.example .env`.
4. Update the credentials in the newly created `.env` and make sure everything matches with the credentials for the database you set up in step (1).
5. Run `yarn db:setup` to run example migrations and seeds.
6. Run `yarn dev` to start the server in development mode.
7. Navigate to http://localhost:5000/api/exampleResources to verify that the API works and you can read data from the database.

## Yarn commands

NPM commands are replaced with Yarn which provides a faster experience and better organisation of dependencies. Avoid running any `npm` commands. Below are the most frequently used commands with `yarn`.

The project is organised as a mono-repository, meaning there is a single project containing a root and two projects (client and server). Remember to keep in mind where you are when running these commands.

| Command                                | Description                                                                                             | Scope                | Example                       |     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- | ----------------------------- | --- |
| `yarn workspaces [command]`            | Run a given command in all workspaces.                                                                  | root                 | `yarn workspaces start`       |     |
| `yarn workspace [workspace] [command]` | Run a given command in a dedicated workspace.                                                           | root                 | `yarn workspace client start` |     |
| `yarn` or `yarn install`               | Equivalent to `npm install`                                                                             | all                  |                               |     |
| `yarn add [package]`                   | Equivalent to `npm install [package]`                                                                   | all                  |                               |     |
| `yarn validate`                        | Will check if prettier and eslint have been applied correctly to all workspaces.                        | root                 |                               |     |
| `yarn format`                          | Will run Prettier with the write flag. Only works in the root scope.                                    | root                 |                               |     |
| `yarn format:check`                    | Will run Prettier non-destructively and verify if changes have been applied correctly.                  |                      |                               |     |
| `yarn lint`                            | Will run Eslint. Can be run in all scopes.                                                              | root, client, server |                               |     |
| `yarn knex`                            | Allows you to run knex commands. Can be run from root or server, but will always operate on the server. | root, server         |                               |     |
| `yarn storybook`                       | Runs storybook.                                                                                         | client               |                               |     |
| `yarn start`                           | Will start either the client or the server.                                                             | client, server       |                               |     |
| `yarn build`                           | Will build a production ready React project.                                                            | client               |                               |     |
| `yarn storybook-build`                 | Will build a production ready Storybook project.                                                        | client               |                               |     |
|                                        |                                                                                                         |                      |                               |     |

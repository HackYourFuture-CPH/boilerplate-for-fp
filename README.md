# HYF Final project boilerplate

## Setup instructions

1. Clone this repository and cd into the `/packages/server` folder.
2. Copy and rename the `.env.example` file so it is called `.env`: `cp .env.example .env`.
3. Run `yarn db:setup` to run example migrations and seeds.
4. Run `yarn dev` to start the server in development mode.
5. Navigate to http://localhost:5001/api/exampleResources to verify that the API works and you can read data from the database.

## Yarn commands

The project is organised as a mono-repository, meaning there is a single project containing a root and two projects (client and server). Check the folder your terminal currently runs in before running these commands.
We use `yarn` instead of `npm` which has best support for the mono-repository setup as of this writing. Avoid running any `npm` commands. Below are some useful commands for `yarn`.

| Command                                | Description                                                                              | Scope          | Example                       |     |
| -------------------------------------- | ---------------------------------------------------------------------------------------- | -------------- | ----------------------------- | --- |
| `yarn workspaces [command]`            | Run a given command in all workspaces.                                                   | root           | `yarn workspaces start`       |     |
| `yarn workspace [workspace] [command]` | Run a given command in a dedicated workspace.                                            | root           | `yarn workspace client start` |     |
| `yarn` or `yarn install`               | Equivalent to `npm install`                                                              | all            |                               |     |
| `yarn add [package]`                   | Equivalent to `npm install [package]`                                                    | all            |                               |     |
| `yarn prettier:check`                  | Will run Prettier non-destructively and verify if formatting has been applied correctly. |                |                               |     |
| `yarn stylelint:check`                 | Will run Stylelint and verify if styles has been written consistenly.                    |                |                               |     |
| `yarn storybook`                       | Runs storybook.                                                                          | client         |                               |     |
| `yarn storybook-build`                 | Will build a production ready Storybook project.                                         | client         |                               |     |
| `yarn dev`                             | Will start either the client or the server for development.                              | client, server |                               |     |
| `yarn start`                           | Will start either the client or the server.                                              | client, server |                               |     |
| `yarn build`                           | Will build a production ready client or server.                                          | client, server |                               |     |
|                                        |                                                                                          |                |                               |     |

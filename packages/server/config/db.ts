import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
import { development as dbOptions } from '../knexfile';

// create connection
export const knex = require('knex')(dbOptions);

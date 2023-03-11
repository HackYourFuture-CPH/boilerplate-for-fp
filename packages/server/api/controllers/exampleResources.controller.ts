/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

import { knex } from '../../config/db';
import { HttpError } from '../lib/utils/http-error';
import moment from 'moment-timezone';

export const getExampleResources = async () => {
  return knex('exampleResources').select(
    'exampleResources.id',
    'exampleResources.title',
  );
};

export const getExampleResourceById = async (id) => {
  if (!id || isNaN(id)) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const exampleResources = await knex('exampleResources')
      .select('exampleResources.id as id', 'title')
      .where({ id });
    if (exampleResources.length === 0) {
      throw new HttpError(`incorrect entry with the id of ${id}`, 404);
    }
    return exampleResources;
  } catch (error) {
    return error.message;
  }
};

export const editExampleResource = async (
  exampleResourceId,
  updatedExampleResource,
) => {
  if (!exampleResourceId) {
    throw new HttpError('exampleResourceId should be a number', 400);
  }

  return knex('exampleResources').where({ id: exampleResourceId }).update({
    title: updatedExampleResource.title,
    updatedAt: moment().format(),
  });
};

export const deleteExampleResource = async (exampleResourceId) => {
  return knex('exampleResources').where({ id: exampleResourceId }).del();
};

export const createExampleResource = async (body) => {
  await knex('exampleResources').insert({
    title: body.title,
  });

  return {
    successful: true,
  };
};

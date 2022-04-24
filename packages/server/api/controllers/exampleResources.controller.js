/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getExampleResources = async () => {
  return knex('exampleResources').select('modules.id', 'modules.title');
};

const getExampleResourceById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const exampleResources = await knex('exampleResources')
      .select('exampleResources.id as id', 'title')
      .where({ id });
    if (exampleResources.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return exampleResources;
  } catch (error) {
    return error.message;
  }
};

const editExampleResource = async (exampleResourceId, updatedModule) => {
  if (!exampleResourceId) {
    throw new HttpError('exampleResourceId should be a number', 400);
  }

  return knex('exampleResources')
    .where({ id: exampleResourceId })
    .update({
      title: updatedModule.title,
      startDate: moment(updatedModule.startDate).format(),
      endDate: moment(updatedModule.endDate).format(),
      classId: updatedModule.classId,
      updatedAt: moment().format(),
    });
};

const deleteExampleResource = async (exampleResourceId) => {
  return knex('exampleResources').where({ id: exampleResourceId }).del();
};

const createExampleResource = async (body) => {
  await knex('exampleResources').insert({
    title: body.title,
    startDate: moment(body.startDate).format(),
    endDate: moment(body.endDate).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getExampleResources,
  getExampleResourceById,
  deleteExampleResource,
  createExampleResource,
  editExampleResource,
};

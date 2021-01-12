/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getModules = async () => {
  return knex('modules').select('modules.id', 'modules.title');
};

const getModuleById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const modules = await knex('modules')
      .select('modules.id as id', 'title')
      .where({ id });
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

const editModule = async (moduleId, updatedModule) => {
  if (!moduleId) {
    throw new HttpError('moduleId should be a number', 400);
  }

  return knex('modules')
    .where({ id: moduleId })
    .update({
      title: updatedModule.title,
      startDate: moment(updatedModule.startDate).format(),
      endDate: moment(updatedModule.endDate).format(),
      classId: updatedModule.classId,
      updatedAt: moment().format(),
    });
};

const deleteModule = async (modulesId) => {
  return knex('modules').where({ id: modulesId }).del();
};

const createModule = async (body) => {
  await knex('modules').insert({
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
  getModules,
  getModuleById,
  deleteModule,
  createModule,
  editModule,
};

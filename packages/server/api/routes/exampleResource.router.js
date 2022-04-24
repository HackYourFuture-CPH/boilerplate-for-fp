/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const exampleResourceController = require('../controllers/exampleResource.controller');

/**
 * @swagger
 * /exampleResource:
 *  get:
 *    tags:
 *    - exampleResource
 *    summary: Get all exampleResource
 *    description:
 *      Will return all exampleResource.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  exampleResourceController
    .getModules()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules/{ID}:
 *  get:
 *    tags:
 *    - Modules
 *    summary: Get module by ID
 *    description:
 *      Will return single module with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  exampleResourceController
    .getModuleById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules:
 *  post:
 *    tags:
 *    - Modules
 *    summary: Create a module
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: module
 *        description: The module to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - startDate
 *            - endDate
 *             - classId
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
 *    responses:
 *      201:
 *        description: Module created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  exampleResourceController
    .createModule(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /modules/{ID}:
 *  patch:
 *    tags:
 *    - Modules
 *    summary: Create a module
 *    description:
 *      Will create a module.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the module to patch.
 *      - in: body
 *        name: module
 *        description: The module to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            startDate:
 *              type: string
 *              format: date-time
 *            endDate:
 *              type: string
 *              format: date-time
 *            classId:
 *              type: string
 *    responses:
 *      200:
 *        description: Module was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  exampleResourceController
    .editModule(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules/{ID}:
 *  delete:
 *    tags:
 *    - Modules
 *    summary: Delete a module
 *    description:
 *      Will delete a module with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the module to delete.
 *    responses:
 *      200:
 *        description: Module deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  exampleResourceController
    .deleteModule(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the module id does not exist
      if (result === 0) {
        res.status(404).send('The module ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;

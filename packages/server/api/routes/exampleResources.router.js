/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const exampleResourcesController = require('../controllers/exampleResources.controller');

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
  exampleResourcesController
    .getExampleResources()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /exampleResources/{ID}:
 *  get:
 *    tags:
 *    - ExampleResources
 *    summary: Get exampleResource by ID
 *    description:
 *      Will return single exampleResource with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the exampleResource to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  exampleResourcesController
    .getExampleResourceById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /exampleResources:
 *  post:
 *    tags:
 *    - exampleResources
 *    summary: Create a exampleResource
 *    description:
 *      Will create a exampleResource.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: exampleResource
 *        description: The exampleResource to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: ExampleResources created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  exampleResourcesController
    .createExampleResource(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /exampleResources/{ID}:
 *  patch:
 *    tags:
 *    - exampleResources
 *    summary: Create an exampleResource
 *    description:
 *      Will create an exampleResource.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the exampleResource to patch.
 *      - in: body
 *        name: exampleResource
 *        description: The exampleResource to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      200:
 *        description: ExampleResource was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  exampleResourcesController
    .editExampleResource(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /exampleResources/{ID}:
 *  delete:
 *    tags:
 *    - exampleResources
 *    summary: Delete an exampleResource
 *    description:
 *      Will delete a exampleResource with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the exampleResource to delete.
 *    responses:
 *      200:
 *        description: exampleResource deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  exampleResourcesController
    .deleteExampleResource(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the exampleResource id does not exist
      if (result === 0) {
        res
          .status(404)
          .send('The exampleResource ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
});

module.exports = router;

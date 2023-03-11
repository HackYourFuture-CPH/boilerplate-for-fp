/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */
import express from 'express';
import * as exampleResourcesController from '../controllers/exampleResources.controller';
const router = express.Router({ mergeParams: true });

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
router.get('/', async (req, res, next) => {
  try {
    const result = await exampleResourcesController.getExampleResources();
    return res.json(result);
  } catch (error) {
    next(error);
  }
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
router.get('/:id', async (req, res, next) => {
  try {
    const result = await exampleResourcesController.getExampleResourceById(
      req.params.id,
    );
    return res.json(result);
  } catch (error) {
    next(error);
  }
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
router.post('/', async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).send('Bad request').end();
    }

    const result = await exampleResourcesController.createExampleResource(
      req.body,
    );
    return res.json(result);
  } catch (error) {
    next(error);
  }
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
router.patch('/:id', async (req, res, next) => {
  try {
    const result = await exampleResourcesController.editExampleResource(
      req.params.id,
      req.body,
    );
    return res.json(result);
  } catch (error) {
    next(error);
  }
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
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await exampleResourcesController.deleteExampleResource(
      req.params.id,
    );
    // If result is equal to 0, then that means the exampleResource id does not exist
    if (result === 0) {
      return res
        .status(404)
        .send('The exampleResource ID you provided does not exist.');
    }
    return res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

export const exampleResources = router;

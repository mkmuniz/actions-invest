import express from 'express';
import * as controller from './controller';

export const startupRouter = express();


startupRouter
    .get('/', controller.getAllStartups)
    .get('/:id', controller.getOneStartup)
    .post('/', controller.insertOneStartup)
    .patch('/:id', controller.updateOneStartup)
    .delete('/:id', controller.deleteOneStartup);
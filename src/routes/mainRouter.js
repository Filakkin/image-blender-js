
import { Router } from "express";

import { apiRouter } from './api/apiRouter.js';

const mainRouter = new Router();

mainRouter.use('/', apiRouter);
mainRouter.all('*', (req, res) => {
    res.status(404).send('Not found');
});

export { mainRouter };
import { Router } from "express";

import api from '../../api/index.js';
import { imageRouter } from './image.js';


const apiRouter = new Router();

apiRouter.get('/list', api.list);
apiRouter.use('/image', imageRouter);
apiRouter.get('/merge', api.merge);
apiRouter.post('/upload', api.upload);


export { apiRouter };
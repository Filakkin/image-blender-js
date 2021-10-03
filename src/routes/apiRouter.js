import { Router } from "express";

import api from '../api/index.js';


const apiRouter = new Router();

apiRouter.get('/list', api.list);
apiRouter.get('/image/:id', api.getImage);
apiRouter.get('/merge', api.merge);
apiRouter.post('/upload', api.upload);
apiRouter.delete('/image/:id', api.deleteImage);


export { apiRouter };
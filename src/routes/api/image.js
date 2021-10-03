import { Router } from "express";

import api from '../../api/index.js';


const imageRouter = new Router();

imageRouter.get('/:id', api.getImage);
imageRouter.delete('/:id', api.deleteImage);

export { imageRouter }
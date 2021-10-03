
import { Router } from "express";


const mainRouter = new Router();

mainRouter.all('*', (req, res) => {
    res.status(404).send('Not found');
});

export { mainRouter };
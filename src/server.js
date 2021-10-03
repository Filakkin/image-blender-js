import express from 'express';

import { PORT } from './config/index.js';
import { apiRouter } from './routes/apiRouter.js';
import { mainRouter } from './routes/mainRouter.js';


const app = express();

app.use(apiRouter);
app.use(mainRouter);

app.listen(PORT, () => {
    console.log(process.argv);
    console.log(`Listening for req at http://localhost:${PORT}`);
});
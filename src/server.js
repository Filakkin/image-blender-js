import express from 'express';

import { DEFAULT_PORT } from './config/index.js';
import { mainRouter } from './routes/mainRouter.js';


const app = express();
const port = parseInt(process.argv[2], 10) || DEFAULT_PORT;

app.use(mainRouter);
app.listen(port, () => {
    console.log(`Listening for req at http://localhost:${port}`);
});
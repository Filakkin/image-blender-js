import express from 'express';
import api from './api/index.js';
import { PORT } from './config/index.js';

const app = express();

app.get('/list', api.list);
app.get('/image/:id', api.getImage);
app.get('/merge', api.merge);
app.post('/upload', api.upload);
app.delete('/image/:id', api.deleteImage);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(process.argv);
    console.log(`Listening for req at http://localhost:${PORT}`);
});
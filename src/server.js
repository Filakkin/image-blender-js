import express from 'express';
import { apiUpload } from './api/upload.js';

const app = express();
const port = 8080;

app.get('/list', (req, res) => {
    res.json(
        [
            {
                id: 'random-id',
                size: 123412,
                uploadedAt: 1576767673
            },
            {
                id: 'another-random-id',
                size: 253265,
                uploadedAt: 15248125812
            }
        ]
    );
});

app.get('/image/:id', (req, res) => {
    res.json(
        {
            text: `Started download of image with id ${req.params.id}`
        }
    );
});

app.get('/merge', (req, res) => {
    res.json(req.query);
});

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/upload', apiUpload);

app.delete('/image/:id', (req, res) => {
    res.send(`deleted ${req.params.id}`);
});

app.listen(port, () => {
    console.log(process.argv);
    console.log(`Listening for req at http://localhost:${port}`);
});
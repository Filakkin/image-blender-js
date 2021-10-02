import { replaceBackground } from 'backrem';
import { createReadStream } from 'fs';

import imageService from '../service/imageService.js';

const merge = (req, res) => {
    const frontImagePath = imageService.getImagePath(req.query.front);
    const backImagePath = imageService.getImagePath(req.query.back);

    const color = req.query.color.split(',').map((value) => parseInt(value, 10))
    const threshold = parseInt(req.query.threshold, 10);

    res.type('jpeg')

    console.log(`front image: ${frontImagePath} back image: ${backImagePath}`)
    replaceBackground(createReadStream(frontImagePath), createReadStream(backImagePath), color, threshold)
    .then((readStrem) => readStrem.pipe(res));
}


export { merge };
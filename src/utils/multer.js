import { existsSync, mkdirSync } from 'fs';
import multer, { diskStorage } from 'multer';

import { IMAGE_DIR } from '../config/index.js';
import { generateName } from '../utils/generators.js';


const storage = diskStorage({
    destination: (res, req, cb) => {
        if (existsSync(IMAGE_DIR) === false) {
            mkdirSync(IMAGE_DIR, { recursive: true });
        }
        cb(null, IMAGE_DIR);
    },
    filename: (res, req, cb) => {
        cb(null, `${generateName()}.jpg`);
    }
});

const upload = multer({ storage: storage });


export { upload };
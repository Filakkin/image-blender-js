import { existsSync, mkdirSync, statSync } from 'fs';
import multer, { diskStorage } from 'multer';

import { IMAGE_DIR } from '../config/index.js';
import { Image } from '../model/Image.js' ;
import imageService from '../service/imageService.js';
import { generateId, generateName } from '../utils/generators.js';

const storage = diskStorage({
    destination: (res, req, cb) => {
        if (existsSync(IMAGE_DIR) === false) {
            mkdirSync(IMAGE_DIR, { recursive: true });
        }
        cb(null, IMAGE_DIR);
    },
    filename: (res, req, cb) => {
        console.log("Запись файла")
        cb(null, `${generateName()}.jpg`);
    }
});
const upload = multer({ storage: storage });

const apiUpload = (req, res) => {
    //todo add exception handling
    upload.single('image')(req, res, err => {
        console.log(err);
        let path = req.file.path;
        let stat = statSync(path);
        const id = generateId();
        
        imageService.save(new Image(id, stat.birthtimeMs, stat.size, path));

        res.json({ id })
    });
}

export { apiUpload };

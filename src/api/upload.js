import { statSync } from 'fs';

import { Image } from '../model/Image.js';
import imageService from '../service/imageService.js';
import { generateId } from '../utils/generators.js';
import { upload } from '../utils/multer.js';


const apiUpload = (req, res) => {
    upload.single('image')(req, res, err => {
        if (err) {
            console.log(err);
            res.stat(500).send("Ошибка при записи файла в файловую систему");
        } else {
            let id = saveUploadedImageInfo(req.file.path);
            res.json({ id })
        }
    });
}

const saveUploadedImageInfo = (path) => {
    let stat = statSync(path);
    const id = generateId();
    imageService.save(new Image(id, stat.birthtimeMs, stat.size, path));

    return id;
}


export { apiUpload };
import { existsSync, mkdirSync, statSync } from 'fs';
import multer, { diskStorage } from 'multer';
import { nanoid } from 'nanoid';
import { IMAGE_DIR } from '../config/index.js';
import imageService from '../service/imageService.js';
import { Image } from '../model/Image.js' ;

const storage = diskStorage({
    destination: (res, req, cb) => {
        if (existsSync(IMAGE_DIR) === false) {
            mkdirSync(IMAGE_DIR, { recursive: true });
        }
        cb(null, IMAGE_DIR);
    },
    filename: (res, req, cb) => {
        cb(null, `${nanoid(10)}.jpg`);
    }
});
const upload = multer({ storage: storage });

const apiUpload = (req, res) => {
    //todo add exception handling
    upload.single('image')(req, res, err => {
        let path = req.file.path;
        let stat = statSync(path);
        const id = nanoid();
        
        imageService.save(new Image(id, stat.birthtimeMs, stat.size, path));

        res.json({ id })
    });
}

export { apiUpload };

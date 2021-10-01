import multer, { diskStorage } from 'multer';
import { nanoid } from 'nanoid';

const storage = diskStorage({
    destination: (res, req, cb) => {
        cb(null, 'images/');
    },
    filename: (res, req, cb) => {
        cb(null, `${nanoid(10)}.jpg`);
    }
});
const upload = multer({ storage: storage });

const apiUpload = (req, res) => {
    //todo add exception handling
    upload.single('image')(req, res, err => {
        console.log(req.file);

        res.send(`uploaded ${req.file.filename} (size: ${req.file.size})`)
    });
}

export { apiUpload };

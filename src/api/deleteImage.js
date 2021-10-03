import imageService from '../service/imageService.js';

const deleteImage = (req, res) => {
    if (imageService.exists(id)) {
        imageService.remove(req.params.id);
        res.end();
    } else {
        res.status(400).send('В запросе указан некорректный идентификатор')
    }

};

export { deleteImage };
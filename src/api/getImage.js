import imageService from '../service/imageService.js';

const getImage = (req, res) => {
    let id = req.params.id;
    if (imageService.exists(id)) {
        res.download(imageService.getImagePath(id));
    } else {
        res.status(400).send('В запросе указан некорректный идентификатор')
    }
};

export { getImage };
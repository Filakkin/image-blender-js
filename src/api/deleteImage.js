import imageService from '../service/imageService.js';

const deleteImage = (req, res) => {
    imageService.remove(req.params.id);
    res.end();
};

export { deleteImage };
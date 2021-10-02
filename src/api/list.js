import imageService from '../service/imageService.js';

const apiList = (req, res) => {
    res.json(imageService.list())
};

export { apiList };
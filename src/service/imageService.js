import fsUtils from '../utils/fs.js';

import imageRepository from "../data/imageRepository.js";
import jpegRepository from "../data/jpegRepository.js";
import { Image } from "../model/Image.js";

const save = (image) => {
    jpegRepository.save(image.metadata);
    imageRepository.save(image.metadata.id, image.path);
}

const exists = (id) => {
    return jpegRepository.find(id) && imageRepository.find(id);
}

const find = (id) => {
    return new Image(jpegRepository.find(id), imageRepository.find(id));
}

const remove = (id) => {
    jpegRepository.remove(id);
    let path = getImagePath(id);
    fsUtils.removeFile(path);
    imageRepository.remove(id);
}

const getImagePath = (id) => {
    return imageRepository.find(id);
}

const list = () => {
    return jpegRepository.listAll();
}

export default { save, find, exists, remove, getImagePath, list };
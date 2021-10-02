import imageRepository from "../data/imageRepository.js";
import jpegRepository from "../data/jpegRepository.js";
import { Image } from "../model/Image.js";

const save = (image) => {
    jpegRepository.save(image.metadata);
    imageRepository.save(image.metadata.id, image.path);
}

const find = (id) => {
    return new Image(jpegRepository.find(id), imageRepository.find(id));
}

const remove = (id) => {
    jpegRepository.remove(id);
    imageRepository.remove(id);
}

const download = (id) => {
    const path = imageRepository.find(id);
}

export default { save, find, remove, download };
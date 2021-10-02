import { ImageMetadata } from './ImageMetadata.js';

class Image {
    metadata = {};
    path = '';

    constructor(id, uploadedAt, size, path) {
        this.metadata = new ImageMetadata(id, uploadedAt, size);
        this.path = path;
    }
}

export { Image };
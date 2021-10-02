class ImageMetadata {
    uploadedAt = 0;
    size = 0;
    id = null;

    constructor(id, uploadedAt, size) {
        this.id = id;
        this.uploadedAt = uploadedAt;
        this.size = size;
    }
}

export { ImageMetadata };
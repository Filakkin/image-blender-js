import db from './storage.js';

const STORAGE = 'images';

const save = (id, path) => {
    db.saveObject(STORAGE, id, path);
}

const find = (id) => {
    return db.getObject(STORAGE, id);
}

const listAll = () => {
    return db.listObjects(STORAGE);
}

const remove = (id) => {
    db.deleteObject(STORAGE, id);
}

try {
    db.addStorage(STORAGE);
} catch (err) {
    console.log(`Хранилище ${STORAGE} уже было добавлено`);
}


export default { save, listAll, remove, find };
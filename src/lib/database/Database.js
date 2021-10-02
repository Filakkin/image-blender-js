import { EventEmitter } from 'events';
import events from './DBEvents.js';

class Database extends EventEmitter {

    data = {};

    initStorage(storage, content) {
        console.log(`Инициализация хранилища ${storage} из файла`)
        this.data[storage] = content;
    }
 
    addStorage(name) {
        if (name in this.data) {
            throw Error(`Хранилище с наименованием ${name} уже существует`);
        }

        this.data[name] = {}
        this.emit(events.CHANGED, name);
    }

    getStorage(name) {
        if (!name in this.data) {
            throw Error(`Хранилища с наименованием ${name} не найдено`);
        }

        return this.data[name];
    }

    saveObject(storage, key, object) {
        if (!storage in this.data) {
            throw Error(`Хранилище с наименованием ${storage} отсутствует`);
        }

        this.data[storage][key] = object;

        this.emit(events.CHANGED, storage);
    }

    deleteObject(storage, key) {
        if (!storage in this.data) {
            throw Error(`Хранилище с наименованием ${storage} отсутствует`);
        }

        delete this.data[storage][key];
        
        this.emit(events.CHANGED, storage);
    }

    getObject(storage, key) {
        if (!storage in this.data) {
            throw Error(`Хранилище с наименованием ${storage} отсутствует`);
        }

        return this.data[storage][key];
    }

    listObjects(storage) {
        if (!storage in this.data) {
            throw Error(`Хранилище с наименованием ${storage} отсутствует`);
        }

        return Object.values(this.data[storage]);
    }
}

export { Database }
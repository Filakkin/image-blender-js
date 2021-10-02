import { Database } from '../lib/database/Database.js';
import { DUMP_DIR } from '../config/index.js';
import dbEvents from '../lib/database/DBEvents.js';
import fsUtils from '../utils/fs.js';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const db = new Database();

const readDump = async (dumpDir) => {
    console.log(`Инициализация storage ${dumpDir}`);

    if (existsSync(dumpDir) === false) {
        console.log(`Директория для файлового хранения данных ${dumpDir} не найдена, будет создана автоматически`);
        mkdirSync(dumpDir, { recursive: true });
    }

    const files = await fsUtils.readDir(dumpDir);
    for (const index in files) {
        const fileName = files[index];
        const filePath = path.resolve(dumpDir, fileName);
        await fsUtils.readFile(filePath).then((content) => {
            try {
                db.initStorage(fileName, JSON.parse(content));
            } catch (err) {
                console.log(`Ошибка при инициализации хранилища из файла ${filePath}`);
            }
        })
    }
}

readDump(DUMP_DIR);
db.on(dbEvents.CHANGED, (storage) => {
    try {
        const storageFilePath = path.resolve(DUMP_DIR, storage);
        fsUtils.writeFile(storageFilePath, JSON.stringify(db.getStorage(storage), null, '\t'));
    } catch (err) {
        console.log(`Ошибка при сохранении данных хранилища '${storage}' в файл ${storageFilePath}`);
    }
})

export default db;
import fs from 'fs/promises';

const writeFile = async (path, content) => {
    await fs.writeFile(path, content, { encoding: 'utf-8'});
}

const removeFile = async (path) => {
    try {
        await fs.unlink(path);
    } catch (err) {
        console.log(`removeFile error: Файл ${path} не найден...`);
    }
}

const exists = async (path) => {
    return await fs.exists(path);
}

const readDir = async (path) => {
    try {
        return await fs.readdir(path);
    } catch (err) {
        console.log(`readDir error: Директория ${path} не найдена...`);
    }
}

const readFile = async (path) => {
    try {
        return await fs.readFile(path, { encoding: 'utf-8' });
    } catch (err) {
        console.log(`readFile error: Файл ${path} не найден...`);
    }
}

export default { writeFile, removeFile, exists, readDir, readFile };
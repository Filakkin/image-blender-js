import { customAlphabet } from 'nanoid';


const generateId = () => {
    return customAlphabet('abcdef0123456789', 32)();
}

const generateName = () => {
    return customAlphabet('abcdefghijklmnopqrstuvwxyz0213456789', 12)();
}

export { generateId, generateName }
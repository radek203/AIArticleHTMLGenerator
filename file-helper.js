import fsPromise from "fs/promises";

export async function readFromFile(file) {
    return await fsPromise.readFile(file, {encoding: 'utf8'});
}

export async function writeToFile(file, content) {
    return await fsPromise.writeFile(file, content, {encoding: 'utf8'});
}
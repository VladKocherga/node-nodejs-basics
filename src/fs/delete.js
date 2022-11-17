import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __fileName = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
   fs.unlink(__fileName, (err) => {
    if (err) {
        throw new Error('FS operation failed');
    }
   })
};

await remove();
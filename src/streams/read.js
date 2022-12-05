import * as path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import * as process from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readStream = fs.createReadStream(__filename);
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString())
    })
};

await read();
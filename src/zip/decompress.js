import { fileURLToPath } from 'url';
import * as zlib from 'zlib';
import * as path from 'path';
import * as fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __readfilename = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const __zipFilename = path.resolve(__dirname, 'files', 'archive.gz');
const decompress = async () => {
    const readStream = fs.createReadStream(__zipFilename);
    const unzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(__readfilename);
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
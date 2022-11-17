import * as fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.resolve(__dirname, "files");
const list = async () => {
  const isFilesCreate = fs.existsSync(__dirname);
  if (!isFilesCreate) {
    throw new Error("FS operation failed");
  } else {
    fs.readdir(__filename, (err, files) => {
      if (err) {
        throw new Error("FS operation failed");
      }
      console.log(files);
    });
  }
};

await list();

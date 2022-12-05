import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const isFileCreate = fs.existsSync(__filename);
  if (!isFileCreate) {
    throw new Error("FS operation failed");
  }
  fs.readFile(__filename, "utf8", (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log(data);
  });
};

await read();
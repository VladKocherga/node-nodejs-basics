import * as fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const create = async () => {
  const path_to_file = path.resolve(__dirname, "files", "fresh.txt");
  const isFileCreate = fs.existsSync(path_to_file);
  if (isFileCreate) {
    throw new Error("FS operation failed");
  } else
    fs.writeFile(path_to_file, "I am fresh and young", (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    });
};

await create();

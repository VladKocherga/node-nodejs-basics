import * as fs from "fs";
import { fileURLToPath } from "url";
import * as path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __fileSource = path.resolve(__dirname, "files", "wrongFilename.txt");
const __fileDistination = path.resolve(__dirname, "files", "properFilename.md");
const rename = async () => {
  const isFileSourceCreate = fs.existsSync(__fileSource);
  const isFileDistinationCreate = fs.existsSync(__fileDistination);
  if (!isFileSourceCreate || isFileDistinationCreate) {
    throw new Error("FS operation failed");
  } else {
    fs.rename(__fileSource, __fileDistination, (err) => {
      if (err) throw new Error(err);
    });
  }
};

await rename();

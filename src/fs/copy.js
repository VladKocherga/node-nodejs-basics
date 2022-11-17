import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const pathSourceCopy = path.resolve(__dirname, "files");
const pathDestinationCopy = path.resolve(__dirname, "files_copy");
const isDirSourceCreate = fs.existsSync(pathSourceCopy);
const isDirDestinationCreate = fs.existsSync(pathDestinationCopy);
if (isDirDestinationCreate || !isDirSourceCreate) {
  throw new Error("FS operation failed");
}
const copy = async () => {
  fs.promises.cp(pathSourceCopy, pathDestinationCopy, {
    recursive: true,
  });
};
copy();

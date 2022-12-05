import * as path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as process from "process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = fs.createWriteStream(__filename);
  process.stdin.on("data", (data) => {
    writeStream.write(data.toString());
    process.exit();
  });
};

await write();

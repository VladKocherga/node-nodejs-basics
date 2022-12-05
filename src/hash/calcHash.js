import * as crypto from "crypto";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.resolve(
  __dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  fs.readFile(__filename, "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    }
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  });
};

await calculateHash();

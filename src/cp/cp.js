import { fileURLToPath } from "url";
import * as path from "path";
import {fork} from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.resolve(__dirname, 'files', 'script.js');
const spawnChildProcess = async (args) => {
    const child = fork(__filename, args, { silent: true });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.stdout.on("data", (data) =>
    console.log("From child stdout:", data.toString())
);
};

spawnChildProcess();
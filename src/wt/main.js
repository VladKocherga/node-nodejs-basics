import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";
import os from "os";

const coreCount = os.cpus().length;
const basicValue = 10;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __worker = path.resolve(__dirname, "worker.js");

const getWorker = async (workerData) => {
  return new Promise((res, rej) => {
    const worker = new Worker(__worker, { workerData });
    worker.on("message", res);
    worker.on("error", rej);
    worker.on("exit", (code) => {
      if (code !== 0) {
        rej(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};
const performCalculations = async () => {
  const promises = [];
  for (let i = 0; i < coreCount; i++) {
    promises.push(getWorker(basicValue + i));
  }
  const result = await Promise.allSettled(promises);
  const res =  result.map(({ value }) => ({
    status: value ? 'resolved' : 'error',
    data: value ? value : null,
  }))
  console.log(res);
};

await performCalculations();

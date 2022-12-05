import * as process from "process";
import { Transform, pipeline } from "stream";

const transform = async () => {
  const stdinText = process.stdin;
  const stdoutText = process.stdout;
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const chunkReverseString = chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("");
      this.push(chunkReverseString + "\n");
      cb();
    },
  });
  pipeline(stdinText, transform, stdoutText, (err) => {
    console.log(err);
  });
};

await transform();

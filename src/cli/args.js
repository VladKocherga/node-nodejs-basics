import { argv } from "process";

const parseArgs = () => {
  const args = argv.slice(2);
  let result = "";
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      result += `${args[i].slice(2)} is ${args[i + 1] ? args[i + 1] : null}, `;
    }
  }
  console.log(result.replace(/, $/, ""));
};

parseArgs();

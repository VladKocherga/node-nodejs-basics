import { env } from "process";

const parseEnv = () => {
  let result = "";
  for (let key in env) {
    if (key.startsWith("RSS_")) {
      result += `${key}=${env[key]}; `;
    }
  }
  console.log(result.replace(/; $/, ""));
};

parseEnv();

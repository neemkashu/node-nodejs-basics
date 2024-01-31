import { argv } from "node:process";

const parseArgs = () => {
  const result = [];

  for (let i = 2; i < argv.length; i += 2) {
    const prop = argv[i];
    const value = argv[i + 1];
    result.push(`${prop} is ${value}`);
  }
  console.log(result.join(", "));
};

parseArgs();

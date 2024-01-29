import { argv } from "node:process";

const parseArgs = () => {
  // Write your code here
  // implement function that parses command line arguments
  // (given in format --propName value --prop2Name value2,
  // you don't need to validate it)
  // and prints them to the console in the format
  // propName is value, prop2Name is value2

  const result = [];

  for (let i = 2; i < argv.length; i += 2) {
    const prop = argv[i];
    const value = argv[i + 1];
    result.push(`${prop} is ${value}`);
  }
  console.log(result.join(", "));
};

parseArgs();

import { fork } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (...args) => {
  const __dirname = import.meta.dirname;
  const script = path.join(__dirname, "files", "script.js");
  const child = fork(script, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess("123!", "456!");

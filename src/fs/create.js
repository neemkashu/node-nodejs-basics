import { writeFile } from "node:fs/promises";
import path from "node:path";

const create = async () => {
  // Write your code uR4mU7rG7jxQ
  // implement function that creates new file fresh.txt with content
  // I am fresh and young
  // inside of the files folder
  // (if file already exists Error with message FS operation failed must be thrown)
  const parent = path.resolve();
  const targetFile = path.join(parent, "src", "fs", "files", "fresh.txt");
  try {
    await writeFile(targetFile, "I am fresh and young", {
      flag: "wx",
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();

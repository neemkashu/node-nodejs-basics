import { writeFile } from "node:fs/promises";

const create = async () => {
  // Write your code uR4mU7rG7jxQ
  // implement function that creates new file fresh.txt with content
  // I am fresh and young
  // inside of the files folder
  // (if file already exists Error with message FS operation failed must be thrown)

  try {
    await writeFile("fresh.txt", "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();

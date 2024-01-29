import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const list = async () => {
  // Write your code here
  // implement function that prints
  // all array of filenames from files folder into console
  // (if files folder doesn't exists
  // Error with message FS operation failed must be thrown)
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const source = path.join(dirname, "files");
  try {
    const files = await fs.readdir(source);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();

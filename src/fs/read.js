import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const read = async () => {
  // Write your code here
  // implement function that prints content
  // of the fileToRead.txt into console
  // (if there's no file fileToRead.txt
  // Error with message FS operation failed must be thrown)

  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const source = path.join(dirname, "files", "fileToRead.txt");
  try {
    const content = await fs.readFile(source, { encoding: "utf-8" });
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();

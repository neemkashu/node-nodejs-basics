import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const remove = async () => {
  // Write your code here
  //  implement function that deletes file fileToRemove.txt
  // (if there's no file fileToRemove.txt Error with message
  // FS operation failed must be thrown)
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const source = path.join(dirname, "files", "fresh.txt");
  try {
    await rm(source);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();

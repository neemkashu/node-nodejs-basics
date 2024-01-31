import fs from "node:fs/promises";
import { getPath } from "../utils/helpers";

const read = async () => {
  const source = getPath(import.meta.url, "files", "fileToRead.txt");
  try {
    const content = await fs.readFile(source, { encoding: "utf-8" });
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();

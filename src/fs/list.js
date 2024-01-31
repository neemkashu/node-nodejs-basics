import fs from "node:fs/promises";
import { getPath } from "../utils/helpers";

const list = async () => {
  const source = getPath(import.meta.url, "files");
  try {
    const files = await fs.readdir(source);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();

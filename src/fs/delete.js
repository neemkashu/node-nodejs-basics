import { rm } from "node:fs/promises";
import { getPath } from "../utils/helpers.js";

const remove = async () => {
  const source = getPath(import.meta.url, "files", "hello.txt");
  try {
    await rm(source);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();

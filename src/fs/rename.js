import fs from "node:fs/promises";
import { getPath } from "../utils/helpers";

const rename = async () => {
  const sourcePath = getPath(import.meta.url, "files", "wrongFilename.txt");
  const targetPath = getPath(import.meta.url, "files", "properFilename.md");
  try {
    await fs.rename(sourcePath, targetPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();

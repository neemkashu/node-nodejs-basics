import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const checkExists = async (targetPath) => {
  try {
    await fs.access(targetPath);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async () => {
  // implement function that renames file wrongFilename.txt
  // to properFilename with extension .md
  // (if there's no file wrongFilename.txt or
  // properFilename.md already exists
  // Error with message FS operation failed must be thrown)

  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const sourcePath = path.join(__dirname, "files", "wrongFilename.txt");
  const targetPath = path.join(__dirname, "files", "properFilename.md");
  try {
    const isAccessible = await checkExists(targetPath);
    if (isAccessible) throw new Error();
    await fs.rename(sourcePath, targetPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();

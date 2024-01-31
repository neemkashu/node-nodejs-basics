import fs from "node:fs/promises";
import path from "node:path";
import { getPath } from "../utils/helpers";

const copy = async () => {
  const sourceDir = getPath(import.meta.url, "files");
  const targetDir = getPath(import.meta.url, "files_copy");

  try {
    await fs.mkdir(targetDir);
    const files = await fs.readdir(sourceDir);

    for await (let file of files) {
      const source = path.join(sourceDir, file);
      const destination = path.join(targetDir, file);

      fs.copyFile(source, destination, fs.constants.COPYFILE_EXCL);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();

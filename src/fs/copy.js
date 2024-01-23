import { cp } from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  // implement function that copies folder files files with all its content
  // into folder files_copy at the same level
  // (if files folder doesn't exists or
  // files_copy has already been created
  // Error with message FS operation failed must be thrown)
  const parent = path.resolve();
  const sourceDir = path.join(parent, "src", "fs", "files");
  const targetDir = path.join(parent, "src", "fs", "files_copy");
  try {
    await cp(sourceDir, targetDir, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();

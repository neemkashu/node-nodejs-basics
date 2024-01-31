import { writeFile } from "node:fs/promises";
import { getPath } from "../utils/helpers";

const create = async () => {
  const targetFile = getPath(import.meta.url, "files", "fresh.txt");
  try {
    await writeFile(targetFile, "I am fresh and young", {
      flag: "wx",
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();

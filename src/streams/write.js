import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { pipeline } from "node:stream/promises";
import { getPath } from "../utils/helpers";

const write = async () => {
  const fileStream = createWriteStream(
    getPath(import.meta.url, "files", "fileToWrite.txt")
  );
  await pipeline(stdin, fileStream);
};

await write();

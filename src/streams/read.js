import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { pipeline } from "node:stream/promises";
import { getPath } from "../utils/helpers";

const read = async () => {
  const fileStream = createReadStream(
    getPath(import.meta.url, "files", "fileToRead.txt")
  );
  await pipeline(fileStream, stdout);
};

await read();

import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import path from "node:path";

const compress = async () => {
  const __dirname = import.meta.dirname;
  const file = path.join(__dirname, "files", "fileToCompress.txt");
  const archive = path.join(__dirname, "files", "archive.gz");

  await pipeline(
    createReadStream(file),
    createGzip(),
    createWriteStream(archive)
  );
};

await compress();

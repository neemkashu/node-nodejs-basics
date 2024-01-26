import { createReadStream } from "node:fs";
import path from "node:path";
import { stdout } from "node:process";
import { pipeline } from "node:stream/promises";

const read = async () => {
  // implement function that reads file fileToRead.txt content
  // using Readable Stream and prints it's content into process.stdout
  const __dirname = import.meta.dirname;
  const fileStream = createReadStream(
    path.join(__dirname, "files", "fileToRead.txt")
  );
  await pipeline(fileStream, stdout);
};

await read();

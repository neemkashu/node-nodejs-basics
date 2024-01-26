import { createWriteStream } from "node:fs";
import path from "node:path";
import { stdin } from "node:process";
import { pipeline } from "node:stream/promises";

const write = async () => {
  // implement function that writes process.stdin data
  // into file fileToWrite.txt content using Writable Stream
  // implement function that reads file fileToRead.txt content
  // using Readable Stream and prints it's content into process.stdout
  const __dirname = import.meta.dirname;
  const fileStream = createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );
  await pipeline(stdin, fileStream);
};

await write();

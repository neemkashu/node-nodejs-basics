import crypto from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";
import { stdout } from "node:process";

const calculateHash = async () => {
  // Write your code here
  // implement function that calculates
  // SHA256 hash for file fileToCalculateHashFor.tx
  //  and logs it into console as hex using Streams API

  const __dirname = import.meta.dirname;
  const hash = crypto.createHash("sha256");
  const input = createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();

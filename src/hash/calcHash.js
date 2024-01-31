import crypto from "node:crypto";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { getPath } from "../utils/helpers";

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const input = createReadStream(
    getPath(import.meta.url, "files", "fileToCalculateHashFor.txt")
  );

  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();

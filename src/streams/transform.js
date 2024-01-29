import path from "node:path";
import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  //  implement function that reads data from process.stdin,
  // reverses text using Transform Stream
  // and then writes it into process.stdout

  const reverse = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  await pipeline(stdin, reverse, stdout);
};

await transform();

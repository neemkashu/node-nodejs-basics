import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  await pipeline(stdin, reverse, stdout);
};

await transform();

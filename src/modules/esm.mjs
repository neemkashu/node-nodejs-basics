import { sep } from "node:path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { createRequire } from "module";
import { getPath } from "../utils/helpers.js";

const random = Math.random();

const require = createRequire(import.meta.url);

let unknownObject;

if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const __filename = import.meta.filename;
const __dirname = getPath(import.meta.url);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};

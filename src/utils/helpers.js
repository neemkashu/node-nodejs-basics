import { fileURLToPath } from "url";
import path from "node:path";

const getPath = (url, ...subpaths) => {
  const dirname = path.dirname(fileURLToPath(url));
  return path.join(dirname, ...subpaths);
};

export { getPath };

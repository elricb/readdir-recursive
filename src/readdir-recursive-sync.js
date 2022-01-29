import path from "path";
import { readdirSync } from "fs";

const readdirRecursiveSync = (directory, callback) => {
  const files = readdirSync(directory, { withFileTypes: true });

  for (let i = 0; i < files.length; i++) {
    callback(path.join(directory, files[i].name), files[i]);
    if (files[i].isDirectory()) {
      readdirRecursiveSync(path.join(directory, files[i].name), callback);
    }
  }
};

export default readdirRecursiveSync;

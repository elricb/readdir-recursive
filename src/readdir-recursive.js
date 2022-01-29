import path from "path";
import {readdir} from "fs";

const readdirRecursive = (directory, callback) =>
  new Promise((resolve, reject) => {
    readdir(directory, {withFileTypes: true}, (error, files) => {
      if (error) {
        reject(error);
      }

      const promises = [];

      for (let i = 0; i < files.length; i++) {
        callback(path.join(directory, files[i].name), files[i]);
        if (files[i].isDirectory()) {
          promises.push(
            readdirRecursive(path.join(directory, files[i].name), callback)
          );
        }
      }

      Promise.all(promises)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  });

export default readdirRecursive;

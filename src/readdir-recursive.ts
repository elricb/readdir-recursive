import path from "path";
import {promises as fs} from "fs";

/**
 * Read directory and all sub-directory contents asynchronously.
 *
 * ```javascript
 * import {readdirRecursive} from "@elricb/readdir-recursive";
 *
 * readdirRecursive(__dirname, function(directory, dirent) {
 *   if (dirent.isFile()) {
 *     console.log(directory);
 *   }
 * })
 *   .then(function() {
 *     console.log("Done.");
 *   })
 *   .catch(function(error) {
 *     console.error(error);
 *   });
 * ```
 */

function readdirRecursive(
  directory: string,
  callback: ReadDirCallback
): Promise<void> {
  return fs.readdir(directory, {withFileTypes: true}).then(files => {
    const promises = [];

    for (let i = 0; i < files.length; i++) {
      callback(path.join(directory, files[i].name), files[i]);
      if (files[i].isDirectory()) {
        promises.push(
          readdirRecursive(path.join(directory, files[i].name), callback)
        );
      }
    }

    return Promise.all(promises).then(() => undefined);
  });
}

export default readdirRecursive;

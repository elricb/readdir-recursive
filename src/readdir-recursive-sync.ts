import path from "path";
import {readdirSync} from "fs";

/**
 * Read directory and all sub-directory contents.
 *
 * ```javascript
 * import {readdirRecursiveSync} from "@elricb/readdir-recursive";
 *
 * readdirRecursiveSync(__dirname, function(directory, dirent) {
 *   if (dirent.isDirectory()) {
 *     console.log(directory);
 *   }
 * });
 *
 * console.log("Done.");
 * ```
 */

function readdirRecursiveSync(
  directory: string,
  callback: ReadDirCallback
): void {
  const files = readdirSync(directory, {withFileTypes: true});

  for (let i = 0; i < files.length; i++) {
    callback(path.join(directory, files[i].name), files[i]);
    if (files[i].isDirectory()) {
      readdirRecursiveSync(path.join(directory, files[i].name), callback);
    }
  }
}

export default readdirRecursiveSync;

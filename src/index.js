import {existsSync} from "fs";
import path from "path";

const findFileUp = function (baseDirectory, file) {
  const trailSep = /[\\/]$/;
  let directory = baseDirectory;

  while (true) {
    if (!existsSync(directory)) {
      directory = false;
      break;
    } else if (existsSync(path.join(directory, file))) {
      directory = path.join(directory, file);
      break;
    } else if ((process.env.HOME || process.env.USERPROFILE) === directory) {
      directory = false;
      break;
    } else if (path.parse(directory).root === directory) {
      directory = false;
      break;
    } else {
      directory = path.normalize(path.join(directory, "..")).replace(trailSep, '');
    }
  }

  return directory;
};

export default findFileUp;

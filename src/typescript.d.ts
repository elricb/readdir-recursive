/**
 * ReadDirCallback
 *
 * @param directory - includes path and filename
 * @param dirent - [node fs.Dirent](https://nodejs.org/api/fs.html#class-fsdirent)
 */
type ReadDirCallback = (directory: string, dirent: Dirent) => void;

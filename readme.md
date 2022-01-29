# @elricb/readdir-recursive

> Built as a wrapper for [node](https://nodejs.org/api) [readdir](https://nodejs.org/api/fs.html) function.

Recursively steps through directory and all sub-directories, returning each item into `callback`.

## Requirements

* [node](https://nodejs.org/en/download/) - recommended lts version >= 12

## Install

```
$ npm install --save @elricb/readdir-recursive
```

## Usage

> Warning: This does not have any max-depth or max-file checking.  If you need protection from large directories use `Asynchronous`, `throw error` inside the `callback`, and processing will halt.

Asynchronous

```jsx
import {readdirRecursive} from "@elricb/readdir-recursive";

readdirRecursive(__dirname, function(directory, dirent) {
  if (dirent.isFile()) {
    console.log(directory);
  }
})
  .then(function() {
    console.log("Done.");
  })
  .catch(function(error) {
    console.error(error);
  });
```

Synchronous

```jsx
import {readdirRecursiveSync} from "@elricb/readdir-recursive";

readdirRecursiveSync(__dirname, function(directory, dirent) {
  if (dirent.isDirectory()) {
    console.log(directory);
  }
});

console.log("Done.");
```

## readdirRecursive Syntax

```
readdirRecursive(baseDirectory, callback);
```

### Function Arguments

#### baseDirectory

Type: `string`

Start recursive steps from this directory.

#### callback

Type: `function`

Callback function for each entry inside directory.  See `callback Syntax` for more information.

### Return Value

Type: `Promise`

Once directory has been completely recursed or halt on first error.


## readdirRecursiveSync Syntax

```
readdirRecursiveSync(baseDirectory, callback);
```

### Function Arguments

#### baseDirectory

Type: `string`

Start recursive steps from this directory.

#### callback

Type: `function`

Callback function for each entry inside directory.  See `callback Syntax` for more information.

### Return Value

Type: `undefined`

No value returned.


## callback Syntax

```
callback(directory, dirent);
```

### Function Arguments

#### directory

Type: `string`

The absolute directory or file path of current item.

#### dirent

Type: `fs.Dirent`

[node fs.Dirent](https://nodejs.org/api/fs.html#class-fsdirent) of current item.

### Return Value

Type: `undefined`

callback doesn't require return value.



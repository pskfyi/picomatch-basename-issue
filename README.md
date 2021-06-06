This repo illustrates an issue with `picomatch`'s `basename`/`matchBase` options.

To test:

```sh
npm i # install dependencies
node ./test.js
```

Results

```txt

Glob Pattern: **/subdir/*.bar
Target 1: subdir/foo.bar
Target 2: dir/subdir/foo.bar

Testing minimatch w/ matchBase = false
  Target 1 matches: true
  Target 2 matches: true

Testing minimatch w/ matchBase = true
  Target 1 matches: true
  Target 2 matches: true

Testing picomatch w/ matchBase = false
  Target 1 matches: true
  Target 2 matches: true

Testing picomatch w/ matchBase = true
  Target 1 matches: false
  Target 2 matches: false

Testing picomatch w/ basename = false
  Target 1 matches: true
  Target 2 matches: true

Testing picomatch w/ basename = true
  Target 1 matches: false
  Target 2 matches: false

```

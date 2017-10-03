# `siginfo`

[![Build Status](https://travis-ci.org/emilbayes/siginfo.svg?branch=master)](https://travis-ci.org/eemilbayes/siginfo)

> Utility module to print pretty messages on SIGINFO/SIGUSR1

`SIGINFO` on BSD / macOS and `SIGUSR1` on Linux, usually triggered by
`Ctrl + T`, are by convention used to print information about
a long running process internal state. Eg. `dd` will tell you how many blocks it
has written and at what speed, while `xz` will tell you progress, compression
ratio and estimated time remaining.

This module wraps both signals, checks if the process is connected to TTY and
writes to `stderr` on each intercepted signal.

## Usage

```js
var siginfo = require('siginfo')
var pkg = require('./package.json')

siginfo(function () {
  return {
    version: pkg.version,
    uptime: process.uptime()
  }
})

```

## API

### `var removeListener = siginfo(queryFn)`

`queryFn` should return a info string or an object.

## Install

```sh
npm install siginfo
```

## License

[ISC](LICENSE)

var siginfo = require('.')
var pkg = require('./package.json')

var stop = siginfo(function () {
  return {
    version: pkg.version,
    uptime: process.uptime()
  }
})

process.stdout.resume()

setTimeout(function () {
  stop()
  process.exit(0)
}, 2000)

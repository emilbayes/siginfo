var util = require('util')

module.exports = function (query) {
  var isAttached = false
  if (process.stderr.isTTY) {
    isAttached = true
    process.on('SIGINFO', onsiginfo)
    process.on('SIGUSR1', onsiginfo)
  }

  return function () {
    if (isAttached === true) {
      process.removeListener('SIGINFO', onsiginfo)
      process.removeListener('SIGUSR1', onsiginfo)
      isAttached = false
    }
  }

  function onsiginfo () {
    var info = query()
    process.stderr.write(typeof info === 'string' ? info : util.inspect(info, {
      colors: true
    }) + '\n')
  }
}

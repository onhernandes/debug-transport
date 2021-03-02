// Remember to use util.format() before logging out strings!
const removeColorsMarkup = text => text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
const getDebug = options => Reflect.has(options, 'debug') ? options.debug : require('debug')

module.exports = options => {
  const debug = getDebug(options)
}

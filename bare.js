require('bare-fetch/global')
require('bare-encoding/global')
const { AbortController } = require('abort-controller')

global.AbortController = AbortController

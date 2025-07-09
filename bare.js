require('bare-fetch/global')
require('bare-encoding/global')

const { AbortController } = require('abort-controller')
const { EventTarget } = require('event-target-shim')

global.AbortController = AbortController
global.EventTarget = EventTarget

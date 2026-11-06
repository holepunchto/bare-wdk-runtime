# bare-wdk-runtime

Compatibility layer for running WDK and its dependencies in Bare.

```
npm i bare-wdk-runtime
```

## Usage

```js
require('bare-wdk-runtime/global')

require('@tetherto/wdk', {
  with: { imports: 'bare-wdk-runtime/imports' }
})
```

## Node.js compatibility target

`bare-wdk-runtime/global` sets `process.versions.node` to the current Node.js LTS release. Bare validates this value against the `engines.node` range of every package it resolves, so packages that require a supported Node.js version load without `UNSUPPORTED_ENGINE`. It does not imply full API parity with that release.

## License

Apache-2.0

```console
$ npm install

$ npm test

> test
> tsc --build && echo '==> ESNext/Bundler' && node esnext-bundler/dist/index.js && echo && echo '==> NodeNext' && node nodenext/dist/index.js

==> ESNext/Bundler
loaded CJS
loaded proxy
loaded ESM types

==> NodeNext
loaded CJS
loaded proxy
loaded proxy types
```

# TypeScript incorrectly loads CJS types in mixed `ESNext/Bundler` and `NodeNext` multi-project build

This repo demonstrates an issue with a dual-package dependency (`dep`) in a multi-project build, where one project (`app`) has `ESNext` module and `Bundler` module resolution, while another (`lib`) has `NodeNext` module and module resolution.

Despite everything being set up to use ESM, somehow TypeScript resolves the CJS types when transitively importing the dual package.


```console
$ npm install

$ npm run build

> build
> tsc --build

app/src/index.ts:4:7 - error TS2322: Type '"CJS"' is not assignable to type '"ESM"'.

4 const test: ModuleType = moduleType;
        ~~~~


Found 1 error.
```

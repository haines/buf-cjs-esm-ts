# TypeScript incorrectly loads CJS types for `@bufbuild/protobuf` with `NodeNext` module resolution

This repo demonstrates an issue with the dual-package setup of `@bufbuild/protobuf`.

There is a shared library, `lib`, which contains generated code to be consumed by the application, `app`.

`app` is compiled with `ESNext` module and `Bundler` module resolution, and TypeScript correctly resolves the types from the ESM directory within `@bufbuild/protobuf`.

`lib` is compiled with `NodeNext` module and module resolution, and TypeScript incorrectly resolves the types from the CJS directory within `@bufbuild/protobuf`.

This leads to type errors when `app` attempts to consume messages from `lib`.

```console
$ npm install

$ npm run build

app/src/index.ts:8:6 - error TS2345: Argument of type 'Pet' is not assignable to parameter of type 'Message<Pet>'.
  Types of property 'fromJson' are incompatible.
    Type '(jsonValue: JsonValue, options?: Partial<JsonReadOptions> | undefined) => Pet' is not assignable to type '(jsonValue: JsonValue, options?: Partial<JsonReadOptions> | undefined) => Message<Pet>'.
      Types of parameters 'options' and 'options' are incompatible.
        Type 'Partial<import("./node_modules/@bufbuild/protobuf/dist/esm/json-format").JsonReadOptions> | undefined' is not assignable to type 'Partial<import("./node_modules/@bufbuild/protobuf/dist/cjs/json-format").JsonReadOptions> | undefined'.
          Type 'Partial<import("./node_modules/@bufbuild/protobuf/dist/esm/json-format").JsonReadOptions>' is not assignable to type 'Partial<import("./node_modules/@bufbuild/protobuf/dist/cjs/json-format").JsonReadOptions>'.
            Types of property 'typeRegistry' are incompatible.
              Type '(import("./node_modules/@bufbuild/protobuf/dist/esm/type-registry").IMessageTypeRegistry & Partial<import("./node_modules/@bufbuild/protobuf/dist/esm/type-registry").IExtensionRegistry>) | undefined' is not assignable to type '(import("./node_modules/@bufbuild/protobuf/dist/cjs/type-registry").IMessageTypeRegistry & Partial<import("./node_modules/@bufbuild/protobuf/dist/cjs/type-registry").IExtensionRegistry>) | undefined'.

8 ohNo(new Pet());
       ~~~~~~~~~


Found 1 error.
```

I think this is due to [this TypeScript issue](https://github.com/microsoft/TypeScript/issues/50466).

You can see in VS Code that within `app/src/index.ts`, "Go to definition" on the `Message` type takes you to `node_modules/@bufbuild/protobuf/dist/esm/message.d.ts`, whereas within `lib/src/pet/v1/pet_pb.ts`, you go to `node_modules/@bufbuild/protobuf/dist/cjs/index.d.ts`.

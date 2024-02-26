import { type TypesLoaded, Message } from "@bufbuild/protobuf";

const typesLoaded: TypesLoaded = "ESM";

new Message();

console.log(`loaded ${typesLoaded} types`)

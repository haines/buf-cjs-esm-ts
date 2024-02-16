import type { Message } from "@bufbuild/protobuf";
import { Pet } from "@ahaines/lib";

function ohNo<T extends Message<T>>(message: T): void {
  console.log(message);
}

ohNo(new Pet());

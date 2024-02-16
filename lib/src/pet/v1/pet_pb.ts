// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file pet/v1/pet.proto (package pet.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DateTime } from "../../google/type/datetime_pb.js";

/**
 * PetType represents the different types of pets in the pet store.
 *
 * @generated from enum pet.v1.PetType
 */
export enum PetType {
  /**
   * @generated from enum value: PET_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PET_TYPE_CAT = 1;
   */
  CAT = 1,

  /**
   * @generated from enum value: PET_TYPE_DOG = 2;
   */
  DOG = 2,

  /**
   * @generated from enum value: PET_TYPE_SNAKE = 3;
   */
  SNAKE = 3,

  /**
   * @generated from enum value: PET_TYPE_HAMSTER = 4;
   */
  HAMSTER = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(PetType)
proto3.util.setEnumType(PetType, "pet.v1.PetType", [
  { no: 0, name: "PET_TYPE_UNSPECIFIED" },
  { no: 1, name: "PET_TYPE_CAT" },
  { no: 2, name: "PET_TYPE_DOG" },
  { no: 3, name: "PET_TYPE_SNAKE" },
  { no: 4, name: "PET_TYPE_HAMSTER" },
]);

/**
 * Pet represents a pet in the pet store.
 *
 * @generated from message pet.v1.Pet
 */
export class Pet extends Message<Pet> {
  /**
   * @generated from field: pet.v1.PetType pet_type = 1;
   */
  petType = PetType.UNSPECIFIED;

  /**
   * @generated from field: string pet_id = 2;
   */
  petId = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: google.type.DateTime created_at = 4;
   */
  createdAt?: DateTime;

  constructor(data?: PartialMessage<Pet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pet.v1.Pet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pet_type", kind: "enum", T: proto3.getEnumType(PetType) },
    { no: 2, name: "pet_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: DateTime },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Pet {
    return new Pet().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Pet {
    return new Pet().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Pet {
    return new Pet().fromJsonString(jsonString, options);
  }

  static equals(
    a: Pet | PlainMessage<Pet> | undefined,
    b: Pet | PlainMessage<Pet> | undefined,
  ): boolean {
    return proto3.util.equals(Pet, a, b);
  }
}

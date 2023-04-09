export type StringifiedNum = `${number}`;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type KeysOfUnion<T> = T extends T ? keyof T : never;

export type ValuesOf<T extends Record<string, unknown>> = T[KeysOfUnion<T>];

// https://bobbyhadz.com/blog/typescript-array-element-type
type ArrayElementType<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;
export type ListFieldRecord<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends unknown[] ? K : never]: T[K];
};
export type KeyOfListField<T extends Record<string, unknown>> = KeysOfUnion<
  ArrayElementType<ValuesOf<ListFieldRecord<T>>>
>;

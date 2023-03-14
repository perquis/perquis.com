interface EnumQueryType {
  __type: Type;
}

interface Type {
  enumValues: EnumValues[];
}

interface EnumValues {
  name: string;
}

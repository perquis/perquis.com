interface TechnologiesQuery {
  __type: Type;
}

interface Type {
  enumValues: EnumValue[];
}

interface EnumValue {
  name: string;
}

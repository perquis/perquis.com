import type { NextApiRequest, NextApiResponse } from 'next';

import { hygraphClient } from '@lib/hygraph';

interface TechnologiesQuery {
  __type: Type;
}

interface Type {
  enumValues: EnumValue[];
}

interface EnumValue {
  name: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    __type: { enumValues },
  } = (await hygraphClient.request(`query {
    __type(name: "Tags") {
      enumValues {
        name
      }
    }
  }
  `)) as unknown as TechnologiesQuery;

  const technologies = enumValues.map(({ name }) => name);

  res.send(technologies);
};

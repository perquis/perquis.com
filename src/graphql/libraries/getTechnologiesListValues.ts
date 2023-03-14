import { gql } from '@apollo/client';

import { client } from '@graphql/apollo/apolloClient';

const query = gql`
  query {
    __type(name: "Tags") {
      enumValues {
        name
      }
    }
  }
`;

export const fetchTechnologiesList = async () => {
  const { data } = await client.query<EnumQueryType>({ query });
  return data.__type.enumValues.map(({ name }) => name);
};

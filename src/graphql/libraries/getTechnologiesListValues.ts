import { client } from '@apollo';
import { gql } from '@apollo/client';

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

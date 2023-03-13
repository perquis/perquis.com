import { gql } from '@apollo/client';

import { getApolloClient as client } from '@graphql/apolloClient';

export interface GetTagsFromTechnologiesListProps {
  __type: {
    enumValues: { name: string }[];
  };
}

export const GetTagsFromTechnologiesList = gql`
  query {
    __type(name: "Tags") {
      enumValues {
        name
      }
    }
  }
`;

export const fetchTechnologiesList = async () => {
  const {
    data: {
      __type: { enumValues },
    },
  } = await client.query<GetTagsFromTechnologiesListProps>({ query: GetTagsFromTechnologiesList });

  return enumValues;
};

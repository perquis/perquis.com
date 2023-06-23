import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.SCHEMA_PATH,
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
    'Content-Type': `application/json`,
  },
});

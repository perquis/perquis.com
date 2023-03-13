import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getApolloClient = new ApolloClient({
  uri: process.env.SCHEMA_PATH,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
    'Content-Type': `application/json`,
  },
});

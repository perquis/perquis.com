import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.SCHEMA_PATH,
  documents: ['src/graphql/schemas/*.graphql'],
  generates: {
    './src/graphql/databases/server.tsx': {
      plugins: ['graphql-codegen-apollo-next-ssr'],
      presetConfig: {
        typesPath: './client',
      },
      config: {
        reactApolloVersion: 3,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './client',
      },
    },
    './src/graphql/databases/client.tsx': {
      plugins: ['@graphql-codegen/typescript', '@graphql-codegen/typescript-operations', '@graphql-codegen/typescript-react-apollo'],
      config: {
        immutableTypes: true,
        useTypeImports: true,
        scalars: {
          Date: 'Date',
          DateTime: 'Date',
          Json: '{ [key: string]: any }',
        },
      },
    },
  },
};

export default config;

import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.SCHEMA_PATH,
  documents: ['src/graphql/*.graphql'],
  generates: {
    './src/graphql/lib/next.tsx': {
      plugins: ['graphql-codegen-apollo-next-ssr'],
      presetConfig: {
        typesPath: './graphql',
      },
      config: {
        reactApolloVersion: 3,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './graphql',
        apolloClientInstanceImport: '../apolloClient',
      },
    },
    './src/graphql/lib/index.tsx': {
      plugins: ['@graphql-codegen/typescript', '@graphql-codegen/typescript-operations', '@graphql-codegen/typescript-react-apollo'],
      config: {
        immutableTypes: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;

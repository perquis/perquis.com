declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST?: string;
      EMAIL?: string;
      GITHUB_ID?: string;
      SCHEMA_PATH?: string;
      NEXTAUTH_URL?: string;
      GITHUB_SECRET?: string;
      NEXTAUTH_SECRET?: string;
      PERMANENT_AUTH_TOKEN?: string;
    }
  }
}

export {};

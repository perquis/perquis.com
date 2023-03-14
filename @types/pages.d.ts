import type { Articles, PageInfo } from '@graphql/databases/client';

interface IHomePageProps {
  technologies: string[];
  articles: {
    edges: Articles[];
    pageInfo: PageInfo;
  };
}

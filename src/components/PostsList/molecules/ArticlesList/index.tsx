import { Article } from '@components/Article';

import { useArticlesStore } from '@stories/articles';

import { isNotFourteenDaysAgo } from '@utils/isNotFourteenDaysAgo';

export const ArticlesList = () => {
  const [articles] = useArticlesStore((state) => [state.articles]);

  return (
    <>
      {articles.map((article, i) => (
        <Article key={i} article={article} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />
      ))}
    </>
  );
};

import useTranslation from 'next-translate/useTranslation';
import { useTechnologiesStore } from 'src/stories/technologies';

import { SmallTitle } from '@components/PostsList/atoms/SmallTitle';

import { useArticlesStore } from '@stories/articles';

import { DeleteTechnology } from './atoms/DeleteTechnology';
import { InfiniteScroll } from './atoms/InfiniteScroll';
import { TagsList } from './molecules/TagsLits';
import styles from './styles/PostsList.module.scss';
import { Article } from './templates/Article';
import { SearchBar } from './templates/SearchBar';

const PostsList = () => {
  const { t } = useTranslation('home');
  const title = t('posts-list.title'),
    description = t('posts-list.description');

  const [articles] = useArticlesStore((state) => [state.articles]);
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);

  return (
    <div className={styles.posts}>
      <div className={styles.heading}>
        <SmallTitle>{title}</SmallTitle>
        <p>{description}</p>
      </div>
      <SearchBar />
      {technologies.length > 0 ? (
        <TagsList>
          {technologies.map((tchnlg) => (
            <DeleteTechnology key={tchnlg}>{tchnlg}</DeleteTechnology>
          ))}
        </TagsList>
      ) : null}
      <InfiniteScroll>
        {articles.map((article, i) => (
          <Article key={i} article={article} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostsList;

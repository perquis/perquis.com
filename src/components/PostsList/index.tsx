import { SmallTitle } from '@components/PostsList/atoms/SmallTitle';

import { useTechnologiesStore } from '@store/technologies';

import { DeleteTechnology } from './atoms/DeleteTechnology';
import { TagsList } from './molecules/TagsLits';
import styles from './styles/PostsList.module.scss';
import { Article } from './templates/Article';
import { SearchBar } from './templates/SearchBar';

const PostsList = () => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);

  return (
    <div className={styles.posts}>
      <div className={styles.heading}>
        <SmallTitle>My Blog</SmallTitle>
        <p>About frontend, backend and programming.</p>
      </div>
      <SearchBar />
      {technologies.length > 0 ? (
        <TagsList>
          {technologies.map((tchnlg) => (
            <DeleteTechnology key={tchnlg}>{tchnlg}</DeleteTechnology>
          ))}
        </TagsList>
      ) : null}
      <Article isNewArticle />
    </div>
  );
};

export default PostsList;

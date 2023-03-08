import { Paragraph } from '@components/PostsList/atoms/Paragraph';
import { Tag } from '@components/PostsList/atoms/Tag';
import { DateAndTitle } from '@components/PostsList/molecules/DateAndTitle';
import { TagsList } from '@components/PostsList/molecules/TagsLits';

import styles from './Details.module.scss';

const tags = ['javascript', 'tutorial'];

export const Details = () => {
  return (
    <div className={styles.details}>
      <DateAndTitle details={{ date: '14 March, 2022', title: 'What is JavaScript', href: '/' }} />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus facilis culpa. Eum rerum, assumenda adipisci eligendi tempore impedit labore porro velit nemo
        totam atque qui dolor in dolores saepe.
      </Paragraph>
      <TagsList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>
    </div>
  );
};

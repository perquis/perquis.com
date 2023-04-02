import type { MDXRemoteProps } from 'next-mdx-remote';

import { Image } from '@GlobalComponents/atoms/Image';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { CodepenPlayer, YouTubePlayer } from '@GlobalComponents/players';

import { BadPractice, GoodPractice, Information } from '@components/Notes';
import { RehypePrettyCodeFragment } from '@components/RehypePrettyCodeFragment';
import { ChangeStatusInChapter } from '@components/RehypePrettyCodeFragment/atoms/ChangeStatusInChapter';
import { CustomH1 } from '@components/RehypePrettyCodeFragment/atoms/CustomH1';
import { Sandpack } from '@components/Sandpack';

import styles from './components.module.scss';

export const components: MDXRemoteProps['components'] = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => (
    <ChangeStatusInChapter>
      <CustomH1 className={styles.heading} {...props} />
    </ChangeStatusInChapter>
  ),
  h2: (props) => (
    <ChangeStatusInChapter>
      <h2 className={styles.heading} {...props} />
    </ChangeStatusInChapter>
  ),
  h3: (props) => (
    <ChangeStatusInChapter>
      <h3 className={styles.heading} {...props} />
    </ChangeStatusInChapter>
  ),
  h4: (props) => (
    <ChangeStatusInChapter>
      <h4 className={styles.heading} {...props} />
    </ChangeStatusInChapter>
  ),
  h5: (props) => (
    <ChangeStatusInChapter>
      <h5 className={styles.heading} {...props} />
    </ChangeStatusInChapter>
  ),
  h6: (props) => (
    <ChangeStatusInChapter>
      <h6 className={styles.heading} {...props} />
    </ChangeStatusInChapter>
  ),
  pre: (props) => <RehypePrettyCodeFragment {...props} />,
  img: ({ src, alt }) => <Image src={src ?? ''} alt={alt ?? ''} />,

  Sandpack,
  Information,
  BadPractice,
  GoodPractice,
  CodepenPlayer,
  YouTubePlayer,
};

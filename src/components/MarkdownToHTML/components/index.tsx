import type { MDXRemoteProps } from 'next-mdx-remote';

import { Image } from '@GlobalComponents/atoms/Image';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { CodepenPlayer, YouTubePlayer } from '@GlobalComponents/players';

import { RehypePrettyCodeFragment } from '@components/RehypePrettyCodeFragment';

import styles from './components.module.scss';

export const components: MDXRemoteProps['components'] = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => <h1 className={styles.heading} {...props} />,
  h2: (props) => <h2 className={styles.heading} {...props} />,
  h3: (props) => <h3 className={styles.heading} {...props} />,
  h4: (props) => <h4 className={styles.heading} {...props} />,
  h5: (props) => <h5 className={styles.heading} {...props} />,
  h6: (props) => <h6 className={styles.heading} {...props} />,
  pre: (props) => <RehypePrettyCodeFragment {...props} />,
  img: ({ src, alt }) => <Image src={src ?? ''} alt={alt ?? ''} />,

  CodepenPlayer,
  YouTubePlayer,
};

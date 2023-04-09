import type { MotionProps } from 'framer-motion';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { ReactHTMLElementProps } from 'react';

import { Image } from '@GlobalComponents/atoms/Image';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { CodepenPlayer, YouTubePlayer } from '@GlobalComponents/players';

import { Note } from '@components/Notes';
import { CodeWrapper, RehypePrettyCodeFragment } from '@components/RehypePrettyCodeFragment';
import { CustomH1 } from '@components/RehypePrettyCodeFragment/atoms/CustomH1';
import { Sandpack } from '@components/Sandpack';

import styles from './components.module.scss';

export const components: MDXRemoteProps['components'] = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => <CustomH1 className={`${styles.heading} link`} {...props} />,
  h2: (props) => <h2 className={`${styles.heading} link`} {...props} />,
  h3: (props) => <h3 className={`${styles.heading} link`} {...props} />,
  h4: (props) => <h4 className={`${styles.heading} link`} {...props} />,
  h5: (props) => <h5 className={`${styles.heading} link`} {...props} />,
  h6: (props) => <h6 className={`${styles.heading} link`} {...props} />,
  pre: (props: Omit<ReactHTMLElementProps<HTMLPreElement>, 'ref'> & MotionProps) => <RehypePrettyCodeFragment {...props} />,
  img: ({ src, alt }) => <Image src={src ?? ''} alt={alt ?? ''} />,

  Note,
  Sandpack,
  CodeWrapper,
  CodepenPlayer,
  YouTubePlayer,
};

import type { MotionProps } from 'framer-motion';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { ReactHTMLElementProps } from 'react';

import { Image, Item, Marker, NofollowLink, Paragraph, WavyBold } from '@components/globals/atoms';
import { CodepenPlayer, YouTubePlayer } from '@components/globals/players';
import { CodeHighlighter, CodeWrapper, FirstHeadingOnTheBlogPage } from '@components/locals/CodeHighlighter';
import { Note } from '@components/locals/Notes';
import { Sandpack } from '@components/locals/Sandpack';

import styles from './components.module.scss';

export const components: MDXRemoteProps['components'] = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => <FirstHeadingOnTheBlogPage className={`${styles.heading} link`} {...props} />,
  h2: (props) => <h2 className={`${styles.heading} link`} {...props} />,
  h3: (props) => <h3 className={`${styles.heading} link`} {...props} />,
  h4: (props) => <h4 className={`${styles.heading} link`} {...props} />,
  h5: (props) => <h5 className={`${styles.heading} link`} {...props} />,
  h6: (props) => <h6 className={`${styles.heading} link`} {...props} />,
  img: ({ src, alt }) => <Image src={src ?? ''} alt={alt ?? ''} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  li: (props) => <Item {...props} />,

  // @ts-ignore
  pre: (props: Omit<ReactHTMLElementProps<HTMLPreElement>, 'ref'> & MotionProps) => <CodeHighlighter {...props} />,

  Note,
  Marker,
  WavyBold,
  Sandpack,
  CodeWrapper,
  NofollowLink,
  CodepenPlayer,
  YouTubePlayer,
};

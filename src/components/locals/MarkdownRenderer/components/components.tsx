import type { MotionProps } from 'framer-motion';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { ReactHTMLElementProps } from 'react';

import { Image, Item, Marker, NofollowLink, Paragraph, WavyBold } from '@components/globals/atoms';
import { CodepenPlayer, YouTubePlayer } from '@components/globals/players';
import { CodeHighlighter, CodeWrapper } from '@components/locals/CodeHighlighter';
import { Note } from '@components/locals/Notes';
import { Sandpack } from '@components/locals/Sandpack';
import { VisibleDetector } from '@components/locals/TableOfContents';

import styles from './components.module.scss';

export const components: MDXRemoteProps['components'] = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => (
    <VisibleDetector>
      <h1 className={`${styles.heading} link`} {...props} />
    </VisibleDetector>
  ),
  h2: (props) => (
    <VisibleDetector>
      <h2 className={`${styles.heading} link`} {...props} />
    </VisibleDetector>
  ),
  h3: (props) => (
    <VisibleDetector>
      <h3 className={`${styles.heading} link`} {...props} />
    </VisibleDetector>
  ),
  h4: (props) => (
    <VisibleDetector>
      <h4 className={`${styles.heading} link`} {...props} />
    </VisibleDetector>
  ),
  h5: (props) => (
    <VisibleDetector>
      <h5 className={`${styles.heading} link`} {...props} />
    </VisibleDetector>
  ),
  h6: (props) => (
    <VisibleDetector>
      <h6 className={`${styles.heading} link`} {...props} />
    </VisibleDetector>
  ),
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

import type { MDXRemoteProps } from 'next-mdx-remote';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import styles from './components.module.scss';

export const components: MDXRemoteProps['components'] = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => <h1 className={styles.heading} {...props} />,
  h2: (props) => <h2 className={styles.heading} {...props} />,
  h3: (props) => <h3 className={styles.heading} {...props} />,
  h4: (props) => <h4 className={styles.heading} {...props} />,
  h5: (props) => <h5 className={styles.heading} {...props} />,
  h6: (props) => <h6 className={styles.heading} {...props} />,
};

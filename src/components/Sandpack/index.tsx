import type { SandpackProps } from '@codesandbox/sandpack-react';
import { Sandpack as CodeSandbox } from '@codesandbox/sandpack-react';
import { cyberpunk, githubLight } from '@codesandbox/sandpack-themes';
import { useTheme } from 'next-themes';

import styles from './Sandpack.module.scss';

export const Sandpack = ({ template = 'vanilla', options, ...props }: Omit<SandpackProps, 'theme'>) => {
  const { theme } = useTheme();

  return (
    <div className={styles.sandpack}>
      <CodeSandbox template={template} theme={theme === 'dark' ? cyberpunk : githubLight} {...props} options={{ ...options, editorHeight: 380 }} />
    </div>
  );
};

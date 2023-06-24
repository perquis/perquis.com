import { useTheme } from 'next-themes';

import type { SandpackProps } from '@codesandbox/sandpack-react';
import { Sandpack as CodeSandbox } from '@codesandbox/sandpack-react';
import { aquaBlue, cyberpunk } from '@codesandbox/sandpack-themes';
import { Dot } from '@components/globals/atoms';
import { dots } from '@data';
import { useHasMounted } from '@hooks';

import styles from './Sandpack.module.scss';

export const Sandpack = ({ template = 'vanilla', options, ...props }: Omit<SandpackProps, 'theme'>) => {
  const { theme } = useTheme();
  const { hasMounted } = useHasMounted();

  if (!hasMounted) return null;

  return (
    <div className={styles['sandpack-decorator']}>
      <div className={styles.sandpack}>
        <div className={styles['sandpack-navbar']}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {dots.map((_, i) => (
              <Dot key={i} isSandpack />
            ))}
          </div>
          <div>
            <h5>Playground</h5>
          </div>
        </div>
        <CodeSandbox template={template} theme={theme === 'dark' ? cyberpunk : aquaBlue} options={{ ...options, editorHeight: 420 }} {...props} />
      </div>
    </div>
  );
};

// https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook
import { useEffect } from 'react';

export const useDebouncedEffect = (effect: () => void, deps: unknown[], delay: number) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
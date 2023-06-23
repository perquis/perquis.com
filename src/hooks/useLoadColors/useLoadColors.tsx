import { useThemeCondition } from '../useThemeCondition/useThemeCondition';

export const useLoadColors = () => {
  const condition = useThemeCondition();

  const backgroundColor = condition ? '#233243' : '#dee5ed';
  const foregroundColor = condition ? '#1a2532' : '#cdd8e5';

  return {
    backgroundColor,
    foregroundColor,
  };
};

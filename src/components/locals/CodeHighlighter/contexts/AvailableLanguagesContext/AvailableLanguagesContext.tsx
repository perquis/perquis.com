import { createContext, type Dispatch, type SetStateAction, useContext } from 'react';

interface AvailableLanguagesContextProps {
  currentLng: string;
  languages: string[];
  setCurrentLng: Dispatch<SetStateAction<string>>;
}

export const AvailableLanguagesContext = createContext<AvailableLanguagesContextProps>({
  languages: [],
  currentLng: '',
  setCurrentLng: () => '',
});

export const useAvailableLanguages = () => {
  return useContext(AvailableLanguagesContext);
};

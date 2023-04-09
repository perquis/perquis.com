import { filenamesListJson } from '@data/filenames';

const splittedLng = (lng: string, index: number): string => {
  if (lng.includes('.')) {
    const splitFileName = lng.split('.');
    const declarativeTS = 'd.ts';

    if (lng.includes(declarativeTS)) return declarativeTS;
    if (splitFileName.length > 2) return splitFileName[index + 1];
    return splitFileName[index];
  }

  return lng;
};

export const matchingTechnologyIcon = (lng: string): string => (filenamesListJson.test(lng) ? splittedLng(lng, 0) : splittedLng(lng, 1));

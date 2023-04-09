import { filenamesListJson } from '@data/filenames';

const splittedLng = (lng: string, index: number) => (lng.includes('.') ? lng.split('.')[index] : lng);

export const matchingTechnologyIcon = (lng: string) => (filenamesListJson.test(lng) ? splittedLng(lng, 0) : splittedLng(lng, 1));

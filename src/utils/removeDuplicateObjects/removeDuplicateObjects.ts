import type { PickedArticleProps } from '@stories';

export const removeDuplicateObjects = <T extends PickedArticleProps>(array: T[], key: keyof PickedArticleProps) =>
  array.reduce((uniqueArray, currentObject) => {
    const existingObject = uniqueArray.find((obj) => obj[key] === currentObject[key]);
    if (!existingObject) uniqueArray.push(currentObject as never);

    return uniqueArray;
  }, []);

import type { InputMaybe, Tags } from '@graphql/databases/client';

export const splittedTags = (tags: string) => tags.split(' ') as InputMaybe<Tags | readonly Tags[]> | undefined;

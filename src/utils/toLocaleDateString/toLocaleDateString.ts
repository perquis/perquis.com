import type { Articles, Locale } from '@graphql/databases/client';

const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;

export const toLocaleDateString = (date: Articles['createdAt'], locale: Locale) => new Date(date ?? '').toLocaleDateString(locale, options);

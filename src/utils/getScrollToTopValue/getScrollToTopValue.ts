import { scrollPaddingTop } from '@data';

export const getScrollToTopValue = (index: number) => Number(document?.querySelectorAll<HTMLAnchorElement>('.link')[index]?.getBoundingClientRect()?.top - scrollPaddingTop);

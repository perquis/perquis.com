import type { Maybe } from 'graphql/jsutils/Maybe';

export const isNotFourteenDaysAgo = (dateString: Maybe<Date> | Date | string): boolean => {
  // Convert string to date object
  const date = new Date(dateString as Date | string);

  // Calculate the time difference in milliseconds between the current date and the passed date
  const timeDiff = new Date().getTime() - date.getTime();

  // Calculate the number of days based on the time difference
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

  // Return true if not more than 14 days have passed, false otherwise
  return daysDiff <= 14;
};

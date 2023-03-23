export const hasCookie = (regExp: RegExp) => (typeof document !== 'undefined' && (document.cookie.match(regExp) || [null])[1]) || null;

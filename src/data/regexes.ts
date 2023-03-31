export const newsletterModalPattern = /^(?:.*;)?\s*newsletter-modal\s*=\s*([^;]+)(?:.*)?$/;
export const uriRegExPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

export const isValidatedUri = (v: string) => uriRegExPattern.test(v);

export const newsletterModalPattern = /^(?:.*;)?\s*newsletter-modal\s*=\s*([^;]+)(?:.*)?$/;
export const uriRegExPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
export const emailPattern = /^[a-z0-9]+\.?[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

export const isValidatedUri = (v: string) => uriRegExPattern.test(v);
export const isValidatedEmail = (v: string) => emailPattern.test(v);

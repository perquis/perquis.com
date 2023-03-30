import type { Comment } from '@prisma/client';

export const fetchAllCommentsList = async (slug: string): Promise<Comment[]> => {
  const data = await fetch(`/api/comments/${slug}`);
  const json = data.json();

  return json;
};

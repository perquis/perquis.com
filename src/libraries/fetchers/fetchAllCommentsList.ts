import axios from 'axios';

import type { Comment, User } from 'prisma/generated/prisma-client-js';

type CommentList = Comment & { user: User };

export const fetchAllCommentsList = async (slug: string): Promise<CommentList[]> => {
  const { data } = await axios(`/api/comments/${slug}`);

  return data;
};

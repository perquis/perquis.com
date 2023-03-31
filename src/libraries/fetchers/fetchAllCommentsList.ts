import type { Comment, User } from '@prisma/client';
import axios from 'axios';

type CommentList = Comment & { user: User };

export const fetchAllCommentsList = async (slug: string): Promise<CommentList[]> => {
  const { data } = await axios(`/api/comments/${slug}`);

  return data;
};

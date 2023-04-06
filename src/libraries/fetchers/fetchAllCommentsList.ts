import axios from 'axios';

type CommentList = PrismaComment & { user: PrismaUser };

export const fetchAllCommentsList = async (slug: string): Promise<CommentList[]> => {
  const { data } = await axios(`/api/comments/${slug}`);

  return data;
};

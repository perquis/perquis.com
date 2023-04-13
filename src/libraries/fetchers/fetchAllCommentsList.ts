import axios from 'axios';

type CommentList = PrismaComment & { user: PrismaUser };

export const fetchAllCommentsList = async (postId: string, skip = 0): Promise<Record<'comments', CommentList[]> & { skipPage: number | null; pageSize: number }> => {
  const { data } = await axios.get(`/api/comments/${postId}?skip=${skip}`);

  return { ...data };
};

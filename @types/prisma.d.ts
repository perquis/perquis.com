type PrismaPost = {
  id: string;
  articleId: string;
};

type PrismaComment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  postId: string;
  userId: string;
};

type PrismaUser = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  emailVerified: Date | null;
};

type PrismaSession = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
};

type PrismaVerificationToken = {
  id: string;
  identifier: string;
  token: string;
  expires: Date;
};

type PrismaAccount = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
};

type PrismaNewsletter = {
  id: string;
  email: string;
  status: Status;
};

const Status = {
  SUBSCRIBE: 'SUBSCRIBE',
  UNSUBSCRIBE: 'UNSUBSCRIBE',
};

type PrismaStatus = (typeof Status)[keyof typeof Status];

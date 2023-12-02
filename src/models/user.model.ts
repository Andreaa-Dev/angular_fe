export type UserLogIn = {
  email: string;
  password: string;
};

export type UserSignUp = UserLogIn & {
  name: string;
  avatar: string;
};

export type User = UserSignUp & { role: string; id: number };

export type Response = {
  access_token: string;
  refresh_token: string;
};

export interface User {
  email: string;
  password: string;
  name: string;
  avatar: string;
}

export type UserState = User & { role: string; id: number };

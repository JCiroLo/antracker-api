export type User = {
  id: string;
  email?: string;
  created_at?: string;
};

export type NewUser = Omit<User, "created_at">;

export type PartialNewUser = Partial<NewUser>;

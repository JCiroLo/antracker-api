export type User = {
    id: string;
    email?: string;
    created_at?: string;
};
export type NewUser = Partial<Omit<User, "created_at">>;
//# sourceMappingURL=user.d.ts.map
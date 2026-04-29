export type Category = {
    id: string;
    name: string;
    color: string;
    user_id: string;
    created_at?: string;
};
export type NewCategory = Partial<Omit<Category, "id" | "created_at">>;
//# sourceMappingURL=category.d.ts.map
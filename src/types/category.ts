export type ExpenseCategory = {
  id: string;
  name: string;
  color: string;
  user_id: string;
  created_at?: string;
};

export type NewExpenseCategory = Omit<ExpenseCategory, "id" | "created_at">;

export type PartialNewExpenseCategory = Partial<NewExpenseCategory>;

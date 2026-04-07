export interface ExpenseCategory {
  id: string;
  name: string;
  color: string;
  user_id: string;
  created_at?: string;
}

export type CreateExpenseCategoryDto = Omit<
  ExpenseCategory,
  "id" | "created_at"
>;
export type UpdateExpenseCategoryDto = Partial<CreateExpenseCategoryDto>;

export interface ExpenseTemplate {
  id: string;
  title: string;
  amount: number;
  due_day?: number;
  due_month?: number;
  type: "monthly" | "annual" | "one-time";
  user_id: string;
  created_at?: string;
  category_id?: string;
  due_year?: number;
  is_single_payment?: boolean;
  frequency_value?: number;
  frequency_unit?: string;
  start_date?: string;
  next_due_date?: string;
}

export type CreateExpenseTemplateDto = Omit<
  ExpenseTemplate,
  "id" | "created_at"
>;
export type UpdateExpenseTemplateDto = Partial<CreateExpenseTemplateDto>;

export interface ExpenseRecord {
  id: string;
  paid_at_month: number;
  paid_at_year: number;
  template_id: string;
  user_id: string;
  created_at?: string;
  category_id?: string;
  amount?: number;
  title?: string;
  times?: number;
  paid_date?: string;
}

export type CreateExpenseRecordDto = Omit<ExpenseRecord, "id" | "created_at">;
export type UpdateExpenseRecordDto = Partial<CreateExpenseRecordDto>;

export interface IncomeTemplate {
  id: string;
  title: string;
  amount: number;
  due_day?: number;
  due_month?: number;
  type: "monthly" | "annual" | "one-time";
  user_id: string;
  created_at?: string;
  category_id?: string;
  due_year?: number;
  is_single_payment?: boolean;
  frequency_value?: number;
  frequency_unit?: string;
  start_date?: string;
  next_due_date?: string;
}

export type CreateIncomeTemplateDto = Omit<IncomeTemplate, "id" | "created_at">;
export type UpdateIncomeTemplateDto = Partial<CreateIncomeTemplateDto>;

export interface IncomeRecord {
  id: string;
  paid_at_month: number;
  paid_at_year: number;
  template_id: string;
  user_id: string;
  created_at?: string;
  category_id?: string;
  amount?: number;
  title?: string;
  times?: number;
  paid_date?: string;
}

export type CreateIncomeRecordDto = Omit<IncomeRecord, "id" | "created_at">;
export type UpdateIncomeRecordDto = Partial<CreateIncomeRecordDto>;

export interface User {
  id: string;
  email?: string;
  created_at?: string;
}

export type CreateUserDto = Omit<User, "created_at">;
export type UpdateUserDto = Partial<CreateUserDto>;

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

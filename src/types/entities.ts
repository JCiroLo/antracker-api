export interface ExpenseCategory {
  id: string;
  name: string;
  color: string;
  user_id: string;
  created_at?: string;
}

export type NewExpenseCategory = Omit<ExpenseCategory, "id" | "created_at">;
export type ExpenseCategoryUpdate = Partial<NewExpenseCategory>;

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

export type NewExpenseTemplate = Omit<ExpenseTemplate, "id" | "created_at">;
export type ExpenseTemplateUpdate = Partial<NewExpenseTemplate>;

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

export type NewExpenseRecord = Omit<ExpenseRecord, "id" | "created_at">;
export type ExpenseRecordUpdate = Partial<NewExpenseRecord>;

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

export type NewIncomeTemplate = Omit<IncomeTemplate, "id" | "created_at">;
export type IncomeTemplateUpdate = Partial<NewIncomeTemplate>;

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

export type NewIncomeRecord = Omit<IncomeRecord, "id" | "created_at">;
export type IncomeRecordUpdate = Partial<NewIncomeRecord>;

export interface User {
  id: string;
  email?: string;
  created_at?: string;
}

export type NewUser = Omit<User, "created_at">;
export type UserUpdate = Partial<NewUser>;

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

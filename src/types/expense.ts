export type FrequencyUnit = "days" | "weeks" | "months" | "years";

export type ExpenseCategory = {
  color: string;
  id: string;
  name: string;
  user_id: string;
};

export type ExpenseTemplate = {
  amount: number;
  category_id: string | null;

  // New time scope fields
  is_single_payment: boolean;
  frequency_value: number | null;
  frequency_unit: FrequencyUnit | null;
  start_date: string | null;
  next_due_date: string | null;
  times: number;

  // Deprecated fields (keep them optional for the migration period)
  type?: "monthly" | "annual" | "one-time";
  due_day?: number | null;
  due_month?: number | null;
  due_year?: number | null;

  id: string;
  title: string;
  user_id: string;
};

export type ExpenseRecord = {
  category_id: string | null;
  created_at: string;
  id: string;
  template_id: string;
  user_id: string;

  // New fields
  amount: number;
  title: string;
  paid_date: string;

  // Deprecated fields
  paid_at_month?: number;
  paid_at_year?: number;
};
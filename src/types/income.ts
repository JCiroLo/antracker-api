import { FrequencyUnit } from "./expense";

export type IncomeTemplate = {
  amount: number;
  category_id: string | null;

  is_single_payment: boolean;
  frequency_value: number | null;
  frequency_unit: FrequencyUnit | null;
  start_date: string | null;
  next_due_date: string | null;
  times: number;

  type?: "monthly" | "annual" | "one-time";
  due_day?: number | null;
  due_month?: number | null;
  due_year?: number | null;

  id: string;
  title: string;
  user_id: string;
};

export type IncomeRecord = {
  category_id: string | null;
  created_at: string;
  id: string;
  template_id: string;
  user_id: string;

  amount: number;
  title: string;
  paid_date: string;

  paid_at_month?: number;
  paid_at_year?: number;
};

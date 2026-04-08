export type FrequencyUnit = "days" | "weeks" | "months" | "years";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  message?: string;
};

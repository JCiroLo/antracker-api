export type FrequencyUnit = "days" | "weeks" | "months" | "years";
export type TransactionType = "expense" | "income";
export type TransactionTemplate = {
    amount: number;
    category_id: string | null;
    created_at: string;
    frequency_unit: FrequencyUnit | null;
    frequency_value: number | null;
    id: string;
    is_single_payment: boolean;
    start_date: string | null;
    title: string;
    type: TransactionType;
    user_id: string;
};
export type NewTransactionTemplate = Partial<Omit<TransactionTemplate, "id" | "created_at">>;
export type TransactionRecord = {
    amount: number;
    category_id: string | null;
    created_at: string;
    id: string;
    paid_date: string;
    template_id: string;
    times: number;
    title: string;
    user_id: string;
};
export type NewTransactionRecord = Partial<Omit<TransactionRecord, "id" | "created_at">>;
//# sourceMappingURL=transaction.d.ts.map
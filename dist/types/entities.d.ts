export type SupabaseRPC = {
    get_transactions_with_status: {
        p_user_id: string;
        p_days_threshold: number;
        p_template_id?: string;
    };
};
export type ApiResponse<T = unknown> = {
    code: number;
    data?: T;
};
export type ApiError = {
    code: number;
    error: {
        message: string;
    };
};
//# sourceMappingURL=entities.d.ts.map
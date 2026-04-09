import { Request, Response } from "express";
/**
 * Get all expense records
 * @route GET  /expense_records
 */
export declare const getAllExpenseRecords: (_req: Request, res: Response) => Promise<void>;
/**
 * Get an expense record by ID
 * @route GET  /expense_records/:id
 */
export declare const getExpenseRecordById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new expense record
 * @route POST  /expense_records
 */
export declare const createExpenseRecord: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing expense record
 * @route PUT  /expense_records/:id
 */
export declare const updateExpenseRecord: (req: Request, res: Response) => Promise<void>;
/**
 * Delete an expense record
 * @route DELETE  /expense_records/:id
 */
export declare const deleteExpenseRecord: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=expense-record.d.ts.map
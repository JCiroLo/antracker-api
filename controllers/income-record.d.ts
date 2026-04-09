import { Request, Response } from "express";
/**
 * Get all income records
 * @route GET  /income_records
 */
export declare const getAllIncomeRecords: (_req: Request, res: Response) => Promise<void>;
/**
 * Get an income record by ID
 * @route GET  /income_records/:id
 */
export declare const getIncomeRecordById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new income record
 * @route POST  /income_records
 */
export declare const createIncomeRecord: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing income record
 * @route PUT  /income_records/:id
 */
export declare const updateIncomeRecord: (req: Request, res: Response) => Promise<void>;
/**
 * Delete an income record
 * @route DELETE  /income_records/:id
 */
export declare const deleteIncomeRecord: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=income-record.d.ts.map
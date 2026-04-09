import { Request, Response } from "express";
/**
 * Get all expense categories
 * @route GET  /expense_categories
 */
export declare const getAllExpenseCategories: (_req: Request, res: Response) => Promise<void>;
/**
 * Get an expense category by ID
 * @route GET  /expense_categories/:id
 */
export declare const getExpenseCategoryById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new expense category
 * @route POST  /expense_categories
 */
export declare const createExpenseCategory: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing expense category
 * @route PUT  /expense_categories/:id
 */
export declare const updateExpenseCategory: (req: Request, res: Response) => Promise<void>;
/**
 * Delete an expense category
 * @route DELETE  /expense_categories/:id
 */
export declare const deleteExpenseCategory: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=expense-categories.d.ts.map
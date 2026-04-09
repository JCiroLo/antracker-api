import { Request, Response } from "express";
/**
 * Get all expense templates
 * @route GET  /expense_templates
 */
export declare const getAllExpenseTemplates: (_req: Request, res: Response) => Promise<void>;
/**
 * Get an expense template by ID
 * @route GET  /expense_templates/:id
 */
export declare const getExpenseTemplateById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new expense template
 * @route POST  /expense_templates
 */
export declare const createExpenseTemplate: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing expense template
 * @route PUT  /expense_templates/:id
 */
export declare const updateExpenseTemplate: (req: Request, res: Response) => Promise<void>;
/**
 * Delete an expense template
 * @route DELETE  /expense_templates/:id
 */
export declare const deleteExpenseTemplate: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=expense-template.d.ts.map
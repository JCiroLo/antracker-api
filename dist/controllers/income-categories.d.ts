import { Request, Response } from "express";
/**
 * Get all income categories
 * @route GET  /income_categories
 */
export declare const getAllIncomeCategories: (_req: Request, res: Response) => Promise<void>;
/**
 * Get an income category by ID
 * @route GET  /income_categories/:id
 */
export declare const getIncomeCategoryById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new income category
 * @route POST  /income_categories
 */
export declare const createIncomeCategory: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing income category
 * @route PUT  /income_categories/:id
 */
export declare const updateIncomeCategory: (req: Request, res: Response) => Promise<void>;
/**
 * Delete an income category
 * @route DELETE  /income_categories/:id
 */
export declare const deleteIncomeCategory: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=income-categories.d.ts.map
import { Request, Response } from "express";
/**
 * Get all income templates
 * @route GET  /income_templates
 */
export declare const getAllIncomeTemplates: (_req: Request, res: Response) => Promise<void>;
/**
 * Get an income template by ID
 * @route GET  /income_templates/:id
 */
export declare const getIncomeTemplateById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new income template
 * @route POST  /income_templates
 */
export declare const createIncomeTemplate: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing income template
 * @route PUT  /income_templates/:id
 */
export declare const updateIncomeTemplate: (req: Request, res: Response) => Promise<void>;
/**
 * Delete an income template
 * @route DELETE  /income_templates/:id
 */
export declare const deleteIncomeTemplate: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=income-template.d.ts.map
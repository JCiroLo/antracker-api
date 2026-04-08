import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/expense-template";

const router: ExpressRouter = Router();

/**
 * @route   GET  /expense_templates
 * @desc    Get all expense templates
 * @returns { data: ExpenseTemplate[] }
 */
router.get("/", Controller.getAllExpenseTemplates);

/**
 * @route   GET  /expense_templates/:id
 * @desc    Get an expense template by ID
 * @returns { data: ExpenseTemplate }
 */
router.get("/:id", Controller.getExpenseTemplateById);

/**
 * @route   POST  /expense_templates
 * @desc    Create a new expense template
 * @body    { name, category, amount, description?, is_recurring }
 * @returns { data: ExpenseTemplate }
 */
router.post("/", Controller.createExpenseTemplate);

/**
 * @route   PUT  /expense_templates/:id
 * @desc    Update an existing expense template
 * @body    Partial fields of ExpenseTemplate
 * @returns { data: ExpenseTemplate }
 */
router.put("/:id", Controller.updateExpenseTemplate);

/**
 * @route   DELETE  /expense_templates/:id
 * @desc    Delete an expense template
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteExpenseTemplate);

export default router;

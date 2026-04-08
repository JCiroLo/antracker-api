import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/expense-categories";

const router: ExpressRouter = Router();

/**
 * @route   GET /expense_categories
 * @desc    Get all expense categories
 * @returns { data: ExpenseCategory[] }
 */
router.get("/", Controller.getAllExpenseCategories);

/**
 * @route   GET  /expense_categories/:id
 * @desc    Get an expense category by ID
 * @returns { data: ExpenseCategory }
 */
router.get("/:id", Controller.getExpenseCategoryById);

/**
 * @route   POST  /expense_categories
 * @desc    Create a new expense category
 * @body    { name, color, user_id }
 * @returns { data: ExpenseCategory }
 */
router.post("/", Controller.createExpenseCategory);

/**
 * @route   PUT  /expense_categories/:id
 * @desc    Update an existing expense category
 * @body    Partial fields of ExpenseCategory
 * @returns { data: ExpenseCategory }
 */
router.put("/:id", Controller.updateExpenseCategory);

/**
 * @route   DELETE  /expense_categories/:id
 * @desc    Delete an expense category
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteExpenseCategory);

export default router;

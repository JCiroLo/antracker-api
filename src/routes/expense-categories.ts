import { Router, type Router as ExpressRouter } from "express";
import {
  getAllExpenseCategories,
  getExpenseCategoryById,
  createExpenseCategory,
  updateExpenseCategory,
  deleteExpenseCategory,
} from "@controllers/expense-category-controller";

const router: ExpressRouter = Router();

/**
 * @route   GET /expense_categories
 * @desc    Get all expense categories
 * @returns { data: ExpenseCategory[] }
 */
router.get("/", getAllExpenseCategories);

/**
 * @route   GET  /expense_categories/:id
 * @desc    Get an expense category by ID
 * @returns { data: ExpenseCategory }
 */
router.get("/:id", getExpenseCategoryById);

/**
 * @route   POST  /expense_categories
 * @desc    Create a new expense category
 * @body    { name, color, user_id }
 * @returns { data: ExpenseCategory }
 */
router.post("/", createExpenseCategory);

/**
 * @route   PUT  /expense_categories/:id
 * @desc    Update an existing expense category
 * @body    Partial fields of ExpenseCategory
 * @returns { data: ExpenseCategory }
 */
router.put("/:id", updateExpenseCategory);

/**
 * @route   DELETE  /expense_categories/:id
 * @desc    Delete an expense category
 * @returns { message: string }
 */
router.delete("/:id", deleteExpenseCategory);

export default router;

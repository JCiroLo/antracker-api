import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_categories");

/**
 * @route   GET /api/expense_categories
 * @desc    Get all expense categories
 * @returns { data: ExpenseCategory[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/expense_categories/:id
 * @desc    Get an expense category by ID
 * @returns { data: ExpenseCategory }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/expense_categories
 * @desc    Create a new expense category
 * @body    { name, color, user_id }
 * @returns { data: ExpenseCategory }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/expense_categories/:id
 * @desc    Update an existing expense category
 * @body    Partial fields of ExpenseCategory
 * @returns { data: ExpenseCategory }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/expense_categories/:id
 * @desc    Delete an expense category
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

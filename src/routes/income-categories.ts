import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_categories");

/**
 * @route   GET /api/income_categories
 * @desc    Get all income categories
 * @returns { data: ExpenseCategory[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/income_categories/:id
 * @desc    Get an income category by ID
 * @returns { data: ExpenseCategory }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/income_categories
 * @desc    Create a new income category
 * @body    { name, color, user_id }
 * @returns { data: ExpenseCategory }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/income_categories/:id
 * @desc    Update an existing income category
 * @body    Partial fields of ExpenseCategory
 * @returns { data: ExpenseCategory }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/income_categories/:id
 * @desc    Delete an income category
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

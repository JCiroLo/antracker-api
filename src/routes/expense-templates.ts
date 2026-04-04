import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_templates");

/**
 * @route   GET /api/expense_templates
 * @desc    Get all expense templates
 * @returns { data: ExpenseTemplate[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/expense_templates/:id
 * @desc    Get an expense template by ID
 * @returns { data: ExpenseTemplate }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/expense_templates
 * @desc    Create a new expense template
 * @body    { name, category, amount, description?, is_recurring }
 * @returns { data: ExpenseTemplate }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/expense_templates/:id
 * @desc    Update an existing expense template
 * @body    Partial fields of ExpenseTemplate
 * @returns { data: ExpenseTemplate }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/expense_templates/:id
 * @desc    Delete an expense template
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("expense_records");

/**
 * @route   GET /api/expense_records
 * @desc    Get all expense records
 * @returns { data: ExpenseRecord[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/expense_records/:id
 * @desc    Get an expense record by ID
 * @returns { data: ExpenseRecord }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/expense_records
 * @desc    Create a new expense record
 * @body    { template_id?, user_id, name, category, amount, description?, date }
 * @returns { data: ExpenseRecord }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/expense_records/:id
 * @desc    Update an existing expense record
 * @body    Partial fields of ExpenseRecord
 * @returns { data: ExpenseRecord }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/expense_records/:id
 * @desc    Delete an expense record
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

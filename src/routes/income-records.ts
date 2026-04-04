import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("income_records");

/**
 * @route   GET /api/income_records
 * @desc    Get all income records
 * @returns { data: IncomeRecord[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/income_records/:id
 * @desc    Get an income record by ID
 * @returns { data: IncomeRecord }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/income_records
 * @desc    Create a new income record
 * @body    { template_id?, user_id, name, source, amount, description?, date }
 * @returns { data: IncomeRecord }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/income_records/:id
 * @desc    Update an existing income record
 * @body    Partial fields of IncomeRecord
 * @returns { data: IncomeRecord }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/income_records/:id
 * @desc    Delete an income record
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

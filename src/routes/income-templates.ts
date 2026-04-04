import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("income_templates");

/**
 * @route   GET /api/income_templates
 * @desc    Get all income templates
 * @returns { data: IncomeTemplate[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/income_templates/:id
 * @desc    Get an income template by ID
 * @returns { data: IncomeTemplate }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/income_templates
 * @desc    Create a new income template
 * @body    { name, source, amount, description?, is_recurring }
 * @returns { data: IncomeTemplate }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/income_templates/:id
 * @desc    Update an existing income template
 * @body    Partial fields of IncomeTemplate
 * @returns { data: IncomeTemplate }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/income_templates/:id
 * @desc    Delete an income template
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

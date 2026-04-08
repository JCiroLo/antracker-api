import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/income-template";

const router: ExpressRouter = Router();

/**
 * @route   GET  /income_templates
 * @desc    Get all income templates
 * @returns { data: IncomeTemplate[] }
 */
router.get("/", Controller.getAllIncomeTemplates);

/**
 * @route   GET  /income_templates/:id
 * @desc    Get an income template by ID
 * @returns { data: IncomeTemplate }
 */
router.get("/:id", Controller.getIncomeTemplateById);

/**
 * @route   POST  /income_templates
 * @desc    Create a new income template
 * @body    { name, source, amount, description?, is_recurring }
 * @returns { data: IncomeTemplate }
 */
router.post("/", Controller.createIncomeTemplate);

/**
 * @route   PUT  /income_templates/:id
 * @desc    Update an existing income template
 * @body    Partial fields of IncomeTemplate
 * @returns { data: IncomeTemplate }
 */
router.put("/:id", Controller.updateIncomeTemplate);

/**
 * @route   DELETE  /income_templates/:id
 * @desc    Delete an income template
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteIncomeTemplate);

export default router;

import { Router, type Router as ExpressRouter } from "express";
import {
  getAllIncomeTemplates,
  getIncomeTemplateById,
  createIncomeTemplate,
  updateIncomeTemplate,
  deleteIncomeTemplate,
} from "@controllers/income-template-controller";

const router: ExpressRouter = Router();

/**
 * @route   GET  /income_templates
 * @desc    Get all income templates
 * @returns { data: IncomeTemplate[] }
 */
router.get("/", getAllIncomeTemplates);

/**
 * @route   GET  /income_templates/:id
 * @desc    Get an income template by ID
 * @returns { data: IncomeTemplate }
 */
router.get("/:id", getIncomeTemplateById);

/**
 * @route   POST  /income_templates
 * @desc    Create a new income template
 * @body    { name, source, amount, description?, is_recurring }
 * @returns { data: IncomeTemplate }
 */
router.post("/", createIncomeTemplate);

/**
 * @route   PUT  /income_templates/:id
 * @desc    Update an existing income template
 * @body    Partial fields of IncomeTemplate
 * @returns { data: IncomeTemplate }
 */
router.put("/:id", updateIncomeTemplate);

/**
 * @route   DELETE  /income_templates/:id
 * @desc    Delete an income template
 * @returns { message: string }
 */
router.delete("/:id", deleteIncomeTemplate);

export default router;

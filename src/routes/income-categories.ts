import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/income-categories";

const router: ExpressRouter = Router();

/**
 * @route   GET  /income_categories
 * @desc    Get all income categories
 * @returns { data: IncomeCategory[] }
 */
router.get("/", Controller.getAllIncomeCategories);

/**
 * @route   GET  /income_categories/:id
 * @desc    Get an income category by ID
 * @returns { data: IncomeCategory }
 */
router.get("/:id", Controller.getIncomeCategoryById);

/**
 * @route   POST  /income_categories
 * @desc    Create a new income category
 * @body    { name, color, user_id }
 * @returns { data: IncomeCategory }
 */
router.post("/", Controller.createIncomeCategory);

/**
 * @route   PUT  /income_categories/:id
 * @desc    Update an existing income category
 * @body    Partial fields of IncomeCategory
 * @returns { data: IncomeCategory }
 */
router.put("/:id", Controller.updateIncomeCategory);

/**
 * @route   DELETE  /income_categories/:id
 * @desc    Delete an income category
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteIncomeCategory);

export default router;

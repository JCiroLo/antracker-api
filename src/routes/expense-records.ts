import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/expense-record";

const router: ExpressRouter = Router();

/**
 * @route   GET  /expense_records
 * @desc    Get all expense records
 * @returns { data: ExpenseRecord[] }
 */
router.get("/", Controller.getAllExpenseRecords);

/**
 * @route   GET  /expense_records/:id
 * @desc    Get an expense record by ID
 * @returns { data: ExpenseRecord }
 */
router.get("/:id", Controller.getExpenseRecordById);

/**
 * @route   POST  /expense_records
 * @desc    Create a new expense record
 * @body    { template_id?, user_id, name, category, amount, description?, date }
 * @returns { data: ExpenseRecord }
 */
router.post("/", Controller.createExpenseRecord);

/**
 * @route   PUT  /expense_records/:id
 * @desc    Update an existing expense record
 * @body    Partial fields of ExpenseRecord
 * @returns { data: ExpenseRecord }
 */
router.put("/:id", Controller.updateExpenseRecord);

/**
 * @route   DELETE  /expense_records/:id
 * @desc    Delete an expense record
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteExpenseRecord);

export default router;

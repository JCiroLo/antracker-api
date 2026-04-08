import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/income-record";

const router: ExpressRouter = Router();

/**
 * @route   GET  /income_records
 * @desc    Get all income records
 * @returns { data: IncomeRecord[] }
 */
router.get("/", Controller.getAllIncomeRecords);

/**
 * @route   GET  /income_records/:id
 * @desc    Get an income record by ID
 * @returns { data: IncomeRecord }
 */
router.get("/:id", Controller.getIncomeRecordById);

/**
 * @route   POST  /income_records
 * @desc    Create a new income record
 * @body    { template_id?, user_id, name, source, amount, description?, date }
 * @returns { data: IncomeRecord }
 */
router.post("/", Controller.createIncomeRecord);

/**
 * @route   PUT  /income_records/:id
 * @desc    Update an existing income record
 * @body    Partial fields of IncomeRecord
 * @returns { data: IncomeRecord }
 */
router.put("/:id", Controller.updateIncomeRecord);

/**
 * @route   DELETE  /income_records/:id
 * @desc    Delete an income record
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteIncomeRecord);

export default router;

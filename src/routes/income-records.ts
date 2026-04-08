import { Router, type Router as ExpressRouter } from "express";
import {
  getAllIncomeRecords,
  getIncomeRecordById,
  createIncomeRecord,
  updateIncomeRecord,
  deleteIncomeRecord,
} from "@controllers/income-record-controller";

const router: ExpressRouter = Router();

/**
 * @route   GET  /income_records
 * @desc    Get all income records
 * @returns { data: IncomeRecord[] }
 */
router.get("/", getAllIncomeRecords);

/**
 * @route   GET  /income_records/:id
 * @desc    Get an income record by ID
 * @returns { data: IncomeRecord }
 */
router.get("/:id", getIncomeRecordById);

/**
 * @route   POST  /income_records
 * @desc    Create a new income record
 * @body    { template_id?, user_id, name, source, amount, description?, date }
 * @returns { data: IncomeRecord }
 */
router.post("/", createIncomeRecord);

/**
 * @route   PUT  /income_records/:id
 * @desc    Update an existing income record
 * @body    Partial fields of IncomeRecord
 * @returns { data: IncomeRecord }
 */
router.put("/:id", updateIncomeRecord);

/**
 * @route   DELETE  /income_records/:id
 * @desc    Delete an income record
 * @returns { message: string }
 */
router.delete("/:id", deleteIncomeRecord);

export default router;

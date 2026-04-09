"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenseRecord = exports.updateExpenseRecord = exports.createExpenseRecord = exports.getExpenseRecordById = exports.getAllExpenseRecords = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("expense_records");
/**
 * Get all expense records
 * @route GET  /expense_records
 */
const getAllExpenseRecords = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllExpenseRecords = getAllExpenseRecords;
/**
 * Get an expense record by ID
 * @route GET  /expense_records/:id
 */
const getExpenseRecordById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await table.select("*").eq("id", id).single();
    if (error) {
        const response = { error: error.message };
        res.status(404).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getExpenseRecordById = getExpenseRecordById;
/**
 * Create a new expense record
 * @route POST  /expense_records
 */
const createExpenseRecord = async (req, res) => {
    const body = req.body;
    const { data, error } = await table.insert(body).select().single();
    if (error) {
        const response = { error: error.message };
        res.status(400).json(response);
        return;
    }
    const response = { data };
    res.status(201).json(response);
};
exports.createExpenseRecord = createExpenseRecord;
/**
 * Update an existing expense record
 * @route PUT  /expense_records/:id
 */
const updateExpenseRecord = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const { data, error } = await table.update(body).eq("id", id).select().single();
    if (error) {
        const response = { error: error.message };
        res.status(400).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.updateExpenseRecord = updateExpenseRecord;
/**
 * Delete an expense record
 * @route DELETE  /expense_records/:id
 */
const deleteExpenseRecord = async (req, res) => {
    const { id } = req.params;
    const { error } = await table.delete().eq("id", id);
    if (error) {
        const response = { error: error.message };
        res.status(400).json(response);
        return;
    }
    const response = {
        message: `Record ${id} was successfully removed`,
    };
    res.status(200).json(response);
};
exports.deleteExpenseRecord = deleteExpenseRecord;
//# sourceMappingURL=expense-record.js.map
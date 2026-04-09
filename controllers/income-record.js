"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncomeRecord = exports.updateIncomeRecord = exports.createIncomeRecord = exports.getIncomeRecordById = exports.getAllIncomeRecords = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("income_records");
/**
 * Get all income records
 * @route GET  /income_records
 */
const getAllIncomeRecords = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllIncomeRecords = getAllIncomeRecords;
/**
 * Get an income record by ID
 * @route GET  /income_records/:id
 */
const getIncomeRecordById = async (req, res) => {
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
exports.getIncomeRecordById = getIncomeRecordById;
/**
 * Create a new income record
 * @route POST  /income_records
 */
const createIncomeRecord = async (req, res) => {
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
exports.createIncomeRecord = createIncomeRecord;
/**
 * Update an existing income record
 * @route PUT  /income_records/:id
 */
const updateIncomeRecord = async (req, res) => {
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
exports.updateIncomeRecord = updateIncomeRecord;
/**
 * Delete an income record
 * @route DELETE  /income_records/:id
 */
const deleteIncomeRecord = async (req, res) => {
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
exports.deleteIncomeRecord = deleteIncomeRecord;
//# sourceMappingURL=income-record.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenseCategory = exports.updateExpenseCategory = exports.createExpenseCategory = exports.getExpenseCategoryById = exports.getAllExpenseCategories = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("expense_categories");
/**
 * Get all expense categories
 * @route GET  /expense_categories
 */
const getAllExpenseCategories = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllExpenseCategories = getAllExpenseCategories;
/**
 * Get an expense category by ID
 * @route GET  /expense_categories/:id
 */
const getExpenseCategoryById = async (req, res) => {
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
exports.getExpenseCategoryById = getExpenseCategoryById;
/**
 * Create a new expense category
 * @route POST  /expense_categories
 */
const createExpenseCategory = async (req, res) => {
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
exports.createExpenseCategory = createExpenseCategory;
/**
 * Update an existing expense category
 * @route PUT  /expense_categories/:id
 */
const updateExpenseCategory = async (req, res) => {
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
exports.updateExpenseCategory = updateExpenseCategory;
/**
 * Delete an expense category
 * @route DELETE  /expense_categories/:id
 */
const deleteExpenseCategory = async (req, res) => {
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
exports.deleteExpenseCategory = deleteExpenseCategory;
//# sourceMappingURL=expense-categories.js.map
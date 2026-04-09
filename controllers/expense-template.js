"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenseTemplate = exports.updateExpenseTemplate = exports.createExpenseTemplate = exports.getExpenseTemplateById = exports.getAllExpenseTemplates = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("expense_templates");
/**
 * Get all expense templates
 * @route GET  /expense_templates
 */
const getAllExpenseTemplates = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllExpenseTemplates = getAllExpenseTemplates;
/**
 * Get an expense template by ID
 * @route GET  /expense_templates/:id
 */
const getExpenseTemplateById = async (req, res) => {
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
exports.getExpenseTemplateById = getExpenseTemplateById;
/**
 * Create a new expense template
 * @route POST  /expense_templates
 */
const createExpenseTemplate = async (req, res) => {
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
exports.createExpenseTemplate = createExpenseTemplate;
/**
 * Update an existing expense template
 * @route PUT  /expense_templates/:id
 */
const updateExpenseTemplate = async (req, res) => {
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
exports.updateExpenseTemplate = updateExpenseTemplate;
/**
 * Delete an expense template
 * @route DELETE  /expense_templates/:id
 */
const deleteExpenseTemplate = async (req, res) => {
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
exports.deleteExpenseTemplate = deleteExpenseTemplate;
//# sourceMappingURL=expense-template.js.map
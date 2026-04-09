"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncomeCategory = exports.updateIncomeCategory = exports.createIncomeCategory = exports.getIncomeCategoryById = exports.getAllIncomeCategories = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("income_categories");
/**
 * Get all income categories
 * @route GET  /income_categories
 */
const getAllIncomeCategories = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllIncomeCategories = getAllIncomeCategories;
/**
 * Get an income category by ID
 * @route GET  /income_categories/:id
 */
const getIncomeCategoryById = async (req, res) => {
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
exports.getIncomeCategoryById = getIncomeCategoryById;
/**
 * Create a new income category
 * @route POST  /income_categories
 */
const createIncomeCategory = async (req, res) => {
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
exports.createIncomeCategory = createIncomeCategory;
/**
 * Update an existing income category
 * @route PUT  /income_categories/:id
 */
const updateIncomeCategory = async (req, res) => {
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
exports.updateIncomeCategory = updateIncomeCategory;
/**
 * Delete an income category
 * @route DELETE  /income_categories/:id
 */
const deleteIncomeCategory = async (req, res) => {
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
exports.deleteIncomeCategory = deleteIncomeCategory;
//# sourceMappingURL=income-categories.js.map
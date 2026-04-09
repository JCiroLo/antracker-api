"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncomeTemplate = exports.updateIncomeTemplate = exports.createIncomeTemplate = exports.getIncomeTemplateById = exports.getAllIncomeTemplates = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("income_templates");
/**
 * Get all income templates
 * @route GET  /income_templates
 */
const getAllIncomeTemplates = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllIncomeTemplates = getAllIncomeTemplates;
/**
 * Get an income template by ID
 * @route GET  /income_templates/:id
 */
const getIncomeTemplateById = async (req, res) => {
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
exports.getIncomeTemplateById = getIncomeTemplateById;
/**
 * Create a new income template
 * @route POST  /income_templates
 */
const createIncomeTemplate = async (req, res) => {
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
exports.createIncomeTemplate = createIncomeTemplate;
/**
 * Update an existing income template
 * @route PUT  /income_templates/:id
 */
const updateIncomeTemplate = async (req, res) => {
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
exports.updateIncomeTemplate = updateIncomeTemplate;
/**
 * Delete an income template
 * @route DELETE  /income_templates/:id
 */
const deleteIncomeTemplate = async (req, res) => {
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
exports.deleteIncomeTemplate = deleteIncomeTemplate;
//# sourceMappingURL=income-template.js.map
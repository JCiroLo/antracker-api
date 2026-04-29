"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;
const supabase_1 = __importDefault(require("../lib/supabase"));
const table = supabase_1.default.from("categories");
const getAllCategories = async (req, res) => {
    const userId = req.user.uid;
    const { data, error } = await table.select("*").eq("user_id", userId);
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(200).json(data);
};
exports.getAllCategories = getAllCategories;
const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await table.select("*").eq("id", id).single();
    if (error) {
        res.status(404).json({ error: error.message });
        return;
    }
    res.status(200).json(data);
};
exports.getCategoryById = getCategoryById;
const createCategory = async (req, res) => {
    const userId = req.user.uid;
    const body = { ...req.body, user_id: userId };
    const { data, error } = await table.insert(body).select().single();
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    res.status(201).json(data);
};
exports.createCategory = createCategory;
const updateCategory = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const { data, error } = await table.update(body).eq("id", id).select().single();
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    res.status(200).json(data);
};
exports.updateCategory = updateCategory;
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    const { error } = await table.delete().eq("id", id);
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    res.status(200).json({
        error: {
            message: `Record ${id} was successfully removed`,
        },
    });
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categories.js.map
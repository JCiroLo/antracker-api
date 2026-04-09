"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("users");
/**
 * Get all users
 * @route GET  /users
 */
const getAllUsers = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        const response = { error: error.message };
        res.status(500).json(response);
        return;
    }
    const response = { data };
    res.status(200).json(response);
};
exports.getAllUsers = getAllUsers;
/**
 * Get a user by ID
 * @route GET  /users/:id
 */
const getUserById = async (req, res) => {
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
exports.getUserById = getUserById;
/**
 * Create a new user
 * @route POST  /users
 */
const createUser = async (req, res) => {
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
exports.createUser = createUser;
/**
 * Update an existing user
 * @route PUT  /users/:id
 */
const updateUser = async (req, res) => {
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
exports.updateUser = updateUser;
/**
 * Delete a user
 * @route DELETE  /users/:id
 */
const deleteUser = async (req, res) => {
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
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map
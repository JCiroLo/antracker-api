"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const supabase_1 = __importDefault(require("../lib/supabase"));
const errors_1 = require("../lib/errors");
const table = supabase_1.default.from("users");
const getAllUsers = async (_req, res) => {
    const { data, error } = await table.select("*");
    if (error) {
        res.status(errors_1.InternalServerError.code).json({ error: errors_1.InternalServerError.error });
        return;
    }
    res.status(200).json({ data });
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await table.select("*").eq("id", id).single();
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(200).json({ data });
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    const body = req.body;
    const { data, error } = await table.insert(body).select().single();
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(201).json({ data });
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const { data, error } = await table.update(body).eq("id", id).select().single();
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(200).json({ data });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { error } = await table.delete().eq("id", id);
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(200).json({
        error: {
            message: `Record ${id} was successfully removed`,
        },
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map
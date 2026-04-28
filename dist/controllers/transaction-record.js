"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransactionRecord = exports.updateTransactionRecord = exports.createTransactionRecord = exports.getTransactionRecordById = exports.getAllTransactionRecords = void 0;
const supabase_1 = __importDefault(require("@lib/supabase"));
const table = supabase_1.default.from("transaction_records");
const getAllTransactionRecords = async (req, res) => {
    const userId = req.user.uid;
    const { limit, offset } = req.query;
    const { data, error } = await table
        .select("*, template:transaction_templates(*)")
        .eq("user_id", userId)
        .range(Number(offset), Number(limit) + Number(offset))
        .order("created_at", { ascending: false });
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(200).json(data);
};
exports.getAllTransactionRecords = getAllTransactionRecords;
const getTransactionRecordById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await table.select("*, template:transaction_templates(*)").eq("id", id).single();
    if (error) {
        res.status(404).json({ error: error.message });
        return;
    }
    res.status(200).json(data);
};
exports.getTransactionRecordById = getTransactionRecordById;
const createTransactionRecord = async (req, res) => {
    const body = req.body;
    const { data, error } = await table.insert(body).select("*, template:transaction_templates(*)").single();
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    res.status(201).json(data);
};
exports.createTransactionRecord = createTransactionRecord;
const updateTransactionRecord = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const { data, error } = await table.update(body).eq("id", id).select("*, template:transaction_templates(*)").single();
    if (error) {
        res.status(400).json({ error: error.message });
        return;
    }
    res.status(200).json(data);
};
exports.updateTransactionRecord = updateTransactionRecord;
const deleteTransactionRecord = async (req, res) => {
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
exports.deleteTransactionRecord = deleteTransactionRecord;
//# sourceMappingURL=transaction-record.js.map
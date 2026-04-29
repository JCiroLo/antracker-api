"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransactionTemplate = exports.updateTransactionTemplate = exports.createTransactionTemplate = exports.getTransactionTemplateById = exports.getAllTransactionTemplates = void 0;
const supabase_1 = __importStar(require("../lib/supabase"));
const env_1 = require("../lib/env");
const errors_1 = require("../lib/errors");
const object_utils_1 = require("../utils/object-utils");
const table = supabase_1.default.from("transaction_templates");
const getAllTransactionTemplates = async (req, res) => {
    const userId = req.user.uid;
    const { data, error } = await (0, supabase_1.rpc)("get_transactions_with_status", {
        p_user_id: userId,
        p_days_threshold: env_1.app.maxDaysExpirationWarning,
    });
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(200).json(data);
};
exports.getAllTransactionTemplates = getAllTransactionTemplates;
const getTransactionTemplateById = async (req, res) => {
    const userId = req.user.uid;
    const { id } = req.params;
    const { data, error } = await (0, supabase_1.rpc)("get_transactions_with_status", {
        p_user_id: userId,
        p_days_threshold: env_1.app.maxDaysExpirationWarning,
        p_template_id: id,
    });
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(200).json(data);
};
exports.getTransactionTemplateById = getTransactionTemplateById;
const createTransactionTemplate = async (req, res) => {
    const userId = req.user.uid;
    const body = req.body;
    (0, object_utils_1.deleteFields)(body, ["id", "created_at"]);
    const inserted = await table.insert(body).select().single();
    if (inserted.error) {
        res.status(errors_1.BadRequestError.code).json({ error: errors_1.BadRequestError.error });
        return;
    }
    const { data, error } = await (0, supabase_1.rpc)("get_transactions_with_status", {
        p_user_id: userId,
        p_days_threshold: env_1.app.maxDaysExpirationWarning,
        p_template_id: inserted.data.id,
    });
    if (error) {
        res.status(errors_1.NotFoundError.code).json({ error: errors_1.NotFoundError.error });
        return;
    }
    res.status(201).json(data);
};
exports.createTransactionTemplate = createTransactionTemplate;
const updateTransactionTemplate = async (req, res) => {
    const userId = req.user.uid;
    const { id } = req.params;
    const body = req.body;
    (0, object_utils_1.deleteFields)(body, ["id", "created_at"]);
    const updated = await table.update(body).eq("id", id).select().single();
    if (updated.error) {
        res.status(errors_1.BadRequestError.code).json({ error: errors_1.BadRequestError.error });
        return;
    }
    const { data, error } = await (0, supabase_1.rpc)("get_transactions_with_status", {
        p_user_id: userId,
        p_days_threshold: env_1.app.maxDaysExpirationWarning,
        p_template_id: id,
    });
    if (error) {
        res.status(errors_1.BadRequestError.code).json({ error: errors_1.BadRequestError.error });
        return;
    }
    res.status(200).json(data);
};
exports.updateTransactionTemplate = updateTransactionTemplate;
const deleteTransactionTemplate = async (req, res) => {
    const { id } = req.params;
    const { error } = await table.delete().eq("id", id);
    if (error) {
        res.status(errors_1.BadRequestError.code).json({ error: errors_1.BadRequestError.error });
        return;
    }
    res.status(200).json({
        error: {
            message: `Record ${id} was successfully removed`,
        },
    });
};
exports.deleteTransactionTemplate = deleteTransactionTemplate;
//# sourceMappingURL=transaction-template.js.map
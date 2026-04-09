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
const express_1 = require("express");
const Controller = __importStar(require("@controllers/expense-record"));
const router = (0, express_1.Router)();
/**
 * @route   GET  /expense_records
 * @desc    Get all expense records
 * @returns { data: ExpenseRecord[] }
 */
router.get("/", Controller.getAllExpenseRecords);
/**
 * @route   GET  /expense_records/:id
 * @desc    Get an expense record by ID
 * @returns { data: ExpenseRecord }
 */
router.get("/:id", Controller.getExpenseRecordById);
/**
 * @route   POST  /expense_records
 * @desc    Create a new expense record
 * @body    { template_id?, user_id, name, category, amount, description?, date }
 * @returns { data: ExpenseRecord }
 */
router.post("/", Controller.createExpenseRecord);
/**
 * @route   PUT  /expense_records/:id
 * @desc    Update an existing expense record
 * @body    Partial fields of ExpenseRecord
 * @returns { data: ExpenseRecord }
 */
router.put("/:id", Controller.updateExpenseRecord);
/**
 * @route   DELETE  /expense_records/:id
 * @desc    Delete an expense record
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteExpenseRecord);
exports.default = router;
//# sourceMappingURL=expense-records.js.map
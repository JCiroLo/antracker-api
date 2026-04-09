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
const Controller = __importStar(require("@controllers/income-categories"));
const router = (0, express_1.Router)();
/**
 * @route   GET  /income_categories
 * @desc    Get all income categories
 * @returns { data: IncomeCategory[] }
 */
router.get("/", Controller.getAllIncomeCategories);
/**
 * @route   GET  /income_categories/:id
 * @desc    Get an income category by ID
 * @returns { data: IncomeCategory }
 */
router.get("/:id", Controller.getIncomeCategoryById);
/**
 * @route   POST  /income_categories
 * @desc    Create a new income category
 * @body    { name, color, user_id }
 * @returns { data: IncomeCategory }
 */
router.post("/", Controller.createIncomeCategory);
/**
 * @route   PUT  /income_categories/:id
 * @desc    Update an existing income category
 * @body    Partial fields of IncomeCategory
 * @returns { data: IncomeCategory }
 */
router.put("/:id", Controller.updateIncomeCategory);
/**
 * @route   DELETE  /income_categories/:id
 * @desc    Delete an income category
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteIncomeCategory);
exports.default = router;
//# sourceMappingURL=income-categories.js.map
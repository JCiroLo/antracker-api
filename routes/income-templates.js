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
const Controller = __importStar(require("@controllers/income-template"));
const router = (0, express_1.Router)();
/**
 * @route   GET  /income_templates
 * @desc    Get all income templates
 * @returns { data: IncomeTemplate[] }
 */
router.get("/", Controller.getAllIncomeTemplates);
/**
 * @route   GET  /income_templates/:id
 * @desc    Get an income template by ID
 * @returns { data: IncomeTemplate }
 */
router.get("/:id", Controller.getIncomeTemplateById);
/**
 * @route   POST  /income_templates
 * @desc    Create a new income template
 * @body    { name, source, amount, description?, is_recurring }
 * @returns { data: IncomeTemplate }
 */
router.post("/", Controller.createIncomeTemplate);
/**
 * @route   PUT  /income_templates/:id
 * @desc    Update an existing income template
 * @body    Partial fields of IncomeTemplate
 * @returns { data: IncomeTemplate }
 */
router.put("/:id", Controller.updateIncomeTemplate);
/**
 * @route   DELETE  /income_templates/:id
 * @desc    Delete an income template
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteIncomeTemplate);
exports.default = router;
//# sourceMappingURL=income-templates.js.map
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
const Controller = __importStar(require("@controllers/users"));
const router = (0, express_1.Router)();
/**
 * @route   GET  /users
 * @desc    Get all users
 * @returns { data: User[] }
 */
router.get("/", Controller.getAllUsers);
/**
 * @route   GET  /users/:id
 * @desc    Get a user by ID
 * @returns { data: User }
 */
router.get("/:id", Controller.getUserById);
/**
 * @route   POST  /users
 * @desc    Create a new user
 * @body    { email, full_name, avatar_url?, role }
 * @returns { data: User }
 */
router.post("/", Controller.createUser);
/**
 * @route   PUT  /users/:id
 * @desc    Update an existing user
 * @body    Partial fields of User
 * @returns { data: User }
 */
router.put("/:id", Controller.updateUser);
/**
 * @route   DELETE  /users/:id
 * @desc    Delete a user
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map
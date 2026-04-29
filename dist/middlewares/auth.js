"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFirebaseToken = void 0;
const firebase_1 = __importDefault(require("../lib/firebase"));
const errors_1 = require("../lib/errors");
const verifyFirebaseToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(errors_1.AuthError.code).json(errors_1.AuthError.error);
    }
    const token = authHeader.split("Bearer ")[1];
    try {
        const decoded = await firebase_1.default.auth().verifyIdToken(token);
        if (!decoded) {
            return res.status(errors_1.AuthError.code).json(errors_1.AuthError.error);
        }
        req.user = decoded;
        next();
    }
    catch {
        return res.status(errors_1.AuthError.code).json(errors_1.AuthError.error);
    }
};
exports.verifyFirebaseToken = verifyFirebaseToken;
//# sourceMappingURL=auth.js.map
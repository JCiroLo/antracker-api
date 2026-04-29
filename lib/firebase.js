"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const env_1 = require("@lib/env");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(env_1.firebase),
});
exports.default = firebase_admin_1.default;
//# sourceMappingURL=firebase.js.map
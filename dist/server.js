"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/app"));
const env_1 = require("@lib/env");
if (!env_1.app.port) {
    throw new Error("The PORT environment variable is missing from the .env file.");
}
if (!env_1.app.apiUrl) {
    throw new Error("The API_URL environment variable is missing from the .env file.");
}
app_1.default.listen(env_1.app.port, () => {
    console.log(`Server running at ${env_1.app.apiUrl}:${env_1.app.port}`);
});
//# sourceMappingURL=server.js.map
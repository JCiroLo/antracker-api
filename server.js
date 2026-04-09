"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/app"));
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;
if (!PORT) {
    throw new Error("The PORT environment variable is missing from the .env file.");
}
if (!API_URL) {
    throw new Error("The API_URL environment variable is missing from the .env file.");
}
app_1.default.listen(PORT, () => {
    console.log(`Server running at ${API_URL}:${PORT}`);
});
//# sourceMappingURL=server.js.map
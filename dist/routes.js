"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = registerRouter;
const express_1 = require("express");
const expense_templates_1 = __importDefault(require("@routes/expense-templates"));
const expense_records_1 = __importDefault(require("@routes/expense-records"));
const expense_categories_1 = __importDefault(require("@routes/expense-categories"));
const income_templates_1 = __importDefault(require("@routes/income-templates"));
const income_records_1 = __importDefault(require("@routes/income-records"));
const income_categories_1 = __importDefault(require("@routes/income-categories"));
const users_1 = __importDefault(require("@routes/users"));
function createV1Router() {
    const router = (0, express_1.Router)();
    router.use("/expense-templates", expense_templates_1.default);
    router.use("/expense-categories", expense_categories_1.default);
    router.use("/expense-records", expense_records_1.default);
    router.use("/income-templates", income_templates_1.default);
    router.use("/income-categories", income_categories_1.default);
    router.use("/income-records", income_records_1.default);
    router.use("/users", users_1.default);
    return router;
}
function registerRouter(app) {
    app.use("/v1", createV1Router());
}
//# sourceMappingURL=routes.js.map
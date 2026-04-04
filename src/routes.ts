import { Application } from "express";

import expenseTemplatesRouter from "./routes/expense-templates";
import expenseRecordsRouter from "./routes/expense-records";
import expenseCategoriesRouter from "./routes/expense-categories";
import incomeTemplatesRouter from "./routes/income-templates";
import incomeRecordsRouter from "./routes/income-records";
import incomeCategoriesRouter from "./routes/income-categories";
import usersRouter from "./routes/users";

// ─── Routes /api ───────────────────────────────────────────────────────────────

export function registerRouter(app: Application): void {
  app.use("/api/expense_templates", expenseTemplatesRouter);
  app.use("/api/expense_categories", expenseCategoriesRouter);
  app.use("/api/expense_records", expenseRecordsRouter);
  app.use("/api/income_templates", incomeTemplatesRouter);
  app.use("/api/income_categories", incomeCategoriesRouter);
  app.use("/api/income_records", incomeRecordsRouter);
  app.use("/api/users", usersRouter);
}

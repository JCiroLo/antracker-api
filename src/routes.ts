import { Application } from "express";
import expenseTemplatesRouter from "@routes/expense-templates";
import expenseRecordsRouter from "@routes/expense-records";
import expenseCategoriesRouter from "@routes/expense-categories";
import incomeTemplatesRouter from "@routes/income-templates";
import incomeRecordsRouter from "@routes/income-records";
import incomeCategoriesRouter from "@routes/income-categories";
import usersRouter from "@routes/users";

export function registerRouter(app: Application): void {
  app.use("/v1/expense-templates", expenseTemplatesRouter);
  app.use("/v1/expense-categories", expenseCategoriesRouter);
  app.use("/v1/expense-records", expenseRecordsRouter);
  app.use("/v1/income-templates", incomeTemplatesRouter);
  app.use("/v1/income-categories", incomeCategoriesRouter);
  app.use("/v1/income-records", incomeRecordsRouter);
  app.use("/v1/users", usersRouter);
}

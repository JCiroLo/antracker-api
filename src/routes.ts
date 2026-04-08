import { Application, Router } from "express";
import expenseTemplatesRouter from "@routes/expense-templates";
import expenseRecordsRouter from "@routes/expense-records";
import expenseCategoriesRouter from "@routes/expense-categories";
import incomeTemplatesRouter from "@routes/income-templates";
import incomeRecordsRouter from "@routes/income-records";
import incomeCategoriesRouter from "@routes/income-categories";
import usersRouter from "@routes/users";

function createV1Router(): Router {
  const router = Router();

  router.use("/expense-templates", expenseTemplatesRouter);
  router.use("/expense-categories", expenseCategoriesRouter);
  router.use("/expense-records", expenseRecordsRouter);
  router.use("/income-templates", incomeTemplatesRouter);
  router.use("/income-categories", incomeCategoriesRouter);
  router.use("/income-records", incomeRecordsRouter);
  router.use("/users", usersRouter);

  return router;
}

export function registerRouter(app: Application): void {
  app.use("/v1", createV1Router());
}

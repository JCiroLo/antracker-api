import { Application, Router } from "express";
import categoriesRouter from "@routes/categories";
import transactionTemplatesRouter from "@routes/transaction-templates";
import transactionRecordsRouter from "@routes/transaction-records";
import usersRouter from "@routes/users";

import { verifyFirebaseToken } from "@middlewares/auth";

function createV1Router(): Router {
  const router = Router();

  router.use("/categories", categoriesRouter);
  router.use("/transaction-templates", transactionTemplatesRouter);
  router.use("/transaction-records", transactionRecordsRouter);
  router.use("/users", usersRouter);

  return router;
}

export function registerRouter(app: Application): void {
  app.use("/v1", verifyFirebaseToken, createV1Router());
}

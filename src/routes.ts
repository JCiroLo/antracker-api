import { Application, Router } from "express";
import categoriesRouter, { path as categoriesPath } from "@routes/categories";
import transactionTemplatesRouter, { path as transactionTemplatesPath } from "@routes/transaction-templates";
import transactionRecordsRouter, { path as transactionRecordsPath } from "@routes/transaction-records";
import usersRouter, { path as usersPath } from "@routes/users";

import { verifyFirebaseToken } from "@middlewares/auth";

function createV1Router(): Router {
  const router = Router();

  router.use(categoriesPath, categoriesRouter);
  router.use(transactionTemplatesPath, transactionTemplatesRouter);
  router.use(transactionRecordsPath, transactionRecordsRouter);
  router.use(usersPath, usersRouter);

  return router;
}

export function registerRouter(app: Application): void {
  app.use("/v1", verifyFirebaseToken, createV1Router());
}

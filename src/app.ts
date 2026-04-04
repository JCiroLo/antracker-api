import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

import expenseTemplatesRouter from "./routes/expenseTemplates";
import expenseRecordsRouter from "./routes/expenseRecords";
import expenseCategoriesRouter from "./routes/expenseCategories";
import incomeTemplatesRouter from "./routes/incomeTemplates";
import incomeRecordsRouter from "./routes/incomeRecords";
import incomeCategoriesRouter from "./routes/incomeCategories";
import usersRouter from "./routes/users";

dotenv.config();

const app: Application = express();

// ─── Middlewares globales ──────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Health check ─────────────────────────────────────────────────────────────
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Rutas /api ───────────────────────────────────────────────────────────────
app.use("/api/expense_templates", expenseTemplatesRouter);
app.use("/api/expense_categories", expenseCategoriesRouter);
app.use("/api/expense_records", expenseRecordsRouter);
app.use("/api/income_templates", incomeTemplatesRouter);
app.use("/api/income_categories", incomeCategoriesRouter);
app.use("/api/income_records", incomeRecordsRouter);
app.use("/api/users", usersRouter);

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// ─── Error handler global ─────────────────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("[Error]", err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});

export default app;

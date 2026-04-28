import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/transaction-template";

const router: ExpressRouter = Router();

router.get("/", Controller.getAllTransactionTemplates);
router.get("/:id", Controller.getTransactionTemplateById);
router.post("/", Controller.createTransactionTemplate);
router.put("/:id", Controller.updateTransactionTemplate);
router.delete("/:id", Controller.deleteTransactionTemplate);

export const path = "/transaction-templates";
export default router;

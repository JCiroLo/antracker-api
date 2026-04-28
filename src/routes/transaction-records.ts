import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/transaction-record";

const router: ExpressRouter = Router();

router.get("/", Controller.getAllTransactionRecords);
router.get("/:id", Controller.getTransactionRecordById);
router.post("/", Controller.createTransactionRecord);
router.put("/:id", Controller.updateTransactionRecord);
router.delete("/:id", Controller.deleteTransactionRecord);

export const path = "/transaction-records";
export default router;

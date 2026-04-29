import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "../controllers/categories";

const router: ExpressRouter = Router();

router.get("/", Controller.getAllCategories);
router.get("/:id", Controller.getCategoryById);
router.post("/", Controller.createCategory);
router.put("/:id", Controller.updateCategory);
router.delete("/:id", Controller.deleteCategory);

export const path = "/categories";
export default router;

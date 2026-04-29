import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "../controllers/users";

const router: ExpressRouter = Router();

router.get("/", Controller.getAllUsers);
router.get("/:id", Controller.getUserById);
router.post("/", Controller.createUser);
router.put("/:id", Controller.updateUser);
router.delete("/:id", Controller.deleteUser);

export const path = "/users";
export default router;

import { Router, type Router as ExpressRouter } from "express";
import { createCrudController } from "../controllers/crud-controller";

const router: ExpressRouter = Router();
const ctrl = createCrudController("users");

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @returns { data: User[] }
 */
router.get("/", ctrl.getAll);

/**
 * @route   GET /api/users/:id
 * @desc    Get a user by ID
 * @returns { data: User }
 */
router.get("/:id", ctrl.getById);

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @body    { email, full_name, avatar_url?, role }
 * @returns { data: User }
 */
router.post("/", ctrl.create);

/**
 * @route   PUT /api/users/:id
 * @desc    Update an existing user
 * @body    Partial fields of User
 * @returns { data: User }
 */
router.put("/:id", ctrl.update);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user
 * @returns { message: string }
 */
router.delete("/:id", ctrl.remove);

export default router;

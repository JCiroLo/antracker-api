import { Router, type Router as ExpressRouter } from "express";
import * as Controller from "@controllers/users";

const router: ExpressRouter = Router();

/**
 * @route   GET  /users
 * @desc    Get all users
 * @returns { data: User[] }
 */
router.get("/", Controller.getAllUsers);

/**
 * @route   GET  /users/:id
 * @desc    Get a user by ID
 * @returns { data: User }
 */
router.get("/:id", Controller.getUserById);

/**
 * @route   POST  /users
 * @desc    Create a new user
 * @body    { email, full_name, avatar_url?, role }
 * @returns { data: User }
 */
router.post("/", Controller.createUser);

/**
 * @route   PUT  /users/:id
 * @desc    Update an existing user
 * @body    Partial fields of User
 * @returns { data: User }
 */
router.put("/:id", Controller.updateUser);

/**
 * @route   DELETE  /users/:id
 * @desc    Delete a user
 * @returns { message: string }
 */
router.delete("/:id", Controller.deleteUser);

export default router;

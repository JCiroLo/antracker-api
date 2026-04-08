import { Router, type Router as ExpressRouter } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "@controllers/user-controller";

const router: ExpressRouter = Router();

/**
 * @route   GET  /users
 * @desc    Get all users
 * @returns { data: User[] }
 */
router.get("/", getAllUsers);

/**
 * @route   GET  /users/:id
 * @desc    Get a user by ID
 * @returns { data: User }
 */
router.get("/:id", getUserById);

/**
 * @route   POST  /users
 * @desc    Create a new user
 * @body    { email, full_name, avatar_url?, role }
 * @returns { data: User }
 */
router.post("/", createUser);

/**
 * @route   PUT  /users/:id
 * @desc    Update an existing user
 * @body    Partial fields of User
 * @returns { data: User }
 */
router.put("/:id", updateUser);

/**
 * @route   DELETE  /users/:id
 * @desc    Delete a user
 * @returns { message: string }
 */
router.delete("/:id", deleteUser);

export default router;

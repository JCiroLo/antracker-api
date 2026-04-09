import { Request, Response } from "express";
/**
 * Get all users
 * @route GET  /users
 */
export declare const getAllUsers: (_req: Request, res: Response) => Promise<void>;
/**
 * Get a user by ID
 * @route GET  /users/:id
 */
export declare const getUserById: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new user
 * @route POST  /users
 */
export declare const createUser: (req: Request, res: Response) => Promise<void>;
/**
 * Update an existing user
 * @route PUT  /users/:id
 */
export declare const updateUser: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a user
 * @route DELETE  /users/:id
 */
export declare const deleteUser: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=users.d.ts.map
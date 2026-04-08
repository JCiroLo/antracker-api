import { Request, Response } from "express";
import supabase from "@lib/supabase";
import { ApiResponse } from "@/types/entities";

/**
 * Get all users
 * @route GET  /users
 */
export const getAllUsers = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(500).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Get a user by ID
 * @route GET  /users/:id
 */
export const getUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(404).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Create a new user
 * @route POST  /users
 */
export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const body = req.body;

  const { data, error } = await supabase
    .from("users")
    .insert(body)
    .select()
    .single();

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(400).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(201).json(response);
};

/**
 * Update an existing user
 * @route PUT  /users/:id
 */
export const updateUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await supabase
    .from("users")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(400).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Delete a user
 * @route DELETE  /users/:id
 */
export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(400).json(response);
    return;
  }

  const response: ApiResponse<null> = {
    message: `Registro ${id} eliminado correctamente`,
  };
  res.status(200).json(response);
};

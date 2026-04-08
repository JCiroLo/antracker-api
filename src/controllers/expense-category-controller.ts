import { Request, Response } from "express";
import supabase from "@lib/supabase";
import { ApiResponse } from "@/types/entities";

/**
 * Get all expense categories
 * @route GET  /expense_categories
 */
export const getAllExpenseCategories = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const { data, error } = await supabase.from("expense_categories").select("*");

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(500).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Get an expense category by ID
 * @route GET  /expense_categories/:id
 */
export const getExpenseCategoryById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("expense_categories")
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
 * Create a new expense category
 * @route POST  /expense_categories
 */
export const createExpenseCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const body = req.body;

  const { data, error } = await supabase
    .from("expense_categories")
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
 * Update an existing expense category
 * @route PUT  /expense_categories/:id
 */
export const updateExpenseCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await supabase
    .from("expense_categories")
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
 * Delete an expense category
 * @route DELETE  /expense_categories/:id
 */
export const deleteExpenseCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const { error } = await supabase
    .from("expense_categories")
    .delete()
    .eq("id", id);

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

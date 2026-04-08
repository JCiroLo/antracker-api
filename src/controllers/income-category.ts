import { Request, Response } from "express";
import supabase from "@lib/supabase";
import { ApiResponse } from "@/types/entities";

/**
 * Get all income categories
 * @route GET  /income_categories
 */
export const getAllIncomeCategories = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const { data, error } = await supabase.from("income_categories").select("*");

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(500).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Get an income category by ID
 * @route GET  /income_categories/:id
 */
export const getIncomeCategoryById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("income_categories")
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
 * Create a new income category
 * @route POST  /income_categories
 */
export const createIncomeCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const body = req.body;

  const { data, error } = await supabase
    .from("income_categories")
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
 * Update an existing income category
 * @route PUT  /income_categories/:id
 */
export const updateIncomeCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await supabase
    .from("income_categories")
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
 * Delete an income category
 * @route DELETE  /income_categories/:id
 */
export const deleteIncomeCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const { error } = await supabase
    .from("income_categories")
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

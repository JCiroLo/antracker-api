import { Request, Response } from "express";
import supabase from "@lib/supabase";
import { ApiResponse } from "@/types/entities";

const table = supabase.from("income_records");

/**
 * Get all income records
 * @route GET  /income_records
 */
export const getAllIncomeRecords = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await table.select("*");

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(500).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Get an income record by ID
 * @route GET  /income_records/:id
 */
export const getIncomeRecordById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await table.select("*").eq("id", id).single();

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(404).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Create a new income record
 * @route POST  /income_records
 */
export const createIncomeRecord = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  const { data, error } = await table.insert(body).select().single();

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(400).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(201).json(response);
};

/**
 * Update an existing income record
 * @route PUT  /income_records/:id
 */
export const updateIncomeRecord = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await table.update(body).eq("id", id).select().single();

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(400).json(response);
    return;
  }

  const response: ApiResponse<typeof data> = { data };
  res.status(200).json(response);
};

/**
 * Delete an income record
 * @route DELETE  /income_records/:id
 */
export const deleteIncomeRecord = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { error } = await table.delete().eq("id", id);

  if (error) {
    const response: ApiResponse<null> = { error: error.message };
    res.status(400).json(response);
    return;
  }

  const response: ApiResponse<null> = {
    message: `Record ${id} was successfully removed`,
  };
  res.status(200).json(response);
};

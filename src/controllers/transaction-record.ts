import { Request, Response } from "express";
import supabase from "@lib/supabase";

const table = supabase.from("transaction_records");

export const getAllTransactionRecords = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;
  const { limit, offset } = req.query;

  const { data, error } = await table
    .select("*, template:transaction_templates(*)")
    .eq("user_id", userId)
    .range(Number(offset), Number(limit) + Number(offset))
    .order("created_at", { ascending: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

export const getTransactionRecordById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await table.select("*, template:transaction_templates(*)").eq("id", id).single();

  if (error) {
    res.status(404).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

export const createTransactionRecord = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  const { data, error } = await table.insert(body).select("*, template:transaction_templates(*)").single();

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.status(201).json(data);
};

export const updateTransactionRecord = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await table.update(body).eq("id", id).select("*, template:transaction_templates(*)").single();

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

export const deleteTransactionRecord = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { error } = await table.delete().eq("id", id);

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.status(200).json({
    message: `Record ${id} was successfully removed`,
  });
};

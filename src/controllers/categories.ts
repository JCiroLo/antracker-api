import { Request, Response } from "express";
import supabase from "../lib/supabase";

const table = supabase.from("categories");

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;

  const { data, error } = await table.select("*").eq("user_id", userId);

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await table.select("*").eq("id", id).single();

  if (error) {
    res.status(404).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

export const createCategory = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;
  const body = { ...req.body, user_id: userId };

  const { data, error } = await table.insert(body).select().single();

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.status(201).json(data);
};

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await table.update(body).eq("id", id).select().single();

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { error } = await table.delete().eq("id", id);

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.status(200).json({
    error: {
      message: `Record ${id} was successfully removed`,
    },
  });
};

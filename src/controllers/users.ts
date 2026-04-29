import { Request, Response } from "express";
import supabase from "../lib/supabase";
import { InternalServerError, NotFoundError } from "../lib/errors";

const table = supabase.from("users");

export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await table.select("*");

  if (error) {
    res.status(InternalServerError.code).json({ error: InternalServerError.error });
    return;
  }

  res.status(200).json({ data });
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await table.select("*").eq("id", id).single();

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(200).json({ data });
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  const { data, error } = await table.insert(body).select().single();

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(201).json({ data });
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  const { data, error } = await table.update(body).eq("id", id).select().single();

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(200).json({ data });
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { error } = await table.delete().eq("id", id);

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(200).json({
    error: {
      message: `Record ${id} was successfully removed`,
    },
  });
};

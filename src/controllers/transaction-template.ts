import { Request, Response } from "express";
import supabase, { rpc } from "@lib/supabase";
import { app as appEnv } from "@/lib/env";
import { BadRequestError, NotFoundError } from "@/lib/errors";
import { deleteFields } from "@/utils/object-utils";

const table = supabase.from("transaction_templates");

export const getAllTransactionTemplates = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;

  const { data, error } = await rpc("get_transactions_with_status", {
    p_user_id: userId,
    p_days_threshold: appEnv.maxDaysExpirationWarning,
  });

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(200).json(data);
};

export const getTransactionTemplateById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;
  const { id } = req.params;

  const { data, error } = await rpc("get_transactions_with_status", {
    p_user_id: userId,
    p_days_threshold: appEnv.maxDaysExpirationWarning,
    p_template_id: id,
  });

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(200).json(data);
};

export const createTransactionTemplate = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;
  const body = req.body;

  deleteFields(body, ["id", "created_at"]);

  const inserted = await table.insert(body).select().single();

  if (inserted.error) {
    res.status(BadRequestError.code).json({ error: BadRequestError.error });
    return;
  }

  const { data, error } = await rpc("get_transactions_with_status", {
    p_user_id: userId,
    p_days_threshold: appEnv.maxDaysExpirationWarning,
    p_template_id: inserted.data.id,
  });

  if (error) {
    res.status(NotFoundError.code).json({ error: NotFoundError.error });
    return;
  }

  res.status(201).json(data);
};

export const updateTransactionTemplate = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.uid;
  const { id } = req.params;
  const body = req.body;

  deleteFields(body, ["id", "created_at"]);

  const updated = await table.update(body).eq("id", id).select().single();

  if (updated.error) {
    res.status(BadRequestError.code).json({ error: BadRequestError.error });
    return;
  }

  const { data, error } = await rpc("get_transactions_with_status", {
    p_user_id: userId,
    p_days_threshold: appEnv.maxDaysExpirationWarning,
    p_template_id: id,
  });

  if (error) {
    res.status(BadRequestError.code).json({ error: BadRequestError.error });
    return;
  }

  res.status(200).json(data);
};

export const deleteTransactionTemplate = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { error } = await table.delete().eq("id", id);

  if (error) {
    res.status(BadRequestError.code).json({ error: BadRequestError.error });
    return;
  }

  res.status(200).json({
    message: `Record ${id} was successfully removed`,
  });
};

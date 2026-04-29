import { Request, Response, NextFunction } from "express";
import admin from "../lib/firebase";
import { AuthError } from "../lib/errors";

export const verifyFirebaseToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(AuthError.code).json(AuthError.error);
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);

    if (!decoded) {
      return res.status(AuthError.code).json(AuthError.error);
    }

    req.user = decoded;

    next();
  } catch {
    return res.status(AuthError.code).json(AuthError.error);
  }
};

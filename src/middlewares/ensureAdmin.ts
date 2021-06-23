import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  //Verificar usuario admin
  const admin = true;

  if (admin) return next();

  return res.status(401).json({
    error: "401 - User Unauthorized",
  });
}

import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) return res.status(401).end();

  const [, token] = bearerToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "29cd95a6f1ccd557f698affaff5f869d"
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}

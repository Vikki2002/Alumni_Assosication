import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};

export const roleAuth = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    next();
  };
};

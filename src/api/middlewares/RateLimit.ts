import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100, // renamed from "max"
  standardHeaders: "draft-7",
  legacyHeaders: false,
  handler: (_req: Request, res: Response) => {
    res.status(429).json({
      error: "Too many requests, please try again later."
    });
  }
});
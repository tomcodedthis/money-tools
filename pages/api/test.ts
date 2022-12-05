import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.json({ test: "test" });
};

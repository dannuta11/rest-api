export * from "./contact";
export * from "./posts";
export * from "./users";
export * from "./login";

import express, { Router, Request, Response } from "express";

export const index: Router = express.Router();

index.get("/", async (req: Request, res: Response) => {
  try {
    res.json({ message: "Hello World" });
  } catch (e) {
    res.json(e);
  }
});

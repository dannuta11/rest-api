import express, { Request, Response, Router } from "express";
import { Posts } from "../models/Posts.js";

export const authorRouter = express.Router();

authorRouter.get("/", async (req: Request, res: Response) => {
  const nume = req.body.name;
  const prenume = req.body.prenume;

  const allBlogs = await Posts.where("title").equals(`${nume}`);

  res.json(allBlogs);
});

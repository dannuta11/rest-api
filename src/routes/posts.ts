import express, { Express, Router, Request, Response } from "express";
import { Posts } from "../models/Posts.js";

export const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

router.get("/:id", (req: Request, res: Response) => {});

router.delete("/:id", (req: Request, res: Response) => {});

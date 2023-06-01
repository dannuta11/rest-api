import express, { Express, Router, Request, Response } from "express";
import { Posts } from "../models/Posts.js";

export const postRouter: Router = express.Router();

postRouter.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

postRouter.post("/", async (req: Request, res: Response) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    author: {
      name: req.body.author.name,
      prenume: req.body.author.prenume,
    },
    date: req.body.date,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

postRouter.get("/:id", async (req: Request, res: Response) => {
  const post = await Posts.findById(req.params.id);
  res.json(post);
});

postRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    await Posts.deleteOne({ _id: req.params.id });
  } catch (e) {
    res.json({ message: e });
  }
});

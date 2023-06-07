import express, { Express, Router, Request, Response } from "express";
import { Posts } from "../models/Posts.js";

export const postRouter: Router = express.Router();

postRouter.get("/", async (req: Request, res: Response) => {
  const query = req.query.blogs;

  if (query) {
    const dataSearch = await Posts.find({
      title: { $regex: "^" + query, $options: "i" },
    });
    res.json(dataSearch);
  } else {
    try {
      const posts = await Posts.find();
      res.json(posts);
    } catch (e) {
      res.json({ message: e });
    }
  }
});

postRouter.post("/", async (req: Request, res: Response) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    author: {
      firstName: req.body.author.firstName,
      lastName: req.body.author.lastName,
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
  try {
    const post = await Posts.findById(req.params.id);
    res.json(post);
  } catch (e) {
    res.json({ message: e });
  }
});

postRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    await Posts.deleteOne({ _id: req.params.id });
  } catch (e) {
    res.json({ message: e });
  }
});

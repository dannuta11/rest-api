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

router.get("/:id", async (req: Request, res: Response) => {
  const post = await Posts.findById(req.params.id);
  res.json(post);
});

router.get("/author", (req: Request, res: Response) => {
  //const name = req.body.name;
  // const prenume = req.body.prenume;

  res.json({
    name: `dan`,
    prenume: `nuta`,
  });
});

router.delete("/:id", (req: Request, res: Response) => {});

import express, { Router, Request, Response } from "express";
import { Posts } from "../models";

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
      name: req.body.author.name,
      prenume: req.body.author.prenume,
      id: req.body.author.id,
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

postRouter.put("/:id", async (req: Request, res: Response) => {
  const editedBlog = req.body;
  try {
    const post = await Posts.updateOne(
      { _id: editedBlog._id },
      { ...editedBlog }
    );
    res.json(post);
  } catch (e) {
    res.json({ message: e });
  }
});

postRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteResult = await Posts.deleteOne({ _id: id });

    res.json(deleteResult);
  } catch (e) {
    res.json("error");
  }
});

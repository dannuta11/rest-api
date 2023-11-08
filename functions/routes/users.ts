import express, { Router, Request, Response } from "express";
import { UsersModel } from "../models";

export const usersRouter: Router = express.Router();

usersRouter.post("/", async (req: Request, res: Response) => {
  const post = new UsersModel({
    name: req.body.name,
    prenume: req.body.prenume,
    email: req.body.email,
    gender: req.body.gender,
    password: req.body.password,
    rol: req.body.rol,
  });

  try {
    const saveUser = await post.save();
    res.json(saveUser);
  } catch (e) {
    res.json({ message: e });
  }
});

usersRouter.put("/:id", async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const users = await UsersModel.updateOne({ _id: data._id }, { ...data });
    res.json(users);
  } catch (e) {
    res.json({ message: e });
  }
});

usersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await UsersModel.find();
    res.json(users);
  } catch (e) {
    res.json({ message: e });
  }
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await UsersModel.findById(id);
    res.json(user);
  } catch (e) {
    res.json({ message: e });
  }
});

usersRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const responseDeleteUser = await UsersModel.deleteOne({
      _id: req.params.id,
    });

    res.json(responseDeleteUser);
  } catch (e) {
    res.json({ message: e });
  }
});

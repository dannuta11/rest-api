import express, { Router, Request, Response } from "express";
import { UsersModel, UserProps } from "../models";

export const loginRouter: Router = express.Router();

loginRouter.post("/", async (req: Request, res: Response) => {
  const { email } = req.body;
  const { password } = req.body;

  try {
    const user = await UsersModel.findOne({
      email: email,
      password: password,
    });
    res.json(user);
  } catch (e) {
    res.json(e);
  }
});

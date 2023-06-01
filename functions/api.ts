import express, { Express, Request, Response, Router } from "express";
import mongoose from "mongoose";
import serverless from "serverless-http";
import { router } from "./routes/posts.js";

const app: Express = express();
const authorRoute = express.Router();

app.use(express.json());

//router
app.get("/", (req: Request, res: Response) => {
  res.send("Home page");
});

authorRoute.get("/author", (req: Request, res: Response) => {
  //const name = req.body.name;
  // const prenume = req.body.prenume;

  res.json({
    name: `dan`,
    prenume: `nuta`,
  });
});

app.use("/posts", router);

//conect to db

mongoose.connect(
  "mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net"
);

//listen

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);

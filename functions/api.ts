import express, { Express, Request, Response, Router } from "express";
import mongoose from "mongoose";
import serverless from "serverless-http";
import { postRouter } from "./routes/posts.js";
import { authorRouter } from "./routes/author.js";

mongoose.connect(
  "mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net"
);

const app: Express = express();

app.use(express.json());

app.use("/.netlify/functions/api/posts", postRouter);
app.use("/.netlify/functions/api/author", authorRouter);

export const handler = serverless(app);

import express, { Express, Request, Response, Router } from "express";
import mongoose from "mongoose";
import serverless from "serverless-http";
import cors from "cors";

import { postRouter } from "./routes/posts.js";
import { contactRouter } from "./routes/contact.js";

mongoose.connect(
  "mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net"
);

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/api/posts", postRouter);
app.use("/.netlify/functions/api/contact", contactRouter);

app.listen(4000, () => console.log("app is open on port 4000"));
export const handler = serverless(app);

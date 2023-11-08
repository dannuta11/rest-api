import express, { Express } from "express";
import mongoose from "mongoose";
import serverless from "serverless-http";
import cors from "cors";

import { postRouter, contactRouter, usersRouter, loginRouter } from "./routes";

mongoose.connect(
  `mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net`
);

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/api/posts", postRouter);
app.use("/.netlify/functions/api/contact", contactRouter);
app.use("/.netlify/functions/api/users", usersRouter);
app.use("/.netlify/functions/api/login", loginRouter);

app.listen(3000, () => console.log(`app is open on port 3000`));
export const handler = serverless(app);

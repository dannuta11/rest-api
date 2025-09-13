import express, { Express } from "express";
import serverless from "serverless-http";
import cors from "cors";

import { connectToDatabase } from "./utils";
import {
  postRouter,
  contactRouter,
  usersRouter,
  loginRouter,
  index,
} from "./routes";
import { PORT } from "./config";

connectToDatabase();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/api/posts", postRouter);
app.use("/.netlify/functions/api/contact", contactRouter);
app.use("/.netlify/functions/api/users", usersRouter);
app.use("/.netlify/functions/api/login", loginRouter);
app.use("/.netlify/functions/api/", index);

app.listen(PORT, () => console.log(`app is open on port ${PORT}`));
export const handler = serverless(app);

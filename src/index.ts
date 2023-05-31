import express, { Express, Request, Response } from "express";
const app: Express = express();
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

import { router } from "./routes/posts.js";

//router
app.get("/", (req: Request, res: Response) => {});

app.use("/posts", router);

//conect to db

mongoose.connect(
  "mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net"
);

//listen
app.listen(8000, () => console.log("aplicatia sa pornit cu succes"));

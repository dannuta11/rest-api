import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/posts.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
//router
app.get("/", (req, res) => { });
app.use("/posts", router);
//conect to db
mongoose.connect("mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net");
//listen
app.listen(8000, () => console.log("aplicatia sa pornit cu succes"));
//# sourceMappingURL=index.js.map
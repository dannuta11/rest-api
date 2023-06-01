import express from "express";
import { Posts } from "../Posts.js";
export const router = express.Router();
router.get("/", async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    }
    catch (e) {
        res.json({ message: e });
    }
});
router.post("/", async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        author: {
            name: req.body.author.name,
            prenume: req.body.author.prenume,
        },
        date: req.body.date,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (e) {
        res.json({ message: e });
    }
});
router.get("/:id", (req, res) => { });
router.delete("/:id", (req, res) => { });
//# sourceMappingURL=posts.js.map
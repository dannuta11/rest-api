"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Posts_js_1 = require("../../models/Posts.js");
exports.router = express_1.default.Router();
exports.router.get("/", async (req, res) => {
    try {
        const posts = await Posts_js_1.Posts.find();
        res.json(posts);
    }
    catch (e) {
        res.json({ message: e });
    }
});
exports.router.post("/", async (req, res) => {
    const post = new Posts_js_1.Posts({
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
exports.router.get("/:id", (req, res) => { });
exports.router.delete("/:id", (req, res) => { });
//# sourceMappingURL=posts.js.map
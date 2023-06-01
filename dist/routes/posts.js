"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const Posts_js_1 = require("../models/Posts.js");
exports.router = express_1.default.Router();
exports.router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts_js_1.Posts.find();
        res.json(posts);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
exports.router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const savedPost = yield post.save();
        res.json(savedPost);
    }
    catch (e) {
        res.json({ message: e });
    }
}));
exports.router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Posts_js_1.Posts.findById(req.params.id);
    res.json(post);
}));
exports.router.get("/author", (req, res) => {
    res.json({
        name: `dan`,
        prenume: `nuta`,
    });
});
exports.router.delete("/:id", (req, res) => { });

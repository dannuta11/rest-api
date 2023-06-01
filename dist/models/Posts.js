"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String },
    author: {
        name: { type: String },
        prenume: { type: String },
    },
    img: { type: String, required: true },
});
exports.Posts = (0, mongoose_1.model)("Posts", PostSchema);

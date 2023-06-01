import { Schema, model } from "mongoose";
const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String },
    author: {
        name: { type: String },
        prenume: { type: String },
    },
    img: { type: String, required: true },
});
export const Posts = model("Posts", PostSchema);
//# sourceMappingURL=Posts.js.map
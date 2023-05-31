import { Schema, model } from "mongoose";
const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now() },
});
export const Posts = model("Posts", PostSchema);
//# sourceMappingURL=Posts.js.map
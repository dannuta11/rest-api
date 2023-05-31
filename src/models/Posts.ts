import { Schema, model } from "mongoose";

interface PostsProp {
  title: string;
  description: string;
  date: Date;
}

const PostSchema = new Schema<PostsProp>({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now() },
});

export const Posts = model("Posts", PostSchema);

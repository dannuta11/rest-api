import { Schema, model } from "mongoose";

interface PostsProp {
  title: string;
  description: string;
  img: string;

  author: {
    name: string;
    prenume: string;
    id: string;
  };
  date: string;
}

const PostSchema = new Schema<PostsProp>({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: String },
  author: {
    name: { type: String },
    prenume: { type: String },
    id: { type: String },
  },
  img: { type: String, required: true },
});

export const Posts = model("Posts", PostSchema);

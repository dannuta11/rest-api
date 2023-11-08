import { Schema, model } from "mongoose";

export interface UserProps {
  name: string;
  prenume: string;
  email: string;
  gender: string;
  password: string;
  rol: string;
  id: number;
}

const UsersSchema = new Schema<UserProps>({
  name: { type: String, required: true },
  prenume: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
});

export const UsersModel = model("Users", UsersSchema);

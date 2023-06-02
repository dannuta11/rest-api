import { Schema, model } from "mongoose";

interface ContactProps {
  name: string;
  prenume: string;
  email: string;
  tel: string;
  message: string;
}

const ContactSchema = new Schema<ContactProps>({
  name: { type: String, required: true },
  prenume: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  message: { type: String },
});

export const ContactModel = model("Contact", ContactSchema);

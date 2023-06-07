import { Schema, model } from "mongoose";

interface ContactProps {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  message: string;
}

const ContactSchema = new Schema<ContactProps>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  message: { type: String },
});

export const ContactModel = model("Contact", ContactSchema);

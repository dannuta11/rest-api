import mongoose from "mongoose";

import { MONGODB_URI } from "./config";
export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(
      `mongodb+srv://danycondurari:fp4vN37MgUS3U9Zq@cluster0.zdsjuw6.mongodb.net`
    );
  } catch (error) {
    console.log(error);
  }
};

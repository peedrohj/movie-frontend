import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.DATABASE_URL) return console.error("Database url not Found");
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    isConnected = true;
  } catch (error) {
    console.error("Error: ", error);
  }
};

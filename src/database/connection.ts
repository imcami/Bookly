import mongoose from "mongoose";

const URI = process.env.URI || "";

export async function getConnection() {
  try {
    const connection = await mongoose.connect(
      `${URI}?authSource=admin&readPreference=primary`
    );
    return connection;
  } catch (error) {
    console.log(URI);
    console.error("Database connection error" + error);
  }
}

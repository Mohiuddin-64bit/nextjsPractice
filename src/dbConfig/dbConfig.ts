import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });

    connection.on("error", (err) => {
      console.log("Mongodb connection error, please check it again", err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}

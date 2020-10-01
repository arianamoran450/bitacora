import mongoose from "mongoose";

export async function setupMongo() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Mongo is ready");
}

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";
import { setupMongo } from "./mongo";
const server = express();

dotenv.config(); // Load environment variables (.env file)
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(router);

async function setupApp() {
  try {
    await Promise.all([server.listen(process.env.PORT), setupMongo()]);
    console.log(`Listening on http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
}

console.log("\x1Bc"); // Clear console
setupApp();

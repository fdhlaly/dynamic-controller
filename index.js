import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dynamicCrud from "./src/routes/api.js";

const app = express();
const env = dotenv.config().parsed;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`${env.MONGODB_URI}/${env.DB_NAME}`, {
  dbName: env.DB_NAME,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error : "));
db.once("open", () => {
  console.log(`Connected to MongoDB : ${env.DB_NAME}`);
});

// app.use("/categories", dynamicCrud(category));

app.listen(env.PORT, () => {
  console.log(`listening on port : ${env.PORT}`);
});

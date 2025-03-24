import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

app.get("/", (req, res) => {
  res.json({
    message: `Hello ${req.body.name}`,
  });
});

app.listen(env.PORT, () => {
  console.log(`listening on port : ${env.PORT}`);
});

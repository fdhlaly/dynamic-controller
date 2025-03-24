import express, { json } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(3000, () => {
  console.log(`listening on port : 3000`);
});

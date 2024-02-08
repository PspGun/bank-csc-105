import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./db/connect.js";
const app = express();
import authRouter from "./router/auth.js";
import bankRouter from "./router/bank.js";
import userRouter from "./router/user.js";
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/bank", bankRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

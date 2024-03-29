import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./db/connect.js";
const app = express();
import authRouter from "./router/auth.js";
import bankRouter from "./router/bank.js";
import userRouter from "./router/user.js";
import { checkauth } from "./controller/auth/jwt.js";
const port = 8000;

app.use(
  cors({
    origin: "*",
  })
);
db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});
app.use(express.json());
app.use("/auth", authRouter);
app.use(checkauth);
app.use("/user", userRouter);
app.use("/bank", bankRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

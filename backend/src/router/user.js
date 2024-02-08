import express from "express";
import { getUser } from "../controller/user/getUser.js";
import { editUserProfile } from "../controller/user/editUserProfile.js";
import { getBalance } from "../controller/user/getBalance.js";
const userRouter = express();
userRouter.get("/", getUser);
userRouter.get("/balance", getBalance);
userRouter.put("/", editUserProfile);

export default userRouter;

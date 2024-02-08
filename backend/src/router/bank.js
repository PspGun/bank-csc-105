import express from "express";
import { getHistory, editBill } from "../controller/bank/bank.js";
import { getDeposit, disposit } from "../controller/bank/deposits.js";
import { getWithdraw, withdraw } from "../controller/bank/withdraw.js";
import { getTranfer, tranfer } from "../controller/bank/tranfer.js";

const bankRouter = express();
bankRouter.get("/all", getHistory);
bankRouter.get("/disposit", getDeposit);
bankRouter.post("/disposit", disposit);
bankRouter.get("/withdraw", getWithdraw);
bankRouter.post("/withdraw", withdraw);
bankRouter.get("/tranfer", getTranfer);
bankRouter.post("/tranfer", tranfer);
bankRouter.put("/bill", editBill);
export default bankRouter;

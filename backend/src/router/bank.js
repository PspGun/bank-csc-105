import express from 'express';
import { getHistory,addBill,editBill } from '../controller/bank/bank.js';
import { getDeposit } from '../controller/bank/Deposit.js';
import { getWithdraw } from '../controller/bank/withdraw';
import { getTransaction } from '../controller/bank/transaction.js';


const bankRouter = express()
bankRouter.get('/all',getHistory)
bankRouter.get('/disposit', getDeposit)
bankRouter.get('/withdraw', getWithdraw)
bankRouter.get('/transaction', getTransaction)
bankRouter.post('/bill', addBill)
bankRouter.put('/bill', editBill)
export default bankRouter
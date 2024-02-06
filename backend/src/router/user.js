import express from 'express';
import { getUser } from '../controller/user/getUser.js';
import { editUserProfile } from '../controller/user/editUserProfile.js';

const userRouter = express()
userRouter.get('/', getUser)
userRouter.put('/', editUserProfile)

export default userRouter
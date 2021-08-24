import express from 'express';
const userRouter = express.Router();
import { signIn, getUser } from '../controllers/userControllers.js';

userRouter.route('/').post(signIn).get(getUser);

export default userRouter;

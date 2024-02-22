import { Hono } from "hono";
import { signup, signin } from "../controllers/User";

export const userRouter = new Hono();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);


import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { userLoginSchema, userSchema } from "../zodConfig";
import { Jwt } from "hono/utils/jwt";
import { DIRECT_URL } from "../../environment";

const SECRET = "secrethere"

const prisma = new PrismaClient({
  datasourceUrl: DIRECT_URL
}).$extends(withAccelerate());

export async function signup(c: Context) {
  const body = await c.req.json();
  const { success } = userSchema.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ msg: "Please enter valid inputs" });
  }
  try {
    const DoesUserExist = await prisma.user.findFirst({
      where: { email: body.email },
    });

    if (DoesUserExist) {
      c.status(400);
      return c.json({ msg: "email already exist" });
    }

    const user = await prisma.user.create({
      data: body,
    });

    return c.text("signup succesfully");
  } catch (error: any) {
    c.status(400);
    return c.json({ msg: `SignUp Failed: ${error.message}` });
  }
}

export async function signin(c: Context) {
  const body = await c.req.json();
  const { success } = userLoginSchema.safeParse(body);
  if (!success) {
    c.status(500);
    return c.json({ msg: "enter correct datatypes" });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return c.json({ msg: "email not found" });
  }

  const userId = user.id;

  const token = await Jwt.sign(userId, SECRET);

  return c.json({
    message: "User logged-In successfully",
    token: token,
  });
}

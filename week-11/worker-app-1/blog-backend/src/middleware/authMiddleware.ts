import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

const SECRET = "secrethere";

export async function authMiddleware(c: Context, next: Next) {
  try {
    const authHeader = c.req.header("authorization");

    if (!authHeader || !authHeader?.startsWith("Bearer")) {
      return c.json({ msg: "User Authentication Failed, NO ACCESS" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = await Jwt.verify(token, SECRET);

    if (!decoded) {
      return c.json({ msg: "User Authentication Failed, NO ACCESS" });
    }

    c.set('userId', decoded);
    await next();

  } catch (error:any) {
    return c.json({ error: error.message });
  }
}

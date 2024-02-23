import { Hono, Next } from "hono";
import { userRouter } from "./router/userRouter";
import { postRouter } from "./router/postRouter";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.get('/', (c) => {
    return c.json('Helloo');
});

app.route("/users", userRouter);
app.route('/posts', postRouter);

export default app;
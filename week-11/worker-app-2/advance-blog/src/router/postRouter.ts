import { Hono } from "hono";
import { createPost, deletePostById, getAllPosts, getSinglePostByID, updatePostByID } from "../controllers/Posts";
import { authMiddleware } from "../middleware/authMiddleware";

export const postRouter = new Hono();

postRouter.use(authMiddleware);

postRouter.get('/', getAllPosts);
postRouter.post('/', createPost);
postRouter.get('/:id', getSinglePostByID);
postRouter.put('/:id', updatePostByID);
postRouter.delete('/:id', deletePostById);



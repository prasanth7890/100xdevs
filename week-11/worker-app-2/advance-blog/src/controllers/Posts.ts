import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { postSchema } from "../zodConfig";
import { DIRECT_URL } from "../../environment";

const prisma = new PrismaClient({
  datasourceUrl: DIRECT_URL,
}).$extends(withAccelerate());

export async function getAllPosts(c: Context) {
  const posts = await prisma.post1.findMany({
    where: {
      userId: c.get("userId"),
    },
  });

  return c.json({ posts: posts });
}

export async function createPost(c: Context) {
  const body = await c.req.json();
  const { success } = postSchema.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ msg: "Please enter valid inputs" });
  }

  if (!body.title || !body.body) {
    return c.json({ msg: "title or body should not be blank" });
  }

  const tagList = body.tags;

  try {
    const newPost = await prisma.post1.create({
      data: {
        title: body.title,
        body: body.body,
        userId: c.get("userId"),
        tags: {
          connectOrCreate: tagList.map((tag: string) => {
            return {
              where: { name: tag },
              create: { name: tag},
            };
          }),
        },
      },
      include: {
        tags: true,
      },
    });

    return c.text("Post Created Succesfully");
  } catch (error: any) {
    c.status(400);
    return c.json({ msg: `Post Creation Failed: ${error.message}` });
  }
}

export async function getSinglePostByID(c: Context) {
  try {
    const { id } = c.req.param();
    if (!parseInt(id)) {
      return c.json({ msg: "enter correct id" });
    }

    const post = await prisma.post1.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        tags: true
      }
    });

    return c.json({ post: post });
  } catch (error: any) {
    c.json({ error: error.message });
  }
}

export async function updatePostByID(c: Context) {
  const body = await c.req.json();
  const { success } = postSchema.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ msg: "Please enter valid inputs" });
  }

  if (!body.title || !body.body) {
    return c.json({ msg: "title or body should not be blank" });
  }

  const { id } = c.req.param();
  if (!parseInt(id)) {
    return c.json({ msg: "enter correct id" });
  }

  const post = await prisma.post1.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!post) {
    return c.json({ msg: "Post not found" });
  }

  const tagList = body.tags;

  try {
    const updatedPost = await prisma.post1.update({
      where: {
        id: parseInt(id),
        userId: c.get('userId')
      },
      data: {
        title: body.title,
        body: body.body,
        tags: {
          connectOrCreate: tagList.map((tag: string) => {
           return {
            where: { name: tag },
            create: { name: tag }
           }
          }),
        }
      },
      include: {
        tags: true
      }
    });

    return c.json({ msg: "Post Updated Succesfully", updatedPost });
  } catch (error: any) {
    c.status(400);
    return c.json({ msg: `Post Updation Failed: ${error.message}` });
  }
}

export async function deletePostById(c: Context) {
  try {
    const { id } = c.req.param();
    if (!parseInt(id)) {
      return c.json({ msg: "enter correct id" });
    }

    const post = await prisma.post1.findFirst({
      where: {
        id: parseInt(id),
      },
    });

    if (!post) {
      return c.json({ msg: "Post not found" });
    }

    const deleted = await prisma.post1.delete({
      where: {
        id: parseInt(id),
        userId: c.get('userId')
      },
    });

    return c.json({ msg: "Post Deleted Succesfully" });
  } catch (error: any) {
    c.json({ error: error.message });
  }
}

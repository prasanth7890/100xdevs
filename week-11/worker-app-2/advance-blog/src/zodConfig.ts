import { z } from '@hono/zod-openapi'

export const userSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
});

export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const postSchema = z.object({
    title: z.string(),
    body: z.string(),
    tags: z.array(z.string().optional()),
})
import { z } from "zod";
import Client from "../entities/client.entity";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(60),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  phoneNumber: z.string().max(45),
  createdAt: z.date().or(z.string()),
});

export const userListOneSchema = z.object({
  id: z.number(),
  name: z.string().max(60),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  phoneNumber: z.string().max(45),
  createdAt: z.date().or(z.string()),
  client: z
    .object({
      id: z.number(),
      name: z.string().max(60),
      email: z.string().max(45).email(),
      phoneNumber: z.string().max(45),
      createdAt: z.date().or(z.string()),
    })
    .array(),
});
export const userResponseSchema = userListOneSchema.omit({
  password: true,
});

export const userListSchema = userSchema.omit({
  password: true,
});

export const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

export const updateRequestUserSchema = z.object({
  id: z.number().optional(),
  name: z.string().max(60).optional(),
  email: z.string().max(45).email().optional(),
  password: z.string().max(120).optional(),
  phoneNumber: z.string().max(45).optional(),
  createdAt: z.date().or(z.string()).optional(),
});

export const updateValidatedUserSchema = updateRequestUserSchema.omit({
  id: true,
  createdAt: true,
});

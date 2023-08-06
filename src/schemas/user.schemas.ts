import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(60),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  phoneNumber: z.string().max(45),
  createdAt: z.date().or(z.string()),
});

export const userResponseSchema = userSchema.omit({
  password: true,
});

export const userListSchema = userSchema
  .omit({
    password: true,
  })
  .array();

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
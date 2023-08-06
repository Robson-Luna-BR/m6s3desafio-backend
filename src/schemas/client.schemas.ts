import {z} from "zod";

export const clientSchema = z.object({
    id: z.number(),
    name: z.string().max(60),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    phoneNumber: z.string().max(45),
    createdAt: z.date().or(z.string()),
  });
  
  export const clientResponseSchema = clientSchema.omit({
    password: true,
  });
  
  export const clientListSchema = clientSchema
    .omit({
      password: true,
    })
    .array();
  
    export const clientRequestSchema = clientSchema.omit({
      id: true,
      createdAt: true,
    });
  
    export const updateRequestClientSchema = z.object({
      id: z.number().optional(),
      name: z.string().max(60).optional(),
      email: z.string().max(45).email().optional(),
      password: z.string().max(120).optional(),
      phoneNumber: z.string().max(45).optional(),
      createdAt: z.date().or(z.string()).optional(),
    });
  
    export const updateValidatedClientSchema = updateRequestClientSchema.omit({
      id: true,
      createdAt: true,
    });
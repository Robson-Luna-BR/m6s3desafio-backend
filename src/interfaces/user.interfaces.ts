import { z } from "zod";
import {
  updateRequestUserSchema,
  updateValidatedUserSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TUserResponse = z.infer<typeof userResponseSchema>;
export type TUserRequest = z.infer<typeof userRequestSchema>;
export type TUpdateRequestUser = z.infer<typeof updateRequestUserSchema>;
export type TUpdateValidatedUserSchema = z.infer<
  typeof updateValidatedUserSchema
>;

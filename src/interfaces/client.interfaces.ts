import { z } from "zod";
import {
  updateRequestClientSchema,
  updateValidatedClientSchema,
  clientRequestSchema,
  clientResponseSchema,
  clientSchema,
} from "../schemas/client.schemas";

export type TClient = z.infer<typeof clientSchema>;
export type TClientResponse = z.infer<typeof clientResponseSchema>;
export type TClientRequest = z.infer<typeof clientRequestSchema>;
export type TUpdateRequestClient = z.infer<typeof updateRequestClientSchema>;
export type TUpdateValidatedClientSchema = z.infer<
  typeof updateValidatedClientSchema
>;

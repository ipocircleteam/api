import { z } from "zod";

export const trackerQuerySchema = z.object({
  year: z.string().optional(),
  ipoId: z.string().optional(),
});

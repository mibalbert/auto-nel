import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export const carsSchema = z.object({
  id: z.number(), // Update this line to expect a number
  make: z.string(),
  model: z.string(),
  year: z.number(), // Update this line to expect a number
  ownerId: z.string(),
  specs: z.object({
    color: z.string(),
    engine: z.string(),
    transmission: z.string(),
  }),
  picture: z.string(),
});

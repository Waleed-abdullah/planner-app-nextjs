import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { z } from 'zod';

import { Category, events } from '@/libs/db/schemas';

export const EventInsertSchema = createInsertSchema(events);

export const EventSelectSchema = createSelectSchema(events);

export const EventUpdateSchema = createUpdateSchema(events);

export type EventSelectType = z.infer<typeof EventSelectSchema>;

export type EventUpdateType = z.infer<typeof EventUpdateSchema>;

export const EventCreateSchema = EventInsertSchema.pick({
  title: true,
  description: true,
  start_date: true,
  end_date: true,
  location: true,
  category: true,
});

export const EventCreateFormSchema = EventCreateSchema.omit({
  end_date: true,
}).extend({
  category: z.enum(Category.enumValues),
  duration: z
    .number()
    .min(1, 'Duration must be at least 1 hour')
    .max(10, 'Duration must be at most 10 hours'),
});

export type EventCreateFormSchemaType = z.infer<typeof EventCreateFormSchema>;
export type EventCreateSchemaType = z.infer<typeof EventCreateSchema>;

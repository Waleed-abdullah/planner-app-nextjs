import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { type z } from 'zod';

import { events } from '@/libs/db/schemas';

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
});

export type EventCreateSchemaType = z.infer<typeof EventCreateSchema>;

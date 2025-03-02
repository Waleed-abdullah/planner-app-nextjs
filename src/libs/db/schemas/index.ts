import { relations } from 'drizzle-orm';
import {
  boolean,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

// Define the auth schema
const authSchema = pgSchema('auth');

// Reference the existing auth.users table (not creating a new one)
export const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
  email: varchar('email').unique(),
});

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  country: text('country'),
  location: text('location'),
  start_date: timestamp('start_date').notNull(),
  end_date: timestamp('end_date').notNull(),
  is_all_day: boolean('is_all_day').default(false),
  user_id: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  color: varchar('color', { length: 7 }),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Define the relationships
export const usersRelations = relations(users, ({ many }) => ({
  events: many(events),
}));

export const eventsRelations = relations(events, ({ one }) => ({
  user: one(users, {
    fields: [events.user_id],
    references: [users.id],
  }),
}));

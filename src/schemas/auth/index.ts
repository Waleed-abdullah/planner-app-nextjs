import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type AuthSchemaType = z.infer<typeof AuthSchema>;

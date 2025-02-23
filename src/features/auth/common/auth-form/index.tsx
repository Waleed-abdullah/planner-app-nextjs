'use client';

import Link from 'next/link';
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ABSOLUTE_ROUTES } from '@/constants/routes';
import { type AuthSchemaType } from '@/schemas/auth';

interface AuthFormProps {
  formHook: UseFormReturn<AuthSchemaType>;
  onSubmit: SubmitHandler<AuthSchemaType>;
  variant: 'login' | 'signup';
}

export const AuthForm = ({ formHook, onSubmit, variant }: AuthFormProps) => {
  return (
    <Form {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="flex items-center gap-2">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    {variant === 'login' && (
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    )}
                  </div>
                  <FormControl>
                    <Input type="password" required {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={formHook.formState.isSubmitting}
              className="w-full capitalize"
            >
              {!formHook.formState.isSubmitting ? (
                variant
              ) : (
                <Spinner className="text-white" />
              )}
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          {variant === 'login' ? "Don't" : 'Already'} have an account?{' '}
          <Link
            href={
              variant === 'login'
                ? ABSOLUTE_ROUTES.SIGN_UP
                : ABSOLUTE_ROUTES.ROOT
            }
            className="underline underline-offset-4"
          >
            {variant === 'login' ? 'Sign up' : 'Log in'}
          </Link>
        </div>
      </form>
    </Form>
  );
};

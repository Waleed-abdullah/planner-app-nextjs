'use client';

import { type ComponentPropsWithoutRef } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type PropsWithClassname } from '@/types/common';
import { cn } from '@/utils/cn';

import { AuthForm } from '../common/auth-form';
import { useSignupForm } from './use-signup-form';

export const Signup = ({
  className,
  ...props
}: PropsWithClassname<ComponentPropsWithoutRef<'div'>>) => {
  const { formHook, onSubmit } = useSignupForm();
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Enter an email and password below for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm formHook={formHook} onSubmit={onSubmit} variant="signup" />
        </CardContent>
      </Card>
    </div>
  );
};

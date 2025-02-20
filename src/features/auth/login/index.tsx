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
import { useLoginForm } from './use-login-form';

export const Login = ({
  className,
  ...props
}: PropsWithClassname<ComponentPropsWithoutRef<'div'>>) => {
  const { formHook, onSubmit } = useLoginForm();
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm formHook={formHook} onSubmit={onSubmit} variant="login" />
        </CardContent>
      </Card>
    </div>
  );
};

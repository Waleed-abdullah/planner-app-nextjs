'use client';

import { type Dispatch, type SetStateAction } from 'react';

import { DateTimePicker } from '@/components/date-time-picker';
import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useAddEventForm } from './use-add-event-form';

interface AddEventFormProps {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddEventForm = ({ setIsDialogOpen }: AddEventFormProps) => {
  const { formHook, onSubmit } = useAddEventForm(setIsDialogOpen);
  return (
    <Form {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        <div className="mb-3 flex flex-col gap-6">
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter event title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="start_date"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel htmlFor="start_date">Start Date</FormLabel>
                  <FormControl className="flex items-center">
                    <DateTimePicker
                      date={field.value}
                      setDate={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="end_date"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel htmlFor="end_date">End Date</FormLabel>
                  <FormControl className="flex items-center">
                    <DateTimePicker
                      date={field.value}
                      setDate={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter location"
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disabled={formHook.formState.isSubmitting}>
            {formHook.formState.isSubmitting ? (
              <Spinner className="text-white" />
            ) : (
              'Save changes'
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

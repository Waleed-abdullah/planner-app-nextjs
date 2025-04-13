'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CATEGORIES } from '@/constants/categories';

import { useAddEventForm } from './use-add-event-form';

export const AddEventForm = () => {
  const { formHook, onSubmit } = useAddEventForm();
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
                  <FormLabel htmlFor="start_date">Start Time</FormLabel>
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
              name="duration"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel htmlFor="duration">Duration</FormLabel>
                  <FormControl className="flex items-center">
                    {/* need to select duration from 1 - 10 */}
                    <Input
                      type="number"
                      min={1}
                      max={10}
                      placeholder="Enter duration"
                      {...field}
                      value={field.value ?? ''}
                      onChange={(e) => {
                        field.onChange(Number(e.target.value));
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={formHook.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="category">Category</FormLabel>
                  <FormControl>
                    {/* use select to list all categories */}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value ?? ''}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(CATEGORIES).map(
                          ([categoryName, categoryDetails]) => (
                            <SelectItem
                              key={categoryDetails.label}
                              value={categoryName}
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className="size-3 rounded-full"
                                  style={{
                                    backgroundColor: categoryDetails.color,
                                  }}
                                />
                                {categoryDetails.label}
                              </div>
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
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

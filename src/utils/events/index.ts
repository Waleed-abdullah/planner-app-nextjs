import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { EVENT_QUERY_KEYS } from '@/constants/query-keys';
import { API_ROUTES } from '@/constants/routes';
import {
  type EventCreateSchemaType,
  type EventSelectType,
  type EventUpdateType,
} from '@/schemas/event';

export const useInsertEventMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: EventCreateSchemaType) => {
      const response = await fetch(API_ROUTES.CREATE_EVENT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success('Event created successfully');
      queryClient.invalidateQueries({
        queryKey: [EVENT_QUERY_KEYS.GET_ALL_EVENTS],
      });
    },
  });
};

export const useGetUserEvents = () =>
  useQuery<EventSelectType[]>({
    queryKey: [EVENT_QUERY_KEYS.GET_ALL_EVENTS],
    queryFn: async () => {
      const response = await fetch(API_ROUTES.GET_ALL_EVENTS);

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const { events } = await response.json();

      return events.map((event: EventSelectType) => ({
        ...event,
        start_date: new Date(event.start_date),
        end_date: new Date(event.end_date),
      }));
    },
  });

export const useUpdateEventMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: EventUpdateType) => {
      const response = await fetch(API_ROUTES.PATCH_EVENT, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    },
    onError: (error) => {
      toast.error(error.message);
      queryClient.invalidateQueries({
        queryKey: [EVENT_QUERY_KEYS.GET_ALL_EVENTS],
      });
    },
    onSuccess: () => {
      toast.success('Event updated successfully');
      queryClient.invalidateQueries({
        queryKey: [EVENT_QUERY_KEYS.GET_ALL_EVENTS],
      });
    },
  });
};

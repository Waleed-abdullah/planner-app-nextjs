'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';
import { create } from 'zustand';

import type { UserAction, UserState } from './user-store.types';

const createStore = (initialState: UserState) =>
  create<UserState & UserAction>()((set) => ({
    ...initialState,
    loginUser: ({ user }) => {
      set(() => ({
        user,
      }));
    },

    logoutUser: () => {
      set(() => ({ user: null }));
    },
  }));

const UserStoreContext = createContext<ReturnType<typeof createStore> | null>(
  null
);

export const useUserStoreContext = () => {
  if (!UserStoreContext)
    throw new Error('useUser must be used within a UserStoreContext');
  return useContext(UserStoreContext)!;
};

export const UserStoreProvider = ({
  initialState,
  children,
}: {
  initialState: UserState;
  children: ReactNode;
}) => {
  const [store] = useState(() => createStore(initialState));
  return (
    <UserStoreContext.Provider value={store}>
      {children}
    </UserStoreContext.Provider>
  );
};

export * from './user-store.types';

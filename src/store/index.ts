import { configureStore } from '@reduxjs/toolkit';

import socialAccountsReducer from './socialAccount/socialAccountSlice';

export const store = configureStore({
  reducer: {
    socialAccounts: socialAccountsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

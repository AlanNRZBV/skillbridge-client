import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice.ts';
import { listenerMiddleware } from '../middleware/listenerMiddleware.ts';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

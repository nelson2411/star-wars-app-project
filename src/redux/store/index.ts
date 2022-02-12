import { configureStore } from "@reduxjs/toolkit";

import { starWarsApiSlice } from "../features/apis/starWarsApiSlice";

export const store = configureStore({
  reducer: {
    [starWarsApiSlice.reducerPath]: starWarsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(starWarsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../slices/appSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "@shared/api";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../slices/appSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

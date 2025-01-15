import { createSlice } from "@reduxjs/toolkit";

export enum AppTheme {
  LIGHT = "light",
  DARK = "dark",
}

export const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: AppTheme.LIGHT,
  },
  reducers: (create) => ({
    changeTheme: create.reducer<{ theme: AppTheme }>((state, action) => {
      state.theme = action.payload.theme;
    }),
  }),
  selectors: {
    selectTheme: (state) => state.theme,
  },
});

export const { changeTheme } = appSlice.actions;
export const { selectTheme } = appSlice.selectors;

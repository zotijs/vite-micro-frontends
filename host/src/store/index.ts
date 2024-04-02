import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({}),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./feature/movie-slice";
import user from "./feature/user-slice"; "./feature/user-slice";

import { MoviesApi } from "./api/movie-api";
export const store = configureStore({
  reducer: {
    [MoviesApi.reducerPath]: MoviesApi.reducer,
    user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MoviesApi = createApi({
  reducerPath: "moviesAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/core" }),

  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => "movie",
    }),
  }),
});

export const { useGetAllMoviesQuery } = MoviesApi;

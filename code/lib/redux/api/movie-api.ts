import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSession } from "next-auth/react";
export const getHeaders = {
  "Content-Type": "application/json",
};

export const MoviesApi = createApi({
  reducerPath: "moviesAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/core/movie",
  }),

  endpoints: (builder) => ({
    getAllMovies: builder.query<Movie[], {}>({
      query: (params: {}) => ({
        url: "/",
        method: "GET",
        headers: getHeaders,
        params,
      }),
    }),
    getMovie: builder.query<Movie, {}>({
      query: (params: { id: string }) => ({
        url: `/${params.id}`,
        method: "GET",
        headers: getHeaders,
      }),
    }),
  }),
});

export const { useGetAllMoviesQuery, useGetMovieQuery } = MoviesApi;

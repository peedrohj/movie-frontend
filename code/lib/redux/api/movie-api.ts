import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
export const getHeaders = {
  "Content-Type": "application/json",
};



export const MoviesApi = createApi({
  reducerPath: "moviesAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/core/movie",
     prepareHeaders(headers, api) {
      const session = getSession().then(session => {
        console.log("Session: ", session)
      })
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;

    },
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

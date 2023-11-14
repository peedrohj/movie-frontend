import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
export const getHeaders = {
  "Content-Type": "application/json",
};

interface CustomSession extends Session {
  token: {
    access_token: string;
    exp: number;
    iat: number;
    jti: string;
    token_type: string;
  };
}

export const MoviesApi = createApi({
  reducerPath: "moviesAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/core/movie",
    prepareHeaders: async (headers, api) => {
      const data = (await getSession()) as CustomSession;
      const session = data;
      const token = session?.token.access_token;

      if (token) {
        const auth = "Bearer " + token;
        headers.set("authorization", auth);
      }

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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const movie = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    getMovies: (state, action: PayloadAction<string>) => {
      return;
    },
  },
});

export const { getMovies } = movie.actions;
export default movie.reducer
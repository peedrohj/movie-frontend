import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser: (state, action: PayloadAction<string>) => {
      return state;
    },
    setUser: (state, action)=>{
      state = action.payload
    }
  },
});

export const { getUser, setUser } = user.actions;
export default user.reducer
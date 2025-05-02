import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalLike: 0,
};

export const homeReducer = createSlice({
  name: "likeSlice",
  initialState: initialState,
  reducers: {
    increaseLike: (state) => {
      state.totalLike += 1;
    },
    decreaseLike: (state) => {
      state.totalLike -= 1;
    },
  },
});

export const { increaseLike, decreaseLike } = homeReducer.actions;

import {configureStore} from "@reduxjs/toolkit"
import { homeReducer } from "./homeReducers/homeReducer";

export const store = configureStore({
  reducer: {
    increaseTotalLikes: homeReducer.reducer,
    decreaseTotalLikes: homeReducer.reducer
  },
});
import { configureStore } from "@reduxjs/toolkit";
import workoutDetailsReducer from "./features/workoutDetailsSlice";

export const store = configureStore({
  reducer: {
    workoutDetails: workoutDetailsReducer,
  },
});

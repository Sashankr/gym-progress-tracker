import { configureStore } from "@reduxjs/toolkit";
import workoutDetailsReducer from "./features/workoutDetailsSlice";
import weightTrackerReducer from "./features/weightTrackerSlice";

export const store = configureStore({
  reducer: {
    workoutDetails: workoutDetailsReducer,
    weightTracker: weightTrackerReducer,
  },
});

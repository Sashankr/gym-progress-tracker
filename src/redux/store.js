import { configureStore } from "@reduxjs/toolkit";
import workoutDetailsReducer from "./features/workoutDetailsSlice";
import weightTrackerReducer from "./features/weightTrackerSlice";
import * as services from "../services";

export const store = configureStore({
  reducer: {
    workoutDetails: workoutDetailsReducer,
    weightTracker: weightTrackerReducer,
    [services.workoutApi.reducerPath]: services.workoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(services.workoutApi.middleware),
});

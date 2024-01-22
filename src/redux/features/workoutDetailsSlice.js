import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const workoutDetailsSlice = createSlice({
  name: "workoutDetails",
  initialState,
  reducers: {
    UPDATE_WORKOUT_DETAILS: (state, action) => {
      const { exerciseName, workoutData } = action.payload;
      return {
        ...state,
        [exerciseName]: workoutData,
      };
    },
  },
});

export const { UPDATE_WORKOUT_DETAILS } = workoutDetailsSlice.actions;

export default workoutDetailsSlice.reducer;

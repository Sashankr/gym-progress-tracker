import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: "",
};

const weightTrackerSlice = createSlice({
  name: "weightTracker",
  initialState,
  reducers: {
    UPDATE_WEIGHT: (state, action) => {
      return {
        ...state,
        weight: action.payload,
      };
    },
  },
});

export const { UPDATE_WEIGHT } = weightTrackerSlice.actions;

export default weightTrackerSlice.reducer;

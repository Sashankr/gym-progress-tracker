// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = import.meta.env.VITE_API_ENDPOINT;

// Define a service using a base URL and expected endpoints
export const workoutApi = createApi({
  reducerPath: "workoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/workout`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = JSON.parse(sessionStorage.getItem("profile"));
      console.log(token);
      if (token) {
        headers.set("x-access-token", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    saveWorkout: builder.mutation({
      query: (body) => ({
        url: "/save-workout",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSaveWorkoutMutation } = workoutApi;

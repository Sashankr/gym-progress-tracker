// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = import.meta.env.VITE_API_ENDPOINT;
const getAuthToken = () => {
  const { user: profileDetails } = JSON.parse(
    sessionStorage.getItem("profile")
  );
  const token = sessionStorage.getItem(profileDetails.token);
  return {
    Authorization: `Bearer ${token}`,
  };
};

// Define a service using a base URL and expected endpoints
export const workoutApi = createApi({
  reducerPath: "workoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/workout`,
    prepareHeaders: (headers, { getState }) => {
      const token = getAuthToken();
      if (token) {
        headers.set("x-access-token", `Bearer ${token}`);
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

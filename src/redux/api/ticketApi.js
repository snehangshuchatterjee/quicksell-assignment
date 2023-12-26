import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const ticketApi = createApi({
  reducerPath: "tickets",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.quicksell.co/v1/internal/frontend-assignment", // baseUrl to the server
  }),
  tagTypes: ["Tickets"],
  endpoints: (builder) => {
    return {
      fetchTickets: builder.query({
        query: () => "",
        providesTags: ["Tickets"],
      }),
    };
  },
});
export { ticketApi };
export const { useFetchTicketsQuery } = ticketApi;

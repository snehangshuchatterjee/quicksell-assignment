import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ticketApi } from "./api/ticketApi";

const store = configureStore({
  reducer: {
    [ticketApi.reducerPath]: ticketApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ticketApi.middleware);
  },
});

setupListeners(store.dispatch);
export default store;

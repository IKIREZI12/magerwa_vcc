import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import auctionReducer from "./reducers/auction"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    auction: auctionReducer,
   },
});

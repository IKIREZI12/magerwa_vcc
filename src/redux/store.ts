import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import auctionReducer from "./reducers/auction"
import registerCarReducer from "./reducers/registercar"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    auction: auctionReducer,
    carRegistration: registerCarReducer,
   },
});

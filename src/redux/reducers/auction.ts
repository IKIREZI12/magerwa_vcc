import { createSlice } from "@reduxjs/toolkit";
import { addToAuction, getAuctionCars } from "../thunks/auction";

const initialState = {
  success: '',
  loading: false,
  error: null as string | null,
  auctionCars: [],
  paginationDetails: null,
  fetchLoading: false,
  fetchError: null as string | null,
};

export const createUserSlice = createSlice({
  name: "Auction",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Add car to auction
    builder
      .addCase(addToAuction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToAuction.fulfilled, (state, action) => {
        const payload = action.payload;
        if ("successMessage" in payload) state.success = payload.successMessage;
        if ("error" in payload) state.error = payload.error?.message || null;
        state.loading = false;
      })

    // Fetch auction cars
    builder
      .addCase(getAuctionCars.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(getAuctionCars.fulfilled, (state, action) => {
        const payload = action.payload;
        if ("auctionCars" in payload) state.auctionCars = payload.auctionCars;
        if ("paginationDetails" in payload) state.paginationDetails = payload.paginationDetails;
        if ("error" in payload) state.fetchError = payload.error?.message || null;
        state.fetchLoading = false;
      })

  },
});

export default createUserSlice.reducer;

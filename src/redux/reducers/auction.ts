import { createSlice } from "@reduxjs/toolkit";
import { addToAuction } from "../thunks/auction";

const initialState = {
  success: '',
  loading: false,
  error: null as string | null,
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
  },
});

export default createUserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RegisterCar } from "../thunks/registercar";

const initialState = {
  success: '',
  loading: false,
  error: null as string | null,
};

export const createUserSlice = createSlice({
  name: "carRegitration",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Register your car
    builder
      .addCase(RegisterCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(RegisterCar.fulfilled, (state, action) => {
        const payload = action.payload;
        if ("successMessage" in payload) state.success = payload.successMessage;
        if ("error" in payload) state.error = payload.error?.message || null;
        state.loading = false;
      })
  },
});

export default createUserSlice.reducer;

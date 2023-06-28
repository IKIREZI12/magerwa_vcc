import { createSlice } from "@reduxjs/toolkit";
import { 
  createUser, 
  loginUser, 
  getUser, 
  logoutUser, 
} from "../thunks/auth";

const initialState = {
  SignUpSuccess: '',
  LoginSuccess: '',
  LogoutSuccess: '',
  loggedInUser: null,
  checkUser: undefined as object | undefined,
  loading: false,
  FetchUserLoading: false,
  SignUpError: null as string | null,
  LoginError: null as string | null,
  LogoutError: null as string | null,
  FetchUserError: null as string | null
};

export const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Create User
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        const payload = action.payload;
        if ("successMessage" in payload) state.SignUpSuccess = payload.successMessage;
        if ("error" in payload) state.SignUpError = payload.error?.message || null;
        state.loading = false;
      })
    
    // Login User
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      const payload = action.payload
      if ("successMessage" in payload) state.LoginSuccess = payload.successMessage;
      if ("checkUser" in payload) state.checkUser = payload.checkUser;
      if ("error" in payload) state.LoginError = payload.error?.message || null;
      state.loading = false;
    });
    
    // Logout User
    builder
    .addCase(logoutUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(logoutUser.fulfilled, (state, action) => {
      const payload = action.payload
      if ("successMessage" in payload) {
        state.LogoutSuccess = payload.successMessage;
        state.loggedInUser = null;
      }
      if ("error" in payload) state.LogoutError = payload.error?.message || null;
      state.loading = false;
    });
    
    // Get logged in user
    builder
    .addCase(getUser.pending, (state) => {
      state.FetchUserLoading = true;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      const payload = action.payload;
      if ("loggedInUser" in payload) state.loggedInUser = payload.loggedInUser;
      if ("error" in payload) state.FetchUserError = payload.error?.message || null;
      state.FetchUserLoading = false;
    });

  },
});

export default createUserSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api";


interface SuccessResponse {
  successMessage: string;
  checkUser?: object | undefined;
  error: null;
}

interface ErrorResponse {
  error: {
    message: string;
  };
}

interface UserData {
  [key: string]: unknown;
}

export const createUser = createAsyncThunk
  < SuccessResponse | ErrorResponse, UserData >
(
  "auth/createUser",
  async (userData) => {
    try {
      const result = await API.post("/auth", userData);
      if (!result.data.successMessage) {
        throw new Error("Failed to create the user. Please try again.");
      }
      return {
        successMessage: result.data.successMessage,
        error: null,
      };
    } catch (error: any) {
      return {
        error: {
          message:
            error.response?.data?.message ||
            error.message ||
            "Unknown error occurred, please try again.",
        },
      };
    }
  }
);

export const loginUser = createAsyncThunk
  < SuccessResponse | ErrorResponse, UserData >
(
  "auth/loginUser",
  async (userData) => {
    try {
      const result = await API.post("/auth/login", userData);
      if (!result.data.successMessage) {
        throw new Error("Failed to login the user. Please try again.");
      }
      return {
        successMessage: result.data.successMessage,
        checkUser: result.data.data,
        error: null,
      };
    } catch (error: any) {
      return {
        error: {
          message:
            error.response?.data?.message ||
            error.message ||
            "Unknown error occurred, please try again.",
        },
      };
    }
  }
);

export const logoutUser = createAsyncThunk
  < SuccessResponse | ErrorResponse >
(
  "auth/logoutUser",
  async () => {
    try {
      const result = await API.post("/auth/logout");
      if (!result.data.successMessage) {
        throw new Error("Failed to logout the user. Please try again.");
      }
      return {
        successMessage: result.data.successMessage,
        error: null,
      };
    } catch (error: any) {
      return {
        error: {
          message:
            error.response?.data?.message ||
            error.message ||
            "Unknown error occurred, please try again.",
        },
      };
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async () => {
    try {
      const result = await API.get("/auth/loggedInUser");
      if (!result.data.successMessage) {
        throw new Error("Failed to get the user. Please try again.");
      }
      return {
        loggedInUser: result.data.loggedInUser,
        error: null,
      };
    } catch (error: any) {
      return {
        error: {
          message:
            error.response?.data?.message ||
            error.message ||
            "Unknown error occurred, please try again.",
        },
      };
    }
  }
);

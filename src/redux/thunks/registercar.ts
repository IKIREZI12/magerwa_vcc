import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api";


interface SuccessResponse {
  successMessage: string;
  error: null;
}

interface ErrorResponse {
  error: {
    message: string;
  };
}

interface CarData {
  [key: string]: unknown;
}

export const RegisterCar = createAsyncThunk
  < SuccessResponse | ErrorResponse, CarData >
(
  "registercar/carRegistration",
  async (carData) => {
    try {
      const result = await API.post("/registercar", carData);
      if (!result.data.successMessage) {
        throw new Error("Failed to register your car. Please try again.");
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



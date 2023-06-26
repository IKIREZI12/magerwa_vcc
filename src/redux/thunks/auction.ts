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

interface UserData {
  [key: string]: unknown;
}

export const addToAuction = createAsyncThunk
  < SuccessResponse | ErrorResponse, UserData >
(
  "auction/addToAuction",
  async (carData) => {
    try {
      const result = await API.post("/auction", carData);
      if (!result.data.successMessage) {
        throw new Error("Failed to add your car to auction. Please try again.");
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


export const getAuctionCars = createAsyncThunk(
  "auction/getAuctionCars",
  async () => {
    try {
      const result = await API.get("/auction");
      if (!result.data.data) {
        throw new Error("Failed to retrieve auction cars. Please try again.");
      }
      return {
        auctionCars: result.data.data,
        paginationDetails: result.data.paginationDetails,
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


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  cancelSignatureThunk,
  updateSignatureThunk,
  userSubscriptionThunk,
} from "./subscriptionThunk";
const initialState = {
  isLoading: false,
  password: "",
  upgradeUrl: "",
  msg: "",
  hosted_invoice_url: "",
  subscription: null,
};

export const cancelSignature = createAsyncThunk(
  "subscription/cancelSignature",
  cancelSignatureThunk
);

export const updateSignature = createAsyncThunk(
  "subscription/updateSignature",
  updateSignatureThunk
);

export const userSubscription = createAsyncThunk(
  "subscription/userSubscription",
  userSubscriptionThunk
);

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    handleDataCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSubscription.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userSubscription.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.subscription = payload?.subscriptionObj;
      })
      .addCase(userSubscription.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(cancelSignature.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelSignature.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.msg = payload.msg;
      })
      .addCase(cancelSignature.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateSignature.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSignature.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.upgradeUrl = payload?.upgradeUrl;
        state.msg = payload?.msg;
      })
      .addCase(updateSignature.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { showLoading, handleDataCollector } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;

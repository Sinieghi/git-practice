import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserThunk,
  reverseSoftDeleteThunk,
  sendUserForUpdateOnRequestThunk,
  softDeleteThunk,
  updateUserThunk,
} from "./userDataThunk";

const initialState = {
  userData: null,
  isLoading: false,
  userDataLoading: false,
  name: "",
  email: "",
  role: "",
  reasons: "",
  msg: "",
  isSingleFreteOpen: false,
};

export const getUser = createAsyncThunk("userData/getUser", getUserThunk);

export const updateUser = createAsyncThunk(
  "userData/updateUser",
  updateUserThunk
);

export const softDelete = createAsyncThunk(
  "userData/softDelete",
  softDeleteThunk
);
export const reverseSoftDelete = createAsyncThunk(
  "userData/reverseSoftDelete",
  reverseSoftDeleteThunk
);
export const sendUserForUpdateOnRequest = createAsyncThunk(
  "userData/sendUserForUpdateOnRequest",
  sendUserForUpdateOnRequestThunk
);

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    showSingleFrete: (state) => {
      state.isSingleFreteOpen = true;
    },
    hideSingleFrete: (state) => {
      state.isSingleFreteOpen = false;
    },
    logoutUser: (state) => {
      state.userData = null;
      setTimeout(() => {
        window.location.pathname = "/cadastro";
      }, 1000);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.userDataLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userDataLoading = false;
        const {
          data: { user },
          status,
        } = payload;
        state.userData = { ...user, status };
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.userDataLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.msg = payload.msg;
        toast.success(payload.msg);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.msg);
      })
      .addCase(sendUserForUpdateOnRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendUserForUpdateOnRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendUserForUpdateOnRequest.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(softDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(softDelete.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.msg);
      })
      .addCase(softDelete.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.msg);
      })
      .addCase(reverseSoftDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(reverseSoftDelete.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.msg);
      })
      .addCase(reverseSoftDelete.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.msg);
      });
  },
});

export const { userCollector, hideSingleFrete, showSingleFrete, logoutUser } =
  userDataSlice.actions;
export default userDataSlice.reducer;

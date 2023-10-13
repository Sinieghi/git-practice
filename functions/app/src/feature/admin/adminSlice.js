import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  singleUser: [],
  isLoading: false,
  users: [],
};

export const crateAdminSession = createAsyncThunk(
  "admin/crateAdminSession",
  async (id, thunkAPI) => {
    try {
      await customFetch.post(`/api/v1/admin/${id}`);
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (sn, thunkAPI) => {
    try {
      const response = await customFetch(
        `/api/v1/users/admin-user-route/${
          thunkAPI.getState().userData.users.id
        }`,
        {
          signal: sn.signal,
        }
      );
      return response.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hidLoading: (state) => {
      state.isLoading = false;
    },
    adminCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    setHasNextPge: (state, { payload }) => {
      state.hasNextPage = payload;
    },
    setSingleThicket: (state, { payload }) => {
      state.singleUser[0] = payload;
    },
    clearSingleThicket: (state) => {
      state.singleUser = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(crateAdminSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(crateAdminSession.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(crateAdminSession.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  changePage,
  setHasNextPge,
  setSingleThicket,
  clearSingleThicket,
} = adminSlice.actions;
export default adminSlice.reducer;

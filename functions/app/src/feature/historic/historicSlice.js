import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createHistoricThunk,
  deleteHistoricThunk,
  getAllHistoricThunk,
  getHistoricThunk,
  updateHistoricThunk,
} from "./historicThunk";

const initialState = {
  isLoading: false,
  timeSpectative: "",
  driverMan: "",
  description: "",
  stops: false,
  howMany: "",
  addHist: false,
  histAdded: false,
  showHist: false,
  _id: "",
  hist: [],
  isEditing: false,
  msg: "",
  activeRotation: "card__fhater-hist-",
  activeRotationBack: "back__chield-hist-",
};

export const getAllHistoric = createAsyncThunk(
  "historic/getAllHistoric",
  getAllHistoricThunk
);

export const createHistoric = createAsyncThunk(
  "historic/createHistoric",
  createHistoricThunk
);

export const getHistoric = createAsyncThunk(
  "historic/getHistoric",
  getHistoricThunk
);

export const deleteHistoric = createAsyncThunk(
  "historic/deleteHistoric",
  deleteHistoricThunk
);
export const updateHistoric = createAsyncThunk(
  "historic/updateHistoric",
  updateHistoricThunk
);

const historicSlice = createSlice({
  name: "historic",
  initialState,
  reducers: {
    historicCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setAddHistoric: (state, { payload }) => {
      return { ...state, addHist: true, ...payload };
    },
    clearState: (state) => {
      return { ...state.hist };
    },
    showLoad: (state) => {
      state.isLoading = true;
    },
    hideLoad: (state) => {
      state.isLoading = false;
    },

    setStatus: (state, { payload }) => {
      return { ...state, showHist: payload.showHist, _id: payload._id };
    },
    setEditHistoric: (state, { payload }) => {
      return { ...state.hist, isEditing: true, ...payload };
    },
    clearMsg: (state) => {
      state.msg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHistoric.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHistoric.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.msg = payload.msg;
      })
      .addCase(createHistoric.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getHistoric.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHistoric.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { historic } = payload;
        if (!payload) return;
        state.hist = historic;
      })
      .addCase(getHistoric.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteHistoric.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteHistoric.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteHistoric.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateHistoric.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateHistoric.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.msg = payload.msg;
      })
      .addCase(updateHistoric.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  historicCollector,
  setAddHistoric,
  showLoad,
  hideLoad,
  setStatus,
  setEditHistoric,
  clearState,
  clearMsg,
} = historicSlice.actions;
export default historicSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFreteFromLocalStorage } from "../../utils/localStorage";
import {
  getFreteClientShowCaseThunk,
  getSingleFreteThunk,
} from "./singliFreteThunk";
const initialState = {
  isLoading: false,
  singleFrete: [getFreteFromLocalStorage()],
  userId: [],
  freteClientShowCase: [],
  isClienteShowcaseOpen: false,
  totalFretes: 0,
  numOfPage: 1,
  page: 1,
  clienteShowcaseEvent: "cliente showcase pag",
};

export const getSingleFrete = createAsyncThunk(
  "singleFrete/getSingleFrete",
  getSingleFreteThunk
);

export const getFreteClientShowCase = createAsyncThunk(
  "singleFrete/getFreteClientShowCase",
  getFreteClientShowCaseThunk
);

const singleFreteSlice = createSlice({
  name: "singleFrete",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    openClienteShowcase: (state) => {
      state.isClienteShowcaseOpen = true;
      console.log(state.isClienteShowcaseOpen);
    },
    closeClienteShowcase: (state) => {
      state.isClienteShowcaseOpen = false;
    },
    changePageOnClienteShowcase: (state, { payload }) => {
      // console.log(payload);
      state.page = payload;
    },
    clearObjectSingle: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleFrete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleFrete.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const { frete, userId } = payload;
        state.singleFrete = frete;
        state.userId = userId;
        state.isDeleteStatus = frete.isDeleteStatus;
      })
      .addCase(getSingleFrete.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getFreteClientShowCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFreteClientShowCase.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { fretes, numOfPage, totalFretes } = payload;
        state.freteClientShowCase = fretes;
        state.numOfPage = numOfPage;
        state.totalFretes = totalFretes;
      })
      .addCase(getFreteClientShowCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const {
  showLoading,
  openClienteShowcase,
  closeClienteShowcase,
  changePageOnClienteShowcase,
  clearObjectSingle,
} = singleFreteSlice.actions;
export default singleFreteSlice.reducer;

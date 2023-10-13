import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteFreteThunk,
  deleteStatusThunk,
  getAllFretesThunk,
  getFreteForHistoricThunk,
  getFretesThunk,
} from "./allFretesThunk";
import {
  BODYWORKCLOSED,
  BODYWORKOPEN,
  BODYWORKSPECIAL,
  DESTINY,
  HEAVY,
  LIGHT,
  MEDIUM,
  SORT_STATUS,
} from "../../utils/constantUtils";
import { setTargetToFilterField } from "../../customHooks/errorsDisplay";
const initialFiltersState = {
  name: "",
  city: "",
  toCity: "",
  loadType: "",
  colectDate: "",
  canvas: "",
  states: Object.values(SORT_STATUS),
  sortStatus: SORT_STATUS.DEFAULT,
  destinyStates: Object.values(DESTINY),
  destiny: DESTINY.DEFAULT,
  heavy: HEAVY.DEFAULT,
  heavyOpt: Object.values(HEAVY),
  medium: MEDIUM.DEFAULT,
  mediumOpt: Object.values(MEDIUM),
  light: LIGHT.DEFAULT,
  lightOpt: Object.values(LIGHT),
  bodyworkOpen: BODYWORKOPEN.DEFAULT,
  bodyworkOpenOpt: Object.values(BODYWORKOPEN),
  bodyworkClosed: BODYWORKCLOSED.DEFAULT,
  bodyworkClosedOpt: Object.values(BODYWORKCLOSED),
  bodyworkSpecial: BODYWORKSPECIAL.DEFAULT,
  bodyworkSpecialOpt: Object.values(BODYWORKSPECIAL),
};

const initialState = {
  isLoading: false,
  firstRenderLoadin: false,
  fretes: [],
  allFretes: [],
  freteHistoric: [],
  singleFrete: [],
  totalFretes: 0,
  numOfPage: 1,
  page: 1,
  numOfPageHist: 1,
  totalFretesHist: 0,
  pageHistoric: 1,
  fretePagesEvent: "fretes pag",
  msg: "",
  stats: {},
  isSidebarOpen: false,
  isDeleteStatus: false,
  hasNextPage: false,
  showPopup: false,
  eventType: "",
  url: "",
  ...initialFiltersState,
};

export const getAllFretes = createAsyncThunk(
  "allFretes/getAllFretes",
  getAllFretesThunk
);
export const getFretes = createAsyncThunk("frete/getFretes", getFretesThunk);

export const getFreteForHistoric = createAsyncThunk(
  "frete/getFreteForHistoric",
  getFreteForHistoricThunk
);
export const deleteFrete = createAsyncThunk(
  "frete/deleteFrete",
  deleteFreteThunk
);

//
export const deleteStatus = createAsyncThunk(
  "frete/deleteStatus",
  deleteStatusThunk
);

const allFreteSlice = createSlice({
  name: "allFretes",
  initialState,
  reducers: {
    shwLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    setExtPage: (state) => {
      state.hasNextPage = true;
    },
    unsetExtPage: (state) => {
      state.hasNextPage = false;
    },
    handleChanges: (state, { payload: { name, value, eventType } }) => {
      state.msg = "";
      state.eventType = eventType;
      state.page = 1;
      state.hasNextPage = false;
      state[name] = value;
    },
    setSingleFrete: (state, actions) => {
      state.singleFrete[0] = actions.payload;
    },
    handleChangesNotDebouced: (
      state,
      { payload: { name, value, eventType } }
    ) => {
      state.msg = "";
      state.eventType = eventType;
      state.page = 1;
      state.hasNextPage = false;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    clearMsg: (state) => {
      state.msg = "";
    },
    clearEvent: (state, { payload }) => {
      if (payload === "clear") state.eventType = ["empty"];
      delete state.eventType[payload];
    },
    clearFreteState: (state) => {
      state.fretes = [];
    },
    clearAllFreteOnRender: (state) => {
      state.allFretes = [];
    },
    clearFreteStateInfinitScroll: (state) => {
      return { ...state };
    },
    showPopupHist: (state, { payload }) => {
      state.showPopup = payload;
    },
    clearObjects: (state) => {
      return {
        ...state,
        page: 1,
        pageHistoric: 1,
      };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    changePageHistoric: (state, { payload }) => {
      state.pageHistoric = payload;
    },
    showAside: (state, { payload }) => {
      state.isSidebarOpen = payload;
    },
    setEditedFreteBackToArray: (state, { payload }) => {
      state.fretes.filter((ele, index) => {
        if (ele._id === payload.frete._id) {
          state.fretes[index] = payload.frete;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFretes.pending, (state) => {
        state.isLoading = true;
        if (state.page == 1) {
          state.firstRenderLoadin = true;
        }
      })
      .addCase(getAllFretes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.page == 1) {
          state.firstRenderLoadin = false;
        }
        const { fretes, totalFretes, numOfPage, msg } = payload;
        fretes.reverse();
        fretes.forEach((element) => {
          state.allFretes.unshift(element);
          return element;
        });
        state.msg = msg;
        state.numOfPage = numOfPage;
        state.totalFretes = totalFretes;
        if (fretes.length) state.hasNextPage = true;
        setTargetToFilterField();
      })
      .addCase(getAllFretes.rejected, (state) => {
        if (state.page == 1) {
          state.firstRenderLoadin = false;
        }
        state.isLoading = false;
      })
      .addCase(getFretes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFretes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { frete, numOfPage, totalFretes } = payload;
        state.fretes = frete;
        state.numOfPage = numOfPage;
        state.totalFretes = totalFretes;
      })
      .addCase(getFretes.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStatus.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteStatus.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getFreteForHistoric.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFreteForHistoric.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { frete, totalFretesHist, numOfPageHist } = payload;
        state.freteHistoric = frete;
        state.numOfPageHist = numOfPageHist;
        state.totalFretesHist = totalFretesHist;
      })
      .addCase(getFreteForHistoric.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  handleChanges,
  clearFilters,
  hideLoading,
  shwLoading,
  changePage,
  showAside,
  changePageHistoric,
  clearObjects,
  clearFreteState,
  clearFreteStateInfinitScroll,
  setExtPage,
  unsetExtPage,
  clearMsg,
  clearEvent,
  handleChangesNotDebouced,
  appendFunctionality,
  setSingleFrete,
  setEditedFreteBackToArray,
  showPopupHist,
  clearAllFreteOnRender,
} = allFreteSlice.actions;

export default allFreteSlice.reducer;

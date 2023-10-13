import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  collectDataThunk,
  setManyToConcludedThunk,
  setToConcludedThunk,
  updateFreteThunk,
} from "./freteThunkApi";
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
import { setUrlOnClickHandler } from "../../utils/beforeActionHandler";
const initialSearchState = {
  states: Object.values(SORT_STATUS),
  sortStatus: SORT_STATUS.DEFAULT,
  destinyStates: Object.values(DESTINY),
  destiny: DESTINY.DEFAULT,
  loadType: "",
  colectDate: "",
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
  name: "",
  email: "",
  phone: "",
  price: "",
  text: "",
  city: "",
  toCity: "",
  freteId: "",
  msg: "",
  freteSetMany: [],
  status: null,
  isEditing: false,
  isLoading: false,
  isConcludedLoading: false,
  isConcluded: false,
  ...initialSearchState,
};
export const collectData = createAsyncThunk(
  "frete/collectData",
  collectDataThunk
);

export const updateFrete = createAsyncThunk(
  "frete/updateFrete",
  updateFreteThunk
);

export const setToConcluded = createAsyncThunk(
  "frete/setToConcluded",
  setToConcludedThunk
);
export const setManyToConcluded = createAsyncThunk(
  "frete/setManyToConcludedThunk",
  setManyToConcludedThunk
);

const freteSlice = createSlice({
  name: "frete",
  initialState,
  reducers: {
    shwoLoading: (state) => {
      state.isLoading = true;
    },
    hidLoading: (state) => {
      state.isLoading = false;
    },
    shwoManyLoading: (state) => {
      return { ...state, isConcludedLoading: true };
    },
    hideManyLoading: (state) => {
      return { ...state, isConcludedLoading: false };
    },
    freteCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearSetManyArray: (state) => {
      state.freteSetMany = [];
    },
    setEditFrete: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    setEditToFalse: () => {
      return initialState;
    },
    showConcludedLoading: (state) => {
      state.isConcludedLoading = true;
    },
    hideConcludedLoading: (state) => {
      state.isConcludedLoading = false;
    },
    clearMsg: (state) => {
      state.msg = "";
    },
    clearMsgAndloadingState: (state) => {
      return { ...state, msg: "", isLoading: false };
    },
    populateSetArray: (state, { payload }) => {
      if (Boolean(state.freteSetMany.length)) return;
      state.freteSetMany.push(payload);
    },
    clearStateSetArray: (state) => {
      state.freteSetMany = [];
      setUrlOnClickHandler({
        eventType: "close",
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(collectData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(collectData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.msg = payload.msg;
        if (payload.msg === "success!") {
          toast.success("Frete postado!");
        }
      })
      .addCase(collectData.rejected, (state, { payload }) => {
        state.isLoading = false;
        const { msg, status } = payload;

        if (!msg?.match(",")) {
          toast.error(msg);
          return;
        }
        let val = msg?.match(",").index;
        let newMsg = msg?.slice(0, val);
        state.msg = newMsg;
        state.status = status;
        toast.error(newMsg);
      })
      .addCase(updateFrete.pending, (states) => {
        states.isLoading = true;
      })
      .addCase(updateFrete.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateFrete.rejected, (state, { payload }) => {
        state.isLoading = false;
        const { msg, status } = payload;
        if (!msg?.match(",")) {
          toast.error(msg);
        } else {
          let val = msg?.match(",").index;
          let newMsg = msg?.slice(0, val);
          state.msg = newMsg;
          state.status = status;
          newMsg !== "Verifique a data" && toast.error(newMsg);
          newMsg === "Verifique a data" && toast.error(msg);
        }
      })
      .addCase(setToConcluded.pending, (state) => {
        state.isConcludedLoading = true;
      })
      .addCase(setToConcluded.fulfilled, (state) => {
        state.isConcludedLoading = false;
      })
      .addCase(setToConcluded.rejected, (state) => {
        state.isConcludedLoading = false;
      })
      .addCase(setManyToConcluded.pending, (state) => {
        state.isConcludedLoading = true;
      })
      .addCase(setManyToConcluded.fulfilled, (state) => {
        state.isConcludedLoading = false;
      })
      .addCase(setManyToConcluded.rejected, (state) => {
        state.isConcludedLoading = false;
      });
  },
});

export const {
  freteCollector,
  setEditFrete,
  setEditToFalse,
  shwoLoading,
  hidLoading,
  clearMsgAndloadingState,
  showConcludedLoading,
  hideConcludedLoading,
  clearMsg,
  populateSetArray,
  clearStateSetArray,
  shwoManyLoading,
  hideManyLoading,
  clearSetManyArray,
} = freteSlice.actions;
export default freteSlice.reducer;

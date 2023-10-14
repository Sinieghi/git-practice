import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SUPPORT_ENUM } from "../../utils/constantUtils";
import { toast } from "react-toastify";

import { targetTheInput } from "../../customHooks/supportInputs";

import {
  deleteManyTicketThunk,
  deleteSingleTicketThunk,
  editSupportTicketThunk,
  getSingleSupportTicketThunk,
  getSupportTicketsThunk,
  supportPostThunk,
} from "./supportThunk";

const initialState = {
  supportEnum: Object.values(SUPPORT_ENUM),
  supportOpt: SUPPORT_ENUM.others,
  phone: "",
  email: "",
  message: "",
  isOpen: "",
  conclusion: "",
  status: "",
  suggestData: "",
  msg: "",
  support: [],
  supportTicket: [],
  deleteArray: [],
  singleTicket: [],
  userProfileSupTicket: [],
  isLoading: false,
  hasNextPage: false,
  btnLoading: false,
  page: 1,
};
export const supportPost = createAsyncThunk(
  "support/supportPost",
  supportPostThunk
);
export const getSupportTickets = createAsyncThunk(
  "support/getSupportTickets",
  getSupportTicketsThunk
);
export const getSingleSupportTicket = createAsyncThunk(
  "support/getSingleSupportTicket",
  getSingleSupportTicketThunk
);
export const editSupportTicket = createAsyncThunk(
  "support/editSupportTicket",
  editSupportTicketThunk
);
export const deleteSingleTicket = createAsyncThunk(
  "support/deleteSingleTicket",
  deleteSingleTicketThunk
);
export const deleteManyTicket = createAsyncThunk(
  "support/deleteMany",
  deleteManyTicketThunk
);
const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {
    supportDataCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    setHasNextPge: (state, { payload }) => {
      state.hasNextPage = payload;
    },
    setSingleThicket: (state, { payload }) => {
      state.singleTicket[0] = payload;
      let urlNavigate = new URL(window.location.href);
      urlNavigate.searchParams.set("isOpen", `${payload.isOpen}`);
      window.history.pushState(
        { path: urlNavigate.href },
        "",
        urlNavigate.href
      );
    },
    clearSingleThicket: (state) => {
      state.singleTicket = [];
    },
    clearThicketArray: (state) => {
      state.support = [];
    },
    populateDeleteArray: (state, { payload }) => {
      if (payload.check) state.deleteArray.push(payload);
      if (!payload.check) {
        state.deleteArray.filter((ele, index) => {
          if (ele.id === payload.id) return (state.deleteArray[index] = {});
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(supportPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(supportPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.msg);
      })
      .addCase(supportPost.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        if (!payload.msg?.match(",")) {
          toast.warning(payload.msg);
        } else {
          let newMsg = targetTheInput(payload.msg);
          toast.warning(newMsg);
        }
      })
      .addCase(getSupportTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSupportTickets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        payload?.support.forEach((element) => {
          state.support.unshift(element);
          return element;
        });
        if (Boolean(payload.support.length)) state.hasNextPage = true;
      })
      .addCase(getSupportTickets.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleSupportTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleSupportTicket.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userProfileSupTicket = payload.support;
      })
      .addCase(getSingleSupportTicket.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editSupportTicket.pending, (state) => {
        state.btnLoading = true;
      })
      .addCase(editSupportTicket.fulfilled, (state, { payload }) => {
        state.btnLoading = false;
        state.support.filter((ele, index) => {
          if (ele._id === payload.message._id) {
            state.support[index] = payload.message;
          }
        });
      })
      .addCase(editSupportTicket.rejected, (state) => {
        state.btnLoading = false;
      })
      .addCase(deleteSingleTicket.pending, (state) => {
        state.btnLoading = true;
      })
      .addCase(deleteSingleTicket.fulfilled, (state, { payload }) => {
        state.btnLoading = false;
        if (payload === "ok!") state.supportTicket = [];
        toast.success(payload);
      })
      .addCase(deleteSingleTicket.rejected, (state) => {
        state.btnLoading = false;
      });
  },
});

export const {
  supportDataCollector: supportDataCollector,
  changePage,
  setHasNextPge,
  populateDeleteArray,
  setSingleThicket,
  clearSingleThicket,
  clearThicketArray,
} = supportSlice.actions;
export default supportSlice.reducer;

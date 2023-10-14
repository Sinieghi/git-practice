import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { targetTheInputMessages } from "../../customHooks/supportInputs";
import {
  createMessageThunk,
  deleteManyMessagesThunk,
  deleteSingleMessageThunk,
  getAllMessagesThunk,
  getSingleMessageThunk,
} from "./messageThunk";

const initialState = {
  phone: "",
  email: "",
  sendMessage: "",
  name: "",
  msg: "",
  message: [],
  messageArray: [],
  deleteArray: [],
  singleMessage: [],
  isLoading: false,
  hasNextPage: false,
  btnLoading: false,
  page: 1,
  totalMessage: 1,
};

export const createMessage = createAsyncThunk(
  "message/createMessage",
  createMessageThunk
);

export const getAllMessages = createAsyncThunk(
  "message/getAllMessages",
  getAllMessagesThunk
);
export const getSingleMessage = createAsyncThunk(
  "message/getSingleMessage",
  getSingleMessageThunk
);
export const deleteSingleMessage = createAsyncThunk(
  "message/deleteSingleMessage",
  deleteSingleMessageThunk
);
export const deleteManyMessages = createAsyncThunk(
  "message/deleteManyMessages",
  deleteManyMessagesThunk
);
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    suportDataCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    handleChanges: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setHasNextPge: (state, { payload }) => {
      state.hasNextPage = payload;
    },
    setSingleMessage: (state, { payload }) => {
      state.singleMessage[0] = payload;
    },
    clearSingleMessage: (state) => {
      state.singleMessage = [];
    },
    clearMessageArray: (state) => {
      state.message = [];
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
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMessage.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        toast.success(payload.msg);
      })
      .addCase(createMessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        let newMsg = targetTheInputMessages(payload);
        toast.warning(newMsg);
      })
      .addCase(getAllMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMessages.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.totalMessage = payload.totalMessage;
        payload?.message.forEach((element) => {
          state.message.unshift(element);
          return element;
        });
        if (Boolean(payload.message.length)) state.hasNextPage = true;
      })
      .addCase(getAllMessages.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteSingleMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSingleMessage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(deleteSingleMessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(getSingleMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleMessage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(getSingleMessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(deleteManyMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteManyMessages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(deleteManyMessages.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      });
  },
});

export const {
  suportDataCollector,
  changePage,
  setHasNextPge,
  populateDeleteArray,
  handleChanges,
  setSingleMessage,
  clearSingleMessage,
  clearMessageArray,
} = messageSlice.actions;
export default messageSlice.reducer;

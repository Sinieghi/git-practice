import { toast } from "react-toastify";
import {
  clearMessageArray,
  clearSingleMessage,
  getAllMessages,
} from "./messageSlice";
import { setUrlOnClickHandler } from "../../utils/beforeActionHandler";
import customFetch from "../../utils/axios";
const query = new URLSearchParams(window.location.search);

export const deleteManyMessagesThunk = async (_, thunkAPI) => {
  const { deleteArray } = thunkAPI.getState().message;

  const res = deleteArray.map(async (e) => {
    const res = await customFetch.delete(
      `/api/v1/message/${query.get("ref").toString()}?item=${e.id}`
    );
    return res;
  });
  res[0]
    .then((res) => {
      setUrlOnClickHandler({
        eventType: "close",
      });
      toast.success(res.data.msg);
      thunkAPI.dispatch(getAllMessages({ signal: "refuel" }));
    })
    .catch((err) => console.log(err));
};
export const deleteSingleMessageThunk = async (_, thunkAPI) => {
  const query = new URLSearchParams(window.location.search);
  try {
    const res = await customFetch.delete(
      `/api/v1/message/${query.get("ref").toString()}?item=${query.get("item")}`
    );
    if (res.status === 200) {
      thunkAPI.dispatch(getAllMessages({ signal: "refuel" }));
    }
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getSingleMessageThunk = async (sn, thunkAPI) => {
  const query = new URLSearchParams(window.location.search);
  try {
    const response = await customFetch(
      `/api/v1/message/${query.get("ref").toString()}?item=${query.get("item")}`
    );
    return response.data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAllMessagesThunk = async (sn, thunkAPI) => {
  try {
    if (sn.signal === "refuel") {
      thunkAPI.dispatch(clearMessageArray());
      const response = await customFetch(
        `/api/v1/message/all-messages/${query.get("ref").toString()}?page=${1}`
      );
      thunkAPI.dispatch(clearSingleMessage());
      return response.data;
    }
    const { page } = thunkAPI.getState().message;
    const response = await customFetch(
      `/api/v1/message/all-messages/${query
        .get("ref")
        .toString()}?page=${page}`,
      { signal: sn.signal }
    );
    return response.data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createMessageThunk = async (_, thunkAPI) => {
  let data = {};
  const { phone, sendMessage, name, email } = thunkAPI.getState().message;
  data = { ...data, phone, sendMessage, name, email };

  try {
    const response = await customFetch.post(
      "/api/v1/message/send-message",
      data
    );

    return response.data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

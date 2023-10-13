import customFetch from "../../utils/axios";
import { setUrlOnClickHandler } from "../../utils/beforeActionHandler";
import { clearThicketArray, getSupportTickets } from "./support";
import { toast } from "react-toastify";
const query = new URLSearchParams(window.location.search);

export const deleteManyTicketThunk = async (_, thunkAPI) => {
  const { deleteArray } = thunkAPI.getState().support;
  try {
    const res = deleteArray.map(async (ele) => {
      const res = await customFetch.delete(
        `/api/v1/support/support-tickets/${query.get("ref")}/delete-many?item=${
          ele.id
        }`
      );
      return res;
    });
    res[0]
      .then((res) => {
        setUrlOnClickHandler({
          eventType: "close",
        });
        thunkAPI.dispatch(getSupportTickets({ signal: "refuel data" }));
        toast.success(res.data.msg);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.status);
  }
};

export const deleteSingleTicketThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.delete(
      `/api/v1/support/${query.get("ref")}?item=${query.get("item")}`
    );
    if (res.status === 200) {
      thunkAPI.dispatch(getSupportTickets({ signal: "refuel data" }));
    }
    return res.data.msg;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.status);
  }
};

export const editSupportTicketThunk = async (data, thunkAPI) => {
  const query = new URLSearchParams(window.location.search);
  data.isOpen = query.get("isOpen") === "true";

  try {
    const res = await customFetch.patch(
      `/api/v1/support/${query.get("ref")}?item=${query.get("item")}`,
      data
    );
    if (res.status === 201) {
      return res.data;
      // thunkAPI.dispatch(clearSingleThicket());
      // thunkAPI.dispatch(getSupportTickets({ signal: "refuel data" }));
    }
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.status);
  }
};

export const getSingleSupportTicketThunk = async (id, thunkAPI) => {
  try {
    const { userData } = thunkAPI.getState().userData;
    const { data } = await customFetch(`/api/v1/support/${userData?._id}`);
    return data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.status);
  }
};

export const getSupportTicketsThunk = async (sn, thunkAPI) => {
  const { page } = thunkAPI.getState().support;
  try {
    if (sn.signal === "refuel data") {
      thunkAPI.dispatch(clearThicketArray());
      const { data } = await customFetch(
        `/api/v1/support/support-tickets/${query
          .get("ref")
          .toString()}?page=${1}`
      );
      return data;
    }
    const { data } = await customFetch(
      `/api/v1/support/support-tickets/${query
        .get("ref")
        .toString()}?page=${page}`,
      { signal: sn.signal }
    );
    return data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const supportPostThunk = async (supportData, thunkAPI) => {
  const { userData } = thunkAPI.getState().userData;
  try {
    const res = await customFetch.post(
      `/api/v1/support/start-support/${userData._id}`,
      supportData
    );
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
  //precisa de email para conseguir enviar
};

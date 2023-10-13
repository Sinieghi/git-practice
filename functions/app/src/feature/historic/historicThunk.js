import { deletHistFromStorage } from "../../utils/localStorage";
import { setStatus } from "./historicSlice";
import { getFreteForHistoric } from "../allFreteSlice/allFreteSlice";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

export const getAllHistoricThunk = async (historic, thunkAPI) => {
  try {
    const { data } = customFetch(`/api/v1/historic/all-historic/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getHistoricThunk = async (freteId, thunkAPI) => {
  try {
    const { data } = await customFetch.get(
      `/api/v1/historic/single/${freteId}`
    );
    thunkAPI.dispatch(setStatus({ showHist: true, _id: freteId }));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createHistoricThunk = async (historic, thunkAPI) => {
  try {
    const { data } = await customFetch.post(
      `/api/v1/historic/criar/${historic.frete}`,
      historic
    );
    toast.success("Notas criadas");
    thunkAPI.dispatch(getFreteForHistoric());
    setTimeout(() => {
      window.history.go(-1);
    }, 500);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteHistoricThunk = async (frete, thunkAPI) => {
  try {
    const { data } = await customFetch.delete(
      `/api/v1/historic/${frete.historicBy._id}`
    );
    deletHistFromStorage();
    thunkAPI.dispatch(getFreteForHistoric());
    toast.success("Notas deletadas");
    return data;
  } catch (error) {
    toast.error("Houve algum erro tente mais tarde");
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateHistoricThunk = async (historic, thunkAPI) => {
  const { hist } = thunkAPI.getState().historic;
  try {
    const { data } = await customFetch.patch(
      `/api/v1/historic/${hist._id}`,
      historic
    );
    toast.success("Notas atualizadas");
    thunkAPI.dispatch(getFreteForHistoric());
    setTimeout(() => {
      window.history.go(-1);
    }, 500);
    return data;
  } catch (error) {
    toast.error("Houve algum erro tente mais tarde");
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

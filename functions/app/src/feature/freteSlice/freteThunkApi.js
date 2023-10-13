import {
  clearSetManyArray,
  hideConcludedLoading,
  shwoManyLoading,
} from "./freteSlice";
import {
  clearFreteState,
  getFreteForHistoric,
  getFretes,
  setEditedFreteBackToArray,
} from "../allFreteSlice/allFreteSlice";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

export const updateFreteThunk = async (frete, thunkAPI) => {
  const { freteId } = thunkAPI.getState().frete;
  try {
    const { data } = await customFetch.patch(
      `/api/v1/fretes/${freteId}`,
      frete
    );
    toast.success("Documento atualizado");
    thunkAPI.dispatch(setEditedFreteBackToArray(data));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      msg: error.response.data.msg,
      status: error.response.status,
    });
  }
};

export const setToConcludedThunk = async (
  { freteId, isConcluded, controlRequests },
  thunkAPI
) => {
  try {
    await customFetch.patch(`/api/v1/fretes/${freteId}/status`, {
      isConcluded: isConcluded,
    });
    if (controlRequests) {
      thunkAPI.dispatch(getFretes());
    }
    thunkAPI.dispatch(getFreteForHistoric());
    if (isConcluded) return toast.success("Frete movido para histórico");
    toast.success("Frete removido do histórico");
    thunkAPI.dispatch(hideConcludedLoading());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error.msg);
  }
};
export const setManyToConcludedThunk = async (_, thunkAPI) => {
  const { freteSetMany } = thunkAPI.getState().frete;
  thunkAPI.dispatch(shwoManyLoading());

  let frete = {
    isConcluded: true,
  };
  try {
    let res = await freteSetMany[0].map(async (id) => {
      const res = await customFetch.patch(
        `/api/v1/fretes/${id.id}/status`,
        frete
      );
      return res;
    });
    res[0]
      .then(() => {
        thunkAPI.dispatch(clearFreteState());
        thunkAPI.dispatch(clearSetManyArray());
        thunkAPI.dispatch(getFretes());
        toast.success("Pagina movida para histórico");
      })
      .catch((err) => console.log(err));

    // thunkAPI.dispatch(getFretes());
    // thunkAPI.dispatch(getFreteForHistoric());
    // if (frete.isConcluded) return toast.success("Frete movido para histórico");
    // toast.success("Frete removido do histórico");
    // thunkAPI.dispatch(hideConcludedLoading());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error.msg);
  }
};

export const collectDataThunk = async (frete, thunkAPI) => {
  try {
    const { data } = await customFetch.post("/api/v1/fretes/criar", frete);
    return data;
  } catch (error) {
    // thunkAPI.dispatch(clearMsgAndloadingState());

    return thunkAPI.rejectWithValue({
      msg: error.response.data.msg,
      status: error.response.status,
    });
  }
};

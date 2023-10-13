import { toast } from "react-toastify";
import {
  clearEvent,
  clearFreteState,
  getFreteForHistoric,
  getFretes,
  shwLoading,
} from "./allFreteSlice";
import { hideManyLoading } from "../freteSlice/freteSlice";
import customFetch from "../../utils/axios";
//FretePage
export const getAllFretesThunk = async (allFretes, thunkAPI) => {
  thunkAPI.dispatch(shwLoading());
  const {
    sortStatus,
    name,
    city,
    page,
    bodyworkSpecial,
    bodyworkClosed,
    bodyworkOpen,
    colectDate,
    canvas,
    loadType,
    light,
    medium,
    heavy,
    eventType,
  } = thunkAPI.getState().allFretes;
  let url = `/api/v1/fretes/todos?page=${page}&sortStatus=${sortStatus}&name=${name}&city=${city}&bodyworkSpecial=${bodyworkSpecial}&bodyworkClosed=${bodyworkClosed}&bodyworkOpen=${bodyworkOpen}&colectDate=${colectDate}&canvas=${canvas}&loadType=${loadType}&light=${light}&medium=${medium}&heavy=${heavy}`;
  try {
    if (eventType[0] === "notDeboucedReq" || eventType[0] === "debouceReq") {
      thunkAPI.dispatch(clearFreteState());
    }
    console.log(customFetch.get("/api/v1/fretes/todos"));
    const { data } = await customFetch.get(url, { signal: allFretes.signal });

    if (data.fretes.length > 9) thunkAPI.dispatch(clearEvent("clear"));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

//Freight component
export const getFretesThunk = async (freteId, thunkAPI) => {
  const { page } = thunkAPI.getState().allFretes;
  try {
    const response = await customFetch.get(
      `/api/v1/fretes/frete-user?page=${page}`
    );
    thunkAPI.dispatch(hideManyLoading());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

//historic
export const getFreteForHistoricThunk = async (freteId, thunkAPI) => {
  let url = `/api/v1/fretes`;
  const { pageHistoric } = thunkAPI.getState().allFretes;
  try {
    const { data } = await customFetch.get(
      `${url}/frete-user-historic?page=${pageHistoric}`
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteFreteThunk = async (freteId, thunkAPI) => {
  thunkAPI.dispatch(shwLoading());
  try {
    const response = await customFetch.delete(`/api/v1/fretes/${freteId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteStatusThunk = async (deleteStatus, thunkAPI) => {
  let { _id } = deleteStatus;

  if (!deleteStatus.isDeleteStatus) {
    deleteStatus.isDeleteStatus = true;
    try {
      await customFetch.patch(
        `/api/v1/fretes/${_id}/define_status`,
        deleteStatus
      );
      if (deleteStatus.eventType === "freteHist") {
        thunkAPI.dispatch(getFreteForHistoric());
        toast.warning("Documento em processo de exclusão");
        return;
      }
      thunkAPI.dispatch(getFretes());
      toast.warning("Documento em processo de exclusão");
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  } else if (deleteStatus.isDeleteStatus) {
    deleteStatus.isDeleteStatus = false;
    try {
      await customFetch.patch(
        `/api/v1/fretes/${_id}/define_status`,
        deleteStatus
      );
      if (deleteStatus.eventType === "freteHist") {
        thunkAPI.dispatch(getFreteForHistoric());
        toast.success("Status removidos");
        return;
      }
      thunkAPI.dispatch(getFretes());
      toast.success("Status removidos");
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
};

// export const deleteStatushistoricThunk = async (deleteStatus, thunkAPI) => {
//   let { _id } = deleteStatus;

//   if (!deleteStatus.isDeleteStatus) {
//     deleteStatus.isDeleteStatus = true;
//     try {
//       await customFetch.patch(`/api/v1/fretes/${_id}/define_status`, deleteStatus);

//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(response.data.error.msg);
//     }
//   } else if (deleteStatus.isDeleteStatus) {
//     deleteStatus.isDeleteStatus = false;
//     try {
//       await customFetch.patch(`/api/v1/fretes/${_id}/define_status`, deleteStatus);

//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(response.data.error.msg);
//     }
//   }
// };

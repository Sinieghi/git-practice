import { toast } from "react-toastify";
import { sendUserForUpdateOnRequest } from "../userFromDataSlice/userDataSlice";
import customFetch from "../../utils/axios";

export const updateSignatureThunk = async (data, thunkAPI) => {
  try {
    const res = await customFetch.patch(
      `/api/v1/update-subscription/${data.subscriptionID}`,
      {
        password: data.password,
        priceId: data.priceId,
        update: data.eventType,
      }
    );
    if (res.data.msg === "Processo de cancelamento abortado") {
      window.location.assign(res.data.url);
      return;
    }
    toast.success(res.data.msg);
    thunkAPI.dispatch(sendUserForUpdateOnRequest());
    setTimeout(() => {
      window.location.replace("/client_page?assinatura=atualizada");
    }, 2000);
    return res.data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.error.msg);
  }
};

export const cancelSignatureThunk = async (
  { subscriptionID, password },
  thunkAPI
) => {
  try {
    await fetch(`/api/v1/cancel/${subscriptionID}`, {
      method: "POST",
      body: JSON.stringify({ password }),

      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => window.location.assign(data.url));

    // toast.success(data.msg);
    // window.location.assign("/client_page/pagamentos");
    // return data.msg;
  } catch (error) {
    toast.error(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.error.msg);
  }
};

export const userSubscriptionThunk = async (sessionId, thunkAPI) => {
  try {
    const query = new URLSearchParams(window.location.search);
    const { data } = await customFetch(
      `/api/v1/subscription/${query.get("sessionId").toString()}`
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error.msg);
  }
};

import customFetch from "../../utils/axios";
import { setUserOnStorage } from "../../utils/localStorage";

export const getUserThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get(`/api/v1/users/single-user`);
    if (response.status != 200) return response.status;

    return { data: response.data, status: response.status };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const updateUserThunk = async (_, thunkAPI) => {
  try {
    const { email, name, userData } = thunkAPI.getState().userData;
    const response = await customFetch.patch(
      `/api/v1/users/updateUser?id=${userData._id}`,
      {
        email,
        name,
      }
    );
    if (response.status == 201) {
      return response.data;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const softDeleteThunk = async (reasons, thunkAPI) => {
  const { _id, subscriptionID } = thunkAPI.getState().userData.userData;
  try {
    const { data } = await customFetch.post(
      `/api/v1/users/${_id}?item=${subscriptionID._id}`,
      reasons
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const reverseSoftDeleteThunk = async (reasons, thunkAPI) => {
  const { _id, subscriptionID } = thunkAPI.getState().userData.userData;
  try {
    const { data } = await customFetch.post(
      `/api/v1/users/${_id}/abort-delete?item=${subscriptionID._id}`,
      reasons
    );
    window.location.pathname = "/client_page";
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const sendUserForUpdateOnRequestThunk = async (user, thunkAPI) => {
  try {
    const { data } = await customFetch.get(`/api/v1/users/role-plan`);
    setUserOnStorage({ userStatus: true });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

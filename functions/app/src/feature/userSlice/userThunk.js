import customFetch from "../../utils/axios";
import { deletUserFromStorage } from "../../utils/localStorage";
import { getUser, logoutUser } from "../userFromDataSlice/userDataSlice";
export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const query = new URLSearchParams(window.location.search);
    const response = await customFetch.post(
      `/api/v1/auth/register?session=${query.get("sessão")}`,
      user
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const verifyTokenThunk = async (user, thunkAPI) => {
  const queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  try {
    const { data } = await customFetch.post(`/api/v1/auth/verify-email`, {
      verificationToken: params.get("token"),
      email: params.get("email"),
    });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  let query = new URLSearchParams(window.location.search);
  try {
    if (user.eventType === "singIn popup") {
      const response = await customFetch.post("/api/v1/auth/login", user);

      setTimeout(() => {
        document.querySelector(".popup_content-form").classList.remove("show");
        document
          .querySelector(".popup_content-display-form")
          .classList.remove("show_contente");
      });
      setTimeout(() => {
        thunkAPI.dispatch(getUser());
      });
      if (query.get("sessão") === "home_page") {
        setTimeout(() => {
          window.location.pathname = "/produto_assinatura";
        }, 1000);
        return;
      }
      setTimeout(() => {
        window.history.back();
      }, 1000);
      return response.data;
    }
    const response = await customFetch.post("/api/v1/auth/login", user);
    if (query.get("sessão") === "home_page") {
      setTimeout(() => {
        window.location.pathname = "/produto_assinatura";
      }, 1000);
    }
    setTimeout(() => {
      thunkAPI.dispatch(getUser());
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const resentEmailThunk = async (user, thunkAPI) => {
  try {
    const { data } = await customFetch.post(
      "/api/v1/auth/login?sendNewEmail=resend-email",
      user
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const forgotPasswordThunk = async (emailForReset, thunkAPI) => {
  try {
    customFetch.post(`/api/v1/auth/forgot-password`, {
      email: emailForReset,
    });
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const resetPasswordThunk = async (passwordForReset, thunkAPI) => {
  const queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  try {
    await customFetch.post(`/api/v1/auth/reset-password`, {
      password: passwordForReset,
      token: params.get("token"),
      email: params.get("email"),
    });
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const logoutThunk = async (_, thunkAPI) => {
  try {
    await customFetch.delete(`/api/v1/auth/logout`);
    if (_) {
      // eslint-disable-next-line no-undef
      thunkAPI.dispatch(softDelete());
    }
    thunkAPI.dispatch(logoutUser());
    thunkAPI.dispatch(deletUserFromStorage());
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

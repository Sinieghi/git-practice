import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deletUserFromStorage,
  getFromLocalStorage,
  setUserOnStorage,
} from "../../utils/localStorage";
import {
  forgotPasswordThunk,
  loginUserThunk,
  logoutThunk,
  registerUserThunk,
  resentEmailThunk,
  resetPasswordThunk,
  verifyTokenThunk,
} from "./userThunk";
const initialState = {
  isLoading: false,
  logoutLoading: false,
  user: getFromLocalStorage(),
  passwordForReset: "",
  emailForReset: "",
  msg: "",
  isSidebarMenuOpen: false,
  isProfileSideBarOpen: false,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);
export const loginUser = createAsyncThunk("user/login", loginUserThunk);

export const verifyToken = createAsyncThunk(
  "user/verifyToken",
  verifyTokenThunk
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  forgotPasswordThunk
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  resetPasswordThunk
);

export const resentEmail = createAsyncThunk(
  "user/resentEmail",
  resentEmailThunk
);

export const logout = createAsyncThunk("user/logout", logoutThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
    userCollector: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    openSidebar: (state) => {
      state.isSidebarMenuOpen = true;
    },
    closeSidebar: (state, { payload }) => {
      if (payload) {
        state.isProfileSideBarOpen = false;
      }
      state.isSidebarMenuOpen = false;
    },
    openProfileSidebar: (state) => {
      state.isProfileSideBarOpen = true;
    },
    closeProfileSidebar: (state) => {
      state.isProfileSideBarOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        toast.success("Sucesso, vá até seu email para confirmação");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user, msg } = payload;
        state.user = user;
        if (msg === "success!") {
          toast.success("Pronto!");
        } else {
          toast.success(msg);
        }
        state.msg = msg;
        setUserOnStorage({ role: user, userStatus: true });
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.msg = payload;
        toast.error(payload);
      })
      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyToken.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.logoutLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutLoading = false;
        deletUserFromStorage();
      })
      .addCase(logout.rejected, (state) => {
        state.logoutLoading = false;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(resentEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resentEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resentEmail.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  logoutUser,
  userCollector,
  openSidebar,
  closeSidebar,
  openProfileSidebar,
  closeProfileSidebar,
} = userSlice.actions;
export default userSlice.reducer;

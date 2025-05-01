import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserPreviewType } from "../../types/auth/Auth";
import Cookies from "js-cookie";

export interface AuthStateType {
  token: string;
  user: AuthUserPreviewType;
}

const initAuthState: AuthStateType = {
  token: Cookies.get("token") ?? "",
  user: Cookies.get("user")
    ? JSON.parse(Cookies.get("user")!)
    : ({} as AuthUserPreviewType),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    changeUser: (state, action: PayloadAction<AuthUserPreviewType>) => {
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), {
        expires: 7,
        secure: true,
      });
    },
    setValues: (
      state,
      action: PayloadAction<{ token: string; user: AuthUserPreviewType }>,
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      console.log(action.payload);
      Cookies.set("token", action.payload.token, { expires: 7, secure: true });
      Cookies.set("user", JSON.stringify(action.payload.user), {
        expires: 7,
        secure: true,
      });
    },
    clearAuth: (state) => {
      state.token = "";
      state.user = {} as AuthUserPreviewType;
      Cookies.set("token", "", { expires: 7, secure: true });
      Cookies.set("user", "", { expires: 7, secure: true });
    },
  },
});

export const { setValues, clearAuth, changeUser } = authSlice.actions;
export default authSlice.reducer;

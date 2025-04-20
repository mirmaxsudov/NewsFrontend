import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthUserPreviewType} from "../../types/auth/Auth";
import Cookies from "js-cookie";

export interface AuthStateType {
    token: string;
    user: AuthUserPreviewType;
}

const initAuthState: AuthStateType = {
    token: localStorage.getItem("token") ?? "",
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : ({} as AuthUserPreviewType),
};

const authSlice = createSlice({
    name: "auth",
    initialState: initAuthState,
    reducers: {
        // action.payload will be { token: string; user: AuthUserPreviewType }
        setValues: (
            state,
            action: PayloadAction<{ token: string; user: AuthUserPreviewType }>
        ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            Cookies.set("token", action.payload.token, {expires: 7, secure: true})
            Cookies.set("user", JSON.stringify(action.payload.user), {expires: 7, secure: true})
        },
        clearAuth: (state) => {
            state.token = "";
            state.user = {} as AuthUserPreviewType;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const {setValues, clearAuth} = authSlice.actions;
export default authSlice.reducer;
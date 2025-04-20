import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthUserPreviewType} from "../../types/auth/Auth";

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
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
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
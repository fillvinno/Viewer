import { createSlice } from "@reduxjs/toolkit";
// import AuthService from "../../services/AuthService";
// import axios from "axios";
// import { API_URL } from "../../http";

const initialState = {
    user: {},
    isAuth: false
}

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload
        }
    }
})

export const {setAuth, setUser} = authSlice.actions 

export default authSlice.reducer
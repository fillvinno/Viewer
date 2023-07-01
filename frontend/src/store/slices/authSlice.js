import { createSlice } from "@reduxjs/toolkit";

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
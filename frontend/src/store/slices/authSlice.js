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
        // logout: async () => {
        //     try {
        //         const response = await AuthService.logout() 
        //         localStorage.removeItem('token')
        //         setAuth(false)
        //         setUser({})
        //     } catch (e) {
        //         console.log(e.response?.data?.message)
        //     }
        // },
        // checkAuth: async (state, action) => {
        //     try {
        //         const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
        //         console.log(response);
        //         localStorage.setItem('token', response.data.accessToken)
        //         setAuth(true)
        //         setUser(response.data.user)
        //     } catch (e) {
        //         console.log(e.response?.data?.message)
        //     }
        // }
    }
})

export const {setAuth, setUser, checkAuth} = authSlice.actions 

export default authSlice.reducer
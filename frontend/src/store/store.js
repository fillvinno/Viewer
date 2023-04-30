import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})
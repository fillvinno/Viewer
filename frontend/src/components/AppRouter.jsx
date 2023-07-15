import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRoutes, unAuthRoutes } from '../routes'
import { useDispatch } from 'react-redux'
import AuthService from '../services/AuthService';
import { setAuth, setUser } from '../store/slices/authSlice'
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.isAuth)

    useEffect(() => {
        async function fetchData() {
            try {
                if (localStorage.getItem('token')) {
                    const response = await AuthService.checkAuth()
                    console.log(response)
                    // запись токена в локалальное хранилище
                    localStorage.setItem('token', response?.data?.accessToken)
                    // меняем состояние в сторе
                    dispatch(setAuth(true))
                    dispatch(setUser(response?.data?.user))
            }
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
        fetchData()
    })

    return (
        <Routes>
            { auth 
                ? authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} exact/>) 
                : unAuthRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} exact/>)
            }
        </Routes>
    )
}
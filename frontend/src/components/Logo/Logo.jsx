import React from 'react'
import './Logo.css'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link to={'/home'} className="logo">
            <img src={logo} alt="logo" />
            <span>Viewer</span>
        </Link>
    )
}

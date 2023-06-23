import React, { useState } from 'react'
import './SearchBar.css'
import searchIcon from '../../img/searchIcon.svg'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const navigate = useNavigate()
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length === 0) {
      return
    }
    navigate(`/find/${text}`)
  }
  return (
    <form className="search-bar">    
        <input className='search-bar__txt' type="text" placeholder='Поиск' name='search' onChange={handleChange} autoComplete='new-password'/>
        <button className='search-bar__btn' onClick={handleSubmit}>
            <img src={searchIcon} alt="search" />
        </button>
    </form>
  )
}

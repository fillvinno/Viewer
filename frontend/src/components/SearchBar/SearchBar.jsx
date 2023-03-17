import React from 'react'
import './SearchBar.css'
import searchIcon from '../../img/searchIcon.svg'

export default function SearchBar() {
  return (
    <form className="search-bar">    
        <input className='search-bar__txt' type="text" placeholder='Search' />
        <button className='search-bar__btn'>
            <img src={searchIcon} alt="search" />
        </button>
    </form>
  )
}

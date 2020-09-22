import React from 'react'
import { NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to='/' className='nav-link link' aria-label='navigate to home page' alt="home">HOME</NavLink></li>
        <li><NavLink to='/favorites' className='nav-link link' aria-label='navigate to favorite plants' alt="list">YOUR PLANT LIST</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header
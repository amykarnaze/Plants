import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import { plantPic } from "../../assets/plantPic.png"

const Header = () => {
    return (
      <nav className="nav">
        {/* <Link className="link-name" to='/'><h1 className="title-name">Plants</h1><img className="img-plant" alt="plant" src={plantPic}/></Link> */}
        <span className="icon-and-logo">
          <img className='plant-img' alt='plant-pic' src={plantPic} />
          <label className='plant-logo'>Plant Magic</label>
        </span>
      <ul>
        <li><NavLink to='/' className='nav-link home-link' aria-label='navigate to home page'>HOME</NavLink></li>
        <li><NavLink to='/favorites' className='nav-link favorites-link' aria-label='navigate to favorite plants'>YOUR PLANT LIST</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header


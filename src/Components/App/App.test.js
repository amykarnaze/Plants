import React, { Component } from 'react'
import { screen, render, waitFor } from '@testing-library/react';
import App from './App';
import { NavLink, Link } from 'react-router-dom'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { plantPic } from "../../assets/plantPic.png"


describe('App component', () => {

  it.skip('should render Header component when page loads', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)

  })

  it.skip('should display all plants on page load', () => {

  })

  it.skip('should take the user to the homepage when the home button is clicked', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)

  })

  it.skip('should take the user to the homepage when the Plant List button is clicked', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)

  })


  
  
})
// <Header /><Route exact path="/" component={Plants}></Route>
//     <Route path='/plants/:id' 
//       render={(props) =>
//       <PlantInfo 
//       {...props}
//       />}
//     />

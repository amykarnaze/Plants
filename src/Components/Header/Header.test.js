import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Header from './Header.js'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
  it('should render on the page', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)

    const homeLink = screen.getByText('HOME')
    const plantList = screen.getByText('YOUR PLANT LIST')
    // const img = screen.getByAltText("plant-pic")

    expect(homeLink).toBeInTheDocument();
    expect(plantList).toBeInTheDocument();
    // expect(img).toBeInTheDocument();
  })

  
})
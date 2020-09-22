import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import Favorites from './Favorites.js'
import { BrowserRouter } from 'react-router-dom'
import { fetchAllPlants } from '../../API.js'
jest.mock('../../API')


describe('PlantInfo', () => {
  it('should render a favorite', () => {
    const favorites= [
        {
        common_name: "lawndaisy",
        family: "Asteracea",
        image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
        scientific_name: "Bellis perennis"
        },
        {
        common_name: "chicory",
        family: "Asteracea",
        image_url: "https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8",
        scientific_name: "Cichorium intybus"
        }
      ]
      const handleClick = jest.fn()
      render(<BrowserRouter><Favorites favorites={favorites} handleClick={handleClick}  /></BrowserRouter>)
      // const { getByText} = render(<BrowserRouter><Favorites favorites={findFavorites} handleClick={handleClick}  /></BrowserRouter>)
      // render(<BrowserRouter><App /></BrowserRouter>)
      const name = screen.getByText("lawndaisy")
      const sciName = screen.getByText("Bellis perennis")
      const url = screen.getByAltText("lawndaisy")

      expect(name).toBeInTheDocument();
      expect(sciName).toBeInTheDocument();
      expect(url).toBeInTheDocument();
  })
}) 
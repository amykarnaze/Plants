import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import Plants from './Plants.js'
import { BrowserRouter } from 'react-router-dom'
import { fetchAllPlants } from '../../API.js'
jest.mock('../../API')

describe('Plants', () => {
  it('should have the correct content when rendered', async () => {
    let plants = [
    {
      id: "524047",
      common_name: "lawndaisy",
      family: "Asteracea",
      image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
      scientific_name: "Bellis perennis"
    },
    {
      id: "111174",
      common_name: "lawndaisy",
      scientific_name: "Bellis perennis",
      image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
      scientific_name: "Bellis perennis"
    }
  ]
  let plant = [
  {
    id: "524047",
    common_name: "lawndaisy",
    family: "Asteracea",
    image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
    scientific_name: "Bellis perennis"
  }
]
    const favorites = [plant]
    const handleClick = jest.fn();
    const displayPlants = jest.fn()

    // render(<BrowserRouter><Plants plants={plant} favorites={favorites} handleClick={handleClick} displayPlants={displayPlants}/></BrowserRouter>)
    const {getByText} = render(<BrowserRouter><Plants plants={plant} favorites={favorites} handleClick={handleClick} displayPlants={displayPlants}/></BrowserRouter>)

    // const name = await waitFor(() => screen.getByText("lawndaisy"))
    const name = await waitFor(() => getByText("lawndaisy"))
    const sciName = screen.getByText("Bellis perennis")
    const url = screen.getByRole("img", "lawndaisy")

    expect(name).toBeInTheDocument();
    expect(sciName).toBeInTheDocument();
    expect(url).toBeInTheDocument();
  })
  })
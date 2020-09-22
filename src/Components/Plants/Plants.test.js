import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import Plants from './Plants.js'
import { BrowserRouter } from 'react-router-dom'
jest.mock('../../API')

describe('Plants', () => {
  it('should have the correct content when rendered', async () => {
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
    const {getByText} = render(<BrowserRouter><Plants plants={plant} favorites={favorites} handleClick={handleClick} displayPlants={displayPlants}/></BrowserRouter>)
    const name = await waitFor(() => getByText("lawndaisy"))
    const sciName = screen.getByText("Bellis perennis")

    expect(name).toBeInTheDocument();
    expect(sciName).toBeInTheDocument();
  })
})
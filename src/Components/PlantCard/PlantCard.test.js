import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import PlantCard from './PlantCard.js'
import { BrowserRouter } from 'react-router-dom'

describe('Plants', () => {
  it('should have the correct content when rendered', async () => {
    const handleClick = jest.fn()
    const plant = {
      common_name: "lawndaisy",
      family: "Asteracea",
      image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
      scientific_name: "Bellis perennis"
    }
    render(<BrowserRouter><PlantCard plant={plant} handleClick={handleClick} isFavorite={plant} /></BrowserRouter>)

    const plantImg = await waitFor(() => screen.getByAltText('lawndaisy', { exact: false }))
    const name = screen.getByText("lawndaisy")
    const sciName = screen.getByText("Bellis perennis")

    expect(name).toBeInTheDocument();
    expect(sciName).toBeInTheDocument();
    expect(plantImg).toBeInTheDocument();

  })
})
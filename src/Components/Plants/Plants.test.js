import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import Plants from './Plants.js'
import { BrowserRouter } from 'react-router-dom'
import { fetchAllPlants } from '../../API.js'
jest.mock('../../API')

describe('Plants', () => {
  it('should render plants', async () => {
    // mock fetch call
    fetchAllPlants.mockResolvedValue([{
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
    }])

// render  component
      render(<BrowserRouter><Plants /></BrowserRouter>)

      const name = await waitFor(() => screen.getByText("lawndaisy"))
      const sciName = await waitFor(() => screen.getByText("Bellis perennis"))
      const url = await waitFor(() => screen.getByRole("img", "lawndaisy"))

      expect(name).toBeInTheDocument();
      expect(sciName).toBeInTheDocument();
      expect(url).toBeInTheDocument();

  })
  })
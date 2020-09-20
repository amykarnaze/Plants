import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom';

import { screen, render, waitFor } from '@testing-library/react';
import { NavLink, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { fetchAllPlants } from '../../API'
import Plants from '../Plants/Plants'
jest.mock('../../API')


describe('App component', () => {
  it('should render plants', async () => {
    // mock fetch call
    fetchAllPlants.mockResolvedValueOnce({
      data: [
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
    ]})

      // const { getByText} = render(<BrowserRouter><Plants /></BrowserRouter>)
      render(<BrowserRouter><App /></BrowserRouter>)
      // plants = [{
      //     common_name: "lawndaisy",
      //     family: "Asteracea",
      //     image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
      //     scientific_name: "Bellis perennis"
      //   },
      //   {
      //     common_name: "chicory",
      //     family: "Asteracea",
      //     image_url: "https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8",
      //     scientific_name: "Cichorium intybus"
      //   }
      // ]
      const name = await waitFor(() => screen.getByText("lawndaisy"))
      const sciName = await waitFor(() => screen.getByText("Bellis perennis"))
      const url = await waitFor(() => screen.getByAltText("lawndaisy"))

      expect(name).toBeInTheDocument();
      expect(sciName).toBeInTheDocument();
      expect(url).toBeInTheDocument();

  })
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

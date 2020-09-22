import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { NavLink, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { fetchAllPlants } from '../../API'
import Header from '../Header/Header'
jest.mock('../../API')

describe('App component', () => {

  it('should render plants', async () => {
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
      const { getByText} = render(<BrowserRouter><App /></BrowserRouter>)
      const name = await waitFor(() => screen.getByText("lawndaisy"))
      const sciName = await waitFor(() => screen.getByText("Bellis perennis"))
      const url = await waitFor(() => screen.getByAltText("lawndaisy"))

      expect(name).toBeInTheDocument();
      expect(sciName).toBeInTheDocument();
      expect(url).toBeInTheDocument();
  })
  

  it('should have the right information when the page loads', async () => {
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
      const { getByText} = render(<BrowserRouter><App /></BrowserRouter>)
    // render(<BrowserRouter><App /></BrowserRouter>)
    const name =  await waitFor(() =>  screen.getByText("lawndaisy"))
    const homeLink = screen.getByText('home', { exact: false })
    const plantList = screen.getByText('YOUR PLANT LIST')
    const search = screen.getByPlaceholderText('search for plant', { exact: false })
    const sciName = screen.getByText("Bellis perennis")
    const url = screen.getByAltText("lawndaisy")
    const img = screen.getByAltText("Bellis perennis")
    const findButton = screen.getByRole("button", {name: 'Find'})
    expect(homeLink).toBeInTheDocument();
    expect(plantList).toBeInTheDocument()
    expect(search).toBeInTheDocument();
    expect(findButton).toBeInTheDocument()
    expect(name).toBeInTheDocument();
    expect(sciName).toBeInTheDocument();
    expect(url).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  })
  
  it.skip('should take the user to the favorite page when the favorite link is clicked', async () => {
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
      const name = await waitFor(() => screen.getByText("lawndaisy"))
      const sciName = screen.getByText("Bellis perennis")
      const url = screen.getByAltText('lawndaisy', { exact: false })
      const homeButton = screen.getByRole('button', {name: "home"})
      const favoritePage = screen.getByRole('button', {name: "Your plant list"})
      const search = screen.getByRole('searchbox', { name: /search/i })
      const searchInput = screen.getByPlaceholderText('search for plant')
      const submitButton = screen.getByRole('button', {name: 'Find'})
      const favStar = screen.getByAltText("favorite")
      
    fireEvent.change(searchInput, { target: { value: 'daisy' } })
    expect(search).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(favoritePage).toBeInTheDocument()
    expect(favStar).toBeInTheDocument()
    expect(name).toBeInTheDocument();
    expect(sciName).toBeInTheDocument();
    expect(url).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();

    fireEvent.click(homeButton);
    // fireEvent.click(loveButton);
  })

  it.skip('should take the user to the favorite page when the favorite link is clicked', async () => {
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
      render(<BrowserRouter><App /></BrowserRouter>)
        const search = await waitFor(() => screen.getByRole('searchbox', { name: /search/i }))
        const searchInput = screen.getByPlaceholderText('search for plant')
        const submitButton = screen.getByRole('button', {name: 'Find'})

        fireEvent.change(searchInput, { target: { value: 'lawndaisy' } })
        fireEvent.click(submitButton);

        const commName = screen.findByText("lawndaisy")
        const sciName = screen.findByText("Bellis perennis")
        const url = screen.findByAltText('lawndaisy', { exact: false })

        expect(commName).toBeInTheDocument()
        expect(url).toBeInTheDocument();
        expect(sciName).toBeInTheDocument();
  })

  // it.skip('should take the user to the favorites page when the Plant List button is clicked', () => {
  //   render(<BrowserRouter><App /></BrowserRouter>)

  // })


  
  
})

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
// <Header /><Route exact path="/" component={Plants}></Route>
//     <Route path='/plants/:id' 
//       render={(props) =>
//       <PlantInfo 
//       {...props}
//       />}
//     />

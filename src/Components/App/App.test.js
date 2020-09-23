import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'
jest.mock('../../API')
import { fetchAllPlants, fetchPlantInfo } from '../../API'
import Header from '../Header/Header'

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

  it('should render things', () => {
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
    const appHeading =  screen.getByRole('heading', {name: 'EDIBLE PLANTS!', exact: false})


    expect(appHeading).toBeInTheDocument()
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
  
  it('should take the user to the favorite page when the favorite link is clicked', async () => {
    const { getByText} = render(<BrowserRouter><App /></BrowserRouter>)
    const favoritesLink = screen.getByRole("link", {name: 'navigate to favorite plants'})

    fireEvent.click(favoritesLink)

    const favHeading= screen.getByRole("heading", {name: "Your Favorites", exact: false})

    expect(favHeading).toBeInTheDocument()
  })

  it('should take the user to the home page when the home link is clicked', async () => {
    const { getByText } = render(<BrowserRouter><App /></BrowserRouter>)
    const homeLink = screen.getByRole("link", {name: 'navigate to home page'})

    fireEvent.click(homeLink)

    const homeHeading = screen.getByRole('heading', { name: /check out these plants!/i })
    const searchBox = screen.getByRole("searchbox", {name: "search", exact: false})

    expect(homeHeading).toBeInTheDocument()
    expect(searchBox).toBeInTheDocument()
  })

  it('should take the user to the plants detail page when a plant is clicked', async () => {
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
      fetchPlantInfo.mockResolvedValue({
        data: {
          common_name: "lawndaisy",
          family: "Asteraceae",
          edible_part: ["flowers"],
          observations: "Madeira, Europe to Medit. and C.Asia"
        }
      })

      render(<MemoryRouter><App /></MemoryRouter>)
      
      const plantImgLink = await waitFor(() => screen.findByRole('img', {name:/lawndaisy/i}))
      
      fireEvent.click(plantImgLink)
      
      const plantDetailsHeading = await waitFor(() => screen.getByRole('heading', { name: /edible plant information and locations/i, exact: false}))
      expect(plantDetailsHeading).toBeInTheDocument()
      const plantFamily= await waitFor(() => screen.getByText('Asteraceae', {exact: false}))
      expect(plantFamily).toBeInTheDocument()
  })
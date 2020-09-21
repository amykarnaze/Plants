import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import PlantInfo from './PlantInfo.js'
import { BrowserRouter } from 'react-router-dom'
import { fetchPlantInfo } from '../../API.js'
jest.mock('../../API')


describe('PlantInfo', () => {
  it('should have the correct content when rendered', async () => {
    const props = {match: {params: {id: 524047}}}
    fetchPlantInfo.mockResolvedValue( {
     data:
        {
          common_name: "lawndaisy",
          family: "Asteracea",
          image_url: "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
          scientific_name: "Bellis perennis"
        
        }
    })

    render(<BrowserRouter><PlantInfo {...props}/></BrowserRouter>)
    // const {getByText} = render(<BrowserRouter><PlantInfo {...props}/></BrowserRouter>)

    const name = await waitFor(() => screen.getByText("lawndaisy", {exact: false}))
    //const name = await waitFor(() => getByText("lawndaisy", {exact: false}))
    // const sciName  = screen.getByText("Bellis perennis")
    const url = screen.getByRole("img", "lawndaisy")

    expect(name).toBeInTheDocument();
    // expect(sciName).toBeInTheDocument();
    expect(url).toBeInTheDocument();    

  })
})

// const { getByText } = render(<App />);
// const idea = await waitFor(() => getByText("Sweaters for pugs"));

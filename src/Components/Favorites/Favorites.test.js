import React from 'react';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import Favorites from './Favorites.js'
import { BrowserRouter } from 'react-router-dom'
import { fetchPlantInfo } from '../../API.js'
jest.mock('../../API')


describe('PlantInfo', () => {
  it('should have the correct content when rendered', async () => {

  })
}) 
import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import Search from './Search.js'
jest.mock('../../API');

describe('Search Component', () => {
  it('should render a search bar and button', () => {
    render(<Search />);
    const search = screen.getByRole('searchbox', { name: /search/i })
    const searchInput = screen.getByPlaceholderText('search for plant')
    const submitButton = screen.getByRole('button', {name: 'Find'})

    expect(search).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('should check input is clear after submit', () => {
    const searchPlants = jest.fn();
    render(<Search searchPlants={searchPlants} />)

    const searchInput = screen.getByPlaceholderText('search for plant')
    const submitButton = screen.getByRole('button', {name: 'Find'})

    expect(searchInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(searchInput, {target: {name: 'search', value: 'Anything'}})
    expect(searchInput.value).toEqual('Anything')
    fireEvent.click(submitButton)
    
    expect(searchInput.value).toHaveLength(0)
  })
})
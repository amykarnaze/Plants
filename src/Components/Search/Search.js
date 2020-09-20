import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Search.css'
import App from '../App/App'

class Search extends Component {
  constructor(props) {
    super(props)
      this.state = {
        search: '',
      }
  }

  handleClick = (event) => {
    let input = event.target.value
    this.setState({search: input})
  }

  searchInput = (event) => {
    event.preventDefault()
    this.props.searchPlants(this.state.search)
    this.setState({search: ''})
  }

  render() {
    return(
      <section className='search-container' alt="search-container">
      <input id='search-input' aria-label='search' className='search-input' type='search' placeholder='search for plant' name='search'
        onChange={this.handleClick}
        value={this.state.search}
      />
      <button className='search-button' onClick={this.searchInput}>Find</button>
      </section>
    )
  }
}

export default Search

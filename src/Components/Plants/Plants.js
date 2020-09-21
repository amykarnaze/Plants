import React, { Component } from 'react'
import './Plants.css'
import { fetchAllPlants } from '../../API.js'
import PlantCard from '../PlantCard/PlantCard'
import Favorites from '../Favorites/Favorites'
import { Route, Link, Switch } from 'react-router-dom';

class Plants extends Component {
  constructor(props) {
    super(props)
  }

  isFavorite(plant) {
    return this.props.favorites ? this.props.favorites.includes(plant.id) : false
  }

  displayPlants() {
    return this.props.plants.map(plant => {
      return <PlantCard plant={plant} handleClick={this.props.handleClick} isFavorite={this.isFavorite(plant)} />
    })
  }

  render() {
    let plantCards = this.displayPlants()
    return (
        <span className="plants-here-container">{plantCards}</span> 
    )
  }
}

export default Plants

Plants.propTypes = {
  isFavorite: PropTypes.func,
  plantCards: PropTypes.func
}
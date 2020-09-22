import React, { Component } from 'react'
import './Plants.css'
import PlantCard from '../PlantCard/PlantCard'
import PropTypes from 'prop-types'

class Plants extends Component {

  displayPlants() {
    return this.props.plants.map(plant => {
      return <PlantCard plant={plant} handleClick={this.props.handleClick} />
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
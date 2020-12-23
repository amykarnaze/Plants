import React from 'react'
import './Favorites.css'
import PropTypes from 'prop-types'
import PlantCard from '../PlantCard/PlantCard'

const Favorites = (props) => {
  const displayFavorites = () => {
    if (props) {
      let foundFavorites = props.favorites.map(favorite => {
        return <PlantCard plant={favorite} handleClick={props.handleClick}/>
      })
    return foundFavorites
  }
}
  return (
    <section className="favorites">
        <h1>Your Favorites</h1>
      {displayFavorites()}
    </section>
  )
}

export default Favorites

Favorites.propTypes = {
  plants: PropTypes.object,
  favorites: PropTypes.array,
  displayFavorites: PropTypes.func
}
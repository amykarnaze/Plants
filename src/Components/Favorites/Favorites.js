import React from 'react'
import './Favorites.css'
import PropTypes from 'prop-types'
import PlantCard from '../PlantCard/PlantCard'

//make same as plants.js
//instead of all plants, just use favorites
// display fav here 
// pass fav comp all of favorites so 


const Favorites = (props) => {
  const displayFavorites = () => {
    if (props) {
      let foundFavorites = props.favorites.map(favorite => {
        return <PlantCard plant={favorite} />
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
//<section>{props.favorite.length < 0 ? <p className='no-favorites'>You don't have any loved plants right now</p> :

// </section>

export default Favorites

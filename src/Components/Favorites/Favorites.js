import React from 'react'
import './Favorites.css'
import PropTypes from 'prop-types'
import '../Plants/Plants'

const Favorites = (props) => {
console.warn(props)
  return (
    <section className="favorites">
      <section>{!props.favorite.length < 0 ? <p className='no-favorites'>You don't have any loved plants right now</p> :
      <section><h1>Your Favorites</h1>
      <h2>{props.favorite.common_name}</h2>
      </section>
  }
    </section>
    </section>
  )

}

export default Favorites

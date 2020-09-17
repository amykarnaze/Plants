import React from 'react'
import './PlantCard.css'
import '../Plants/Plants'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const PlantCard = (props) => {
  // console.warn("PPP", props)
  return(
    <section className="plant-card">
      <Link to={{
        pathname:`plants/${props.plant.id}`
      }}>
      <h1>{props.plant.common_name}</h1>
      <img className="plant-card-image" alt={props.plant.common_name} src={props.plant.image_url} />
      <h3>{props.plant.scientific_name}</h3>
      </Link>
    </section>
  )
}

export default PlantCard
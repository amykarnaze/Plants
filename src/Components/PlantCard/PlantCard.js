import React from 'react'
import './PlantCard.css'
import '../Plants/Plants'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const PlantCard = (props) => {
  console.log(props)
  return(
    <section className="plant-card">

    <Link to={{
      pathname:`plants/${props.plant.id}`
      }}>
        <img className="plant-card-image" alt={props.plant.common_name} src={props.plant.image_url} />
      </Link>
        <h1 className="common-name">{props.plant.common_name}</h1>
        <h3 className="sci-name">{props.plant.scientific_name}</h3>
     <button id={props.plant.id} onClick={props.handleClick} className="add-button">Love</button>
    </section>
  )
}

export default PlantCard
import React from 'react'
import './PlantCard.css'
import '../Plants/Plants'
import { Link } from 'react-router-dom'
import fav from '../../assets/fav.png'
import unfav from '../../assets/unfav.png'
import PropTypes from 'prop-types'

const PlantCard = (props) => {
  return(
    <section className="plant-card">
       <h1 className="common-name">{props.plant.common_name}</h1>
        <h3 className="sci-name">{props.plant.scientific_name}</h3>
      <Link to={{pathname:`plants/${props.plant.id}` }}>
        <img className="plant-card-image" alt={props.plant.common_name} src={props.plant.image_url} />
      </Link>
      <button id={props.plant.id} onClick={props.handleClick} className={`add-button ${props.isFavorite ? "on" : ""}`}>Love</button>
    </section>
        
          /*            `banner ${active ? "active" : ""}`

          /*<img id={props.plant.id} onClick={props.handleClick} className='unfav' src={props.isFavorite ? fav : unfav} alt="favorite" />
           */
  )
}

export default PlantCard

PlantCard.PropTypes= {
  handleClick: PropTypes.func
}
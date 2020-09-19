import React, { Component } from 'react'
import './Plants.css'
import { fetchAllPlants } from '../../API.js'
import PlantCard from '../PlantCard/PlantCard'
import Favorites from '../Favorites/Favorites'
import { Route, Link, Switch } from 'react-router-dom';


// import { connect } from 'react-redux'
// import { setPlants } from '../../actions';
// import { bindActionCreators } from 'redux';

class Plants extends Component {
  constructor(props) {
    super(props)
    console.log("PROPRO", this.props)

  }

  // componentDidMount() {
  //   fetchAllPlants() 
  //   .then(data => this.setprops({plants: data.data}))
  //   // .then(data => console.log("PLANTS", data.data))
  //   .catch(error => alert(error.message))
  // }

  
  // displayFavorites = () => {
  //   if (this.props.favorites) {
  //     // console.log(this.props.favorites)
  //   let foundFavorites =  this.props.favorites.map(favorite => {
  //     return <Favorites favorite={favorite} />
  //     // return <PlantCard plant={favorite} />
  //   })
  //   // console.log({foundFavorites})
  //   return foundFavorites

  //   }
  // }
  

// if the plants array contains the favorites id
// change display

// isfavorite ? display1 : display2
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
      <section className="actual-plants-container">
        <div className="plants-here-container">{plantCards}</div> 
      </section>
    )
  }
}
export default Plants
       //{<div className="favorites-here-container">{favorites}</div>}

//<Link to="/favorites">
  //<Favorites favorites={favorites} />
  //</Link>

// export const mappropsToProps = ({ plants }) => ({
//   plants
// })

// export const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     setPlants,
//   }, dispatch)
// )

// export default connect(mappropsToProps, mapDispatchToProps)(Plants);
import React, { Component } from 'react'
import './Plants.css'
import { fetchAllPlants } from '../../API.js'
import PlantCard from '../PlantCard/PlantCard'
import Favorites from '../Favorites/Favorites'

// import { connect } from 'react-redux'
// import { setPlants } from '../../actions';
// import { bindActionCreators } from 'redux';

class Plants extends Component {
  constructor(props) {
  super(props)
    this.state = {
      plants: [], 
      favorites: []
    }
  }

  componentDidMount() {
    fetchAllPlants() 
    .then(data => this.setState({plants: data.data}))
    // .then(data => console.log("PLANTS", data.data))
    .catch(error => alert(error.message))
  }

  const handleClick = async (event) => {
    const id = Number(event.target.id);
    const lovedPlant = await this.state.plants.find(plant => plant.id === id)
    console.log("lovedPlant", lovedPlant)
    const onList = await this.state.favorites.includes(lovedPlant)
    console.log("OnLIST",onList)

    if(onList) {
      this.setState({favorites: [...this.state.favorites, lovedPlant]})
      // this.state.favorites.concat(lovedPlant)
      console.warn(this.state.favorites)
    } else {
      let removePlant = this.state.favorites.filter(plant => plant !== lovedPlant)
      this.setState({favorites: removePlant})
    }
    
  }

  // displayFavorites = () => {
  //   // if (this.state.favorites) {
  //     console.log(this.state.favorites)
  //   let foundFavorites =  this.state.favorites.filter(favorite => {
  //     return <Favorites favorite={favorite} handleClick={this.handleClick} />
  //   })
  //   console.warn(foundFavorites)
  //   return foundFavorites

  //   // }
  // }

  displayPlants() {
    // console.log("PPP", this.state.plants)
    return this.state.plants.map(plant => {
      // console.log('plantsmap', plant)
      return <PlantCard plant={plant} addFavorite={this.handleClick} />
    })
  }

  render() {
    let plantCards = this.displayPlants()
    // let favorites = this.displayFavorites()
    {console.log(this.state.favorites)}
    return (
      <section>
        <h1>PLANTS!</h1>
       {this.state.plants ? <section className="plants-container">{plantCards}</section> : <h1>Sorry, no plant right now</h1>}
       {this.state.favorites ? <section className="favorites-container"></section> : <h1>You dont have any right now</h1>}
      </section>
    )
  }
}
export default Plants

// export const mapStateToProps = ({ plants }) => ({
//   plants
// })

// export const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     setPlants,
//   }, dispatch)
// )

// export default connect(mapStateToProps, mapDispatchToProps)(Plants);
import React, { Component } from 'react'
import './Plants.css'
import { fetchAllPlants } from '../../API.js'
import PlantCard from '../PlantCard/PlantCard'

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

  handleClick = (event) => {
    const id= event.target.id;
    const lovedPlant = this.state.plants.find(plant => plant.id === id)
    const isLoved = this.state.favorites.includes(lovedPlant)
    const onList = this.state.favorites.includes(lovedPlant)

    if(!onList) {
      this.setState({favorites: [...this.state.favorites, lovedPlant]})
    }
  }

  displayPlants() {
    // console.log("PPP", this.state.plants)
    return this.state.plants.map(plant => {
      // console.log('plantsmap', plant)
      return <PlantCard plant={plant} addFavorite={this.handleClick} />
    })
  }

  render() {
    let plantCards = this.displayPlants()
    return (
      <section>
        <h1>PLANTS!</h1>
       {this.state.plants ? <section className="plants-container">{plantCards}</section> : <h1>Sorry, no plant right now</h1>}
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
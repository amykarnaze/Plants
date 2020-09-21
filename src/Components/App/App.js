// import React from 'react';
// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import Plants from '../Plants/Plants'
import PlantInfo from '../PlantInfo/PlantInfo'
import Favorites from '../Favorites/Favorites'
import PlantCard from '../PlantCard/PlantCard'
import Search from '../Search/Search'
import { fetchAllPlants } from '../../API.js'
import PropTypes from 'prop-types'

import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      plants: [],
      favorites: [],
      foundPlants: []
      }
  }

  componentDidMount = async () => {
    await fetchAllPlants() 
    .then(data => this.setState({plants: data.data}))
    // .then(data => console.log("PLANTS", data.data))
    .catch(error => alert(error.message))
  }


  handleClick = async (event) => {
    const id = Number(event.target.id);
    const lovedPlant = await this.state.plants.find(plant => plant.id === id)
    console.log("lovedPlant", lovedPlant)
    const onList = await this.state.favorites.includes(lovedPlant)
    if(!onList) {
      const newFavorites = [... this.state.favorites, lovedPlant]
      this.setState({favorites: newFavorites})
    } else {
      let removePlant = this.state.favorites.filter(plant => plant !== lovedPlant)
      this.setState({favorites: removePlant})
    }
  }

  searchPlants = async (search) => {
    // const plantSearch = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()
    let findPlants = await this.state.plants.forEach(plant => {
      if (plant.common_name.includes(search)) {
        this.setState({foundPlants: [plant]})
      }
    })
    return findPlants;
  }

  // displayFoundPlants = async () => {
  //   if (this.state.foundPlants) {
  //     let displayPlants = await this.state.foundPlants.map(found => {
  //       return <PlantCard plant={found} />
  //     })
  //     return displayPlants
  //   }
  // }

  render () {
    return (
      <section className="App-container">
        <Header />
        <h1>PLANTS!</h1>
        <Route exact path={'/'} render={() => {
          return (<>
            <h1 className='browse-plants'>Browse plants</h1>
            <Search searchPlants={this.searchPlants}/>
            <section className="found-plant-cards" alt="found-plant-cards">
              { this.state.foundPlants ? 
                this.state.foundPlants.map(plant => {
                  return (
                    <>
                      <h1 className='found-plant'>{plant.common_name}</h1>
                      <h3 className='found-plant author'>{plant.scientific_name}</h3>
                      <Link to={`/plants/${plant.id}`}>
                        <img className="plant-image" alt={plant.common_name} src={plant.image_url} />
                      </Link>
                    </>
                  )
                }) : 
                <h1 className='search-prompt'>Search For plant </h1>
              }
            </section>
            {this.state.plants && <Plants plants={this.state.plants} favorites={this.state.favorites.map(fav => fav.id)} handleClick={this.handleClick}/>}
          </>)
        }}
        />
        <Route path='/favorites/'>
          <Favorites favorites={this.state.favorites} />
        </Route>
        <Route path='/plants/:id' 
          render={(props) =>
          <PlantInfo 
          {...props}
          />}
        />
      </section>
    )
  }
}

export default App;

App.propTypes = {
  plants: PropTypes.array,
  favorites: PropTypes.array,
  foundPlants: PropTypes.array,
  searchPlants: Proptypes.func,
  handleClick: Proptypes.func
}
 
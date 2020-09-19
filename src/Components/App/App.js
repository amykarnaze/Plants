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

import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      plants: [],
      favorites: [],
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
    console.log("+++", id)
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

  searchPlants = (search) => {
    const plantSearch = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()
    let findBooks = this.props.books.forEach(plant => {
      if (plant.title.includes(plantSearch)) {
        this.setState({
          foundPlant: [plant]
        })
      }
    })
    return findBooks;
  }

  render () {
    return (
      <section className="App-container">
        <Header />
        <section className="actual-plants-container">
          <h1>PLANTS!</h1>
          <Route exact path="/">
          <Search searchPlants={this.searchPlants}/>
          {this.state.plants && <Plants plants={this.state.plants} favorites={this.state.favorites.map(fav => fav.id)} handleClick={this.handleClick}/>}
          </Route>
        </section>
          <div className="favorites-here-container">
        <Route path='/favorites/'>
          <Favorites favorites={this.state.favorites} />
        </Route>
          </div>
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

 
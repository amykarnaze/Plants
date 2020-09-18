// import React from 'react';
// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import Plants from '../Plants/Plants'
import PlantInfo from '../PlantInfo/PlantInfo'
import Favorites from '../Favorites/Favorites'
import PlantCard from '../PlantCard/PlantCard'
import { fetchAllPlants } from '../../API.js'

import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // plants: [],
    }
    }
          // <Route path='/favorites/' component={Favorites}></Route>


  render () {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Plants}></Route>
      <Route path='/plants/:id' 
        render={(props) =>
        <PlantInfo 
        {...props}
        />}
      />
    </main>
  )
}
}

/* <Route path='/:plantId' render={({ match }) => {
      console.log({match: match})
        const plantClicked = this.state.plants.find((plant) => plant.id == parseInt(match.params.plant.id))
        return <PlantInfo plant={plantClicked} /> }}

      /> */

// {this.state.plants && <Plants plants={this.state.plants} />}


export default App;

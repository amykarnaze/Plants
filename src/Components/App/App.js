import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import Plants from '../Plants/Plants'
import PlantInfo from '../PlantInfo/PlantInfo'
import Favorites from '../Favorites/Favorites'
import Search from '../Search/Search'
import { formatPlants } from '../../CleanData'
import PropTypes from 'prop-types'
import { Route, Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      plants: [],
      foundPlants: []
      }
  }

  componentDidMount = async () => {
    await formatPlants()
    .then(data => this.setState({plants: data}))
    .catch(error => alert(error.message))
  }

  handleClick = async (event) => {
    const id = Number(event.target.id);
    const lovedPlant = await this.state.plants.find(plant => {
      return plant.id === id
    })
    let favoriteObj;
    favoriteObj = lovedPlant;
    favoriteObj.plantLoved = (!lovedPlant.plantLoved)

    let filteredPlants = this.state.plants.filter(plant => {
      return plant.id !== favoriteObj.id
    })
      filteredPlants.unshift(favoriteObj)
      this.setState({foundPlant: filteredPlants})
    }

  searchPlants = async (search) => {
    let findPlants = await this.state.plants.filter(plant => {
      if (plant.common_name) {
        return plant.common_name.toLowerCase().includes(search.toLowerCase())
      }
    })
    this.setState({foundPlants: findPlants})
    return findPlants;
  }

  findFavorites() {
    let favPlants = this.state.plants.filter(fav => fav.plantLoved === true)
    return favPlants
  }

  render () {
    return (
      <section className="App-container">
        <Header />
        <Route exact path={'/'} render={() => {
          return (<>
            <Search searchPlants={this.searchPlants} plants={this.state.plants}/>
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
            <h2>View these edible plants!</h2>
            {this.state.plants && <Plants plants={this.state.plants} handleClick={this.handleClick}/>}
          </>)
        }}
        />
        <Route path='/favorites/'>
          {this.state.plants && <Favorites favorites={this.findFavorites()} handleClick={this.handleClick} />}
        </Route>
        <Route path='/plants/:id' 
          render={(props) =>
          <PlantInfo {...props} />}
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
  searchPlants: PropTypes.func,
  handleClick: PropTypes.func
}
 
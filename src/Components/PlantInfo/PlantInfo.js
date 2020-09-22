import React from 'react'
import './PlantInfo.css'
import PropTypes from 'prop-types'
import { fetchPlantInfo } from '../../API.js'

class PlantInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Number(this.props.match.params.id),
      indvPlant: {}
    }
  }

  async componentDidMount() {
   await fetchPlantInfo(this.state.id)
    .then(data => this.setState({indvPlant: data.data}))
    .catch((err) => alert(err.message))
  }

  render() {
    return (
      <section className="Plant-Info">
        <section className="plant">
          <h2>Edible plant information and locations</h2>
          <h1>Common Name: {this.state.indvPlant.common_name}</h1>
          <h1>Plant family: {this.state.indvPlant.family}</h1>
          <h1>Found: {this.state.indvPlant.observations}</h1>
          <h1>Edible Part: {this.state.indvPlant.edible_part}</h1>
          <img className="plant-details-image" alt={this.state.indvPlant.common_name} src={this.state.indvPlant.image_url} />
        </section>
      </section>
    )
  }
}

export default PlantInfo;

PlantInfo.propTypes = {
  indvPlant: PropTypes.object,
  id: PropTypes.number
}
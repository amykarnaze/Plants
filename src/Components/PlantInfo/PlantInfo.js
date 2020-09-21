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
    // .then(data => console.log("INDV", data))
    .then(data => this.setState({indvPlant: data.data}))
    .catch((err) => alert(err.message))
  }

  render() {
    return (
      <section className="Plant-Info">
        <h1>Plant Info</h1>
        <img className="plant-details-image" alt={this.state.indvPlant.common_name} src={this.state.indvPlant.image_url} />
        <h1>Common Name:{this.state.indvPlant.common_name}</h1>
        <h1>Plant family:{this.state.indvPlant.family}</h1>
      </section>
    )
  }
}
{/* <h1>Plant family:{this.state.indvPlant.images.other[0]}</h1> */}

export default PlantInfo;

PlantInfo.propTypes = {
  indvPlant: PropTypes.object,
  id: PropTypes.number
}
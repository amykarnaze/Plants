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
      plants: []
    }
  }

  componentDidMount() {
    fetchAllPlants() 
    .then(data => this.setState({plants: data.data}))
    // .then(data => console.log("PLANTS", data.data))
    .catch(error => alert(error.message))
  }

  render() {
    let plantCards = this.displayPlants()
    return (
      <section>
        <h1>PLANTS!</h1>
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
import React, {Component} from 'react'
import apartments from '../store/Apartments'
import {Link} from 'react-router-dom'

class ApartmentDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      apartments2: apartments
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    let x = this.state.apartments2.find(function(listing){
        return listing.id === parseInt(id)
    })
    if(x){
      this.setState({apartmentId: id, individualApartment: x})
    }
  }
  render(){
        console.log(this.state.apartments2)
    return (
      <div>
      <Link to='/'>Home</Link>
      <h2>{this.state.individualApartment.address}<br/>
      {this.state.individualApartment.description}</h2>
      </div>
    )
  }
}


export default ApartmentDetails

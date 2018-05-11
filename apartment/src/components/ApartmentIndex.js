import React, {Component} from 'react';
import apartments from '../store/Apartments';
import {Link} from 'react-router-dom';

class ApartmentIndex extends Component{
  componentWillMount(){
    this.setState({apartments1: apartments})
  }
  render(){
    let list = this.state.apartments1.map(function(element){
      return(
        <li key={element.id}>
          <Link to={`/apartments/${element.id}`}>
            {element.address}
          </Link>
        </li>
      )
    })
    return(
      <ul>
        {list}
      </ul>
    );
  }
}

export default ApartmentIndex

import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import ApartmentIndex from './components/ApartmentIndex'
import ApartmentDetails from './components/ApartmentDetails'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <div>
            <Route exact path="/" component={ApartmentIndex} />
            <Route path='/apartments/:id' component={ApartmentDetails} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;

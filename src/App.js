import React, { Component } from 'react'
import Header from './Header';
import PokeIndex from './PokeIndex';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './PokeFiles/PokeDetails'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <div>
                Home
              </div>
            </Route>
            <Route path="/pokemon">
              <PokeIndex />
            </Route>
            <Route>
              <Details />
            </Route>
          </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
}
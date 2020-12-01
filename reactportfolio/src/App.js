import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './pages/about';
import HomePage from './pages/home';
import DevelopmentPage from './pages/development';
import ContactPage from './pages/contact';
import FooterPage from './components/footer';


class App extends Component {
  render() {
    return (

      <Router >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/development" component={DevelopmentPage} />
        <Route exact path='*' component={FooterPage} />

      </Router>
    );
  }
}



export default App;
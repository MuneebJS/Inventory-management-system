import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Signup from './containers/signup'
import Signin from './containers/signin'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {/*<Signup />
        <Signin />*/}
      </MuiThemeProvider>
    )
  }
}

export default App;

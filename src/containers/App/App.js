import React, { Component } from 'react';
import AppNav from '../AppNav';
import { BrowserRouter } from 'react-router-dom';
import '../../App.css';

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <AppNav/>
          </div>
        </BrowserRouter>
    );
  }

}

export default App;

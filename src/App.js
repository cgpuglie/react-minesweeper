import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid height={24} width={12} percentage={0.15} />
      </div>
    );
  }
}

export default App;

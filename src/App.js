import React from 'react';
import './App.css';
import Continents from './components/Continents'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Graphql Continents demo.</h3>
        <Continents />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        <Counter></Counter>
        <Cat></Cat>
    </div>
  );
}

export default App;

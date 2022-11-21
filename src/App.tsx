import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome'
import Header from './components/Header';
import { MainRoute } from './pages/MainRoute';

function App() {
  return (
    <div className="App">
      <MainRoute />
    </div>
  );
}

export default App;

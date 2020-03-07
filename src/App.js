import React, { Fragment } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import Routes from './router';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
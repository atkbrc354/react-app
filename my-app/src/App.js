import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './HomePage';
import BasketPage from './BasketPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
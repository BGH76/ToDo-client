import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/' exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

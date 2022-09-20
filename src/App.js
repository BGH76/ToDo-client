import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterAccount/RegisterAccount';
import LoginAccount from './LoginAccount/LoginAccount';
import ProductPage1 from './components/Product';
function App() {
  

  return (
    <>
      <Routes>
              <Route path="/product" element={<ProductPage1 />} />
              <Route path="/" element={<LoginAccount />} />
              <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterAccount/RegisterAccount';
import LoginAccount from './LoginAccount/LoginAccount';
import ProductPage from './ProductPage/ProductPage';
import CurtainFamilyPage from './CurtainFamilyPage/Product-curtainfamilyPage';
import FoldedCurtainPage from './FoldedCurtainPage/FoldedCurtainPage';
function App() {
  

  return (
    <>
      <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/login" element={<LoginAccount />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/curtainFamily" element={<CurtainFamilyPage />} />
              <Route path="/foldedcurtain" element={<FoldedCurtainPage />} />
      </Routes>
    </>
  )
}

export default App

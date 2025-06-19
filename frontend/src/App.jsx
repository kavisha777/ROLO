import { useState } from 'react'
import Home from './pages/Home.jsx'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard';
import SellerDashboard from './pages/SellerDashboard';
import UserDashboard from './pages/UserDashboard';



function App() {
  

  return (
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/seller-dashboard" element={<SellerDashboard />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  
  )
}

export default App

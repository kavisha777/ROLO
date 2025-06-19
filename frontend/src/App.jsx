import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginModal from './pages/LoginModals';
import SignupModal from './pages/SignupModals';
import React from 'react';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import SellerDashboard from './pages/dashboards/SellerDahboard';
import UserDashboard from './pages/dashboards/UserDashboard';

function App() {
  const location = useLocation();
  const background = location.state?.backgroundLocation || location;

  return (
    <>
      {/* Normal pages */}
      <Routes location={background}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>

      {/* Modal overlays */}
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
      </Routes>
    </>
  );
}

export default App;

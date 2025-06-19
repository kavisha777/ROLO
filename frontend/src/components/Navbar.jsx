import { useState } from 'react';
import LoginPopup from './LoginPopup';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-pink-600">ROLO</h1>
      <div className="space-x-4">
        <button onClick={() => setShowLogin(true)} className="bg-pink-600 text-white px-4 py-2 rounded">Login</button>
        <button onClick={() => setShowLogin(true)} className="bg-teal-600 text-white px-4 py-2 rounded">Signup</button>
      </div>
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </nav>
  );
};

export default Navbar;

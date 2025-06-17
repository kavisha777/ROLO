// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-primary">ROLO</h1>
      <div className="space-x-4">
        <a href="/signup" className="text-primary font-medium hover:underline">Sign Up</a>
        <a href="/login" className="text-primary font-medium hover:underline">Login</a>
      </div>
    </nav>
  );
}

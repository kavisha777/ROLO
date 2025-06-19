import React from 'react';

export default function SellerDashboard() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#D30C7B] mb-8 text-center">Seller Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Profile */}
        <div className="bg-[#FDE7F0] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">Seller Info</h2>
          <div className="space-y-2 text-[#2E2E2E]">
            <p><strong>Name:</strong> Kavishagini</p>
            <p><strong>Email:</strong> kaviyo@example.com</p>
            <p><strong>Status:</strong> Approved</p>
          </div>
        </div>

        {/* Right: Overview */}
        <div className="bg-[#FDE7F0] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">My Listings</h2>
          <ul className="space-y-3 text-[#2E2E2E]">
            <li>📦 Camera - 10 Rents</li>
            <li>📦 Projector - 6 Rents</li>
            <li>📦 Drone - 2 Rents</li>
            <li className="text-[#FF6F61]">+ Add New Item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

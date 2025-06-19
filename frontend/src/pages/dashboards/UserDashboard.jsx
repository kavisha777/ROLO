import React from 'react';

export default function UserDashboard() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#D30C7B] mb-8 text-center">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: My Info */}
        <div className="bg-[#FDE7F0] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">Profile</h2>
          <p className="text-[#2E2E2E]">Name: Yohendren</p>
          <p className="text-[#2E2E2E]">Email: kaviyo@example.com</p>
        </div>

        {/* Right: Rentals */}
        <div className="bg-[#FDE7F0] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">Your Rentals</h2>
          <ul className="space-y-2 text-[#2E2E2E]">
            <li>🎥 Camera (June 10–12) - <span className="text-green-600">Confirmed</span></li>
            <li>📽️ Projector (June 20–22) - <span className="text-yellow-600">Pending</span></li>
            <li>🚲 Bike (June 25–28) - <span className="text-red-600">Cancelled</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

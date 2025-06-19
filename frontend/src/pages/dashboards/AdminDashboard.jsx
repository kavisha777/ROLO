import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#D30C7B] mb-8 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Profile Info */}
        <div className="bg-[#FDE7F0] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">My Profile</h2>
          <div className="space-y-3 text-[#2E2E2E]">
            <p><strong>Name:</strong> Admin User</p>
            <p><strong>Email:</strong> admin@example.com</p>
            <p><strong>Role:</strong> Admin</p>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className="bg-[#FDE7F0] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">Management</h2>
          <ul className="space-y-3 text-[#2E2E2E]">
            <li>✔️ View All Users</li>
            <li>✔️ Approve Seller Requests</li>
            <li>✔️ View All Rentals</li>
            <li>✔️ Manage Categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

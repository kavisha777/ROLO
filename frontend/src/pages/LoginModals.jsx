// import { useNavigate } from 'react-router-dom';

// export default function LoginModal() {
//   const navigate = useNavigate();

//   const closeModal = () => navigate(-1); // Go back

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">Login</h2>
//         <form className="space-y-4">
//           <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
//           <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
//           <button type="submit" className="bg-[#D30C7B] text-white px-4 py-2 rounded w-full">Login</button>
//         </form>
//         <button onClick={closeModal} className="mt-4 text-sm text-gray-500 underline">Close</button>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const navigate = useNavigate();

  const closeModal = () => navigate(-1); // Go back to previous page

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#D30C7B' }}>Login to Rolo</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md"
            style={{ backgroundColor: '#D30C7B', color: '#FFF4F8' }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

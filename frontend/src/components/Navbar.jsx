// // import { Link } from 'react-router-dom';

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-white shadow p-4 flex justify-between items-center">
// //       <h1 className="text-2xl font-bold text-pink-600">ROLO</h1>
// //       <div className="space-x-4">
// //         <Link to="/login" className="text-gray-700 hover:text-pink-600">Login</Link>
// //         <Link to="/signup" className="text-gray-700 hover:text-pink-600">Signup</Link>
// //         <Link to="/claim" className="text-gray-700 hover:text-pink-600">Claim Your Space</Link>
// //       </div>
// //     </nav>
// //   );
// // }





// import React, { useState } from 'react';
// import { FiSearch, FiShoppingCart, FiChevronDown, FiUser } from 'react-icons/fi';
// import { MdOutlineCardGiftcard } from 'react-icons/md';
// import { FaRegHeart, FaStar } from 'react-icons/fa';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="w-full bg-white shadow-md">
//       <div className="flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <div className="text-blue-600 text-xl font-bold">
//           Flipkart<span className="text-yellow-400 text-sm"> Plus</span>
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center w-1/2 bg-gray-100 px-3 py-2 rounded">
//           <FiSearch className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search for Products, Brands and More"
//             className="bg-transparent w-full outline-none ml-2 text-sm"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-6 text-sm text-gray-700 relative">
//           {/* Login */}
//           <div
//             className="cursor-pointer flex items-center gap-1 relative"
//             onMouseEnter={() => setShowMenu(true)}
//             onMouseLeave={() => setShowMenu(false)}
//           >
//             <button className="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
//             <FiChevronDown />
//             {showMenu && (
//               <div className="absolute top-10 left-0 w-56 bg-white shadow-md border rounded z-10 p-3">
//                 <p className="text-sm text-gray-600">New customer? <span className="text-blue-500 cursor-pointer">Sign Up</span></p>
//                 <ul className="mt-2 space-y-2">
//                   <li className="flex items-center gap-2"><FiUser /> My Profile</li>
//                   <li className="flex items-center gap-2"><FaStar /> Flipkart Plus Zone</li>
//                   <li className="flex items-center gap-2"><FiShoppingCart /> Orders</li>
//                   <li className="flex items-center gap-2"><FaRegHeart /> Wishlist</li>
//                   <li className="flex items-center gap-2"><FaStar /> Rewards</li>
//                   <li className="flex items-center gap-2"><MdOutlineCardGiftcard /> Gift Cards</li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <div className="flex items-center gap-1 cursor-pointer">
//             <FiShoppingCart />
//             <span>Cart</span>
//           </div>

//           {/* Seller */}
//           <div className="cursor-pointer">Become a Seller</div>

//           {/* More (optional) */}
//           <div className="cursor-pointer">⋮</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;








import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiChevronDown, FiUser } from 'react-icons/fi';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import { FaRegHeart, FaStar } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full" style={{ backgroundColor: '#FDFDFD' }}>
      <div className="flex items-center justify-between px-6 py-3 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold" style={{ color: '#D30C7B' }}>
          Rolo<span className="text-sm" style={{ color: '#FF6F61' }}> ✦</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 px-3 py-2 rounded" style={{ backgroundColor: '#FDE7F0' }}>
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="bg-transparent w-full outline-none ml-2 text-sm"
            style={{ color: '#2E2E2E' }}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-sm relative" style={{ color: '#2E2E2E' }}>
          {/* Login */}
          <div
            className="cursor-pointer flex items-center gap-1 relative"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <button
              className="px-4 py-1 rounded"
              style={{ backgroundColor: '#D30C7B', color: '#FFF4F8' }}
            >
              Login
            </button>
            <FiChevronDown />
            {showMenu && (
              <div
                className="absolute top-10 left-0 w-56 shadow-md border rounded z-10 p-3"
                style={{ backgroundColor: '#CBA3D8', color: '#2E2E2E' }}
              >
                <p className="text-sm">
                  New customer? <span className="text-[#FF6F61] cursor-pointer">Sign Up</span>
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2"><FiUser /> My Profile</li>
                  <li className="flex items-center gap-2"><FaStar /> Rolo Plus Zone</li>
                  <li className="flex items-center gap-2"><FiShoppingCart /> Orders</li>
                  <li className="flex items-center gap-2"><FaRegHeart /> Wishlist</li>
                  <li className="flex items-center gap-2"><FaStar /> Rewards</li>
                  <li className="flex items-center gap-2"><MdOutlineCardGiftcard /> Gift Cards</li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 cursor-pointer">
            <FiShoppingCart />
            <span>Cart</span>
          </div>

          {/* Seller */}
          <div className="cursor-pointer">Become a Seller</div>

          {/* More */}
          <div className="cursor-pointer">⋮</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


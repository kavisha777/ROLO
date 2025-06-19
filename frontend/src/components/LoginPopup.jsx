// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPopup = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (email.includes('admin')) {
//       navigate('/admin-dashboard');
//     } else if (email.includes('seller')) {
//       navigate('/seller-dashboard');
//     } else {
//       navigate('/user-dashboard');
//     }
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded shadow w-96">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Enter email"
//           className="border w-full mb-4 p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button onClick={handleLogin} className="bg-pink-600 text-white w-full py-2 rounded mb-2">Login</button>
//         <button onClick={onClose} className="text-gray-600 w-full py-1">Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;














// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPopup = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       });

//       const { token, role } = response.data;

//       // Save token to localStorage if needed
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       // Navigate based on role
//       if (role === 'admin') {
//         navigate('/admin-dashboard');
//       } else if (role === 'seller') {
//         navigate('/seller-dashboard');
//       } else {
//         navigate('/user-dashboard');
//       }

//       onClose();
//     } catch (err) {
//       alert('Login failed. Please check your credentials.');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded shadow w-96">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Enter email"
//           className="border w-full mb-3 p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter password"
//           className="border w-full mb-4 p-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-pink-600 text-white w-full py-2 rounded mb-2"
//         >
//           Login
//         </button>
//         <button onClick={onClose} className="text-gray-600 w-full py-1">
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;









import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      const { token, user } = res.data;

      // Optional: save token in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);
      localStorage.setItem('userId', user.id);

      // Redirect based on actual user role
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'seller') {
        navigate('/seller-dashboard');
      } else {
        navigate('/user-dashboard');
      }

      onClose();
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="border w-full mb-2 p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="border w-full mb-4 p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-pink-600 text-white w-full py-2 rounded mb-2"
        >
          Login
        </button>
        <button onClick={onClose} className="text-gray-600 w-full py-1">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;

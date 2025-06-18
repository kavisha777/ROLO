import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginModal from './pages/LoginModals';
import SignupModal from './pages/SignupModals';

function App() {
  const location = useLocation();
  const background = location.state?.backgroundLocation || location;

  return (
    <>
      {/* Normal pages */}
      <Routes location={background}>
        <Route path="/" element={<Home />} />
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

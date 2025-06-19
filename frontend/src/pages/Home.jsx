import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to ROLO</h1>
        <p className="mt-2 text-gray-600">Your go-to place for renting items easily!</p>
      </div>
    </div>
  );
};

export default Home;

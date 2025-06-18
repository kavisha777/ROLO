import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopRentedItems from '../components/TopRentedItems';
import BecomeSellerGuide from '../components/BecomeSellerGuide';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-7xl mx-auto space-y-10">
        <TopRentedItems />
        <BecomeSellerGuide />
      </main>
      <Footer />
    </>
  );
}  
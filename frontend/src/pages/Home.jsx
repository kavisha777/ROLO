import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <>
    <Navbar />
<section className="py-10 px-6">
<h2 className="text-3xl font-semibold text-center mb-8">Top Rented Items</h2>
<div className="grid md:grid-cols-3 gap-6">
  {/* Item Cards */}
  {[1, 2, 3].map((item, i) => (
    <div key={i} className="bg-lightshade p-4 rounded-2xl shadow-md">
      <img src={`https://via.placeholder.com/300x200?text=Item+${item}`} alt="Item" className="rounded-xl mb-4" />
      <h3 className="text-xl font-semibold">Item {item}</h3>
      <p className="text-highlight mt-2">Rs. 500 / day</p>
    </div>
  ))}
</div>
</section>

{/* Become a Seller Section */}
<section className="py-10 px-6 bg-lightshade">
<h2 className="text-3xl font-semibold text-center mb-8">Become a Seller on ROLO</h2>
<div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
  <ol className="space-y-4 list-decimal list-inside">
    <li>Sign up or login to your account.</li>
    <li>Choose a seller package that fits your needs.</li>
    <li>Submit ID proof and payment.</li>
    <li>Your profile will be upgraded automatically.</li>
    <li>Start adding items to rent out!</li>
  </ol>
  <div className="space-y-4">
    <img src="/images/signup.png" alt="Signup step" className="rounded-xl shadow-md" />
    <img src="/images/choose-package.png" alt="Choose package step" className="rounded-xl shadow-md" />
    <img src="/images/id-payment.png" alt="Submit ID and payment" className="rounded-xl shadow-md" />
    <img src="/images/upgrade-profile.png" alt="Upgrade profile" className="rounded-xl shadow-md" />
    <img src="/images/add-items.png" alt="Add items" className="rounded-xl shadow-md" />
  </div>
</div>
</section>
<Footer/>

</>
    );
}



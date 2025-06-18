// src/components/BecomeSellerGuide.jsx
import { UserPlus, Upload, CreditCard, CheckCircle } from 'lucide-react';

export default function BecomeSellerGuide() {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-purple-600" />,
      title: '1. Create an Account',
      description: 'Sign up and verify your identity to join the platform.',
    },
    {
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: '2. Claim Your Space',
      description: 'Request a seller space and list your items for rent.',
    },
    {
      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
      title: '3. Set Prices & Rules',
      description: 'Define rates, deposit, and return conditions for your items.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: '4. Start Renting Out!',
      description: 'Approve rent requests and start earning safely.',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Become a Seller in 4 Simple Steps</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

const AddAmount = () => {
  const [amount, setAmount] = useState<number>(0);

  const handlePayment = () => {
    // Integrate Razorpay or any other payment gateway here
    console.log('Proceed to payment of amount:', amount);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Amount</h1>
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mt-4">
        <button onClick={handlePayment} className="bg-blue-600 text-white p-2 rounded-md">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default AddAmount;

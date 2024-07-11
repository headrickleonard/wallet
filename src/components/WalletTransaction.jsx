import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WalletTransaction = ({ onTransaction, balance }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      setError('Amount must be greater than zero');
      return;
    }
    setError('');
    onTransaction(Number(amount));
    setAmount(0);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="transaction p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-sm font-medium text-gray-700">Add Funds</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        placeholder="Enter amount"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="button mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Add Funds
      </button>
    </motion.form>
  );
};

export default WalletTransaction;

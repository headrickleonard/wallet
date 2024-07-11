import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AssetSelector from './AssetSelector';
import SwapChart from './SwapChart';

const Swap = ({ onSwap, balance }) => {
  const [fromAsset, setFromAsset] = useState('Asset A');
  const [toAsset, setToAsset] = useState('Asset B');
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(1);
  const [error, setError] = useState('');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchRate(fromAsset, toAsset);
    fetchChartData(fromAsset, toAsset);
  }, [fromAsset, toAsset]);

  const fetchRate = async (from, to) => {
    // I will replace with real API call to fetch swap rate from oracles
    const fetchedRate = 1; // Dummy data
    setRate(fetchedRate);
  };

  const fetchChartData = async (from, to) => {
    // I will replace with real API call to fetch historical price data
    const historicalData = [
      { date: '2024-07-01', price: 100 },
      { date: '2024-07-02', price: 105 },
      { date: '2024-07-03', price: 110 },
      { date: '2024-07-04', price: 115 },
      { date: '2024-07-05', price: 120 },
    ]; // Dummy data
    setChartData(historicalData);
  };

  const handleSwap = () => {
    if (amount <= 0) {
      setError('Amount must be greater than zero');
      return;
    }
    if (amount > balance[fromAsset]) {
      setError(`Insufficient balance in ${fromAsset}`);
      return;
    }
    setError('');
    const swapAmount = amount * rate;
    onSwap(fromAsset, toAsset, amount, swapAmount);
  };

  return (
    <motion.div
      className="swap p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-900">Swap Assets</h2>
      <div>
        <p className="text-gray-700">From:</p>
        <AssetSelector selectedAsset={fromAsset} onSelect={setFromAsset} />
      </div>
      <div>
        <p className="text-gray-700">To:</p>
        <AssetSelector selectedAsset={toAsset} onSelect={setToAsset} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          placeholder="Enter amount"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleSwap}
        className="button mt-2 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
      >
        Swap
      </button>
      <SwapChart data={chartData} />
    </motion.div>
  );
};

export default Swap;

import React, { useState, useEffect } from 'react';
import WalletBalance from './WalletBalance';
import WalletTransaction from './WalletTransaction';
import Swap from './Swap';
import RecentTransactions from './RecentTransactions';

const Wallet = () => {
  const [balance, setBalance] = useState({
    'Asset A': 100,
    'Asset B': 50,
    'Asset C': 75,
    'Asset D': 200,
  });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    // real API call
    const initialBalance = {
      'Asset A': 100,
      'Asset B': 50,
      'Asset C': 75,
      'Asset D': 200,
    }; // Dummy data
    setBalance(initialBalance);
  };

  const handleTransaction = (amount) => {
    const newTransaction = {
      type: 'Add Funds',
      amount: amount,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransaction]);
    setBalance({ ...balance, 'Asset A': balance['Asset A'] + amount });
  };

  const handleSwap = (fromAsset, toAsset, fromAmount, toAmount) => {
    const newTransaction = {
      type: `Swap ${fromAsset} to ${toAsset}`,
      amount: -fromAmount,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransaction]);
    setBalance({
      ...balance,
      [fromAsset]: balance[fromAsset] - fromAmount,
      [toAsset]: balance[toAsset] + toAmount,
    });
  };

  return (
    <div className="wallet p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md space-y-6 my-8">
      <WalletBalance balance={balance} />
      <WalletTransaction onTransaction={handleTransaction} balance={balance} />
      <Swap onSwap={handleSwap} balance={balance} />
      <RecentTransactions transactions={transactions} />
    </div>
  );
};

export default Wallet;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RecentTransactions = ({ transactions }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedTransactions = showAll ? transactions : transactions.slice(0, 5);

  return (
    <motion.div
      className="recent-transactions p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No recent transactions</p>
      ) : (
        <>
          {displayedTransactions.map((transaction, index) => (
            <div key={index} className="transaction-card p-4 bg-gray-50 rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="text-gray-700">{transaction.type}</div>
                <div className={`text-${transaction.amount > 0 ? 'green' : 'red'}-500`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </div>
          ))}
          {transactions.length > 5 && (
            <button
              onClick={toggleShowAll}
              className="w-full text-center text-blue-500 mt-2"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          )}
        </>
      )}
    </motion.div>
  );
};

export default RecentTransactions;

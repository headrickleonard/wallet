import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCoins, faGem, faCrown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const assetIcons = {
  'Asset A': faDollarSign,
  'Asset B': faCoins,
  'Asset C': faGem,
  'Asset D': faCrown,
};

const WalletBalance = ({ balance }) => {
  return (
    <motion.div
      className="balance text-center text-2xl p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-900">Current Balance</h2>
      {Object.keys(balance).map((asset) => (
        <div key={asset} className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={assetIcons[asset]} className="text-green-500" />
            <span>{asset}</span>
          </div>
          <span className="text-green-500">${balance[asset].toFixed(2)}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default WalletBalance;

import React from 'react';

const assets = ['Asset A', 'Asset B', 'Asset C', 'Asset D'];

const AssetSelector = ({ selectedAsset, onSelect }) => {
  return (
    <select
      value={selectedAsset}
      onChange={(e) => onSelect(e.target.value)}
      className="asset-selector w-full border p-2 rounded"
    >
      {assets.map((asset, index) => (
        <option key={index} value={asset}>
          {asset}
        </option>
      ))}
    </select>
  );
};

export default AssetSelector;

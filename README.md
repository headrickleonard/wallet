# P2P Asset Swap Wallet

## Introduction

This is a simple wallet application built with React and Tailwind CSS that facilitates peer-to-peer (P2P) asset swaps. The wallet supports swapping at least four different assets by default and incorporates a pricing mechanism (oracles) to ensure optimal swaps.

## Features

- Display current balance
- Handle transactions (add/subtract funds)
- P2P asset swaps for four different assets
- Real-time rate fetching using a mock API
- Historical price data visualization using charts
- Recent transactions display with expandable view

## Technologies Used

- React
- Tailwind CSS
- Chart.js with `react-chartjs-2`
- Framer Motion

## Setup Instructions

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-link]
   cd wallet-app

   ```

2. Install dependencies for the React app:

```bash
npm install
```

3. Start the React application:
```bash
npm run dev
```
4. Open your browser and navigate to http://localhost:5173 to see the wallet in action.




## Usage
### Adding funds

1. Enter the amount to add in the "Add Funds" section.
2. Click "Add Funds".   

### Swapping Assets
1. Select the asset you want to swap from.
2. Select the asset you want to swap to.
3. Enter the amount to swap.
4. Click "Swap".     


### Viewing Recent Transactions
* The "Recent Transactions" section shows the 5 most recent transactions.
* Click "Show More" to view all transactions or "Show Less" to collapse the list.


## Customization
### Adding New Assets

To add new assets, update the assets array in `AssetSelector.jsx`

```bash
const assets = ['Asset A', 'Asset B', 'Asset C', 'Asset D'];
```

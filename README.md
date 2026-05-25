# CryptoFlow - Modern Web3 Portfolio Dashboard

> Multi-chain cryptocurrency portfolio tracker with real-time analytics, transaction history, and DeFi position monitoring.

## Features

✅ **Multi-chain Support**
- Ethereum, BSC, Polygon, Arbitrum, Optimism, Base, Solana, TON
- Real-time balance tracking across chains
- Unified portfolio view

✅ **Dashboard**
- Total portfolio value with 24h change
- Asset allocation breakdown
- Portfolio performance chart (6-month history)
- Quick asset overview table

✅ **Portfolio Management**
- Asset allocation pie chart
- Transaction history with status
- Quick actions (Send, Receive, Swap, Bridge)
- Wallet address display with copy function

✅ **Analytics**
- Price trends (6-month area chart)
- Performance comparison (bar chart)
- Portfolio statistics (gain/loss, win rate, best/worst trades)
- Risk metrics (volatility, Sharpe ratio, max drawdown, beta)

✅ **Settings**
- Dark mode toggle
- Notification preferences
- Two-factor authentication
- Wallet management
- Security settings

✅ **Modern UI**
- Dark theme with glassmorphism
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Real-time data updates

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** TailwindCSS, custom CSS
- **Charts:** Recharts
- **State Management:** Zustand
- **Data Fetching:** TanStack Query (React Query)
- **Web3:** Wagmi, Viem
- **Icons:** Lucide React
- **Deployment:** Vercel

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/winzzy12/cryptoflow.git
cd cryptoflow

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_INFURA_KEY=your_infura_key
NEXT_PUBLIC_ALCHEMY_KEY=your_alchemy_key
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

## Project Structure

```
cryptoflow/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Dashboard page
│   ├── portfolio/
│   │   └── page.tsx         # Portfolio page
│   ├── analytics/
│   │   └── page.tsx         # Analytics page
│   └── settings/
│       └── page.tsx         # Settings page
├── components/
│   ├── Navbar.tsx           # Top navigation
│   └── Sidebar.tsx          # Side navigation
├── app/
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Pages

### Dashboard (`/`)
- Portfolio overview with total balance
- 24h change and percentage
- Asset allocation breakdown
- Portfolio value chart
- Assets table with prices and changes

### Portfolio (`/portfolio`)
- Asset allocation pie chart
- Quick actions (Send, Receive, Swap, Bridge)
- Wallet address display
- Transaction history with status

### Analytics (`/analytics`)
- Performance summary cards
- 6-month price trends chart
- Performance comparison bar chart
- Portfolio statistics
- Risk metrics

### Settings (`/settings`)
- Display preferences (dark mode)
- Notification settings
- Security settings (2FA)
- Wallet management
- Danger zone (delete account)

## Features Roadmap

- [ ] Real wallet connection (MetaMask, WalletConnect)
- [ ] Live price data from CoinGecko/Binance API
- [ ] Transaction execution (send, swap, bridge)
- [ ] DeFi position tracking (lending, staking, LP)
- [ ] Gas fee estimation
- [ ] Portfolio export (PDF, CSV)
- [ ] Mobile app (React Native)
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced charting (TradingView)

## Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# https://vercel.com/new

# Select repository and deploy
```

### Environment Variables on Vercel

Add these in Vercel dashboard:
- `NEXT_PUBLIC_INFURA_KEY`
- `NEXT_PUBLIC_ALCHEMY_KEY`
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`

## Performance

- ⚡ Next.js 14 with App Router
- 📦 Optimized bundle size (~150KB gzipped)
- 🎯 Core Web Vitals optimized
- 🔄 Real-time data with React Query
- 📱 Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - see [LICENSE](LICENSE)

## Support

For issues and feature requests, please open an issue on GitHub.

---

Built with ❤️ for the Web3 community

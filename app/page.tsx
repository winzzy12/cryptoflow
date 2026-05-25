'use client'

import { TrendingUp, TrendingDown, Wallet, DollarSign } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const portfolioData = [
  { date: 'Jan', value: 45000 },
  { date: 'Feb', value: 52000 },
  { date: 'Mar', value: 48000 },
  { date: 'Apr', value: 61000 },
  { date: 'May', value: 55000 },
  { date: 'Jun', value: 67000 },
]

const assets = [
  { symbol: 'ETH', name: 'Ethereum', balance: 2.5, price: 3200, change: 12.5 },
  { symbol: 'BTC', name: 'Bitcoin', balance: 0.15, price: 65000, change: 8.3 },
  { symbol: 'USDC', name: 'USD Coin', balance: 5000, price: 1, change: 0 },
  { symbol: 'SOL', name: 'Solana', balance: 50, price: 140, change: -5.2 },
]

export default function Dashboard() {
  const totalValue = 67000
  const dayChange = 2100
  const dayChangePercent = 3.2

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Balance */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-400 text-sm">Total Balance</p>
              <p className="text-3xl font-bold text-dark-100 mt-2">${totalValue.toLocaleString()}</p>
              <p className="text-crypto-success text-sm mt-1">+${dayChange.toLocaleString()} ({dayChangePercent}%)</p>
            </div>
            <Wallet className="w-12 h-12 text-crypto-primary/20" />
          </div>
        </div>

        {/* 24h Change */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-400 text-sm">24h Change</p>
              <p className="text-3xl font-bold text-crypto-success mt-2">${dayChange.toLocaleString()}</p>
              <p className="text-dark-400 text-sm mt-1">+{dayChangePercent}%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-crypto-success/20" />
          </div>
        </div>

        {/* Assets */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-400 text-sm">Total Assets</p>
              <p className="text-3xl font-bold text-dark-100 mt-2">{assets.length}</p>
              <p className="text-dark-400 text-sm mt-1">Across 3 chains</p>
            </div>
            <DollarSign className="w-12 h-12 text-crypto-primary/20" />
          </div>
        </div>

        {/* Best Performer */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-400 text-sm">Best Performer</p>
              <p className="text-3xl font-bold text-dark-100 mt-2">ETH</p>
              <p className="text-crypto-success text-sm mt-1">+12.5%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-crypto-success/20" />
          </div>
        </div>
      </div>

      {/* Portfolio Chart */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Portfolio Value</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#f3f4f6' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: '#6366f1', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Assets Table */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Your Assets</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-3 px-4 text-dark-400 font-semibold">Asset</th>
                <th className="text-right py-3 px-4 text-dark-400 font-semibold">Balance</th>
                <th className="text-right py-3 px-4 text-dark-400 font-semibold">Price</th>
                <th className="text-right py-3 px-4 text-dark-400 font-semibold">Value</th>
                <th className="text-right py-3 px-4 text-dark-400 font-semibold">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.symbol} className="border-b border-dark-700/50 hover:bg-dark-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-dark-100">{asset.symbol}</p>
                      <p className="text-sm text-dark-400">{asset.name}</p>
                    </div>
                  </td>
                  <td className="text-right py-4 px-4 text-dark-100">{asset.balance.toLocaleString()}</td>
                  <td className="text-right py-4 px-4 text-dark-100">${asset.price.toLocaleString()}</td>
                  <td className="text-right py-4 px-4 text-dark-100 font-semibold">
                    ${(asset.balance * asset.price).toLocaleString()}
                  </td>
                  <td className="text-right py-4 px-4">
                    <span className={`flex items-center justify-end space-x-1 ${
                      asset.change >= 0 ? 'text-crypto-success' : 'text-crypto-danger'
                    }`}>
                      {asset.change >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>{Math.abs(asset.change)}%</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

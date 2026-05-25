'use client'

import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'

const priceData = [
  { date: 'Jan', ETH: 2800, BTC: 62000, SOL: 120 },
  { date: 'Feb', ETH: 3100, BTC: 64000, SOL: 135 },
  { date: 'Mar', ETH: 2900, BTC: 61000, SOL: 125 },
  { date: 'Apr', ETH: 3400, BTC: 68000, SOL: 145 },
  { date: 'May', ETH: 3200, BTC: 65000, SOL: 140 },
  { date: 'Jun', ETH: 3500, BTC: 70000, SOL: 155 },
]

const performanceData = [
  { asset: 'ETH', return: 25.3, apy: 4.2 },
  { asset: 'BTC', return: 12.8, apy: 0 },
  { asset: 'SOL', return: 28.5, apy: 6.5 },
  { asset: 'USDC', return: 0, apy: 5.0 },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-dark-100">Analytics</h1>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {performanceData.map((item) => (
          <div key={item.asset} className="card">
            <p className="text-dark-400 text-sm">{item.asset}</p>
            <div className="flex items-end justify-between mt-3">
              <div>
                <p className="text-2xl font-bold text-dark-100">{item.return}%</p>
                <p className="text-xs text-dark-400 mt-1">Return</p>
              </div>
              {item.return >= 0 ? (
                <TrendingUp className="w-8 h-8 text-crypto-success" />
              ) : (
                <TrendingDown className="w-8 h-8 text-crypto-danger" />
              )}
            </div>
            <p className="text-sm text-crypto-primary mt-3">APY: {item.apy}%</p>
          </div>
        ))}
      </div>

      {/* Price Chart */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Price Trends (6 Months)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={priceData}>
            <defs>
              <linearGradient id="colorETH" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Legend />
            <Area
              type="monotone"
              dataKey="ETH"
              stroke="#6366f1"
              fillOpacity={1}
              fill="url(#colorETH)"
            />
            <Area
              type="monotone"
              dataKey="BTC"
              stroke="#8b5cf6"
              fillOpacity={1}
              fill="url(#colorBTC)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Comparison */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Performance Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="asset" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#f3f4f6' }}
            />
            <Legend />
            <Bar dataKey="return" fill="#6366f1" name="Return %" />
            <Bar dataKey="apy" fill="#10b981" name="APY %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-bold text-dark-100 mb-4">Portfolio Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-dark-400">Total Gain/Loss</span>
              <span className="font-semibold text-crypto-success">+$8,450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Win Rate</span>
              <span className="font-semibold text-dark-100">75%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Best Trade</span>
              <span className="font-semibold text-crypto-success">+$2,100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Worst Trade</span>
              <span className="font-semibold text-crypto-danger">-$450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Avg Trade</span>
              <span className="font-semibold text-dark-100">+$340</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold text-dark-100 mb-4">Risk Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-dark-400">Volatility</span>
              <span className="font-semibold text-dark-100">24.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Sharpe Ratio</span>
              <span className="font-semibold text-dark-100">1.85</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Max Drawdown</span>
              <span className="font-semibold text-crypto-danger">-12.3%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Correlation</span>
              <span className="font-semibold text-dark-100">0.72</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Beta</span>
              <span className="font-semibold text-dark-100">1.15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

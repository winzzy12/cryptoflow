'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Send, Copy } from 'lucide-react'

const portfolioBreakdown = [
  { name: 'Ethereum', value: 35, color: '#6366f1' },
  { name: 'Bitcoin', value: 25, color: '#8b5cf6' },
  { name: 'Stablecoins', value: 30, color: '#10b981' },
  { name: 'Solana', value: 10, color: '#f59e0b' },
]

const transactions = [
  { id: 1, type: 'Received', asset: 'ETH', amount: 0.5, from: '0x1234...5678', date: '2 hours ago', status: 'confirmed' },
  { id: 2, type: 'Sent', asset: 'USDC', amount: 1000, to: '0x9876...5432', date: '1 day ago', status: 'confirmed' },
  { id: 3, type: 'Swap', asset: 'ETH → SOL', amount: 2, date: '3 days ago', status: 'confirmed' },
  { id: 4, type: 'Received', asset: 'BTC', amount: 0.05, from: '0xabcd...ef01', date: '1 week ago', status: 'confirmed' },
]

export default function Portfolio() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-dark-100">Portfolio</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Breakdown */}
        <div className="lg:col-span-1 card">
          <h2 className="text-xl font-bold text-dark-100 mb-6">Asset Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="card">
            <h2 className="text-xl font-bold text-dark-100 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Copy className="w-4 h-4" />
                <span>Receive</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <span>Swap</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <span>Bridge</span>
              </button>
            </div>
          </div>

          {/* Wallet Address */}
          <div className="card">
            <h3 className="text-sm text-dark-400 mb-2">Your Address</h3>
            <div className="flex items-center space-x-2 bg-dark-900 rounded-lg p-3">
              <code className="text-sm text-crypto-primary flex-1">0x1234567890abcdef1234567890abcdef12345678</code>
              <button className="p-2 hover:bg-dark-800 rounded transition-colors">
                <Copy className="w-4 h-4 text-dark-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Transaction History</h2>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors">
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-crypto-primary/20 flex items-center justify-center">
                  <Send className="w-5 h-5 text-crypto-primary" />
                </div>
                <div>
                  <p className="font-semibold text-dark-100">{tx.type}</p>
                  <p className="text-sm text-dark-400">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-dark-100">{tx.amount} {tx.asset}</p>
                <span className="badge-success text-xs">{tx.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
